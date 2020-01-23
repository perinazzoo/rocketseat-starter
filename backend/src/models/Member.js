const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  twitterUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

MemberSchema.plugin(mongoosePaginate);

mongoose.model("Member", MemberSchema);
