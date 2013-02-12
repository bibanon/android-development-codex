function JCommentsEvents(){}
function JCommentsInput(){}
function JCommentsIndicator(){this.init();}
function JCommentsForm(id,editor){this.init(id,editor);}
function JCommentsEditor(textarea,resizable){this.init(textarea,resizable);}
function JComments(oi,og,r){this.init(oi,og,r);}

JCommentsEvents.prototype = {
	add: function(o,e,f){if(o.addEventListener){o.addEventListener(e,f,false);return true;}else if(o.attachEvent){return o.attachEvent("on"+e,f);}else{return false;}},
	remove: function(o,e,f){if(o.removeEventListener){o.removeEventListener(e,f,false);}else if(o.detachEvent){o.detachEvent( "on"+e,o[e+f] );o[e+f]=null;o["e"+e+f]=null;}},
	cancel: function(e){if(e.stopPropagation){e.cancelBubble=true;e.preventDefault();e.stopPropagation();}e.returnValue=false;return false;},
	target: function(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType==3)t=t.parentNode;return t;}
};

JCommentsInput.prototype = {
	register: function(el){if(el){var th=this,events=new JCommentsEvents();events.add(el,'focus',function(e){return th.onFocus(e);});events.add(el,'blur',function(e){return th.onBlur(e);});}},
	unregister: function(el){if(el){var th=this,events=new JCommentsEvents();events.remove(el,'focus',function(e){return th.onFocus(e);});events.remove(el,'blur',function(e){return th.onBlur(e);});}},
	onFocus: function(e){var t=JCommentsEvents.prototype.target(e);if(t!=null){t.className=t.className.replace('error','')+' selected';}},
	onBlur: function(e){var t=JCommentsEvents.prototype.target(e);if(t!=null){var c=t.className.replace('error','');c=c.replace('error','');c=c.replace('selected','');t.className=c.replace(/^\s+/g,"");}}
};

JCommentsEditor.prototype = {
	ta: null,
	l10n: {},
	tags: {},
	smiles: {},
	events: null,
	counter: null,
	focused: false,
	resizable: true,

	init: function(textareaID, r) {
		this.ta=JComments.prototype.$(textareaID);
		this.panelElements={};
		this.l10n={counterPre:'',counterPost:' symbols left',enterValue: 'Enter value'};
		this.resizable=r;
		this.events=new JCommentsEvents();
		this.defaultHeight=this.ta.clientHeight;
		this.defaultRows=this.ta.rows;
		if(this.resizable){this.addGrippie();}
		this.isWebkit=/webkit/.test(navigator.userAgent.toLowerCase());

		var th = this;
		this.events.add(document,!window.opera&&document.all?'keydown':'keypress',function(e){return th.onKeyPress(e);});
		this.events.add(this.ta,'click',function(e){th.closeSmiles();return th.storeCaret(this.ta);});
		this.events.add(this.ta,'select',function(e){return th.storeCaret(this.ta);});
		this.events.add(this.ta,'change',function(e){th.onChange(); return th.storeCaret(this.ta);});
		this.events.add(this.ta,'keyup',function(e){return th.onChange();});
		this.events.add(this.ta,'focus',function(e){th.closeSmiles(); return th.focused=true;});
		this.events.add(this.ta,'blur',function(e){return th.focused=false;});
	},
	onKeyPress: function(e) {
		if (!this.focused){return;}
		var r=false,k=String.fromCharCode(e.keyCode?e.keyCode:e.charCode),t=null;
		for(var id in this.tags){
			t=this.tags[id];
			if(!t.key||k.toUpperCase()!=t.key.toUpperCase())continue;
			if(t.ctrl&&!e[t.ctrl+"Key"])continue;
			this.insertTag(id);
			return this.events.cancel(e);
		}
		return e.returnValue;
	},
	defined: function(v){return (typeof(v)!="undefined");},
	clear: function(){this.ta.value='';if(this.defaultHeight){this.ta.style.height=this.defaultHeight+'px';}this.updateCounter();},
	focus: function(){this.ta.focus();},
	storeCaret: function(){var ta=this.ta;if(ta.createTextRange)ta.caretPos=document.selection.createRange().duplicate();},
	getElementPos: function(e){var p={left:0,top:0,right:0,bottom:0};while(e!=null){p.left+=e.offsetLeft;p.top+=e.offsetTop;e=e.offsetParent;}p.right+=p.left;p.bottom+=p.top;return p;},
	getSelection: function(){var ta=this.ta,s='';if(document.selection&&document.selection.createRange){s=document.selection.createRange().text;}else{s=ta.value.substr(ta.selectionStart,ta.selectionEnd-ta.selectionStart);}return s;},
	insertText: function(text) {
		var ta=this.ta;
		if(this.defined(ta.caretPos)&&ta.createTextRange){ta.focus();var sel=document.selection.createRange();sel.text=sel.text+text;ta.focus();}
		else if(this.defined(ta.selectionStart)){
			var ss=ta.value.substr(0, ta.selectionStart);
			var se=ta.value.substr(ta.selectionEnd),sp=ta.scrollTop;
			ta.value=ss+text+se;
			if(ta.setSelectionRange){ta.focus();ta.setSelectionRange(ss.length+text.length,ss.length+text.length);}
			ta.scrollTop=sp;
		} else {ta.value+=text;ta.focus(ta.value.length-1);}
	},
	surroundText: function(t1,t2) {
		var ta=this.ta;
		if (this.defined(ta.caretPos) && ta.createTextRange){
			var cp=ta.caretPos,tl=cp.text.length;
			cp.text=cp.text.charAt(cp.text.length-1)==' '?t1+cp.text+t2+' ':t1+cp.text+t2;
			if(tl==0){cp.moveStart("character",-t2.length);cp.moveEnd("character",-t2.length);cp.select();}
			else{ta.focus(cp);}
		}else if(this.defined(ta.selectionStart)){
			var ss=ta.value.substr(0,ta.selectionStart),se=ta.value.substr(ta.selectionEnd);
			var sl=ta.value.substr(ta.selectionStart,ta.selectionEnd-ta.selectionStart);
			var nc=ta.selectionStart,sp=ta.scrollTop;
			ta.value=ss+t1+sl+t2+se;
			if(ta.setSelectionRange){
				if(sl.length==0){ta.setSelectionRange(nc+t1.length,nc+t1.length);}
				else{ta.setSelectionRange(nc,nc+t1.length+sl.length+t2.length);}
				ta.focus();
			}
			ta.scrollTop=sp;
		}else{ta.value+=t1+t2;ta.focus(ta.value.length-1);}
	},
	insertTag: function(id) {var tag=this.tags[id],ta=this.ta,s='';if(!tag)return;s=this.getSelection();if(s.length>0){this.surroundText(tag.open,tag.close);}},
	initTags: function(){
		if (this.bbc==null||this.bbc.length==0){
			this.bbc={};
			this.bbc['b']={id:'bbcode-b',open:'[b]',close:'[/b]',key:'B',ctrl:'ctrl',hint:'Bold'};
			this.bbc['i']={id:'bbcode-i',open:'[i]',close:'[/i]',key:'I',ctrl:'ctrl',hint:'Italic'};
			this.bbc['u']={id:'bbcode-u',open:'[u]',close:'[/u]',key:'u',ctrl:'ctrl',hint:'Underline'};
			this.bbc['s']={id:'bbcode-s',open:'[s]',close:'[/s]',key:null,ctrl:null,hint:'Strikeout'};
			this.bbc['img']={id:'bbcode-img',open:'[img]',close:'[/img]',key:null,ctrl:null,hint:'Image'};
			this.bbc['url']={id:'bbcode-url',open:'[url]',close:'[/url]',key:null,ctrl:null,hint:'Link'};
			this.bbc['hide']={id:'bbcode-hide',open:'[hide]',close:'[/hide]',key:null,ctrl:null,hint:'Hidden'};
			this.bbc['quote']={id:'bbcode-quote',open:'[quote]',close:'[/quote]',key:'Q',ctrl:'ctrl',hint:'Quote'};
			this.bbc['list']={id:'bbcode-list',open:'[list][*]',close:'[/list]',key:'L',ctrl:'ctrl',hint:'List'};
		}
	},

	createButton: function(i,t,c,f,img){
		var e;if(img==null||img==""){e=document.createElement('a');e.style.display='block';e.setAttribute('href','#');}
		else{e=document.createElement('img');if(t){e.setAttribute('alt',t);}e.setAttribute('src',img);if(!c){c='custombbcode'};}
	       	if(i){e.setAttribute('id',i);}if(t){e.setAttribute('title',t);}if(c){e.className=c;}
       		var ee=e;e.onclick=(f!=null?function(){f(ee); return false;}:function(){return false;});
	       	return e;
	},

	addButton: function(id,h,p,ot,ct,css,img) {
		if(this.ta){
			this.initTags();
			var tag=this.bbc[id],th=this;
			if(!tag){
				if(ot&&ct) {
					this.bbc[id]={id:id,open:ot,close:ct,key:null,ctrl:null,hint:h};
					tag=this.bbc[id];
				} else { return; }
			}
			if(this.bbcPanel==null){
				this.bbcPanel=document.createElement('span');
				this.bbcPanel.className='bbcode';
				this.bbcPanel.style.display='block';
				this.ta.parentNode.insertBefore(this.bbcPanel,this.ta);
			}
			var f=function(){var s=th.getSelection();if(s.length>0){th.surroundText(tag.open,tag.close);}else{var v=prompt(p,'');if(null!=v && ''!=v){th.insertText(tag.open+v+tag.close);}}return false;};
			tag.e=this.createButton(tag.id,(h!=null?h:tag.hint),(css?css:tag.id),f,img);
			this.bbcPanel.appendChild(tag.e);
       		this.tags[tag.id]=tag;
		}
	},

	initSmiles: function(p){this.smilesPath=p;
		if(this.ta){
			this.smilesPanel=document.createElement('div');
			if(this.bbcPanel){
				document.body.appendChild(this.smilesPanel);
				this.smilesPanel.id='comments-form-smilespanel';
				this.smilesPanel.setAttribute('style','display:none;top:0;left:0;position:absolute;');
				this.smilesPanel.onclick=function(){this.style.display='none';};
				var jc=this,f=function(e){
					var sp=jc.smilesPanel,p=jc.getElementPos(e);
					if(sp){var sps=sp.style;sps.display=(sps.display=='none'||sps.display==''?'block':'none');sps.left=p.left+"px";sps.top=p.bottom+e.offsetHeight+"px";sps.zIndex=99;}
					return false;
				};
				this.bbcPanel.appendChild(this.createButton(null,null,'bbcode-smile',f));
			} else {
				this.smilesPanel.className='smiles';this.ta.parentNode.insertBefore(this.smilesPanel, this.ta);
			}
		}
	},
	closeSmiles: function(){if(this.smilesPanel&&this.bbcPanel){this.smilesPanel.style.display='none';}},

	addSmile: function(code,image){
		if(this.ta){
			if(!this.smilesPath||!this.smilesPanel){return;}
       			var th=this,e=document.createElement('img');
       			e.setAttribute('src',this.smilesPath+'/'+image);
       			e.setAttribute('alt',code);
       			e.className='smile';
	       		e.onclick=function(){th.insertText(' '+code+' ');};
       			this.smilesPanel.appendChild(e);
		}
	},
	addCounter: function(m,pre,post,className){
		if(this.ta){
			if(pre!=null){this.l10n.counterPre=pre;}if(post!=null){this.l10n.counterPost=post;}
			var ch=document.createElement('span');ch.className=className!=null?className:'';
			var t1=document.createTextNode(this.l10n.counterPre+' '),t2=document.createTextNode(' '+this.l10n.counterPost);
			var c=document.createElement('span');ch.appendChild(t1);ch.appendChild(c);ch.appendChild(t2);
			if(this.resizable){if(this.grippie!=null){this.grippie.appendChild(ch);}}
			else{var d=document.createElement('div');d.className='counterpanel';this.ta.parentNode.insertBefore(d,this.ta.nextSibling);d.appendChild(ch);}
			this.counter={e:c,max:m};
			this.updateCounter();
		}
	},
	addGrippie: function() {
		this.offset=null;this.dragging=false;
		this.grippie=document.createElement('div');this.grippie.className='grippie';
		this.ta.parentNode.insertBefore(this.grippie,this.ta.nextSibling);
	        var th=this;this.events.add(this.grippie,'mousedown',function(e){return th.onMouseDown(e);});
	},
	updateCounter: function(){if(this.counter!=null){var ta=this.ta,e=this.counter.e;try{var n=document.createElement(e.tagName),v=this.counter.max-ta.value.length;n.innerHTML=(v>=0)?v:0;e.parentNode.replaceChild(n,e);this.counter.e=n;}catch(ex){}}},
	mousePosition: function(e){var px=0,py=0;if(!e){e=window.event;}if(e.pageX||e.pageY){px=e.pageX;py=e.pageY;}else if(e.clientX||e.clientY){px=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;py=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;}return {x:px,y:py};},
	onChange: function(){this.updateCounter();if(this.ta&&!this.isWebkit){var l=this.ta.value.split('\n');this.ta.rows=(l.length<this.defaultRows)?this.defaultRows:l.length+1;}return false;},
	onMouseDown: function(e){this.offset=this.mousePosition(e).y;this.height=this.ta.clientHeight;this.dragging=true;var th=this;this.events.add(document,'mousemove',function(e){return th.onMouseMove(e);});this.events.add(document,'mouseup',function(e){return th.onMouseUp(e);});return false;},
	onMouseUp: function(e){this.dragging=false;},
	onMouseMove: function(e){if(this.dragging)this.ta.style.height=Math.max(this.defaultHeight, this.height+this.mousePosition(e).y-this.offset)+'px';return false;}
};

JCommentsForm.prototype = {
	id:null,
	form: null,
	events: null,
	editor: null,
	elements: {},
	store: new Array('name','email','homepage'),
	fadeTimer: null,

	init: function(id,editor){var f=this;this.id=id;this.form=this.$(id);this.editor=editor;this.events=new JCommentsEvents();this.setElements(new Array('name','email','homepage','title','comment'));this.restoreValues();this.setCaptcha();},
	setCaptcha: function(){this.captchaImage=this.$(this.id+'-captcha-image');this.register('captcha');},
	setEditor: function(e){this.editor=e;},
	setElements: function(e){for(i=0;i<e.length; i++){try{this.register(e[i]);}catch(e){}}},
	$:function(e){return JComments.prototype.$(e);},
	register: function(n){var f=this,e=this.$(this.id+'-'+n);if(e){this.elements[n]=e;JCommentsInput.prototype.register(e);this.events.add(e,!window.opera&&document.all?'keydown':'keypress',function(e){return f.keypress(e);});}},
	error: function(m,n){var e=this.elements[n];if(e){e.focus();e.className='error';}},
	clear: function(n){
		if(n==null){if(this.form!=null){this.form.reset();}return;}
		switch(n){
			case 'comment':if(this.editor!=null){this.editor.clear();}break;
			case 'captcha':var cim=this.captchaImage,cin=this.elements['captcha'];if(cim){cim.src=cim.src.replace(/&ac=\d+/g, '&ac='+new String(Math.floor(Math.random()*100000)));}if(cin){cin.value='';}break;
			default:var e=this.elements[n];if(e){e.value='';}break;					
		}
	},
	focus:function(n){var e;if(n==null){for(var nm in this.elements){e=this.elements[nm];if(e){e.focus();break;}}}else{e=this.elements[n];if(e){e.focus();}}},
	keypress: function(e){if(e.ctrlKey &&(e.keyCode==13||(e.type=='keypress'&&e.keyCode==10))){this.submit();e.returnValue=false;return this.events.cancel(e);}return this.keypressed(e);},
	add: function(n,i,v){if(this.form!=null){var e=document.createElement('input');e.setAttribute('type', 'hidden');e.setAttribute('name', n);e.setAttribute('id', i);e.setAttribute('value', v);this.form.appendChild(e);}},
	remove: function(i){var e=this.$(i);if(e){e.value=0;e.parentNode.removeChild(e);}},
	setText: function(n,t){if(n=='comment'){if(this.editor!=null){this.editor.clear();this.editor.insertText(t);}}else{var e=this.elements[n];if(e){e.value=t;}}},
	insertText: function(n,t){if(n=='comment'){if(this.editor!=null){this.editor.insertText(t);}}else{var e=this.elements[n];if(e){e.value+=t;}}},
	storeValues: function(){for(var i=0;i<this.store.length; i++){try{var el=JComments.prototype.$(this.id+'-'+this.store[i]);if(el){JComments.prototype.setCookie(this.store[i],encodeURIComponent(el.value),14);}}catch(e){}}},
	restoreValues: function(){for(var i=0;i<this.store.length; i++){try{var el=JComments.prototype.$(this.id+'-'+this.store[i]);if(el){el.value=decodeURIComponent(JComments.prototype.getCookie(this.store[i]));}}catch(e){}}},
	submit: function(){},
	keypressed: function(e){}
};

JCommentsIndicator.prototype = {
	e: null,
	init: function(){if(this.e==null){this.e=document.createElement('div');this.e.className='busy';}},
	move: function(p,b){if(p){if(this.e.parentNode){this.e.parentNode.removeChild(this.e);}if(b){p.insertBefore(this.e,b);}else{p.appendChild(this.e);}}},
	show: function(){this.e.style.display='block';},
	hide: function(){this.e.style.display='none';},
	start: function(p,b){this.move(p,b);this.show();},
	stop: function(){this.hide();}
};

JComments.prototype = {
	oi:null,
	og:null,
	debug: false,
	requestURI: '',
	oldRequestURI: '',
	busy: null,
	form: null,
	cache: {},
	mode:'add',
	readyList: [],
	isReady: false,

	init: function(oi,og,r){var ua=navigator.userAgent.toLowerCase();this.browser={safari: /webkit/.test(ua),opera: /opera/.test(ua),msie: /msie/.test(ua) && !(/opera/.test(ua)),mozilla: /mozilla/.test(ua) && !(/(compatible|webkit)/.test(ua))};this.oi=oi;this.og=og;this.busy=new JCommentsIndicator();this.requestURI=r;var th=this;jtajax.startLoading=function(){th.busy.show();};jtajax.finishLoading=function(){th.busy.hide();};},
	setForm: function(f){this.form=f;this.form_id=f.id;this.setMode('add',null);var jc=this;this.form.submit=function(){jc.saveComment();};this.form.keypressed=function(e){if(e.keyCode==27&&jc.mode=='reply'){jc.restoreForm(false);}};this.formLoaded();},
	setList: function(l){this.list_id=l;},
	setMode: function(m,i){var b=this.$('comments-form-cancel'),jc=this;if(b!=null){b.style.display=(m!='add')?'':'none';b.onclick=(m=='edit'?function(){jc.cancelEdit(i);}:(m=='reply'?function(){jc.cancelReply();}:null));}this.mode=m;},
	$: function(id){if(!id){return null;}var e=document.getElementById(id);if(!e&&document.all){e=document.all[id];}return e;},
	ajax: function(f,a,fid){var r,prevURI;try{prevURI=jtajax.options.url;jtajax.setup({url:this.requestURI});r=jtajax.call(f,a,'post',fid);jtajax.options.url=prevURI;}catch(e){jtajax.options.url=prevURI;}return r;},
	initOnReady : function(){if(this.isReadyInited) return;this.isReadyInited=1;var jc=this;
	      	if(this.browser.mozilla||this.browser.opera){JCommentsEvents.prototype.add(document, 'DOMContentLoaded',jc.ready);}
        	else if(this.browser.msie) {(function(){try{document.documentElement.doScroll('left');}catch(e){setTimeout(arguments.callee, 50);return;}jc.ready();})();}
        	else if(this.browser.safari){(function(){if(jc.isReady)return;if(document.readyState!="loaded"&&document.readyState!="complete"){setTimeout(arguments.callee,0);return;}jc.ready();})();}
         	JCommentsEvents.prototype.add(window, 'load', function(){jc.ready(jc);});
	},
	onReady: function(f){if(this.isReady){f();}else{var jc=this;jc.readyList.push(f);jc.initOnReady();}},
	ready: function(){var jc=window.jcomments;if(jc.isReady||jc.readyList==null) return;jc.isReady=1;for(var i=0,len=jc.readyList.length;i<len;i++){try{jc.readyList[i]();}catch(e){}}jc.readyList=null;},
	setAntiCache: function(c,p,f){this.aca=c;this.acp=p;this.acf=f;this.onReady(this.loadComments);},
	loadComments: function(){var jc=window.jcomments;var l=document.location.href,lc=true,i=l.lastIndexOf('#comment-');jc.clear('captcha');if(jc.aca){if(i!=0){var c=l.substring(i+9,l.length);if(!isNaN(c)){lc=false;jc.showComment(c);}}}if(jc.acp){if(lc){jc.showPage(jc.oi,jc.og,0);}}if(jc.acf){if(l.lastIndexOf('#addcomment')!=-1){jc.showForm(jc.oi,jc.og,'comments-form-link');}}},
	setCookie: function(n,v,d){var e='';if(d){var dt=new Date();dt.setTime(dt.getTime()+(d*24*60*60*1000));e="; expires="+dt.toGMTString();}document.cookie = "jc_"+n+"="+v+e+"; path=/";},
	getCookie: function(n){var re=new RegExp( "(\;|^)[^;]*(" + "jc_"+n + ")\=([^;]*)(;|$)" );var r=re.exec(document.cookie);return r != null ? r[3] : '';},
	removeCookie: function(n){this.setCookie(n,"",-1);},
	scrollTo: function(n){if(n!=null){var e=this.$(n),t=0;if(e){t=e.offsetTop;for(var p=e.offsetParent;p;p=p.offsetParent){t+=p.offsetTop;}scrollTo(0,t);}}},
	scrollToList: function(){this.scrollTo(this.list_id);},
	scrollToForm: function(id){this.scrollTo(this.form_id);},
	scrollToComment: function(id){this.scrollTo('comment-'+id);},
	moveElement: function(e,p,b){if(e){if(p){if(e.parentNode){e.parentNode.removeChild(e);}if(b){p.insertBefore(e,b);}else{p.appendChild(e);}}}},
	createElement: function(t,i,c){var e=document.createElement(t);if(i){e.setAttribute('id',i);}if(c){e.className=c;}return e;},
	fade: function(id,s,e,m){var speed=Math.round(m/100),timer=0;if(s>e){for(i=s;i>=e;i--){setTimeout("JComments.prototype.setOpacity('"+id+"',"+i+")",(timer*speed));timer++;}var o=JComments.prototype.$(id);if(o){setTimeout(function(){o.style.display='none';},((s-e)*speed));}}else if(s<e){for(i=s;i<=e;i++){setTimeout("JComments.prototype.setOpacity('"+id+"',"+i+")",(timer*speed));timer++;}}},
	setOpacity: function(id,opacity){var e=this.$(id);if(e){var s=e.style;s.opacity=(opacity/100);s.MozOpacity=(opacity/100);s.KhtmlOpacity=(opacity / 100);s.filter="alpha(opacity="+opacity+")";}},
	clear:function(n){if(this.form!=null){this.form.clear(n);}},
	insertText:function(t){if(this.form!=null){this.form.insertText('comment',t);}else{var jc=this;window.setTimeout(function(){jc.insertText(t);},500);}},
	busyList: function(){if(this.list_id){var l=this.$(this.list_id);if(l){this.busy.move(l.parentNode,l);}}},
	busyForm: function(){if(this.form_id){var f=this.$(this.form_id);if(f){this.busy.move(f.parentNode,f);}}},
	busyComment: function(i){this.busy.move(this.$('comment-item-'+i),null);},
	saveComment: function(i){var f='';if(this.mode!='edit'){f='JCommentsAddComment';this.busyForm();if(this.form){this.form.storeValues();}this.busy.show();}else{f='JCommentsSaveComment';this.busy.show();}return this.ajax(f,null, this.form_id);},
	editComment: function(i){this.busyComment(i);var a=arguments;if(this.form==null){a=new Array(i,1);}return this.ajax('JCommentsEditComment', a);},
	cancelEdit: function(i){if((!this.cache[i])||(this.cache[i]=='')){this.$('comment-body-'+i).innerHTML=this.cache[i];this.cache[i]='';}if(this.form){this.form.remove('comment-id-hidden-'+i);this.restoreForm(true);}var t=this.$('comment-toolbar-'+i);if(t){t.style.display='';}return this.ajax('JCommentsCancelComment',arguments);},
	cancelReply: function(){if(this.form){this.form.remove('comment-parent-id-hidden');this.restoreForm(false);}},
	quoteComment: function(i){var a=arguments;if(this.form==null){a=new Array(i,1);}return this.ajax('JCommentsQuoteComment',a);},
	publishComment: function(i){if(this.form){this.restoreForm();}this.busyComment(i); return this.ajax('JCommentsPublishComment',arguments);},
	deleteComment: function(i){this.busyComment(i); return this.ajax('JCommentsDeleteComment',arguments);},
	jump2email: function(i){return this.ajax('JCommentsJump2email',arguments);},
	updateList: function(t,m){if(this.list_id){var l=this.$(this.list_id);if(!l){l=this.$('comments');m='a';}switch(m){case 'a':l.innerHTML=l.innerHTML+t;break;case 'p':l.innerHTML=t+l.innerHTML;break;case 'r':l.parentNode.innerHTML=t;break;}}},
	updateTree: function(t,r){var l;if(r==null){l=this.$('comments');if(l){l.innerHTML=t;}return;}l=this.$('comments-list-'+r);if(!l){var p=this.$('comment-item-'+r);if(p){this.busyComment(r);l=this.createElement('div','comments-list-'+r,'comments-list');l.innerHTML=t;p.parentNode.insertBefore(l,p.nextSibling);}}else{l.innerHTML=l.innerHTML+t;}this.restoreForm(true);},
	updateComment: function(id,t){if(t==''){var c=this.$('comment-item-'+id);c.parentNode.removeChild(c);var l=this.$('comments-list-'+id);if(l){l.parentNode.removeChild(l);} return;}this.$('comment-body-'+id).innerHTML=t;var te=this.$('comment-toolbar-'+id);if(te){te.style.display='';}if(this.form){this.form.remove('comment-id-hidden-'+id);this.restoreForm(true);}},
	voteComment: function(i){var v=this.$('comment-vote-holder-'+i);if(v){v.innerHTML='';this.busy.start(v,null);}return this.ajax('JCommentsVoteComment',arguments);},
	updateVote: function(i,t){this.busy.stop();var c=this.$('comment-vote-holder-'+i);if(c){c.innerHTML=t;}},
	showComment: function(id){return this.ajax('JCommentsShowComment',arguments);},
	showPage: function(i,g,p){if(this.form){this.restoreForm();}var l=this.$(this.list_id);if(!l){l=this.$(this.list_id+'-0');if(l){this.list_id=this.list_id+'-0';}}this.busyList();return this.ajax('JCommentsShowPage',arguments);},
	showForm: function(i,g,t){if(this.form){this.moveElement(this.form.form,this.$(t));return;}this.busyForm(); return this.ajax('JCommentsShowForm',arguments);},
	showEdit: function(id,n,e,h,t,txt){ 
		var jc=this;
	        if(this.form==null){window.setTimeout(function(){jc.showEdit(id,n,e,h,t,txt);},500);return;}
		if((!this.cache[id])||(this.cache[id]=='')){this.cache[id]=this.$('comment-body-'+id).innerHTML;}
		this.busy.stop();
		var f=this.form,ff=this.form.form,c=this.$('comment-item-'+id);
		if(ff!=null&&c!=null){
			f.add('id','comment-id-hidden-'+id,id);f.setText('name', n);f.setText('email', e);f.setText('homepage', h);f.setText('title', t);f.setText('comment', txt);
			var d=this.$('comments-inline-edit');
			if(d){d.parentNode.removeChild(d);}else{d=this.createElement('div','comments-inline-edit','comments-inline-edit');}c.appendChild(d);this.moveElement(ff,d);
			this.setMode('edit',id);var te=this.$('comment-toolbar-'+id);if(te){te.style.display='none';}
			this.scrollTo('comments-inline-edit');
			this.form.focus('comment');
		}
	},
	showReply: function(id,q){
		this.busyComment(id);
		var jc=this,c=this.$('comment-item-'+id),d=this.$('comments-inline-edit');
		if(d){d.parentNode.removeChild(d);}else{d=this.createElement('div','comments-inline-edit','comments-inline-edit');}c.appendChild(d);
		if(!this.form){
			var t='comments-inline-edit',h=this.$('comments-form-link');if(h){t='comments-form-link';}
			this.showForm(this.oi, this.og,t);var pid=id;this.formLoaded=function(){var f=jc.form;if(f!=null){f.add('parent','comment-parent-id-hidden',pid);}jc.setMode('reply',pid);jc.moveElement(jc.form.form,jc.$('comments-inline-edit'));jc.form.focus();if(q){jc.quoteComment(id);}};
		}else{
			var f=this.form,ff=this.form.form,p=this.$('comment-parent-id-hidden');
			if(ff!=null&&c!=null){if(!p){f.add('parent','comment-parent-id-hidden',id);}else{p.value=id;}this.moveElement(ff,d);this.setMode('reply',id);this.form.focus();if(q){this.quoteComment(id);}}
		}
	},
	formLoaded: function(){},
	restoreForm: function(c){var f=this.form;if(f!=null){var ff=this.form.form,jc=this;this.busy.stop();
		if(ff!=null){if(c){f.clear(null);}f.restoreValues();var a=this.$('addcomments'),p=this.$('comment-parent-id-hidden');if(p){p.value=0;}
		this.moveElement(ff,a.parentNode,a);var d=this.$('comments-inline-edit');if(d){d.parentNode.removeChild(d);}this.setMode('add',null);}
	}},
	reportComment: function(id){
		this.busyComment(id);
		var jc=this,c=this.$('comment-item-'+id),d=this.$('comments-inline-report');
		if(d){d.parentNode.removeChild(d);}else{d=this.createElement('div','comments-inline-report','comments-inline-report');}c.appendChild(d);
		var a=new Array(id,'comments-inline-report');
		return this.ajax('JCommentsShowReportForm',a);
	},
	saveReport: function(i){this.ajax('JCommentsReportComment',null, 'comments-report-form');return true;},
	cancelReport: function() {var d=this.$('comments-inline-report');if(d){d.innerHTML='';}},
	closeReport: function(m){this.cancelReport();this.showMessage(m,'info','comments-inline-report');},
	error:function(m,t,n){if(this.form!=null){this.form.error(n);}if(!t||t==''){t=this.form_id;}this.showMessage(m,'error',t);},
	message:function(m,t){if(!t||t==''){t=this.form_id;}this.showMessage(m,'info',t);},
	showMessage: function(m,c,t){
		clearTimeout(this.fadeTimer);var fe=this.$('comments-form-message');var af=this.$(t);
		if(fe){fe.parentNode.removeChild(fe);}fe=JComments.prototype.createElement('div','comments-form-message','');
		if(af){JComments.prototype.moveElement(fe,af,af.firstChild);}else{alert(m);return;}
		if(!c){c='info';}fe.className='comments-form-message-'+c;
		fe.innerHTML=m;	fe.style.display='block';JComments.prototype.setOpacity(fe.id,100);
		this.fadeTimer=setTimeout(function(){JComments.prototype.fade('comments-form-message', 100, 0, 1000);}, 6000);
	},

	subscribe: function(o,g){return this.ajax('JCommentsSubscribe',arguments);},
	unsubscribe: function(o,g){return this.ajax('JCommentsUnsubscribe',arguments);},
	updateSubscription: function(m,t){var e=this.$('comments-subscription');if(e){var jc=this;e.innerHTML=t;e.onclick=m?function(){jc.unsubscribe(jc.oi,jc.og);return false;}:function(){jc.subscribe(jc.oi,jc.og);return false;};e.blur();}},
	go: function(l){window.open(l);return false;}
};