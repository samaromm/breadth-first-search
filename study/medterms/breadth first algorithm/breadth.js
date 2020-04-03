function breadthFirst(graph,letters) {
  let total={}; //combine all the objects together
  for(let i=0; i<graph.length;i++){ //finding the distances between all the cities
    let root = letters[i]   
    let singlePath = {};    
    for (let l = 0; l < graph.length; l++) {
      singlePath[letters[l]] = -1;
    }
    singlePath[root] = 0; 
    let queue = [root]; 
    let curr;  
    while (queue.length != 0) {
      curr = queue.shift();      
      let findCurr = graph[letters.indexOf(curr)];
      let connectedList = []; 
      let connected = findCurr.indexOf(1); 
      while (connected != -1) {
        connectedList.push(connected); 
        connected = findCurr.indexOf(1, connected + 1); 
      }     
      for (let j = 0; j < connectedList.length; j++) {
        if (singlePath[letters[connectedList[j]]] == -1) {
          singlePath[letters[connectedList[j]]] = singlePath[curr] + 1;
          queue.push(letters[connectedList[j]]); 
        }
      }
    }  
    total[letters[i]] = singlePath;   
  }
    console.log(total)
    return shortestPath(total,letters)
}

function shortestPath(total,letters){
  let visited=[letters[0]] //finding the shortest path using the distances we got above
  let element= total[letters[0]]
  while(visited.length!=8){
    let smallestNode, smallest
    for(let i=0; i<letters.length;i++){
      if(element[letters[i]]!=0&&!(visited.includes(letters[i]))){
        smallestNode=letters[i]
        smallest=element[smallestNode]
        break;
      }
    }   
    for(let ele2 in element){  
      if(element[ele2]!=0 && element[ele2] < smallest &&!(visited.includes(ele2))){
        smallest=element[ele2]
        smallestNode=ele2
      }
    }
    visited.push(smallestNode)
    element=total[smallestNode]
  }
  return visited
}

let graphArray = [
  [0, 1, 1, 0, 0,1,0,0],
  [0, 0, 1, 1, 0,0,0,0],
  [1, 0, 0, 0, 0,1,0,0],
  [0, 0, 1, 0, 1,0,0,0],
  [0, 0, 0, 1, 0,0,0,0],
  [0, 0, 1, 0, 0,0,1,0],
  [1, 0, 0, 0, 0,0,0,1],
  [0, 0, 0, 1, 0,0,1,0]
];
let letters =[ "H","M","A","W","C","O","F","K"]
console.log(breadthFirst(graphArray,letters));