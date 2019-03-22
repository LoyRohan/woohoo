function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText));
      response = JSON.parse(this.responseText);
      //document.getElementById('storename').innerHTML = response.cdn;
      if (response.header.download_app) {
        document.getElementById("download_app").innerHTML =
          '<a class="" style="text-decoration: none; color: white" href="' +
          response.header.download_app.href +
          '">' +
          response.header.download_app.label +
          "</a>";
      }
      if (response.header.logo) {
        var logoElements = document.getElementsByClassName("logoimg");
        for (var i = 0; i < logoElements.length; i++) {
          logoElements[i].innerHTML =
            '<a href="' +
            response.header.logo.href +
            '"><img src=' +
            response.store_configuration.media_url +
            response.header.logo.url +
            "></a>";
        }
      }
      if (response.header.top_menu) {
        var navBar = document.getElementsByClassName("navigationbar")[0],
          navItemsDiv = "",
          isDropDown = false;
        response.header.top_menu.forEach(navItem => {
          if (navItem.href) {
            navItemsDiv +=
              '<div class="nav-item "><a class="nav-link" href="' +
              navItem.href +
              '">' +
              navItem.label +
              "</a></div>";
          }
          if (navItem.menu) {
            isDropDown = true;
            navItemsDiv +=
              '<div class="nav-item dropdown"><a class="nav-link dropdown-toggle" >' +
              navItem.label +
              "</a></div>";
          }
        });
        navBar.innerHTML = navItemsDiv;

        /* if(isDropDown){
                        response.header.top_menu.forEach(navItem => {
                            if(navItem.menu){
                                var navDropDown = document.getElementsByClassName('topmenu dropdown')[0];
                                console.log(navDropDown);
                                navItem.menu.forEach(subItem =>{
                                    console.log(subItem);
                                    if(subItem.menu){

                                    }
                                })
                            }
                            
                        }); 
                    }*/

      }

      if (response.footer.copyright) {
        document.getElementById("Copyright").innerHTML = response.footer.copyright;
      }
      if (response.footer.menu) {
        var terms = document.getElementsByClassName("T&C")[0];
        contactUs = "";
        response.footer.menu.forEach(condition => {
          if (condition.href) {
            contactUs += '<a class="p-1 " style="text-decoration:none; color: white;" href="' +
              condition.href +
              '">' +
              condition.label +
              "</a>";
          }

          terms.innerHTML = contactUs;
          console.log(contactUs);
        });
      }

      if (response.footer.social) {
        var socialIcons = document.getElementsByClassName("socialMedia")[0];
        icons = " ";
        response.footer.social.forEach(media => {
          if (media.href) {
            icons +=
              '<a href="' +
              media.href +
              '"><img width="34" src="' +
              response.store_configuration.media_url +
              media.image +
              '"></a>';
          }

          socialIcons.innerHTML = icons;
          console.log(icons);
        });
      }



      if (response.banner.homebanner) {
        var homeImg = document.getElementsByClassName("carousel-inner")[0];
        slideImage = " ";
        response.banner.homebanner.forEach((slider, index) => {
          if (slider.href && index == 0) {
            slideImage += '<div class="carousel-item active"><a href="' + slider.href + '"><img src="' + slider.image + '" class="img-fluid "></a></div>';
          } else {
            slideImage += '<div class="carousel-item"><a href="' + slider.href + '"><img src="' + slider.image + '" class="img-fluid "></a></div>';
          }
          homeImg.innerHTML = slideImage;
          //console.log(slideImage);
        });
      }




      if (response.banner.web_homebanner_mobile) {
        var mobBanner = document.getElementsByClassName("mobileBanner")[0];
        mBanner = " ";
        response.banner.web_homebanner_mobile.forEach(mSlider => {
          if (mSlider.image) {
            mBanner += '<div class="carousel-item active"> <a href="' + mSlider.href + '"><img class="d-block w-100" src="' + mSlider.image + '" alt="First slide" ></a></div>';
          } else {
            mBanner += '<div class="carousel-item "> <a href="' + mSlider.href + '"><img class="d-block w-100" src="' + mSlider.image + '" alt="First slide" ></a></div>';
          }
          mobBanner.innerHTML = mBanner;
          console.log(mBanner);
        });
      }

      if (response.banner.home_widget) {
        var homeWidget = document.getElementsByClassName("home-Widget")[0];
        widget = "";
        response.banner.home_widget.forEach(blackBG => {
          if (blackBG.alt) {
            widget += '<div class="col-9 col-xl-3 col-lg-3 col-md-8 col-sm-7"><a href="' + blackBG.href + '"><img src="' + blackBG.image + '"></a></div>'
          }
          homeWidget.innerHTML = widget;
          //console.log(widget);
        });
      }
    }
  };
  xhttp.open("GET", "http://localhost/woohoo/settings.json", true);
  xhttp.send();
}

loadDoc();