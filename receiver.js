const express = require('express');
const multer  = require('multer');
const bodyParser = require('body-parser');
const app = express();

const upload = multer({dest: 'uploads'});
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));

app.post('/up', upload.single("file"), (req, res) => {
  console.log("=============================");
  console.log(`Received: ${req.method} ${req.route.path}.`);
  console.log("Headers:", req.headers);
  console.log("Query:", req.query);
  console.log("Body:", req.body);
  console.log("File:", req.file);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));