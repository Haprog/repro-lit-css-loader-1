import { LitElement, css, html } from 'lit-element';

import styles from './styles.css';

class MyElement extends LitElement {
  static get styles() {
    return styles;
  }
  render() { 
    return html`
      <div>I'm styled!</div> 
    `;
  }
}
customElements.define('my-element', MyElement);
