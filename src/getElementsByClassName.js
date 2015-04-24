// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var nodes = [];

  // extend the NodeList to include forEach function. 
  NodeList.prototype.forEach = Array.prototype.forEach;


  	var getNode = function(node){
  		// base case
  		if(node.classList){
  			if(node.classList.contains(className)){
  				nodes.push(node);
  			}
  		}

  		// recursive case
  		if(node.childNodes){
  			node.childNodes.forEach(function(node){
  				getNode(node);
  			})
  		}
  	}

  getNode(document.body);

  return nodes;
};
