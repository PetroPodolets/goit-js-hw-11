import{i as p,S as m}from"./assets/vendor-8d97032d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="43158866-7219a8d3eb05541ec3ccbc26d",g="https://pixabay.com/api/";function L(o){return fetch(`${g}?key=${y}&q=${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).then(r=>r.hits)}const w="/goit-js-hw-11/assets/error-d9947029.svg";function l(){p.show({message:"Sorry, there are no images matching your search query. Please, try again!",maxWidth:"340px",iconUrl:w,backgroundColor:"#ef4040",theme:"dark",color:"#fafafb",timeout:3e3,position:"topRight"})}function b(o,r){o.innerHTML=r.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:c,comments:f,downloads:h})=>`<li class="li-img">
      <a href="${s}">
        <img class="img-descr" src="${i}" alt="${e}">
      </a>
      <ul class="info-photo">
        <li class="descr">
          <h2 class="descr-h2">Likes</h2>
          <p class="descr-p">${t}</p>
        </li>
        <li>
          <h2 class="descr-h2">Views</h2>
          <p class="descr-p">${c}</p>
        </li>
        <li>
          <h2 class="descr-h2">Comments</h2>
          <p class="descr-p">${f}</p>
        </li>
        <li>
          <h2 class="descr-h2">Downloads</h2>
          <p class="descr-p">${h}</p>
        </li>
      </ul>
    </li>`).join("")}const a=document.querySelector("form"),u=document.querySelector(".list"),d=document.querySelector(".loader");function $(){d.style.display="block"}function n(){d.style.display="none"}n();a.addEventListener("submit",function(o){o.preventDefault(),u.innerHTML="",$();const i=document.querySelector("#value").value.trim();if(!i){l(),n();return}L(i).then(s=>{if(s.length===0)throw new Error("No images found");b(u,s),new m(".list li a",{captionDelay:300,captions:!0,captionsData:"alt",captionClass:"color-style"}).refresh()}).catch(()=>{l()}).finally(()=>{n()}),a.reset()});
//# sourceMappingURL=commonHelpers.js.map
