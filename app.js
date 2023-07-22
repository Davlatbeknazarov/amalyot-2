let on = document.querySelector(".on")
let off = document.querySelector(".off");
let img = document.querySelector("img")

on.addEventListener("click", () =>{
    img.src = "bulb-on.png"
    img.classList.add("shadow")
})
off.addEventListener("click", () => {
  img.src = "bulb-off.png";
  img.classList.remove("shadow")
});

// let h2 = document.querySelector("h2")
// let btn = document.querySelector(".add")
// let btn2 = document.querySelector(".add2");


// let son = 0;

// btn.addEventListener("click", () => {
//     son++
//     h2.innerText = son;
// })

// btn2.addEventListener("click", () => {
//   son--;
//   h2.innerText = son;
// });

