const axios = require("axios");
const fs = require("fs");
const formData = require('form-data');

let mydata = new formData();
mydata.append('file', fs.createReadStream('./testfile.zip'));
mydata.append("name", "Henry");
mydata.append("age", "31");

axios({
  method: "post",
  url: "http://localhost:3000/up?id=camel&count=789",
  data: mydata,
  headers: {
    "Content-Type": `multipart/form-data;boundary=${mydata.getBoundary()}`,
    "animal": "monkey",
    "fruit": "banana"
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});