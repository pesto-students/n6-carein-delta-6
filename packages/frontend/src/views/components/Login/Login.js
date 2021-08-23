import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, otpUser, verifyUser } from '../../../actions/authActions';
import './Login.css';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import OtpInput from 'react-otp-input';
import { toast } from 'react-toastify';
import InputField from '../../common/inputFeild'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			err: [],
			otpScreen: true,
			verifyScreen: true,
			otp: '',
			isError: true
		};
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated === true) {
			this.props.history.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		if (nextProps.apiRes) {
			if (nextProps.apiRes.status === 200) {
				this.setState({isError: false})
			} else {
				if (!!this.state.otpScreen) {
					if (typeof nextProps.apiRes.data.errorMessage === 'string') {
						let err = nextProps.apiRes.data.errorMessage;
						console.log(err,'lsfdghkj1');

						toast.error(err, {
							position: 'top-right',
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined
						});
					} else {
						console.log(nextProps.apiRes.data.errorMessage,'lsfdghkj2')
						nextProps.apiRes.data.errorMessage.map((err, id) =>
						toast.error(err.message, {
								position: 'top-right',
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined
							})
						);
					}
				} else {
					if (!!this.state.verifyScreen) {
						let err = nextProps.apiRes.data.errorMessage;
						console.log(err,'lsfdghkj');
						toast.error(err, {
							position: 'top-right',
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined
						});
					} else {
						if (typeof nextProps.apiRes.response.data.errorMessage === 'object') {
							console.log(nextProps.apiRes.response.data.errorMessage,'lsfdghkj3')
							this.setState({isError:true})
							nextProps.apiRes.response.data.errorMessage.map((err, id) =>
								toast.error(err.message, {
									position: 'top-right',
									autoClose: 5000,
									hideProgressBar: false,
									closeOnClick: true,
									pauseOnHover: true,
									draggable: true,
									progress: undefined
								})
							);
						} else {
							console.log(nextProps.apiRes.response.data.errorMessage,'lsfdghkj4')

							toast.error(nextProps.apiRes.response.data.errorMessage, {
								position: 'top-right',
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined
							});
						}
					}
				}
				this.setState({ submitStatus: false, verifyScreen: false });
			}
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleChange = (otp) => this.setState({ otp });

	onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(userData);
		
		this.setState({ submitStatus: true, verifyScreen: false });
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	};

	onVerify = (e) => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			otp: this.state.otp
		};
		this.props.verifyUser(userData);
		console.log()
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	};

	onSend = (e) => {
		e.preventDefault();
		console.log(e)
		const userData = {
			email: this.state.email
		};
		this.props.otpUser(userData);
		this.setState({ sendStatus: true, verifyScreen: false });
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	};

	onScreenOTP = () => {
		this.setState({ otpScreen: false, verifyScreen: true });
	};

	onScreenPassword = () => {
		this.setState({ otpScreen: true });
	};

	render() {
		const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname;
		const { email, password, otp, submitStatus, otpScreen, verifyScreen, sendStatus } = this.state;
		return (
			<div
				className="auth-wrapper"
				style={{
					backgroundImage: `url(${toAbsoluteUrl('./assets/media/bg/bg-3.jpg')})`
				}}
			>
				<Container>
					<div className="login-form-block">
						<Link to="/" className="login-brand">
							<img alt="Logo" width="200" src="./assets/logo/full-logo.svg" />
						</Link>

						<div className="auth-form">
							<div className="auth-head">
								<h3> Sign In Admin </h3>
								<p> Enter your details to login to your account </p>
							</div>

							<div className="auth-body">
								<form className="form">
									{!!otpScreen ? (
										<>
											<div className="form-group">
												<input
													className="form-control"
													type="text"
													placeholder="Email"
													name="email"
													onChange={this.onChange}
													value={email}
												/>
											</div>
											<div className="form-group">
												<input
													className="form-control"
													type="password"
													placeholder="Password"
													name="password"
													onChange={this.onChange}
													value={password}
												/>
											</div>
											<div className="form-group authTwo-link-block">
												<div className="checkbox-inline">
													<label className="checkbox">
														<input type="checkbox" className="d-none" name="remember" />
														<span />
														Remember me
													</label>
												</div>
												<button onClick={this.onScreenOTP} className="text-btn btn blue-text ">
													Login With OTP ?
												</button>
											</div>
											<div className="form-group mb-0 auth-submit-block text-center">
												<button
													type="submit"
													className="btn btn-blue"
													onClick={this.onSubmit}
													disabled={submitStatus}
												>
													{' '}
													Sign In
												</button>
											</div>
										</>
									) : (
										<>
										{console.log(verifyScreen, 'bhb')}
											{!!this.state.isError ? (
												<>
													<div className="form-group">
														<input
															className="form-control"
															type="text"
															placeholder="Email"
															name="email"
															onChange={this.onChange}
															value={email}
														/>
													</div>
													<div className="form-group authTwo-link-block justify-content-end">
														<button
															onClick={this.onScreenPassword}
															className="text-btn btn blue-text "
														>
															Login With Password?
														</button>
													</div>
													<div className="form-group mb-0 auth-submit-block text-center">
														<button
															type="submit"
															className="btn btn-blue"
															onClick={this.onSend}
														
														>
															{' '}
															Send OTP
														</button>
													</div>
												</>
											) : (
												<>
													<div className="form-group">
														<input
															className="form-control"
															type="text"
															placeholder="Email"
															name="email"
															onChange={this.onChange}
															value={email}
															disabled
														/>
													</div>
													{!this.state.isError && <div className="otp-container">
														<OtpInput
															containerStyle="form-group otp-form-group"
															value={otp}
															onChange={this.handleChange}
															numInputs={6}
															inputStyle="form-control"
														/>
													</div>}

													<div className="form-group authTwo-link-block">
														<button className="text-btn btn">Resend OTP!</button>
														<button
															onClick={this.onScreenPassword}
															className="text-btn btn blue-text "
														>
															Login With Password?
														</button>
													</div>
													<div className="form-group mb-0 auth-submit-block text-center">
														<button
															type="submit"
															className="btn btn-blue"
															onClick={this.onVerify}
															// disabled={verifyStatus}
														>
															{' '}
															Verify OTP
														</button>
													</div>
												</>
											)}
										</>
									)}
								</form>
							</div>
						</div>
					</div>
				</Container>

				{/* <ToastContainer /> */}
			</div>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	otpUser: PropTypes.func.isRequired,
	verifyUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	apiRes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	apiRes: state.apiRes
});
export default connect(mapStateToProps, { loginUser, otpUser, verifyUser })(Login);
