(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"564c8c4ff52cdb2e6d5a":function(e,t,n){"use strict";var a,o=n("8af190b70a6bc55c6f1b"),r=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("a28fc3c963a1d4d1a2e5"),l=n("e95a63b25fb92ed15721"),s=n("6542cd13fd5dd1bcffd4"),u=(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+3];t.children=l}return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),f(t,[{key:"render",value:function(){var e=this.props.location,t=[{name:"About Me",title:"Ady Suprianto",logo:"me.jpg",link:"/"},{name:"Project ID",title:"Project ID",logo:"projectID.png",link:"/project-id"},{name:"Google Search",title:"Google",logo:"google.png",link:"/google-search"},{name:"Google Translate",title:"Google Translate",logo:"google_translate.png",link:"/google-translate"},{name:"Google Trends",title:"Google Trends",logo:"google_trends.png",link:"/google-trends"},{name:"Liputan 6",title:"Liputan 6",logo:"liputan6.jpg",link:"/liputan6"},{name:"Youtube",title:"Youtube",logo:"youtube.png",link:"/youtube"}],n={};return t.forEach(function(t){t.link===e.pathname&&(n=t)}),u("div",{},void 0,u("section",{className:"hero hero-profile",style:{backgroundImage:"url('./assets/img/profile/profile-1.jpg')"}},void 0,u("div",{className:"overlay"}),u("div",{className:"container"},void 0,u("div",{className:"hero-block"},void 0,u("h5",{},void 0,n.title)))),u("section",{className:"toolbar toolbar-profile","data-fixed":"true"},void 0,u("div",{className:"container"},void 0,u("div",{className:"profile-avatar"},void 0,u("a",{href:"#"},void 0,u("img",{src:"./assets/img/logo/"+n.logo,alt:""})),u("div",{className:"sticky"},void 0,u("a",{href:"#"},void 0,u("img",{src:"./assets/img/logo/"+n.logo,alt:""})),u("div",{className:"profile-info"},void 0,u("h5",{},void 0,n.title)))),u("div",{className:"dropdown float-right hidden-lg-up"},void 0,u("a",{className:"btn btn-secondary btn-icon btn-sm m-l-25 float-right",href:"#","data-toggle":"dropdown",role:"button"},void 0,u("i",{className:"fa fa-bars"})," Menu"),u("div",{className:"dropdown-menu dropdown-menu-right"},void 0,t.map(function(e){return u(l.Link,{className:"dropdown-item",to:e.link},e.link,e.name)}))),u("ul",{className:"toolbar-nav hidden-md-down"},void 0,t.map(function(t){return u("li",{className:e.pathname==t.link?"active":""},t.link,u(l.Link,{to:t.link},void 0,t.name))})))),u("section",{className:"p-y-30"},void 0,u("div",{className:"container"},void 0,u("div",{className:"row"},void 0,u("div",{className:"col-lg-12"},void 0,this.props.children)))))}}]),t}(),p=Object(c.b)({location:Object(s.b)()});t.a=Object(i.connect)(p,function(e){return{}})(d)},"745531522372311f22bf":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("bd183afcc37eabd79225"),o=n.n(a),r="https://bigetion-api.herokuapp.com/";function i(e,t){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=localStorage.getItem("token"),i={headers:{"Content-Type":"application/json"}};a&&(i.headers=Object.assign(i.headers,{Authorization:"Bearer "+a}));var c=r+t;return new Promise(function(t,a){"GET"===e?o.a.get(c,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?a(t.data):a()}):"POST"===e?o.a.post(c,n,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?a(t.data):a()}):"DELETE"===e?o.a.delete(c,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?a(t.data):a()}):"PUT"===e?o.a.put(c,n,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?a(t.data):a()}):"PATCH"===e&&o.a.patch(c,n,i).then(function(e){t(e.data)}).catch(function(e){var t=e.response;t?a(t.data):a()})})}("POST",e,t)}},"9655914107fe44b7cb00":function(e,t,n){"use strict";function a(){!function(e,t){for(var n=document.getElementById(e);n.childNodes.length>0;)n.removeChild(n.childNodes[0]);t.forEach(function(e){var t=document.createElement("script");t.setAttribute("src",e),t.setAttribute("type","text/javascript"),n.appendChild(t)})}("scripts",["./assets/js/theme.min.js"])}n.d(t,"a",function(){return a})},a43d99cc1e16b8f29170:function(e,t,n){"use strict";var a=n("8af190b70a6bc55c6f1b"),o=n.n(a),r=n("8a2d1b95e05b6a321e74"),i=n.n(r),c=n("5ef9de3df8d92ea0e41c"),l=n.n(c),s=n("a1cf5d6fa4ed65a6ddd5"),u=n.n(s),f=(n("f3b0ff1628e56352bcbf"),n("5fa3f8487e09c6182715")),d=n.n(f),p=n("6a4f9c383785f9168266"),b=n.n(p),h=(n("f2873ecf7390fe7d7c89"),n("cc13decd9f9c09598c2f")),v=function(e){return b()(d()(e)&&!u()(e),"(app/utils...) injectMiddleware: Expected `key` to be a non empty string")};function g(e){return Object(h.a)(e),{injectMiddleware:function(e,t){return function(n,a){t||Object(h.a)(e),v(n),Reflect.has(e.injectedMiddlewares,n)||(e.injectedMiddlewares[n]=a,window.eventEmitter.emit("onInjectedMiddlewares",e.injectedMiddlewares))}}(e,!0)}}var m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,n=e.middleware;return function(e){var a=function(a){function r(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=n=y(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(o))),n.injectors=g(n.context.store),y(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,o.a.Component),m(r,[{key:"componentWillMount",value:function(){(0,this.injectors.injectMiddleware)(t,n)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}]),r}();return a.WrappedComponent=e,a.contextTypes={store:i.a.object.isRequired},a.displayName="withMiddleware("+(e.displayName||e.name||"Component")+")",l()(a,e)}}},c71d227d12fb47acc75c:function(e,t,n){"use strict";n.r(t);var a,o=n("8af190b70a6bc55c6f1b"),r=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("0d7f0986bcd2f33d8a2a"),l=n("a28fc3c963a1d4d1a2e5"),s=n("ab4cb61bcb2dc161defb"),u=n("a1a9ae00f1789571650d"),f=n.n(u),d=n("564c8c4ff52cdb2e6d5a"),p=(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+3];t.children=l}return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),b=function(e){var t=e.pageClassName,n=e.pageLinkClassName,a=e.onClick,o=e.href,r="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",r="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName),p("li",{className:t},void 0,p("a",{onClick:a,role:"button",className:n,href:o,tabIndex:"0","aria-label":r,"aria-current":i,onKeyPress:a},void 0,e.page))},h=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,a,o){var r=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&r)for(var c in r)void 0===n[c]&&(n[c]=r[c]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+3];n.children=l}return{$$typeof:e,type:t,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}}(),v=function(e){var t=e.breakLabel,n=e.breakClassName||"break";return h("li",{className:n},void 0,t)},g=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,a,o){var r=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&r)for(var c in r)void 0===n[c]&&(n[c]=r[c]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+3];n.children=l}return{$$typeof:e,type:t,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}}(),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},n.handlePreviousPage=n.handlePreviousPage.bind(n),n.handlePageSelected=n.handlePageSelected.bind(n),n.handleNextPage=n.handleNextPage.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),m(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,n=e.disableInitialCallback;void 0===t||n||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"handlePreviousPage",value:function(e){var t=this.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&this.handlePageSelected(t-1,e)}},{key:"handleNextPage",value:function(e){var t=this.state.selected,n=this.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&this.handlePageSelected(t+1,e)}},{key:"handlePageSelected",value:function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,this.state.selected!==e&&(this.setState({selected:e}),this.callCallback(e))}},{key:"hrefBuilder",value:function(e){var t=this.props,n=t.hrefBuilder,a=t.pageCount;if(n&&e!==this.state.selected&&e>=0&&e<a)return n(e+1)}},{key:"callCallback",value:function(e){void 0!==this.props.onPageChange&&"function"==typeof this.props.onPageChange&&this.props.onPageChange({selected:e})}},{key:"getPageElement",value:function(e){var t=this.state.selected,n=this.props,a=n.pageClassName,o=n.pageLinkClassName,r=n.activeClassName,i=n.extraAriaContext;return g(b,{onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:a,pageLinkClassName:o,activeClassName:r,extraAriaContext:i,href:this.hrefBuilder(e),page:e+1},e)}},{key:"pagination",value:function(){var e=this,t=[],n=this.props,a=n.pageRangeDisplayed,o=n.pageCount,r=n.marginPagesDisplayed,i=n.breakLabel,c=n.breakClassName,l=this.state.selected;if(o<=a)for(var s=0;s<o;s++)t.push(this.getPageElement(s));else{var u=a/2,f=a-u;l>o-a/2?u=a-(f=o-l):l<a/2&&(f=a-(u=l));var d=void 0,p=void 0,b=void 0,h=function(t){return e.getPageElement(t)};for(d=0;d<o;d++)(p=d+1)<=r?t.push(h(d)):p>o-r?t.push(h(d)):d>=l-u&&d<=l+f?t.push(h(d)):i&&t[t.length-1]!==b&&(b=g(v,{breakLabel:i,breakClassName:c},d),t.push(b))}return t}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,n=e.previousClassName,a=e.nextClassName,o=e.pageCount,r=e.containerClassName,i=e.previousLinkClassName,c=e.previousLabel,l=e.nextLinkClassName,s=e.nextLabel,u=this.state.selected,f=a+(u===o-1?" "+t:"");return g("ul",{className:r},void 0,g("li",{className:n+(0===u?" "+t:"")},void 0,g("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(u-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},void 0,c)),this.pagination(),g("li",{className:f},void 0,g("a",{onClick:this.handleNextPage,className:l,href:this.hrefBuilder(u+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},void 0,s)))}}]),t}();y.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link pointer",activeClassName:"active",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link pointer",nextLinkClassName:"page-link pointer",previousLabel:g("i",{className:"fa fa-angle-left"}),nextLabel:g("i",{className:"fa fa-angle-right"}),breakLabel:g("span",{className:"page-link pointer"},void 0,"..."),breakClassName:"page-item disabled",disabledClassName:"disabled",disableInitialCallback:!1};var P=y,j=n("9655914107fe44b7cb00"),k=n("d95b0cf107403b178365"),N=n("a43d99cc1e16b8f29170"),w=n("54f683fcda7806277002"),C="ProjectIdPage/DEFAULT_DATA",O="ProjectIdPage/GET_DATA",_="ProjectIdPage/GET_DATA_SUCCESS",S=Object(w.fromJS)({});var x=n("745531522372311f22bf"),E={onDefaultAction:function(e){var t=e.dispatch;return function(e){return function(n){e(n),"ProjectIdPage/DEFAULT_ACTION"===n.type&&t({type:C,payload:n.payload})}}},onGetData:function(e){var t=e.dispatch;return function(e){return function(n){e(n),n.type===O&&Object(x.a)("webscrap/projectId?page="+n.payload).then(function(e){t({type:_,payload:e.data,totalPage:e.totalPage})})}}}},D=Object(k.a)({key:"projectIdPage",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments[1];switch(t.type){case C:return e.set("defaultData",t.payload);case O:return e.set("isLoading",!0);case _:return e.set("isLoading",!1).set("projectIdData",t.payload).set("totalPage",t.totalPage);default:return e}}}),T=Object(N.a)({key:"projectIdPage",middleware:E}),I=n("9c772359e08e81b5b3ba"),L=n.n(I),A=function(e){return e.get("projectIdPage",S)},R=function(e){return Object(l.a)(A,function(t){return L.a.isUndefined(e)||L.a.isNull(e)||""===e?t.toJS():t.get(e)})};n.d(t,"ProjectIdPage",function(){return G});var M=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,a,o){var r=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&r)for(var c in r)void 0===n[c]&&(n[c]=r[c]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+3];n.children=l}return{$$typeof:e,type:t,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}}(),B=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var G=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.pagination={currentPage:1},n.headRef=r.a.createRef(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),B(t,[{key:"componentWillMount",value:function(){this.getData()}},{key:"getData",value:function(){this.props.getData(this.pagination.currentPage)}},{key:"componentWillReceiveProps",value:function(e){console.log(e)}},{key:"componentDidMount",value:function(){Object(j.a)()}},{key:"render",value:function(){var e=this,t=this.props,n=t.isLoading,a=t.projectIdData,o=void 0===a?[]:a,i=t.totalPage;return M(d.a,{},void 0,M(c.Helmet,{},void 0,M("title",{},void 0,"Project ID"),M("meta",{name:"description",content:"Project ID"})),M("h5",{className:"forum-headline"},void 0,"Project ID",M("span",{},void 0,"List of website development projects from"," ",M("a",{className:"text-primary",href:"https://projects.co.id/public/browse_projects/listing/6_website-development",target:"_blank"},void 0,"projects.co.id"))),!n&&M("button",{className:"btn btn-default hidden-md-down",onClick:function(){e.getData()},style:{position:"absolute",right:15,top:5}},void 0,"Reload ",M("i",{className:"fa fa-refresh"})),!n&&M("button",{className:"btn btn-default hidden-md-up m-b-10 float-right",onClick:function(){e.getData()}},void 0,"Reload ",M("i",{className:"fa fa-refresh"})),!n&&r.a.createElement("div",{className:"forum m-b-0",ref:this.headRef},o.map(function(e){return M("div",{className:"forum-group bg-white"},e.link,M("div",{className:"forum-row"},void 0,M("div",{className:"forum-title",style:{width:"90%",display:"table-cell"}},void 0,M("h4",{className:"m-b-10 text-warning"},void 0,M("a",{href:e.link,target:"_blank"},void 0,e.title)),M("p",{style:{fontSize:13},dangerouslySetInnerHTML:{__html:e.description}}),M("hr",{style:{border:"1px dashed #B3B3B3"}}),M("div",{style:{fontSize:12},className:"m-t-10",dangerouslySetInnerHTML:{__html:e.info}}))))})),!n&&M(P,{pageCount:parseInt(i,10),forcePage:this.pagination.currentPage-1,onPageChange:function(t){e.pagination.currentPage=t.selected+1,e.getData();var n=e.headRef.current.offsetTop+150;document.body.scrollTop=n,document.documentElement.scrollTop=n}}),!n&&M("div",{className:"m-b-50"}),n&&M("div",{className:"p-a-50"},void 0,M("p",{className:"text-center m-b-30"},void 0,"Loading data.."),M(f.a,{show:!0,name:"ball-clip-rotate-multiple",color:"orange"}),M("div",{className:"m-b-100"})),M("div",{id:"scripts"}))}}]),t}(),$=Object(l.b)({isLoading:R("isLoading"),projectIdData:R("projectIdData"),totalPage:R("totalPage")});t.default=Object(s.compose)(D,T,Object(i.connect)($,function(e){return{defaultAction:function(t){return e(function(e){return{type:"ProjectIdPage/DEFAULT_ACTION",payload:e}}(t))},getData:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))(G)},cc13decd9f9c09598c2f:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n("f2873ecf7390fe7d7c89"),o=n.n(a),r=n("f3b0ff1628e56352bcbf"),i=n.n(r),c=n("d3a850c4000d77bccc89"),l=n.n(c),s=n("6a4f9c383785f9168266"),u=n.n(s);function f(e){var t={dispatch:i.a,subscribe:i.a,getState:i.a,replaceReducer:i.a,runSaga:i.a,injectedReducers:l.a,injectedSagas:l.a,injectedMiddlewares:l.a};u()(o()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,t,n){"use strict";var a=n("8af190b70a6bc55c6f1b"),o=n.n(a),r=n("8a2d1b95e05b6a321e74"),i=n.n(r),c=n("5ef9de3df8d92ea0e41c"),l=n.n(c),s=n("6a4f9c383785f9168266"),u=n.n(s),f=n("a1cf5d6fa4ed65a6ddd5"),d=n.n(f),p=n("f3b0ff1628e56352bcbf"),b=n.n(p),h=n("5fa3f8487e09c6182715"),v=n.n(h),g=n("cc13decd9f9c09598c2f"),m=n("491cc2e27aa2b4221847");function y(e){return Object(g.a)(e),{injectReducer:function(e,t){return function(n,a){t||Object(g.a)(e),u()(v()(n)&&!d()(n)&&b()(a),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===a||(e.injectedReducers[n]=a,e.replaceReducer(Object(m.a)(e.injectedReducers)))}}(e,!0)}}var P=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,n=e.reducer;return function(e){var a=function(a){function r(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=n=j(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(o))),n.injectors=y(n.context.store),j(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,o.a.Component),P(r,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(t,n)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}]),r}();return a.WrappedComponent=e,a.contextTypes={store:i.a.object.isRequired},a.displayName="withReducer("+(e.displayName||e.name||"Component")+")",l()(a,e)}}}}]);