!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function r(n){return null===n?0/0:+n}function u(n){return!isNaN(n)}function i(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function o(n){return n.length}function a(n){for(var t=1;n*t%1;)t*=10;return t}function c(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function l(){this._=Object.create(null)}function s(n){return(n+="")===pa||n[0]===va?va+n:n}function f(n){return(n+="")[0]===va?n.slice(1):n}function h(n){return s(n)in this._}function g(n){return(n=s(n))in this._&&delete this._[n]}function p(){var n=[];for(var t in this._)n.push(f(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function m(){this._=Object.create(null)}function y(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=da.length;r>e;++e){var u=da[e]+t;if(u in n)return u}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new l;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function S(){ta.event.preventDefault()}function k(){for(var n,t=ta.event;n=t.sourceEvent;)t=n;return t}function E(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=ta.event;u.target=n,ta.event=u,t[u.type].apply(e,r)}finally{ta.event=i}}},t}function A(n){return ya(n,_a),n}function N(n){return"function"==typeof n?n:function(){return Ma(n,this)}}function C(n){return"function"==typeof n?n:function(){return xa(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ta.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function q(n){return n.trim().replace(/\s+/g," ")}function L(n){return new RegExp("(?:^|\\s+)"+ta.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=T(n).map(D);var u=n.length;return"function"==typeof t?r:e}function D(n){var t=L(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",q(u+" "+n))):e.setAttribute("class",q(u.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e?t.createElementNS(e,n):t.createElement(n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=ta.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return ba(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function Z(n){return ya(n,Sa),n}function V(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function X(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,ra(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+ta.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=$;a>0&&(n=n.slice(0,a));var l=ka.get(n);return l&&(n=l,c=B),a?t?u:r:t?b:i}function $(n,t){return function(e){var r=ta.event;ta.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ta.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Aa,u="click"+r,i=ta.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==Ea&&(Ea="onselectstart"in e?!1:x(e.style,"userSelect")),Ea){var o=n(e).style,a=o[Ea];o[Ea]="none"}return function(n){if(i.on(r,null),Ea&&(o[Ea]=a),n){var t=function(){i.on(u,null)};i.on(u,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var u=r.createSVGPoint();if(0>Na){var i=t(n);if(i.scrollX||i.scrollY){r=ta.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var o=r[0][0].getScreenCTM();Na=!(o.f||o.e),r.remove()}}return Na?(u.x=e.pageX,u.y=e.pageY):(u.x=e.clientX,u.y=e.clientY),u=u.matrixTransform(n.getScreenCTM().inverse()),[u.x,u.y]}var a=n.getBoundingClientRect();return[e.clientX-a.left-n.clientLeft,e.clientY-a.top-n.clientTop]}function G(){return ta.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nt(n){return n>1?0:-1>n?qa:Math.acos(n)}function tt(n){return n>1?Ra:-1>n?-Ra:Math.asin(n)}function et(n){return((n=Math.exp(n))-1/n)/2}function rt(n){return((n=Math.exp(n))+1/n)/2}function ut(n){return((n=Math.exp(2*n))-1)/(n+1)}function it(n){return(n=Math.sin(n/2))*n}function ot(){}function at(n,t,e){return this instanceof at?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof at?new at(n.h,n.s,n.l):bt(""+n,_t,at):new at(n,t,e)}function ct(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new mt(u(n+120),u(n),u(n-120))}function lt(n,t,e){return this instanceof lt?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof lt?new lt(n.h,n.c,n.l):n instanceof ft?gt(n.l,n.a,n.b):gt((n=wt((n=ta.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new lt(n,t,e)}function st(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new ft(e,Math.cos(n*=Da)*t,Math.sin(n)*t)}function ft(n,t,e){return this instanceof ft?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof ft?new ft(n.l,n.a,n.b):n instanceof lt?st(n.h,n.c,n.l):wt((n=mt(n)).r,n.g,n.b):new ft(n,t,e)}function ht(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=pt(u)*Xa,r=pt(r)*$a,i=pt(i)*Ba,new mt(dt(3.2404542*u-1.5371385*r-.4985314*i),dt(-.969266*u+1.8760108*r+.041556*i),dt(.0556434*u-.2040259*r+1.0572252*i))}function gt(n,t,e){return n>0?new lt(Math.atan2(e,t)*Pa,Math.sqrt(t*t+e*e),n):new lt(0/0,0/0,n)}function pt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function vt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function dt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mt(n,t,e){return this instanceof mt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mt?new mt(n.r,n.g,n.b):bt(""+n,mt,ct):new mt(n,t,e)}function yt(n){return new mt(n>>16,n>>8&255,255&n)}function Mt(n){return yt(n)+""}function xt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function bt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(kt(u[0]),kt(u[1]),kt(u[2]))}return(i=Ga.get(n.toLowerCase()))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function _t(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new at(r,u,c)}function wt(n,t,e){n=St(n),t=St(t),e=St(e);var r=vt((.4124564*n+.3575761*t+.1804375*e)/Xa),u=vt((.2126729*n+.7151522*t+.072175*e)/$a),i=vt((.0193339*n+.119192*t+.9503041*e)/Ba);return ft(116*u-16,500*(r-u),200*(u-i))}function St(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function kt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function Et(n){return"function"==typeof n?n:function(){return n}}function At(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Nt(t,e,n,r)}}function Nt(n,t,e,r){function u(){var n,t=c.status;if(!t&&zt(c)||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return void o.error.call(i,r)}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=ta.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,l=null;return!this.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=ta.event;ta.event=n;try{o.progress.call(i,c)}finally{ta.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ra(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},ta.rebind(i,o,"on"),null==r?i:i.get(Ct(r))}function Ct(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function zt(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qt(){var n=Lt(),t=Tt()-n;t>24?(isFinite(t)&&(clearTimeout(tc),tc=setTimeout(qt,t)),nc=0):(nc=1,rc(qt))}function Lt(){var n=Date.now();for(ec=Ka;ec;)n>=ec.t&&(ec.f=ec.c(n-ec.t)),ec=ec.n;return n}function Tt(){for(var n,t=Ka,e=1/0;t;)t.f?t=n?n.n=t.n:Ka=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Qa=n,e}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var e=Math.pow(10,3*ga(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Pt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],o=0,a=r[0],c=0;u>0&&a>0&&(c+a+1>t&&(a=Math.max(1,t-c)),i.push(n.substring(u-=a,u+a)),!((c+=a+1)>t));)a=r[o=(o+1)%r.length];return i.reverse().join(e)}:y;return function(n){var e=ic.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",c=e[4]||"",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===o)&&(l=r="0",o="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=oc.get(g)||Ut;var M=l&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>p){var c=ta.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=y?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!l&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===o?u+n+k:">"===o?k+u+n:"^"===o?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ft(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new cc(e-1)),1),e}function i(n,e){return t(n=new cc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{cc=jt;var r=new jt;return r._=n,o(r,t,e)}finally{cc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ht(n);return c.floor=c,c.round=Ht(r),c.ceil=Ht(u),c.offset=Ht(i),c.range=a,n}function Ht(n){return function(t,e){try{cc=jt;var r=new jt;return r._=t,n(r,e)._}finally{cc=Date}}}function Ot(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(c,a)),null!=(u=sc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=N[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.slice(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&cc!==jt,o=new(i?jt:cc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=C[o in sc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.slice(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,N.c.toString(),t,r)}function c(n,t,r){return e(n,N.x.toString(),t,r)}function l(n,t,r){return e(n,N.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{cc=jt;var t=new cc;return t._=n,r(t)}finally{cc=Date}}var r=t(n);return e.parse=function(n){try{cc=jt;var t=r.parse(n);return t&&t._}finally{cc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ae;var M=ta.map(),x=Yt(v),b=Zt(v),_=Yt(d),w=Zt(d),S=Yt(m),k=Zt(m),E=Yt(y),A=Zt(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var N={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return It(n.getDate(),t,2)},e:function(n,t){return It(n.getDate(),t,2)},H:function(n,t){return It(n.getHours(),t,2)},I:function(n,t){return It(n.getHours()%12||12,t,2)},j:function(n,t){return It(1+ac.dayOfYear(n),t,3)},L:function(n,t){return It(n.getMilliseconds(),t,3)},m:function(n,t){return It(n.getMonth()+1,t,2)},M:function(n,t){return It(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return It(n.getSeconds(),t,2)},U:function(n,t){return It(ac.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return It(ac.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return It(n.getFullYear()%100,t,2)},Y:function(n,t){return It(n.getFullYear()%1e4,t,4)},Z:ie,"%":function(){return"%"}},C={a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:s,S:re,U:Xt,w:Vt,W:$t,x:c,X:l,y:Wt,Y:Bt,Z:Jt,"%":oe};return t}function It(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Yt(n){return new RegExp("^(?:"+n.map(ta.requote).join("|")+")","i")}function Zt(n){for(var t=new l,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Vt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Xt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function $t(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Bt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Wt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.y=Gt(+r[0]),e+r[0].length):-1}function Jt(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ne(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function te(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ee(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function re(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ue(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ie(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=ga(t)/60|0,u=ga(t)%60;return e+It(r,"0",2)+It(u,"0",2)}function oe(n,t,e){hc.lastIndex=0;var r=hc.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ae(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ce(){}function le(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function se(n,t){n&&dc.hasOwnProperty(n.type)&&dc[n.type](n,t)}function fe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function he(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)fe(n[e],t,1);t.polygonEnd()}function ge(){function n(n,t){n*=Da,t=t*Da/2+qa/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(a),h=s*o*Math.sin(a);yc.add(Math.atan2(h,f)),r=n,u=c,i=l}var t,e,r,u,i;Mc.point=function(o,a){Mc.point=n,r=(t=o)*Da,u=Math.cos(a=(e=a)*Da/2+qa/4),i=Math.sin(a)},Mc.lineEnd=function(){n(t,e)}}function pe(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function ve(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function de(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function me(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ye(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Me(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function xe(n){return[Math.atan2(n[1],n[0]),tt(n[2])]}function be(n,t){return ga(n[0]-t[0])<Ca&&ga(n[1]-t[1])<Ca}function _e(n,t){n*=Da;var e=Math.cos(t*=Da);we(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function we(n,t,e){++xc,_c+=(n-_c)/xc,wc+=(t-wc)/xc,Sc+=(e-Sc)/xc}function Se(){function n(n,u){n*=Da;var i=Math.cos(u*=Da),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c);bc+=l,kc+=l*(t+(t=o)),Ec+=l*(e+(e=a)),Ac+=l*(r+(r=c)),we(t,e,r)}var t,e,r;qc.point=function(u,i){u*=Da;var o=Math.cos(i*=Da);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),qc.point=n,we(t,e,r)}}function ke(){qc.point=_e}function Ee(){function n(n,t){n*=Da;var e=Math.cos(t*=Da),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-nt(g)/h,v=Math.atan2(h,g);Nc+=p*l,Cc+=p*s,zc+=p*f,bc+=v,kc+=v*(r+(r=o)),Ec+=v*(u+(u=a)),Ac+=v*(i+(i=c)),we(r,u,i)}var t,e,r,u,i;qc.point=function(o,a){t=o,e=a,qc.point=n,o*=Da;var c=Math.cos(a*=Da);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i)},qc.lineEnd=function(){n(t,e),qc.lineEnd=ke,qc.point=_e}}function Ae(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ne(){return!0}function Ce(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(be(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return void u.lineEnd()}var c=new qe(e,n,null,!0),l=new qe(e,null,c,!1);c.o=l,i.push(c),o.push(l),c=new qe(r,n,null,!1),l=new qe(r,null,c,!0),c.o=l,i.push(c),o.push(l)}}),o.sort(t),ze(i),ze(o),i.length){for(var a=0,c=e,l=o.length;l>a;++a)o[a].e=c=!c;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,l=s.length;l>a;++a)u.point((f=s[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var a=s.length-1;a>=0;--a)u.point((f=s[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function ze(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function qe(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Le(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function l(){y.point=o,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Te))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:l,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=l,g=ta.merge(g);var n=Fe(m,p);g.length?(b||(i.polygonStart(),b=!0),Ce(g,De,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=Re(),x=t(M),b=!1;return y}}function Te(n){return n.length>1}function Re(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function De(n,t){return((n=n.x)[0]<0?n[1]-Ra-Ca:Ra-n[1])-((t=t.x)[0]<0?t[1]-Ra-Ca:Ra-t[1])}function Pe(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?qa:-qa,c=ga(i-e);ga(c-qa)<Ca?(n.point(e,r=(r+o)/2>0?Ra:-Ra),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=qa&&(ga(e-u)<Ca&&(e-=u*Ca),ga(i-a)<Ca&&(i-=a*Ca),r=Ue(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Ue(n,t,e,r){var u,i,o=Math.sin(n-e);return ga(o)>Ca?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function je(n,t,e,r){var u;if(null==n)u=e*Ra,r.point(-qa,u),r.point(0,u),r.point(qa,u),r.point(qa,0),r.point(qa,-u),r.point(0,-u),r.point(-qa,-u),r.point(-qa,0),r.point(-qa,u);else if(ga(n[0]-t[0])>Ca){var i=n[0]<t[0]?qa:-qa;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Fe(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;yc.reset();for(var a=0,c=t.length;c>a;++a){var l=t[a],s=l.length;if(s)for(var f=l[0],h=f[0],g=f[1]/2+qa/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=l[d];var m=n[0],y=n[1]/2+qa/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>qa,k=p*M;if(yc.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*La:b,S^h>=e^m>=e){var E=de(pe(f),pe(n));Me(E);var A=de(u,E);Me(A);var N=(S^b>=0?-1:1)*tt(A[2]);(r>N||r===N&&(E[0]||E[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Ca>i||Ca>i&&0>yc)^1&o}function He(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,l,s;return{lineStart:function(){l=c=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?qa:-qa),h):0;if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(be(e,g)||be(p,g))&&(p[0]+=Ca,p[1]+=Ca,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&be(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return s|(l&&c)<<1}}}function r(n,t,e){var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),l=a[0],s=c-l*l;if(!s)return!e&&n;var f=i*c/s,h=-i*l/s,g=de(o,a),p=ye(o,f),v=ye(a,h);me(p,v);var d=g,m=ve(p,d),y=ve(d,d),M=m*m-y*(ve(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=ye(d,(-m-x)/y);if(me(b,p),b=xe(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=ga(A-qa)<Ca,C=N||Ca>A;if(!N&&k>E&&(_=k,k=E,E=_),C?N?k+E>0^b[1]<(ga(b[0]-w)<Ca?k:E):k<=b[1]&&b[1]<=E:A>qa^(w<=b[0]&&b[0]<=S)){var z=ye(d,(-m+x)/y);return me(z,p),[b,xe(z)]}}}function u(t,e){var r=o?n:qa-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=ga(i)>Ca,c=gr(n,6*Da);return Le(t,e,c,o?[0,-n]:[-qa,n-qa])}function Oe(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,l=o.y,s=a.x,f=a.y,h=0,g=1,p=s-c,v=f-l;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-l,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-l,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:l+h*v}),1>g&&(u.b={x:c+g*p,y:l+g*v}),u}}}}}}function Ie(n,t,e,r){function u(r,u){return ga(r[0]-n)<Ca?u>0?0:3:ga(r[0]-e)<Ca?u>0?2:1:ga(r[1]-t)<Ca?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&Q(l,i,n)>0&&++t:i[1]<=r&&Q(l,i,n)<0&&--t,l=i;return 0!==t}function l(i,a,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(a[0],a[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&a.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=0/0}function g(){v&&(p(y,M),x&&w&&A.rejoin(),v.push(A.buffer())),C.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Tc,Math.min(Tc,n)),t=Math.max(-Tc,Math.min(Tc,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};N(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,E=a,A=Re(),N=Oe(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=ta.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,l,a),a.polygonEnd()),v=d=m=null}};return C}}function Ye(n){var t=0,e=qa/3,r=ir(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*qa/180,e=n[1]*qa/180):[t/qa*180,e/qa*180]},u}function Ze(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,tt((i-(n*n+e*e)*u*u)/(2*u))]},e}function Ve(){function n(n,t){Dc+=u*n-r*t,r=n,u=t}var t,e,r,u;Hc.point=function(i,o){Hc.point=n,t=r=i,e=u=o},Hc.lineEnd=function(){n(t,e)}}function Xe(n,t){Pc>n&&(Pc=n),n>jc&&(jc=n),Uc>t&&(Uc=t),t>Fc&&(Fc=t)}function $e(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Be(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Be(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Be(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function We(n,t){_c+=n,wc+=t,++Sc}function Je(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);kc+=o*(t+n)/2,Ec+=o*(e+r)/2,Ac+=o,We(t=n,e=r)}var t,e;Ic.point=function(r,u){Ic.point=n,We(t=r,e=u)}}function Ge(){Ic.point=We}function Ke(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);kc+=o*(r+n)/2,Ec+=o*(u+t)/2,Ac+=o,o=u*n-r*t,Nc+=o*(r+n),Cc+=o*(u+t),zc+=3*o,We(r=n,u=t)}var t,e,r,u;Ic.point=function(i,o){Ic.point=n,We(t=r=i,e=u=o)},Ic.lineEnd=function(){n(t,e)}}function Qe(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,La)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:b};return a}function nr(n){function t(n){return(a?r:e)(n)}function e(t){return rr(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=0/0,S.point=i,t.lineStart()}function i(e,r){var i=pe([e,r]),o=n(e,r);u(M,x,y,b,_,w,M=o[0],x=o[1],y=e,b=i[0],_=i[1],w=i[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=l,S.lineEnd=s}function l(n,t){i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c
},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,l,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=a+g,_=c+p,w=l+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),E=ga(ga(w)-1)<Ca||ga(r-h)<Ca?(r+h)/2:Math.atan2(_,b),A=n(E,k),N=A[0],C=A[1],z=N-t,q=C-e,L=M*z-y*q;(L*L/x>i||ga((y*z+M*q)/x-.5)>.3||o>a*g+c*p+l*v)&&(u(t,e,r,a,c,l,N,C,E,b/=S,_/=S,w,d,m),m.point(N,C),u(N,C,E,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Da),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function tr(n){var t=nr(function(t,e){return n([t*Pa,e*Pa])});return function(n){return or(t(n))}}function er(n){this.stream=n}function rr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ur(n){return ir(function(){return n})()}function ir(n){function t(n){return n=a(n[0]*Da,n[1]*Da),[n[0]*h+c,l-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Pa,n[1]*Pa]}function r(){a=Ae(o=lr(m,M,x),i);var n=i(v,d);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,o,a,c,l,s,f=nr(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,M=0,x=0,b=Lc,_=y,w=null,S=null;return t.stream=function(n){return s&&(s.valid=!1),s=or(b(o,f(_(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Lc):He((w=+n)*Da),u()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Ie(n[0][0],n[0][1],n[1][0],n[1][1]):y,u()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Da,d=n[1]%360*Da,r()):[v*Pa,d*Pa]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Da,M=n[1]%360*Da,x=n.length>2?n[2]%360*Da:0,r()):[m*Pa,M*Pa,x*Pa]},ta.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function or(n){return rr(n,function(t,e){n.point(t*Da,e*Da)})}function ar(n,t){return[n,t]}function cr(n,t){return[n>qa?n-La:-qa>n?n+La:n,t]}function lr(n,t,e){return n?t||e?Ae(fr(n),hr(t,e)):fr(n):t||e?hr(t,e):cr}function sr(n){return function(t,e){return t+=n,[t>qa?t-La:-qa>t?t+La:t,e]}}function fr(n){var t=sr(n);return t.invert=sr(-n),t}function hr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+a*u;return[Math.atan2(c*i-s*o,a*r-l*u),tt(s*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*o;return[Math.atan2(c*i+l*o,a*r+s*u),tt(s*r-a*u)]},e}function gr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pr(e,u),i=pr(e,i),(o>0?i>u:u>i)&&(u+=o*La)):(u=n+o*La,i=n-.5*c);for(var l,s=u;o>0?s>i:i>s;s-=c)a.point((l=xe([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function pr(n,t){var e=pe(t);e[0]-=n,Me(e);var r=nt(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ca)%(2*Math.PI)}function vr(n,t,e){var r=ta.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function dr(n,t,e){var r=ta.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function mr(n){return n.source}function yr(n){return n.target}function Mr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(it(r-t)+u*o*it(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Pa,Math.atan2(o,Math.sqrt(r*r+u*u))*Pa]}:function(){return[n*Pa,t*Pa]};return p.distance=h,p}function xr(){function n(n,u){var i=Math.sin(u*=Da),o=Math.cos(u),a=ga((n*=Da)-t),c=Math.cos(a);Yc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Zc.point=function(u,i){t=u*Da,e=Math.sin(i*=Da),r=Math.cos(i),Zc.point=n},Zc.lineEnd=function(){Zc.point=Zc.lineEnd=b}}function br(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function _r(n,t){function e(n,t){o>0?-Ra+Ca>t&&(t=-Ra+Ca):t>Ra-Ca&&(t=Ra-Ca);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(qa/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=K(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Ra]},e):Sr}function wr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return ga(u)<Ca?ar:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-K(u)*Math.sqrt(n*n+e*e)]},e)}function Sr(n,t){return[n,Math.log(Math.tan(qa/4+t/2))]}function kr(n){var t,e=ur(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=qa*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Er(n,t){return[Math.log(Math.tan(qa/4+t/2)),-n]}function Ar(n){return n[0]}function Nr(n){return n[1]}function Cr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function zr(n,t){return n[0]-t[0]||n[1]-t[1]}function qr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Lr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(a*(c-l)-f*(u-i))/(f*o-a*s);return[u+h*o,c+h*s]}function Tr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Rr(){tu(this),this.edge=this.site=this.circle=null}function Dr(n){var t=el.pop()||new Rr;return t.site=n,t}function Pr(n){Xr(n),Qc.remove(n),el.push(n),tu(n)}function Ur(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Pr(n);for(var c=i;c.circle&&ga(e-c.circle.x)<Ca&&ga(r-c.circle.cy)<Ca;)i=c.P,a.unshift(c),Pr(c),c=i;a.unshift(c),Xr(c);for(var l=o;l.circle&&ga(e-l.circle.x)<Ca&&ga(r-l.circle.cy)<Ca;)o=l.N,a.push(l),Pr(l),l=o;a.push(l),Xr(l);var s,f=a.length;for(s=1;f>s;++s)l=a[s],c=a[s-1],Kr(l.edge,c.site,l.site,u);c=a[0],l=a[f-1],l.edge=Jr(c.site,l.site,null,u),Vr(c),Vr(l)}function jr(n){for(var t,e,r,u,i=n.x,o=n.y,a=Qc._;a;)if(r=Fr(a,o)-i,r>Ca)a=a.L;else{if(u=i-Hr(a,o),!(u>Ca)){r>-Ca?(t=a.P,e=a):u>-Ca?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Dr(n);if(Qc.insert(t,c),t||e){if(t===e)return Xr(t),e=Dr(t.site),Qc.insert(c,e),c.edge=e.edge=Jr(t.site,c.site),Vr(t),void Vr(e);if(!e)return void(c.edge=Jr(t.site,c.site));Xr(t),Xr(e);var l=t.site,s=l.x,f=l.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};Kr(e.edge,l,p,x),c.edge=Jr(l,n,null,x),e.edge=Jr(n,p,null,x),Vr(t),Vr(e)}}function Fr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,l=c-t;if(!l)return a;var s=a-r,f=1/i-1/l,h=s/l;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+u-i/2)))/f+r:(r+a)/2}function Hr(n,t){var e=n.N;if(e)return Fr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Or(n){this.site=n,this.edges=[]}function Ir(n){for(var t,e,r,u,i,o,a,c,l,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Kc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)s=a[o].end(),r=s.x,u=s.y,l=a[++o%c].start(),t=l.x,e=l.y,(ga(r-t)>Ca||ga(u-e)>Ca)&&(a.splice(o,0,new Qr(Gr(i.site,s,ga(r-f)<Ca&&p-u>Ca?{x:f,y:ga(t-f)<Ca?e:p}:ga(u-p)<Ca&&h-r>Ca?{x:ga(e-p)<Ca?t:h,y:p}:ga(r-h)<Ca&&u-g>Ca?{x:h,y:ga(t-h)<Ca?e:g}:ga(u-g)<Ca&&r-f>Ca?{x:ga(e-g)<Ca?t:f,y:g}:null),i.site,null)),++c)}function Yr(n,t){return t.angle-n.angle}function Zr(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,l=r.y-a,s=i.x-o,f=i.y-a,h=2*(c*f-l*s);if(!(h>=-za)){var g=c*c+l*l,p=s*s+f*f,v=(f*g-l*p)/h,d=(c*p-s*g)/h,f=d+a,m=rl.pop()||new Zr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=tl._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}tl.insert(y,m),y||(nl=m)}}}}function Xr(n){var t=n.circle;t&&(t.P||(nl=t.N),tl.remove(t),rl.push(t),tu(t),n.circle=null)}function $r(n){for(var t,e=Gc,r=Oe(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Br(t,n)||!r(t)||ga(t.a.x-t.b.x)<Ca&&ga(t.a.y-t.b.y)<Ca)&&(t.a=t.b=null,e.splice(u,1))}function Br(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],l=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=l)return}else i={x:d,y:c};e={x:d,y:l}}else{if(i){if(i.y<c)return}else i={x:d,y:l};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else{if(i){if(i.y<c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Wr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Jr(n,t,e,r){var u=new Wr(n,t);return Gc.push(u),e&&Kr(u,n,t,e),r&&Kr(u,t,n,r),Kc[n.i].edges.push(new Qr(u,n,t)),Kc[t.i].edges.push(new Qr(u,t,n)),u}function Gr(n,t,e){var r=new Wr(n,null);return r.a=t,r.b=e,Gc.push(r),r}function Kr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Qr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ru(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var e,r,u,i=n.sort(ou).pop();for(Gc=[],Kc=new Array(n.length),Qc=new nu,tl=new nu;;)if(u=nl,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Kc[i.i]=new Or(i),jr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Ur(u.arc)}t&&($r(t),Ir(t));var o={cells:Kc,edges:Gc};return Qc=tl=Gc=Kc=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function cu(n){return n.x}function lu(n){return n.y}function su(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&fu(n,c[0],e,r,o,a),c[1]&&fu(n,c[1],o,r,u,a),c[2]&&fu(n,c[2],e,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t,e,r,u,i,o){var a,c=1/0;return function l(n,s,f,h,g){if(!(s>i||f>o||r>h||u>g)){if(p=n.point){var p,v=t-n.x,d=e-n.y,m=v*v+d*d;if(c>m){var y=Math.sqrt(c=m);r=t-y,u=e-y,i=t+y,o=e+y,a=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:l(n,s,f,x,b);break;case 1:l(n,x,f,h,b);break;case 2:l(n,s,b,x,g);break;case 3:l(n,x,b,h,g)}}}(n,r,u,i,o),a}function gu(n,t){n=ta.rgb(n),t=ta.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+xt(Math.round(e+i*n))+xt(Math.round(r+o*n))+xt(Math.round(u+a*n))}}function pu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=mu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function vu(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function du(n,t){var e,r,u,i=il.lastIndex=ol.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=il.exec(n))&&(r=ol.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:vu(e,r)})),i=ol.lastIndex;return i<t.length&&(u=t.slice(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function mu(n,t){for(var e,r=ta.interpolators.length;--r>=0&&!(e=ta.interpolators[r](n,t)););return e}function yu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(mu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function Mu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function bu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function wu(n){return n*n*n}function Su(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function ku(n){return function(t){return Math.pow(t,n)}}function Eu(n){return 1-Math.cos(n*Ra)}function Au(n){return Math.pow(2,10*(n-1))}function Nu(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/La*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*La/t)}}function zu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function qu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Lu(n,t){n=ta.hcl(n),t=ta.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return st(e+i*n,r+o*n,u+a*n)+""}}function Tu(n,t){n=ta.hsl(n),t=ta.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ct(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){n=ta.lab(n),t=ta.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ht(e+i*n,r+o*n,u+a*n)+""}}function Du(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Pu(n){var t=[n.a,n.b],e=[n.c,n.d],r=ju(t),u=Uu(t,e),i=ju(Fu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Pa,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Pa:0}function Uu(n,t){return n[0]*t[0]+n[1]*t[1]}function ju(n){var t=Math.sqrt(Uu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Fu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Hu(n,t){var e,r=[],u=[],i=ta.transform(n),o=ta.transform(t),a=i.translate,c=o.translate,l=i.rotate,s=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:vu(a[0],c[0])},{i:3,x:vu(a[1],c[1])})):r.push(c[0]||c[1]?"translate("+c+")":""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:vu(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:vu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:vu(g[0],p[0])},{i:e-2,x:vu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Ou(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Iu(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Yu(n){for(var t=n.source,e=n.target,r=Vu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Zu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Vu(n,t){if(n===t)return n;for(var e=Zu(n),r=Zu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Xu(n){n.fixed|=2}function $u(n){n.fixed&=-7}function Bu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Wu(n){n.fixed&=-5}function Ju(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Ju(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Gu(n,t){return ta.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ri,n}function Ku(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function Qu(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function ni(n){return n.children}function ti(n){return n.value}function ei(n,t){return t.value-n.value}function ri(n){return ta.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ui(n){return n.x}function ii(n){return n.y}function oi(n,t,e){n.y0=t,n.y=e}function ai(n){return ta.range(n.length)}function ci(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function li(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function si(n){return n.reduce(fi,0)}function fi(n,t){return n+t[1]}function hi(n,t){return gi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function gi(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function pi(n){return[ta.min(n),ta.max(n)]}function vi(n,t){return n.value-t.value}function di(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function mi(n,t){n._pack_next=t,t._pack_prev=n}function yi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Mi(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,o,a,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(xi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],wi(r,u,i),t(i),di(r,i),r._pack_prev=i,di(i,u),u=r._pack_next,o=3;l>o;o++){wi(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(yi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!yi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?mi(r,u=a):mi(r=c,u),o--):(di(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(o=0;l>o;o++)i=e[o],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(bi)}}function xi(n){n._pack_next=n._pack_prev=n}function bi(n){delete n._pack_next,delete n._pack_prev}function _i(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)_i(u[i],t,e,r)}function wi(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),l=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function Si(n,t){return n.parent==t.parent?1:2}function ki(n){var t=n.children;return t.length?t[0]:n.t}function Ei(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ai(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Ni(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Ci(n,t,e){return n.a.parent===t.parent?n.a:e}function zi(n){return 1+ta.max(n,function(n){return n.y})}function qi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Li(n){var t=n.children;return t&&t.length?Li(t[0]):n}function Ti(n){var t,e=n.children;return e&&(t=e.length)?Ti(e[t-1]):n}function Ri(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Di(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Pi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Ui(n){return n.rangeExtent?n.rangeExtent():Pi(n.range())}function ji(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Fi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Hi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ml}function Oi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=ta.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Ii(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Oi:ji,c=r?Iu:Ou;return o=u(n,t,c,e),a=u(t,n,c,mu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Du)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Xi(n,t)},i.tickFormat=function(t,e){return $i(n,t,e)},i.nice=function(t){return Zi(n,t),u()},i.copy=function(){return Ii(n,t,e,r)},u()}function Yi(n,t){return ta.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Zi(n,t){return Fi(n,Hi(Vi(n,t)[2]))}function Vi(n,t){null==t&&(t=10);var e=Pi(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Xi(n,t){return ta.range.apply(ta,Vi(n,t))}function $i(n,t,e){var r=Vi(n,t);if(e){var u=ic.exec(e);if(u.shift(),"s"===u[8]){var i=ta.formatPrefix(Math.max(ga(r[0]),ga(r[1])));return u[7]||(u[7]="."+Bi(i.scale(r[2]))),u[8]="f",e=ta.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Wi(u[8],r)),e=u.join("")}else e=",."+Bi(r[2])+"f";return ta.format(e)}function Bi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Wi(n,t){var e=Bi(t[2]);return n in yl?Math.abs(e-Bi(Math.max(ga(t[0]),ga(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Ji(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Fi(r.map(u),e?Math:xl);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Pi(r),o=[],a=n[0],c=n[1],l=Math.floor(u(a)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)o.push(i(l)*h);o.push(i(l))}else for(o.push(i(l));l++<s;)for(var h=f-1;h>0;h--)o.push(i(l)*h);for(l=0;o[l]<a;l++);for(s=o.length;o[s-1]>c;s--);o=o.slice(l,s)}return o},o.tickFormat=function(n,t){if(!arguments.length)return Ml;arguments.length<2?t=Ml:"function"!=typeof t&&(t=ta.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Ji(n.copy(),t,e,r)},Yi(o,n)}function Gi(n,t,e){function r(t){return n(u(t))}var u=Ki(t),i=Ki(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Xi(e,n)},r.tickFormat=function(n,t){return $i(e,n,t)},r.nice=function(n){return r.domain(Zi(e,n))},r.exponent=function(o){return arguments.length?(u=Ki(t=o),i=Ki(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Gi(n.copy(),t,e)},Yi(r,n)}function Ki(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Qi(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return ta.range(n.length).map(function(n){return t+e*n})}var u,i,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new l;for(var i,o=-1,a=r.length;++o<a;)u.has(i=r[o])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,o=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=(c+l)/2,0):(l-c)/(n.length-1+a);return i=r(c+s*a/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=l=Math.round((c+l)/2),0):(l-c)/(n.length-1+a)|0;return i=r(c+Math.round(s*a/2+(l-c-(n.length-1+a)*s)/2),s),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-a+2*c);return i=r(s+h*c,h),l&&i.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-a+2*c));return i=r(s+Math.round((f-s-(n.length-a)*h)/2),h),l&&i.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Pi(t.a[0])},e.copy=function(){return Qi(n,t)},e.domain(n)}function no(n,t){function i(){var e=0,r=t.length;for(a=[];++e<r;)a[e-1]=ta.quantile(n,e/r);return o}function o(n){return isNaN(n=+n)?void 0:t[ta.bisect(a,n)]}var a;return o.domain=function(t){return arguments.length?(n=t.map(r).filter(u).sort(e),i()):n},o.range=function(n){return arguments.length?(t=n,i()):t},o.quantiles=function(){return a},o.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?a[e-1]:n[0],e<a.length?a[e]:n[n.length-1]]},o.copy=function(){return no(n,t)},i()}function to(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return to(n,t,e)},u()}function eo(n,t){function e(e){return e>=e?t[ta.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return eo(n,t)},e}function ro(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Xi(n,t)},t.tickFormat=function(t,e){return $i(n,t,e)},t.copy=function(){return ro(n)},t}function uo(){return 0}function io(n){return n.innerRadius}function oo(n){return n.outerRadius}function ao(n){return n.startAngle}function co(n){return n.endAngle}function lo(n){return n&&n.padAngle}function so(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function fo(n,t,e,r,u){var i=n[0]-t[0],o=n[1]-t[1],a=(u?r:-r)/Math.sqrt(i*i+o*o),c=a*o,l=-a*i,s=n[0]+c,f=n[1]+l,h=t[0]+c,g=t[1]+l,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(M*M*y-x*x),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,E=_-p,A=w-v,N=S-p,C=k-v;return E*E+A*A>N*N+C*C&&(_=S,w=k),[[_-c,w-l],[_*e/M,w*e/M]]}function ho(n){function t(t){function o(){l.push("M",i(n(s),a))}for(var c,l=[],s=[],f=-1,h=t.length,g=Et(e),p=Et(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(o(),s=[]);return s.length&&o(),l.length?l.join(""):null}var e=Ar,r=Nr,u=Ne,i=go,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=El.get(n)||go).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function go(n){return n.join("L")}function po(n){return go(n)+"Z"}function vo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function mo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function yo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function Mo(n,t){return n.length<4?go(n):n[1]+_o(n.slice(1,-1),wo(n,t))}function xo(n,t){return n.length<3?go(n):n[0]+_o((n.push(n[0]),n),wo([n[n.length-2]].concat(n,[n[1]]),t))}function bo(n,t){return n.length<3?go(n):n[0]+_o(n,wo(n,t))}function _o(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return go(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],a=t[l],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var s=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+s[0]+","+s[1]}return r}function wo(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function So(n){if(n.length<3)return go(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",No(Cl,o),",",No(Cl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Co(c,o,a);return n.pop(),c.push("L",r),c.join("")}function ko(n){if(n.length<4)return go(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(No(Cl,i)+","+No(Cl,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Co(e,i,o);return e.join("")}function Eo(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[No(Cl,o),",",No(Cl,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Co(t,o,a);return t.join("")}function Ao(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return So(n)}function No(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Co(n,t,e){n.push("C",No(Al,t),",",No(Al,e),",",No(Nl,t),",",No(Nl,e),",",No(Cl,t),",",No(Cl,e))}function zo(n,t){return(t[1]-n[1])/(t[0]-n[0])}function qo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=zo(u,i);++t<e;)r[t]=(o+(o=zo(u=i,i=n[t+1])))/2;return r[t]=o,r}function Lo(n){for(var t,e,r,u,i=[],o=qo(n),a=-1,c=n.length-1;++a<c;)t=zo(n[a],n[a+1]),ga(t)<Ca?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function To(n){return n.length<3?go(n):n[0]+_o(n,Lo(n))}function Ro(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-Ra,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Do(n){function t(t){function c(){v.push("M",a(n(m),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=Et(e),b=Et(u),_=e===r?function(){return g}:Et(r),w=u===i?function(){return p}:Et(i);++y<M;)o.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ar,r=Ar,u=0,i=Nr,o=Ne,a=go,c=a.key,l=a,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r
},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=El.get(n)||go).key,l=a.reverse||a,s=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Po(n){return n.radius}function Uo(n){return[n.x,n.y]}function jo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Ra;return[e*Math.cos(r),e*Math.sin(r)]}}function Fo(){return 64}function Ho(){return"circle"}function Oo(n){var t=Math.sqrt(n/qa);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Io(n){return function(){var t,e;(t=this[n])&&(e=t[t.active])&&(--t.count?delete t[t.active]:delete this[n],t.active+=.5,e.event&&e.event.interrupt.call(this,this.__data__,e.index))}}function Yo(n,t,e){return ya(n,Pl),n.namespace=t,n.id=e,n}function Zo(n,t,e,r){var u=n.id,i=n.namespace;return Y(n,"function"==typeof e?function(n,o,a){n[i][u].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Vo(n){return null==n&&(n=""),function(){this.textContent=n}}function Xo(n){return null==n?"__transition__":"__transition_"+n+"__"}function $o(n,t,e,r,u){var i=n[e]||(n[e]={active:0,count:0}),o=i[r];if(!o){var a=u.time;o=i[r]={tween:new l,time:a,delay:u.delay,duration:u.duration,ease:u.ease,index:t},u=null,++i.count,ta.timer(function(u){function c(e){if(i.active>r)return s();var u=i[i.active];u&&(--i.count,delete i[i.active],u.event&&u.event.interrupt.call(n,n.__data__,u.index)),i.active=r,o.event&&o.event.start.call(n,n.__data__,t),o.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&v.push(r)}),h=o.ease,f=o.duration,ta.timer(function(){return p.c=l(e||1)?Ne:l,1},0,a)}function l(e){if(i.active!==r)return 1;for(var u=e/f,a=h(u),c=v.length;c>0;)v[--c].call(n,a);return u>=1?(o.event&&o.event.end.call(n,n.__data__,t),s()):void 0}function s(){return--i.count?delete i[r]:delete n[e],1}var f,h,g=o.delay,p=ec,v=[];return p.t=g+a,u>=g?c(u-g):void(p.c=c)},0,a)}}function Bo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function Wo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function Jo(n){return n.toISOString()}function Go(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=ta.bisect(Vl,u);return i==Vl.length?[t.year,Vi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Vl[i-1]<Vl[i]/u?i-1:i]:[Bl,Vi(n,e)[2]]}return r.invert=function(t){return Ko(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ko)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Ko(+e+1),t).length}var i=r.domain(),o=Pi(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Fi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Ko(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Ko(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Pi(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Ko(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Go(n.copy(),t,e)},Yi(r,n)}function Ko(n){return new Date(n)}function Qo(n){return JSON.parse(n.responseText)}function na(n){var t=ua.createRange();return t.selectNode(ua.body),t.createContextualFragment(n.responseText)}var ta={version:"3.5.5"},ea=[].slice,ra=function(n){return ea.call(n)},ua=this.document;if(ua)try{ra(ua.documentElement.childNodes)[0].nodeType}catch(ia){ra=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),ua)try{ua.createElement("DIV").style.setProperty("opacity",0,"")}catch(oa){var aa=this.Element.prototype,ca=aa.setAttribute,la=aa.setAttributeNS,sa=this.CSSStyleDeclaration.prototype,fa=sa.setProperty;aa.setAttribute=function(n,t){ca.call(this,n,t+"")},aa.setAttributeNS=function(n,t,e){la.call(this,n,t,e+"")},sa.setProperty=function(n,t,e){fa.call(this,n,t+"",e)}}ta.ascending=e,ta.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ta.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},ta.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},ta.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},ta.sum=function(n,t){var e,r=0,i=n.length,o=-1;if(1===arguments.length)for(;++o<i;)u(e=+n[o])&&(r+=e);else for(;++o<i;)u(e=+t.call(n,n[o],o))&&(r+=e);return r},ta.mean=function(n,t){var e,i=0,o=n.length,a=-1,c=o;if(1===arguments.length)for(;++a<o;)u(e=r(n[a]))?i+=e:--c;else for(;++a<o;)u(e=r(t.call(n,n[a],a)))?i+=e:--c;return c?i/c:void 0},ta.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},ta.median=function(n,t){var i,o=[],a=n.length,c=-1;if(1===arguments.length)for(;++c<a;)u(i=r(n[c]))&&o.push(i);else for(;++c<a;)u(i=r(t.call(n,n[c],c)))&&o.push(i);return o.length?ta.quantile(o.sort(e),.5):void 0},ta.variance=function(n,t){var e,i,o=n.length,a=0,c=0,l=-1,s=0;if(1===arguments.length)for(;++l<o;)u(e=r(n[l]))&&(i=e-a,a+=i/++s,c+=i*(e-a));else for(;++l<o;)u(e=r(t.call(n,n[l],l)))&&(i=e-a,a+=i/++s,c+=i*(e-a));return s>1?c/(s-1):void 0},ta.deviation=function(){var n=ta.variance.apply(this,arguments);return n?Math.sqrt(n):n};var ha=i(e);ta.bisectLeft=ha.left,ta.bisect=ta.bisectRight=ha.right,ta.bisector=function(n){return i(1===n.length?function(t,r){return e(n(t),r)}:n)},ta.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=Math.random()*i--|0,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},ta.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ta.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},ta.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=ta.min(arguments,o),e=new Array(t);++n<t;)for(var r,u=-1,i=e[n]=new Array(r);++u<r;)i[u]=arguments[u][n];return e},ta.transpose=function(n){return ta.zip.apply(ta,n)},ta.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ta.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ta.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ta.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var ga=Math.abs;ta.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,u=[],i=a(ga(e)),o=-1;if(n*=i,t*=i,e*=i,0>e)for(;(r=n+e*++o)>t;)u.push(r/i);else for(;(r=n+e*++o)<t;)u.push(r/i);return u},ta.map=function(n,t){var e=new l;if(n instanceof l)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var o in n)e.set(o,n[o]);return e};var pa="__proto__",va="\x00";c(l,{has:h,get:function(n){return this._[s(n)]},set:function(n,t){return this._[s(n)]=t},remove:g,keys:p,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:f(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t),this._[t])}}),ta.nest=function(){function n(t,o,a){if(a>=i.length)return r?r.call(u,o):e?o.sort(e):o;for(var c,s,f,h,g=-1,p=o.length,v=i[a++],d=new l;++g<p;)(h=d.get(c=v(s=o[g])))?h.push(s):d.set(c,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,a))}):(s={},f=function(e,r){s[e]=n(t,r,a)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=o[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ta.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return o[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ta.set=function(n){var t=new m;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},c(m,{has:h,add:function(n){return this._[s(n+="")]=!0,n},remove:g,values:p,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t))}}),ta.behavior={},ta.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=M(n,t,t[e]);return n};var da=["webkit","ms","moz","Moz","o","O"];ta.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ta.event=null,ta.requote=function(n){return n.replace(ma,"\\$&")};var ma=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ya={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},Ma=function(n,t){return t.querySelector(n)},xa=function(n,t){return t.querySelectorAll(n)},ba=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(ba=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(Ma=function(n,t){return Sizzle(n,t)[0]||null},xa=Sizzle,ba=Sizzle.matchesSelector),ta.selection=function(){return ta.select(ua.documentElement)};var _a=ta.selection.prototype=[];_a.select=function(n){var t,e,r,u,i=[];n=N(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return A(i)},_a.selectAll=function(n){var t,e,r=[];n=C(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=ra(n.call(e,e.__data__,a,u))),t.parentNode=e);return A(r)};var wa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ta.ns={prefix:wa,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.slice(0,t),n=n.slice(t+1)),wa.hasOwnProperty(e)?{space:wa[e],local:n}:n}},_a.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ta.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},_a.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!L(n[u]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},_a.style=function(n,e,r){var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>u){var i=this.node();return t(i).getComputedStyle(i,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},_a.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(U(t,n[t]));return this}return this.each(U(n,t))},_a.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},_a.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},_a.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},_a.insert=function(n,t){return n=j(n),t=N(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},_a.remove=function(){return this.each(F)},_a.data=function(n,t){function e(n,e){var r,u,i,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),v=new Array(o);if(t){var d,m=new l,y=new Array(o);for(r=-1;++r<o;)m.has(d=t.call(u=n[r],u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d;for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=H(i),m.set(d,!0);for(r=-1;++r<o;)m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=H(i);for(;f>r;++r)p[r]=H(e[r]);for(;o>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,a.push(p),c.push(g),s.push(v)}var r,u,i=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++i<o;)(u=r[i])&&(n[i]=u.__data__);return n}var a=Z([]),c=A([]),s=A([]);if("function"==typeof n)for(;++i<o;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<o;)e(r=this[i],n);return c.enter=function(){return a},c.exit=function(){return s},c},_a.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},_a.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return A(u)},_a.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},_a.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},_a.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},_a.call=function(n){var t=ra(arguments);return n.apply(t[0]=this,t),this},_a.empty=function(){return!this.node()},_a.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},_a.size=function(){var n=0;return Y(this,function(){++n}),n};var Sa=[];ta.selection.enter=Z,ta.selection.enter.prototype=Sa,Sa.append=_a.append,Sa.empty=_a.empty,Sa.node=_a.node,Sa.call=_a.call,Sa.size=_a.size,Sa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,a)),e.__data__=i.__data__):t.push(null)}return A(o)},Sa.insert=function(n,t){return arguments.length<2&&(t=V(this)),_a.insert.call(this,n,t)},ta.select=function(t){var e;return"string"==typeof t?(e=[Ma(t,ua)],e.parentNode=ua.documentElement):(e=[t],e.parentNode=n(t)),A([e])},ta.selectAll=function(n){var t;return"string"==typeof n?(t=ra(xa(n,ua)),t.parentNode=ua.documentElement):(t=n,t.parentNode=null),A([t])},_a.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var ka=ta.map({mouseenter:"mouseover",mouseleave:"mouseout"});ua&&ka.forEach(function(n){"on"+n in ua&&ka.remove(n)});var Ea,Aa=0;ta.mouse=function(n){return J(n,k())};var Na=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;ta.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return J(n,r)},ta.behavior.drag=function(){function n(){this.on("mousedown.drag",i).on("touchstart.drag",o)}function e(n,t,e,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:"drag",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&ta.event.target===f),g({type:"dragend"}))}var l,s=this,f=ta.event.target,h=s.parentNode,g=r.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=ta.select(e(f)).on(i+d,a).on(o+d,c),y=W(f),M=t(h,v);u?(l=u.apply(s,arguments),l=[l.x-M[0],l.y-M[1]]):l=[0,0],g({type:"dragstart"})}}var r=E(n,"drag","dragstart","dragend"),u=null,i=e(b,ta.mouse,t,"mousemove","mouseup"),o=e(G,ta.touch,y,"touchmove","touchend");return n.origin=function(t){return arguments.length?(u=t,n):u},ta.rebind(n,r,"on")},ta.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?ra(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Ca=1e-6,za=Ca*Ca,qa=Math.PI,La=2*qa,Ta=La-Ca,Ra=qa/2,Da=qa/180,Pa=180/qa,Ua=Math.SQRT2,ja=2,Fa=4;ta.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=rt(v),o=i/(ja*h)*(e*ut(Ua*t+v)-et(v));return[r+o*l,u+o*s,i*e/rt(Ua*t+v)]}return[r+n*l,u+n*s,i*Math.exp(Ua*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],l=o-r,s=a-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+Fa*f)/(2*i*ja*h),p=(c*c-i*i-Fa*f)/(2*c*ja*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Ua;return e.duration=1e3*y,e},ta.behavior.zoom=function(){function n(n){n.on(q,f).on(Oa+".zoom",g).on("dblclick.zoom",p).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function u(n){k.k=Math.max(N[0],Math.min(N[1],n))}function i(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function o(t,e,r,o){t.__chart__={x:k.x,y:k.y,k:k.k},u(Math.pow(2,o)),i(d=e,r),t=ta.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function a(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function c(n){z++||n({type:"zoomstart"})}function l(n){a(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function s(n){--z||n({type:"zoomend"}),d=null}function f(){function n(){f=1,i(ta.mouse(u),g),l(a)}function r(){h.on(L,null).on(T,null),p(f&&ta.event.target===o),s(a)}var u=this,o=ta.event.target,a=D.of(u,arguments),f=0,h=ta.select(t(u)).on(L,n).on(T,r),g=e(ta.mouse(u)),p=W(u);Dl.call(u),c(a)}function h(){function n(){var n=ta.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=ta.event.target;ta.select(t).on(x,r).on(b,a),_.push(t);for(var e=ta.event.changedTouches,u=0,i=e.length;i>u;++u)d[e[u].identifier]=null;var c=n(),l=Date.now();if(1===c.length){if(500>l-M){var s=c[0];o(p,s,d[s.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=l}else if(c.length>1){var s=c[0],f=c[1],h=s[0]-f[0],g=s[1]-f[1];m=h*h+g*g}}function r(){var n,t,e,r,o=ta.touches(p);Dl.call(p);for(var a=0,c=o.length;c>a;++a,r=null)if(e=o[a],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],u(f*g)}M=null,i(n,t),l(v)}function a(){if(ta.event.touches.length){for(var t=ta.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}ta.selectAll(_).on(y,null),w.on(q,f).on(R,h),E(),s(v)}var g,p=this,v=D.of(p,arguments),d={},m=0,y=".zoom-"+ta.event.changedTouches[0].identifier,x="touchmove"+y,b="touchend"+y,_=[],w=ta.select(p),E=W(p);t(),c(v),w.on(q,null).on(R,t)}function g(){var n=D.of(this,arguments);y?clearTimeout(y):(v=e(d=m||ta.mouse(this)),Dl.call(this),c(n)),y=setTimeout(function(){y=null,s(n)},50),S(),u(Math.pow(2,.002*Ha())*k.k),i(d,v),l(n)}function p(){var n=ta.mouse(this),t=Math.log(k.k)/Math.LN2;o(this,n,e(n),ta.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,m,y,M,x,b,_,w,k={x:0,y:0,k:1},A=[960,500],N=Ia,C=250,z=0,q="mousedown.zoom",L="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=E(n,"zoomstart","zoom","zoomend");return Oa||(Oa="onwheel"in ua?(Ha=function(){return-ta.event.deltaY*(ta.event.deltaMode?120:1)},"wheel"):"onmousewheel"in ua?(Ha=function(){return ta.event.wheelDelta},"mousewheel"):(Ha=function(){return-ta.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Tl?ta.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},c(n)}).tween("zoom:zoom",function(){var e=A[0],r=A[1],u=d?d[0]:e/2,i=d?d[1]:r/2,o=ta.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:u-r[0]*a,y:i-r[1]*a,k:a},l(n)}}).each("interrupt.zoom",function(){s(n)}).each("end.zoom",function(){s(n)}):(this.__chart__=k,c(n),l(n),s(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},a(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:+t},a(),n):k.k},n.scaleExtent=function(t){return arguments.length?(N=null==t?Ia:[+t[0],+t[1]],n):N},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(A=t&&[+t[0],+t[1]],n):A},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},ta.rebind(n,D,"on")};var Ha,Oa,Ia=[0,1/0];ta.color=ot,ot.prototype.toString=function(){return this.rgb()+""},ta.hsl=at;var Ya=at.prototype=new ot;Ya.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new at(this.h,this.s,this.l/n)},Ya.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new at(this.h,this.s,n*this.l)},Ya.rgb=function(){return ct(this.h,this.s,this.l)},ta.hcl=lt;var Za=lt.prototype=new ot;Za.brighter=function(n){return new lt(this.h,this.c,Math.min(100,this.l+Va*(arguments.length?n:1)))},Za.darker=function(n){return new lt(this.h,this.c,Math.max(0,this.l-Va*(arguments.length?n:1)))},Za.rgb=function(){return st(this.h,this.c,this.l).rgb()},ta.lab=ft;var Va=18,Xa=.95047,$a=1,Ba=1.08883,Wa=ft.prototype=new ot;Wa.brighter=function(n){return new ft(Math.min(100,this.l+Va*(arguments.length?n:1)),this.a,this.b)},Wa.darker=function(n){return new ft(Math.max(0,this.l-Va*(arguments.length?n:1)),this.a,this.b)},Wa.rgb=function(){return ht(this.l,this.a,this.b)},ta.rgb=mt;var Ja=mt.prototype=new ot;Ja.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new mt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mt(u,u,u)},Ja.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mt(n*this.r,n*this.g,n*this.b)},Ja.hsl=function(){return _t(this.r,this.g,this.b)},Ja.toString=function(){return"#"+xt(this.r)+xt(this.g)+xt(this.b)};var Ga=ta.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Ga.forEach(function(n,t){Ga.set(n,yt(t))}),ta.functor=Et,ta.xhr=At(y),ta.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Nt(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=l)return o;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;l>s;){var r=n.charCodeAt(s++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++a);else if(r!==c)continue;return n.slice(t,s-a)}return n.slice(t)}for(var r,u,i={},o={},a=[],l=n.length,s=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,f++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new m,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},ta.csv=ta.dsv(",","text/csv"),ta.tsv=ta.dsv(" ","text/tab-separated-values");var Ka,Qa,nc,tc,ec,rc=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ta.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Qa?Qa.n=i:Ka=i,Qa=i,nc||(tc=clearTimeout(tc),nc=1,rc(qt))},ta.timer.flush=function(){Lt(),Tt()},ta.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var uc=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);ta.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ta.round(n,Rt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),uc[8+e/3]};var ic=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,oc=ta.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ta.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),ac=ta.time={},cc=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){lc.setUTCDate.apply(this._,arguments)},setDay:function(){lc.setUTCDay.apply(this._,arguments)},setFullYear:function(){lc.setUTCFullYear.apply(this._,arguments)},setHours:function(){lc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){lc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){lc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){lc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){lc.setUTCSeconds.apply(this._,arguments)},setTime:function(){lc.setTime.apply(this._,arguments)}};var lc=Date.prototype;ac.year=Ft(function(n){return n=ac.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ac.years=ac.year.range,ac.years.utc=ac.year.utc.range,ac.day=Ft(function(n){var t=new cc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ac.days=ac.day.range,ac.days.utc=ac.day.utc.range,ac.dayOfYear=function(n){var t=ac.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ac[n]=Ft(function(n){return(n=ac.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ac.year(n).getDay();return Math.floor((ac.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ac[n+"s"]=e.range,ac[n+"s"].utc=e.utc.range,ac[n+"OfYear"]=function(n){var e=ac.year(n).getDay();return Math.floor((ac.dayOfYear(n)+(e+t)%7)/7)}}),ac.week=ac.sunday,ac.weeks=ac.sunday.range,ac.weeks.utc=ac.sunday.utc.range,ac.weekOfYear=ac.sundayOfYear;var sc={"-":"",_:" ",0:"0"},fc=/^\s*\d+/,hc=/^%/;ta.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var gc=ta.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ta.format=gc.numberFormat,ta.geo={},ce.prototype={s:0,t:0,add:function(n){le(n,this.t,pc),le(pc.s,this.s,this),this.s?this.t+=pc.t:this.s=pc.t
},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var pc=new ce;ta.geo.stream=function(n,t){n&&vc.hasOwnProperty(n.type)?vc[n.type](n,t):se(n,t)};var vc={Feature:function(n,t){se(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)se(e[r].geometry,t)}},dc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){fe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)fe(e[r],t,0)},Polygon:function(n,t){he(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)se(e[r],t)}};ta.geo.area=function(n){return mc=0,ta.geo.stream(n,Mc),mc};var mc,yc=new ce,Mc={sphere:function(){mc+=4*qa},point:b,lineStart:b,lineEnd:b,polygonStart:function(){yc.reset(),Mc.lineStart=ge},polygonEnd:function(){var n=2*yc;mc+=0>n?4*qa+n:n,Mc.lineStart=Mc.lineEnd=Mc.point=b}};ta.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=pe([t*Da,e*Da]);if(m){var u=de(m,r),i=[u[1],-u[0],0],o=de(i,u);Me(o),o=xe(o);var c=t-p,l=c>0?1:-1,v=o[0]*Pa*l,d=ga(c)>180;if(d^(v>l*p&&l*t>v)){var y=o[1]*Pa;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>l*p&&l*t>v)){var y=-o[1]*Pa;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=ga(r)>180?r+(r>0?360:-360):r}else v=n,d=e;Mc.point(n,e),t(n,e)}function i(){Mc.lineStart()}function o(){u(v,d),Mc.lineEnd(),ga(y)>Ca&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=o,y=0,Mc.polygonStart()},polygonEnd:function(){Mc.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>yc?(s=-(h=180),f=-(g=90)):y>Ca?g=90:-Ca>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],ta.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],l(e[0],u)||l(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,s=e[0],h=u[1])}return M=x=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),ta.geo.centroid=function(n){xc=bc=_c=wc=Sc=kc=Ec=Ac=Nc=Cc=zc=0,ta.geo.stream(n,qc);var t=Nc,e=Cc,r=zc,u=t*t+e*e+r*r;return za>u&&(t=kc,e=Ec,r=Ac,Ca>bc&&(t=_c,e=wc,r=Sc),u=t*t+e*e+r*r,za>u)?[0/0,0/0]:[Math.atan2(e,t)*Pa,tt(r/Math.sqrt(u))*Pa]};var xc,bc,_c,wc,Sc,kc,Ec,Ac,Nc,Cc,zc,qc={sphere:b,point:_e,lineStart:Se,lineEnd:ke,polygonStart:function(){qc.lineStart=Ee},polygonEnd:function(){qc.lineStart=Se}},Lc=Le(Ne,Pe,je,[-qa,-qa/2]),Tc=1e9;ta.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Ie(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ta.geo.conicEqualArea=function(){return Ye(Ze)}).raw=Ze,ta.geo.albers=function(){return ta.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ta.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=ta.geo.albers(),o=ta.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ta.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=o.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Ca,f+.12*l+Ca],[s-.214*l-Ca,f+.234*l-Ca]]).stream(c).point,u=a.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Ca,f+.166*l+Ca],[s-.115*l-Ca,f+.234*l-Ca]]).stream(c).point,n},n.scale(1070)};var Rc,Dc,Pc,Uc,jc,Fc,Hc={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Dc=0,Hc.lineStart=Ve},polygonEnd:function(){Hc.lineStart=Hc.lineEnd=Hc.point=b,Rc+=ga(Dc/2)}},Oc={point:Xe,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Ic={point:We,lineStart:Je,lineEnd:Ge,polygonStart:function(){Ic.lineStart=Ke},polygonEnd:function(){Ic.point=We,Ic.lineStart=Je,Ic.lineEnd=Ge}};ta.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),ta.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return Rc=0,ta.geo.stream(n,u(Hc)),Rc},n.centroid=function(n){return _c=wc=Sc=kc=Ec=Ac=Nc=Cc=zc=0,ta.geo.stream(n,u(Ic)),zc?[Nc/zc,Cc/zc]:Ac?[kc/Ac,Ec/Ac]:Sc?[_c/Sc,wc/Sc]:[0/0,0/0]},n.bounds=function(n){return jc=Fc=-(Pc=Uc=1/0),ta.geo.stream(n,u(Oc)),[[Pc,Uc],[jc,Fc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||tr(n):y,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new $e:new Qe(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(ta.geo.albersUsa()).context(null)},ta.geo.transform=function(n){return{stream:function(t){var e=new er(t);for(var r in n)e[r]=n[r];return e}}},er.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ta.geo.projection=ur,ta.geo.projectionMutator=ir,(ta.geo.equirectangular=function(){return ur(ar)}).raw=ar.invert=ar,ta.geo.rotation=function(n){function t(t){return t=n(t[0]*Da,t[1]*Da),t[0]*=Pa,t[1]*=Pa,t}return n=lr(n[0]%360*Da,n[1]*Da,n.length>2?n[2]*Da:0),t.invert=function(t){return t=n.invert(t[0]*Da,t[1]*Da),t[0]*=Pa,t[1]*=Pa,t},t},cr.invert=ar,ta.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=lr(-n[0]*Da,-n[1]*Da,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Pa,n[1]*=Pa}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=gr((t=+r)*Da,u*Da),n):t},n.precision=function(r){return arguments.length?(e=gr(t*Da,(u=+r)*Da),n):u},n.angle(90)},ta.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Da,u=n[1]*Da,i=t[1]*Da,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*s-c*f*a)*e),c*s+l*f*a)},ta.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ta.range(Math.ceil(i/d)*d,u,d).map(h).concat(ta.range(Math.ceil(l/m)*m,c,m).map(g)).concat(ta.range(Math.ceil(r/p)*p,e,p).filter(function(n){return ga(n%d)>Ca}).map(s)).concat(ta.range(Math.ceil(a/v)*v,o,v).filter(function(n){return ga(n%m)>Ca}).map(f))}var e,r,u,i,o,a,c,l,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=vr(a,o,90),f=dr(r,e,y),h=vr(l,c,90),g=dr(i,u,y),n):y},n.majorExtent([[-180,-90+Ca],[180,90-Ca]]).minorExtent([[-180,-80-Ca],[180,80+Ca]])},ta.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=mr,u=yr;return n.distance=function(){return ta.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},ta.geo.interpolate=function(n,t){return Mr(n[0]*Da,n[1]*Da,t[0]*Da,t[1]*Da)},ta.geo.length=function(n){return Yc=0,ta.geo.stream(n,Zc),Yc};var Yc,Zc={sphere:b,point:b,lineStart:xr,lineEnd:b,polygonStart:b,polygonEnd:b},Vc=br(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ta.geo.azimuthalEqualArea=function(){return ur(Vc)}).raw=Vc;var Xc=br(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},y);(ta.geo.azimuthalEquidistant=function(){return ur(Xc)}).raw=Xc,(ta.geo.conicConformal=function(){return Ye(_r)}).raw=_r,(ta.geo.conicEquidistant=function(){return Ye(wr)}).raw=wr;var $c=br(function(n){return 1/n},Math.atan);(ta.geo.gnomonic=function(){return ur($c)}).raw=$c,Sr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ra]},(ta.geo.mercator=function(){return kr(Sr)}).raw=Sr;var Bc=br(function(){return 1},Math.asin);(ta.geo.orthographic=function(){return ur(Bc)}).raw=Bc;var Wc=br(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ta.geo.stereographic=function(){return ur(Wc)}).raw=Wc,Er.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ra]},(ta.geo.transverseMercator=function(){var n=kr(Er),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Er,ta.geom={},ta.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=Et(e),i=Et(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(zr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var l=Cr(a),s=Cr(c),f=s[0]===l[0],h=s[s.length-1]===l[l.length-1],g=[];for(t=l.length-1;t>=0;--t)g.push(n[a[l[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[a[s[t]][2]]);return g}var e=Ar,r=Nr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ta.geom.polygon=function(n){return ya(n,Jc),n};var Jc=ta.geom.polygon.prototype=[];Jc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Jc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Jc.clip=function(n){for(var t,e,r,u,i,o,a=Tr(n),c=-1,l=this.length-Tr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],qr(o,s,u)?(qr(i,s,u)||n.push(Lr(i,o,s,u)),n.push(o)):qr(i,s,u)&&n.push(Lr(i,o,s,u)),i=o;a&&n.push(n[0]),s=u}return n};var Gc,Kc,Qc,nl,tl,el=[],rl=[];Or.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Yr),t.length},Qr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(eu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,eu(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?uu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ru(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,eu(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ru(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},ta.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(e(n),a).cells.forEach(function(e,a){var c=e.edges,l=e.site,s=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=i&&l.y>=u&&l.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];s.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ca)*Ca,y:Math.round(o(n,t)/Ca)*Ca,i:t}})}var r=Ar,u=Nr,i=r,o=u,a=ul;return n?t(n):(t.links=function(n){return iu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Yr),c=-1,l=a.length,s=a[l-1].edge,f=s.l===o?s.r:s.l;++c<l;)u=s,i=f,s=a[c].edge,f=s.l===o?s.r:s.l,r<i.i&&r<f.i&&au(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=Et(r=n),t):r},t.y=function(n){return arguments.length?(o=Et(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?ul:n,t):a===ul?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===ul?null:a&&a[1]},t)};var ul=[[-1e6,-1e6],[1e6,1e6]];ta.geom.delaunay=function(n){return ta.geom.voronoi().triangles(n)},ta.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(ga(c-e)+ga(s-r)<.01)l(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,o,a),l(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,o,a)}function l(n,t,e,r,u,o,a,c){var l=.5*(u+a),s=.5*(o+c),f=e>=l,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=su()),f?u=l:a=l,h?o=s:c=s,i(n,t,e,r,u,o,a,c)}var s,f,h,g,p,v,d,m,y,M=Et(a),x=Et(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=su();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},k.find=function(n){return hu(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var o,a=Ar,c=Nr;return(o=arguments.length)?(a=cu,c=lu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},ta.interpolateRgb=gu,ta.interpolateObject=pu,ta.interpolateNumber=vu,ta.interpolateString=du;var il=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ol=new RegExp(il.source,"g");ta.interpolate=mu,ta.interpolators=[function(n,t){var e=typeof t;return("string"===e?Ga.has(t)||/^(#|rgb\(|hsl\()/.test(t)?gu:du:t instanceof ot?gu:Array.isArray(t)?yu:"object"===e&&isNaN(t)?pu:vu)(n,t)}],ta.interpolateArray=yu;var al=function(){return y},cl=ta.map({linear:al,poly:ku,quad:function(){return _u},cubic:function(){return wu},sin:function(){return Eu},exp:function(){return Au},circle:function(){return Nu},elastic:Cu,back:zu,bounce:function(){return qu}}),ll=ta.map({"in":y,out:xu,"in-out":bu,"out-in":function(n){return bu(xu(n))}});ta.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=cl.get(e)||al,r=ll.get(r)||y,Mu(r(e.apply(null,ea.call(arguments,1))))},ta.interpolateHcl=Lu,ta.interpolateHsl=Tu,ta.interpolateLab=Ru,ta.interpolateRound=Du,ta.transform=function(n){var t=ua.createElementNS(ta.ns.prefix.svg,"g");return(ta.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Pu(e?e.matrix:sl)})(n)},Pu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var sl={a:1,b:0,c:0,d:1,e:0,f:0};ta.interpolateTransform=Hu,ta.layout={},ta.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Yu(n[e]));return t}},ta.layout.chord=function(){function n(){var n,l,f,h,g,p={},v=[],d=ta.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];v.push(l),m.push(ta.range(i)),n+=l}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(La-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ta.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var l=t.charge/c;n.px-=i*l,n.py-=o*l}return!0}if(t.point&&c&&p>c){var l=t.pointCharge/c;n.px-=i*l,n.py-=o*l}}return!t.charge}}function t(n){n.px=ta.event.x,n.py=ta.event.y,a.resume()}var e,r,u,i,o,a={},c=ta.dispatch("start","tick","end"),l=[1,1],s=.9,f=fl,h=hl,g=-30,p=gl,v=.1,d=.64,m=[],M=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,y,x,b=m.length,_=M.length;for(e=0;_>e;++e)a=M[e],f=a.source,h=a.target,y=h.x-f.x,x=h.y-f.y,(p=y*y+x*x)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,y*=p,x*=p,h.x-=y*(d=f.weight/(h.weight+f.weight)),h.y-=x*d,f.x+=y*(d=1-d),f.y+=x*d);if((d=r*v)&&(y=l[0]/2,x=l[1]/2,e=-1,d))for(;++e<b;)a=m[e],a.x+=(y-a.x)*d,a.y+=(x-a.y)*d;if(g)for(Ju(t=ta.geom.quadtree(m),r,o),e=-1;++e<b;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<b;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*s,a.y-=(a.py-(a.py=a.y))*s);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(M=n,a):M},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(s=+n,a):s},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ta.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=M[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,l=o.length;++a<l;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,s=M.length,p=l[0],v=l[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;s>t;++t)r=M[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;s>t;++t)u[t]=+f.call(this,M[t],t);else for(t=0;s>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;s>t;++t)i[t]=+h.call(this,M[t],t);else for(t=0;s>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=ta.behavior.drag().origin(y).on("dragstart.force",Xu).on("drag.force",t).on("dragend.force",$u)),arguments.length?void this.on("mouseover.force",Bu).on("mouseout.force",Wu).call(e):e},ta.rebind(a,c,"on")};var fl=20,hl=1,gl=1/0;ta.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(l=e.call(n,i,i.depth))&&(c=l.length)){for(var c,l,s;--c>=0;)o.push(s=l[c]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=l}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return Qu(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ei,e=ni,r=ti;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(Ku(t,function(n){n.children&&(n.value=0)}),Qu(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ta.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(a=i[l],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=ta.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Gu(e,r)},ta.layout.pie=function(){function n(o){var a,c=o.length,l=o.map(function(e,r){return+t.call(n,e,r)}),s=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/c,+("function"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=(f-c*g)/ta.sum(l),v=ta.range(c),d=[];return null!=e&&v.sort(e===pl?function(n,t){return l[t]-l[n]}:function(n,t){return e(o[n],o[t])}),v.forEach(function(n){d[n]={data:o[n],value:a=l[n],startAngle:s,endAngle:s+=a*p+g,padAngle:h}}),d}var t=Number,e=pl,r=0,u=La,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var pl={};ta.layout.stack=function(){function n(a,c){if(!(h=a.length))return a;var l=a.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,s,c);l=ta.permute(l,f),s=ta.permute(s,f);var h,g,p,v,d=r.call(n,s,c),m=l[0].length;for(p=0;m>p;++p)for(u.call(n,l[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,l[g][p],v+=s[g-1][p][1],s[g][p][1]);return a}var t=y,e=ai,r=ci,u=oi,i=ui,o=ii;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:vl.get(t)||ai,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:dl.get(t)||ci,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var vl=ta.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(li),i=n.map(si),o=ta.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return ta.range(n.length).reverse()},"default":ai}),dl=ta.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];s>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ci});ta.layout.histogram=function(){function n(n,i){for(var o,a,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=l[i],a>=s[0]&&a<=s[1]&&(o=c[ta.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=pi,u=hi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=Et(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return gi(n,t)}:Et(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ta.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],l=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Qu(a,function(n){n.r=+s(n.value)}),Qu(a,Mi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2;Qu(a,function(n){n.r+=f}),Qu(a,Mi),Qu(a,function(n){n.r-=f})}return _i(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),o}var t,e=ta.layout.hierarchy().sort(vi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Gu(n,e)},ta.layout.tree=function(){function n(n,u){var s=o.call(this,n,u),f=s[0],h=t(f);if(Qu(h,e),h.parent.m=-h.z,Ku(h,r),l)Ku(f,i);else{var g=f,p=f,v=f;Ku(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Ku(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Ni(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],l=u.m,s=i.m,f=o.m,h=c.m;o=Ei(o),u=ki(u),o&&u;)c=ki(c),i=Ei(i),i.a=n,r=o.z+f-u.z-l+a(o._,u._),r>0&&(Ai(Ci(o,n,e),n,r),l+=r,s+=r),f+=o.m,l+=u.m,h+=c.m,s+=i.m;o&&!Ei(i)&&(i.t=o,i.m+=f-s),u&&!ki(c)&&(c.t=u,c.m+=l-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=ta.layout.hierarchy().sort(null).value(null),a=Si,c=[1,1],l=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(l=null==(c=t)?i:null,n):l?null:c},n.nodeSize=function(t){return arguments.length?(l=null==(c=t)?null:i,n):l?c:null},Gu(n,o)},ta.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],l=0;Qu(c,function(n){var t=n.children;t&&t.length?(n.x=qi(t),n.y=zi(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var s=Li(c),f=Ti(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Qu(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=ta.layout.hierarchy().sort(null).value(null),e=Si,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Gu(n,t)},ta.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,l=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(o=h[c-1]),s.area+=o.area,"squarify"!==g||(a=r(s,v))<=p?(h.pop(),p=a):(s.area-=s.pop().area,u(s,v,l,!1),v=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<o;)u=n[i],u.x=a,u.y=l,u.dy=s,a+=u.dx=Math.min(e.x+e.dx-a,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<o;)u=n[i],u.x=a,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=ta.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Ri,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));
return i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ri(t):Di(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Di(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Ri:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Gu(i,a)},ta.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=ta.random.normal.apply(ta,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ta.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ta.scale={};var ml={floor:y,ceil:y};ta.scale.linear=function(){return Ii([0,1],[0,1],mu,!1)};var yl={s:1,g:1,p:1,r:1,e:1};ta.scale.log=function(){return Ji(ta.scale.linear().domain([0,1]),10,!0,[1,10])};var Ml=ta.format(".0e"),xl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ta.scale.pow=function(){return Gi(ta.scale.linear(),1,[0,1])},ta.scale.sqrt=function(){return ta.scale.pow().exponent(.5)},ta.scale.ordinal=function(){return Qi([],{t:"range",a:[[]]})},ta.scale.category10=function(){return ta.scale.ordinal().range(bl)},ta.scale.category20=function(){return ta.scale.ordinal().range(_l)},ta.scale.category20b=function(){return ta.scale.ordinal().range(wl)},ta.scale.category20c=function(){return ta.scale.ordinal().range(Sl)};var bl=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(Mt),_l=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(Mt),wl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(Mt),Sl=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(Mt);ta.scale.quantile=function(){return no([],[])},ta.scale.quantize=function(){return to(0,1,[0,1])},ta.scale.threshold=function(){return eo([.5],[0,1])},ta.scale.identity=function(){return ro([0,1])},ta.svg={},ta.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),l=Math.max(0,+r.apply(this,arguments)),s=o.apply(this,arguments)-Ra,f=a.apply(this,arguments)-Ra,h=Math.abs(f-s),g=s>f?0:1;if(n>l&&(p=l,l=n,n=p),h>=Ta)return t(l,g)+(n?t(n,1-g):"")+"Z";var p,v,d,m,y,M,x,b,_,w,S,k,E=0,A=0,N=[];if((m=(+c.apply(this,arguments)||0)/2)&&(d=i===kl?Math.sqrt(n*n+l*l):+i.apply(this,arguments),g||(A*=-1),l&&(A=tt(d/l*Math.sin(m))),n&&(E=tt(d/n*Math.sin(m)))),l){y=l*Math.cos(s+A),M=l*Math.sin(s+A),x=l*Math.cos(f-A),b=l*Math.sin(f-A);var C=Math.abs(f-s-2*A)<=qa?0:1;if(A&&so(y,M,x,b)===g^C){var z=(s+f)/2;y=l*Math.cos(z),M=l*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-E),w=n*Math.sin(f-E),S=n*Math.cos(s+E),k=n*Math.sin(s+E);var q=Math.abs(s-f+2*E)<=qa?0:1;if(E&&so(_,w,S,k)===1-g^q){var L=(s+f)/2;_=n*Math.cos(L),w=n*Math.sin(L),S=k=null}}else _=w=0;if((p=Math.min(Math.abs(l-n)/2,+u.apply(this,arguments)))>.001){v=l>n^g?0:1;var T=null==S?[_,w]:null==x?[y,M]:Lr([y,M],[S,k],[x,b],[_,w]),R=y-T[0],D=M-T[1],P=x-T[0],U=b-T[1],j=1/Math.sin(Math.acos((R*P+D*U)/(Math.sqrt(R*R+D*D)*Math.sqrt(P*P+U*U)))/2),F=Math.sqrt(T[0]*T[0]+T[1]*T[1]);if(null!=x){var H=Math.min(p,(l-F)/(j+1)),O=fo(null==S?[_,w]:[S,k],[y,M],l,H,g),I=fo([x,b],[_,w],l,H,g);p===H?N.push("M",O[0],"A",H,",",H," 0 0,",v," ",O[1],"A",l,",",l," 0 ",1-g^so(O[1][0],O[1][1],I[1][0],I[1][1]),",",g," ",I[1],"A",H,",",H," 0 0,",v," ",I[0]):N.push("M",O[0],"A",H,",",H," 0 1,",v," ",I[0])}else N.push("M",y,",",M);if(null!=S){var Y=Math.min(p,(n-F)/(j-1)),Z=fo([y,M],[S,k],n,-Y,g),V=fo([_,w],null==x?[y,M]:[x,b],n,-Y,g);p===Y?N.push("L",V[0],"A",Y,",",Y," 0 0,",v," ",V[1],"A",n,",",n," 0 ",g^so(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-g," ",Z[1],"A",Y,",",Y," 0 0,",v," ",Z[0]):N.push("L",V[0],"A",Y,",",Y," 0 0,",v," ",Z[0])}else N.push("L",_,",",w)}else N.push("M",y,",",M),null!=x&&N.push("A",l,",",l," 0 ",C,",",g," ",x,",",b),N.push("L",_,",",w),null!=S&&N.push("A",n,",",n," 0 ",q,",",1-g," ",S,",",k);return N.push("Z"),N.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=io,r=oo,u=uo,i=kl,o=ao,a=co,c=lo;return n.innerRadius=function(t){return arguments.length?(e=Et(t),n):e},n.outerRadius=function(t){return arguments.length?(r=Et(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=Et(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==kl?kl:Et(t),n):i},n.startAngle=function(t){return arguments.length?(o=Et(t),n):o},n.endAngle=function(t){return arguments.length?(a=Et(t),n):a},n.padAngle=function(t){return arguments.length?(c=Et(t),n):c},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-Ra;return[Math.cos(t)*n,Math.sin(t)*n]},n};var kl="auto";ta.svg.line=function(){return ho(y)};var El=ta.map({linear:go,"linear-closed":po,step:vo,"step-before":mo,"step-after":yo,basis:So,"basis-open":ko,"basis-closed":Eo,bundle:Ao,cardinal:bo,"cardinal-open":Mo,"cardinal-closed":xo,monotone:To});El.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Al=[0,2/3,1/3,0],Nl=[0,1/3,2/3,0],Cl=[0,1/6,2/3,1/6];ta.svg.line.radial=function(){var n=ho(Ro);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},mo.reverse=yo,yo.reverse=mo,ta.svg.area=function(){return Do(y)},ta.svg.area.radial=function(){var n=Do(Ro);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ta.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),l=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+u(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)-Ra,s=l.call(n,u,r)-Ra;return{r:i,a0:o,a1:s,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>qa)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=mr,o=yr,a=Po,c=ao,l=co;return n.radius=function(t){return arguments.length?(a=Et(t),n):a},n.source=function(t){return arguments.length?(i=Et(t),n):i},n.target=function(t){return arguments.length?(o=Et(t),n):o},n.startAngle=function(t){return arguments.length?(c=Et(t),n):c},n.endAngle=function(t){return arguments.length?(l=Et(t),n):l},n},ta.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=mr,e=yr,r=Uo;return n.source=function(e){return arguments.length?(t=Et(e),n):t},n.target=function(t){return arguments.length?(e=Et(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ta.svg.diagonal.radial=function(){var n=ta.svg.diagonal(),t=Uo,e=n.projection;return n.projection=function(n){return arguments.length?e(jo(t=n)):t},n},ta.svg.symbol=function(){function n(n,r){return(zl.get(t.call(this,n,r))||Oo)(e.call(this,n,r))}var t=Ho,e=Fo;return n.type=function(e){return arguments.length?(t=Et(e),n):t},n.size=function(t){return arguments.length?(e=Et(t),n):e},n};var zl=ta.map({circle:Oo,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Ll)),e=t*Ll;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/ql),e=t*ql/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/ql),e=t*ql/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ta.svg.symbolTypes=zl.keys();var ql=Math.sqrt(3),Ll=Math.tan(30*Da);_a.transition=function(n){for(var t,e,r=Tl||++Ul,u=Xo(n),i=[],o=Rl||{time:Date.now(),ease:Su,delay:0,duration:250},a=-1,c=this.length;++a<c;){i.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(e=l[s])&&$o(e,s,u,r,o),t.push(e)}return Yo(i,u,r)},_a.interrupt=function(n){return this.each(null==n?Dl:Io(Xo(n)))};var Tl,Rl,Dl=Io(Xo()),Pl=[],Ul=0;Pl.call=_a.call,Pl.empty=_a.empty,Pl.node=_a.node,Pl.size=_a.size,ta.transition=function(n,t){return n&&n.transition?Tl?n.transition(t):n:ta.selection().transition(n)},ta.transition.prototype=Pl,Pl.select=function(n){var t,e,r,u=this.id,i=this.namespace,o=[];n=N(n);for(var a=-1,c=this.length;++a<c;){o.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(r=l[s])&&(e=n.call(r,r.__data__,s,a))?("__data__"in r&&(e.__data__=r.__data__),$o(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Yo(o,i,u)},Pl.selectAll=function(n){var t,e,r,u,i,o=this.id,a=this.namespace,c=[];n=C(n);for(var l=-1,s=this.length;++l<s;)for(var f=this[l],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[a][o],e=n.call(r,r.__data__,h,l),c.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&$o(u,p,a,o,i),t.push(u)}return Yo(c,a,o)},Pl.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Yo(u,this.namespace,this.id)},Pl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Pl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Hu:mu,a=ta.ns.qualify(n);return Zo(this,"attr."+n,t,a.local?i:u)},Pl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=ta.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Pl.style=function(n,e,r){function u(){this.style.removeProperty(n)}function i(e){return null==e?u:(e+="",function(){var u,i=t(this).getComputedStyle(this,null).getPropertyValue(n);return i!==e&&(u=mu(i,e),function(t){this.style.setProperty(n,u(t),r)})})}var o=arguments.length;if(3>o){if("string"!=typeof n){2>o&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Zo(this,"style."+n,e,i)},Pl.styleTween=function(n,e,r){function u(u,i){var o=e.call(this,u,i,t(this).getComputedStyle(this,null).getPropertyValue(n));return o&&function(t){this.style.setProperty(n,o(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,u)},Pl.text=function(n){return Zo(this,"text",n,Vo)},Pl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Pl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ta.ease.apply(ta,arguments)),Y(this,function(r){r[e][t].ease=n}))},Pl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Pl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Pl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=Rl,i=Tl;try{Tl=e,Y(this,function(t,u,i){Rl=t[r][e],n.call(t,t.__data__,u,i)})}finally{Rl=u,Tl=i}}else Y(this,function(u){var i=u[r][e];(i.event||(i.event=ta.dispatch("start","end","interrupt"))).on(n,t)});return this},Pl.transition=function(){for(var n,t,e,r,u=this.id,i=++Ul,o=this.namespace,a=[],c=0,l=this.length;l>c;c++){a.push(n=[]);for(var t=this[c],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[o][u],$o(e,s,o,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Yo(a,o,i)},ta.svg.axis=function(){function n(n){n.each(function(){var n,l=ta.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):y:t,p=l.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ca),d=ta.transition(p.exit()).style("opacity",Ca).remove(),m=ta.transition(p.order()).style("opacity",1),M=Math.max(u,0)+o,x=Ui(f),b=l.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),ta.transition(b));v.append("line"),v.append("text");var w,S,k,E,A=v.select("line"),N=m.select("line"),C=p.select("text").text(g),z=v.select("text"),q=m.select("text"),L="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=Bo,w="x",k="y",S="x2",E="y2",C.attr("dy",0>L?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+L*i+"V0H"+x[1]+"V"+L*i)):(n=Wo,w="y",k="x",S="y2",E="x2",C.attr("dy",".32em").style("text-anchor",0>L?"end":"start"),_.attr("d","M"+L*i+","+x[0]+"H0V"+x[1]+"H"+L*i)),A.attr(E,L*u),z.attr(k,L*M),N.attr(S,0).attr(E,L*u),q.attr(w,0).attr(k,L*M),f.rangeBand){var T=f,R=T.rangeBand()/2;s=f=function(n){return T(n)+R}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=ta.scale.linear(),r=jl,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Fl?t+"":jl,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var jl="bottom",Fl={top:1,right:1,bottom:1,left:1};ta.svg.brush=function(){function n(t){t.each(function(){var t=ta.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",i).on("touchstart.brush",i),o=t.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=t.selectAll(".resize").data(v,y);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Hl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var c,f=ta.transition(t),h=ta.transition(o);l&&(c=Ui(l),h.attr("x",c[0]).attr("width",c[1]-c[0]),r(f)),s&&(c=Ui(s),h.attr("y",c[0]).attr("height",c[1]-c[0]),u(f)),e(f)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+f[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",f[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",f[1]-f[0])}function u(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function i(){function i(){32==ta.event.keyCode&&(C||(M=null,q[0]-=f[1],q[1]-=h[1],C=2),S())}function v(){32==ta.event.keyCode&&2==C&&(q[0]+=f[1],q[1]+=h[1],C=0,S())}function d(){var n=ta.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(ta.event.altKey?(M||(M=[(f[0]+f[1])/2,(h[0]+h[1])/2]),q[0]=f[+(n[0]<M[0])],q[1]=h[+(n[1]<M[1])]):M=null),A&&m(n,l,0)&&(r(k),t=!0),N&&m(n,s,1)&&(u(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,i=Ui(t),c=i[0],l=i[1],s=q[e],v=e?h:f,d=v[1]-v[0];return C&&(c-=s,l-=d+s),r=(e?p:g)?Math.max(c,Math.min(l,n[e])):n[e],C?u=(r+=s)+d:(M&&(s=Math.max(c,Math.min(l,2*M[e]-r))),r>s?(u=r,r=s):u=s),v[0]!=r||v[1]!=u?(e?a=null:o=null,v[0]=r,v[1]=u,!0):void 0}function y(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ta.select("body").style("cursor",null),L.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=ta.select(ta.event.target),w=c.of(b,arguments),k=ta.select(b),E=_.datum(),A=!/^(n|s)$/.test(E)&&l,N=!/^(e|w)$/.test(E)&&s,C=_.classed("extent"),z=W(b),q=ta.mouse(b),L=ta.select(t(b)).on("keydown.brush",i).on("keyup.brush",v);if(ta.event.changedTouches?L.on("touchmove.brush",d).on("touchend.brush",y):L.on("mousemove.brush",d).on("mouseup.brush",y),k.interrupt().selectAll("*").interrupt(),C)q[0]=f[0]-q[0],q[1]=h[0]-q[1];else if(E){var T=+/w$/.test(E),R=+/^n/.test(E);x=[f[1-T]-q[0],h[1-R]-q[1]],q[0]=f[T],q[1]=h[R]}else ta.event.altKey&&(M=q.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),ta.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var o,a,c=E(n,"brushstart","brush","brushend"),l=null,s=null,f=[0,0],h=[0,0],g=!0,p=!0,v=Ol[0];return n.event=function(n){n.each(function(){var n=c.of(this,arguments),t={x:f,y:h,i:o,j:a},e=this.__chart__||t;this.__chart__=t,Tl?ta.select(this).transition().each("start.brush",function(){o=e.i,a=e.j,f=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=yu(f,t.x),r=yu(h,t.y);return o=a=null,function(u){f=t.x=e(u),h=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){o=t.i,a=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(l=t,v=Ol[!l<<1|!s],n):l},n.y=function(t){return arguments.length?(s=t,v=Ol[!l<<1|!s],n):s},n.clamp=function(t){return arguments.length?(l&&s?(g=!!t[0],p=!!t[1]):l?g=!!t:s&&(p=!!t),n):l&&s?[g,p]:l?g:s?p:null},n.extent=function(t){var e,r,u,i,c;return arguments.length?(l&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),o=[e,r],l.invert&&(e=l(e),r=l(r)),e>r&&(c=e,e=r,r=c),(e!=f[0]||r!=f[1])&&(f=[e,r])),s&&(u=t[0],i=t[1],l&&(u=u[1],i=i[1]),a=[u,i],s.invert&&(u=s(u),i=s(i)),u>i&&(c=u,u=i,i=c),(u!=h[0]||i!=h[1])&&(h=[u,i])),n):(l&&(o?(e=o[0],r=o[1]):(e=f[0],r=f[1],l.invert&&(e=l.invert(e),r=l.invert(r)),e>r&&(c=e,e=r,r=c))),s&&(a?(u=a[0],i=a[1]):(u=h[0],i=h[1],s.invert&&(u=s.invert(u),i=s.invert(i)),u>i&&(c=u,u=i,i=c))),l&&s?[[e,u],[r,i]]:l?[e,r]:s&&[u,i])},n.clear=function(){return n.empty()||(f=[0,0],h=[0,0],o=a=null),n},n.empty=function(){return!!l&&f[0]==f[1]||!!s&&h[0]==h[1]},ta.rebind(n,c,"on")};var Hl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ol=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Il=ac.format=gc.timeFormat,Yl=Il.utc,Zl=Yl("%Y-%m-%dT%H:%M:%S.%LZ");Il.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Jo:Zl,Jo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Jo.toString=Zl.toString,ac.second=Ft(function(n){return new cc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ac.seconds=ac.second.range,ac.seconds.utc=ac.second.utc.range,ac.minute=Ft(function(n){return new cc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ac.minutes=ac.minute.range,ac.minutes.utc=ac.minute.utc.range,ac.hour=Ft(function(n){var t=n.getTimezoneOffset()/60;return new cc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ac.hours=ac.hour.range,ac.hours.utc=ac.hour.utc.range,ac.month=Ft(function(n){return n=ac.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ac.months=ac.month.range,ac.months.utc=ac.month.utc.range;var Vl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Xl=[[ac.second,1],[ac.second,5],[ac.second,15],[ac.second,30],[ac.minute,1],[ac.minute,5],[ac.minute,15],[ac.minute,30],[ac.hour,1],[ac.hour,3],[ac.hour,6],[ac.hour,12],[ac.day,1],[ac.day,2],[ac.week,1],[ac.month,1],[ac.month,3],[ac.year,1]],$l=Il.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ne]]),Bl={range:function(n,t,e){return ta.range(Math.ceil(n/e)*e,+t,e).map(Ko)},floor:y,ceil:y};Xl.year=ac.year,ac.scale=function(){return Go(ta.scale.linear(),Xl,$l)};var Wl=Xl.map(function(n){return[n[0].utc,n[1]]}),Jl=Yl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ne]]);Wl.year=ac.year.utc,ac.scale.utc=function(){return Go(ta.scale.linear(),Wl,Jl)},ta.text=At(function(n){return n.responseText}),ta.json=function(n,t){return Nt(n,"application/json",Qo,t)},ta.html=function(n,t){return Nt(n,"text/html",na,t)},ta.xml=At(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(ta):"object"==typeof module&&module.exports&&(module.exports=ta),this.d3=ta}();
// d3.tip
// Copyright (c) 2013 Justin Palmer
//
// Tooltips for d3.js SVG visualizations

// Public - contructs a new tooltip
//
// Returns a tip
d3.tip = function() {
  var direction = d3_tip_direction,
      offset    = d3_tip_offset,
      html      = d3_tip_html,
      node      = initNode(),
      svg       = null,
      point     = null,
      target    = null

  function tip(vis) {
    svg = getSVGNode(vis)
    point = svg.createSVGPoint()
    document.body.appendChild(node)
  }

  // Public - show the tooltip on the screen
  //
  // Returns a tip
  tip.show = function() {
    var args = Array.prototype.slice.call(arguments)
    if(args[args.length - 1] instanceof SVGElement) target = args.pop()

    var content = html.apply(this, args),
        poffset = offset.apply(this, args),
        dir     = direction.apply(this, args),
        nodel   = d3.select(node), i = 0,
        coords

    nodel.html(content)
      .style({ opacity: 1, 'pointer-events': 'all' })

    while(i--) nodel.classed(directions[i], false)
    coords = direction_callbacks.get(dir).apply(this)
    nodel.classed(dir, true).style({
      top: (coords.top +  poffset[0]) + 'px',
      left: (coords.left + poffset[1]) + 'px'
    })

    return tip
  }

  // Public - hide the tooltip
  //
  // Returns a tip
  tip.hide = function() {
    nodel = d3.select(node)
    nodel.style({ opacity: 0, 'pointer-events': 'none' })
    return tip
  }

  // Public: Proxy attr calls to the d3 tip container.  Sets or gets attribute value.
  //
  // n - name of the attribute
  // v - value of the attribute
  //
  // Returns tip or attribute value
  tip.attr = function(n, v) {
    if (arguments.length < 2 && typeof n === 'string') {
      return d3.select(node).attr(n)
    } else {
      var args =  Array.prototype.slice.call(arguments)
      d3.selection.prototype.attr.apply(d3.select(node), args)
    }

    return tip
  }

  // Public: Proxy style calls to the d3 tip container.  Sets or gets a style value.
  //
  // n - name of the property
  // v - value of the property
  //
  // Returns tip or style property value
  tip.style = function(n, v) {
    if (arguments.length < 2 && typeof n === 'string') {
      return d3.select(node).style(n)
    } else {
      var args =  Array.prototype.slice.call(arguments)
      d3.selection.prototype.style.apply(d3.select(node), args)
    }

    return tip
  }

  // Public: Set or get the direction of the tooltip
  //
  // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
  //     sw(southwest), ne(northeast) or se(southeast)
  //
  // Returns tip or direction
  tip.direction = function(v) {
    if (!arguments.length) return direction
    direction = v == null ? v : d3.functor(v)

    return tip
  }

  // Public: Sets or gets the offset of the tip
  //
  // v - Array of [x, y] offset
  //
  // Returns offset or
  tip.offset = function(v) {
    if (!arguments.length) return offset
    offset = v == null ? v : d3.functor(v)

    return tip
  }

  // Public: sets or gets the html value of the tooltip
  //
  // v - String value of the tip
  //
  // Returns html value or tip
  tip.html = function(v) {
    if (!arguments.length) return html
    html = v == null ? v : d3.functor(v)

    return tip
  }

  function d3_tip_direction() { return 'n' }
  function d3_tip_offset() { return [0, 0] }
  function d3_tip_html() { return ' ' }

  var direction_callbacks = d3.map({
    n:  direction_n,
    s:  direction_s,
    e:  direction_e,
    w:  direction_w,
    nw: direction_nw,
    ne: direction_ne,
    sw: direction_sw,
    se: direction_se
  }),

  directions = direction_callbacks.keys()

  function direction_n() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.n.y - node.offsetHeight,
      left: bbox.n.x - node.offsetWidth / 2
    }
  }

  function direction_s() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.s.y,
      left: bbox.s.x - node.offsetWidth / 2
    }
  }

  function direction_e() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.e.y - node.offsetHeight / 2,
      left: bbox.e.x
    }
  }

  function direction_w() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.w.y - node.offsetHeight / 2,
      left: bbox.w.x - node.offsetWidth
    }
  }

  function direction_nw() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.nw.y - node.offsetHeight,
      left: bbox.nw.x - node.offsetWidth
    }
  }

  function direction_ne() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.ne.y - node.offsetHeight,
      left: bbox.ne.x
    }
  }

  function direction_sw() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.sw.y,
      left: bbox.sw.x - node.offsetWidth
    }
  }

  function direction_se() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.se.y,
      left: bbox.e.x
    }
  }

  function initNode() {
    var node = d3.select(document.createElement('div'))
    node.style({
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none',
      boxSizing: 'border-box'
    })

    return node.node()
  }

  function getSVGNode(el) {
    el = el.node()
    if(el.tagName.toLowerCase() == 'svg')
      return el

    return el.ownerSVGElement
  }

  // Private - gets the screen coordinates of a shape
  //
  // Given a shape on the screen, will return an SVGPoint for the directions
  // n(north), s(south), e(east), w(west), ne(northeast), se(southeast), nw(northwest),
  // sw(southwest).
  //
  //    +-+-+
  //    |   |
  //    +   +
  //    |   |
  //    +-+-+
  //
  // Returns an Object {n, s, e, w, nw, sw, ne, se}
  function getScreenBBox() {
    var targetel   = target || d3.event.target,
        bbox       = {},
        matrix     = targetel.getScreenCTM(),
        tbbox      = targetel.getBBox(),
        width      = tbbox.width,
        height     = tbbox.height,
        x          = tbbox.x,
        y          = tbbox.y,
        scrollTop  = document.documentElement.scrollTop || document.body.scrollTop,
        scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft


    point.x = x + scrollLeft
    point.y = y + scrollTop
    bbox.nw = point.matrixTransform(matrix)
    point.x += width
    bbox.ne = point.matrixTransform(matrix)
    point.y += height
    bbox.se = point.matrixTransform(matrix)
    point.x -= width
    bbox.sw = point.matrixTransform(matrix)
    point.y -= height / 2
    bbox.w  = point.matrixTransform(matrix)
    point.x += width
    bbox.e = point.matrixTransform(matrix)
    point.x -= width / 2
    point.y -= height / 2
    bbox.n = point.matrixTransform(matrix)
    point.y += height
    bbox.s = point.matrixTransform(matrix)

    return bbox
  }

  return tip
};
/*
 * MIT Licensed
 * Gabe Lerner (gabelerner@gmail.com)
 *
 * Mercilessly gutted and repackaged by Mako Yass (aboutmako.makopool.com)
 */


// Path element
CanvablePath = function(d) {
	// TODO: convert to real lexer based on http://www.w3.org/TR/SVG11/paths.html#PathDataBNF
	d = d.replace(/,/gm,' '); // get rid of all commas
	d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,'$1 $2'); // separate commands from commands
	d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,'$1 $2'); // separate commands from commands
	d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,'$1 $2'); // separate commands from points
	d = d.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,'$1 $2'); // separate commands from points
	d = d.replace(/([0-9])([+\-])/gm,'$1 $2'); // separate digits when no comma
	d = d.replace(/(\.[0-9]*)(\.)/gm,'$1 $2'); // separate digits when no comma
	d = d.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,'$1 $3 $4 '); // shorthand elliptical arc path syntax
	d = CanvablePath.compressSpaces(d); // compress multiple spaces
	d = CanvablePath.trim(d);
	this.PathParser = new (function(d) {
		this.tokens = d.split(' ');

		this.reset = function() {
			this.i = -1;
			this.command = '';
			this.previousCommand = '';
			this.start = new CanvablePath.Point(0, 0);
			this.control = new CanvablePath.Point(0, 0);
			this.current = new CanvablePath.Point(0, 0);
			this.points = [];
			this.angles = [];
		}

		this.isEnd = function() {
			return this.i >= this.tokens.length - 1;
		}

		this.isCommandOrEnd = function() {
			if (this.isEnd()) return true;
			return this.tokens[this.i + 1].match(/^[A-Za-z]$/) != null;
		}

		this.isRelativeCommand = function() {
			switch(this.command)
			{
				case 'm':
				case 'l':
				case 'h':
				case 'v':
				case 'c':
				case 's':
				case 'q':
				case 't':
				case 'a':
				case 'z':
					return true;
					break;
			}
			return false;
		}

		this.getToken = function() {
			this.i++;
			return this.tokens[this.i];
		}

		this.getScalar = function() {
			return parseFloat(this.getToken());
		}

		this.nextCommand = function() {
			this.previousCommand = this.command;
			this.command = this.getToken();
		}

		this.getPoint = function() {
			var p = new CanvablePath.Point(this.getScalar(), this.getScalar());
			return this.makeAbsolute(p);
		}

		this.getAsControlPoint = function() {
			var p = this.getPoint();
			this.control = p;
			return p;
		}

		this.getAsCurrentPoint = function() {
			var p = this.getPoint();
			this.current = p;
			return p;
		}

		this.getReflectedControlPoint = function() {
			if (this.previousCommand.toLowerCase() != 'c' &&
			    this.previousCommand.toLowerCase() != 's' &&
				this.previousCommand.toLowerCase() != 'q' &&
				this.previousCommand.toLowerCase() != 't' ){
				return this.current;
			}

			// reflect point
			var p = new CanvablePath.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
			return p;
		}

		this.makeAbsolute = function(p) {
			if (this.isRelativeCommand()) {
				p.x += this.current.x;
				p.y += this.current.y;
			}
			return p;
		}

		this.addMarker = function(p, from, priorTo) {
			// if the last angle isn't filled in because we didn't have this point yet ...
			if (priorTo != null && this.angles.length > 0 && this.angles[this.angles.length-1] == null) {
				this.angles[this.angles.length-1] = this.points[this.points.length-1].angleTo(priorTo);
			}
			this.addMarkerAngle(p, from == null ? null : from.angleTo(p));
		}

		this.addMarkerAngle = function(p, a) {
			this.points.push(p);
			this.angles.push(a);
		}

		this.getMarkerPoints = function() { return this.points; }
		this.getMarkerAngles = function() {
			for (var i=0; i<this.angles.length; i++) {
				if (this.angles[i] == null) {
					for (var j=i+1; j<this.angles.length; j++) {
						if (this.angles[j] != null) {
							this.angles[i] = this.angles[j];
							break;
						}
					}
				}
			}
			return this.angles;
		}
	})(d);

	this.bounds = function(){return this.draw(null)}

	this.draw = function(ctx) {
		var pp = this.PathParser;
		pp.reset();

		var bb = new CanvablePath.BoundingBox();
		if (ctx != null) ctx.beginPath();
		while (!pp.isEnd()) {
			pp.nextCommand();
			switch (pp.command) {
			case 'M':
			case 'm':
				var p = pp.getAsCurrentPoint();
				pp.addMarker(p);
				bb.addPoint(p.x, p.y);
				if (ctx != null) ctx.moveTo(p.x, p.y);
				pp.start = pp.current;
				while (!pp.isCommandOrEnd()) {
					var p = pp.getAsCurrentPoint();
					pp.addMarker(p, pp.start);
					bb.addPoint(p.x, p.y);
					if (ctx != null) ctx.lineTo(p.x, p.y);
				}
				break;
			case 'L':
			case 'l':
				while (!pp.isCommandOrEnd()) {
					var c = pp.current;
					var p = pp.getAsCurrentPoint();
					pp.addMarker(p, c);
					bb.addPoint(p.x, p.y);
					if (ctx != null) ctx.lineTo(p.x, p.y);
				}
				break;
			case 'H':
			case 'h':
				while (!pp.isCommandOrEnd()) {
					var newP = new CanvablePath.Point((pp.isRelativeCommand() ? pp.current.x : 0) + pp.getScalar(), pp.current.y);
					pp.addMarker(newP, pp.current);
					pp.current = newP;
					bb.addPoint(pp.current.x, pp.current.y);
					if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
				}
				break;
			case 'V':
			case 'v':
				while (!pp.isCommandOrEnd()) {
					var newP = new CanvablePath.Point(pp.current.x, (pp.isRelativeCommand() ? pp.current.y : 0) + pp.getScalar());
					pp.addMarker(newP, pp.current);
					pp.current = newP;
					bb.addPoint(pp.current.x, pp.current.y);
					if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
				}
				break;
			case 'C':
			case 'c':
				while (!pp.isCommandOrEnd()) {
					var curr = pp.current;
					var p1 = pp.getPoint();
					var cntrl = pp.getAsControlPoint();
					var cp = pp.getAsCurrentPoint();
					pp.addMarker(cp, cntrl, p1);
					bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
					if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
				}
				break;
			case 'S':
			case 's':
				while (!pp.isCommandOrEnd()) {
					var curr = pp.current;
					var p1 = pp.getReflectedControlPoint();
					var cntrl = pp.getAsControlPoint();
					var cp = pp.getAsCurrentPoint();
					pp.addMarker(cp, cntrl, p1);
					bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
					if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
				}
				break;
			case 'Q':
			case 'q':
				while (!pp.isCommandOrEnd()) {
					var curr = pp.current;
					var cntrl = pp.getAsControlPoint();
					var cp = pp.getAsCurrentPoint();
					pp.addMarker(cp, cntrl, cntrl);
					bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
					if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
				}
				break;
			case 'T':
			case 't':
				while (!pp.isCommandOrEnd()) {
					var curr = pp.current;
					var cntrl = pp.getReflectedControlPoint();
					pp.control = cntrl;
					var cp = pp.getAsCurrentPoint();
					pp.addMarker(cp, cntrl, cntrl);
					bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
					if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
				}
				break;
			case 'A':
			case 'a':
				while (!pp.isCommandOrEnd()) {
					var curr = pp.current;
					var rx = pp.getScalar();
					var ry = pp.getScalar();
					var xAxisRotation = pp.getScalar() * (Math.PI / 180.0);
					var largeArcFlag = pp.getScalar();
					var sweepFlag = pp.getScalar();
					var cp = pp.getAsCurrentPoint();

					// Conversion from endpoint to center parameterization
					// http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
					// x1', y1'
					var currp = new CanvablePath.Point(
						Math.cos(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.sin(xAxisRotation) * (curr.y - cp.y) / 2.0,
						-Math.sin(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.cos(xAxisRotation) * (curr.y - cp.y) / 2.0
					);
					// adjust radii
					var l = Math.pow(currp.x,2)/Math.pow(rx,2)+Math.pow(currp.y,2)/Math.pow(ry,2);
					if (l > 1) {
						rx *= Math.sqrt(l);
						ry *= Math.sqrt(l);
					}
					// cx', cy'
					var s = (largeArcFlag == sweepFlag ? -1 : 1) * Math.sqrt(
						((Math.pow(rx,2)*Math.pow(ry,2))-(Math.pow(rx,2)*Math.pow(currp.y,2))-(Math.pow(ry,2)*Math.pow(currp.x,2))) /
						(Math.pow(rx,2)*Math.pow(currp.y,2)+Math.pow(ry,2)*Math.pow(currp.x,2))
					);
					if (isNaN(s)) s = 0;
					var cpp = new CanvablePath.Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
					// cx, cy
					var centp = new CanvablePath.Point(
						(curr.x + cp.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y,
						(curr.y + cp.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y
					);
					// vector magnitude
					var m = function(v) { return Math.sqrt(Math.pow(v[0],2) + Math.pow(v[1],2)); }
					// ratio between two vectors
					var r = function(u, v) { return (u[0]*v[0]+u[1]*v[1]) / (m(u)*m(v)) }
					// angle between two vectors
					var a = function(u, v) { return (u[0]*v[1] < u[1]*v[0] ? -1 : 1) * Math.acos(r(u,v)); }
					// initial angle
					var a1 = a([1,0], [(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry]);
					// angle delta
					var u = [(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry];
					var v = [(-currp.x-cpp.x)/rx,(-currp.y-cpp.y)/ry];
					var ad = a(u, v);
					if (r(u,v) <= -1) ad = Math.PI;
					if (r(u,v) >= 1) ad = 0;

					// for markers
					var dir = 1 - sweepFlag ? 1.0 : -1.0;
					var ah = a1 + dir * (ad / 2.0);
					var halfWay = new CanvablePath.Point(
						centp.x + rx * Math.cos(ah),
						centp.y + ry * Math.sin(ah)
					);
					pp.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
					pp.addMarkerAngle(cp, ah - dir * Math.PI);

					bb.addPoint(cp.x, cp.y); // TODO: this is too naive, make it better
					if (ctx != null) {
						var r = rx > ry ? rx : ry;
						var sx = rx > ry ? 1 : rx / ry;
						var sy = rx > ry ? ry / rx : 1;

						ctx.translate(centp.x, centp.y);
						ctx.rotate(xAxisRotation);
						ctx.scale(sx, sy);
						ctx.arc(0, 0, r, a1, a1 + ad, 1 - sweepFlag);
						ctx.scale(1/sx, 1/sy);
						ctx.rotate(-xAxisRotation);
						ctx.translate(-centp.x, -centp.y);
					}
				}
				break;
			case 'Z':
			case 'z':
				if (ctx != null) ctx.closePath();
				pp.current = pp.start;
			}
		}

		return bb;
	}

	this.getMarkers = function() {
		var points = this.PathParser.getMarkerPoints();
		var angles = this.PathParser.getMarkerAngles();

		var markers = [];
		for (var i=0; i<points.length; i++) {
			markers.push([points[i], angles[i]]);
		}
		return markers;
	}
}







CanvablePath.trim = function(s) { return s.replace(/^\s+|\s+$/g, ''); }

CanvablePath.compressSpaces = function(s) { return s.replace(/[\s\r\t\n]+/gm,' '); }

CanvablePath.Point = function(x, y) {
	this.x = x;
	this.y = y;
}
CanvablePath.Point.prototype.angleTo = function(p) {
	return Math.atan2(p.y - this.y, p.x - this.x);
}
CanvablePath.Point.prototype.applyTransform = function(v) {
	var xp = this.x * v[0] + this.y * v[2] + v[4];
	var yp = this.x * v[1] + this.y * v[3] + v[5];
	this.x = xp;
	this.y = yp;
}

CanvablePath.BoundingBox = function(x1, y1, x2, y2) { // pass in initial points if you want
	this.x1 = Number.NaN;
	this.y1 = Number.NaN;
	this.x2 = Number.NaN;
	this.y2 = Number.NaN;

	this.x = function() { return this.x1; }
	this.y = function() { return this.y1; }
	this.width = function() { return this.x2 - this.x1; }
	this.height = function() { return this.y2 - this.y1; }

	this.addPoint = function(x, y) {
		if (x != null) {
			if (isNaN(this.x1) || isNaN(this.x2)) {
				this.x1 = x;
				this.x2 = x;
			}
			if (x < this.x1) this.x1 = x;
			if (x > this.x2) this.x2 = x;
		}

		if (y != null) {
			if (isNaN(this.y1) || isNaN(this.y2)) {
				this.y1 = y;
				this.y2 = y;
			}
			if (y < this.y1) this.y1 = y;
			if (y > this.y2) this.y2 = y;
		}
	}
	this.addX = function(x) { this.addPoint(x, null); }
	this.addY = function(y) { this.addPoint(null, y); }

	this.addBoundingBox = function(bb) {
		this.addPoint(bb.x1, bb.y1);
		this.addPoint(bb.x2, bb.y2);
	}

	this.addQuadraticCurve = function(p0x, p0y, p1x, p1y, p2x, p2y) {
		var cp1x = p0x + 2/3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)
		var cp1y = p0y + 2/3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)
		var cp2x = cp1x + 1/3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)
		var cp2y = cp1y + 1/3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)
		this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y,	cp2y, p2x, p2y);
	}

	this.addBezierCurve = function(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
		// from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
		var p0 = [p0x, p0y], p1 = [p1x, p1y], p2 = [p2x, p2y], p3 = [p3x, p3y];
		this.addPoint(p0[0], p0[1]);
		this.addPoint(p3[0], p3[1]);

		for (i=0; i<=1; i++) {
			var f = function(t) {
				return Math.pow(1-t, 3) * p0[i]
				+ 3 * Math.pow(1-t, 2) * t * p1[i]
				+ 3 * (1-t) * Math.pow(t, 2) * p2[i]
				+ Math.pow(t, 3) * p3[i];
			}

			var b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
			var a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
			var c = 3 * p1[i] - 3 * p0[i];

			if (a == 0) {
				if (b == 0) continue;
				var t = -c / b;
				if (0 < t && t < 1) {
					if (i == 0) this.addX(f(t));
					if (i == 1) this.addY(f(t));
				}
				continue;
			}

			var b2ac = Math.pow(b, 2) - 4 * c * a;
			if (b2ac < 0) continue;
			var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
			if (0 < t1 && t1 < 1) {
				if (i == 0) this.addX(f(t1));
				if (i == 1) this.addY(f(t1));
			}
			var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
			if (0 < t2 && t2 < 1) {
				if (i == 0) this.addX(f(t2));
				if (i == 1) this.addY(f(t2));
			}
		}
	}

	this.isPointInBox = function(x, y) {
		return (this.x1 <= x && x <= this.x2 && this.y1 <= y && y <= this.y2);
	}

	this.addPoint(x1, y1);
	this.addPoint(x2, y2);
}
!function(){function n(n){function e(){for(;i=a<c.length&&n>p;){var u=a++,e=c[u],o=t.call(e,1);o.push(l(u)),++p,e[0].apply(null,o)}}function l(n){return function(u,t){--p,null==s&&(null!=u?(s=u,a=d=0/0,o()):(c[n]=t,--d?i||e():o()))}}function o(){null!=s?m(s):f?m(s,c):m.apply(null,[s].concat(c))}var r,i,f,c=[],a=0,p=0,d=0,s=null,m=u;return n||(n=1/0),r={defer:function(){return s||(c.push(arguments),++d,e()),r},await:function(n){return m=n,f=!1,d||o(),r},awaitAll:function(n){return m=n,f=!0,d||o(),r}}}function u(){}var t=[].slice;n.version="1.0.7","function"==typeof define&&define.amd?define(function(){return n}):"object"==typeof module&&module.exports?module.exports=n:this.queue=n}();
/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*! noUiSlider - 7.0.10 - 2014-12-27 14:50:47 */

!function(){"use strict";function a(a){return a.split("").reverse().join("")}function b(a,b){return a.substring(0,b.length)===b}function c(a,b){return a.slice(-1*b.length)===b}function d(a,b,c){if((a[b]||a[c])&&a[b]===a[c])throw new Error(b)}function e(a){return"number"==typeof a&&isFinite(a)}function f(a,b){var c=Math.pow(10,b);return(Math.round(a*c)/c).toFixed(b)}function g(b,c,d,g,h,i,j,k,l,m,n,o){var p,q,r,s=o,t="",u="";return i&&(o=i(o)),e(o)?(b!==!1&&0===parseFloat(o.toFixed(b))&&(o=0),0>o&&(p=!0,o=Math.abs(o)),b!==!1&&(o=f(o,b)),o=o.toString(),-1!==o.indexOf(".")?(q=o.split("."),r=q[0],d&&(t=d+q[1])):r=o,c&&(r=a(r).match(/.{1,3}/g),r=a(r.join(a(c)))),p&&k&&(u+=k),g&&(u+=g),p&&l&&(u+=l),u+=r,u+=t,h&&(u+=h),m&&(u=m(u,s)),u):!1}function h(a,d,f,g,h,i,j,k,l,m,n,o){var p,q="";return n&&(o=n(o)),o&&"string"==typeof o?(k&&b(o,k)&&(o=o.replace(k,""),p=!0),g&&b(o,g)&&(o=o.replace(g,"")),l&&b(o,l)&&(o=o.replace(l,""),p=!0),h&&c(o,h)&&(o=o.slice(0,-1*h.length)),d&&(o=o.split(d).join("")),f&&(o=o.replace(f,".")),p&&(q+="-"),q+=o,q=q.replace(/[^0-9\.\-.]/g,""),""===q?!1:(q=Number(q),j&&(q=j(q)),e(q)?q:!1)):!1}function i(a){var b,c,e,f={};for(b=0;b<l.length;b+=1)if(c=l[b],e=a[c],void 0===e)f[c]="negative"!==c||f.negativeBefore?"mark"===c&&"."!==f.thousand?".":!1:"-";else if("decimals"===c){if(!(e>=0&&8>e))throw new Error(c);f[c]=e}else if("encoder"===c||"decoder"===c||"edit"===c||"undo"===c){if("function"!=typeof e)throw new Error(c);f[c]=e}else{if("string"!=typeof e)throw new Error(c);f[c]=e}return d(f,"mark","thousand"),d(f,"prefix","negative"),d(f,"prefix","negativeBefore"),f}function j(a,b,c){var d,e=[];for(d=0;d<l.length;d+=1)e.push(a[l[d]]);return e.push(c),b.apply("",e)}function k(a){return this instanceof k?void("object"==typeof a&&(a=i(a),this.to=function(b){return j(a,g,b)},this.from=function(b){return j(a,h,b)})):new k(a)}var l=["decimals","thousand","mark","prefix","postfix","encoder","decoder","negativeBefore","negative","edit","undo"];window.wNumb=k}(),function(a){"use strict";function b(b){return b instanceof a||a.zepto&&a.zepto.isZ(b)}function c(b,c){return"string"==typeof b&&0===b.indexOf("-inline-")?(this.method=c||"html",this.target=this.el=a(b.replace("-inline-","")||"<div/>"),!0):void 0}function d(b){if("string"==typeof b&&0!==b.indexOf("-")){this.method="val";var c=document.createElement("input");return c.name=b,c.type="hidden",this.target=this.el=a(c),!0}}function e(a){return"function"==typeof a?(this.target=!1,this.method=a,!0):void 0}function f(a,c){return b(a)&&!c?(a.is("input, select, textarea")?(this.method="val",this.target=a.on("change.liblink",this.changeHandler)):(this.target=a,this.method="html"),!0):void 0}function g(a,c){return b(a)&&("function"==typeof c||"string"==typeof c&&a[c])?(this.method=c,this.target=a,!0):void 0}function h(b,c,d){var e=this,f=!1;if(this.changeHandler=function(b){var c=e.formatInstance.from(a(this).val());return c===!1||isNaN(c)?(a(this).val(e.lastSetValue),!1):void e.changeHandlerMethod.call("",b,c)},this.el=!1,this.formatInstance=d,a.each(k,function(a,d){return f=d.call(e,b,c),!f}),!f)throw new RangeError("(Link) Invalid Link.")}function i(a){this.items=[],this.elements=[],this.origin=a}function j(b,c,d,e){0===b&&(b=this.LinkDefaultFlag),this.linkAPI||(this.linkAPI={}),this.linkAPI[b]||(this.linkAPI[b]=new i(this));var f=new h(c,d,e||this.LinkDefaultFormatter);f.target||(f.target=a(this)),f.changeHandlerMethod=this.LinkConfirm(b,f.el),this.linkAPI[b].push(f,f.el),this.LinkUpdate(b)}var k=[c,d,e,f,g];h.prototype.set=function(a){var b=Array.prototype.slice.call(arguments),c=b.slice(1);this.lastSetValue=this.formatInstance.to(a),c.unshift(this.lastSetValue),("function"==typeof this.method?this.method:this.target[this.method]).apply(this.target,c)},i.prototype.push=function(a,b){this.items.push(a),b&&this.elements.push(b)},i.prototype.reconfirm=function(a){var b;for(b=0;b<this.elements.length;b+=1)this.origin.LinkConfirm(a,this.elements[b])},i.prototype.remove=function(){var a;for(a=0;a<this.items.length;a+=1)this.items[a].target.off(".liblink");for(a=0;a<this.elements.length;a+=1)this.elements[a].remove()},i.prototype.change=function(a){if(this.origin.LinkIsEmitting)return!1;this.origin.LinkIsEmitting=!0;var b,c=Array.prototype.slice.call(arguments,1);for(c.unshift(a),b=0;b<this.items.length;b+=1)this.items[b].set.apply(this.items[b],c);this.origin.LinkIsEmitting=!1},a.fn.Link=function(b){var c=this;if(b===!1)return c.each(function(){this.linkAPI&&(a.map(this.linkAPI,function(a){a.remove()}),delete this.linkAPI)});if(void 0===b)b=0;else if("string"!=typeof b)throw new Error("Flag must be string.");return{to:function(a,d,e){return c.each(function(){j.call(this,b,a,d,e)})}}}}(window.jQuery||window.Zepto),function(a){"use strict";function b(b){return a.grep(b,function(c,d){return d===a.inArray(c,b)})}function c(a,b){return Math.round(a/b)*b}function d(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function e(a){var b=Math.pow(10,7);return Number((Math.round(a*b)/b).toFixed(7))}function f(a,b,c){a.addClass(b),setTimeout(function(){a.removeClass(b)},c)}function g(a){return Math.max(Math.min(a,100),0)}function h(b){return a.isArray(b)?b:[b]}function i(a){var b=a.split(".");return b.length>1?b[1].length:0}function j(a,b){return 100/(b-a)}function k(a,b){return 100*b/(a[1]-a[0])}function l(a,b){return k(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function m(a,b){return b*(a[1]-a[0])/100+a[0]}function n(a,b){for(var c=1;a>=b[c];)c+=1;return c}function o(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=n(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+l([d,e],c)/j(f,g)}function p(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=n(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],m([d,e],(c-f)*j(f,g))}function q(a,b,d,e){if(100===e)return e;var f,g,h=n(e,a);return d?(f=a[h-1],g=a[h],e-f>(g-f)/2?g:f):b[h-1]?a[h-1]+c(e-a[h-1],b[h-1]):e}function r(a,b,c){var e;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider: 'range' contains invalid value.");if(e="min"===a?0:"max"===a?100:parseFloat(a),!d(e)||!d(b[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");c.xPct.push(e),c.xVal.push(b[0]),e?c.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(c.xSteps[0]=b[1])}function s(a,b,c){return b?void(c.xSteps[a]=k([c.xVal[a],c.xVal[a+1]],b)/j(c.xPct[a],c.xPct[a+1])):!0}function t(a,b,c,d){this.xPct=[],this.xVal=[],this.xSteps=[d||!1],this.xNumSteps=[!1],this.snap=b,this.direction=c;var e,f=[];for(e in a)a.hasOwnProperty(e)&&f.push([a[e],e]);for(f.sort(function(a,b){return a[0]-b[0]}),e=0;e<f.length;e++)r(f[e][1],f[e][0],this);for(this.xNumSteps=this.xSteps.slice(0),e=0;e<this.xNumSteps.length;e++)s(e,this.xNumSteps[e],this)}function u(a,b){if(!d(b))throw new Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function v(b,c){if("object"!=typeof c||a.isArray(c))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===c.min||void 0===c.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");b.spectrum=new t(c,b.snap,b.dir,b.singleStep)}function w(b,c){if(c=h(c),!a.isArray(c)||!c.length||c.length>2)throw new Error("noUiSlider: 'start' option is incorrect.");b.handles=c.length,b.start=c}function x(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function y(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function z(a,b){if("lower"===b&&1===a.handles)a.connect=1;else if("upper"===b&&1===a.handles)a.connect=2;else if(b===!0&&2===a.handles)a.connect=3;else{if(b!==!1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a.connect=0}}function A(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function B(a,b){if(!d(b))throw new Error("noUiSlider: 'margin' option must be numeric.");if(a.margin=a.spectrum.getMargin(b),!a.margin)throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function C(a,b){if(!d(b))throw new Error("noUiSlider: 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function D(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1,a.connect=[0,2,1,3][a.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function E(a,b){if("string"!=typeof b)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0;a.events={tap:c||f,drag:d,fixed:e,snap:f}}function F(a,b){if(a.format=b,"function"==typeof b.to&&"function"==typeof b.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function G(b){var c,d={margin:0,limit:0,animate:!0,format:Z};return c={step:{r:!1,t:u},start:{r:!0,t:w},connect:{r:!0,t:z},direction:{r:!0,t:D},snap:{r:!1,t:x},animate:{r:!1,t:y},range:{r:!0,t:v},orientation:{r:!1,t:A},margin:{r:!1,t:B},limit:{r:!1,t:C},behaviour:{r:!0,t:E},format:{r:!1,t:F}},b=a.extend({connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"},b),a.each(c,function(a,c){if(void 0===b[a]){if(c.r)throw new Error("noUiSlider: '"+a+"' is required.");return!0}c.t(d,b[a])}),d.style=d.ort?"top":"left",d}function H(a,b,c){var d=a+b[0],e=a+b[1];return c?(0>d&&(e+=Math.abs(d)),e>100&&(d-=e-100),[g(d),g(e)]):[d,e]}function I(a){a.preventDefault();var b,c,d=0===a.type.indexOf("touch"),e=0===a.type.indexOf("mouse"),f=0===a.type.indexOf("pointer"),g=a;return 0===a.type.indexOf("MSPointer")&&(f=!0),a.originalEvent&&(a=a.originalEvent),d&&(b=a.changedTouches[0].pageX,c=a.changedTouches[0].pageY),(e||f)&&(f||void 0!==window.pageXOffset||(window.pageXOffset=document.documentElement.scrollLeft,window.pageYOffset=document.documentElement.scrollTop),b=a.clientX+window.pageXOffset,c=a.clientY+window.pageYOffset),g.points=[b,c],g.cursor=e,g}function J(b,c){var d=a("<div><div/></div>").addClass(Y[2]),e=["-lower","-upper"];return b&&e.reverse(),d.children().addClass(Y[3]+" "+Y[3]+e[c]),d}function K(a,b,c){switch(a){case 1:b.addClass(Y[7]),c[0].addClass(Y[6]);break;case 3:c[1].addClass(Y[6]);case 2:c[0].addClass(Y[7]);case 0:b.addClass(Y[6])}}function L(a,b,c){var d,e=[];for(d=0;a>d;d+=1)e.push(J(b,d).appendTo(c));return e}function M(b,c,d){return d.addClass([Y[0],Y[8+b],Y[4+c]].join(" ")),a("<div/>").appendTo(d).addClass(Y[1])}function N(b,c,d){function e(){return C[["width","height"][c.ort]]()}function j(a){var b,c=[E.val()];for(b=0;b<a.length;b+=1)E.trigger(a[b],c)}function k(a){return 1===a.length?a[0]:c.dir?a.reverse():a}function l(a){return function(b,c){E.val([a?null:c,a?c:null],!0)}}function m(b){var c=a.inArray(b,N);E[0].linkAPI&&E[0].linkAPI[b]&&E[0].linkAPI[b].change(J[c],D[c].children(),E)}function n(b,d){var e=a.inArray(b,N);return d&&d.appendTo(D[e].children()),c.dir&&c.handles>1&&(e=1===e?0:1),l(e)}function o(){var a,b;for(a=0;a<N.length;a+=1)this.linkAPI&&this.linkAPI[b=N[a]]&&this.linkAPI[b].reconfirm(b)}function p(a,b,d,e){return a=a.replace(/\s/g,W+" ")+W,b.on(a,function(a){return E.attr("disabled")?!1:E.hasClass(Y[14])?!1:(a=I(a),a.calcPoint=a.points[c.ort],void d(a,e))})}function q(a,b){var c,d=b.handles||D,f=!1,g=100*(a.calcPoint-b.start)/e(),h=d[0][0]!==D[0][0]?1:0;c=H(g,b.positions,d.length>1),f=v(d[0],c[h],1===d.length),d.length>1&&(f=v(d[1],c[h?0:1],!1)||f),f&&j(["slide"])}function r(b){a("."+Y[15]).removeClass(Y[15]),b.cursor&&a("body").css("cursor","").off(W),U.off(W),E.removeClass(Y[12]),j(["set","change"])}function s(b,c){1===c.handles.length&&c.handles[0].children().addClass(Y[15]),b.stopPropagation(),p(X.move,U,q,{start:b.calcPoint,handles:c.handles,positions:[F[0],F[D.length-1]]}),p(X.end,U,r,null),b.cursor&&(a("body").css("cursor",a(b.target).css("cursor")),D.length>1&&E.addClass(Y[12]),a("body").on("selectstart"+W,!1))}function t(b){var d,g=b.calcPoint,h=0;b.stopPropagation(),a.each(D,function(){h+=this.offset()[c.style]}),h=h/2>g||1===D.length?0:1,g-=C.offset()[c.style],d=100*g/e(),c.events.snap||f(E,Y[14],300),v(D[h],d),j(["slide","set","change"]),c.events.snap&&s(b,{handles:[D[h]]})}function u(a){var b,c;if(!a.fixed)for(b=0;b<D.length;b+=1)p(X.start,D[b].children(),s,{handles:[D[b]]});a.tap&&p(X.start,C,t,{handles:D}),a.drag&&(c=C.find("."+Y[7]).addClass(Y[10]),a.fixed&&(c=c.add(C.children().not(c).children())),p(X.start,c,s,{handles:D}))}function v(a,b,d){var e=a[0]!==D[0][0]?1:0,f=F[0]+c.margin,h=F[1]-c.margin,i=F[0]+c.limit,j=F[1]-c.limit;return D.length>1&&(b=e?Math.max(b,f):Math.min(b,h)),d!==!1&&c.limit&&D.length>1&&(b=e?Math.min(b,i):Math.max(b,j)),b=G.getStep(b),b=g(parseFloat(b.toFixed(7))),b===F[e]?!1:(a.css(c.style,b+"%"),a.is(":first-child")&&a.toggleClass(Y[17],b>50),F[e]=b,J[e]=G.fromStepping(b),m(N[e]),!0)}function w(a,b){var d,e,f;for(c.limit&&(a+=1),d=0;a>d;d+=1)e=d%2,f=b[e],null!==f&&f!==!1&&("number"==typeof f&&(f=String(f)),f=c.format.from(f),(f===!1||isNaN(f)||v(D[e],G.toStepping(f),d===3-c.dir)===!1)&&m(N[e]))}function x(a){if(E[0].LinkIsEmitting)return this;var b,d=h(a);return c.dir&&c.handles>1&&d.reverse(),c.animate&&-1!==F[0]&&f(E,Y[14],300),b=D.length>1?3:1,1===d.length&&(b=1),w(b,d),j(["set"]),this}function y(){var a,b=[];for(a=0;a<c.handles;a+=1)b[a]=c.format.to(J[a]);return k(b)}function z(){return a(this).off(W).removeClass(Y.join(" ")).empty(),delete this.LinkUpdate,delete this.LinkConfirm,delete this.LinkDefaultFormatter,delete this.LinkDefaultFlag,delete this.reappend,delete this.vGet,delete this.vSet,delete this.getCurrentStep,delete this.getInfo,delete this.destroy,d}function A(){var b=a.map(F,function(a,b){var c=G.getApplicableStep(a),d=i(String(c[2])),e=J[b],f=100===a?null:c[2],g=Number((e-c[2]).toFixed(d)),h=0===a?null:g>=c[1]?c[2]:c[0]||!1;return[[h,f]]});return k(b)}function B(){return d}var C,D,E=a(b),F=[-1,-1],G=c.spectrum,J=[],N=["lower","upper"].slice(0,c.handles);if(c.dir&&N.reverse(),b.LinkUpdate=m,b.LinkConfirm=n,b.LinkDefaultFormatter=c.format,b.LinkDefaultFlag="lower",b.reappend=o,E.hasClass(Y[0]))throw new Error("Slider was already initialized.");C=M(c.dir,c.ort,E),D=L(c.handles,c.dir,C),K(c.connect,E,D),u(c.events),b.vSet=x,b.vGet=y,b.destroy=z,b.getCurrentStep=A,b.getOriginalOptions=B,b.getInfo=function(){return[G,c.style,c.ort]},E.val(c.start)}function O(a){var b=G(a,this);return this.each(function(){N(this,b,a)})}function P(b){return this.each(function(){if(!this.destroy)return void a(this).noUiSlider(b);var c=a(this).val(),d=this.destroy(),e=a.extend({},d,b);a(this).noUiSlider(e),this.reappend(),d.start===e.start&&a(this).val(c)})}function Q(){return this[0][arguments.length?"vSet":"vGet"].apply(this[0],arguments)}function R(b,c,d,e){if("range"===c||"steps"===c)return b.xVal;if("count"===c){var f,g=100/(d-1),h=0;for(d=[];(f=h++*g)<=100;)d.push(f);c="positions"}return"positions"===c?a.map(d,function(a){return b.fromStepping(e?b.getStep(a):a)}):"values"===c?e?a.map(d,function(a){return b.fromStepping(b.getStep(b.toStepping(a)))}):d:void 0}function S(c,d,e,f){var g=c.direction,h={},i=c.xVal[0],j=c.xVal[c.xVal.length-1],k=!1,l=!1,m=0;return c.direction=0,f=b(f.slice().sort(function(a,b){return a-b})),f[0]!==i&&(f.unshift(i),k=!0),f[f.length-1]!==j&&(f.push(j),l=!0),a.each(f,function(b){var g,i,j,n,o,p,q,r,s,t,u=f[b],v=f[b+1];if("steps"===e&&(g=c.xNumSteps[b]),g||(g=v-u),u!==!1&&void 0!==v)for(i=u;v>=i;i+=g){for(n=c.toStepping(i),o=n-m,r=o/d,s=Math.round(r),t=o/s,j=1;s>=j;j+=1)p=m+j*t,h[p.toFixed(5)]=["x",0];q=a.inArray(i,f)>-1?1:"steps"===e?2:0,!b&&k&&(q=0),i===v&&l||(h[n.toFixed(5)]=[i,q]),m=n}}),c.direction=g,h}function T(b,c,d,e,f,g){function h(a){return["-normal","-large","-sub"][a]}function i(a,c,d){return'class="'+c+" "+c+"-"+k+" "+c+h(d[1],d[0])+'" style="'+b+": "+a+'%"'}function j(a,b){d&&(a=100-a),b[1]=b[1]&&f?f(b[0],b[1]):b[1],l.append("<div "+i(a,"noUi-marker",b)+"></div>"),b[1]&&l.append("<div "+i(a,"noUi-value",b)+">"+g.to(b[0])+"</div>")}var k=["horizontal","vertical"][c],l=a("<div/>");return l.addClass("noUi-pips noUi-pips-"+k),a.each(e,j),l}var U=a(document),V=a.fn.val,W=".nui",X=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},Y=["noUi-target","noUi-base","noUi-origin","noUi-handle","noUi-horizontal","noUi-vertical","noUi-background","noUi-connect","noUi-ltr","noUi-rtl","noUi-dragable","","noUi-state-drag","","noUi-state-tap","noUi-active","","noUi-stacking"];t.prototype.getMargin=function(a){return 2===this.xPct.length?k(this.xVal,a):!1},t.prototype.toStepping=function(a){return a=o(this.xVal,this.xPct,a),this.direction&&(a=100-a),a},t.prototype.fromStepping=function(a){return this.direction&&(a=100-a),e(p(this.xVal,this.xPct,a))},t.prototype.getStep=function(a){return this.direction&&(a=100-a),a=q(this.xPct,this.xSteps,this.snap,a),this.direction&&(a=100-a),a},t.prototype.getApplicableStep=function(a){var b=n(a,this.xPct),c=100===a?2:1;return[this.xNumSteps[b-2],this.xVal[b-c],this.xNumSteps[b-c]]},t.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var Z={to:function(a){return a.toFixed(2)},from:Number};a.fn.val=function(b){function c(a){return a.hasClass(Y[0])?Q:V}if(!arguments.length){var d=a(this[0]);return c(d).call(d)}var e=a.isFunction(b);return this.each(function(d){var f=b,g=a(this);e&&(f=b.call(this,d,g.val())),c(g).call(g,f)})},a.fn.noUiSlider=function(a,b){switch(a){case"step":return this[0].getCurrentStep();case"options":return this[0].getOriginalOptions()}return(b?P:O).call(this,a)},a.fn.noUiSlider_pips=function(b){var c=b.mode,d=b.density||1,e=b.filter||!1,f=b.values||!1,g=b.format||{to:Math.round},h=b.stepped||!1;return this.each(function(){var b=this.getInfo(),i=R(b[0],c,f,h),j=S(b[0],d,c,i);return a(this).append(T(b[1],b[2],b[0].direction,j,e,g))})}}(window.jQuery||window.Zepto);
/* == jquery mousewheel plugin == Version: 3.1.11, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.0.5, License: MIT License (MIT) */
!function(e,t,o){!function(t){var a="function"==typeof define&&define.amd,n="https:"==o.location.protocol?"https:":"http:",r="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.11/jquery.mousewheel.min.js";a||e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+r+"%3E%3C/script%3E")),t()}(function(){var a="mCustomScrollbar",n="mCS",r=".mCustomScrollbar",i={setWidth:!1,setHeight:!1,setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,autoHideScrollbar:!1,autoExpandScrollbar:!1,alwaysShowScrollbar:0,snapAmount:null,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1,disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{enable:!1,scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoExpandHorizontalScroll:!1,autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:!0,updateOnSelectorChange:!1,releaseDraggableSelectors:!1},theme:"light",callbacks:{onInit:!1,onScrollStart:!1,onScroll:!1,onTotalScroll:!1,onTotalScrollBack:!1,whileScrolling:!1,onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0,onOverflowY:!1,onOverflowX:!1,onOverflowYNone:!1,onOverflowXNone:!1},live:!1,liveSelector:null},l=0,s={},c=function(e){s[e]&&(clearTimeout(s[e]),h._delete.call(null,s[e]))},d=t.attachEvent&&!t.addEventListener?1:0,u=!1,f={init:function(t){var t=e.extend(!0,{},i,t),o=h._selector.call(this);if(t.live){var a=t.liveSelector||this.selector||r,d=e(a);if("off"===t.live)return void c(a);s[a]=setTimeout(function(){d.mCustomScrollbar(t),"once"===t.live&&d.length&&c(a)},500)}else c(a);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":h._findAxis.call(null,t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=h._findScrollButtonsType.call(null,t.scrollButtons.scrollType),h._theme.call(null,t),e(o).each(function(){var o=e(this);if(!o.data(n)){o.data(n,{idx:++l,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null});var a=o.data(n).opt,r=o.data("mcs-axis"),i=o.data("mcs-scrollbar-position"),s=o.data("mcs-theme");r&&(a.axis=r),i&&(a.scrollbarPosition=i),s&&(a.theme=s,h._theme.call(null,a)),h._pluginMarkup.call(this),f.update.call(null,o)}})},update:function(t){var o=t||h._selector.call(this);return e(o).each(function(){var t=e(this);if(t.data(n)){var o=t.data(n),a=o.opt,r=e("#mCSB_"+o.idx+"_container"),i=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(!r.length)return;o.tweenRunning&&h._stop.call(null,t),t.hasClass("mCS_disabled")&&t.removeClass("mCS_disabled"),t.hasClass("mCS_destroyed")&&t.removeClass("mCS_destroyed"),h._maxHeight.call(this),h._expandContentHorizontally.call(this),"y"===a.axis||a.advanced.autoExpandHorizontalScroll||r.css("width",h._contentWidth(r.children())),o.overflowed=h._overflowed.call(this),h._scrollbarVisibility.call(this),a.autoDraggerLength&&h._setDraggerLength.call(this),h._scrollRatio.call(this),h._bindEvents.call(this);var l=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==a.axis&&(o.overflowed[0]?i[0].height()>i[0].parent().height()?h._resetContentPosition.call(this):(h._scrollTo.call(this,t,l[0].toString(),{dir:"y",dur:0,overwrite:"none"}),o.contentReset.y=null):(h._resetContentPosition.call(this),"y"===a.axis?h._unbindEvents.call(this):"yx"===a.axis&&o.overflowed[1]&&h._scrollTo.call(this,t,l[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==a.axis&&(o.overflowed[1]?i[1].width()>i[1].parent().width()?h._resetContentPosition.call(this):(h._scrollTo.call(this,t,l[1].toString(),{dir:"x",dur:0,overwrite:"none"}),o.contentReset.x=null):(h._resetContentPosition.call(this),"x"===a.axis?h._unbindEvents.call(this):"yx"===a.axis&&o.overflowed[0]&&h._scrollTo.call(this,t,l[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),h._autoUpdate.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var a=h._selector.call(this);return e(a).each(function(){var a=e(this);if(a.data(n)){var r=a.data(n),i=r.opt,l={trigger:"external",scrollInertia:i.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=h._arr.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=h._to.call(this,c[0],"y"),c[1]=h._to.call(this,c[1],"x"),s.moveDragger&&(c[0]*=r.scrollRatio.y,c[1]*=r.scrollRatio.x),s.dur=d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==i.axis&&r.overflowed[0]&&(s.dir="y",s.overwrite="all",h._scrollTo.call(this,a,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==i.axis&&r.overflowed[1]&&(s.dir="x",s.overwrite="none",h._scrollTo.call(this,a,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=h._selector.call(this);return e(t).each(function(){var t=e(this);t.data(n)&&h._stop.call(null,t)})},disable:function(t){var o=h._selector.call(this);return e(o).each(function(){var o=e(this);if(o.data(n)){{var a=o.data(n);a.opt}h._autoUpdate.call(this,"remove"),h._unbindEvents.call(this),t&&h._resetContentPosition.call(this),h._scrollbarVisibility.call(this,!0),o.addClass("mCS_disabled")}})},destroy:function(){var t=h._selector.call(this);return e(t).each(function(){var o=e(this);if(o.data(n)){var r=o.data(n),i=r.opt,l=e("#mCSB_"+r.idx),s=e("#mCSB_"+r.idx+"_container"),d=e(".mCSB_"+r.idx+"_scrollbar");i.live&&c(t),h._autoUpdate.call(this,"remove"),h._unbindEvents.call(this),h._resetContentPosition.call(this),o.removeData(n),h._delete.call(null,this.mcs),d.remove(),l.replaceWith(s.contents()),o.removeClass(a+" _"+n+"_"+r.idx+" mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled").addClass("mCS_destroyed")}})}},h={_selector:function(){return"object"!=typeof e(this)||e(this).length<1?r:this},_theme:function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],r=["minimal","minimal-dark"],i=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,r)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,i)>-1?"outside":t.scrollbarPosition},_findAxis:function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},_findScrollButtonsType:function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},_pluginMarkup:function(){var t=e(this),o=t.data(n),r=o.opt,i=r.autoExpandScrollbar?" mCSB_scrollTools_onDrag_expand":"",l=["<div id='mCSB_"+o.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+o.idx+"_scrollbar mCS-"+r.theme+" mCSB_scrollTools_vertical"+i+"'><div class='mCSB_draggerContainer'><div id='mCSB_"+o.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+o.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+o.idx+"_scrollbar mCS-"+r.theme+" mCSB_scrollTools_horizontal"+i+"'><div class='mCSB_draggerContainer'><div id='mCSB_"+o.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===r.axis?"mCSB_vertical_horizontal":"x"===r.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===r.axis?l[0]+l[1]:"x"===r.axis?l[1]:l[0],d="yx"===r.axis?"<div id='mCSB_"+o.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",u=r.autoHideScrollbar?" mCS-autoHide":"",f="x"!==r.axis&&"rtl"===o.langDir?" mCS-dir-rtl":"";r.setWidth&&t.css("width",r.setWidth),r.setHeight&&t.css("height",r.setHeight),r.setLeft="y"!==r.axis&&"rtl"===o.langDir?"989999px":r.setLeft,t.addClass(a+" _"+n+"_"+o.idx+u+f).wrapInner("<div id='mCSB_"+o.idx+"' class='mCustomScrollBox mCS-"+r.theme+" "+s+"'><div id='mCSB_"+o.idx+"_container' class='mCSB_container' style='position:relative; top:"+r.setTop+"; left:"+r.setLeft+";' dir="+o.langDir+" /></div>");var _=e("#mCSB_"+o.idx),m=e("#mCSB_"+o.idx+"_container");"y"===r.axis||r.advanced.autoExpandHorizontalScroll||m.css("width",h._contentWidth(m.children())),"outside"===r.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),_.addClass("mCSB_outside").after(c)):(_.addClass("mCSB_inside").append(c),m.wrap(d)),h._scrollButtons.call(this);var p=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];p[0].css("min-height",p[0].height()),p[1].css("min-width",p[1].width())},_contentWidth:function(t){return Math.max.apply(Math,t.map(function(){return e(this).outerWidth(!0)}).get())},_expandContentHorizontally:function(){var t=e(this),o=t.data(n),a=o.opt,r=e("#mCSB_"+o.idx+"_container");a.advanced.autoExpandHorizontalScroll&&"y"!==a.axis&&r.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(r[0].getBoundingClientRect().right+.4)-Math.floor(r[0].getBoundingClientRect().left),position:"relative"}).unwrap()},_scrollButtons:function(){var t=e(this),o=t.data(n),a=o.opt,r=e(".mCSB_"+o.idx+"_scrollbar:first"),i=["<a href='#' class='mCSB_buttonUp' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonDown' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonLeft' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonRight' oncontextmenu='return false;' />"],l=["x"===a.axis?i[2]:i[0],"x"===a.axis?i[3]:i[1],i[2],i[3]];a.scrollButtons.enable&&r.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])},_maxHeight:function(){var t=e(this),o=t.data(n),a=(o.opt,e("#mCSB_"+o.idx)),r=t.css("max-height"),i=-1!==r.indexOf("%"),l=t.css("box-sizing");if("none"!==r){var s=i?t.parent().height()*parseInt(r)/100:parseInt(r);"border-box"===l&&(s-=t.innerHeight()-t.height()+(t.outerHeight()-t.innerHeight())),a.css("max-height",Math.round(s))}},_setDraggerLength:function(){var t=e(this),o=t.data(n),a=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),i=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[a.height()/r.outerHeight(!1),a.width()/r.outerWidth(!1)],s=[parseInt(i[0].css("min-height")),Math.round(l[0]*i[0].parent().height()),parseInt(i[1].css("min-width")),Math.round(l[1]*i[1].parent().width())],c=d&&s[1]<s[0]?s[0]:s[1],u=d&&s[3]<s[2]?s[2]:s[3];i[0].css({height:c,"max-height":i[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":s[0]+"px"}),i[1].css({width:u,"max-width":i[1].parent().width()-10})},_scrollRatio:function(){var t=e(this),o=t.data(n),a=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),i=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[r.outerHeight(!1)-a.height(),r.outerWidth(!1)-a.width()],s=[l[0]/(i[0].parent().height()-i[0].height()),l[1]/(i[1].parent().width()-i[1].width())];o.scrollRatio={y:s[0],x:s[1]}},_onDragClasses:function(e,t,o){var a=o?"mCSB_dragger_onDrag_expanded":"",n=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag"],r=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(n[0]+" "+a),r.toggleClass(n[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(n[0]),r.removeClass(n[1])):(e.addClass(n[0]),r.addClass(n[1])))},_overflowed:function(){var t=e(this),o=t.data(n),a=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),i=null==o.overflowed?r.height():r.outerHeight(!1),l=null==o.overflowed?r.width():r.outerWidth(!1);return[i>a.height(),l>a.width()]},_resetContentPosition:function(){var t=e(this),o=t.data(n),a=o.opt,r=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(h._stop(t),("x"!==a.axis&&!o.overflowed[0]||"y"===a.axis&&o.overflowed[0])&&(l[0].add(i).css("top",0),h._scrollTo(t,"_resetY")),"y"!==a.axis&&!o.overflowed[1]||"x"===a.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=r.width()-i.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),i.css("left",s),l[1].css("left",dx),h._scrollTo(t,"_resetX")}},_bindEvents:function(){function t(){i=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(i),h._mousewheel.call(o[0])):t()},1e3)}var o=e(this),a=o.data(n),r=a.opt;if(!a.bindEvents){if(h._draggable.call(this),r.contentTouchScroll&&h._contentDraggable.call(this),r.mouseWheel.enable){var i;t()}h._draggerRail.call(this),h._wrapperScroll.call(this),r.advanced.autoScrollOnFocus&&h._focus.call(this),r.scrollButtons.enable&&h._buttons.call(this),r.keyboard.enable&&h._keyboard.call(this),a.bindEvents=!0}},_unbindEvents:function(){var t=e(this),a=t.data(n),r=a.opt,i=n+"_"+a.idx,l=".mCSB_"+a.idx+"_scrollbar",s=e("#mCSB_"+a.idx+",#mCSB_"+a.idx+"_container,#mCSB_"+a.idx+"_container_wrapper,"+l+" .mCSB_draggerContainer,#mCSB_"+a.idx+"_dragger_vertical,#mCSB_"+a.idx+"_dragger_horizontal,"+l+">a"),c=e("#mCSB_"+a.idx+"_container");r.advanced.releaseDraggableSelectors&&s.add(e(r.advanced.releaseDraggableSelectors)),a.bindEvents&&(e(o).unbind("."+i),s.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),h._delete.call(null,t[0]._focusTimeout),clearTimeout(a.sequential.step),h._delete.call(null,a.sequential.step),clearTimeout(c[0].onCompleteTimeout),h._delete.call(null,c[0].onCompleteTimeout),a.bindEvents=!1)},_scrollbarVisibility:function(t){var o=e(this),a=o.data(n),r=a.opt,i=e("#mCSB_"+a.idx+"_container_wrapper"),l=i.length?i:e("#mCSB_"+a.idx+"_container"),s=[e("#mCSB_"+a.idx+"_scrollbar_vertical"),e("#mCSB_"+a.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==r.axis&&(a.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass("mCS_no_scrollbar_y mCS_y_hidden")):(r.alwaysShowScrollbar?(2!==r.alwaysShowScrollbar&&c[0].add(s[0].children("a")).css("display","none"),l.removeClass("mCS_y_hidden")):(s[0].css("display","none"),l.addClass("mCS_y_hidden")),l.addClass("mCS_no_scrollbar_y"))),"y"!==r.axis&&(a.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass("mCS_no_scrollbar_x mCS_x_hidden")):(r.alwaysShowScrollbar?(2!==r.alwaysShowScrollbar&&c[1].add(s[1].children("a")).css("display","none"),l.removeClass("mCS_x_hidden")):(s[1].css("display","none"),l.addClass("mCS_x_hidden")),l.addClass("mCS_no_scrollbar_x"))),a.overflowed[0]||a.overflowed[1]?o.removeClass("mCS_no_scrollbar"):o.addClass("mCS_no_scrollbar")},_coordinates:function(e){var t=e.type;switch(t){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var o=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return[o.pageY,o.pageX,a>1];default:return[e.pageY,e.pageX,!1]}},_draggable:function(){function t(e){var t=p.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}}function a(e,t,o,a){if(p[0].idleTimer=f.scrollInertia<233?250:0,r.attr("id")===m[1])var n="x",i=(r[0].offsetLeft-t+a)*c.scrollRatio.x;else var n="y",i=(r[0].offsetTop-e+o)*c.scrollRatio.y;h._scrollTo(s,i.toString(),{dir:n,drag:!0})}var r,i,l,s=e(this),c=s.data(n),f=c.opt,_=n+"_"+c.idx,m=["mCSB_"+c.idx+"_dragger_vertical","mCSB_"+c.idx+"_dragger_horizontal"],p=e("#mCSB_"+c.idx+"_container"),g=e("#"+m[0]+",#"+m[1]),v=f.advanced.releaseDraggableSelectors?g.add(e(f.advanced.releaseDraggableSelectors)):g;g.bind("mousedown."+_+" touchstart."+_+" pointerdown."+_+" MSPointerDown."+_,function(a){if(a.stopImmediatePropagation(),a.preventDefault(),h._mouseBtnLeft(a)){u=!0,d&&(o.onselectstart=function(){return!1}),t(!1),h._stop(s),r=e(this);var n=r.offset(),c=h._coordinates(a)[0]-n.top,_=h._coordinates(a)[1]-n.left,m=r.height()+n.top,p=r.width()+n.left;m>c&&c>0&&p>_&&_>0&&(i=c,l=_),h._onDragClasses(r,"active",f.autoExpandScrollbar)}}).bind("touchmove."+_,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=r.offset(),o=h._coordinates(e)[0]-t.top,n=h._coordinates(e)[1]-t.left;a(i,l,o,n)}),e(o).bind("mousemove."+_+" pointermove."+_+" MSPointerMove."+_,function(e){if(r){var t=r.offset(),o=h._coordinates(e)[0]-t.top,n=h._coordinates(e)[1]-t.left;if(i===o)return;a(i,l,o,n)}}).add(v).bind("mouseup."+_+" touchend."+_+" pointerup."+_+" MSPointerUp."+_,function(){r&&(h._onDragClasses(r,"active",f.autoExpandScrollbar),r=null),u=!1,d&&(o.onselectstart=null),t(!0)})},_contentDraggable:function(){function t(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function o(e,t,o,a,n,r){e&&h._scrollTo(g,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:r})}var a,r,i,l,s,c,d,f,_,m,p,g=e(this),v=g.data(n),x=v.opt,S=n+"_"+v.idx,C=e("#mCSB_"+v.idx),b=e("#mCSB_"+v.idx+"_container"),w=[e("#mCSB_"+v.idx+"_dragger_vertical"),e("#mCSB_"+v.idx+"_dragger_horizontal")],y=[],B=[],T=0,M="yx"===x.axis?"none":"all",k=[];b.bind("touchstart."+S+" pointerdown."+S+" MSPointerDown."+S,function(e){if(h._pointerTouch(e)&&!u&&!h._coordinates(e)[2]){var t=b.offset();a=h._coordinates(e)[0]-t.top,r=h._coordinates(e)[1]-t.left,k=[h._coordinates(e)[0],h._coordinates(e)[1]]}}).bind("touchmove."+S+" pointermove."+S+" MSPointerMove."+S,function(e){if(h._pointerTouch(e)&&!u&&!h._coordinates(e)[2]){e.stopImmediatePropagation(),c=h._getTime();var t=C.offset(),n=h._coordinates(e)[0]-t.top,i=h._coordinates(e)[1]-t.left,l="mcsLinearOut";if(y.push(n),B.push(i),k[2]=Math.abs(h._coordinates(e)[0]-k[0]),k[3]=Math.abs(h._coordinates(e)[1]-k[1]),v.overflowed[0])var s=w[0].parent().height()-w[0].height(),d=a-n>0&&n-a>-(s*v.scrollRatio.y)&&(2*k[3]<k[2]||"yx"===x.axis);if(v.overflowed[1])var f=w[1].parent().width()-w[1].width(),_=r-i>0&&i-r>-(f*v.scrollRatio.x)&&(2*k[2]<k[3]||"yx"===x.axis);(d||_)&&e.preventDefault(),m="yx"===x.axis?[a-n,r-i]:"x"===x.axis?[null,r-i]:[a-n,null],b[0].idleTimer=250,v.overflowed[0]&&o(m[0],T,l,"y","all",!0),v.overflowed[1]&&o(m[1],T,l,"x",M,!0)}}),C.bind("touchstart."+S+" pointerdown."+S+" MSPointerDown."+S,function(e){if(h._pointerTouch(e)&&!u&&!h._coordinates(e)[2]){e.stopImmediatePropagation(),h._stop(g),s=h._getTime();var t=C.offset();i=h._coordinates(e)[0]-t.top,l=h._coordinates(e)[1]-t.left,y=[],B=[]}}).bind("touchend."+S+" pointerup."+S+" MSPointerUp."+S,function(e){if(h._pointerTouch(e)&&!u&&!h._coordinates(e)[2]){e.stopImmediatePropagation(),d=h._getTime();var a=C.offset(),n=h._coordinates(e)[0]-a.top,r=h._coordinates(e)[1]-a.left;if(!(d-c>30)){_=1e3/(d-s);var g="mcsEaseOut",S=2.5>_,w=S?[y[y.length-2],B[B.length-2]]:[0,0];f=S?[n-w[0],r-w[1]]:[n-i,r-l];var T=[Math.abs(f[0]),Math.abs(f[1])];_=S?[Math.abs(f[0]/4),Math.abs(f[1]/4)]:[_,_];var k=[Math.abs(b[0].offsetTop)-f[0]*t(T[0]/_[0],_[0]),Math.abs(b[0].offsetLeft)-f[1]*t(T[1]/_[1],_[1])];m="yx"===x.axis?[k[0],k[1]]:"x"===x.axis?[null,k[1]]:[k[0],null],p=[4*T[0]+x.scrollInertia,4*T[1]+x.scrollInertia];var O=parseInt(x.contentTouchScroll)||0;m[0]=T[0]>O?m[0]:0,m[1]=T[1]>O?m[1]:0,v.overflowed[0]&&o(m[0],p[0],g,"y",M,!1),v.overflowed[1]&&o(m[1],p[1],g,"x",M,!1)}}})},_mousewheel:function(){function t(e){var t=null;try{var o=e.contentDocument||e.contentWindow.document;t=o.body.innerHTML}catch(a){}return null!==t}var o=e(this),a=o.data(n);if(a){var r=a.opt,i=n+"_"+a.idx,l=e("#mCSB_"+a.idx),s=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")],c=e("#mCSB_"+a.idx+"_container").find("iframe"),u=l;c.length&&c.each(function(){var o=this;t(o)&&(u=u.add(e(o).contents().find("body")))}),u.bind("mousewheel."+i,function(t,n){if(h._stop(o),!h._disableMousewheel(o,t.target)){var i="auto"!==r.mouseWheel.deltaFactor?parseInt(r.mouseWheel.deltaFactor):d&&t.deltaFactor<100?100:t.deltaFactor||100;if("x"===r.axis||"x"===r.mouseWheel.axis)var c="x",u=[Math.round(i*a.scrollRatio.x),parseInt(r.mouseWheel.scrollAmount)],f="auto"!==r.mouseWheel.scrollAmount?u[1]:u[0]>=l.width()?.9*l.width():u[0],_=Math.abs(e("#mCSB_"+a.idx+"_container")[0].offsetLeft),m=s[1][0].offsetLeft,p=s[1].parent().width()-s[1].width(),g=t.deltaX||t.deltaY||n;else var c="y",u=[Math.round(i*a.scrollRatio.y),parseInt(r.mouseWheel.scrollAmount)],f="auto"!==r.mouseWheel.scrollAmount?u[1]:u[0]>=l.height()?.9*l.height():u[0],_=Math.abs(e("#mCSB_"+a.idx+"_container")[0].offsetTop),m=s[0][0].offsetTop,p=s[0].parent().height()-s[0].height(),g=t.deltaY||n;"y"===c&&!a.overflowed[0]||"x"===c&&!a.overflowed[1]||(r.mouseWheel.invert&&(g=-g),r.mouseWheel.normalizeDelta&&(g=0>g?-1:1),(g>0&&0!==m||0>g&&m!==p||r.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),h._scrollTo(o,(_-g*f).toString(),{dir:c}))}})}},_disableMousewheel:function(t,o){var a=o.nodeName.toLowerCase(),r=t.data(n).opt.mouseWheel.disableOver,i=["select","textarea"];return e.inArray(a,r)>-1&&!(e.inArray(a,i)>-1&&!e(o).is(":focus"))},_draggerRail:function(){var t=e(this),o=t.data(n),a=n+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),i=r.parent(),l=e(".mCSB_"+o.idx+"_scrollbar .mCSB_draggerContainer");l.bind("touchstart."+a+" pointerdown."+a+" MSPointerDown."+a,function(){u=!0}).bind("touchend."+a+" pointerup."+a+" MSPointerUp."+a,function(){u=!1}).bind("click."+a,function(a){if(e(a.target).hasClass("mCSB_draggerContainer")||e(a.target).hasClass("mCSB_draggerRail")){h._stop(t);var n=e(this),l=n.find(".mCSB_dragger");if(n.parent(".mCSB_scrollTools_horizontal").length>0){if(!o.overflowed[1])return;var s="x",c=a.pageX>l.offset().left?-1:1,d=Math.abs(r[0].offsetLeft)-.9*c*i.width()}else{if(!o.overflowed[0])return;var s="y",c=a.pageY>l.offset().top?-1:1,d=Math.abs(r[0].offsetTop)-.9*c*i.height()}h._scrollTo(t,d.toString(),{dir:s,scrollEasing:"mcsEaseInOut"})}})},_focus:function(){var t=e(this),a=t.data(n),r=a.opt,i=n+"_"+a.idx,l=e("#mCSB_"+a.idx+"_container"),s=l.parent();l.bind("focusin."+i,function(){var a=e(o.activeElement),n=l.find(".mCustomScrollBox").length,i=0;a.is(r.advanced.autoScrollOnFocus)&&(h._stop(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=n?(i+17)*n:0,t[0]._focusTimeout=setTimeout(function(){var e=[a.offset().top-l.offset().top,a.offset().left-l.offset().left],o=[l[0].offsetTop,l[0].offsetLeft],n=[o[0]+e[0]>=0&&o[0]+e[0]<s.height()-a.outerHeight(!1),o[1]+e[1]>=0&&o[0]+e[1]<s.width()-a.outerWidth(!1)],c="yx"!==r.axis||n[0]||n[1]?"all":"none";"x"===r.axis||n[0]||h._scrollTo(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===r.axis||n[1]||h._scrollTo(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},_wrapperScroll:function(){var t=e(this),o=t.data(n),a=n+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container").parent();r.bind("scroll."+a,function(){(0!==r.scrollTop()||0!==r.scrollLeft())&&e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},_buttons:function(){var t=e(this),o=t.data(n),a=o.opt,r=o.sequential,i=n+"_"+o.idx,l=(e("#mCSB_"+o.idx+"_container"),".mCSB_"+o.idx+"_scrollbar"),s=e(l+">a");s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i+" mouseup."+i+" touchend."+i+" pointerup."+i+" MSPointerUp."+i+" mouseout."+i+" pointerout."+i+" MSPointerOut."+i+" click."+i,function(n){function i(e,o){r.scrollAmount=a.snapAmount||a.scrollButtons.scrollAmount,h._sequentialScroll.call(this,t,e,o)}if(n.preventDefault(),h._mouseBtnLeft(n)){var l=e(this).attr("class");switch(r.type=a.scrollButtons.scrollType,n.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===r.type)return;u=!0,o.tweenRunning=!1,i("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===r.type)return;u=!1,r.dir&&i("off",l);break;case"click":if("stepped"!==r.type||o.tweenRunning)return;i("on",l)}}})},_keyboard:function(){var t=e(this),a=t.data(n),r=a.opt,i=a.sequential,l=n+"_"+a.idx,s=e("#mCSB_"+a.idx),c=e("#mCSB_"+a.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']";s.attr("tabindex","0").bind("blur."+l+" keydown."+l+" keyup."+l,function(n){function l(e,o){i.type=r.keyboard.scrollType,i.scrollAmount=r.snapAmount||r.keyboard.scrollAmount,"stepped"===i.type&&a.tweenRunning||h._sequentialScroll.call(this,t,e,o)}switch(n.type){case"blur":a.tweenRunning&&i.dir&&l("off",null);break;case"keydown":case"keyup":var s=n.keyCode?n.keyCode:n.which,f="on";if("x"!==r.axis&&(38===s||40===s)||"y"!==r.axis&&(37===s||39===s)){if((38===s||40===s)&&!a.overflowed[0]||(37===s||39===s)&&!a.overflowed[1])return;"keyup"===n.type&&(f="off"),e(o.activeElement).is(u)||(n.preventDefault(),n.stopImmediatePropagation(),l(f,s))}else if(33===s||34===s){if((a.overflowed[0]||a.overflowed[1])&&(n.preventDefault(),n.stopImmediatePropagation()),"keyup"===n.type){h._stop(t);var _=34===s?-1:1;if("x"===r.axis||"yx"===r.axis&&a.overflowed[1]&&!a.overflowed[0])var m="x",p=Math.abs(c[0].offsetLeft)-.9*_*d.width();else var m="y",p=Math.abs(c[0].offsetTop)-.9*_*d.height();h._scrollTo(t,p.toString(),{dir:m,scrollEasing:"mcsEaseInOut"})}}else if((35===s||36===s)&&!e(o.activeElement).is(u)&&((a.overflowed[0]||a.overflowed[1])&&(n.preventDefault(),n.stopImmediatePropagation()),"keyup"===n.type)){if("x"===r.axis||"yx"===r.axis&&a.overflowed[1]&&!a.overflowed[0])var m="x",p=35===s?Math.abs(d.width()-c.outerWidth(!1)):0;else var m="y",p=35===s?Math.abs(d.height()-c.outerHeight(!1)):0;h._scrollTo(t,p.toString(),{dir:m,scrollEasing:"mcsEaseInOut"})}}})},_sequentialScroll:function(t,o,a){function r(e){var o="stepped"!==c.type,a=e?o?s.scrollInertia/1.5:s.scrollInertia:1e3/60,n=e?o?7.5:40:2.5,i=[Math.abs(d[0].offsetTop),Math.abs(d[0].offsetLeft)],u=[l.scrollRatio.y>10?10:l.scrollRatio.y,l.scrollRatio.x>10?10:l.scrollRatio.x],f="x"===c.dir[0]?i[1]+c.dir[1]*u[1]*n:i[0]+c.dir[1]*u[0]*n,_="x"===c.dir[0]?i[1]+c.dir[1]*parseInt(c.scrollAmount):i[0]+c.dir[1]*parseInt(c.scrollAmount),m="auto"!==c.scrollAmount?_:f,p=e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",g=e?!0:!1;return e&&17>a&&(m="x"===c.dir[0]?i[1]:i[0]),h._scrollTo(t,m.toString(),{dir:c.dir[0],scrollEasing:p,dur:a,onComplete:g}),e?void(c.dir=!1):(clearTimeout(c.step),void(c.step=setTimeout(function(){r()},a)))}function i(){clearTimeout(c.step),h._stop(t)}var l=t.data(n),s=l.opt,c=l.sequential,d=e("#mCSB_"+l.idx+"_container"),u="stepped"===c.type?!0:!1;switch(o){case"on":if(c.dir=["mCSB_buttonRight"===a||"mCSB_buttonLeft"===a||39===a||37===a?"x":"y","mCSB_buttonUp"===a||"mCSB_buttonLeft"===a||38===a||37===a?-1:1],h._stop(t),h._isNumeric(a)&&"stepped"===c.type)return;r(u);break;case"off":i(),(u||l.tweenRunning&&c.dir)&&r(!0)}},_arr:function(t){var o=e(this).data(n).opt,a=[];return"function"==typeof t&&(t=t()),t instanceof Array?a=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(a[0]=t.y?t.y:t.x||"x"===o.axis?null:t,a[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof a[0]&&(a[0]=a[0]()),"function"==typeof a[1]&&(a[1]=a[1]()),a},_to:function(t,o){if(null!=t&&"undefined"!=typeof t){var a=e(this),r=a.data(n),i=r.opt,l=e("#mCSB_"+r.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===i.axis?"x":"y");var d="x"===o?l.outerWidth(!1):l.outerHeight(!1),u="x"===o?l.offset().left:l.offset().top,_="x"===o?l[0].offsetLeft:l[0].offsetTop,m="x"===o?"left":"top";switch(c){case"function":return t();case"object":if(t.nodeType)var p="x"===o?e(t).offset().left:e(t).offset().top;else if(t.jquery){if(!t.length)return;var p="x"===o?t.offset().left:t.offset().top}return p-u;case"string":case"number":if(h._isNumeric.call(null,t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(_-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var g=_+parseInt(t.split("+=")[1]);return g>=0?0:Math.abs(g)}if(-1!==t.indexOf("px")&&h._isNumeric.call(null,t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var v=l.find(":"+t),p="x"===o?e(v).offset().left:e(v).offset().top;return p-u}if(e(t).length){var p="x"===o?e(t).offset().left:e(t).offset().top;return p-u}return l.css(m,t),void f.update.call(null,a[0])}}},_autoUpdate:function(t){function o(){clearTimeout(u[0].autoUpdate),u[0].autoUpdate=setTimeout(function(){return d.advanced.updateOnSelectorChange&&(_=i(),_!==S)?(l(),void(S=_)):(d.advanced.updateOnContentResize&&(m=[u.outerHeight(!1),u.outerWidth(!1),g.height(),g.width(),x()[0],x()[1]],(m[0]!==C[0]||m[1]!==C[1]||m[2]!==C[2]||m[3]!==C[3]||m[4]!==C[4]||m[5]!==C[5])&&(l(),C=m)),d.advanced.updateOnImageLoad&&(p=a(),p!==b&&(u.find("img").each(function(){r(this.src)}),b=p)),void((d.advanced.updateOnSelectorChange||d.advanced.updateOnContentResize||d.advanced.updateOnImageLoad)&&o()))},60)}function a(){var e=0;return d.advanced.updateOnImageLoad&&(e=u.find("img").length),e}function r(e){function t(e,t){return function(){return t.apply(e,arguments)}}function o(){this.onload=null,l()}var a=new Image;a.onload=t(a,o),a.src=e}function i(){d.advanced.updateOnSelectorChange===!0&&(d.advanced.updateOnSelectorChange="*");var t=0,o=u.find(d.advanced.updateOnSelectorChange);return d.advanced.updateOnSelectorChange&&o.length>0&&o.each(function(){t+=e(this).height()+e(this).width()}),t}function l(){clearTimeout(u[0].autoUpdate),f.update.call(null,s[0])}var s=e(this),c=s.data(n),d=c.opt,u=e("#mCSB_"+c.idx+"_container");if(t)return clearTimeout(u[0].autoUpdate),void h._delete.call(null,u[0].autoUpdate);var _,m,p,g=u.parent(),v=[e("#mCSB_"+c.idx+"_scrollbar_vertical"),e("#mCSB_"+c.idx+"_scrollbar_horizontal")],x=function(){return[v[0].is(":visible")?v[0].outerHeight(!0):0,v[1].is(":visible")?v[1].outerWidth(!0):0]},S=i(),C=[u.outerHeight(!1),u.outerWidth(!1),g.height(),g.width(),x()[0],x()[1]],b=a();o()},_snapAmount:function(e,t,o){return Math.round(e/t)*t-o},_stop:function(t){var o=t.data(n),a=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");a.each(function(){h._stopTween.call(this)})},_scrollTo:function(t,o,a){function r(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function i(){return[c.callbacks.alwaysTriggerOffsets||S>=C[0]+w,c.callbacks.alwaysTriggerOffsets||-y>=S]}function l(){var e=[_[0].offsetTop,_[0].offsetLeft],o=[v[0].offsetTop,v[0].offsetLeft],n=[_.outerHeight(!1),_.outerWidth(!1)],r=[f.height(),f.width()];t[0].mcs={content:_,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(n[0])-r[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(n[1])-r[1])),direction:a.dir}}var s=t.data(n),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},a=e.extend(d,a),u=[a.dur,a.drag?0:a.dur],f=e("#mCSB_"+s.idx),_=e("#mCSB_"+s.idx+"_container"),m=_.parent(),p=c.callbacks.onTotalScrollOffset?h._arr.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?h._arr.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];
if(s.trigger=a.trigger,(0!==m.scrollTop()||0!==m.scrollLeft())&&(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(r("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(r("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){switch(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(r("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(r("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount&&(o=h._snapAmount(o,c.snapAmount,c.snapOffset)),a.dir){case"x":var v=e("#mCSB_"+s.idx+"_dragger_horizontal"),x="left",S=_[0].offsetLeft,C=[f.width()-_.outerWidth(!1),v.parent().width()-v.width()],b=[o,0===o?0:o/s.scrollRatio.x],w=p[1],y=g[1],B=w>0?w/s.scrollRatio.x:0,T=y>0?y/s.scrollRatio.x:0;break;case"y":var v=e("#mCSB_"+s.idx+"_dragger_vertical"),x="top",S=_[0].offsetTop,C=[f.height()-_.outerHeight(!1),v.parent().height()-v.height()],b=[o,0===o?0:o/s.scrollRatio.y],w=p[0],y=g[0],B=w>0?w/s.scrollRatio.y:0,T=y>0?y/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=C[1]?b=[C[0],C[1]]:b[0]=-b[0],t[0].mcs||(l(),r("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(_[0].onCompleteTimeout),(s.tweenRunning||!(0===S&&b[0]>=0||S===C[0]&&b[0]<=C[0]))&&(h._tweenTo.call(null,v[0],x,Math.round(b[1]),u[1],a.scrollEasing),h._tweenTo.call(null,_[0],x,Math.round(b[0]),u[0],a.scrollEasing,a.overwrite,{onStart:function(){a.callbacks&&a.onStart&&!s.tweenRunning&&(r("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,h._onDragClasses(v),s.cbOffsets=i())},onUpdate:function(){a.callbacks&&a.onUpdate&&r("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(a.callbacks&&a.onComplete){"yx"===c.axis&&clearTimeout(_[0].onCompleteTimeout);var e=_[0].idleTimer||0;_[0].onCompleteTimeout=setTimeout(function(){r("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),r("onTotalScroll")&&b[1]>=C[1]-B&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),r("onTotalScrollBack")&&b[1]<=T&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,_[0].idleTimer=0,h._onDragClasses(v,"hide")},e)}}}))}},_tweenTo:function(e,o,a,n,r,i,l){function s(){w.stop||(S||p.call(),S=h._getTime()-x,c(),S>=w.time&&(w.time=S>w.time?S+_-(S-w.time):S+_-1,w.time<S+1&&(w.time=S+1)),w.time<n?w.id=m(s):v.call())}function c(){n>0?(w.currVal=f(w.time,C,y,n,r),b[o]=Math.round(w.currVal)+"px"):b[o]=a+"px",g.call()}function d(){_=1e3/60,w.time=S+_,m=t.requestAnimationFrame?t.requestAnimationFrame:function(e){return c(),setTimeout(e,.01)},w.id=m(s)}function u(){null!=w.id&&(t.requestAnimationFrame?t.cancelAnimationFrame(w.id):clearTimeout(w.id),w.id=null)}function f(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var r=(e/=a)*e,i=r*e;return t+o*(.499999999999997*i*r+-2.5*r*r+5.5*i+-6.5*r+4*e)}}e._malihuTween||(e._malihuTween={top:{},left:{}});var _,m,l=l||{},p=l.onStart||function(){},g=l.onUpdate||function(){},v=l.onComplete||function(){},x=h._getTime(),S=0,C=e.offsetTop,b=e.style,w=e._malihuTween[o];"left"===o&&(C=e.offsetLeft);var y=a-C;w.stop=0,"none"!==i&&u(),d()},_getTime:function(){return t.performance&&t.performance.now?t.performance.now():t.performance&&t.performance.webkitNow?t.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},_stopTween:function(){var e=this;e._malihuTween||(e._malihuTween={top:{},left:{}}),e._malihuTween.top.id&&(t.requestAnimationFrame?t.cancelAnimationFrame(e._malihuTween.top.id):clearTimeout(e._malihuTween.top.id),e._malihuTween.top.id=null,e._malihuTween.top.stop=1),e._malihuTween.left.id&&(t.requestAnimationFrame?t.cancelAnimationFrame(e._malihuTween.left.id):clearTimeout(e._malihuTween.left.id),e._malihuTween.left.id=null,e._malihuTween.left.stop=1)},_delete:function(e){try{delete e}catch(t){e=null}},_mouseBtnLeft:function(e){return!(e.which&&1!==e.which)},_pointerTouch:function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},_isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}};e.fn[a]=function(t){return f[t]?f[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):f.init.apply(this,arguments)},e[a]=function(t){return f[t]?f[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):f.init.apply(this,arguments)},e[a].defaults=i,t[a]=!0,e(t).load(function(){e(r)[a]()})})}(jQuery,window,document);
/*
Copyright 2014 Igor Vaynberg

Version: 3.5.2 Timestamp: Sat Nov  1 14:43:36 EDT 2014

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License
or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the Apache License and the GPL License for the specific language governing
permissions and limitations under the Apache License and the GPL License.
*/
!function(a){"undefined"==typeof a.fn.each2&&a.extend(a.fn,{each2:function(b){for(var c=a([0]),d=-1,e=this.length;++d<e&&(c.context=c[0]=this[d])&&b.call(c[0],d,c)!==!1;);return this}})}(jQuery),function(a,b){"use strict";function n(b){var c=a(document.createTextNode(""));b.before(c),c.before(b),c.remove()}function o(a){function b(a){return m[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function p(a,b){for(var c=0,d=b.length;d>c;c+=1)if(r(a,b[c]))return c;return-1}function q(){var b=a(l);b.appendTo(document.body);var c={width:b.width()-b[0].clientWidth,height:b.height()-b[0].clientHeight};return b.remove(),c}function r(a,c){return a===c?!0:a===b||c===b?!1:null===a||null===c?!1:a.constructor===String?a+""==c+"":c.constructor===String?c+""==a+"":!1}function s(a,b,c){var d,e,f;if(null===a||a.length<1)return[];for(d=a.split(b),e=0,f=d.length;f>e;e+=1)d[e]=c(d[e]);return d}function t(a){return a.outerWidth(!1)-a.width()}function u(c){var d="keyup-change-value";c.on("keydown",function(){a.data(c,d)===b&&a.data(c,d,c.val())}),c.on("keyup",function(){var e=a.data(c,d);e!==b&&c.val()!==e&&(a.removeData(c,d),c.trigger("keyup-change"))})}function v(c){c.on("mousemove",function(c){var d=h;(d===b||d.x!==c.pageX||d.y!==c.pageY)&&a(c.target).trigger("mousemove-filtered",c)})}function w(a,c,d){d=d||b;var e;return function(){var b=arguments;window.clearTimeout(e),e=window.setTimeout(function(){c.apply(d,b)},a)}}function x(a,b){var c=w(a,function(a){b.trigger("scroll-debounced",a)});b.on("scroll",function(a){p(a.target,b.get())>=0&&c(a)})}function y(a){a[0]!==document.activeElement&&window.setTimeout(function(){var d,b=a[0],c=a.val().length;a.focus();var e=b.offsetWidth>0||b.offsetHeight>0;e&&b===document.activeElement&&(b.setSelectionRange?b.setSelectionRange(c,c):b.createTextRange&&(d=b.createTextRange(),d.collapse(!1),d.select()))},0)}function z(b){b=a(b)[0];var c=0,d=0;if("selectionStart"in b)c=b.selectionStart,d=b.selectionEnd-c;else if("selection"in document){b.focus();var e=document.selection.createRange();d=document.selection.createRange().text.length,e.moveStart("character",-b.value.length),c=e.text.length-d}return{offset:c,length:d}}function A(a){a.preventDefault(),a.stopPropagation()}function B(a){a.preventDefault(),a.stopImmediatePropagation()}function C(b){if(!g){var c=b[0].currentStyle||window.getComputedStyle(b[0],null);g=a(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),g.attr("class","select2-sizer"),a(document.body).append(g)}return g.text(b.val()),g.width()}function D(b,c,d){var e,g,f=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0===this.indexOf("select2-")&&f.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0!==this.indexOf("select2-")&&(g=d(this),g&&f.push(g))})),b.attr("class",f.join(" "))}function E(a,b,c,d){var e=o(a.toUpperCase()).indexOf(o(b.toUpperCase())),f=b.length;return 0>e?(c.push(d(a)),void 0):(c.push(d(a.substring(0,e))),c.push("<span class='select2-match'>"),c.push(d(a.substring(e,e+f))),c.push("</span>"),c.push(d(a.substring(e+f,a.length))),void 0)}function F(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})}function G(c){var d,e=null,f=c.quietMillis||100,g=c.url,h=this;return function(i){window.clearTimeout(d),d=window.setTimeout(function(){var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={type:c.type||"GET",cache:c.cache||!1,jsonpCallback:c.jsonpCallback||b,dataType:c.dataType||"json"},l=a.extend({},a.fn.select2.ajaxDefaults.params,k);d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&"function"==typeof e.abort&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{url:f,dataType:c.dataType,data:d,success:function(a){var b=c.results(a,i.page,i);i.callback(b)},error:function(a,b,c){var d={hasError:!0,jqXHR:a,textStatus:b,errorThrown:c};i.callback(d)}}),e=j.call(h,l)},f)}}function H(b){var d,e,c=b,f=function(a){return""+a.text};a.isArray(c)&&(e=c,c={results:e}),a.isFunction(c)===!1&&(e=c,c=function(){return e});var g=c();return g.text&&(f=g.text,a.isFunction(f)||(d=g.text,f=function(a){return a[d]})),function(b){var g,d=b.term,e={results:[]};return""===d?(b.callback(c()),void 0):(g=function(c,e){var h,i;if(c=c[0],c.children){h={};for(i in c)c.hasOwnProperty(i)&&(h[i]=c[i]);h.children=[],a(c.children).each2(function(a,b){g(b,h.children)}),(h.children.length||b.matcher(d,f(h),c))&&e.push(h)}else b.matcher(d,f(c),c)&&e.push(c)},a(c().results).each2(function(a,b){g(b,e.results)}),b.callback(e),void 0)}}function I(c){var d=a.isFunction(c);return function(e){var f=e.term,g={results:[]},h=d?c(e):c;a.isArray(h)&&(a(h).each(function(){var a=this.text!==b,c=a?this.text:this;(""===f||e.matcher(f,c))&&g.results.push(a?this:{id:this,text:this})}),e.callback(g))}}function J(b,c){if(a.isFunction(b))return!0;if(!b)return!1;if("string"==typeof b)return!0;throw new Error(c+" must be a string, function, or falsy value")}function K(b,c){if(a.isFunction(b)){var d=Array.prototype.slice.call(arguments,2);return b.apply(c,d)}return b}function L(b){var c=0;return a.each(b,function(a,b){b.children?c+=L(b.children):c++}),c}function M(a,c,d,e){var h,i,j,k,l,f=a,g=!1;if(!e.createSearchChoice||!e.tokenSeparators||e.tokenSeparators.length<1)return b;for(;;){for(i=-1,j=0,k=e.tokenSeparators.length;k>j&&(l=e.tokenSeparators[j],i=a.indexOf(l),!(i>=0));j++);if(0>i)break;if(h=a.substring(0,i),a=a.substring(i+l.length),h.length>0&&(h=e.createSearchChoice.call(this,h,c),h!==b&&null!==h&&e.id(h)!==b&&null!==e.id(h))){for(g=!1,j=0,k=c.length;k>j;j++)if(r(e.id(h),e.id(c[j]))){g=!0;break}g||d(h)}}return f!==a?a:void 0}function N(){var b=this;a.each(arguments,function(a,c){b[c].remove(),b[c]=null})}function O(b,c){var d=function(){};return d.prototype=new b,d.prototype.constructor=d,d.prototype.parent=b.prototype,d.prototype=a.extend(d.prototype,c),d}if(window.Select2===b){var c,d,e,f,g,i,j,h={x:0,y:0},k={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){switch(a=a.which?a.which:a){case k.LEFT:case k.RIGHT:case k.UP:case k.DOWN:return!0}return!1},isControl:function(a){var b=a.which;switch(b){case k.SHIFT:case k.CTRL:case k.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){return a=a.which?a.which:a,a>=112&&123>=a}},l="<div class='select2-measure-scrollbar'></div>",m={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038a":"\u0399","\u03aa":"\u0399","\u038c":"\u039f","\u038e":"\u03a5","\u03ab":"\u03a5","\u038f":"\u03a9","\u03ac":"\u03b1","\u03ad":"\u03b5","\u03ae":"\u03b7","\u03af":"\u03b9","\u03ca":"\u03b9","\u0390":"\u03b9","\u03cc":"\u03bf","\u03cd":"\u03c5","\u03cb":"\u03c5","\u03b0":"\u03c5","\u03c9":"\u03c9","\u03c2":"\u03c3"};i=a(document),f=function(){var a=1;return function(){return a++}}(),c=O(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(c){var d,e,g=".select2-results";this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=a(".select2-hidden-accessible"),0==this.liveRegion.length&&(this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body)),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+f()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",c.element.attr("title")),this.body=a(document.body),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(K(c.containerCss,this.opts.element)),this.container.addClass(K(c.containerCssClass,this.opts.element)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",A),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(c.dropdownCssClass,this.opts.element)),this.dropdown.data("select2",this),this.dropdown.on("click",A),this.results=d=this.container.find(g),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",A),v(this.results),this.dropdown.on("mousemove-filtered",g,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",g,this.bind(function(a){this._touchEvent=!0,this.highlightUnderEvent(a)})),this.dropdown.on("touchmove",g,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",g,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(){this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())})),x(80,this.results),this.dropdown.on("scroll-debounced",g,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){a.stopPropagation()}),a(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()}),a.fn.mousewheel&&d.mousewheel(function(a,b,c,e){var f=d.scrollTop();e>0&&0>=f-e?(d.scrollTop(0),A(a)):0>e&&d.get(0).scrollHeight-d.scrollTop()+e<=d.height()&&(d.scrollTop(d.get(0).scrollHeight-d.height()),A(a))}),u(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",g,this.bind(function(b){a(b.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(b),this.selectHighlighted(b))})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(a){a.stopPropagation()}),this.nextSearchTerm=b,a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);var h=c.element.prop("disabled");h===b&&(h=!1),this.enable(!h);var i=c.element.prop("readonly");i===b&&(i=!1),this.readonly(i),j=j||q(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",c.searchInputPlaceholder)},destroy:function(){var a=this.opts.element,c=a.data("select2"),d=this;this.close(),a.length&&a[0].detachEvent&&d._sync&&a.each(function(){d._sync&&this.detachEvent("onpropertychange",d._sync)}),this.propertyObserver&&(this.propertyObserver.disconnect(),this.propertyObserver=null),this._sync=null,c!==b&&(c.container.remove(),c.liveRegion.remove(),c.dropdown.remove(),a.show().removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({tabindex:this.elementTabIndex}):a.removeAttr("tabindex"),a.show()),N.call(this,"container","liveRegion","dropdown","results","search")},optionToData:function(a){return a.is("option")?{id:a.prop("value"),text:a.text(),element:a.get(),css:a.attr("class"),disabled:a.prop("disabled"),locked:r(a.attr("locked"),"locked")||r(a.data("locked"),!0)}:a.is("optgroup")?{text:a.attr("label"),children:[],element:a.get(),css:a.attr("class")}:void 0},prepareOpts:function(c){var d,e,g,h,i=this;if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in c)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),c=a.extend({},{populateResults:function(d,e,g){var h,j=this.opts.id,k=this.liveRegion;h=function(d,e,l){var m,n,o,p,q,r,s,t,u,v;d=c.sortResults(d,e,g);var w=[];for(m=0,n=d.length;n>m;m+=1)o=d[m],q=o.disabled===!0,p=!q&&j(o)!==b,r=o.children&&o.children.length>0,s=a("<li></li>"),s.addClass("select2-results-dept-"+l),s.addClass("select2-result"),s.addClass(p?"select2-result-selectable":"select2-result-unselectable"),q&&s.addClass("select2-disabled"),r&&s.addClass("select2-result-with-children"),s.addClass(i.opts.formatResultCssClass(o)),s.attr("role","presentation"),t=a(document.createElement("div")),t.addClass("select2-result-label"),t.attr("id","select2-result-label-"+f()),t.attr("role","option"),v=c.formatResult(o,t,g,i.opts.escapeMarkup),v!==b&&(t.html(v),s.append(t)),r&&(u=a("<ul></ul>"),u.addClass("select2-result-sub"),h(o.children,u,l+1),s.append(u)),s.data("select2-data",o),w.push(s[0]);e.append(w),k.text(c.formatMatches(d.length))},h(e,d,0)}},a.fn.select2.defaults,c),"function"!=typeof c.id&&(g=c.id,c.id=function(a){return a[g]}),a.isArray(c.element.data("select2Tags"))){if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");c.tags=c.element.data("select2Tags")}if(e?(c.query=this.bind(function(a){var f,g,h,c={results:[],more:!1},e=a.term;h=function(b,c){var d;b.is("option")?a.matcher(e,b.text(),b)&&c.push(i.optionToData(b)):b.is("optgroup")&&(d=i.optionToData(b),b.children().each2(function(a,b){h(b,d.children)}),d.children.length>0&&c.push(d))},f=d.children(),this.getPlaceholder()!==b&&f.length>0&&(g=this.getPlaceholderOption(),g&&(f=f.not(g))),f.each2(function(a,b){h(b,c.results)}),a.callback(c)}),c.id=function(a){return a.id}):"query"in c||("ajax"in c?(h=c.element.data("ajax-url"),h&&h.length>0&&(c.ajax.url=h),c.query=G.call(c.element,c.ajax)):"data"in c?c.query=H(c.data):"tags"in c&&(c.query=I(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=function(b){return{id:a.trim(b),text:a.trim(b)}}),c.initSelection===b&&(c.initSelection=function(b,d){var e=[];a(s(b.val(),c.separator,c.transformVal)).each(function(){var b={id:this,text:this},d=c.tags;a.isFunction(d)&&(d=d()),a(d).each(function(){return r(this.id,b.id)?(b=this,!1):void 0}),e.push(b)}),d(e)}))),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");if("top"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.unshift(b)};else if("bottom"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.push(b)};else if("function"!=typeof c.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";return c},monitorSource:function(){var d,c=this.opts.element,e=this;c.on("change.select2",this.bind(function(){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),this._sync=this.bind(function(){var a=c.prop("disabled");a===b&&(a=!1),this.enable(!a);var d=c.prop("readonly");d===b&&(d=!1),this.readonly(d),this.container&&(D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(K(this.opts.containerCssClass,this.opts.element))),this.dropdown&&(D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(this.opts.dropdownCssClass,this.opts.element)))}),c.length&&c[0].attachEvent&&c.each(function(){this.attachEvent("onpropertychange",e._sync)}),d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,d!==b&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new d(function(b){a.each(b,e._sync)}),this.propertyObserver.observe(c.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(b){var c=a.Event("select2-selecting",{val:this.id(b),object:b,choice:b});return this.opts.element.trigger(c),!c.isDefaultPrevented()},triggerChange:function(b){b=b||{},b=a.extend({},b,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(b),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===!0},enableInterface:function(){var a=this._enabled&&!this._readonly,b=!a;return a===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",b),this.close(),this.enabledInterface=a,!0)},enable:function(a){a===b&&(a=!0),this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(a){a===b&&(a=!1),this._readonly!==a&&(this._readonly=a,this.opts.element.prop("readonly",a),this.enableInterface())},opened:function(){return this.container?this.container.hasClass("select2-dropdown-open"):!1},positionDropdown:function(){var v,w,x,y,z,b=this.dropdown,c=this.container,d=c.offset(),e=c.outerHeight(!1),f=c.outerWidth(!1),g=b.outerHeight(!1),h=a(window),i=h.width(),k=h.height(),l=h.scrollLeft()+i,m=h.scrollTop()+k,n=d.top+e,o=d.left,p=m>=n+g,q=d.top-g>=h.scrollTop(),r=b.outerWidth(!1),s=function(){return l>=o+r},t=function(){return d.left+l+c.outerWidth(!1)>r},u=b.hasClass("select2-drop-above");u?(w=!0,!q&&p&&(x=!0,w=!1)):(w=!1,!p&&q&&(x=!0,w=!0)),x&&(b.hide(),d=this.container.offset(),e=this.container.outerHeight(!1),f=this.container.outerWidth(!1),g=b.outerHeight(!1),l=h.scrollLeft()+i,m=h.scrollTop()+k,n=d.top+e,o=d.left,r=b.outerWidth(!1),b.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(z=a(".select2-results",b)[0],b.addClass("select2-drop-auto-width"),b.css("width",""),r=b.outerWidth(!1)+(z.scrollHeight===z.clientHeight?0:j.width),r>f?f=r:r=f,g=b.outerHeight(!1)):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(v=this.body.offset(),n-=v.top,o-=v.left),!s()&&t()&&(o=d.left+this.container.outerWidth(!1)-r),y={left:o,width:f},w?(y.top=d.top-g,y.bottom="auto",this.container.addClass("select2-drop-above"),b.addClass("select2-drop-above")):(y.top=n,y.bottom="auto",this.container.removeClass("select2-drop-above"),b.removeClass("select2-drop-above")),y=a.extend(y,K(this.opts.dropdownCss,this.opts.element)),b.css(y)},shouldOpen:function(){var b;return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(b=a.Event("select2-opening"),this.opts.element.trigger(b),!b.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return this.shouldOpen()?(this.opening(),i.on("mousemove.select2Event",function(a){h.x=a.pageX,h.y=a.pageY}),!0):!1},opening:function(){var f,b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),f=a("#select2-drop-mask"),0===f.length&&(f=a(document.createElement("div")),f.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),f.hide(),f.appendTo(this.body),f.on("mousedown touchstart click",function(b){n(f);var d,c=a("#select2-drop");c.length>0&&(d=c.data("select2"),d.opts.selectOnBlur&&d.selectHighlighted({noFocus:!0}),d.close(),b.preventDefault(),b.stopPropagation())})),this.dropdown.prev()[0]!==f[0]&&this.dropdown.before(f),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),f.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var g=this;this.container.parents().add(window).each(function(){a(this).on(d+" "+c+" "+e,function(){g.opened()&&g.positionDropdown()})})},close:function(){if(this.opened()){var b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.parents().add(window).each(function(){a(this).off(c).off(d).off(e)}),this.clearDropdownAlignmentPreference(),a("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),i.off("mousemove.select2Event"),this.clearSearch(),this.search.removeClass("select2-active"),this.opts.element.trigger(a.Event("select2-close"))}},externalSearch:function(a){this.open(),this.search.val(a),this.updateResults(!1)},clearSearch:function(){},getMaximumSelectionSize:function(){return K(this.opts.maximumSelectionSize,this.opts.element)},ensureHighlightVisible:function(){var c,d,e,f,g,h,i,j,b=this.results;if(d=this.highlight(),!(0>d)){if(0==d)return b.scrollTop(0),void 0;c=this.findHighlightableChoices().find(".select2-result-label"),e=a(c[d]),j=(e.offset()||{}).top||0,f=j+e.outerHeight(!0),d===c.length-1&&(i=b.find("li.select2-more-results"),i.length>0&&(f=i.offset().top+i.outerHeight(!0))),g=b.offset().top+b.outerHeight(!1),f>g&&b.scrollTop(b.scrollTop()+(f-g)),h=j-b.offset().top,0>h&&"none"!=e.css("display")&&b.scrollTop(b.scrollTop()+h)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")},moveHighlight:function(b){for(var c=this.findHighlightableChoices(),d=this.highlight();d>-1&&d<c.length;){d+=b;
var e=a(c[d]);if(e.hasClass("select2-result-selectable")&&!e.hasClass("select2-disabled")&&!e.hasClass("select2-selected")){this.highlight(d);break}}},highlight:function(b){var d,e,c=this.findHighlightableChoices();return 0===arguments.length?p(c.filter(".select2-highlighted")[0],c.get()):(b>=c.length&&(b=c.length-1),0>b&&(b=0),this.removeHighlight(),d=a(c[b]),d.addClass("select2-highlighted"),this.search.attr("aria-activedescendant",d.find(".select2-result-label").attr("id")),this.ensureHighlightVisible(),this.liveRegion.text(d.text()),e=d.data("select2-data"),e&&this.opts.element.trigger({type:"select2-highlight",val:this.id(e),choice:e}),void 0)},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},touchMoved:function(){this._touchMoved=!0},clearTouchMoved:function(){this._touchMoved=!1},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(b){var c=a(b.target).closest(".select2-result-selectable");if(c.length>0&&!c.is(".select2-highlighted")){var d=this.findHighlightableChoices();this.highlight(d.index(c))}else 0==c.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var c,a=this.results,b=a.find("li.select2-more-results"),d=this.resultsPage+1,e=this,f=this.search.val(),g=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({element:this.opts.element,term:f,page:d,context:g,matcher:this.opts.matcher,callback:this.bind(function(c){e.opened()&&(e.opts.populateResults.call(this,a,c.results,{term:f,page:d,context:g}),e.postprocessResults(c,!1,!1),c.more===!0?(b.detach().appendTo(a).html(e.opts.escapeMarkup(K(e.opts.formatLoadMore,e.opts.element,d+1))),window.setTimeout(function(){e.loadMoreIfNeeded()},10)):b.remove(),e.positionDropdown(),e.resultsPage=d,e.context=c.context,this.opts.element.trigger({type:"select2-loaded",items:c}))})})))},tokenize:function(){},updateResults:function(c){function m(){d.removeClass("select2-active"),h.positionDropdown(),e.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?h.liveRegion.text(e.text()):h.liveRegion.text(h.opts.formatMatches(e.find('.select2-result-selectable:not(".select2-selected")').length))}function n(a){e.html(a),m()}var g,i,l,d=this.search,e=this.results,f=this.opts,h=this,j=d.val(),k=a.data(this.container,"select2-last-term");if((c===!0||!k||!r(j,k))&&(a.data(this.container,"select2-last-term",j),c===!0||this.showSearchInput!==!1&&this.opened())){l=++this.queryCount;var o=this.getMaximumSelectionSize();if(o>=1&&(g=this.data(),a.isArray(g)&&g.length>=o&&J(f.formatSelectionTooBig,"formatSelectionTooBig")))return n("<li class='select2-selection-limit'>"+K(f.formatSelectionTooBig,f.element,o)+"</li>"),void 0;if(d.val().length<f.minimumInputLength)return J(f.formatInputTooShort,"formatInputTooShort")?n("<li class='select2-no-results'>"+K(f.formatInputTooShort,f.element,d.val(),f.minimumInputLength)+"</li>"):n(""),c&&this.showSearch&&this.showSearch(!0),void 0;if(f.maximumInputLength&&d.val().length>f.maximumInputLength)return J(f.formatInputTooLong,"formatInputTooLong")?n("<li class='select2-no-results'>"+K(f.formatInputTooLong,f.element,d.val(),f.maximumInputLength)+"</li>"):n(""),void 0;f.formatSearching&&0===this.findHighlightableChoices().length&&n("<li class='select2-searching'>"+K(f.formatSearching,f.element)+"</li>"),d.addClass("select2-active"),this.removeHighlight(),i=this.tokenize(),i!=b&&null!=i&&d.val(i),this.resultsPage=1,f.query({element:f.element,term:d.val(),page:this.resultsPage,context:null,matcher:f.matcher,callback:this.bind(function(g){var i;if(l==this.queryCount){if(!this.opened())return this.search.removeClass("select2-active"),void 0;if(g.hasError!==b&&J(f.formatAjaxError,"formatAjaxError"))return n("<li class='select2-ajax-error'>"+K(f.formatAjaxError,f.element,g.jqXHR,g.textStatus,g.errorThrown)+"</li>"),void 0;if(this.context=g.context===b?null:g.context,this.opts.createSearchChoice&&""!==d.val()&&(i=this.opts.createSearchChoice.call(h,d.val(),g.results),i!==b&&null!==i&&h.id(i)!==b&&null!==h.id(i)&&0===a(g.results).filter(function(){return r(h.id(this),h.id(i))}).length&&this.opts.createSearchChoicePosition(g.results,i)),0===g.results.length&&J(f.formatNoMatches,"formatNoMatches"))return n("<li class='select2-no-results'>"+K(f.formatNoMatches,f.element,d.val())+"</li>"),void 0;e.empty(),h.opts.populateResults.call(this,e,g.results,{term:d.val(),page:this.resultsPage,context:null}),g.more===!0&&J(f.formatLoadMore,"formatLoadMore")&&(e.append("<li class='select2-more-results'>"+f.escapeMarkup(K(f.formatLoadMore,f.element,this.resultsPage))+"</li>"),window.setTimeout(function(){h.loadMoreIfNeeded()},10)),this.postprocessResults(g,c),m(),this.opts.element.trigger({type:"select2-loaded",items:g})}})})}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){y(this.search)},selectHighlighted:function(a){if(this._touchMoved)return this.clearTouchMoved(),void 0;var b=this.highlight(),c=this.results.find(".select2-highlighted"),d=c.closest(".select2-result").data("select2-data");d?(this.highlight(b),this.onSelect(d,a)):a&&a.noFocus&&this.close()},getPlaceholder:function(){var a;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((a=this.getPlaceholderOption())!==b?a.text():b)},getPlaceholderOption:function(){if(this.select){var c=this.select.children("option").first();if(this.opts.placeholderOption!==b)return"first"===this.opts.placeholderOption&&c||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===a.trim(c.text())&&""===c.val())return c}},initContainerWidth:function(){function c(){var c,d,e,f,g,h;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){if(c=this.opts.element.attr("style"),c!==b)for(d=c.split(";"),f=0,g=d.length;g>f;f+=1)if(h=d[f].replace(/\s/g,""),e=h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==e&&e.length>=1)return e[1];return"resolve"===this.opts.width?(c=this.opts.element.css("width"),c.indexOf("%")>0?c:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return a.isFunction(this.opts.width)?this.opts.width():this.opts.width}var d=c.call(this);null!==d&&this.container.css("width",d)}}),d=O(c,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""));return b},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var c,d,e;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.opts.shouldFocusInput(this)&&(this.search.focus(),c=this.search.get(0),c.createTextRange?(d=c.createTextRange(),d.collapse(!1),d.select()):c.setSelectionRange&&(e=this.search.val().length,c.setSelectionRange(e,e))),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus()},destroy:function(){a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"selection","focusser")},initContainer:function(){var b,g,c=this.container,d=this.dropdown,e=f();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=c.find(".select2-choice"),this.focusser=c.find(".select2-focusser"),b.find(".select2-chosen").attr("id","select2-chosen-"+e),this.focusser.attr("aria-labelledby","select2-chosen-"+e),this.results.attr("id","select2-results-"+e),this.search.attr("aria-owns","select2-results-"+e),this.focusser.attr("id","s2id_autogen"+e),g=a("label[for='"+this.opts.element.attr("id")+"']"),this.opts.element.focus(this.bind(function(){this.focus()})),this.focusser.prev().text(g.text()).attr("for",this.focusser.attr("id"));var h=this.opts.element.attr("title");this.opts.element.attr("title",h||g.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(a("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&229!=a.keyCode){if(a.which===k.PAGE_UP||a.which===k.PAGE_DOWN)return A(a),void 0;switch(a.which){case k.UP:case k.DOWN:return this.moveHighlight(a.which===k.UP?-1:1),A(a),void 0;case k.ENTER:return this.selectHighlighted(),A(a),void 0;case k.TAB:return this.selectHighlighted({noFocus:!0}),void 0;case k.ESC:return this.cancel(a),A(a),void 0}}})),this.search.on("blur",this.bind(function(){document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){this.opened()&&this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&a.which!==k.TAB&&!k.isControl(a)&&!k.isFunctionKey(a)&&a.which!==k.ESC){if(this.opts.openOnEnter===!1&&a.which===k.ENTER)return A(a),void 0;if(a.which==k.DOWN||a.which==k.UP||a.which==k.ENTER&&this.opts.openOnEnter){if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return;return this.open(),A(a),void 0}return a.which==k.DELETE||a.which==k.BACKSPACE?(this.opts.allowClear&&this.clear(),A(a),void 0):void 0}})),u(this.focusser),this.focusser.on("keyup-change input",this.bind(function(a){if(this.opts.minimumResultsForSearch>=0){if(a.stopPropagation(),this.opened())return;this.open()}})),b.on("mousedown touchstart","abbr",this.bind(function(a){this.isInterfaceEnabled()&&(this.clear(),B(a),this.close(),this.selection&&this.selection.focus())})),b.on("mousedown touchstart",this.bind(function(c){n(b),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),A(c)})),d.on("mousedown touchstart",this.bind(function(){this.opts.shouldFocusInput(this)&&this.search.focus()})),b.on("focus",this.bind(function(a){A(a)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(a.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.hide(),this.setPlaceholder()},clear:function(b){var c=this.selection.data("select2-data");if(c){var d=a.Event("select2-clearing");if(this.opts.element.trigger(d),d.isDefaultPrevented())return;var e=this.getPlaceholderOption();this.opts.element.val(e?e.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),b!==!1&&(this.opts.element.trigger({type:"select2-removed",val:this.id(c),choice:c}),this.triggerChange({removed:c}))}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.setPlaceholder(),c.nextSearchTerm=c.opts.nextSearchTerm(a,c.search.val()))})}},isPlaceholderOptionSelected:function(){var a;return this.getPlaceholder()===b?!1:(a=this.getPlaceholderOption())!==b&&a.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val()},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=a.find("option").filter(function(){return this.selected&&!this.disabled});b(c.optionToData(d))}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=c.val(),f=null;b.query({matcher:function(a,c,d){var g=r(e,b.id(d));return g&&(f=d),g},callback:a.isFunction(d)?function(){d(f)}:a.noop})}),b},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var a=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&a!==b){if(this.select&&this.getPlaceholderOption()===b)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},postprocessResults:function(a,b,c){var d=0,e=this;if(this.findHighlightableChoices().each2(function(a,b){return r(e.id(b.data("select2-data")),e.opts.element.val())?(d=a,!1):void 0}),c!==!1&&(b===!0&&d>=0?this.highlight(d):this.highlight(0)),b===!0){var g=this.opts.minimumResultsForSearch;g>=0&&this.showSearch(L(a.results)>=g)}},showSearch:function(b){this.showSearchInput!==b&&(this.showSearchInput=b,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!b),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!b),a(this.dropdown,this.container).toggleClass("select2-with-searchbox",b))},onSelect:function(a,b){if(this.triggerSelect(a)){var c=this.opts.element.val(),d=this.data();this.opts.element.val(this.id(a)),this.updateSelection(a),this.opts.element.trigger({type:"select2-selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.close(),b&&b.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),r(c,this.id(a))||this.triggerChange({added:a,removed:d})}},updateSelection:function(a){var d,e,c=this.selection.find(".select2-chosen");this.selection.data("select2-data",a),c.empty(),null!==a&&(d=this.opts.formatSelection(a,c,this.opts.escapeMarkup)),d!==b&&c.append(d),e=this.opts.formatSelectionCssClass(a,c),e!==b&&c.addClass(e),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")},val:function(){var a,c=!1,d=null,e=this,f=this.data();if(0===arguments.length)return this.opts.element.val();if(a=arguments[0],arguments.length>1&&(c=arguments[1]),this.select)this.select.val(a).find("option").filter(function(){return this.selected}).each2(function(a,b){return d=e.optionToData(b),!1}),this.updateSelection(d),this.setPlaceholder(),c&&this.triggerChange({added:d,removed:f});else{if(!a&&0!==a)return this.clear(c),void 0;if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){e.opts.element.val(a?e.id(a):""),e.updateSelection(a),e.setPlaceholder(),c&&e.triggerChange({added:a,removed:f})})}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(a){var c,d=!1;return 0===arguments.length?(c=this.selection.data("select2-data"),c==b&&(c=null),c):(arguments.length>1&&(d=arguments[1]),a?(c=this.data(),this.opts.element.val(a?this.id(a):""),this.updateSelection(a),d&&this.triggerChange({added:a,removed:c})):this.clear(d),void 0)}}),e=O(c,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=[];a.find("option").filter(function(){return this.selected&&!this.disabled}).each2(function(a,b){d.push(c.optionToData(b))}),b(d)}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=s(c.val(),b.separator,b.transformVal),f=[];b.query({matcher:function(c,d,g){var h=a.grep(e,function(a){return r(a,b.id(g))}).length;return h&&f.push(g),h},callback:a.isFunction(d)?function(){for(var a=[],c=0;c<e.length;c++)for(var g=e[c],h=0;h<f.length;h++){var i=f[h];if(r(g,b.id(i))){a.push(i),f.splice(h,1);break}}d(a)}:a.noop})}),b},selectChoice:function(a){var b=this.container.find(".select2-search-choice-focus");b.length&&a&&a[0]==b[0]||(b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a)))},destroy:function(){a("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"searchContainer","selection")},initContainer:function(){var c,b=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=c=this.container.find(b);var d=this;this.selection.on("click",".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)",function(){d.search[0].focus(),d.selectChoice(a(this))}),this.search.attr("id","s2id_autogen"+f()),this.search.prev().text(a("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.opts.element.focus(this.bind(function(){this.focus()})),this.search.on("input paste",this.bind(function(){this.search.attr("placeholder")&&0==this.search.val().length||this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){++this.keydowns;var b=c.find(".select2-search-choice-focus"),d=b.prev(".select2-search-choice:not(.select2-locked)"),e=b.next(".select2-search-choice:not(.select2-locked)"),f=z(this.search);if(b.length&&(a.which==k.LEFT||a.which==k.RIGHT||a.which==k.BACKSPACE||a.which==k.DELETE||a.which==k.ENTER)){var g=b;return a.which==k.LEFT&&d.length?g=d:a.which==k.RIGHT?g=e.length?e:null:a.which===k.BACKSPACE?this.unselect(b.first())&&(this.search.width(10),g=d.length?d:e):a.which==k.DELETE?this.unselect(b.first())&&(this.search.width(10),g=e.length?e:null):a.which==k.ENTER&&(g=null),this.selectChoice(g),A(a),g&&g.length||this.open(),void 0}if((a.which===k.BACKSPACE&&1==this.keydowns||a.which==k.LEFT)&&0==f.offset&&!f.length)return this.selectChoice(c.find(".select2-search-choice:not(.select2-locked)").last()),A(a),void 0;if(this.selectChoice(null),this.opened())switch(a.which){case k.UP:case k.DOWN:return this.moveHighlight(a.which===k.UP?-1:1),A(a),void 0;case k.ENTER:return this.selectHighlighted(),A(a),void 0;case k.TAB:return this.selectHighlighted({noFocus:!0}),this.close(),void 0;case k.ESC:return this.cancel(a),A(a),void 0}if(a.which!==k.TAB&&!k.isControl(a)&&!k.isFunctionKey(a)&&a.which!==k.BACKSPACE&&a.which!==k.ESC){if(a.which===k.ENTER){if(this.opts.openOnEnter===!1)return;if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return}this.open(),(a.which===k.PAGE_UP||a.which===k.PAGE_DOWN)&&A(a),a.which===k.ENTER&&A(a)}}})),this.search.on("keyup",this.bind(function(){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(b){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),b.stopImmediatePropagation(),this.opts.element.trigger(a.Event("select2-blur"))})),this.container.on("click",b,this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.open(),this.focusSearch(),b.preventDefault()))})),this.container.on("focus",b,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.hide(),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.clearSearch())})}},clearSearch:function(){var a=this.getPlaceholder(),c=this.getMaxSearchWidth();a!==b&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(a).addClass("select2-default"),this.search.width(c>0?c:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(b){var c=[],d=[],e=this;a(b).each(function(){p(e.id(this),c)<0&&(c.push(e.id(this)),d.push(this))}),b=d,this.selection.find(".select2-search-choice").remove(),a(b).each(function(){e.addSelectedChoice(this)}),e.postprocessResults()},tokenize:function(){var a=this.search.val();a=this.opts.tokenizer.call(this,a,this.data(),this.bind(this.onSelect),this.opts),null!=a&&a!=b&&(this.search.val(a),a.length>0&&this.open())},onSelect:function(a,c){this.triggerSelect(a)&&""!==a.text&&(this.addSelectedChoice(a),this.opts.element.trigger({type:"selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.clearSearch(),this.updateResults(),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.updateResults(),this.search.select()),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:a}),c&&c.noFocus||this.focusSearch())},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(c){var j,k,d=!c.locked,e=a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),f=a("<li class='select2-search-choice select2-locked'><div></div></li>"),g=d?e:f,h=this.id(c),i=this.getVal();j=this.opts.formatSelection(c,g.find("div"),this.opts.escapeMarkup),j!=b&&g.find("div").replaceWith(a("<div></div>").html(j)),k=this.opts.formatSelectionCssClass(c,g.find("div")),k!=b&&g.addClass(k),d&&g.find(".select2-search-choice-close").on("mousedown",A).on("click dblclick",this.bind(function(b){this.isInterfaceEnabled()&&(this.unselect(a(b.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),A(b),this.close(),this.focusSearch())})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),g.data("select2-data",c),g.insertBefore(this.searchContainer),i.push(h),this.setVal(i)},unselect:function(b){var d,e,c=this.getVal();if(b=b.closest(".select2-search-choice"),0===b.length)throw"Invalid argument: "+b+". Must be .select2-search-choice";if(d=b.data("select2-data")){var f=a.Event("select2-removing");if(f.val=this.id(d),f.choice=d,this.opts.element.trigger(f),f.isDefaultPrevented())return!1;for(;(e=p(this.id(d),c))>=0;)c.splice(e,1),this.setVal(c),this.select&&this.postprocessResults();return b.remove(),this.opts.element.trigger({type:"select2-removed",val:this.id(d),choice:d}),this.triggerChange({removed:d}),!0}},postprocessResults:function(a,b,c){var d=this.getVal(),e=this.results.find(".select2-result"),f=this.results.find(".select2-result-with-children"),g=this;e.each2(function(a,b){var c=g.id(b.data("select2-data"));p(c,d)>=0&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))}),f.each2(function(a,b){b.is(".select2-result-selectable")||0!==b.find(".select2-result-selectable:not(.select2-selected)").length||b.addClass("select2-selected")}),-1==this.highlight()&&c!==!1&&this.opts.closeOnSelect===!0&&g.highlight(0),!this.opts.createSearchChoice&&!e.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&J(g.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+K(g.opts.formatNoMatches,g.opts.element,g.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-t(this.search)},resizeSearch:function(){var a,b,c,d,e,f=t(this.search);a=C(this.search)+10,b=this.search.offset().left,c=this.selection.width(),d=this.selection.offset().left,e=c-(b-d)-f,a>e&&(e=c-f),40>e&&(e=c-f),0>=e&&(e=a),this.search.width(Math.floor(e))},getVal:function(){var a;return this.select?(a=this.select.val(),null===a?[]:a):(a=this.opts.element.val(),s(a,this.opts.separator,this.opts.transformVal))},setVal:function(b){var c;this.select?this.select.val(b):(c=[],a(b).each(function(){p(this,c)<0&&c.push(this)}),this.opts.element.val(0===c.length?"":c.join(this.opts.separator)))},buildChangeDetails:function(a,b){for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)r(this.opts.id(b[c]),this.opts.id(a[d]))&&(b.splice(c,1),c>0&&c--,a.splice(d,1),d--);return{added:b,removed:a}},val:function(c,d){var e,f=this;if(0===arguments.length)return this.getVal();if(e=this.data(),e.length||(e=[]),!c&&0!==c)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),d&&this.triggerChange({added:this.data(),removed:e}),void 0;if(this.setVal(c),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),d&&this.triggerChange(this.buildChangeDetails(e,this.data()));else{if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(b){var c=a.map(b,f.id);f.setVal(c),f.updateSelection(b),f.clearSearch(),d&&f.triggerChange(f.buildChangeDetails(e,f.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var b=[],c=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){b.push(c.opts.id(a(this).data("select2-data")))}),this.setVal(b),this.triggerChange()},data:function(b,c){var e,f,d=this;return 0===arguments.length?this.selection.children(".select2-search-choice").map(function(){return a(this).data("select2-data")}).get():(f=this.data(),b||(b=[]),e=a.map(b,function(a){return d.opts.id(a)}),this.setVal(e),this.updateSelection(b),this.clearSearch(),c&&this.triggerChange(this.buildChangeDetails(f,this.data())),void 0)}}),a.fn.select2=function(){var d,e,f,g,h,c=Array.prototype.slice.call(arguments,0),i=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],j=["opened","isFocused","container","dropdown"],k=["val","data"],l={search:"externalSearch"};return this.each(function(){if(0===c.length||"object"==typeof c[0])d=0===c.length?{}:a.extend({},c[0]),d.element=a(this),"select"===d.element.get(0).tagName.toLowerCase()?h=d.element.prop("multiple"):(h=d.multiple||!1,"tags"in d&&(d.multiple=h=!0)),e=h?new window.Select2["class"].multi:new window.Select2["class"].single,e.init(d);else{if("string"!=typeof c[0])throw"Invalid arguments to select2 plugin: "+c;if(p(c[0],i)<0)throw"Unknown method: "+c[0];if(g=b,e=a(this).data("select2"),e===b)return;if(f=c[0],"container"===f?g=e.container:"dropdown"===f?g=e.dropdown:(l[f]&&(f=l[f]),g=e[f].apply(e,c.slice(1))),p(c[0],j)>=0||p(c[0],k)>=0&&1==c.length)return!1}}),g===b?this:g},a.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c,d){var e=[];return E(this.text(a),c.term,e,d),e.join("")},transformVal:function(b){return a.trim(b)},formatSelection:function(a,c,d){return a?d(this.text(a)):b},sortResults:function(a){return a},formatResultCssClass:function(a){return a.css},formatSelectionCssClass:function(){return b},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(a){return a==b?null:a.id},text:function(b){return b&&this.data&&this.data.text?a.isFunction(this.data.text)?this.data.text(b):b[this.data.text]:b.text
},matcher:function(a,b){return o(""+b).toUpperCase().indexOf(o(""+a).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:M,escapeMarkup:F,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(a){return a},adaptDropdownCssClass:function(){return null},nextSearchTerm:function(){return b},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:function(a){var b="ontouchstart"in window||navigator.msMaxTouchPoints>0;return b?a.opts.minimumResultsForSearch<0?!1:!0:!0}},a.fn.select2.locales=[],a.fn.select2.locales.en={formatMatches:function(a){return 1===a?"One result is available, press enter to select it.":a+" results are available, use up and down arrow keys to navigate."},formatNoMatches:function(){return"No matches found"},formatAjaxError:function(){return"Loading failed"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+c+" or more character"+(1==c?"":"s")},formatInputTooLong:function(a,b){var c=a.length-b;return"Please delete "+c+" character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(){return"Loading more results\u2026"},formatSearching:function(){return"Searching\u2026"}},a.extend(a.fn.select2.defaults,a.fn.select2.locales.en),a.fn.select2.ajaxDefaults={transport:a.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:G,local:H,tags:I},util:{debounce:w,markMatch:E,escapeMarkup:F,stripDiacritics:o},"class":{"abstract":c,single:d,multi:e}}}}(jQuery);
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
 * @license Use it if you like it
 */
function RGBColor(color_string)
{
    this.ok = false;

    // strip any leading #
    if (color_string.charAt(0) == '#') { // remove # if any
        color_string = color_string.substr(1,6);
    }

    color_string = color_string.replace(/ /g,'');
    color_string = color_string.toLowerCase();

    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred : 'cd5c5c',
        indigo : '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    for (var key in simple_colors) {
        if (color_string == key) {
            color_string = simple_colors[key];
        }
    }
    // emd of simple type-in colors

    // array of color definition objects
    var color_defs = [
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            example: ['#00ff00', '336699'],
            process: function (bits){
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            example: ['#fb0', 'f0f'],
            process: function (bits){
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];

    // search through the definitions to find a match
    for (var i = 0; i < color_defs.length; i++) {
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            this.ok = true;
        }

    }

    // validate/cleanup values
    this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
    this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
    this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);

    // some getters
    this.toRGB = function () {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    }
    this.toHex = function () {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    }

    // help
    this.getHelpXML = function () {

        var examples = new Array();
        // add regexps
        for (var i = 0; i < color_defs.length; i++) {
            var example = color_defs[i].example;
            for (var j = 0; j < example.length; j++) {
                examples[examples.length] = example[j];
            }
        }
        // add type-in colors
        for (var sc in simple_colors) {
            examples[examples.length] = sc;
        }

        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for (var i = 0; i < examples.length; i++) {
            try {
                var list_item = document.createElement('li');
                var list_color = new RGBColor(examples[i]);
                var example_div = document.createElement('div');
                example_div.style.cssText =
                        'margin: 3px; '
                        + 'border: 1px solid black; '
                        + 'background:' + list_color.toHex() + '; '
                        + 'color:' + list_color.toHex()
                ;
                example_div.appendChild(document.createTextNode('test'));
                var list_item_value = document.createTextNode(
                    ' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex()
                );
                list_item.appendChild(example_div);
                list_item.appendChild(list_item_value);
                xml.appendChild(list_item);

            } catch(e){}
        }
        return xml;

    }

}


/*
 * canvg.js - Javascript SVG parser and renderer on Canvas
 * MIT Licensed
 * Gabe Lerner (gabelerner@gmail.com)
 * http://code.google.com/p/canvg/
 *
 * Requires: rgbcolor.js - http://www.phpied.com/rgb-color-parser-in-javascript/
 */
(function(){
	// canvg(target, s)
	// empty parameters: replace all 'svg' elements on page with 'canvas' elements
	// target: canvas element or the id of a canvas element
	// s: svg string, url to svg file, or xml document
	// opts: optional hash of options
	//		 ignoreMouse: true => ignore mouse events
	//		 ignoreAnimation: true => ignore animations
	//		 ignoreDimensions: true => does not try to resize canvas
	//		 ignoreClear: true => does not clear canvas
	//		 offsetX: int => draws at a x offset
	//		 offsetY: int => draws at a y offset
	//		 scaleWidth: int => scales horizontally to width
	//		 scaleHeight: int => scales vertically to height
	//		 renderCallback: function => will call the function after the first render is completed
	//		 forceRedraw: function => will call the function on every frame, if it returns true, will redraw
	this.canvg = function (target, s, opts) {
		// no parameters
		if (target == null && s == null && opts == null) {
			var svgTags = document.querySelectorAll('svg');
			for (var i=0; i<svgTags.length; i++) {
				var svgTag = svgTags[i];
				var c = document.createElement('canvas');
				c.width = svgTag.clientWidth;
				c.height = svgTag.clientHeight;
				svgTag.parentNode.insertBefore(c, svgTag);
				svgTag.parentNode.removeChild(svgTag);
				var div = document.createElement('div');
				div.appendChild(svgTag);
				canvg(c, div.innerHTML);
			}
			return;
		}

		if (typeof target == 'string') {
			target = document.getElementById(target);
		}

		// store class on canvas
		if (target.svg != null) target.svg.stop();
		var svg = build(opts || {});
		// on i.e. 8 for flash canvas, we can't assign the property so check for it
		if (!(target.childNodes.length == 1 && target.childNodes[0].nodeName == 'OBJECT')) target.svg = svg;

		var ctx = target.getContext('2d');
		if (typeof(s.documentElement) != 'undefined') {
			// load from xml doc
			svg.loadXmlDoc(ctx, s);
		}
		else if (s.substr(0,1) == '<') {
			// load from xml string
			svg.loadXml(ctx, s);
		}
		else {
			// load from url
			svg.load(ctx, s);
		}
	}

	// see https://developer.mozilla.org/en-US/docs/Web/API/Element.matches
	var matchesSelector;
	if (typeof(Element.prototype.matches) != 'undefined') {
		matchesSelector = function(node, selector) {
			return node.matches(selector);
		};
	} else if (typeof(Element.prototype.webkitMatchesSelector) != 'undefined') {
		matchesSelector = function(node, selector) {
			return node.webkitMatchesSelector(selector);
		};
	} else if (typeof(Element.prototype.mozMatchesSelector) != 'undefined') {
		matchesSelector = function(node, selector) {
			return node.mozMatchesSelector(selector);
		};
	} else if (typeof(Element.prototype.msMatchesSelector) != 'undefined') {
		matchesSelector = function(node, selector) {
			return node.msMatchesSelector(selector);
		};
	} else if (typeof(Element.prototype.oMatchesSelector) != 'undefined') {
		matchesSelector = function(node, selector) {
			return node.oMatchesSelector(selector);
		};
	} else {
		// requires Sizzle: https://github.com/jquery/sizzle/wiki/Sizzle-Documentation
		// without Sizzle, this is a ReferenceError
		matchesSelector = Sizzle.matchesSelector;
	}

	// slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js
	var attributeRegex = /(\[[^\]]+\])/g;
	var idRegex = /(#[^\s\+>~\.\[:]+)/g;
	var classRegex = /(\.[^\s\+>~\.\[:]+)/g;
	var pseudoElementRegex = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi;
	var pseudoClassWithBracketsRegex = /(:[\w-]+\([^\)]*\))/gi;
	var pseudoClassRegex = /(:[^\s\+>~\.\[:]+)/g;
	var elementRegex = /([^\s\+>~\.\[:]+)/g;
	function getSelectorSpecificity(selector) {
		var typeCount = [0, 0, 0];
		var findMatch = function(regex, type) {
			var matches = selector.match(regex);
			if (matches == null) {
				return;
			}
			typeCount[type] += matches.length;
			selector = selector.replace(regex, ' ');
		};

		selector = selector.replace(/:not\(([^\)]*)\)/g, '     $1 ');
		selector = selector.replace(/{[^]*/gm, ' ');
		findMatch(attributeRegex, 1);
		findMatch(idRegex, 0);
		findMatch(classRegex, 1);
		findMatch(pseudoElementRegex, 2);
		findMatch(pseudoClassWithBracketsRegex, 1);
		findMatch(pseudoClassRegex, 1);
		selector = selector.replace(/[\*\s\+>~]/g, ' ');
		selector = selector.replace(/[#\.]/g, ' ');
		findMatch(elementRegex, 2);
		return typeCount.join('');
	}

	function build(opts) {
		var svg = { opts: opts };

		svg.FRAMERATE = 30;
		svg.MAX_VIRTUAL_PIXELS = 30000;

		svg.log = function(msg) {};
		if (svg.opts['log'] == true && typeof(console) != 'undefined') {
			svg.log = function(msg) { console.log(msg); };
		};

		// globals
		svg.init = function(ctx) {
			var uniqueId = 0;
			svg.UniqueId = function () { uniqueId++; return 'canvg' + uniqueId;	};
			svg.Definitions = {};
			svg.Styles = {};
			svg.StylesSpecificity = {};
			svg.Animations = [];
			svg.Images = [];
			svg.ctx = ctx;
			svg.ViewPort = new (function () {
				this.viewPorts = [];
				this.Clear = function() { this.viewPorts = []; }
				this.SetCurrent = function(width, height) { this.viewPorts.push({ width: width, height: height }); }
				this.RemoveCurrent = function() { this.viewPorts.pop(); }
				this.Current = function() { return this.viewPorts[this.viewPorts.length - 1]; }
				this.width = function() { return this.Current().width; }
				this.height = function() { return this.Current().height; }
				this.ComputeSize = function(d) {
					if (d != null && typeof(d) == 'number') return d;
					if (d == 'x') return this.width();
					if (d == 'y') return this.height();
					return Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2);
				}
			});
		}
		svg.init();

		// images loaded
		svg.ImagesLoaded = function() {
			for (var i=0; i<svg.Images.length; i++) {
				if (!svg.Images[i].loaded) return false;
			}
			return true;
		}

		// trim
		svg.trim = function(s) { return s.replace(/^\s+|\s+$/g, ''); }

		// compress spaces
		svg.compressSpaces = function(s) { return s.replace(/[\s\r\t\n]+/gm,' '); }

		// ajax
		svg.ajax = function(url) {
			var AJAX;
			if(window.XMLHttpRequest){AJAX=new XMLHttpRequest();}
			else{AJAX=new ActiveXObject('Microsoft.XMLHTTP');}
			if(AJAX){
				// ahoiin false
			   AJAX.open('GET',url,true);
			   AJAX.send(null);
			   return AJAX.responseText;
			}
			return null;
		}

		// parse xml
		svg.parseXml = function(xml) {
			if (typeof(Windows) != 'undefined' && typeof(Windows.Data) != 'undefined' && typeof(Windows.Data.Xml) != 'undefined') {
				var xmlDoc = new Windows.Data.Xml.Dom.XmlDocument();
				var settings = new Windows.Data.Xml.Dom.XmlLoadSettings();
				settings.prohibitDtd = false;
				xmlDoc.loadXml(xml, settings);
				return xmlDoc;
			}
			else if (window.DOMParser)
			{
				var parser = new DOMParser();
				return parser.parseFromString(xml, 'text/xml');
			}
			else
			{
				xml = xml.replace(/<!DOCTYPE svg[^>]*>/, '');
				var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
				xmlDoc.async = 'false';
				xmlDoc.loadXML(xml);
				return xmlDoc;
			}
		}

		svg.Property = function(name, value) {
			this.name = name;
			this.value = value;
		}
			svg.Property.prototype.getValue = function() {
				return this.value;
			}

			svg.Property.prototype.hasValue = function() {
				return (this.value != null && this.value !== '');
			}

			// return the numerical value of the property
			svg.Property.prototype.numValue = function() {
				if (!this.hasValue()) return 0;

				var n = parseFloat(this.value);
				if ((this.value + '').match(/%$/)) {
					n = n / 100.0;
				}
				return n;
			}

			svg.Property.prototype.valueOrDefault = function(def) {
				if (this.hasValue()) return this.value;
				return def;
			}

			svg.Property.prototype.numValueOrDefault = function(def) {
				if (this.hasValue()) return this.numValue();
				return def;
			}

			// color extensions
				// augment the current color value with the opacity
				svg.Property.prototype.addOpacity = function(opacityProp) {
					var newValue = this.value;
					if (opacityProp.value != null && opacityProp.value != '' && typeof(this.value)=='string') { // can only add opacity to colors, not patterns
						var color = new RGBColor(this.value);
						if (color.ok) {
							newValue = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + opacityProp.numValue() + ')';
						}
					}
					return new svg.Property(this.name, newValue);
				}

			// definition extensions
				// get the definition from the definitions table
				svg.Property.prototype.getDefinition = function() {
					var name = this.value.match(/#([^\)'"]+)/);
					if (name) { name = name[1]; }
					if (!name) { name = this.value; }
					return svg.Definitions[name];
				}

				svg.Property.prototype.isUrlDefinition = function() {
					return this.value.indexOf('url(') == 0
				}

				svg.Property.prototype.getFillStyleDefinition = function(e, opacityProp) {
					var def = this.getDefinition();

					// gradient
					if (def != null && def.createGradient) {
						return def.createGradient(svg.ctx, e, opacityProp);
					}

					// pattern
					if (def != null && def.createPattern) {
						if (def.getHrefAttribute().hasValue()) {
							var pt = def.attribute('patternTransform');
							def = def.getHrefAttribute().getDefinition();
							if (pt.hasValue()) { def.attribute('patternTransform', true).value = pt.value; }
						}
						return def.createPattern(svg.ctx, e);
					}

					return null;
				}

			// length extensions
				svg.Property.prototype.getDPI = function(viewPort) {
					return 96.0; // TODO: compute?
				}

				svg.Property.prototype.getEM = function(viewPort) {
					var em = 12;

					var fontSize = new svg.Property('fontSize', svg.Font.Parse(svg.ctx.font).fontSize);
					if (fontSize.hasValue()) em = fontSize.toPixels(viewPort);

					return em;
				}

				svg.Property.prototype.getUnits = function() {
					var s = this.value+'';
					return s.replace(/[0-9\.\-]/g,'');
				}

				// get the length as pixels
				svg.Property.prototype.toPixels = function(viewPort, processPercent) {
					if (!this.hasValue()) return 0;
					var s = this.value+'';
					if (s.match(/em$/)) return this.numValue() * this.getEM(viewPort);
					if (s.match(/ex$/)) return this.numValue() * this.getEM(viewPort) / 2.0;
					if (s.match(/px$/)) return this.numValue();
					if (s.match(/pt$/)) return this.numValue() * this.getDPI(viewPort) * (1.0 / 72.0);
					if (s.match(/pc$/)) return this.numValue() * 15;
					if (s.match(/cm$/)) return this.numValue() * this.getDPI(viewPort) / 2.54;
					if (s.match(/mm$/)) return this.numValue() * this.getDPI(viewPort) / 25.4;
					if (s.match(/in$/)) return this.numValue() * this.getDPI(viewPort);
					if (s.match(/%$/)) return this.numValue() * svg.ViewPort.ComputeSize(viewPort);
					var n = this.numValue();
					if (processPercent && n < 1.0) return n * svg.ViewPort.ComputeSize(viewPort);
					return n;
				}

			// time extensions
				// get the time as milliseconds
				svg.Property.prototype.toMilliseconds = function() {
					if (!this.hasValue()) return 0;
					var s = this.value+'';
					if (s.match(/s$/)) return this.numValue() * 1000;
					if (s.match(/ms$/)) return this.numValue();
					return this.numValue();
				}

			// angle extensions
				// get the angle as radians
				svg.Property.prototype.toRadians = function() {
					if (!this.hasValue()) return 0;
					var s = this.value+'';
					if (s.match(/deg$/)) return this.numValue() * (Math.PI / 180.0);
					if (s.match(/grad$/)) return this.numValue() * (Math.PI / 200.0);
					if (s.match(/rad$/)) return this.numValue();
					return this.numValue() * (Math.PI / 180.0);
				}

			// text extensions
				// get the text baseline
				var textBaselineMapping = {
					'baseline': 'alphabetic',
					'before-edge': 'top',
					'text-before-edge': 'top',
					'middle': 'middle',
					'central': 'middle',
					'after-edge': 'bottom',
					'text-after-edge': 'bottom',
					'ideographic': 'ideographic',
					'alphabetic': 'alphabetic',
					'hanging': 'hanging',
					'mathematical': 'alphabetic'
				};
				svg.Property.prototype.toTextBaseline = function () {
					if (!this.hasValue()) return null;
					return textBaselineMapping[this.value];
				}

		// fonts
		svg.Font = new (function() {
			this.Styles = 'normal|italic|oblique|inherit';
			this.Variants = 'normal|small-caps|inherit';
			this.Weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit';

			this.CreateFont = function(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
				var f = inherit != null ? this.Parse(inherit) : this.CreateFont('', '', '', '', '', svg.ctx.font);
				return {
					fontFamily: fontFamily || f.fontFamily,
					fontSize: fontSize || f.fontSize,
					fontStyle: fontStyle || f.fontStyle,
					fontWeight: fontWeight || f.fontWeight,
					fontVariant: fontVariant || f.fontVariant,
					toString: function () { return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(' ') }
				}
			}

			var that = this;
			this.Parse = function(s) {
				var f = {};
				var d = svg.trim(svg.compressSpaces(s || '')).split(' ');
				var set = { fontSize: false, fontStyle: false, fontWeight: false, fontVariant: false }
				var ff = '';
				for (var i=0; i<d.length; i++) {
					if (!set.fontStyle && that.Styles.indexOf(d[i]) != -1) { if (d[i] != 'inherit') f.fontStyle = d[i]; set.fontStyle = true; }
					else if (!set.fontVariant && that.Variants.indexOf(d[i]) != -1) { if (d[i] != 'inherit') f.fontVariant = d[i]; set.fontStyle = set.fontVariant = true;	}
					else if (!set.fontWeight && that.Weights.indexOf(d[i]) != -1) {	if (d[i] != 'inherit') f.fontWeight = d[i]; set.fontStyle = set.fontVariant = set.fontWeight = true; }
					else if (!set.fontSize) { if (d[i] != 'inherit') f.fontSize = d[i].split('/')[0]; set.fontStyle = set.fontVariant = set.fontWeight = set.fontSize = true; }
					else { if (d[i] != 'inherit') ff += d[i]; }
				} if (ff != '') f.fontFamily = ff;
				return f;
			}
		});

		// points and paths
		svg.ToNumberArray = function(s) {
			var a = svg.trim(svg.compressSpaces((s || '').replace(/,/g, ' '))).split(' ');
			for (var i=0; i<a.length; i++) {
				a[i] = parseFloat(a[i]);
			}
			return a;
		}
		svg.Point = function(x, y) {
			this.x = x;
			this.y = y;
		}
			svg.Point.prototype.angleTo = function(p) {
				return Math.atan2(p.y - this.y, p.x - this.x);
			}

			svg.Point.prototype.applyTransform = function(v) {
				var xp = this.x * v[0] + this.y * v[2] + v[4];
				var yp = this.x * v[1] + this.y * v[3] + v[5];
				this.x = xp;
				this.y = yp;
			}

		svg.CreatePoint = function(s) {
			var a = svg.ToNumberArray(s);
			return new svg.Point(a[0], a[1]);
		}
		svg.CreatePath = function(s) {
			var a = svg.ToNumberArray(s);
			var path = [];
			for (var i=0; i<a.length; i+=2) {
				path.push(new svg.Point(a[i], a[i+1]));
			}
			return path;
		}

		// bounding box
		svg.BoundingBox = function(x1, y1, x2, y2) { // pass in initial points if you want
			this.x1 = Number.NaN;
			this.y1 = Number.NaN;
			this.x2 = Number.NaN;
			this.y2 = Number.NaN;

			this.x = function() { return this.x1; }
			this.y = function() { return this.y1; }
			this.width = function() { return this.x2 - this.x1; }
			this.height = function() { return this.y2 - this.y1; }

			this.addPoint = function(x, y) {
				if (x != null) {
					if (isNaN(this.x1) || isNaN(this.x2)) {
						this.x1 = x;
						this.x2 = x;
					}
					if (x < this.x1) this.x1 = x;
					if (x > this.x2) this.x2 = x;
				}

				if (y != null) {
					if (isNaN(this.y1) || isNaN(this.y2)) {
						this.y1 = y;
						this.y2 = y;
					}
					if (y < this.y1) this.y1 = y;
					if (y > this.y2) this.y2 = y;
				}
			}
			this.addX = function(x) { this.addPoint(x, null); }
			this.addY = function(y) { this.addPoint(null, y); }

			this.addBoundingBox = function(bb) {
				this.addPoint(bb.x1, bb.y1);
				this.addPoint(bb.x2, bb.y2);
			}

			this.addQuadraticCurve = function(p0x, p0y, p1x, p1y, p2x, p2y) {
				var cp1x = p0x + 2/3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)
				var cp1y = p0y + 2/3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)
				var cp2x = cp1x + 1/3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)
				var cp2y = cp1y + 1/3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)
				this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y,	cp2y, p2x, p2y);
			}

			this.addBezierCurve = function(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
				// from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
				var p0 = [p0x, p0y], p1 = [p1x, p1y], p2 = [p2x, p2y], p3 = [p3x, p3y];
				this.addPoint(p0[0], p0[1]);
				this.addPoint(p3[0], p3[1]);

				for (i=0; i<=1; i++) {
					var f = function(t) {
						return Math.pow(1-t, 3) * p0[i]
						+ 3 * Math.pow(1-t, 2) * t * p1[i]
						+ 3 * (1-t) * Math.pow(t, 2) * p2[i]
						+ Math.pow(t, 3) * p3[i];
					}

					var b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
					var a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
					var c = 3 * p1[i] - 3 * p0[i];

					if (a == 0) {
						if (b == 0) continue;
						var t = -c / b;
						if (0 < t && t < 1) {
							if (i == 0) this.addX(f(t));
							if (i == 1) this.addY(f(t));
						}
						continue;
					}

					var b2ac = Math.pow(b, 2) - 4 * c * a;
					if (b2ac < 0) continue;
					var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
					if (0 < t1 && t1 < 1) {
						if (i == 0) this.addX(f(t1));
						if (i == 1) this.addY(f(t1));
					}
					var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
					if (0 < t2 && t2 < 1) {
						if (i == 0) this.addX(f(t2));
						if (i == 1) this.addY(f(t2));
					}
				}
			}

			this.isPointInBox = function(x, y) {
				return (this.x1 <= x && x <= this.x2 && this.y1 <= y && y <= this.y2);
			}

			this.addPoint(x1, y1);
			this.addPoint(x2, y2);
		}

		// transforms
		svg.Transform = function(v) {
			var that = this;
			this.Type = {}

			// translate
			this.Type.translate = function(s) {
				this.p = svg.CreatePoint(s);
				this.apply = function(ctx) {
					ctx.translate(this.p.x || 0.0, this.p.y || 0.0);
				}
				this.unapply = function(ctx) {
					ctx.translate(-1.0 * this.p.x || 0.0, -1.0 * this.p.y || 0.0);
				}
				this.applyToPoint = function(p) {
					p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
				}
			}

			// rotate
			this.Type.rotate = function(s) {
				var a = svg.ToNumberArray(s);
				this.angle = new svg.Property('angle', a[0]);
				this.cx = a[1] || 0;
				this.cy = a[2] || 0;
				this.apply = function(ctx) {
					ctx.translate(this.cx, this.cy);
					ctx.rotate(this.angle.toRadians());
					ctx.translate(-this.cx, -this.cy);
				}
				this.unapply = function(ctx) {
					ctx.translate(this.cx, this.cy);
					ctx.rotate(-1.0 * this.angle.toRadians());
					ctx.translate(-this.cx, -this.cy);
				}
				this.applyToPoint = function(p) {
					var a = this.angle.toRadians();
					p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
					p.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]);
					p.applyTransform([1, 0, 0, 1, -this.p.x || 0.0, -this.p.y || 0.0]);
				}
			}

			this.Type.scale = function(s) {
				this.p = svg.CreatePoint(s);
				this.apply = function(ctx) {
					ctx.scale(this.p.x || 1.0, this.p.y || this.p.x || 1.0);
				}
				this.unapply = function(ctx) {
					ctx.scale(1.0 / this.p.x || 1.0, 1.0 / this.p.y || this.p.x || 1.0);
				}
				this.applyToPoint = function(p) {
					p.applyTransform([this.p.x || 0.0, 0, 0, this.p.y || 0.0, 0, 0]);
				}
			}

			this.Type.matrix = function(s) {
				this.m = svg.ToNumberArray(s);
				this.apply = function(ctx) {
					ctx.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
				}
				this.unapply = function(ctx) {
					var a = this.m[0];
					var b = this.m[2];
					var c = this.m[4];
					var d = this.m[1];
					var e = this.m[3];
					var f = this.m[5];
					var g = 0.0;
					var h = 0.0;
					var i = 1.0;
					var det = 1 / (a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g));
					ctx.transform(
						det*(e*i-f*h),
						det*(f*g-d*i),
						det*(c*h-b*i),
						det*(a*i-c*g),
						det*(b*f-c*e),
						det*(c*d-a*f)
					);
				}
				this.applyToPoint = function(p) {
					p.applyTransform(this.m);
				}
			}

			this.Type.SkewBase = function(s) {
				this.base = that.Type.matrix;
				this.base(s);
				this.angle = new svg.Property('angle', s);
			}
			this.Type.SkewBase.prototype = new this.Type.matrix;

			this.Type.skewX = function(s) {
				this.base = that.Type.SkewBase;
				this.base(s);
				this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0];
			}
			this.Type.skewX.prototype = new this.Type.SkewBase;

			this.Type.skewY = function(s) {
				this.base = that.Type.SkewBase;
				this.base(s);
				this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0];
			}
			this.Type.skewY.prototype = new this.Type.SkewBase;

			this.transforms = [];

			this.apply = function(ctx) {
				for (var i=0; i<this.transforms.length; i++) {
					this.transforms[i].apply(ctx);
				}
			}

			this.unapply = function(ctx) {
				for (var i=this.transforms.length-1; i>=0; i--) {
					this.transforms[i].unapply(ctx);
				}
			}

			this.applyToPoint = function(p) {
				for (var i=0; i<this.transforms.length; i++) {
					this.transforms[i].applyToPoint(p);
				}
			}

			var data = svg.trim(svg.compressSpaces(v)).replace(/\)([a-zA-Z])/g, ') $1').replace(/\)(\s?,\s?)/g,') ').split(/\s(?=[a-z])/);
			for (var i=0; i<data.length; i++) {
				var type = svg.trim(data[i].split('(')[0]);
				var s = data[i].split('(')[1].replace(')','');
				var transform = new this.Type[type](s);
				transform.type = type;
				this.transforms.push(transform);
			}
		}

		// aspect ratio
		svg.AspectRatio = function(ctx, aspectRatio, width, desiredWidth, height, desiredHeight, minX, minY, refX, refY) {
			// aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
			aspectRatio = svg.compressSpaces(aspectRatio);
			aspectRatio = aspectRatio.replace(/^defer\s/,''); // ignore defer
			var align = aspectRatio.split(' ')[0] || 'xMidYMid';
			var meetOrSlice = aspectRatio.split(' ')[1] || 'meet';

			// calculate scale
			var scaleX = width / desiredWidth;
			var scaleY = height / desiredHeight;
			var scaleMin = Math.min(scaleX, scaleY);
			var scaleMax = Math.max(scaleX, scaleY);
			if (meetOrSlice == 'meet') { desiredWidth *= scaleMin; desiredHeight *= scaleMin; }
			if (meetOrSlice == 'slice') { desiredWidth *= scaleMax; desiredHeight *= scaleMax; }

			refX = new svg.Property('refX', refX);
			refY = new svg.Property('refY', refY);
			if (refX.hasValue() && refY.hasValue()) {
				ctx.translate(-scaleMin * refX.toPixels('x'), -scaleMin * refY.toPixels('y'));
			}
			else {
				// align
				if (align.match(/^xMid/) && ((meetOrSlice == 'meet' && scaleMin == scaleY) || (meetOrSlice == 'slice' && scaleMax == scaleY))) ctx.translate(width / 2.0 - desiredWidth / 2.0, 0);
				if (align.match(/YMid$/) && ((meetOrSlice == 'meet' && scaleMin == scaleX) || (meetOrSlice == 'slice' && scaleMax == scaleX))) ctx.translate(0, height / 2.0 - desiredHeight / 2.0);
				if (align.match(/^xMax/) && ((meetOrSlice == 'meet' && scaleMin == scaleY) || (meetOrSlice == 'slice' && scaleMax == scaleY))) ctx.translate(width - desiredWidth, 0);
				if (align.match(/YMax$/) && ((meetOrSlice == 'meet' && scaleMin == scaleX) || (meetOrSlice == 'slice' && scaleMax == scaleX))) ctx.translate(0, height - desiredHeight);
			}

			// scale
			if (align == 'none') ctx.scale(scaleX, scaleY);
			else if (meetOrSlice == 'meet') ctx.scale(scaleMin, scaleMin);
			else if (meetOrSlice == 'slice') ctx.scale(scaleMax, scaleMax);

			// translate
			ctx.translate(minX == null ? 0 : -minX, minY == null ? 0 : -minY);
		}

		// elements
		svg.Element = {}

		svg.EmptyProperty = new svg.Property('EMPTY', '');

		svg.Element.ElementBase = function(node) {
			this.attributes = {};
			this.styles = {};
			this.stylesSpecificity = {};
			this.children = [];

			// get or create attribute
			this.attribute = function(name, createIfNotExists) {
				var a = this.attributes[name];
				if (a != null) return a;

				if (createIfNotExists == true) { a = new svg.Property(name, ''); this.attributes[name] = a; }
				return a || svg.EmptyProperty;
			}

			this.getHrefAttribute = function() {
				for (var a in this.attributes) {
					if (a.match(/:href$/)) {
						return this.attributes[a];
					}
				}
				return svg.EmptyProperty;
			}

			// get or create style, crawls up node tree
			this.style = function(name, createIfNotExists, skipAncestors) {
				var s = this.styles[name];
				if (s != null) return s;

				var a = this.attribute(name);
				if (a != null && a.hasValue()) {
					this.styles[name] = a; // move up to me to cache
					return a;
				}

				if (skipAncestors != true) {
					var p = this.parent;
					if (p != null) {
						var ps = p.style(name);
						if (ps != null && ps.hasValue()) {
							return ps;
						}
					}
				}

				if (createIfNotExists == true) { s = new svg.Property(name, ''); this.styles[name] = s; }
				return s || svg.EmptyProperty;
			}

			// base render
			this.render = function(ctx) {
				// don't render display=none
				if (this.style('display').value == 'none') return;

				// don't render visibility=hidden
				if (this.style('visibility').value == 'hidden') return;

				ctx.save();
				if (this.attribute('mask').hasValue()) { // mask
					var mask = this.attribute('mask').getDefinition();
					if (mask != null) mask.apply(ctx, this);
				}
				else if (this.style('filter').hasValue()) { // filter
					var filter = this.style('filter').getDefinition();
					if (filter != null) filter.apply(ctx, this);
				}
				else {
					this.setContext(ctx);
					this.renderChildren(ctx);
					this.clearContext(ctx);
				}
				ctx.restore();
			}

			// base set context
			this.setContext = function(ctx) {
				// OVERRIDE ME!
			}

			// base clear context
			this.clearContext = function(ctx) {
				// OVERRIDE ME!
			}

			// base render children
			this.renderChildren = function(ctx) {
				for (var i=0; i<this.children.length; i++) {
					this.children[i].render(ctx);
				}
			}

			this.addChild = function(childNode, create) {
				var child = childNode;
				if (create) child = svg.CreateElement(childNode);
				child.parent = this;
				if (child.type != 'title') { this.children.push(child);	}
			}

			this.addStylesFromStyleDefinition = function () {
				// add styles
				for (var selector in svg.Styles) {
					if (matchesSelector(node, selector)) {
						var styles = svg.Styles[selector];
						var specificity = svg.StylesSpecificity[selector];
						if (styles != null) {
							for (var name in styles) {
								var existingSpecificity = this.stylesSpecificity[name];
								if (typeof(existingSpecificity) == 'undefined') {
									existingSpecificity = '000';
								}
								if (specificity > existingSpecificity) {
									this.styles[name] = styles[name];
									this.stylesSpecificity[name] = specificity;
								}
							}
						}
					}
				}
			};

			if (node != null && node.nodeType == 1) { //ELEMENT_NODE
				// add attributes
				for (var i=0; i<node.attributes.length; i++) {
					var attribute = node.attributes[i];
					this.attributes[attribute.nodeName] = new svg.Property(attribute.nodeName, attribute.value);
				}

				this.addStylesFromStyleDefinition();

				// add inline styles
				if (this.attribute('style').hasValue()) {
					var styles = this.attribute('style').value.split(';');
					for (var i=0; i<styles.length; i++) {
						if (svg.trim(styles[i]) != '') {
							var style = styles[i].split(':');
							var name = svg.trim(style[0]);
							var value = svg.trim(style[1]);
							this.styles[name] = new svg.Property(name, value);
						}
					}
				}

				// add id
				if (this.attribute('id').hasValue()) {
					if (svg.Definitions[this.attribute('id').value] == null) {
						svg.Definitions[this.attribute('id').value] = this;
					}
				}

				// add children
				for (var i=0; i<node.childNodes.length; i++) {
					var childNode = node.childNodes[i];
					if (childNode.nodeType == 1) this.addChild(childNode, true); //ELEMENT_NODE
					if (this.captureTextNodes && (childNode.nodeType == 3 || childNode.nodeType == 4)) {
						var text = childNode.value || childNode.text || childNode.textContent || '';
						if (svg.compressSpaces(text) != '') {
							this.addChild(new svg.Element.tspan(childNode), false); // TEXT_NODE
						}
					}
				}
			}
		}

		svg.Element.RenderedElementBase = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.setContext = function(ctx) {
				// fill
				if (this.style('fill').isUrlDefinition()) {
					var fs = this.style('fill').getFillStyleDefinition(this, this.style('fill-opacity'));
					if (fs != null) ctx.fillStyle = fs;
				}
				else if (this.style('fill').hasValue()) {
					var fillStyle = this.style('fill');
					if (fillStyle.value == 'currentColor') fillStyle.value = this.style('color').value;
					if (fillStyle.value != 'inherit') ctx.fillStyle = (fillStyle.value == 'none' ? 'rgba(0,0,0,0)' : fillStyle.value);
				}
				if (this.style('fill-opacity').hasValue()) {
					var fillStyle = new svg.Property('fill', ctx.fillStyle);
					fillStyle = fillStyle.addOpacity(this.style('fill-opacity'));
					ctx.fillStyle = fillStyle.value;
				}

				// stroke
				if (this.style('stroke').isUrlDefinition()) {
					var fs = this.style('stroke').getFillStyleDefinition(this, this.style('stroke-opacity'));
					if (fs != null) ctx.strokeStyle = fs;
				}
				else if (this.style('stroke').hasValue()) {
					var strokeStyle = this.style('stroke');
					if (strokeStyle.value == 'currentColor') strokeStyle.value = this.style('color').value;
					if (strokeStyle.value != 'inherit') ctx.strokeStyle = (strokeStyle.value == 'none' ? 'rgba(0,0,0,0)' : strokeStyle.value);
				}
				if (this.style('stroke-opacity').hasValue()) {
					var strokeStyle = new svg.Property('stroke', ctx.strokeStyle);
					strokeStyle = strokeStyle.addOpacity(this.style('stroke-opacity'));
					ctx.strokeStyle = strokeStyle.value;
				}
				if (this.style('stroke-width').hasValue()) {
					var newLineWidth = this.style('stroke-width').toPixels();
					ctx.lineWidth = newLineWidth == 0 ? 0.001 : newLineWidth; // browsers don't respect 0
			    }
				if (this.style('stroke-linecap').hasValue()) ctx.lineCap = this.style('stroke-linecap').value;
				if (this.style('stroke-linejoin').hasValue()) ctx.lineJoin = this.style('stroke-linejoin').value;
				if (this.style('stroke-miterlimit').hasValue()) ctx.miterLimit = this.style('stroke-miterlimit').value;
				if (this.style('stroke-dasharray').hasValue() && this.style('stroke-dasharray').value != 'none') {
					var gaps = svg.ToNumberArray(this.style('stroke-dasharray').value);
					if (typeof(ctx.setLineDash) != 'undefined') { ctx.setLineDash(gaps); }
					else if (typeof(ctx.webkitLineDash) != 'undefined') { ctx.webkitLineDash = gaps; }
					else if (typeof(ctx.mozDash) != 'undefined' && !(gaps.length==1 && gaps[0]==0)) { ctx.mozDash = gaps; }

					var offset = this.style('stroke-dashoffset').numValueOrDefault(1);
					if (typeof(ctx.lineDashOffset) != 'undefined') { ctx.lineDashOffset = offset; }
					else if (typeof(ctx.webkitLineDashOffset) != 'undefined') { ctx.webkitLineDashOffset = offset; }
					else if (typeof(ctx.mozDashOffset) != 'undefined') { ctx.mozDashOffset = offset; }
				}

				// font
				if (typeof(ctx.font) != 'undefined') {
					ctx.font = svg.Font.CreateFont(
						this.style('font-style').value,
						this.style('font-variant').value,
						this.style('font-weight').value,
						this.style('font-size').hasValue() ? this.style('font-size').toPixels() + 'px' : '',
						this.style('font-family').value).toString();
				}

				// transform
				if (this.attribute('transform').hasValue()) {
					var transform = new svg.Transform(this.attribute('transform').value);
					transform.apply(ctx);
				}

				// clip
				if (this.attribute('clip-path', false, true).hasValue()) {
					var clip = this.attribute('clip-path', false, true).getDefinition();
					if (clip != null) clip.apply(ctx);
				}

				// opacity
				if (this.style('opacity').hasValue()) {
					ctx.globalAlpha = this.style('opacity').numValue();
				}
			}
		}
		svg.Element.RenderedElementBase.prototype = new svg.Element.ElementBase;

		svg.Element.PathElementBase = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);

			this.path = function(ctx) {
				if (ctx != null) ctx.beginPath();
				return new svg.BoundingBox();
			}

			this.renderChildren = function(ctx) {
				this.path(ctx);
				svg.Mouse.checkPath(this, ctx);
				if (ctx.fillStyle != '') {
					if (this.style('fill-rule').valueOrDefault('inherit') != 'inherit') { ctx.fill(this.style('fill-rule').value); }
					else { ctx.fill(); }
				}
				if (ctx.strokeStyle != '') ctx.stroke();

				var markers = this.getMarkers();
				if (markers != null) {
					if (this.style('marker-start').isUrlDefinition()) {
						var marker = this.style('marker-start').getDefinition();
						marker.render(ctx, markers[0][0], markers[0][1]);
					}
					if (this.style('marker-mid').isUrlDefinition()) {
						var marker = this.style('marker-mid').getDefinition();
						for (var i=1;i<markers.length-1;i++) {
							marker.render(ctx, markers[i][0], markers[i][1]);
						}
					}
					if (this.style('marker-end').isUrlDefinition()) {
						var marker = this.style('marker-end').getDefinition();
						marker.render(ctx, markers[markers.length-1][0], markers[markers.length-1][1]);
					}
				}
			}

			this.getBoundingBox = function() {
				return this.path();
			}

			this.getMarkers = function() {
				return null;
			}
		}
		svg.Element.PathElementBase.prototype = new svg.Element.RenderedElementBase;

		// svg element
		svg.Element.svg = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);

			this.baseClearContext = this.clearContext;
			this.clearContext = function(ctx) {
				this.baseClearContext(ctx);
				svg.ViewPort.RemoveCurrent();
			}

			this.baseSetContext = this.setContext;
			this.setContext = function(ctx) {
				// initial values and defaults
				ctx.strokeStyle = 'rgba(0,0,0,0)';
				ctx.lineCap = 'butt';
				ctx.lineJoin = 'miter';
				ctx.miterLimit = 4;
				if (typeof(ctx.font) != 'undefined' && typeof(window.getComputedStyle) != 'undefined') {
					ctx.font = window.getComputedStyle(ctx.canvas).getPropertyValue('font');
				}

				this.baseSetContext(ctx);

				// create new view port
				if (!this.attribute('x').hasValue()) this.attribute('x', true).value = 0;
				if (!this.attribute('y').hasValue()) this.attribute('y', true).value = 0;
				ctx.translate(this.attribute('x').toPixels('x'), this.attribute('y').toPixels('y'));

				var width = svg.ViewPort.width();
				var height = svg.ViewPort.height();

				if (!this.attribute('width').hasValue()) this.attribute('width', true).value = '100%';
				if (!this.attribute('height').hasValue()) this.attribute('height', true).value = '100%';
				if (typeof(this.root) == 'undefined') {
					width = this.attribute('width').toPixels('x');
					height = this.attribute('height').toPixels('y');

					var x = 0;
					var y = 0;
					if (this.attribute('refX').hasValue() && this.attribute('refY').hasValue()) {
						x = -this.attribute('refX').toPixels('x');
						y = -this.attribute('refY').toPixels('y');
					}

					if (this.attribute('overflow').valueOrDefault('hidden') != 'visible') {
						ctx.beginPath();
						ctx.moveTo(x, y);
						ctx.lineTo(width, y);
						ctx.lineTo(width, height);
						ctx.lineTo(x, height);
						ctx.closePath();
						ctx.clip();
					}
				}
				svg.ViewPort.SetCurrent(width, height);

				// viewbox
				if (this.attribute('viewBox').hasValue()) {
					var viewBox = svg.ToNumberArray(this.attribute('viewBox').value);
					var minX = viewBox[0];
					var minY = viewBox[1];
					width = viewBox[2];
					height = viewBox[3];

					svg.AspectRatio(ctx,
									this.attribute('preserveAspectRatio').value,
									svg.ViewPort.width(),
									width,
									svg.ViewPort.height(),
									height,
									minX,
									minY,
									this.attribute('refX').value,
									this.attribute('refY').value);

					svg.ViewPort.RemoveCurrent();
					svg.ViewPort.SetCurrent(viewBox[2], viewBox[3]);
				}
			}
		}
		svg.Element.svg.prototype = new svg.Element.RenderedElementBase;

		// rect element
		svg.Element.rect = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);

			this.path = function(ctx) {
				var x = this.attribute('x').toPixels('x');
				var y = this.attribute('y').toPixels('y');
				var width = this.attribute('width').toPixels('x');
				var height = this.attribute('height').toPixels('y');
				var rx = this.attribute('rx').toPixels('x');
				var ry = this.attribute('ry').toPixels('y');
				if (this.attribute('rx').hasValue() && !this.attribute('ry').hasValue()) ry = rx;
				if (this.attribute('ry').hasValue() && !this.attribute('rx').hasValue()) rx = ry;
				rx = Math.min(rx, width / 2.0);
				ry = Math.min(ry, height / 2.0);
				if (ctx != null) {
					ctx.beginPath();
					ctx.moveTo(x + rx, y);
					ctx.lineTo(x + width - rx, y);
					ctx.quadraticCurveTo(x + width, y, x + width, y + ry)
					ctx.lineTo(x + width, y + height - ry);
					ctx.quadraticCurveTo(x + width, y + height, x + width - rx, y + height)
					ctx.lineTo(x + rx, y + height);
					ctx.quadraticCurveTo(x, y + height, x, y + height - ry)
					ctx.lineTo(x, y + ry);
					ctx.quadraticCurveTo(x, y, x + rx, y)
					ctx.closePath();
				}

				return new svg.BoundingBox(x, y, x + width, y + height);
			}
		}
		svg.Element.rect.prototype = new svg.Element.PathElementBase;

		// circle element
		svg.Element.circle = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);

			this.path = function(ctx) {
				var cx = this.attribute('cx').toPixels('x');
				var cy = this.attribute('cy').toPixels('y');
				var r = this.attribute('r').toPixels();

				if (ctx != null) {
					ctx.beginPath();
					ctx.arc(cx, cy, r, 0, Math.PI * 2, true);
					ctx.closePath();
				}

				return new svg.BoundingBox(cx - r, cy - r, cx + r, cy + r);
			}
		}
		svg.Element.circle.prototype = new svg.Element.PathElementBase;

		// ellipse element
		svg.Element.ellipse = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);

			this.path = function(ctx) {
				var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
				var rx = this.attribute('rx').toPixels('x');
				var ry = this.attribute('ry').toPixels('y');
				var cx = this.attribute('cx').toPixels('x');
				var cy = this.attribute('cy').toPixels('y');

				if (ctx != null) {
					ctx.beginPath();
					ctx.moveTo(cx, cy - ry);
					ctx.bezierCurveTo(cx + (KAPPA * rx), cy - ry,  cx + rx, cy - (KAPPA * ry), cx + rx, cy);
					ctx.bezierCurveTo(cx + rx, cy + (KAPPA * ry), cx + (KAPPA * rx), cy + ry, cx, cy + ry);
					ctx.bezierCurveTo(cx - (KAPPA * rx), cy + ry, cx - rx, cy + (KAPPA * ry), cx - rx, cy);
					ctx.bezierCurveTo(cx - rx, cy - (KAPPA * ry), cx - (KAPPA * rx), cy - ry, cx, cy - ry);
					ctx.closePath();
				}

				return new svg.BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
			}
		}
		svg.Element.ellipse.prototype = new svg.Element.PathElementBase;

		// line element
		svg.Element.line = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);

			this.getPoints = function() {
				return [
					new svg.Point(this.attribute('x1').toPixels('x'), this.attribute('y1').toPixels('y')),
					new svg.Point(this.attribute('x2').toPixels('x'), this.attribute('y2').toPixels('y'))];
			}

			this.path = function(ctx) {
				var points = this.getPoints();

				if (ctx != null) {
					ctx.beginPath();
					ctx.moveTo(points[0].x, points[0].y);
					ctx.lineTo(points[1].x, points[1].y);
				}

				return new svg.BoundingBox(points[0].x, points[0].y, points[1].x, points[1].y);
			}

			this.getMarkers = function() {
				var points = this.getPoints();
				var a = points[0].angleTo(points[1]);
				return [[points[0], a], [points[1], a]];
			}
		}
		svg.Element.line.prototype = new svg.Element.PathElementBase;

		// polyline element
		svg.Element.polyline = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);

			this.points = svg.CreatePath(this.attribute('points').value);
			this.path = function(ctx) {
				var bb = new svg.BoundingBox(this.points[0].x, this.points[0].y);
				if (ctx != null) {
					ctx.beginPath();
					ctx.moveTo(this.points[0].x, this.points[0].y);
				}
				for (var i=1; i<this.points.length; i++) {
					bb.addPoint(this.points[i].x, this.points[i].y);
					if (ctx != null) ctx.lineTo(this.points[i].x, this.points[i].y);
				}
				return bb;
			}

			this.getMarkers = function() {
				var markers = [];
				for (var i=0; i<this.points.length - 1; i++) {
					markers.push([this.points[i], this.points[i].angleTo(this.points[i+1])]);
				}
				markers.push([this.points[this.points.length-1], markers[markers.length-1][1]]);
				return markers;
			}
		}
		svg.Element.polyline.prototype = new svg.Element.PathElementBase;

		// polygon element
		svg.Element.polygon = function(node) {
			this.base = svg.Element.polyline;
			this.base(node);

			this.basePath = this.path;
			this.path = function(ctx) {
				var bb = this.basePath(ctx);
				if (ctx != null) {
					ctx.lineTo(this.points[0].x, this.points[0].y);
					ctx.closePath();
				}
				return bb;
			}
		}
		svg.Element.polygon.prototype = new svg.Element.polyline;

		// path element
		svg.Element.path = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);

			var d = this.attribute('d').value;
			// TODO: convert to real lexer based on http://www.w3.org/TR/SVG11/paths.html#PathDataBNF
			d = d.replace(/,/gm,' '); // get rid of all commas
			// As the end of a match can also be the start of the next match, we need to run this replace twice.
			for(var i=0; i<2; i++)
				d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,'$1 $2'); // suffix commands with spaces
			d = d.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,'$1 $2'); // prefix commands with spaces
			d = d.replace(/([0-9])([+\-])/gm,'$1 $2'); // separate digits on +- signs
			// Again, we need to run this twice to find all occurances
			for(var i=0; i<2; i++)
				d = d.replace(/(\.[0-9]*)(\.)/gm,'$1 $2'); // separate digits when they start with a comma
			d = d.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,'$1 $3 $4 '); // shorthand elliptical arc path syntax
			d = svg.compressSpaces(d); // compress multiple spaces
			d = svg.trim(d);
			this.PathParser = new (function(d) {
				this.tokens = d.split(' ');

				this.reset = function() {
					this.i = -1;
					this.command = '';
					this.previousCommand = '';
					this.start = new svg.Point(0, 0);
					this.control = new svg.Point(0, 0);
					this.current = new svg.Point(0, 0);
					this.points = [];
					this.angles = [];
				}

				this.isEnd = function() {
					return this.i >= this.tokens.length - 1;
				}

				this.isCommandOrEnd = function() {
					if (this.isEnd()) return true;
					return this.tokens[this.i + 1].match(/^[A-Za-z]$/) != null;
				}

				this.isRelativeCommand = function() {
					switch(this.command)
					{
						case 'm':
						case 'l':
						case 'h':
						case 'v':
						case 'c':
						case 's':
						case 'q':
						case 't':
						case 'a':
						case 'z':
							return true;
							break;
					}
					return false;
				}

				this.getToken = function() {
					this.i++;
					return this.tokens[this.i];
				}

				this.getScalar = function() {
					return parseFloat(this.getToken());
				}

				this.nextCommand = function() {
					this.previousCommand = this.command;
					this.command = this.getToken();
				}

				this.getPoint = function() {
					var p = new svg.Point(this.getScalar(), this.getScalar());
					return this.makeAbsolute(p);
				}

				this.getAsControlPoint = function() {
					var p = this.getPoint();
					this.control = p;
					return p;
				}

				this.getAsCurrentPoint = function() {
					var p = this.getPoint();
					this.current = p;
					return p;
				}

				this.getReflectedControlPoint = function() {
					if (this.previousCommand.toLowerCase() != 'c' &&
					    this.previousCommand.toLowerCase() != 's' &&
						this.previousCommand.toLowerCase() != 'q' &&
						this.previousCommand.toLowerCase() != 't' ){
						return this.current;
					}

					// reflect point
					var p = new svg.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
					return p;
				}

				this.makeAbsolute = function(p) {
					if (this.isRelativeCommand()) {
						p.x += this.current.x;
						p.y += this.current.y;
					}
					return p;
				}

				this.addMarker = function(p, from, priorTo) {
					// if the last angle isn't filled in because we didn't have this point yet ...
					if (priorTo != null && this.angles.length > 0 && this.angles[this.angles.length-1] == null) {
						this.angles[this.angles.length-1] = this.points[this.points.length-1].angleTo(priorTo);
					}
					this.addMarkerAngle(p, from == null ? null : from.angleTo(p));
				}

				this.addMarkerAngle = function(p, a) {
					this.points.push(p);
					this.angles.push(a);
				}

				this.getMarkerPoints = function() { return this.points; }
				this.getMarkerAngles = function() {
					for (var i=0; i<this.angles.length; i++) {
						if (this.angles[i] == null) {
							for (var j=i+1; j<this.angles.length; j++) {
								if (this.angles[j] != null) {
									this.angles[i] = this.angles[j];
									break;
								}
							}
						}
					}
					return this.angles;
				}
			})(d);

			this.path = function(ctx) {
				var pp = this.PathParser;
				pp.reset();

				var bb = new svg.BoundingBox();
				if (ctx != null) ctx.beginPath();
				while (!pp.isEnd()) {
					pp.nextCommand();
					switch (pp.command) {
					case 'M':
					case 'm':
						var p = pp.getAsCurrentPoint();
						pp.addMarker(p);
						bb.addPoint(p.x, p.y);
						if (ctx != null) ctx.moveTo(p.x, p.y);
						pp.start = pp.current;
						while (!pp.isCommandOrEnd()) {
							var p = pp.getAsCurrentPoint();
							pp.addMarker(p, pp.start);
							bb.addPoint(p.x, p.y);
							if (ctx != null) ctx.lineTo(p.x, p.y);
						}
						break;
					case 'L':
					case 'l':
						while (!pp.isCommandOrEnd()) {
							var c = pp.current;
							var p = pp.getAsCurrentPoint();
							pp.addMarker(p, c);
							bb.addPoint(p.x, p.y);
							if (ctx != null) ctx.lineTo(p.x, p.y);
						}
						break;
					case 'H':
					case 'h':
						while (!pp.isCommandOrEnd()) {
							var newP = new svg.Point((pp.isRelativeCommand() ? pp.current.x : 0) + pp.getScalar(), pp.current.y);
							pp.addMarker(newP, pp.current);
							pp.current = newP;
							bb.addPoint(pp.current.x, pp.current.y);
							if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
						}
						break;
					case 'V':
					case 'v':
						while (!pp.isCommandOrEnd()) {
							var newP = new svg.Point(pp.current.x, (pp.isRelativeCommand() ? pp.current.y : 0) + pp.getScalar());
							pp.addMarker(newP, pp.current);
							pp.current = newP;
							bb.addPoint(pp.current.x, pp.current.y);
							if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
						}
						break;
					case 'C':
					case 'c':
						while (!pp.isCommandOrEnd()) {
							var curr = pp.current;
							var p1 = pp.getPoint();
							var cntrl = pp.getAsControlPoint();
							var cp = pp.getAsCurrentPoint();
							pp.addMarker(cp, cntrl, p1);
							bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
							if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
						}
						break;
					case 'S':
					case 's':
						while (!pp.isCommandOrEnd()) {
							var curr = pp.current;
							var p1 = pp.getReflectedControlPoint();
							var cntrl = pp.getAsControlPoint();
							var cp = pp.getAsCurrentPoint();
							pp.addMarker(cp, cntrl, p1);
							bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
							if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
						}
						break;
					case 'Q':
					case 'q':
						while (!pp.isCommandOrEnd()) {
							var curr = pp.current;
							var cntrl = pp.getAsControlPoint();
							var cp = pp.getAsCurrentPoint();
							pp.addMarker(cp, cntrl, cntrl);
							bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
							if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
						}
						break;
					case 'T':
					case 't':
						while (!pp.isCommandOrEnd()) {
							var curr = pp.current;
							var cntrl = pp.getReflectedControlPoint();
							pp.control = cntrl;
							var cp = pp.getAsCurrentPoint();
							pp.addMarker(cp, cntrl, cntrl);
							bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
							if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
						}
						break;
					case 'A':
					case 'a':
						while (!pp.isCommandOrEnd()) {
						    var curr = pp.current;
							var rx = pp.getScalar();
							var ry = pp.getScalar();
							var xAxisRotation = pp.getScalar() * (Math.PI / 180.0);
							var largeArcFlag = pp.getScalar();
							var sweepFlag = pp.getScalar();
							var cp = pp.getAsCurrentPoint();

							// Conversion from endpoint to center parameterization
							// http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
							// x1', y1'
							var currp = new svg.Point(
								Math.cos(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.sin(xAxisRotation) * (curr.y - cp.y) / 2.0,
								-Math.sin(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.cos(xAxisRotation) * (curr.y - cp.y) / 2.0
							);
							// adjust radii
							var l = Math.pow(currp.x,2)/Math.pow(rx,2)+Math.pow(currp.y,2)/Math.pow(ry,2);
							if (l > 1) {
								rx *= Math.sqrt(l);
								ry *= Math.sqrt(l);
							}
							// cx', cy'
							var s = (largeArcFlag == sweepFlag ? -1 : 1) * Math.sqrt(
								((Math.pow(rx,2)*Math.pow(ry,2))-(Math.pow(rx,2)*Math.pow(currp.y,2))-(Math.pow(ry,2)*Math.pow(currp.x,2))) /
								(Math.pow(rx,2)*Math.pow(currp.y,2)+Math.pow(ry,2)*Math.pow(currp.x,2))
							);
							if (isNaN(s)) s = 0;
							var cpp = new svg.Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
							// cx, cy
							var centp = new svg.Point(
								(curr.x + cp.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y,
								(curr.y + cp.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y
							);
							// vector magnitude
							var m = function(v) { return Math.sqrt(Math.pow(v[0],2) + Math.pow(v[1],2)); }
							// ratio between two vectors
							var r = function(u, v) { return (u[0]*v[0]+u[1]*v[1]) / (m(u)*m(v)) }
							// angle between two vectors
							var a = function(u, v) { return (u[0]*v[1] < u[1]*v[0] ? -1 : 1) * Math.acos(r(u,v)); }
							// initial angle
							var a1 = a([1,0], [(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry]);
							// angle delta
							var u = [(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry];
							var v = [(-currp.x-cpp.x)/rx,(-currp.y-cpp.y)/ry];
							var ad = a(u, v);
							if (r(u,v) <= -1) ad = Math.PI;
							if (r(u,v) >= 1) ad = 0;

							// for markers
							var dir = 1 - sweepFlag ? 1.0 : -1.0;
							var ah = a1 + dir * (ad / 2.0);
							var halfWay = new svg.Point(
								centp.x + rx * Math.cos(ah),
								centp.y + ry * Math.sin(ah)
							);
							pp.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
							pp.addMarkerAngle(cp, ah - dir * Math.PI);

							bb.addPoint(cp.x, cp.y); // TODO: this is too naive, make it better
							if (ctx != null) {
								var r = rx > ry ? rx : ry;
								var sx = rx > ry ? 1 : rx / ry;
								var sy = rx > ry ? ry / rx : 1;

								ctx.translate(centp.x, centp.y);
								ctx.rotate(xAxisRotation);
								ctx.scale(sx, sy);
								ctx.arc(0, 0, r, a1, a1 + ad, 1 - sweepFlag);
								ctx.scale(1/sx, 1/sy);
								ctx.rotate(-xAxisRotation);
								ctx.translate(-centp.x, -centp.y);
							}
						}
						break;
					case 'Z':
					case 'z':
						if (ctx != null) ctx.closePath();
						pp.current = pp.start;
					}
				}

				return bb;
			}

			this.getMarkers = function() {
				var points = this.PathParser.getMarkerPoints();
				var angles = this.PathParser.getMarkerAngles();

				var markers = [];
				for (var i=0; i<points.length; i++) {
					markers.push([points[i], angles[i]]);
				}
				return markers;
			}
		}
		svg.Element.path.prototype = new svg.Element.PathElementBase;

		// pattern element
		svg.Element.pattern = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.createPattern = function(ctx, element) {
				var width = this.attribute('width').toPixels('x', true);
				var height = this.attribute('height').toPixels('y', true);

				// render me using a temporary svg element
				var tempSvg = new svg.Element.svg();
				tempSvg.attributes['viewBox'] = new svg.Property('viewBox', this.attribute('viewBox').value);
				tempSvg.attributes['width'] = new svg.Property('width', width + 'px');
				tempSvg.attributes['height'] = new svg.Property('height', height + 'px');
				tempSvg.attributes['transform'] = new svg.Property('transform', this.attribute('patternTransform').value);
				tempSvg.children = this.children;

				var c = document.createElement('canvas');
				c.width = width;
				c.height = height;
				var cctx = c.getContext('2d');
				if (this.attribute('x').hasValue() && this.attribute('y').hasValue()) {
					cctx.translate(this.attribute('x').toPixels('x', true), this.attribute('y').toPixels('y', true));
				}
				// render 3x3 grid so when we transform there's no white space on edges
				for (var x=-1; x<=1; x++) {
					for (var y=-1; y<=1; y++) {
						cctx.save();
						cctx.translate(x * c.width, y * c.height);
						tempSvg.render(cctx);
						cctx.restore();
					}
				}
				var pattern = ctx.createPattern(c, 'repeat');
				return pattern;
			}
		}
		svg.Element.pattern.prototype = new svg.Element.ElementBase;

		// marker element
		svg.Element.marker = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.baseRender = this.render;
			this.render = function(ctx, point, angle) {
				ctx.translate(point.x, point.y);
				if (this.attribute('orient').valueOrDefault('auto') == 'auto') ctx.rotate(angle);
				if (this.attribute('markerUnits').valueOrDefault('strokeWidth') == 'strokeWidth') ctx.scale(ctx.lineWidth, ctx.lineWidth);
				ctx.save();

				// render me using a temporary svg element
				var tempSvg = new svg.Element.svg();
				tempSvg.attributes['viewBox'] = new svg.Property('viewBox', this.attribute('viewBox').value);
				tempSvg.attributes['refX'] = new svg.Property('refX', this.attribute('refX').value);
				tempSvg.attributes['refY'] = new svg.Property('refY', this.attribute('refY').value);
				tempSvg.attributes['width'] = new svg.Property('width', this.attribute('markerWidth').value);
				tempSvg.attributes['height'] = new svg.Property('height', this.attribute('markerHeight').value);
				tempSvg.attributes['fill'] = new svg.Property('fill', this.attribute('fill').valueOrDefault('black'));
				tempSvg.attributes['stroke'] = new svg.Property('stroke', this.attribute('stroke').valueOrDefault('none'));
				tempSvg.children = this.children;
				tempSvg.render(ctx);

				ctx.restore();
				if (this.attribute('markerUnits').valueOrDefault('strokeWidth') == 'strokeWidth') ctx.scale(1/ctx.lineWidth, 1/ctx.lineWidth);
				if (this.attribute('orient').valueOrDefault('auto') == 'auto') ctx.rotate(-angle);
				ctx.translate(-point.x, -point.y);
			}
		}
		svg.Element.marker.prototype = new svg.Element.ElementBase;

		// definitions element
		svg.Element.defs = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.render = function(ctx) {
				// NOOP
			}
		}
		svg.Element.defs.prototype = new svg.Element.ElementBase;

		// base for gradients
		svg.Element.GradientBase = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.gradientUnits = this.attribute('gradientUnits').valueOrDefault('objectBoundingBox');

			this.stops = [];
			for (var i=0; i<this.children.length; i++) {
				var child = this.children[i];
				if (child.type == 'stop') this.stops.push(child);
			}

			this.getGradient = function() {
				// OVERRIDE ME!
			}

			this.createGradient = function(ctx, element, parentOpacityProp) {
				var stopsContainer = this;
				if (this.getHrefAttribute().hasValue()) {
					stopsContainer = this.getHrefAttribute().getDefinition();
				}

				var addParentOpacity = function (color) {
					if (parentOpacityProp.hasValue()) {
						var p = new svg.Property('color', color);
						return p.addOpacity(parentOpacityProp).value;
					}
					return color;
				};

				var g = this.getGradient(ctx, element);
				if (g == null) return addParentOpacity(stopsContainer.stops[stopsContainer.stops.length - 1].color);
				for (var i=0; i<stopsContainer.stops.length; i++) {
					g.addColorStop(stopsContainer.stops[i].offset, addParentOpacity(stopsContainer.stops[i].color));
				}

				if (this.attribute('gradientTransform').hasValue()) {
					// render as transformed pattern on temporary canvas
					var rootView = svg.ViewPort.viewPorts[0];

					var rect = new svg.Element.rect();
					rect.attributes['x'] = new svg.Property('x', -svg.MAX_VIRTUAL_PIXELS/3.0);
					rect.attributes['y'] = new svg.Property('y', -svg.MAX_VIRTUAL_PIXELS/3.0);
					rect.attributes['width'] = new svg.Property('width', svg.MAX_VIRTUAL_PIXELS);
					rect.attributes['height'] = new svg.Property('height', svg.MAX_VIRTUAL_PIXELS);

					var group = new svg.Element.g();
					group.attributes['transform'] = new svg.Property('transform', this.attribute('gradientTransform').value);
					group.children = [ rect ];

					var tempSvg = new svg.Element.svg();
					tempSvg.attributes['x'] = new svg.Property('x', 0);
					tempSvg.attributes['y'] = new svg.Property('y', 0);
					tempSvg.attributes['width'] = new svg.Property('width', rootView.width);
					tempSvg.attributes['height'] = new svg.Property('height', rootView.height);
					tempSvg.children = [ group ];

					var c = document.createElement('canvas');
					c.width = rootView.width;
					c.height = rootView.height;
					var tempCtx = c.getContext('2d');
					tempCtx.fillStyle = g;
					tempSvg.render(tempCtx);
					return tempCtx.createPattern(c, 'no-repeat');
				}

				return g;
			}
		}
		svg.Element.GradientBase.prototype = new svg.Element.ElementBase;

		// linear gradient element
		svg.Element.linearGradient = function(node) {
			this.base = svg.Element.GradientBase;
			this.base(node);

			this.getGradient = function(ctx, element) {
				var bb = this.gradientUnits == 'objectBoundingBox' ? element.getBoundingBox() : null;

				if (!this.attribute('x1').hasValue()
				 && !this.attribute('y1').hasValue()
				 && !this.attribute('x2').hasValue()
				 && !this.attribute('y2').hasValue()) {
					this.attribute('x1', true).value = 0;
					this.attribute('y1', true).value = 0;
					this.attribute('x2', true).value = 1;
					this.attribute('y2', true).value = 0;
				 }

				var x1 = (this.gradientUnits == 'objectBoundingBox'
					? bb.x() + bb.width() * this.attribute('x1').numValue()
					: this.attribute('x1').toPixels('x'));
				var y1 = (this.gradientUnits == 'objectBoundingBox'
					? bb.y() + bb.height() * this.attribute('y1').numValue()
					: this.attribute('y1').toPixels('y'));
				var x2 = (this.gradientUnits == 'objectBoundingBox'
					? bb.x() + bb.width() * this.attribute('x2').numValue()
					: this.attribute('x2').toPixels('x'));
				var y2 = (this.gradientUnits == 'objectBoundingBox'
					? bb.y() + bb.height() * this.attribute('y2').numValue()
					: this.attribute('y2').toPixels('y'));

				if (x1 == x2 && y1 == y2) return null;
				return ctx.createLinearGradient(x1, y1, x2, y2);
			}
		}
		svg.Element.linearGradient.prototype = new svg.Element.GradientBase;

		// radial gradient element
		svg.Element.radialGradient = function(node) {
			this.base = svg.Element.GradientBase;
			this.base(node);

			this.getGradient = function(ctx, element) {
				var bb = element.getBoundingBox();

				if (!this.attribute('cx').hasValue()) this.attribute('cx', true).value = '50%';
				if (!this.attribute('cy').hasValue()) this.attribute('cy', true).value = '50%';
				if (!this.attribute('r').hasValue()) this.attribute('r', true).value = '50%';

				var cx = (this.gradientUnits == 'objectBoundingBox'
					? bb.x() + bb.width() * this.attribute('cx').numValue()
					: this.attribute('cx').toPixels('x'));
				var cy = (this.gradientUnits == 'objectBoundingBox'
					? bb.y() + bb.height() * this.attribute('cy').numValue()
					: this.attribute('cy').toPixels('y'));

				var fx = cx;
				var fy = cy;
				if (this.attribute('fx').hasValue()) {
					fx = (this.gradientUnits == 'objectBoundingBox'
					? bb.x() + bb.width() * this.attribute('fx').numValue()
					: this.attribute('fx').toPixels('x'));
				}
				if (this.attribute('fy').hasValue()) {
					fy = (this.gradientUnits == 'objectBoundingBox'
					? bb.y() + bb.height() * this.attribute('fy').numValue()
					: this.attribute('fy').toPixels('y'));
				}

				var r = (this.gradientUnits == 'objectBoundingBox'
					? (bb.width() + bb.height()) / 2.0 * this.attribute('r').numValue()
					: this.attribute('r').toPixels());

				return ctx.createRadialGradient(fx, fy, 0, cx, cy, r);
			}
		}
		svg.Element.radialGradient.prototype = new svg.Element.GradientBase;

		// gradient stop element
		svg.Element.stop = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.offset = this.attribute('offset').numValue();
			if (this.offset < 0) this.offset = 0;
			if (this.offset > 1) this.offset = 1;

			var stopColor = this.style('stop-color', true);
			if (stopColor.value === '') stopColor.value = '#000';
			if (this.style('stop-opacity').hasValue()) stopColor = stopColor.addOpacity(this.style('stop-opacity'));
			this.color = stopColor.value;
		}
		svg.Element.stop.prototype = new svg.Element.ElementBase;

		// animation base element
		svg.Element.AnimateBase = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			svg.Animations.push(this);

			this.duration = 0.0;
			this.begin = this.attribute('begin').toMilliseconds();
			this.maxDuration = this.begin + this.attribute('dur').toMilliseconds();

			this.getProperty = function() {
				var attributeType = this.attribute('attributeType').value;
				var attributeName = this.attribute('attributeName').value;

				if (attributeType == 'CSS') {
					return this.parent.style(attributeName, true);
				}
				return this.parent.attribute(attributeName, true);
			};

			this.initialValue = null;
			this.initialUnits = '';
			this.removed = false;

			this.calcValue = function() {
				// OVERRIDE ME!
				return '';
			}

			this.update = function(delta) {
				// set initial value
				if (this.initialValue == null) {
					this.initialValue = this.getProperty().value;
					this.initialUnits = this.getProperty().getUnits();
				}

				// if we're past the end time
				if (this.duration > this.maxDuration) {
					// loop for indefinitely repeating animations
					if (this.attribute('repeatCount').value == 'indefinite'
					 || this.attribute('repeatDur').value == 'indefinite') {
						this.duration = 0.0
					}
					else if (this.attribute('fill').valueOrDefault('remove') == 'freeze' && !this.frozen) {
						this.frozen = true;
						this.parent.animationFrozen = true;
						this.parent.animationFrozenValue = this.getProperty().value;
					}
					else if (this.attribute('fill').valueOrDefault('remove') == 'remove' && !this.removed) {
						this.removed = true;
						this.getProperty().value = this.parent.animationFrozen ? this.parent.animationFrozenValue : this.initialValue;
						return true;
					}
					return false;
				}
				this.duration = this.duration + delta;

				// if we're past the begin time
				var updated = false;
				if (this.begin < this.duration) {
					var newValue = this.calcValue(); // tween

					if (this.attribute('type').hasValue()) {
						// for transform, etc.
						var type = this.attribute('type').value;
						newValue = type + '(' + newValue + ')';
					}

					this.getProperty().value = newValue;
					updated = true;
				}

				return updated;
			}

			this.from = this.attribute('from');
			this.to = this.attribute('to');
			this.values = this.attribute('values');
			if (this.values.hasValue()) this.values.value = this.values.value.split(';');

			// fraction of duration we've covered
			this.progress = function() {
				var ret = { progress: (this.duration - this.begin) / (this.maxDuration - this.begin) };
				if (this.values.hasValue()) {
					var p = ret.progress * (this.values.value.length - 1);
					var lb = Math.floor(p), ub = Math.ceil(p);
					ret.from = new svg.Property('from', parseFloat(this.values.value[lb]));
					ret.to = new svg.Property('to', parseFloat(this.values.value[ub]));
					ret.progress = (p - lb) / (ub - lb);
				}
				else {
					ret.from = this.from;
					ret.to = this.to;
				}
				return ret;
			}
		}
		svg.Element.AnimateBase.prototype = new svg.Element.ElementBase;

		// animate element
		svg.Element.animate = function(node) {
			this.base = svg.Element.AnimateBase;
			this.base(node);

			this.calcValue = function() {
				var p = this.progress();

				// tween value linearly
				var newValue = p.from.numValue() + (p.to.numValue() - p.from.numValue()) * p.progress;
				return newValue + this.initialUnits;
			};
		}
		svg.Element.animate.prototype = new svg.Element.AnimateBase;

		// animate color element
		svg.Element.animateColor = function(node) {
			this.base = svg.Element.AnimateBase;
			this.base(node);

			this.calcValue = function() {
				var p = this.progress();
				var from = new RGBColor(p.from.value);
				var to = new RGBColor(p.to.value);

				if (from.ok && to.ok) {
					// tween color linearly
					var r = from.r + (to.r - from.r) * p.progress;
					var g = from.g + (to.g - from.g) * p.progress;
					var b = from.b + (to.b - from.b) * p.progress;
					return 'rgb('+parseInt(r,10)+','+parseInt(g,10)+','+parseInt(b,10)+')';
				}
				return this.attribute('from').value;
			};
		}
		svg.Element.animateColor.prototype = new svg.Element.AnimateBase;

		// animate transform element
		svg.Element.animateTransform = function(node) {
			this.base = svg.Element.AnimateBase;
			this.base(node);

			this.calcValue = function() {
				var p = this.progress();

				// tween value linearly
				var from = svg.ToNumberArray(p.from.value);
				var to = svg.ToNumberArray(p.to.value);
				var newValue = '';
				for (var i=0; i<from.length; i++) {
					newValue += from[i] + (to[i] - from[i]) * p.progress + ' ';
				}
				return newValue;
			};
		}
		svg.Element.animateTransform.prototype = new svg.Element.animate;

		// font element
		svg.Element.font = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.horizAdvX = this.attribute('horiz-adv-x').numValue();

			this.isRTL = false;
			this.isArabic = false;
			this.fontFace = null;
			this.missingGlyph = null;
			this.glyphs = [];
			for (var i=0; i<this.children.length; i++) {
				var child = this.children[i];
				if (child.type == 'font-face') {
					this.fontFace = child;
					if (child.style('font-family').hasValue()) {
						svg.Definitions[child.style('font-family').value] = this;
					}
				}
				else if (child.type == 'missing-glyph') this.missingGlyph = child;
				else if (child.type == 'glyph') {
					if (child.arabicForm != '') {
						this.isRTL = true;
						this.isArabic = true;
						if (typeof(this.glyphs[child.unicode]) == 'undefined') this.glyphs[child.unicode] = [];
						this.glyphs[child.unicode][child.arabicForm] = child;
					}
					else {
						this.glyphs[child.unicode] = child;
					}
				}
			}
		}
		svg.Element.font.prototype = new svg.Element.ElementBase;

		// font-face element
		svg.Element.fontface = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.ascent = this.attribute('ascent').value;
			this.descent = this.attribute('descent').value;
			this.unitsPerEm = this.attribute('units-per-em').numValue();
		}
		svg.Element.fontface.prototype = new svg.Element.ElementBase;

		// missing-glyph element
		svg.Element.missingglyph = function(node) {
			this.base = svg.Element.path;
			this.base(node);

			this.horizAdvX = 0;
		}
		svg.Element.missingglyph.prototype = new svg.Element.path;

		// glyph element
		svg.Element.glyph = function(node) {
			this.base = svg.Element.path;
			this.base(node);

			this.horizAdvX = this.attribute('horiz-adv-x').numValue();
			this.unicode = this.attribute('unicode').value;
			this.arabicForm = this.attribute('arabic-form').value;
		}
		svg.Element.glyph.prototype = new svg.Element.path;

		// text element
		svg.Element.text = function(node) {
			this.captureTextNodes = true;
			this.base = svg.Element.RenderedElementBase;
			this.base(node);

			this.baseSetContext = this.setContext;
			this.setContext = function(ctx) {
				this.baseSetContext(ctx);

				var textBaseline = this.style('dominant-baseline').toTextBaseline();
				if (textBaseline == null) textBaseline = this.style('alignment-baseline').toTextBaseline();
				if (textBaseline != null) ctx.textBaseline = textBaseline;
			}

			this.getBoundingBox = function () {
				var x = this.attribute('x').toPixels('x');
				var y = this.attribute('y').toPixels('y');
				var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
				return new svg.BoundingBox(x, y - fontSize, x + Math.floor(fontSize * 2.0 / 3.0) * this.children[0].getText().length, y);
			}

			this.renderChildren = function(ctx) {
				this.x = this.attribute('x').toPixels('x');
				this.y = this.attribute('y').toPixels('y');
				this.x += this.getAnchorDelta(ctx, this, 0);
				for (var i=0; i<this.children.length; i++) {
					this.renderChild(ctx, this, i);
				}
			}

			this.getAnchorDelta = function (ctx, parent, startI) {
				var textAnchor = this.style('text-anchor').valueOrDefault('start');
				if (textAnchor != 'start') {
					var width = 0;
					for (var i=startI; i<parent.children.length; i++) {
						var child = parent.children[i];
						if (i > startI && child.attribute('x').hasValue()) break; // new group
						width += child.measureTextRecursive(ctx);
					}
					return -1 * (textAnchor == 'end' ? width : width / 2.0);
				}
				return 0;
			}

			this.renderChild = function(ctx, parent, i) {

				var child = parent.children[i];
				if(typeof child.type === 'undefined') {
					if (child.attribute('x').hasValue()) {
						child.x = child.attribute('x').toPixels('x') + this.getAnchorDelta(ctx, parent, i);
						if (child.attribute('dx').hasValue()) child.x += child.attribute('dx').toPixels('x');
					}
					else {
						if (this.attribute('dx').hasValue()) this.x += this.attribute('dx').toPixels('x');
						if (child.attribute('dx').hasValue()) this.x += child.attribute('dx').toPixels('x');
						child.x = this.x;
					}
					this.x = child.x + child.measureText(ctx);

					if (child.attribute('y').hasValue()) {
						child.y = child.attribute('y').toPixels('y');
						if (child.attribute('dy').hasValue()) child.y += child.attribute('dy').toPixels('y');
					}
					else {
						if (this.attribute('dy').hasValue()) this.y += this.attribute('dy').toPixels('y');
						if (child.attribute('dy').hasValue()) this.y += child.attribute('dy').toPixels('y');
						child.y = this.y;
					}
					this.y = child.y;

					child.render(ctx);

					for (var i=0; i<child.children.length; i++) {
						this.renderChild(ctx, child, i);
					}
				}
			}
		}
		svg.Element.text.prototype = new svg.Element.RenderedElementBase;

		// text base
		svg.Element.TextElementBase = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);

			this.getGlyph = function(font, text, i) {
				var c = text[i];
				var glyph = null;
				if (font.isArabic) {
					var arabicForm = 'isolated';
					if ((i==0 || text[i-1]==' ') && i<text.length-2 && text[i+1]!=' ') arabicForm = 'terminal';
					if (i>0 && text[i-1]!=' ' && i<text.length-2 && text[i+1]!=' ') arabicForm = 'medial';
					if (i>0 && text[i-1]!=' ' && (i == text.length-1 || text[i+1]==' ')) arabicForm = 'initial';
					if (typeof(font.glyphs[c]) != 'undefined') {
						glyph = font.glyphs[c][arabicForm];
						if (glyph == null && font.glyphs[c].type == 'glyph') glyph = font.glyphs[c];
					}
				}
				else {
					glyph = font.glyphs[c];
				}
				if (glyph == null) glyph = font.missingGlyph;
				return glyph;
			}

			this.renderChildren = function(ctx) {
				var customFont = this.parent.style('font-family').getDefinition();
				if (customFont != null) {
					var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
					var fontStyle = this.parent.style('font-style').valueOrDefault(svg.Font.Parse(svg.ctx.font).fontStyle);
					var text = this.getText();
					if (customFont.isRTL) text = text.split("").reverse().join("");

					var dx = svg.ToNumberArray(this.parent.attribute('dx').value);
					for (var i=0; i<text.length; i++) {
						var glyph = this.getGlyph(customFont, text, i);
						var scale = fontSize / customFont.fontFace.unitsPerEm;
						ctx.translate(this.x, this.y);
						ctx.scale(scale, -scale);
						var lw = ctx.lineWidth;
						ctx.lineWidth = ctx.lineWidth * customFont.fontFace.unitsPerEm / fontSize;
						if (fontStyle == 'italic') ctx.transform(1, 0, .4, 1, 0, 0);
						glyph.render(ctx);
						if (fontStyle == 'italic') ctx.transform(1, 0, -.4, 1, 0, 0);
						ctx.lineWidth = lw;
						ctx.scale(1/scale, -1/scale);
						ctx.translate(-this.x, -this.y);

						this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / customFont.fontFace.unitsPerEm;
						if (typeof(dx[i]) != 'undefined' && !isNaN(dx[i])) {
							this.x += dx[i];
						}
					}
					return;
				}

				if (ctx.fillStyle != '') ctx.fillText(svg.compressSpaces(this.getText()), this.x, this.y);
				if (ctx.strokeStyle != '') ctx.strokeText(svg.compressSpaces(this.getText()), this.x, this.y);
			}

			this.getText = function() {
				// OVERRIDE ME
			}

			this.measureTextRecursive = function(ctx) {
				var width = this.measureText(ctx);
				for (var i=0; i<this.children.length; i++) {
					width += this.children[i].measureTextRecursive(ctx);
				}
				return width;
			}

			this.measureText = function(ctx) {
				var customFont = this.parent.style('font-family').getDefinition();
				if (customFont != null) {
					var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
					var measure = 0;
					var text = this.getText();
					if (customFont.isRTL) text = text.split("").reverse().join("");
					var dx = svg.ToNumberArray(this.parent.attribute('dx').value);
					for (var i=0; i<text.length; i++) {
						var glyph = this.getGlyph(customFont, text, i);
						measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
						if (typeof(dx[i]) != 'undefined' && !isNaN(dx[i])) {
							measure += dx[i];
						}
					}
					return measure;
				}

				var textToMeasure = svg.compressSpaces(this.getText());
				if (!ctx.measureText) return textToMeasure.length * 10;

				ctx.save();
				this.setContext(ctx);
				var width = ctx.measureText(textToMeasure).width;
				ctx.restore();
				return width;
			}
		}
		svg.Element.TextElementBase.prototype = new svg.Element.RenderedElementBase;

		// tspan
		svg.Element.tspan = function(node) {
			this.captureTextNodes = true;
			this.base = svg.Element.TextElementBase;
			this.base(node);

			this.text = svg.compressSpaces(node.value || node.text || node.textContent || '');
			this.getText = function() {
				// if this node has children, then they own the text
				if (this.children.length > 0) { return ''; }
				return this.text;
			}
		}
		svg.Element.tspan.prototype = new svg.Element.TextElementBase;

		// tref
		svg.Element.tref = function(node) {
			this.base = svg.Element.TextElementBase;
			this.base(node);

			this.getText = function() {
				var element = this.getHrefAttribute().getDefinition();
				if (element != null) return element.children[0].getText();
			}
		}
		svg.Element.tref.prototype = new svg.Element.TextElementBase;

		// a element
		svg.Element.a = function(node) {
			this.base = svg.Element.TextElementBase;
			this.base(node);

			this.hasText = node.childNodes.length > 0;
			for (var i=0; i<node.childNodes.length; i++) {
				if (node.childNodes[i].nodeType != 3) this.hasText = false;
			}

			// this might contain text
			this.text = this.hasText ? node.childNodes[0].value : '';
			this.getText = function() {
				return this.text;
			}

			this.baseRenderChildren = this.renderChildren;
			this.renderChildren = function(ctx) {
				if (this.hasText) {
					// render as text element
					this.baseRenderChildren(ctx);
					var fontSize = new svg.Property('fontSize', svg.Font.Parse(svg.ctx.font).fontSize);
					svg.Mouse.checkBoundingBox(this, new svg.BoundingBox(this.x, this.y - fontSize.toPixels('y'), this.x + this.measureText(ctx), this.y));
				}
				else if (this.children.length > 0) {
					// render as temporary group
					var g = new svg.Element.g();
					g.children = this.children;
					g.parent = this;
					g.render(ctx);
				}
			}

			this.onclick = function() {
				window.open(this.getHrefAttribute().value);
			}

			this.onmousemove = function() {
				svg.ctx.canvas.style.cursor = 'pointer';
			}
		}
		svg.Element.a.prototype = new svg.Element.TextElementBase;

		// image element
		svg.Element.image = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);

			var href = this.getHrefAttribute().value;
			if (href == '') { return; }
			var isSvg = href.match(/\.svg$/)

			svg.Images.push(this);
			this.loaded = false;
			if (!isSvg) {
				this.img = document.createElement('img');
				if (svg.opts['useCORS'] == true) { this.img.crossOrigin = 'Anonymous'; }
				var self = this;
				this.img.onload = function() { self.loaded = true; }
				this.img.onerror = function() { svg.log('ERROR: image "' + href + '" not found'); self.loaded = true; }
				this.img.src = href;
			}
			else {
				this.img = svg.ajax(href);
				this.loaded = true;
			}

			this.renderChildren = function(ctx) {
				var x = this.attribute('x').toPixels('x');
				var y = this.attribute('y').toPixels('y');

				var width = this.attribute('width').toPixels('x');
				var height = this.attribute('height').toPixels('y');
				if (width == 0 || height == 0) return;

				ctx.save();
				if (isSvg) {
					ctx.drawSvg(this.img, x, y, width, height);
				}
				else {
					ctx.translate(x, y);
					svg.AspectRatio(ctx,
									this.attribute('preserveAspectRatio').value,
									width,
									this.img.width,
									height,
									this.img.height,
									0,
									0);
					ctx.drawImage(this.img, 0, 0);
				}
				ctx.restore();
			}

			this.getBoundingBox = function() {
				var x = this.attribute('x').toPixels('x');
				var y = this.attribute('y').toPixels('y');
				var width = this.attribute('width').toPixels('x');
				var height = this.attribute('height').toPixels('y');
				return new svg.BoundingBox(x, y, x + width, y + height);
			}
		}
		svg.Element.image.prototype = new svg.Element.RenderedElementBase;

		// group element
		svg.Element.g = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);

			this.getBoundingBox = function() {
				var bb = new svg.BoundingBox();
				for (var i=0; i<this.children.length; i++) {
					bb.addBoundingBox(this.children[i].getBoundingBox());
				}
				return bb;
			};
		}
		svg.Element.g.prototype = new svg.Element.RenderedElementBase;

		// symbol element
		svg.Element.symbol = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);

			this.render = function(ctx) {
				// NO RENDER
			};
		}
		svg.Element.symbol.prototype = new svg.Element.RenderedElementBase;

		// style element
		svg.Element.style = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			// text, or spaces then CDATA
			var css = ''
			for (var i=0; i<node.childNodes.length; i++) {
			  css += node.childNodes[i].data;
			}
			css = css.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ''); // remove comments
			css = svg.compressSpaces(css); // replace whitespace
			var cssDefs = css.split('}');
			for (var i=0; i<cssDefs.length; i++) {
				if (svg.trim(cssDefs[i]) != '') {
					var cssDef = cssDefs[i].split('{');
					var cssClasses = cssDef[0].split(',');
					var cssProps = cssDef[1].split(';');
					for (var j=0; j<cssClasses.length; j++) {
						var cssClass = svg.trim(cssClasses[j]);
						if (cssClass != '') {
							var props = {};
							for (var k=0; k<cssProps.length; k++) {
								var prop = cssProps[k].indexOf(':');
								var name = cssProps[k].substr(0, prop);
								var value = cssProps[k].substr(prop + 1, cssProps[k].length - prop);
								if (name != null && value != null) {
									props[svg.trim(name)] = new svg.Property(svg.trim(name), svg.trim(value));
								}
							}
							svg.Styles[cssClass] = props;
							svg.StylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
							if (cssClass == '@font-face') {
								var fontFamily = props['font-family'].value.replace(/"/g,'');
								var srcs = props['src'].value.split(',');
								for (var s=0; s<srcs.length; s++) {
									if (srcs[s].indexOf('format("svg")') > 0) {
										var urlStart = srcs[s].indexOf('url');
										var urlEnd = srcs[s].indexOf(')', urlStart);
										var url = srcs[s].substr(urlStart + 5, urlEnd - urlStart - 6);
										var doc = svg.parseXml(svg.ajax(url));
										var fonts = doc.getElementsByTagName('font');
										for (var f=0; f<fonts.length; f++) {
											var font = svg.CreateElement(fonts[f]);
											svg.Definitions[fontFamily] = font;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		svg.Element.style.prototype = new svg.Element.ElementBase;

		// use element
		svg.Element.use = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);

			this.baseSetContext = this.setContext;
			this.setContext = function(ctx) {
				this.baseSetContext(ctx);
				if (this.attribute('x').hasValue()) ctx.translate(this.attribute('x').toPixels('x'), 0);
				if (this.attribute('y').hasValue()) ctx.translate(0, this.attribute('y').toPixels('y'));
			}

			var element = this.getHrefAttribute().getDefinition();

			this.path = function(ctx) {
				if (element != null) element.path(ctx);
			}

			this.getBoundingBox = function() {
				if (element != null) return element.getBoundingBox();
			}

			this.renderChildren = function(ctx) {
				if (element != null) {
					var tempSvg = element;
					if (element.type == 'symbol') {
						// render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
						tempSvg = new svg.Element.svg();
						tempSvg.type = 'svg';
						tempSvg.attributes['viewBox'] = new svg.Property('viewBox', element.attribute('viewBox').value);
						tempSvg.attributes['preserveAspectRatio'] = new svg.Property('preserveAspectRatio', element.attribute('preserveAspectRatio').value);
						tempSvg.attributes['overflow'] = new svg.Property('overflow', element.attribute('overflow').value);
						tempSvg.children = element.children;
					}
					if (tempSvg.type == 'svg') {
						// if symbol or svg, inherit width/height from me
						if (this.attribute('width').hasValue()) tempSvg.attributes['width'] = new svg.Property('width', this.attribute('width').value);
						if (this.attribute('height').hasValue()) tempSvg.attributes['height'] = new svg.Property('height', this.attribute('height').value);
					}
					var oldParent = tempSvg.parent;
					tempSvg.parent = null;
					tempSvg.render(ctx);
					tempSvg.parent = oldParent;
				}
			}
		}
		svg.Element.use.prototype = new svg.Element.RenderedElementBase;

		// mask element
		svg.Element.mask = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.apply = function(ctx, element) {
				// render as temp svg
				var x = this.attribute('x').toPixels('x');
				var y = this.attribute('y').toPixels('y');
				var width = this.attribute('width').toPixels('x');
				var height = this.attribute('height').toPixels('y');

				if (width == 0 && height == 0) {
					var bb = new svg.BoundingBox();
					for (var i=0; i<this.children.length; i++) {
						bb.addBoundingBox(this.children[i].getBoundingBox());
					}
					var x = Math.floor(bb.x1);
					var y = Math.floor(bb.y1);
					var width = Math.floor(bb.width());
					var	height = Math.floor(bb.height());
				}

				// temporarily remove mask to avoid recursion
				var mask = element.attribute('mask').value;
				element.attribute('mask').value = '';

					var cMask = document.createElement('canvas');
					cMask.width = x + width;
					cMask.height = y + height;
					var maskCtx = cMask.getContext('2d');
					this.renderChildren(maskCtx);

					var c = document.createElement('canvas');
					c.width = x + width;
					c.height = y + height;
					var tempCtx = c.getContext('2d');
					element.render(tempCtx);
					tempCtx.globalCompositeOperation = 'destination-in';
					tempCtx.fillStyle = maskCtx.createPattern(cMask, 'no-repeat');
					tempCtx.fillRect(0, 0, x + width, y + height);

					ctx.fillStyle = tempCtx.createPattern(c, 'no-repeat');
					ctx.fillRect(0, 0, x + width, y + height);

				// reassign mask
				element.attribute('mask').value = mask;
			}

			this.render = function(ctx) {
				// NO RENDER
			}
		}
		svg.Element.mask.prototype = new svg.Element.ElementBase;

		// clip element
		svg.Element.clipPath = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.apply = function(ctx) {
				var oldBeginPath = CanvasRenderingContext2D.prototype.beginPath;
				CanvasRenderingContext2D.prototype.beginPath = function () { };

				var oldClosePath = CanvasRenderingContext2D.prototype.closePath;
				CanvasRenderingContext2D.prototype.closePath = function () { };

				oldBeginPath.call(ctx);
				for (var i=0; i<this.children.length; i++) {
					var child = this.children[i];
					if (typeof(child.path) != 'undefined') {
						var transform = null;
						if (child.attribute('transform').hasValue()) {
							transform = new svg.Transform(child.attribute('transform').value);
							transform.apply(ctx);
						}
						child.path(ctx);
						CanvasRenderingContext2D.prototype.closePath = oldClosePath;
						if (transform) { transform.unapply(ctx); }
					}
				}
				oldClosePath.call(ctx);
				ctx.clip();

				CanvasRenderingContext2D.prototype.beginPath = oldBeginPath;
				CanvasRenderingContext2D.prototype.closePath = oldClosePath;
			}

			this.render = function(ctx) {
				// NO RENDER
			}
		}
		svg.Element.clipPath.prototype = new svg.Element.ElementBase;

		// filters
		svg.Element.filter = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.apply = function(ctx, element) {
				// render as temp svg
				var bb = element.getBoundingBox();
				var x = Math.floor(bb.x1);
				var y = Math.floor(bb.y1);
				var width = Math.floor(bb.width());
				var	height = Math.floor(bb.height());

				// temporarily remove filter to avoid recursion
				var filter = element.style('filter').value;
				element.style('filter').value = '';

				var px = 0, py = 0;
				for (var i=0; i<this.children.length; i++) {
					var efd = this.children[i].extraFilterDistance || 0;
					px = Math.max(px, efd);
					py = Math.max(py, efd);
				}

				var c = document.createElement('canvas');
				c.width = width + 2*px;
				c.height = height + 2*py;
				var tempCtx = c.getContext('2d');
				tempCtx.translate(-x + px, -y + py);
				element.render(tempCtx);

				// apply filters
				for (var i=0; i<this.children.length; i++) {
					this.children[i].apply(tempCtx, 0, 0, width + 2*px, height + 2*py);
				}

				// render on me
				ctx.drawImage(c, 0, 0, width + 2*px, height + 2*py, x - px, y - py, width + 2*px, height + 2*py);

				// reassign filter
				element.style('filter', true).value = filter;
			}

			this.render = function(ctx) {
				// NO RENDER
			}
		}
		svg.Element.filter.prototype = new svg.Element.ElementBase;

		svg.Element.feMorphology = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.apply = function(ctx, x, y, width, height) {
				// TODO: implement
			}
		}
		svg.Element.feMorphology.prototype = new svg.Element.ElementBase;

		svg.Element.feComposite = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.apply = function(ctx, x, y, width, height) {
				// TODO: implement
			}
		}
		svg.Element.feComposite.prototype = new svg.Element.ElementBase;

		svg.Element.feColorMatrix = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			var matrix = svg.ToNumberArray(this.attribute('values').value);
			switch (this.attribute('type').valueOrDefault('matrix')) { // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
				case 'saturate':
					var s = matrix[0];
					matrix = [0.213+0.787*s,0.715-0.715*s,0.072-0.072*s,0,0,
							  0.213-0.213*s,0.715+0.285*s,0.072-0.072*s,0,0,
							  0.213-0.213*s,0.715-0.715*s,0.072+0.928*s,0,0,
							  0,0,0,1,0,
							  0,0,0,0,1];
					break;
				case 'hueRotate':
					var a = matrix[0] * Math.PI / 180.0;
					var c = function (m1,m2,m3) { return m1 + Math.cos(a)*m2 + Math.sin(a)*m3; };
					matrix = [c(0.213,0.787,-0.213),c(0.715,-0.715,-0.715),c(0.072,-0.072,0.928),0,0,
							  c(0.213,-0.213,0.143),c(0.715,0.285,0.140),c(0.072,-0.072,-0.283),0,0,
							  c(0.213,-0.213,-0.787),c(0.715,-0.715,0.715),c(0.072,0.928,0.072),0,0,
							  0,0,0,1,0,
							  0,0,0,0,1];
					break;
				case 'luminanceToAlpha':
					matrix = [0,0,0,0,0,
							  0,0,0,0,0,
							  0,0,0,0,0,
							  0.2125,0.7154,0.0721,0,0,
							  0,0,0,0,1];
					break;
			}

			function imGet(img, x, y, width, height, rgba) {
				return img[y*width*4 + x*4 + rgba];
			}

			function imSet(img, x, y, width, height, rgba, val) {
				img[y*width*4 + x*4 + rgba] = val;
			}

			function m(i, v) {
				var mi = matrix[i];
				return mi * (mi < 0 ? v - 255 : v);
			}

			this.apply = function(ctx, x, y, width, height) {
				// assuming x==0 && y==0 for now
				var srcData = ctx.getImageData(0, 0, width, height);
				for (var y = 0; y < height; y++) {
					for (var x = 0; x < width; x++) {
						var r = imGet(srcData.data, x, y, width, height, 0);
						var g = imGet(srcData.data, x, y, width, height, 1);
						var b = imGet(srcData.data, x, y, width, height, 2);
						var a = imGet(srcData.data, x, y, width, height, 3);
						imSet(srcData.data, x, y, width, height, 0, m(0,r)+m(1,g)+m(2,b)+m(3,a)+m(4,1));
						imSet(srcData.data, x, y, width, height, 1, m(5,r)+m(6,g)+m(7,b)+m(8,a)+m(9,1));
						imSet(srcData.data, x, y, width, height, 2, m(10,r)+m(11,g)+m(12,b)+m(13,a)+m(14,1));
						imSet(srcData.data, x, y, width, height, 3, m(15,r)+m(16,g)+m(17,b)+m(18,a)+m(19,1));
					}
				}
				ctx.clearRect(0, 0, width, height);
				ctx.putImageData(srcData, 0, 0);
			}
		}
		svg.Element.feColorMatrix.prototype = new svg.Element.ElementBase;

		svg.Element.feGaussianBlur = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.blurRadius = Math.floor(this.attribute('stdDeviation').numValue());
			this.extraFilterDistance = this.blurRadius;

			this.apply = function(ctx, x, y, width, height) {
				if (typeof(stackBlurCanvasRGBA) == 'undefined') {
					svg.log('ERROR: StackBlur.js must be included for blur to work');
					return;
				}

				// StackBlur requires canvas be on document
				ctx.canvas.id = svg.UniqueId();
				ctx.canvas.style.display = 'none';
				document.body.appendChild(ctx.canvas);
				stackBlurCanvasRGBA(ctx.canvas.id, x, y, width, height, this.blurRadius);
				document.body.removeChild(ctx.canvas);
			}
		}
		svg.Element.feGaussianBlur.prototype = new svg.Element.ElementBase;

		// title element, do nothing
		svg.Element.title = function(node) {
		}
		svg.Element.title.prototype = new svg.Element.ElementBase;

		// desc element, do nothing
		svg.Element.desc = function(node) {
		}
		svg.Element.desc.prototype = new svg.Element.ElementBase;

		svg.Element.MISSING = function(node) {
			svg.log('ERROR: Element \'' + node.nodeName + '\' not yet implemented.');
		}
		svg.Element.MISSING.prototype = new svg.Element.ElementBase;

		// element factory
		svg.CreateElement = function(node) {
			var className = node.nodeName.replace(/^[^:]+:/,''); // remove namespace
			className = className.replace(/\-/g,''); // remove dashes
			var e = null;
			if (typeof(svg.Element[className]) != 'undefined') {
				e = new svg.Element[className](node);
			}
			else {
				e = new svg.Element.MISSING(node);
			}

			e.type = node.nodeName;
			return e;
		}

		// load from url
		svg.load = function(ctx, url) {
			svg.loadXml(ctx, svg.ajax(url));
		}

		// load from xml
		svg.loadXml = function(ctx, xml) {
			svg.loadXmlDoc(ctx, svg.parseXml(xml));
		}

		svg.loadXmlDoc = function(ctx, dom) {
			svg.init(ctx);

			var mapXY = function(p) {
				var e = ctx.canvas;
				while (e) {
					p.x -= e.offsetLeft;
					p.y -= e.offsetTop;
					e = e.offsetParent;
				}
				if (window.scrollX) p.x += window.scrollX;
				if (window.scrollY) p.y += window.scrollY;
				return p;
			}

			// bind mouse
			if (svg.opts['ignoreMouse'] != true) {
				ctx.canvas.onclick = function(e) {
					var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
					svg.Mouse.onclick(p.x, p.y);
				};
				ctx.canvas.onmousemove = function(e) {
					var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
					svg.Mouse.onmousemove(p.x, p.y);
				};
			}

			var e = svg.CreateElement(dom.documentElement);
			e.root = true;
			e.addStylesFromStyleDefinition();

			// render loop
			var isFirstRender = true;
			var draw = function() {
				svg.ViewPort.Clear();
				if (ctx.canvas.parentNode) svg.ViewPort.SetCurrent(ctx.canvas.parentNode.clientWidth, ctx.canvas.parentNode.clientHeight);

				if (svg.opts['ignoreDimensions'] != true) {
					// set canvas size
					if (e.style('width').hasValue()) {
						ctx.canvas.width = e.style('width').toPixels('x');
						ctx.canvas.style.width = ctx.canvas.width + 'px';
					}
					if (e.style('height').hasValue()) {
						ctx.canvas.height = e.style('height').toPixels('y');
						ctx.canvas.style.height = ctx.canvas.height + 'px';
					}
				}
				var cWidth = ctx.canvas.clientWidth || ctx.canvas.width;
				var cHeight = ctx.canvas.clientHeight || ctx.canvas.height;
				if (svg.opts['ignoreDimensions'] == true && e.style('width').hasValue() && e.style('height').hasValue()) {
					cWidth = e.style('width').toPixels('x');
					cHeight = e.style('height').toPixels('y');
				}
				svg.ViewPort.SetCurrent(cWidth, cHeight);

				if (svg.opts['offsetX'] != null) e.attribute('x', true).value = svg.opts['offsetX'];
				if (svg.opts['offsetY'] != null) e.attribute('y', true).value = svg.opts['offsetY'];
				if (svg.opts['scaleWidth'] != null || svg.opts['scaleHeight'] != null) {
					var xRatio = null, yRatio = null, viewBox = svg.ToNumberArray(e.attribute('viewBox').value);

					if (svg.opts['scaleWidth'] != null) {
						if (e.attribute('width').hasValue()) xRatio = e.attribute('width').toPixels('x') / svg.opts['scaleWidth'];
						else if (!isNaN(viewBox[2])) xRatio = viewBox[2] / svg.opts['scaleWidth'];
					}

					if (svg.opts['scaleHeight'] != null) {
						if (e.attribute('height').hasValue()) yRatio = e.attribute('height').toPixels('y') / svg.opts['scaleHeight'];
						else if (!isNaN(viewBox[3])) yRatio = viewBox[3] / svg.opts['scaleHeight'];
					}

					if (xRatio == null) { xRatio = yRatio; }
					if (yRatio == null) { yRatio = xRatio; }

					e.attribute('width', true).value = svg.opts['scaleWidth'];
					e.attribute('height', true).value = svg.opts['scaleHeight'];
					e.attribute('transform', true).value += ' scale('+(1.0/xRatio)+','+(1.0/yRatio)+')';
				}

				// clear and render
				if (svg.opts['ignoreClear'] != true) {
					ctx.clearRect(0, 0, cWidth, cHeight);
				}
				e.render(ctx);
				if (isFirstRender) {
					isFirstRender = false;
					if (typeof(svg.opts['renderCallback']) == 'function') svg.opts['renderCallback'](dom);
				}
			}

			var waitingForImages = true;
			if (svg.ImagesLoaded()) {
				waitingForImages = false;
				draw();
			}
			svg.intervalID = setInterval(function() {
				var needUpdate = false;

				if (waitingForImages && svg.ImagesLoaded()) {
					waitingForImages = false;
					needUpdate = true;
				}

				// need update from mouse events?
				if (svg.opts['ignoreMouse'] != true) {
					needUpdate = needUpdate | svg.Mouse.hasEvents();
				}

				// need update from animations?
				if (svg.opts['ignoreAnimation'] != true) {
					for (var i=0; i<svg.Animations.length; i++) {
						needUpdate = needUpdate | svg.Animations[i].update(1000 / svg.FRAMERATE);
					}
				}

				// need update from redraw?
				if (typeof(svg.opts['forceRedraw']) == 'function') {
					if (svg.opts['forceRedraw']() == true) needUpdate = true;
				}

				// render if needed
				if (needUpdate) {
					draw();
					svg.Mouse.runEvents(); // run and clear our events
				}
			}, 1000 / svg.FRAMERATE);
		}

		svg.stop = function() {
			if (svg.intervalID) {
				clearInterval(svg.intervalID);
			}
		}

		svg.Mouse = new (function() {
			this.events = [];
			this.hasEvents = function() { return this.events.length != 0; }

			this.onclick = function(x, y) {
				this.events.push({ type: 'onclick', x: x, y: y,
					run: function(e) { if (e.onclick) e.onclick(); }
				});
			}

			this.onmousemove = function(x, y) {
				this.events.push({ type: 'onmousemove', x: x, y: y,
					run: function(e) { if (e.onmousemove) e.onmousemove(); }
				});
			}

			this.eventElements = [];

			this.checkPath = function(element, ctx) {
				for (var i=0; i<this.events.length; i++) {
					var e = this.events[i];
					if (ctx.isPointInPath && ctx.isPointInPath(e.x, e.y)) this.eventElements[i] = element;
				}
			}

			this.checkBoundingBox = function(element, bb) {
				for (var i=0; i<this.events.length; i++) {
					var e = this.events[i];
					if (bb.isPointInBox(e.x, e.y)) this.eventElements[i] = element;
				}
			}

			this.runEvents = function() {
				svg.ctx.canvas.style.cursor = '';

				for (var i=0; i<this.events.length; i++) {
					var e = this.events[i];
					var element = this.eventElements[i];
					while (element) {
						e.run(element);
						element = element.parent;
					}
				}

				// done running, clear
				this.events = [];
				this.eventElements = [];
			}
		});

		return svg;
	}
})();

if (typeof(CanvasRenderingContext2D) != 'undefined') {
	CanvasRenderingContext2D.prototype.drawSvg = function(s, dx, dy, dw, dh) {
		canvg(this.canvas, s, {
			ignoreMouse: true,
			ignoreAnimation: true,
			ignoreDimensions: true,
			ignoreClear: true,
			offsetX: dx,
			offsetY: dy,
			scaleWidth: dw,
			scaleHeight: dh
		});
	}
}