module.exports=function(e){var t=require("../../../ssr-module-cache.js");function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}},o=!0;try{e[n].call(a.exports,a,a.exports,r),o=!1}finally{o&&delete t[n]}return a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}({"/+P4":function(e,t,r){var n=r("Bhuq"),a=r("TRZx");function o(t){return e.exports=o=a?n:function(e){return e.__proto__||n(e)},o(t)}e.exports=o},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"0Bsm":function(e,t,r){"use strict";var n=r("KI45"),a=n(r("UXZV")),o=n(r("/HRN")),i=n(r("WaGi")),c=n(r("ZDA2")),s=n(r("/+P4")),l=n(r("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=u(r("cDcd")),d=f(r("rf6O")),m=f(r("2mql")),h=r("p8BD");t.default=function(e){var t=h.getDisplayName(e),r=function(t){function r(){return(0,o.default)(this,r),(0,c.default)(this,(0,s.default)(r).apply(this,arguments))}return(0,l.default)(r,t),(0,i.default)(r,[{key:"render",value:function(){return p.default.createElement(e,(0,a.default)({router:this.context.router},this.props))}}]),r}(p.Component);return r.contextTypes={router:d.default.object},r.displayName="withRouter(".concat(t,")"),m.default(r,e)}},"0iUn":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return n})},"20a2":function(e,t,r){e.exports=r("nOHt")},"2mql":function(e,t,r){"use strict";var n=r("UWCm"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={};i[n.ForwardRef]={$$typeof:!0,render:!0};var c=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var d=f(r);d&&d!==p&&e(t,d,n)}var m=s(r);l&&(m=m.concat(l(r)));for(var h=i[t.$$typeof]||a,y=i[r.$$typeof]||a,v=0;v<m.length;++v){var g=m[v];if(!(o[g]||n&&n[g]||y&&y[g]||h&&h[g])){var b=u(r,g);try{c(t,g,b)}catch(e){}}}return t}return t}},4:function(e,t,r){e.exports=r("Sa7R")},"5Yp1":function(e,t,r){"use strict";var n=r("cDcd"),a=r.n(n),o=r("U7sd"),i=r.n(o);t.a=function(e){return a.a.createElement("div",null,a.a.createElement(i.a,null,a.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"}),a.a.createElement("link",{href:"static/css/fontawesome-free/all.min.css",rel:"stylesheet",type:"text/css"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:400,700",rel:"stylesheet",type:"text/css"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Kaushan+Script",rel:"stylesheet",type:"text/css"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic",rel:"stylesheet",type:"text/css"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700",rel:"stylesheet",type:"text/css"}),a.a.createElement("link",{href:"static/css/agency.min.css",rel:"stylesheet"})),e.children,a.a.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"}),a.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js",integrity:"sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o",crossOrigin:"anonymous"}),a.a.createElement("script",{src:"static/js/jquery-easing/jquery.easing.min.js"}),a.a.createElement("script",{src:"static/js/jqBootstrapValidation.js"}),a.a.createElement("script",{src:"static/js/contact_me.js"}),a.a.createElement("script",{src:"static/js/agency.min.js"}))}},"9Jkg":function(e,t,r){e.exports=r("fozc")},Bhuq:function(e,t,r){e.exports=r("/+oN")},"DVK+":function(e,t,r){"use strict";var n=r("cDcd"),a=r.n(n),o=function(e){e.modal;var t=e.img;e.name,e.desc;return a.a.createElement("div",{className:"col-md-4 col-sm-6 portfolio-item"},a.a.createElement("img",{className:"img-fluid",src:t,alt:""}))};t.a=function(e){var t=e.name,r=e.images,n=e.desc;return a.a.createElement("section",{className:"bg-light",id:"portfolio"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12 text-center"},a.a.createElement("h2",{className:"section-heading text-uppercase"},t),a.a.createElement("h3",{className:"section-subheading text-muted"},n))),a.a.createElement("div",{className:"row"},r.map(function(e,t){return a.a.createElement(o,{name:"name",key:t,desc:"description",modal:"#gallery-".concat(t),img:e})}))))}},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},MI3g:function(e,t,r){"use strict";var n=r("XVgq"),a=r.n(n),o=r("Z7t5"),i=r.n(o);function c(e){return(c="function"==typeof i.a&&"symbol"==typeof a.a?function(e){return typeof e}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"==typeof i.a&&"symbol"===c(a.a)?function(e){return c(e)}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":c(e)})(e)}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}r.d(t,"a",function(){return l})},N9n2:function(e,t,r){var n=r("SqZg"),a=r("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},Sa7R:function(e,t,r){"use strict";r.r(t);var n=r("0iUn"),a=r("sLSF"),o=r("MI3g"),i=r("a7VT"),c=r("Tit0"),s=r("cDcd"),l=r.n(s),u=r("5Yp1"),f=r("b0oO"),p=r("DVK+"),d=r("TI60"),m=r("zYID"),h=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(o.a)(this,Object(i.a)(t).call(this,e))).hotel={name:"Le Club at Chateau Sukhumvit 56, The Xcoolsive Collection",desc:"Le Club at Chateau Sukhunvit 56 is conveniently located in Sukhumvit, within easy reach of various businesses and shopping centers like Terminal 21 and EmQuartier Shopping Mall. Set only a 5-minute walk from BTS Skytrain Station, this hotel also offers a free Tuk Tuk shuttle service to nearby attractions area. Guests can enjoy free WiFi during stay.\n            Suvarnabhumi International Airport is approximately a 35-minute drive away.\n            All stylish modern rooms and suites are air-conditioned and provide an LED flat-screen TV, a large working desk and a comfortable bed. An in-room safe is also available for added security. Complete with a walk-in shower, the private bathroom comes with bath amenities, slippers and a hairdryer.\n            The on-site restaurant, Chateau De Café, is an all-day dining option with Thai and European delicacies and many kind of signature dinks at the bar.",images:["static/img/5/01.jpg","static/img/5/02.jpg","static/img/5/03.jpg","static/img/5/04.jpg","static/img/5/05.jpg","static/img/5/07.jpg","static/img/5/08.jpg","static/img/5/09.jpg","static/img/5/10.png","static/img/5/11.jpg","static/img/5/12.jpg"]},r}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(m.a,null),l.a.createElement(f.a,{img:"static/img/5/10.png"}),l.a.createElement(p.a,{name:this.hotel.name,desc:this.hotel.desc,images:this.hotel.images}),l.a.createElement(d.a,null))}}]),t}(l.a.Component);t.default=h},SqZg:function(e,t,r){e.exports=r("o5io")},TI60:function(e,t,r){"use strict";var n=r("cDcd"),a=r.n(n),o=function(e){var t=e.col,r=e.id,n=e.placeholder,o=e.validateMsg;return a.a.createElement("div",{className:t},a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{className:"form-control",id:r,type:"text",placeholder:n,required:"required","data-validation-required-message":o}),a.a.createElement("p",{className:"help-block text-danger"})))};t.a=function(){return a.a.createElement("section",{id:"contact"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12 text-center"},a.a.createElement("h2",{className:"section-heading text-uppercase"},"Contact Us"))),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12"},a.a.createElement("form",{id:"contactForm",name:"sentMessage",noValidate:"novalidate"},a.a.createElement("div",{className:"row"},a.a.createElement(o,{col:"col-md-6",id:"firstname",placeholder:"First Name",validateMsg:"Please enter your first name."}),a.a.createElement(o,{col:"col-md-6",id:"lastname",placeholder:"Last Name",validateMsg:"Please enter your last name."}),a.a.createElement(o,{col:"col-md-6",id:"email",placeholder:"Email",validateMsg:"Please enter your email."}),a.a.createElement(o,{col:"col-md-6",id:"phone",placeholder:"Phone",validateMsg:"Please enter your phone number."}),a.a.createElement(o,{col:"col-md-12",id:"company",placeholder:"Company",validateMsg:"Please enter your company."}),a.a.createElement(o,{col:"col-md-12",id:"enquiry",placeholder:"Your Enquiry",validateMsg:"Please enter your enquiry."}),a.a.createElement("div",{className:"clearfix"}),a.a.createElement("div",{className:"col-lg-12 text-center"},a.a.createElement("div",{id:"success"}),a.a.createElement("button",{id:"sendMessageButton",className:"btn btn-primary btn-xl text-uppercase",type:"submit"},"Send Message"))))))))}},TRZx:function(e,t,r){e.exports=r("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},Tit0:function(e,t,r){"use strict";var n=r("SqZg"),a=r.n(n),o=r("TRZx"),i=r.n(o);function c(e,t){return(c=i.a||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}r.d(t,"a",function(){return s})},U7sd:function(e,t){e.exports=require("next-server/head")},UWCm:function(e,t){e.exports=require("react-is")},UXZV:function(e,t,r){e.exports=r("dGr4")},WaGi:function(e,t,r){var n=r("hfKm");function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),n(e,a.key,a)}}e.exports=function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,r){e.exports=r("gHn/")},YFqc:function(e,t,r){e.exports=r("cTJO")},Z7t5:function(e,t,r){e.exports=r("vqFK")},ZDA2:function(e,t,r){var n=r("iZP3"),a=r("K47E");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}},a7VT:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r("Bhuq"),a=r.n(n),o=r("TRZx"),i=r.n(o);function c(e){return(c=i.a?a.a:function(e){return e.__proto__||a()(e)})(e)}},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},b0oO:function(e,t,r){"use strict";var n=r("cDcd"),a=r.n(n);t.a=function(e){var t=e.img;return a.a.createElement("header",{className:"masthead",id:"home",style:{backgroundImage:"url("+t+")"}},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"intro-text"})))}},b3CU:function(e,t,r){var n=r("pbKT"),a=r("vjea");function o(t,r,i){return!function(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=o=function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&a(o,r.prototype),o}:e.exports=o=n,o.apply(null,arguments)}e.exports=o},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),a=n(r("9Jkg")),o=n(r("iZP3")),i=n(r("/HRN")),c=n(r("WaGi")),s=n(r("ZDA2")),l=n(r("/+P4")),u=n(r("N9n2")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=r("bzos"),m=f(r("cDcd")),h=(p(r("rf6O")),f(r("20a2"))),y=r("p8BD");var v=function(e){function t(){var e,r,n,a,c;return(0,i.default)(this,t),(e=(0,s.default)(this,(0,l.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:e&&"object"===(0,o.default)(e)?y.formatWithValidation(e):e,as:t&&"object"===(0,o.default)(t)?y.formatWithValidation(t):t}},n=null,a=null,c=null,function(e,t){if(e===n&&t===a)return c;var o=r(e,t);return n=e,a=t,c=o,o}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,a=r.target;if("A"!==n||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,c=o.as;if(function(e){var t=d.parse(e,!1,!0),r=d.parse(y.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var s=window.location.pathname;i=d.resolve(s,i),c=c?d.resolve(s,c):i,t.preventDefault();var l=e.props.scroll;null==l&&(l=c.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](i,c,{shallow:e.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=d.resolve(e,t);h.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,a=r.as;"string"==typeof t&&(t=m.default.createElement("a",null,t));var o=m.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=h.Router._rewriteUrlForNextExport(i.href)),m.default.cloneElement(o,i)}}]),t}(m.Component);t.default=v},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,r){e.exports=r("TUA0")},iZP3:function(e,t,r){var n=r("XVgq"),a=r("Z7t5");function o(e){return(o="function"==typeof a&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof a&&e.constructor===a&&e!==a.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof a&&"symbol"===o(n)?e.exports=i=function(e){return o(e)}:e.exports=i=function(e){return e&&"function"==typeof a&&e.constructor===a&&e!==a.prototype?"symbol":o(e)},i(t)}e.exports=i},nOHt:function(e,t,r){"use strict";var n=r("KI45"),a=n(r("UXZV")),o=n(r("iZP3")),i=n(r("b3CU")),c=n(r("hfKm")),s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=s(r("qxCs")),u={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],p=["components"],d=["push","replace","reload","back","prefetch","beforePopState"];function m(){if(!u.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(u,"events",{get:function(){return l.default.events}}),p.concat(f).forEach(function(e){(0,c.default)(u,e,{get:function(){return m(),u.router[e]}})}),d.forEach(function(e){u[e]=function(){var t;return m(),(t=u.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){u.ready(function(){l.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(u[t])try{u[t].apply(u,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=u;var h=r("0Bsm");t.withRouter=h.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return u.router=(0,i.default)(l.default,t),u.readyCallbacks.forEach(function(e){return e()}),u.readyCallbacks=[],u.router},t.Router=l.default,t.makePublicRouterInstance=function(e){for(var t={},r=0;r<f.length;r++){var n=f[r];"object"!==(0,o.default)(e[n])?t[n]=e[n]:t[n]=(0,a.default)({},e[n])}return t.events=l.default.events,p.forEach(function(r){(0,c.default)(t,r,{get:function(){return e[r]}})}),d.forEach(function(r){t[r]=function(){return e[r].apply(e,arguments)}}),t}},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},pbKT:function(e,t,r){e.exports=r("aAV7")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},sLSF:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r("hfKm"),a=r.n(n);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),a()(e,n.key,n)}}function i(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}},vjea:function(e,t,r){var n=r("TRZx");function a(t,r){return e.exports=a=n||function(e,t){return e.__proto__=t,e},a(t,r)}e.exports=a},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},zYID:function(e,t,r){"use strict";var n=r("cDcd"),a=r.n(n),o=r("YFqc"),i=r.n(o),c=function(e){var t=e.href,r=e.text;return a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.a,{href:t},a.a.createElement("a",{className:"nav-link js-scroll-trigger"},r)))},s=r("0iUn"),l=r("sLSF"),u=r("MI3g"),f=r("a7VT"),p=r("Tit0"),d=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(u.a)(this,Object(f.a)(t).call(this,e))).id=e.id,r.href=e.href,r.text=e.text,r}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(i.a,{href:this.href},a.a.createElement("a",{className:"dropdown-item"},this.text)),a.a.createElement("div",{className:"dropdown-divider"}))}}]),t}(a.a.Component),m=function(e){var t=e.items;return a.a.createElement("li",{className:"nav-item"},a.a.createElement("div",{className:"dropdown"},a.a.createElement("div",{className:"nav-link js-scroll-trigger"},a.a.createElement("div",{className:"dropdown-toggle",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Our Collection"),a.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},t.map(function(e,r){return a.a.createElement(d,{href:e.link,text:e.text,key:r,id:r,length:t.length})})))))};t.a=function(){return a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},a.a.createElement("div",{className:"container"},a.a.createElement(i.a,{href:"/"},a.a.createElement("a",{className:"navbar-brand js-scroll-trigger"},"XCOOLSIVE")),a.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",a.a.createElement("i",{className:"fas fa-bars"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},a.a.createElement("ul",{className:"navbar-nav text-uppercase ml-auto"},a.a.createElement(c,{href:"/service",text:"Our Services"}),a.a.createElement(m,{items:[{text:"Chateau De Sukhumvit Hotel Bangkok",link:"hotel1"},{text:"The Victory Executive Residences Bangkok",link:"hotel2"},{text:"The Signature at The Victory Residences",link:"hotel3"},{text:"Grand Parazo Hotel Suvarnbhumi Airport",link:"hotel4"},{text:"Le Club at Chateau 56, A Xcoolsive Collection",link:"hotel5"},{text:"All That Bangkok Hostel",link:"hotel6"},{text:"Ceylon Place Kuala Lumpur",link:"hotel7"}]}),a.a.createElement(c,{href:"#contact",text:"Contact"})))))}}});