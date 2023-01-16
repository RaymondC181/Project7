var min = 0; 
var hour = 0;
var running = true;
var timer; 
var speed = 1000;

var savedMin = 0;
var savedHr = 12;

var AM = true; 

function initialize()
{
    var time = document.getElementById('time');
    var timeSpeed = document.getElementById('timeSpeed');
    var log = document.getElementById('log');
}


function start(){
    hour = savedHr;
    min = savedMin;
    
    timer = setInterval(function(){

        if(AM)
        { 
            time.innerHTML= hour + ':' + min + ' AM';
        }
        else{
            time.innerHTML= hour + ':' + min + ' PM';
        }

        min+=1;
        if(hour==12 && (AM) && min>60)
        {
            hour = 1; 
            min = 0;
        }
        else if(hour==12 && !(AM))
        {
            pause();
            disableButton(document.getElementById("pause"));
            disableButton(document.getElementById("stop"));
        }
        else if(hour>12 && (AM))
        {
            AM = !(AM);
            hour = 1;
        }
        else if(min>60)
        {
            min = 0;
            hour++; 
        }
        log(); 
    }, speed);

    disableButton(document.getElementById("two"));
    disableButton(document.getElementById("four"));
    disableButton(document.getElementById("half"));
    disableButton(document.getElementById("quarter"));
}

function pause()
{
    savedMin = min;
    savedHr = hour; 
    clearInterval(timer);
}

function stop()
{
    timer.innerHTML = "00:00"; 
    clearInterval(timer);
}

function two(){speed = 500; timeSpeed.innerHTML = "2x"}

function four(){speed = 250; timeSpeed.innerHTML = "4x"}

function half(){speed = 2000; timeSpeed.innerHTML = "0.5x"}

function quarter(){speed = 4000; timeSpeed.innerHTML = "0.25x"}

function disableButton(btn) {
    document.getElementById(btn.id).disabled = true;
}

function log()
{
    if(AM && ((hour==12) || (hour==1) || (hour==2) || (hour==3) || (hour==4)))
    {
        var r = randomInRange(1,2);
        for(var i = 0; i<r; i++)
        {
            var vehicle = rollVehicle1(); 
            document.getElementById('log').innerHTML += "<br/>" + vehicle;
        }
    }
    else if((hour==5) || (hour==6) || (hour==7) || (hour==8))
    {
        var r = randomInRange(20,40);
        for(var i = 0; i<r; i++)
        {
            var vehicle = rollVehicle2(); 
            document.getElementById('log').innerHTML += "<br/>" + vehicle;
        }
    }
    else if((hour==9) || (hour==10) || (hour==11) || (hour==12)|| (hour==1))
    {
        var r = randomInRange(5,20);
        for(var i = 0; i<r; i++)
        {
            var vehicle = rollVehicle3(); 
            document.getElementById('log').innerHTML += "<br/>" + vehicle;
        }
    }
    
}

function randomInRange(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function rollVehicle1()
{
    var r = randomInRange(1, 100);
    var carPrice = 12; 
    var axles = 2; 
    var truckPrice = 18 + (axles*6);
    var motorcyclePrice = 12; 
    var bus = 0;

    if(r<=30)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            carPrice = carPrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                carPrice*0.6; 
            }
            return time.innerHTML +  "- A car with EZ-Pass paid $" + carPrice; 
        }
        return time.innerHTML + "- A car with no EZ-Pass paid $12.00"
    }
    else if(r<=95)
    {
        var EZ = randomInRange(1, 100);
        var threeAxles = randomInRange(1, 100);
        var fourAxles = randomInRange(1, 100);
        var fiveAxles = randomInRange(1, 100);

        if(threeAxles<=50)
        {
            axles=3;
            if(fourAxles<=20)
            {
                axles=4; 
                if(fiveAxles<=10)
                {
                    axles=5; 
                }
            }
        }

        if(EZ<=90)
        {
            truckPrice = (18 + (axles*6))*0.9; 
            return time.innerHTML +  "- A truck with EZ-Pass and " + axles + " axles paid $" + truckPrice; 
        }
        return time.innerHTML + "- A truck with no EZ-Pass and " + axles +" axles paid $" + truckPrice;
    }
    else{
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            motorcyclePrice = motorcyclePrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                motorcyclePrice*0.6; 
            }
            return time.innerHTML +  "- A motorcycle with EZ-Pass paid $" + motorcyclePrice; 
        }
        return time.innerHTML + "- A motorcycle with no EZ-Pass paid $12.00"
    }
}

function rollVehicle2()
{
    var r = randomInRange(1, 100);
    var carPrice = 12; 
    var axles = 2; 
    var truckPrice = 18 + (axles*6);
    var motorcyclePrice = 12; 
    var bus = 0;
    var r = Math.floor(Math.random() * 100) + 1;

    if(r<=50)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            carPrice = carPrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                carPrice*0.6; 
            }
            return time.innerHTML +  "- A car with EZ-Pass paid $" + carPrice; 
        }
        return time.innerHTML + "- A car with no EZ-Pass paid $12.00"
    }
    else if(r<=75)
    {
        var EZ = randomInRange(1, 100);
        var threeAxles = randomInRange(1, 100);
        var fourAxles = randomInRange(1, 100);
        var fiveAxles = randomInRange(1, 100);

        if(threeAxles<=50)
        {
            axles=3;
            if(fourAxles<=20)
            {
                axles=4; 
                if(fiveAxles<=10)
                {
                    axles=5; 
                }
            }
        }

        if(EZ<=90)
        {
            truckPrice = (18 + (axles*6))*0.9; 
            return time.innerHTML +  "- A truck with EZ-Pass and " + axles + " axles paid $" + truckPrice; 
        }
        return time.innerHTML + "- A truck with no EZ-Pass and " + axles +" axles paid $" + truckPrice;
    }
    else if(r<=80)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            motorcyclePrice = motorcyclePrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                motorcyclePrice*0.6; 
            }
            return time.innerHTML +  "- A motorcycle with EZ-Pass paid $" + motorcyclePrice; 
        }
        return time.innerHTML + "- A motorcycle with no EZ-Pass paid $12.00"
    }
    else{
        return time.innerHTML +  "- A bus with EZ-Pass paid $" + bus; 
    }
}

function rollVehicle3()
{
    var r = randomInRange(1, 100);
    var carPrice = 12; 
    var axles = 2; 
    var truckPrice = 18 + (axles*6);
    var motorcyclePrice = 12; 
    var bus = 0;
    var r = Math.floor(Math.random() * 100) + 1;

    if(r<=40)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            carPrice = carPrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                carPrice*0.6; 
            }
            return time.innerHTML +  "- A car with EZ-Pass paid $" + carPrice; 
        }
        return time.innerHTML + "- A car with no EZ-Pass paid $12.00"
    }
    else if(r<=80)
    {
        var EZ = randomInRange(1, 100);
        var threeAxles = randomInRange(1, 100);
        var fourAxles = randomInRange(1, 100);
        var fiveAxles = randomInRange(1, 100);

        if(threeAxles<=50)
        {
            axles=3;
            if(fourAxles<=20)
            {
                axles=4; 
                if(fiveAxles<=10)
                {
                    axles=5; 
                }
            }
        }

        if(EZ<=90)
        {
            truckPrice = (18 + (axles*6))*0.9; 
            return time.innerHTML +  "- A truck with EZ-Pass and " + axles + " axles paid $" + truckPrice; 
        }
        return time.innerHTML + "- A truck with no EZ-Pass and " + axles +" axles paid $" + truckPrice;
    }
    else if(r<=90)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            motorcyclePrice = motorcyclePrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                motorcyclePrice*0.6; 
            }
            return time.innerHTML +  "- A motorcycle with EZ-Pass paid $" + motorcyclePrice; 
        }
        return time.innerHTML + "- A motorcycle with no EZ-Pass paid $12.00"
    }
    else{
        return time.innerHTML +  "- A bus with EZ-Pass paid $" + bus; 
    }
}

function rollVehicle4()
{
    var r = randomInRange(1, 100);
    var carPrice = 12; 
    var axles = 2; 
    var truckPrice = 18 + (axles*6);
    var motorcyclePrice = 12; 
    var bus = 0;
    var r = Math.floor(Math.random() * 100) + 1;

    if(r<=45)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            carPrice = carPrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                carPrice*0.6; 
            }
            return time.innerHTML +  "- A car with EZ-Pass paid $" + carPrice; 
        }
        return time.innerHTML + "- A car with no EZ-Pass paid $12.00"
    }
    else if(r<=75)
    {
        var EZ = randomInRange(1, 100);
        var threeAxles = randomInRange(1, 100);
        var fourAxles = randomInRange(1, 100);
        var fiveAxles = randomInRange(1, 100);

        if(threeAxles<=50)
        {
            axles=3;
            if(fourAxles<=20)
            {
                axles=4; 
                if(fiveAxles<=10)
                {
                    axles=5; 
                }
            }
        }

        if(EZ<=90)
        {
            truckPrice = (18 + (axles*6))*0.9; 
            return time.innerHTML +  "- A truck with EZ-Pass and " + axles + " axles paid $" + truckPrice; 
        }
        return time.innerHTML + "- A truck with no EZ-Pass and " + axles +" axles paid $" + truckPrice;
    }
    else if(r<=85)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            motorcyclePrice = motorcyclePrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                motorcyclePrice*0.6; 
            }
            return time.innerHTML +  "- A motorcycle with EZ-Pass paid $" + motorcyclePrice; 
        }
        return time.innerHTML + "- A motorcycle with no EZ-Pass paid $12.00"
    }
    else{
        return time.innerHTML +  "- A bus with EZ-Pass paid $" + bus; 
    }
}

function rollVehicle5()
{
    var r = randomInRange(1, 100);
    var carPrice = 12; 
    var axles = 2; 
    var truckPrice = 18 + (axles*6);
    var motorcyclePrice = 12; 
    var bus = 0;
    var r = Math.floor(Math.random() * 100) + 1;

    if(r<=60)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            carPrice = carPrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                carPrice*0.6; 
            }
            return time.innerHTML +  "- A car with EZ-Pass paid $" + carPrice; 
        }
        return time.innerHTML + "- A car with no EZ-Pass paid $12.00"
    }
    else if(r<=75)
    {
        var EZ = randomInRange(1, 100);
        var threeAxles = randomInRange(1, 100);
        var fourAxles = randomInRange(1, 100);
        var fiveAxles = randomInRange(1, 100);

        if(threeAxles<=50)
        {
            axles=3;
            if(fourAxles<=20)
            {
                axles=4; 
                if(fiveAxles<=10)
                {
                    axles=5; 
                }
            }
        }

        if(EZ<=90)
        {
            truckPrice = (18 + (axles*6))*0.9; 
            return time.innerHTML +  "- A truck with EZ-Pass and " + axles + " axles paid $" + truckPrice; 
        }
        return time.innerHTML + "- A truck with no EZ-Pass and " + axles +" axles paid $" + truckPrice;
    }
    else if(r<=80)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            motorcyclePrice = motorcyclePrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                motorcyclePrice*0.6; 
            }
            return time.innerHTML +  "- A motorcycle with EZ-Pass paid $" + motorcyclePrice; 
        }
        return time.innerHTML + "- A motorcycle with no EZ-Pass paid $12.00"
    }
    else{
        return time.innerHTML +  "- A bus with EZ-Pass paid $" + bus; 
    }
}

function rollVehicle6()
{
    var r = randomInRange(1, 100);
    var carPrice = 12; 
    var axles = 2; 
    var truckPrice = 18 + (axles*6);
    var motorcyclePrice = 12; 
    var bus = 0;
    var r = Math.floor(Math.random() * 100) + 1;

    if(r<=60)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            carPrice = carPrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                carPrice*0.6; 
            }
            return time.innerHTML +  "- A car with EZ-Pass paid $" + carPrice; 
        }
        return time.innerHTML + "- A car with no EZ-Pass paid $12.00"
    }
    else if(r<=85)
    {
        var EZ = randomInRange(1, 100);
        var threeAxles = randomInRange(1, 100);
        var fourAxles = randomInRange(1, 100);
        var fiveAxles = randomInRange(1, 100);

        if(threeAxles<=50)
        {
            axles=3;
            if(fourAxles<=20)
            {
                axles=4; 
                if(fiveAxles<=10)
                {
                    axles=5; 
                }
            }
        }

        if(EZ<=90)
        {
            truckPrice = (18 + (axles*6))*0.9; 
            return time.innerHTML +  "- A truck with EZ-Pass and " + axles + " axles paid $" + truckPrice; 
        }
        return time.innerHTML + "- A truck with no EZ-Pass and " + axles +" axles paid $" + truckPrice;
    }
    else if(r<=90)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            motorcyclePrice = motorcyclePrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                motorcyclePrice*0.6; 
            }
            return time.innerHTML +  "- A motorcycle with EZ-Pass paid $" + motorcyclePrice; 
        }
        return time.innerHTML + "- A motorcycle with no EZ-Pass paid $12.00"
    }
    else{
        return time.innerHTML +  "- A bus with EZ-Pass paid $" + bus; 
    }
}

function rollVehicle7()
{
    var r = randomInRange(1, 100);
    var carPrice = 12; 
    var axles = 2; 
    var truckPrice = 18 + (axles*6);
    var motorcyclePrice = 12; 
    var bus = 0;
    var r = Math.floor(Math.random() * 100) + 1;

    if(r<=50)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            carPrice = carPrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                carPrice*0.6; 
            }
            return time.innerHTML +  "- A car with EZ-Pass paid $" + carPrice; 
        }
        return time.innerHTML + "- A car with no EZ-Pass paid $12.00"
    }
    else if(r<=90)
    {
        var EZ = randomInRange(1, 100);
        var threeAxles = randomInRange(1, 100);
        var fourAxles = randomInRange(1, 100);
        var fiveAxles = randomInRange(1, 100);

        if(threeAxles<=50)
        {
            axles=3;
            if(fourAxles<=20)
            {
                axles=4; 
                if(fiveAxles<=10)
                {
                    axles=5; 
                }
            }
        }

        if(EZ<=90)
        {
            truckPrice = (18 + (axles*6))*0.9; 
            return time.innerHTML +  "- A truck with EZ-Pass and " + axles + " axles paid $" + truckPrice; 
        }
        return time.innerHTML + "- A truck with no EZ-Pass and " + axles +" axles paid $" + truckPrice;
    }
    else if(r<=95)
    {
        var EZ = randomInRange(1, 100);
        var resident = randomInRange(1, 100);
        if(EZ<=70)
        {
            motorcyclePrice = motorcyclePrice*0.9; 
            var v = randomInRange(1, 100);
            if(v<=60)
            {
                motorcyclePrice*0.6; 
            }
            return time.innerHTML +  "- A motorcycle with EZ-Pass paid $" + motorcyclePrice; 
        }
        return time.innerHTML + "- A motorcycle with no EZ-Pass paid $12.00"
    }
    else{
        return time.innerHTML +  "- A bus with EZ-Pass paid $" + bus; 
    }
}