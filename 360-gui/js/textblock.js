/*
	krpano - super simple html5 text input plugin
*/

var krpanoplugin = function()
{
	var local = this;

	var krpano = null;
	var plugin = null;
	
	var textelement = null;

	local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
	{
		krpano = krpanointerface;
		plugin = pluginobject;

		textelement = document.createElement("textarea");
		textelement.type = "text";
		textelement.style.width  = "100%";
		textelement.style.height = "100%";
		textelement.style.resize = "none" ;
		textelement.disabled = "true" ;

		// textelement.focus();
		plugin.registerattribute("text", "", text_set, text_get);
		plugin.registerattribute("onchanged", null);
		plugin.registerattribute("dis", "", disable_set);
		
		textelement.addEventListener("change", text_changed, true);
		plugin.sprite.appendChild(textelement);

		textelement.addEventListener("mousewheel", function(event){ event.stopPropagation(); }, true);
		textelement.addEventListener("DOMMouseScroll", function(event){ event.stopPropagation(); }, true);
		textelement.addEventListener("touchstart", function(event){ if(krpano.device.ios && window.innerHeight == krpano.display.htmltarget.offsetHeight){ /* avoid the iOS 'overscrolling' for fullpage viewers */ var bs = document.body.parentNode.style; bs.position="fixed"; bs.top=0; bs.left=0; bs.right=0; bs.bottom=0; } krpano.control.preventTouchEvents = false; event.stopPropagation(); }, true);
		textelement.addEventListener("touchend", function(event){ krpano.control.preventTouchEvents = true; event.stopPropagation(); }, true);
		textelement.addEventListener("gesturestart", function(event){ event.preventDefault(); }, true);


	}

	local.unloadplugin = function()
	{
		plugin = null;
		krpano = null;
	}
	

	function disable_set(disValue)

	{
		s
		if (disableVar == "true") {
  			alert('true');
		} 
		else { 
 			alert('false');
		}
		textelementDis = document.getElementById("input");
		textelementDis.disabled = "true" ;
	}



	function text_set(newtext)
	{
		textelement.value = newtext;
	}
	
	function text_get()
	{
		return textelement.value;
	}
	
	function text_changed()
	{
		krpano.call(plugin.onchanged, plugin);
	}
};
