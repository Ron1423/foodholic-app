//function getTime
function getTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

//function getDay
function getDay(date) {
  let day = date.getDay();
  let daylist = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  return daylist[day];
}

//function getMonth
function getMonth(date) {
  let month = date.getMonth();
  let monthlist = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return monthlist[month];
}

//random multiple response
function random_response(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

//rerandom multiple response
function rerandom_response(arr, last) {
  let rand = Math.floor(Math.random() * arr.length);
  if (arr[rand] == last) {
    rand = Math.floor(Math.random() * arr.length);
  }
  return arr[rand];
}

// data templates or responses
const templates = `{\
    "name": "${rerandom_response(
      ["Kamu nanya. Kamu bertanya-tanya. Call me, DormBot.", "Cek", "Tes"],
      "Tes"
    )}", \

    "hobby":"Haha.. saya suka membaca pikiran kamu :).", \
    "human":"Saya adalah chatbot, dapat memberikan informasi.",\
    "okey":"Okey, kamu luar biasa. Salam sukses !!!",\
    "greetings":"hallo, semoga kamu baik-baik saja.",\
    "thanks":"Iya, sama-sama ya.",\
    "hi":"Hi juga. Semoga harimu menyenangkan.",\
    "condition":"Saya adalah chatbot. Pastinya saya sehat.",\
    "time":"Sekarang ${getDay(new Date())} jam ${getTime(new Date())}",\
		"asu":"Kontol",\
		"badword":"Jangan Toxic Bang"\
}`;

//rerender data responses
function rerender_data() {
  const data = JSON.parse(templates);
  return data;
}

// parse to json object
const data_responses = rerender_data();
