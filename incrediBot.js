var RtmClient = require('slack-client').RtmClient;  //required for slack integration
var jsonHttp = require('json-http'); //required for Chuck Norris jokes
 
var token = process.env.SLACK_API_TOKEN || '<add api key here>'; //our api key, probably should be hidden
var version = 'v0.2'; //current version of incredibot

var rtm = new RtmClient(token, {logLevel: 'debug'});
rtm.start();

//common slack IDs, we can look these up ad-hoc in the future
//incred general = C0B0JVBCN
//incred test = C0S18U030
//incred bot = U0RU10M5W

var RTM_CLIENT_EVENTS = require('slack-client').CLIENT_EVENTS.RTM;
rtm.login()

//post message to general channel when incredibot initializes
rtm.on(RTM_CLIENT_EVENTS.RTM_CONNECTION_OPENED, function () {
  var messageText = 'incredibot: ' + version + ' is ONLINE';
  rtm.sendMessage(messageText, 'C0S18U030', function messageSent() {
  });
});

//listen for messages on the general channel that don't belong to incredibot
rtm.on('message', function(message) {
	if(message.channel === 'C0S18U030' && message.user !== 'U0RU10M5W') {
		//ugly code here, need to refactor
		if(message.text === '#Chuck'){
			jsonHttp.getJson('http://api.icndb.com/jokes/random', function(err, response) {
				var joke = response.value.joke
				joke = joke.replace('&quot;',"\"")
				rtm.sendMessage(joke, 'C0S18U030', function messageSent() {
				});    
			});
		}
	}
});