let baseURL =  `https://639869fbfe03352a94d003fc.mockapi.io`
// console.log(user)
// catch
// get value make a obj

// async function registerUser(obj){
//     try {
//         let registerUserRes = await fetch(`${baseURL}/users`,{
//             method : 
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let obj = {
        'username' : document.querySelector("#name").value,
        'email' : document.querySelector("#email").value,
        'confirmEmail' : document.querySelector("#confirm-email").value,
        'password' : document.querySelector("#password").value,
        'confirmPassword' : document.querySelector("#confirm-password").value,
        'mobile_number' : document.querySelector("#phone_number").value,
        'referalCode' : document.querySelector("#referal-code").value,
    }

    // let name = document.querySelector("#name").value;
    // let email = document.querySelector("#email").value;
    // let confirmEmail = document.querySelector("#confirm-email").value;
    // let password = document.querySelector("#password").value;
    // let confirmPassword = document.querySelector("#confirm-password").value;
    // let mobile_number = document.querySelector("#phone_number").value;
    // let referalCode = document.querySelector("#referal-code").value;

    // let valid = validForm(name, email, confirmEmail, password, confirmPassword , mobile_number, referalCode);
    // if (valid == true) {
       
    //     registeration();
        
    // // }
    if(validForm(obj)){
        console.log(obj)
    } 
    registeration(obj);
});

// --------------- Form Validation------------------

function validForm(obj) {
    if (obj.name == "") {
        document.getElementById("name").innerHTML = "Please fill the name";
        return false;
    }
    if (obj.name.length <= 4 || obj.name.length > 15) {
        document.getElementById("name").innerHTML = "Name length should be between 2 and 20";
        return false;
    }
    

    if (obj.email == "") {
        document.getElementById("email").innerHTML = "Please fill the email";
        return false;
    }

    if (obj.confirmEmail == "") {
        document.getElementById("confirm-email").innerHTML = "Please confirm email";
        return false;
    }
    if (obj.email != con_email) {
        document.getElementById("email").innerHTML = " Email does not match";
        return false;
    }

    if (obj.password == "") {
        document.getElementById("password").innerHTML = "Please fill the password";
        return false;
    }
    if (obj.password.length <= 7 || password.length > 12) {
        document.getElementById("password").innerHTML = "Password should be in between 6 and 15";
        return false;
    }

    if (obj.confirmPassword == "") {
        document.getElementById("confirm-password").innerHTML = "Please confirm password";
        return false;
    }
    if (obj.password != obj.confirmPassword) {
        document.getElementById("password").innerHTML =
            "Password does not match";
        return false;
    }
    if (mobile_number == "") {
        document.getElementById("phone_number").innerHTML = "Please fill the number";
        return false;
    }
    if (isNaN(obj.mobile_number)) {
        document.getElementById("phone_number").innerHTML = "Please fill numbers , Other characters not allowed";
        return false;
    }
    if (obj.mobile_number.length != 10) {
        document.getElementById("phone_number").innerHTML = " Number should be of 10 digits";
        return false;
    }

    return true;
}



async function registeration(obj){
        try {
            // let registeration_data={
            //     name:document.querySelector("#name").value,
            //     email:document.querySelector("#email").value,
            //     password:document.querySelector("#password").value,
            //     mobileNumber:document.querySelector("#phone_number").value,
            //     referals:document.querySelector("#referal-code").value,
            // }
    
           
            let res=await fetch(`${baseURL}/users`,{
                method:"POST",
                headers:{
                    "content-Type":"application/json",
                },
                body: JSON.stringify(obj)
            });
    
            let register_request=await res.json();
            if(res.ok){
              window.location.href="../sign.html"
            // console.log(register_request)
            }
            else{
                alert("Bad request has been made.");
            }
          } catch (error) {
            alert("Something went wrong. Please try again later.");
          }

         
    }