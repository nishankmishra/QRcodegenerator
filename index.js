import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
        "message": "Type something you want to turn into QR!! : ",
        "name" : "URL",
    
    
    }])
  .then((answers)=>{
        const url = answers.URL
       var qr_svg = qr.image(url);
       qr_svg.pipe(fs.createWriteStream(`${url}.png`));
       console.log("image generated");

 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
})
  .catch((error)=>{
    if (error){

    }
    else{

    }
  })
