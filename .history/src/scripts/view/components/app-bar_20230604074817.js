class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
    
      <!--  Navbar Mobile  -->
      <div class="menu__mobile">
          <div class="icon__menu" id="menu"><a href="#">&#9776;</a></div>
          <div class="logo__mobile">Slice of Spice</div>
          <div class="logo__mobile">&nbsp;</div>
      </div>
      <nav id="drawer" class="nav__mobile">
          <ul class="nav__list__mobile">
              <li class="nav__item__mobile"><a href="">Home</a></li>
              <li class="nav__item__mobile"><a href="#/favorite">Favorite</a></li>
              <li class="nav__item__mobile"><a href="https://github.com/ismafitriaa/">About Us</a></li>
          </ul>
      </nav>
      <!--  Navbar Desktop  -->
      <nav class="nav">
          <a class="logo">Slice of Spice</a>
          <ul class="nav__list">
              <li class="nav__item"><a href="./">Home</a></li>
              <li class="nav__item"><a href="#/favorite">Favorite</a></li>
              <li class="nav__item"><a href="https://github.com/ismafitriaa/">About Us</a></li>
          </ul>
      </nav>
      <div class="hero">
          <div class="hero__inner">
              <h1 class="hero__title">Hangatnya Satukan Suasana</h1>
              <p class="hero__tagline">Sajian lezat dari dapur kami ke meja makan anda.</p>
          </div>
      </div>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);
  