// server.js
const express = require('express');
const app = express();

// Define routes or APIs here
app.get("/", (req, res) => {
    res.json([{name: "dara", age : 20, gender: "male"}]);
})
    

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
