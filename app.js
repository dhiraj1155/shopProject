const mongoose = require('mongoose');
const { Db } = require('mongodb');
mongoose.connect("mongodb://0.0.0.0:27017/shopDB1", { useUnifiedTopology: true, useNewUrlParser: true });

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number

});

const product = mongoose.model("product", productSchema);

const sharpner = new product({
    name: "sharpner",
    price: 1.20,
    stock: 10
});

const pen = new product({
    name: "pen",
    price: 1.20,
    stock: 10
});
const pencil = new product({
    name: "pencil",
    price: 0.80,
    stock: 20
});
const eraser = new product({
    name: "eraser",
    price: 0.50,
    stock: 30
});

//  product.save();
// pen.save();

// product.insertMany([pen,pencil,eraser],function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("products added successfully");
//     }
//     mongoose.connection.close();
// })

// product.find(function (err, product) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("products find successfully");
//         // console.log(product);

//         product.forEach(function (product) {
//             console.log(product.name);
//         })
//     }
//     mongoose.connection.close();

//     })

    const customerSchema = mongoose.Schema({
        name: String,
        address: String,
        qty: Number,
        order: productSchema
    })

    const Customer = mongoose.model("customer", customerSchema);

    const customer = new Customer({
        name: "dominic",
        address: "LA",
        qty: 12,
        order: pen
    });

//customer.save();

Customer.updateOne({name:"dekard"},{name:"jason"},{new:true},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("updated one document")
    }
})
Customer.deleteMany({name:"mark"},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("deleted  document")
    }
})
