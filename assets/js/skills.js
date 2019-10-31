// init Masonry
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });