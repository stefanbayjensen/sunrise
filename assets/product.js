(()=>{"use strict";function t(t=document.body,e="js-"){const n=[...t.querySelectorAll(e?`[class*="${e}"]`:"*")],a=e?"classList":"dataset";return n.reduce(((t,n)=>([].slice.call(e?n[a]:Object.entries(n[a])).forEach((a=>{let o;e&&a.slice(0,e.length)===e?o=a.slice(e.length,a.length):e||([o]=a),o&&(t[o]=t.hasOwnProperty(o)?t[o].constructor===Array?t[o].concat(n):[t[o],n]:n)})),t)),{})}function e(t,e=window.Phill.money_format){"string"==typeof t&&(t=t.replace(".",""));let n="";const a=/\{\{\s*(\w+)\s*\}\}/;function o(t,e,n,a){if(void 0===e&&(e=2),a=","==(n=window.Phill.money_separator)?".":",",isNaN(t)||null==t)return 0;const o=(t=(t/100).toFixed(e)).split(".");return o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+n)+(o[1]?a+o[1]:"")}switch(e.match(a)[1]){case"amount":case"amount_with_comma_separator":n=o(t,2);break;case"amount_no_decimals":n=o(t,0);break;case"amount_with_space_separator":n=o(t,2);break;case"amount_no_decimals_with_comma_separator":case"amount_no_decimals_with_space_separator":n=o(t,0)}return e.replace(a,n)}const n=window.component(((n,a)=>{const o=function(t,e){e={select:"[data-option-select]",radio:"[data-option-radio]",main:"[data-option-main]",...e};const n=[],a={id:null,options:[]},o=document.querySelectorAll(e.select),i=document.querySelectorAll(e.radio),r=document.querySelector(e.main);if(!r||!r.length)throw"data-option-main is missing";if(i.length>3)throw"you have more than three radio groups";if(o.length>3)throw"you have more than three select inputs";const c=[].slice.call(r.children).reduce(((t,e)=>{const n=t;return n[e.innerHTML]=e.value,n}),{});function d(){a.id=c[a.options.join(" / ")],r.value=a.id;for(const t of n)t(a)}return o.forEach((t=>{if("SELECT"!==t.nodeName)throw"data-option-select should be defined on the individual option selectors";const e=Number(t.getAttribute("data-index"));a.options[e]=t.value,t.addEventListener("change",(t=>{a.options[e]=t.target.value,d()}))})),i.forEach((t=>{if("INPUT"===t.nodeName)throw"data-option-radio should be defined on a parent of the radio group, not the inputs themselves";const e=Number(t.getAttribute("data-index")),n=[].slice.call(t.getElementsByTagName("input"));n.forEach((t=>{t.checked&&(a.options[e]=t.value)})),function(t,n){t.map((t=>t.onclick=t=>{return n=t.target.value,a.options[e]=n,void d();var n}))}(n)})),d(),{get state(){return a},onUpdate:t=>(n.indexOf(t)<0&&n.push(t),()=>n.splice(n.indexOf(t),1))}}(),{product:{variants:i},selectedOrFirstAvailableVariant:r}=JSON.parse(document.querySelector(".js-product-json").innerHTML);let c=i.find((t=>t.id===r))||i.find((t=>t.available))||i[0];a.emit("variant:change",null,c),o.onUpdate((({id:o})=>{c=i.find((t=>t.id===parseInt(o,10))),((n,a)=>{const{price:o,compareAtPrice:i}=t(a,null),{price:r,compare_at_price:c}=n;o.innerHTML=e(r),i.innerHTML=c>r?e(c):""})(c,n),(t=>{const e=new URL(window.location.href),n=new URLSearchParams(e.search.slice(1));t.forEach((({name:t,value:e})=>{""!==e?n.set(t,encodeURIComponent(e)):n.delete(t)})),window.history.replaceState({},"",`${window.location.pathname}?${n.toString()}`)})([{name:"variant",value:o}]),a.emit("variant:change",null,c)}))}));const a=t=>t.split(".").reduce(((t,e)=>t?.[e]),window?.Phill?.theme?.strings)||`Missing translation for ${t} in window.Phill`,o={productSelection:n,productForm:window.component(((e,n)=>{const{submit:o}=t(e,null);let i={};n.on("variant:change",((t,e)=>{i=e,o.textContent=a(e.available?"product.add_to_cart":"product.sold_out"),o.disabled=!e.available})),e.addEventListener("submit",(t=>{t.preventDefault(),o.disabled=!0,o.textContent=a("product.adding_to_cart"),function(t,e,n={}){return function(t=[]){return window.app.emit("cart:updating"),fetch(`${window.Phill.routes.cartAdd}.js`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:t})}).then((t=>t.json())).then((async t=>{if(t.status)return window.app.emit(["cart:updated","cart:error"],null,t),{item:t,cart:window.app.getState().cart,error:t?.description};const[e,n]=await Promise.all([fetch(`${window.Phill.routes.cart}.js`,{method:"GET",credentials:"include"}).then((t=>t.json())),fetch(`${window.Phill.routes.cart}?sections=cart-drawer`,{method:"GET",credentials:"include"}).then((t=>t.json()))]);return e.sections=n,window.app.emit(["cart:updated","cart:render"],{cart:e}),{item:t,cart:e}}))}([{id:t.id,quantity:e,properties:n}])}(i,e.elements.quantity.value).then((({error:t})=>{t&&alert(t),o.disabled=!0,o.textContent=a("product.added_to_cart"),setTimeout((()=>{t||n.emit("cart:toggle",{cartOpen:!0})}),0),setTimeout((()=>{o.disabled=!1,o.textContent=a("product.add_to_cart")}),t?0:3e3)}))}))}))};window.app.add(o),window?.app?.getState()?.cart&&window.app.mount()})();