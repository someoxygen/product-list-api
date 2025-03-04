çalıştırmak için proje dizininde 
node server.js komutu çalıştır.


test için

MONGO_URI=mongodb://localhost:27017/productDB
PORT=5000




POST
http://localhost:5000/api/categories
body 
{
  "name": "Gıda"
}


POST 
http://localhost:5000/api/products
{
  "name": "iPhone 15",
  "price": 80000,
  "category": "67c75e870f08851ba3370c6f"
}




1. Sayfa, 5 ürün	http://localhost:5000/api/products?page=1&limit=5	İlk 5 ürünü getir
2. Sayfa, 5 ürün	http://localhost:5000/api/products?page=2&limit=5	6-10 arasındaki ürünler
Tüm ürünleri listele (limit 100)	http://localhost:5000/api/products?page=1&limit=100	Maksimum 100 ürün
Kategoriye göre filtrele	http://localhost:5000/api/products?page=1&limit=5&category=65ef4c2b3b14e51f0d5d2d91	Belirtilen kategoriye ait ürünleri getir
İsme göre filtrele	http://localhost:5000/api/products?page=1&limit=5&search=iphone	İçinde "iphone" geçen ürünleri getir



