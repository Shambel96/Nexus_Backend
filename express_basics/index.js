// common-js
const express = require("express");
const app = express(); // intialize express
const port = 5500;

// read something
// we can use http method

// url, callback(request, response) -> function
// http method
// localhost:5000/
// rest API
app.get("/", (request, response) => {
  response.send("Read this thing: Get request ");
});
//  0 to 1023 => well-known ports
//! 1024 to 49151 => registered port
// ip_address + port
//   my_personal_pc_ip_address  + 5500
//
// 192.168.161.171:port
// 192.168.161.171:5500
// 127.0.0.0 => localhost
// localhost:5500
// port, callback
// listen -> hOF
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
// locally

//
