
import { Route, Routes } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";

import DashboardLayout from "./layout/DashboardLayout/DashboardLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminMenuPage from "./pages/admin/AdminMenuPage";
import ViewAllEmployeeChoices from "./pages/admin/ViewAllEmployeeChoices";
import ViewDailyMenu from "./pages/employee/ViewDailyMenu";
function App() {

  return (
    <div className="libre-baskerville-regular mx-20">
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route element={<DashboardLayout />}>
            <Route path="/admin/menu" element={<AdminMenuPage />}></Route>
            <Route path="/admin/view-choice" element={<ViewAllEmployeeChoices />}></Route>
            <Route path="/employee/view-menu" element={<ViewDailyMenu />}></Route>
          </Route>
        </Route>

      </Routes>

    </div>
  )
}

export default App
