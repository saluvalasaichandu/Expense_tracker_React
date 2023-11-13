import Login from './components/Login';
import Profile from './components/Profile';
import Interface from './components/Interface';
// import Navigation from './components/navigation/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Route,RouterProvider,Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
function App() {
  return (
     <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profilebutton" element={<Interface/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
