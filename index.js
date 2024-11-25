// async function fetchImages(){try{let fetchImages = await fetch('https://instabyte-743700410723.us-east5.run.app/posts');
//                                  return await fetchImages.json()}
//                                     catch (fetchImages){console.error('Error Fetching Images:', fetchImages)}}

async function e() {
    try {
        let e = await fetch("https://instabyte-743700410723.us-east5.run.app/posts");
        return await e.json()
    } catch (e) {
        console.error("Erro ao buscar dados:", e)
    }
}
const t = document.getElementById("modal"),
    n = document.getElementById("modal-img"),
    a = document.getElementById("caption"),
    o = document.querySelector(".close");
t.style.display = "none";
const c = document.querySelector(".image-grid");
async function i() {
    let o = await e();
    try {
        let e = o.map(e => `
            <article data-description="${e.descricao}">
              <figure>
                <img src="${
        e.imgUrl}" alt="${e.alt}" />
              </figure>
            </article>
          `


        ).join("");
        c.insertAdjacentHTML("beforeend", e),
        document.querySelectorAll(".image-grid img").forEach(e => {
            e.addEventListener("click", function() {
                a.textContent = "",
                t.style.display = "block",
                n.src = this.src;
                let e = this.closest("article"),
                    o = (e ? e.dataset.description : "") || this.alt;
                a.innerHTML = `<p>${o}</p>`
            })
        })
    } catch (e) {
        console.error("Erro ao popular página", e)
    }
}
o.addEventListener("click", function() {
    t.style.display = "none"
}),
window.addEventListener("click", function(e) {
    e.target === t && (t.style.display = "none")
}),
document.addEventListener("DOMContentLoaded", i);
//# sourceMappingURL=index.55a26ef5.js.map


// async function fetchImages(){try{const response = await fetch(process.env.API_URL);
//                                  const   data   = await      response.json(      );
//                                  return  data}
//                                  catch (error){console.error('Error Loading Data:', error)}}
// // import fetchImages from './fetchAPI.js';
// const modal        = document.getElementById('modal'    );
// const modalImg     = document.getElementById('modal-img');
// const captionText  = document.getElementById('caption'  );
// const closeBtn     = document.querySelector('.close'    );
// modal.style.display='none';
// const imageGrid = document.querySelector('.image-grid'  );
// // Search & DisPlay EndPoint Data:
// async function displayImages(){const data = await fetchImages();
//     try {const postsList = data.map(item => {return
//         `
//         <article data-description='${item.description}'>
//             <figure>
//                 <img src='${item.imgURL}' alt='${item.alt}'/>
//             </figure>
//         </article>
//         `}).join('');
//         imageGrid.insertAdjacentHTML('beforeend', postsList)
//         // Add Click Events for Each Image:
//         addImageClickEvents()}
//         catch (error) {console.error('Error Populating Page.', error)}}
// // Add Click Events to Images:
// function addImageClickEvents() {const images = document.querySelectorAll('.image-grid img');
//     images.forEach(img => {img.addEventListener('click', function(){
//                                 captionText.textContent='';
//                                 modal.style.display    ='block';
//                                 modalImg.src           = this.src;
//                                 const article          = this.closest('article');
//                                 const description      = article ? article.dataset.description:'';
//                                 const caption          = description || this.alt;
//                                 captionText.innerHTML  =`<p>${caption}</p>`})})}
// // Close Modal Event:
// closeBtn.addEventListener('click', function( ) {modal.style.display = 'none'});
// // Close Modal Clicking OutSide of It:
// window.addEventListener(  'click', function(event){if(event.target === modal){modal.style.display='none'}});
// // Call Search & DisPlay Function When Loading Page:
// document.addEventListener('DOMContentLoaded', displayImages);
