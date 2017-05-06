var mqtt = require('mqtt');  
var client = mqtt.connect('mqtt://broker.hivemq.com');  
var NUM_SAMPLE_FOR_AVG = 1, numSample = 0, tempCelcius = 0, currentAvg = 0;
client.subscribe('sensor1');  
console.log("connected");
client.on('message', function(topic, payload) {  
	if (topic.toString() == "sensor1") {  
		console.log(payload.toString());

	}  
});  