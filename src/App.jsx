import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import './App.css'
import AuthProvider from "./context/Authcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "./shared/components/Popup";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          theme="light"
        />
        <Popup />
      </AuthProvider>
    </>
  )
}

export default App
