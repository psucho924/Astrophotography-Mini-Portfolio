let Body = Array.from(document.querySelector(".cont1").children);

for (let i = 0; i < Body.length; i++) {
  const e = Body[i];
  if (i % 2 != 0) {
    e.querySelector(".imageSection").style.order = "1";
    e.querySelector(".imageSection").classList.add("swiped");
    e.querySelector(".imageSection").classList.add("hideAndSlideRight");
    e.querySelector(".description").classList.add("hideAndSlideLeft");
  } else {
    e.querySelector(".imageSection").classList.add("hideAndSlideLeft");
    e.querySelector(".description").classList.add("hideAndSlideRight");
  }
}

const Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let swipeLeft = entry.target.firstElementChild;
      let swipeRight = entry.target.querySelector(".description");
      if (swipeLeft.classList.contains("swiped")) {
        swipeLeft.classList.toggle("hideAndSlideRight", !entry.isIntersecting);
        swipeRight.classList.toggle("hideAndSlideLeft", !entry.isIntersecting);
      } else {
        swipeLeft.classList.toggle("hideAndSlideLeft", !entry.isIntersecting);
        swipeRight.classList.toggle("hideAndSlideRight", !entry.isIntersecting);
      }
    });
  },
  {
    threshold: 0.55,
  }
);

Body.forEach((e) => {
  Observer.observe(e);
});

let ele = document.querySelector(".mode");
ele.addEventListener("click", () => {
  ele.classList.toggle("fa-moon");
  ele.classList.toggle("fa-sun");

  // console.log(ele.classList);
  let b = document.querySelector(".body");
  let starter = document.querySelector(".starter");
  if (ele.classList.contains("fa-moon")) {
    // b.style.background = "linear-gradient(to right, rgb(196, 196, 196), #000033, rgb(196, 196, 196))"
    b.setAttribute(
      "style",
      "background: linear-gradient(to right,black, #000033, black)"
    );

    console.log("1st");
  } else if (ele.classList.contains("fa-sun")) {
    // b.style.background = "linear-gradient(to right, black, #000033, black)"
    b.setAttribute(
      "style",
      "background: linear-gradient(to right, black, #000033, rgb(243, 243, 171))"
    );
    console.log("2nd");
  }
});

// ******* dialog box *********

let images = Array.from(document.querySelectorAll(".imageSection"));

console.log(images);
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    console.log(document.querySelector(".dialog-box"));
    document.querySelector(".dialog-box").style.opacity = "1";
    document.querySelector(".dialog-box").style.zIndex = "10";
    document.querySelector(".body").style.filter = "blur(5px)";
  });
});

let close = document.querySelector(".close");
close.addEventListener("click", (e) => {
  document.querySelector(".dialog-box").style.opacity = "0";
  document.querySelector(".dialog-box").style.zIndex = "-1";
  document.querySelector(".body").style.filter = "blur(0)";
});
