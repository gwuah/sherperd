/* module, lib imports */
const fs = require('fs');
const T = require('./T');

module.exports = {

	tweet: (tweet) => {
    return new Promise((res, rej)=> {
      T.post('statuses/update', {
        status: tweet
      }, (error, response) => {
        error ? rej(error) : res(response)
      });
    });
  },

	retweet: (tweet) => {
    return new Promise((res, rej)=> {
      T.post('statuses/retweet/:id', { 
        id: tweet.id_str
      }, (error, response) => {
        error ? rej(error) : res(response)
      });
    });
  }, 

	reply: (tweet, reply) => {
    return new Promise((res, rej)=> {
      T.post('statuses/update', {
        status: `@${tweet.user.screen_name} ${reply}`,
        in_reply_to_status_id: tweet.id_str
      }, (error, response) => {
        error ? rej(error) : res(response)
      });
    });
  },

  like: (tweet) => {
    return new Promise((res, rej)=> {
      T.post('favorites/create', { 
        id: tweet.id_str
      }, (error, response) => {
        error ? rej(error) : res(response)
      });
    });
  },

  stream: (path, payload) => {
  	return T.stream(path, payload)
  },

	export_: function(data) {
    let array = [] ;
    for (const user in data) {
      array.push(data[user].user_id)
    }
    return array
  },

  ad_reply: (payload) => {
    return new Promise((res, rej)=> {
      T.post('statuses/update', {
        status: `@${payload.screen_name} ${payload.message}`,
        in_reply_to_status_id: payload.id_str
      }, (error, response) => {
        error ? rej(error) : res([response, payload])
      });
    });
  },

  hndleTwit: function(tweet) {
    this.retweet(tweet)
      .then(data => console.log(`Retweeted ${tweet.user.screen_name}'s tweet`))
      .catch(err => console.log(err.message))
  } 
}