const documentReady = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');

  const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
  const headerNavMenuCloseIconContainer = document.getElementById('headerNavMenuCloseIconContainer');
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');
  const headerNavLinks = [...document.querySelectorAll('.header-nav__menu-link')];

  const sliderTitle = document.querySelector('.slider__title');
  const sliderLearnButton = document.querySelector('.slider__learn-button');
  const sliderStarsImageContainer = document.querySelector('.slider__stars-image-container');
  const sliderMoonImageContainer = document.querySelector('.slider__moon-image-container');
  const sliderMountainsBehindImageContainer = document.querySelector('.slider__mountains-behind-image-container');
  const sliderMountainsFrontImagecontainer = document.querySelector('.slider__mountains-front-image-container');

  const documentScroll = () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0);

    let { scrollY } = window;
    sliderTitle.style.marginLeft = `${45 - (scrollY * 0.15)}%`;
    sliderTitle.style.marginBottom = `-${scrollY*0.25}px`;
    sliderTitle.style.opacity = 1 - (scrollY * 0.003);
    sliderLearnButton.style.marginTop = `${scrollY}px`;
    sliderStarsImageContainer.style.top = `${scrollY * 0.25}px`;
    sliderMoonImageContainer.style.top = `${scrollY * 0.375}px`;
    sliderMountainsBehindImageContainer.style.top = `${scrollY * 0.5}px`;
    sliderMountainsFrontImagecontainer.style.top = `${scrollY * 0.625}px`;
  };

  const openMenu = () => {
    headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open');
  };

  const closeMenu = () => {
    headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open');
  };

  document.addEventListener('scroll', documentScroll);
  headerNavMenuIconContainer.addEventListener('click', openMenu);
  headerNavMenuCloseIconContainer.addEventListener('click', closeMenu);
  headerNavLinks.forEach((element) => {
    element.addEventListener('click', closeMenu);
  });
};
document.addEventListener('DOMContentLoaded', documentReady);