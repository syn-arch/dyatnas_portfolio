import React from "react";
import Cookies from "js-cookie";

function Dashboard(props) {
  return (
    <div className="bg-white p-4 sm:ml-4 rounded mt-4 shadow">
      <h1>Welcome Back, {JSON.parse(Cookies.get("user")).name}</h1>
    </div>
  );
}

export default Dashboard;
