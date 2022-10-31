let display = document.getElementById("display");
function changeDispay(number)
{
    display.innerHTML += number;
}
function clearr()
{
    display.innerHTML = null;
}
function equal()
{
    display.innerHTML = eval(display.innerHTML);
}
function deletes()
{
    display.innerHTML = display.innerHTML.slice(0,-1);
}
// let btn = document.getElementById("buttons");
// let btndivis = document.getElementById("buttons/");
// let btnmuiltiple = document.getElementById("buttons*");
// let btnminusgo = document.getElementById("buttons->");
// let btn7 = document.getElementById("buttons7");
// let btn8 = document.getElementById("buttons8")
// let btn9 = document.getElementById("buttons9")
// let btnminus = document.getElementById("buttons-")
// let btn4 = document.getElementById("buttons4")
// let btn5 = document.getElementById("buttons5")
// let btn6 = document.getElementById("buttons6")
// let btnplus = document.getElementById("buttons+")
// let btn1 = document.getElementById("buttons1")
// let btn2 = document.getElementById("buttons2")
// let btn3 = document.getElementById("buttons3")
// let btnspot = document.getElementById("buttons.")
// let btnopenparentesis = document.getElementById("buttons(")
// let btn0 = document.getElementById("buttons0")
// let btncloseparentesis = document.getElementById("buttons)")
// btn.addEventListener("click", ()=>{
//     console.log(btn.innerHTML);
// })
// btn1.addEventListener("click", ()=>{
//     console.log(btn1.innerHTML);
// })
// btn2.addEventListener("click", ()=>{
//     console.log(btn2.innerHTML);
// })
// btn3.addEventListener("click", ()=>{
//     console.log(btn3.innerHTML);
// })
// btn4.addEventListener("click", ()=>{
//     console.log(btn4.innerHTML);
// })
// btn5.addEventListener("click", ()=>{
//     console.log(btn5.innerHTML);
// })
// btn6.addEventListener("click", ()=>{
//     console.log(btn6.innerHTML);
// })
// btn7.addEventListener("click", ()=>{
//     console.log(btn7.innerHTML);
// })
















const buttom = document.getElementById("buttom");
const items = document.getElementById("items");
const close = document.getElementById("close");
const gab = document.getElementById("close");
const fii = document.getElementById("contact");

buttom.addEventListener("click",() => {
    if(items.classList.contains("hidden")){
    items.classList.add("flex");
    items.classList.remove("hidden");
    items.classList.add("navsize");
    buttom.classList.add("layer");
   
    buttom.classList.remove("block");
    buttom.classList.add("hidden");
    close.classList.add("block");
    close.classList.remove("hidden");
    close.classList.add("layer");
    gab.classList.add("holdsize");
    
}
})



close.addEventListener("click",() => {
    if(items.classList.contains("flex")){
        items.classList.add("hidden");
        items.classList.remove("flex");
        items.classList.remove("navsize");
        buttom.classList.add("layer");
       
        buttom.classList.remove("hidden");
        buttom.classList.add("block");
        close.classList.add("hidden");
        close.classList.remove("block");
        close.classList.add("layer");
        gab.classList.remove("holdsize");
        fii.classList.remove("layers");
        
    }
}
)