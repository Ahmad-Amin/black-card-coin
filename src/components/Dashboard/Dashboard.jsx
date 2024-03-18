import React, { useState} from "react";
import whiteLogo from "../../assets/whiteDashboardLogo.png";
import MainView from "./MainView/MainView";
import DesktopSiderbar from './Sidebar/DesktopSidebar'

const Dashboard = () => {

  const [mobileSiderBar, setMobileSiderBar] = useState(true)

  return (
    <div className=" grid lg:grid-cols-5 md:grid-cols-4">
      <div className="block">
        <DesktopSiderbar setMobileSiderBar={setMobileSiderBar} mobileSiderBar={ mobileSiderBar} />      
      </div>
      {/* <div className="block md:hidden">
        MobileSidar
      </div> */}
      <div className=" lg:col-span-4 md:col-span-3"><MainView setMobileSiderBar={ setMobileSiderBar} /></div>
    </div>
  );
};

export default Dashboard;
