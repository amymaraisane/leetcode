// adjacency matrix graph
class Graph1 {

  constructor(vertices) {
    this.numVertices = vertices;
    this.adjMatrix = Array.from({ length: vertices}, () => Array(vertices).fill(false));
    console.log(this.adjMatrix)
  }

  addEdge(i, j) {
    this.adjMatrix[i][j] = true;
    this.adjMatrix[j][i] = true;
  }
}

// let graph1 = new Graph1(2);
// console.log(graph1);


// graphs using an adjacency list (not adj matrix)
const adjList =
  {
    '0': [ 1, 2, 3 ],
    '1': [ 0, 2 ],
    '2': [ 0, 1, 4 ],
    '3': [ 0 ],
    '4': [ 2 ]
  }


function visit(adjList, stack, visited) {
  if (stack.length === 0) return;
  // put top item of stack on 'visted' list
  let topItem = stack.shift()
  visited.push(parseInt(topItem));
  console.log('visited', visited)
  console.log('top item', adjList[topItem])

  // create a list of vertice's adjacent nodes. add the ones that are not visited to top of stack
  // should this be visited instead?
  for (let i = 0; i < adjList[topItem]?.length; i++) {
    let toCheck = adjList[topItem][i];
    if (!visited.includes(toCheck) && !stack.includes(toCheck)) {
      console.log('put on stack', toCheck)
      stack.push(adjList[topItem][i])
      console.log('stack', stack)
    }
  }
  visit(adjList, stack, visited)
}
// one hour

// purpose of DFS is to mark as visited
function visitAll(adjList) {
  // how to refer to one vertex?
  let stack = [];
  let visited = [];

  // put any of one graph's vertices on a stack? Object.getKey()?
  stack.push(Object.keys(adjList)[0])
  console.log(stack)
  visit(adjList, stack, visited);
}

visitAll(adjList)

