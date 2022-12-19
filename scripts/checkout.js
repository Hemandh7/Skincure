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


function getItems2(data){
    let cartData2=data.map((el,i)=>{
        for(let i=1;i<=data.length;i++){
        return `
        <div id="giftcard">
        <div>
          <img src=${el.image} alt="">
        </div>
        <div>
          <h4>${el.title}</h4>
        </div>
        <div>
        <h5>${el.price}</h5>
        </div>
      </div>  
        `;
        };
    });
    return cartData2.join("");
}


function renderData2(data){
    let summary = document.querySelector('#cart-append')
    summary.innerHTML = getItems2(data);
}

let submit = document.querySelector('#submitorder');
submit.addEventListener('click',()=>{
    alert("Order Placed");
    window.location.href="../index.html"
})

import {navbar} from "../components/nav.js"
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();