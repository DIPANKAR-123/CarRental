import { getDB } from "./ConnectDb.js";
import { generateUUID } from "./uuid.js"; 

export function addUser(user) {
  const db = getDB();
  const transaction = db.transaction("UsersSchema", "readwrite");
  const store = transaction.objectStore("UsersSchema");

  const userWithId = {
    id: generateUUID(), 
    ...user
  };

  return new Promise((resolve, reject) => {
    const request = store.add(userWithId);

    request.onsuccess = () => resolve("User added successfully!");
    request.onerror = (event) => reject(`Failed to add user: ${event.target.errorCode}`);
  });
}
