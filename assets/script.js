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

if ('serviceWorker' in navigator) 
{
  console.log("Will the service worker register?");
  navigator.serviceWorker.register('service-worker.js').then(function(reg)
  {
    console.log("Yes, it did.");
  }).catch(function(err) 
  {
    console.log("No it didn't. This happened:", err)
});
}