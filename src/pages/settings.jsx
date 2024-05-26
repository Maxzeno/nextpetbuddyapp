import React from "react";
import Account from "../components/section/account.jsx";
import ChangePassword from "../components/section/changePassword.jsx";
import Footer from "../components/section/footer.jsx";
import Sidebar from "../components/section/sidebar.jsx";

export default function Settings() {
  return (
    <>
      <Sidebar
        head={<div className="font-semibold text-3xl">Account Setting</div>}
        body={
          <>
            <Account />
            <ChangePassword />
          </>
        }
      />
      <Footer />
    </>
  );
}
