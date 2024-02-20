

const opnMenuButton = document.querySelector(".my-button");
const mobileMenuContainer = document.querySelector(".header-menu-container");
const closeMenuButton = document.querySelector(".close-btn");

    const handleClick = () => {
        mobileMenuContainer.classList.toggle('is-open');
};

opnMenuButton.addEventListener("click", handleClick);
closeMenuButton.addEventListener("click", handleClick);

  



  
