/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {  
  renderTweets(data);
})


const createTweetElement = function(tweet) {
  const markup = `
  <article class="tweetblock">
    <h2 class="headerline">
      <div class="Avatar">
      <img src="${tweet.user.avatars}" />
      ${tweet.user.name}
      </div>
      ${tweet.user.handle}
    </h2>
    <p class="content"> ${tweet.content.text}</p>
    <footer>${new Date(tweet.created_at)}</footer>
  </article>
`
return markup;
}
  
// const $tweet = $("<article>").addClass("tweet");

// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

// $(document).ready(function() {  
// const $tweet = createTweetElement(tweetData);

// console.log($tweet); // to see what it looks like
// $('.container').append($tweet);
// })


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets){

  for(const tweet of tweets){
    $('.tweetSection').append(createTweetElement(tweet));

  }
}

