const { me, drivers } = require("./config");
const sherperd = require("./lib/sherperd");
const twitter = require("twit");

console.log("<--- sherperd is in production --->");

// monitor trains for tweets and user for account activities 
const train = sherperd.stream('statuses/filter', {
  follow: sherperd.export_(drivers)
});

// when a tweet from any of the train driver's is recieved, handle it
train.on('tweet', tweet => {
  // console.log(JSON.stringify(tweet.text))

  if (tweet.retweeted || tweet.retweeted_status || tweet.in_reply_to_status_id || tweet.in_reply_to_user_id || tweet.delete) {
  	return
  }

  if (tweet.user.id_str === drivers.XtianDela.user_id) {
  	sherperd.hndleTwit(tweet)

  } else if (tweet.user.id_str === drivers.griff.user_id) {
  	// handle tweets from griff
  	console.log(`@griff --  ${tweet.text}`)

  	sherperd.hndleTwit(tweet)

  } else if (tweet.user.id_str === drivers.uga.user_id) {
  	// handle tweets from Uga
  	console.log(`@uga --  ${tweet.text}`)

  	sherperd.hndleTwit(tweet)

  } else if (tweet.user.id_str === drivers.trapa.user_id) {
  	// handle tweets from trapa
  	console.log(`@trapa --  ${tweet.text}`)

  	sherperd.hndleTwit(tweet)

  } else if (tweet.user.id_str === drivers.trevor.user_id) {
  	// handle tweets from trevor
  	console.log(`@trevor --  ${tweet.text}`)

  	sherperd.hndleTwit(tweet)
  } else if (tweet.user.id_str === drivers.claeusdev.user_id) {

    console.log(`@claeusdev --  ${tweet.text}`)


    sherperd.hndleTwit(tweet)
  }

});

// PLACE YOUR ADVERTISEMENT HERE
const advertisement = " ---> Follow @shopaholicks";
const advert = sherperd.stream('statuses/filter', { track: '#wxlgy' });
// sample ----- `#wxlgy/KiddBubu/939235927595069445`

advert.on("tweet", (tweet) => {
    [ hashtag, username, reply_id ] = tweet.text.split("/");
    sherperd.ad_reply({ id_str: reply_id, screen_name: username, message: advertisement })
        .then(res => console.log(`replied to tweet ${res[1].id_str}`))
        .catch(err => console.error(err))
})