// <decoration-slot> — mesmo contrato do photo-slot, padrão type="gif" e decorativo (alt vazio).
import { PhotoSlot } from './PhotoSlot.js';
export class DecorationSlot extends PhotoSlot {
  get fallbackIcon() { return '✨'; }
  connectedCallback() { if (!this.hasAttribute('type')) this.setAttribute('type', 'gif'); super.connectedCallback(); }
}
