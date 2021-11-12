var mediaqueryList = window.matchMedia("(max-width: 800px)");
mediaqueryList.addListener( function(EventoMediaQueryList) {
  if(EventoMediaQueryList.matches) {
    var rights;

    rights = document.getElementById("email");
    rights.innerHTML = "example@ email.com";
  }
});

//responsive 2

var mediaqueryList = window.matchMedia("(min-width: 800px)");
mediaqueryList.addListener( function(EventoMediaQueryList) {
  if(EventoMediaQueryList.matches) {
    var rights;

    rights = document.getElementById("email");
    rights.innerHTML = "example@email.com";
  }
});