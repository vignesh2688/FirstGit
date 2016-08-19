( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button">Menu</div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );

var min,sec;

function Minutes(data) {
  for (var i = 0; i < data.length; i++)
    if (data.substring(i, i + 1) == ":")
      break;
 return (data.substring(0, i));
}
 
function Seconds(data) {
  for (var i = 0; i < data.length; i++)
    if (data.substring(i, i + 1) == ":")
      break;
  return (data.substring(i + 1, data.length));
}
 
function Down() {
  sec--;
  if (sec == -1) {
    sec = 59; min--;
  }
 
  if(min==3 && sec == 0){
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
   if(minutes<10){
     br=""> minutes == "0" + minutes;
   }
   alert('Message from Application at '+hours+':'+minutes+' - nnYou   have been inactive and have not saved your work for last 27 Minutes.n Please save your work in next 3 minutes to avoid any Data Loss due to Session timeout.');
 }
 if (min == 0 && sec == 0) {
   window.status = "Your session has timed out."
   document.location.href="logout.action";
  }else {
    down = setTimeout("Down()", 1000);
  }
}
 
function timeIt() {
	alert("Calling timeIt");
  min = 1 * Minutes("1:00");
  sec = 0 + Seconds("0:00");
  Down();
}