import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInit from '../view/utils/settings/drawer-init';

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
        this._content = content;

        this._appShellInit();
    }

    _appShellInit() {
        DrawerInit.init({
            menu: this.menu,
            hero: this.hero,
            main : this.main,
            drawer : this.drawer,
            content: this._content,
        })
    }
      
    async renderContent() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        const skipLinkElem = document.querySelector('.skip-link');
        skipLinkElem.addEventListener('click', (event) => {
          event.preventDefault();
          document.querySelector('#content').focus();
        });
        this._content.innerHTML = await page.render();
        await page.afterRender();
      }
 
}

export default AppBar;
