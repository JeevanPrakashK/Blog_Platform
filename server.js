// server.js
const express = require("express");
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Blog Post Schema
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  blogNumber: { type: Number, unique: true },
  date: { type: Date, default: Date.now },
});

PostSchema.plugin(AutoIncrement, { inc_field: "blogNumber" });

const Post = mongoose.model("Post", PostSchema);

// Routes
app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.json(newPost);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
