import"./modulepreload-polyfill-ec808ebb.js";/* empty css               */import"./approach-swiper-762f4c93.js";import"./services-719dddbc.js";import"./modal-backdrop-1d55278e.js";import"./explore-more-04e3138d.js";const i=document.querySelector(".my-button"),u=document.querySelector(".header-menu-container"),y=document.querySelector(".close-btn"),d=()=>{u.classList.toggle("is-open")};i.addEventListener("click",d);y.addEventListener("click",d);const s=document.querySelector(".form");console.log(s);const r=document.querySelector(".form-hero");console.log(r);const t={openModalBtns:document.querySelectorAll("[data-modal-open='modal3']"),closeModalBtn:document.querySelector("[data-modal-close='modal3']"),modal:document.querySelector("[data-modal='modal3']"),bodyElement:document.querySelector("body")};function f(e){a(e),b(e)}function p(e){a(e),S(e)}function a(e){e.modal.classList.toggle("is-hidden")}function b(e){e.bodyElement.style.overflow="hidden"}function S(e){e.bodyElement.style.overflow=""}s.addEventListener("submit",m);r.addEventListener("submit",m);t.closeModalBtn.addEventListener("click",()=>p(t));function m(e){e.preventDefault();const o=e.target,n=o.elements.name.value,l=o.elements.phone.value,c=o.elements.email.value;if(n===""||l===""||c==="")return console.log("Please fill in all the fields!");console.log(`Name: ${n}, Phone: ${l}, Email: ${c}`),o.reset(),f(t)}
