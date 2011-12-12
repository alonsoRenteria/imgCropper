var imageCrop = function(params){
    var _pub                    = {};
    _pub.limit                  = {};
    _pub.limit.minWidth         = 60;
    _pub.limit.minHeight        = 60;
    _pub.imgProperties          = {};
    _pub.imgProperties.Width    = 0;
    _pub.imgProperties.Height   = 0;
    _pub.container;
    _pub.img;
    _pub.cropArea;
   
    _pub.init = function () {
        _pub.container = document.getElementById(params.container);
        _pub.img = _pub.getImage();   
    //_pub.cropArea = _pub.getCropArea();
	_pub.img.onclick = function(){
        _pub.cropArea = _pub.getCropArea();
        //_pub.cropArea = new cropArea(event.screenX , event.screenY);
        console.log(event.screenX,event.screenY);
    }
	
    };
    
    _pub.getImage = function () {
        var 
        imgArray = _pub.container.getElementsByTagName("img"),
        img = false;
        
        if (imgArray.length > 0) {
             img = imgArray[0];
        }
        return img;
    };
	
	// obtiene el div -> copper
	_pub.getCropArea = function () { 
		var 
		divArray = _pub.container.getElementsByTagName("div");
		cropArea = false;
		console.log(divArray);
		
		if (divArray.length > 0){
			cropArea = divArray[0];	
		}
		cropArea.onmousedown = function(){
                    console.log("coords",event.screenX,event.screenY);
		}		
		return cropArea;			
	};
    
    _pub.getSize = function (img) {
        var width = img.width;
        var height = img.height;   
    };
    
    return _pub;
};

//@alonso: esta es la clase Crop Area,su constructor recibe
// la posicion inicia. ejemplo:
// var ca = new cropArea(event.screenX,avent.screenY);
var cropArea = function(posx , posy){
    var _pub  = {};
    _pub.posX;
    _pub.PosY
    _pub.height;
    _pub.width;
    _pub.isOnMove = false;
    _pub.cropArea;

    //inicializa los objetos cropArea
    _pub.init = function () {
        _pub.cropArea = document.createElement("div");
        _pub.cropArea.setAttribute("class", "cropperA")
        _pub.cropArea.style.position = "absolute";
        _pub.cropArea.style.top = event.screenX + "px";
	_pub.cropArea.onmousedown = function(){
            _pub.isOnMove = true;
            _pub.moveArea();
        }
    };

    //se ejecutara mientras este en movimiento el cropArea
    _pub.moveArea = function(){
        do{

        }while(isOnMove);

    };
}