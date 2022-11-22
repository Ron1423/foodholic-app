import "../asset/style.css";
import { Link } from "react-router-dom";

function chatbot() {
  return (
    <div className="card d-flex flex-column vh-100 overflow-hidden">
      <div className="card-header bg-info text-center">
        <div className="p bd-highlight">
          <Link className="btn btn-outline-dark flex-shrink-0" to="/">
            Back to Home
          </Link>
        </div>
        <b>Informasi Dormitory Chatbot</b>
      </div>
      <div
        className="card-body"
        style={{ overflowY: "scroll" }}
        id="content-chat-feed"
      >
        <div className="containerbot">
          <img src="./icons/bot.png" alt="Avatar" style={{ width: "100%" }} />
          <div className="row">
            <div className="col-sm-8 pt-4">Hi, selamat datang </div>
            <div className="col-sm-4 pt-2">
              <span className="time-right">
                98.99%
                <br />
                11:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="input-group">
          <input type="text" className="form-control" id="input-chat" />
          <button className="btn btn-primary" type="button" id="btn-chat">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default chatbot;
