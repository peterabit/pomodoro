(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{104:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(16),o=a(61),l=a(69),i=Object(o.a)((function(e){var t=e.todos,a=Object(r.a)(e,["todos"]),n=t.filter((function(e){return!e.completed}));return c.a.createElement(l.a,Object.assign({todos:n,maxHeight:"200px"},a))})),s=a(9);var u=function(){var e=Object(s.c)((function(e){return function(e){var t=Math.floor(e/60),a=e%60;return[t=t<10?"0"+t:t,a=a<10?"0"+a:a]}(e.clock.time)}));return c.a.createElement("div",{className:"clock mr-5 border-pink d-flex justify-content-center align-items-center"},c.a.createElement("p",{className:"h1 text-pink"},e[0]+"\uff1a"+e[1]))},m=a(19),d=a(12),f=a(20),b=function(){var e,t=Object(s.b)(),a=Object(s.c)((function(e){return e.clock.status}));return c.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},c.a.createElement(d.a,{variant:"link",onClick:function(){return t(Object(f.g)())},className:"opacity-weak",style:{fontSize:"20px"}},c.a.createElement("i",{className:"fas fa-random"})),c.a.createElement(d.a,{variant:"link",style:{fontSize:"32px"},className:"mt-2",onClick:"running"===a?function(){return t(Object(f.f)())}:function(){return t(Object(f.e)())}},"running"===a?c.a.createElement("i",{className:"fas fa-pause"}):c.a.createElement("i",{className:"fas fa-play"})),c.a.createElement(d.a,(e={variant:"link",onClick:function(){return t(Object(f.d)())},className:"mt-2"},Object(m.a)(e,"className","opacity-weak"),Object(m.a)(e,"style",{fontSize:"20px"}),e),c.a.createElement("i",{className:"fas fa-redo-alt"})))},p=a(62),v=a(57),E=function(e){var t=e.className,a=Object(r.a)(e,["className"]),n=Object(s.c)((function(e){return e.todo.dailyTotal[Object(v.a)()]||0}));return c.a.createElement("div",Object.assign({className:"h3 text-pink ".concat(t)},a),c.a.createElement("i",{className:"fas fa-history mr-3",style:{fontSize:".70em",opacity:".75"}}),n)};t.a=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row vh-100"},c.a.createElement("div",{className:"col-lg-7"},c.a.createElement("div",{className:"d-flex h-100 justify-content-center align-items-center"},c.a.createElement(u,null),c.a.createElement(b,null))),c.a.createElement("div",{className:"col-lg-4 d-flex flex-column justify-content-center"},c.a.createElement(E,{className:"mb-3",style:{marginTop:"-75px"}}),c.a.createElement(p.a,{outline:!0}),c.a.createElement(i,null)))))}},105:function(e,t,a){"use strict";a.d(t,"a",(function(){return N}));var n=a(0),c=a.n(n),r=a(61),o=a(69),l=Object(r.a)(o.a),i=a(62),s=a(9),u=a(28),m=a(35),d=a(16),f=c.a.createContext(),b=f.Provider,p=(f.Consumer,function(e){var t=e.children,a=e.className,r=(e.onClick,e.active),o=Object(d.a)(e,["children","className","onClick","active"]),l=Object(n.useContext)(f);return c.a.createElement("div",Object.assign({className:"collapse-item ".concat(r?"active":""," ").concat(a),onClick:l},o),t)}),v=function(e){var t=e.id,a=e.children,r=e.className,o=Object(d.a)(e,["id","children","className"]),l=Object(n.useState)(!1),i=Object(m.a)(l,2),s=i[0],u=i[1],f=Object(n.useState)(!1),p=Object(m.a)(f,2),v=p[0],E=p[1],g=Object(n.useState)(null),j=Object(m.a)(g,2),k=j[0],O=j[1];Object(n.useEffect)((function(){var e=document.querySelector("#".concat(t));e.addEventListener("transitionend",(function(){return E(!1)})),O(e)}),[]),Object(n.useEffect)((function(){if(k)if(s)k.style.width=k.scrollWidth+"px";else{var e=document.querySelector("#".concat(t," .collapse-item.active"));e&&(k.style.width=e.scrollWidth+"px")}}),[s]);return c.a.createElement(b,{value:function(){E(!0),u(!s)}},c.a.createElement("div",Object.assign({id:t,className:"collapse-nav pl-0 mb-0 ".concat(v?"collapsing":""," ").concat(s?"show":""," ").concat(r)},o),a))},E=a(12);var g=function(){var e=Object(s.c)((function(e){var t=e.todo;return{filter:t.filter,filterTypes:t.filterTypes}})),t=e.filter,a=e.filterTypes,n=Object(s.b)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{id:"todosFilterNav"},a.map((function(e,a){var r=t===e;return c.a.createElement(p,{key:a,active:r},c.a.createElement(E.a,{variant:"link",className:"p-0 ".concat(r?"":"opacity-weak"),onClick:function(){return t=e,n(Object(u.d)(t));var t}},e))}))))},j=a(98),k=a.n(j);a(120);var O=function(e){var t=e.className,a=void 0===t?"":t,r=Object(d.a)(e,["className"]),o=Object(n.useState)(new Date),l=Object(m.a)(o,2),i=l[0],s=l[1];return c.a.createElement(k.a,Object.assign({selected:i,onChange:s,className:"border-0 form-control ".concat(a)},r))};function N(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mt-8"},c.a.createElement("div",{className:"col-7"}),c.a.createElement("div",{className:"col-5 col-lg-4"},c.a.createElement(i.a,null),c.a.createElement("div",{className:"pb-3 d-flex align-items-center justify-content-between"},c.a.createElement(O,null),c.a.createElement(g,null)),c.a.createElement(l,null))))}},106:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(9),o=a(16),l=a(40),i=a(12),s=a(101),u=a(52),m=function(e){var t=e.rId,a=e.children,n=Object(r.b)();return c.a.createElement(l.a,{as:s.a,className:"mr-4 mb-3",style:{width:"160px"}},c.a.createElement(i.a,{variant:"outline-pink",block:!0,className:"text-left text-nowrap overflow-hidden"},c.a.createElement("i",{className:"far fa-bell mr-2 opacity-weak"}),a),c.a.createElement(l.a.Toggle,{split:!0,variant:"outline-pink",id:"ring-dropdown-split-basic"}),c.a.createElement(l.a.Menu,{alignRight:!0},c.a.createElement(l.a.Item,{onClick:function(){return n(Object(u.c)(t))}},"for work"),c.a.createElement(l.a.Divider,null),c.a.createElement(l.a.Item,{onClick:function(){return n(Object(u.b)(t))}},"for rest")))},d=function(e){var t=e.className,a=(Object(o.a)(e,["className"]),Object(r.c)((function(e){return e.ring.rings}))),n=Object.keys(a)||[];return c.a.createElement("ul",{className:"pl-0 ".concat(t)},n.map((function(e,t){return c.a.createElement(m,{key:t,rId:e},e)})))};t.a=function(){var e=Object(r.c)((function(e){return e.ring.workRing})),t=Object(r.c)((function(e){return e.ring.restRing}));return c.a.createElement("div",{className:"container pt-7"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("h1",{className:"mb-2 text-pink"},"Rings")),c.a.createElement("div",{className:"col pt-3"},c.a.createElement("div",{className:"d-flex mb-5"},c.a.createElement("div",{className:"mr-5"},c.a.createElement("h2",{className:"h5 mr-3 text-pink-light"},"work"),c.a.createElement(i.a,{variant:"link"},c.a.createElement("i",{className:"fas fa-bell fa-lg mr-2 opacity-weak align-baseline"}),c.a.createElement("span",{className:"h4"},e))),c.a.createElement("div",{className:"align-bottom"},c.a.createElement("h2",{className:"h5 mr-3 text-pink-light"},"rest"),c.a.createElement(i.a,{variant:"link"},c.a.createElement("i",{className:"fas fa-bell fa-lg mr-2 opacity-weak align-baseline"}),c.a.createElement("span",{className:"h4"},t)))),c.a.createElement(d,null))))}},107:function(e,t,a){e.exports=a(180)},116:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),o=a.n(r),l=a(9),i=a(21),s=a(17),u=a(28),m=a(20),d=a(52),f=Object(s.c)({todo:u.b,clock:m.c,ring:d.a});a(116);var b=a(95);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=function(e){return function(t){return function(){var a=e.getState();Object.keys(t).forEach((function(e){var n=t[e],c=JSON.stringify(n(a));localStorage.setItem(e,c)}))}}},v=Object(i.a)({reducer:f});v.subscribe(p(v)({todos:function(e){return e.todo.todos},daily_total:function(e){return e.todo.dailyTotal}})),o.a.render(c.a.createElement(l.a,{store:v},c.a.createElement(c.a.StrictMode,null,c.a.createElement(b.a,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return b})),a.d(t,"f",(function(){return g})),a.d(t,"d",(function(){return j})),a.d(t,"g",(function(){return k}));var n,c=a(19),r=a(83),o=a.n(r),l=a(94),i=a(21),s=null,u="WORK_TIMESUP",m="REST_TIMESUP",d=Object(i.b)(u),f=Object(i.b)(m),b=(Object(i.b)("COUNT_DOWM"),Object(i.c)("clock/start",function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.getState,c=a.dispatch,"running"!==n().clock.status){e.next=4;break}throw new Error;case 4:s=setInterval((function(){var e=n().clock;0===+e.time&&("work"===e.mode?c(d()):c(f())),c({type:"clock/countDown"})}),1e3);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())),p={work:5,rest:3},v=Object(i.d)({name:"clock",initialState:{mode:"work",modeTime:p,status:"stop ",time:p.work},reducers:{stop:{reducer:function(e,t){e.status="stop"},prepare:function(){return clearInterval(s),{}}},reset:{reducer:function(e,t){var a=e.mode,n=e.modeTime;e.time=n[a],e.status="stop"},prepare:function(){return clearInterval(s),{}}},toggleMode:function(e,t){var a=e.mode,n=e.modeTime,c="work"===a?"rest":"work";e.mode=c,e.time=n[c]},countDown:function(e,t){e.time-=1}},extraReducers:(n={},Object(c.a)(n,b.fulfilled,(function(e,t){e.status="running"})),Object(c.a)(n,u,(function(e,t){e.mode="rest",e.time=p.rest})),Object(c.a)(n,m,(function(e,t){e.mode="work",e.time=p.work})),n)}),E=v.actions,g=E.stop,j=E.reset,k=E.toggleMode;t.c=v.reducer},28:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return f})),a.d(t,"c",(function(){return b})),a.d(t,"d",(function(){return p}));var n=a(19),c=a(21),r=a(57),o=a(20),l=function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return!1}},i=Object(r.a)(),s=Object(c.d)({name:"todo",initialState:{todos:l("todos")||[],filter:"all",filterTypes:["all","undone","done"],dailyTotal:l("dailyTotal")||{}},reducers:{addTodo:{reducer:function(e,t){var a=t.payload,n=a.id,c=a.text;e.todos.unshift({id:n,text:c,completed:!1})},prepare:function(e){return{payload:{id:Math.floor(1e6*Math.random()),text:e}}}},toggleCompleted:function(e,t){var a=e.todos.find((function(e){return+e.id===+t.payload}));a.completed=!a.completed},updateTodo:function(e,t){var a=t.payload,n=a.id,c=a.text;e.todos.find((function(e){return+e.id===+n})).text=c},deleteTodo:function(e,t){var a=e.todos.filter((function(e){return+e.id!==+t.payload}));e.todos=a},setFilter:function(e,t){e.filter=t.payload}},extraReducers:Object(n.a)({},o.b,(function(e,t){e.dailyTotal[i]?e.dailyTotal[i]+=1:e.dailyTotal[i]=1}))}),u=s.actions,m=u.addTodo,d=u.toggleCompleted,f=u.updateTodo,b=u.deleteTodo,p=u.setFilter;t.b=s.reducer},52:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return u}));var n,c=a(19),r=a(21),o=a(20),l=Object(r.d)({name:"ring",initialState:{rings:{HalloWord:"asdsasd.sss",HalloWord1:"asdsasd.sss",HalloWord2:"asdsasd.sss",HalloWord3:"asdsasd.sss",HalloWord4:"asdsasd.sss"},restRing:"HalloWord",workRing:"HalloWord2"},reducers:{setRestRing:function(e,t){e.restRing=t.payload},setWorkRing:function(e,t){e.workRing=t.payload}},extraReducers:(n={},Object(c.a)(n,o.b,(function(e,t){})),Object(c.a)(n,o.a,(function(e,t){})),n)}),i=l.actions,s=i.setRestRing,u=i.setWorkRing;t.a=l.reducer},57:function(e,t,a){"use strict";t.a=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return"".concat(t,"-").concat(a,"-").concat(n)}},61:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(9),o=function(e){var t=e.todo;return"all"===t.filter?t.todos:"undone"===t.filter?t.todos.filter((function(e){return!e.completed})):t.todos.filter((function(e){return e.completed}))};t.a=function(e){return function(t){var a=Object.assign({},t),n=Object(r.c)(o);return c.a.createElement(e,Object.assign({todos:n},a))}}},62:function(e,t,a){"use strict";var n=a(35),c=a(0),r=a.n(c),o=a(9),l=a(28);t.a=function(e){var t=e.outline,a=Object(o.b)(),i=Object(c.useState)(""),s=Object(n.a)(i,2),u=s[0],m=s[1];return r.a.createElement("div",{className:"d-flex mb-3"},r.a.createElement("input",{type:"text",value:u,onChange:function(e){return m(e.target.value)},className:"form-control border-bottom py-0"}),r.a.createElement("button",{className:"ml-2 py-0 btn ".concat(t?"btn-outline-pink":"btn-pink text-white"," btn-sm flex-shrink-0"),onClick:function(e){""!==u&&(a(Object(l.a)(u)),m(""))},style:{height:"2.3em"}},"\u65b0\u589e"))}},69:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(9),o=a(28),l=a(16),i=a(12);function s(e){var t=e.text,a=e.completed,n=e.toggleCompleted,r=e.updateTodo,o=e.deleteTodo,s=Object(l.a)(e,["text","completed","toggleCompleted","updateTodo","deleteTodo"]);return c.a.createElement("li",Object.assign({className:"list-group-item d-flex align-items-center border-0"},s),c.a.createElement(i.a,{variant:"link",className:"".concat(a?"opacity-weak":""),onClick:n,style:{width:"5em"}},a?"done":"undone"),c.a.createElement("input",{variant:"link",type:"text",value:t,onChange:function(e){return r(e.target.value)},className:"mr-2 border-0 flex-grow-1 form-control ".concat(a?"opacity-weak":"")}),c.a.createElement(i.a,{variant:"link",onClick:o,className:a?"":"opacity-weak"},c.a.createElement("i",{className:"fas fa-times"})))}t.a=function(e){var t=e.todos,a=e.maxHeight,n=Object(r.b)();return c.a.createElement("ul",{className:"list-group scrollbar",style:{maxHeight:a||"360px"}},t.map((function(e){return c.a.createElement(s,{key:e.id,text:e.text,completed:e.completed,toggleCompleted:function(){return n(Object(o.e)(e.id))},updateTodo:(t=e.id,function(e){n(Object(o.f)({id:t,text:e}))}),deleteTodo:function(){return n(Object(o.c)(e.id))}});var t})))}},95:function(e,t,a){"use strict";(function(e){var n=a(0),c=a.n(n),r=a(102),o=a(45),l=a(22),i=a(96),s=a(104),u=a(105),m=a(106);t.a=Object(r.hot)(e)((function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,null,c.a.createElement(i.a,null),c.a.createElement("div",{className:"overflow-hidden",style:{marginRight:"60px"}},c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/report"},c.a.createElement(u.a,null)),c.a.createElement(l.a,{path:"/ring"},c.a.createElement(m.a,null)),c.a.createElement(l.a,{path:"/"},c.a.createElement(s.a,null))))))}))}).call(this,a(88)(e))},96:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(103),o=a(55),l=a(45);t.a=function(){return c.a.createElement(r.a,{bg:"pink",variant:"dark",className:"sidebar px-0 justify-content-center"},c.a.createElement(o.a,{className:"flex-column"},c.a.createElement(o.a.Link,{as:l.b,exact:!0,to:"/",className:"h4"},c.a.createElement("i",{className:"far fa-clock"})),c.a.createElement(o.a.Link,{as:l.b,to:"/report",className:"h4 mt-4"},c.a.createElement("i",{className:"fas fa-stream"})),c.a.createElement(o.a.Link,{as:l.b,to:"/ring",className:"h4 mt-4"},c.a.createElement("i",{className:"far fa-bell"}))))}}},[[107,1,2]]]);
//# sourceMappingURL=main.b66808e3.chunk.js.map