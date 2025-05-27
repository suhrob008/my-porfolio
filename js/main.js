document
	.getElementById('contact-form')
	.addEventListener('submit', async function (e) {
		e.preventDefault()

		const form = e.target
		const formData = new FormData(form)

		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			message: formData.get('message'),
		}

		const status = document.getElementById('form-status')

		try {
			const response = await fetch('https://formspree.io/f/movdogpd', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})

			if (response.ok) {
				status.textContent = 'Message sent successfully!'
				form.reset()
			} else {
				status.textContent = 'Failed to send. Please try again.'
			}
		} catch (error) {
			status.textContent = 'An error occurred.'
		}
	})
