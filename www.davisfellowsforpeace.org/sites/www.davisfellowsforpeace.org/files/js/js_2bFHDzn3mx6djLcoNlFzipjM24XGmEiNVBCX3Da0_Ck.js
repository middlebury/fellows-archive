jQuery(document).ready(function() { thickboxL10n = Drupal.settings.thickbox; });
;
/* Modified ThickBox based on ThickBox 3.1 by Cody Lindley | thickbox.net | MIT License */
jQuery(document).ready(function(){"string"!=typeof tb_pathToImage&&(tb_pathToImage=thickboxL10n.loadingAnimation);"string"!=typeof tb_closeImage&&(tb_closeImage=thickboxL10n.closeImage)});
var tb_options={auto_resize_img:!0,auto_resize_html:!1,click_img:"close",click_end:"loop",click_bg:"close",wheel_img:"prev_next",wheel_bg:"scroll",keys_close:[27,13],keys_prev:[188,37],keys_next:[190,39],keys_first:[36],keys_last:[35],move_img:!1,move_html:!1,resize_img:!1,resize_html:!1,position_title:"top",position_cap:"bottom",mobile_support:"no_margin",small_width:480,small_height:480,win_width:600,win_height:400,margin_win_img:15,margin_win_html:30,ref_title:["link-title","link-name"],ref_cap:["link-title",
"link-name","img-title","img-alt"],effect_open:"none",effect_close:"fade",effect_trans:"none",effect_title:"none",effect_cap:"none",effect_speed:"fast",debug:!1};
jQuery(document).ready(function(){tb_init("a.thickbox, area.thickbox, input.thickbox");imgLoader=new Image;imgLoader.src=tb_pathToImage;var a,c=navigator.userAgent,b=(a=c.match(/AppleWebKit\/([0-9]+)/))&&534>a[1],d=(a=c.match(/Opera Mobi\/([0-9]+)/))&&7458>a[1],e=(a=c.match(/Fennec\/([0-9]+)/))&&6>a[1];notSupportedPositionFixed="undefined"==typeof document.body.style.maxHeight||/(iPhone|iPod|iPad)/.test(navigator.platform)&&b||-1<c.indexOf("Android")&&b||window.operamini&&"[object OperaMini]"===Object.prototype.toString.call(window.operamini)||
d||e||window.palmGetResource&&b||-1<c.indexOf("MeeGo")&&-1<c.indexOf("NokiaBrowser/8.5.0")});function tb_init(a){jQuery.isFunction(jQuery().live)?jQuery(a).live("click",tb_click):jQuery(a).bind("click",tb_click)}
function tb_click(){if("no_thickbox"==tb_options.mobile_support){var a=tb_getPageSize();if(a[0]<=tb_options.small_width||a[1]<=tb_options.small_height)return!0}null!==document.getElementById("TB_window")&&(jQuery(document).unbind(".thickbox"),jQuery("#TB_window").trigger("tb_unload").remove(),jQuery("body").append("<div id='TB_window' class='TB_Transition'></div>"));tb_show(this,this.href||this.alt,this.rel||!1);this.blur();return!1}
function tb_caption(a,c){for(var c=c||tb_options.ref_cap,b,d=0;d<c.length&&!b;d++)switch(c[d]){case "link-title":b=a.title;break;case "link-name":b=a.name;break;case "blank":return"";case "img-title":b=jQuery(a).children("img").attr("title");break;case "img-alt":b=jQuery(a).children("img").attr("alt");break;case "img-cap":b=jQuery(a).parent().is("dt.gallery-icon")?jQuery(a).parent().nextAll(".wp-caption-text").text().replace(/^\s+|\s+$/g,""):jQuery(a).nextAll(".wp-caption-text").text();break;case "img-desc":b=
jQuery(a).children("img").attr("longdesc");break;case "img-name":b=jQuery(a).children("img").attr("name");}if(b){return b.replace(/(\r\n|[\n\r])/g,"<br />")}else{return "";}}
function tb_show(a,c,b){try{notSupportedPositionFixed&&(jQuery("body","html").css({height:"100%",width:"100%"}),jQuery("html").css("overflow","hidden"),"undefined"==typeof document.body.style.maxHeight&&null===document.getElementById("TB_HideSelect")&&jQuery("body").append("<iframe id='TB_HideSelect'>"+thickboxL10n.noiframes+"</iframe>"));null===document.getElementById("TB_overlay")&&(jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>"),notSupportedPositionFixed&&jQuery("#TB_overlay, #TB_HideSelect").css({position:"absolute",
height:(document.body.scrollHeight>document.body.offsetHeight?document.body.scrollHeight:document.body.offsetHeight)+"px"}),"close"==tb_options.click_bg&&jQuery("#TB_overlay").click(tb_remove));tb_detectMacXFF()?jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack"):jQuery("#TB_overlay").addClass("TB_overlayBG");jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' /></div>");notSupportedPositionFixed&&jQuery("#TB_load").css({position:"absolute",marginTop:-parseInt(jQuery("#TB_load")[0].offsetHeight/
2)+(TBWindowMargin=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)+"px"});0==parseInt(jQuery("#TB_load").css("marginLeft"))&&jQuery("#TB_load").css("marginLeft",-jQuery("#TB_load").outerWidth()/2);0==parseInt(jQuery("#TB_load").css("marginTop"))&&jQuery("#TB_load").css("marginTop",-jQuery("#TB_load").outerHeight()/2);jQuery("#TB_load").show();var d=c;-1!==c.indexOf("?")&&(d=c.substr(0,c.indexOf("?")));-1!==c.indexOf("#")&&(d=c.substr(0,c.indexOf("#")));var e=
/\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$|\.webp$|\.pdf$/,f=d.toLowerCase().match(e);if(".jpg"==f||".jpeg"==f||".png"==f||".gif"==f||".bmp"==f||".webp"==f){TB_imageCount=TB_NextHTML=TB_NextURL=TB_NextCaption=TB_PrevHTML=TB_PrevURL=TB_PrevCaption="";TB_FoundURL=!1;TB_LastURL=TB_LastCaption=TB_FirstURL=TB_FirstCaption="";if(b){TB_TempArray=jQuery("a[rel="+b+"]").get();for(TB_Counter=0;TB_Counter<TB_TempArray.length&&""===TB_NextHTML;TB_Counter++)TB_TempArray[TB_Counter].href.toLowerCase().match(e),("object"==
typeof a?TB_TempArray[TB_Counter]!=a:TB_TempArray[TB_Counter].href!=c)?TB_FoundURL?(TB_NextCaption=TB_TempArray[TB_Counter],TB_NextURL=TB_TempArray[TB_Counter].href,TB_NextHTML="<span id='TB_next'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.next+"</a></span>"):(TB_PrevCaption=TB_TempArray[TB_Counter],TB_PrevURL=TB_TempArray[TB_Counter].href,TB_PrevHTML="<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.prev+"</a></span>"):(TB_FoundURL=!0,TB_imageCount=thickboxL10n.image+" "+(TB_Counter+1)+" "+
thickboxL10n.of+" "+TB_TempArray.length);TB_FirstCaption=TB_TempArray[0];TB_FirstURL=TB_TempArray[0].href;TB_LastCaption=TB_TempArray[TB_TempArray.length-1];TB_LastURL=TB_TempArray[TB_TempArray.length-1].href}imgPreloader=new Image;imgPreloader.onload=function(){function d(a,b,c){var e=a-jQuery("#TB_Image").width(),f=b-jQuery("#TB_Image").height();jQuery("#TB_window").css({marginLeft:Math.round(parseInt(jQuery("#TB_window").css("marginLeft"))-e/2),marginTop:Math.round(parseInt(jQuery("#TB_window").css("marginTop"))-
f/2)});jQuery("#TB_window").width(jQuery("#TB_window").width()+e).height("auto");jQuery("#TB_Image").width(a).height(b);c&&jQuery("#TB_window a.scalable").attr("title",c)}imgPreloader.onload=null;var e=c.replace(/^[^\?]+\??/,""),f=tb_parseQuery(e);"object"==typeof a&&(a=tb_caption(a));TB_Image="<img id='TB_Image' src='"+c+"' width='"+imgPreloader.width+"' height='"+imgPreloader.height+"' alt='"+a.replace("'","&apos;")+"'/>";"close"==tb_options.click_img||!b&&"close"==tb_options.click_end?TB_Image="<a href='' id='TB_ImageOff' title='"+
thickboxL10n.close+"'>"+TB_Image+"</a>":"open"==tb_options.click_img?TB_Image="<a href='"+c+"' target='_blank' title='"+thickboxL10n.open+"'>"+TB_Image+"</a>":"download"==tb_options.click_img?TB_Image="<a href='"+c+"' class='download' title='"+thickboxL10n.download+"'>"+TB_Image+"</a>":"expand_shrink"==tb_options.click_img&&(TB_Image="<a href='' class='scalable' title='"+thickboxL10n.fit+"'>"+TB_Image+"</a>");TB_Caption="<div id='TB_caption'>"+jQuery('<div/>').html(a).text()+"<div id='TB_secondLine'>"+TB_imageCount+TB_PrevHTML+
TB_NextHTML+"</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><img src='"+tb_closeImage+"' /></a></div>";"none"!=tb_options.effect_cap&&(TB_Caption="<div id='TB_CaptionBar'>"+TB_Caption+"</div>");switch(tb_options.position_cap){case "top":jQuery("#TB_window").append(TB_Caption+TB_Image).addClass("TB_imageContent TB_captionTop");break;case "bottom":jQuery("#TB_window").append(TB_Image+TB_Caption).addClass("TB_imageContent TB_captionBottom");
break;case "none":jQuery("#TB_window").append(TB_Image).addClass("TB_imageContent")}(!b||!a)&&jQuery("#TB_window").addClass("TB_singleLine");"true"==f.modal&&jQuery("#TB_overlay").unbind();jQuery("#TB_closeWindowButton").click(tb_remove);if(""!==TB_PrevHTML){var g=function(){jQuery(document).unbind(".thickbox");jQuery("#TB_window").remove();jQuery("body").append("<div id='TB_window' class='TB_Transition'></div>");tb_show(TB_PrevCaption,TB_PrevURL,b);return!1};jQuery("#TB_prev").click(g);var h=function(){jQuery(document).unbind(".thickbox");
jQuery("#TB_window").remove();jQuery("body").append("<div id='TB_window' class='TB_Transition'></div>");tb_show(TB_FirstCaption,TB_FirstURL,b);return!1}}if(""!==TB_NextHTML){var r=function(){jQuery(document).unbind(".thickbox");jQuery("#TB_window").remove();jQuery("body").append("<div id='TB_window' class='TB_Transition'></div>");tb_show(TB_NextCaption,TB_NextURL,b);return!1};jQuery("#TB_next").click(r);var t=function(){jQuery(document).unbind(".thickbox");jQuery("#TB_window").remove();jQuery("body").append("<div id='TB_window' class='TB_Transition'></div>");
tb_show(TB_LastCaption,TB_LastURL,b);return!1}}if(b&&"next"==tb_options.click_img){var i,k,l;""!=TB_NextHTML?(i="TB_ImageNext",k=thickboxL10n.next,l=r):"close"==tb_options.click_end?(i="TB_ImageClose",k=thickboxL10n.close,l=tb_remove):"loop"==tb_options.click_end&&""!=TB_PrevHTML&&(i="TB_ImageFirst",k=thickboxL10n.first,l=h);i&&(k&&l)&&(jQuery("#TB_window").append("<div id='TB_ImageClick'><a href='' id='"+i+"' title='"+k+"'><span></span></a></div>"),jQuery("#"+i).click(l))}else if(b&&"prev_next"==
tb_options.click_img){var m,p,s;""!=TB_PrevHTML&&(i="TB_ImagePrev",k=thickboxL10n.prev,l=g);""!=TB_NextHTML&&(m="TB_ImageNext",p=thickboxL10n.next,s=r);""==TB_PrevHTML&&("close"==tb_options.click_end?(i="TB_ImageClose",k=thickboxL10n.close,l=tb_remove):"loop"==tb_options.click_end&&""!=TB_NextHTML&&(i="TB_ImageLast",k=thickboxL10n.last,l=t));""==TB_NextHTML&&("close"==tb_options.click_end?(m="TB_ImageClose2",p=thickboxL10n.close,s=tb_remove):"loop"==tb_options.click_end&&""!=TB_PrevHTML&&(m="TB_ImageFirst",
p=thickboxL10n.first,s=h));if(i&&k&&l||m&&p&&s)e=link2="",i&&(k&&l)&&(e="<a href='' id='"+i+"' class='TB_ImageLeft' title='"+k+"'></a>"),m&&(p&&s)&&(link2="<a href='' id='"+m+"' class='TB_ImageRight' title='"+p+"'></a>"),jQuery("#TB_window").append("<div id='TB_ImageClick'>"+e+link2+"</div>"),e&&jQuery("#"+i).click(l),link2&&jQuery("#"+m).click(s),jQuery.browser.msie&&7>=parseInt(jQuery.browser.version)&&jQuery("#TB_ImageClick > a").focus(function(){this.blur()})}"download"==tb_options.click_img?
jQuery("#TB_window a.download").click(function(){window.location=thickboxL10n.forceDL+"?file="+this.href;return!1}):"expand_shrink"==tb_options.click_img&&jQuery("#TB_window a.scalable").click(function(){tb_fitToWindow?d(imgPreloader.width,imgPreloader.height,thickboxL10n.fit):d(tb_fitWidth,tb_fitHeight,thickboxL10n.actual);tb_fitToWindow=!tb_fitToWindow;return!1});jQuery(document).bind("keydown.thickbox",function(a){if("true"!=f.modal&&-1!=jQuery.inArray(a.which,tb_options.keys_close))jQuery(document).triggerHandler("wp_CloseOnEscape",
[{event:a,what:"thickbox",cb:tb_remove}])||tb_remove();else if(-1!=jQuery.inArray(a.which,tb_options.keys_prev)||a.shiftKey&&-1!=jQuery.inArray(a.which,tb_options.keys_prev.shift))""!=TB_PrevHTML&&g();else if(-1!=jQuery.inArray(a.which,tb_options.keys_next))""!=TB_NextHTML&&r();else if(-1!=jQuery.inArray(a.which,tb_options.keys_first))""!=TB_PrevHTML&&h();else if(-1!=jQuery.inArray(a.which,tb_options.keys_last))""!=TB_NextHTML&&t();else return!0;a.stopImmediatePropagation();return!1});b&&"prev_next"==
tb_options.wheel_img?jQuery("#TB_window").bind("mousewheel.thickbox DOMMouseScroll.thickbox",function(a){a.stopImmediatePropagation();var b=0,a=a.originalEvent;a.wheelDelta?b=a.wheelDelta:a.detail&&(b=-a.detail);jQuery(window).one("MozMousePixelScroll",function(){return!1});if(0<b){if(""!=TB_PrevHTML)return g(),!1}else if(0>b&&""!=TB_NextHTML)return r(),!1}):"scale"==tb_options.wheel_img?jQuery("#TB_window").bind("mousewheel.thickbox DOMMouseScroll.thickbox",function(a){if(a.ctrlKey)return!0;a.stopImmediatePropagation();
var b=0,a=a.originalEvent;a.wheelDelta?b=a.wheelDelta:a.detail&&(b=-a.detail);a=1+(0<b?0.1:-0.1);b=Math.round(jQuery("#TB_Image").width()*a);a=Math.round(jQuery("#TB_Image").height()*a);100<b&&100<a&&d(b,a);return!1}):"none"==tb_options.wheel_img&&jQuery("#TB_window").bind("mousewheel.thickbox DOMMouseScroll.thickbox",function(a){a.stopImmediatePropagation();return!1});"none"==tb_options.wheel_bg&&jQuery("#TB_overlay").bind("mousewheel.thickbox DOMMouseScroll.thickbox",function(a){a.stopImmediatePropagation();
return!1});tb_options.move_img&&jQuery("#TB_window").bind("mousedown.thickbox",function(a){return tb_move(a,"image")});tb_options.resize_img&&(tb_resize_init(),jQuery("#TB_Resize").bind("mousedown.thickbox",function(a){return tb_resize(a,"image")}));"none"!=tb_options.effect_cap&&(jQuery("#TB_Image").css("margin",jQuery("#TB_Image").css("marginLeft")),jQuery("#TB_window").bind("mouseenter.thickbox",function(){tb_hover(jQuery("#TB_CaptionBar"),tb_options.effect_cap)}).bind("mouseleave.thickbox",function(){tb_hover(jQuery("#TB_CaptionBar"),
tb_options.effect_cap,!0)}));tb_reposition(f);jQuery(window).bind("resize.thickbox orientationchange.thickbox",function(){tb_reposition(f)});jQuery("#TB_load").remove();("close"==tb_options.click_img||!b&&"close"==tb_options.click_end)&&jQuery("#TB_ImageOff").click(tb_remove);tb_open()};imgPreloader.src=c}else{var g=c.replace(/^[^\?]+\??/,""),h=tb_parseQuery(g);"object"==typeof a&&(a=tb_caption(a,tb_options.ref_title));TB_Title="<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+a+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='"+
thickboxL10n.close+"'><img src='"+tb_closeImage+"' /></a></div></div>";if(-1!=c.indexOf("TB_iframe"))if(urlNoQuery=c.split(/[?&]TB_/),jQuery("#TB_iframeContent").remove(),TB_Iframe="<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(1E3*Math.random())+"' onload='tb_showIframe()'>"+thickboxL10n.noiframes+"</iframe>","true"!=h.modal)switch(tb_options.position_title){case "top":jQuery("#TB_window").append(TB_Title+TB_Iframe).addClass("TB_iframeContent TB_titleTop");
break;case "bottom":jQuery("#TB_window").append(TB_Iframe+TB_Title).addClass("TB_iframeContent TB_titleBottom");break;case "none":jQuery("#TB_window").append(TB_Iframe).addClass("TB_iframeContent")}else jQuery("#TB_overlay").unbind(),jQuery("#TB_window").append(TB_Iframe).addClass("TB_iframeContent");else if("block"!=jQuery("#TB_window").css("display"))if(TB_Ajax="<div id='TB_ajaxContent'></div>","true"!=h.modal)switch(tb_options.position_title){case "top":jQuery("#TB_window").append(TB_Title+TB_Ajax).addClass("TB_ajaxContent TB_titleTop");
break;case "bottom":jQuery("#TB_window").append(TB_Ajax+TB_Title).addClass("TB_ajaxContent TB_titleBottom");break;case "none":jQuery("#TB_window").append(TB_Ajax).addClass("TB_ajaxContent TB_titleNone")}else jQuery("#TB_overlay").unbind(),jQuery("#TB_window").append(TB_Ajax).addClass("TB_ajaxContent"),jQuery("#TB_ajaxContent").addClass("TB_modal");else jQuery("#TB_ajaxContent")[0].scrollTop=0,jQuery("#TB_ajaxWindowTitle").html(a);jQuery("#TB_closeWindowButton").click(tb_remove);if(-1!=c.indexOf("TB_inline"))jQuery("#TB_ajaxContent").append(jQuery("#"+
h.inlineId).children()),jQuery("#TB_window").bind("tb_unload",function(){jQuery("#"+h.inlineId).append(jQuery("#TB_ajaxContent").children())}),tb_reposition_html(c,h),jQuery(window).bind("resize.thickbox orientationchange.thickbox",function(){tb_reposition_html(c,h)}),jQuery("#TB_load").remove(),tb_open(),tb_roundCorner("iframe");else if(-1!=c.indexOf("TB_iframe"))tb_reposition_html(c,h),jQuery(window).bind("resize.thickbox orientationchange.thickbox",function(){tb_reposition_html(c,h)}),(!("onload"in
jQuery("#TB_iframeContent")[0])&&"function"!=typeof jQuery("#TB_iframeContent")[0].onload||".pdf"==f)&&tb_showIframe();else{var v=-1==c.indexOf("?")?"?":"&";jQuery("#TB_ajaxContent").load(c+=v+"random="+(new Date).getTime(),function(){tb_reposition_html(c,h);jQuery(window).bind("resize.thickbox orientationchange.thickbox",function(){tb_reposition_html(c,h)});jQuery("#TB_load").remove();tb_open();tb_roundCorner("ajax")})}tb_options.move_html&&jQuery("#TB_window").bind("mousedown.thickbox",function(a){return tb_move(a,
-1!=c.indexOf("TB_iframe")?"iframe":"ajax")});tb_options.resize_html&&(tb_resize_init(),jQuery("#TB_Resize").bind("mousedown.thickbox",function(a){return tb_resize(a,-1!=c.indexOf("TB_iframe")?"iframe":"ajax")}));"none"!=tb_options.effect_title&&(jQuery("#TB_title").addClass("hover"),jQuery("#TB_window").bind("mouseenter.thickbox",function(){tb_hover(jQuery("#TB_title"),tb_options.effect_title)}).bind("mouseleave.thickbox",function(){tb_hover(jQuery("#TB_title"),tb_options.effect_title,!0)}));"true"!=
h.modal&&jQuery(document).bind("keyup.thickbox",function(a){if(-1!=jQuery.inArray(a.which,tb_options.keys_close))return a.stopImmediatePropagation(),jQuery(document).triggerHandler("wp_CloseOnEscape",[{event:a,what:"thickbox",cb:tb_remove}])||tb_remove(),!1})}}catch(w){tb_options.debug&&alert(w)}}
function tb_open(){"hidden"==jQuery("#TB_window").css("visibility")&&jQuery("#TB_window").css("visibility","visible");var a=jQuery("#TB_window").is(".TB_Transition")?tb_options.effect_trans:tb_options.effect_open;tb_effectView(a,!1);var c=function(){tb_effectView(a)};switch(a){case "zoom":jQuery("#TB_window").height(jQuery("#TB_window").height());notSupportedPositionFixed&&"relative"!=jQuery("body").css("position")&&jQuery("#TB_window").css({marginTop:-jQuery("#TB_window").height()/2,top:jQuery(window).height()/
2+jQuery(document).scrollTop()});jQuery("#TB_Image").hide().show(tb_options.effect_speed);jQuery("#TB_window").show(tb_options.effect_speed,c);break;case "slide":notSupportedPositionFixed&&"relative"!=jQuery("body").css("position")&&jQuery("#TB_window").css({marginTop:-jQuery("#TB_window").height()/2,top:jQuery(window).height()/2+jQuery(document).scrollTop()});jQuery("#TB_window").slideDown(tb_options.effect_speed,c);break;case "fade":jQuery("#TB_window").fadeIn(tb_options.effect_speed,c);break;default:jQuery("#TB_window").show()}"none"==
jQuery("#TB_window").css("display")&&jQuery("#TB_window").css("display","block");jQuery("#TB_title").height(Math.max(jQuery("#TB_title").height(),jQuery("#TB_ajaxWindowTitle").height()+13));notSupportedPositionFixed&&jQuery("#TB_window").css({position:"absolute",marginTop:-parseInt(jQuery("#TB_window")[0].offsetHeight/2)+(TBWindowMargin=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)+"px"})}
function tb_roundCorner(a){var c=jQuery("#TB_window")[0].currentStyle||document.defaultView.getComputedStyle(jQuery("#TB_window")[0],""),b=c.borderTopLeftRadius;if(0<parseInt(b))if("transparent"!=jQuery("#TB_window").css("backgroundColor")&&"rgba(0, 0, 0, 0)"!=jQuery("#TB_window").css("backgroundColor")&&jQuery("#TB_window").css("backgroundColor",0<parseInt(c.borderTopWidth)?c.borderTopColor:"transparent"),"iframe"==a){if(jQuery.browser.safari||jQuery.browser.webkit){var c=jQuery("#TB_iframeContent"),
d=jQuery("#TB_iframeContent").contents(),a=0==d.length||c.width()<d.width(),c=0==d.length||c.height()<d.height();("top"==tb_options.position_title||"none"==tb_options.position_title)&&(a||c)&&jQuery("#TB_iframeContent").css("paddingBottom",b);("bottom"==tb_options.position_title||"none"==tb_options.position_title)&&c&&jQuery("#TB_iframeContent").css("paddingTop",b)}}else if("ajax"==a){c=jQuery("#TB_ajaxContent")[0];a=c.scrollWidth>c.clientWidth;c=c.scrollHeight>c.clientHeight;if(("top"==tb_options.position_title||
"none"==tb_options.position_title)&&(a||c))jQuery("#TB_ajaxContent").css("marginBottom",b).after("<div id='TB_ajaxContentMarginBottom'></div>"),"none"==tb_options.position_title&&a?jQuery("#TB_ajaxContent").css({borderBottomLeftRadius:0,borderBottomRightRadius:0}):jQuery("#TB_ajaxContent").css("borderRadius",0),jQuery("#TB_ajaxContentMarginBottom").css({height:b,borderBottomLeftRadius:b,borderBottomRightRadius:b});if(("bottom"==tb_options.position_title||"none"==tb_options.position_title)&&c)jQuery("#TB_ajaxContent").css({marginTop:b,
borderRadius:0}).after("<div id='TB_ajaxContentMarginTop'></div>"),jQuery("#TB_ajaxContentMarginTop").css({height:b,borderTopLeftRadius:b,borderTopRightRadius:b})}}function tb_effectView(a,c){"none"!=a&&(("boolean"==typeof c?c:1)?jQuery("#TB_ImageClick").show():jQuery("#TB_ImageClick").hide())}function tb_showIframe(){jQuery("#TB_load").remove();tb_open();tb_roundCorner("iframe")}
function tb_remove(){tb_effectView(tb_options.effect_close,!1);var a=function(){jQuery("#TB_window,#TB_overlay,#TB_HideSelect").trigger("tb_unload").unbind().remove();notSupportedPositionFixed&&(jQuery("body","html").css({height:"auto",width:"auto"}),jQuery("html").css("overflow",""))};switch(tb_options.effect_close){case "zoom":jQuery("#TB_Image").hide(tb_options.effect_speed);jQuery("#TB_window").hide(tb_options.effect_speed,a);break;case "slide":jQuery("#TB_window").slideUp(tb_options.effect_speed,
a);break;case "fade":jQuery("#TB_window").fadeOut(tb_options.effect_speed,a);break;default:a()}jQuery("#TB_load").remove();jQuery(document).add(window).unbind(".thickbox");return!1}
function tb_position(){jQuery("#TB_window").css({width:"",height:"",left:"",top:""});var a=TB_WIDTH+jQuery("#TB_window").outerWidth()-jQuery("#TB_window").width(),c=TB_HEIGHT+jQuery("#TB_window").outerHeight()-jQuery("#TB_window").height(),b=-parseInt(a/2,10),d=-parseInt(c/2,10),e=notSupportedPositionFixed;!e&&"absolute"==jQuery("#TB_window").css("position")&&(b+=jQuery(document).scrollLeft(),d+=jQuery(document).scrollTop());jQuery("#TB_window").css({marginLeft:b+"px",width:TB_WIDTH+"px"});e||jQuery("#TB_window").css({marginTop:d+
"px"});"relative"==jQuery("body").css("position")?(d=tb_getPageSize(),e&&(b=parseInt((d[0]-a)/2,10)+jQuery(document).scrollLeft(),d=parseInt((d[1]-c)/2,10)+jQuery(document).scrollTop(),jQuery("#TB_window").css({marginLeft:b+"px",marginTop:d+"px",top:"0",left:"0"}))):e&&jQuery("#TB_window").css({marginTop:-parseInt(jQuery("#TB_window")[0].offsetHeight/2)+(TBWindowMargin=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)+"px"})}
function tb_reposition(a){jQuery("#TB_window").width(jQuery(window).width());0==jQuery("#TB_Image").height()&&jQuery("#TB_Image").height(imgPreloader.height);var c=tb_getSize(jQuery("#TB_window"),"border"),b=tb_getSize(jQuery("#TB_window")),d=tb_getSize(jQuery("#TB_Image"),"margin"),e=tb_getSize(jQuery("#TB_Image")),f=tb_getPageSize(),g=f[0]<=tb_options.small_width||f[1]<=tb_options.small_height?0:2*tb_options.margin_win_img,f=jQuery(window).width()-(c[0]-b[0]+d[0]-e[0])-g,c=jQuery(window).height()-
(c[1]-e[1])-g,g=a.width?Math.min(1*a.width,imgPreloader.width):imgPreloader.width,h=a.height?Math.min(1*a.height,imgPreloader.height):imgPreloader.height;tb_fitWidth=f;tb_fitHeight=Math.round(h*(f/g));tb_fitHeight>c&&(tb_fitWidth=Math.round(tb_fitWidth*(c/tb_fitHeight)),tb_fitHeight=c);if(tb_fitToWindow=tb_options.auto_resize_img&&(g>f||h>c))g=tb_fitWidth,h=tb_fitHeight,jQuery("#TB_window a.scalable").attr("title",thickboxL10n.actual);jQuery("#TB_Image").width(g).height(h);TB_WIDTH=g+(d[0]-e[0]);
TB_HEIGHT=h+(b[1]-e[1]);TB_WIDTH<1*a.width&&(TB_WIDTH=1*a.width,jQuery("#TB_Image").css({marginLeft:"auto",marginRight:"auto"}));TB_HEIGHT<1*a.height&&(TB_HEIGHT=1*a.height);jQuery("#TB_ImageClick > a").height(tb_getSize(jQuery("#TB_Image"),"margin")[1]);tb_position()}
function tb_reposition_html(a,c){var b=tb_getSize(jQuery("#TB_window"),"border"),d=tb_getSize(jQuery("#TB_window")),e="none"==tb_options.effect_title?tb_getSize(jQuery("#TB_title"))[1]:0,f=tb_getPageSize(),g=f[0]<=tb_options.small_width||f[1]<=tb_options.small_height?0:2*tb_options.margin_win_html,f=jQuery(window).width()-(b[0]-d[0])-g,b=jQuery(window).height()-(b[1]-d[1])-g;-1!=a.indexOf("TB_iframe")?(f-=2*("\v"=="v"?10:8),b-=2*("\v"=="v"?15:8)+e):(d=tb_getSize(jQuery("#TB_ajaxContent"),"padding"),
g=tb_getSize(jQuery("#TB_ajaxContent")),f-=d[0]-g[0],b-=d[1]-g[1]+e);TB_WIDTH=c.width?Math.min(1*c.width,f):tb_options.auto_resize_html?f:tb_options.win_width;TB_HEIGHT=c.height?Math.min(1*c.height,b):tb_options.auto_resize_html?b:tb_options.win_height;ajaxContentW=TB_WIDTH;ajaxContentH=TB_HEIGHT;-1!=a.indexOf("TB_iframe")?(ajaxContentW+=2*("\v"=="v"?10:8),ajaxContentH+=2*("\v"=="v"?15:8),jQuery("#TB_iframeContent").attr("style","width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;")):"block"!=jQuery("#TB_window").css("display")?
jQuery("#TB_ajaxContent").attr("style","width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;"):(jQuery("#TB_ajaxContent")[0].style.width=ajaxContentW+"px",jQuery("#TB_ajaxContent")[0].style.height=ajaxContentH+"px");-1!=a.indexOf("TB_iframe")?(TB_WIDTH+=2*("\v"=="v"?10:8),TB_HEIGHT+=2*("\v"=="v"?15:8)+e):(d=tb_getSize(jQuery("#TB_ajaxContent"),"padding"),g=tb_getSize(jQuery("#TB_ajaxContent")),TB_WIDTH+=d[0]-g[0],TB_HEIGHT+=d[1]-g[1]+e);tb_position()}
function tb_parseQuery(a){var c={};if(!a)return c;for(var a=a.substring(a.indexOf("?")+1),a=a.split(/[;&]/),b=0;b<a.length;b++){var d=a[b].split("=");if(d&&2==d.length){var e=unescape(d[0]),d=unescape(d[1]),d=d.replace(/\+/g," ");c[e]=d}}return c}function tb_getPageSize(){var a=document.documentElement;return arrayPageSize=[window.innerWidth||self.innerWidth||a&&a.clientWidth||document.body.clientWidth,window.innerHeight||self.innerHeight||a&&a.clientHeight||document.body.clientHeight]}
function tb_detectMacXFF(){var a=navigator.userAgent.toLowerCase();if(-1!=a.indexOf("mac")&&-1!=a.indexOf("firefox"))return!0}function tb_move(a,c){if("image"==c){if(jQuery(a.target).parent().is("#TB_prev, #TB_next, #TB_closeWindowButton"))return!0}else if(!jQuery(a.target).closest("#TB_title").length||jQuery(a.target).parent().is("#TB_closeWindowButton"))return!0;return tb_drag(a,c,"move")}
function tb_resize(a,c){var b;switch(a.target.id){case "TB_ResizeN":b="n-resize";break;case "TB_ResizeE":b="e-resize";break;case "TB_ResizeW":b="w-resize";break;case "TB_ResizeS":b="s-resize";break;case "TB_ResizeNE":b="ne-resize";break;case "TB_ResizeNW":b="nw-resize";break;case "TB_ResizeSE":b="se-resize";break;case "TB_ResizeSW":b="sw-resize";break;default:return!0}return tb_drag(a,c,b)}
function tb_resize_init(){jQuery("#TB_window").append("<div id='TB_Resize'><div id='TB_ResizeN'></div><div id='TB_ResizeE'></div><div id='TB_ResizeW'></div><div id='TB_ResizeS'></div><div id='TB_ResizeNE'></div><div id='TB_ResizeNW'></div><div id='TB_ResizeSE'></div><div id='TB_ResizeSW'></div></div>");notSupportedPositionFixed&&jQuery("#TB_ResizeE, #TB_ResizeW").height(jQuery("#TB_window").height())}
function tb_drag(a,c,b){if(1!=a.which)return!0;TB_THRESHOLD=5;MIN_WIDTH=MIN_HEIGHT=100;var d=jQuery("#TB_window").offset().left-parseInt(jQuery("#TB_window").css("marginLeft")),e=jQuery("#TB_window").offset().top-parseInt(jQuery("#TB_window").css("marginTop"));!notSupportedPositionFixed&&"absolute"!=jQuery("#TB_window").css("position")&&(d-=jQuery(document).scrollLeft(),e-=jQuery(document).scrollTop());var f=a.clientX,g=a.clientY,h=!1,v=jQuery("#TB_window, #TB_overlay, "+("image"==c?"#TB_window a":
"#TB_closeWindowButton")),w="move"==b||"w-resize"==b||"nw-resize"==b||"sw-resize"==b,z="move"==b||"n-resize"==b||"ne-resize"==b||"nw-resize"==b,A="move"!=b&&"n-resize"!=b&&"s-resize"!=b,B="move"!=b&&"e-resize"!=b&&"w-resize"!=b,y="ne-resize"==b||"nw-resize"==b||"se-resize"==b||"sw-resize"==b;if(y)var u=jQuery("#TB_window").width()/jQuery("#TB_window").height();if("move"!=b){var r=jQuery("#TB_window").width(),t=jQuery("#TB_window").height(),i=jQuery("image"==c?"#TB_Image":"iframe"==c?"#TB_iframeContent":
"#TB_ajaxContent"),k=i.width(),l=i.height(),m="e-resize"==b||"ne-resize"==b||"se-resize"==b?1:-1,p="s-resize"==b||"se-resize"==b||"sw-resize"==b?1:-1;if(notSupportedPositionFixed)var s=jQuery("#TB_window").css("marginTop")}jQuery(document).bind("mousemove.thickbox",function(a,j,q){var j=j?j:a.clientX,q=q?q:a.clientY,a=j-f,n=q-g;if(!h&&(a=a>TB_THRESHOLD?a-TB_THRESHOLD:a<-TB_THRESHOLD?a+TB_THRESHOLD:0,n=n>TB_THRESHOLD?n-TB_THRESHOLD:n<-TB_THRESHOLD?n+TB_THRESHOLD:0,0<Math.abs(a)||0<Math.abs(n)))h=!0,
f=j,g=q,v.css("cursor",b);if(h){y&&(j=r+a*m,q=t+n*p,j/=q,u>j?n=Math.round(a/u)*m*p:u<j&&(a=Math.round(n*u)*m*p));var x=skipMoveY=!1;A&&(j=r+a*m,j<MIN_WIDTH?x=!0:(jQuery("#TB_window").width(j),i.width(k+a*m)));B&&(q=t+n*p,q<MIN_HEIGHT?skipMoveY=!0:(jQuery("#TB_window").height(q),i.height(l+n*p),"image"==c&&jQuery("#TB_ImageClick > a").height(jQuery("#TB_Image").outerHeight(!0)),notSupportedPositionFixed&&jQuery("#TB_window").css("marginTop",s)));w&&!x&&jQuery("#TB_window").css("left",d+a);z&&!skipMoveY&&
jQuery("#TB_window").css("top",e+n)}return!1});jQuery(document).bind("mouseup.thickbox",function(a){jQuery(document).unbind("mousemove.thickbox mouseup.thickbox");"iframe"==c&&jQuery("#TB_iframeContent").contents().unbind("mousemove.thickbox mouseup.thickbox");if(!h)return!0;v.css("cursor","");if(jQuery.browser.opera)return!1;var b=jQuery(a.target);if(b.is("html"))return!1;b.is(".TB_ImageLeft, .TB_ImageRight")||(b=b.parent());if((a=b.data("events"))&&a.click){var d=[];jQuery.each(a.click,function(a,
b){d[d.length]=b.handler||b})}b.unbind("click").one("click",function(a){a.stopImmediatePropagation();if(d)for(a=0;a<d.length;a++)b.click(d[a]);return!1});return!1});"iframe"==c&&jQuery("#TB_iframeContent").contents().bind("mousemove.thickbox",function(a){a.clientX+=jQuery("#TB_iframeContent").offset().left-jQuery(document).scrollLeft();a.clientY+=jQuery("#TB_iframeContent").offset().top-jQuery(document).scrollTop();jQuery(document).trigger("mousemove.thickbox",[a.clientX,a.clientY])}).bind("mouseup.thickbox",
function(){jQuery(document).trigger("mouseup.thickbox")});return!1}
function tb_getSize(a,c){var b,d,e=function(){switch(c){case "padding":b=a.innerWidth();d=a.innerHeight();break;case "border":b=a.outerWidth();d=a.outerHeight();break;case "margin":b=a.outerWidth(!0);d=a.outerHeight(!0);break;default:b=a.width(),d=a.height()}};"none"==jQuery("#TB_window").css("display")&&(0<tb_versionCompare("1.4.4")||0<tb_versionCompare("1.6.2")&&c)?jQuery.swap(jQuery("#TB_window")[0],{position:"absolute",visibility:"hidden",display:"block"},e):e();return[b,d]}
function tb_versionCompare(a,c){c=c||jQuery.fn.jquery;if(a!=c)for(var b=a.split("."),d=c.split("."),e=0;e<b.length||e<d.length;e++){if(b[e]&&!d[e]||b[e]>d[e])return 1;if(!b[e]&&d[e]||b[e]<d[e])return-1}return 0}
function tb_hover(a,c,b){!b&&"visible"!=a.css("visibility")&&a.css({visibility:"visible",display:"none"});switch(c){case "zoom":b?a.hide(tb_options.effect_speed):a.show(tb_options.effect_speed);break;case "slide":b?a.slideUp(tb_options.effect_speed):a.slideDown(tb_options.effect_speed);break;case "fade":b?a.fadeOut(tb_options.effect_speed):a.fadeIn(tb_options.effect_speed)}};
;
/**
 * @file
 * Some basic behaviors and utility functions for Views.
 */
(function ($) {

  Drupal.Views = {};

  /**
   * JQuery UI tabs, Views integration component.
   */
  Drupal.behaviors.viewsTabs = {
    attach: function (context) {
      if ($.viewsUi && $.viewsUi.tabs) {
        $('#views-tabset').once('views-processed').viewsTabs({
          selectedClass: 'active'
        });
      }

      $('a.views-remove-link').once('views-processed').click(function(event) {
        var id = $(this).attr('id').replace('views-remove-link-', '');
        $('#views-row-' + id).hide();
        $('#views-removed-' + id).get(0).checked = true;
        event.preventDefault();
      });
      // Here is to handle display deletion
      // (checking in the hidden checkbox and hiding out the row).
      $('a.display-remove-link')
        .addClass('display-processed')
        .click(function() {
          var id = $(this).attr('id').replace('display-remove-link-', '');
          $('#display-row-' + id).hide();
          $('#display-removed-' + id).get(0).checked = true;
          return false;
        });
    }
  };

  /**
   * Helper function to parse a querystring.
   */
  Drupal.Views.parseQueryString = function (query) {
    var args = {};
    var pos = query.indexOf('?');
    if (pos != -1) {
      query = query.substring(pos + 1);
    }
    var pairs = query.split('&');
    for (var i in pairs) {
      if (typeof(pairs[i]) == 'string') {
        var pair = pairs[i].split('=');
        // Ignore the 'q' path argument, if present.
        if (pair[0] != 'q' && pair[1]) {
          args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
        }
      }
    }
    return args;
  };

  /**
   * Helper function to return a view's arguments based on a path.
   */
  Drupal.Views.parseViewArgs = function (href, viewPath) {
    // Provide language prefix.
    if (Drupal.settings.pathPrefix) {
      var viewPath = Drupal.settings.pathPrefix + viewPath;
    }
    var returnObj = {};
    var path = Drupal.Views.getPath(href);
    // Ensure there is a correct path.
    if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
      var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
      returnObj.view_args = args;
      returnObj.view_path = path;
    }
    return returnObj;
  };

  /**
   * Strip off the protocol plus domain from an href.
   */
  Drupal.Views.pathPortion = function (href) {
    // Remove e.g. http://example.com if present.
    var protocol = window.location.protocol;
    if (href.substring(0, protocol.length) == protocol) {
      // 2 is the length of the '//' that normally follows the protocol.
      href = href.substring(href.indexOf('/', protocol.length + 2));
    }
    return href;
  };

  /**
   * Return the Drupal path portion of an href.
   */
  Drupal.Views.getPath = function (href) {
    href = Drupal.Views.pathPortion(href);
    href = href.substring(Drupal.settings.basePath.length, href.length);
    // 3 is the length of the '?q=' added to the URL without clean URLs.
    if (href.substring(0, 3) == '?q=') {
      href = href.substring(3, href.length);
    }
    var chars = ['#', '?', '&'];
    for (var i in chars) {
      if (href.indexOf(chars[i]) > -1) {
        href = href.substr(0, href.indexOf(chars[i]));
      }
    }
    return href;
  };

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
/**
 * @file
 * Handles AJAX fetching of views, including filter submission and response.
 */
(function ($) {

  /**
   * Attaches the AJAX behavior to exposed filter forms and key views links.
   */
  Drupal.behaviors.ViewsAjaxView = {};
  Drupal.behaviors.ViewsAjaxView.attach = function() {
    if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
      $.each(Drupal.settings.views.ajaxViews, function(i, settings) {
        Drupal.views.instances[i] = new Drupal.views.ajaxView(settings);
      });
    }
  };

  Drupal.views = {};
  Drupal.views.instances = {};

  /**
   * JavaScript object for a certain view.
   */
  Drupal.views.ajaxView = function(settings) {
    var selector = '.view-dom-id-' + settings.view_dom_id;
    this.$view = $(selector);

    // If view is not present return to prevent errors.
    if (!this.$view.length) {
      return;
    }

    // Retrieve the path to use for views' ajax.
    var ajax_path = Drupal.settings.views.ajax_path;

    // If there are multiple views this might've ended up showing up multiple
    // times.
    if (ajax_path.constructor.toString().indexOf("Array") != -1) {
      ajax_path = ajax_path[0];
    }

    // Check if there are any GET parameters to send to views.
    var queryString = window.location.search || '';
    if (queryString !== '') {
      // Remove the question mark and Drupal path component if any.
      var queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
      if (queryString !== '') {
        // If there is a '?' in ajax_path, clean url are on and & should be
        // used to add parameters.
        queryString = ((/\?/.test(ajax_path)) ? '&' : '?') + queryString;
      }
    }

    this.element_settings = {
      url: ajax_path + queryString,
      submit: settings,
      setClick: true,
      event: 'click',
      selector: selector,
      progress: {
        type: 'throbber'
      }
    };

    this.settings = settings;

    // Add the ajax to exposed forms.
    this.$exposed_form = $('#views-exposed-form-' + settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'));
    this.$exposed_form.once(jQuery.proxy(this.attachExposedFormAjax, this));

    // Store Drupal.ajax objects here for all pager links.
    this.links = [];

    // Add the ajax to pagers.
    this.$view
      .once(jQuery.proxy(this.attachPagerAjax, this));

    // Add a trigger to update this view specifically. In order to trigger a
    // refresh use the following code.
    //
    // @code
    // jQuery('.view-name').trigger('RefreshView');
    // @endcode
    // Add a trigger to update this view specifically.
    var self_settings = this.element_settings;
    self_settings.event = 'RefreshView';
    var self = this;
    this.$view.once('refresh', function () {
      self.refreshViewAjax = new Drupal.ajax(self.selector, self.$view, self_settings);
    });
  };

  Drupal.views.ajaxView.prototype.attachExposedFormAjax = function() {
    var button = $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form);
    button = button[0];

    // Call the autocomplete submit before doing AJAX.
    $(button).click(function () {
      if (Drupal.autocompleteSubmit) {
        Drupal.autocompleteSubmit();
      }
    });

    this.exposedFormAjax = new Drupal.ajax($(button).attr('id'), button, this.element_settings);
  };

  /**
   * Attach the ajax behavior to each link.
   */
  Drupal.views.ajaxView.prototype.attachPagerAjax = function() {
    this.$view.find('ul.pager > li > a, ol.pager > li > a, th.views-field a, .attachment .views-summary a')
      .each(jQuery.proxy(this.attachPagerLinkAjax, this));
  };

  /**
   * Attach the ajax behavior to a single link.
   */
  Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function(id, link) {
    var $link = $(link);
    var viewData = {};
    var href = $link.attr('href');
    // Don't attach to pagers inside nested views.
    if ($link.closest('.view')[0] !== this.$view[0] &&
      $link.closest('.view').parent().hasClass('attachment') === false) {
      return;
    }

    // Provide a default page if none has been set. This must be done
    // prior to merging with settings to avoid accidentally using the
    // page landed on instead of page 1.
    if (typeof(viewData.page) === 'undefined') {
      viewData.page = 0;
    }

    // Construct an object using the settings defaults and then overriding
    // with data specific to the link.
    $.extend(
      viewData,
      this.settings,
      Drupal.Views.parseQueryString(href),
      // Extract argument data from the URL.
      Drupal.Views.parseViewArgs(href, this.settings.view_base_path)
    );

    // For anchor tags, these will go to the target of the anchor rather
    // than the usual location.
    $.extend(viewData, Drupal.Views.parseViewArgs(href, this.settings.view_base_path));

    // Construct an object using the element settings defaults,
    // then overriding submit with viewData.
    var pager_settings = $.extend({}, this.element_settings);
    pager_settings.submit = viewData;
    this.pagerAjax = new Drupal.ajax(false, $link, pager_settings);
    this.links.push(this.pagerAjax);
  };

  Drupal.ajax.prototype.commands.viewsScrollTop = function (ajax, response, status) {
    // Scroll to the top of the view. This will allow users
    // to browse newly loaded content after e.g. clicking a pager
    // link.
    var offset = $(response.selector).offset();
    // We can't guarantee that the scrollable object should be
    // the body, as the view could be embedded in something
    // more complex such as a modal popup. Recurse up the DOM
    // and scroll the first element that has a non-zero top.
    var scrollTarget = response.selector;
    while ($(scrollTarget).scrollTop() == 0 && $(scrollTarget).parent()) {
      scrollTarget = $(scrollTarget).parent();
    }
    // Only scroll upward.
    if (offset.top - 10 < $(scrollTarget).scrollTop()) {
      $(scrollTarget).animate({scrollTop: (offset.top - 10)}, 500);
    }
  };

})(jQuery);
;
