$(document).ready(function() {
	$('#docs-nav li').each(function (){
		if ($(this).children().attr('href') == document.location.pathname) {
			$(this).addClass('active').siblings().removeClass('active');
		}
	});
});
