const stokeLocation = document.getElementById("stokeLocation");
const manchesterLocation = document.getElementById("manchesterLocation");
const newcastleLocation = document.getElementById("newcastleLocation");

window.onload = function() {
    prepareEventHandlers();
};
    
function prepareEventHandlers(){
    stokeLocation.onmouseover =  function(){
        fill(this, "red");
    };  
    manchesterLocation.onmouseover = function(){
        fill(this, "red");
    };    
    newcastleLocation.onmouseover = function(){
        fill(this, "red"); 
    }; 
    stokeLocation.onmouseleave =  function(){
        fill(this, "white");
    };
    manchesterLocation.onmouseleave = function(){
        fill(this, "white");
    }; 
    newcastleLocation.onmouseleave = function(){
        fill(this, "white"); 
    };
};

function fill(elem, colour){
    elem.style.fill = colour;
};