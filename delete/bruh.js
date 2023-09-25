const fs = require("fs");
const { parse } = require("csv-parse");
const data = [];

fs.createReadStream("data.csv")
.pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
)
.on("data", function (row) {
    // This will push the object row into the array
    data.push(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end",function(){
    console.log("")
    for(let i =200; i<data.length; i++){
    console.log(data[i])
  }});
