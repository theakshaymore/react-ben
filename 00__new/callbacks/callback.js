// Callback
// - function passed as a argument to another function which will be called later
// - hence the name - callback - means it will be called back later
// - issue with callback
// -- callback hell
// -- inversion of control

let cart = ["abc", "xyz", "eee"];

db.createOrder(cart, db.makePayemnt(db.sendSummary(db.sendMail())));
