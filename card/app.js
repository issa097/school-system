let arrData=[];
if(localStorage.arrData != null){
    arrData=JSON.parse(localStorage.arrData);
    render();
  }
 

let userName;
let userDOB;
let userGender;
let userNumber;
let userGrade;
let userMajor;
let userImg;


let Data=document.getElementById("form");

Data.addEventListener("submit",function(e){


  userName=e.target.username.value;
  userDOB=e.target.userDOB.value;
  userGender=e.target.usergender.value;
  userNumber=e.target.usernumber.value;
  userGrade=e.target.usergrade.value;
  userMajor=e.target.usermajor.value;
  userImg=e.target.userimg.value;
  Data.reset();


  let student = new Person(userName,userDOB ,userGender,userNumber,userGrade,userMajor,userImg);

     arrData.push(student);
     localStorage.setItem('arrData',JSON.stringify(arrData) );
     render();
});
console.log(Data)


function Person(userName,userDOB ,userGender,userNumber,userGrade,userMajor,userImg) {
  this.userName = userName; 
  this.userDOB = userDOB;
  this.userGender = userGender;
  this.userNumber = userNumber;
  this.userGrade = userGrade;
  this.userMajor = userMajor;
  this.userImg = userImg;
  

}



//-------------show data-----------------//
function render(){
  for(let i=0;i<arrData.length;i++){

    let sdcard= document.getElementById("student_card");
    let divContainer = document.createElement('div');
    let img = document.createElement('img');
    img.src=`${arrData[i].userImg}`;
    let ul = document.createElement("ul");
    let li1= document.createElement("li");
    li1.textContent=`Name: ${arrData[i].userName}`;
    let li2= document.createElement("li");
    li2.textContent=`Gender: ${arrData[i].userGender}`;
    let li3= document.createElement("li");
    li3.textContent=`Number: ${arrData[i].userNumber}`;
    let li4= document.createElement("li");
    li4.textContent=`Grade: ${arrData[i].userGrade}`;
    let li5= document.createElement("li");
    li5.textContent=`Major: ${arrData[i].userMajor}`;
  
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
  
    divContainer.appendChild(img);
    divContainer.appendChild(ul);
    sdcard.appendChild(divContainer);

  }
}
