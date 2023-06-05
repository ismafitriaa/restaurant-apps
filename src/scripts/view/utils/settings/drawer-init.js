/* eslint-disable no-param-reassign */
const DrawerInit = {
  init({
    menu,
    hero,
    main,
    drawer,
    content,
  }) {
    this.menu = menu;
    this.hero = hero;
    this.main = main;
    this.drawer = drawer;
    this.content = content;

    this.menu.addEventListener('click', (event) => {
      this._toggleDrawer(event, this.drawer);
    });

    this.content.addEventListener('click', (event) => {
      this._closeDrawer(event, this.drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

};

export default DrawerInit;
