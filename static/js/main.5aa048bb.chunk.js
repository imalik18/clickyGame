(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,i){e.exports=i(20)},,,,,,function(e,t,i){},function(e,t,i){e.exports=i.p+"static/media/logo.5d5d9eef.svg"},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(2),r=i.n(c),s=(i(15),i(6)),o=i(3),l=i(4),m=i(7),g=i(5),u=i(8);i(16),i(17);var d=function(e){return n.a.createElement("div",{className:"nav"},"score : ",e.score)};i(18);var h=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("img",{onClick:function(){return e.handleClick(e.id)},src:e.img}))},v=(i(19),function(e){function t(){var e,i;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(i=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={characters:[{id:0,name:"Angelica",img:"https://vignette.wikia.nocookie.net/rugratseries/images/2/2a/Angeilca.jpg/revision/latest?cb=20110202050259"},{id:1,name:"Tommy",img:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-Rugrats-Elizabeth-Daily-Tommy-Pickles.jpg"},{id:2,name:"Chuckie",img:"https://vignette.wikia.nocookie.net/rugratseries/images/b/b6/Chuckie.jpg/revision/latest?cb=20110202050308"},{id:3,name:"Phil",img:"https://vignette.wikia.nocookie.net/rugratseries/images/6/69/Phil.jpg/revision/latest?cb=20110202050348"},{id:4,name:"Lil",img:"https://vignette.wikia.nocookie.net/rugratseries/images/7/77/Lil.jpg/revision/latest?cb=20110202050333"},{id:5,name:"Dil",img:"https://vignette.wikia.nocookie.net/rugratseries/images/e/eb/Dil.jpg/revision/latest?cb=20110202050320"},{id:6,name:"Kimi",img:"https://vignette.wikia.nocookie.net/rugratseries/images/3/30/Kimi.jpg/revision/latest?cb=20110202050505"},{id:7,name:"Susie",img:"https://vignette.wikia.nocookie.net/rugratseries/images/9/96/Susie.jpg/revision/latest?cb=20110202050524"},{id:8,name:"Spike",img:"https://vignette.wikia.nocookie.net/rugrats/images/4/40/Spike.svg/revision/latest/scale-to-width-down/150?cb=20140515105420"}],clicked:[],score:0},i.handleClick=function(e){if(i.state.clicked.includes(e))alert("You Lose"),i.setState({score:0});else{var t=i.shuffle(i.state.characters);i.setState({clicked:[].concat(Object(s.a)(i.state.clicked),[e]),characters:t,score:i.state.score+1})}},i}return Object(u.a)(t,e),Object(l.a)(t,[{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),a=[e[i],e[t]];e[t]=a[0],e[i]=a[1]}return e}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(d,{score:this.state.score}),n.a.createElement("div",{className:"body"},this.state.characters.map(function(t){return n.a.createElement(h,{name:t.name,handleClick:e.handleClick,img:t.img,id:t.id})})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.5aa048bb.chunk.js.map