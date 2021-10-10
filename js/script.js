var changeablelink = document.querySelectorAll(".changeablelink");
var img = document.querySelectorAll(".Allcars");

for(var i=0; i<changeablelink.length; i++){
    changeablelink[i].onclick = function(e){
        e.preventDefault();

        for(var j=0; j<img.length; j++){
            if(img[j].classList.contains(this.getAttribute("data-car"))){
                img[j].style.display = "block";
            }
            else{
                img[j].style.display = "none";
            }
        }
    };
}
