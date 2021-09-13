// date
let user_date = new Date();
let userDay = user_date.getDate();
let userYear = user_date.getFullYear();
console.log(userYear);

let date_weekday = {
  weekday: "long",
};
let weekday = new Intl.DateTimeFormat("en-us", date_weekday).format(user_date);

let date_month = {
  month: "short",
};
let month = new Intl.DateTimeFormat("en-us", date_month).format(user_date);

class WeatherSlider {
  constructor(
    city,
    humidity,
    pressure,
    windspeed,
    src,
    temp,
    feels_like,
    description,
    parent
  ) {
    (this.city = city),
      (this.humidity = humidity),
      (this.pressure = pressure),
      (this.windspeed = windspeed),
      (this.src = src),
      (this.temp = temp),
      (this.feels_like = feels_like),
      (this.description = description),
      (this.parent = document.body.querySelector(parent)),
      (this.day = user_date.getDate()),
      (this.year = user_date.getFullYear()),
      (this.hour = user_date.getHours()),
      (this.minute = user_date.getMinutes());
  }
  render() {
    let slider = document.createElement("div");
    slider.classList.add("swiper-slide");
    slider.innerHTML = `
        <div class="container">
        <div class="weather row">
        <div class="col-xs-12 col-sm-6 col-md-6">
        <div class="date">
        <span class="month">${month}</span>
        <span class="day">${this.day}</span>,
        <span class="year">${this.year}</span>-
        <div class="weekday">${weekday}</div>
        </div>
        <div class="time">${this.hour}:${this.minute}</div>
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
        </div>`;
    this.parent.append(slider);
  }
}

// show();
function show(value) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  )
    .then((response) => response.json())
    .then((data) => {
      let city = data.name;
      let main = data.main;
      let temp = main.temp;
      let feels_like = main.feels_like;
      let pressure = main.pressure;
      let humidity = main.humidity;
      let wind = data.wind;
      let windspeed = wind.speed;
      let weather = data.weather;
      let description = weather[0].description;
      let parent = ".swiper-wrapper";
      let src = weather[0].icon;
      JSON.stringify(data);

      new WeatherSlider(
        city,
        humidity,
        pressure,
        windspeed,
        src,
        temp,
        feels_like,
        description,
        parent
      ).render();
    });
}
show("lviv");
show("london");

let input = document.querySelector(".demo");

let get = document.querySelector(".get");
console.log(get);
get.addEventListener("click", function (e) {
  e.preventDefault();
  let value = input.value;
  console.log(value);
  show(value);
});
// time

let hour_formatter = new Intl.DateTimeFormat("en-us", {
  hour12: false,
  hour: "numeric",
});
let hour = hour_formatter.format(user_date);

console.log(hour);

// bg

if (hour > 5 && hour <= 10) {
  document.body.classList.toggle("morning-theme");
} else if (hour >= 11 && hour <= 16) {
  document.body.classList.toggle("day-theme");
} else if (hour > 16 && hour < 20) {
  document.body.classList.toggle("evening-theme");
} else {
  document.body.classList.toggle("night-theme");
}

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

new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    type: "bullets",

    dynamicBullets: true,

    type: "progressbar",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".swiper",
  },
  autoHeight: false,
  slidesPerView: "auto",

  wachOverflow: true,

  slidesPerGroup: 1,
  centerSlide: false,

  loop: false,

  loopedSlides: 3,

  freemode: true,

  speed: 800,

  effect: "cube",

  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 50,
    shadowScale: 0.89,
  },
});
