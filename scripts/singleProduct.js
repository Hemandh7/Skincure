let baseURL = "https://639869fbfe03352a94d003fc.mockapi.io";
let pdata = JSON.parse(localStorage.getItem('quick-data'))
console.log(pdata);


//  redering data 
let image = document.querySelector('.pro_img')
image.src = pdata.image;
// console.log()


let price = document.querySelector('.pro_price')
price.innerText = "$ "+pdata.price;
// console.log()

let title = document.querySelector('.pro_title')
title.innerText = pdata.title;
// console.log()

let description = document.querySelector('.pro_des')
description.innerText = pdata.Description;

let cartbtn  = document.querySelector('.cartbtn ')
cartbtn.addEventListener('click',()=>{
    window.location.href = "../routes/cart.html"
}) 







// quantity addition-subtraction

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let num = document.querySelector(".num");

let qty =1;

plus.addEventListener("click",()=>{
    qty++;
    qty = (qty < 10) ? "0" + qty : qty ;
    num.innerText = qty;
    // console.log(a);
});

minus.addEventListener("click",()=>{
    if(qty >1){
        qty--;
    
    
    qty = (qty < 10) ? "0" + qty : qty ;

    num.innerText = qty;
    }

})



import { footer } from "../components/footer.js";
import {navbar} from "../components/nav.js"
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
let footer_div=document.getElementById("footer");
footer_div.innerHTML = footer(); 

