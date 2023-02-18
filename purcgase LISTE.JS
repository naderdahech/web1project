console.log(document);
var plus_btns = document.querySelectorAll(".plus");
var minus_btns = document.querySelectorAll(".minus");
var total = document.getElementById("total");
var prices = document.querySelectorAll(".price");
var like_btns = document.querySelectorAll(".like");

console.log(plus_btns);
function sum(){
    var somme = 0;
    for (let i = 0; i < prices.length; i++){
        somme += Number(prices[i].innerHTML);
        total.inner = somme;

    }
}
function inc(e) {
   var cible = e.target;
   var div = cible.parentElement;
   var p = div.querySelector("p");
   var value = Number(p.innerHTML);
   value++;
   p.innerHTML = value;
  // multipler
   var tr = div.parentElement.parentElement;
   //console.log(tr);
   var unit_price = tr.querySelector(".unitPrice");
   var up = Number(unit_price.innerHTML);
   console.log(up);
   var price = tr.querySelector(".price");
   Price.innerHTML = value * up;
   sum();

}
   function dec(e) {
   var cible = e.target;
   var div = cible.parentElement;
   var p = div.querySelector("p");
   var value = Number(p.innerHTML);
   console.log(value);
   if(value > 0){
   value--;
   
}
   p.innerHTML = value;
   var tr = div.parentElement.parentElement;
   //console.log(tr);
   var unit_price = tr.querySelector(".unitPrice");
   var up = Number(unit_price.innerHTML);
   console.log(up);
   var price = tr.querySelector(".price");
   Price.innerHTML = value * up;
   sum();
}
function changecolor(e){
    var cible = e.target;
    if (cible.style.color!=="red"){
       cible.style.color = "red";
    }
    else{
        cible.style.color ="gray";
    }
}
function deleterow(e){
    var cible = e.target;
    var tr = cible.parentElement.parentElement.parentElement.parentElement;
    console.log(tr);
  var price =tr.querySelector(".price");
  tr.remove();
}

for (let i = 0; i < plus_btns.length; i++) {
   plus_btns[i].addEventListener("click", inc);
}
   for (let i = 0; i < minus_btns.length; i++) {
    minus_btns[i].addEventListener("click", dec);   
}
for (let i = 0; i < like.length; i++) {
    like_btns[i].addEventListener("click", changecolor);
    
}
for (let i = 0; i< delet_btns.length; i++) {
  delete_btns[i].addEventListener("click", deletrow);
    }