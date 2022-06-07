const Twit = require('twit')
const express = require('express')
const cors = require('cors')
const Tweets = require('./models/Tweets')
const app = express()
app.use(cors())

app.use(express.json())
const db = require('./models/db')

app.listen(5500, () => console.log('Rodando na porta 5500'))

let twits = []

var T = new Twit({
    consumer_key:         'b7VLOpMEFDqy5K88ORSN4K9X7',
    consumer_secret:      'yh7gGy4L86TXW8evMXcPzyEVHfS83f6gGAQdJO0pgHYenyJLY9',
    access_token:         '1515414361434734607-LiOMPGkSTnrQpQjPo3Zr9jm3Cum7Xv',
    access_token_secret:  'poUpLQF8ynu620cndEPlP5Gi0jkRXzB3n1fLU6ySuIwe7',
})


//var brasil = ['-53.65', '-31.07', '-26.86', '1.3']
//var boston = ['-71.17', '42.32', '-70.95', '42.46' ]
var brasilia = [ '-48.11', '-15.90', '-47.83', '-15.71' ]

var stream = T.stream('statuses/filter', { locations: brasilia })

stream.on('tweet', function (tweet) {
    
  
  twits.push({
    id_str: tweet.id_str,
    name: tweet.user.name,
    text: tweet.text,
    profileImgUrl: tweet.user.profile_image_url,
    data: tweet.created_at
  
  })
    console.log(twits)
    postarNoBd()


  
})

async function postarNoBd() {
  
  if(twits.length == 1) {
  for (i = 0; i < twits.length; i++){
    await Tweets.create( {
      "id_str": twits[i].id_str,
      "name": twits[i].name,
      "profileImgUrl": twits[i].profileImgUrl,
      "text": twits[i].text,
      "data": twits[i].data

      
    })
    .then(() => {
        console.log('sucesso')
    }).catch((error) => {
        console.log(error)
        })
  }
  twits = []
}  
}

