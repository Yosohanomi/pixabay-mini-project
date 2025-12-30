let t=document.getElementById("search-form"),e=document.getElementById("loadBtn"),a=document.getElementById("galleryList"),s=1,i="";async function n(t){let e=t.map(({webformatURL:t,tags:e,likes:a,views:s,comments:i,downloads:n})=>`
        <li class="list__item">
            <div class="photo-card">
                <img src=${t} alt=${e} />
                <div class="stats">
                    <p class="stats-item">
                        <i class="material-icons">thumb_up</i>
                        ${a}
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">visibility</i>
                        ${s}
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">comment</i>
                        ${i}
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">cloud_download</i>
                        ${n}
                    </p>
            </div>
            </div>
        </li>
        `).join("");a.insertAdjacentHTML("beforeend",e)}let c=async()=>await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${i}&page=${s}&per_page=12&key=51148638-4215382d54794cb096cce3e5a`).then(t=>t.json()).then(t=>t.hits).catch(t=>console.log(t));async function l(){n(await c())}function o(){a.innerHTML="",s=1}t.addEventListener("submit",async t=>{(t.preventDefault(),""===t.currentTarget.elements.query.value)?o():(i=t.currentTarget.elements.query.value,o(),0===(await c()).length?a.innerHTML="<p>Nothing</p>":(await l(),e.style.display="block"))}),e.addEventListener("click",async()=>{s+=1,await l()});
//# sourceMappingURL=pixabay-mini-project.764cefa2.js.map
