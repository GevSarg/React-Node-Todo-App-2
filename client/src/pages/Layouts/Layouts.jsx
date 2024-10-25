import { Outlet } from "react-router-dom";
import Navbar from "../partials/Navbar";

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
