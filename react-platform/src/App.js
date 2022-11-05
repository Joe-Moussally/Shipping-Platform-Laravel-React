import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

//page imports
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<LoginPage />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/register" element={<SignUpPage />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;