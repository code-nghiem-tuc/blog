document.addEventListener("DOMContentLoaded", function(){
  if ( window.location.pathname =!= '/' ) { // if not home page
    const gumroadCode = '<a class="gumroad-button" href="https://codenghiemtuc.gumroad.com/l/buy-me-a-drink">Tặng mình ly nước</a>';
    document.body.insertAdjacentHTML("beforeend", gumroadCode);
  }
});
