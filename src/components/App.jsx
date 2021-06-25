import React, { Component } from "react";
import Header from "./Header";
import VideoBar from "./VideoBar";
import Editor from "./Editor";
import Footer from "./Footer";
import io from "socket.io-client";
import Peer from "peerjs";
import axios from "axios";
import "../css/App.css";
const myPeer = new Peer();
const socket = io("https://peaceful-depths-33963.herokuapp.com/");
const peers = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      stream: {},
      peers: [],
      code: "",
      input: "",
      output: "",
    };
    this.handleVideoToggle = this.handleVideoToggle.bind(this);
    this.handleAudioToggle = this.handleAudioToggle.bind(this);
    this.handleChangeCode = this.handleChangeCode.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeOutput = this.handleChangeOutput.bind(this);
    this.handleRunClick = this.handleRunClick.bind(this);
  }
  componentDidMount() {
    myPeer.on("open", (id) => {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          this.addUserIdAndStream(id, stream);
          this.addVideoStream(id, stream, false);
          socket.on("user-connected", (userId) => {
            this.connectToNewUser(userId, stream);
            this.sendDatatoNewUser();
          });
          myPeer.on("call", (call) => {
            call.answer(stream);
            call.on("stream", (userVideoStream) => {
              this.addVideoStream(call.peer, userVideoStream, false);
            });
            call.on("close", () => {
              const peers = this.state.peers;
              var peersModified = peers.filter((peer) => {
                return peer.userId !== call.peer;
              });
              this.setState({ peers: peersModified });
            });
            peers[call.peer] = call;
          });
          socket.emit("join-room", this.props.roomId, id);
          socket.on("receive code", (payload) => {
            this.updateCodeFromSockets(payload);
          });
          socket.on("receive input", (payload) => {
            this.updateInputFromSockets(payload);
          });
          socket.on("receive output", (payload) => {
            this.updateOutputFromSockets(payload);
          });
          socket.on("receive-data-for-new-user", (payload) => {
            this.updateStateFromSockets(payload);
          });
        });
    });
    socket.on("user-disconnected", (userId) => {
      if (peers[userId]) peers[userId].close();
    });
  }
  sendDatatoNewUser() {
    socket.emit("data-for-new-user", {
      newCode: this.state.code,
      newInput: this.state.input,
      newOutput: this.state.output,
    });
  }
  updateStateFromSockets(payload) {
    this.setState({ code: payload.newCode });
    this.setState({ input: payload.newInput });
    this.setState({ output: payload.newOutput });
  }
  updateCodeFromSockets(payload) {
    this.setState({ code: payload.newCode });
  }
  updateInputFromSockets(payload) {
    this.setState({ input: payload.newInput });
  }
  updateOutputFromSockets(payload) {
    this.setState({ output: payload.newOutput });
  }
  connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream);
    call.on("stream", (userVideoStream) => {
      this.addVideoStream(userId, userVideoStream, false);
    });
    call.on("close", () => {
      const peers = this.state.peers;
      var peersModified = peers.filter((peer) => {
        return peer.userId !== userId;
      });
      this.setState({ peers: peersModified });
    });
    peers[userId] = call;
  }

  addVideoStream(userId, stream, flag) {
    if (userId === this.state.userId) {
      stream.getVideoTracks()[0].enabled = false;
      stream.getAudioTracks()[0].enabled = false;
    }
    const peers = this.state.peers;
    peers.forEach((peer) => {
      if (peer.userId === userId) {
        peer.stream = stream;
        flag = true;
      }
    });
    if (!flag) peers.push({ userId: userId, stream: stream });
    this.setState({ peers: peers });
  }

  addUserIdAndStream(userId, stream) {
    this.setState({ userId: userId, stream: stream });
  }

  handleVideoToggle(userId) {
    this.state.peers.forEach((peer) => {
      if (peer.userId === userId) {
        const enabled = peer.stream.getVideoTracks()[0].enabled;
        peer.stream.getVideoTracks()[0].enabled = !enabled;
      }
    });
  }

  handleAudioToggle(userId) {
    this.state.peers.forEach((peer) => {
      if (peer.userId === userId) {
        const enabled = peer.stream.getAudioTracks()[0].enabled;
        peer.stream.getAudioTracks()[0].enabled = !enabled;
      }
    });
  }
  handleChangeCode(newCode) {
    this.setState({ code: newCode });
    socket.emit("code change", {
      newCode: newCode,
    });
  }
  handleChangeInput(newInput) {
    this.setState({ input: newInput });
    socket.emit("input change", {
      newInput: newInput,
    });
  }
  handleChangeOutput(newOutput) {
    this.setState({ output: newOutput });
    socket.emit("output change", {
      newOutput: newOutput,
    });
  }
  handleRunClick(mode) {
    const params = {
      source_code: this.state.code,
      language: mode,
      input: this.state.input,
      api_key: "guest",
    };
    axios.post(`https://api.paiza.io/runners/create`, params).then((res) => {
      const query = new URLSearchParams({
        id: res.data.id,
        api_key: "guest",
      });
      // your callback gets executed automatically once the data is received
      var callback = (res, error) => {
        // consume data
        if (error) {
          console.error(error);
          return;
        }
        let output = "";
        if (res.data.stdout) output += res.data.stdout;
        if (res.data.stderr) output += res.data.stderr;
        if (res.data.build_stderr) output += res.data.build_stderr;
        this.setState({ output: output });
      };

      request(10, callback);
      function request(retries, callback) {
        axios
          .get(`https://api.paiza.io/runners/get_details?${query.toString()}`)
          .then((response) => {
            // request successful

            if (response.data.status === "completed") {
              // server done, deliver data to script to consume
              callback(response);
            } else {
              if (retries > 0) {
                request(--retries, callback);
              } else {
                // no retries left, calling callback with error
                callback([], "out of retries");
              }
            }
          })
          .catch((error) => {
            // ajax error occurred
            // would be better to not retry on 404, 500 and other unrecoverable HTTP errors
            // retry, if any retries left
            if (retries > 0) {
              request(--retries, callback);
            } else {
              // no retries left, calling callback with error
              callback([], error);
            }
          });
      }
    });
    //console.log(params);
  }

  render() {
    return (
      <React.Fragment>
        <Header
          userId={this.state.userId}
          stream={this.state.stream}
          onVideoToggle={this.handleVideoToggle}
          onAudioToggle={this.handleAudioToggle}
        />
        <VideoBar peersStream={this.state.peers} userId={this.state.userId} />
        <Editor
          code={this.state.code}
          input={this.state.input}
          output={this.state.output}
          onChangeCode={this.handleChangeCode}
          onChangeInput={this.handleChangeInput}
          onChangeOutput={this.handleChangeOutput}
          handleRunClick={this.handleRunClick}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
