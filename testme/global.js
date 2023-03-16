
console.log(__dirname);
console.log(__filename);



let greeting = () => console.log("Hello!! Welcome", __dirname);

setInterval(greeting, 2000)