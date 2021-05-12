function Eid_Mubarak() {
	var text;
	var name = prompt("Please type your full name : \nExample : apriyanto.\n", "apriyanto");

	switch(name) {
	  case "Sabbir Ahmmed":
	    text = "Boos ";
	    break;

	  default:
	    text = "";
	    break;
	}
	
	document.getElementById("your-name").innerHTML = text+name; 
	document.getElementById("your-name1").innerHTML = name; 
}
Eid_Mubarak();

// Text Change 
var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  	var i = this.loopNum % this.toRotate.length;
  	var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 350 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  	var elements = document.getElementsByClassName('txt-rotate');
  	for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

/// coming eid coundown(
$('#clock').countdown('2021/5/14 12:00:00')
  .on('update.countdown', function(event) {
   var format = '<div class="coustom-clock"><div class="date"><span class="d">%D</span> <br>Date</div><div class="hours"><span class="h">%H</span> <br>Hours</div><div class="minutes"><span class="m">%M</span> <br>Minutes</div><div class="seconds"><span class="s">%S</span> <br>Seconds</div></div>';
    $(this).html(event.strftime(format));
  })
  .on('finish.countdown', function(event) {
   $(this).html('This offeraddad <br> has expired!')
     .parent().addClass('disabled');

});