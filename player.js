(function(){var d,e=this;function f(a,b,c){return a.call.apply(a.bind,arguments)}function g(a,b,c){if(!a)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,h);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function k(a,b,c){k=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:g;return k.apply(null,arguments)};var l=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function m(a,b){return a<b?-1:a>b?1:0};var aa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if("string"==typeof a)return"string"==typeof b&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function n(a,b){0<=aa(a,b)||a.push(b)};function p(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}p.prototype.clone=function(){return new p(this.x,this.y)};p.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};p.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};p.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var q;a:{var u=e.navigator;if(u){var v=u.userAgent;if(v){q=v;break a}}q=""};var ba=-1!=q.indexOf("Opera")||-1!=q.indexOf("OPR"),w=-1!=q.indexOf("Trident")||-1!=q.indexOf("MSIE"),ca=-1!=q.indexOf("Edge"),x=-1!=q.indexOf("Gecko")&&!(-1!=q.toLowerCase().indexOf("webkit")&&-1==q.indexOf("Edge"))&&!(-1!=q.indexOf("Trident")||-1!=q.indexOf("MSIE"))&&-1==q.indexOf("Edge"),da=-1!=q.toLowerCase().indexOf("webkit")&&-1==q.indexOf("Edge");function z(){var a=e.document;return a?a.documentMode:void 0}var A;
a:{var B="",C=function(){var a=q;if(x)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ca)return/Edge\/([\d\.]+)/.exec(a);if(w)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(da)return/WebKit\/(\S+)/.exec(a);if(ba)return/(?:Version)[ \/]?(\S+)/.exec(a)}();C&&(B=C?C[1]:"");if(w){var D=z();if(null!=D&&D>parseFloat(B)){A=String(D);break a}}A=B}var E={};
function F(a){if(!E[a]){for(var b=0,c=l(String(A)).split("."),h=l(String(a)).split("."),Z=Math.max(c.length,h.length),y=0;0==b&&y<Z;y++){var ea=c[y]||"",fa=h[y]||"",ga=RegExp("(\\d*)(\\D*)","g"),ha=RegExp("(\\d*)(\\D*)","g");do{var r=ga.exec(ea)||["","",""],t=ha.exec(fa)||["","",""];if(0==r[0].length&&0==t[0].length)break;b=m(0==r[1].length?0:parseInt(r[1],10),0==t[1].length?0:parseInt(t[1],10))||m(0==r[2].length,0==t[2].length)||m(r[2],t[2])}while(0==b)}E[a]=0<=b}}
var G=e.document,ia=G&&w?z()||("CSS1Compat"==G.compatMode?parseInt(A,10):5):void 0;function H(a,b){this.width=a;this.height=b}H.prototype.clone=function(){return new H(this.width,this.height)};H.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};H.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};H.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var I;if(!(I=!x&&!w)){var J;if(J=w)J=9<=Number(ia);I=J}I||x&&F("1.9.1");w&&F("9");function K(a){return document.createElement(a)};function L(a,b){var c,h;b instanceof p?(c=b.x,h=b.y):(c=b,h=void 0);a.style.left=M(c,!1);a.style.top=M(h,!1)}function N(a,b){var c;if(b instanceof H)c=b.height,b=b.width;else throw Error("missing height argument");a.style.width=M(b,!0);a.style.height=M(c,!0)}function M(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};function O(a){this.a=new Image(300,300);this.a.src="src/images/baraban.png";this.a.style.position="absolute";this.a.style.left="250px";this.a.style.top="150px";this.a.style.WebkitTransform="rotate("+this.b+"deg)";document.body.appendChild(this.a);this.c=new Image(50,50);this.c.src="src/images/arrowUp.png";this.c.style.position="absolute";this.c.style.left="375px";this.c.style.top="450px";document.body.appendChild(this.c);this.f=new Image(200,200);this.f.src="src/images/leader.png";
this.f.style.position="absolute";this.f.style.left="550px";this.f.style.top="350px";document.body.appendChild(this.f);this.m=a;ja(this,this.m);this.b=0;this.i=3;var b=this;this.S=this.W=this.V=this.U=0;this.j=this.O=!1;this.g=0;this.o=this.m.length;a=new Audio;a.src="src/music/background.mp3";a.autoplay=!0;a.repeat=!0;document.onkeydown=function(a){80==a.keyCode&&b.j&&document.dispatchEvent(new Event("Rotated"))}}
O.prototype.s=function(a){this.O&&(P(this,a),this.O=!1,document.dispatchEvent(new CustomEvent("Taped",{detail:this.m.charAt(a)})))};function ja(a,b){a.h=document.createElement("div");L(a.h,new p(600,300));for(var c=0;c<b.length;c++){var h=document.createElement("div");h.className="letter";h.innerHTML="<strong>_</strong>";h.onclick=k(a.s,a,c);L(h,new p(600+40*c,300));a.h.appendChild(h)}document.body.appendChild(a.h)}
function P(a,b){"<strong>_</strong>"==a.h.childNodes[b].innerHTML&&(a.S+=1,--a.o,a.h.childNodes[b].innerHTML="<strong>"+a.m.charAt(b)+"</strong>");1==a.l?a.U=a.g:2==a.l?a.V=a.g:3==a.l&&(a.W="[]");document.dispatchEvent(new Event("Score"));3==a.S&&(a.S=0,document.dispatchEvent(new Event("Two boxes")));0==a.o&&document.dispatchEvent(new Event("Winner"))}
function Q(a,b){switch((a.b-360*(a.b/360|0))/22.5|0){case 0:b+=250;break;case 1:b+=350;break;case 2:b+=500;break;case 3:b*=2;break;case 4:b+=150;break;case 5:b+=1E4;break;case 6:for(var c=0;10>c;c++)alert("\u0410\u0410\u0410\u0412\u0422\u041e\u041c\u041e\u0411\u0418\u041b\u042c!");break;case 7:b+=300;break;case 8:b-=100;break;case 9:b+=100;break;case 10:b+=200;break;case 11:document.dispatchEvent(new Event("Next Player"));b+=0;break;case 12:b+=300;break;case 13:alert("\u0412\u042b \u0411\u0410\u041d\u041a\u0420\u041e\u0422!");
document.dispatchEvent(new Event("Next Player"));break;case 14:b+=50;break;case 15:document.dispatchEvent(new Event("Touch letter")),a.O=!0}return b}
function ka(a,b){a.j=!0;a.l=b;var c=!1;document.addEventListener("Rotated",function(){c||(1==b?a.g=Q(a,a.U):2==b?a.g=Q(a,a.V)/2|0:3==b&&(a.g=Q(a,a.W)),clearInterval(h),c=!0,document.dispatchEvent(new Event("Enter letter")))});a.i=190*Math.random()+10;var h=setInterval(function(){a.b+=a.i;--a.i;a.a.style.WebkitTransform="rotate("+a.b+"deg)";0>=a.i&&(document.dispatchEvent(new Event("Rotated")),a.j=!1)},1E3/30)};function R(){this.f=document.createElement("INPUT");this.f.className="rules";this.f.type="button";this.f.value="Rules";this.f.style.padding="15px";this.f.style.borderRadius="10px";L(this.f,new p(770,0));N(this.f,new H(75,45));this.f.addEventListener("click",k(this.a,this));document.body.appendChild(this.f)}
R.prototype.a=function(){document.body.removeChild(this.f);var a=document.createElement("DIV");a.className="rules";L(a,new p(770,0));N(a,new H(250,100));a.innerHTML="<strong>                 \u041f\u0440\u0430\u0432\u0438\u043b\u0430                 </strong>1. \u0411\u0430\u0440\u0430\u0431\u0430\u043d \u043a\u0440\u0443\u0442\u0438\u0442\u044c\u0441\u044f \u043f\u043e \u043e\u0447\u0435\u0440\u0435\u0434\u0438 2. \u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u044b 3. \u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438 \u043f\u043e\u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u043f\u044b\u0442\u0430\u044e\u0442\u0441\u044f \u043e\u0442\u0433\u0430\u0434\u0430\u0442\u044c \u0437\u0430\u0433\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 4. \u0412\u044b\u0439\u0433\u0440\u0430\u0432\u0448\u0438\u0439 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u0437\u0430\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u0435\u0439";document.body.appendChild(a)};function S(a,b){this.c=a;this.f=b;this.N=null;this.a=K("DIV");this.a.id="player"+this.f;L(this.a,this.c);N(this.a,new H(76,76));this.a.style.backgroundColor="#a21f54";this.a.style.position="absolute";document.body.appendChild(this.a);var c=K("INPUT");c.className="add_photo";c.type="submit";c.value="Add Photo";L(c,new p(this.c.x,this.c.y+76));document.body.appendChild(c);c.style.position="absolute";this.b=document.createElement("DIV");this.b.className="hate";this.b.innerHTML="<strong>MTV</strong>";
L(this.b,new p(this.c.x+5,this.c.y-25));document.body.appendChild(this.b)};function T(){this.v=this.g=null;this.m="\u041a\u043e\u0448\u043a\u0430";this.Y="\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0436\u0438\u0432\u043e\u0442\u043d\u043e\u0435";this.B=this.j=null;this.F=[];this.s=1;this.A=K("INPUT");this.A.style.position="absolute";L(this.A,new p(document.documentElement.clientWidth/2-174,document.documentElement.clientHeight/2-66));N(this.A,new H(348,132));this.A.className="enter";this.A.type="button";this.A.style.background="url(src/images/Start_Button.png) repeat-y #fc0";
document.body.appendChild(this.A);this.A.addEventListener("click",k(this.aa,this));var a=document.createElement("DIV");a.id="newDiv";L(a,new p(14,document.documentElement.clientHeight-30));N(a,new H(16,16));a.style.position="absolute";a.href="http://google.com/";a.addEventListener("click",k(this.X,this,a));a.style.background="url(src/images/facebook.jpg) repeat-y #fc0";document.body.appendChild(a);a=document.createElement("DIV");a.id="newDiv2";L(a,new p(34,document.documentElement.clientHeight-
30));N(a,new H(16,16));a.style.position="absolute";a.href="";a.addEventListener("click",k(this.X,this,a));a.style.background="url(src/images/twitter.jpg) repeat #fc0";document.body.appendChild(a);a=document.createElement("DIV");a.id="newDiv2";L(a,new p(54,document.documentElement.clientHeight-30));N(a,new H(16,16));a.style.position="absolute";a.href="eto-prosto-bitaya-link-ne-obraschaite-vnimaniya";a.addEventListener("click",k(this.X,this,a));a.style.background="url(src/images/vkontakte.png) repeat #fc0";
document.body.appendChild(a);this.H=document.createElement("DIV");this.H.className="alert";this.H.innerHTML="<strong>\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043b\u044f \u043e\u0442\u0433\u0430\u0434\u044b\u0432\u0430\u043d\u0438\u044f. </strong> \u041c\u0430\u043a\u0441. \u0434\u043b\u0438\u043d\u0430 \u0441\u043b\u043e\u0432\u0430 - 15 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f - 3 \u0441\u0438\u043c\u0432\u043e\u043b. \u0421\u043b\u043e\u0432\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0440\u0443\u0441\u0441\u043a\u0438\u0445 \u0431\u0443\u043a\u0432.";
L(this.H,new p(230,0));N(this.H,new H(500,60));document.body.appendChild(this.H);this.I=document.createElement("DIV");this.I.className="alert";this.I.innerHTML="<strong>\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0443 \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430. </strong> \u041c\u0430\u043a\u0441. \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 - 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f - 30 \u0441\u0438\u043c\u0432\u043e\u043b. \u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0440\u0443\u0441\u0441\u043a\u0438\u0445 \u0431\u0443\u043a\u0432.";
L(this.I,new p(770,0));N(this.I,new H(500,60));document.body.appendChild(this.I);this.l=K("INPUT");this.l.style.position="absolute";L(this.l,new p(250,100));N(this.l,new H(350,25));this.l.className="enter";this.l.type="text";this.l.value=this.m;this.l.onchange=k(this.ca,this);document.body.appendChild(this.l);this.i=K("INPUT");this.i.style.position="absolute";L(this.i,new p(870,100));N(this.i,new H(250,25));this.i.className="enter";this.i.type="text";this.i.value=this.Y;this.i.onchange=k(this.ba,
this);document.body.appendChild(this.i);this.u=document.createElement("INPUT");this.u.className="rules";this.u.type="button";this.u.value="Record Table";this.u.style.padding="15px";this.u.style.borderRadius="4px";this.u.style.border="8px solid #ff2f00";L(this.u,new p(document.documentElement.clientWidth/2-174,document.documentElement.clientHeight/2+70));N(this.u,new H(348,60));document.body.appendChild(this.u);this.T=!1}d=T.prototype;d.X=function(a){document.location.href=a.href};
d.aa=function(){document.body.removeChild(this.I);document.body.removeChild(this.H);document.body.removeChild(this.u);document.body.removeChild(this.l);document.body.removeChild(this.i);document.body.removeChild(this.A);this.g=document.createElement("DIV");this.g.className="alert";this.g.innerHTML="<strong>\u041f\u0440\u0430\u0432\u0438\u043b\u0430!</strong> \u041c\u0430\u043a\u0441. \u0434\u043b\u0438\u043d\u0430 \u0438\u043c\u0435\u043d\u0438 - 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f - 1 \u0441\u0438\u043c\u0432\u043e\u043b. \u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0440\u0443\u0441\u0441\u043a\u0438\u0445 \u0431\u0443\u043a\u0432 \u0438 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u043a\u0432\u044b.";
L(this.g,new p(230,0));N(this.g,new H(500,60));document.body.appendChild(this.g);this.v=document.createElement("DIV");this.v.className="alert";this.v.innerHTML="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u043b\u044f <strong>\u043f\u0435\u0440\u0432\u043e\u0433\u043e</strong> \u0438\u0433\u0440\u043e\u043a\u0430";L(this.v,new p(200,500));N(this.v,new H(300,25));document.body.appendChild(this.v);this.j=K("INPUT");this.j.style.position="absolute";L(this.j,new p(200,570));N(this.j,
new H(250,25));this.j.className="enter";this.j.type="text";this.j.onchange=k(this.ea,this);document.body.appendChild(this.j);this.B=K("INPUT");this.B.style.position="absolute";L(this.B,new p(460,570));N(this.B,new H(75,27));this.B.className="enter";this.B.value="Add name";this.B.type="button";document.body.appendChild(this.B);n(this.F,new S(new p(100,100),1));n(this.F,new S(new p(75,250),2));n(this.F,new S(new p(100,400),3));this.P=0;this.f=new R;this.a=new O(this.m);this.K=document.createElement("DIV");
this.K.className="alert";this.K.innerHTML=0;L(this.K,new p(35,110));N(this.K,new H(30,10));document.body.appendChild(this.K);this.L=document.createElement("DIV");this.L.className="alert";this.L.innerHTML=0;L(this.L,new p(10,260));N(this.L,new H(30,10));document.body.appendChild(this.L);this.M=document.createElement("DIV");this.M.className="alert";this.M.innerHTML=0;L(this.M,new p(35,420));N(this.M,new H(30,10));document.body.appendChild(this.M);var a=this;document.addEventListener("Enter letter",
function(){a.a.O||(confirm("\u0425\u043e\u0442\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0432\u043e \u0446\u0435\u043b\u0435\u043a\u043e\u043c?")?(a.J=document.createElement("DIV"),a.J.className="alert",a.J.innerHTML="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u0446\u0435\u043b\u0435\u043a\u043e\u043c",L(a.J,new p(200,500)),N(a.J,new H(300,25)),document.body.appendChild(a.J),a.w=K("INPUT"),a.w.style.position="absolute",L(a.w,new p(200,
570)),N(a.w,new H(250,25)),a.w.className="enter",a.w.type="text",document.body.appendChild(a.w),a.D=K("INPUT"),a.D.className="enter",L(a.D,new p(460,570)),N(a.D,new H(75,27)),a.D.value="Add letter",a.D.type="button",a.D.onclick=k(a.$,a,a.w.value),document.body.appendChild(a.D)):(a.C=document.createElement("DIV"),a.C.style.position="absolute",a.C.className="alert",a.C.innerHTML="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u0443\u043a\u0432\u0443",L(a.C,new p(200,500)),N(a.C,new H(300,25)),document.body.appendChild(a.C),
a.h=K("INPUT"),a.h.style.position="absolute",L(a.h,new p(200,570)),N(a.h,new H(250,25)),a.h.className="button",a.h.type="text",document.body.appendChild(a.h),a.o=K("INPUT"),a.o.style.position="absolute",L(a.o,new p(460,570)),N(a.o,new H(75,27)),a.o.className="button",a.o.value="Add letter",a.o.type="button",a.o.onclick=k(a.Z,a,a.h.value),document.body.appendChild(a.o)))});document.addEventListener("Score",function(){a.K.innerHTML=a.a.U;a.L.innerHTML=a.a.V;a.M.innerHTML=a.a.W});document.addEventListener("Next Player",
function(){U(a)});document.addEventListener("Touch letter",function(){a.O()});document.addEventListener("Two boxes",function(){var a="\u0422\u0440\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043e\u0442\u0433\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u043a\u0432\u044b, \u0434\u0430\u044e\u0442 \u0432\u0430\u043c \u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u0434\u0432\u0435 \u0448\u043a\u0430\u0442\u0443\u043b\u043a\u0438! \u041a\u0430\u043a\u0443\u044e \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435, ",
a=1>=2*Math.random()+0?a+"\u041f\u0415\u0420\u0412\u0423\u042e?":a+"\u0412\u0422\u041e\u0420\u0423\u042e?";confirm(a);alert("\u0412\u044b \u043d\u0435 \u043e\u0442\u0433\u0430\u0434\u0430\u043b\u0438!")});document.addEventListener("Taped",function(b){document.body.removeChild(a.G);a.Z(b.detail)});document.addEventListener("Winner",function(){var b=0;switch(a.s){case 1:b=a.a.U;break;case 2:b=a.a.V;break;case 3:b=a.a.W}a.R=document.createElement("DIV");a.R.className="alert";a.R.innerHTML="<strong>\u0412\u042b\u0418\u0413\u0420\u0410\u041b </strong> this._players[this._movePlayer - 1]._name <strong> \u041d\u0430\u0431\u0440\u0430\u043d\u043e \u043e\u0447\u043a\u043e\u0432 </strong>"+
b+"<strong>\u0412\u044b \u0431\u044b\u043b\u0438 \u0437\u0430\u043d\u0435\u0441\u0435\u043d\u044b \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u0435\u0439</strong>";L(a.R,new p(230,0));N(a.R,new H(500,60));document.body.appendChild(a.R);document.body.removeChild(a.c)});this.b=K("DIV");N(this.b,new H(500,650));L(this.b,new p(855,0));this.b.className="history";this.b.innerHTML="HISTORY:";document.body.appendChild(this.b)};
d.O=function(){this.G=document.createElement("DIV");this.G.style.position="absolute";this.G.className="alert";this.G.innerHTML="<strong>\u041d\u0410\u0416\u041c\u0418 \u041d\u0410 \u041b\u042e\u0411\u0423\u042e \u0411\u0423\u041a\u0412\u0423 \u0412 \u0421\u041b\u041e\u0412\u0415 </strong>";L(this.G,new p(230,0));N(this.G,new H(500,60));document.body.appendChild(this.G)};function U(a){a.a.S=0;a.s+=1;3<a.s&&(a.s=1)}
d.$=function(a){""==a&&(a=this.w.value);var b=this.T=!1;console.log("word = "+a);console.log("this._pole._word = "+this.a.m);if(a===this.a.m){b=!0;this.b.innerHTML+="\u0418\u0433\u0440\u043e\u043a: "+this.F[this.s-1].N+" \u043e\u0442\u0433\u0430\u0434\u0430\u043b c\u043b\u043e\u0432\u043e \u0446\u0435\u043b\u0435\u043a\u043e\u043c \u0438 \u0432\u044b\u0438\u0433\u0440\u0430\u043b \u0438\u0433\u0440\u0443. "+a;for(var c=0;c<this.a.m.length;c++)P(this.a,c)}document.body.removeChild(this.J);document.body.removeChild(this.w);
document.body.removeChild(this.D);b||(this.b.innerHTML+="\u0418\u0433\u0440\u043e\u043a: "+this.F[this.s-1].N+" \u043d\u0435 \u0441\u043c\u043e\u0433 \u043e\u0442\u0433\u0430\u0434\u0430\u0442\u044c \u0441\u043b\u043e\u0432\u043e \u0446\u0435\u043b\u0435\u043a\u043e\u043c. "+a,U(this))};
d.Z=function(a){""==a&&(a=this.h.value);for(var b=this.T=!1,c=0;c<this.a.m.length;c++)this.a.m.charAt(c)==a&&(this.b.innerHTML+="\u0418\u0433\u0440\u043e\u043a: "+this.F[this.s-1].N+" \u043e\u0442\u0433\u0430\u0434\u0430\u043b \u0431\u0443\u043a\u0432\u0443 "+a+". ",P(this.a,c),b=!0);document.body.removeChild(this.C);document.body.removeChild(this.h);document.body.removeChild(this.o);b||(this.b.innerHTML+="\u0418\u0433\u0440\u043e\u043a: "+this.F[this.s-1].N+" \u0432\u0432\u0435\u043b \u0431\u0443\u043a\u0432\u0443, \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0435\u0442 \u0432 \u0441\u043b\u043e\u0432\u0435. \n",
U(this))};
d.ea=function(){var a=this.F[this.P];a.N=this.j.value;a.b.innerHTML+=a.N;this.P++;3==this.P&&(document.body.removeChild(this.j),document.body.removeChild(this.v),document.body.removeChild(this.B),this.g.className="alert",this.g.innerHTML="\u0425\u043e\u0434\u0438\u0442 <strong>\u043f\u0435\u0440\u0432\u044b\u0439</strong> \u0438\u0433\u0440\u043e\u043a",L(this.g,new p(230,0)),N(this.g,new H(150,25)),this.c=K("INPUT"),this.c.style.position="absolute",L(this.c,new p(600,200)),N(this.c,new H(200,65)),
this.c.className="enter",this.c.style.color="rgb(50, 220, 90)",this.c.type="button",this.c.value="\u041a\u0440\u0443\u0442\u0438\u0442\u044c \u0431\u0430\u0440\u0430\u0431\u0430\u043d",this.c.style.borderRadius="2em 5em/4em 6em",this.c.onclick=k(this.da,this),document.body.appendChild(this.c));1==this.P&&(this.v.innerHTML="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u043b\u044f <strong>\u0432\u0442\u043e\u0440\u043e\u0433\u043e</strong> \u0438\u0433\u0440\u043e\u043a\u0430");
2==this.P&&(this.v.innerHTML="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u043b\u044f <strong>\u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e</strong> \u0438\u0433\u0440\u043e\u043a\u0430")};d.da=function(){this.T&&(document.body.removeChild(this.C),document.body.removeChild(this.h),document.body.removeChild(this.o));this.T=!0;ka(this.a,this.s)};d.ca=function(){this.m=this.l.value};d.ba=function(){this.Y=this.i.value};function V(){new T}var W=["Sample","start"],X=e;W[0]in X||!X.execScript||X.execScript("var "+W[0]);for(var Y;W.length&&(Y=W.shift());)W.length||void 0===V?X[Y]?X=X[Y]:X=X[Y]={}:X[Y]=V;})();
