module.exports=function(e){var t=require("../../../ssr-module-cache.js");function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}},o=!0;try{e[a].call(n.exports,n,n.exports,r),o=!1}finally{o&&delete t[a]}return n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}({"/+P4":function(e,t,r){var a=r("Bhuq"),n=r("TRZx");function o(t){return e.exports=o=n?a:function(e){return e.__proto__||a(e)},o(t)}e.exports=o},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"0Bsm":function(e,t,r){"use strict";var a=r("KI45"),n=a(r("UXZV")),o=a(r("/HRN")),c=a(r("WaGi")),i=a(r("ZDA2")),l=a(r("/+P4")),s=a(r("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=u(r("cDcd")),m=f(r("rf6O")),d=f(r("2mql")),h=r("p8BD");t.default=function(e){var t=h.getDisplayName(e),r=function(t){function r(){return(0,o.default)(this,r),(0,i.default)(this,(0,l.default)(r).apply(this,arguments))}return(0,s.default)(r,t),(0,c.default)(r,[{key:"render",value:function(){return p.default.createElement(e,(0,n.default)({router:this.context.router},this.props))}}]),r}(p.Component);return r.contextTypes={router:m.default.object},r.displayName="withRouter(".concat(t,")"),d.default(r,e)}},"0iUn":function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return a})},"20a2":function(e,t,r){e.exports=r("nOHt")},"2mql":function(e,t,r){"use strict";var a=r("UWCm"),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={};c[a.ForwardRef]={$$typeof:!0,render:!0};var i=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,a){if("string"!=typeof r){if(p){var m=f(r);m&&m!==p&&e(t,m,a)}var d=l(r);s&&(d=d.concat(s(r)));for(var h=c[t.$$typeof]||n,y=c[r.$$typeof]||n,v=0;v<d.length;++v){var g=d[v];if(!(o[g]||a&&a[g]||y&&y[g]||h&&h[g])){var b=u(r,g);try{i(t,g,b)}catch(e){}}}return t}return t}},"5Yp1":function(e,t,r){"use strict";var a=r("cDcd"),n=r.n(a),o=r("U7sd"),c=r.n(o);t.a=function(e){return n.a.createElement("div",null,n.a.createElement(c.a,null,n.a.createElement("link",{rel:"shortcut icon",href:"static/img/favicon.ico"}),n.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"}),n.a.createElement("link",{href:"static/css/fontawesome-free/all.min.css",rel:"stylesheet",type:"text/css"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:400,700",rel:"stylesheet",type:"text/css"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Kaushan+Script",rel:"stylesheet",type:"text/css"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic",rel:"stylesheet",type:"text/css"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700",rel:"stylesheet",type:"text/css"}),n.a.createElement("link",{href:"static/css/agency.min.css",rel:"stylesheet"})),e.children,n.a.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"}),n.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js",integrity:"sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o",crossOrigin:"anonymous"}),n.a.createElement("script",{src:"static/js/jquery-easing/jquery.easing.min.js"}),n.a.createElement("script",{src:"static/js/jqBootstrapValidation.js"}),n.a.createElement("script",{src:"static/js/contact_me.js"}),n.a.createElement("script",{src:"static/js/agency.min.js"}))}},7:function(e,t,r){e.exports=r("RNiq")},"9Jkg":function(e,t,r){e.exports=r("fozc")},Bhuq:function(e,t,r){e.exports=r("/+oN")},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},MI3g:function(e,t,r){"use strict";var a=r("XVgq"),n=r.n(a),o=r("Z7t5"),c=r.n(o);function i(e){return(i="function"==typeof c.a&&"symbol"==typeof n.a?function(e){return typeof e}:function(e){return e&&"function"==typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"==typeof c.a&&"symbol"===i(n.a)?function(e){return i(e)}:function(e){return e&&"function"==typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":i(e)})(e)}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}r.d(t,"a",function(){return s})},N9n2:function(e,t,r){var a=r("SqZg"),n=r("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},RNiq:function(e,t,r){"use strict";r.r(t);var a=r("0iUn"),n=r("sLSF"),o=r("MI3g"),c=r("a7VT"),i=r("Tit0"),l=r("cDcd"),s=r.n(l),u=r("5Yp1"),f=function(){return s.a.createElement("header",{className:"masthead",id:"home"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},s.a.createElement("ol",{className:"carousel-indicators"},s.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),s.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),s.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}),s.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"3"}),s.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"4"})),s.a.createElement("div",{className:"carousel-inner"},s.a.createElement("div",{className:"carousel-item active"},s.a.createElement("img",{className:"d-block w-100",src:"static/img/slide/01.jpg",alt:"First slide"})),s.a.createElement("div",{className:"carousel-item"},s.a.createElement("img",{className:"d-block w-100",src:"static/img/slide/02.jpg",alt:"First slide"})),s.a.createElement("div",{className:"carousel-item"},s.a.createElement("img",{className:"d-block w-100",src:"static/img/slide/03.jpg",alt:"First slide"})),s.a.createElement("div",{className:"carousel-item"},s.a.createElement("img",{className:"d-block w-100",src:"static/img/slide/04.jpg",alt:"First slide"})),s.a.createElement("div",{className:"carousel-item"},s.a.createElement("img",{className:"d-block w-100",src:"static/img/slide/05.jpg",alt:"First slide"}))),s.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},s.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),s.a.createElement("span",{className:"sr-only"},"Previous")),s.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},s.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),s.a.createElement("span",{className:"sr-only"},"Next")))))},p=function(e){var t=e.logo;return s.a.createElement("div",{className:"col-md-2"},s.a.createElement("i",null,s.a.createElement("img",{src:t,className:"img-thumbnail"})))},m=["static/img/logo/01.jpg","static/img/logo/02.jpg","static/img/logo/03.jpg","static/img/logo/04.jpg","static/img/logo/05.jpg","static/img/logo/06.png","static/img/logo/07.jpg","static/img/logo/08.jpg"],d=function(){return s.a.createElement("section",{id:"services"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row text-center"},m.map(function(e,t){return s.a.createElement(p,{key:t,logo:e})}))))},h=r("TI60"),y=r("zYID"),v=function(e){function t(e){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(y.a,null),s.a.createElement(f,null),s.a.createElement(d,null),s.a.createElement(h.a,null))}}]),t}(s.a.Component);t.default=v},SqZg:function(e,t,r){e.exports=r("o5io")},TI60:function(e,t,r){"use strict";var a=r("cDcd"),n=r.n(a),o=function(e){var t=e.col,r=e.id,a=e.placeholder,o=e.validateMsg;return n.a.createElement("div",{className:t},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{className:"form-control",id:r,type:"text",placeholder:a,required:"required","data-validation-required-message":o}),n.a.createElement("p",{className:"help-block text-danger"})))};t.a=function(){return n.a.createElement("section",{id:"contact"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 text-center"},n.a.createElement("h2",{className:"section-heading text-uppercase"},"Contact Us"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("form",{id:"contactForm",name:"sentMessage",noValidate:"novalidate"},n.a.createElement("div",{className:"row"},n.a.createElement(o,{col:"col-md-6",id:"firstname",placeholder:"First Name",validateMsg:"Please enter your first name."}),n.a.createElement(o,{col:"col-md-6",id:"lastname",placeholder:"Last Name",validateMsg:"Please enter your last name."}),n.a.createElement(o,{col:"col-md-6",id:"email",placeholder:"Email",validateMsg:"Please enter your email."}),n.a.createElement(o,{col:"col-md-6",id:"phone",placeholder:"Phone",validateMsg:"Please enter your phone number."}),n.a.createElement(o,{col:"col-md-12",id:"company",placeholder:"Company",validateMsg:"Please enter your company."}),n.a.createElement(o,{col:"col-md-12",id:"enquiry",placeholder:"Your Enquiry",validateMsg:"Please enter your enquiry."}),n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("p",{className:"section-heading text-uppercase"},n.a.createElement("h4",null,"Phone No. +66 9 6004 6207"))),n.a.createElement("div",{className:"clearfix"}),n.a.createElement("div",{className:"col-lg-12 text-center"},n.a.createElement("div",{id:"success"}),n.a.createElement("button",{id:"sendMessageButton",className:"btn btn-primary btn-xl text-uppercase",type:"submit"},"Send Message"))))))))}},TRZx:function(e,t,r){e.exports=r("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},Tit0:function(e,t,r){"use strict";var a=r("SqZg"),n=r.n(a),o=r("TRZx"),c=r.n(o);function i(e,t){return(i=c.a||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}r.d(t,"a",function(){return l})},U7sd:function(e,t){e.exports=require("next-server/head")},UWCm:function(e,t){e.exports=require("react-is")},UXZV:function(e,t,r){e.exports=r("dGr4")},WaGi:function(e,t,r){var a=r("hfKm");function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),a(e,n.key,n)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,r){e.exports=r("gHn/")},YFqc:function(e,t,r){e.exports=r("cTJO")},Z7t5:function(e,t,r){e.exports=r("vqFK")},ZDA2:function(e,t,r){var a=r("iZP3"),n=r("K47E");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?n(e):t}},a7VT:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r("Bhuq"),n=r.n(a),o=r("TRZx"),c=r.n(o);function i(e){return(i=c.a?n.a:function(e){return e.__proto__||n()(e)})(e)}},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},b3CU:function(e,t,r){var a=r("pbKT"),n=r("vjea");function o(t,r,c){return!function(){if("undefined"==typeof Reflect||!a)return!1;if(a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o}:e.exports=o=a,o.apply(null,arguments)}e.exports=o},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cTJO:function(e,t,r){"use strict";var a=r("KI45"),n=a(r("9Jkg")),o=a(r("iZP3")),c=a(r("/HRN")),i=a(r("WaGi")),l=a(r("ZDA2")),s=a(r("/+P4")),u=a(r("N9n2")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=r("bzos"),d=f(r("cDcd")),h=(p(r("rf6O")),f(r("20a2"))),y=r("p8BD");var v=function(e){function t(){var e,r,a,n,i;return(0,c.default)(this,t),(e=(0,l.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:e&&"object"===(0,o.default)(e)?y.formatWithValidation(e):e,as:t&&"object"===(0,o.default)(t)?y.formatWithValidation(t):t}},a=null,n=null,i=null,function(e,t){if(e===a&&t===n)return i;var o=r(e,t);return a=e,n=t,i=o,o}),e.linkClicked=function(t){var r=t.currentTarget,a=r.nodeName,n=r.target;if("A"!==a||!(n&&"_self"!==n||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),c=o.href,i=o.as;if(function(e){var t=m.parse(e,!1,!0),r=m.parse(y.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(c)){var l=window.location.pathname;c=m.resolve(l,c),i=i?m.resolve(l,i):c,t.preventDefault();var s=e.props.scroll;null==s&&(s=i.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](c,i,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,n.default)(this.props.href)!==(0,n.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=m.resolve(e,t);h.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),a=r.href,n=r.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),c={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(c.href=n||a),c.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(c.href=h.Router._rewriteUrlForNextExport(c.href)),d.default.cloneElement(o,c)}}]),t}(d.Component);t.default=v},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,r){e.exports=r("TUA0")},iZP3:function(e,t,r){var a=r("XVgq"),n=r("Z7t5");function o(e){return(o="function"==typeof n&&"symbol"==typeof a?function(e){return typeof e}:function(e){return e&&"function"==typeof n&&e.constructor===n&&e!==n.prototype?"symbol":typeof e})(e)}function c(t){return"function"==typeof n&&"symbol"===o(a)?e.exports=c=function(e){return o(e)}:e.exports=c=function(e){return e&&"function"==typeof n&&e.constructor===n&&e!==n.prototype?"symbol":o(e)},c(t)}e.exports=c},nOHt:function(e,t,r){"use strict";var a=r("KI45"),n=a(r("UXZV")),o=a(r("iZP3")),c=a(r("b3CU")),i=a(r("hfKm")),l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=l(r("qxCs")),u={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],p=["components"],m=["push","replace","reload","back","prefetch","beforePopState"];function d(){if(!u.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(u,"events",{get:function(){return s.default.events}}),p.concat(f).forEach(function(e){(0,i.default)(u,e,{get:function(){return d(),u.router[e]}})}),m.forEach(function(e){u[e]=function(){var t;return d(),(t=u.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){u.ready(function(){s.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(u[t])try{u[t].apply(u,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=u;var h=r("0Bsm");t.withRouter=h.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return u.router=(0,c.default)(s.default,t),u.readyCallbacks.forEach(function(e){return e()}),u.readyCallbacks=[],u.router},t.Router=s.default,t.makePublicRouterInstance=function(e){for(var t={},r=0;r<f.length;r++){var a=f[r];"object"!==(0,o.default)(e[a])?t[a]=e[a]:t[a]=(0,n.default)({},e[a])}return t.events=s.default.events,p.forEach(function(r){(0,i.default)(t,r,{get:function(){return e[r]}})}),m.forEach(function(r){t[r]=function(){return e[r].apply(e,arguments)}}),t}},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},pbKT:function(e,t,r){e.exports=r("aAV7")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},sLSF:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r("hfKm"),n=r.n(a);function o(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),n()(e,a.key,a)}}function c(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}},vjea:function(e,t,r){var a=r("TRZx");function n(t,r){return e.exports=n=a||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},zYID:function(e,t,r){"use strict";var a=r("cDcd"),n=r.n(a),o=r("YFqc"),c=r.n(o),i=function(e){var t=e.href,r=e.text;return n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.a,{href:t},n.a.createElement("a",{className:"nav-link js-scroll-trigger"},r)))},l=r("0iUn"),s=r("sLSF"),u=r("MI3g"),f=r("a7VT"),p=r("Tit0"),m=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(u.a)(this,Object(f.a)(t).call(this,e))).id=e.id,r.href=e.href,r.text=e.text,r}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(c.a,{href:this.href},n.a.createElement("a",{className:"dropdown-item"},this.text)),n.a.createElement("div",{className:"dropdown-divider"}))}}]),t}(n.a.Component),d=function(e){var t=e.items;return n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:"dropdown"},n.a.createElement("div",{className:"nav-link js-scroll-trigger"},n.a.createElement("div",{className:"dropdown-toggle",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Our Collection"),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},t.map(function(e,r){return n.a.createElement(m,{href:e.link,text:e.text,key:r,id:r,length:t.length})})))))};t.a=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},n.a.createElement("div",{className:"container"},n.a.createElement(c.a,{href:"/"},n.a.createElement("a",{className:"navbar-brand js-scroll-trigger"},n.a.createElement("img",{src:"static/img/header-bg.jpg"}))),n.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",n.a.createElement("i",{className:"fas fa-bars"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},n.a.createElement("ul",{className:"navbar-nav text-uppercase ml-auto"},n.a.createElement(i,{href:"service.html",text:"Our Services"}),n.a.createElement(d,{items:[{text:"Chateau De Sukhumvit Hotel Bangkok",link:"hotel1.html"},{text:"The Victory Executive Residences Bangkok",link:"hotel2.html"},{text:"The Signature at The Victory Residences",link:"hotel3.html"},{text:"Grand Parazo Hotel Suvarnbhumi Airport",link:"hotel4.html"},{text:"Le Club at Chateau 56, A Xcoolsive Collection",link:"hotel5.html"},{text:"All That Bangkok Hostel",link:"hotel6.html"},{text:"Ceylon Place Kuala Lumpur",link:"hotel7.html"}]}),n.a.createElement(i,{href:"#contact",text:"Contact"})))))}}});