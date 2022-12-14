function display() {
    const months = ["January", "February", "March", "April", "May","June", "July","August","September","October","November","December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    let FDay= days[new Date().getDay()];
    let FDate=new Date().getDate();
    let FMonth=months[new Date().getMonth()];
    let FYears=new Date().getFullYear();
    let Fhours=new Date().getHours();
    let FMinutes=new Date().getMinutes();
    let FSecondes=new Date().getSeconds();
    (FDate<10)?FDate=`0${FDate}`:FDate=FDate;
    (Fhours<10)?Fhours=`0${Fhours}`:Fhours=Fhours;
    (FMinutes<10)?FMinutes=`0${FMinutes}`:FMinutes=FMinutes;
    (FSecondes<10)?FSecondes=`0${FSecondes}`:FSecondes=FSecondes;
    let dformat =
      [FDay,FDate,FMonth,FYears,
      ].join(" ") +
      " " +
      [Fhours,FMinutes,FSecondes,
      ].join(":");
    document.querySelector("#datetime").innerHTML = `${dformat}`;
    document.querySelector("#datetime").style.marginLeft ="42%";
    document.querySelector("#datetime").style.marginTop ="6%";
    document.querySelector("#datetime").style.position = "fixed";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
  }
  const colors = [
    [
      "#110303",
      "#230606",
      "#340909",
      "#460C0C",
      "#570F0F",
      "#691212",
      "#7A1515",
      "#8C1818",
      "#9D1B1B",
      "#AE1E1E",
      "#C02121",
      "#CF2323",
      "#DC2E2E",
      "#DE3F3F",
      "#E15151",
      "#E46262",
      "#E77373",
      "#EA8585",
      "#ED9696",
      "#F0A8A8",
      "#F3B9B9",
      "#F6CBCB",
      "#F9DCDC",
      "#FCEEEE",
      "#FFFFFF",
    ],
    [
      "#0E1301",
      "#1B2702",
      "#293A03",
      "#364E04",
      "#446105",
      "#527506",
      "#5F8806",
      "#6D9C07",
      "#7AAF08",
      "#88C309",
      "#96D60A",
      "#A3EA0B",
      "#ADF415",
      "#B1F51E",
      "#BBF63C",
      "#C2F750",
      "#C9F863",
      "#CFF977",
      "#D6F98A",
      "#DDFA9E",
      "#E4FBB1",
      "#EBFCC5",
      "#F1FDD8",
      "#F8FEEC",
      "#FFFFFF",
    ],
    [
      "#050113",
      "#090227",
      "#0E033A",
      "#13044E",
      "#170561",
      "#1C0675",
      "#200688",
      "#25079C",
      "#2A08AF",
      "#2E09C3",
      "#330AD6",
      "#380BEA",
      "#4215F4",
      "#4A20F5",
      "#613CF6",
      "#7150F7",
      "#8163F8",
      "#9177F9",
      "#A08AF9",
      "#B09EFA",
      "#C0B1FB",
      "#D0C5FC",
      "#DFD8FD",
      "#EFECFE",
      "#FFFFFF",
    ],
    [
      "#01130E",
      "#02271C",
      "#033A2B",
      "#044E39",
      "#056147",
      "#067555",
      "#068864",
      "#079C72",
      "#08AF80",
      "#09C38E",
      "#0AD69C",
      "#0BEAAB",
      "#15F4B5",
      "#23F5B9",
      "#3CF6C1",
      "#50F7C7",
      "#63F8CE",
      "#77F9D4",
      "#8AF9DA",
      "#9EFAE0",
      "#B1FBE6",
      "#C5FCEC",
      "#D8FDF3",
      "#ECFEF9",
      "#FFFFFF",
    ],
  ];

  const random = (times) => Math.floor(Math.random() * times);
  const select = (el) => document.querySelector(el);

  let style = "text-shadow: ";

  function changeColor() {
    colors[random(colors.length)].reverse().forEach((color, i) => {
      style += `${i * random(2)}px ${random(i * 0)}px ${i * 5}px ${color},`;
    });
    style +=
      "10px -30px  black; animation: neon .4s infinite cubic-bezier(0.72, 1.88, 1,-0.87)";
    select("#datetime").style = style;
  }
  changeColor();

  setInterval(display, 10);
  var str = document.getElementById("#Error")[0].innerHTML.toString();
  var i = 0;
  document.getElementById("#Error")[0].innerHTML = "";

  setTimeout(function () {
    var se = setInterval(function () {
      i++;
      document.getElementById("#Error")[0].innerHTML =
        str.slice(0, i) + "|";
      if (i == str.length) {
        clearInterval(se);
        document.getElementById("#Error")[0].innerHTML = str;
      }
    }, 10);
  }, 0);