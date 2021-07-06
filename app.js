function showTime(){
	let date = new Date();
	let hour = date.getHours();//24 hour format
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let session = "AM";
	// to convert to 12 hour format
	// if(hour==0){
	// 	hour=12;
	// }
	// if(hour>12){
	// 	hour-=12;
	// 	session = "PM";
	// }
	hour = hour<10?'0'+hour:hour;
	minutes = minutes<10?'0'+minutes:minutes;
	seconds = seconds<10?'0'+seconds:seconds;
	let time = hour+":"+minutes+":"+seconds;
	document.querySelector('#myTime').innerText = time;
	setTimeout(showTime,1000);//value in milliseconds
}
showTime();
