/*alert("hello");*/ // alert - this is used to send the message obn the browser
function addNewWEField(){
   // console.log("Adding New Field");
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here")

   let woe=document.getElementById("we");
   let obj=document.getElementById("weADDButton");
   woe.insertBefore(newNode,obj);
}
function addNewAQField(){
   // console.log("Adding New Field");
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("aqField");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here")

   let woe=document.getElementById("the");
   let obj=document.getElementById("aqADDbutton");
   woe.insertBefore(newNode,obj);
}
// this is generating cv
function generatecv(){
  // console.log("working")
  let namefield=document.getElementById("nameField").value;  // we get the entered value here
  let nameT1 =document.getElementById("namet");                // we get the object here
  nameT1.innerHTML=namefield;

  document.getElementById("name2").innerHTML=namefield;
  // for contact
  document.getElementById("contact1").innerHTML=document.getElementById("contactField").value;

  //address
  document.getElementById("address1").innerHTML=document.getElementById("addressField").value;
  // links
  //document.getElementById("ld").innerHTML=document.getElementById("ldField").value;
 // document.getElementById("git").innerHTML=document.getElementById("gitField").value;
  //document.getElementById("ins").innerHTML=document.getElementById("instaField").value;
  document.getElementById("git").href=document.getElementById("gitField").value;
  // objective setting
  document.getElementById("obj2").innerHTML=document.getElementById("obj").value;
  document.getElementById("ld").href=document.getElementById("ldField").value;
  document.getElementById("ins").href=document.getElementById("instaField").value;


  //work experience
  let we=document.getElementsByClassName("weField");
  let str="";
  for(let e of we){
   str=str+`<li> ${e.value} </li>`
  }
  document.getElementById("we2").innerHTML=str;

  // for academic qualifications
  let aqs=document.getElementsByClassName("aqField");
  let str1="";
  for(let s of aqs){
   str1=str1+`<li> ${s.value} </li>`
  }
  document.getElementById("aq2").innerHTML=str;

  document.getElementById("cv-form").style.display="none";
  document.getElementById("cv-template").style.display="block";

  // setting image dynamically
  let file=document.getElementById("imgfield").files[0]; // img store in the array format
  console.log(file);
  let reader= new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  reader.onloadend=function(){
   document.getElementById("imgtemplate").src=reader.result;
  }
}

function printcv(){
   window.print();
}