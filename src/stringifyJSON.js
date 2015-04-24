// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if( obj === undefined ){ return; }
  if( typeof obj === "function" ){ return; }
  if( typeof obj === "string" ){ return obj = '\"' + String(obj) + '\"';}
  if( typeof obj === "number" ){ return obj = String(obj);}
  if( typeof obj === "boolean" ){ return obj = String(obj);}
  if( obj === null ){ return obj = "null"; }
  if( Array.isArray(obj)){
  	for(var i = 0; i < obj.length; i++){
  		obj[i] = stringifyJSON(obj[i]);
  	}

  	return '[' + obj + ']';
  }

};
