class AppBar {
    constructor({
        menu,
        hero,
        main,
        drawer}) {
        this.menu = menu;
        this.hero = hero;
        this.main = main;
        this.drawer = drawer;

        this._appShellInit();
    }

    _appShellInit() {
        DrawerInit.init({
            menu: this.menu,
            hero: this.hero,
            main : this.main,
            drawer : this.drawer,
        })
    }
      

 
}

export default AppBar;
