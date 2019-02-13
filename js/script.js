// flickity
var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
  cellAlign: 'center',
  contain: true,
  hash: true,
  pageDots: false
});

  // button reset
  var btnRestart = document.querySelector('.btn-restart');
  btnRestart.addEventListener('click', function(){
    flkty.select(0);
  });

  // scroll
  var progressBar = document.querySelector('.progress-bar');
  
  flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
  });