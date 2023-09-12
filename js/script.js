

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":976},"pages":[{"id":"page-acceuil","displayName":"Acceuil","link":{"linkType":"LinkTypePage","href":"#!page-acceuil"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-book-et-manuel","displayName":"book-et-manuel","link":{"linkType":"LinkTypePage","href":"#!page-book-et-manuel"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-toile","displayName":"toile","link":{"linkType":"LinkTypePage","href":"#!page-toile"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-structure","displayName":"structure","link":{"linkType":"LinkTypePage","href":"#!page-structure"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-bambou","displayName":"bambou","link":{"linkType":"LinkTypePage","href":"#!page-bambou"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-plancher","displayName":"plancher","link":{"linkType":"LinkTypePage","href":"#!page-plancher"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-legislation-flex-yourte","displayName":"legislation-flex-yourte","link":{"linkType":"LinkTypePage","href":"#!page-legislation-flex-yourte"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-panneau-photovoltaique","displayName":"panneau-photovoltaique","link":{"linkType":"LinkTypePage","href":"#!page-panneau-photovoltaique"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-plans-flex-yourte","displayName":"plans-flex-yourte","link":{"linkType":"LinkTypePage","href":"#!page-plans-flex-yourte"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-liste-calculateur","displayName":"liste-calculateur","link":{"linkType":"LinkTypePage","href":"#!page-liste-calculateur"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-calculateur-3d","displayName":"calculateur-3d","link":{"linkType":"LinkTypePage","href":"#!page-calculateur-3d"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-calculateur-plancher","displayName":"calculateur-plancher","link":{"linkType":"LinkTypePage","href":"#!page-calculateur-plancher"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-calculateur-toile","displayName":"calculateur-toile","link":{"linkType":"LinkTypePage","href":"#!page-calculateur-toile"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-calculateur-1-0-yourte","displayName":"calculateur-1.0-yourte","link":{"linkType":"LinkTypePage","href":"#!page-calculateur-1-0-yourte"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-calculateur-bambou","displayName":"calculateur-bambou","link":{"linkType":"LinkTypePage","href":"#!page-calculateur-bambou"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-calculateur-corde","displayName":"calculateur-corde","link":{"linkType":"LinkTypePage","href":"#!page-calculateur-corde"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-calculateur-surface-","displayName":"calculateur-surface ","link":{"linkType":"LinkTypePage","href":"#!page-calculateur-surface-"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-info","displayName":"info","link":{"linkType":"LinkTypePage","href":"#!page-info"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-echange","displayName":"echange","link":{"linkType":"LinkTypePage","href":"#!page-echange"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-betatest","displayName":"betatest","link":{"linkType":"LinkTypePage","href":"#!page-betatest"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}






$( document ).ready(function() {
    $(".tuch").mouseover(function() {
$(this).addClass("bobylou");
    });
 $(".tuch").mouseout(function() {
$(this).removeClass("bobylou");
   });
});







var layerCount = 5;
var starCount = 400;
var maxTime = 30;
var universe = document.getElementById("universe");
var w = window;
var d = document;
var e = d.documentElement;
var g = d.getElementsByTagName("body")[0];
var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = w.innerHeight || e.clientHeight || g.clientHeight;
for (var i = 0; i < starCount; ++i) {
  var ypos = Math.round(Math.random() * height);
  var star = document.createElement("div");
  var speed = 1000 * (Math.random() * maxTime + 1);
  star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
  star.style.backgroundColor = "white";

  universe.appendChild(star);
  star.animate(
    [
      {
        transform: "translate3d(" + width + "px, " + ypos + "px, 0)"
      },
      {
        transform:
          "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)"
      }
    ],
    {
      delay: Math.random() * -speed,
      duration: speed,
      iterations: 1000
    }
  );
}

var elem = document.querySelector(".pulse");
var animation = elem.animate(
  {
    opacity: [0.5, 1],
    transform: ["scale(0.5)", "scale(1)"]
  },
  {
    direction: "alternate",
    duration: 500,
    iterations: Infinity
  }
);












var divBichon =  document.querySelector("#bichon")
var button_menux =  document.querySelector("#button_menux")
//YdivBichon = divBichon


function reveal() {
    var windowHeight = window.innerHeight;
    let SPTop = window.scrollY;
   // console.log(SPTop)


if (SPTop < 400)
{
    divBichon.style.transform = "translateY(0px)";
   
}
if (SPTop > 400 & SPTop < 900)
{
    y = SPTop - 400
    //console.log(y)
    divBichon.style.transform = "translateY("+y+"px)";
    
}    

if (SPTop < 600) {
    $("#button_menux").addClass("cachee")

    console.log("button cacchee")
    $("#menuflottant").addClass("cachee")

    console.log( $("#menuflottant"))

}
else 
{
    $("#button_menux").removeClass("cachee")
    $("#menuflottant").removeClass("cachee")
}

  
   
  
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
$(document).ready(function() {
    reveal();
  })




 <script src="http://code.jquery.com/jquery-latest.min.js">

      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
      });

      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
      });

      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
      });