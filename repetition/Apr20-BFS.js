
function bfs(arr, x, start, end) {
  let mid = Math.floor((start + end) / 2)
  if (x < arr[start] || x > arr[end]) {
    console.log('x not in array!')
    return -1
  }
  if (x === arr[mid]) {
    console.log('found index of x: ', mid)
    return true
  }
  if (x > mid) {
    return bfs(arr, x, mid + 1, end)
  }
  return bfs(arr, x, start, x -1)
}

function startBfs(arr, x) {
  bfs(arr, x, 0, arr.length -1)
}

let arr = [1,2,3]
startBfs(arr, 4)

// 6 minutes!
