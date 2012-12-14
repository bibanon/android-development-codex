/*
 * vBSEO UI Control
 */

function vBSEO_UI()
{

this.phpext = 'php';
this.lvisible = 0;
this.tabc = ['','',''];
this.tabno = -1;
this.timer1 = null;
this.close_timer = 1000;

this.page_init = function(aclassname, aoptions)
{
	if(aoptions[0])
	this.phpext = aoptions[0];

	this.lvisible = aoptions[1];

	if(!this.lvisible)
    for(var ci in aclassname)
    {
    var classname = aclassname[ci];
    var elarray = YAHOO.util.Dom.getElementsByClassName(classname);

	YAHOO.util.Event.on(elarray,"mouseover", function () { 
		vbseoui.showhide_sub(1, this, 'vbseo_links');
	});
	YAHOO.util.Event.on(elarray,"mouseout", function () { 
		vbseoui.showhide_sub(0, this, 'vbseo_links'); 
	});

	}

	YAHOO.util.Event.on(YAHOO.util.Dom.get('vbseo-likes'),"mouseover", function () { 
		if(vbseoui.timer1)
		{
			clearTimeout(vbseoui.timer1);
			vbseoui.timer1 = null;
		}
	});

	YAHOO.util.Event.on(YAHOO.util.Dom.get('vbseo-likes'),"mouseout", function () { 
		if(!vbseoui.timer1)
		{
			vbseoui.timer1 = setTimeout('vbseoui.like_set("")',vbseoui.close_timer);
    	}
	});
	YAHOO.util.Event.on(YAHOO.util.Dom.getElementsByClassName("vbseo_like_link"),
		"click", vbseoui.like_click);

}

this.like_switch = function(l_switch)
{
	var dvlikes = YAHOO.util.Dom.get('vbseo-likes');
	var isvis = (dvlikes.className != "");
  	vbseoui.timer1 = null;

  	this.like_set(isvis ? '' : 'vbseo-likes-active');
}

this.like_set = function(classname)
{
	var dvlikes = YAHOO.util.Dom.get('vbseo-likes');
	dvlikes.className = classname;
}

this.like_click = function(thelink)
{
	return vbseoui.uni_click(this, 'like');
}

this.others_click = function(thelink)
{
	return vbseoui.uni_click(thelink, 'others');
}

this.uni_click = function(clicked, action)
{
	var btncont  = YAHOO.util.Dom.getAncestorByClassName(clicked, 'vbseo_buttons');
	if(!btncont)
		return false;
	var contlist = btncont.id.substring(btncont.id.indexOf('lkbtn_')+6);
	var ctype    = contlist.split('.');

	if(!ctype || !ctype[2])return false;
	var cgroup = ctype[1];
	var cid = ctype[2];
	ctype = ctype[0];

	vbseoui.fade_links(ctype, cgroup, cid, false);
	vbseoui.ajax_post(clicked, action, ctype, cgroup, "&contentid="+cid, function (){
		vbseoui.fade_links(ctype, cgroup, cid, true);
	});

	return false;
}

this.tree_dropdown = function ()
{
	vbseoui.like_switch();
	if(this.tabno<0)
	{
		this.treetab_click(0);
	}
	
}

this.treetab_click = function (tab)
{
	var dvlikes = YAHOO.util.Dom.get('vbseo-likes');
	var ultabs  = this.el_by_class('vbseo-likes-tabs');
	var litree  = YAHOO.util.Dom.getElementsBy(function(){return true;}, 'a', ultabs);
	var selli   = clicked = litree[tab];

	var btncont  = YAHOO.util.Dom.getAncestorByClassName(clicked, 'vbseo-likes-container');
	if(!btncont)
		return false;

	var ultree = this.el_by_class('vbseo-likes-list');
	if(ultree)
		this.tabc[this.tabno] = ultree.innerHTML;
	this.tabno = tab;

	var contlist = btncont.id.substring(9);
	var ctype    = contlist.split('.');
	if(!ctype || !ctype[1])
		return false;

	var cgroup = ctype[1];
	ctype = ctype[0];


	if(YAHOO.util.Dom.hasClass(selli, 'active'))
		return false;

	YAHOO.util.Dom.removeClass(litree, 'active');
	YAHOO.util.Dom.addClass(selli, 'active');

	if(this.tabc[tab])
	{
		this.fill_content ('vbseo-likes-list', 'ul', this.tabc[tab], null);
		return false;
	}

	this.like_set(tab ? 'vbseo-likes-tpreload' : 'vbseo-likes-preload');
	var mpar = "&tab="+tab;
	if( typeof vbseoui_pageids != 'undefined')
		mpar += "&cids="+vbseoui_pageids;
	
	vbseoui.ajax_post(clicked, 'treetab', ctype, cgroup, mpar, function (){
		vbseoui.like_set('vbseo-likes-active' );
	});

	return false;
}

this.ajax_post = function (clicked, action, ctype, cgroup, moreparameters, sfunc)
{
    YAHOO.util.Connect.asyncRequest("POST",
    	
    	"ajax." + vbseoui.phpext + "?do=vbseoui", { 

        failure: function() {alert('An error occured.')},
        
        success: function(o) {
        	if(!o.responseXML)
        		return false;

        	sfunc();
        	if(!vbseoui.handle(o, 'error'))
        	{
	        	vbseoui.handle(o, 'self', clicked);
	        	vbseoui.handle(o, 'likelist', clicked);
	        	vbseoui.handle(o, 'ltree', clicked);
        	}
        	
        }
        },
        SESSIONURL+"securitytoken="+SECURITYTOKEN+
        "&do=vbseoui&action="+action+"&contenttype="+ctype+
        "&lurl="+document.location.href+
        "&contentgroup="+cgroup+moreparameters
    );
}

/*
	Action Handlers
*/
this.handle = function (o, htype, theobj)
{	
	var tval;
   	if(tval = vbseoui.get_tag_value(o, htype))
   	{
   		var cid = vbseoui.get_tag_value(o, 'contentid');
   		var ctype = vbseoui.get_tag_value(o, 'contenttype');
   		var cgroup = vbseoui.get_tag_value(o, 'contentgroup');
	   	var lel = YAHOO.util.Dom.get('lkbtn_' + ctype + '.' + cgroup + '.' + cid);
   		switch(htype)
   		{
   			case 'error':
   			alert(tval);
   			break;
	
	   		case 'self':
			this.fill_content ('vbseo_like_link', 'a', tval, lel);
	   		break;
   		
   			case 'likelist':
			var ol = this.fill_content ('vbseo_liked', 'div', tval, lel);
			if(ol)
  			this.showhide(ol, (tval == '.') ? false : true, true);
   			break;

   			case 'ltree':
			this.fill_content ('vbseo-likes-list', 'ul', tval, null);
   			break;
   		}
   		return true;
   	}
   	return false;
}

/*
	Dom Elements Manipulation
*/
this.fill_content = function (classname, tag, tval, lel)
{
  	var ol = YAHOO.util.Dom.getElementsByClassName(classname, tag, lel);
  	if(ol && ol[0])
  	{
  		ol[0].innerHTML = tval;
  	}
  	return ol[0];
}

this.fade_links = function (ctype, cgroup, contentid, dofade)
{
	this.fade('lkbtn_' + ctype + '.' + cgroup + '.' + contentid, dofade);
}

this.fade = function (elid, dofade)
{
	YAHOO.util.Dom.setStyle(elid, 'visibility', 'visible');
	YAHOO.util.Dom.setStyle(elid, 'opacity', dofade ? '1.0' : '0.2');
}

this.showhide = function (els, doshow, disp)
{
	YAHOO.util.Dom.setStyle(els, 'visibility', doshow ? 'visible' : 'hidden');
	if(disp)
	YAHOO.util.Dom.setStyle(els, 'display', doshow ? 'block' : 'none');
}

this.showhide_sub = function(show, root, classname)
{
	var el_links = YAHOO.util.Dom.getElementsByClassName('vbseo_links', '', root, false);
	this.showhide(el_links, show);
}


this.el_by_class = function (classname)
{
	var alcont = YAHOO.util.Dom.getElementsByClassName(classname);
	return alcont ? alcont[0] : null;
}

/*
	XML parse
*/
this.get_tag_value = function (o, tagname)
{	
	var arr = this.get_tags(o, tagname);
	if(arr)
		return this.get_value(arr);
	else
		return null;
}

this.get_tags = function (o, tagname)
{	
	if(o.responseXML && o.responseXML.documentElement)
	{
		var tlist = o.responseXML.documentElement.getElementsByTagName(tagname);
		return tlist.length>0 ? tlist : null;
	}
	else
		return null;
}

this.get_value = function (arr, ind)
{	
	if(typeof ind == 'undefined')
		ind = 0;
		
	return (arr[ind] && arr[ind].firstChild) ? arr[ind].firstChild.nodeValue : '';
}

}

