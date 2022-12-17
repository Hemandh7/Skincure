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

function validForm(obj) {
    if (obj.email == "") {
        document.getElementById("email").innerHTML = "Please fill the email";
        return false;
    }

    if (obj.password == "") {
        document.getElementById("password").innerHTML = "Please fill the password";
        return false;
    }
    if (obj.password.length <= 7 || obj.password.length > 12) {
        document.getElementById("password").innerHTML = "Password should be in between 7 and 12";
        return false;
    }
    return true;
}



async function signin(obj){

    try {
        let login_request = await fetch(`${baseURL}/users`,{
            method : "GET",
            // body : JSON.stringify(obj),
            headers : {
                "Content-Type" : "application/json"
            },
        })

        let userdata = await login_request.json();
        console.log(userdata);
        console.log(obj);
        if(login_request.ok){
            window.location.href = "../index.html";
        }else{
            alert("User not found.");
        }
    } catch (error) {
		console.log(error);
        alert("wrong username or password. Please try again later.");
    }
}