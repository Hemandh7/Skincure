let baseURL = "https://639869fbfe03352a94d003fc.mockapi.io";

async function fetchData() {
  try {
    let response = await fetch(`${baseURL}/products?p=1&l=9`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      let product_data = await response.json();
      // console.log(product_data);
      renderData(product_data);
    } else {
      console.dir(response);
    }
  } catch (error) {
    console.log(error);
  }

}
// onload -------------------->
window.addEventListener("load", () => {
  fetchData();
});

// ------------------------------------------> rendering part
// willl make arr of cards
function getCard(data) {
  let formatedData = data.map((ele) => {
    return `
                <div class="product-cards" id ="${ele.id}" >
                <div class=" product-cards-fav">
                    <div>
                    <lord-icon
                    src="https://cdn.lordicon.com/pnhskdva.json"
                    trigger="hover"
                    style="width:40px;height:40px">
                    </lord-icon>
                    </div>
                </div>
                <div class="product-image-div">
                    <img src=${ele.image}
                        alt="${ele.title}">
                </div>
                <div class=" product-title">
                    <p>${ele.title}</p>
                </div>
                <div class="product-discount-div">
                    <button class="product-discount-button">25% off with code RREPLAY</button>
                </div>
                <div class="product-price">
                    <span class="product-price">${ele.price}</span>
                </div>
                <div class="product-button">
                    <button class="productQuickbuy">Quick Buy</button>
                </div>
            </div>


        `;
  });
  return formatedData.join("");
}
// /will renderData data
function renderData(data) {
  let product_container = document.querySelector(".product-container-reder");
  product_container.innerHTML = getCard(data);
}


// --------------------------> sorting feature
let sorting_btn = document.querySelector('#sort-by')
sorting_btn.addEventListener('change', () => {
  console.log(sorting_btn.value);
  if (sorting_btn.value === 'default') fetchData();

  if (sorting_btn.value === 'price-ases') {
    let sort_url = 'https://639869fbfe03352a94d003fc.mockapi.io/products?sortBy=price&order=aesc&p=1&l=24'
    fetchSortedData(sort_url);
  };
  if (sorting_btn.value === 'price-dses') {
    let sort_url = 'https://639869fbfe03352a94d003fc.mockapi.io/products?sortBy=price&order=desc&p=1&l=24'
    fetchSortedData(sort_url);
  }
  if (sorting_btn.value === 'atoz') {
    let sort_url = 'https://639869fbfe03352a94d003fc.mockapi.io/products?sortBy=title&order=aesc&p=1&l=24'
    fetchSortedData(sort_url);
  }
  if (sorting_btn.value === 'ztoa') {
    let sort_url = 'https://639869fbfe03352a94d003fc.mockapi.io/products?sortBy=title&order=desc&p=1&l=24'
    fetchSortedData(sort_url);
  }
})
async function fetchSortedData(sort_url) {
  try {
    let response = await fetch(`${sort_url}`, {

      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      let product_data = await response.json();
      console.log(product_data);
      renderData(product_data);
    } else {
      console.dir(response);
    }
  } catch (error) {
    console.log(error);
  }

}
