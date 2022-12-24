var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//------------------------------------------------------------------------
// This file depends on: 
// http://gmail.google.com/gmail?view=page&name=browser
//------------------------------------------------------------------------

//------------------------------------------------------------------------
// Some browser detection logic. 
// Once http://gmail.google.com/gmail?view=page&name=browser has these 
// variables as *global* these definitions can be deleted. 
//------------------------------------------------------------------------
var agt = navigator.userAgent.toLowerCase();
var is_op = (agt.indexOf("opera") != -1);
var is_ie = (agt.indexOf("msie") != -1) && document.all && !is_op;
var is_ie5 = (agt.indexOf("msie 5") != -1) && document.all && !is_op;

//------------------------------------------------------------------------
// Communication with server
//------------------------------------------------------------------------

function CreateXmlHttpReq(handler) {
  var xmlhttp = null;
  if (is_ie) {
    // Guaranteed to be ie5 or ie6
    var control = (is_ie5) ? "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP";

    try {
      xmlhttp = new ActiveXObject(control);
      xmlhttp.onreadystatechange = handler;
    } catch (ex) {
      // TODO: better help message
      alert("You need to enable active scripting and activeX controls");  
    }

  } else {

    // Mozilla
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = handler;
    xmlhttp.onerror = handler;

  }

  return xmlhttp;
}

// XMLHttp send POST request
function XmlHttpPOST(xmlhttp, url, data) {
  try {
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xmlhttp.send(data);

  } catch (ex) {
    // do nothing
  }
}

// XMLHttp send GEt request
function XmlHttpGET(xmlhttp, url) {
  try {
    xmlhttp.open("GET", url, true);	
    xmlhttp.send(null);

  } catch (ex) {
    // do nothing
  }
}


}
/*
     FILE ARCHIVED ON 22:08:49 Dec 15, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:28:03 Jul 21, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  xauthn.chkprivs: 72.659
  PetaboxLoader3.resolve: 88.264 (2)
  cdx.remote: 0.124
  LoadShardBlock: 239.632 (3)
  exclusion.robots: 207.296
  exclusion.robots.policy: 207.28
  captures_list: 529.199
  esindex: 0.017
  CDXLines.iter: 18.954 (3)
  load_resource: 151.812 (2)
  PetaboxLoader3.datanode: 280.534 (5)
  xauthn.identify: 134.173
*/