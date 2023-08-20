// document.getElementById("searchbtn").addEventListener("click", function() {
    let city = document.getElementById("query").value;
    // fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+city+"?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json").then((data)=>{
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Surat?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json").then((data)=>{
        return data.json();
    }).then((objectData)=>{


      // Fetch day name according to given date
      console.log(objectData);
      const date_time1= document.getElementById("date-time");
        const timezone1 = objectData.timezone;
        const options1 = {
        timeZone: timezone1,
        hour12: true, 
        hour: 'numeric',
        minute: 'numeric',
        weekday: 'long'
        };
      const formatter1 = new Intl.DateTimeFormat('en-US', options1);
      const currentTime1 = formatter1.format(new Date(objectData.days[1].datetime));
      const currentDay1 = formatter1.formatToParts(new Date(objectData.days[1].datetime)).find(part => part.type === 'weekday').value;
      // console.log(currentDay1);
        for(var i=1;i<8;i++){
          const weatherCards = document.getElementsByClassName("cards")
        weatherCards.innerHTML = "";


          const date_time1= document.getElementById("date-time");
        const timezone1 = objectData.timezone;
        const options1 = {
        timeZone: timezone1,
        hour12: true, 
        hour: 'numeric',
        minute: 'numeric',
        weekday: 'long'
        };
      const formatter1 = new Intl.DateTimeFormat('en-US', options1);
      const currentTime1 = formatter1.format(new Date(objectData.days[i].datetime));
      const currentDay1 = formatter1.formatToParts(new Date(objectData.days[i].datetime)).find(part => part.type === 'weekday').value;
      const temp2 = objectData.days[i].temp;
      console.log(currentDay1);
      console.log(temp2);
//       let card = document.createElement("div");
//       card.classList.add("card");
//       card.innerHTML = `
//       <h2 class="day-name">${currentDay1}</h2>
//   <div class="card-icon">
//     <img src="" class="day-icon" alt="" />
//   </div>
//   <div class="day-temp">
//     <h2 class="temp">${temp2}</h2>
//     <span class="temp-unit"></span>
//   </div>
// `;
// weatherCards.appendChild(card);
    // weatherCards.appendChild(card);

      // const 
        }


        // icon
        const icon = document.getElementById("icon");
        const condition1 = objectData.currentConditions.icon;
        console.log(condition1);
        function getIcon(condition1) {
            if (condition1 == "partly-cloudy-day") {
              return "https://i.ibb.co/PZQXH8V/27.png";
            } else if (condition1 === "partly-cloudy-night") {
              return "https://i.ibb.co/Kzkk59k/15.png";
            } else if (condition1 === "rain") {
              return "https://i.ibb.co/kBd2NTS/39.png";
            } else if (condition1 === "clear-day") {
              return "https://i.ibb.co/rb4rrJL/26.png";
            } else if (condition1 === "clear-night") {
              return "https://i.ibb.co/1nxNGHL/10.png";
            } else {
              return "https://i.ibb.co/rb4rrJL/26.png";
            }
          }

          // function updateForecast(data, unit, type) {
          //   weatherCards.innerHTML = "";
          //   let day = 0;
          //   let numCards = 0;
          //   if (type === "day") {
          //     numCards = 24;
          //   } else {
          //     numCards = 7;
          //   }
          //   for (let i = 0; i < numCards; i++) {
          //     let card = document.createElement("div");
          //     card.classList.add("card");
          //     let dayName = getHour(data[day].datetime);
          //     if (type === "week") {
          //       dayName = getDayName(data[day].datetime);
          //     }
          //     let dayTemp = data[day].temp;
          //     if (unit === "f") {
          //       dayTemp = celciusToFahrenheit(data[day].temp);
          //     }
          //     let iconCondition = data[day].icon;
          //     let iconSrc = getIcon(iconCondition);
          //     let tempUnit = "°C";
          //     if (unit === "f") {
          //       tempUnit = "°F";
          //     }
          //     card.innerHTML = `
          //                 <h2 class="day-name">${dayName}</h2>
          //             <div class="card-icon">
          //               <img src="${iconSrc}" class="day-icon" alt="" />
          //             </div>
          //             <div class="day-temp">
          //               <h2 class="temp">${dayTemp}</h2>
          //               <span class="temp-unit">${tempUnit}</span>
          //             </div>
          //   `;
          //     weatherCards.appendChild(card);
          //     day++;
          //   }
          // }
          


          const icon1 = getIcon(condition1);
          icon.src=icon1;
          console.log(icon1);

        let location = document.getElementById("location");
        let temp = document.getElementById("temp");
        //location
        location.innerHTML=objectData.resolvedAddress;

        //current tem
        temp.innerHTML=objectData.currentConditions.temp;

        //current Time and day
        const date_time= document.getElementById("date-time");
        const timezone = objectData.timezone;
        const options = {
        timeZone: timezone,
        hour12: true, 
        hour: 'numeric',
        minute: 'numeric',
        weekday: 'long'
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const currentTime = formatter.format(new Date());
        const currentDay = formatter.formatToParts(new Date()).find(part => part.type === 'weekday').value;
        console.log(currentDay);
        date_time.innerHTML = currentTime;
        console.log(`Current time in ${timezone}: ${currentTime}`);

        //Condition
        // const condition = document.getElementById("condition");
        document.getElementById("condition").innerHTML=objectData.days[0].conditions;
        console.log(objectData.days[0].uvindex);
        
        
        //UV Index
        const uv_index = document.getElementById("uv-index"); 
        const uv_text = document.getElementById("uv_text"); 

        uv_index.innerHTML=objectData.days[0].uvindex;
        const uvIndex=objectData.days[0].uvindex;
        function measureUvIndex(uvIndex) {
            if (uvIndex <= 2) {
                uv_text.innerText = "Low";
            } else if (uvIndex <= 5) {
                uv_text.innerText = "Moderate";
            } else if (uvIndex <= 7) {
                uv_text.innerText = "High";
            } else if (uvIndex <= 10) {
                uv_text.innerText = "Very High";
            } else {
                uv_text.innerText = "Extreme";
            }
        }
        measureUvIndex();
        
        //Wind Speed
        const wind_speed = document.getElementById("wind_speed");
        wind_speed.innerHTML=objectData.days[0].windspeed;
        // console.log(objectData.days[0].windspeed)

        //Sunset and Sunrise
        const sun_rise = document.getElementById("sun_rise");
        const sun_set = document.getElementById("sun_set");

        const origSunrise = objectData.days[0].sunrise; 
        const [hours, minutes, _] = origSunrise.split(":"); 
        const newSunrise = `${hours}:${minutes}`;
        sun_rise.innerHTML=newSunrise;

        const origSunset = objectData.days[0].sunset; 
        const [hours1, minutes1, _1] = origSunset.split(":"); 
        const newSunset = `${hours1}:${minutes1}`;

        function convertTo12HourFormat(time24) {
            const [hours, minutes] = time24.split(":");
            let period = "AM";
            let hour = parseInt(hours, 10);
            if (hour >= 12) {
                period = "PM";
                if (hour > 12) {
                hour -= 12;
                }
            }
            return `${hour}:${minutes} ${period}`;
            }
        
            const time24Hour = newSunset; 
            const newSunset1 = convertTo12HourFormat(time24Hour);
            sun_set.innerHTML=newSunset1;

            //Humidity
            // humidity
            const humidity1 = document.getElementById("humidity");
            humidity1.innerHTML=objectData.days[0].humidity;
            const humidityStatus = document.getElementById("humiditystatus");
            const humidity = objectData.days[0].humidity;
            function updateHumidityStatus(humidity) {
                if (humidity <= 30) {
                    humidityStatus.innerText = "Low";
                } else if (humidity <= 60) {
                    humidityStatus.innerText = "Moderate";
                } else {
                    humidityStatus.innerText = "High";
                }
            }
            updateHumidityStatus();

            //visibility
            const visibility1 = document.getElementById("visibility");
            const visibilityStatus = document.getElementById("visibilitystatus");

            visibility1.innerHTML=objectData.days[0].visibility;
            const visibility = objectData.days[0].visibility;
            function updateVisibiltyStatus(visibility) {
                if (visibility <= 0.03) {
                  visibilityStatus.innerText = "Dense Fog";
                } else if (visibility <= 0.16) {
                  visibilityStatus.innerText = "Moderate Fog";
                } else if (visibility <= 0.35) {
                  visibilityStatus.innerText = "Light Fog";
                } else if (visibility <= 1.13) {
                  visibilityStatus.innerText = "Very Light Fog";
                } else if (visibility <= 2.16) {
                  visibilityStatus.innerText = "Light Mist";
                } else if (visibility <= 5.4) {
                  visibilityStatus.innerText = "Very Light Mist";
                } else if (visibility <= 10.8) {
                  visibilityStatus.innerText = "Clear Air";
                } else {
                  visibilityStatus.innerText = "Very Clear Air";
                }
              }
              updateVisibiltyStatus();

              //AirQulity
            const airQuality = document.getElementById("airquality");
            const airQualityStatus = document.getElementById("airqualitystatus");
            airQuality.innerHTML=objectData.days[0].winddir;
            const airquality = objectData.days[0].winddir;
            function updateAirQualityStatus(airquality) {
                if (airquality <= 50) {
                  airQualityStatus.innerText = "Good👌";
                } else if (airquality <= 100) {
                  airQualityStatus.innerText = "Moderate😐";
                } else if (airquality <= 150) {
                  airQualityStatus.innerText = "Unhealthy for Sensitive Groups😷";
                } else if (airquality <= 200) {
                  airQualityStatus.innerText = "Unhealthy😷";
                } else if (airquality <= 250) {
                  airQualityStatus.innerText = "Very Unhealthy😨";
                } else {
                  airQualityStatus.innerText = "Hazardous😱";
                }
              }
            updateAirQualityStatus();
    })
// })
