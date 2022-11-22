// build dictionary
const dictionary = build_dictionary(trainingPhrases);
//console.log(dictionary); // print dictionary
console.log("Input: Halo"); // test encoding text input
console.log("Encoded: " + encode("Halo")); // test encoding text input

// prepare your training data
const trainingSet = trainingPhrases.map((dataSet) => {
  const encodedValue = encode(dataSet.phrase);
  return { input: encodedValue, output: dataSet.result };
});

// train neural network
const model_network = new brain.NeuralNetwork();
model_network.train(trainingSet);

//const fs = require("fs");
//// Save network state to JSON file.
//const networkState = model_network.toJSON();
//fs.writeFileSync("model_network_state.json",  JSON.stringify(networkState), "utf-8");
//// Load the trained network data from JSON file.
//const networkState = JSON.parse(fs.readFileSync("network_state.json", "utf-8"));
//model_network.fromJSON(networkState);

// make a prediction
function predict_bot(txt_chat_input) {
  // encode input text
  const encoded = encode(clean_input(txt_chat_input));
  // predict the response
  json_output = model_network.run(encoded);
  console.log(
    "Max Categories: " + Object.values(json_output).length + " intents."
  );
  console.log(json_output);
  // get max value using apply
  const max = Math.max.apply(null, Object.values(json_output));
  const index = Object.values(json_output).indexOf(max);
  // get probability and pred_label
  const pred_label = Object.keys(json_output)[index];
  const pred_prob = json_output["" + pred_label];
  const pred_response = data_responses["" + pred_label];

  console.log(
    "Predicted label (" + pred_label + "), probability (" + pred_prob + ")."
  );
  return [pred_response, pred_prob];
}

// compile/execute chatbot
function run_chatbot() {
  var input_chat = $("#input-chat").val(); // get input chat
  if (input_chat.length === 0) {
    alert("Sorry, write your text chat first.");
  } else {
    $("#content-chat-feed").append(
      response_user(input_chat, get_time(new Date()))
    );
    force_scroll_bottom();

    // predict response chatbot
    const [respond_bot, prob_bot] = predict_bot(input_chat);
    const prob_val = (parseFloat(prob_bot) * 100).toFixed(2);

    const threshold = 75;
    if (prob_val > threshold) {
      $("#content-chat-feed").append(
        response_bot(respond_bot, prob_val, get_time(new Date()))
      );
    } else {
      $("#content-chat-feed").append(
        response_bot(
          "Maaf, saya masih bodoh. Saya belum mengerti.",
          prob_val,
          get_time(new Date())
        )
      );
    }
    // scroll bottom
    force_scroll_bottom();
    // set empty input
    $("#input-chat").val("");
  }
}

$(document).ready(function () {
  // assign button click
  $("#btn-chat").click(function () {
    // compile chatbot brain.js
    run_chatbot();
  });

  // assign enter key
  $("#input-chat").on("keydown", function (e) {
    if (e.keyCode == 13) {
      // compile chatbot brain.js
      run_chatbot();
    }
  });
});
