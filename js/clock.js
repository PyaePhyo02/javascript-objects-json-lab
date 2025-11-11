(function(){ 
console.info("Hello JS");
const myNode = document.createElement("div");
digitalClock.appendChild(myNode);
myNode.innerHTML = "Welcome";
const myDate = new Date();

console.dir(myDate);
myNode.innerHTML = myDate.toDateString();
// show only hours, minutes and seconds
myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
// show only hours, minutes and seconds
myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { timeStyle: "medium" });
})();
///IIFE

(function(){
    

    const myNode = document.createElement("div");
    const digitalClock = document.getElementById ("digitalClock");
    const secondHand = document.getElementById("secondHand");
    const minHand = document.getElementById("minHand");
    const hrHand = document.getElementById("hrHand");
    hrHand.style.backgroundColor = '#0f0';
    //demno
        digitalClock.appendChild(myNode);
        const updateTime = function (){
        const MyDate = new Date;
        myNode.innerHTML = myDate.toDateString();
        // show only hours, minutes and seconds
        myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { timeStyle: "medium" });
        const seconds = myDate.getSeconds();
        const rotSeconds = seconds * 6 - 90;
        secondHand.style.transform = `rotate (${rotSeconds}deg)`;
        const minutes = myDate.getMinutes()
        const rotMinutes = minutes *6-90;
        minHand.style.transform= `rotate(${rotMinutes}deg)`
        let hours = myDate.getHours()
        hours = hours + minutes/60
        const rotHours = hours * 30-90
        hrHand.style.transform = `rotate (${rotHours}deg)`
    }
    setInterval(updateTime, 1000);
    updateTime;
})();
