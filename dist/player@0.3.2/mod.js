var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{AS:()=>o,Ec:()=>a,F_:()=>i,SM:()=>r,hM:()=>d});var n=function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{d(a.next(e))}catch(e){r(e)}}function s(e){try{d(a.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}d((a=a.apply(e,t||[])).next())}))};class a{constructor(){this.element=document.createElement("div"),this.rate=.5,this.element.classList.add("rate-bar"),this.element.addEventListener("click",(e=>{this.setValue(e.offsetX/this.element.offsetWidth)})),this.render()}render(){this.element.style.setProperty("--rate",this.rate.toString())}getValue(){return this.rate}setValue(e){isFinite(e)&&(e<0?e=0:e>1&&(e=1),this.rate=e,this.render())}}function i(e,t){return Math.exp(2*(e-.5)*Math.log(t))}function r(e,t){return Math.log(e)/Math.log(t)/2+.5}function o(e){isFinite(e)||(e=0);const t=Math.floor(e%3600/60).toString().padStart(2,"0")+":"+Math.floor(e%60).toString().padStart(2,"0");return e<=3600?t:Math.floor(e/3600).toString()+":"+t}const s=["autoplay","controls","crossorigin","loop","muted","poster","preload"],d=(e,t)=>n(void 0,void 0,void 0,(function*(){var d;const l=document.createElement("div"),c=document.createElement("video"),p=document.createElement("div"),u=document.createElement("div"),v=document.createElement("div"),m=document.createElement("button"),h=new a,y=document.createElement("div"),f=new a,L=document.createElement("div"),g=new a,E=document.createElement("div");function x(e){const{seekable:t}=c;for(let n=0;n<t.length;n++)if(t.start(n)<=e&&e<=t.end(n))return c.currentTime=e,void(y.textContent=`${o(c.currentTime)}/${o(c.duration)}`)}l.append(c),l.append(p),p.append(u),p.append(v),u.append(m),u.append(h.element),u.append(y),v.append(new Text("Speed")),v.append(f.element),v.append(L),v.append(new Text("Brightness")),v.append(g.element),v.append(E),p.classList.add("hide"),m.classList.add("show-icon"),m.classList.add("play"),h.setValue(0),y.textContent=`${o(0)}/${o(0)}`,L.textContent="1.0",E.textContent="1.0";const{src:k,time:w}=e.options;"string"==typeof k&&(c.src=t.context.urlToAbsURL(k,e)),"number"==typeof w&&isFinite(w)&&w>0&&x(w);for(const n of s){let a=null!==(d=e.options[n])&&void 0!==d?d:t.context.extractLastGlobalOption(n,"player");if(!0===a&&(a=""),"string"==typeof a)try{c.setAttribute(n,a)}catch(e){console.log(e)}}function b(){const e=i(g.getValue(),10);c.style.setProperty("--brightness",e.toString()),E.textContent=e.toFixed(1)}c.addEventListener("click",(()=>{p.classList.toggle("hide")})),m.addEventListener("click",(()=>n(void 0,void 0,void 0,(function*(){m.classList.contains("pushing")||(m.classList.add("pushing"),m.classList.contains("play")?yield c.play():c.pause(),m.classList.remove("pushing"))})))),h.element.addEventListener("click",(()=>{x(h.getValue()*c.duration)})),f.element.addEventListener("click",(()=>{c.playbackRate=Math.exp(2*(f.getValue()-.5)*Math.log(5))})),g.element.addEventListener("click",b),c.addEventListener("loadedmetadata",(()=>{y.textContent=`${o(c.currentTime)}/${o(c.duration)}`,l.classList.remove("loading")})),c.addEventListener("playing",(()=>{l.classList.remove("loading")})),c.addEventListener("waiting",(()=>{l.classList.add("loading")})),c.addEventListener("error",(()=>{l.classList.add("error")})),c.addEventListener("play",(()=>{m.classList.remove("play"),m.classList.add("pause")})),c.addEventListener("pause",(()=>{m.classList.add("play"),m.classList.remove("pause")})),c.addEventListener("ended",(()=>{m.classList.add("play"),m.classList.remove("pause")}));let M=0;return c.addEventListener("timeupdate",(()=>{const e=Date.now();e-M<500&&c.currentTime!==c.duration||(M=e,h.setValue(c.currentTime/c.duration),y.textContent=`${o(c.currentTime)}/${o(c.duration)}`)})),c.addEventListener("ratechange",(()=>{const e=c.playbackRate;f.setValue(r(e,5)),L.textContent=e.toFixed(1)})),m.addEventListener("keydown",(e=>"ArrowLeft"===e.key?(e.preventDefault(),void x(c.currentTime-10)):"ArrowRight"===e.key?(e.preventDefault(),void x(c.currentTime+10)):"ArrowUp"===e.key?(e.preventDefault(),g.setValue(r(i(g.getValue(),10)+.1,10)),void b()):"ArrowDown"===e.key?(e.preventDefault(),g.setValue(r(i(g.getValue(),10)-.1,10)),void b()):"["===e.key?(e.preventDefault(),void(c.playbackRate=Math.max(.2,c.playbackRate-.1))):"]"===e.key?(e.preventDefault(),void(c.playbackRate=Math.min(5,c.playbackRate+.1))):void 0)),c.append(yield t.compileInlineSTDN(e.children)),l}));var l=t.Ec,c=t.hM,p=t.AS,u=t.F_,v=t.SM;export{l as RateBar,c as player,p as prettyTime,u as rateToScale,v as scaleToRate};