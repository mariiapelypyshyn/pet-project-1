import"./modulepreload-polyfill-ec808ebb.js";/* empty css               */const a=document.querySelector(".form");console.log(a);const l={openModalBtns:document.querySelectorAll("[data-modal-open='modal3']"),closeModalBtn:document.querySelector("[data-modal-close='modal3']"),modal:document.querySelector("[data-modal='modal3']"),bodyElement:document.querySelector("body")};function m(e){c(e),r(e)}function s(e){c(e),i(e)}function c(e){e.modal.classList.toggle("is-hidden")}function r(e){e.bodyElement.style.overflow="hidden"}function i(e){e.bodyElement.style.overflow=""}a.addEventListener("submit",u);l.closeModalBtn.addEventListener("click",()=>s(l));function u(e){e.preventDefault();const o=e.target,n=o.elements.name.value,t=o.elements.phone.value,d=o.elements.email.value;if(n===""||t===""||d==="")return console.log("Please fill in all the fields!");console.log(`Name: ${n}, Phone: ${t}, Email: ${d}`),o.reset(),m(l)}