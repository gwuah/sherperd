require('dotenv').config()

module.exports = {
  keys: {
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  },

  me: { 
    screen_name: "snuggle_GH",
    user_id: '822769558931079169'
  },

  drivers: {

    trapa: {
      screen_name: "trapafasa",
      user_id: '38211068'
    },

    trevor: {
      screen_name: "trevorprosper",
      user_id: '876131717194625025'
    },

    XtianDela: {
      screen_name: "XtianDela",
      user_id: '1288063951'
    },

    uga: {
      screen_name: "Ugaman01",
      user_id: '232461939'
    },

    griff: {
      screen_name: "gwuah_",
      user_id: '3364921872'
    }, 
    claeusdev: {
      screen_name: "claeusdev",
      user_id: '203109337'
    }
  }
}