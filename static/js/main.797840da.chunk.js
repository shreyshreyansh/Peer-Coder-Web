(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},550:function(e,t,n){},551:function(e,t,n){},585:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=585},603:function(e,t,n){},610:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(24),i=n.n(s),r=n(9),u=n(10),c=n(15),d=n(12),h=n(11),l=(n(102),n(3)),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={video:!1,audio:!1},a}return Object(u.a)(n,[{key:"toggleAudioCss",value:function(){var e=this.state.audio;this.setState({audio:!e})}},{key:"toggleVideoCss",value:function(){var e=this.state.video;this.setState({video:!e})}},{key:"handleClick",value:function(){window.prompt("ROOM URL",window.location.href)}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{href:"#",className:"logo",children:"PEER CODER"}),Object(l.jsx)("button",{className:"copy-url",onClick:function(){return e.handleClick()},children:"ROOM URL"}),Object(l.jsxs)("div",{className:"header-right",children:[Object(l.jsx)("button",{className:this.state.video?"buttonOn":"buttonOff",onClick:function(){e.props.onVideoToggle(e.props.userId),e.toggleVideoCss()},children:Object(l.jsx)("i",{className:this.state.video?"fa fa-video-camera":"fa fa-video-slash"})}),Object(l.jsx)("button",{className:this.state.audio?"buttonOn":"buttonOff",onClick:function(){e.props.onAudioToggle(e.props.userId),e.toggleAudioCss()},children:Object(l.jsx)("i",{className:this.state.audio?"fa fa-microphone":"fa fa-microphone-slash"})})]})]})}}]),n}(a.Component),f=(n(104),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.video.srcObject=this.props.media}},{key:"shouldComponentUpdate",value:function(e){return this.props.media!==e.media}},{key:"componentDidUpdate",value:function(){this.video.srcObject=this.props.media}},{key:"render",value:function(){var e=this,t=this.props,n=t.width,a=t.height,o=t.muted,s=t.children;return Object(l.jsx)("video",{height:a,width:n,muted:o,autoPlay:!0,ref:function(t){e.video=t},children:s})}}]),n}(o.a.Component));f.defaultProps={children:null,height:110,width:160,muted:!1,media:null};var m,j,b,v=f,g=(n(105),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"scrollmenu",children:this.props.peersStream.map((function(t){return Object(l.jsx)(v,{media:t.stream,height:110,width:160,muted:e.props.userId===t.userId},t.userId)}))})}}]),n}(a.Component)),O=n(620),k=(n(106),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"config-bar",children:[Object(l.jsx)(O.a,{className:"dropdown",placeholder:"Theme",selection:!0,options:this.props.themes,onChange:function(t,n){return e.props.handleOnChange(t,n)},defaultValue:this.props.themes[8].value}),Object(l.jsx)(O.a,{className:"dropdown",placeholder:"Language",selection:!0,options:this.props.languages,onChange:function(t,n){return e.props.handleOnChange(t,n)},value:this.props.mode}),Object(l.jsx)(O.a,{className:"dropdown",placeholder:"Font Size",selection:!0,options:this.props.fontSizes,onChange:function(t,n){return e.props.handleOnChange(t,n)},defaultValue:this.props.fontSizes[4].value}),Object(l.jsx)("button",{className:"run",onClick:function(){return e.props.handleRunClick()},children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:this.props.status}})})]})}}]),n}(a.Component)),C=n(38),S=n.n(C),x=n(85),y=(n(118),n(533),n(534),n(535),n(536),n(537),n(538),n(539),n(540),n(541),n(542),n(543),n(544),n(545),n(546),n(547),n(548),n(549),n(550),Object.keys({c:"c_cpp",cpp:"c_cpp",python:"python",python3:"python",java:"java"})),w=["8","10","12","14","16","18","20","22","24","26","28","30","32"],I=["monokai","github","solarized_dark","dracula","eclipse","tomorrow_night","tomorrow_night_blue","xcode","ambiance","solarized_light"].sort(),N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(r.a)(this,n),(a=t.call(this,e)).state={theme:"tomorrow_night_blue",fontSize:16};var o=0;m=y.map((function(e){return{key:""+ ++o,text:e,value:e}}));var s=0;j=w.map((function(e){return{key:""+ ++s,text:e,value:e}}));var i=0;return b=I.map((function(e){return{key:""+ ++i,text:e,value:e}})),a.handleOnChange=a.handleOnChange.bind(Object(c.a)(a)),a}return Object(u.a)(n,[{key:"handleOnChange",value:function(e,t){"Theme"===t.placeholder?this.setState({theme:t.value}):"Font Size"===t.placeholder?this.setState({fontSize:parseInt(t.value)}):"Language"===t.placeholder&&this.props.onChangeMode(t.value)}},{key:"render",value:function(){var e=this;return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)(k,{mode:this.props.mode,status:this.props.status,handleOnChange:this.handleOnChange,languages:m,fontSizes:j,themes:b,handleRunClick:function(){return e.props.handleRunClick()}}),Object(l.jsxs)(x.a,{split:"vertical",minSize:100,maxSize:window.innerWidth-50,defaultSize:.5*window.innerWidth,style:{height:"65vh"},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"head",children:Object(l.jsx)("div",{className:"text",children:"CODE HERE"})}),Object(l.jsx)(S.a,{mode:this.props.mode,theme:this.state.theme,fontSize:this.state.fontSize,value:this.props.code,onChange:function(t){return e.props.onChangeCode(t)},width:"100vw",height:"61.4vh",showGutter:!0,useWorker:!1,editorProps:{$blockScrolling:!1},setOptions:{enableLiveAutocompletion:!0,enableSnippets:!0}})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"head",children:Object(l.jsx)("div",{className:"text",children:"INPUT"})}),Object(l.jsx)(S.a,{mode:"text",theme:this.state.theme,fontSize:this.state.fontSize,value:this.props.input,onChange:function(t){return e.props.onChangeInput(t)},width:"100vw",height:"28vh",showGutter:!0,useWorker:!1,editorProps:{$blockScrolling:!1},setOptions:{enableLiveAutocompletion:!0,enableSnippets:!0}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"head",children:Object(l.jsx)("div",{className:"text",children:"OUTPUT"})}),Object(l.jsx)(S.a,{mode:"text",theme:this.state.theme,fontSize:this.state.fontSize,value:this.props.output,onChange:function(t){return e.props.onChangeOutput(t)},width:"100vw",height:"32vh",readOnly:!0,showGutter:!0,useWorker:!1,editorProps:{$blockScrolling:!1},setOptions:{enableLiveAutocompletion:!0,enableSnippets:!0}})]})]})]})]})}}]),n}(a.Component),T=(n(551),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("a",{href:"https://github.com/shreyshreyansh/Peer-Coder",target:"_blank",rel:"noopener noreferrer",className:"left-footer",children:"\u2b50 Star Project"}),Object(l.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"right-footer",children:"\xa9 GitHub community"})]})}}]),n}(a.Component)),_=n(81),z=n.n(_),U=n(82),R=n.n(U),M=n(47),V=n.n(M),A=(n(603),new R.a),F=z()("https://peaceful-depths-33963.herokuapp.com/"),E={},P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={userId:"",stream:{},peers:[],mode:"java",code:"",input:"",output:"",status:"RUN"},a.handleVideoToggle=a.handleVideoToggle.bind(Object(c.a)(a)),a.handleAudioToggle=a.handleAudioToggle.bind(Object(c.a)(a)),a.handleChangeCode=a.handleChangeCode.bind(Object(c.a)(a)),a.handleChangeInput=a.handleChangeInput.bind(Object(c.a)(a)),a.handleChangeOutput=a.handleChangeOutput.bind(Object(c.a)(a)),a.handleRunClick=a.handleRunClick.bind(Object(c.a)(a)),a.handleChangeMode=a.handleChangeMode.bind(Object(c.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;A.on("open",(function(t){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(n){e.addUserIdAndStream(t,n),e.addVideoStream(t,n,!1),F.on("user-connected",(function(t){e.connectToNewUser(t,n),e.sendDatatoNewUser()})),A.on("call",(function(t){t.answer(n),t.on("stream",(function(n){e.addVideoStream(t.peer,n,!1)})),t.on("close",(function(){var n=e.state.peers.filter((function(e){return e.userId!==t.peer}));e.setState({peers:n})})),E[t.peer]=t})),F.emit("join-room",e.props.roomId,t),F.on("receive code",(function(t){e.updateCodeFromSockets(t)})),F.on("receive input",(function(t){e.updateInputFromSockets(t)})),F.on("receive output",(function(t){e.updateOutputFromSockets(t)})),F.on("receive-data-for-new-user",(function(t){e.updateStateFromSockets(t)})),F.on("mode-change-receive",(function(t){e.updateModeFromSockets(t)}))}))})),F.on("user-disconnected",(function(e){E[e]&&E[e].close()}))}},{key:"sendDatatoNewUser",value:function(){F.emit("data-for-new-user",{newCode:this.state.code,newInput:this.state.input,newOutput:this.state.output,newMode:this.state.mode})}},{key:"updateStateFromSockets",value:function(e){this.setState({code:e.newCode}),this.setState({input:e.newInput}),this.setState({output:e.newOutput}),this.setState({mode:e.newMode})}},{key:"updateCodeFromSockets",value:function(e){this.setState({code:e.newCode})}},{key:"updateInputFromSockets",value:function(e){this.setState({input:e.newInput})}},{key:"updateOutputFromSockets",value:function(e){this.setState({output:e.newOutput})}},{key:"updateModeFromSockets",value:function(e){this.setState({mode:e.mode})}},{key:"connectToNewUser",value:function(e,t){var n=this,a=A.call(e,t);a.on("stream",(function(t){n.addVideoStream(e,t,!1)})),a.on("close",(function(){var t=n.state.peers.filter((function(t){return t.userId!==e}));n.setState({peers:t})})),E[e]=a}},{key:"addVideoStream",value:function(e,t,n){e===this.state.userId&&(t.getVideoTracks()[0].enabled=!1,t.getAudioTracks()[0].enabled=!1);var a=this.state.peers;a.forEach((function(a){a.userId===e&&(a.stream=t,n=!0)})),n||a.push({userId:e,stream:t}),this.setState({peers:a})}},{key:"addUserIdAndStream",value:function(e,t){this.setState({userId:e,stream:t})}},{key:"handleVideoToggle",value:function(e){this.state.peers.forEach((function(t){if(t.userId===e){var n=t.stream.getVideoTracks()[0].enabled;t.stream.getVideoTracks()[0].enabled=!n}}))}},{key:"handleAudioToggle",value:function(e){this.state.peers.forEach((function(t){if(t.userId===e){var n=t.stream.getAudioTracks()[0].enabled;t.stream.getAudioTracks()[0].enabled=!n}}))}},{key:"handleChangeCode",value:function(e){this.setState({code:e}),F.emit("code change",{newCode:e})}},{key:"handleChangeInput",value:function(e){this.setState({input:e}),F.emit("input change",{newInput:e})}},{key:"handleChangeOutput",value:function(e){this.setState({output:e}),F.emit("output change",{newOutput:e})}},{key:"handleRunClick",value:function(){var e=this;this.setState({status:'RUNNING <i class="fas fa-spinner fa-spin"></i>'});var t={source_code:this.state.code,language:this.state.mode,input:this.state.input,api_key:"guest"};V.a.post("https://api.paiza.io/runners/create",t).then((function(t){var n=new URLSearchParams({id:t.data.id,api_key:"guest"});!function e(t,a){V.a.get("https://api.paiza.io/runners/get_details?".concat(n.toString())).then((function(n){"completed"===n.data.status?a(n):t>0?e(--t,a):a([],"out of retries")})).catch((function(n){t>0?e(--t,a):a([],n)}))}(10,(function(t,n){if(e.setState({status:"RUN"}),n)console.error(n);else{var a="";t.data.stdout&&(a+=t.data.stdout),t.data.stderr&&(a+=t.data.stderr),t.data.build_stderr&&(a+=t.data.build_stderr),e.handleChangeOutput(a)}}))}))}},{key:"handleChangeMode",value:function(e){this.setState({mode:e}),F.emit("mode-change-send",{mode:e})}},{key:"render",value:function(){return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)(p,{userId:this.state.userId,stream:this.state.stream,onVideoToggle:this.handleVideoToggle,onAudioToggle:this.handleAudioToggle}),Object(l.jsx)(g,{peersStream:this.state.peers,userId:this.state.userId}),Object(l.jsx)(N,{mode:this.state.mode,code:this.state.code,input:this.state.input,output:this.state.output,status:this.state.status,onChangeCode:this.handleChangeCode,onChangeInput:this.handleChangeInput,onChangeOutput:this.handleChangeOutput,handleRunClick:this.handleRunClick,onChangeMode:this.handleChangeMode}),Object(l.jsx)(T,{})]})}}]),n}(a.Component),D=n(83),L=n(5),G=n(609).v4;function W(){var e=Object(L.f)().roomId;return Object(l.jsx)(P,{roomId:e})}i.a.render(Object(l.jsxs)(D.a,{children:[Object(l.jsx)(L.b,{exact:!0,path:"/",children:Object(l.jsx)(L.a,{to:"/"+G()})}),Object(l.jsx)(L.b,{path:"/:roomId",children:Object(l.jsx)(W,{})})]}),document.getElementById("root"))}},[[610,1,2]]]);
//# sourceMappingURL=main.797840da.chunk.js.map