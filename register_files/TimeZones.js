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

/* Reloads timezones using XMLHttpRequest. */
function reloadTimeZones() {

  var xmlhttp = initXmlHttp();

  /* If xmlhttp == null, i.e. browser does not support xmlhttp, return */
  if (xmlhttp != null) {
    var buttonKey = "change_location";
    var button = getFieldFromForm("createaccount", buttonKey);
    if (button != null) {
      button.style.display = "none";
    }

    /* Hide the following buttons as Mac/Firefox displays the buttons
    in <noscript> when JavaScript is enabled if the request is an
    XmlHttpRequest. */
    var showAllButtonKey = "showAllTimezones";
    var showAllButton = getFieldFromForm("createaccount", showAllButtonKey);
    if (showAllButton != null) {
      showAllButton.style.display = "none";
    }

    var showInLocationButtonKey = "showTimezonesInLocation";
    var showInLocationButton  =
        getFieldFromForm("createaccount", showInLocationButtonKey);
    if (showInLocationButton != null) {
      showInLocationButton.style.display = "none";
    }
  } else {
    return;
  }

  var tzKey = "TimeZone";
  var tzField = getFieldFromForm("createaccount", tzKey);
  if (tzField == null) {
    /* no timezone field on this page */
    return;
  }

  var ccKey = "loc";
  var ccField = getFieldFromForm("createaccount", ccKey);

  var tzDisplayAllKey = "displayAll";
  var tzDisplayAllField = getFieldFromForm("createaccount", tzDisplayAllKey);

  var url = "SelectTimeZones?";
  if (tzField.options.length > 0) {
    url += "&" + tzKey + "=" + tzField.options[tzField.selectedIndex].value;
  }
  if (ccField != null) {
    url += "&" + ccKey + "=" + ccField.value;
  }
  if (tzDisplayAllField != null) {
    url += "&" + tzDisplayAllKey + "=" + tzDisplayAllField.checked;
  } else {
    var initTzDisplayAllKey = "initDisplayAll";
    var initTzDisplayAllField =
      getFieldFromForm("createaccount", initTzDisplayAllKey);
    if (initTzDisplayAllField != null) {
      url += "&" + tzDisplayAllKey + "=" + initTzDisplayAllField.value;
    }
  }
  var tzOptionalKey = "optional";
  var tzOptionalField = getFieldFromForm("createaccount", tzOptionalKey);
  if (tzOptionalField != null) {
    url += "&" + tzOptionalKey + "=" + tzOptionalField.value;
  }

  /* Get a handle of the Timezones div block. We use getElementById */
  /* instead of calling getFieldFromForm because div block can */
  /* not have name attribute. Netscape 4.X browsers do not */
  /* recognize getElementById, but they will not reach here as */
  /* they do not support xmlhttp in the first place. */
  var tzDivKey = "tz_div";
  var tzDiv = document.getElementById(tzDivKey);

  xmlhttp.open("GET", url, true);
  /* Specify a function of actions when response is retrieved. */
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      if (tzDiv != null) {
        tzDiv.innerHTML = xmlhttp.responseText;
      }
    }
  }
  /* Make GET request to url with no data. */
  xmlhttp.send(null);
}




}
/*
     FILE ARCHIVED ON 22:08:46 Dec 15, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:28:02 Jul 21, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 272.827 (2)
  RedisCDXSource: 18.509
  xauthn.chkprivs: 86.175
  exclusion.robots.policy: 322.263
  xauthn.identify: 235.661
  captures_list: 530.786
  CDXLines.iter: 16.762 (3)
  LoadShardBlock: 139.923 (3)
  esindex: 0.016
  PetaboxLoader3.datanode: 130.273 (5)
  exclusion.robots: 322.28
  PetaboxLoader3.resolve: 167.868 (2)
*/