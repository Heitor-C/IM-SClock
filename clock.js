        const date = new Date();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const clock = hour.toString()+":"+minutes.toString();
        document.getElementById("time").innerHTML="It is now "+clock;
        if(hour < 12 && hour > 5){
            document.getElementById("greeting").innerHTML="Good Morning!";
            document.getElementById("greet").src="good_morning.jpg";
        }
        if(hour == 12){
            document.getElementById("greeting").innerHTML="Lunch time! bon appetit!!!";
            document.getElementById("greet").src="lunchtime.jpg";
        }
        if(hour > 12){
            document.getElementById("greeting").innerHTML="Good Afternoon!";
            document.getElementById("greet").src="goodafternoon.jpg";
        }
        if(hour > 17){
            document.getElementById("greeting").innerHTML="Good Evening!";
            document.getElementById("greet").src="goodevening.jpg";
        }
        if(hour == 20){
            document.getElementById("greeting").innerHTML="Dinner Time! bon appetit!!!";
            document.getElementById("greet").src="dinnertime.jpg";
        }
        if(hour > 21){
            document.getElementById("greeting").innerHTML="Its getting late, its time to sleep. Good Night.";
            document.getElementById("greet").src="goodnight.jpg";
        }
    
        if(hour < 6 || hour > 17){
            document.getElementById("clockstl").href="good_night.css";
        }
