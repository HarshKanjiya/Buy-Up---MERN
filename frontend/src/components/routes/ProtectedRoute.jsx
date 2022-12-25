import React from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = (propss) => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  const Helper = () => {
    navigate("/login");
  };
  return (
    <>
      {!loading && <>{isAuthenticated ? <Route {...propss} /> : { Helper }}</>}
    </>
  );
};

export default ProtectedRoute;
