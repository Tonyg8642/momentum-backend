const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const items = [
  {
    id: 1,
    title: "Black Hoodie",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    price: 45,
  },
  {
    id: 2,
    title: "White T-Shirt",
    imageUrl: "https://images.unsplash.com/photo-1527719327859-c6ce80353573",
    price: 20,
  },
  {
    id: 3,
    title: "Blue Jacket",
    imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    price: 65,
  },
];

app.get("/", (req, res) => {
  res.send("Momentum backend is running");
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});