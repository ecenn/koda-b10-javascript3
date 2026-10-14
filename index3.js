const space = " "
const star = "*"

for (let y = 5; y > 0; y--) {
    let row = ""
    for (let x = 0; x <= y - 1; x++) {
        row += space
    }
    for (let z = 0; z <= 5 - y; z++) {
        row += star + space
    }
    console.log(row)
}