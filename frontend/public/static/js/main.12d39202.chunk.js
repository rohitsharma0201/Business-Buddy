(this["webpackJsonpbusiness-buddy"]=this["webpackJsonpbusiness-buddy"]||[]).push([[0],{74:function(e,t,a){e.exports=a(87)},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a.n(i),o=a(123),c=a(122),s=a(121),u=a(15),d=a(62),m=a(127),g=a(61),h=a(128),p=function(){var e=Object(u.b)().logout;return r.a.createElement(h.a,{onClick:function(){e({returnTo:window.location.origin})}},"Log Out")},E=function(e){var t=r.a.useState(null),a=Object(d.a)(t,2),n=a[0],i=a[1],l=function(){i(null)};return r.a.createElement(m.a,null,r.a.createElement(s.a,{variant:"h5",style:{display:"inline",paddingLeft:"2%",fontSize:"calc(12px + 1vh)"}},e.name.toUpperCase()),r.a.createElement("img",{src:"pizza.jpg",className:"App-logo",alt:"company",style:{height:"5vh",paddingLeft:"1%",paddingRight:"1%"},onClick:function(e){i(e.currentTarget)}}),r.a.createElement(g.a,{id:"company-dropdown",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:l},r.a.createElement(h.a,{onClick:l},"Home"),r.a.createElement(h.a,{onClick:l},"Settings"),r.a.createElement(p,null)))},f=function(e){var t=Object(u.b)().isAuthenticated,a=r.a.createElement(r.a.Fragment,null);return t&&(a=r.a.createElement(E,{name:e.name})),r.a.createElement(c.a,{position:"static",style:{backgroundColor:"#FFFFFF",height:"7vh",width:"100%",color:"#000000",paddingTop:"1vh",minHeight:"50px"}},r.a.createElement(o.a,{container:!0},r.a.createElement(o.a,{item:!0,xs:8},r.a.createElement("img",{src:"koala.jpg",className:"App-logo",alt:"logo",style:{height:"5vh",paddingLeft:"1%"}}),r.a.createElement(m.a,{alignItems:"center",style:{display:"inline"}},r.a.createElement(s.a,{variant:"h3",style:{display:"inline",paddingLeft:"1%",paddingBotton:"10%",fontSize:"calc(12px + 3vh)"}},r.a.createElement("strong",null,"Business Buddy")))),r.a.createElement(o.a,{item:!0,xs:4,style:{textAlign:"right"}},a)))},b=a(89),y=a(124),v=function(){var e=Object(u.b)().loginWithRedirect;return r.a.createElement(y.a,{onClick:function(){return e()},variant:"outlined"},"Log In")},x=function(){var e=Object(u.b)().loginWithRedirect;return r.a.createElement(y.a,{onClick:function(){return e({screen_hint:"signup"})},variant:"outlined"},"Sign Up")},k=function(){return r.a.createElement(m.a,{height:"93vh"},r.a.createElement(o.a,{container:!0,p:3},r.a.createElement(o.a,{item:!0,xs:3}),r.a.createElement(o.a,{item:!0,xs:6},r.a.createElement(m.a,{style:{height:"20vh"}}),r.a.createElement(b.a,{style:{height:"40vh",borderRadius:16}},r.a.createElement(m.a,{p:2},r.a.createElement(s.a,{variant:"h5",style:{color:"#183052"}},r.a.createElement("strong",null,"Log into My Business")),r.a.createElement(v,null),r.a.createElement(x,null)))),r.a.createElement(o.a,{item:!0,xs:3})))},w=a(28),j=a(29),C=a(31),S=a(30),O=a(125),F=Object(O.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:120}}}));function M(e){var t=F(),a=e.val;return r.a.createElement(o.a,{item:!0,xs:6},r.a.createElement(b.a,{className:t.paper,elevation:3},r.a.createElement("img",{src:a.src,className:"App-logo",alt:"logo"}),r.a.createElement("br",null),a.text))}var B=Object(O.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:120}}}));function A(e){var t=B();return r.a.createElement(o.a,{item:!0,xs:6},r.a.createElement(b.a,{className:t.paper,elevation:3,onClick:e.clickAdd}))}var L=[{src:"keeper.jpg",text:"NSW Health Alerts"},{src:"liquor.jpg",text:"Liquor Licence"},{src:"lbr.jpg",text:"Local Business Relief"},{src:"keeper.jpg",text:"Jobkeeper"},{src:"liquor.jpg",text:"Liquor Licence"},{src:"lbr.jpg",text:"Local Business Relief"}],W=Object(O.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function N(e){var t=W();return r.a.createElement("div",{className:t.root},r.a.createElement(s.a,{variant:"h5",style:{color:"#000000"}},r.a.createElement("strong",null,"My Services")),r.a.createElement(o.a,{container:!0,spacing:3},L.map((function(e,t){return r.a.createElement(M,{val:e,key:t})})),r.a.createElement(A,{clickAdd:function(){return e.addService()}})))}var R=a(126),T=function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(w.a)(this,a),(n=t.call(this,e)).alignment=e.align,n.text=e.text,n.colour=e.colour,n.textColour=e.textColour,n}return Object(j.a)(a,[{key:"render",value:function(){var e={maxWidth:"55%",minWidth:"2%",float:this.alignment,paddingTop:"0.7%",paddingBottom:"0.7%",paddingLeft:"1.2%",paddingRight:"1.2%",background:this.colour,color:this.textColour};return r.a.createElement(m.a,{display:"block",style:{width:"100%",float:this.alignment,padding:"0.1%"}},r.a.createElement(m.a,{variant:"outlined",borderRadius:10,style:e},this.text))}}]),a}(r.a.Component),z=["Hi!","I'm your Business Buddy \ud83d\udc28","I can help you manage your business.","With me, you can keep track of services you are using, receive notifications tailored to your business needs, and find out information about health advice and business grants.","To get started, I need a few basic bits of information about your business.","All data is securely stored in Australia, and you can change or delete anything you want later on from the Settings tab at the top right.","Where is your business based?"],I=function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(e){var n;Object(w.a)(this,a),(n=t.call(this,e)).clickSend=function(){if(""!==n.state.currentMessage){var e=n.state.messages;e.push({text:n.state.currentMessage,buddyMessage:!1,align:"right",colour:"#4491FF",textColour:"#FFFFFF",index:e.length}),n.setState({messages:e,currentMessage:""})}},n.changeText=function(e){n.setState({currentMessage:e.target.value})},n.forSubmit=function(e){e.preventDefault(),n.clickSend()},n.addBuddyMessage=function(e){var t=n.state.messages;t.push({text:e,buddyMessage:!0,align:"left",colour:"#E7E6E6",textColour:"#000000",index:t.length}),n.setState({messages:t,lastBudyMessage:e})};var r=[];return z.forEach((function(e){r.push({text:e,buddyMessage:!0,align:"left",colour:"#E7E6E6",textColour:"#000000",index:r.length})})),n.state={messages:r,currentMessage:"",lastBudyMessage:z[z.length-1]},n}return Object(j.a)(a,[{key:"render",value:function(){var e=this;this.state.messages[this.state.messages.length-1].buddyMessage||("Where is your business based?"===this.state.lastBudyMessage&&this.addBuddyMessage("What industry is your business a part of?"),"What industry is your business a part of?"===this.state.lastBudyMessage&&this.addBuddyMessage("Awesome! Try asking me about what grants you might be eligible for, or what the current NSW Health regulations are for your business."));var t=this.state.messages.map((function(e){return r.a.createElement(T,{text:e.text,align:e.align,key:e.index,colour:e.colour,textColour:e.textColour})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{variant:"h5",style:{color:"#000000"}},r.a.createElement("strong",null,"My Buddy")),r.a.createElement(m.a,{boxShadow:15,borderRadius:10,style:{height:"80vh",padding:"2%"}},r.a.createElement(m.a,{style:{height:"95%"}},t),r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.forSubmit},r.a.createElement(R.a,{id:"outlined-basic",variant:"outlined",size:"small",value:this.state.currentMessage,onChange:this.changeText,style:{width:"90%"}}),r.a.createElement(y.a,{variant:"contained",color:"primary",style:{width:"7%",marginLeft:"1%"},onClick:function(){return e.clickSend()}},"SEND"))))}}]),a}(r.a.Component),H=function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).addService=function(){},e}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(o.a,{container:!0,spacing:3,style:{color:"#183052",width:"100%",height:"92vh"}},r.a.createElement(o.a,{item:!0,xs:2}),r.a.createElement(o.a,{item:!0,xs:5},r.a.createElement(I,null)),r.a.createElement(o.a,{item:!0,xs:3},r.a.createElement(N,{addService:this.addService})),r.a.createElement(o.a,{item:!0,xs:2})))}}]),a}(r.a.Component),q=function(){var e=Object(u.b)().isAuthenticated,t=r.a.createElement(r.a.Fragment,null);return t=e?r.a.createElement(H,{app:void 0}):r.a.createElement(k,{app:void 0}),r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{name:"Pizza Planet",isAuthenticated:e}),t)},G=a(50),J=a(10),P=function(e){var t=e.children,a=Object(J.d)();return r.a.createElement(u.a,{domain:"andrew-esteban.au.auth0.com",clientId:"57FEbWnEbSmuNb4Ged4P3tpF4iv3CiFJ",redirectUri:window.location.origin,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)}},t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86);l.a.render(r.a.createElement(G.a,null,r.a.createElement(P,null,r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.12d39202.chunk.js.map