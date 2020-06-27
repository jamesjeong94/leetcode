//[[1,2], [3], [3], []]

//node 0 is connected to node 1 and 2
//node 1 is connected to node 3
//node 2 is connected to node 3
//node 3 is connnected to nothing

//find all paths from node 0 to node n-1 (node 3)

//always start from node 0
//always end at node n - 1
//can we make the assumption that at any crossroad of decision, we will end up at node n - 1

var allPathsSourceTarget = function (graph) {
  let result = [];
  const traverse = (node, cache) => {
    if (node.length === 0) {
      result.push(cache);
      return;
    } else {
      for (let i = 0; i < node.length; i++) {
        let passDownArray = [...cache];
        passDownArray.push(node[i]);
        traverse(graph[node[i]], passDownArray);
      }
    }
  };
  traverse(graph[0], [0]);
  return result;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
//[[1,2], [3], [3], []]
