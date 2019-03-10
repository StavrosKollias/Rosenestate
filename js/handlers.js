// mobile nav handler
var mobilebtn = document.getElementsByClassName("btn")[0];
var mobileBtncontainer = document.getElementsByClassName("mobile-btn")[0];
var navmenu = document.getElementsByClassName("nav-menu")[0];

mobilebtn.addEventListener("click", function(e) {
   if (mobilebtn.classList.length == 1) {
      mobilebtn.classList.add("active");
      navmenu.classList.add("active");
   } else {
      mobilebtn.classList.remove("active");
      navmenu.classList.remove("active");
   }
});

// dots background header handler
var dotBtn = document.getElementsByClassName("dot");
var headerdetails = document.getElementsByClassName("header__details")[0];
var headerdetails2 = document.getElementsByClassName("header__details-2")[0];
var headerdetails3 = document.getElementsByClassName("header__details-3")[0];
var header = document.getElementsByClassName("header")[0];
for (i = 0; i < dotBtn.length; i++) {
   dotBtn[i].addEventListener("click", function(e) {
      if (e.target.classList == "active") {
      } else {
         for (i = 0; i < dotBtn.length; i++) {
            if (dotBtn[i].classList.length == 2) {
               dotBtn[i].classList.remove("active");
            }
         }
         e.target.classList.add("active");
         console.log("dot was clicked");
         for (i = 0; i < e.target.parentElement.children.length; i++) {
            if (e.target.parentElement.children[i].classList.length == 2) {
               console.log(i);
               switch (i) {
                  case 0:
                     headerdetails.classList.add("active");
                     headerdetails2.classList.remove("active");
                     headerdetails3.classList.remove("active");
                     header.classList.add("active-0");
                     header.classList.remove("active-1");
                     header.classList.remove("active-2");
                     break;
                  case 1:
                     headerdetails2.classList.add("active");
                     headerdetails.classList.remove("active");
                     headerdetails3.classList.remove("active");
                     header.classList.add("active-1");
                     header.classList.remove("active-0");
                     header.classList.remove("active-2");
                     break;
                  case 2:
                     headerdetails3.classList.add("active");
                     headerdetails.classList.remove("active");
                     headerdetails2.classList.remove("active");
                     header.classList.add("active-2");
                     header.classList.remove("active-0");
                     header.classList.remove("active-1");
                     break;
               }
            }
         }
      }
   });
}
