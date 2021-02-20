import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import '../css/ContactForm.css';

const ContactScreen = () => {
	const [state, setState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [result, setResult] = useState(null);

	const submitEmail = (e) => {
		e.preventDefault();

		const data = {
			name: state.name,
			email: state.email,
			subject: state.subject,
			message: state.message,
		};

		console.log('Email data:', data);

		axios.post('/api/email/contact', data, function () {
			console.log('Server received our data');
		});
	};

	const onInputChange = (e) => {
		const { name, value } = e.target;

		setState({
			...state,
			[name]: value,
		});
	};

	return (
		<div id='contact-form-container' className='container'>
			<div className='col-md-6 offset-md-3'>
				<header>
					<h1>Contact Brodie!</h1>
				</header>
				<div>
					<Form onSubmit={submitEmail}>
						<Form.Group controlId='name'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								name='name'
								value={state.name}
								placeholder='Enter your name'
								onChange={onInputChange}
							/>
						</Form.Group>
						<Form.Group controlId='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='text'
								name='email'
								value={state.email}
								placeholder='Enter your email'
								onChange={onInputChange}
							/>
						</Form.Group>
						<Form.Group controlId='subject'>
							<Form.Label>Subject</Form.Label>
							<Form.Control
								type='text'
								name='subject'
								value={state.subject}
								placeholder='Enter subject'
								onChange={onInputChange}
							/>
						</Form.Group>
						<Form.Group controlId='message'>
							<Form.Label>Message</Form.Label>
							<Form.Control
								as='textarea'
								name='message'
								rows={3}
								value={state.message}
								placeholder='Enter your message'
								onChange={onInputChange}
							/>
						</Form.Group>
						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default ContactScreen;
