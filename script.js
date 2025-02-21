let Body = Array.from(document.querySelector(".cont1").children);

for (let i = 1; i < Body.length; i += 2) {
  const e = Body[i];
  e.firstElementChild.style.order = "1";
}


let ele = document.querySelector(".mode");
ele.addEventListener("click",()=>{
  ele.classList.toggle("fa-moon");
  ele.classList.toggle("fa-sun");

  console.log(ele.classList);
  let b = document.querySelector(".body");
  let starter = document.querySelector(".starter");
  if(ele.classList.contains("fa-moon")){
    // b.style.background = "linear-gradient(to right, rgb(196, 196, 196), #000033, rgb(196, 196, 196))"
    b.setAttribute('style', 'background: linear-gradient(to right,black, #000033, black)');
   
    console.log("1st");
    
  }else if(ele.classList.contains("fa-sun")){
    // b.style.background = "linear-gradient(to right, black, #000033, black)"
    b.setAttribute('style', 'background: linear-gradient(to right, black, #000033, rgb(243, 243, 171))');
    console.log("2nd");
    
  }
})