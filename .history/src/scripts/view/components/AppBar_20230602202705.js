class AppBar {
    constructor(menu, hero, main, drawer) {
        this.menu = menu;
        this.hero = hero;
        this.main = main;
        this.drawer = drawer;
    }

    _appShellInit() {
        this._appBar.setMenu([
          {url: '#/', label: 'Home'},
          {url: '#/favorite', label: 'Favorite'},
          {url: 'https://raziq.tech/about', label: 'About Us'},
        ]);
      }

      

    init() {
        this.menu.addEventListener('click', event => {
            this.drawer.classList.toggle('open');
            event.stopPropagation();
        });

        this.hero.addEventListener('click', () => {
            this.drawer.classList.remove('open');
        });

        this.main.addEventListener('click', () => {
            this.drawer.classList.remove('open');
        });
    }
}

export default AppBar;
