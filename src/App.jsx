import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/page";
import AboutUs from "./pages/about-us/page";
import Register from "./pages/register/page";
import Signup from "./pages/login/page";
import Dashboard from "./pages/dashboard/page";
import Admin from "./components/layouts/admin";
import "./lib/i18n";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
      <Routes>
        <Route path="/admin" element={<Admin />} >
          <Route exact path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
