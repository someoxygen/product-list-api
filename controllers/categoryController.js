const Category = require("../models/Category");

// Kategorileri Listeleme
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Yeni Kategori Ekleme
exports.createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: "Kategori adı gerekli" });

  try {
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Kategori eklenirken hata oluştu" });
  }
};
