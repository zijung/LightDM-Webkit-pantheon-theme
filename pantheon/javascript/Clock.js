Date.prototype.getDayOfWeek = function() {
	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];

	return days[this.getDay()];
};
Date.prototype.getMonthString = function() {
	var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	return months[this.getMonth()];
};
Date.prototype.getFullMinutes = function () {
	return ('0' + this.getMinutes()).slice(-2);
};
Date.prototype.getFullHours = function () {
	return ('0' + this.getHours()).slice(-2);
};


var Clock = function(greeter) {
	this.greeter	= greeter;
	this.time		= $('#time');
	this.date		= $('#date');
	setInterval(this.update.bind(this), 1000);
};
Clock.prototype.update = function() {
	var date = new Date();
	var time = date.getFullHours() + ':' + date.getFullMinutes();
	var dateString	= date.getDayOfWeek() + ", " + date.getDate() + ". " + date.getMonthString() + " " + date.getFullYear();
	this.time.html(time);
	this.date.html(dateString);
};
