var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e){const t=Number(getComputedStyle(e).fontSize.slice(0,-2));let n=1/t,i=1/t;const o=e.closest("foreignObject");if(null!==o){const{height:e,width:t}=o.getBoundingClientRect();n*=o.height.animVal.value/e,i*=o.width.animVal.value/t}return{heightScale:n,widthScale:i}}e.d(t,{i0:()=>v,IQ:()=>y,h0:()=>L,Md:()=>b,$F:()=>a,_8:()=>c});function i(e,t,n){const i=new MutationObserver(a),o=window.setInterval(a,1e3);let r,d=!1;function a(){return n=this,r=void 0,c=function*(){t.isConnected&&!d&&(d=!0,i.disconnect(),clearInterval(o),yield e())},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{d(c.next(e))}catch(e){t(e)}}function o(e){try{d(c.throw(e))}catch(e){t(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,o)}d((c=c.apply(n,r||[])).next())}));var n,r,a,c}r=void 0===n?document.body.querySelector(":scope>.lr-struct>main>article"):n instanceof ShadowRoot?n.querySelector(":host>div"):n,null===r&&(r=document.body),i.observe(r,{childList:!0,subtree:!0})}var o=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function d(e){try{c(i.next(e))}catch(e){r(e)}}function a(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(d,a)}c((i=i.apply(e,t||[])).next())}))};const r=a("210mm"),d=a("297mm");function a(e){return"string"!=typeof e?NaN:e.endsWith("px")?Number(e.slice(0,-2)):e.endsWith("cm")?96*Number(e.slice(0,-2))/2.54:e.endsWith("mm")?96*Number(e.slice(0,-2))/25.4:e.endsWith("in")?96*Number(e.slice(0,-2)):e.endsWith("pc")?16*Number(e.slice(0,-2)):e.endsWith("pt")?4*Number(e.slice(0,-2))/3:NaN}function c(e){if("string"!=typeof e)return{width:r,height:d};if(e.endsWith(" landscape")){const{width:t,height:n}=c(e.slice(0,-10).trim());return{width:n,height:t}}if(e.endsWith(" portrait"))return c(e.slice(0,-9).trim());if("A5"===e)return{width:a("148mm"),height:a("210mm")};if("A4"===e)return{width:a("210mm"),height:a("297mm")};if("A3"===e)return{width:a("297mm"),height:a("420mm")};if("B5"===e)return{width:a("176mm"),height:a("250mm")};if("B4"===e)return{width:a("250mm"),height:a("353mm")};if("JIS-B5"===e)return{width:a("182mm"),height:a("257mm")};if("JIS-B4"===e)return{width:a("257mm"),height:a("364mm")};if("letter"===e)return{width:a("8.5in"),height:a("11in")};if("legal"===e)return{width:a("8.5in"),height:a("14in")};if("ledger"===e)return{width:a("11in"),height:a("17in")};const[t,n]=e.trim().split(/\s+/,2).map(a);return isFinite(t)&&t>0?void 0===n?{width:t,height:t}:isFinite(n)&&n>0?{width:t,height:n}:{width:t,height:d}:isFinite(n)&&n>0?{width:r,height:n}:{width:r,height:d}}let l;function s(e){if("string"!=typeof e)return{marginTop:".4in",marginRight:".4in",marginBottom:".4in",marginLeft:".4in"};const t=e.trim().split(/\s+/,4);return 1===t.length?{marginTop:t[0],marginRight:t[0],marginBottom:t[0],marginLeft:t[0]}:2===t.length?{marginTop:t[0],marginRight:t[1],marginBottom:t[0],marginLeft:t[1]}:3===t.length?{marginTop:t[0],marginRight:t[1],marginBottom:t[2],marginLeft:t[1]}:{marginTop:t[0],marginRight:t[1],marginBottom:t[2],marginLeft:t[3]}}function g(e){if("number"==typeof e&&isFinite(e)&&e%1==0&&e>=0)return{leftHeaderLevel:e,rightHeaderLevel:e};if("string"!=typeof e)return{leftHeaderLevel:0,rightHeaderLevel:1};const[t,n]=e.trim().split(/\s+/,2).map(Number);return isFinite(t)&&t%1==0&&t>=0?void 0===n?{leftHeaderLevel:t,rightHeaderLevel:t}:isFinite(n)&&n%1==0&&n>=0?{leftHeaderLevel:t,rightHeaderLevel:n}:{leftHeaderLevel:t,rightHeaderLevel:1}:isFinite(n)&&n%1==0&&n>=0?{leftHeaderLevel:0,rightHeaderLevel:n}:{leftHeaderLevel:0,rightHeaderLevel:1}}function m(e){const t=[];for(const n of e.headings){const i=e.unitOrLineToPosition.get(n.unit);if(void 0===i||0===i.length)continue;const o=i[0];if("number"!=typeof o)continue;const r=t[o];void 0!==r?r.push(n):t[o]=[n]}return t}function h(e,t,n,i,o){const r=e%2==0,d=document.createElementNS("http://www.w3.org/2000/svg","svg"),a=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),c=document.createElement("div"),l=document.createElement("header"),s=document.createElement("main"),g=document.createElement("footer"),m=document.createElement("div"),h=document.createElement("div"),u=document.createElement("span"),f=document.createElement("span");d.append(a),a.append(c),c.append(l),c.append(s),c.append(g),l.append(m),g.append(h),m.append(u),m.append(f),d.setAttribute("viewBox",`0 0 ${n.width} ${n.height}`),a.setAttribute("width","100%"),a.setAttribute("height","100%"),c.style.fontSize="16px";const p=`calc(${i.marginLeft} + ${o})`;return c.style.marginLeft=r?i.marginRight:p,c.style.marginRight=r?p:i.marginRight,l.style.height=i.marginTop,s.style.display="flow-root",s.style.height=`calc(${n.height}px - ${i.marginTop} - ${i.marginBottom})`,g.style.height=i.marginBottom,h.textContent=t.toString(),{element:d,headingIndexEle:u,headingContentEle:f,main:s,indexEle:h,index:e,frontIndex:t}}function u(e,t,n,i,o){if(0===t&&n===1/0)return;void 0===o&&(o=e.querySelectorAll(".breakable>*, .break"));const r=o[t-1],d=o[n-1];void 0!==r&&(i.dom.removeBefore(r,e),r.remove()),void 0!==d&&i.dom.removeAfter(d,e)}function f(e,t,n,i,r){return o(this,void 0,void 0,(function*(){const o=(yield r.compileSTDN([[e]])).children[0];u(o,n,i,r),t.append(o)}))}function p(e,t,n,i,r,d){return o(this,void 0,void 0,(function*(){const o=t.cloneNode(!0),a=o.querySelectorAll(".breakable>*, .break");if(u(o,r,1/0,d,a),n.append(o),o.getBoundingClientRect().bottom<=n.getBoundingClientRect().bottom){o.remove();for(let t=r;t<a.length;t++)if(a[t].classList.contains("break"))return yield f(e,n,r,t+1,d),t+1;return u(t,r,1/0,d),void n.append(t)}let c=a.length;for(let e=r;e<a.length;e++)if(a[e].classList.contains("break")){c=e+1;break}for(let t=c;t>r;t--)if(d.dom.removeAfter(a[t-1],o),!(o.getBoundingClientRect().bottom>n.getBoundingClientRect().bottom))return o.remove(),yield f(e,n,r,t,d),t;if(o.remove(),i)return r;u(t,r,1/0,d),n.append(t)}))}const v=new Map,b=(e,t)=>o(void 0,void 0,void 0,(function*(){const n=document.createElement("div");let r,d=v.get(t);if(void 0!==d)return n;if(r=void 0!==t.context.root?t.context.root.querySelector(":host>div"):document.body.querySelector(":scope>.lr-struct>main>article"),null===r)return n;const a=r;v.set(t,d=function(e,t){const n=new Map,i=new Map;return{binging:(d=e.binging,"number"==typeof d?`${d}px`:"string"==typeof d?d:"0px"),breakLevel:(o=e["right-level"],r=e["break-level"],("number"!=typeof o||!isFinite(o)||o%1!=0||o<0)&&(o=0),("number"!=typeof r||!isFinite(r)||r%1!=0||r<o)&&(r=o),{rightLevel:o,breakLevel:r}),elementToPage:n,headerLevel:g(e["header-level"]),lineIndexToHeadings:m(t),margin:s(e.margin),pagedListeners:[],pageIndexToHeadings:[],pages:[],size:c(e.size),unitOrLineToPage:i};var o,r,d}(e.options,t.context)),function({width:e,height:t},n){if(void 0!==n)return;void 0===l&&(l=document.createElement("style"));const i=`@page {\n    margin: 0;\n    size: ${e}px ${t}px;\n}\n\nbody>.lr-struct>main>article {\n    max-width: ${e}px;\n}`;l.textContent!==i&&(l.textContent=i),document.head.append(l)}(d.size,t.context.root);const u=d,f="number"==typeof(b=e.options["break-delay"])&&isFinite(b)&&b>=0?1e3*b:1e3;var b;return i((()=>o(void 0,void 0,void 0,(function*(){yield new Promise((e=>setTimeout(e,f))),yield function(e,t,n,i){return o(this,void 0,void 0,(function*(){t.innerHTML="";let r=1,d=1,a=h(r,d,n.size,n.margin,n.binging);n.pages.push(a),t.append(a.element);let c=!1;function l(){n.pages.push(a=h(++r,++d,n.size,n.margin,n.binging)),t.append(a.element),c=!1}for(let t=0;t<e.length;t++){const o=e[t],s=n.lineIndexToHeadings[t];let g=1/0;if(void 0!==s&&s.length>0&&(g=Math.max(...s.map((e=>e.index.length)))),o.children.length>0){const e=o.children[0];if(e.classList.contains("break")){(g<=n.breakLevel.rightLevel||e.classList.contains("right"))&&r%2==1&&l();const t=i.context.idToIndexInfo[e.id];if(void 0!==t&&"break"===t.unit.tag){const{index:e}=t.unit.options;"number"==typeof e&&isFinite(e)&&e%1==0&&e>=1&&(d=e-1)}l()}else g<=n.breakLevel.breakLevel&&(c&&l(),g<=n.breakLevel.rightLevel&&r%2==0&&l())}if(1===o.children.length&&1===o.childNodes.length){const e=i.context.idToIndexInfo[o.children[0].id];if(void 0!==e){let t=0;for(;;){const n=yield p(e.unit,o,a.main,c,t,i);if(void 0===n){!c&&o.childNodes.length>0&&o.getBoundingClientRect().height>0&&(c=!0);break}t=n,l()}continue}}a.main.append(o),!c||o.getBoundingClientRect().bottom<=a.main.getBoundingClientRect().bottom||(l(),a.main.append(o),o.childNodes.length>0&&o.getBoundingClientRect().height>0&&(c=!0))}!function(e){for(const t of e.pages){const n=document.createTreeWalker(t.main,NodeFilter.SHOW_ELEMENT);for(;;){const i=n.nextNode();if(!(i instanceof Element))break;e.elementToPage.set(i,t)}}}(n),function(e,t){t.unitOrLineToElements.forEach(((t,n)=>{if(void 0===t||0===t.length)return;let i,o=1/0;for(const n of t){const t=e.elementToPage.get(n);void 0!==t&&t.index<o&&(o=t.index,i=t)}e.unitOrLineToPage.set(n,i)}))}(n,i),function(e,t){for(const n of t.headings){const t=e.unitOrLineToPage.get(n.unit);if(void 0===t)continue;const i=e.pageIndexToHeadings[t.index];void 0!==i?i.push(n):e.pageIndexToHeadings[t.index]=[n]}}(n,i.context),yield function(e,t){return o(this,void 0,void 0,(function*(){const n=[t.context.titleInfo];for(const i of e.pages){const{headingIndexEle:o,headingContentEle:r,index:d}=i,a=e.pageIndexToHeadings[d];if(void 0!==a)for(const e of a){for(let t=e.index.length+1;t<n.length;t++)n[t]=void 0;n[e.index.length]=e}const c=d%2==0?e.headerLevel.leftHeaderLevel:e.headerLevel.rightHeaderLevel,l=n[c];if(void 0===l)continue;c>0&&o.append(l.index.join("."));const{abbr:s}=l.unit.options;"string"==typeof s?r.append(s):"object"==typeof s?r.append(yield t.compileUnit(s)):r.append(yield t.compileLine(t.base.stdnToInlinePlainStringLine(l.unit.children)))}}))}(n,i)}))}(Array.from(a.children),a,u,t);for(const e of u.pagedListeners)yield e();u.pagedListeners=[],void 0!==t.context.root&&t.context.root.dispatchEvent(new Event("adjust",{bubbles:!0,composed:!0}))}))),n,a),n})),y=(e,t)=>o(void 0,void 0,void 0,(function*(){var i;const r=document.createElement("div"),d=v.get(t);if(void 0===d)return r;r.classList.add("breakable");const a="number"==typeof(c=null!==(i=e.options["dot-gap"])&&void 0!==i?i:t.context.extractLastGlobalOption("dot-gap","contents"))&&isFinite(c)&&c>0?c:1;var c;for(const{unit:e,index:i,id:c}of t.context.headings){const l=document.createElement("div"),s=document.createElement("span"),g=document.createElement("span"),m=document.createElement("div"),h=document.createElement("a");l.classList.add(`level${i.length}`),h.href=`#${encodeURIComponent(c)}`,r.append(l),l.append(s),l.append(g),l.append(m),m.append(h),s.append(i.join(".")),g.append(yield t.compileLine(t.base.stdnToInlinePlainStringLine(e.children))),d.pagedListeners.push((()=>o(void 0,void 0,void 0,(function*(){const t=d.unitOrLineToPage.get(e);void 0!==t&&(h.textContent=t.frontIndex.toString());const{widthScale:i}=n(m);if(!isFinite(i))return;let{left:o}=l.getBoundingClientRect();const{top:r,left:c}=h.getBoundingClientRect();for(const{right:e,bottom:t}of g.getClientRects())t>=r&&e>o&&(o=e);if(c<=o)return;const s=Math.floor((c-o)*i/a);for(let e=0;e<s;e++){const e=document.createElement("div");e.style.width=`${a}em`,h.before(e)}}))))}return r})),L=(e,t)=>o(void 0,void 0,void 0,(function*(){const n=document.createElement("h1");return n.append(yield t.compileSTDN(e.children)),n}));var x=t.i0,w=t.IQ,E=t.h0,T=t.Md,S=t.$F,B=t._8;export{x as compilerToEnv,w as contents,E as h0,T as page,S as parseLength,B as parseSize};