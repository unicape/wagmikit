import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('w-button')
export class WButton extends LitElement {
  @property({ type: Boolean }) public disabled = false

  public override render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `
  }
}
