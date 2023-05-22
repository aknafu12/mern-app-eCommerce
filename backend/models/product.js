const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name must be at most 100 chracter"],
    minLength: [2, "Product name must be at least 2 chracter"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [5, "Product name cannot exceed 5 chracter"],
    default: 0.0,
  },
  image:[

  {
    public_id:
        {
            type:String,
            required: true, 
        },

  url: 
  {
    type:String,
    required: true
}
  }
] ,
  
  descirption: {
    type: String,
    required: [true, "Please enter product name description"],
    trim: true,
    maxLength: [100, "Product name must be at most 100 chracter"]
  },
  rating: {
    type: Number,
    default:0
  },

  category: {
    type: String,
    required: [true, "Please select category for this product "],
    enum: {
        values: ["Electronics",  "Cameras", "Labtop", "Accessories", "Headphones", "Food","Fashion", "Sports", "Books", "Health"],
        message: 'Please select correct category for product'
    },
  },
  seller: {
    type: String,
    required:[true, 'Please enter product seller']
  },
  
  stock: {
    type: String,
    required:[true, 'Please enter product stock'],
    maxLength:[true, 'Product name can not exceed 5 character'],
    default:0
  },
  
  numberOfReviews: {
    type: Number,
    default:0
  },
  reviews: [
    {
    name: {
        type:String,
        required:true
    },
    
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
            }
            
        

    
  }
],
createdAt:{
    type:Date,
    default:Date.now

}
  
  
});
module.exports = mongoose.model('product', productSchema);
