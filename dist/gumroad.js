func isHomePage() {
  return window.location.pathname == '/';
}

func loadGumroad() {
  // delete previously added button to avoid duplicate
  const button = document.querySelector(".gumroad-wrapper");
  if (button !== null) {
    console.log("gumroad already loaded");
    return
  }
  
  const gumroadCode = `
  <div class="gumroad-wrapper">        
    <a class="gumroad-button" href="https://codenghiemtuc.gumroad.com/l/buy-me-a-drink">Ủng hộ tui ly cafe</a>
  </div>
  `;
  targetNode.insertAdjacentHTML("beforeend", gumroadCode);
  console.log("loaded gumroad");
}

func unloadGumroad() {
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
observer.observe(targetNode, { attributes: true, attributeFilter: ["height"] });
