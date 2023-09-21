const graypluses = document.querySelectorAll(".option")
const expansions = document.querySelectorAll(".expansion")
const actualPluses = document.querySelectorAll(".grayplus svg")

let p = -1

for (let i = 0; i < graypluses.length; i++) {
    graypluses[i].addEventListener("click", () => {
        for (let z = 0; z < expansions.length; z++) {
            expansions[z].style.display = "none"

            actualPluses[z].style.transform = "none"
            actualPluses[z].style.fill = "#D9D9D9!important"
            setTimeout(() => {
                expansions[z].style.opacity = "0"
                expansions[z].style.maxHeight = "0px"

            }, 10)
        }
        if (p == i) {
            p = -1
            return
        }
        p = i
        expansions[p].style.display = "flex"
        actualPluses[p].style.fill = "#414141"
        actualPluses[p].style.transform = "rotate(45deg)"
        setTimeout(() => {
            expansions[p].style.opacity = "1"
            expansions[p].style.maxHeight = "10000px"

        }, 10)
    })

}

$(function () {
    $('#accordion').on('shown.bs.collapse', function (e) {
        var offset = $('.option.panel-default > .panel-collapse.in').offset();
        if(offset) {
            $('html,body').animate({
                scrollTop: $('.cli').offset().top -20
            }, 500); 
        }
    }); 
});



/*
  ICON AUTO PLAYS
  HOVER OVER ICON
  TO MAKE IT INTERACTIVE
*/

upInteractive = false;

function autoToggle() {
  $('.arrow').toggleClass('auto');
}

$('.arrow').hover(function() {
  upInteractive = true;
  $('.arrow').removeClass('auto');
});

setInterval(function(){ 
  
  console.log(upInteractive);
  
  if(upInteractive === false) {
    autoToggle();
  }

},2000);