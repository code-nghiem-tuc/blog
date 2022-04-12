document.addEventListener("DOMContentLoaded", function(){
  if ( window.location.pathname !== '/' ) { // if not home page
    const gumroadCode = '<a class="gumroad-button" href="https://codenghiemtuc.gumroad.com/l/buy-me-a-drink">Tặng mình ly nước</a>';
    let content = document.querySelector('.super-content');
    if (content == null) {
      console.warn("cannot find Super's content element, fallback to body");
      content = document.body;
    }
    
    content.insertAdjacentHTML("beforeend", gumroadCode);
    console.log("loaded gumroad");
  } else {
    console.log("this is homepage, skip loading gumroad");
  }
});
