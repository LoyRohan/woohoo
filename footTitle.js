function title() {
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (xhttp2.readyState == 4 && xhttp2.status == 200) {
            console.log(JSON.parse(xhttp2.responseText));
            var footer = JSON.parse(xhttp2.responseText);

            if(footer._embedded.home_page_block_react){
                var footTit = document.getElementById("foot")
                var title = '';
                footer._embedded.home_page_block_react.forEach( footnav => {
                    
                    if(footnav.content){
                        title += footnav.content;
                    }
                    footTit.innerHTML = title;
                    console.log(title);
                });
                
            }   


       }
    };
    xhttp2.open("GET", "http://localhost/woohoo/static.json", true);
    xhttp2.send(); 
}
title();