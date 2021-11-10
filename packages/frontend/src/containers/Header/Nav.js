import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const data = {
	admin: [
		{
			title: 'Dashboard',
			link: '/dashboard'
		},
		{
			title: 'Projects',
			link: '/project-list'
		},
		{
			title: 'Users',
			link: '/user-list'
		},
		{
			title: 'Technologies',
			link: '/technology-list'
		},
		{
			title: 'Designations',
			link: '/designation-list'
		},
		{
			title: 'Clients',
			link: '/client-list'
		}
		// {
		//   title: "Leaves",
		//   link: "/leave-tracker",
		// },
	],
	hr: [
		{
			title: 'Dashboard',
			link: '/dashboard'
		},
		{
			title: 'Users',
			link: '/user-list'
		},
		{
			title: 'Designations',
			link: '/designation-list'
		}
	],
	user: [
		{
			title: 'Dashboard',
			link: '/dashboard'
		},
		{
			title: 'Projects',
			link: '/project-list'
		},
		{
			title: 'Users',
			link: '/user-list'
		},
		{
			title: 'Technologies',
			link: '/technology-list'
		}
		// {
		//   title: "Leaves",
		//   link: "/leave-tracker",
		// },
	],
	manager: [
		{
			title: 'Dashboard',
			link: '/dashboard'
		},
		{
			title: 'Projects',
			link: '/project-list'
		},
		{
			title: 'Users',
			link: '/user-list'
		},
		{
			title: 'Technologies',
			link: '/technology-list'
		},
		{
			title: 'Clients',
			link: '/client-list'
		}
		// {
		//   title: "Leaves",
		//   link: "/leave-tracker",
		// },
	],
	sales: [
		{
			title: 'Dashboard',
			link: '/dashboard'
		},
		{
			title: 'Projects',
			link: '/project-list'
		},
		{
			title: 'Users',
			link: '/user-list'
		},
		{
			title: 'Technologies',
			link: '/technology-list'
		},
		{
			title: 'Clients',
			link: '/client-list'
		}
		// {
		//   title: "Leaves",
		//   link: "/leave-tracker",
		// },
	]
};

class Nav extends Component {
	constructor(props) {
		super(props);
		this.updateNavigation = this.updateNavigation.bind(this);
		this.state = {
			priorityItems: [],
			moreItems: [],
			isAdmin: true,
			shown: false
		};
		this.fullNavArray = this.props.navigationItems;
	}

	static defaultProps = {
		navigationItems: [
			{
				title: 'Dashboard',
				link: '/dashboard'
			},
			{
				title: 'Projects',
				link: '/project-list'
			},
			{
				title: 'Users',
				link: '/user-list'
			},
			{
				title: 'Technologies',
				link: '/technology-list'
			},
			{
				title: 'Designations',
				link: '/designation-list'
			},
			{
				title: 'Clients',
				link: '/client-list'
			}
			// {
			//   title: "Leaves",
			//   link: "/leave-tracker",
			// },
		]
	};

	componentWillMount() {}

	componentDidMount() {
		this.widthsArray = Array.from(this.refs.navigation.children).map((item) => item.getBoundingClientRect().width);
		window.addEventListener('resize', this.updateNavigation, 100);
		this.updateNavigation();
		const token = localStorage.getItem('jwtToken');
		const decodedHeader = jwt_decode(token);
		const title = data[decodedHeader.user_type];
		this.setState({
			priorityItems: title
		});
	}

	howManyItemsInMenuArray(array, outerWidth, initialWidth, minimumNumberInNav) {
		let total = initialWidth * 1.75;
		for (let i = 0; i < array.length; i++) {
			if (total + array[i] > outerWidth) {
				return i < minimumNumberInNav ? minimumNumberInNav : i;
			} else {
				total += array[i];
			}
		}
	}

	updateNavigation() {
		this.outerWidth = this.refs.navigationOuter.getBoundingClientRect().width;
		this.moreMenu = this.refs.moreMenu ? this.refs.moreMenu.getBoundingClientRect().width : 0;
		const arrayAmount = this.howManyItemsInMenuArray(this.widthsArray, this.outerWidth, this.moreMenu, 5);
		const navItemsCopy = this.fullNavArray;
		const priorityItems = navItemsCopy.slice(0, arrayAmount);

		this.setState({
			priorityItems: priorityItems,
			moreItems:
				priorityItems.length !== navItemsCopy.length ? navItemsCopy.slice(arrayAmount, navItemsCopy.length) : []
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateNavigation());
	}

	render() {
		const { moreItems } = this.state;
		return (
			<>
				<div className="header-menu-wrapper header-menu-wrapper-left">
					<div ref="navigationOuter" className="header-menu header-menu-mobile header-menu-layout-default">
						<ul ref="navigation" className="menu-nav">
							 
								<li  className="menu-item menu-item-rel">
									<NavLink className="menu-link" to="/homepage">
										<span className="menu-text"> Feeds </span>
									</NavLink>
								</li>
							 
						</ul>

						{moreItems.length > 0 && (
							<ul ref="moreMenu" className="menu-nav navigation-list-absolute">
								<li className="menu-item menu-item-rel">
									<NavLink
										className="hamburger-btn"
										to="#"
										onClick={() => this.setState({ shown: !this.state.shown })}
									>
										{' '}
										<i className="flaticon-more"></i>{' '}
									</NavLink>
									{this.state.shown ? (
										<ul ref="moreNav" className="more-navigation" id="more-navigation-list">
											{moreItems.map((item, i) => (
												<li key={`moreNavItem-${i}`} className="navigation-item">
													<NavLink className="navigation-link" to={item.link}>
														<span className="menu-text"> {item.title} </span>
													</NavLink>
												</li>
											))}
										</ul>
									) : null}
								</li>
							</ul>
						)}

						{/* <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                            <ul className="menu-subnav">
                                <li className="menu-item">
                                    <NavLink className="menu-link" to="/builder">
                                        <span className="menu-text"> Project Listing </span>
                                    </NavLink>
                                </li>

                                <li className="menu-item">
                                    <NavLink className="menu-link" to="/builder">
                                        <span className="menu-text"> Add Listing </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div> */}
					</div>
				</div>
			</>
		);
	}
}
export default Nav;
