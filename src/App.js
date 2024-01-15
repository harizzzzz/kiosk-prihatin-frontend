import React, { useEffect, useState } from "react";
import Index from "./pages";
import Login from "./layout/login";
import Signup from "./layout/signup";
import Volunteer from "./pages/volunteer";
import Donate from "./pages/donate";
import About from "./pages/about";
import Events from "./pages/events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Elements from "./pages/elements";

import Stocks from "./pages/stocks";

import Tq from "./pages/aftervolunteer";
import {
  isAuthenticated,
  getRefreshToken,
  refreshJWT,
  isRefresh,
  getAccessToken,
} from "./auth/token";
import { ChakraProvider, Box, Flex, CSSReset } from "@chakra-ui/react";
import Volunteers from "./pages/Volunteer/volunteerNew";
import Home from "./pages/home";
import NavBar from "./pages/utility/Navbar";
import VolunteerUsers from "./pages/Volunteer/volunteerUsers";
import VolunteerRegistration from "./pages/Volunteer/volunteerReg";
import AfterDonation from "./pages/afterdonate";
import ThankYou from "./pages/thankyou";
import HomePage from "./admin/homepage";
import UserManagement from "./admin/manage";
import EditSettings from "./admin/settings";
import ViewAnalytics from "./admin/report";
import FoodManagement from "./admin/foodmanage";
import VolunteerManagement from "./admin/volunteermanage";
import DonationManagement from "./admin/donation";
import UserAuthentication from "./admin/userauthen";
import UsersList from "./admin/users";
import ContentManagement from "./admin/content";
import VolunteerHistory from "./pages/Volunteer/volunteerHistory";
import MakeReserve from "./pages/Reservation/MakeReservation";
import ConfirmReserve from "./pages/Reservation/ConfirmReservation";
import ReserveHistory from "./pages/Reservation/ReserveHistory";
import User from "./pages/user";
import ManageUsers from "./admin/Users/manageUsers";
import ManageVolunteers from "./admin/Volunteers/manageVolunteers";
import CreateVolunteer from "./admin/Volunteers/createVolunteer";
import EditVolunteer from "./admin/Volunteers/editVolunteer";
const token = getAccessToken();

function App() {
  const [auth, setAuth] = useState(isAuthenticated());
  const [rt, setRt] = useState(getRefreshToken());
  const refresh = localStorage.getItem("refresh");

  useEffect(() => {
    console.log(localStorage.getItem("refresh"));
    if (auth && refresh === "0") {
      localStorage.setItem("refresh", 1);
      console.log(localStorage.getItem("refresh"));
      console.log("in auth if");
      // Use an async IIFE to await refreshJWT
      (async () => {
        await refreshJWT();
        setAuth(isAuthenticated());
        setRt(getRefreshToken());
      })();
    }
  }, [rt, auth]); // Both rt and auth are dependencies

  const handleLogin = () => {
    setAuth(true);
  };

  const handleLogout = () => {
    setAuth(false);
  };

  //const routing = useRoutes(routes(auth, handleLogin, handleLogout));
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>

          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/donate" element={<Donate></Donate>}></Route>
          <Route path="/volunteer" element={<Volunteer></Volunteer>}></Route>
          <Route path="/elements" element={<Elements></Elements>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
          <Route path="/thakyou" element={<ThankYou></ThankYou>}></Route>
          <Route path="/stocks" element={<Stocks></Stocks>}></Route>
          <Route path="/makeReserve" element={<MakeReserve />}></Route>
          <Route
            path="/confirmReserve/:session_id"
            element={<ConfirmReserve />}
          ></Route>
          <Route
            path="/reserveHistory"
            element={<ReserveHistory></ReserveHistory>}
          ></Route>
          <Route
            path="/volHistory"
            element={<VolunteerHistory></VolunteerHistory>}
          ></Route>
          <Route path="/tq" element={<Tq></Tq>}></Route>
          <Route path="/editvol" element={<Volunteers></Volunteers>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/afterdonate"
            element={<AfterDonation></AfterDonation>}
          ></Route>
          <Route path="/testVol" element={<VolunteerUsers />}></Route>
          <Route
            path="/volReg/:session_id"
            element={<VolunteerRegistration />}
          ></Route>
          <Route path="/user" element={<User></User>}></Route>

          {/** admin*/}
          <Route path="/homepage" element={<HomePage></HomePage>}></Route>
          <Route
            path="/admin/manageUser"
            element={<ManageUsers></ManageUsers>}
          ></Route>
          <Route
            path="/admin/manageVolunteer"
            element={<ManageVolunteers></ManageVolunteers>}
          ></Route>
          <Route
            path="/admin/createVolunteer"
            element={<CreateVolunteer></CreateVolunteer>}
          ></Route>
          <Route
            path="/admin/editVolunteer/:session_id"
            element={<EditVolunteer></EditVolunteer>}
          ></Route>
          <Route
            path="/manage"
            element={<UserManagement></UserManagement>}
          ></Route>
          <Route
            path="/settings"
            element={<EditSettings></EditSettings>}
          ></Route>
          <Route
            path="/report"
            element={<ViewAnalytics></ViewAnalytics>}
          ></Route>
          <Route
            path="/food"
            element={<FoodManagement></FoodManagement>}
          ></Route>
          <Route
            path="/vo"
            element={<VolunteerManagement></VolunteerManagement>}
          ></Route>
          <Route
            path="/do"
            element={<DonationManagement></DonationManagement>}
          ></Route>
          <Route path="/userrr" element={<UsersList></UsersList>}></Route>
          <Route
            path="/content"
            element={<ContentManagement></ContentManagement>}
          ></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
