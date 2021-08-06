const automapsArroyoNavi = '<ul class="status">\
  <li class="c" onclick="page(\'automaps-arroyo-temple\')">Part 1</li>\
  <li class="c" onclick="page(\'automaps-arroyo-village\')">Part 2</li>\
</ul>\
';

screens['automaps-arroyo-temple'] =
  '<h2 class="title">CHIPMAPS</h2>'
  + '<h3>DEAL</h3>'
  + automapsArroyoNavi
  + '<img class="map" src="img/automaps-arroyo-temple.png"/>'
  + automapsBack;
