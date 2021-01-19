// Scroll no window
$(window).scroll(() => {
  let menuTopOffset = $("#nav-side").offset().top;

  const inicioTopOffset = $("#inicio").offset().top;
  const inicioHeight = $("#inicio").height();

  const faixaTopOffset = $("#faixa").offset().top;
  const faixaHeight = $("#faixa").height();

  const utilizarTopOffset = $("#utilizar").offset().top;
  const utilizarHeight = $("#utilizar").height();

  const pesquisaTopOffset = $("#pesquisa").offset().top;
  const pesquisaHeight = $("#pesquisa").height();

  $("#nav-side").offset({
    top: ($(this).scrollTop() + 40)
  });

  if(menuTopOffset > faixaTopOffset) {
    $('#nav-side a[href^="#faixa"]').addClass('anchor-active');
  }
  if(menuTopOffset > (faixaTopOffset + faixaHeight)) {
    $('#nav-side a[href^="#faixa"]').removeClass('anchor-active');
  }
  if(menuTopOffset < faixaTopOffset) {
    $('#nav-side a[href^="#faixa"]').removeClass('anchor-active');
  }

  // console.log(`Menu: ${menuTopOffset}`);
  // console.log(`Faixa: ${faixaTopOffset}`);
});




