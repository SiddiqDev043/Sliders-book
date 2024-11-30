var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

function bookOpen() {
    let page = document.getElementsByClassName("page");
    let index = page.length;

    page[index - 1].style.transform = "rotateY(100deg";
    page[index - 1].style.transform = "0 0 8px #fff";
    page[index - 2].style.transform = "0 0 8px #fff";
    page[index - 3].style.transform = "0 0 8px #fff";
    page[index - 4].style.transform = "0 0 8px #fff";
    page[index - 5].style.transform = "0 0 8px #fff";
    page[index - 6].style.transform = "0 0 8px #fff";
    page[index - 7].style.transform = "0 0 8px #fff";
    page[index - index].style.boxShadow = "2px 3px 1px #fff";


    setTimeout(() => {
        page[index - 2].style.transform = "rotateY(-179deg)";
    }, 400);

    setTimeout(() => {
        page[index - 3].style.transform = "rotateY(-159deg)";
    }, 800);
    
    setTimeout(() => {
        page[index - 4].style.transform = "rotateY(-139deg)";
    }, 1200);

    setTimeout(() => {
        page[index - 5].style.transform = "rotateY(-129deg)";
    }, 1600);

    setTimeout(() => {
        page[index - 6].style.transform = "rotateY(-119deg)";
    }, 2000);

    setTimeout(() => {
        page[index - 7].style.transform = "rotateY(-100deg)";
    }, 2400);
}