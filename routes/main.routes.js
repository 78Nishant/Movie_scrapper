const express=require('express')
const controller=require('../controller/G-drive.con')
const nextController=require('../controller/next.con')


const router=express.Router()

router
.get('/',controller.getLink)
.get('/next',nextController.getNext)

exports.router=router