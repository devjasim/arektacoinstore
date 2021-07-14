import Footer from "@layouts/Footer";
import Header from "@layouts/Header";
import { makeStyles } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import About from "pages/About";
import Checkout from "pages/Checkout";
import Home from "pages/Home";
import Login from "pages/Login";
import OrderStatus from "pages/OrderStatus";
import Register from "pages/Register";
import UserDashboard from "pages/UserDash";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./assets/sass/main.scss";
import Category from "./pages/Category";

const useStyle = makeStyles((theme) => ({
  pageWrapper: {
    marginTop: `${theme.spacing(5)}rem`,
  },
}));

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.99,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.01,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

function App() {
  const classes = useStyle();
  const location = useLocation();

  return (
    <AnimatePresence>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path={["/", "/about", "/checkout"]}>
            <Header />
            <Switch location={location} key={location.pathname}>
              <motion.div
                initial="initial"
                animate="in"
                variants={pageVariants}
                transition={pageTransition}
                className={classes.pageWrapper}
              >
                <Route exact path="/" component={Home} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/category" component={Category} />
                <Route path="/order-status" component={OrderStatus} />
                <Route path="/user-dashboard" component={UserDashboard} />
              </motion.div>
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </React.Suspense>
    </AnimatePresence>
  );
}

export default App;
