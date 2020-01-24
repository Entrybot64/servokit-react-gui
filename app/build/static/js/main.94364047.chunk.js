(this.webpackJsonpservos=this.webpackJsonpservos||[]).push([[0],{35:function(e,t,n){e.exports=n(72)},40:function(e,t,n){},69:function(e,t){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(32),r=n.n(o),i=(n(40),n(33)),l=n(6),c=n(7),h=n(9),u=n(8),v=n(2),d=n(10),m=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={angle:n.props.angle},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.handleEmit=n.handleEmit.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){void 0!==this.props.socket&&this.props.socket.emit("move",{id:this.props.servo,value:this.state.angle})}},{key:"handleChange",value:function(e){this.setState({angle:e.target.value})}},{key:"handleEmit",value:function(){void 0!==this.props.socket&&this.props.socket.emit("move",{id:this.props.servo,value:this.state.angle})}},{key:"render",value:function(){return s.a.createElement("div",{className:"servo-container"},s.a.createElement("h1",null,"Channel ",this.props.servo),s.a.createElement("h3",null,this.state.angle,"\xb0"),s.a.createElement("br",null),s.a.createElement("input",{type:"range",min:"0",max:"180",value:this.state.angle,onChange:this.handleChange,step:"1",onMouseUp:this.handleEmit,onKeyDown:this.handleEmit}))}}]),t}(s.a.Component),p=n(34),g=n.n(p),b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).state={endpoint:"http://localhost:8080",servos:[{id:0,angle:0}],socket:void 0,servoId:0,servoAngle:0,errorMessage:void 0},e.handleInputChange=e.handleInputChange.bind(Object(v.a)(e)),e.handleNewServo=e.handleNewServo.bind(Object(v.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(i.a)({},a,n))}},{key:"handleNewServo",value:function(){var e=this,t=this.state.servos,n=!1;t.map((function(t){t.id===e.state.servoId&&(n=!0)})),!1===n?(t.push({id:this.state.servoId,angle:this.state.servoAngle}),this.setState({servos:t,errorMessage:void 0})):this.setState({errorMessage:"Servo channel is already in use."})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{class:"servo-form-container"},s.a.createElement("label",{for:"servoId"},"Channel"),s.a.createElement("input",{type:"number",id:"servoId",name:"servoId",min:"0",value:this.state.servoId,onChange:this.handleInputChange}),s.a.createElement("label",{for:"servoValue"},"Initial Angle"),s.a.createElement("input",{type:"number",id:"servoAngle",name:"servoAngle",min:0,max:180,value:this.state.servoAngle,onChange:this.handleInputChange}),s.a.createElement("button",{onClick:this.handleNewServo},"Add Servo"),void 0!==this.state.errorMessage&&s.a.createElement("p",{class:"error-message"},this.state.errorMessage)),s.a.createElement("div",{className:"container"},this.state.servos.map((function(t){return s.a.createElement(m,{servo:t.id,angle:t.angle,socket:e.state.socket})}))))}},{key:"componentDidMount",value:function(){this.setState({socket:g()(this.state.endpoint).connect()})}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.94364047.chunk.js.map