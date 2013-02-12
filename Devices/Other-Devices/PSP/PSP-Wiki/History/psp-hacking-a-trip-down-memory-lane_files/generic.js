function Trim(TRIM_VALUE)
{
	if(TRIM_VALUE.length < 1)
	{
		return "";
	}
	
	TRIM_VALUE = RTrim(TRIM_VALUE);
	TRIM_VALUE = LTrim(TRIM_VALUE);
	
	if (TRIM_VALUE=="")
	{
		return "";
	}
	else
	{
		return TRIM_VALUE;
	}
} //End Function

function RTrim(VALUE)
{
	var w_space = String.fromCharCode(32);
	var v_length = VALUE.length;
	var strTemp = "";
	
	if(v_length < 0)
	{
		return"";
	}
	
	var iTemp = v_length -1;
	while(iTemp > -1)
	{
		if(VALUE.charAt(iTemp) == w_space)
		{
		}
		else
		{
			strTemp = VALUE.substring(0,iTemp +1);
			break;
		}
		iTemp = iTemp-1;
	} //End While
	
	return strTemp;
} //End Function

function LTrim(VALUE)
{
	var w_space = String.fromCharCode(32);
	if(v_length < 1)
	{
		return"";
	}
	var v_length = VALUE.length;
	var strTemp = "";
	var iTemp = 0;

	while(iTemp < v_length)
	{
		if(VALUE.charAt(iTemp) == w_space)
		{
		}
		else
		{
			strTemp = VALUE.substring(iTemp,v_length);
			break;
		}
		iTemp = iTemp + 1;
	} //End While
	
	return strTemp;
} //End Function

function ShowHideElement(Element, Show)
{
	var El = document.getElementById(Element);
	if (Show == 1)
		El.style.display = '';
	else
	{
		El.style.display = 'none';	
	}
}

function GetCookie(sName)
{
	// cookies are separated by semicolons
	var aCookie = document.cookie.split("; ");

	for (var i=0; i < aCookie.length; i++)
	{
		// a name/value pair (a crumb) is separated by an equal sign
		var aCrumb = aCookie[i].split("=");
		if (sName == aCrumb[0])
			return unescape(aCrumb[1]);
	}

	// a cookie with the requested name does not exist
	return null;
}

function SetCookie(name, value, expires, path, domain, secure) {
	document.cookie= name + "=" + escape(value) +
		((expires) ? "; expires=" + expires.toGMTString() : "") +
		((path) ? "; path=" + escape(path) : "") +
		((domain) ? "; domain=" + escape(domain) : "") +
		((secure) ? "; secure" : "");
}

function ApplyShadow()
{
	pg = document.getElementsByTagName("img");

	for(i = 0; i < pg.length; i++)
	{
		if (pg[i].src.indexOf('/uploads/articles_module') > 0)
		{
					src = pg[i].src;
					
					var sp = document.createElement("span");
					sp.id = "tImg";
					div = document.createElement("div");
					div.id = "im";
					div1 = document.createElement("div");
					div1.id = "iSh";
					img = document.createElement("img");

					img.id = "imm";
					img.style.margin = "0px";
					img.src = src;

					if (pg[i].width > 500)
					{
					    img.width = 500;
					}

					div1.appendChild(img);
					div2 = document.createElement("div");
					div2.id = "imd";
					img = document.createElement("img");
					img.style.margin = "0px";
					
					img.src = src;

					if (pg[i].width > 500)
					{
					    img.width = 500;
					}


					div2.appendChild(img);
					div.appendChild(div1);
					div.appendChild(div2);
					sp.appendChild(div);
					sp.style.cursor = "pointer";
					sp.title = pg[i].title;
					var	par = pg[i].parentNode;

					par.replaceChild(sp, pg[i]);
					i++;
		}

		
	}

}

function ResizeImages()
{
	pg = document.getElementsByTagName("img");

	for(i = 0; i < pg.length; i++)
	{
		if (pg[i].src.indexOf('/uploads/articles_module/') > 0)
		{
					if (pg[i].width > 500)
					{
					    pg[i].width = 500;
					}

					i++;
		}

		
	}

}

function FollowLink(Article)
{
	window.location.href = $('m_' + Article).href;
}


//
// getPageScroll()
// Returns array with x,y page scroll values.
// Core code from - quirksmode.org
//
function getPageScroll(){

	var yScroll;

	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop){	 // Explorer 6 Strict
		yScroll = document.documentElement.scrollTop;
	} else if (document.body) {// all other Explorers
		yScroll = document.body.scrollTop;
	}

	arrayPageScroll = new Array('',yScroll)
	return arrayPageScroll;
}
