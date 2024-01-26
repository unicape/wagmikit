import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('w-connect-button')
export class WConnectButton extends LitElement {
  @property() public label? = 'Connect Wallet'

  public override render() {
    return html`<w-button>${this.label}</w-button>`
  }
}
