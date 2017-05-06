rangemin=[
[0,	 0,	0,	0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0,	0,	0,	0],[0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	 0,	0,	0,	0,	0,	0,	0,	0],[7,	5,	0,	0,	0,	0,	0,	0,	0],[7,	5,	0,	0,	0,	0,	0,	0,	0],[7,	5,	0,	0,	0,	0,	0,	0,	0],
[7, 5,	0,	0,	0,	0,	0,	0,	0],[7,	5,	0,	0,	0,	0,	0,	0,	0],[7,	5,	0,	0,	0,	0,	0,	0,	0],[7,	5,	0,	0,	0,	0,	0,	0,	0],
[7, 5,	0,	0,	0,	0,	0,	0,	0],[7, 5,	0,	0,	0,	0,	0,	0,	0],[7, 5,	0,	0,	0,	0,	0,	0,	0],[7, 5,	0,	0,	0,	0,	0,	0,	0],
[7, 5,	0,	0,	0,	0,	0,	0,	0],[7, 5,	0,	0,	0,	0,	0,	0,	0],[7, 5,	0,	0,	0,	0,	0,	0,	0],[7, 5,	0,	0,	0,	0,	0,	0,	0],
[7, 5,	0,	0,	0,	0,	0,	0,	0],[7, 5,	0,	0,	0,	0,	0,	0,	0],[7, 5,	0,	0,	0,	0,	0,	0,	0],[7, 0,	0,	0,	0,	0,	0,	0,	0]]
rangemax=[
[10, 5,	 0,	2,	1,	1,	1,	1,	1],[10,	5,	0,	2,	1,	1,	1,	1,	1],[10,	5,	0,	2,	1,	1,	1,	1,	1],[10,	5,	0,	2,	1,	1,	1,	1,	1],
[10, 5,	 0,	2,	1,	1,	1,	1,	1],[15,	10,	1,	2,	0,	0,	0,	0,	0],[15,	10,	2,	2,	0,	0,	0,	0,	0],[20,	10,	2,	1,	0,	0,	0,	0,	0],
[20, 10, 2,	1,	0,	0,	0,	0,	0],[30,	12,	2,	1,	0,	0,	0,	0,	0],[30,	12,	2,	1,	0,	0,	0,	0,	0],[25,	10,	2,	1,	0,	0,	0,	0,	0],
[20, 12, 2,	1,	0,	0,	0,	0,	0],[20,	12,	2,	1,	0,	0,	0,	0,	0],[25,	10,	2,	1,	0,	0,	0,	0,	0],[20,	12,	2,	1,	0,	0,	0,	0,	0],
[25, 10, 2,	1,	0,	0,	0,	0,	0],[25,	10,	2,	1,	0,	0,	0,	0,	0],[30,	10,	2,	1,	0,	0,	0,	0,	0],[25,	12,	2,	1,	0,	0,	0,	0,	0],
[20, 13, 2,	1,	0,	0,	0,	0,	0],[20,	12,	2,	2,	0,	0,	0,	0,	0],[15,	12,	1,	2,	1,	0,	0,	0,	0],[15,	5,	0,	2,	1,	1,	1,	1,	1]]
var d = new Date();
var mqtt=require('mqtt');
// var mysql = require('mysql');
var client=mqtt.connect('mqtt://broker.hivemq.com');
// var connection = mysql.createConnection({
// host : '127.0.0.1',
// user : 'root',
// password: 'p',
// database: 'p'
// });
// connection.connect(); 
function datagenerate()
{
	month = '' + (d.getMonth() + 1);
	day = '' + d.getDate();
	year = ''+d.getFullYear();
	hour = ''+d.getHours();
	minutes = ''+d.getMinutes();
	second = ''+d.getSeconds();

	//console.log(d);
	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	if (hour.length < 2) hour = '0' + hour;
	if (minutes.length < 2) minutes = '0' + minutes;
	if (second.length < 2) second = '0' + second;
	a = [year, month, day].join('-');
	b = [hour,minutes,second].join(':');

	totalvehicle = []
		
		// for (var i = 1; i < 11; i++) {

		hour2 = parseInt(hour)
		WMV2 =  Math.floor(Math.random() * (rangemax[hour2][0] - rangemin[hour2][0] + 1)) + rangemin[hour2][0];
		CarV =  Math.floor(Math.random() * (rangemax[hour2][1] - rangemin[hour2][1] + 1)) + rangemin[hour2][1];
		BusV =  Math.floor(Math.random() * (rangemax[hour2][2] - rangemin[hour2][2] + 1)) + rangemin[hour2][2];
		LGV =  Math.floor(Math.random() * (rangemax[hour2][3] - rangemin[hour2][3] + 1)) + rangemin[hour2][3];
		HGVR2 =  Math.floor(Math.random() * (rangemax[hour2][4] - rangemin[hour2][4] + 1)) + rangemin[hour2][4];
		HGVR3 =  Math.floor(Math.random() * (rangemax[hour2][5] - rangemin[hour2][5] + 1)) + rangemin[hour2][5];
		HGVR4 =  Math.floor(Math.random() * (rangemax[hour2][6] - rangemin[hour2][6] + 1)) + rangemin[hour2][6];
		HGVA3 =  Math.floor(Math.random() * (rangemax[hour2][7] - rangemin[hour2][7] + 1)) + rangemin[hour2][7];
		HGVA5 =  Math.floor(Math.random() * (rangemax[hour2][8] - rangemin[hour2][8] + 1)) + rangemin[hour2][8];

		HGV = HGVR2+HGVR3+HGVR4+HGVA3+HGVA5;
		AMV = WMV2+CarV+BusV+LGV+HGV;
		TMP = [2,a,b,WMV2,CarV,BusV,LGV,HGVR2,HGVR3,HGVR4,HGVA3,HGVA5,HGV,AMV];
		totalvehicle.push(TMP);
		// }
		//console.log(totalvehicle);
		// var sql = "INSERT INTO trafficdata (sensorId,Date,Time,WMV2,CarV,BusV,LGV,HGVR2,HGVR3,HGVR4,HGVA3,HGVA5,HGV,AMV) VALUES ?";
		// connection.query(sql, [totalvehicle], function(err) {

		// });

		latitude = [[23.03875, 23.038755, 23.03876, 23.03876, 23.038773, 23.038787, 23.0388, 23.03881, 23.03881, 23.03881, 23.03882, 23.03883],[23.03883, 23.03883, 23.03849, 23.03818, 23.037575, 23.03697, 23.03695, 23.03656, 23.03578],[23.03578, 23.03543, 23.03465, 23.03425, 23.034, 23.03384, 23.03372, 23.03341, 23.0331, 23.03283],[23.03283, 23.03296, 23.03306, 23.033165, 23.03327, 23.03341, 23.03346, 23.03347],[23.03347, 23.03354, 23.03357, 23.033645, 23.03372],[23.03372, 23.0331],[23.0331, 23.03303, 23.03251, 23.03215, 23.03187],[23.03187, 23.03175, 23.03143, 23.03096, 23.03074],[23.03074, 23.03058, 23.03013],[23.03013, 23.02936, 23.02935]]
		longitude = [[ 72.55439, 72.553745, 72.5531, 72.55296, 72.552237, 72.551513, 72.55079, 72.55057, 72.5504, 72.55029, 72.54956, 72.54883],[ 72.54883, 72.54879, 72.5488, 72.5488, 72.5488, 72.5488, 72.5488, 72.54879, 72.54879],[ 72.54879, 72.54884, 72.54897, 72.54904, 72.54908, 72.54911, 72.54915, 72.54925, 72.54936, 72.54945],[ 72.54945, 72.55022, 72.55076, 72.551385, 72.55201, 72.55281, 72.55318, 72.55324],[ 72.55324, 72.55371, 72.55386, 72.55441, 72.55496],[ 72.55496, 72.55502],[ 72.55502, 72.55502, 72.55502, 72.55502, 72.55503],[ 72.55503, 72.55503, 72.55504, 72.55506, 72.55506],[ 72.55506, 72.55506, 72.55508],[ 72.55508, 72.5551, 72.5551]]

		i=1
		rn = Math.floor(Math.random() * ( latitude[i].length - 0 )) + 0; lat = latitude[i][rn];lng = longitude[i][rn];/*allv = [2,lat,lng];client.publish('sensor1',allv.toString());*/console.log(i+1,lat,lng);//}

		
		second_r = setInterval(function(){	rn = Math.floor(Math.random() * ( latitude[1].length - 0 )) + 0; lat = latitude[1][rn];	lng = longitude[1][rn];/*allv = [2,lat,lng];client.publish('sensor1',allv.toString());*/console.log(2,lat,lng);},(60000/totalvehicle[0][13]));
		
		setTimeout(function(){clearInterval(second_r);
			console.log("over");console.log(totalvehicle);client.publish('sensor1',TMP.toString());
		/*var sql = "INSERT INTO trafficdata (sensorId,Date,Time,WMV2,CarV,BusV,LGV,HGVR2,HGVR3,HGVR4,HGVA3,HGVA5,HGV,AMV) VALUES ?";
		connection.query(sql, [totalvehicle], function(err) {
		});*/	},60000);
		
		//console.log(totalvehicle);
		
		d.setMinutes(d.getMinutes() + 1);

}
datagenerate();
setInterval(datagenerate,60000);

