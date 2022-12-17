let baseURL = 'https://639869fbfe03352a94d003fc.mockapi.io'

async function fetchData(){
    try {
        let response = await fetch(`${baseURL}/cart`,{
            method : "GET",
            headers : {
                "Content-Type":"application/json"
            }
        })
        if(response.ok){
            let product_data = await response.json();
            console.log(product_data);
            renderData(product_data)
            renderData2(product_data)
        }else{
            console.dir(response);
        }
    }
    catch (error){
        console.log(error);
    }
}
window.addEventListener("load",()=>{
    fetchData();
});

function getItems(data){
    let cartData=data.map((el,i)=>{
        while(i<3){
        return `
                <div id="cart-cards" id ="${el.id}" >
                <div id=" cart-cards-fav">
                    <div>
                        <lord-icon src="https://cdn.lordicon.com/hqrgkqvs.json" trigger="hover"
                            colors=":#000000,primary:#000000,secondary:#ebe6ef" style="width:32px;height:32px">
                        </lord-icon>
                    </div>
                </div>
                <div id="cart-image-div">
                    <img src=${el.image}
                        alt="${el.title}">
                </div>
                <div div=" cart-title">
                    <p>${el.title}</p>
                </div>
                <div id="cart-discount-div">
                    <button class="product-discount-button">25% off with code RREPLAY</button>
                </div>
                <div id="cart-price">
                    <span id="cart-price">${el.price}</span>
                </div>
                <div id="cart-button">
                    <button class="productQuickbuy">Quick Buy</button>
                </div>
            </div>


        `;
        };
    });
    return cartData.join("");
}
function renderData(data){
    let recomend_container = document.getElementById('cart-recomend')
    recomend_container.innerHTML = getItems(data)
}

let defaultDiv = document.querySelector("#default");
let cartDiv = document.querySelector("#cartContainer");
let cartPrice = JSON.parse(localStorage.getItem("cartPrice")) || {};

// Get cart data function for getting the cart items from server
const getCart = async () => {
    try {
      let res = await fetch(`${baseURL}/cart`,{
        method : "GET",
        headers : {
            "Content-Type":"application/json"
        }
      });
      if(res.ok){
        let data = await res.json();
        console.log(data);
        appendCart(data)
    }else{
        console.dir(res);
    }
    } catch (err) {
      console.log(err);
    }
  };
  getCart();
  
  // Append Cart function to append cart data from server
  let subtotal = 0;
  const appendCart = (arr) => {
    let pContainer = document.querySelector("#productContainer");
    pContainer.innerHTML = null;
  
    arr.forEach((el) => {
      let prodDiv = document.createElement("div");
      prodDiv.setAttribute("id", "pCartdiv");
      let prodImgDiv = document.createElement("div");
      prodImgDiv.setAttribute("id", "pCartImg");
      let prodImg = document.createElement("img");
      prodImg.src = el.image;
      prodImgDiv.append(prodImg);
      let prodDescDiv = document.createElement("div");
      prodDescDiv.setAttribute("id", "pDesc");
      let prodName = document.createElement("p");
      prodName.innerText = el.title;
      let wishbutton=document.createElement("button");
      wishbutton.setAttribute('id',"wishbtn")
      wishbutton.innerHTML=`
      `
      prodDescDiv.append(prodName,wishbutton);
        let prodPriceDiv = document.createElement("div");
       prodPriceDiv.setAttribute("id", "pPriceDiv");
      let prodPrice = document.createElement("p");
      prodPrice.setAttribute("type", "number");
      prodPrice.innerText =el.price;
      //console.log("price:",el.price);
  
      
      prodPriceDiv.append(prodPrice);
      let quantdiv = document.createElement("div");
      quantdiv.setAttribute("id", "pQuantDiv");
      let prodquant = document.createElement("input");
      prodquant.setAttribute("id", "prodQuant");
      prodquant.setAttribute("type", "number");
      prodquant.setAttribute("min", "1");
      prodquant.setAttribute("value", "1");
     
      
    let pqaunt = document.createElement("p");
      pqaunt.innerText = "Quantity";
      quantdiv.append(pqaunt, prodquant);
      prodquant.addEventListener('click',()=>{
        subtotal=subtotal+(Number(el.price) * Number(prodquant.value))
        stPrice.innerText = subtotal
        console.log(prodquant.value,subtotal);
        let totalPrice = document.querySelector("#tprice");
      totalPrice.innerText = subtotal + 24;
        
      })
      //console.log("subtotal:", subtotal);
      let removeBtn = document.createElement("button");
      removeBtn.innerHTML =
        '<img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="">';
      removeBtn.setAttribute("class", "removeBtn");
      removeBtn.addEventListener("click", () => {
        removeProduct(el);
      });
      prodDiv.append(prodImgDiv, prodDescDiv, prodPriceDiv, quantdiv, removeBtn);
      pContainer.append(prodDiv);
    });
    let stPrice = document.querySelector("#stprice");
    stPrice.innerText = subtotal;
    let delCharge = document.querySelector("#delCharge");
    delCharge.innerText = "$24";
    let totalPrice = document.querySelector("#tprice");
    totalPrice.innerText = subtotal + 24;
  
    cartPrice = {
      subPrice: subtotal,
      delivery: "24",
      total: subtotal + 24,
    };
    localStorage.setItem("cartPrice", JSON.stringify(cartPrice));
  };
  
  // function to remove product from cart
  const removeProduct = async (el) => {
    try {
      let id = el.id;
      //console.log(id,"id")
      let res = await fetch(`https://639869fbfe03352a94d003fc.mockapi.io/cart/${id}`,{
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        //console.log(res);
      window.location.reload();
      getCart();
    } catch (err) {
      console.log(err);
    }
  };


  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function getItems2(data){
    let cartData2=data.map((el,i)=>{
        while(i>3&&i<10){
        return `
        <div id="giftcard">
        <div>
          <img src=${el.image} alt="">
        </div>
        <div>
          <h4>${el.title}</h4>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nu_ZHuDon1GTaXeSIS6NeAjO91a4W_r6-Q&usqp=CAU" alt="">
        </div>
      </div>  
        `;
        };
    });
    return cartData2.join("");
}


function renderData2(data){
    let gifts = document.querySelector('.gift-content')
    gifts.innerHTML = getItems2(data)
}
