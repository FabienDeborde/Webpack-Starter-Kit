//First component example
module.exports = function(){
  // Insert h1 tag with custom message
    var element = document.createElement('h1');
    element.innerHTML = 'Message from component: everything seems fine!';
    return element;
};
