import React from "react";
import "../Components/SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <div>
        <Icon />
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default SidebarOption;
