import React from "react";
import "./sidebar.css";
import items from "./sidebarData.json";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
