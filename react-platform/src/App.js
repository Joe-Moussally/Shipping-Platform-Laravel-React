import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//packages import
import { Provider } from "react-redux";
import { store } from './redux/store'

//page imports
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (

    <Provider store={store}>
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<LoginPage />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/register" element={<SignUpPage />}/>
        
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;