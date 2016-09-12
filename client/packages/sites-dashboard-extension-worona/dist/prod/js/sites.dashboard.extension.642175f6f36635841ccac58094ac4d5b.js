module.exports=function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={exports:{},id:n,loaded:!1};return e[n].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var r={};return t.m=e,t.c=r,t.p="https://cdn.worona.io/packages/sites-dashboard-extension-worona/dist/prod/",t(0)}(function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(typeof e[t]){case"function":break;case"object":e[t]=function(t){var r=t.slice(1),n=e[t[0]];return function(e,t,u){n.apply(this,[e,t,u].concat(r))}}(e[t]);break;default:e[t]=e[e[t]]}return e}([function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.sagas=t.selectors=t.reducers=t.types=t.actions=void 0;var u=r(5),o=n(u),i=r(2),a=n(i),c=r(9),s=n(c),f=r(16),E=n(f),l=r(15),_=n(l);t.actions=o,t.types=a,t.reducers=s,t.selectors=E,t.sagas=_},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sagaCreators=t.reducerCreators=t.libs=void 0;var n=r(55);t.libs={get call(){return(0,n.dep)("connection","libs","call")},get subscription(){return(0,n.dep)("subscriptions","libs","subscription")},get push(){return(0,n.dep)("build","libs","push")}},t.reducerCreators={get collectionCreator(){return(0,n.dep)("subscriptions","reducerCreators","collectionCreator")},get isReadyCreator(){return(0,n.dep)("subscriptions","reducerCreators","isReadyCreator")}},t.sagaCreators={get subscriptionWatcherCreator(){return(0,n.dep)("subscriptions","sagaCreators","subscriptionWatcherCreator")}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CREATE_SITE_REQUESTED="sites/CREATE_SITE_REQUESTED",t.CREATE_SITE_STATUS_CHANGED="sites/CREATE_SITE_STATUS_CHANGED",t.CREATE_SITE_SUCCEED="sites/CREATE_SITE_SUCCEED",t.CREATE_SITE_FAILED="sites/CREATE_SITE_FAILED",t.DELETE_SITE_REQUESTED="sites/DELETE_SITE_REQUESTED",t.DELETE_SITE_STATUS_CHANGED="sites/DELETE_SITE_STATUS_CHANGED",t.DELETE_SITE_SUCCEED="sites/DELETE_SITE_SUCCEED",t.DELETE_SITE_FAILED="sites/DELETE_SITE_FAILED"},function(e,t,r){function n(e,t){for(var r=e.length;r--;)if(u(e[r][0],t))return r;return-1}var u=r(49);e.exports=n},function(e,t){e.exports=vendors_dashboard_worona},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.deleteSiteFailed=t.deleteSiteSucceed=t.deleteSiteStatusChanged=t.deleteSiteRequested=t.createSiteFailed=t.createSiteSucceed=t.createSiteStatusChanged=t.createSiteRequested=void 0;var u=r(2),o=n(u);t.createSiteRequested=function(e,t,r){return{type:o.CREATE_SITE_REQUESTED,name:e,url:t,_id:r}},t.createSiteStatusChanged=function(e){return{type:o.CREATE_SITE_STATUS_CHANGED,status:e}},t.createSiteSucceed=function(e){return{type:o.CREATE_SITE_SUCCEED,siteId:e}},t.createSiteFailed=function(e){return{type:o.CREATE_SITE_FAILED,error:e}},t.deleteSiteRequested=function(e){var t=e._id;return{type:o.DELETE_SITE_REQUESTED,_id:t}},t.deleteSiteStatusChanged=function(e){return{type:o.DELETE_SITE_STATUS_CHANGED,status:e}},t.deleteSiteSucceed=function(e){var t=e.siteId;return{type:o.DELETE_SITE_SUCCEED,siteId:t}},t.deleteSiteFailed=function(e){return{type:o.DELETE_SITE_FAILED,error:e}}},function(e,t,r){e.exports=r(4)("9538dc1f1f3ffc7eff656785a3b0e00e")},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.deleteSite=t.createSite=void 0;var u=r(1),o=n(u);t.createSite=function(e){var t=e.name,r=e.url,n=e._id,u=e.caller,i=void 0===u?o.libs.call:u;return i("createSite",{name:t,url:r,_id:n})},t.deleteSite=function(e){var t=e._id,r=e.caller,n=void 0===r?o.libs.call:r;return n("deleteSite",{_id:t})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CREATING_SITE="Creating your new site. Please wait...",t.DELETING_SITE="Deleting site..."},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.createSiteError=t.createSiteStatus=t.isCreatingSite=void 0;var u=r(56),o=r(2),i=n(o),a=r(12),c=r(1),s=n(c),f=t.isCreatingSite=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0],t=arguments[1];switch(t.type){case i.CREATE_SITE_REQUESTED:return!0;case i.CREATE_SITE_SUCCEED:case i.CREATE_SITE_FAILED:return!1;default:return e}},E=t.createSiteStatus=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0],t=arguments[1];switch(t.type){case i.CREATE_SITE_STATUS_CHANGED:return t.status;case i.CREATE_SITE_SUCCEED:case i.CREATE_SITE_FAILED:return!1;default:return e}},l=t.createSiteError=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0],t=arguments[1],r=t.error;switch(t.type){case i.CREATE_SITE_FAILED:return r.error===a.METEOR_USER_NOT_LOGGED_IN&&(r.reason=a.YOU_ARE_NOT_LOGGED_IN),r;case i.CREATE_SITE_REQUESTED:case i.CREATE_SITE_SUCCEED:return!1;default:return e}};t["default"]=function(){return(0,u.combineReducers)({isCreatingSite:f,createSiteStatus:E,createSiteError:l,collection:s.reducerCreators.collectionCreator("sites"),isReady:s.reducerCreators.isReadyCreator("sites")})}},function(e,t){function r(e,t){for(var r=-1,n=e?e.length:0,u=Array(n);++r<n;)u[r]=t(e[r],r,e);return u}e.exports=r},function(e,t,r){e.exports=r(4)("ac46257ab981ad0673dc2f51603455a2")},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.METEOR_USER_NOT_LOGGED_IN="User is not logged in.",t.YOU_ARE_NOT_LOGGED_IN="You are not logged in."},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function u(e){var t,r,n,u;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.name,r=e.url,n=e._id,o.prev=3,o.next=6,(0,a.put)(f.createSiteStatusChanged(c.CREATING_SITE));case 6:return o.next=8,(0,a.call)(l.createSite,{name:t,url:r,_id:n});case 8:return u=o.sent,o.next=11,(0,a.put)(f.createSiteSucceed(u));case 11:return o.next=13,(0,a.call)(S.libs.push,"/");case 13:o.next=19;break;case 15:return o.prev=15,o.t0=o["catch"](3),o.next=19,(0,a.put)(f.createSiteFailed(o.t0));case 19:case"end":return o.stop()}},v[0],this,[[3,15]])}function o(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield((0,i.takeEvery)(d.CREATE_SITE_REQUESTED,u),"t0",1);case 1:case"end":return e.stop()}},v[1],this)}Object.defineProperty(t,"__esModule",{value:!0}),t.createSiteSaga=u,t.createSiteWatcher=o;var i=r(11),a=r(6),c=r(8),s=r(5),f=n(s),E=r(7),l=n(E),_=r(2),d=n(_),p=r(1),S=n(p),v=[u,o].map(regeneratorRuntime.mark)},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function u(e){var t,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e._id,n.prev=1,n.next=4,(0,a.put)(f.deleteSiteStatusChanged(c.DELETING_SITE));case 4:return n.next=6,(0,a.call)(l.deleteSite,{_id:t});case 6:return r=n.sent,n.next=9,(0,a.put)(f.deleteSiteSucceed(r));case 9:return n.next=11,(0,a.call)(S.libs.push,"/");case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n["catch"](1),n.next=17,(0,a.put)(f.deleteSiteFailed(n.t0));case 17:case"end":return n.stop()}},v[0],this,[[1,13]])}function o(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield((0,i.takeEvery)(d.DELETE_SITE_REQUESTED,u),"t0",1);case 1:case"end":return e.stop()}},v[1],this)}Object.defineProperty(t,"__esModule",{value:!0}),t.deleteSiteSaga=u,t.deleteSiteWatcher=o;var i=r(11),a=r(6),c=r(8),s=r(5),f=n(s),E=r(7),l=n(E),_=r(2),d=n(_),p=r(1),S=n(p),v=[u,o].map(regeneratorRuntime.mark)},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function u(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,[(0,o.fork)(i.createSiteWatcher),(0,o.fork)(a.deleteSiteWatcher),(0,o.fork)(s.sagaCreators.subscriptionWatcherCreator("sites"))];case 2:case"end":return e.stop()}},f[0],this)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var o=r(6),i=r(13),a=r(14),c=r(1),s=n(c),f=[u].map(regeneratorRuntime.mark)},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function u(e){return e&&e.__esModule?e:{"default":e}}var o=r(53),i=u(o),a=r(54),c=u(a),s=r(9),f=n(s);e.exports=(0,i["default"])((0,c["default"])(f,"default"),function(e,t){return function(e){return e.sites[t]}})},function(e,t,r){function n(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var u=r(40),o=r(41),i=r(42),a=r(43),c=r(44);n.prototype.clear=u,n.prototype["delete"]=o,n.prototype.get=i,n.prototype.has=a,n.prototype.set=c,e.exports=n},function(e,t,r){function n(e){var t=-1,r=e?e.length:0;for(this.__data__=new u;++t<r;)this.add(e[t])}var u=r(17),o=r(46),i=r(47);n.prototype.add=n.prototype.push=o,n.prototype.has=i,e.exports=n},function(e,t){function r(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}e.exports=r},function(e,t,r){function n(e,t){var r=e?e.length:0;return!!r&&u(e,t,0)>-1}var u=r(29);e.exports=n},function(e,t){function r(e,t,r){for(var n=-1,u=e?e.length:0;++n<u;)if(r(t,e[n]))return!0;return!1}e.exports=r},function(e,t){function r(e,t){for(var r=-1,n=t.length,u=e.length;++r<n;)e[u+r]=t[r];return e}e.exports=r},function(e,t,r){function n(e,t,r,n){var E=-1,l=o,_=!0,d=e.length,p=[],S=t.length;if(!d)return p;r&&(t=a(t,c(r))),n?(l=i,_=!1):t.length>=f&&(l=s,_=!1,t=new u(t));e:for(;++E<d;){var v=e[E],T=r?r(v):v;if(v=n||0!==v?v:0,_&&T===T){for(var h=S;h--;)if(t[h]===T)continue e;p.push(v)}else l(t,T,n)||p.push(v)}return p}var u=r(18),o=r(20),i=r(21),a=r(10),c=r(35),s=r(36),f=200;e.exports=n},function(e,t){function r(e,t,r,n){for(var u=e.length,o=r+(n?1:-1);n?o--:++o<u;)if(t(e[o],o,e))return o;return-1}e.exports=r},function(e,t){function r(e){return e&&e.length?e[0]:void 0}e.exports=r},function(e,t,r){var n=r(37),u=n();e.exports=u},function(e,t,r){function n(e,t){return e&&u(e,t,o)}var u=r(26),o=r(51);e.exports=n},function(e,t,r){function n(e,t,r){var n=t(e);return o(e)?n:u(n,r(e))}var u=r(22),o=r(50);e.exports=n},function(e,t,r){function n(e,t,r){if(t!==t)return u(e,o,r);for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}var u=r(24),o=r(30);e.exports=n},function(e,t){function r(e){return e!==e}e.exports=r},function(e,t){function r(e){return e}e.exports=r},function(e,t,r){function n(e,t){return e=Object(e),u(e,t,function(t,r){return r in e})}var u=r(33);e.exports=n},function(e,t){function r(e,t,r){for(var n=-1,u=t.length,o={};++n<u;){var i=t[n],a=e[i];r(a,i)&&(o[i]=a)}return o}e.exports=r},function(e,t,r){function n(e,t){return t=o(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,i=o(r.length-t,0),a=Array(i);++n<i;)a[n]=r[t+n];n=-1;for(var c=Array(t+1);++n<t;)c[n]=r[n];return c[t]=a,u(e,this,c)}}var u=r(19),o=Math.max;e.exports=n},function(e,t){function r(e){return function(t){return e(t)}}e.exports=r},function(e,t){function r(e,t){return e.has(t)}e.exports=r},function(e,t){function r(e){return function(t,r,n){for(var u=-1,o=Object(t),i=n(t),a=i.length;a--;){var c=i[e?a:++u];if(r(o[c],c,o)===!1)break}return t}}e.exports=r},function(e,t,r){function n(e){return u(e,i,o)}var u=r(28),o=r(39),i=r(52);e.exports=n},function(e,t){function r(){return[]}e.exports=r},function(e,t){function r(){this.__data__=[]}e.exports=r},function(e,t,r){function n(e){var t=this.__data__,r=u(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():i.call(t,r,1),!0}var u=r(3),o=Array.prototype,i=o.splice;e.exports=n},function(e,t,r){function n(e){var t=this.__data__,r=u(t,e);return r<0?void 0:t[r][1]}var u=r(3);e.exports=n},function(e,t,r){function n(e){return u(this.__data__,e)>-1}var u=r(3);e.exports=n},function(e,t,r){function n(e,t){var r=this.__data__,n=u(r,e);return n<0?r.push([e,t]):r[n][1]=t,this}var u=r(3);e.exports=n},function(e,t){function r(e,t){return function(r){return e(t(r))}}e.exports=r},function(e,t){function r(e){return this.__data__.set(e,n),this}var n="__lodash_hash_undefined__";e.exports=r},function(e,t){function r(e){return this.__data__.has(e)}e.exports=r},31,function(e,t){function r(e,t){return e===t||e!==e&&t!==t}e.exports=r},function(e,t){var r=Array.isArray;e.exports=r},function(e,t,r){var n=r(45),u=n(Object.keys,Object);e.exports=u},function(e,t){function r(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}e.exports=r},function(e,t,r){function n(e,t){var r={};return t=o(t,3),u(e,function(e,n,u){r[n]=t(e,n,u)}),r}var u=r(27),o=r(31);e.exports=n},function(e,t,r){var n=r(10),u=r(23),o=r(25),i=r(32),a=r(34),c=r(38),s=r(48),f=a(function(e,t){return null==e?{}:(t=n(o(t,1),s),i(e,u(c(e),t)))});e.exports=f},function(e,t,r){e.exports=r(4)("3dc67d31d7435ab49745de8e10359378")},function(e,t,r){e.exports=r(4)("c02e47e5e61c3e61b153c56e595bd867")}]));