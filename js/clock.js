window.onload = function () {
    window.setInterval(function () {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      if (hours < 10) {
        hours = `0${sehoursconds}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
  
      let clock = `${hours}:${minutes}:${seconds}`;
      document.querySelector('.clock').innerHTML = clock;
  
      let arrayOfDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      let dayOfWeek = arrayOfDays[date.getDay()];
  
      let day = date.getDate();
      let arrayOfMonth = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      let month = arrayOfMonth[date.getMonth()];
      let year = date.getFullYear();
  
      let data = `${day} ${month} ${year}`;
      let info = `${dayOfWeek}, ${data}`;
  
      document.querySelector('.dateInfo').innerHTML = info;
    }, 1000);
  };