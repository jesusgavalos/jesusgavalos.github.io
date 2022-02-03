$(document).ready(function() {

	$('a[href^=mailto]').addClass('mailto-link');

	var mailto = $('.mailto-link');
	var messageCopy = 'Click para copiar email.';
	var messageSuccess = 'Email copiado exitosamente.';

	mailto.append('<span class="mailto-bubble"></span>');
	$('.mailto-bubble').append(messageCopy);

	// Disable opening email client.
	$('a[href^=mailto]').click(function() {
		return false;
	})

	// On click, get href and remove 'mailto:' from value
	// Store email address in a variable.
	mailto.click(function() {
		var href = $(this).attr('href');
		var email = href.replace('mailto:', '');
		copyToClipboard(email);
		$('.mailto-bubble').empty().append(messageSuccess);
		setTimeout(function() {
			$('.mailto-bubble').empty().append(messageCopy);}, 2000);
	});

});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}
