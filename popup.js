function click(e) {
  chrome.tabs.executeScript(null,
      {code:`(() => {
        if(window.location.href !== "https://tinder.com/app/recs") {
          alert("Go to tinder.com first!");
        }
        setInterval(() => {
	  const likeButton = document.querySelector("#content > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > div > main > div > div.recsCardboard.W\\(100\\%\\).Mt\\(a\\).H\\(100\\%\\)--s.Px\\(10px\\)--s.Pos\\(r\\) > div > div.Pos\\(r\\).Py\\(16px\\).Px\\(4px\\).Px\\(8px\\)--ml.D\\(f\\).Jc\\(sb\\).Ai\\(c\\).Maw\\(375px\\)--m.Mx\\(a\\).Pe\\(n\\).Mt\\(-1px\\) > div:nth-child(4) > button");
          likeButton.click();
        }, 50);
      })()`});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('a');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
