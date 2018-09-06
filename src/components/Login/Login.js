import React, { Component } from 'react';

class LoginForm extends Component {
	state = {
		email: '',
		username: '',
		password: '',
		error: {
			message: '',
		},
		isLoading: false,
	}

	componentDidMount() {
		this.email.focus()
	}

	login() {
		const { email, password } = this.state;

		this.setState({ isLoading: true });

	}

	render() {
		return (
			<section className='container'>
				<div className='grid-row margin-top-basic margin-bottom-small'>
					<div className='grid-item item-s-24'>
						<h1>Iniciar Sesión</h1>
					</div>
				</div>
				<form onSubmit={event => event.preventDefault()}>
					<div className='grid-row'>
						<div className='grid-item item-s-24 item-m-12 margin-bottom-small'>
							<input
								ref={ ref => this.email = ref}
								type='text'
								placeholder='Email'
								onChange={event => this.setState({ email: event.target.value })}
							/>
						</div>
						<div className='grid-item item-s-24 item-m-12 margin-bottom-small'>
							<input
								ref={ ref => this.password = ref}
								type='password'
								placeholder='Password'
								onChange={event => this.setState({ password: event.target.value })}
							/>
						</div>
						<div className='grid-item item-s-24 item-m-12 margin-bottom-small'>
							<button
								className='button'
								onClick={() => this.login()}
								type='submit'>
								Iniciar Sesion
							</button>
							<div className='margin-top-small'>
								<p>{this.state.error.message}</p>
								<p>{this.state.loading}</p>
							</div>
						</div>
					</div>
				</form>
			</section>
		)
	}
}

export default LoginForm;
