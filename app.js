// imports

const express = require('express');
const app = express();
const port = 3000;


// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css/style.css'))
app.use('/js', express.static(__dirname + 'public/js'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

// Listen on port 3000
app.listen(port, () => console.info(`Serveris veikia ant ${port} porto`))