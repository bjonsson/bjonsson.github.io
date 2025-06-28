function ads(){
    
var ad = new Array(5);
    
picture = 
    document.getElementById("adArray");

ad[0] = "images/cbs.jpg";
ad[1] = "images/discovery.jpg";
ad[2] = "images/picard.jpg";
ad[3] = "images/picard2.jpg";
ad[4] = "images/twilightzone.jpg";
    
i = Math.floor(Math.random() * ad.length);

picture.src = ad[i];
}

ads();