// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE

document.cookie = "name=; path=/" + contenteditable;

setcookie('username', contenteditable);

localStorage.getItem('notes-area');

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE

  function setCookie(c_name, contenteditable, expiredays) {  
    var exdate = new Date();  
    exdate.setDate(exdate.getDate() + expiredays);  
    document.cookie = c_name + "=" + value + ";path=/" + ((expiredays ==null) ? "" : ";expires=" + exdate.toGMTString());  
} 

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE

const textarea = document.getElementById('notes-area');

textarea.value = '';

const btn = document.getElementById('clear');

btn.addEventListener('button', function handleClick () {
  
  textarea.value = '';

});

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp