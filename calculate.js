let display = document.getElementById("display");
let buttons = document.getElementById("button");
console.log(buttons);
















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