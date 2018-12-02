class Graph
{
    constructor(NumberOfVertices)
    {
        this.NumberOfVertices = NumberOfVertices;
        this.AdjacentList = new Map();
    }

    addNode(Node)
    {
        this.AdjacentList.set(Node, []);
    }

    addEdge(Node1, Node2)
    {
      //If it's a direct graph
      this.AdjacentList.get(Node1).push(Node2);

      //If not : you need to add this direction
      this.AdjacentList.get(Node2).push(Node1);

    }

    printGraph()
  {
    // get all the nodes
    var get_nodes = this.AdjacentList.keys();

    // iterate over the nodes
    for (let node of get_nodes)
    {
        // great the corresponding adjacency list
        // for the node
        let get_adjacent_nodes = this.AdjacentList.get(node);
        let result_adjacent_nodes = "";

        // iterate over the adjacency list
        // concatenate the values into a string
        for (let adjacent_node of get_adjacent_nodes)
            result_adjacent_nodes += adjacent_node + " ";

        // print the node and its adjacency list
        console.log(node + " -> " + result_adjacent_nodes);
    }
  }

}
