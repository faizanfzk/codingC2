let cart=localStorage.getItem("cart");
if(!cart){
    cart=[];
    localStorage.setItem("cart",JSON.stringify(cart));
}
else{
    cart=JSON.parse(cart);
}
let total=cart.reduce(function(acc,curr){
    return acc+curr.price;
},0);

document.getElementById("total").append(total);

let container    =document.getElementById("cart");

let table=document.createElement("table");

let thead=document.createElement("thead");
let theadRow = document.createElement("tr");

let th1=document.createElement("th");
th1.textContent="image";
let th2=document.createElement("th");
th2.textContent="title";

theadRow.append(th1,th2);

thead.append(theadRow);
let tbody=document.createElement("tbody");

cart.forEach(prod => {
    

    let tr = document.createElement("tr");

    let td1 =document.createElement("td");

    let proimg=document.createElement("img");
    proimg.src=prod.Image;
    td1.append(proimg);
    console.log(proimg)

    let td2 =document.createElement("td");
    td2.textContent=prod.title;

    tr.append(td1,td2);
    tbody.append(tr)
});
table.append(thead,tbody);
container.append(table);

