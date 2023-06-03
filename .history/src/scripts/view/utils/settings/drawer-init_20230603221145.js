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

    // _addShadow(event, drawer) {
    //     event.stopPropagation();
    //     const { scrollY } = window;
    //     if (scrollY < 20) {
    //         drawer.classList.remove('shadow-bottom');
    //     } else {
    //         drawer.classList.add('shadow-bottom');
    //     }
    // },

    // _addBackgroundColor(event, drawer) {
    //     event.stopPropagation();
    //     const { scrollY } = window;
    //     if (scrollY < 20) {
    //         drawer.style.backgroundColor = 'transparent';
    //     } else {
    //         drawer.style.backgroundColor = '#FBFBFB';
    //     }
    // },
};

export default DrawerInit;
