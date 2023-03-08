const express = require('express')
const app = express()
require('dotenv').config()

const jwt = require('jsonwebtoken')

app.use(express.json())  //lets application use json from the body that gets passed upto it
const posts = [
    {
        username: 'kyle',
        title: 'Post 1',
        address: 'earth'
    },
    {
        username: 'Jim',
        title: 'Post 2',
        address: 'moon'
    }
]

app.get('/posts', authenticateToken, (req,res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/login', (req,res) => {
    //Authenticate user
    const username = req.body.username
    const user = {name: username}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    // Bearer TOKEN
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()          //so that we can move on from our middle ware
    })
   
}

app.listen(3000)