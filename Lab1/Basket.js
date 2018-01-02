var prodcuts = [{
	name : "test",
	price : 12.9,
	inventory : 20
}, {
	name : "test2",
	price : 30,
	inventory : 80
}];

class ProductLineItem {
 	
	constructor(productID) {
		this.id = productID;
		this.amount = 1;
		this.product = prodcuts[productID];
	}
	
	 getAmount () {
		return this.amount;
	}
	 setAmount(quantity) {
		this.amount = quantity;
	}
	 getProduct() {
		return this.product;
	}
	
	
}


var basket = (function(){
	var a = []
	var getIndexProduct = function (productID) {
		var index = null;
		a.forEach(function(item, i, array) {
			if (item.id == productID) {
				index = i;
			}
		});
		return index;
	}
	return {	
		addProduct : function(productID){
			var indexProduct = getIndexProduct(productID);
			if(indexProduct == null) {
				if (prodcuts[productID].inventory-1 >= 0) {
					a.push(new ProductLineItem(productID));
					prodcuts[productID].inventory--;
				} else {
					alert("Немає продуктів на складі!");
				}
			} else {
				alert("Ви вже вибрали цей продукт");
			}
				
		},
		removeProduct : function(productID){
			var indexProduct = getIndexProduct(productID);
			if(product == null) {
				alert("Ви ще не вибрали цей продукт!");
			} else {
				var product = a[indexProduct];
				product.getProduct().inventory += + product.getAmount();
				delete a[indexProduct];
			}
		},
		updateProductQuantity : function(productID, quantity) {
			var product = a[getIndexProduct(productID)];
			if ( product.getProduct().inventory - quantity + product.getAmount() >= 0) {
				product.getProduct().inventory += product.getAmount() - quantity;
				product.setAmount(quantity);
			} else {
				alert("Немає продуктів на складі!");
			}
		},
		getTotalPrice : function(){
			var totalPrice = 0;
			a.forEach(function(item, i, arr) {
				totalPrice += item.getAmount() * item.getProduct().price;
			});	
			alert(totalPrice);
		}
	}
})();
