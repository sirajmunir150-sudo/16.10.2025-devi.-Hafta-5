function changeImage(element) {
  let mainImage = document.getElementById("mainImage");
  mainImage.src = element.src;
}

function openTab(tabName) {
  let tabs = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
    }
