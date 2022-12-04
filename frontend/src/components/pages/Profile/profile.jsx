import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isAuthenticated, userInfo, error} = useSelector((state) => state.user)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  if(userInfo){
    return (
      <motion.div
        key={"profilePage"}
        // initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        //     exit={{ opacity: 0 }}
        //     transition={{
        //       duration: 0.4,
        //     }}
      >
      <Header/>
        {userInfo.name}
        <Footer/>
      </motion.div>
    );
  }
};

export default Profile;
