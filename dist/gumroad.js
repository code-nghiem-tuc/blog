function isHomePage() {
  return window.location.pathname == '/';
}

function loadGumroad() {
  // delete previously added button to avoid duplicate
  const button = document.querySelector(".gumroad-wrapper");
  if (button !== null) {
    console.log("gumroad already loaded");
    return
  }
  
  const gumroadCode = `
  <div class="gumroad-wrapper">
    <div class="separator-wrapper">
        <div class="gumroad-half-separator"></div>
        <p style="text-align: center;">👨🏻&zwj;💻👩🏼&zwj;💻</p>
        <div class="gumroad-half-separator"></div>
    </div>
  
    <div class="donate-container">
      <div class="spacer"></div>
      <div class="donate-content">
        <div>
          <h1>Ủng hộ mình ly cafe</h1>
        </div>
        <div>
          <a class="gumroad-button" href="https://codenghiemtuc.gumroad.com/l/buy-me-a-drink">Ủng hộ qua </a>
        </div>
        <div id="momo-option">
          <a class="momo-button" href="https://me.momo.vn/codenghiemtuc">Ủng hộ qua <img id="momo-logo" src="https://camo.githubusercontent.com/738540720e25c1dda8a12bad6dc45b40d4d06e51701c4170d392483b0a2ac054/68747470733a2f2f692e696d6775722e636f6d2f416831384d7a312e706e67" alt="MoMo"/></a>
        </div>
      </div>
    </div>
  </div>
  `;
  targetNode.insertAdjacentHTML("beforeend", gumroadCode);
  console.log("loaded gumroad");
}

function unloadGumroad() {
  // delete previously added button
  const button = document.querySelector(".gumroad-wrapper");
  if (button !== null) {
    button.remove();
    console.log("removed existing gumroad");
  }
}

var targetNode = document.querySelector('.super-content');
if (targetNode == null) {
  console.warn("cannot find Super's content element, fallback to body");
  targetNode = document.body;
}

// first, let's load if this is not home page
if (!isHomePage()) {
  loadGumroad();
}

var observer = new MutationObserver(function(){
    if (!isHomePage()) {
      loadGumroad();
    } else {
      unloadGumroad();
      console.log("this is homepage, skip loading gumroad");
    }
});

// watch for change of 'height'
observer.observe(targetNode, { attributes: true, attributeFilter: ["height"], childList: true });
