let k=document.getElementById("overLay");const s=(t,e)=>{t?.setAttribute("aria-expanded",e.toString())},l=(t,e,n)=>{if(!t)return console.log("no element");e.forEach(o=>{n==="add"?o&&t.classList.add(o):n==="remove"?o&&t.classList.remove(o):n==="toggle"&&o&&t.classList.toggle(o)})},A=(t,e,n,o,i,a,_)=>{if(!(!e||!i))if(l(i,["active"],t),i.classList.contains("active")){l(e,[o],"remove"),l(e,[n],"add"),l(k,["active"],"add"),s(i,!0),e.querySelectorAll("li .navLink").forEach((v,T)=>{v.style.setProperty("--i",`${T+1}`)}),requestAnimationFrame(()=>{l(e,["open"],"add")});const c=C=>{const v=C.target;!i.contains(v)&&!e.contains(v)&&A("remove",e,"responsiveLink","lg-max:d-none",i)};document.addEventListener("click",c,{capture:!0}),i.__outsideClickHandler=c}else{l(e,["open"],"remove"),s(i,!1),l(k,["active"],"remove"),setTimeout(()=>{l(e,[o],"add"),l(e,[n],"remove")},500);const c=i.__outsideClickHandler;c&&(document.removeEventListener("click",c,{capture:!0}),delete i.__outsideClickHandler)}},D=(t,e,n)=>{if(!(!e||!n))if(l(n,["active"],t),n.classList.contains("active")){l(e,["d-none"],"remove"),s(n,!0),requestAnimationFrame(()=>{l(e,["open"],"add")});const o=i=>{const a=i.target;!n.contains(a)&&!e.contains(a)&&(D("remove",e,n),console.log("y"))};document.addEventListener("click",o,{capture:!0}),n.__outsideClickHandler=o}else{l(e,["open"],"remove"),s(n,!1),setTimeout(()=>{l(e,["d-none"],"add")},300);const o=n.__outsideClickHandler;o&&(document.removeEventListener("click",o,{capture:!0}),delete n.__outsideClickHandler)}},P=t=>{t.setAttribute("data-value","true")};let R=document.querySelectorAll("input[type='date']");function F(){R.forEach(t=>{t.addEventListener("change",()=>{P(t)})})}document.addEventListener("DOMContentLoaded",F);let E=document.getElementById("mobileMenu"),V=document.getElementById("responsiveMenu");E&&E.addEventListener("click",()=>A("toggle",V,"responsiveLink","lg-max:d-none",E));let $=document.querySelector("#langDropMenu .dropDownMenuList"),M=document.querySelector("#langDropMenu .btn-dropDown");M&&M.addEventListener("click",()=>D("toggle",$,M));let S=document.querySelector("header");window.addEventListener("scroll",()=>{window.scrollY>=150?S.classList.add("scroll"):S.classList.remove("scroll")});const b=(t,e,n,o)=>{t==="show"?(e.type="text",n.classList.remove("d-none"),o.classList.add("d-none")):(e.type="password",n.classList.add("d-none"),o.classList.remove("d-none"))};let g=document.getElementById("openEye"),f=document.getElementById("closeEye"),O=document.getElementById("password");g&&g.addEventListener("click",()=>b("hide",O,g,f));f&&f.addEventListener("click",()=>b("show",O,g,f));const G=document.querySelectorAll(".accordion button"),N=t=>{let e=t.nextElementSibling;t.getAttribute("aria-controls")===e.id&&(e.classList.toggle("show"),e.classList.contains("show")?(t.setAttribute("aria-expanded","true"),l(t,["open"],"add")):(t.setAttribute("aria-expanded","false"),l(t,["open"],"remove")))},W=()=>{G.forEach(t=>{t.addEventListener("click",()=>N(t))})};document.addEventListener("DOMContentLoaded",W);let d=document.getElementById("minRange"),r=document.getElementById("maxRange"),I=document.querySelector(".track"),x=document.querySelector(".tooltipMin"),q=document.querySelector(".tooltipMax"),h=0,u=d&&parseInt(d.min),w=r&&parseInt(r.max);const L=t=>{if(!d||!r)return;parseInt(r.value)-parseInt(d.value)<=h&&(t==="less"&&(d.value=(parseInt(r.value)-h).toString()),t==="more"&&(r.value=(parseInt(d.value)+h).toString())),t==="less"&&(x.innerText=d.value),t==="more"&&(q.innerText=r.value),Y()},Y=()=>{if(!I||!x||!q||!w||!u)return;const t=(Number(d.value)-u)/(w-u)*100,e=(Number(r.value)-u)/(w-u)*100;I.style.right=t+"%",I.style.left=100-e+"%",x.style.right=`calc(${t}% + 15px)`,q.style.left=`calc(${100-e}% - 18px)`};window.addEventListener("load",()=>{L("less"),L("more")});d&&d.addEventListener("input",()=>L("less"));r&&r.addEventListener("input",()=>L("more"));const m=(t,e,n,o,i)=>{if(!(!n||!o))if(t==="open"){l(e,["d-none"],"remove"),s(n,!0),s(o,!0),requestAnimationFrame(()=>{l(e,["open"],"add")}),l(k,["active"],"add");const a=_=>{const c=_.target;!n.contains(c)&&!e.contains(c)&&!o.contains(c)&&m("close",e,n,o)};document.addEventListener("click",a,{capture:!0}),n.__outsideClickHandler=a}else{s(n,!1),s(o,!1),l(e,["open"],"remove"),l(k,["active"],"remove"),setTimeout(()=>{l(e,["d-none"],"add")},500);const a=n.__outsideClickHandler;a&&(document.removeEventListener("click",a,{capture:!0}),delete n.__outsideClickHandler)}};let p=document.getElementById("openModelInquiry"),H=document.getElementById("ModelInquiry"),y=document.getElementById("closeModelInquiry");p&&p.addEventListener("click",()=>m("open",H,p,y));y&&y.addEventListener("click",()=>m("close",H,p,y));(function(){let e=document.getElementById("BookingModel"),n=document.querySelector('[data-id="openBookingModel"]'),o=document.getElementById("closeBookingModel");n&&n.addEventListener("click",()=>m("open",e,n,o)),o&&o.addEventListener("click",()=>m("close",e,n,o)),console.log("احذفها يا جمي يا عرص")})();
