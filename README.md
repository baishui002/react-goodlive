### 拉取配置项
npm run eject

### 支持rem

放在public/index.html  head下面
50基数
    <script>
      (function (doc, win) {
          var docEl = doc.documentElement,
                  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                  recalc = function () {
                      var clientWidth = docEl.clientWidth;
                      if (!clientWidth) return;
                      if(clientWidth>=750){
                          docEl.style.fontSize = '100px';
                      }else{
                          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                      }
                  };

          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
      })(document, window);
    </script>