class NickName extends HTMLElement {

  constructor() {
    super();


    /**
     * Array of names, either imported from json or hard-coded here.
     */
    this.names = [
      "Nick",
      "Nickolas",
      "Nicko"
    ];
  }


  /**
   * When the element is connected to the DOM, render the element.
   */
  async connectedCallback() {
    this.render();
  }


  /**
   * Render the element.
   */
  render() {
    // Get a random name from the array
    let name = this.names[Math.floor(Math.random() * this.names.length)];

    // Set the innerHTML of the element to the name
    this.innerHTML = `${name}`;
  }
}

/**
 * Define the element.
 */
if("customElements" in window) {
    window.customElements.define("nick-name", NickName);
}
