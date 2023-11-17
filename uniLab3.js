let second =20;
let sale = document.getElementById("sale");
function sales(){
    setTimeout(function (){
        sale.innerText ="Sale ends in :"+ second+" seconds"
        second --;
        if(second >0){
            sales()
        }
        else {
            sale.innerText ="all saled"
        }
    },1000)

}
sales()

let bg =document.getElementById("bg");
let button =document.getElementById("button");
button.addEventListener("click",close)
function showMore(){
    bg.classList.add("bg-show");
}
function close(){
    bg.classList.remove("bg-show");
}