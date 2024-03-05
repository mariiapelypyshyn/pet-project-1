const exploreMoreBtn = document.querySelector('.blog-btn');
console.log(exploreMoreBtn);

const blogMoreContent = document.querySelector('.blog-explore-more');
console.log(blogMoreContent)

const exploreMoreArrow = document.querySelector('.explore-more-btn-up');
console.log(exploreMoreArrow);

const handleClickBtn = () => {
    console.log('Button was clicked');
    blogMoreContent.style.display = 'block';
    exploreMoreBtn.style.display = 'none';
}

const handleClickArrow = () => {
    console.log('arrow was clicked')
     blogMoreContent.style.display = 'none';
    exploreMoreBtn.style.display = 'block';
}

exploreMoreBtn.addEventListener('click', handleClickBtn);
exploreMoreArrow.addEventListener('click', handleClickArrow);