import {createNode, fetchElement} from '../../utilities';

class CustomPage extends HTMLElement {
  constructor({primaryPageElement, innerElement}) {
    super();
    this._primaryPageElement = primaryPageElement;
    this._innerElement = innerElement;
  }

  connectedCallback() {
    this._paint();
    this.innerElement = createNode(this._innerElement);
    this._innerContainer.appendChild(this.innerElement);
  }

  /**
   * @param {Object} input
   */
  set input(input) {
    this._input = input;
    this._displayContent();
  }

  _paint() {
    this.innerHTML = this._primaryPageElement;
    this._innerContainer = fetchElement('section.container');
  }

  /**
   * Display a warning message
   * @param {string} warning Warning message to be displayed.
   */
  displayWarning(warning) {
    this._innerContainer.innerHTML = /* html*/`
      <div class="alert">
        <p class="alert__title">Oops.. 😢</p>
        <p class="alert__description">${warning}</p>
      </div>
    `;
  }
}

export default CustomPage;
