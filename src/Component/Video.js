import React, { Component } from "react";
import { Player } from "video-react";
import ReactPlayer from "react-player";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import axios from "axios";
import wlike from "../Icon/wlike.png";
import calender from "../Icon/calender.png";
import close from "../Icon/close.png";
import glike from "../Icon/glike.png";
import question from "../Icon/question.png";
import dislike from "../Icon/dislike.png";
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    console.log("jssd");
    this.props.reference.setState({ open: false });
  }
  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        width: "90%",
        bottom: "auto",
        padding: "0px",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };
    var trailerData = this.props.videoData;
    console.log(trailerData.EventGenre);
    var imageURL =
      "https://in.bmscdn.com/events/moviecard/" +
      trailerData.EventCode +
      ".jpg";
    var videoURL = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
    console.log(videoURL);
    return (
      <Modal
        isOpen={this.props.open}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2> */}
        {/* <button onClick={this.closeModal}>close</button> */}
        {/* <img className="close-icon" src={close} onClick={this.closeModal} /> */}
        <div className="row tailer-info-row">
          <div className="col-sm-8 tailer-info-col">
            {/* <Player playsInline poster={imageURL} src={videoURL} /> */}
            <ReactPlayer
              className="react-player"
              url={trailerData.TrailerURL}
              playing
            />
          </div>
          <div className="col-sm-4 trailer-detail">
            <div className="trailer-name">{trailerData.EventName}</div>
            <div className="trailer-type">
              <div className="trailer-type-name">Action</div>
              <div className="trailer-type-name">Sci-Fi</div>
            </div>
            <div className="watch-history-container">
              <div className="watch-history">
                <div className="like-image">
                  <img className="like-icon" src={wlike} />
                </div>
                <div className="watch-data">
                  <div className="watch-per">{trailerData.wtsPerc + "%"}</div>
                  <div className="total-view">{trailerData.csCount} views</div>
                </div>
              </div>
              <div className="release-container">
                <div className="date-image">
                  <img className="calender-icon" src={calender} />
                </div>
                <div className="release-date">
                  {trailerData.DispReleaseDate}
                </div>
              </div>
            </div>
            <div className="row botttom-bar">
              <div className="col-sm-4 mb-col">
                <div className="will-watch">
                  <img className="will-watch-img" src={glike} />
                </div>
                <div className="watch-count">{trailerData.wtsCount}</div>
              </div>
              <div className="col-sm-4 mb-col">
                <div className="may-watch">
                  <img className="may-watch-img" src={question} />
                </div>
                <div className="watch-count">{trailerData.maybeCount}</div>
              </div>
              <div className="col-sm-4 mb-col">
                <div className="wont-watch">
                  <img className="wont-watch-img" src={dislike} />
                </div>
                <div className="watch-count"> {trailerData.dwtsCount}</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Video;
