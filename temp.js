// let cart = document.querySelector('#cart')
// cart.addEventListener('click',()=>window.location.href = '/routes/cart.html')

// let product = document.querySelector('.mySlides')
// product.addEventListener('click',()=>window.location.href = '/routes/product.html')


// let login = document.querySelector('#account')
// login.addEventListener('click',()=>window.location.href = '/routes/signin.html')



async function makePopUp(id){
    let obj = await getCard(id)
  
    let handler = document.querySelector('.pop-handler')
    handler.innerHTML =`
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
                <img src="${image}" alt="${title}">
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
                TOTAL : $198
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
  </div>`
  
  }
  