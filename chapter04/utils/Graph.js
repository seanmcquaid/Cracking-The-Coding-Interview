class Graph {
  constructor() {
    this.nodes = {};
  }

  addEdge(node, edge) {
    if (this.nodes[node] === undefined) {
      return 'node does not exist';
    } else if (this.nodes[node][edge]) {
      return `edge ${node}-${edge} already exists`;
    } else {
      this.nodes[node][edge] = true;
    }
  }

  addNode(value) {
    if (this.nodes[value] !== undefined) {
      return `node of value ${value} already exists`;
    } else {
      this.nodes[value] = {};
    }
  }

  findEdges(node) {
    if (this.nodes[node] === undefined) {
      return 'node does not exist';
    } else {
      return this.nodes[node];
    }
  }

  hasEdge(node, edge) {
    if (this.nodes[node] === undefined) {
      return false;
    } else {
      return this.nodes[node][edge] !== undefined;
    }
  }

  hasNode(node) {
    return this.nodes[node] !== undefined;
  }

  removeEdge(node, edge) {
    if (this.nodes[node] === undefined) {
      return 'node does not exist';
    } else {
      delete this.nodes[node][edge];
    }
  }

  removeNode(node) {
    if (this.nodes[node] === undefined) {
      return 'node does not exist';
    } else {
      delete this.nodes[node];
      for (const currNode in this.nodes) {
        if (this.nodes[currNode][node] !== undefined) {
          delete this.nodes[currNode][node];
        }
      }
    }
  }

  findNodeWithNoChildren() {
    for (const node in this.nodes) {
      if (Object.keys(this.nodes[node]).length === 0) {
        return node;
      }
    }
    return undefined;
  }
}

module.exports = Graph;
