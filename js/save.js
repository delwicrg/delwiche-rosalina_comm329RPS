
function endGame(){

    const fs = require('fs');

    // Data which will write in a file.
    let data = "blah";

    // Write data in 'Output.txt' .
    fs.writeFile('./scores.txt', data, (err) => {
    // In case of a error throw err.
    if (err) throw err;
    })

    console.log("Data has been Written");

}