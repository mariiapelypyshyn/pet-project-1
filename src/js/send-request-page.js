const sendRequestForm = document.querySelector(".form");
console.log(sendRequestForm);


const modalRefs =
{
    openModalBtns: document.querySelectorAll("[data-modal-open='modal3']"),
    closeModalBtn: document.querySelector("[data-modal-close='modal3']"),
    modal: document.querySelector("[data-modal='modal3']"),
    bodyElement: document.querySelector("body"),
};


function openModal(modalRefs) {
    toggleModal(modalRefs);
    disableBodyScroll(modalRefs);
  }

  function closeModal(modalRefs) {
    toggleModal(modalRefs);
    enableBodyScroll(modalRefs);
  }

  function toggleModal(modalRefs) {
    modalRefs.modal.classList.toggle("is-hidden");
  }

  function disableBodyScroll(modalRefs) {
    modalRefs.bodyElement.style.overflow = "hidden";
  }

  function enableBodyScroll(modalRefs) {
    modalRefs.bodyElement.style.overflow = "";
}
  


sendRequestForm.addEventListener("submit", handleSubmit);

modalRefs.closeModalBtn.addEventListener("click", () => closeModal(modalRefs));  
 
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
  
  if (name === "" || phone === "" || email === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
    form.reset();
    openModal(modalRefs);
}