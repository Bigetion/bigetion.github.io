(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"564c8c4ff52cdb2e6d5a":function(e,t,n){"use strict";var o,a=n("8af190b70a6bc55c6f1b"),r=n.n(a),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("a28fc3c963a1d4d1a2e5"),l=n("e95a63b25fb92ed15721"),s=n("6542cd13fd5dd1bcffd4"),u=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,a){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+3];t.children=l}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),f(t,[{key:"render",value:function(){var e=this.props.location,t=[{name:"About Me",title:"Ady Suprianto",logo:"me.jpg",link:"/"},{name:"Project ID",title:"Project ID",logo:"projectID.png",link:"/project-id"},{name:"Google Search",title:"Google",logo:"google.png",link:"/google-search"},{name:"Google Translate",title:"Google Translate",logo:"google_translate.png",link:"/google-translate"},{name:"Google Trends",title:"Google Trends",logo:"google_trends.png",link:"/google-trends"},{name:"Liputan 6",title:"Liputan 6",logo:"liputan6.jpg",link:"/liputan6"},{name:"Youtube",title:"Youtube",logo:"youtube.png",link:"/youtube"}],n={};return t.forEach(function(t){t.link===e.pathname&&(n=t)}),u("div",{},void 0,u("section",{className:"hero hero-profile",style:{backgroundImage:"url('./assets/img/profile/profile-1.jpg')"}},void 0,u("div",{className:"overlay"}),u("div",{className:"container"},void 0,u("div",{className:"hero-block"},void 0,u("h5",{},void 0,n.title)))),u("section",{className:"toolbar toolbar-profile","data-fixed":"true"},void 0,u("div",{className:"container"},void 0,u("div",{className:"profile-avatar"},void 0,u("a",{href:"#"},void 0,u("img",{src:"./assets/img/logo/"+n.logo,alt:""})),u("div",{className:"sticky"},void 0,u("a",{href:"#"},void 0,u("img",{src:"./assets/img/logo/"+n.logo,alt:""})),u("div",{className:"profile-info"},void 0,u("h5",{},void 0,n.title)))),u("div",{className:"dropdown float-right hidden-lg-up"},void 0,u("a",{className:"btn btn-secondary btn-icon btn-sm m-l-25 float-right",href:"#","data-toggle":"dropdown",role:"button"},void 0,u("i",{className:"fa fa-bars"})," Menu"),u("div",{className:"dropdown-menu dropdown-menu-right"},void 0,t.map(function(e){return u(l.Link,{className:"dropdown-item",to:e.link},e.link,e.name)}))),u("ul",{className:"toolbar-nav hidden-md-down"},void 0,t.map(function(t){return u("li",{className:e.pathname==t.link?"active":""},t.link,u(l.Link,{to:t.link},void 0,t.name))})))),u("section",{className:"p-y-30"},void 0,u("div",{className:"container"},void 0,u("div",{className:"row"},void 0,u("div",{className:"col-lg-12"},void 0,this.props.children)))))}}]),t}(),p=Object(c.b)({location:Object(s.b)()});t.a=Object(i.connect)(p,function(e){return{}})(d)},"745531522372311f22bf":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("bd183afcc37eabd79225"),a=n.n(o),r="https://bigetion-api.herokuapp.com/";function i(e,t){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=localStorage.getItem("token"),i={headers:{"Content-Type":"application/json"}};o&&(i.headers=Object.assign(i.headers,{Authorization:"Bearer "+o}));var c=r+t;return new Promise(function(t,o){"GET"===e?a.a.get(c,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?o(t.data):o()}):"POST"===e?a.a.post(c,n,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?o(t.data):o()}):"DELETE"===e?a.a.delete(c,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?o(t.data):o()}):"PUT"===e?a.a.put(c,n,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?o(t.data):o()}):"PATCH"===e&&a.a.patch(c,n,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?o(t.data):o()})})}("POST",e,t)}},"8148f19a86e30d073f4e":function(e,t,n){"use strict";var o,a=n("8af190b70a6bc55c6f1b"),r=n.n(a),i=(n("8a2d1b95e05b6a321e74"),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,a){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+3];t.children=l}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.call(n),n.state={isLoading:!0,isError:!1,src:null,errMsg:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),c(t,[{key:"componentWillReceiveProps",value:function(e){this.props.src!==e.src&&this.reload(e)}},{key:"componentDidMount",value:function(){this.reload(this.props)}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.error,o=e.image,a=e.style,r=e.className,c=e.alt,l=e.width,s=e.height,u=this.state,f=u.src,d=u.isLoading,p=u.isError,b=u.errMsg;return t&&d?t():n&&p&&b?n(b):f&&o?o({src:f,width:l,height:s}):f?i("img",l||s?{src:f,style:a,className:r,width:l,height:s,alt:c}:{src:f,style:a,className:r,alt:c}):null}}]),t}(),s=function(){var e=this;this.reload=function(t){e.setState({isLoading:!0,isError:!1,src:null,errMsg:null});var n=new Image;n.src=t.src,n.onload=function(){e.setState({src:n.src,isLoading:!1,isError:!1,errMsg:null}),t.onLoad&&t.onLoad(n)},n.onerror=function(n){e.setState({src:null,isLoading:!1,isError:!0,errMsg:n}),t.onError&&t.onError(n)}}};t.a=l},"9655914107fe44b7cb00":function(e,t,n){"use strict";function o(){!function(e,t){for(var n=document.getElementById(e);n.childNodes.length>0;)n.removeChild(n.childNodes[0]);t.forEach(function(e){var t=document.createElement("script");t.setAttribute("src",e),t.setAttribute("type","text/javascript"),n.appendChild(t)})}("scripts",["./assets/js/theme.min.js"])}n.d(t,"a",function(){return o})},a43d99cc1e16b8f29170:function(e,t,n){"use strict";var o=n("8af190b70a6bc55c6f1b"),a=n.n(o),r=n("8a2d1b95e05b6a321e74"),i=n.n(r),c=n("5ef9de3df8d92ea0e41c"),l=n.n(c),s=n("a1cf5d6fa4ed65a6ddd5"),u=n.n(s),f=(n("f3b0ff1628e56352bcbf"),n("5fa3f8487e09c6182715")),d=n.n(f),p=n("6a4f9c383785f9168266"),b=n.n(p),v=(n("f2873ecf7390fe7d7c89"),n("cc13decd9f9c09598c2f")),m=function(e){return b()(d()(e)&&!u()(e),"(app/utils...) injectMiddleware: Expected `key` to be a non empty string")};function h(e){return Object(v.a)(e),{injectMiddleware:function(e,t){return function(n,o){t||Object(v.a)(e),m(n),Reflect.has(e.injectedMiddlewares,n)||(e.injectedMiddlewares[n]=o,window.eventEmitter.emit("onInjectedMiddlewares",e.injectedMiddlewares))}}(e,!0)}}var y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,n=e.middleware;return function(e){var o=function(o){function r(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=n=g(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),n.injectors=h(n.context.store),g(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,a.a.Component),y(r,[{key:"componentWillMount",value:function(){(0,this.injectors.injectMiddleware)(t,n)}},{key:"render",value:function(){return a.a.createElement(e,this.props)}}]),r}();return o.WrappedComponent=e,o.contextTypes={store:i.a.object.isRequired},o.displayName="withMiddleware("+(e.displayName||e.name||"Component")+")",l()(o,e)}}},ba3e41da538f822d42a1:function(e,t,n){"use strict";n.r(t);var o=n("8af190b70a6bc55c6f1b"),a=n.n(o),r=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),i=n("0d7f0986bcd2f33d8a2a"),c=n("a28fc3c963a1d4d1a2e5"),l=n("ab4cb61bcb2dc161defb"),s=n("a1a9ae00f1789571650d"),u=n.n(s),f=n("564c8c4ff52cdb2e6d5a"),d=n("8148f19a86e30d073f4e"),p=n("9655914107fe44b7cb00"),b=n("d95b0cf107403b178365"),v=n("a43d99cc1e16b8f29170"),m=n("54f683fcda7806277002"),h="Liputan6/DEFAULT_DATA",y="Liputan6/GET_DATA",g="Liputan6/GET_DATA_SUCCESS",w=Object(m.fromJS)({});var j=n("745531522372311f22bf"),O={onDefaultAction:function(e){var t=e.dispatch;return function(e){return function(n){e(n),"Liputan6/DEFAULT_ACTION"===n.type&&t({type:h,payload:n.payload})}}},onGetData:function(e){var t=e.dispatch;return function(e){return function(n){e(n),n.type===y&&Object(j.a)("webscrap/liputan6?category="+n.payload).then(function(e){t({type:g,payload:e.data})})}}}},N=Object(b.a)({key:"liputan6",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments[1];switch(t.type){case h:return e.set("defaultData",t.payload);case y:return e.set("isLoading",!0);case g:return e.set("isLoading",!1).set("liputan6Data",t.payload);default:return e}}}),k=Object(v.a)({key:"liputan6",middleware:O}),_=n("9c772359e08e81b5b3ba"),E=n.n(_),T=function(e){return e.get("liputan6",w)},L=function(e){return Object(c.a)(T,function(t){return E.a.isUndefined(e)||E.a.isNull(e)||""===e?t.toJS():t.get(e)})};n.d(t,"Liputan6",function(){return D});var S,P=(S="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var a=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===r)t.children=o;else if(r>1){for(var c=Array(r),l=0;l<r;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:S,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var D=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={category:"news"},n.getData(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),C(t,[{key:"componentWillMount",value:function(){this.props.defaultAction("This is Liputan6 default data")}},{key:"componentDidMount",value:function(){Object(p.a)()}},{key:"getData",value:function(e){this.props.getData(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.isLoading,o=t.liputan6Data,a=void 0===o?[]:o,r=this.state.category;return P(f.a,{},void 0,P(i.Helmet,{},void 0,P("title",{},void 0,"Liputan6"),P("meta",{name:"description",content:"Description of Liputan6"})),P("h5",{className:"forum-headline"},void 0,"Liputan 6",P("span",{},void 0,"List of updated Liputan 6 news")),!n&&P("button",{className:"btn btn-default hidden-md-down",onClick:function(){e.getData()},style:{position:"absolute",right:15,top:5}},void 0,"Reload ",P("i",{className:"fa fa-refresh"})),!n&&P("div",{className:"row"},void 0,P("div",{className:"col-md-12"},void 0,P("button",{className:"btn btn-default hidden-md-up m-b-10 float-right",onClick:function(){e.getData()}},void 0,"Reload ",P("i",{className:"fa fa-refresh"})))),!n&&P("div",{className:"row"},void 0,P("div",{className:"col-md-12"},void 0,P("div",{className:"card"},void 0,P("div",{className:"card-body"},void 0,P("span",{className:"font-weight-bold"},void 0,"Select Category"),P("hr",{className:"m-t-5",style:{border:"0.5px dashed #CECECE"}}),[{id:"news",label:"News"},{id:"bisnis",label:"Bisnis"},{id:"bola",label:"Bola"},{id:"showbiz",label:"Showbiz"},{id:"health",label:"Health"},{id:"lifestyle",label:"Lifestyle"},{id:"tekno",label:"Teknologi"},{id:"otomotif",label:"Otomotif"},{id:"tv",label:"TV"}].map(function(t){return P("button",{className:"m-a-5 btn "+(r===t.id?"btn-primary":"btn-default"),onClick:function(){e.setState({category:t.id}),e.getData(t.id)}},t.id,t.label)}))))),!n&&P("div",{className:"row"},void 0,a.map(function(e){return P("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12"},e.link,P("div",{className:"card card-lg"},void 0,P("div",{className:"card-img"},void 0,P("a",{href:e.link,target:"_blank"},void 0,P(d.a,{src:e.thumbnail,loading:function(){return P("div",{className:"p-a-20"},void 0,P(u.a,{show:!0,name:"circle",color:"orange"}))},className:"card-img-top",alt:""}))),P("div",{className:"card-block p-x-15 p-y-10"},void 0,P("h4",{className:"card-title"},void 0,P("a",{href:e.link,target:"_blank"},void 0,e.title)),P("p",{className:"p-t-10 font-weight-bold"},void 0,P("small",{},void 0,e.date)))))})),n&&P("div",{className:"p-a-50"},void 0,P("p",{className:"text-center m-b-30"},void 0,"Loading data.."),P(u.a,{show:!0,name:"ball-clip-rotate-multiple",color:"orange"}),P("div",{className:"m-b-100"})),P("div",{id:"scripts"}))}}]),t}(),A=Object(c.b)({defaultData:L("defaultData"),liputan6Data:L("liputan6Data"),isLoading:L("isLoading")});t.default=Object(l.compose)(N,k,Object(r.connect)(A,function(e){return{defaultAction:function(t){return e(function(e){return{type:"Liputan6/DEFAULT_ACTION",payload:e}}(t))},getData:function(t){return e(function(e){return{type:y,payload:e}}(t))}}}))(D)},cc13decd9f9c09598c2f:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o=n("f2873ecf7390fe7d7c89"),a=n.n(o),r=n("f3b0ff1628e56352bcbf"),i=n.n(r),c=n("d3a850c4000d77bccc89"),l=n.n(c),s=n("6a4f9c383785f9168266"),u=n.n(s);function f(e){var t={dispatch:i.a,subscribe:i.a,getState:i.a,replaceReducer:i.a,runSaga:i.a,injectedReducers:l.a,injectedSagas:l.a,injectedMiddlewares:l.a};u()(a()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,t,n){"use strict";var o=n("8af190b70a6bc55c6f1b"),a=n.n(o),r=n("8a2d1b95e05b6a321e74"),i=n.n(r),c=n("5ef9de3df8d92ea0e41c"),l=n.n(c),s=n("6a4f9c383785f9168266"),u=n.n(s),f=n("a1cf5d6fa4ed65a6ddd5"),d=n.n(f),p=n("f3b0ff1628e56352bcbf"),b=n.n(p),v=n("5fa3f8487e09c6182715"),m=n.n(v),h=n("cc13decd9f9c09598c2f"),y=n("491cc2e27aa2b4221847");function g(e){return Object(h.a)(e),{injectReducer:function(e,t){return function(n,o){t||Object(h.a)(e),u()(m()(n)&&!d()(n)&&b()(o),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===o||(e.injectedReducers[n]=o,e.replaceReducer(Object(y.a)(e.injectedReducers)))}}(e,!0)}}var w=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,n=e.reducer;return function(e){var o=function(o){function r(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=n=j(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),n.injectors=g(n.context.store),j(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,a.a.Component),w(r,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(t,n)}},{key:"render",value:function(){return a.a.createElement(e,this.props)}}]),r}();return o.WrappedComponent=e,o.contextTypes={store:i.a.object.isRequired},o.displayName="withReducer("+(e.displayName||e.name||"Component")+")",l()(o,e)}}}}]);