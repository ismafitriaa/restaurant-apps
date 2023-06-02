class AppFooter extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <p>Copyright &copy; 2023 - Slice of Spice build with <a href="https://github.com/ismafitriaa"> ISMA </a> </p>
      `;
    }
  }
  
  customElements.define('app-footer', AppFooter);
  