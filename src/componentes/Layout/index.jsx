import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="w-screen md:w-[90%] border  mx-auto min-h-10 mt-3">
        <Outlet />

    </div>
  )
}

export default Layout