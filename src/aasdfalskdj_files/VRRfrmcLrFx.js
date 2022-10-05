if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("ChannelEventType",[],(function(a,b,c,d,e,f){a="jewel_requests_add";b="mobile_requests_count";c="jewel_requests_remove_old";d="friend_requests_seen";e="inbox";var g="messaging",h="pages_messaging",i="typ",j="change_page_thread_flag",k="m_notification",l="notifications_read",m="notifications_seen",n="graphql",o="rti_session",p="rti_session_request",q="skywalker_message",r="delta";f.FRIEND_REQUESTS_ADD=a;f.FRIEND_REQUESTS_COUNT=b;f.FRIEND_REQUESTS_REMOVE=c;f.FRIEND_REQUESTS_SEEN=d;f.INBOX=e;f.MESSAGE=g;f.PAGES_MESSAGE=h;f.TYPING=i;f.PAGE_THREAD_FLAG_CHANGED=j;f.NOTIFICATIONS_NEW=k;f.NOTIFICATIONS_READ=l;f.NOTIFICATIONS_SEEN=m;f.GRAPHQL_SUBSCRIPTIONS=n;f.RTI_SESSION=o;f.GET_RTI_SESSION_REQUEST=p;f.SKYWALKER_MESSAGE=q;f.DELTA=r}),66);
__d("isNodeWithinRect",[],(function(a,b,c,d,e,f){function a(a,b){if(!a.getBoundingClientRect)return!1;a=a.getBoundingClientRect();return a.bottom>=b.top&&a.top<=b.bottom&&a.right>=b.left&&a.left<=b.right}f["default"]=a}),66);
__d("MTabbable",["MAria","MJSEnvironment","MViewport","isNodeWithinRect"],(function(a,b,c,d,e,f){function g(a,c){while(a&&a!==c){if(b("MAria").isHidden(a))return!0;a=a.parentNode}return!1}function h(a,b){if(a.offsetHeight===0||a.offsetWidth===0||window.getComputedStyle(a).visibility==="hidden"||parseInt(a.tabIndex,10)<0||g(a,b))return!1;if(a.tabIndex>=0)return!0;switch(a.tagName){case"A":return a.href&&a.rel!="ignore";case"INPUT":return a.type!="hidden"&&a.type!="file"&&!a.disabled;case"BUTTON":case"SELECT":case"TEXTAREA":return!a.disabled}return!1}function a(a){if(!a.getBoundingClientRect)return;var c=b("MJSEnvironment").IS_APPLE_WEBKIT_IOS&&parseFloat(b("MJSEnvironment").OS_VERSION)>=8||b("MJSEnvironment").BROWSER_NAME==="Safari"&&!b("MJSEnvironment").IS_APPLE_WEBKIT_IOS;c=c?a.querySelectorAll("a, button, select, [tabindex]"):a.querySelectorAll("a, button, input, select, textarea, [tabindex]");var d=b("MViewport").getBoundingRect();for(var e=0,f;f=c[e];e++)if(h(f,a)&&b("isNodeWithinRect")(f,d)){f.focus();return}}f.focusTabbable=a}),null);
__d("MHeaderGating",["CurrentUser","qex"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("CurrentUser").isWorkUser()?!0:!!c("qex")._("180")}g.isStickyHeaderEnabled=a}),98);
__d("Popover",["cx","$","CSS","DOM","FlowMigrationUtilsForLegacyFiles","MAria","MHeaderGating","MViewport","Stratcom","Vector","eventsMixinDeprecated","nullthrows","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){var i=40;a=function(){function a(b){var e=this;this._touchStartHandler=function(a){var b=e.options.touchstart_callback;b&&b(e._getTouchPoint(a))};this._touchMoveHandler=function(a){if(e.isOpen()){var b=e.options.touchmove_callback;b&&b(e._getTouchPoint(a))}};this._touchEndHandler=function(a){var b=e.options.touchend_callback;b&&b(e._getTouchPoint(a))};this._openHandler=function(a){a.prevent();a=e.isOpen();if(a&&!e.options.preventClose)e.close();else if(!a){a=d("DOM").scry(document,"input");for(var b=0;b<a.length;b++)a[b].blur();e.open()}};this._closeHandler=function(a){a.getNode("popover")||e.close()};this._position=function(){var a=e.flyout,b=e.flyoutAnchor;if(b&&e.options.positionNub){var f=e._getElementPosition(b),g=d("DOM").find(e.flyout,"*","nub"),h=c("Vector").getDim(g).x;b=c("Vector").getDim(b).x;a=e._getElementPosition(a);new(c("Vector"))(f.x-a.x+(b-h)/2,0).setPos(g)}e.refreshConstraints()};this._reposition=function(){c("setTimeoutAcrossTransitions")(e._position.bind(e),0)};var f=b.flyout;f=typeof f==="string"?c("$")(f):f;this.flyout=f;this.content=d("DOM").scry(this.flyout,"div","flyout-content")[0];this.content&&c("CSS").addClass(this.content,"_7i2z");this.options=b;this._onOrientationChange=this._reposition.bind(this);c("CSS").conditionClass(this.flyout,"popover_flyout",!0);f=b.button;f&&(f=typeof f==="string"?c("$")(f):f,this.buttonClickListener=d("DOM").listen(f,"click",null,this._openHandler.bind(this)),f.setAttribute("role","button"),d("MAria").setupPopup(f,this.flyout),this.button=f);f=b.flyoutAnchor;f?this.flyoutAnchor=typeof f==="string"?c("$")(f):f:this.flyoutAnchor=this.button;this.options.flyoutFromRoot&&(this.flyoutClickListener=d("DOM").listen(this.flyout,"click",null,this._openHandler.bind(this)));this.options.touchstart_callback&&(this.flyoutTouchStartListener=d("DOM").listen(this.flyout,"touchstart",null,this._touchStartHandler.bind(this)));this.options.touchmove_callback&&(this.flyoutTouchMoveListener=d("DOM").listen(this.flyout,"touchmove",null,this._touchMoveHandler.bind(this)));this.options.touchend_callback&&(this.flyoutTouchEndListener=d("DOM").listen(this.flyout,"touchend",null,this._touchEndHandler.bind(this)));a._instances[this.flyout.id]=this}var b=a.prototype;b.isOpen=function(){return!!this._isOpen};b.open=function(){if(this.isOpen())return;a._activePopover&&a._activePopover.close();a._activePopover=this;this._isOpen=!0;this.constraint=null;c("CSS").conditionClass(this.flyout,"popover_hidden",!1);this.options.flyoutFromRoot&&this._absolutePositionFlyout();this._position();this.options.heightConstraint||(c("CSS").conditionClass(c("nullthrows")(document.body),"disableClicks",!0),this.globalListener=c("Stratcom").listenCapture("click",null,this._closeHandler.bind(this)));window.addEventListener("orientationchange",this._onOrientationChange,!1);this.button=c("nullthrows")(this.button);d("MAria").showPopup(this.button,this.flyout);if(this.options.ensureVisible){var b=d("MViewport").getScrollTop(),e=this._getElementPosition(this.flyout).y,f=e+this.flyout.offsetHeight;f=f-(b+d("MViewport").getUseableHeight());if(f>0){f=Math.min(f,Math.max(e-b-i,0));d("MViewport").scrollTo(0,b+f)}}this.invoke("open")};b.close=function(b){if(!this.isOpen())return;a._activePopover=null;this._isOpen=!1;c("CSS").conditionClass(this.flyout,"popover_hidden",!0);this.options.flyoutFromRoot&&this.flyoutParent&&(this.flyoutParent.appendChild(this.flyout),delete this.flyoutParent);c("setTimeoutAcrossTransitions")(function(){c("CSS").conditionClass(c("nullthrows")(document.body),"disableClicks",!1)},400);this.globalListener&&this.globalListener.remove();window.removeEventListener("orientationchange",this._onOrientationChange,!1);this._releaseConstraint();this.button=c("nullthrows")(this.button);d("MAria").hidePopup(this.button,this.flyout);b||this.invoke("close")};b.clear=function(){this.globalListener&&this.globalListener.remove(),this.buttonClickListener&&this.buttonClickListener.remove(),this.flyoutClickListener&&this.flyoutClickListener.remove(),this.flyoutTouchStartListener&&this.flyoutTouchStartListener.remove(),this.flyoutTouchMoveListener&&this.flyoutTouchMoveListener.remove(),this.flyoutTouchEndListener&&this.flyoutTouchEndListener.remove(),delete a._instances[this.flyout.id]};b.refreshConstraints=function(){if(!this._isOpen)return!1;var b=this.flyout;this._releaseConstraint();if(this.options.heightConstraint){var e=d("MHeaderGating").isStickyHeaderEnabled();b.style.minHeight=d("MViewport").getUseableHeight(e)+"px";this.constraint=d("MViewport").addHeightConstraint(c("Vector").getDim(this.content).y+this._getElementPosition(b).y)}else this.constraint=d("MViewport").addMinHeightConstraint(c("Vector").getDim(b).y+this._getElementPosition(b).y+a._MARGIN)};b._getTouchPoint=function(a){var b;a=a.getRawEvent();a instanceof TouchEvent&&(b=a.targetTouches[0]);a={x:b?b.screenX:0,y:b?b.screenY:0};return a};b._getElementPosition=function(a){a=a;var b=a.offsetLeft,d=a.offsetTop;a=a.offsetParent;while(a&&a!==document.documentElement){b+=a.offsetLeft;d+=a.offsetTop;var e=window.getComputedStyle(a);b+=parseInt(e.getPropertyValue("border-left-width").slice(0,-2),10);d+=parseInt(e.getPropertyValue("border-top-width").slice(0,-2),10);a=a.offsetParent}return new(c("Vector"))(b,d)};b._absolutePositionFlyout=function(){this.flyoutParent=this.flyout.parentNode;c("$")("root").appendChild(this.flyout);var a=this._getElementPosition(this.flyout.parentNode),b=this._getElementPosition(this.flyoutAnchor);if(!this.flyoutAnchor)throw d("FlowMigrationUtilsForLegacyFiles").invariantViolation("Tried to get dimensions for a null flyout anchor");var e=c("Vector").getDim(this.flyoutAnchor);b=b.y-a.y+e.y;this.flyout.style.position="absolute";this.flyout.style.top=b+"px"};b._releaseConstraint=function(){this.constraint&&(this.constraint.release(),this.constraint=null)};a.getInstance=function(b){return a._instances[b]};a.clearAll=function(){for(var b=0;b<a._instances.length;b++)a._instances[b].clear()};return a}();a._activePopover=null;a._MARGIN=40;a._instances={};c("eventsMixinDeprecated")(a,["open","close"]);g["default"]=a}),98);
__d("MJewelFlyout",["CSS","DOM","EventEmitter","MHistory","MJSEnvironment","MLogState","MTabbable","MViewport","Popover","Stratcom","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){"use strict";var h=3e3;a=function(){function a(a,b,e){var f=this;this.$11=function(){if(f.$8){d("MViewport").scrollToHeader();var a=document.documentElement;a&&(c("CSS").conditionClass(a,"hide-scroll",!0),f.$8.style.maxHeight=a.offsetHeight-200+"px")}c("MHistory").pushSoftState(f.$3.softState);f.$7.emit("open");c("Stratcom").invoke("m:jewel:flyout:open",f.$3.sigil,{jewel:f.$3.sigil});d("MTabbable").focusTabbable(f.$1)};this.$12=function(){if(f.$8){f.$8.style.minHeight="";var a=document.documentElement;a&&c("CSS").conditionClass(a,"hide-scroll",!1)}c("Stratcom").invoke("m:jewel:flyout:close",f.$3.sigil,{jewel:f.$3.sigil});c("MHistory").popSoftState(f.$3.softState)};this.$13=function(a){d("MLogState").updateLink(a,f.$3.pos)};this.$1=b;this.$2=a;this.$3=e;this.$7=new(c("EventEmitter"))()}var b=a.prototype;b.isOpen=function(){return!!this.$9&&this.$9.isOpen()};b.open=function(){this.$9&&this.$9.open()};b.close=function(){this.$9&&this.$9.close()};b.$10=function(){var a=new(c("Popover"))({button:d("DOM").find(this.$2,"*","icon"),flyout:this.$1,ensureVisible:!1,heightConstraint:!0,preventClose:!0});this.$9=a;this.$4=a.listen("open",this.$11.bind(this));this.$5=a.listen("close",this.$12.bind(this));this.$6=d("DOM").listen(this.$1,"click",null,this.$13.bind(this));c("MJSEnvironment").IS_ANDROID&&c("MJSEnvironment").GET_OS_VERSION>=4&&(this.$8=d("DOM").scry(this.$1,"div","scroll-area")[0])};b.clear=function(){this.$4&&this.$4.remove(),this.$5&&this.$5.remove(),this.$6&&this.$6.remove(),this.$9&&this.$9.clear()};b.reregisterListeners=function(){var a=this.isOpen();this.clear();this.$10();a&&this.open()};b.addOpenListener=function(a){return this.$7.addListener("open",a)};b.setHeaderText=function(a,b){if(!a||!b)return;a=d("DOM").scry(this.$1,"*",a)[0];if(!a)return;var c=a.cloneNode(!0);c.innerText=b;d("DOM").replace(a,c)};a.removeMenuContent=function(a){a=document.getElementById(a);a&&d("DOM").remove(a)};a.updateMenuColor=function(b,d,e){e?c("setTimeoutAcrossTransitions")(a.$14.bind(this,b,d),h):a.$14(b,d)};a.$14=function(a,b){a=document.getElementById(a);a&&(c("CSS").conditionClass(a,"aclb",!b),c("CSS").conditionClass(a,"acw",b))};a.create=function(b,c,d){b=new a(b,c,d);b.$10();return b};return a}();g["default"]=a}),98);
__d("MJewel",["$","CSS","DOM","MJewelFlyout","Stratcom","URI","eventsMixinDeprecated","intlNumUtils"],(function(a,b,c,d,e,f,g){var h=0;a=function(){a.create=function(b,c){b=new a(b,c);b._init();return b};function a(a,b){var d=this;this._count=0;this._updateJewelsOnHistoryChange=function(a){a.getData().soft===d._softState?d._flyout&&d._flyout.open():d._flyout&&d._flyout.close(),d._updateIsJewelActive(a)};this.handleViewedContent=function(){d.getCount()>0&&d.isInitialized()?(d._preventClearBadge||d.setCount(0),d.invoke("cleared")):d.invoke("jewel_click")};this._sigil=a;this.options=b||{};this._jewelNode=c("$")("MChromeHeader");this._softState=b.softState||"jewel="+h++;this._contentsSigil=b.contentsSigil||"contents";this._additionalPaths=b.additionalPaths||[];this._noPopover=!!b.noPopover;this._preventClearBadge=!!b.preventClearBadge;this._count=b.count||0}var b=a.prototype;b._init=function(){if(!this._noPopover){var a=c("MJewelFlyout").create(this._getJewelElement(),this._getFlyoutElement(),{sigil:this._sigil,softState:this._softState,pos:this.options.pos});a.addOpenListener(this.handleViewedContent.bind(this));this._flyout=a}c("Stratcom").listen("m:history:change",null,this._updateJewelsOnHistoryChange.bind(this))};b.isInitialized=function(){return!!d("DOM").scry(this._jewelNode,"*",this._contentsSigil)[0]};b._getJewelElement=function(){return d("DOM").find(this._jewelNode,"div",this._sigil)};b._getCountElement=function(){return d("DOM").find(this._getJewelElement(),"span","count")};b._getContentsElement=function(){return d("DOM").find(this._getJewelElement(),"*",this._contentsSigil)};b._getFlyoutElement=function(){return d("DOM").find(this._getJewelElement(),"*","flyout")};b.getCount=function(){return this._count};b.getFlyout=function(){return this._flyout};b._updateCountElement=function(){var a=this._getJewelCount();d("DOM").setContent(this._getCountElement(),d("intlNumUtils").formatNumberWithThousandDelimiters(a));a=this._getJewelElement();var b=this._count>0;c("CSS").conditionClass(a,"noCount",!b);c("CSS").conditionClass(a,"hasCount",b)};b._updateIsJewelActive=function(a){var b=new(c("URI"))(a.getData().path);b=b.getPath();a=a.getData().soft;b=!a&&this._additionalPaths.includes(b);a=a===this._softState;c("CSS").conditionClass(this._getJewelElement(),"popoverOpen",a||b)};b.setCount=function(a){if(a<0)return;this._count=a;this._updateCountElement()};b.updateCount=function(a,b){!this.isOpen()?this.setCount(a):a&&b()};b._getJewelCount=function(){if(this._count>0)return this._count;else return 0};b.isOpen=function(){return!!this._flyout&&this._flyout.isOpen()};b.reregisterListeners=function(){var a=this._flyout;a&&a.reregisterListeners()};return a}();a.JEWEL_NAV_NODE_ID="mJewelNav";c("eventsMixinDeprecated")(a,["cleared","jewel_click"]);g["default"]=a}),98);
__d("MJewelLinkFetcher",["$","DOM","MLinkHack"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=d("DOM").find(c("$")("MChromeHeader"),"div",a);if(!a)return null;a=d("DOM").find(a,"a","icon");return!a?null:d("MLinkHack").getHref(a)}g.get=a}),98);
__d("MJewelsSafePageletLoader",["MRequest","PageletEventConstsJS","PageletEventsHelper","Stratcom"],(function(a,b,c,d,e,f,g){"use strict";var h={};function i(a,b){var e=null,f=function(){e&&e.remove(),e=null};e=c("Stratcom").listen("m:page:unload",null,function(){f(),b()});d("PageletEventsHelper").subscribeToPageletEvents(function(b,d,e,g){b===a&&d===c("PageletEventConstsJS").JS_END&&f()})}function j(a,b){c("Stratcom").listen(["m:chrome:tab:show","m:jewel:flyout:open"],a,function(){new(c("MRequest"))(b).send(),c("Stratcom").removeCurrentListener()})}function a(a){if(h[a.jewelSigil])return;h[a.jewelSigil]=!0;i(a.pageletID,j.bind(null,a.jewelSigil,a.retryUri))}g.trackJewel=a}),98);
__d("MBackToTop",["JavelinHistory","MHome","MPageController","MPageControllerPath","MStopNGo","MViewport","Stratcom"],(function(a,b,c,d,e,f){"use strict";var g=b("MViewport").getScreenHeight(),h={init:function(a){if(!h._isBrowserSupported())return;if(h._initialized)return;h._initialized=!0;h._reload=a.reload;b("MStopNGo").listen("go",h._pushScrollingStateIfNeeded);b("MStopNGo").listen("stop",function(){return setTimeout(h._pushScrollingStateIfNeeded,1e3)});b("Stratcom").listen("popstate",null,h._onpopstate)},_onpopstate:function(a){h._lastpop=Date.now();if(!h._isPathSupported())return;if(h._isScrollingState())return;b("MPageControllerPath").isRequestPath(location.href)&&b("MViewport").getScrollTop()>g&&(window.setTimeout(function(){b("MViewport").scrollToTop(),h._reload==="full"&&b("MPageController").reload()},1),a.stop())},_pushScrollingStateIfNeeded:function(){if(!h._isPathSupported())return;if(h._isScrollingState())return;b("MViewport").getScrollTop()>g&&Date.now()-h._lastpop>1e3&&window.history.pushState({scrolling:1},null)},_initialized:!1,_lastpop:0,_reload:null,_isScrollingState:function(){var a=window.history.state;return a&&a.scrolling},_isBrowserSupported:function(){return b("JavelinHistory").CAN_USE_PUSH_STATE},_isPathSupported:function(){return b("MHome").isHome(location.href)}};e.exports=h}),null);
__d("MActorGatewayRedirect",[],(function(a,b,c,d,e,f){function a(a){window.location!==a&&(window.location=a)}f.redirect=a}),66);
__d("MLink",["CurrentEnvironment","DOM","ErrorUtils","FBLogger","MLegacyDataStore","MLinkHack","MLynx","MPageCache","MPageController","Stratcom","URI"],(function(a,b,c,d,e,f,g){var h="standalone"in window.navigator&&window.navigator.standalone,i=!1;function a(){if(i)return;i=!0;d("DOM").listen(document.documentElement,"click",null,function(a){if(a.getPrevented())return;c("ErrorUtils").applyWithGuard(function(){var b=a.getNode("tag:a");if(b==null)return;var e=a.getRawEvent();if(b.getAttribute("onclick")||(e.which||e.button)>=2)return;d("MLinkHack").remove(b);e=b.getAttribute("href")||null;var f=new(c("URI"))(e),g=f.getProtocol();if(g&&g!="http"&&g!="https")return;var i=f.getDomain(),j;c("CurrentEnvironment").workplacedotcom?j=i&&!/\.workplace.com$/i.test(i):j=i&&!/\.facebook.com$/i.test(i);j&&!d("MLynx").isShimmedLink(b)&&c("FBLogger")("FIXME").mustfix("Loading an external URL without shimming: %s",e);i=b.getAttribute("target")||null;if((i==="_blank"||j)&&h)return;if(b.hasAttribute("data-disable-mlink"))return;if(i==="_blank")window.open(e,"_blank");else if(f.getPath().toLowerCase().indexOf("/dialog/oauth")>-1)return;else if(i||g&&g+":"!==location.protocol||c("Stratcom").hasSigil(b,"no_mpc")||j)window.location=e;else if(e)if(e.indexOf("#")===0){f=document.getElementById(e.substr(1));f&&f.scrollIntoView()}else{i=d("MLegacyDataStore").get(b);i.fromCache&&c("MPageCache").setScrollHistory(e,0);d("MPageController").load(e,{replace:i.behavior==="replace-state",expiration:i.fromCache?i.shortCache?d("MPageController").EXPERIMENTAL_USER_EXPIRE_MS:d("MPageController").HISTORY_EXPIRE_MS:null,noAutoScroll:i.noAutoScroll,prefetchHref:i.prefetchHref,doNotRefocus:i.doNotRefocus})}else{if(b.hasAttribute("data-sigil"))return;g="";j=a.getTarget();while(j&&j!=document.body)g=g+" <"+j.nodeName,typeof j.id==="string"&&j.id!==""&&(g=g+" id="+j.id),typeof j.className==="string"&&j.className!==""&&(g=g+" class="+j.className),g+=" >",j=j.parentNode;c("FBLogger")("FIXME").warn('handleClick: unknown link action: <a id="%s" class="%s" /> Path: %s',b.id,b.className,g);return}a.prevent()},null,[],null,"LinkController")})}g.setupListener=a}),98);
__d("MPopoverClose",["Popover"],(function(a,b,c,d,e,f){a=function(){b("Popover")._activePopover&&b("Popover")._activePopover.close()};f.main=a}),null);
__d("getEarlyResources",[],(function(a,b,c,d,e,f){"use strict";function a(){return Array.from(document.querySelectorAll("head script[data-bootloader-hash]"))}f["default"]=a}),66);
__d("getInvisibleIframe",["DOM"],(function(a,b,c,d,e,f,g){"use strict";function a(b,d){var e=c("DOM").create("iframe",{width:0,height:0,frameborder:0,scrolling:"no","aria-hidden":"true",style:{opacity:0,pointerEvents:"none",position:"absolute"}});b!==void 0&&e.setAttribute("src",b);d&&(e.onload=d);c("DOM").appendContent(document.body,e);function f(b){b.__annotator=function(a){return a},b.__d_stub=[],b.__d=function(){b.__d_stub.push(arguments)}}function g(b){b.onerror=function(a,b,c,d,e){return!0}}f(e.contentWindow);g(e.contentWindow);return e}g["default"]=a}),98);
__d("ResourcesRefetcher",["Arbiter","DOM","PageEvents","getEarlyResources","getInvisibleIframe"],(function(a,b,c,d,e,f,g){"use strict";var h=0,i=0,j=null;function k(b){var a=l();h=b.length;for(var d=0;d<b.length;d++){var e=c("DOM").create("script",{src:b[d].getAttribute("src"),crossorigin:"anonymous"});e.onload=function(){m()};c("DOM").appendContent(a.contentDocument.head,e)}}function l(){j===null&&(j=c("getInvisibleIframe")());return j}function a(a){c("Arbiter").subscribeOnce(c("PageEvents").BIGPIPE_ONLOAD,function(){var b=c("getEarlyResources")();a.allEF||(b=b.slice(0,1));k(b)})}function m(){if(++i<h)return;j&&(c("DOM").remove(j),j=null,i=0)}g.refetchScripts=k;g._getIframe=l;g.refetchOnLoad=a;g.checkForFinished=m}),98);
__d("fbs",["fbt","invariant","FbtHooks","FbtPureStringResult"],(function(a,b,c,d,e,f,g,h){var i;a=babelHelpers["extends"]({},g,{_param:function(a,c,d){typeof c==="string"||c instanceof b("FbtPureStringResult")||h(0,11709,c,typeof c);return g._param(a,c,d)},_plural:function(a,c,d){d==null||typeof d==="string"||d instanceof b("FbtPureStringResult")||h(0,47119,d,typeof d);return g._plural(a,c,d)},_wrapContent:function(a,c,d,e){a=typeof a==="string"?[a]:a;var f=(i||(i=b("FbtHooks"))).getErrorListener({hash:d,translation:c});return i.getFbsResult({contents:a,errorListener:f,extraOptions:e,patternHash:d,patternString:c})}});e.exports=a}),null);
__d("formatNumber",["fbs","intlNumUtils"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("intlNumUtils").formatNumber(a,c)}function g(a,c){return b("fbs")._({"*":"{number}+"},[b("fbs")._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])])}function h(a,c){return b("fbs")._({"*":"\u003C{number}"},[b("fbs")._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])])}function c(a,c,d){return a>c?g(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}function d(a,c,d){return a<c?h(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}a.withThousandDelimiters=b("intlNumUtils").formatNumberWithThousandDelimiters;a.withMaxLimit=c;a.withMinLimit=d;e.exports=a}),null);
__d("onAfterDisplay",["NavigationMetrics","TimeSlice","requestIdleCallback"],(function(a,b,c,d,e,f,g){"use strict";var h=[],i=!1;function a(a){a=c("TimeSlice").guard(a,"onAfterDisplay invocation",{propagationType:c("TimeSlice").PropagationType.ORPHAN});i?c("requestIdleCallback")(a):h.push(a)}c("NavigationMetrics").addRetroactiveListener(c("NavigationMetrics").Events.EVENT_OCCURRED,function(a,b){["all_pagelets_displayed","e2e"].indexOf(b.event)>-1&&!i&&(i=!0,h.forEach(function(a){c("requestIdleCallback")(a)}))});g["default"]=a}),98);