import express from 'express'
import { postModel } from '../models/postSchema.js'
const router = express.Router()


router.get('/', (req,res) =>{
    res.send('hello world')
} )

router.post('/sendposttodatabase', async (req, res) =>{
    const {title, description} = req.body
    try{
        if(!title || !description){
            res.status(422).json({error:"Please filled the required fields"})
        }else{
            const date = new Date()
            const localdate = date.toLocaleString('en-US', {
                hour12: false
            })


            const newPost = new postModel({title, description, postDate: localdate})
            await newPost.save()
            res.status(200).json({message:"Post has been published"})
        }
        
    }catch(err){
        res.status(400).json({error: 'Something went wrong'})
        
    }
})

// send the data of posts as a json. so that it can be fetch and display data of posts using map
router.get('/getpostfromdatabase', (req, res) =>{
    postModel.find().then((postModel) =>{
        res.json(postModel)
    }).catch((err) =>{
        console.log('Error post getting');
        
    })
})

export default router