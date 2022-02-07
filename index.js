let url="https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

async function getfood(){
    try{
        let foodlist=await fetch(url);
       let data=await foodlist.json();

       getfooditems(data.meals);
    }
    catch(error){
        console.log(error);
    }
}
getfood()


function getfooditems(item){
    

    item.forEach(element => {
        
    
         
        let foodCard=document.createElement("div");

        let image=document.createElement("img");
        image.src= element.strMealThumb;

        let title=document.createElement("p");
        title.textContent=element.strMeal;

        let price=document.createElement("p");
        price.textContent="Rs : "+Math.floor(Math.random()*500);

        let addToCartButton=document.createElement("button");
        addToCartButton.textContent="Add to Cart";

        addToCartButton.onclick=function(event){
            addToCart(element);
        }

        foodCard.append(image,title,price,addToCartButton);
    document.getElementById("menu").append(foodCard);
    });

    function addToCart(el){
        let cart=JSON.parse(localStorage.getItem("cart"));

        cart.push(el);
        localStorage.setItem("cart",JSON.stringify(cart));

        refreshCartCount(cart);

        function refreshCartCount(cart){
            let cartCount=document.getElementById("count");
            count.textContent="Cart :"+cart.length;
        } 
    }


}
let cart=localStorage.getItem("cart");

if(!cart){
    cart=[];

    localStorage.setItem("cart",JSON.stringify(cart));
    refreshaCartCount(cart);
}
else{
    cart=JSON.parse(cart);
    refreshCartCount(cart);
}