var targetNode = document.querySelector('.super-content');
if (targetNode == null) {
  console.warn("cannot find Super's content element, fallback to body");
  targetNode = document.body;
}

var observer = new MutationObserver(function(){
    if(targetNode.style.display != 'none'){
      console.log("content display detected");
      
      if ( window.location.pathname !== '/' ) { // if not home page
        // delete previously added button to avoid duplicate
        const button = document.querySelector(".gumroad-wrapper");
        if (button !== null) {
          console.log("gumroad already loaded");
        } else {
          const gumroadCode = `
          <div class="gumroad-wrapper">        
            <a class="gumroad-button" href="https://codenghiemtuc.gumroad.com/l/buy-me-a-drink">Ủng hộ tui ly cafe</a>
          </div>
          `;
          targetNode.insertAdjacentHTML("beforeend", gumroadCode);
          console.log("loaded gumroad");
        }
      } else {
        // delete previously added button
        const button = document.querySelector(".gumroad-wrapper");
        if (button !== null) {
          button.remove();
          console.log("removed existing gumroad");
        }
        console.log("this is homepage, skip loading gumroad");
      }
    } else {
      console.log("content change detected, but not display");
    }
});
observer.observe(targetNode, { attributes: true, childList: true });
