class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
	constructor(products = []) {
		this.products = products;
	}
  
	updatePrice() {
		for (var i = 0; i < this.products.length; i++) {
			if (this.products[i].name != 'Full Coverage' && this.products[i].name != 'Special Full Coverage') {
				if (this.products[i].price > 0) {
					if (this.products[i].name != 'Mega Coverage') {
						this.products[i].price = this.products[i].price - 1;
					}
				}
			}else{
				if (this.products[i].price < 50) {
					this.products[i].price = this.products[i].price + 1;
					if (this.products[i].name == 'Special Full Coverage') {
						if (this.products[i].sellIn < 11) {
							if (this.products[i].price < 50) {
								this.products[i].price = this.products[i].price + 1;
							}
						}
						
						if (this.products[i].sellIn < 6) {
							if (this.products[i].price < 50) {
								this.products[i].price = this.products[i].price + 1;
							}
						}
					}
				}
			}
			
			if (this.products[i].name != 'Mega Coverage') {
				this.products[i].sellIn = this.products[i].sellIn - 1;
			}
			
			if (this.products[i].sellIn < 0) {
				if (this.products[i].name != 'Full Coverage') {
					if (this.products[i].name != 'Special Full Coverage') {
						if (this.products[i].price > 0) {
							if (this.products[i].name != 'Mega Coverage') {
								this.products[i].price = this.products[i].price - 1;
							}
						}
					} else {
						this.products[i].price = this.products[i].price - this.products[i].price;
					}
				} else {
					if (this.products[i].price < 50) {
						this.products[i].price = this.products[i].price + 1;
					}
				}
			}
		}
		return this.products;
	}
	
	
	
	updatePrice2() {
		for (var i = 0; i < this.products.length; i++) {
			if (this.products[i].name != 'Mega Coverage')
				this.products[i].sellIn = this.products[i].sellIn - 1;
			
			//price up
			if(this.products[i].name == 'Full Coverage' || this.products[i].name == 'Special Full Coverage'){
				this.products[i].price = this.products[i].price + 1;
				
				if (this.products[i].name == 'Special Full Coverage') {
					if (this.products[i].sellIn < 10)
						this.products[i].price = this.products[i].price + 1;
					
					if (this.products[i].sellIn < 5)
						this.products[i].price = this.products[i].price + 1;
					
					if (this.products[i].sellIn < 0)
						this.products[i].price = 0;
				}
				
				if(this.products[i].price > 50)
					this.products[i].price = 50;
			}// price down
			else if(this.products[i].name != 'Mega Coverage'){
				this.products[i].price = this.products[i].price - 1;
				
				if(this.products[i].name == 'Super Sale')
					this.products[i].price = this.products[i].price - 1;

				if (this.products[i].sellIn < 0){
					this.products[i].price = this.products[i].price - 1;
					if(this.products[i].name == 'Super Sale')
						this.products[i].price = this.products[i].price - 1;
				}
				
				if(this.products[i].price < 0)
					this.products[i].price = 0;
			}
		}
		return this.products;
	}
	
	getProducts(){
		return this.products;
	}
}

module.exports = {
	Product,
	CarInsurance
}