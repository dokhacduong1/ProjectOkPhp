import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../helpers/cookie";



function PrivateRoutes() {
  const token =  true;

  return (
    <>
      {token ? (<Outlet />) : (<Navigate to="/login" />)}
    </>
  )
}

export default PrivateRoutes;