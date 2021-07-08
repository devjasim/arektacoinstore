import { Paper, Typography } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import PropTypes from "prop-types";
import React from "react";
import ImageAvatar from "../../assets/images/img_avatar.png";
import Orders from "./tabs/Orders";
import Overview from "./tabs/Overview";
import ViewOrder from "./tabs/ViewOrder";

// NOtification Badge
const defaultProps = {
	color: "secondary",
	children: <NotificationsNoneIcon />,
};
// NOtification Badge

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		height: 500,
	},
	tabs: {
		padding: "0",

		"& .MuiTabs-indicator": {
			display: "none",
		},

		"& button": {
			height: "auto",
			margin: ".5rem 0",
			padding: ".5rem 2rem",
			minHeight: "auto",

			"&.Mui-selected": {
				background: theme.palette.primary.main,

				"& .MuiBadge-badge": {
					backgroundColor: theme.palette.common.white,
					color: theme.palette.primary.main,
				},

				"& > span": {
					"& svg": {
						color: theme.palette.text.light,
					},

					"& span": {
						color: theme.palette.text.light,
					},
				},
			},

			"& > span": {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				flexDirection: "row",

				"& svg": {
					marginBottom: "0 !important",
				},

				"& span": {
					flex: 1,
					display: "block",
					textAlign: "center",
					color: theme.palette.text.main,
					marginLeft: "1rem",
				},
			},
		},
	},

	tabsContent: {
		marginLeft: "3.5rem",
		flex: "1",
		maxHeight: "100%",
		overflowY: "auto",
	},

	tabsMenu: {
		minWidth: "250px",
		padding: "1rem 0",
	},

	userAvatar: {
		paddingBottom: "10rem",
		position: "relative",
		"& > div": {
			position: "absolute",
			top: "-50%",
			left: "0",
			width: "100%",

			"& div": {
				textAlign: "center",

				"& h4": {
					fontSize: "1.8rem",
					marginTop: ".5rem",
					marginBottom: ".2rem",
				},

				"& h5": {
					fontSize: "1.1rem",
					marginTop: ".3rem",
					color: theme.palette.common.textGray,
				},

				"&:first-child": {
					width: "150px",
					height: "150px",
					borderRadius: "50%",
					border: "10px solid #fff",
					margin: "0 auto",

					"& img": {
						width: "100%",
						height: "100%",
						objectFit: "cover",
						borderRadius: "50%",
					},
				},
			},
		},
	},

	badgeItem: {
		"& .MuiBadge-root": {
			flex: "initial",
			margin: "0 !important",
			maxHeight: "25px",

			"& .MuiBadge-badge": {
				display: "flex",
				width: "20px",
				height: "20px",
				fontSize: "11px",
				left: "-20px",
				top: "5px",
				margin: "0 !important",
				flex: "initial",
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.text.light,
			},
		},
	},
}));

export default function Sidebar() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Paper className={classes.tabsMenu} elevation={2}>
				<div className={classes.userAvatar}>
					<div>
						<div>
							<img src={ImageAvatar} alt="" />
						</div>
						<div>
							<Typography variant="h4">User Name</Typography>
							<Typography variant="h5">
								User ID: 1243432
							</Typography>
						</div>
					</div>
				</div>

				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					className={classes.tabs}
				>
					<Tab
						label={<span>Overview</span>}
						icon={<DashboardIcon />}
						{...a11yProps(0)}
					/>
					<Tab
						label={<span>View Orders</span>}
						icon={<FormatListBulletedIcon />}
						{...a11yProps(1)}
					/>
					<Tab
						label={<span>My Cards</span>}
						icon={<CreditCardIcon />}
						{...a11yProps(2)}
					/>
					<Tab
						className={classes.badgeItem}
						label={<span>Notification</span>}
						icon={<Badge badgeContent={9} {...defaultProps} />}
						{...a11yProps(3)}
					/>
					<Tab
						icon={<SettingsIcon />}
						label={<span>Setting</span>}
						{...a11yProps(4)}
					/>
				</Tabs>
			</Paper>
			<Paper className={classes.tabsContent} elevation={2}>
				<TabPanel value={value} index={0}>
					<Overview />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<ViewOrder />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Orders />
				</TabPanel>
				<TabPanel value={value} index={3}>
					Item Four
				</TabPanel>
				<TabPanel value={value} index={4}>
					Item Five
				</TabPanel>
				<TabPanel value={value} index={5}>
					Item Six
				</TabPanel>
				<TabPanel value={value} index={6}>
					Item Seven
				</TabPanel>
			</Paper>
		</div>
	);
}
