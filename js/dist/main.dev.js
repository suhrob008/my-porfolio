"use strict";

document.getElementById('contact-form').addEventListener('submit', function _callee(e) {
  var form, formData, data, status, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          form = e.target;
          formData = new FormData(form);
          data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
          };
          status = document.getElementById('form-status');
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch('https://formspree.io/f/movdogpd', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }));

        case 8:
          response = _context.sent;

          if (response.ok) {
            status.textContent = 'Message sent successfully!';
            form.reset();
          } else {
            status.textContent = 'Failed to send. Please try again.';
          }

          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](5);
          status.textContent = 'An error occurred.';

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 12]]);
});
//# sourceMappingURL=main.dev.js.map
