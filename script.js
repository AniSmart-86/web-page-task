let num = 0
const count = document.querySelector(".number");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");

increment.addEventListener("click", ()=>{
num ++;


if(num === 10){
    count.insertAdjacentText = "weldone"
}
count.innerHTML = num
})
decrement.addEventListener("click", ()=>{
num--;

count.innerHTML = num
count.style.color = "red";
});


let value = ["red", "blue", "yellow", "green"]

value.map((item, _index)=>(
    count.innerHTML = item
))