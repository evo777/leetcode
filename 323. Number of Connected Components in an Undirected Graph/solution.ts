// We are counting the number of times we can use dfs on the edges. Each dfs will acccount for all the nodes in that graph.
function countComponents(n: number, edges: number[][]): number {
  const graph = new Map<number, Array<number>>();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }
  for (const [v1, v2] of edges) {
    graph.get(v1).push(v2);
    graph.get(v2).push(v1);
  }

  const visited = new Set<number>();
  let numOfGraphs = 0;
  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      dfs(node, graph, visited);
      numOfGraphs += 1;
    }
  }
  return numOfGraphs;
}

function dfs(node, graph, visited) {
  visited.add(node);
  for (const neighbor of graph.get(node)) {
    if (!visited.has(neighbor)) dfs(neighbor, graph, visited);
  }
}
