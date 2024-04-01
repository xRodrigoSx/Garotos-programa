let rl = require("readline-sync")
let n = rl.question("Qual o primeiro numero?")
let r = 1
for (let i = 1; i < n; i++) {
    r = r*(i+1)
}
console.log(r) 
