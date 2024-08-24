var min = document.getElementById( 'minutes' );
var sec = document.getElementById( 'seconds' );
var minutes = 0;
var seconds = 0;
var Interval;
 
function start() {
	clearInterval( Interval );
		Interval = setInterval( startTimer, 999 );
	}
 
	function stop() {
		clearInterval( Interval );
	}
 
	function reset() {
		clearInterval( Interval );
		sec.innerHTML = '00';
		min.innerHTML = '00';
		minutes = 0;
		seconds = 0;
	}
 
	function startTimer() {
		seconds++;
 
	if( seconds < 9 ) {
				sec.innerHTML = "0" + seconds;
	}
 
	if( seconds > 9 ) {
		sec.innerHTML =  seconds;
    }
 
	if ( seconds > 59 ) {
		minutes++;
		min.innerHTML = "0" + minutes;
		seconds = 0;
	}
 
	if ( minutes > 9 ) {
		min.innerHTML = minutes;
	}
 
}