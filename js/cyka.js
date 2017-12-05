var shop = {
customerName: "Sai",
ProductPrice: "Total price is $",
totalPrice: 40+10+20+80+1000-((40+10+20+80+1000)*25/100),
products: [
"Kebab",
"Baguette",
"Pizza",
"Roti",
"Naan"
],
price: [40, 10, 20, 80, 1000],

displayCustomerName: function(){
	var customerElement = document.getElementById("customer-name");
	customerElement.innerHTML = this.customerName;
},

displayProductList: function(){
	var productsText = "";
	var productsElement = document.getElementById("product-list");

	for(var i = 0; i<5; i++){
		productsText = productsText + "<li class='list-group-item'>" + this.products[i] +"<span class='badge'>$" +this.price[i] + "</li>";
	}
	productsElement.innerHTML = productsText;

	},

	displayProductPrice: function(){
	var priceElement = document.getElementById("product-price");
	priceElement.innerHTML = this.ProductPrice + this.totalPrice;
},

}

shop.displayCustomerName();
shop.displayProductList();
shop.displayProductPrice();

// var greeting = "Merhaba! Good evening"
// var customername = "Sai";
// var price = [40+10+20+80+1000];
// var totalPrice = price-(price*25/100);

// var hours = new Date().getHours();
// 	var message;
// 	var morning = ('Good morning');
// 	var afternoon = ('Good afternoon');
// 	var evening = ('Good evening');

// 	if (hours >= 0 && hours < 12) {
// 		message = morning; 

// 	} else if (hours >= 12 && hours < 17) {
// 		message = afternoon;

// 	} else if (hours >= 17 && hours < 24) {
// 		message = evening;
// 	}

// document.getElementById("customer-name").innerHTML = "Sai";
// document.getElementById("greeting").innerHTML = "Merhaba! " + message;
// document.getElementById("product-price").innerHTML = "Total price is $" + totalPrice;

// var products = [
// "kebab",
// "Baguette",
// "Pizza",
// "Roti",
// "Naan"
// ]
// var price = [40, 10, 20, 80, 1000];

// var productsText = "";
// var productsElement = document.getElementById("product-list");

// productsText = productsText + "<li class='list-group-item'>" + products[0] + "<span class='badge'>$" + price[0] + "</li>";
// for (i=1;i<=4;i++) {
// 	productsText = productsText + "<li class='list-group-item'>" + products[i] + "<span class='badge'>$" + price[i] + "</li>";
// }
// productsElement.innerHTML = productsText;