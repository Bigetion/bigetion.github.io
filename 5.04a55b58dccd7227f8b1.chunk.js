(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"564c8c4ff52cdb2e6d5a":function(e,o,t){"use strict";var n,r=t("8af190b70a6bc55c6f1b"),a=t.n(r),i=(t("8a2d1b95e05b6a321e74"),t("d7dd51e1bf6bfc2c9c3d")),l=t("a28fc3c963a1d4d1a2e5"),c=t("e95a63b25fb92ed15721"),s=t("6542cd13fd5dd1bcffd4"),d=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var a=e&&e.defaultProps,i=arguments.length-3;if(o||0===i||(o={}),o&&a)for(var l in a)void 0===o[l]&&(o[l]=a[l]);else o||(o=a||{});if(1===i)o.children=r;else if(i>1){for(var c=Array(i),s=0;s<i;s++)c[s]=arguments[s+3];o.children=c}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}),u=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}();var f=function(e){function o(){return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),function(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,a.a.Component),u(o,[{key:"render",value:function(){var e=this.props.location,o=[{name:"About Me",title:"Ady Suprianto",logo:"me.jpg",link:"/"},{name:"Project ID",title:"Project ID",logo:"projectID.png",link:"/project-id"},{name:"Google Search",title:"Google",logo:"google.png",link:"/google-search"},{name:"Google Translate",title:"Google Translate",logo:"google_translate.png",link:"/google-translate"},{name:"Google Trends",title:"Google Trends",logo:"google_trends.png",link:"/google-trends"},{name:"Liputan 6",title:"Liputan 6",logo:"liputan6.jpg",link:"/liputan6"},{name:"Youtube",title:"Youtube",logo:"youtube.png",link:"/youtube"}],t={};return o.forEach(function(o){o.link===e.pathname&&(t=o)}),d("div",{},void 0,d("section",{className:"hero hero-profile",style:{backgroundImage:"url('./assets/img/profile/profile-1.jpg')"}},void 0,d("div",{className:"overlay"}),d("div",{className:"container"},void 0,d("div",{className:"hero-block"},void 0,d("h5",{},void 0,t.title)))),d("section",{className:"toolbar toolbar-profile","data-fixed":"true"},void 0,d("div",{className:"container"},void 0,d("div",{className:"profile-avatar"},void 0,d("a",{href:"#"},void 0,d("img",{src:"./assets/img/logo/"+t.logo,alt:""})),d("div",{className:"sticky"},void 0,d("a",{href:"#"},void 0,d("img",{src:"./assets/img/logo/"+t.logo,alt:""})),d("div",{className:"profile-info"},void 0,d("h5",{},void 0,t.title)))),d("div",{className:"dropdown float-right hidden-lg-up"},void 0,d("a",{className:"btn btn-secondary btn-icon btn-sm m-l-25 float-right",href:"#","data-toggle":"dropdown",role:"button"},void 0,d("i",{className:"fa fa-bars"})," Menu"),d("div",{className:"dropdown-menu dropdown-menu-right"},void 0,o.map(function(e){return d(c.Link,{className:"dropdown-item",to:e.link},e.link,e.name)}))),d("ul",{className:"toolbar-nav hidden-md-down"},void 0,o.map(function(o){return d("li",{className:e.pathname==o.link?"active":""},o.link,d(c.Link,{to:o.link},void 0,o.name))})))),d("section",{className:"p-y-30"},void 0,d("div",{className:"container"},void 0,d("div",{className:"row"},void 0,d("div",{className:"col-lg-12"},void 0,this.props.children)))))}}]),o}(),p=Object(l.b)({location:Object(s.b)()});o.a=Object(i.connect)(p,function(e){return{}})(f)},"9655914107fe44b7cb00":function(e,o,t){"use strict";function n(){!function(e,o){for(var t=document.getElementById(e);t.childNodes.length>0;)t.removeChild(t.childNodes[0]);o.forEach(function(e){var o=document.createElement("script");o.setAttribute("src",e),o.setAttribute("type","text/javascript"),t.appendChild(o)})}("scripts",["./assets/js/theme.min.js"])}t.d(o,"a",function(){return n})},d3607e9c703182d2091d:function(e,o,t){"use strict";t.r(o),t.d(o,"NotFoundPage",function(){return d});var n,r=t("8af190b70a6bc55c6f1b"),a=t.n(r),i=t("564c8c4ff52cdb2e6d5a"),l=t("9655914107fe44b7cb00"),c=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var a=e&&e.defaultProps,i=arguments.length-3;if(o||0===i||(o={}),o&&a)for(var l in a)void 0===o[l]&&(o[l]=a[l]);else o||(o=a||{});if(1===i)o.children=r;else if(i>1){for(var c=Array(i),s=0;s<i;s++)c[s]=arguments[s+3];o.children=c}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}),s=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}();var d=function(e){function o(){return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),function(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,a.a.Component),s(o,[{key:"componentDidMount",value:function(){Object(l.a)()}},{key:"render",value:function(){return c(i.a,{},void 0,c("section",{className:"bg-image bg-image-sm error-404",style:{backgroundImage:"url(../../ img.youtube.com / vi / y3Cpetu4ke4 / maxresdefault.jpg)"}},void 0,c("div",{className:"overlay"}),c("div",{className:"container"},void 0,c("div",{className:"row"},void 0,c("div",{className:"col-lg-8 mx-auto"},void 0,c("div",{className:"heading"},void 0,c("h2",{},void 0,"404")),c("p",{},void 0,"Sorry, but the page you requested could not be found."),c("form",{},void 0,c("div",{className:"col-lg-8 mx-auto"},void 0,c("div",{className:"form-group input-icon-right"},void 0,c("input",{type:"text",className:"form-control",placeholder:"Search Page..."}),c("i",{className:"fa fa-search"})))),c("div",{className:"m-t-50"},void 0,c("a",{href:"/",className:"btn btn-primary btn-effect btn-shadow btn-rounded btn-lg"},void 0,"Back to home"),c("a",{href:"contact.html",className:"btn btn-outline-default btn-rounded btn-lg m-l-10"},void 0,"Contact Us")))))),c("div",{id:"scripts"}))}}]),o}();o.default=d}}]);