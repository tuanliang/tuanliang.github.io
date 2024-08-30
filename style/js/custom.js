if (PublicSacrificeDay()) {
  document
    .getElementsByTagName("html")[0]
    .setAttribute(
      "style",
      "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);"
    );
}

function PublicSacrificeDay() {
  var PSFarr = new Array("0707", "0909", "0918", "1109", "1213");
  var currentdate = new Date();
  var str = "";
  var mm = currentdate.getMonth() + 1;
  if (currentdate.getMonth() > 9) {
    str += mm;
  } else {
    str += "0" + mm;
  }
  if (currentdate.getDate() > 9) {
    str += currentdate.getDate();
  } else {
    str += "0" + currentdate.getDate();
  }
  if (PSFarr.indexOf(str) > -1) {
    return 1;
  } else {
    return 0;
  }
}

// 自动网站变灰
// 0707 - 七七事变
// 0909 - 毛主席忌辰
// 0918 - 九一八事变
// 1109 - 娣外公忌辰
// 1213 - 南京公祭日
var bywind = {
  hideTodayCard: function () {
    console.log(11);
    document.getElementById("todayCard") &&
      document.getElementById("todayCard").classList.add("hide");
  },
};
document.querySelector(".topGroup").onmouseenter = function () {
  console.log(2);
};
document.querySelector(".topGroup").onmouseleave = function () {
  console.log(3);
  document.getElementById("todayCard").classList.remove("hide"),
    (document.getElementById("todayCard").style.zIndex = 1);
};
function toAbout() {
  window.location.href = "https://shiyi11.online/about/";
}
