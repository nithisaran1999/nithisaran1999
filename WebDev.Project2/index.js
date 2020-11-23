const express = require('express')
const app = express()
const port = 3333

app.listen(port,()=> {
    console.log(`App Listening On Port ${port}`)
    })

app.use(express.static('public'));
    
app.get('/api',(req,res) => {
    console.log(req)
})