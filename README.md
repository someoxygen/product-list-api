# 🛍️ Ürün Listeleme API'si (Node.js & MongoDB)

Bu proje, **Node.js**, **Express.js** ve **MongoDB** kullanarak oluşturulmuş bir **Ürün Listeleme API'sidir**. API, kategorileri ve ürünleri saklar, ürünleri filtreleyerek listeleyebilir, ekleyebilir ve sayfalama (pagination) desteği sunar.

---

## 🚀 **Kurulum ve Çalıştırma**
### **1️⃣ Gerekli Bağımlılıkları Yükleyin**
Proje klasörüne terminalden girin ve aşağıdaki komutları çalıştırın:

bash
npm install


çalıştırmak için proje dizininde 

node server.js 

komutu çalıştır.

Komut çalıştırıldıktan sonra böyle sonuç alıyorsanız proje çalışmıştır.

Server 5000 portunda çalışıyor
MongoDB Bağlantısı Başarılı


MONGO_URI=mongodb://localhost:27017/productDB
PORT=5000


API Kullanımı

Kategori Ekleme

POST
http://localhost:5000/api/categories
body 
{
  "name": "Gıda"
}

Başarılı Dönen Yanıt (201 Created)
{
  "_id": "65ef4c2b3b14e51f0d5d2d91",
  "name": "Gıda"
}

Kategori Listeleme

GET
http://localhost:5000/api/categories

Başarılı Dönen Yanıt (200 OK)

[
  {
    "_id": "65ef4c2b3b14e51f0d5d2d91",
    "name": "Elektronik"
  },
  {
    "_id": "65ef4c2b3b14e51f0d5d2d91",
    "name": "Gıda"
  }
]


Ürün Ekleme

POST 
http://localhost:5000/api/products
{
  "name": "iPhone 15",
  "price": 80000,
  "category": "67c75e870f08851ba3370c6f"
}

Başarılı Dönen Yanıt (201 Created)

{
  "_id": "65ef4c2b3b14e51f0d5d2e01",
  "name": "iPhone 14",
  "price": 50000,
  "category": "65ef4c2b3b14e51f0d5d2d91"
}


Ürün Listeleme
GET 
http://localhost:5000/api/products

Başarılı Dönen Yanıt (200 OK)

[
  {
    "_id": "65ef4c2b3b14e51f0d5d2e01",
    "name": "iPhone 14",
    "price": 50000,
    "category": {
      "_id": "65ef4c2b3b14e51f0d5d2d91",
      "name": "Elektronik"
    }
  }
]


1. Sayfa, 5 ürün	http://localhost:5000/api/products?page=1&limit=5	İlk 5 ürünü getir
2. Sayfa, 5 ürün	http://localhost:5000/api/products?page=2&limit=5	6-10 arasındaki ürünler
Tüm ürünleri listele (limit 100)	http://localhost:5000/api/products?page=1&limit=100	Maksimum 100 ürün
Kategoriye göre filtrele	http://localhost:5000/api/products?page=1&limit=5&category=65ef4c2b3b14e51f0d5d2d91	Belirtilen kategoriye ait ürünleri getir
İsme göre filtrele	http://localhost:5000/api/products?page=1&limit=5&search=iphone	İçinde "iphone" geçen ürünleri getir



