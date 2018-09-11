import React, { Component } from 'react';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

export class LoginForm extends Component {
	state = {
    signup: false,
		email: '',
    username: '',
		password: '',
		passwordConfirm: '',
		error: {
			message: '',
		},
		isLoading: false,
	}

  constructor(props) {
    super(props);

    // BINDING
    this.toggleSignup = this.toggleSignup.bind(this);
  }

	componentDidMount() {
		this.email.focus()
	}

	login() {
		const { signup, email, username, password, passwordConfirm } = this.state;

		this.setState({ isLoading: true });

    // SINGUP
    if (signup) {
      this.props.firebase
        .createUser({
          email,
          password,
        }, {
          username,
          email,
          roles: {
            admin: false,
            influencer: false,
          }
        })
        .then(() => {
          this.setState({ isLoading: false })
          // this is where we can redirect to another route
        })
        .catch((error) => {
          this.setState({ isLoading: false })
          this.setState({ error });
          console.log('there was an error', error)
        });

    } else { // LOGIN

      this.props.firebase
        .login({email, password})
        .then(() => {
          this.setState({ isLoading: false })
          // this is where we can redirect to another route
        })
        .catch((error) => {
          this.setState({ isLoading: false })
          this.setState({ error });
          console.log('there was an error', error)
        });

    }

	}

  toggleSignup() {
    this.setState( state => ({
      signup: !state.signup,
    }));
  }

	render() {
    const { signup, error, loading } = this.state;

		return (
			<section className='container'>
				<div className='grid-row margin-top-basic margin-bottom-small'>
					<div className='grid-item item-s-24'>
						<h1>{ signup ? 'Signup' : 'Login' }</h1>
					</div>
				</div>
        <form onSubmit={event => event.preventDefault()} className='grid-row margin-bottom-basic'>
          <div className='grid-item item-s-24 margin-bottom-micro no-gutter'>
            { signup ?
              <div className='grid-item item-s-24 margin-bottom-tiny'>
                <input
                  ref={ ref => this.username = ref}
                  type='text'
                  placeholder='username'
                  onChange={event => this.setState({ username: event.target.value })}
                />
              </div>
            : null }
            <div className='grid-item item-s-24 margin-bottom-tiny'>
              <input
                ref={ ref => this.email = ref}
                type='text'
                placeholder='email'
                autoComplete='email'
                onChange={event => this.setState({ email: event.target.value })}
              />
            </div>
          </div>
          <div className='grid-item item-s-24 margin-bottom-tiny'>
            <input
              ref={ ref => this.password = ref}
              type='password'
              placeholder='password'
              autoComplete={ signup ? '' : 'current-password'}
              onChange={event => this.setState({ password: event.target.value })}
            />
          </div>
          { signup ?
            <div className='grid-item item-s-24 margin-bottom-tiny'>
              <input
                ref={ ref => this.passwordConfirm = ref}
                type='password'
                placeholder='confirm password'
                onChange={event => this.setState({ passwordConfirm: event.target.value })}
              />
            </div>
          : null }
          <div className='grid-item item-s-12 margin-bottom-tiny'>
            <button className='font-size-small color-grey-mid link-underline' onClick={() => this.toggleSignup()}>{signup ? 'Login' : 'Signup'}</button>
          </div>
          <div className='grid-item item-s-12 margin-bottom-tiny text-align-right'>
            <Link id="link-forgot-password" className='font-size-small color-grey-mid link-underline' to={'/forgotpassword'}>Forgot password?</Link>
          </div>
          <div className='grid-item item-s-8 offset-s-16 text-align-right'>
            <button type='submit' onClick={() => this.login()} className='button font-size-large'>
              {signup ? 'Signup' : 'Login' }
            </button>
          </div>
          <div className='grid-item item-s-24'>
            <span>{error.message}</span>
            <span>{loading}</span>
          </div>
        </form>
      </section>
		)
	}
}

export default compose(
  firebaseConnect(),
)(LoginForm);
