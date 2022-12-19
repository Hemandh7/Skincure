const baseURL = "https://639869fbfe03352a94d003fc.mockapi.io";
let page = 1;

let mainSection = document.getElementById("main-section");
let fetchwish = document.getElementById("fetch-wish");
let fetchIngredientsButton = document.getElementById("fetch-ingredient");
let fetchEmployeesButton = document.getElementById("fetch-employees");
let addEmployeeButton = document.getElementById("add-employee");


// when window loads 
window.addEventListener("load", () => {
  fetch(`${baseURL}/products`, {
    method: 'GET'
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      let employeesCardData = data.map(item => {
        let obj = { ...item };
        return obj;
      })
      renderCardList(employeesCardData, 'Product list');
    })
    
});

fetchIngredientsButton.addEventListener('click',()=>{
  fetch(`${baseURL}/products`, {
    method: 'GET'
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      let employeesCardData = data.map(item => {
        let obj = { ...item };
        return obj;
      })
      renderCardList(employeesCardData, 'Product list');
    })
})



// 3 additional data
// method
// body <JSON>
// headers Content-Type: 'application/json'
addEmployeeButton.addEventListener("click", function () {
  // any validation here - the type is number
  

  let newEmp = {
    username: document.getElementById('employee-name').value,
    image: document.getElementById('employee-image').value,
    department: document.getElementById('employee-dept').value,
    salary: document.getElementById('employee-salary').value
  }

  fetch(`${baseURL}/product`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEmp)
  }).then((res) => {
    // check here if the respose was ok
    return res.json();
  }).then((data) => {
    alert(`Product was successfully created.`)
  }).catch((err) => {
    alert(`${err} happened.`)
  })
})


fetchwish.addEventListener("click", function () {
  fetch(`${baseURL}/wishlist`)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      let recipeCardData = data.map(item => {
        let obj = { ...item };
        return obj;
      })
      renderCardList(recipeCardData, 'Wish list');
    })
})

fetchEmployeesButton.addEventListener("click", function () {
  fetch(`${baseURL}/users`)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      let employeesCardData = data.map(item => {
        let obj = { ...item };
        return obj;
      })
      renderCardListusers(employeesCardData, 'Customers list');
    })
})


function renderCardList(cardData, heading) {
  mainSection.innerHTML = `
  <h1>${heading ? heading : 'Data list'}</h1>
  <hr>
  <div class="card-list">
    ${cardData
      .map((item) => {
        let imageURL = item.image;
        let title = item.title;
        let price = item.price;
        let id = item.id;

        return getAsCard(imageURL, title, price, id);
      })
      .join("")}
  </div>
`
let delbtns = document.querySelectorAll('.deletebtn');
  for(let delbtn of delbtns){
    delbtn.addEventListener('click',(e)=>{
      console.log(delbtn.id)
      removeProduct(delbtn.id)
    });
  }
;
}
function renderCardListusers(cardData, heading) {
  mainSection.innerHTML = `
  <h1>${heading ? heading : 'Data list'}</h1>
  <hr>
  <div class="card-list">
    ${cardData
      .map((item) => {
        let imageURL = "../logo/user.gif";
        let title = item.username;
        let price = item.email;
        let id = item.id;

        return getAsCard(imageURL, title,price,id);
      })
      .join("")}
  </div>
`;
}

function parseLinkHeader(linkHeader) {
  const linkHeadersArray = linkHeader.split(", ").map(header => header.split("; "));
  const linkHeadersMap = linkHeadersArray.map(header => {
    const thisHeaderRel = header[1].replace(/"/g, "").replace("rel=", "");
    const thisHeaderUrl = header[0].slice(1, -1);
    return [thisHeaderRel, thisHeaderUrl]
  });
  return Object.fromEntries(linkHeadersMap);
}


function getAsCard(imgSrc, title, description, link) {
  return `
    <div class="card">
    <div class="card__img">
      <img
        src=${imgSrc}
        alt= ${title}'s image
      />
    </div>

    <div class="card__body">
      <h3 class="card__item card__title">${title}</h3>
      <div class="card__item card__description">
        ${description}
      </div>
      <button id= ${link} style = "width: 150px; height: 40px;"  class=" deletebtn button-primary" >Delete</button>
    </div>
  </div>
`;
}

const removeProduct = async (id) => {
  try {
    
    //console.log(id,"id")
    let res = await fetch(`https://639869fbfe03352a94d003fc.mockapi.io/products/${id}`,{
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



let getData = async () => {
  let res = await fetch(recipeURL);
  res = await res.json();
  console.log(res);
  renderDom(res);
};

let postData = async () => {
  let name = document.getElementById("name");
  let batch = document.getElementById("batch");
  let section = document.getElementById("section");
  let score = document.getElementById("eval_score");
  let image = document.getElementById("image");

  let data = {
    name: name.value,
    batch: batch.value,
    section: section.value,
    score: score.value,
    image: image.value,
  };

  data = JSON.stringify(data);

  let res = await fetch(recipeURL, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  name.value = null;
  batch.value = null;
  section.value = null;
  score.value = null;
  image.value = null;

  getData();
};

let card = ({ id, name, batch, section, score, image }) => {
  let div = document.createElement("div");
  div.setAttribute("class", "student");
  let img = document.createElement("img");
  img.src = image;

  let h3 = document.createElement("h3");
  h3.innerText = name;

  let p1 = document.createElement("p");
  p1.setAttribute("class", "student_score");
  p1.innerText = score;

  let p2 = document.createElement("p");
  p2.innerText = `Batch: ${batch}`;

  let p3 = document.createElement("p");
  p3.innerText = section;

  let button_div = document.createElement("div");

  let remove_btn = document.createElement("button");
  remove_btn.setAttribute("class", "remove_student");
  remove_btn.innerText = "Remove";
  remove_btn.onclick = () => {
    removeStudent(id);
  };

  let update_btn = document.createElement("button");
  update_btn.setAttribute("class", "update_score");
  update_btn.innerText = "Update Score";
  update_btn.onclick = () => {
    updateData(id);
  };

  button_div.append(remove_btn, update_btn);

  div.append(img, h3, p1, p2, p3, button_div);

  return div;
};

let renderDom = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((el) => {
    container.append(card(el));
  });
};

let removeStudent = async (id) => {
  let res = await fetch(`${recipeURL}/${id}`, {
    method: "DELETE",
  });
  getData();
};

let updateData = async (id) => {
  let score = document.getElementById("new_score");
  score.removeAttribute("disabled");
  score.onkeypress = () => {
    updateScore(event, id);
  };
  let student = await fetch(`${recipeURL}/${id}`);
  student = await student.json();
  score.value = student.score;
};

let updateScore = async (e, id) => {
  let new_score = document.getElementById("new_score");
  let student = await fetch(`${recipeURL}/${id}`);
  student = await student.json();
  if (e.key === "Enter") {
    let data = { score: +new_score.value || +student.score };
    let res = await fetch(`${recipeURL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    new_score.value = null;
    new_score.setAttribute("disabled", true);
    getData();
  }
};

let sortLowToHigh = async () => {
  let res = await fetch(`${recipeURL}?_sort=score&_order=asc`);
  res = await res.json();
  renderDom(res);
};

let sortHighToLow = async () => {
  let res = await fetch(`${recipeURL}?_sort=score&_order=desc`);
  res = await res.json();
  renderDom(res);
};

let greaterThan = async () => {
  let res = await fetch(`${recipeURL}?score_gt=5`);
  res = await res.json();
  renderDom(res);
};

let lessThan = async () => {
  let res = await fetch(`${recipeURL}?score_lte=5`);
  res = await res.json();
  renderDom(res);
};


// async function getUser(userId){
//   try {
//     let res = await fetch(`http://localhost:9090/users/${userId}`);
//     if (res.ok) {
//       let data = await res.json();
//       return data;
//     } else {
//       return `server responded with a ${res.status} error.`
//     }
//   } catch (error) {
//     return 'error';
//   }
// }

// getUser(51).then(dat => console.log(dat));