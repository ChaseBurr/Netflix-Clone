(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),o=c(17),i=c.n(o),s=(c(28),c(5)),l=c.n(s),d=c(6),u=c(4),h=c(18),f=c.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),j=c(19),b=c(22),v=c.n(b);c(62);var _=function(e){var t=e.title,c=e.fetchUrl,r=e.isLargeRow,o=Object(a.useState)([]),i=Object(u.a)(o,2),s=i[0],h=i[1],b=Object(a.useState)(""),_=Object(u.a)(b,2),m=_[0],p=_[1],g=Math.floor(100*Math.random());return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(c);case 2:t=e.sent,n=t.data,h(n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsxs)("div",{className:"row__posters row_".concat(g),children:[Object(n.jsx)("button",{className:r?"slide__left slide__left__large":"slide__left",onClick:function(){document.querySelector(".row_".concat(g)).scrollLeft-=200},children:Object(n.jsx)("i",{className:"fas fa-arrow-left"})}),s.map((function(e){return e.poster_path&&Object(n.jsx)("img",{onClick:function(){return function(e){m?p(""):v()((null===e||void 0===e?void 0:e.original_title)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);p(t.get("v"))})).catch((function(e){return console.error(e)}))}(e)},className:"row__poster".concat(r?" row__poster__large":""),src:"".concat("https://image.tmdb.org/t/p/original").concat(r?e.poster_path:e.backdrop_path),alt:e.name},e.id)})),Object(n.jsx)("button",{className:r?"slide__right slide__right__large":"slide__right",onClick:function(){document.querySelector(".row_".concat(g)).scrollLeft+=500},children:Object(n.jsx)("i",{className:"fas fa-arrow-right"})})]}),m&&Object(n.jsx)(j.a,{videoId:m,opts:{height:"800",width:"100%",playerVars:{autoplay:1}}})]})},m="c52a1f0a294a2c11d901d69ed73d1290",p={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(m,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&language=-en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(m,"&with_genres=99")};c(63);var g=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(p.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===c||void 0===c?void 0:c.backdrop_path,'")')},children:[Object(n.jsxs)("div",{className:"banner__contents",children:[Object(n.jsx)("h1",{className:"banner__title",children:(null===c||void 0===c?void 0:c.title)||(null===c||void 0===c?void 0:c.name)||(null===c||void 0===c?void 0:c.original_name)}),Object(n.jsxs)("div",{className:"banner_buttons",children:[Object(n.jsx)("button",{className:"banner__button",children:"Play"}),Object(n.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(n.jsx)("h1",{className:"banner__description",children:null===c||void 0===c?void 0:c.overview})]}),Object(n.jsx)("div",{className:"banner__fadeBottom"})]})};c(64);var O=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(n.jsxs)("nav",{className:"".concat(c&&"nav__black"),children:[Object(n.jsx)("img",{className:"nav__logo",src:"https://cdn.worldvectorlogo.com/logos/netflix-3.svg",alt:"Netflix Logo"}),Object(n.jsx)("img",{className:"nav__avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Profile Avatar"})]})};var x=function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(O,{}),Object(n.jsx)(g,{}),Object(n.jsx)(_,{title:"NETFLIX ORIGINALS",fetchUrl:p.fetchNetflixOriginals,isLargeRow:!0}),Object(n.jsx)(_,{title:"Trending Now",fetchUrl:p.fetchTrending}),Object(n.jsx)(_,{title:"Top Rated",fetchUrl:p.fetchTopRated}),Object(n.jsx)(_,{title:"Action Movies",fetchUrl:p.fetchActionMovies}),Object(n.jsx)(_,{title:"Comedy Movies",fetchUrl:p.fetchComedyMovies}),Object(n.jsx)(_,{title:"Horror Movies",fetchUrl:p.fetchHorrorMovies}),Object(n.jsx)(_,{title:"Romance Movies",fetchUrl:p.fetchRomanceMovies}),Object(n.jsx)(_,{title:"Documentaries",fetchUrl:p.fetchDocumentaries})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.4f7922e6.chunk.js.map