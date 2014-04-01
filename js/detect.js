document.documentElement.className = document.documentElement.className.replace("no-js","js");

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	document.documentElement.className += ' mobile';
}