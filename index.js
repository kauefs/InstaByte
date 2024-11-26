// async function fetchImages(){try{const response = await fetch(process.env.API);
async function fetchImages(){try{const response = await fetch('https://instaback-743700410723.us-east5.run.app');
                                 const   data   = await      response.json(      );
                                 return  data}
                                 catch (error){console.error('Error Loading Data:', error)}}
// import fetchImages from './fetchAPI.js';
const Modal        = document.getElementById('modal'    );
const Image        = document.getElementById('modal-img');
const Caption      = document.getElementById('caption'  );
const Close        = document.querySelector('.close'    );
Modal.style.display='none';
const Grid         = document.querySelector('.image-grid'  );
// Search & DisPlay EndPoint Data:
async function displayImages(){const data =   await fetchImages();
    try {const postsList = data.map( item => {return`
            <article data-description='${item.description}'>
                <figure>
                    <img src='${item.imgURL}' alt='${item.alt}'/>
                </figure>
            </article>
            `}).join('');
            Grid.insertAdjacentHTML('beforeend', postsList)
            // Add Click Events for Each Image:
            addImageClickEvents()}
            catch(error){console.error('Error Populating Page.', error)}}
// Add Click Events to Images:
function addImageClickEvents() {const images = document.querySelectorAll('.image-grid img');
                images.forEach(img => {img.addEventListener('click', function(){
                                   Caption.textContent='';
                                   Modal.style.display='block';
                                   Image.src          = this.src;
                                   const article      = this.closest('article');
                                   const description  = article ? article.dataset.description:'';
                                   const caption      = description || this.alt;
                                   Caption.innerHTML  =`<p>${caption}</p>`})})}
// Close Modal Event:
Close.addEventListener(   'click', function(   ){Modal.style.display='none'});
// Close Modal Clicking OutSide of It:
window.addEventListener(  'click', function(event){if(event.target === Modal){Modal.style.display='none'}});
// Call Search & DisPlay Function When Loading Page:
document.addEventListener('DOMContentLoaded', displayImages);
