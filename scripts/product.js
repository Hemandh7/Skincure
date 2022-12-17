let baseURL = "https://639869fbfe03352a94d003fc.mockapi.io";
import { brands_function } from "../resources/refine.js";

// ------------------> html elements
let popHandler = document.querySelector(".pop-handler");

document.querySelector(".brands").innerHTML = brands_function();

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
                    class="fav-btn"
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
                    <span class="product-price">$${ele.price}</span>
                </div>
                <div class="product-button">
                    <button class="productQuickbuy">Quick Buy</button>
                </div>
                <div class="product-reviews">
                        <p>⭐⭐⭐⭐&#160(234)</p>
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

  // fetching all fav button after data displayed on DOM

  let all_fav_btns = document.querySelectorAll(".fav-btn");
  for (let btn of all_fav_btns) {
    btn.addEventListener("click", (event) => {
      let product_id = event.path[3].id;
      console.log(product_id);
      add_to_fav(product_id);
    });
  }
  // -------------------------> filtering data
  // all input tag
  let all_input = document.querySelectorAll("input");
  for (let btn of all_input) {
    btn.addEventListener("click", (event) => {
      console.log(event.path[1].innerText);
      let sort_url =
        "https://639869fbfe03352a94d003fc.mockapi.io/products?sortBy=price&order=aesc&p=1&l=24";
      fetchSortedData(sort_url);
    });
  }
  // ---------------------> productQuickbuy
  let all_quick_btn = document.querySelectorAll(".productQuickbuy");
  for (let btn of all_quick_btn) {
    btn.addEventListener("click", (event) => {
      let product_id = event.path[2].id;
      let product = getProduct(product_id);

      product.then((data) => {
        makePopUp(data.image, data.title, data.price);
      });
    });
  }
  console.log(all_quick_btn);
}
// -----------------------> redicrecting cart and con-shopping-btn
function makePopUp(img, title, price) {
  popHandler.innerHTML = `
  <div class="quickbuy-popup red popup-scroll" id="quickbuy-popup">
  <div class="quickbuy-popup-header">
      <h3>Added to Your Cart</h3>
      <svg class="x-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
              d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
      </svg>
  </div>
  <hr>
  <div class="quickbuy-popup-body">
      <div class="whathehell" >
          <div class=" quckbuy-img">
              <img src="${img}" alt="${title}">
          </div>
          <div class="quckbuy-des">
              <h5>${title}</h5>
              <p>Quantity 1</p>
              <h4>$${price}</h4>
          </div>
      </div>

      <hr>
      <div class="cart-deatils">
          <div>
              <h5>Subtotal:12</h5>
                 <h6> (12 items in your cart)</h6>
          </div>
          <div>
              TOTAL : $1198
          </div>
      </div>
      <hr>
      <div class=" quckbuy-btn padding-class">
          <div class="quckbuy-shoping-btn padding-class">
              <button type="button" class="btn btn-outline-info con-shopping btn-lg btn-block">CONTINUE SHOPPING</button>
          </div>
          <div class="quckbuy-cart-btn padding-class">
              <button type="button" class="btn pop-productQuickbuy  view-cart btn-lg btn-block">VIEW CART</button>
          </div>
      </div>
      <hr>
      <div class="pop-image">
          <img src="../images/quick-pop-up-img.png" alt="">
      </div>
  </div>
</div>`;
}

// -----------------------> redicrecting cart and con-shopping-btn
// document.querySelector('.con-shopping').addEventListener('click',()=>window.location.href = '../routes/product.html')
// document.querySelector('.view-cart').addEventListener('click',()=>window.location.href = '../routes/cart.html')

// -------------------------> add to favrite
let add_to_fav = async (product_id) => {
  console.log(product_id);
  try {
    let product = await getProduct(product_id);
    // product = await JSON.stringify(product);
    console.log(product);

    let add_to_fav_res = await fetch(`${baseURL}/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    // let  res = await (add_to_fav.json())
    console.log(res);
  } catch (error) {
    alert("Trouble in adding product to cart");
  }
};

// get one product
let getProduct = async (id) => {
  try {
    let product_res = await fetch(`${baseURL}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "applicaton/json",
      },
    });
    if (product_res.ok) {
      let product = await product_res.json();
      return product;
    } else {
      alert("alert in getting the data");
    }
  } catch (error) {
    console.log(error);
  }
};

// --------------------------> sorting feature
let sorting_btn = document.querySelector("#sort-by");
sorting_btn.addEventListener("change", () => {
  console.log(sorting_btn.value);
  if (sorting_btn.value === "default") fetchData();

  if (sorting_btn.value === "price-ases") {
    let sort_url =
      "https://639869fbfe03352a94d003fc.mockapi.io/products?sortBy=price&order=aesc&p=1&l=24";
    fetchSortedData(sort_url);
  }
  if (sorting_btn.value === "price-dses") {
    let sort_url =
      "https://639869fbfe03352a94d003fc.mockapi.io/products?sortBy=price&order=desc&p=1&l=24";
    fetchSortedData(sort_url);
  }
  if (sorting_btn.value === "atoz") {
    let sort_url =
      "https://639869fbfe03352a94d003fc.mockapi.io/products?sortBy=title&order=aesc&p=1&l=24";
    fetchSortedData(sort_url);
  }
  if (sorting_btn.value === "ztoa") {
    let sort_url =
      "https://639869fbfe03352a94d003fc.mockapi.io/products?sortBy=title&order=desc&p=1&l=24";
    fetchSortedData(sort_url);
  }
});
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
