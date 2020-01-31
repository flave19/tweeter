/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = function(tweet) {
  const safetext = escape(tweet.content.text)
  const markup = `
  <article class="tweetblock">
    <h2 class="headerline">
      <div class="Avatar">
      <img src="${tweet.user.avatars}" />
      ${tweet.user.name}
      </div>
      ${tweet.user.handle}
    </h2>
    <p class="content"> ${safetext}</p>
    <footer>${moment(tweet.created_at).fromNow()}</footer>
  </article>
`;
  return markup;
};

const escape =  function(str) { // turns any malicious scripts into string literals
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
} 

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    $(".tweetSection").prepend(createTweetElement(tweet));
  }
};

$(document).ready(function() {
  $(".compose").click(function() {
    $(".new-tweet").slideToggle("slow",)
  });

  $(".textarea").click(function(event) {
      $(".errorBox").css('display', 'none')
    });

  $(".sendTweet").submit(function(event) {
    event.preventDefault();
    const $tweetInput = $(this).serialize().slice(5)

    if(!$tweetInput){
      $('.errorBox').css('display', 'block')
    }
    else if($tweetInput.length > 140){
      // $(".counter").css('color', 'red')
      alert("toobig")
    }
    else{
      $('.errorBox').css('display', 'none')
    $.ajax({
      url: `/tweets`,
      type: "POST",
      data: $(this).serialize(),
      dataType: JSON,
      success: loadtweets(),
    })}
    $(".textarea").val("");
    $('#counter').text(140);

  });


});
// $(document).ready(function() {
  
// }
const loadtweets = function (){
  $.ajax("/tweets", {
    method: 'GET'
  })
  .then(response =>{
    $(".tweetSection").empty();
    renderTweets(response)
  })
}

loadtweets();