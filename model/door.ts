export default class ModelDoor {
  #number: number;
  #haveGift: boolean;
  #selected: boolean;
  #open: boolean;

  constructor(
    number: number,
    haveGift = false,
    selected = false,
    open = false
  ) {
    this.#number = number;
    this.#selected = haveGift;
    this.#haveGift = selected;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }

  get selected() {
    return this.#selected;
  }

  get haveGift() {
    return this.#haveGift;
  }

  get open() {
    return this.#open;
  }

  deselect() {
    const selected = false;
    return new ModelDoor(this.number, this.haveGift, selected, this.open);
  }

  toggleSelection() {
    const selected = !this.selected;
    return new ModelDoor(this.number, this.haveGift, selected, this.open);
  }

  openDoor() {
    const open = true;
    return new ModelDoor(this.number, this.haveGift, this.selected, open);
  }
}
