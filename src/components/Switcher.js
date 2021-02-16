import React, { PureComponent } from "react";
import anime from "animejs";


const Switcher = () => {

    const themes = {true : 'light', false : 'dark'};

    const moonPath =
    "M18 27.5C18 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 18 12.3122 18 27.5Z";
    const circlePath =
    "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
    
    let toggleStatus = false;

    const toggleTheme = () => {
        const timeline = anime.timeline({
            duration: 750,
            easing: "easeOutExpo",
        });

        morphTo(timeline, toggleStatus);

        toggleStatus = !toggleStatus;
        
        console.log("asdf");
        document.documentElement.className = "";
        document.documentElement.classList.add(`theme-${themes[!toggleStatus]}`);
    };

    const  morphTo = (timeline, toggler) => {
        timeline
            .add({
                targets: ".circle",
                d: [{ value: toggler ? circlePath : moonPath }],
                fill: toggler ? "#FFC700" : "#ffffff",
            })
            .add(
                {
                    targets: "#darkMode",
                    rotate: toggler ? 40 : 320,
                    fill: "#ff0000",
                },
                "-=700"
            )
            .add(
                {
                    targets: ".scene",
                    backgroundColor: toggler ? "#f1f1f1" : "#333",
                },
                "-=700"
            );
            console.log("aaaaaaa");
    }

    return (
        <svg   
            className="switch"         
            width="25"
            height="25"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => toggleTheme()}
        >
            <path
                className="circle"
                d="M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"
                fill="#FFC700"
            />
        </svg>
    );
};

export default Switcher;
