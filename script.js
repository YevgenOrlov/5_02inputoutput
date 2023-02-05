// const button=document.querySelector('button')
// const input=document.querySelector('.i1')

// function likes(names) {
//    names=[];
//    // let nam = [input.value];
//    console.log(names,"1")
//    button.onclick=()=>{
//     nam=[];
//    nam.push(...names,input.value);
//    console.log(nam,"2")
// function f1(x,y){
//     let sum =x+y;
//     return sum;
// }
function randInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

document.querySelector(".out-1").addEventListener("mousemove", bw);
let w = 15;
console.log(w, "1");
function bw() {
  w++;
  document.querySelector(".out-1").style.width = w + "px";
  document.querySelector(".out-2").textContent = (console.log("out-2"), w);
  document.querySelector(".out-1").style.background = `rgb(${randInt(
    0,
    255
  )},${randInt(0, 255)},${randInt(0, 255)} ) `;
  document.querySelector(".out-2").textContent = `rgb(${randInt(
    0,
    255
  )},${randInt(0, 255)},${randInt(0, 255)} ) `;
}
