(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),i=t(24),r=t.n(i),s=(t(67),t(18)),c=t(19),o=t(21),u=t(20),m=t(22),p=(t(69),t(61)),w=t.n(p),g=t(25),y=t.n(g),h=t(57),E=t.n(h),d=t(60),b=t.n(d),O=t(10),f=t.n(O),v=t(59),P=t.n(v),k=t(38),j=t.n(k),B=function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{marginLeft:"auto",marginRight:"auto"}}},C=function(e){function n(){return Object(s.a)(this,n),Object(o.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.a,{className:B.table},l.a.createElement(P.a,null,l.a.createElement(j.a,null,l.a.createElement(f.a,{align:"center"},"Player"),l.a.createElement(f.a,{align:"center"},"Wins"),l.a.createElement(f.a,{align:"center"},"Loses"),l.a.createElement(f.a,{align:"center"},"Win Percentage"))),l.a.createElement(b.a,null,this.props.data.map(function(e){return l.a.createElement(j.a,{key:e.player},l.a.createElement(f.a,{component:"th",scope:"element",align:"center"},e.player),l.a.createElement(f.a,{align:"center"},e.wins),l.a.createElement(f.a,{align:"center"},e.loses),l.a.createElement(f.a,{align:"center"},e.winPercentage,"%"))}))))}}]),n}(a.Component),R=[{player:"Anthony",wins:0,loses:0,winPercentage:0},{player:"Mike B",wins:1,loses:2,winPercentage:33},{player:"Brian",wins:3,loses:1,winPercentage:75},{player:"Brien",wins:3,loses:0,winPercentage:100},{player:"Mike C",wins:2,loses:1,winPercentage:66},{player:"Taylor",wins:1,loses:1,winPercentage:50},{player:"Will",wins:0,loses:3,winPercentage:0}],W=[{player:"Anthony",wins:0,loses:0,winPercentage:0},{player:"Mike B",wins:0,loses:0,winPercentage:0},{player:"Brian",wins:0,loses:0,winPercentage:0},{player:"Brien",wins:0,loses:0,winPercentage:0},{player:"Mike C",wins:0,loses:0,winPercentage:0},{player:"Taylor",wins:0,loses:0,winPercentage:0},{player:"Will",wins:0,loses:0,winPercentage:0}],x=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(o.a)(this,Object(u.a)(n).call(this,e))).state={displayOnlineResults:!0,gameData:R},t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w.a,{variant:"contained",size:"large",onClick:this.buttonClicked.bind(this)},this.state.displayOnlineResults?"Online":"Live"),l.a.createElement("br",null),l.a.createElement("h3",null,"Viewing ",this.state.displayOnlineResults?"Live":"Online"," Results"),l.a.createElement("br",null),l.a.createElement(y.a,{container:!0,spacing:8},l.a.createElement(y.a,{item:!0,xs:1,sm:2}),l.a.createElement(y.a,{item:!0,xs:10,sm:8},l.a.createElement(C,{data:this.state.gameData})),l.a.createElement(y.a,{item:!0,xs:1,sm:2})))}},{key:"buttonClicked",value:function(e){var n=this.state.displayOnlineResults?W:R;this.setState({displayOnlineResults:!this.state.displayOnlineResults,gameData:n})}}]),n}(a.Component),A=function(e){function n(){return Object(s.a)(this,n),Object(o.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"TripleA Scoreboard"),l.a.createElement("br",null),l.a.createElement(x,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,n,t){e.exports=t(160)},67:function(e,n,t){},69:function(e,n,t){}},[[62,2,1]]]);
//# sourceMappingURL=main.a35d01bf.chunk.js.map