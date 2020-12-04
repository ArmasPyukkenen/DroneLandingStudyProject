

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
    this.menuButton = this.header.querySelector('.header__hamburger');
    this.nav = this.header.querySelector('#navigation');
    this.firstNavLink = this.nav.querySelector('a');
    this.menuButtonController = new MenuButtonController(this.menuButton);
    this.menuButton.addEventListener( 'click', (e) => {
      console.log(e.key)
      this.toggleMenu({focus: false});
    })
    this.menuButton.addEventListener('keydown', (e) => {
      if (e.key === 'enter') {
        this.toggleMenu({focus: true})
      }
    })
  }

  toggleMenu({focus}) {
    this.opened = !this.opened;
    this.header.classList.toggle('header--mobile--open');
    this.menuButtonController.toggle();
    if (this.opened === true) {
      this.firstNavLink.focus();
      if(!focus)
        this.firstNavLink.blur();
    } else {
      this.menuButton.focus();
      if(!focus)
        this.menuButton.blur();
    }
  }

  visitLink(link) {

  }
}

new MenuController();