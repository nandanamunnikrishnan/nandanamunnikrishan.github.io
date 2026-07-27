// Care Health Insurance | Unnikrishnan — static site behaviour
// No backend involved: WhatsApp links open wa.me, and the quote form
// opens the visitor's email app with the details pre-filled.

(function () {
  var WHATSAPP_NUMBER = '918075609532';
  var EMAIL = 'nandanamunnikrishnan@gmail.com';

  function buildWhatsAppLink(message) {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  }

  // Wire up the two WhatsApp buttons
  var heroWhatsapp = document.getElementById('hero-whatsapp');
  if (heroWhatsapp) {
    heroWhatsapp.href = buildWhatsAppLink('Hi Unnikrishnan, I\u2019d like a health insurance quote.');
  }

  var contactWhatsapp = document.getElementById('contact-whatsapp');
  if (contactWhatsapp) {
    contactWhatsapp.href = buildWhatsAppLink('Hi Unnikrishnan, I\u2019d like to ask about health insurance.');
  }

  // Quote form -> mailto
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var name = form.elements['name'].value;
      var phone = form.elements['phone'].value;
      var email = form.elements['email'].value;
      var plan = form.elements['plan'].value;
      var message = form.elements['message'].value;

      var subject = encodeURIComponent('Quote request from ' + (name || 'website visitor'));
      var bodyLines = [
        'Name: ' + name,
        'Phone: ' + phone,
        'Email: ' + email,
        'Plan interest: ' + plan,
        '',
        'Message:',
        message || '(none)',
      ];
      var body = encodeURIComponent(bodyLines.join('\n'));

      window.location.href = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body;
    });
  }
})();
