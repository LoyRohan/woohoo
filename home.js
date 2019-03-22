function home() {
    var xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function () {
        if (xhttp1.readyState == 4 && xhttp1.status == 200  ) {
            console.log(JSON.parse(xhttp1.responseText));
            var myhome = JSON.parse(xhttp1.responseText);

            if (myhome.data) {
                document.getElementById("woohooGift").innerHTML = '<h4 class="heading pt-3 pb-3">' + myhome.data.name + '</h4>';
                document.getElementById("woohooIndia").innerHTML = myhome.data.short_description;
            }
            if (myhome.data._embedded) {
                var giftCards = document.getElementsByClassName("cards")[0];
                var giftWord =" " ;
                myhome.data._embedded.products.forEach(gift => {
                    if (gift.entity_id) {
                        giftWord += '<div class="col-lg-3 col-xl-3 col-sm-3 col-xs-3 col-5 col-md-5 p-2"><a href="' + gift.url_key + '"><img class="img-fluid productImg " src="' + gift.images.card_image.card.small + '" /></a><div class="">' + gift.product_name + ' </div><span>'+gift.couponcode_desc+'</span></span></div>';                    }               
                    
                giftCards.innerHTML = giftWord;
                //console.log(giftWord);

                });
            }


        }
    };

    xhttp1.open("GET", "http://localhost/woohoo/category_26.json", true);
    
    xhttp1.send();
}
home();