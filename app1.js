const mongoose=require('mongoose');
const {Db}=require('mongodb');

mongoose.connect("mongodb://0.0.0.0:27017/shopDB2",{useNewUrlParser:true, useUnifiedTopology:true});

const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    stock:Number
});

const product =mongoose.model("product",productSchema);

const pen=new product({
    name:"pen",
    price:1.90,
    stock:100
})

const pencil=new product({
    name:"pencil",
    price:0.90,
    stock:120
});

const eraser=new product({
    name:"eraser",
    price:0.40,
    stock:200
})

const customerSchema=mongoose.Schema({
    name:String,
    order:productSchema
});

const customer=mongoose.model("customer",customerSchema);

const john=new customer({
    name:"john",
    order:pencil
});
john.save();
// product.insertMany([pencil,eraser],function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("elements inserted successfully..");
//     }
// })

// product.find(function(err,product){
//     if(err){
//         console.log(err);
//     }
//     else{
//         product.forEach(function(product){
//             console.log(product.name);
//         })
//     }
// })



//pen.save();