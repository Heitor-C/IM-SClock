/* this is the digital clock area*/
        /*function zero makes so that every 0 to 9 minutes intervals have an
        extra zero before the number, it looks better that way.*/ 
        function zero(x){
            if(x<10){
                x = '0'+x;
            } return x;
        }
        /*this is the actual clock, gear is the seed element that drawns date 
        values, hour and minutes catch the hour and minutes values of the
        clock, minutes = zero makes the call of zero function to make 0 to 9
        intervals look better.
        clock builds the format of the clock and then applies it in the
        correct html field */
        setInterval(function(){
            let gear = new Date();    
            let hour = gear.getHours();
            let minutes = gear.getMinutes();
            minutes = zero(minutes);
            let clock = hour.toString()+":"+minutes.toString();
            document.getElementById("time").innerHTML="It is now "+clock;
        },5);
        
        /*this is the area that controls the greetings and styles of the
        digital clock.
        each if statement changes the greeting and the image, it also changes the
        style of the page. i think it would work better with a
        switch decision tree and it might need a setInterval instance to work
        properly.*/
        setInterval(function(){
            const date = new Date();
        let greeting = date.getHours();
        if(greeting < 12 && greeting > 5){
            document.getElementById("greeting").innerHTML="Good Morning!";
            document.getElementById("greet").src="good_morning.jpg";
        }
        if(greeting == 12){
            document.getElementById("greeting").innerHTML="Lunch time! bon appetit!!!";
            document.getElementById("greet").src="lunchtime.jpg";
        }
        if(greeting > 12){
            document.getElementById("greeting").innerHTML="Good Afternoon!";
            document.getElementById("greet").src="goodafternoon.jpg";
        }
        if(greeting > 17){
            document.getElementById("greeting").innerHTML="Good Evening!";
            document.getElementById("greet").src="goodevening.jpg";
        }
        if(greeting == 20){
            document.getElementById("greeting").innerHTML="Dinner Time! bon appetit!!!";
            document.getElementById("greet").src="dinnertime.jpg";
        }
        if(greeting > 21){
            document.getElementById("greeting").innerHTML="Its getting late, its time to sleep. Good Night.";
            document.getElementById("greet").src="goodnight.jpg";
        }
    
        if(greeting < 6 || greeting > 17){
            document.getElementById("clockstl").href="good_night.css";
        }

        },5);
