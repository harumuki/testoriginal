(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{192:function(t,e,o){"use strict";var r=o(27),n=(o(14),o(5),o(4));var s=(t,[e])=>{e||(e=t.location.pathname);const o="string"==typeof e?e.slice(1):null,r="/"+t.storeId+"@"+o.replace(/\//g,"$")+".json";return Object(n.h)({url:r}).then((t=>{const o=t.data.GET;if(o){const[t,r]=o.split("@");if(r)return{path:e,resource:t,_id:r}}const r=new Error("Resource not found, invalid slug or store ID");throw r.response=t,r}))};var c=(t,[e])=>new Promise(((o,r)=>{const{storeId:s}=t,{resource:c,_id:a}=e;if(c&&a)Object(n.g)({url:"/".concat(c,"/").concat(a,".json"),storeId:s}).then((({data:t})=>{o({resource:c,body:t})})).catch(r);else{const t=new Error("Invalid route resource or object ID");t.response={},r(t)}})),a=t=>new Promise(((e,o)=>{const{storeId:r}=t,s=[],c=[];["products","categories","collections","brands"].forEach((t=>{s.push(Object(n.g)({url:"/".concat(t,".json"),storeId:r}).then((e=>{const{result:o}=e.data;Array.isArray(o)&&o.forEach((({_id:e,slug:o,name:r,sku:n})=>{if(o){const s="/"+o;c.find((t=>t.path===s))||c.push({resource:t,_id:e,path:s,name:r,sku:n})}}))})))})),Promise.all(s).then((()=>e(c))).catch(o)})),i=o(2);var u=(t,[e,o=!0])=>{e||(e=t.location.hostname);const r="/domains/"+e+".json";return Object(n.e)({url:r}).then((({data:e})=>{if(o){["store_id","store_object_id","channel_id"].forEach((t=>i.a.set(t,e[t])));const t=e.default_lang;t&&(i.a.set("lang",t),i.a.set("country_code",t.replace(/^[a-z]{2}_/,"").toUpperCase()),"pt_br"===t&&(i.a.set("currency","BRL"),i.a.set("currency_symbol","R$")))}return t.storeId=e.store_id,e}))};e.a=function(t,e="object"==typeof window&&window.location){const o=this;this.storeId=t||r.$ecomConfig.get("store_id"),this.location=e,this.map=function(){return s(o,arguments)},this.resolve=function(){return c(o,arguments)},this.list=function(){return a(o)},this.setupStore=function(){return u(o,arguments)}}},364:function(t,e,o){"use strict";o.r(e);o(5),o(162);var r=o(40),n=o(192),s=o(1),c=o(31),a=o.n(c),i=o(266),u=o(268);const l=Object(s.$)("#fallback-404");if(l.length){const t=new URLSearchParams(window.location.search).get("url");if(t){const e=new n.a;l.html('<div class="spinner-border" role="status"></div>');const o=()=>{l.html(Object(s.$)("<h3>",{class:"my-4",html:['<i class="text-muted fas fa-exclamation-triangle mr-3"></i>',Object(r.a)({pt_br:"Página não encontrada",en_us:"Page not found"})]})),e.list().then((t=>{l.append([Object(s.$)("<p>",{class:"lead",html:Object(r.a)({pt_br:"Mapa do site:",en_us:"Sitemap:"})}),Object(s.$)("<ul>",{html:t.map((({path:t})=>'<li><a href="'.concat(t,'">').concat(t,"</a></li>")))})])})).catch(console.error)};e.map(t).then((t=>{const{resource:o,_id:r}=t;switch(o){case"products":return new a.a({render:t=>t(i.a,{props:{productId:r}})});case"brands":case"categories":return e.resolve(t).then((({body:t})=>new a.a({render:e=>e(u.a,{props:{[o]:[t.name]}})})))}})).then((t=>{t?t.$mount(l[0]):o()})).catch((t=>{console.error(t),o()}))}}}}]);
//# sourceMappingURL=chunk.8cb63ed3f12ef9c026f7.js.map