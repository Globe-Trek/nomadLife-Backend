import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  title: String, 
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const User = mongoose.model('user', userSchema);

export default User;
