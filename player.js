(function(){var d,e=this;function f(a,b,c){return a.call.apply(a.bind,arguments)}function g(a,b,c){if(!a)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,h);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function k(a,b,c){k=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:g;return k.apply(null,arguments)};var l=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function m(a,b){return a<b?-1:a>b?1:0};var aa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if("string"==typeof a)return"string"==typeof b&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function n(a,b){0<=aa(a,b)||a.push(b)};function p(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}p.prototype.clone=function(){return new p(this.x,this.y)};p.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};p.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};p.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var q;a:{var u=e.navigator;if(u){var v=u.userAgent;if(v){q=v;break a}}q=""};var ba=-1!=q.indexOf("Opera")||-1!=q.indexOf("OPR"),w=-1!=q.indexOf("Trident")||-1!=q.indexOf("MSIE"),ca=-1!=q.indexOf("Edge"),x=-1!=q.indexOf("Gecko")&&!(-1!=q.toLowerCase().indexOf("webkit")&&-1==q.indexOf("Edge"))&&!(-1!=q.indexOf("Trident")||-1!=q.indexOf("MSIE"))&&-1==q.indexOf("Edge"),da=-1!=q.toLowerCase().indexOf("webkit")&&-1==q.indexOf("Edge");function z(){var a=e.document;return a?a.documentMode:void 0}var A;
a:{var B="",C=function(){var a=q;if(x)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ca)return/Edge\/([\d\.]+)/.exec(a);if(w)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(da)return/WebKit\/(\S+)/.exec(a);if(ba)return/(?:Version)[ \/]?(\S+)/.exec(a)}();C&&(B=C?C[1]:"");if(w){var D=z();if(null!=D&&D>parseFloat(B)){A=String(D);break a}}A=B}var E={};
function F(a){if(!E[a]){for(var b=0,c=l(String(A)).split("."),h=l(String(a)).split("."),Z=Math.max(c.length,h.length),y=0;0==b&&y<Z;y++){var ea=c[y]||"",fa=h[y]||"",ga=RegExp("(\\d*)(\\D*)","g"),ha=RegExp("(\\d*)(\\D*)","g");do{var r=ga.exec(ea)||["","",""],t=ha.exec(fa)||["","",""];if(0==r[0].length&&0==t[0].length)break;b=m(0==r[1].length?0:parseInt(r[1],10),0==t[1].length?0:parseInt(t[1],10))||m(0==r[2].length,0==t[2].length)||m(r[2],t[2])}while(0==b)}E[a]=0<=b}}
var G=e.document,ia=G&&w?z()||("CSS1Compat"==G.compatMode?parseInt(A,10):5):void 0;function H(a,b){this.width=a;this.height=b}H.prototype.clone=function(){return new H(this.width,this.height)};H.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};H.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};H.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var I;if(!(I=!x&&!w)){var J;if(J=w)J=9<=Number(ia);I=J}I||x&&F("1.9.1");w&&F("9");function K(a){return document.createElement(a)};function L(a,b){var c,h;b instanceof p?(c=b.x,h=b.y):(c=b,h=void 0);a.style.left=M(c,!1);a.style.top=M(h,!1)}function N(a,b){var c;if(b instanceof H)c=b.height,b=b.width;else throw Error("missing height argument");a.style.width=M(b,!0);a.style.height=M(c,!0)}function M(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};function O(a){this.a=new Image(300,300);this.a.src="src/images/baraban.png";this.a.style.position="absolute";this.a.style.left="250px";this.a.style.top="150px";this.a.style.WebkitTransform="rotate("+this.b+"deg)";document.body.appendChild(this.a);this.f=new Image(50,50);this.f.src="src/images/up.png";this.f.style.position="absolute";this.f.style.left="375px";this.f.style.top="450px";document.body.appendChild(this.f);this.c=new Image(200,200);this.c.src="src/images/leader.png";
this.c.style.position="absolute";this.c.style.left="550px";this.c.style.top="350px";document.body.appendChild(this.c);this.j=a;ja(this,this.j);this.b=0;this.i=3;var b=this;this.s=this.V=this.U=this.T=0;this.l=this.O=!1;this.g=0;this.o=this.j.length;a=new Audio;a.src="src/music/background.mp3";a.autoplay=!0;a.repeat=!0;document.onkeydown=function(a){80==a.keyCode&&b.l&&document.dispatchEvent(new Event("Rotated"))}}
O.prototype.u=function(a){this.O&&(P(this,a),this.O=!1,document.dispatchEvent(new CustomEvent("Taped",{detail:this.j.charAt(a)})))};function ja(a,b){a.h=document.createElement("div");L(a.h,new p(600,300));for(var c=0;c<b.length;c++){var h=document.createElement("div");h.className="letter";h.innerHTML="<strong>_</strong>";h.onclick=k(a.u,a,c);L(h,new p(600+40*c,300));a.h.appendChild(h)}document.body.appendChild(a.h)}
function P(a,b){"<strong>_</strong>"==a.h.childNodes[b].innerHTML&&(--a.o,a.h.childNodes[b].innerHTML="<strong>"+a.j.charAt(b)+"</strong>");1==a.m?a.T=a.g:2==a.m?a.U=a.g:3==a.m&&(a.V="[]");document.dispatchEvent(new Event("Score"));0==a.o&&document.dispatchEvent(new Event("Winner"))}
function Q(a,b){switch((a.b-360*(a.b/360|0))/22.5|0){case 0:b+=250;break;case 1:b+=350;break;case 2:b+=500;break;case 3:b*=2;break;case 4:b+=150;break;case 5:b+=1E4;break;case 6:for(var c=0;10>c;c++)alert("\u0410\u0410\u0410\u0412\u0422\u041e\u041c\u041e\u0411\u0418\u041b\u042c!");break;case 7:b+=300;break;case 8:b-=100;break;case 9:b+=100;break;case 10:b+=200;break;case 11:document.dispatchEvent(new Event("Next Player"));b+=0;break;case 12:b+=300;break;case 13:alert("\u0412\u042b \u0411\u0410\u041d\u041a\u0420\u041e\u0422!");
document.dispatchEvent(new Event("Next Player"));break;case 14:b+=50;break;case 15:document.dispatchEvent(new Event("Touch letter")),a.O=!0}return b}
function ka(a,b){a.l=!0;a.m=b;var c=!1;document.addEventListener("Rotated",function(){a.c.style.WebkitTransform="rotate(0deg)";c||(1==b?a.g=Q(a,a.T):2==b?a.g=Q(a,a.U)/2|0:3==b&&(a.g=Q(a,a.V)),clearInterval(h),c=!0,document.dispatchEvent(new Event("Enter letter")))});a.i=190*Math.random()+10;var h=setInterval(function(){a.b+=a.i;--a.i;a.c.style.WebkitTransform="rotate("+a.b+"deg)";a.a.style.WebkitTransform="rotate("+a.b+"deg)";0>=a.i&&(document.dispatchEvent(new Event("Rotated")),a.l=!1)},1E3/30);
20==a.s&&(a.a.style.height="400px");a.s++};function R(){this.c=document.createElement("INPUT");this.c.className="rules";this.c.type="button";this.c.value="Rules";this.c.style.padding="15px";this.c.style.borderRadius="10px";L(this.c,new p(700,100));N(this.c,new H(75,45));this.c.addEventListener("click",k(this.a,this));document.body.appendChild(this.c)}
R.prototype.a=function(){document.body.removeChild(this.c);var a=document.createElement("DIV");a.className="rules";L(a,new p(700,100));N(a,new H(250,100));a.innerHTML="<strong>                 \u041f\u0440\u0430\u0432\u0438\u043b\u0430                 </strong>1. \u0411\u0430\u0440\u0430\u0431\u0430\u043d \u043a\u0440\u0443\u0442\u0438\u0442\u044c\u0441\u044f \u043f\u043e \u043e\u0447\u0435\u0440\u0435\u0434\u0438 2. \u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u044b 3. \u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438 \u043f\u043e\u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u043f\u044b\u0442\u0430\u044e\u0442\u0441\u044f \u043e\u0442\u0433\u0430\u0434\u0430\u0442\u044c \u0437\u0430\u0433\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 4. \u0412\u044b\u0439\u0433\u0440\u0430\u0432\u0448\u0438\u0439 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u0437\u0430\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u0435\u0439";document.body.appendChild(a)};function S(a,b){this.c=a;this.f=b;this.N=null;this.a=K("DIV");this.a.id="player"+this.f;L(this.a,this.c);N(this.a,new H(76,76));this.a.style.backgroundColor="#a21f54";this.a.style.position="absolute";document.body.appendChild(this.a);var c=K("INPUT");c.className="add_photo";c.type="submit";c.value="Add Photo";L(c,new p(this.c.x,this.c.y+76));document.body.appendChild(c);c.style.position="absolute";this.b=document.createElement("DIV");this.b.className="hate";this.b.innerHTML="<strong>MTV</strong>";
L(this.b,new p(this.c.x+5,this.c.y-25));document.body.appendChild(this.b)};function T(){this.u=this.f=null;this.j="\u041a\u043e\u0448\u043a\u0430";this.Z="\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0436\u0438\u0432\u043e\u0442\u043d\u043e\u0435";this.C=this.m=null;this.v=[];this.g=1;this.F=K("INPUT");L(this.F,new p(500,270));N(this.F,new H(1052,400));this.F.className="button";this.F.type="button";this.F.style.background="url(src/images/Start_Button.png) repeat-y #fc0";document.body.appendChild(this.F);this.F.addEventListener("click",k(this.ba,this));var a=
document.createElement("DIV");a.id="newDiv";L(a,new p(0,0));N(a,new H(30,30));a.style.background="url(src/images/facebook.jpg) repeat-y #fc0";this.W=K("A");this.W.href="http://google.com";this.W.innerHTML="facebook";a.appendChild(this.W);document.body.appendChild(a);a=document.createElement("DIV");a.id="newDiv2";L(a,new p(0,30));N(a,new H(45,45));a.style.background="url(src/images/twitter.jpg) repeat #fc0";this.X=K("A");this.X.href="";this.X.innerHTML="twitter";a.appendChild(this.X);
document.body.appendChild(a);a=document.createElement("DIV");a.id="newDiv2";L(a,new p(0,30));N(a,new H(30,30));a.style.background="url(src/images/vkontakte.png) repeat #fc0";this.Y=K("A");this.Y.href="kghgjhkljglhkjgklhjklghj";this.Y.innerHTML="VKONTAKTE";a.appendChild(this.Y);document.body.appendChild(a);this.G=document.createElement("DIV");this.G.className="alert";this.G.innerHTML="<strong>\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043b\u044f \u043e\u0442\u0433\u0430\u0434\u044b\u0432\u0430\u043d\u0438\u044f. </strong> \u041c\u0430\u043a\u0441. \u0434\u043b\u0438\u043d\u0430 \u0441\u043b\u043e\u0432\u0430 - 15 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f - 3 \u0441\u0438\u043c\u0432\u043e\u043b. \u0421\u043b\u043e\u0432\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0440\u0443\u0441\u0441\u043a\u0438\u0445 \u0431\u0443\u043a\u0432.";
L(this.G,new p(230,0));N(this.G,new H(500,60));document.body.appendChild(this.G);this.H=document.createElement("DIV");this.H.className="alert";this.H.innerHTML="<strong>\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0443 \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430. </strong> \u041c\u0430\u043a\u0441. \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 - 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f - 30 \u0441\u0438\u043c\u0432\u043e\u043b. \u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0440\u0443\u0441\u0441\u043a\u0438\u0445 \u0431\u0443\u043a\u0432.";
L(this.H,new p(770,0));N(this.H,new H(500,60));document.body.appendChild(this.H);this.o=K("INPUT");L(this.o,new p(250,100));N(this.o,new H(350,25));this.o.className="button";this.o.type="text";this.o.value=this.j;this.o.onchange=k(this.da,this);document.body.appendChild(this.o);this.l=K("INPUT");L(this.l,new p(870,100));N(this.l,new H(250,25));this.l.className="button";this.l.type="text";this.l.value=this.Z;this.l.onchange=k(this.ca,this);document.body.appendChild(this.l);this.h=document.createElement("INPUT");
this.h.className="rules";this.h.type="button";this.h.value="Record Table";this.h.style.padding="15px";this.h.style.borderRadius="10px";this.h.style.border="8px solid #fff555";L(this.h,new p(100,500));N(this.h,new H(150,60));document.body.appendChild(this.h);this.S=!1}d=T.prototype;
d.ba=function(){document.body.removeChild(this.H);document.body.removeChild(this.G);document.body.removeChild(this.h);document.body.removeChild(this.o);document.body.removeChild(this.l);document.body.style.background="rgb(240, 40, 40)";this.f=document.createElement("DIV");this.f.className="alert";this.f.innerHTML="<strong>\u041f\u0440\u0430\u0432\u0438\u043b\u0430!</strong> \u041c\u0430\u043a\u0441. \u0434\u043b\u0438\u043d\u0430 \u0438\u043c\u0435\u043d\u0438 - 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f - 1 \u0441\u0438\u043c\u0432\u043e\u043b. \u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0440\u0443\u0441\u0441\u043a\u0438\u0445 \u0431\u0443\u043a\u0432 \u0438 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u043a\u0432\u044b.";
L(this.f,new p(230,0));N(this.f,new H(500,60));document.body.appendChild(this.f);this.u=document.createElement("DIV");this.u.className="alert";this.u.innerHTML="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u043b\u044f <strong>\u043f\u0435\u0440\u0432\u043e\u0433\u043e</strong> \u0438\u0433\u0440\u043e\u043a\u0430";L(this.u,new p(200,500));N(this.u,new H(300,25));document.body.appendChild(this.u);this.m=K("INPUT");L(this.m,new p(200,570));N(this.m,new H(250,25));this.m.className=
"button";this.m.type="text";this.m.onchange=k(this.fa,this);document.body.appendChild(this.m);this.C=K("INPUT");L(this.C,new p(460,570));N(this.C,new H(75,27));this.C.className="button";this.C.value="Add name";this.C.type="button";document.body.appendChild(this.C);n(this.v,new S(new p(100,100),1));n(this.v,new S(new p(75,250),2));n(this.v,new S(new p(100,400),3));this.P=0;this.c=new R;this.a=new O(this.j);this.J=document.createElement("DIV");this.J.className="alert";this.J.innerHTML=0;L(this.J,new p(35,
110));N(this.J,new H(30,10));document.body.appendChild(this.J);this.K=document.createElement("DIV");this.K.className="alert";this.K.innerHTML=0;L(this.K,new p(10,260));N(this.K,new H(30,10));document.body.appendChild(this.K);this.L=document.createElement("DIV");this.L.className="alert";this.L.innerHTML=0;L(this.L,new p(35,420));N(this.L,new H(30,10));document.body.appendChild(this.L);var a=this;document.addEventListener("Enter letter",function(){a.a.O||(confirm("\u0425\u043e\u0442\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0432\u043e \u0446\u0435\u043b\u0435\u043a\u043e\u043c?")?
(a.I=document.createElement("DIV"),a.I.className="alert",a.I.innerHTML="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u0446\u0435\u043b\u0435\u043a\u043e\u043c",L(a.I,new p(200,500)),N(a.I,new H(300,25)),document.body.appendChild(a.I),a.A=K("INPUT"),L(a.A,new p(200,570)),N(a.A,new H(250,25)),a.A.className="button",a.A.type="text",document.body.appendChild(a.A),a.B=K("INPUT"),L(a.B,new p(460,570)),N(a.B,new H(75,27)),a.B.className="button",a.B.value="Add letter",a.B.type=
"button",a.B.onclick=k(a.aa,a,a.A.value),document.body.appendChild(a.B)):(a.D=document.createElement("DIV"),a.D.className="alert",a.D.innerHTML="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u0443\u043a\u0432\u0443",L(a.D,new p(200,500)),N(a.D,new H(300,25)),document.body.appendChild(a.D),a.i=K("INPUT"),L(a.i,new p(200,570)),N(a.i,new H(250,25)),a.i.className="button",a.i.type="text",document.body.appendChild(a.i),a.s=K("INPUT"),L(a.s,new p(460,570)),N(a.s,new H(75,27)),a.s.className="button",
a.s.value="Add letter",a.s.type="button",a.s.onclick=k(a.$,a,a.i.value),document.body.appendChild(a.s)))});document.addEventListener("Score",function(){a.J.innerHTML=a.a.T;a.K.innerHTML=a.a.U;a.L.innerHTML=a.a.V});document.addEventListener("Next Player",function(){U(a)});document.add
EventListener("Touch letter",function(){a.O()});document.addEventListener("Taped",function(b){document.body.removeChild(a.M);a.$(b.detail)});document.addEventListener("Winner",function(){var b=0;switch(a.g){case 1:b=a.a.T;
break;case 2:b=a.a.U;break;case 3:b=a.a.V}a.R=document.createElement("DIV");a.R.className="alert";a.R.innerHTML="<strong>\u0412\u042b\u0418\u0413\u0420\u0410\u041b </strong> this._players[this._movePlayer - 1]._name <strong> \u041d\u0430\u0431\u0440\u0430\u043d\u043e \u043e\u0447\u043a\u043e\u0432 </strong>"+b+"<strong>\u0412\u044b \u0431\u044b\u043b\u0438 \u0437\u0430\u043d\u0435\u0441\u0435\u043d\u044b \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u0435\u0439</strong>";
L(a.R,new p(230,0));N(a.R,new H(500,60));document.body.appendChild(a.R);document.body.removeChild(a.w)});this.b=K("DIV");N(this.b,new H(500,650));L(this.b,new p(855,0));this.b.className="history";this.b.innerHTML="HISTORY:";document.body.appendChild(this.b)};
d.O=function(){this.M=document.createElement("DIV");this.M.className="alert";this.M.innerHTML="<strong>\u041d\u0410\u0416\u041c\u0418 \u041d\u0410 \u041b\u042e\u0411\u0423\u042e \u0411\u0423\u041a\u0412\u0423 \u0412 \u0421\u041b\u041e\u0412\u0415 </strong>";L(this.M,new p(230,0));N(this.M,new H(500,60));document.body.appendChild(this.M)};function U(a){a.g+=1;3<a.g&&(a.g=1)}
d.aa=function(a){""==a&&(a=this.A.value);var b=this.S=!1;console.log("word = "+a);console.log("this._pole._word = "+this.a.j);if(a===this.a.j){b=!0;this.b.innerHTML+="\u0418\u0433\u0440\u043e\u043a: "+this.v[this.g-1].N+" \u043e\u0442\u0433\u0430\u0434\u0430\u043b c\u043b\u043e\u0432\u043e \u0446\u0435\u043b\u0435\u043a\u043e\u043c \u0438 \u0432\u044b\u0438\u0433\u0440\u0430\u043b \u0438\u0433\u0440\u0443. "+a;for(var c=0;c<this.a.j.length;c++)P(this.a,c)}document.body.removeChild(this.I);document.body.removeChild(this.A);
document.body.removeChild(this.B);b||(this.b.innerHTML+="\u0418\u0433\u0440\u043e\u043a: "+this.v[this.g-1].N+" \u043d\u0435 \u0441\u043c\u043e\u0433 \u043e\u0442\u0433\u0430\u0434\u0430\u0442\u044c \u0441\u043b\u043e\u0432\u043e \u0446\u0435\u043b\u0435\u043a\u043e\u043c. "+a,U(this))};
d.$=function(a){""==a&&(a=this.i.value);for(var b=this.S=!1,c=0;c<this.a.j.length;c++)this.a.j.charAt(c)==a&&(this.b.innerHTML+="\u0418\u0433\u0440\u043e\u043a: "+this.v[this.g-1].N+" \u043e\u0442\u0433\u0430\u0434\u0430\u043b \u0431\u0443\u043a\u0432\u0443 "+a+". ",P(this.a,c),b=!0);document.body.removeChild(this.D);document.body.removeChild(this.i);document.body.removeChild(this.s);b||(this.b.innerHTML+="\u0418\u0433\u0440\u043e\u043a: "+this.v[this.g-1].N+" \u0432\u0432\u0435\u043b \u0431\u0443\u043a\u0432\u0443, \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0435\u0442 \u0432 \u0441\u043b\u043e\u0432\u0435. ",
U(this))};
d.fa=function(){var a=this.v[this.P];a.N=this.m.value;a.b.innerHTML+=a.N;this.P++;3==this.P&&(document.body.removeChild(this.m),document.body.removeChild(this.u),document.body.removeChild(this.C),this.f.className="alert",this.f.innerHTML="\u0425\u043e\u0434\u0438\u0442 <strong>\u043f\u0435\u0440\u0432\u044b\u0439</strong> \u0438\u0433\u0440\u043e\u043a",L(this.f,new p(230,0)),N(this.f,new H(150,25)),this.w=K("INPUT"),L(this.w,new p(10,100)),N(this.w,new H(220,25)),this.w.className="button",this.w.type=
"button",this.w.value="\u041a\u0440\u0443\u0442\u0438\u0442\u044c",this.w.onclick=k(this.ea,this),document.body.appendChild(this.w));1==this.P&&(this.u.innerHTML="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u043b\u044f <strong>\u0432\u0442\u043e\u0440\u043e\u0433\u043e</strong> \u0438\u0433\u0440\u043e\u043a\u0430");2==this.P&&(this.u.innerHTML="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u043b\u044f <strong>\u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e</strong> \u0438\u0433\u0440\u043e\u043a\u0430")};
d.ea=function(){this.S&&(document.body.removeChild(this.D),document.body.removeChild(this.i),document.body.removeChild(this.s));this.S=!0;ka(this.a,this.g)};d.da=function(){this.j=this.o.value};d.ca=function(){this.Z=this.l.value};function V(){new T}var W=["Sample","start"],X=e;W[0]in X||!X.execScript||X.execScript("var "+W[0]);for(var Y;W.length&&(Y=W.shift());)W.length||void 0===V?X[Y]?X=X[Y]:X=X[Y]={}:X[Y]=V;})();
