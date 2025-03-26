import './pvc.js'

let newGame = document.querySelectorAll(".js-options-new-game")

newGame.forEach((gameDiv)=>
{
    gameDiv.addEventListener("touchstart", () => {
        gameDiv.classList.add("options-hoverDiv-APK");
    });
    
    gameDiv.addEventListener("touchend", () => {
        gameDiv.classList.remove("options-hoverDiv-APK");
    });
    
    gameDiv.addEventListener("touchcancel", () => {
        gameDiv.classList.remove("options-hoverDiv-APK");
    });
})

let settings = document.querySelectorAll(".js-options-settings")

settings.forEach((settingsDiv)=>
{
    settingsDiv.addEventListener("touchstart", () => {
        settingsDiv.classList.add("options-hoverDiv-APK");
    });
    
    settingsDiv.addEventListener("touchend", () => {
        settingsDiv.classList.remove("options-hoverDiv-APK");
    });
    
    settingsDiv.addEventListener("touchcancel", () => {
        gsettingsDiv.classList.remove("options-hoverDiv-APK");
    });
})

let info = document.querySelectorAll(".js-options-info")

info.forEach((infoDiv)=>
{
    infoDiv.addEventListener("touchstart", () => {
        infoDiv.classList.add("options-hoverDiv-APK");
    });
    
    infoDiv.addEventListener("touchend", () => {
        infoDiv.classList.remove("options-hoverDiv-APK");
    });
    
    infoDiv.addEventListener("touchcancel", () => {
        infoDiv.classList.remove("options-hoverDiv-APK");
    });
})

let mode = document.querySelectorAll(".js-options-mode")

mode.forEach((modeDiv)=>
{
    modeDiv.addEventListener("touchstart", () => {
        modeDiv.classList.add("options-hoverDiv-APK");
    });
    
    modeDiv.addEventListener("touchend", () => {
        modeDiv.classList.remove("options-hoverDiv-APK");
    });
    
    modeDiv.addEventListener("touchcancel", () => {
        modeDiv.classList.remove("options-hoverDiv-APK");
    });
})