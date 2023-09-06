const express = require('express')
const anova = require('ml-anova')
const app = express()
app.all('/', (req, res) => {
    //const data= req.body.data
    //const classes = req.body.classes
    //const result = anova.oneWay(data,classes)
    res.json(req.body)
})
app.listen(process.env.PORT || 3000)
