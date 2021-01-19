

class MenuButtonController {
  constructor (button) {
    this.button = button;
    this.opened = false;
    this.openClass = 'menu-btn--open';
    this.closeClass = 'menu-btn--close';
    this.openIcon = this.button.querySelector('.menu-btn__open-icon');
    this.closeIcon = this.button.querySelector('.menu-btn__close-icon');
  }

  toggle () {
    this.opened = !this.opened;
    if(this.opened) {
      this.button.classList.add(this.closeClass);
      this.button.classList.remove(this.openClass);
      this.openIcon.ariaHidden = true;
      this.closeIcon.ariaHidden = false;
      this.button.ariaExpanded = true;
    } else {
      this.button.classList.remove(this.closeClass);
      this.button.classList.add(this.openClass);
      this.openIcon.ariaHidden = false;
      this.closeIcon.ariaHidden = true;
      this.button.ariaExpanded = false;
    }
  }
}

class MenuController {
  constructor () {
    this.opened = false;
    this.header = document.querySelector('.header');
    this.mainContent = document.querySelector('main');
    this.menuButton = this.header.querySelector('.header__hamburger');
    this.nav = this.header.querySelector('#navigation');
    this.firstNavLink = this.nav.querySelector('a');
    this.menuButtonController = new MenuButtonController(this.menuButton);
    this.menuButton.addEventListener( 'click', (e) => {
      this.toggleMenu({focus: false});
    })
    this.menuButton.addEventListener('keydown', (e) => {
      if (e.key === 'enter') {
        this.toggleMenu({focus: true})
      }
    })
    this.nav.addEventListener('click', (e) => {
      e.preventDefault();
      if(e.target.classList.contains('header__option')) {
        this.toggleMenu({focus: false});
        this.visitLink(e.target.getAttribute('href'))
      }
    })
  }
  


  toggleMenu({focus}) {
    this.opened = !this.opened;
    this.header.classList.toggle('header--mobile--open');
    this.menuButtonController.toggle();
    if (this.opened === true) {
      this.mainContent.setAttribute('inert', true);
      this.firstNavLink.focus();
      if(!focus)
        this.firstNavLink.blur();
    } else {
      this.mainContent.removeAttribute('inert');
      this.menuButton.focus();
      if(!focus)
        this.menuButton.blur();
    }
  }

  visitLink(link) {
    document.querySelector(link).scrollIntoView({behavior: 'smooth'});
  }
}

new MenuController();
document.addEventListener('click', e => {
  if(e.target.classList.contains('scroll-btn')){
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: "smooth"})
  }
})