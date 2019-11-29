const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;
let MovieSchema = new Schema({
  // _id: {type: ObjectId},
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [],
  rated: String,
  awards: {
    type: [new Schema({
      wins: Number,
      nominatios: Number,
      text: String
    })]
  },
  lasupdated: { type: Date, default: Date.now },
  year: Number,
  countries: [String],
  type: String,
  tomatoes : {
    viewer:{
      rating: Number,
      numReviews: Number,
      meter: Number
    },
    fresh: Number,
    critic: {
      rating: Number,
      numReviews: Number,
      meter: Number
    },
    rotten : Number
  }
}
// , {
//   collection: 'movies'
// }
);
module.exports = mongoose.model('movie', MovieSchema);