let baseURL = "https://639869fbfe03352a94d003fc.mockapi.io";

async function fetchData() {
  try {
    let response = await fetch(`${baseURL}/products`, {
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
                        <lord-icon src="https://cdn.lordicon.com/hqrgkqvs.json" trigger="hover"
                            colors=":#000000,primary:#000000,secondary:#ebe6ef" style="width:32px;height:32px">
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
  let product_container = document.querySelector(".right-product-container");
  product_container.innerHTML = getCard(data);
}
