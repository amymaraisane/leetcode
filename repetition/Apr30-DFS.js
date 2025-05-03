class Graph {

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(i) {
    this.adjacencyList[i] = []
  }

  addEdge(i, j) {
    this.adjacencyList[i].push(j)
    this.adjacencyList[j].push(i)
  }
}

let graph = new Graph()
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addEdge(0, 1)
graph.addEdge(0,2 )
graph.addEdge(0,3 )
graph.addEdge(1,2 )
graph.addEdge(2,4 )

// graphs using an adjacency list (not adj matrix)
const adjList =
  {
    '0': [ 1, 2, 3 ],
    '1': [ 0, 2 ],
    '2': [ 0, 1, 4 ],
    '3': [ 0 ],
    '4': [ 2 ]
  };

function main(adjList) {
  let stack = [];
  let visited = [];

  stack.push(adjList[4][0]);
  return dfs(stack.pop(), stack, visited, adjList)
}

function dfs(visiting, stack, visited, adjList) {
  if (!visited.includes(visiting)) {
    visited.push(visiting);
    adjList[visiting].forEach(node => {
      return dfs(node, stack, visited, adjList)
    })
  }
  console.log(visited);
}

// main(adjList);
// 17 min with looking at 3 step directions from https://www.programiz.com/dsa/graph-dfs


let grid = [
  [1, 0],
  [0, 1]
]

function main(grid) {
  let visited = [];
  let islands = 1;

  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      console.log('search: ', i, j)
      recursiveSearch(grid, i, j);
    }
  }
}

// strategy: set visited cells arbitrarily to 0 as a way of knowing not to visit them again
function recursiveSearch(grid, row, column) {
  if (grid[row][column] !== 1) {
    console.log('found a 0')
  }
  else {
    if (column < grid[0].length) {
      console.log('search right')
      recursiveSearch(grid, row, column + 1)
    }
    if (column > 0) {
      console.log('search left')
      recursiveSearch(grid, row, column - 1)
    }
  }
}

main(grid)
