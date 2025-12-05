function on(){
    document.getElementById("bulb").style.backgroundColor="yellow"
}
function off(){
    document.getElementById("bulb").style.backgroundColor="green"
}
function red(){
    document.getElementById("bulb").style.backgroundColor="red"
}
function pink(){
    document.getElementById("bulb").style.backgroundColor="pink"
}
function blue(){
    document.getElementById("bulb").style.backgroundColor="blue"
}
const userColor= document.getElementById("color")

userColor.addEventListener("change",()=>changeBulbColor(userColor.value));

function changeBulbColor(color){
    document.getElementById("bulb").style.backgroundColor= color;
}

function SB_Control(){
    const Btn= document.getElementById("SB_Btn")
    if(Btn.innerText === "On"){
        document.getElementById("SB_BTN").innerText="off";
        document.getElementById("smartBulb").classList.add("on");

    }else{
       document.getElementById("SB_BTN").innerText="On";
        document.getElementById("smartBulb").classList.remove("on");
    }
}

function SB_Control2(){
    document.getElementById("smartBulb").classList.toggle("on")
}