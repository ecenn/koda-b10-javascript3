// for (let i = 0; i < 5; i++) {
//     console.log("* ".repeat(5))
// }

let temp = ""

for (let x = 0; x < 5; x++) {
    for (let i = 0; i < 5; i++) {
        temp += "* "
    }
    console.log(temp)
    temp = ""
}
