(function(t){function e(e){for(var i,a,r=e[0],o=e[1],c=e[2],u=0,p=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),A()}function A(){for(var t,e=0;e<s.length;e++){for(var A=s[e],i=!0,r=1;r<A.length;r++){var o=A[r];0!==n[o]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=A[0]))}return t}var i={},n={app:0},s=[];function a(e){if(i[e])return i[e].exports;var A=i[e]={i:e,l:!1,exports:{}};return t[e].call(A.exports,A,A.exports,a),A.l=!0,A.exports}a.m=t,a.c=i,a.d=function(t,e,A){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:A})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var A=Object.create(null);if(a.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(A,i,function(e){return t[e]}.bind(null,i));return A},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=o;s.push([0,"chunk-vendors"]),A()})({0:function(t,e,A){t.exports=A("56d7")},"034f":function(t,e,A){"use strict";A("85ec")},"05fd":function(t,e){throw new Error("Module parse failed: Unexpected character '\0' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},"09c8":function(t,e,A){},"0b36":function(t,e,A){t.exports=A.p+"img/5.ca62d948.png"},1057:function(t,e,A){t.exports=A.p+"img/3.2d26e355.png"},"18c3":function(t,e,A){"use strict";A("babf")},"198b":function(t,e,A){},"226e":function(t,e,A){t.exports=A.p+"img/6.05d87493.png"},"44b2":function(t,e,A){},"56d7":function(t,e,A){"use strict";A.r(e);A("e260"),A("e6cf"),A("cca6"),A("a79d");var i=A("2b0e"),n=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"app",attrs:{id:"app"}},[t.isShowGift?A("gift"):A("lottery",{on:{showGift:t.showGift}})],1)},s=[],a=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"lottery-component"},[A("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOptions}},[A("swiper-slide",{staticClass:"swiper-slide"},[A("home")],1),t._l(t.gifts,(function(t){return A("swiper-slide",{key:t.key,staticClass:"swiper-slide"},[A("gift-displayer",{attrs:{name:t.name,image:t.image,description:t.description}})],1)})),A("swiper-slide",{staticClass:"swiper-slide"},[A("turntable",{on:{success:t.handleTurntableSuccess}})],1)],2)],1)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lottery-home-component full-screen"},[i("img",{staticClass:"cloud",attrs:{src:A("9c9c"),alt:""}}),i("img",{staticClass:"bird",attrs:{src:A("b29a"),alt:""}}),i("img",{staticClass:"star",attrs:{src:A("7112"),alt:""}}),i("img",{staticClass:"star second",attrs:{src:A("7617"),alt:""}}),i("img",{staticClass:"heart",attrs:{src:A("df50"),alt:""}}),i("div",{staticClass:"main"},[i("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._l(t.messages,(function(e){return i("p",{key:e.key,staticClass:"message"},[t._v(t._s(e.wording))])}))],2),i("div",{staticClass:"footer"},[i("span",[t._v("©️本活动最终解释权归")]),i("span",[t._v(" "+t._s(t.owner)+" ")]),i("span",[t._v("所有")])])])},c=[],l={EXIST_KEY:"HAS_GIFT",NAME_KEY:"GIFT_NAME",IMAGE_KEY:"GIFT_IMAGE_URL"},u=!1,p={title:"老洪♥老妞",messages:[{key:"a",wording:"今天是相识第964天"},{key:"s",wording:"今天是婚后第370天"}],owner:"老妞",timeout:5e3,targetGiftIndex:null},f=[{key:"q",name:"圣罗兰口红套餐",alias:"罗兰",image:"/images/1.png",description:"「着我装者, 着我妆」"},{key:"w",name:"路易·威登包包",alias:"LV",image:"/images/2.png",description:"每个故事都蕴含着一段标致的旅程”"},{key:"e",name:"兰蔻小黑瓶套装",alias:"小黑瓶套装",image:"/images/3.png",description:"「强维稳，快修护」"},{key:"r",name:"520红包",alias:"520",image:"/images/6.png",description:"“想给你唱一百首情歌”"},{key:"t",name:"Dior星空套装",alias:"Dior星空",image:"/images/5.png",description:"「百变唇妆，精美雕琢」"},{key:"y",name:"1314红包",alias:"1314",image:"/images/6.png",description:"“从今往后，我都会在你旁边”"},{key:"u",name:"购物券：¥10",alias:"UR",image:"/images/7.png",description:"“买！买！买！”"},{key:"i",name:"美甲套餐",alias:"美甲",image:"/images/8.png",description:"「不同款式需求，全面满足」"}],d={name:"LotteryHome",data:function(){return{title:"",messages:[],owner:""}},methods:{initConfig:function(){var t=p.title,e=p.messages,A=p.owner;document.title=t,this.title=t,this.messages=e,this.owner=A}},created:function(){this.initConfig()}},g=d,m=(A("5aaf"),A("2877")),h=Object(m["a"])(g,o,c,!1,null,"a62f42d6",null),b=h.exports,y=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"lottery-gift-displayer-component full-screen"},[A("div",{staticClass:"erkang-bg-top"}),A("div",{staticClass:"erkang-bg-bottom"},[A("h2",[t._v(t._s(t.name))]),A("div",{staticClass:"border-area"},[A("img",{staticClass:"gift-image",attrs:{src:t.image,alt:"Gift"}})]),A("p",[t._v(t._s(t.description))])])])},w=[],v={name:"LotteryGiftDisplayer",data:function(){return{}},props:["name","image","description"]},C=v,x=(A("8861"),Object(m["a"])(C,y,w,!1,null,"54b73b0e",null)),S=x.exports,k=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"lottery-turntable-component full-screen"},[A("LuckyGrid",{ref:"luckyGrid",staticClass:"lucky-grid",attrs:{width:"300px",height:"300px",prizes:t.prizes,blocks:t.blocks,buttons:t.buttons,"default-style":t.defaultStyle,"active-style":t.activeStyle},on:{start:t.startCallBack,end:t.endCallBack}})],1)},G=[],E=(A("4160"),A("d81d"),A("b0c0"),A("159b"),{name:"LotteryTurntable",data:function(){return this.defaultStyle={fontColor:"#AFFFD7",fontSize:"10px",lineHeight:"13px",wordWrap:!1},this.activeStyle={fontColor:"#fff"},this.blocks=[{padding:"10px",background:"rgba(0, 0, 0, 0)",borderRadius:"10px"}],this.buttons=[{x:1,y:1,background:"rgba(0, 0, 0, 0)",fonts:[],imgs:[{src:A("6858"),width:"100%",top:"0"}]}],{prizes:[]}},methods:{getGiftList:function(){var t=[],e=[[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1]],i=f.map((function(t){return{fullName:t.name,name:t.alias,img:A("8569")("./public".concat(t.image)),top:"70%"}}));i.forEach((function(i,n){t.push({x:e[n][0],y:e[n][1],title:i.name,fullName:i.fullName,fonts:[{text:i.name,top:i.top}],imgs:[{src:A("6696"),activeSrc:A("b027"),width:"100%",height:"100%"},{src:i.img,width:"70%",top:"3%"}]})})),this.prizes=t},startCallBack:function(){var t=this;this.$refs.luckyGrid.play();var e=p.targetGiftIndex;!1===!!e&&(e=8*Math.random()>>0),setTimeout((function(){t.$refs.luckyGrid.stop(e)}),p.timeout),e=6},endCallBack:function(t){var e=this,A=t.imgs,i=t.fullName,n=A[1].src;localStorage.setItem(l.EXIST_KEY,"1"),localStorage.setItem(l.NAME_KEY,i),localStorage.setItem(l.IMAGE_KEY,n),setTimeout((function(){e.$emit("success")}),1200)}},mounted:function(){this.getGiftList()}}),j=E,L=(A("e24c"),Object(m["a"])(j,k,G,!1,null,"92879ac8",null)),M=L.exports,D={name:"Lottery",components:{Home:b,GiftDisplayer:S,Turntable:M},data:function(){return this.swiperOptions={direction:"vertical",width:window.innerWidth,height:window.innerHeight},{gifts:[]}},methods:{showGifts:function(){this.gifts=f},handleTurntableSuccess:function(){this.$emit("showGift")}},mounted:function(){this.showGifts()}},I=D,O=(A("18c3"),Object(m["a"])(I,a,r,!1,null,"1a4d8a84",null)),z=O.exports,B=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"gift-component full-screen"},[A("h1",[t._v("恭喜你中奖啦！")]),A("div",{staticClass:"gift-image-area"},[A("img",{staticClass:"gift-image",attrs:{src:t.giftImageUrl,alt:""}})]),A("h3",[t._v(t._s(t.giftName))]),t.isShowRestart?A("div",{staticClass:"replay-button",on:{click:t.replay}},[t._v("重新体验")]):t._e()])},J=[],T=(A("ac1f"),A("5319"),{name:"Gift",data:function(){return{giftName:"",giftImageUrl:"",isShowRestart:!1}},methods:{getLocalGift:function(){var t=localStorage.getItem(l.NAME_KEY),e=localStorage.getItem(l.IMAGE_KEY);this.giftName=t,this.giftImageUrl=e,this.isShowRestart=u},replay:function(){localStorage.removeItem(l.EXIST_KEY),location.replace("/")}},mounted:function(){this.getLocalGift()}}),Y=T,U=(A("6560"),Object(m["a"])(Y,B,J,!1,null,"f79c5b78",null)),N=U.exports,R={name:"App",components:{Lottery:z,Gift:N},data:function(){return{isShowGift:!1}},methods:{checkLocalGift:function(){var t=localStorage.getItem(l.EXIST_KEY);!0===!!t&&(this.isShowGift=!0)},showGift:function(){this.isShowGift=!0}},created:function(){this.checkLocalGift()},mounted:function(){}},_=R,F=(A("034f"),Object(m["a"])(_,n,s,!1,null,null,null)),V=F.exports,Z=A("7212"),P=A.n(Z),H=A("a280"),Q=A.n(H);A("bbe3");i["default"].use(P.a),i["default"].use(Q.a),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(V)}}).$mount("#app")},"5aaf":function(t,e,A){"use strict";A("09c8")},6560:function(t,e,A){"use strict";A("44b2")},6696:function(t,e,A){t.exports=A.p+"img/block-bg.5c9b3231.png"},6858:function(t,e,A){t.exports=A.p+"img/button.7572d599.png"},"6c69":function(t,e,A){t.exports=A.p+"img/2.03a4ca63.png"},7112:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA2CAMAAACsuQomAAABEVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlHAYAAAAAAAAAAAD+zC77yS1RQQ4AAACdfhwAAAAAAAAAAAAAAAD/zS4NCgLesyiNcRkAAAAAAAAAAAAAAAAAAAA8MAtLPA1ZSBBjUBJrVhR5YBazjyAAAAAAAAAXEgTzwyxFNwxvWRSGbBgAAAAAAAAAAAAAAAD9yy0pIQguJQg2Kgo2Kwritiitih+lhR0AAAAAAAAAAAAAAAAAAAD3xizvwCvluCjZryfQqCV1XRXNpCWCZxeWeBsAAAAAAAAAAAAAAAAAAAAAAAD+zC4eFwb4yC3rvSvCnSMAAAD/zS4AAABqxz+qAAAAWXRSTlMA/e766vL39Obi39jQ1QTvvAyM+PPj3NnMypt8/fjh2sfBq6AI6OTi397c2jgk9evm3duxk2ZH9u7t6uni2dmXdFItF+7o49/d3dzb2rm1hGA+Hfry8OXbbNZbyogAAALkSURBVEjHtdZnUxsxEAZgtNpVueKCuw244I4JNUBooaRCIIRU+f//kNwZhwGfzYFm8n5zeUarW5Wb+y/5VhnY4y3tnNva8xKissWvER3yLPFXcFIa03Z4HtqZ/gHY4beQM2ZF163wMnSMOcyJpg0u07ExZhPBCqtqgJccmbApW3UDnOko1wJv6w0TJHuZ3345roRlh4V3yKLP+U0zShUg8WLsFu5wZh3dFy9Pf4xNAWX6hfjE+zLG2TY+3iDNZnr1tLJ8crM6wyYG2tsd6yVHu5XyVqpUmz+5bjSKWiEBQLG8M1Wma0BMZc04VSf8NyHWaynt5lFpDVzA1B6eImdM8OT7fzjz8WijsLneyvVXCv3Loz+Diqcd/XYKTYnhkDEuRM/MyOuiQipF5U2JBZAvvnqT3fo1nb7rKgBIR2bqYzjk4o89E+R9dhpd2+g5WvjRPRgOurj4qmBmZqm7D0ipx/AsNXpGIih3Jlwwv1t7JCcnu+NyFgawambnY68NxCcLPhOMDdlwOATa72wezrC7DRDkTM61uQUUjMxHEeDk+hvHawsRnM2R1NH27PjSkSzMMGwvEZDA5LtJnenvYS2qbx+ePi4IFjYs+dNM5rOSjbn41CST3ejzzinpPuemkrI9FruZ7/e8imL1GVjAeDsfOdj7cK9bwBOxOE3q091yRCGBku2lO3y4TjJea71iwqwAL0mOCg5ahdFnJGzG4ZI7GjmjZHDyuppxCNbuQdYspJDc+JGPRzsBxd3nugr7JyE18BXF2CZBLsQ94PffuSL04PkYp6VIhn1aJ3x4yGCgiSDuLFYjvIZ84spXjJNgHGLW2OcAd1BGbk8M95D0nrCJumgFeJ/y0d8ayDn55Sfa7YdlXwCffo9d573y7Wzc4AHu0sy5Dc6eup558uLDG275Gsb1VRGYHa6I/JWWyg6fUrFYJNu3bcyDV7fEqx4If9kSJ+YV4vycZdLbdW/ONuc7zzjq/gLRSMJ0vD9JKAAAAABJRU5ErkJggg=="},7617:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAjCAMAAAAkGTMsAAACFlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/1zAAAAAAAAAAAAAAAAAAAAAAAAAEAwH/1C+5lCEiGwYAAAAPDAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4DL/3jHwwCoAAAALCAL/1C81KwkvJghCNQs1KgkdFgQdFwUkHQdtVxMAAACHbRkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/0S7/zi71xSzitin/2jH7zS60kSD/2jHGnyTrvSrdtSk8MAsVEQSTdhouJQiyjx/2xSzrwCu9miI8LwvQpiVdShAHBgGbfhyDaBcAAABjUBGVdxssIwjMpCVnUxIvJgg4LAoAAAAAAAAAAAAAAAAAAAAAAAD/4TL5yS312TH8zS73xi0VEQT2xSwJBwHouirOrSfLoyXZrif/2jH42jD/1jDwwSsVEAMkHQdGOQzGqCa/nCPWqycbFgX8yy7JoSS6lyLVqyZmUhLPrCdAMwsYFASpiB+ggR15YRVTQQ/MpCbAnSO9lyJKOw1ZSBB4YRaoiCCffx0rIwhLPA6WeByxjiBYRxAqIgh3YBUAAAAgGQQAAAAAAAAAAAAAAAAAAAAAAAD/zS4AAAD/0S//zy7/zC7/2DD/1TD/3TL/0y//6TT/4jPPLeJQAAAAp3RSTlMA8fXuBev7Dvna5MEr3tPNt/yXTBcUBwL39enn5+HXz56CamRDGwr+/Pr39Ozs5+Tk5ODf3tzaysW8sa2ajHxvUDMkHx0D/vv6+vj49vLx7+7u7ezs6+ro6Ojm5ubj4+De3Nzb2djVpJGLhnQ+/v79/fz8+vn4+Pj39vb28vLx7+7u7e3s6+vp6ebm5uXk5OLg4ODf3dva2dnW1dTT0tB6eV5dWFdFNfz8sdkAAAJ/SURBVDjLhZPldttAEEa1ksVmipkdZmZOAw0zMydlZmZmZtBKsZP2DWu7TSzp9Nj35+zVnNF8u4gYRROJJCVls1LL1iYTUzcgQeGsMrGlqMMZjAGYIbG25ig6NeFE4XqqqGg2y6xqkNt+aMCOQm3DXs1U90M2fTVa1B3qsOXhcM34r2bUA490UFJvmR3mufTeh69VNYrgpt/rceM4KGuWWCbP0Skdx22Frfc1rgo1cGgr8RIc0IgEY1X/4x0uAn/kI44V3i1+O0rqVZRXtgnt5AIXQxgpXRjOTtv+9dmFahApJKtazBBiWmsbJwgcn70MgFEm6dV08X4uDm8tnYT1UqmhQuUsurUjsnRPnbBaFuIqmjNxU9zq8PgSRiukG/Uy1xav/BZJQs+yi21GJNTiWN5U2hYnosc9I/u/rwDNLw1LJE73Pp/RGFvikhIw914d42R03XlkAQZyb3La8mHufPx435lz0bZCeu8bBvp2O6lh1oCVjyyI34pJV6cfdIUjgXLptiXC0xSTGqsItH90JLvjYPuJtKhnfYHnvLTp2kKh7dAQrV6N3pzmKgzD8p/n5QyOFdy+fJ3nhIxieLywb3buZPfQk3crFWylEjH7HBgKMAgh6sCo3GldxMrNhJBiBgvm7XanmsbKGpEgDQiXW1vjA6hakwkvRCLi+9C6er2KVqHRb0u0gchUmvK/4/0MIghLEeOt3PYlaELIloaadZ8/YIhlZDIYUuIJAOLZ6fDZsfhN2D1rEQUaKEMLbxywFcANJAHmL+6s+c5OAFcSP28/YblozwIBJCEkCzMpbCaIJEYJIEFQn8xJtG8lFAr8iiSW4nt5udeEJOM/bf4AkDTedx8/giwAAAAASUVORK5CYII="},"7c03":function(t,e,A){t.exports=A.p+"img/8.be21ac3d.png"},"80d7":function(t,e,A){t.exports=A.p+"fonts/Muyao.min.c8544663.ttf"},"835d":function(t,e,A){t.exports=A.p+"img/1.028b3d17.png"},8569:function(t,e,A){var i={"./public/403.html":"8ccf","./public/favicon.ico":"05fd","./public/fonts/Muyao.min.ttf":"80d7","./public/images/1.png":"835d","./public/images/2.png":"6c69","./public/images/3.png":"1057","./public/images/5.png":"0b36","./public/images/6.png":"226e","./public/images/7.png":"87e9","./public/images/8.png":"7c03","./public/index.html":"cb67"};function n(t){var e=s(t);return A(e)}function s(t){if(!A.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="8569"},"85ec":function(t,e,A){},"87e9":function(t,e,A){t.exports=A.p+"img/7.bbd6cd67.png"},8861:function(t,e,A){"use strict";A("ba35")},"8ccf":function(t,e){throw new Error('Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <!DOCTYPE html>\n| <html lang="en">\n| <head>')},"9c9c":function(t,e,A){t.exports=A.p+"img/cloud.e5950142.png"},b027:function(t,e,A){t.exports=A.p+"img/active-block-bg.3beb3dc9.png"},b29a:function(t,e,A){t.exports=A.p+"img/bird.5e015696.png"},ba35:function(t,e,A){},babf:function(t,e,A){},cb67:function(t,e){throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <!DOCTYPE html>\n| <html>\n|   <head>")},df50:function(t,e,A){t.exports=A.p+"img/love-heart.812d57c3.png"},e24c:function(t,e,A){"use strict";A("198b")}});
//# sourceMappingURL=app.ba59f26c.js.map