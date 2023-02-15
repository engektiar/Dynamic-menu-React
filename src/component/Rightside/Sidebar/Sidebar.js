import React from "react";
import "./Sidebar.css";
import items from "../data/data.json";
import SidebarItem from "../SidebarItem/SidebarItem";
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
