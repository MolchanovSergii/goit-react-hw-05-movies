"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[509],{430:function(n,e,t){t.d(e,{Z:function(){return o}});var r,a=t(5243),i=t(168),c=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* width: 100vw; */\n  /* height: 100vh; */\n"]))),s=t(184),o=function(){return(0,s.jsx)(c,{children:(0,s.jsx)(a.g4,{color:"#3f51b5",height:200,width:200})})}},4509:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,a,i,c,s,o,u,p=t(5861),l=t(9439),d=t(7757),f=t.n(d),h=t(7689),x=t(1087),v=t(2791),g=t(5264),m=t(427),Z=t(430),j=t(8185),w=t(168),b=t(6444),y=b.ZP.div(r||(r=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 16px;\n  border-bottom: 1px solid black;\n"]))),k=b.ZP.img(a||(a=(0,w.Z)(["\n  width: 200px;\n"]))),_=b.ZP.div(i||(i=(0,w.Z)([""]))),U=b.ZP.ul(c||(c=(0,w.Z)(["\n  display: flex;\n  list-style: none;\n  padding-left: 0;\n  gap: 12px;\n"]))),P=(0,b.ZP)(j.knT)(s||(s=(0,w.Z)(["\n  margin-right: 10px;\n"]))),S=(0,b.ZP)(x.rU)(o||(o=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 8px 16px;\n  margin-bottom: 10px;\n  text-decoration: none;\n  width: 100px;\n  border: 1px solid tomato;\n  border-radius: 5px;\n  color: tomato;\n"]))),F=b.ZP.div(u||(u=(0,w.Z)(["\n  border-bottom: 1px solid black;\n"]))),R=t(184),C=function(n){var e,t,r=n.data,a=r.overview,i=r.genres,c=r.poster_path,s=r.title,o=r.release_date,u=r.vote_average,p=parseInt(o.split("-")[0]),l=(0,h.TH)(),d=(0,v.useRef)(null!==(e=null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(S,{to:d.current,children:[(0,R.jsx)(P,{}),"Go Back"]}),(0,R.jsxs)(y,{children:[(0,R.jsx)(_,{children:c?(0,R.jsx)(k,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(c),alt:"Movie Poster"}):(0,R.jsx)(j.Lwf,{size:200})}),(0,R.jsxs)(_,{children:[(0,R.jsxs)("h2",{children:[s," (",p,")"]}),(0,R.jsxs)("p",{children:["User Rating: ",u]}),(0,R.jsx)("h3",{children:"Overview"}),(0,R.jsx)("p",{children:a}),(0,R.jsx)("h3",{children:"Genres"}),(0,R.jsx)(U,{children:i.map((function(n){return(0,R.jsx)("li",{children:n.name},n.id)}))})]})]})]})},I=function(){var n=(0,h.UO)().movieId,e=(0,v.useState)(!1),t=(0,l.Z)(e,2),r=t[0],a=t[1],i=(0,v.useState)(null),c=(0,l.Z)(i,2),s=c[0],o=c[1];return(0,v.useEffect)((function(){var e=function(){var e=(0,p.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,(0,m.DF)(n);case 4:t=e.sent,o(t),a(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),g.Notify.failure("Sorry, something went wrong. ".concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,R.jsxs)(R.Fragment,{children:[r?(0,R.jsx)(Z.Z,{}):s&&(0,R.jsx)(C,{data:s}),(0,R.jsx)(F,{children:(0,R.jsx)("h3",{children:"Additional information"})}),(0,R.jsxs)("ul",{children:[(0,R.jsx)("li",{children:(0,R.jsx)(x.rU,{to:"cast",children:"Cast"})}),(0,R.jsx)("li",{children:(0,R.jsx)(x.rU,{to:"reviews",children:"Reviews"})})]}),(0,R.jsx)(v.Suspense,{fallback:(0,R.jsx)(Z.Z,{}),children:(0,R.jsx)(h.j3,{})})]})}},427:function(n,e,t){t.d(e,{DF:function(){return p},K$:function(){return h},_I:function(){return d},a8:function(){return o},gZ:function(){return v}});var r=t(5861),a=t(7757),i=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="f6352dcc8bb6548bb49d551f5d46c756";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/movie/day",n.next=3,c.Z.get("".concat("trending/movie/day","?language=en-US&api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e),n.next=3,c.Z.get("".concat(t,"?language=en-US&api_key=").concat(s));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/credits"),n.next=3,c.Z.get("".concat(t,"?language=en-US&api_key=").concat(s));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/reviews"),n.next=3,c.Z.get("".concat(t,"?language=en-US&api_key=").concat(s));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"search/movie",n.next=3,c.Z.get("".concat("search/movie","?query=").concat(e,"&include_adult=false&language=en-US&page=1&api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=509.37b128ec.chunk.js.map