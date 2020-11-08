let coords = [{
    top:    135,
    left:   0,
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
    left:   0,
    height: 250,
    width:  615,
}];

export default () => {

  if (!document.getElementById('dashwrap')) return;

  let imgwidth  = 1879
    , width     = window.innerWidth
    , margin    = parseInt(window.getComputedStyle(document.getElementById('66wrap')).marginLeft, 10)
    , padding   = parseInt(window.getComputedStyle(document.getElementById('dashwrap')).paddingLeft, 10)
    , dashwrap  = document.getElementById('dashwrap')
    , dashboard = document.getElementById('dashboard')
    , scale     = (width - (margin + padding) * 2) / imgwidth
    , dashrect  = dashboard.getBoundingClientRect()
    , out       = [];

  for (let i = 0; i < 5; i++) {
    let temp = {};

    temp.top    = Math.round(coords[i].top * scale + dashrect.top);
    temp.left   = Math.round(coords[i].left * scale + dashrect.left);
    temp.width  = Math.round(coords[i].width  * scale);
    temp.height = Math.round(coords[i].height * scale);

    out.push(temp);
  }

  return out;
}
