webpackJsonp([7,5],{0:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var n=o(33),i=a(n),s=o(261),u=a(s),r=o(35),l=o(271),c=a(l),d=o(270),f=a(d),p=o(272),v=a(p);i["default"].use(v["default"]),i["default"].use(f["default"]),i["default"].use(c["default"]),i["default"].filter("smartDate",r.smartDate);var _=new c["default"]({history:!0,hashbang:!1});_.map({"/home":{name:"home",component:function(t){o.e(0,function(e){var o=[e(264)];t.apply(null,o)}.bind(this))}},"/login":{component:function(t){o.e(3,function(e){var o=[e(266)];t.apply(null,o)}.bind(this))}},"/register":{component:function(t){o.e(2,function(e){var o=[e(267)];t.apply(null,o)}.bind(this))}},"/blog/:id":{name:"blog",component:function(t){o.e(1,function(e){var o=[e(262)];t.apply(null,o)}.bind(this))}},"/edit/:id":{component:function(t){o.e(4,function(e){var o=[e(263)];t.apply(null,o)}.bind(this))}}}),_.redirect({"*":"/home"}),_.start(u["default"],"#app")},1:function(t,e,o){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e["default"]=t,e}function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.postBlog=e.postComment=e.register=e.login=e.setComments=e.setBlog=e.logout=e.setUser=e.setBlogs=void 0;var i=o(49),s=n(i),u=o(4),r=a(u),l=o(34),c=o(32),d=n(c),f=o(85),p=n(f);o(81),d["default"].setOptions({highlight:function(t){return p["default"].highlightAuto(t).value}});e.setBlogs=function(t,e){var o=t.dispatch,a=arguments.length<=2||void 0===arguments[2]?5:arguments[2];o(r.SET_ISFETCH,0),this.$http.get(l.API_ROOT+"api/blogs",{params:{page:e,size:a}}).then(function(t){var e=!0,a=!1,n=void 0;try{for(var i,u=(0,s["default"])(t.data.blogs);!(e=(i=u.next()).done);e=!0){var l=i.value;l.content=(0,d["default"])(l.content)}}catch(c){a=!0,n=c}finally{try{!e&&u["return"]&&u["return"]()}finally{if(a)throw n}}o(r.SET_BLOGS,t.data.blogs,t.data.page),o(r.SET_ISFETCH,1)}).then(function(t){console.log(t)})},e.setUser=function(t){var e=t.dispatch;e(r.SET_ISFETCH,0),this.$http.get(l.API_ROOT+"api/user",{headers:{token:window.localStorage.getItem("token")}}).then(function(t){e(r.SET_USER,t.data.user),e(r.SET_ISFETCH,1)}).then(function(t){console.log(t)})},e.logout=function(t){var e=t.dispatch;window.localStorage.clear(),e(r.CLEAR_USER)},e.setBlog=function(t){var e=t.dispatch;e(r.SET_ISFETCH,0),this.$http.get(l.API_ROOT+"api/blog",{params:{_id:this.$route.params.id}}).then(function(t){t.data.blog.marked=(0,d["default"])(t.data.blog.content),e(r.SET_BLOG,t.data.blog),e(r.SET_ISFETCH,1)}).then(function(t){console.log(t)})},e.setComments=function(t,e){var o=t.dispatch,a=arguments.length<=2||void 0===arguments[2]?5:arguments[2];o(r.SET_ISFETCH,0),this.$http.get(l.API_ROOT+"api/comment",{params:{id:this.$route.params.id,page:e,size:a}}).then(function(t){var e=!0,a=!1,n=void 0;try{for(var i,u=(0,s["default"])(t.data.comments);!(e=(i=u.next()).done);e=!0){var l=i.value;l.content=(0,d["default"])(l.content)}}catch(c){a=!0,n=c}finally{try{!e&&u["return"]&&u["return"]()}finally{if(a)throw n}}o(r.SET_COMMENTS,t.data.comments,t.data.page),o(r.SET_ISFETCH,1)}).then(function(t){console.log(t)})},e.login=function(t,e,o){var a=t.dispatch;a(r.SET_ISFETCH,0),this.$http.post(l.API_ROOT+"api/login",{username:this.username.trim(),password:this.password}).then(function(t){a(r.SET_USER,t.data.user),a(r.SET_ISFETCH,1),window.localStorage.setItem("token",t.data.token),this.$route.router.go(-1)}).then(function(t){console.log(t)})},e.register=function(t,e,o){var a=t.dispatch;a(r.SET_ISFETCH,0),this.$http.post(l.API_ROOT+"api/register",{username:this.username.trim(),password:this.password}).then(function(t){a(r.SET_USER,t.data.user),a(r.SET_ISFETCH,1),window.localStorage.setItem("token",t.data.token),this.$route.router.go(-1)}).then(function(t){console.log(t)})},e.postComment=function(t,e){var o=t.dispatch;o(r.SET_ISFETCH,0),this.$http.post(l.API_ROOT+"api/comment",e,{headers:{token:window.localStorage.getItem("token")}}).then(function(t){t.data.comment[0].content=(0,d["default"])(t.data.comment[0].content),o(r.CONCAT_COMMENT,t.data.comment),o(r.SET_ISFETCH,1)}).then(function(t){console.log(t)})},e.postBlog=function(t,e){var o=t.dispatch;o(r.SET_ISFETCH,0),this.$http.post(l.API_ROOT+"api/blog",e,{headers:{token:window.localStorage.getItem("token")}}).then(function(t){o(r.SET_ISFETCH,1),this.$route.router.go({name:"blog",params:{id:t.data.blog_id}})}).then(function(t){console.log(t)})}},4:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SET_BLOGS="SET_BLOGS",e.SET_ISFETCH="SET_ISFETCH",e.SET_BLOG="SET_BLOG",e.SET_COMMENTS="SET_COMMENTS",e.CONCAT_COMMENT="CONCAT_COMMENT",e.SET_USER="SET_USER",e.CLEAR_USER="CLEAR_USER"},7:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getBlogs=function(t){var e=t.home;return e.blogs},e.getBPage=function(t){var e=t.home;return e.page},e.getIsFetch=function(t){var e=t.load;return e.isFetch},e.getUser=function(t){var e=t.header;return e.user},e.getBlog=function(t){var e=t.blog;return e.blog},e.getComments=function(t){var e=t.blog;return e.comments},e.getCPage=function(t){var e=t.blog;return e.page}},34:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.API_ROOT="https://express-vue-blog.herokuapp.com/"},35:function(t,e){"use strict";function o(t){if("string"==typeof t&&(t=parseInt(t)),isNaN(t))return"";var e=new Date,o=e.getTime(),a="刚刚",n=o-t;if(n>6048e5){var i=new Date(t),s=i.getFullYear(),u=i.getMonth()+1,r=i.getDate(),l=i.getHours(),c=i.getMinutes();a=s===e.getFullYear()?"":s+"年",a=a+u+"月"+r+"日"+l+":"+(c<10?"0":"")+c}else n>=864e5?a=Math.floor(n/864e5)+"天前":n>=36e5?a=Math.floor(n/36e5)+"小时前":n>=6e4&&(a=Math.floor(n/6e4)+"分钟前");return a}Object.defineProperty(e,"__esModule",{value:!0}),e.smartDate=o},36:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n,i=o(8),s=a(i),u=o(4),r={blog:{},comments:[],page:{}},l=(n={},(0,s["default"])(n,u.SET_BLOG,function(t,e){t.blog=e}),(0,s["default"])(n,u.SET_COMMENTS,function(t,e,o){t.comments=e,t.page=o}),(0,s["default"])(n,u.CONCAT_COMMENT,function(t,e){t.comments=e.concat(t.comments)}),n);e["default"]={state:r,mutations:l}},37:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n,i=o(8),s=a(i),u=o(4),r={user:""},l=(n={},(0,s["default"])(n,u.SET_USER,function(t,e){t.user=e}),(0,s["default"])(n,u.CLEAR_USER,function(t){t.user=""}),n);e["default"]={state:r,mutations:l}},38:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(8),i=a(n),s=o(4),u={blogs:[],page:{}},r=(0,i["default"])({},s.SET_BLOGS,function(t,e,o){t.blogs=e,t.page=o});e["default"]={state:u,mutations:r}},39:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(8),i=a(n),s=o(4),u={isFetch:0},r=(0,i["default"])({},s.SET_ISFETCH,function(t,e){t.isFetch=e});e["default"]={state:u,mutations:r}},40:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(33),i=a(n),s=o(273),u=a(s),r=o(38),l=a(r),c=o(37),d=a(c),f=o(36),p=a(f),v=o(39),_=a(v);i["default"].use(u["default"]),i["default"].config.debug=!0;var g=!1;e["default"]=new u["default"].Store({strict:g,modules:{home:l["default"],header:d["default"],blog:p["default"],load:_["default"]}})},41:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(269),i=a(n),s=o(268),u=a(s),r=o(40),l=a(r);e["default"]={components:{Vheader:i["default"],Vfooter:u["default"]},store:l["default"]}},45:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["load"]}},48:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(265),i=a(n),s=o(1),u=o(7);e["default"]={vuex:{actions:{setUser:s.setUser,logout:s.logout},getters:{user:u.getUser,isFetch:u.getIsFetch}},components:{Loading:i["default"]},ready:function(){window.localStorage.getItem("token")&&this.setUser()}}},81:function(t,e){},82:function(t,e){},83:function(t,e){},252:function(t,e){t.exports=' <vheader></vheader> <div class="uk-container uk-container-center"> <div class=uk-grid> <router-view></router-view> </div> </div> <vfooter></vfooter> '},256:function(t,e){t.exports=' <div v-show=load class="uk-width-1-1 uk-text-center"> <span><i class="uk-icon-spinner uk-icon-large uk-icon-spin"></i> 正在加载...</span> </div> '},259:function(t,e){t.exports=' <div class=uk-margin-large-top style="background-color:#eee; border-top:1px solid #ccc"> <div class="uk-container uk-container-center uk-text-center"> <div class="uk-panel uk-margin-top uk-margin-bottom"> <p>Powered by Vue|Uikit. Copyright &copy; 2016</p> <a target=_blank href=http://www.w3.org/TR/html5/ ><i class=uk-icon-html5 style="font-size:64px; color: #444"></i></a> </div> </div> </div> '},260:function(t,e){t.exports=' <nav class="uk-navbar uk-navbar-attached uk-margin-bottom" _v-09aa8206=""> <div class="uk-container uk-container-center" _v-09aa8206=""> <a v-link="\'/home\'" class=uk-navbar-brand _v-09aa8206="">Awesome</a> <ul class=uk-navbar-nav _v-09aa8206=""> <li _v-09aa8206=""><a v-link="\'/home\'" _v-09aa8206=""><i class=uk-icon-home _v-09aa8206=""></i> 主页</a></li> <li _v-09aa8206=""><a href=https://github.com/xwlyy/vue-blog target=_blank _v-09aa8206=""><i class=uk-icon-code _v-09aa8206=""></i> 前端源码</a></li> <li _v-09aa8206=""><a href=https://github.com/xwlyy/thinkjs-blog target=_blank _v-09aa8206=""><i class=uk-icon-code _v-09aa8206=""></i> 后端源码</a></li> </ul> <div class=uk-navbar-flip _v-09aa8206=""> <ul v-show=user class=uk-navbar-nav _v-09aa8206=""> <li class=uk-parent data-uk-dropdown="" _v-09aa8206=""> <a _v-09aa8206=""><i v-text="\' \'+user.nickname" class=uk-icon-user _v-09aa8206=""></i></a> <div class="uk-dropdown uk-dropdown-navbar" _v-09aa8206=""> <ul class="uk-nav uk-nav-navbar" _v-09aa8206=""> <li _v-09aa8206=""><a v-on:click=logout href=javascript:; _v-09aa8206=""><i class=uk-icon-sign-out _v-09aa8206=""></i> 登出</a></li> </ul> </div> </li> </ul> <ul v-else="" class=uk-navbar-nav _v-09aa8206=""> <li _v-09aa8206=""><a v-link="\'/login\'" _v-09aa8206=""><i class=uk-icon-sign-in _v-09aa8206=""></i> 登陆</a></li> <li _v-09aa8206=""><a v-link="\'/register\'" _v-09aa8206=""><i class=uk-icon-edit _v-09aa8206=""></i> 注册</a></li> </ul> </div> </div> </nav> <loading v-bind:load=!isFetch _v-09aa8206=""></loading> '},261:function(t,e,o){var a,n;o(82),a=o(41),n=o(252),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},265:function(t,e,o){var a,n;a=o(45),n=o(256),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},268:function(t,e,o){var a,n;n=o(259),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},269:function(t,e,o){var a,n;o(83),a=o(48),n=o(260),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}});
//# sourceMappingURL=app.cb3cc9a4c36f52cb700d.js.map