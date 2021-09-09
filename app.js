
class WeatherSlider {
    constructor(city, humidity, pressure, windspeed, src, temp, feels_like, description, parent) {
        this.city = city,
        this.humidity = humidity,
        this.pressure = pressure,
        this.windspeed = windspeed,
        this.src = src,
        this.temp = temp,
        this.feels_like = feels_like,
        this.description = description,
        this.parent = document.body.querySelector(parent);
    }
    render() {
        let slider = document.createElement("div");
        slider.classList.add("swiper-slide");
        slider.innerHTML = `
        <div class="container">
        <div class="weather row">
        <div class="col-xs-12 col-sm-6 col-md-6">
        <div class="date">
        <span class="month"></span>
        <span class="day"></span>,
        <span class="year"></span>-
        <div class="weekday"></div>
        </div>
        <div class="time"></div>
        <div class="city">${this.city}</div>
        <div class="humidity">Humidity: ${this.humidity}%</div>
        <div class="pressure">Pressure: ${this.pressure} hPa</div>
        <div class="wind"> ${this.wind} km/h SSE</div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6">
        <div class="icon"><img src="http://openweathermap.org/img/w/${this.src}.png" alt=""></img></div>
        <div class="temperature">${this.temp}°C</div>
        <div class="feels-like">Feels Like: ${this.feels_like}°C</div>
        <div class="description">${this.description}</div>
        <div class="refresh">
        <button class="btn-refresh"></button>
        </div>
        </div></div>
        </div>`
        this.parent.append(slider)
    };
}


// new WeatherSlider("lviv", "50", "38", "45", "../HOMEWORK-25/images/calendar.png", "38", "42", "cloudy",".swiper-wrapper").render();
// new WeatherSlider("lviv", "50", "38", "45", "../HOMEWORK-25/images/calendar.png", "38", "42", "cloudy",".swiper-wrapper").render();
let input=document.querySelector("input");
console.log(input) ;

let arr
let array=[]
console.log(arr);


input.addEventListener("change",()=>{
    arr=input.value
    console.log(arr);
    console.log(arr.length)
    cityArray=arr.split(",")
    console.log(cityArray)
    console.log(cityArray.length);
    cityArray.forEach((item)=>show(item))
    
})

console.log(array)

// show();
function show(item){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${item}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then(response => response.json())
              .then((data) => {
                    let city=data.name;
                    let main=data.main;
                    let temp=main.temp;
                    let feels_like=main.feels_like;
                    let pressure=main.pressure;
                    let humidity=main.humidity;
                    let wind=data.wind;
                    let windspeed=wind.speed;
                    let weather=data.weather;
                    let description=weather[0].description;
                    let parent=".swiper-wrapper"
                    let src=weather[0].icon;
                    let user_date = new Date ();
                    // time
                    let hour_formatter= new Intl.DateTimeFormat("en-us", {
                        hour12:false, hour:"numeric" 
                    })
                    let user_time = new Intl.DateTimeFormat("en-us", {
                        hour12:true, hour:"numeric", minute:"numeric"
                    });
                    let time=document.querySelectorAll(".time");
                    time.forEach((item)=>item.innerHTML=user_time.format(user_date));
                    // date
                    let date_day={
                        day:"numeric"
                    }
                    let date_year={
                        year:"numeric"
                    }
                    let date_weekday={
                        weekday:"long"
                    }
                    let date_month={
                        month:"short"
                    }
                    let month=document.querySelectorAll(".month")
                    month.forEach((month)=>month.innerHTML=user_date.toLocaleString("en-US", date_month));
                    
                    
                    let day=document.querySelectorAll(".day");
                    
                    day.forEach(item=>item.innerHTML=user_date.toLocaleTimeString("en-us",date_day));
                    
                    let year=document.querySelectorAll(".year")
                    year.forEach((year)=>year.innerHTML=user_date.toLocaleString("en-US", date_year));
                    
                    let weekday=document.querySelectorAll(".weekday")
                    weekday.forEach((weekday)=>weekday.innerHTML=user_date.toLocaleString("en-US", date_weekday))

                    // item
                    let json= JSON.stringify(data);

                    new WeatherSlider(city, humidity, pressure, windspeed, src, temp, feels_like, description, parent).render();
                    
                });
}
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=kyiv&units=metric&APPID=5d066958a60d315387d9492393935c19`)
        .then(response => response.json())
                  .then((data) => {
                        let city=data.name;
                        let main=data.main;
                        let temp=main.temp;
                        let feels_like=main.feels_like;
                        let pressure=main.pressure;
                        let humidity=main.humidity;
                        let wind=data.wind;
                        let windspeed=wind.speed;
                        let weather=data.weather;
                        let description=weather[0].description;
                        let parent=".swiper-wrapper"
                        let src=weather[0].icon;
                        let user_date = new Date ();
                        // time
                        let hour_formatter= new Intl.DateTimeFormat("en-us", {
                            hour12:false, hour:"numeric" 
                        })
                        let user_time = new Intl.DateTimeFormat("en-us", {
                            hour12:true, hour:"numeric", minute:"numeric"
                        });
                        let time=document.querySelectorAll(".time");
                        time.forEach((item)=>item.innerHTML=user_time.format(user_date));
                        // date
                        let date_day={
                            day:"numeric"
                        }
                        let date_year={
                            year:"numeric"
                        }
                        let date_weekday={
                            weekday:"long"
                        }
                        let date_month={
                            month:"short"
                        }
                        let month=document.querySelectorAll(".month")
                        month.forEach((month)=>month.innerHTML=user_date.toLocaleString("en-US", date_month));
                        
                        
                        let day=document.querySelectorAll(".day");
                        
                        day.forEach(item=>item.innerHTML=user_date.toLocaleTimeString("en-us",date_day));
                        
                        let year=document.querySelectorAll(".year")
                        year.forEach((year)=>year.innerHTML=user_date.toLocaleString("en-US", date_year));
                        
                        let weekday=document.querySelectorAll(".weekday")
                        weekday.forEach((weekday)=>weekday.innerHTML=user_date.toLocaleString("en-US", date_weekday))
    
                        // item
                        let json= JSON.stringify(data);

                        new WeatherSlider(city, humidity, pressure, windspeed, src, temp, feels_like, description, parent).render();
                        
                    });



    
        
// date
let user_date = new Date ();

// time

let hour_formatter= new Intl.DateTimeFormat("en-us", {
    hour12:false, hour:"numeric" 
})
let hour=hour_formatter.format(user_date);

console.log(hour)

// bg

if(hour>5 && hour<=10){
    document.body.classList.toggle("morning-theme");
}
else if(hour>=11 && hour<=16){
    document.body.classList.toggle("day-theme")
}
else if(hour>16 && hour<20){
    document.body.classList.toggle("evening-theme")
}
else {
    document.body.classList.toggle("night-theme")
};

// time-doctor


// date
// let date_formatter = new Intl.DateTimeFormat("en-US", {
//     weekday: "long",
//     year: "numeric",
//     month: "short",
//     day: "numeric"
// });
// console.log(date_formatter.format(user_date))
// let date=document.querySelector(".date");
// date.innerHTML=date_formatter.format(user_date)


// slider

new Swiper('.swiper',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,

        type:"bullets", 
      
        dynamicBullets:true,

        type:'progressbar',
        
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable:true,
      },
    
    simulateTouch:true,
    touchRatio:1,
    touchAngle:45,
    grabCursor:true,
    slideToClickedSlide: true,
    keyboard:{
        enabled:true,
        onlyInViewport:true,
        pageUpDown:true,

    },
    mousewheel:{
        sensitivity:1,
        eventsTarget:".swiper"
    },
    autoHeight:false,
    slidesPerView:"auto", 
  
    wachOverflow:true,

    slidesPerGroup:1,
    centerSlide:false,

    loop:false,

    loopedSlides:3,

    freemode:true,

    speed:800,

    effect:"cube",

    cubeEffect:{
        slideShadows:true,
        shadow:true,
        shadowOffset:50,
        shadowScale:0.89,
    }


});