export default function handleLocalStorageEmailAndPassword(email, password) {
    localStorage.setItem("email", JSON.stringify(email));//saves client's data into localStorage:
    localStorage.setItem("password", JSON.stringify(password));//saves client's data into localStorage:
  }