// encoding text to number format
function encode(phrase) {
  const phraseTokens = phrase.split(" ");
  const encodedPhrase = dictionary.map((word) =>
    phraseTokens.includes(word) ? 1 : 0
  );

  return encodedPhrase;
}

// function to create a dictionary
function build_dictionary(json_data) {
  // combine string
  var str_data = json_data
    .map((dataSet) => {
      return dataSet.phrase;
    })
    .join(" ");
  // lowercase
  str_data = str_data.toLowerCase();
  // remove punctuation
  str_data = str_data.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
  // remove dupliate items
  var arr_duplicate = str_data.split(" ");
  var str_fix = arr_duplicate
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    })
    .join(" ");

  return str_fix.split(" ");
}

// clean text input
function clean_input(txt_input) {
  // lowercase
  txt_input = txt_input.toLowerCase();
  // remove punctuation
  txt_input = txt_input.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");

  return txt_input;
}

// user chat replay
function response_user(chat, date) {
  var html =
    "<div class='containerbot darker'> <img src='./icons/user.png' alt='Avatar' class='right' style='width:100%;'> <div class='row pt-4'> <div class='col-sm-2'><span class='time-left'>" +
    date +
    "</span></div> <div class='col-sm-10 text-end'>" +
    chat +
    "</div></div></div>";
  return html;
}

// bot chat replay
function response_bot(chat, prob, date) {
  var html =
    "<div class='containerbot'> <img src='./icons/bot.png' alt='Avatar' style='width:100%;'> <div class='row'> <div class='col-sm-8 pt-4'>" +
    chat +
    "</div> <div class='col-sm-4 pt-2'><span class='time-right'>" +
    prob +
    "%</br>" +
    date +
    "</span></div> </div> </div>";
  return html;
}

// get time date today
function get_time(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? "0" + hours : hours;
  // appending zero in the start if hours less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes + " " + ampm;
}

// export function get_time(), clean_input(), response_user(), response_bot(), build_dictionary(), encode();
