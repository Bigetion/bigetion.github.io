(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"090f882ccb3fa83a1803":function(e,t,n){"use strict";n.r(t);var o=n("8af190b70a6bc55c6f1b"),a=n.n(o),r=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),i=n("0d7f0986bcd2f33d8a2a"),c=n("a28fc3c963a1d4d1a2e5"),l=n("ab4cb61bcb2dc161defb"),u=n("a1a9ae00f1789571650d"),s=n.n(u),f=n("564c8c4ff52cdb2e6d5a"),d=n("9655914107fe44b7cb00"),p=n("d95b0cf107403b178365"),b=n("a43d99cc1e16b8f29170"),h=n("54f683fcda7806277002"),v="GoogleSearch/DEFAULT_DATA",m="GoogleSearch/GET_DATA",g="GoogleSearch/GET_DATA_SUCCESS",y=Object(h.fromJS)({});var j=n("745531522372311f22bf"),w={onDefaultAction:function(e){var t=e.dispatch;return function(e){return function(n){e(n),"GoogleSearch/DEFAULT_ACTION"===n.type&&t({type:v,payload:n.payload})}}},onGetData:function(e){var t=e.dispatch;return function(e){return function(n){e(n),n.type===m&&Object(j.a)("https://bigetion-app-api.herokuapp.com/webscrap/googlesearch?q="+n.payload).then(function(e){t({type:g,payload:e.data})})}}}},O=Object(p.a)({key:"googleSearch",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments[1];switch(t.type){case v:return e.set("defaultData",t.payload);case m:return e.set("isLoading",!0);case g:return e.set("isLoading",!1).set("googleSearchData",t.payload);default:return e}}}),k=Object(b.a)({key:"googleSearch",middleware:w}),N=n("9c772359e08e81b5b3ba"),S=n.n(N),_=function(e){return e.get("googleSearch",y)},E=function(e){return Object(c.a)(_,function(t){return S.a.isUndefined(e)||S.a.isNull(e)||""===e?t.toJS():t.get(e)})};n.d(t,"GoogleSearch",function(){return x});var T,P=(T="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var a=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===r)t.children=o;else if(r>1){for(var c=Array(r),l=0;l<r;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:T,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),D=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var x=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.searchTextInput=null,n.state={q:"",isLoaded:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),D(t,[{key:"componentDidMount",value:function(){Object(d.a)(),this.searchTextInput.focus()}},{key:"getData",value:function(){var e=this.state.q;""!==e.trim()?(this.setState({isLoaded:!0}),this.props.getData(e)):this.searchTextInput.focus()}},{key:"render",value:function(){var e=this,t=this.state,n=t.q,o=t.isLoaded,r=this.props,c=r.isLoading,l=r.googleSearchData,u=void 0===l?[]:l;return P(f.a,{},void 0,P(i.Helmet,{},void 0,P("title",{},void 0,"Google Search"),P("meta",{name:"description",content:"Description of GoogleSearch"})),P("h5",{className:"forum-headline"},void 0,"Google Search",P("span",{},void 0,"Feature of google search engine")),P("div",{className:"row m-b-20"},void 0,P("div",{className:"col-md-12"},void 0,P("div",{className:"input-group"},void 0,a.a.createElement("input",{className:"form-control",placeholder:"",ref:function(t){e.searchTextInput=t},onKeyPress:function(t){"Enter"===t.key&&e.getData()},value:n,onChange:function(t){return e.setState({q:t.target.value})}}),P("span",{className:"input-group-btn m-l-5"},void 0,!c&&P("button",{className:"btn btn-primary",type:"button",onClick:function(){return e.getData()}},void 0,"Search"),c&&P("button",{className:"btn btn-primary disabled",type:"button"},void 0,"Searching..."))))),!c&&P("div",{className:"forum m-b-50",style:{display:o?"":"none"}},void 0,u.map(function(e){return P("div",{className:"forum-group"},e.link,P("div",{className:"forum-row bg-white"},void 0,P("div",{className:"forum-title",style:{width:"90%",display:"table-cell",position:"relative"}},void 0,P("h4",{className:"text-primary"},void 0,P("a",{className:"",href:e.link,target:"_blank"},void 0,e.title.replace(/[^\x20-\x7E]/g,""))),P("p",{style:{color:"#006621"}},void 0,e.link.length>50?e.link.substring(0,50)+"...":e.link))))})),c&&P("div",{className:"p-a-50"},void 0,P("p",{className:"text-center m-b-30"},void 0,"Please wait.."),P(s.a,{show:!0,name:"ball-clip-rotate-multiple",color:"orange"}),P("div",{className:"m-b-100"})),!o&&P("div",{style:{height:230}}),P("div",{id:"scripts"}))}}]),t}(),C=Object(c.b)({isLoading:E("isLoading"),googleSearchData:E("googleSearchData")});t.default=Object(l.compose)(O,k,Object(r.connect)(C,function(e){return{getData:function(t){return e(function(e){return{type:m,payload:e}}(t))}}}))(x)},"564c8c4ff52cdb2e6d5a":function(e,t,n){"use strict";var o,a=n("8af190b70a6bc55c6f1b"),r=n.n(a),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("a28fc3c963a1d4d1a2e5"),l=n("e95a63b25fb92ed15721"),u=n("6542cd13fd5dd1bcffd4"),s=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,a){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),f(t,[{key:"render",value:function(){var e=this.props.location,t=[{name:"About Me",title:"Ady Suprianto",logo:"me.jpg",link:"/"},{name:"Project ID",title:"Project ID",logo:"projectID.png",link:"/project-id"},{name:"Google Search",title:"Google",logo:"google.png",link:"/google-search"},{name:"Google Translate",title:"Google Translate",logo:"google_translate.png",link:"/google-translate"},{name:"Google Trends",title:"Google Trends",logo:"google_trends.png",link:"/google-trends"},{name:"Liputan 6",title:"Liputan 6",logo:"liputan6.jpg",link:"/liputan6"},{name:"Youtube",title:"Youtube",logo:"youtube.png",link:"/youtube"}],n={};return t.forEach(function(t){t.link===e.pathname&&(n=t)}),s("div",{},void 0,s("section",{className:"hero hero-profile",style:{backgroundImage:"url('./assets/img/profile/profile-1.jpg')"}},void 0,s("div",{className:"overlay"}),s("div",{className:"container"},void 0,s("div",{className:"hero-block"},void 0,s("h5",{},void 0,n.title)))),s("section",{className:"toolbar toolbar-profile","data-fixed":"true"},void 0,s("div",{className:"container"},void 0,s("div",{className:"profile-avatar"},void 0,s("a",{href:"#"},void 0,s("img",{src:"./assets/img/logo/"+n.logo,alt:""})),s("div",{className:"sticky"},void 0,s("a",{href:"#"},void 0,s("img",{src:"./assets/img/logo/"+n.logo,alt:""})),s("div",{className:"profile-info"},void 0,s("h5",{},void 0,n.title)))),s("div",{className:"dropdown float-right hidden-lg-up"},void 0,s("a",{className:"btn btn-secondary btn-icon btn-sm m-l-25 float-right",href:"#","data-toggle":"dropdown",role:"button"},void 0,s("i",{className:"fa fa-bars"})," Menu"),s("div",{className:"dropdown-menu dropdown-menu-right"},void 0,t.map(function(e){return s(l.Link,{className:"dropdown-item",to:e.link},e.link,e.name)}))),s("ul",{className:"toolbar-nav hidden-md-down"},void 0,t.map(function(t){return s("li",{className:e.pathname==t.link?"active":""},t.link,s(l.Link,{to:t.link},void 0,t.name))})))),s("section",{className:"p-y-30"},void 0,s("div",{className:"container"},void 0,s("div",{className:"row"},void 0,s("div",{className:"col-lg-12"},void 0,this.props.children)))))}}]),t}(),p=Object(c.b)({location:Object(u.b)()});t.a=Object(i.connect)(p,function(e){return{}})(d)},"745531522372311f22bf":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("bd183afcc37eabd79225"),a=n.n(o),r="";function i(e,t){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=localStorage.getItem("token"),i={headers:{"Content-Type":"application/json"}};o&&(i.headers=Object.assign(i.headers,{Authorization:"Bearer "+o}));var c=r+t;return new Promise(function(t,o){"GET"===e?a.a.get(c,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?o(t.data):o()}):"POST"===e?a.a.post(c,n,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?o(t.data):o()}):"DELETE"===e?a.a.delete(c,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?o(t.data):o()}):"PUT"===e?a.a.put(c,n,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?o(t.data):o()}):"PATCH"===e&&a.a.patch(c,n,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?o(t.data):o()})})}("POST",e,t)}},"9655914107fe44b7cb00":function(e,t,n){"use strict";function o(){!function(e,t){for(var n=document.getElementById(e);n.childNodes.length>0;)n.removeChild(n.childNodes[0]);t.forEach(function(e){var t=document.createElement("script");t.setAttribute("src",e),t.setAttribute("type","text/javascript"),n.appendChild(t)})}("scripts",["./assets/js/theme.min.js"])}n.d(t,"a",function(){return o})},a43d99cc1e16b8f29170:function(e,t,n){"use strict";var o=n("8af190b70a6bc55c6f1b"),a=n.n(o),r=n("8a2d1b95e05b6a321e74"),i=n.n(r),c=n("5ef9de3df8d92ea0e41c"),l=n.n(c),u=n("a1cf5d6fa4ed65a6ddd5"),s=n.n(u),f=(n("f3b0ff1628e56352bcbf"),n("5fa3f8487e09c6182715")),d=n.n(f),p=n("6a4f9c383785f9168266"),b=n.n(p),h=(n("f2873ecf7390fe7d7c89"),n("cc13decd9f9c09598c2f")),v=function(e){return b()(d()(e)&&!s()(e),"(app/utils...) injectMiddleware: Expected `key` to be a non empty string")};function m(e){return Object(h.a)(e),{injectMiddleware:function(e,t){return function(n,o){t||Object(h.a)(e),v(n),Reflect.has(e.injectedMiddlewares,n)||(e.injectedMiddlewares[n]=o,window.eventEmitter.emit("onInjectedMiddlewares",e.injectedMiddlewares))}}(e,!0)}}var g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,n=e.middleware;return function(e){var o=function(o){function r(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=n=y(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),n.injectors=m(n.context.store),y(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,a.a.Component),g(r,[{key:"componentWillMount",value:function(){(0,this.injectors.injectMiddleware)(t,n)}},{key:"render",value:function(){return a.a.createElement(e,this.props)}}]),r}();return o.WrappedComponent=e,o.contextTypes={store:i.a.object.isRequired},o.displayName="withMiddleware("+(e.displayName||e.name||"Component")+")",l()(o,e)}}},cc13decd9f9c09598c2f:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o=n("f2873ecf7390fe7d7c89"),a=n.n(o),r=n("f3b0ff1628e56352bcbf"),i=n.n(r),c=n("d3a850c4000d77bccc89"),l=n.n(c),u=n("6a4f9c383785f9168266"),s=n.n(u);function f(e){var t={dispatch:i.a,subscribe:i.a,getState:i.a,replaceReducer:i.a,runSaga:i.a,injectedReducers:l.a,injectedSagas:l.a,injectedMiddlewares:l.a};s()(a()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,t,n){"use strict";var o=n("8af190b70a6bc55c6f1b"),a=n.n(o),r=n("8a2d1b95e05b6a321e74"),i=n.n(r),c=n("5ef9de3df8d92ea0e41c"),l=n.n(c),u=n("6a4f9c383785f9168266"),s=n.n(u),f=n("a1cf5d6fa4ed65a6ddd5"),d=n.n(f),p=n("f3b0ff1628e56352bcbf"),b=n.n(p),h=n("5fa3f8487e09c6182715"),v=n.n(h),m=n("cc13decd9f9c09598c2f"),g=n("491cc2e27aa2b4221847");function y(e){return Object(m.a)(e),{injectReducer:function(e,t){return function(n,o){t||Object(m.a)(e),s()(v()(n)&&!d()(n)&&b()(o),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===o||(e.injectedReducers[n]=o,e.replaceReducer(Object(g.a)(e.injectedReducers)))}}(e,!0)}}var j=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,n=e.reducer;return function(e){var o=function(o){function r(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=n=w(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),n.injectors=y(n.context.store),w(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,a.a.Component),j(r,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(t,n)}},{key:"render",value:function(){return a.a.createElement(e,this.props)}}]),r}();return o.WrappedComponent=e,o.contextTypes={store:i.a.object.isRequired},o.displayName="withReducer("+(e.displayName||e.name||"Component")+")",l()(o,e)}}}}]);