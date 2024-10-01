const axios=require('axios')
const cheerio=require('cheerio');
const puppeteer = require('puppeteer');
// const { exec } = require('child_process');

// const url="https://tech.unblockedgames.world/"

// axios(url,{ 
//     httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
// }).then(res=>{  
//     const html=res.data;
//     const $=cheerio.load(html);
//     const click=$('main').find('div').prop('innerHTML')
//     const scr=new RegExp(click)
//     console.log(scr)
//     // console.log($.text())
// })
// (async () => {
//     // Launch the browser
//     const browser = await puppeteer.connect({
//         browserURL: 'http://localhost:9222', 
//     }); 
//     const page = await browser.newPage();
 
//     // Navigate to the page that loads content via JavaScript
//     await page.goto("https://tech.unblockedgames.world/?sid=VWNwbWlPV1lMWFcwa1ZDb1dxQVBZcExWbFhIM3l3TExmMjg5TGlNcDcrSmhRZmlMWEs1b0pXRUlnRllnckQ5dWdJTDRiOGNLM3N1WWx5d0Y5Vk16SGl1MHN3ZDkzUnpPVW1vRUM3OFNRZEx1b2xCK0pxRkpIalNyS3dhamtWaG9OTDFsNVovdnBMUEpObGwvZHNqZVE5Unc2NXB4UXhROGt3eGZDNytkbFdBR2N6OVd3VHVwM2VQeG5rSFVsejJnUFlKeDZwQ2Jtc0h0aE0rYlErQWtpdlNsdjcwMitReXptdDRFWmhKR2hZT1RjcFVTaTY4VDMvazdicE5SVDVhRA==", { waitUntil: 'networkidle2' });

//      // Wait for a specific element that contains the content you want to scrape
//      await page.waitForSelector('main div'); // Adjust this selector as needed 

//     // Get the content of the page
//     const content = await page.content();
//     // const command='"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="C:\path\to\your\chrome-profile"'

//     // exec(command, (error, stdout, stderr) => {
//     //     if (error) { 
//     //         console.error(`Error: ${error.message}`);
//     //         return;
//     //     }
//     //     if (stderr) {
//     //         console.error(`Stderr: ${stderr}`);
//     //         return;
//     //     }
//     //     console.log(`Stdout: ${stdout}`);
//     // });

//     // Load the content into Cheerio 
//     const $ = cheerio.load(content);  
    
//     await new Promise(resolve => setTimeout(resolve, 1000));  

//     const fetchData=$('main').find('div').find('form').find('a').prop('outerHTML')
//     console.log(fetchData)
//     // // Click on the anchor tag 
//     // await page.click(fetchData);
    
//     // await page.waitForTimeout(1000);// Adjust the selector as needed

//     // const newContent=await page.content()   
//     data.push(fetchData) 
//     // Scrape the data you need
//     // For example, let's say you want to get all the titles in <h1> tags
//     // $('h1').each((index, element) => { 
//     //     console.log($(element).text());
//     // });

//     // Close the browser
//     await browser.close();
// })();

// var data=[]

exports.getNext=(req,res)=>{
    res.json(data)
}