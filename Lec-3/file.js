const fs =require('fs');



// ....>>>>.......>>>>>>>>>>> >>>>>>>>Wirte File..............<<<<<<<<<<<<<<<<<<..................

// Sync Call
fs.writeFileSync("./test.txt",'Hello World')


// Async Call
fs.writeFile("./test.txt",'Hello World How are You',(err)=>{})



// ....>>>>.......>>>>>>>>>>> >>>>>>>>Read File..............<<<<<<<<<<<<<<<<<<..................
// Sync Call Bloscking Request

const result = fs.readFileSync("./contact.txt","utf-8")
console.log(result);


// Async Call require Call back Non Blocking Request 

 fs.readFile("./contact.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
        
    }
    else{
        console.log(result);
        
    }
})

// ....>>>>.......>>>>>>>>>>> >>>>>>>>Append (Update) File..............<<<<<<<<<<<<<<<<<<..................

fs.appendFileSync("./test.txt", `${Date.now()}   New Line Is starting \n `)


// ....>>>>.......>>>>>>>>>>> >>>>>>>>  COPY File..............<<<<<<<<<<<<<<<<<<..................


fs.cpSync("./text.txt","./copy.txt");
const copyPath = './copy.txt';
const path = './test.txt';

try {
    
    if (fs.existsSync(path)) {
      fs.cpSync(path, copyPath);
      console.log('File copied successfully.');
    } else {
      console.log('File does not exist.');
    }
  } catch (err) {
    console.error('Error:', err);
  }

// ....>>>>.......>>>>>>>>>>> >>>>>>>>  Delete File..............<<<<<<<<<<<<<<<<<<..................



fs.unlinkSync('./copy.txt')