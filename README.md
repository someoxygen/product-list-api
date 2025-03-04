
# 🛍️ Ürün Listeleme API'si (Node.js & MongoDB)

Bu proje, **Node.js**, **Express.js** ve **MongoDB** kullanarak oluşturulmuş bir **Ürün Listeleme API'sidir**. API, kategorileri ve ürünleri saklar, ürünleri filtreleyerek listeleyebilir, ekleyebilir ve sayfalama (pagination) desteği sunar.


## 🚀 **Kurulum ve Çalıştırma**
### **1️⃣ Gerekli Bağımlılıkları Yükleyin**
Proje klasörüne terminalden girin ve aşağıdaki komutları çalıştırın:

bash
npm install

Bu komut **Express, Mongoose, dotenv, cors, nodemon** gibi gerekli bağımlılıkları yükler.


### **2️⃣ MongoDB'yi Başlatın**
Projede MongoDB kullanılıyor. Eğer **lokal MongoDB kullanıyorsanız**, terminalde şu komutu çalıştırarak başlatabilirsiniz:

bash
mongod

Eğer **MongoDB Atlas kullanıyorsanız**, `.env` dosyanızda kendi bağlantı URL’nizi kullanmalısınız.

---

### **3️⃣ Çevre Değişkenlerini (.env) Ayarlayın**
Proje klasörüne `.env` adında bir dosya oluşturun ve içine şu bilgileri yazın:


MONGO_URI=mongodb://localhost:27017/productDB
PORT=5000

Eğer **MongoDB Atlas kullanıyorsanız**, `MONGO_URI` değerini Atlas'tan aldığınız bağlantı adresiyle değiştirin.


### **4️⃣ Sunucuyu Başlatın**
Aşağıdaki komutlardan birini kullanarak sunucuyu çalıştırabilirsiniz:

bash
node server.js

veya **değişiklikleri otomatik algılamak için**:
bash
npx nodemon server.js


Sunucu başarıyla çalışıyorsa **şu mesajı** görmelisiniz:

Server 5000 portunda çalışıyor
MongoDB Bağlantısı Başarılı


---

## 🛠 **API Kullanımı**
API **`http://localhost:5000/api`** altında çalışmaktadır.

### **📌 1️⃣ Kategori İşlemleri**
#### ✅ **Kategori Ekleme**
- **Endpoint:** `POST /api/categories`
- **Body (JSON)**
json
{
  "name": "Elektronik"
}

- **Dönen Yanıt (201 Created)**
json
{
  "_id": "65ef4c2b3b14e51f0d5d2d91",
  "name": "Elektronik"
}


#### ✅ **Kategori Listeleme**
- **Endpoint:** `GET /api/categories`
- **Dönen Yanıt (200 OK)**
json
[
  {
    "_id": "65ef4c2b3b14e51f0d5d2d91",
    "name": "Elektronik"
  },
  {
    "_id": "65ef4c2b3b14e51f0d5d2d92",
    "name": "Moda"
  }
]


---

### **📌 2️⃣ Ürün İşlemleri**
#### ✅ **Ürün Ekleme**
- **Endpoint:** `POST /api/products`
- **Body (JSON)**
json
{
  "name": "iPhone 14",
  "price": 50000,
  "category": "65ef4c2b3b14e51f0d5d2d91"
}

- **Dönen Yanıt (201 Created)**
json
{
  "_id": "65ef4c2b3b14e51f0d5d2e01",
  "name": "iPhone 14",
  "price": 50000,
  "category": "65ef4c2b3b14e51f0d5d2d91"
}


#### ✅ **Ürün Listeleme**
- **Endpoint:** `GET /api/products`
- **Dönen Yanıt (200 OK)**
json
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

---

### **📌 3️⃣ Filtreleme ve Sayfalama**
#### ✅ **Sayfalama ile Ürün Listeleme**
plaintext
GET /api/products?page=1&limit=5

📌 **Sayfalama parametreleri:**
- **`page=1`** → İlk sayfayı getir.
- **`limit=5`** → Sayfa başına 5 ürün getir.

#### ✅ **İsme Göre Ürün Arama**
plaintext
GET /api/products?search=iphone

- İçinde `"iphone"` geçen ürünleri getirir.

#### ✅ **Belirli Bir Kategorideki Ürünleri Listeleme**
plaintext
GET /api/products?category=65ef4c2b3b14e51f0d5d2d91

- `category` ID’si `"65ef4c2b3b14e51f0d5d2d91"` olan ürünleri listeler.

---

## 🧪 **Test Senaryoları**
Aşağıdaki test senaryoları, API'nin doğru çalıştığını kontrol etmek için kullanılabilir:

| Test Adımı                         | URL                                             | Beklenen Sonuç |
|-------------------------------------|-------------------------------------------------|----------------|
| **1. Sayfa, 5 ürün**               | `/api/products?page=1&limit=5`                  | İlk 5 ürünü getir |
| **2. Sayfa, 5 ürün**               | `/api/products?page=2&limit=5`                  | 6-10 arasındaki ürünler |
| **Tüm ürünleri listele (limit 100)**| `/api/products?page=1&limit=100`                | Maksimum 100 ürün |
| **Kategoriye göre filtrele**        | `/api/products?category=65ef4c2b3b14e51f0d5d2d91` | Belirtilen kategoriye ait ürünler |
| **İsme göre filtrele**              | `/api/products?search=iphone`                   | İçinde "iphone" geçen ürünleri getir |
