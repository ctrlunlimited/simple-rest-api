# simple-rest-api

### Part 1: REST API Development

1. First, make sure you have Node.js installed on your machine.

2. Create a new directory for your project and navigate into it:

```
mkdir simple-rest-api
cd simple-rest-api
```
3. Initialize a new Node.js project and Install Express:

```
npm init -y
npm install express
```
4. Create a new file named server.js in your project and add the following code:

```
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello Smile' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

```
5. Alternatively, you can download the raw file from the shared repo
6. Save the file and close it.

7. To run the REST API locally, execute the following command in your terminal:

`node index.js`

8. This will start the server, and you can access the API at `http://localhost:3000` 
9. if using public cloud you can access it using `http://ip-of-your-vm:3000` ensure port 3000 is opened on your SG 

