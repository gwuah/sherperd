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
  }

});
