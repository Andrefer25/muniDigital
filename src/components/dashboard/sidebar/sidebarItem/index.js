import React from "react";
import Nav from "react-bootstrap/Nav";

const SidebarItem = ({ title, active, setActive, changeSite, prop, Icon }) => {
    return(
        <Nav.Item onClick={() => changeSite(!active, setActive, prop)}>
          <div className={`sideBarItem ${active? "sidebarActive":""}`}>
              <div>
                { title }
              </div>
                <Icon className="sidebarIcon" />
          </div>
        </Nav.Item>
    )
}

export default SidebarItem;