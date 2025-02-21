let Body = Array.from(document.querySelector(".cont1").children);

for (let i = 1; i < Body.length; i += 2) {
  const e = Body[i];
  e.firstElementChild.style.order = "1";
}