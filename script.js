let Body = Array.from(document.querySelector(".body").children);

for (let i = 1; i < Body.length; i += 2) {
  const e = Body[i];
  e.firstElementChild.style.order = "1";
}

Body.forEach((e) => {
  console.log(e.getBoundingClientRect());
});
