// query selector variables go here 👇
var posterImg = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuotes = document.querySelector('.poster-quote');
var randomPosterButton = document.querySelector('.show-random');  

// var backToMain = document.querySelector('.show-hidden');

var makeYourOwnPosterButton = document.querySelector('.show-form');
var posterForm = document.querySelector('.poster-form');
var backToMainButton = document.querySelector('.back-to-main');
var mainPoster = document.querySelector('.main-poster');
var showSavedPostersButton = document.querySelector('.show-saved');
var hiddenSavedPosters = document.querySelector('.saved-posters');
var nevermindTakeMeBack = document.querySelector('.show-main');
var showMyPosterButton = document.querySelector('.make-poster');

var userInputImage = document.querySelector('#poster-image-url');
var userInputQuote = document.querySelector('#poster-quote');
var userInputTitle = document.querySelector('#poster-title');

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

var savedPosters = [];
var currentPoster;

// event listeners go here 👇

randomPosterButton.addEventListener('click', showRandomPoster);
window.addEventListener('load', showRandomPoster);
makeYourOwnPosterButton.addEventListener('click', displayForm);
showSavedPostersButton.addEventListener('click', showSavedPosters);
backToMainButton.addEventListener('click', goToMain);
nevermindTakeMeBack.addEventListener('click', goToMain);
// showMyPosterButton.addEventListener('click', displayUserInputPoster);
// ?
showMyPosterButton.addEventListener('click', function (e) {
  e.preventDefault();
  displayUserInputPoster();
});

// functions and event handlers go here 👇
// (we've provided two to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  }
}

function showRandomPoster () {
posterImg.src = images[getRandomIndex(images)];
posterTitle.innerText = titles[getRandomIndex(titles)];
posterQuotes.innerText = quotes[getRandomIndex(quotes)];
createPoster(posterImg.src, posterTitle.innerText, posterQuotes.innerText) 
}
// ?
function displayUserInputPoster() {
  var userInputPoster = createPoster(userInputImage.value, userInputTitle.value, userInputQuote.value)
  posterImg.src = userInputPoster.imageURL
  posterTitle.innerText = userInputPoster.title
  posterQuotes.innerText = userInputPoster.quote
  goToMain()
  
  // hide(posterForm)
  // show(mainPoster)
  // return userInputPoster
}

function addInput() {
  images.push(userInputImage.value)
  title.push(userInputTitle.value)
  quotes.push(userInputQuote.value)
}
var savedPosters = [];
var currentPoster;

comparePoster()
for 
if ID currentPoster === ID what we passed in return true
// push into array
savePosters()
// push into saved posters array

addPosterToArray()
if (comparePoster(currentPoster) does not equal true)

// images, title, quotes
// var userInputImage = document.querySelector('#poster-image-url');
// var userInputQuote = document.querySelector('#poster-quote');
// var userInputTitle = document.querySelector('#poster-title');

function displayForm() {
  // console.log("displayForm")
  mainPoster.hidden = true;
  posterForm.classList.remove('hidden');
}

function showSavedPosters() {
  // wholePage.classList.add('hidden')
  mainPoster.hidden = true;
  hiddenSavedPosters.classList.remove('hidden')
}

function goToMain() {
  mainPoster.hidden = false;
  // mainPoster.classList.remove('hidden');
  posterForm.classList.add('hidden');
  hiddenSavedPosters.classList.add('hidden');
}

// var addImageUrl = document.querySelector('#poster-image-url');
// var addMotivationalTitle = document.querySelector('#poster-title');
// var addMotivationalQuote = document.querySelector('#poster-quote');

// backToMainButton.addEventListener('click', showBacktoMain);
// addImageUrl.addEventListener(, makePoster);
// addMotivationalTitle.addEventListener(, makePoster);
// addMotivationalQuote.addEventListener(, makePoster);
// showSavedPostersButton.addEventListener('click', showSavedPosters);

// var nevermindTakeMeBack = document.querySelector('.show-main');
// var addImageUrl = document.querySelector('#poster-image-url');
// var addMotivationalTitle = document.querySelector('#poster-title');
// var addMotivationalQuote = document.querySelector('#poster-quote');
// var addImageUrl = document.querySelector('#poster-image-url');
// var addMotivationalTitle = document.querySelector('#poster-title');
// var addMotivationalQuote = document.querySelector('#poster-quote');
// var showSavedPostersButton = document.querySelector('.show-saved');
// var hiddenSavedPosters = document.querySelector('.saved-posters');

// function displayForm() {
//   mainPoster.hidden = true;
// posterForm.classList.remove('hidden');
// }

// function showBacktoMain() {
//   mainPoster.hidden = false;
//   posterForm.classList.add('hidden');
//   savedPosterPage.classList.add('hidden');
// }

// function backToMain() {
//   mainPoster.hidden = false;
// posterForm.classList.add('hidden');
// posterForm.classList.add('hidden');
// }

// function displaySavedPoster() {
//   mainPoster.hidden = true;
//   savedPosterPage.classList.remove('hidden');
// }

//functions/buttons we might need to create://
  //1 show my poster
  // 2 nevermind take me back
  // 3 back to main
  // 4 save this poster
  // 5 show saved posters 
  // 6 show another random poster
  // 7 make your own poster
  // 8 create poster
  