import React, { useState, useEffect, Component } from "react";
import styled from "styled-components";
import "./loggedin.css";

export default function App() {
    console.log("page")

    const MyComponent = styled.div`
display:none;

@media (max-width: 620px){
    display: inline;
}`

    //sidebar using react
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    useEffect(() => {
        console.log(screenWidth);

        if (screenWidth <= 620) {
            setSideBarOpen(false);
        }
        else {
            setSideBarOpen(true);
        }
        console.log("setting");
    }, [screenWidth])

    const toggleSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };

    const closeSidebarFromContent = () => {
        if (sidebarOpen) setSideBarOpen(false);
    }
    return (
        <div className="home">
            <>
                <div className="sidebar"
                    style={screenWidth <= 620 ?
                        (sidebarOpen ? { left: "0px", position: "absolute" } : { left: "-200px", position: "absolute" })
                        : (sidebarOpen ? { left: "0px" } : { left: "-200px" })
                    }
                >
                    sidebar
                    <button onClick={toggleSidebar}>close</button>
                </div>
            </>

            <div className="content" onClick={closeSidebarFromContent}>
                <MyComponent>
                    <div className="header">
                        header
                        <button onClick={toggleSidebar}>
                            switch
                        </button>
                    </div>
                </MyComponent>
                <div className="insideContent">
                    content area (content is the king)
                </div>
            </div>
        </div>
    );
};

