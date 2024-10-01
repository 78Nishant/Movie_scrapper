const cors=require('cors')
const express=require('express');
const cheerio=require('cheerio');
const axios=require('axios');

const app=express()
const gdriveRouter=require('./routes/main.routes')

app.use(cors())

const test=['hi','ko','run']
const easyDownload=[]
var downloadQuality=[]
var downloadLinks=[];
const url="https://moviesmod.day/download-demise-2024-hindi-480p-720p-1080p/"

axios(url)
.then(res=>{
    const html=res.data;
    const $=cheerio.load(html)

    $('.single_post').find('h4').each(async function(){
        const qualityType=$(this).text()
        await downloadQuality.push(qualityType)
    })
    var count=0;
    $('.single_post').find('[rel="nofollow noopener external noreferrer"]').each(async function(){
        const link=$(this).attr('href')   
        easyDownload.push(link)
        await downloadLinks.push({"Quality":downloadQuality[count],"Link":link})
        console.log(downloadLinks)
        count+=1;
    })
    
   
})

// const link="https://links.modpro.blog/archives/110496#clickimage"
// axios(link).then(res=>{
//     const html=res.data;
//     const $=cheerio.load(html);
//     const info=$('[title="✔ Fast Google Drive Links (No Login Required)"]').prop('href')  // Get specific tag
//     console.log(info) 
// })


app.get('/',(req,res)=>{
    res.json(downloadLinks)
})
app.use('/click',gdriveRouter.router)


app.listen(5000,()=>{
    console.log("server started at port 5000")
})