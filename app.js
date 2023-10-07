let name = document.getElementById("Full name");
let date = document.getElementById("Date of birth");
let gender = document.getElementById("gender");
let phone = document.getElementById("phone number");
let grade = document.getElementById("grade");
let major = document.getElementById("major");
let img = document.getElementById("img");
let imgs = "/image/admin-png-12.png";
let body = document.getElementById("jk");
let card = document.getElementById("card");
let submitt = document.getElementById("submit");

// constuctor

class studant {
  constructor(imgs, name, date, gender, phone, grade, major) {
    this.imgs = imgs;
    this.name = name;
    this.date = date;
    this.gender = gender;
    this.phone = phone;
    this.grade = grade;
    this.major = major;
  }
  issa(...s) {
    let kkl = [];
    kkl.push(s);
    console.log(kkl);
    localStorage.setItem("product", JSON.stringify(kkl));
  }
}

// table

let temp = "";
let mood = "create";

let pros = [];
if (localStorage.product != null) {
  pros = JSON.parse(localStorage.product);
} else {
  pros = [];
}

submitt.onclick = function () {
  let datapro = {
    imgs: imgs.src,
    name: name.value.toLowerCase(),
    date: date.value,
    gender: gender.value,
    phone: phone.value,
    grade: grade.value,
    major: major.value,
  };

  // construtor

  let ll = new studant(
    datapro.imgs,
    datapro.name,
    datapro.date,
    datapro.gender,
    datapro.phone,
    datapro.grade,
    datapro.major
  );
  ll.issa([
    datapro.imgs,
    datapro.name,
    datapro.date,
    datapro.gender,
    datapro.phone,
    datapro.grade,
    datapro.major,
  ]);

  let continer = document.createElement("div");
  let cards = document.getElementById("card");

  let imgss = document.createElement("img");
  imgss.src = imgs;
  continer.appendChild(imgss);
  cards.appendChild(continer);

  imgss.style.width = "100px";
  imgss.style.height = "100px";
  let majors = document.createElement("div");
  majors.innerHTML = datapro.major;
  continer.appendChild(majors);
  cards.appendChild(continer);

  let names = document.createElement("div");
  names.innerHTML = datapro.name;
  continer.appendChild(names);
  cards.appendChild(continer);

  let dates = document.createElement("div");
  dates.innerHTML = datapro.date;
  continer.appendChild(dates);
  cards.appendChild(continer);

  let genders = document.createElement("div");
  genders.innerHTML = datapro.gender;
  continer.appendChild(genders);
  cards.appendChild(continer);

  let phones = document.createElement("div");
  phones.innerHTML = datapro.phone;
  continer.appendChild(phones);
  cards.appendChild(continer);

  let grades = document.createElement("div");
  grades.innerHTML = datapro.grade;
  continer.appendChild(grades);
  cards.appendChild(continer);

  body.style.display = "none";

  // table

  // if (mood === "create") {
  //   if (datapro.name != "") {
  //     pros.push(datapro);
  //   } else {
  //     pros[temp] = datapro;
  //     mood = "create";
  //     submitt.innerHTML = "create";
  //   }
  //   date.style.color = "red";
  //   localStorage.setItem("product", JSON.stringify(pros));

  //   showdata();
  // }
};

// function showdata() {
//   let table = "";
//   for (let i = 0; i < pros.length; i++) {
//     table += `

//     <tr>
//     <td>${i}</td>
//     <td>${pros[i].name}</td>
//     <td  style="color: red;">${pros[i].date}</td>
//     <td>${pros[i].gender}</td>
//     <td>${pros[i].phone}</td>
//     <td  style="color: red;">${pros[i].grade}</td>
//   </tr>
//     `;
//   }

//   document.getElementById("tbody").innerHTML = table;
// }
// showdata();
