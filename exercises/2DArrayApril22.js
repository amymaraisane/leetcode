var num = '123456';
var row = 3; // Known at runtime
var col = 2; // Known at runtime
var i = 0;
var grid = [[]];
for (var r = 0; r < row; ++r) {
  grid[r] = [];
  for (var c = 0; c < col; ++c) {
    grid[r][c] = num[i++];
  }
}
console.table(grid);
console.log(grid[2]);


