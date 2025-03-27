function gettingRandomColor(){
    return (`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`);
}
let item = document.querySelectorAll("li");
item.forEach(function(item){
    item.addEventListener("click",function(){
    item.style.color = gettingRandomColor();})
    }
)