var redirect = document.querySelector("#mybtn").addEventListener("click", registeration);

function registeration() 
{
    window.location.href = '../routes/register.html'
}

let baseURL =  `https://639869fbfe03352a94d003fc.mockapi.io`;



document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let obj={
    'email' : document.querySelector("#email").value,
    'password' : document.querySelector("#password").value

    }
    

    // let valid = validForm(obj);

    // if (valid == true) {
    //     signin(obj);
    // }
    signin(obj);

});

// function validForm(obj) {
//     if (obj.email == "") {
//         document.getElementById("email").innerHTML = "Please fill the email";
//         return false;
//     }

//     if (obj.password == "") {
//         document.getElementById("password").innerHTML = "Please fill the password";
//         return false;
//     }
//     if (obj.password.length <= 7 || obj.password.length > 12) {
//         document.getElementById("password").innerHTML = "Password should be in between 7 and 12";
//         return false;
//     }
//     return true;
// }



// let admin_email = document.querySelector("#email")
// let admin_pass = document.querySelector("#password")
// function adminPage(){

//     if(admin_email == "admin" && admin_pass=="admin" )
//     {
//         window.location.href = "../routes/admin.html";
//     }


// }

async function signin(obj){
    if(obj.email =="admin" && obj.password == "admin") window.location.href = "../routes/admin.html";
    
    console.log(obj);

    try {
        let login_request = await fetch(`${baseURL}/users/1`,{
            method : "GET",
            // body : JSON.stringify(obj),
            headers : {
                "Content-Type" : "application/json"
            },
        })

        let userdata = await login_request.json();
       if(userdata.email == obj.email && userdata.password == obj.password ){
        alert('Logged-in ✅')
        window.location.href = "../index.html"
       }else if (userdata.email !== obj.email ){
        alert('NO user found ❌')
       }else{
        alert('Wrong Password ❌')            
        };
        console.log(obj);
       
       
    } catch (error) {
		console.log(error);
        alert("wrong username or password. Please try again later.");
    }
}

const navbar = document.querySelector('#NavBar');
let top = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= top) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);

