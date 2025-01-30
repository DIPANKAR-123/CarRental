const dbName = "CarRentalDB";
const dbVersion = 1;

const request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = function (event) {
  const db = event.target.result;

  if (!db.objectStoreNames.contains("UsersSchema")) {
    const userStore = db.createObjectStore("UsersSchema", { keyPath: "id" });
    userStore.createIndex("email", "email", { unique: true });
  }
  if (!db.objectStoreNames.contains("BuyersSchema")) {
    const buyerStore = db.createObjectStore("BuyersSchema", { keyPath: "id" });
    buyerStore.createIndex("email", "email", { unique: true });
    buyerStore.createIndex("user_id", "user_id", { unique: true });
  }
  if (!db.objectStoreNames.contains("SellersSchema")) {
    const userStore = db.createObjectStore("SellersSchema", { keyPath: "id" });
    userStore.createIndex("email", "email", { unique: true });
  }

  if (!db.objectStoreNames.contains("CarsSchema")) {
    const carStore = db.createObjectStore("CarsSchema", { keyPath: "id" });
    carStore.createIndex("ownerId", "ownerId", { unique: false });
    carStore.createIndex("category", "category", { unique: false });
  }

  if (!db.objectStoreNames.contains("BookingsSchema")) {
    const bookingStore = db.createObjectStore("BookingsSchema", { keyPath: "id" });
    bookingStore.createIndex("carId", "carId", { unique: false });
    bookingStore.createIndex("userId", "userId", { unique: false });
  }

  if (!db.objectStoreNames.contains("ChatsSchema")) {
    const chatStore = db.createObjectStore("ChatsSchema", { keyPath: "id" });
    chatStore.createIndex("buyerId", "buyerId", { unique: false });
    chatStore.createIndex("sellerId", "sellerId", { unique: false });
  }

  if(!db.objectStoreNames.contains("ProfileSchema")){
    const profileStore=db.createObjectStore("ProfileSchema", { keyPath: "id"});
    chatStore.createIndex("buyerId", "buyerId", { unique: false });
    chatStore.createIndex("sellerId", "sellerId", { unique: false });
  }
  if(!db.objectStoreNames.contains("BiddingSchema")){
    const profileStore=db.createObjectStore("BiddingSchema", { keyPath: "id"});
    chatStore.createIndex("buyerId", "buyerId", { unique: false });
    chatStore.createIndex("sellerId", "sellerId", { unique: false });
  }

  console.log("Database setup complete!");
};

let db;

request.onsuccess = function (event) {
  db = event.target.result;
  console.log("Database connection established!");
};

request.onerror = function (event) {
  console.error("Database error:", event.target.errorCode);
};

export function getDB() {
  if (!db) throw new Error("Database connection not yet established.");
  return db;
}
