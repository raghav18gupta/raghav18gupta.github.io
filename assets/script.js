  document.addEventListener('DOMContentLoaded', function() 
  {
    var elems = document.querySelectorAll('.sidenav');

    var instance = M.Sidenav.init(elems, 
    {
      edge: 'left',
      draggable: true,
      inDuration: 250,
      outDuration: 200,
      onOpenStart: null,
      onOpenEnd: null,
      onCloseStart: null,
      onCloseEnd: null,
      preventScrolling: true
    });

    var instance = M.Sidenav.getInstance(elems);
    // instance.open();

  });