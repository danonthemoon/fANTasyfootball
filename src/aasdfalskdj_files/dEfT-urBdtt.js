if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("XAppGrowthCtaLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/mobile/android/redirect/cta_logging/",{event:{type:"Enum",required:!0,enumType:1}})}),null);
__d("MAppGrowthCtaLogging",["BanzaiLogger","Stratcom","XAppGrowthCtaLoggingController","XAsyncRequest","goURI"],(function(a,b,c,d,e,f,g){"use strict";function a(a){c("Stratcom").listen("click",a,function(a){var b=a.getTarget().getAttribute("data-disabled");a.getTarget().setAttribute("data-disabled","1");var d=a.getTarget().getAttribute("href");if(b!="1"){b=a.getTarget().getAttribute("data-event");b=c("XAppGrowthCtaLoggingController").getURIBuilder().setEnum("event",b).getURI();var e=function(b){a.getTarget().setAttribute("data-disabled","")};new(c("XAsyncRequest"))(b).setMethod("POST").setHandler(e).send()}b=d.startsWith("#!")?d.substring(2):d;c("goURI")(b)})}function b(a,b,d,e,f){c("Stratcom").listen("click",a,function(a){c("BanzaiLogger").log("MsiteUpsellPromosRealTimeLoggerConfig",{event:"clicked",upsell:b,impression:d});e!==""&&c("goURI")(e);a=a.getTarget().getAttribute("href");a=a.startsWith("#!")?a.substring(2):a;c("goURI")(a)})}g.init=a;g.logToPromoFunnelLogger=b}),98);
__d("MFirefoxAppDetect",[],(function(a,b,c,d,e,f){function a(a,b){if(!navigator.mozApps){b();return}if(window.locationbar&&!window.locationbar.visible){a();return}if(navigator.mozApps.getSelf){var c=navigator.mozApps.getSelf();c.onsuccess=function(){c.result?a():b()};c.onerror=b}else b()}f.isFirefoxApp=a}),null);
__d("MPageHeaderLeft",["$","DOM","MFirefoxAppDetect"],(function(a,b,c,d,e,f,g){var h={};function i(a){if(!h.back_button){var b=c("$")("page");h.back_button=d("DOM").find(b,"a","back-button");h.menu_button=d("DOM").find(b,"a","menu-link")}a.show_back_button?(d("DOM").hide(h.menu_button),d("DOM").show(h.back_button)):(d("DOM").hide(h.back_button),d("DOM").show(h.menu_button))}function j(a){var b=window.navigator;b.standalone||h.isMozApp?i(a):h.isMozApp===void 0&&(h.lastConfig=a,d("MFirefoxAppDetect").isFirefoxApp(function(){h.isMozApp=!0,a===h.lastConfig&&(j(a),delete h.lastConfig)},function(){h.isMozApp=!1}))}g.main=j}),98);
__d("XTaggingCounterController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/composer/tagging/counter/",{event:{type:"Enum",required:!0,enumType:1}})}),null);
__d("MTaggingCounter",["AsyncSignal","XTaggingCounterController"],(function(a,b,c,d,e,f){a={logEvent:function(a,c){c=b("XTaggingCounterController").getURIBuilder().setEnum("event",a).getURI();new(b("AsyncSignal"))(c).send()}};e.exports=a}),null);
__d("MessengerMsiteLogEventOnClick",["EventListener","MSiteMessengerDiodeTypedLogger"],(function(a,b,c,d,e,f,g){function a(a,b,d,e){c("EventListener").listen(a,"click",function(){try{new(c("MSiteMessengerDiodeTypedLogger"))().setEvent(b).setMessagingEntryPoint(d).log()}catch(a){}e.go()})}g.registerRedirect=a}),98);
__d("MFeedAttributionOnClick",["Event"],(function(a,b,c,d,e,f,g){"use strict";function a(a){c("Event").listen(a,"click",function(){})}function b(a){c("Event").listen(a,"click",function(){})}g.logExposureOnFb4aAttributionClick=a;g.logExposureOnFbliteAttributionClick=b}),98);
__d("MFeedErrorDetection",["Banzai","DataAttributeUtils"],(function(a,b,c,d,e,f,g){"use strict";var h={};function i(a,b,d,e){a={event:a,shouldLogDetail:b,site:"mtouch"};b&&(a.intValues=d,a.normalValues=e);c("Banzai").post("feed_error_detection",a,{delay:0})}function a(a){var b=a.feedObjectElement;a=a.shouldLogDetail;if(!b)return;var d=c("DataAttributeUtils").getDataFt(b);b=b.getAttribute("data-dedupekey");if(!b||!d)return;if(h[b]){var e;a&&(e={dedupKey:b,ft_A:d,ft_B:h[b]});i("mtouch_duplicate_stories",a,{},{dup_field:e||{}})}else h[b]=d}g.registerFeedStory=a}),98);
__d("MFollowFeedSourcesFriend",["$","DOM","MLegacyDataStore","MRequest","MURI","Stratcom"],(function(a,b,c,d,e,f,g){var h="m-follow-feedsources",i="/a/subscriptions/remove",j="/a/subscriptions/add",k=89;function l(a){a=a.getNode(h);var b=d("MLegacyDataStore").get(a),e=null;b.is_following?(e=new(c("MURI"))(i),d("MLegacyDataStore").set(a,{is_following:!1}),d("DOM").show(c("$")("msite_feedsources_follow_"+b.id)),d("DOM").hide(c("$")("msite_feedsources_unfollow_"+b.id))):(e=new(c("MURI"))(j),d("MLegacyDataStore").set(a,{is_following:!0}),d("DOM").show(c("$")("msite_feedsources_unfollow_"+b.id)),d("DOM").hide(c("$")("msite_feedsources_follow_"+b.id)));a=new(c("MRequest"))(e);e={subject_id:b.id,forceredirect:!1,location:k};b.context_info&&(e={subject_id:b.id,forceredirect:!1,location:k,context_info:b.context_info});a.setData(e);a.send()}var m=!1;function a(){if(m)return;m=!0;c("Stratcom").listen("click",h,l)}g.main=a}),98);
__d("MLtgTranslationPreferencesBootloader",["Bootloader","EventListener"],(function(a,b,c,d,e,f,g){var h;function a(a,e,f,g,i){c("EventListener").listen(a,"click",function(){c("Bootloader").loadModules(["React","ReactDOM","DOMContainer.react","MLtgTranslationPreferences.react"],function(c,j,k,l){b=c,d=j,h||d.render(b.jsx(l,{translationData:f,originalMessageElem:g,showDropdown:!0,mLanguageSettingsURI:i,children:b.jsx(k,{children:e})}),a)},"MLtgTranslationPreferencesBootloader")})}g.bootloadDropdown=a}),98);
__d("MSnowflakeLink",["DOM","DataAttributeUtils","MLinkHack","MModalDialog","Stratcom","URI","destroyOnUnload"],(function(a,b,c,d,e,f){var g;a=function(){"use strict";function a(a){var c=this;this.$1=!1;this.$2=a.node;this.$3=a.permalink;this.$4=a.setToken;this.$5=a.targetPhoto;this.$6=b("DOM").listen(a.node,"click",null,this.onClick.bind(this));b("destroyOnUnload")(function(){return c.$6.remove()});this.$7()}var c=a.prototype;c.getFeedTrackingOwnerID=function(){var a=b("DataAttributeUtils").getClickTrackingParent(this.$2);return a&&a.id};c.getPermalinkURI=function(){return new(g||(g=b("URI")))(this.$3).addQueryData("photo_id",this.$5)};c.getModalDialogURI=function(){return new(g||(g=b("URI")))(this.$2.getAttribute("href")).addQueryData("cached_data",this.$1).addQueryData("ftid",this.getFeedTrackingOwnerID())};c.onClick=function(a){b("MLinkHack").remove(this.$2),b("MModalDialog").openWithPermalinkURI(this.getModalDialogURI().toString(),this.getPermalinkURI()),a.prevent()};c.$7=function(){var a=this;if(!this.$4){this.$1=!0;return}var c=b("Stratcom").listen("m:photosetstore:update",null,function(b){b=(b.getData()||{}).set_token;if(!c||b!=a.$4)return;a.$1=!0;c.remove();c=null});b("destroyOnUnload")(function(){return c&&c.remove()})};return a}();e.exports=a}),null);
__d("FeedbackReactionIDToTypeNumber",[],(function(a,b,c,d,e,f){"use strict";var g=Object.freeze({1635855486666999:1,1678524932434102:2,478547315650144:3,115940658764963:4,1667835766830853:5,1501783253447867:6,908563459236466:7,444813342392137:8,1536130110011063:10,1663186627268800:11,899779720071651:12,869508936487422:13,938644726258608:14,1609920819308489:15,613557422527858:16,1038933380267464:18,156697673289272:19});function a(a){if(a in g)return g[a];else return 17}f["default"]=a}),66);
__d("MReactionsBlingBar",["cx","fbt","FeedbackReactionIDToTypeNumber","MLiveData","MViewport","Stratcom","SubscriptionsHandler","UFIReactionIcons","UFIReactionTypes","URI","createIxElement","joinClasses"],(function(a,b,c,d,e,f,g,h){var i;b("UFIReactionTypes").ordering.unshift(17);var j=b("UFIReactionTypes").ordering.reduce(function(a,b,c){a[b]=c;return a},{}),k=function(){"use strict";function a(a){var c=a.elements;this.container=c.container;this.isPermalink=a.isPermalink;this.requestID=a.requestID;this.separateCommentsLink=a.separateCommentsLink;this.uri=new(i||(i=b("URI")))(a.uri);this.shouldAnchor=a.shouldAnchor;this.feedbackTarget=b("MLiveData").get(a.feedbackTargetID);this.isDarkMode=a.isDarkMode;this.darkModeLinks=a.darkModeLinks;this.subscriptions=new(b("SubscriptionsHandler"))();this.subscriptions.addSubscriptions(b("Stratcom").listen("m:page:unload",null,this.onUnload.bind(this)),this.feedbackTarget.listen("change",this.onChange.bind(this)));this.isPermalink&&this.shouldAnchor&&(a.isPageletified?this.anchorOnPageLoad():(this.pageLoadListener=b("Stratcom").listen(["m:page:render:complete"],null,this.anchorOnPageLoad.bind(this)),this.subscriptions.addSubscriptions(this.pageLoadListener)))}var c=a.prototype;c.onChange=function(){var a=this.feedbackTarget.getData(),c=a.reactioncountmap,d=a.reactioncountmapbyid,e=a.reactiondisplaystrategy,f=a.request_id,g=a.ufireactioniconsbyid;e=e==="use_reaction_sheet_string_only"||e==="hide_counts";if(f===this.requestID||!c)return;f=Object.keys(d).filter(function(a){a=d[a];return a&&a["default"]>0}).sort(function(a,c){var e=d[a]["default"],f=d[c]["default"];return e===f?j[b("FeedbackReactionIDToTypeNumber")(a)]-j[b("FeedbackReactionIDToTypeNumber")(c)]:f-e}).slice(0,3).map(function(a,c){var d=document.createElement("div");d.className=b("joinClasses")("_1g05","_77lc");d.style.zIndex=3-c;b("FeedbackReactionIDToTypeNumber")(a)===17?d.appendChild(b("createIxElement")(g[a][16])):d.appendChild(b("createIxElement")(b("UFIReactionIcons")[b("FeedbackReactionIDToTypeNumber")(a)][16]));return d});c=f.reduce(function(a,b){a.appendChild(b);return a},document.createElement("span"));c.className="_qfz";f=document.createElement("div");f.className="_1w1k"+(e?" _8l2a":"");if(this.separateCommentsLink){var i=document.createElement("a");this.uri.addQueryData("anchor_composer","false");i.href=this.uri;i.appendChild(c);f.appendChild(i)}else f.appendChild(c);i=a.comment_count;c=a.share_count;var k=a.reactionsentences.current&&a.reactionsentences.current.text,l=document.createElement("div");l.className="_1g06";l.setAttribute("aria-label",h._("{count} reacted",[h._param("count",k)]));l.textContent=k;if(this.isDarkMode){var m=document.createElement("a");m.href=this.darkModeLinks.likesLink;m.className="_8gqh";m.appendChild(l);f.appendChild(m)}else f.appendChild(l);m=this.container;l=document.createElement("div");l.className="_1fnt"+(e?" _8l2b":"");if(this.isDarkMode){e=document.createElement("a");e.className="_8gqh _1fnt";e.href=this.darkModeLinks.commentsLink;l=l.appendChild(e)}if(!this.isPermalink){if(i>0){e=document.createElement("span");e.className="_1j-c"+(this.separateCommentsLink?" _6hyu":"");e.textContent=i===1?h._("1 Comment"):h._("{count} Comments",[h._param("count",a.reduced_comment_count)]);if(this.separateCommentsLink){var n=document.createElement("a");this.uri.addQueryData("anchor_composer","true");n.href=this.uri;n.appendChild(e);l.appendChild(n)}else l.appendChild(e)}if(c>0){n=document.createElement("span");n.className="_1j-c";n.textContent=c===1?h._("1 Share"):h._("{count} Shares",[h._param("count",a.reduced_share_count)]);l.appendChild(n)}}while(m.hasChildNodes())m.removeChild(m.firstChild);if(k||i||c){e=document.createDocumentFragment();e.appendChild(f);e.appendChild(l);m.appendChild(e)}};c.onUnload=function(){this.subscriptions.release(),this.subscriptions=null};c.anchorOnPageLoad=function(){b("MViewport").scrollToNode(this.container)};return a}();e.exports={init:function(a){new k(a)}}}),null);
__d("SaveState",[],(function(a,b,c,d,e,f){a="saving";b="saved";c="unsaving";d="unsaved";f.SAVING=a;f.SAVED=b;f.UNSAVING=c;f.UNSAVED=d}),66);
__d("SaveStateHandler",["SaveState"],(function(a,b,c,d,e,f,g){var h=null;a=function(){function a(){this.$1={},this.$2={}}var b=a.prototype;b.addListener=function(a,b){this.$1[a]||(this.$1[a]=[]),this.$1[a].push(b)};b.setState=function(a,b){var c=this;a.forEach(function(a){c.$2[a]=b;if(!c.$1[a])return;a=c.$1[a];a.forEach(function(a){try{a.call(window,b)}catch(a){}})})};b.getState=function(a){return this.$2[a]};a.$3=function(){h||(h=new a());return h};a.listen=function(a,b){this.$3().addListener(a,b)};a.getState=function(a){return this.$3().getState(a)};a.saving=function(a){this.$3().setState(a,d("SaveState").SAVING)};a.saved=function(a){this.$3().setState(a,d("SaveState").SAVED)};a.unsaving=function(a){this.$3().setState(a,d("SaveState").UNSAVING)};a.unsaved=function(a){this.$3().setState(a,d("SaveState").UNSAVED)};a.isSaveAction=function(a){a=this.$3().getState(a);return a==d("SaveState").UNSAVED||a==d("SaveState").UNSAVING};a.isInTransition=function(a){a=this.$3().getState(a);return a==d("SaveState").SAVING||a==d("SaveState").UNSAVING};return a}();g["default"]=a}),98);
__d("MShareAngoraAttachment",["Stratcom"],(function(a,b,c,d,e,f){var g=!1;a=function(a){if(g)return;g=!0;window.addEventListener("error",function(a){if(a.target.nodeName=="IMG"){for(a=a.target;a!=document.body&&!b("Stratcom").hasSigil(a,"shareAngoraAttachmentMedia");a=a.parentNode);a!=document.body&&(a.style.display="none")}},!0)};f.registerDeadImageListener=a}),null);
__d("XPlacesUpdateLocationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/places/location_update/",{json_location:{type:"String"},source:{type:"Enum",defaultValue:"msite_unknown",enumType:1}})}),null);
__d("MLocationPrompt",["DOM","MRequest","MTaggingCounter","Stratcom","WebStorage","XPlacesUpdateLocationController"],(function(a,b,c,d,e,f,g){var h=["latitude","longitude","accuracy","altitude","altitudeAccuracy","heading","speed"],i={enableHighAccuracy:!0,timeout:6e4,maximumAge:3e5},j=6e4;a=function(){a.init=function(b,c,d,e){return new a(b,c,d,e)};a.getCoords=function(){return a.coords};a.isLocationAvailable=function(){return a.locationAvailable};function a(b,e,f,g){var h=this;this.$2=function(){d("MTaggingCounter").logEvent("geo_panel_accept"),h.$1(!0)};this.$3=function(){a.locationAvailable=!1,d("MTaggingCounter").logEvent("geo_panel_deny"),d("DOM").hide(h.container),c("Stratcom").invoke("m:jewel-set:notifications-jewel:refresh-flyout"),c("Stratcom").invoke(a.STRATCOM_DENY)};this.$5=function(b){a.locationAvailable=!1;h.clearWatch();var e=c("WebStorage").getLocalStorage();e&&e.setItem(a.GEOLOCATION_KEY,"0");d("DOM").show(h.container);d("DOM").hide(h.question);d("DOM").hide(h.loading);d("DOM").show(h.errored);c("Stratcom").invoke("m:jewel-set:notifications-jewel:refresh-flyout");c("Stratcom").invoke(a.STRATCOM_FAIL,null,{error:b});d("MTaggingCounter").logEvent("geo_panel_fail")};this.$4=function(){if(!h.listeners)return;for(var a=0;a<h.listeners.length;a++)h.listeners[a].remove();h.listeners=[]};this.lastUpdateTime=0;this.container=b;this.question=e;this.loading=f;this.errored=g;b=c("WebStorage").getLocalStorage();b&&b.getItem(a.GEOLOCATION_KEY)==="1"?this.$1():(a.locationAvailable=!1,d("DOM").show(this.question),d("DOM").hide(this.loading),d("DOM").hide(this.errored),d("DOM").show(this.container),c("Stratcom").invoke("m:jewel-set:notifications-jewel:refresh-flyout"),d("MTaggingCounter").logEvent("geo_panel_load"));this.listeners=[c("Stratcom").listen("click","accept-location",this.$2.bind(this)),c("Stratcom").listen("click","deny-location",this.$3.bind(this)),c("Stratcom").listen("m:page:unload",null,this.$4.bind(this))]}var b=a.prototype;b.clearWatch=function(){if(!this.watchID)return;navigator.geolocation.clearWatch(this.watchID);this.watchID=null};b.$1=function(b){var e=this;a.locationAvailable=!0;var f=c("WebStorage").getLocalStorage();f&&f.setItem(a.GEOLOCATION_KEY,"1");d("DOM").show(this.container);d("DOM").hide(this.question);d("DOM").show(this.loading);d("DOM").hide(this.errored);c("Stratcom").invoke("m:jewel-set:notifications-jewel:refresh-flyout");var g=setTimeout(this.$5,i.timeout);this.watchID=navigator.geolocation.watchPosition(function(a){b&&d("MTaggingCounter").logEvent("geo_panel_success"),clearTimeout(g),e.$6(a)},function(a){b&&d("MTaggingCounter").logEvent("geo_panel_fail"),clearTimeout(g),e.$5(a)},i);c("Stratcom").invoke(a.STRATCOM_ACCEPT)};b.$6=function(b){a.locationAvailable=!0;if(b){var e={},f;for(var g=0;g<h.length;g++)f=h[g],b.coords[f]&&(e[f]=b.coords[f]);b.timestamp&&(e.timestamp=b.timestamp/1e3);this.$7(JSON.stringify(e));d("DOM").hide(this.container);a.coords=e;c("Stratcom").invoke("m:jewel-set:notifications-jewel:refresh-flyout");c("Stratcom").invoke(a.STRATCOM_UPDATE,null,{position:b})}};b.$7=function(a){var b=Date.now();if(b-this.lastUpdateTime>j){this.lastUpdateTime=b;b=c("XPlacesUpdateLocationController").getURIBuilder().setString("json_location",a).setEnum("source","msite_location_prompt").getURI();new(c("MRequest"))(b).setMethod("POST").send()}};return a}();Object.assign(a,{STRATCOM_ACCEPT:"MLocationPrompt/accept",STRATCOM_DENY:"MLocationPrompt/deny",STRATCOM_UPDATE:"MLocationPrompt/update",STRATCOM_FAIL:"MLocationPrompt/fail",GEOLOCATION_KEY:"authorizeGeolocation",locationAvailable:void 0});g["default"]=a}),98);
__d("MMoreItemAutomatic",["MLocationPrompt","MPageCache","MPageControllerPath","MRequest","MRequestGateway","MRequestTypes","MResponseData","MStopNGo","MURI","MViewport","Stratcom","Vector","setTimeout","throttle"],(function(a,b,c,d,e,f,g){a=function(){function a(b){var e=this;this.$26=function(){e.$5?e.$27():!e.$6&&!e.$18&&e.$28()};this.$27=function(){!e.$6?(e.$17=!0,e.isElementVisible()&&c("Stratcom").invoke("m:more_item_automatic:spinner_visible",e.$9,e.$10),!e.$18?e.$28():e.$29()):e.$25()};this.$30=function(){e.$6||(e.$17=!1)};this.$31=function(){!e.$18&&(e.$8||e.isElementVisible())&&(e.$32(),e.$8=!1)};this.$32=function(){var b=c("MLocationPrompt").getCoords();e.$21&&b&&(e.$4=new(c("MURI"))(e.$4).addQueryData("lat",b.latitude).addQueryData("long",b.longitude).toString());b=new(c("MRequest"))(new(c("MURI"))(e.$4).toString());e.$3?b.setType(d("MRequestTypes").INDEPENDENT):b.setType(d("MRequestTypes").DEPENDENT);b.setAutoProcess(!1);var f=[],g=!1,h=function(){!g&&f.length&&(g=!0,f.shift().process())};e.$19&&(b.setTimeout(c("MRequestGateway").ERROR_TIMEOUT),b.setFinalizeUponError(!1),b.listen("error",function(b,d){c("setTimeout")(function(){navigator.onLine&&(d.reset(),d.addData({is_retry:1}),d.sendAfterProcessing())},a.TRY_AGAIN_DELAY)}));b.listen("response",function(a){a=new(c("MResponseData"))(a);a.listen("complete",function(){g=!1,h()});if(a.isPagelet()){f.push(a);h();return}g=!0;e.$15=a;e.$17&&e.$29()});b.send();e.$18=!0};this.$4=b.href;this.$21=b.sendGeolocation;this.$16=b.proximity_pages||7;this.$9=b.logger_id;this.$10=b.logger_name;this.$8=b.load_first_immediately;this.$19=b.retryOnError;this.$2=b.addToCache;this.$3=b.alwaysProcess;this.$20=b.scrollPrefetchThrottleFreq||0;this.$5=b.insertWhileScrolling;this.$18=!1;this.$17=!0;this.$13=0;this.$12=!1;this.$6=!1;this.$22=0;this.$7=null;this.$11=null;this.$14=!1;this.$15=null;this.$1=b.additionalEvent;var f=document.getElementById(b.id);f?(this.$22=c("Vector").getPos(f).y,this.$11=f,this.$14=b.persist_on_reload,this.$23()):this.uninstall()}var b=a.prototype;b.isElementVisible=function(){if(!this.$24())return!1;var a=this.$11;if(a&&"getBoundingClientRect"in a){var b=a.getBoundingClientRect(),e=b.width/10,f=b.height/10,g=b.left,h=b.right,i=b.top;b=b.bottom;var j=!1;while(!j&&g<=h&&i<=b){g=Math.round(g+e);i=Math.round(i+f);var k=document.elementFromPoint(g,i);j=a.contains(k)}k=j}else{e=c("Vector").getPos(a).y;f=e+c("Vector").getDim(a).y;g=d("MViewport").getScrollTop();h=g+d("MViewport").getUseableHeight();k=e<=h&&f>=g}return k};b.$25=function(){var a=this.$11;a&&(this.$22-d("MViewport").getScrollTop()<0&&(c("Stratcom").invoke("m:more_item_automatic:items_visible",this.$9),this.uninstall()))};b.$23=function(){!this.$18&&(this.$8||this.isElementVisible())&&(this.$32(),this.$8=!1);this.$7=[];this.$20>0&&this.$7.push(c("Stratcom").listen(["m:page:render:complete","scroll"],null,c("throttle").withBlocking(this.$26,this.$20,this)));this.$5||this.$7.push(c("MStopNGo").listen("go",this.$27.bind(this)),c("MStopNGo").listen("stop",this.$30.bind(this)));var a=this.$1;if(a!=null){var b;(b=this.$7)==null?void 0:b.push(c("Stratcom").listen(a,null,this.$32.bind(this)))}this.$7.push(c("Stratcom").listen("m:ajax:complete",null,this.$31.bind(this)))};b.$33=function(){var a=this.$11;if(a){var b=document;b=b.documentElement;if(b)return b.contains(a)}return!1};b.uninstall=function(){while(this.$7&&this.$7.length)this.$7.pop().remove();this.$18=!1;this.$15=null;this.$11=null;this.$14=!1};b.withinProximity=function(){var a=this.$11;return!!a&&c("Vector").getPos(a).y-d("MViewport").getScrollTop()<d("MViewport").getUseableHeight()*(1+this.$16)};b.$29=function(){var a=this.$15;a&&(this.$33()&&(a.process(),this.$2&&c("MPageCache").addCachedIUIResponse(d("MPageControllerPath").getRequestPath(),a)),c("Stratcom").invoke("m:more_item_automatic:items_loaded",this.$9,this.$10),this.$6=!0)};b.$24=function(){var a=this.$11;return!a||!a.offsetHeight?!1:!0};b.$28=function(){(this.isElementVisible()||this.$24()&&d("MViewport").getScrollTop()>100&&this.withinProximity())&&this.$32()};b.getPersistOnReload=function(){return this.$14};return a}();a.TRY_AGAIN_DELAY=1500;g["default"]=a}),98);
__d("InitMMoreItemAutomatic",["MMoreItemAutomatic","Stratcom"],(function(a,b,c,d,e,f,g){var h;function a(a){h||(h={},c("Stratcom").listen("m:page:loading",null,function(a){for(var a in h)h[a].getPersistOnReload()||(h[a].uninstall(),delete h[a])}));var b=a.id;h[b]&&h[b].uninstall();h[b]=new(c("MMoreItemAutomatic"))(a)}g.main=a}),98);
__d("MLtgTranslationBootloader",["Bootloader","Stratcom"],(function(a,b,c,d,e,f,g){"use strict";function h(a){c("Bootloader").loadModules(["MLtgTranslation"],function(b){b.seeTranslatePostButtonClick(a)},"MLtgTranslationBootloader")}function i(a){c("Bootloader").loadModules(["MLtgTranslation"],function(b){b.seeTranslatePostClick(a)},"MLtgTranslationBootloader")}function j(a){c("Bootloader").loadModules(["MLtgTranslation"],function(b){b.seeTranslateCommentClick(a)},"MLtgTranslationBootloader")}var k=!1;function a(){if(k)return;c("Stratcom").listen("click","m-see-translate-button",h);c("Stratcom").listen("click","m-see-translate-link",i);c("Stratcom").listen("click","m-see-translate-link-comment",j);k=!0}g.listenOnSeeTranslate=a}),98);