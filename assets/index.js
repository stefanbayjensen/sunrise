(()=>{var t={67:()=>{"development"===window.Shopify.theme.role&&(new EventSource("/hot-reload").onmessage=()=>{setTimeout((()=>{window.app.mount()}),600)})}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}(()=>{"use strict";e(67);var t=function(t){if("object"!=typeof(n=t)||Array.isArray(n))throw"state should be an object";var n},n=function(t,n,e,r){return(o=t,o.reduce((function(t,n,e){return t.indexOf(n)>-1?t:t.concat(n)}),[])).reduce((function(t,e){return t.concat(n[e]||[])}),[]).map((function(t){return t(e,r)}));var o};function r(e){void 0===e&&(e={});var r={};return{getState:function(){return Object.assign({},e)},hydrate:function(o){return t(o),Object.assign(e,o),function(){var t=["*"].concat(Object.keys(o));n(t,r,e)}},on:function(t,n){return(t=[].concat(t)).map((function(t){return r[t]=(r[t]||[]).concat(n)})),function(){return t.map((function(t){return r[t].splice(r[t].indexOf(n),1)}))}},emit:function(o,i,c){var u=("*"===o?[]:["*"]).concat(o);(i="function"==typeof i?i(e):i)&&(t(i),Object.assign(e,i),u=u.concat(Object.keys(i))),n(u,r,e,c)}}}r();var o=function(t){return"object"==typeof t&&!Array.isArray(t)},i=function(t){return"function"==typeof t};const c=[120,390,512,768,1280,1440,1920,2140,2560],u=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const n=t.target,{src:e}=n.dataset,r=(({initial:t,mobile:n,maxWidth:e}={})=>[c.filter((t=>t<=e&&t<768)).map((t=>`${n.replace("{width}",t)} ${t}w`)).join(","),c.filter((t=>t<=e&&t>=768)).map((n=>`${t.replace("{width}",n)} ${n}w`)).join(",")].join(","))(n.dataset);n.classList.add("is-visible"),e&&(n.src=e),r&&(n.srcset=r),u.unobserve(t.target)}}))}),{rootMargin:"0px",threshold:0}),a=(t="data-src")=>{[...document.querySelectorAll(`[${t}],[data-initial]:not([data-observed])`)].map((t=>{const n=t;return n.onload=()=>{n.classList.add("is-loaded")},n.setAttribute("data-observed",!0),u.observe(n)}))},s=function(t,n,e){void 0===t&&(t={}),void 0===n&&(n={}),void 0===e&&(e=[]);var c=r(n),u=[];return{on:c.on,emit:c.emit,getState:function(){return c.getState()},add:function(n){if(!o(n))throw"components should be an object";Object.assign(t,n)},use:function(t){if(!i(t))throw"plugins should be a function";e.push(t)},hydrate:function(t){return c.hydrate(t)},mount:function(n){void 0===n&&(n="data-component"),n=[].concat(n);for(var r=0;r<n.length;r++){for(var a=n[r],s=[].slice.call(document.querySelectorAll("["+a+"]")),f=function(){for(var n=s.pop(),r=n.getAttribute(a).split(/\s/),f=0;f<r.length;f++){var d=t[r[f]];if(d){n.removeAttribute(a);try{var l=e.reduce((function(t,e){var r=e(n,c);return o(r)?Object.assign(t,r):t}),{}),v=d(n,Object.assign({},l,c));i(v.unmount)&&u.push(v)}catch(t){console.error(t),c.emit("error",{error:t}),c.hydrate({error:void 0})}}}};s.length;)f();c.emit("mount")}},unmount:function(){for(var t=u.length-1;t>-1;t--){var n=u[t],e=n.subs;(0,n.unmount)(n.node),e.map((function(t){return t()})),u.splice(t,1)}c.emit("unmount")}}}({},{});window.app=s,window.component=function(t){return function(n,e){var r=[];return{subs:r,unmount:t(n,Object.assign({},e,{on:function(t,n){var o=e.on(t,n);return r.push(o),o}})),node:n}}},a(),s.on("mount",(()=>a()))})()})();
