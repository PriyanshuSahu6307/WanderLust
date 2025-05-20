const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review =require("./review.js");


const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    filename: {
      type: String,
      default: "default.jpg",
    },
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJlZSUyMG5lYXIlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },

  reviews:[{
    type: Schema.Types.ObjectId,
    ref:"Review",},
  ],
});


listingSchema.post("findOneAndDelete " ,async(listing)=>{
 if(listing){
  await Review.deleteMany({_id:{$in : listing.reviews}});
 }
});

// Model
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
