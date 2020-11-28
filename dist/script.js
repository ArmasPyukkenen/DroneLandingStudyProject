

class MenuButtonController {
  constructor (button) {
    this.button = button;
    this.opened = false;
    this.openClass = 'menu-btn--open';
    this.closeClass = 'menu-btn--close';
  }

  toggle () {
    this.opened = !this.opened;
    if(this.opened) {
      this.button.classList.add(this.closeClass);
      this.button.classList.remove(this.openClass);
    } else {
      this.button.classList.remove(this.closeClass);
      this.button.classList.add(this.openClass);
    }
  }
}

class MenuController {
  constructor () {
    this.header = document.querySelector('.header');
    this.menuButton = this.header.querySelector('.header__hamburger');
    this.menuButtonController = new MenuButtonController(this.menuButton);
    this.menuButton.addEventListener( 'click', (e) => {
      this.toggleMenu();
    })
  }

  toggleMenu() {
    this.header.classList.toggle('header--mobile--open');
    this.menuButtonController.toggle();
  }
}

new MenuController();