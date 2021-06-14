const Graph = require('./utils/Graph');

const buildOrder = (projects, dependencies) => {
  const graph = new Graph();
  projects.forEach((project) => {
    graph.addNode(project);
  });
  dependencies.forEach((dependency) => {
    graph.addEdge(dependency[1], dependency[0]);
  });
  const answer = [];
  let currNode = graph.findNodeWithNoChildren();
  while (currNode !== undefined) {
    answer.push(currNode);
    graph.removeNode(currNode);
    currNode = graph.findNodeWithNoChildren();
  }
  if (answer.length === projects.length) {
    return answer;
  } else {
    throw Error;
  }
};

const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [
  ['a', 'd'],
  ['f', 'b'],
  ['b', 'd'],
  ['f', 'a'],
  ['d', 'c'],
];

console.log(buildOrder(projects, dependencies));
