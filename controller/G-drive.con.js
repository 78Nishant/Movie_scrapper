const axios=require('axios')
const cheerio=require('cheerio')

const link="https://links.modpro.blog/archives/110496#clickimage"

 
var gDriveLink;
axios(link).then(res=>{
    const html=res.data; 
    const $=cheerio.load(html);
    const info=$('[title="✔ Fast Google Drive Links (No Login Required)"]').prop('href')  // Get specific tag
    gDriveLink=info
    // console.log("coming from controller",info) 
    // axios(info).then(res=>{
    //     const html=res.data;
    //     const $=cheerio.load(html);
    //     const click=$('.container_el').find('form').find('a').prop('outerHTML') 
    //     console.log(click)
    //     // console.log($.text())
    // })
})

exports.getLink=(req,res)=>{
    res.json(gDriveLink)
}