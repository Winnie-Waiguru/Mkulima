class Mkulima{
    constructor(){
        this.farms=[];
        this.products=[];
        this.orders=[];
//  1. Adding farm
    this.addFarm=(farmId, name, farmer, phone, address
        )=>{
    this.farms.push({
        farmId:farmId,
        name:name,
        farmer:farmer,
        phone:phone,
        address:address
    })
}
//  2. Remove Farm
    this.removeFarm=(farmId)=>{
        let deleteFarm=this.farms.find(item=>item.farmId===farmId) 
        let farmIndex=this.farms.indexOf(deleteFarm)
        this.farms.splice(farmIndex,1)
    }

    
//  4. Get Farm
    this.getFarm=(newId)=>{
        console.log( this.farms.find(item =>item.farmId===newId))
    }
    this.addProduct=(productId, name, price)=>{
        this.products.push({
            productId:productId,
            name:name,
            price:price
        })
    }
    this.removeProduct=(productId)=>{
        let deleteProduct=this.products.find(item=>item.productId===productId)
        let productIndex=this.products.indexOf(deleteProduct)
        this.products.splice(productIndex,1)


}

    this.getProduct=(findId)=>{
        console.log(this.products.find(item=>item.productId===findId))

    }

    this.printProduct=()=>{
        console.log(this.products)
    }

    this.calculateOrderCost=(newId,quantity)=>{
        let product=this.products.find(item=>item.productId ===newId)
        console.log(`Total cost of you order is ${product.price*quantity}`)
        this.orders.push(product)
    }
}
}

let mkulima1=new Mkulima()
mkulima1.addFarm(56789,"Waitathu","Steve","0700034565", 43567)
mkulima1.addFarm(765789,"Mushatha","Mary","0745673289",09879)
mkulima1.removeFarm(56789)
mkulima1.getFarm(765789)
// mkulima1.updateFarm(56764,78985,"ruiru","Jacob","0743256749",098767)
mkulima1.addProduct(75, "maize",1000)
mkulima1.addProduct(85,"Potatoes",25)
mkulima1.getProduct(75)
mkulima1.calculateOrderCost(75,5)
mkulima1.printProduct()
console.log(mkulima1.farms)
