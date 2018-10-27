const _ = require("lodash");

function component() {
 let element = document.createElement('div');
// element.innertHTML = _.join(['Hello', 'there!'], ' ');
element.innerHTML = "<strong>hi katrin Hi there!</strong>"; 
return element;
}

document.body.appendChild(component());
