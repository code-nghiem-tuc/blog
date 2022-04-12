var targetNode = document.querySelector('.super-content');
if (targetNode == null) {
  console.warn("cannot find Super's content element, fallback to body");
  targetNode = document.body;
}

var observer = new MutationObserver(function(){
    if(targetNode.style.display != 'none'){
      console.log("content display detected");
      
      if ( window.location.pathname !== '/' ) { // if not home page
        const button = document.querySelector(".gumroad-button");
        if (button !== null) {
          console.log("gumroad already loaded, do nothing");
        } else {
          const gumroadCode = '<a class="gumroad-button" href="https://codenghiemtuc.gumroad.com/l/buy-me-a-drink">Tặng mình ly nước</a>';
          targetNode.insertAdjacentHTML("beforeend", gumroadCode);
          console.log("loaded gumroad");
        }
      } else {
        console.log("this is homepage, skip loading gumroad");
      }
    } else {
      console.log("content change detected, but not display");
    }
});
observer.observe(targetNode, { attributes: true, childList: true });
