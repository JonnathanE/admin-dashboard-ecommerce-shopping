import { Outlet } from "react-router-dom";
import './app.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Topbar from './components/Topbar/Topbar.jsx';

function App() {

  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;

  return (
    <>
      {admin &&
        <>
          <Topbar />
          <div className='container'>
            <Sidebar />
            <Outlet />
          </div>
        </>
      }
    </>
  );
}

export default App;
