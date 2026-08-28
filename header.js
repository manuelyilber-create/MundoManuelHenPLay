class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header-module">
        <div class="header-glass-card">
          <span class="header-status">• HUB ONLINE • HEN ECOSYSTEM</span>
          <h1 class="transparent-title">Mundo M. F. Ps2/Ps3/Ps4/</h1>
          <nav class="header-nav">
            <a href="#ps2-module">PS2</a> • 
            <a href="#ps3-module">PS3</a> • 
            <a href="#ps4-module">PS4</a>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('main-header', MainHeader);
