class AppBar {
    constructor(menu, hero, main, drawer) {
        this.menu = menu;
        this.hero = hero;
        this.main = main;
        this.drawer = drawer;
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
