var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

document.cookie = 'yarii_resolution=' + Math.max(x,y) + '; path=/';
document.cookie = 'yarii_pixelratio=' + ("devicePixelRatio" in window ? devicePixelRatio : "1") + '; path=/';