const e=document.querySelector("#site");[{type:"title",value:"Hello World!"},{type:"text",value:"Some text"},{type:"columns",value:["111111","222222","333333","444444"]},{type:"image",value:"./assets/image.png"}].forEach(t=>{let l="";"title"===t.type?l=`
    <div class="row">
      <div class="col-sm">
        <h1>${t.value}</h1>
      </div>
    </div>
  `:"text"===t.type?l=`
    <div class="row">
      <div class="col-sm">
        <p>${t.value}</p>
      </div>
    </div>
  `:"columns"===t.type?l=function(e){let t=e.value.map(e=>`<div class="col-sm">${e}</div>`);return`
    <div class="row">
      ${t.join("")}
    </div>
  `}(t):"image"===t.type&&(l=`
    <div class="row">
      <img src="${t.value}" />
    </div>
  `),e.insertAdjacentHTML("beforeend",l)});