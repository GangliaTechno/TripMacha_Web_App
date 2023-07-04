/* Sticky Navigation bar */
$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
    }
});
/* End of Sticky Navigation Bar */

/* Back to top button */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
/* End of Back to top button */

/* Start of Scheduler Function */

//Start of Location
function getlocation() 
{
    var fromDateInput=document.getElementById("fdate");
    //var toDateInput=document.getElementById("tdate");
    var fromTimeInput=document.getElementById("ftime");
    var toTimeInput=document.getElementById("ttime");
    var duration=document.getElementById("duration");

    //Automatically Load Current Date
    var currentDateTime=new Date();
    var formattedDate=currentDateTime.toISOString().split('T')[0];
    fromDateInput.value=formattedDate;
    //toDateInput.value=formattedDate;

    //Automatically Load Current Time
    var formattedTime=currentDateTime.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit', hour12:false});
    fromTimeInput.value=formattedTime;
    toTimeInput.value=formattedTime;

    //Location
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(showPosition,showError);       
    } 
    else 
    {
        console.log("Geolocation is not supported by this browser.");
    }

    //Calcuating Duration
    var dura=getTimeDurationInMinutes();
    duration.value=dura;
}

// Calculate the time difference in minutes
function getTimeDurationInMinutes() 
{
    var fromTimeInput=document.getElementById("ftime").value;
    var toTimeInput=document.getElementById("ttime").value;
    //var fromDateInput=document.getElementById("fdate").value.split('-')[2];
    //var toDateInput=document.getElementById("tdate").value.split('-')[2];

    var time1=new Date("2000-01-01 " +fromTimeInput);
    var time2=new Date("2000-01-01 " +toTimeInput);
    var duration=document.getElementById("duration");

    var startHour = fromTimeInput.split(':')[0];
    var startMinute = fromTimeInput.split(':')[1];
    var endHour = toTimeInput.split(':')[0];
    var endMinute = toTimeInput.split(':')[1];
    if(time1 <= time2)//&& (fromDateInput==toDateInput)
    {
        var startTotalMinutes = parseInt(startHour, 10) * 60 + parseInt(startMinute, 10);
        var endTotalMinutes = parseInt(endHour, 10) * 60 + parseInt(endMinute, 10);
        var durationMinutes = endTotalMinutes - startTotalMinutes;
        duration.value=durationMinutes;
        document.getElementById('btnlocate').disabled=false;
        return durationMinutes;
    }
    else
    {
        alert("To Time should be greater than From Time!");
        document.getElementById('btnlocate').disabled=true;
    }
}

function showPosition(position) 
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = "AIzaSyDMWSgHTmFD9UdPTYIvLkXww_eyRdI5ggA"; // Replace with your own Google Maps API key
    
    //For Users Current Location (CityName,State,Pincode)
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) 
            {
                const addressComponents = data.results[0].address_components;
                var cityName="";
                var stateName="";
                var pincode="";
                for (let i = 0; i < addressComponents.length; i++) 
                {
                    const types = addressComponents[i].types;
                    if (addressComponents[i].types.includes("locality")) 
                    {
                        cityName = addressComponents[i].long_name;
                    }
                    else if (addressComponents[i].types.includes("administrative_area_level_1")) 
                    {
                        stateName = addressComponents[i].long_name;
                    }
                    else if(types.includes("postal_code"))
                    {
                        pincode=addressComponents[i].long_name;
                    }
                }
                var locate=document.getElementById("location").value=cityName+", "+stateName+"-"+pincode;
            } 
            else 
            {
                console.log("No results found");
            }
        })
        .catch(error => {
            console.log("Error: " + error);
        });
}
const showError=(error)=>{
    switch (error.code)
    {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The Request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occured.");
            break;
        default:
            alert("An unknown error occured");
    }
}
//Start of Location

//Locate low button animation
var button = document.getElementById('btnlocate');
function updateButtonText() 
{
    var counter = 1;
    button.disabled = true; // Disable the button during the process
    var intervalId = setInterval(() => {
    var dots = '.'.repeat(counter % 4); // Generate the dots based on the counter
    button.innerHTML = "Generating" + dots;
    counter++;
    if (counter > 3) 
    {
      clearInterval(intervalId);
      button.disabled = false; // Enable the button after the process is complete
      button.innerHTML="Locate Now";
    }
  }, 500);

}

button.addEventListener('click', updateButtonText);
/* End of of Scheduler Function */

/* Start of Login as Guest */
var btnGuest=document.getElementById('btnGuest');
btnGuest.addEventListener('click',()=>{
        document.getElementById('btnlogin').style.display="none";
        document.getElementById('loginGuestDD').style.display="inline-block";
        document.getElementById('SignupSigninModal').click();
});

var btnlogout=document.getElementById('btnlogout');
btnlogout.addEventListener('click',()=>{
    document.getElementById('loginGuestDD').style.display="none";
    document.getElementById('btnlogin').style.display="inline-block";
});