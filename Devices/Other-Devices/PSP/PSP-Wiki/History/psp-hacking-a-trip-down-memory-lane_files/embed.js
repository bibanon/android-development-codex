/** @param ver 1.1*/
if(!window['sbvideo'])
{
	window['sbvideo'] = {};
	
	if (!window['sbvideo']['loader']) {
		window['sbvideo']['loader'] = {};
    
	    //By default use prod
	    sbvideo.loader.env = 'www.';
		sbvideo.loader.debug = false;		//Turn on Console Debug
		sbvideo.loader.loadFromDev = false; //Will load scripts from dev and data from live
		sbvideo.loader.loadFromLocalhost = false; //Will load scripts from LOCACLHOST and data from live
	
		var simulateiDevice = false, scripts = document.getElementsByTagName("script"), p=/http:\/\/(dev.|stg.|www.)springboardplatform.com\/jsapi\/embed(\/)?/ig;		//Chnage storage => jsapi
		try {
			simulateiDevice = sbSimulateiDevice;
		}catch(e){}
		
		
		//GET ENVIRONMENT FROM LOADER SCRIPT URL EXAMPLE: http://dev.springboardplatform.com/jsapi/embed -> points to sb.loader.js
		if(!sbvideo.loader.loadFromDev && !sbvideo.loader.loadFromLocalhost) {
			for(var s in scripts) {
				p.compile(p);	//We need to compile each time we use it (iPhone fix)
				var scr=scripts[s].src;
				if(scr!=null && scr!="" && p.test(scr)) {
					p.compile(p);
					var envs = p.exec(scr); //.match(patt);
					if(envs!=undefined && envs[1]!=undefined) {
						sbvideo.loader.env = envs[1];
					}
					break;
				}
			}
		}
		
		//SET PATH TO JS API FILES/PLUGINS
		if(!sbvideo.loader.loadFromLocalhost) {
			sbvideo.loader.jsApiBase = 'http://'+(sbvideo.loader.loadFromDev==true ? 'dev.' : sbvideo.loader.env)+'springboardplatform.com/jsapi/embed/'; //Change storage/js/embed/lib/ -> jsapi/embed/
		} else {
			sbvideo.loader.jsApiBase = 'http://localhost/test/jsapi/lib/'; 
		}
		
		
		(function() {
			var d =  document, pl = ['sb'], idev =['cp','ip','ap'];
			if(/iPad|iPhone|iPod|Android/i.test(navigator.userAgent) || simulateiDevice){
				for(var i in idev){if(typeof idev[i] != 'function') pl.push(idev[i]);} //Load html5 plugins only on mobile device
			}
			for(var i in pl){
				if(typeof pl[i] != 'function') { //Prevent mootools
					d.write('<script src="' + sbvideo.loader.jsApiBase+pl[i]+'.js" type="text/javascript"><\/script>');
				}
			}
				
		})();
	}
}