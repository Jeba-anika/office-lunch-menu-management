
import { Route, Routes } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import DashboardLayout from "./layout/DashboardLayout";
import Homepage from "./pages/Homepage";
import AdminMenuPage from "./pages/admin/AdminMenuPage";
function App() {

  return (
    <div className="libre-baskerville-regular mx-20">
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route element={<DashboardLayout />}>
            <Route path="/admin/menu" element={<AdminMenuPage />}></Route>
          </Route>
        </Route>

      </Routes>

    </div>
  )
}

export default App
