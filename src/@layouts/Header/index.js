import {
	AppBar,
	Container,
	Drawer,
	IconButton,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import MainLogo from "../../assets/images/arektacoinlogo.png";

const headersData = [
	{
		label: "Top-up",
		href: "/top-up",
	},
	{
		label: "Games",
		href: "/games",
	},
	{
		label: "Gift Cards",
		href: "/gift-cards",
	},
	{
		label: "Subscriptions",
		href: "/subscriptions",
	},
];

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundColor: theme.palette.secondary.light,
		padding: "0px",
	},

	logo: {
		fontWeight: 600,
		color: theme.palette.text.main,
		textAlign: "left",
		flex: ".5",

		"& img": {
			maxWidth: "100%",
		},

		"@media (max-width: 1160px)": {
			flex: "initial",
			"& img": {
				maxWidth: "80%",
			},
		},
	},

	menuButton: {
		fontWeight: 700,
		size: "1.5px",
	},

	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		minHeight: "5.5rem",

		"& > div": {
			"& a": {
				color: theme.palette.text.main,
				textDecoration: "none",
				fontSize: "16px",
				fontWeight: "500",
			},
		},
	},

	drawerContainer: {
		padding: "0px 0 20px 20px",
		minWidth: "8rem",

		"& ul": {
			listStyle: "none",
			"& li": {
				padding: "5px 0",
			},
		},
	},

	menuDesign: {
		flex: "1",
		"& ul": {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-around",
			"& li": {
				padding: "0 10px",

				"& a": {
					fontSize: "18px",
					fontWeight: "400",
					position: "relative",
					paddingBottom: "5px",
					transition: ".4s all ease-in-out",

					"&:after": {
						content: "''",
						position: "absolute",
						bottom: "0",
						left: "50%",
						transform: "translateX(-50%)",
						width: "0",
						height: ".1rem",
						backgroundColor: theme.palette.primary.main,
						transition: ".3s all ease-in-out",
					},

					"&:hover": {
						color: theme.palette.primary.main,

						"&:after": {
							width: "100%",
						},
					},
				},
			},
		},
	},

	mobileMenuButton: {
		backgroundColor: theme.palette.primary.main,
		margin: "0px 10px 0px 0px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
		},
	},

	headerOptions: {
		flex: ".5",
		textAlign: "right",
		"@media (max-width: 1160px)": {
			flex: "initial",
		},

		"& a": {
			margin: "0 1rem",
			borderRadius: "20px",
			padding: ".5rem 1.5rem",
			transition: ".4s all ease-in-out",
			fontWeight: "500",

			"@media (max-width:1160px)": {
				margin: "0 20px",
			},

			"&:first-child": {
				"&:hover": {
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.text.light,
				},
			},

			"&:last-child": {
				marginRight: "0",
				backgroundColor: theme.palette.primary.main,
				borderRadius: "20px",
				padding: ".5rem 1.5rem",
				color: theme.palette.text.light,

				"&:hover": {
					backgroundColor: theme.palette.secondary.main,
					color: theme.palette.text.primary,
				},
			},
		},
	},
}));

function Header() {
	const {
		header,
		logo,
		headerOptions,
		menuButton,
		toolbar,
		drawerContainer,
		menuDesign,
		mobileMenuButton,
	} = useStyles();

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({
						...prevState,
						mobileView: false,
				  }));
		};

		setResponsiveness();

		window.addEventListener("resize", () => setResponsiveness());
	}, []);

	// Site Logo
	const Logo = (
		<div className={logo}>
			<Typography to="/" component={RouterLink}>
				<img src={MainLogo} alt="Arekta Coin Store" />
			</Typography>
		</div>
	);

	// Header Right Features
	const HeaderOptions = (
		<div className={headerOptions}>
			<Typography to="/login" component={RouterLink}>
				Login
			</Typography>
			<Typography to="/register" component={RouterLink}>
				Register
			</Typography>
		</div>
	);

	// Set Desktop menu items
	const getDesktopMenu = () => {
		return (
			<ul>
				{headersData.map((datas, index) => {
					return (
						<li key={index}>
							<Typography
								{...{
									key: datas.label,
									color: "inherit",
									to: `${datas.href}`,
									component: RouterLink,
									className: menuButton,
								}}
							>
								{datas.label}
							</Typography>
						</li>
					);
				})}
			</ul>
		);
	};

	// Desktop Menu
	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				{Logo}
				<div className={menuDesign}>{getDesktopMenu()}</div>
				{HeaderOptions}
			</Toolbar>
		);
	};

	// Set the mobile menu item
	const getMobileMenus = () => {
		return (
			<ul>
				{headersData.map((data, index) => {
					return (
						<li key={index}>
							<Typography
								{...{
									component: RouterLink,
									to: `${data.href}`,
									color: "inherit",
									style: { textDecoration: "none" },
									key: data.label,
								}}
							>
								{data.label}
							</Typography>
						</li>
					);
				})}
			</ul>
		);
	};

	// Mobile Menu
	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<Toolbar className={toolbar}>
				<div style={{ display: "flex", alignItems: "center" }}>
					<IconButton
						className={mobileMenuButton}
						{...{
							edge: "start",
							color: "inherit",
							"aria-label": "menu",
							"aria-haspopup": "true",
							onClick: handleDrawerOpen,
						}}
					>
						<MenuIcon />
					</IconButton>

					<Drawer
						{...{
							anchor: "left",
							open: drawerOpen,
							onClose: handleDrawerClose,
						}}
					>
						<div className={drawerContainer}>
							{getMobileMenus()}
						</div>
					</Drawer>
					<div>{Logo}</div>
				</div>
				<div>{HeaderOptions}</div>
			</Toolbar>
		);
	};

	return (
		<AppBar elevation={1} position="sticky" className={header}>
			<Container maxWidth="xl">
				{mobileView ? displayMobile() : displayDesktop()}
			</Container>
		</AppBar>
	);
}

export default Header;
