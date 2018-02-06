function click(e) {
  chrome.tabs.executeScript(null,
      {code:`(() => {
        if(window.location.href !== "https://tinder.com/") {
          return alert("Go to tinder.com first!");
        }
        const likeButton = document.getElementsByClassName("recsGamepad__button--like");
        setInterval(() => {
          likeButton[0].click();
          let keepSwiping = document.getElementsByClassName("button Lts($ls-s) Z(0) Whs(nw) Cur(p) Tt(u) Bdrs(100px) Px(24px) Py(0) H(54px) Mih(54px) Lh(50px) button--outline Bdw(2px) Bds(s) Trsdu($fast) Bdc($c-gray) C($c-gray) Bdc($c-base):h C($c-base):h Fw($semibold) Bdc($c-pink) Bdc($c-orange):h C(#fff)!:h Bg(t):h W(100%) D(b) C(#fff) Bg(t) Mt(24px) Mt(12px)--xs Mt(10px)--lsh");
          if (keepSwiping[0]) {
            keepSwiping[0].click()
          }
        }, 1);
      })()`});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
