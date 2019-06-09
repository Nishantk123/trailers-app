import React, { Component } from "react";
import { Player } from "video-react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import axios from "axios";
import Video from "./Video";
import wlike from "../Icon/wlike.png";
import calender from "../Icon/calender.png";
import close from "../Icon/close.png";
import glike from "../Icon/glike.png";
import question from "../Icon/question.png";
import dislike from "../Icon/dislike.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
class TailerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      open: false,
      videoData: []
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  componentDidMount() {
    var url = "./ajaxResp.json";
    axios(url, {
      method: "GET"
    }).then(response => {
      console.log(response);
      var data = response.data && response.data[1] ? response.data[1] : [];
      this.setState({ movieList: data });
    });
  }

  onClickHandler(data) {
    this.setState({
      videoData: data,
      open: true
    });
  }
  render() {
    var yodata = this.state.movieList;
    var result = Object.keys(yodata).map(function(key) {
      return yodata[key];
    });
    console.log(result);
    console.log(this.state.movieList);
    var tailerList = [];
    if (result && result.length > 0) {
      result.forEach((data, index) => {
        console.log(data);
        var videoURL = data.TrailerURL;
        var imageUrl =
          "https://in.bmscdn.com/events/moviecard/" + data.EventCode + ".jpg";
        console.log(imageUrl);
        tailerList.push(
          <div className="col-sm-4 col-md-2" key={key}>
            <div
              className="tailer-container"
              onClick={() => this.onClickHandler(data)}
            >
              <div className="tailer-image-item">
                <img className="tailer-image" src={imageUrl} />
              </div>
              <div className="release-class">{data.DispReleaseDate}</div>
              <div className="tailer-info">
                <div className="row tailer-info-row">
                  <div className="name-container">
                    <div className="movie-language">{data.EventName}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    for (var key in this.state.movieList) {
      console.log(key);
      var data = this.state.movieList[key];
      console.log(data);
      // var videoURL = data.TrailerURL;
      // var imageUrl =
      //   "https://in.bmscdn.com/events/moviecard/" + data.EventCode + ".jpg";
      // var trailerName = data.EventName;
      // var trailerType = data.EventGenre;
      // var perlike = data.wtsPerc;
      // var releaseDate = data.DispReleaseDate;
      // var willWatch = data.wtsCount;
      // var mayWatch = data.maybeCount;
      // var wontWatch = data.dwtsCount;
      // var totalView = data.csCount;
      // console.log(imageUrl);
      // tailerList.push(
      //   <div className="col-sm-4 col-md-2" key={key}>
      //     <div
      //       className="tailer-container"
      //       onClick={() =>
      //         this.onClickHandler(
      //           imageUrl,
      //           videoURL,
      //           trailerName,
      //           trailerType,
      //           perlike,
      //           releaseDate,
      //           willWatch,
      //           mayWatch,
      //           wontWatch,
      //           totalView,
      //           data
      //         )
      //       }
      //     >
      //       <div className="tailer-image-item">
      //         <img className="tailer-image" src={imageUrl} />
      //       </div>
      //       <div className="release-class">24 2018</div>
      //       <div className="tailer-info">
      //         <div className="row tailer-info-row">
      //           <div className="name-container">
      //             <div className="movie-language">{data.EventName}</div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // );
    }
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar-container"
          variant="dark"
        >
          <Navbar.Brand href="#home">{"Movie Trailer"}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">
                <button className="coming">Coming</button>
              </Nav.Link>
              <Nav.Link href="#">
                <button className="showing">Now Showing</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="row">{tailerList}</div>;
        <Video
          videoData={this.state.videoData}
          reference={this}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default TailerList;
