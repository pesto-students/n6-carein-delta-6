import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Container, Dropdown } from 'react-bootstrap';
import Nav from './Nav.js';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
//import PropTypes from 'prop-types';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			isAdmin: true
		};
	}

	componentDidMount() {}

	render() {
		const mobileSideBar = (e) => {
			document.body.classList.toggle('aside-open');
		};

		const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname;
		return (
			<>
				<div className="header header-fixed pms-header">
					<Container fluid>
						<div className="pms-header-wrap">
							<div className="mobile-brand">
								<Link to="/dashboard" className="brand-logo">
									<img width="140" alt="Logo" src={toAbsoluteUrl('/assets/logo/logo-dark.svg')} />
								</Link>
							</div>
							<div className="aside-overlay" onClick={mobileSideBar}></div>

							<Nav />

							<div className="pms-header-tools">
								<button
									className="btn p-0 mr-3 burger-icon burger-icon-left d-xl-none"
									onClick={mobileSideBar}
								>
									<span />
								</button>
								{/*end::Aside Mobile Toggle*/}
								<div className="header-searchbar-group position-relative">
									<i className="flaticon2-search-1 search-icon"></i>
									<input type="text" placeholder="Search..." className="form-control" />
								</div>
								<Dropdown drop="down" className="userProfile-menu-block" alignRight>
									<Dropdown.Toggle className="notification-dropdown">
										<div className="nsb-col icon-status-info">
											<i className="flaticon2-bell-4"></i>
										</div>
									</Dropdown.Toggle>
									<Dropdown.Menu className="notification-menu-list comman-shadow dropdown-menu-xl">
										<div className="notifyDrop-head">
											<span className="sub-title pms-dropdown-title">Notifications</span>
											<Link to="" className="blue-text">
												Mark All as Read
											</Link>
										</div>

										<div className="notifyDrop-body">
											<div className="pms-notification">
												<div className="pms-notification-item">
													<div className="pms-notification-content">
														<div className="pms-notification-text">
															Lorem ipsum, or lipsum as it is sometimes known, is dummy
															text used.
														</div>
														<div className="pms-notification-time">2 hrs ago</div>
													</div>
												</div>

												<div className="pms-notification-item">
													<div className="pms-notification-content">
														<div className="pms-notification-text">
															Lorem ipsum, or lipsum as it is sometimes known, is dummy
															text used.
														</div>
														<div className="pms-notification-time">2 hrs ago</div>
													</div>
												</div>

												<div className="pms-notification-item">
													<div className="pms-notification-content">
														<div className="pms-notification-text">
															Lorem ipsum, or lipsum as it is sometimes known, is dummy
															text used.
														</div>
														<div className="pms-notification-time">2 hrs ago</div>
													</div>
												</div>

												<div className="pms-notification-item">
													<div className="pms-notification-content">
														<div className="pms-notification-text">
															Lorem ipsum, or lipsum as it is sometimes known, is dummy
															text used.
														</div>
														<div className="pms-notification-time">2 hrs ago</div>
													</div>
												</div>
											</div>
										</div>

										<div className="notifyDrop-foot">
											<Link to="" className="notifyView-all-btn text-btn w-100 d-block">
												View All
											</Link>
										</div>
									</Dropdown.Menu>
								</Dropdown>

								<Dropdown drop="down" className="userProfile-menu-block" alignRight>
									<Dropdown.Toggle id="dropdown-toggle-user-profile" className="userMenu-toggle-btn">
										<div className="topbar">
											<div className="topbar-item">
												<div
													className="btn btn-lg userbar-toggle-box"
													id="kt_quick_user_toggle"
												>
													{/* <span className="userbar-symbol userBar-bg"> T </span> */}
													<span className="userbar-symbol">
														<img
															src={toAbsoluteUrl('/assets/users/300_21.jpg')}
															className="img-fluid"
															alt="user"
														/>
													</span>
												</div>
											</div>
										</div>
									</Dropdown.Toggle>
									<Dropdown.Menu className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-md comman-shadow">
										<div className="userMenu-cover-drop">
											<div className="userMenu-img">
												{/* <span className="userbar-symbol symbol-info font-weight-bold font-size-h4"> T </span> */}
												<img
													src={toAbsoluteUrl('/assets/users/300_21.jpg')}
													className="img-fluid"
													alt="user"
												/>
											</div>
											<div className="ml-3 userDrop-menu-head">
												<div className="userdrop-name"> {this.props.auth.user.name} </div>
												<a href="#" className="text-muted">
													{this.props.auth.user.email}
												</a>
											</div>
										</div>

										<div className="navi">
											<Link to="/user-profile" className="navi-item px-8 cursor-pointer">
												Profile
											</Link>

											<Link to="/" className="navi-item px-8 cursor-pointer">
												Timesheet
											</Link>

											<Link to="/logout" className="navi-item px-8 cursor-pointer">
												Sign Out
											</Link>
										</div>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</div>
					</Container>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	apiRes: state.apiRes,
	auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(Header);
