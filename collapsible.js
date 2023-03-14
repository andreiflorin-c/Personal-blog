var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.previousElementSibling.previousElementSibling;
    if (content.style.display === "inline") {
      content.style.display = "none";
    } else {
      content.style.display = "inline";
    }
  });
}

function toggle(el)
{
  var btn = document.getElementById(el);
  if(btn.value=="Citește mai mult") {
    btn.value="Restrânge"
    btn.innerHTML="Restrânge";
  }
  else {
    btn.value="Citește mai mult";
    btn.innerHTML="Citește mai mult";
}
}
