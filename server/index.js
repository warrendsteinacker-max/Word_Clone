import express from 'express'
import cors from 'cors'
import Users from './Users.js'


const app = express()

app.use(cors({orgin: '*', credentials: true}))
app.use(express.json())

app.post('/login', (req, res) => {
    try{
        const {pass, user} = req.body

        const User = Users.find((U) => U.user == user)

        if(!User){
            return res.status(400).json({error: 'wrong password or user'})
        }
        
        if(pass !== User.pass){
            return res.status(400).json({error: 'wrong password or user'})
        }
        return res.status(200).json({S: 'good to go'})
        }
    catch(error){
        console.error(error.message)
        return res.status(500).json({error: 'somthing went worng'})
        }
})

app.listen(8000, () => {
    console.log('server runing on port 8000')
})