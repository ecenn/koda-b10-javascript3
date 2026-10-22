let n = 5;

for (let y = 0; y < n; y++) {
  let row = "";
  for (let x = 0; x < n; x++) {
    if (x == 0 || x == n - 1 || y == 0 || y == n - 1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}