const Product = require("../models/Product");
const Category = require("../models/Category");

// Ürün Listeleme (Sayfalama, Filtreleme ve Arama)
exports.getProducts = async (req, res) => {
  try {
    let { page = 1, limit = 5, search = "", category } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    let filter = {};
    if (search) filter.name = { $regex: search, $options: "i" };
    if (category) filter.category = category;

    const products = await Product.find(filter)
      .populate("category", "name")
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Yeni Ürün Ekleme
exports.createProduct = async (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ message: "Tüm alanlar gereklidir" });
  }

  try {
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(400).json({ message: "Geçersiz kategori ID" });
    }

    const product = new Product({ name, price, category });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Ürün eklenirken hata oluştu" });
  }
};
