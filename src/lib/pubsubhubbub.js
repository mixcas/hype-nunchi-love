// MODULES
import axios from 'axios'
import *  as encodeUrl from 'encodeurl'

// CONSTANTS
const baseUrl = 'https://pubsubhubbub.appspot.com';

let functionsUrl = 'https://us-central1-hype-nunchi-love.cloudfunctions.net/app'

/*
if (process.env.NODE_ENV === 'development') {
  functionsUrl = 'http://localhost:5000/hype-nunchi-love/us-central1/app'
}
*/



/**
 * Returns a promise that checks the channel or user data
 * @param {string} url - the youtube url
 */
export const subscribePubSubHubbub = (topic) => {

  return axios.post(`${functionsUrl}/service/PubSubHubbub/subscribe/${topic}`)
	.catch( error => {
		const { response } = error;
		// console.error(error);
		console.error('Response', response);
	});
}

export const checkPubSubscription = (channelId) => {

	let params = {
    'hub.callback': encodeUrl('http://us-central1-hype-nunchi-love.cloudfunctions.net/app/service/PubSubHubbub/' + channelId),
		'hub.topic': encodeUrl('https://www.youtube.com/xml/feeds/videos.xml?channel_id=' + channelId),
	};

	// https://pubsubhubbub.appspot.com/subscribe?hub.mode=subscribe&hub.topic=https://www.youtube.com/xml/feeds/videos.xml?channel_id=UCweOkPb1wVVH0Q0Tlj4a5Pw&hub.callback=http://us-central1-hype-nunchi-love.cloudfunctions.net/app/service/PubSubHubbub&hub.verify=async
	//return axios.post(`${baseUrl}?hub.mode=${mode}&hub.topic=${params['hub.topic']}&hub.callback=${params['hub.callback']}&hub.verify=async`)
  return axios(`${baseUrl}/subscription-details`, {
    params
  })
	.catch( error => {
		const { response } = error;
		// console.error(error);
		console.error('Response', response);
	});
}

