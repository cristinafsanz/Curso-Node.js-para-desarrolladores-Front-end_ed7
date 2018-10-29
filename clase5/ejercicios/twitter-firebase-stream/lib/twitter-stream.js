const twitter = require('./twitter-client');
const firebase = require('./firebase-client');

module.exports = function initStream(hashtag) {
  if (!hashtag) {
    return;
  }
  
  // Listen twitter stream
  // ...
  // return stream;

  const stream = twitter.stream('statuses/filter', { track: hashtag });

  stream.on('data', (event) => {
    if (event) {
      if (event.place && !event.coordinates) {
        event.coordinates = {
          coordinates: event.place.bounding_box.coordinates[0][0]
        }
      }
      if (!event.coordinates) {
        return;
      }

      if (event.text) {
        const coords = event.coordinates.coordinates;
        const lat = coords[0];
        const lng = coords[1];

        const tweet = {
          lat,
          lng,
          text: event.text,
          user : event.user.screen_name,
          img: event.user.profile_image_url,
          timestamp: Date.now()        
        };

        firebase.database().ref('tweets/' + hashtag).push(tweet).then(() => {
          console.log(tweet);
        }).catch((error) => {
          console.log(error.message);
        });
      }
    }
  });

  return stream;
}
