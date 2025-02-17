function clock()
{
    let secDots = document.getElementById('secDots');
    let hrDots = document.getElementById('hrDots');
    let minDots = document.getElementById('minDots');

    var date = new Date();
    var hour = date.getHours() % 12; // convert to 12 hour format
    var amPm = date.getHours() >= 12 ? 'PM' : 'AM'; // handle midnight (0 hours)

    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var secondsDots = '';
    for(var i = 1; i < 61; i++)
    {
        var rotation = i * 6; // rotate each line by 6 degree
        if(i === seconds)
        {
            secondsDots += '<div class="dot active" style="transform:rotate('+rotation+'deg)"></div>'; 
        }
        else
        {
            secondsDots += '<div class="dot" style="transform:rotate('+rotation+'deg)"></div>'; 
        }
    }

    var minutesDots = '';
    for(var i = 1; i < 61; i++)
        {
            var rotation = i * 6; // rotate each line by 6 degree
            if(i === minutes)
            {
                minutesDots += '<div class="dot active" style="transform:rotate('+rotation+'deg)"></div>'; 
            }
            else
            {
                minutesDots += '<div class="dot" style="transform:rotate('+rotation+'deg)"></div>'; 
            }
        }

        var houreDots = '';
        for(var i = 1; i < 13; i++)
            {
                var rotation = i * 30; // rotate each line by 6 degree
                if(i === hour)
                {
                    houreDots += '<div class="dot active" style="transform:rotate('+rotation+'deg)"></div>'; 
                }
                else
                {
                    houreDots += '<div class="dot" style="transform:rotate('+rotation+'deg)"></div>'; 
                }
            }

    secDots.innerHTML = secondsDots + '<b>' + amPm + '</b>' + '<h2>' + Zero(seconds) + '<br><span>Seconds</span></h2>';
    minDots.innerHTML = minutesDots + '<h2>' + Zero(minutes) + '<br><span>Minutes</span></h2>';
    hrDots.innerHTML = houreDots + '<h2>' + Zero(hour) + '<br><span>Hours</span></h2>';
}

    // add Zero in single digit number 
    function Zero(num) {
        return (num < 10)? '0' + num : num;
    }
    
setInterval(clock,1000);