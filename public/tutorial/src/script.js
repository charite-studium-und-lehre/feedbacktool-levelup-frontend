let coords = [{

    top:    135,
    height: 240,
    width:  615,

  }, {

    top:    88,
    left:   638,
    height: 221,
    width:  626,

  }, {

    top:    0,
    left:   1264,
    height: 929,
    width:  620,

  }, {

    top:    365,
    left:   637,
    height: 220,
    width:  615,

  }, {

    top:    619,
    height: 250,
    width:  615,

}];

function resize() {

  window.onresize = resize;

  let imgwidth  = 1879
    , width  = window.innerWidth
    , height = window.innerHeight
    , margin = parseInt(window.getComputedStyle(document.getElementById('66wrap')).marginLeft, 10)
    , padding = parseInt(window.getComputedStyle(document.getElementById('dashwrap')).paddingLeft, 10)
    , dashwrap  = document.getElementById('dashwrap')
    , dashboard = document.getElementById('dashboard');

  let scale = (width - (margin + padding) * 2.077) / imgwidth;

  dashboard.style.width = scale * imgwidth;

  let dashrect  = dashboard.getBoundingClientRect();

  for (let i = 0; i < 5; i++) {

    dashwrap.children[i].style.top    = coords[i].top    * scale + dashrect.top;
    dashwrap.children[i].style.left   = coords[i].left   * scale + dashrect.left;
    dashwrap.children[i].style.width  = coords[i].width  * scale;
    dashwrap.children[i].style.height = coords[i].height * scale;
  }
}
