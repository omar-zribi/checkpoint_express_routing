function display() {
  let today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
 
  let month = months[today.getMonth()];
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let day = today.getDate();

  (day< 10 )?day=`0${day}` : day=`${day}`;
  (min< 10 )?min=`0${min}` : min=`${min}`;
  (sec< 10 )?sec=`0${sec}` : sec=`${sec}`;
  (hour< 10 )?hour=`0${hour}` : hour=`${hour}`;

  document.querySelector("#dateD").innerHTML = `${day} `;
  document.querySelector("#dateM").innerHTML = `${month} `;
  document.querySelector("#dateY").innerHTML = `${today.getFullYear()}`;
  document.querySelector("#timeH").innerHTML = `${hour} `;
  document.querySelector("#timeM").innerHTML = `${min}  `;
  document.querySelector("#timeS").innerHTML = `${sec}`;
}
setInterval(display, 100);

// console.log(DS);
