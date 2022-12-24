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

function initXmlHttp() {
  /* Candidate Active X types for IE.*/
  var activeXTypes = [
    "MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0",
    "MSXML2.XMLHTTP", "MICROSOFT.XMLHTTP.1.0", "MICROSOFT.XMLHTTP.1",
    "MICROSOFT.XMLHTTP" ];
  var winner = null;

  if (typeof XMLHttpRequest == 'undefined' &&
      typeof ActiveXObject != 'undefined') {
    for (var i = 0; i < activeXTypes.length; i++) {
      var candidate = activeXTypes[i];
      try {
        new ActiveXObject(candidate);
        /* If the creation above does not cause exception, */
        /* record the candidate and return. */
        winner = candidate;
        break;
      } catch (e) {
        /* Do nothing; try next choice. */
      }
    }

    if (winner != null) {
      return new ActiveXObject(winner);
    }
  }

  /* Reaching point means xmlhttp initialization for IE failed. */
  if (typeof XMLHttpRequest != 'undefined') {
    return new XMLHttpRequest();
  }

  /* If all fail, return null. */
  return null;
}

/* Help function that returns the a specified field from a specified form. */
/* Null if not found. */
function getFieldFromForm(formName, fieldName) {

  if (formName == null || fieldName == null) {
    return null;
  }
  if (document.forms[formName] != null) {
    return document.forms[formName].elements[fieldName];
  }
  return null;
}


}
/*
     FILE ARCHIVED ON 22:08:48 Dec 15, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:28:02 Jul 21, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 290.216
  exclusion.robots: 164.112
  exclusion.robots.policy: 164.103
  xauthn.identify: 140.034
  xauthn.chkprivs: 23.803
  RedisCDXSource: 1.459
  esindex: 0.007
  LoadShardBlock: 77.686 (3)
  PetaboxLoader3.datanode: 65.715 (5)
  CDXLines.iter: 30.704 (3)
  load_resource: 85.134 (2)
  PetaboxLoader3.resolve: 56.634 (2)
*/