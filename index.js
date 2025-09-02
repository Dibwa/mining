const express = require("express");
const path = require("path");

const app = express();
const fs = require("node:fs")




const cors = require("cors");




//PORT LISTENING
const PORT = process.env.PORT || 700;
// const { myEmitter } = require("./streams/streams");

//////END---IMPORTED ROUTES/////////
function portListening() {
  app .listen(PORT, function () {

    console.log(`http/ws server listening on ${PORT}`);
  });
}






//ROUTE MIDDLEWARE
app.use(cors({ origin: "*" }));

app.use(express.static(path.join(__dirname, "Public")));
app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ limit: "1000mb" }));

//ABOUT PAGE
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./Public/landingpage.html"));
});

//ADMIN PAGE
app.get("/admin", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./Public/admin.html"));
});
//ADMIN PAGE


//PAGE NOT FOUND ROUTE
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./Public/404.html"));
});















// //PAGE NOT FOUND ROUTE
// app.get("/orders", (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, "./Public/orders.html"));
// });
// //PAGE NOT FOUND ROUTE
// app.get("/orderstatus", (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, "./Public/orderstatus.html"));
// });

// //PAGE NOT FOUND ROUTE
// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "./Public/404.html"));
// });

 portListening();

//////END--PUBLIC PAGES
