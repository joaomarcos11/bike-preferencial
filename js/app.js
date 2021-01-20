// Scroll no window
$(window).scroll(() => {

  // Offsets dos Slides
  let menuTopOffset = $("#nav-side").offset().top;

  const inicioTopOffset = $("#inicio").offset().top;
  const inicioHeight = $("#inicio").height();

  const faixaTopOffset = $("#faixa").offset().top;
  const faixaHeight = $("#faixa").height();

  const utilizarTopOffset = $("#utilizar").offset().top;
  const utilizarHeight = $("#utilizar").height();

  const pesquisaTopOffset = $("#pesquisa").offset().top;
  const pesquisaHeight = $("#pesquisa").height();

  // Offsets dos Spots
  const spot2TopOffset = $(".spot2").offset().top;
  const spot3TopOffset = $(".spot3").offset().top;
  const spot4TopOffset = $(".spot4").offset().top;

  $("#nav-side").offset({
    top: ($(this).scrollTop() + 40)
  });

  ToggleClassLinkActive(menuTopOffset, inicioTopOffset, inicioHeight, "inicio");
  ToggleClassLinkActive(menuTopOffset, faixaTopOffset, faixaHeight, "faixa");
  ToggleClassLinkActive(menuTopOffset, utilizarTopOffset, utilizarHeight, "utilizar");
  ToggleClassLinkActive(menuTopOffset, pesquisaTopOffset, pesquisaHeight, "pesquisa");

  AddClassHighlighted(menuTopOffset, spot2TopOffset, "spot2");
  AddClassHighlighted(menuTopOffset, spot3TopOffset, "spot3");
  AddClassHighlighted(menuTopOffset, spot4TopOffset, "spot4");
});

function ToggleClassLinkActive(menuTopOffset, linkTopOffSet, slideHeight, hashLink) {
  if(menuTopOffset > linkTopOffSet) {
    $(`#nav-side a[href^="#${hashLink}"]`).addClass('anchor-active');
  }
  if(menuTopOffset > (linkTopOffSet + slideHeight)) {
    $(`#nav-side a[href^="#${hashLink}"]`).removeClass('anchor-active');
  }
  if(menuTopOffset < linkTopOffSet) {
    $(`#nav-side a[href^="#${hashLink}"]`).removeClass('anchor-active');
  }
}

function AddClassHighlighted(menuTopOffset, spotTopOffset, hashSpot) {
  if((menuTopOffset + 200) > spotTopOffset) {
    $(`.${hashSpot}`).addClass("highlightedJQ");
  }
  // TODO
  // o transition não está funcionando
  // o background deve aparacer de forma sutil
}


