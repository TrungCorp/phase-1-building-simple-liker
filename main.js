// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelectorAll('.like-glyph')
const modak = document.querySelector('#modal')
heart.forEach(function(button){
  button.addEventListener('click',function (){
    mimicServerCall()
      .then(function(response){
        if (response === 'Pretend remote server notified of action!')
        {
          if (button.textContent === FULL_HEART)
          {
            button.textContent = EMPTY_HEART
            button.classList.remove('activated-heart')
          }
          else{
            button.textContent = FULL_HEART
            button.classList.add('activated-heart')
          }
        }
      })
      .catch (function(response){
        modak.classList.remove('hidden')
        setTimeout(function(){modak.classList.add('hidden')},3000)
      })
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
