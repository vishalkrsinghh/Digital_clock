let innerDiv = document.getElementById('inner');
let clock = () => {
    let date = new Date();
    let hour = date.getHours();
    let pm;
    let months = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    if (hour > 12) {
        hour = hour - 12;
        pm = "PM";
    }
    else {
        pm = "AM";
    }
    let tdate=date.getDate();
    let cYear=date.getFullYear();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    innerDiv.innerHTML = `<h3>${hour}:${minutes}:${seconds} ${pm}
   &nbsp ${days[date.getDay()]} , ${tdate}-${months[date.getMonth()]}-${cYear}</h3>`;

}
setInterval(clock, 1000);