(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ca49a1e"],{"571a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("spinner"):t._e(),a("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),a("hr"),a("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},t._l(t.restaurants,(function(e){return a("div",{key:e.id,staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"card-img",attrs:{src:e.image}})])]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("span",{staticClass:"badge bg-secondary"},[t._v("收藏數："+t._s(e.FavoriteCount))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(e.description)+" ")]),a("router-link",{staticClass:"btn btn-primary me-2",attrs:{to:{name:"restaurant-dashboard",params:{id:e.id}},href:"#"}},[t._v("Dashboard")]),e.isFavorited?a("button",{staticClass:"btn btn-danger me-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteFavorite(e.id)}}},[t._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addFavorite(e.id)}}},[t._v(" 加到最愛 ")])],1)])])})),0)],1)},n=[],s=a("5530"),i=a("1da1"),o=(a("d9e2"),a("d81d"),a("96cf"),a("8bb1")),c=a("ca83"),u={getTopRestaurants:function(){return c["b"].get("/restaurants/top")},addFavorite:function(t){var e=t.restaurantId;return c["b"].post("/favorite/".concat(e),null)},deleteFavorite:function(t){var e=t.restaurantId;return c["b"].delete("/favorite/".concat(e))}},d=a("2375"),v={name:"restaurantTopCard",components:{NavTabs:o["a"],Spinner:d["a"]},data:function(){return{restaurants:[],isLoading:!0}},created:function(){this.fetchRestaurantTopCard()},methods:{fetchRestaurantTopCard:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.getTopRestaurants();case 3:a=e.sent,r=a.data.restaurants,t.restaurants=r,t.isLoading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),t.isLoading=!1,c["a"].fire({icon:"error",title:"無法取的卡片資訊"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},addFavorite:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.addFavorite({restaurantId:t});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:e.restaurants=e.restaurants.map((function(e){return e.id!==t?e:Object(s["a"])(Object(s["a"])({},e),{},{FavoriteCount:e.FavoriteCount+1,isFavorited:!0})})),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),c["a"].fire({icon:"error",title:"無法加入我的最愛"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},deleteFavorite:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.deleteFavorite({restaurantId:t});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:e.restaurants=e.restaurants.map((function(e){return e.id!==t?e:Object(s["a"])(Object(s["a"])({},e),{},{FavoriteCount:e.FavoriteCount-1,isFavorited:!1})})),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),c["a"].fire({icon:"error",title:"無法移除我的最愛"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()}}},l=v,p=a("2877"),f=Object(p["a"])(l,r,n,!1,null,null,null);e["default"]=f.exports},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6ca49a1e.300a8e15.js.map