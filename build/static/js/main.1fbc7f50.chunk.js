(this["webpackJsonppizza-delivery"]=this["webpackJsonppizza-delivery"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){e.exports=a(49)},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(14),c=a.n(i),l=(a(36),a(37),a(4)),s=a(5),o=function(e){var t=e.cartButtonRender,a=e.onToggleMenu,r=e.mobileMenuClass,i=e.loginButton;return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header__burger",onClick:function(){return a()}},n.a.createElement("i",{className:"fab fa-elementor"})),n.a.createElement("section",{className:"header__logo-block"},n.a.createElement("img",{src:"./logo.svg",className:"header__logo",alt:"logo"}),n.a.createElement(s.b,{to:"/"},n.a.createElement("section",{className:"header__text-block"},n.a.createElement("h1",{className:"header__title"},"Pizza Delivery"),n.a.createElement("p",{className:"header__subtitle"},"\u041d\u0430\u0439\u0441\u043c\u0430\u0447\u043d\u0456\u0448\u0430 \u043f\u0456\u0446\u0446\u0430 \u0443 \u043d\u0430\u0448\u043e\u043c\u0443 \u0432\u0438\u043c\u0456\u0440\u0456")))),n.a.createElement("section",{className:r},n.a.createElement("section",{className:"header__close",onClick:function(){return a()}},"X"),i,n.a.createElement(s.b,{to:"/cart"},t)))},m=Object(l.b)((function(e){var t=e.shoppingCart,a=t.total,r=t.cartCount,n=e.mobileMenuActive,i=e.loginPage;return{mobileMenuActive:n,total:a,cartCount:r,name:i.name,logged:i.logged}}),(function(e){return{onToggleMenu:function(){return e({type:"MOBILE_MENU_TOGGLE"})},onLogout:function(){return e({type:"LOG_OUT"})}}}))((function(e){var t=e.simpleHeader,a=e.onToggleMenu,r=e.mobileMenuActive,i=e.total,c=e.cartCount,l=e.name,m=e.logged,u=e.onLogout,p=r?"header__buttons-block header__buttons-block--active":"header__buttons-block",_=t?null:n.a.createElement("div",{className:"cart",onClick:function(){return a()}},n.a.createElement("div",{className:"cart__price"},i,"\u20b4"),n.a.createElement("div",{className:"cart__line"}),n.a.createElement("div",{className:"cart__count"},n.a.createElement("i",{className:"fas fa-shopping-cart cart__icon"}),c)),g=m?n.a.createElement("div",{className:"header__welcome"},n.a.createElement("p",null,"\u041b\u0430\u0441\u043a\u0430\u0432\u043e \u043f\u0440\u043e\u0441\u0438\u043c\u043e - "),n.a.createElement("p",{className:" header__welcome header__welcome--nick"},l,"!"),n.a.createElement("p",{className:"header__logout",onClick:function(){return u()}},"\u0412\u0438\u0439\u0442\u0438")):n.a.createElement(s.b,{to:"/login"},n.a.createElement("section",{onClick:function(){return a()},className:"header__login"},"\u0423\u0432\u0456\u0439\u0442\u0438"));return n.a.createElement(o,{onToggleMenu:a,mobileMenuClass:p,cartButtonRender:_,loginButton:g})})),u=(a(25),function(e){var t=e.filterList,a=e.sortList,r=e.currentSort,i=e.onToggleSort,c=e.arrowClass,l=e.sortListClass,s=e.onToggleFilter,o=e.mobileFilterClass;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"filter__mobile-trigger",onClick:s},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u0448\u0443\u043a\u0443"),n.a.createElement("section",{className:o},n.a.createElement("ul",{className:"filter__filter-list"},t),n.a.createElement("section",{className:"filter__sort ",onClick:i},n.a.createElement("img",{src:"./sort-arrow.svg",className:c,alt:"arrow"}),n.a.createElement("p",{className:"filter__sort-text"},"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430:",n.a.createElement("span",{className:"filter__sort-type"}," ",r)),n.a.createElement("ul",{className:l},a))))}),p=Object(l.b)((function(e){var t=e.pizzaList;return{filter:t.filter,sort:t.sort,sortActive:t.sortActive,mobileFilterActive:t.mobileFilterActive}}),(function(e){return{onFilter:function(t){return e({type:"FILTER_CHANGE",payload:t})},onSort:function(t){return e(function(e){return{type:"SORT_CHANGE",payload:e}}(t))},onToggleSort:function(){return e({type:"SORT_TOGGLE"})},onToggleFilter:function(){return e({type:"MOBILE_FILTER_TOGGLE"})}}}))((function(e){var t=e.filter,a=e.sort,r=e.onFilter,i=e.onSort,c=e.sortActive,l=e.onToggleSort,s=e.onToggleFilter,o=e.mobileFilterActive,m=a;switch(m){case"popularity":m="\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0441\u0442\u044e";break;case"cost":m="\u0446\u0456\u043d\u043e\u044e";break;case"alphabet":m="\u0430\u043b\u0444\u0430\u0432\u0456\u0442\u043e\u043c"}var p=[{type:"popularity",label:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0441\u0442\u044e"},{type:"cost",label:"\u0426\u0456\u043d\u043e\u044e"},{type:"alphabet",label:"\u0410\u043b\u0444\u0430\u0432\u0456\u0442\u043e\u043c"}].map((function(e,t){return a===e.type?n.a.createElement("li",{key:t,className:"sort__item sort__item--active",onClick:function(){return i(e.type)}},e.label):n.a.createElement("li",{key:t,className:"sort__item",onClick:function(){return i(e.type)}},e.label)})),_=[{type:"all",label:"\u0412\u0441\u0456"},{type:"meat",label:"\u041c'\u044f\u0441\u043d\u0456"},{type:"vegetable",label:"\u041e\u0432\u043e\u0447\u0435\u0432\u0456"},{type:"spicy",label:"\u0413\u043e\u0441\u0442\u0440\u0456"}].map((function(e,a){return e.type===t?n.a.createElement("li",{key:a,onClick:function(){return r(e.type)},className:"filter-list__item filter-list__item--active"},e.label):n.a.createElement("li",{key:a,onClick:function(){return r(e.type)},className:"filter-list__item"},e.label)})),g=o?"filter-container filter-container--active":"filter-container",f=c?"sort__list sort__list--active":"sort__list",E=c?"sort__arrow-disabled":"sort__arrow-active";return n.a.createElement(u,{filterList:_,sortList:p,currentSort:m,onSort:i,onToggleSort:l,arrowClass:E,sortListClass:f,onToggleFilter:s,mobileFilterClass:g})})),_=(a(43),a(44),function(){return n.a.createElement("div",{className:"lds-hourglass"})}),g=(a(26),function(e){var t=e.name,a=e.addToCartButtonState,r=e.price,i=e.img,c=e.thicknessSettingsRender,l=e.sizeSettingsRender,s=e.id,o=e.renderCount,m=e.pizzaItemImage,u=e.pizzaImageClass,p=a(s,o);return n.a.createElement("section",{className:"pizza-item__container"},n.a.createElement("div",{className:"pizza-item__image-block"},n.a.createElement("img",{src:i,className:"pizza-item__image-static",alt:"pizza"}),n.a.createElement("img",{src:i,className:u,ref:m,alt:"pizza for animation"})),n.a.createElement("div",{className:"pizza-item__title"},n.a.createElement("p",{className:"pizza-item__text"},t)),n.a.createElement("div",{className:"pizza-settings__container pizza-item__text pizza-item__text--settings"},c,l),n.a.createElement("div",{className:"pizza-item__order"},n.a.createElement("p",{className:"pizza-item__price pizza-item__text pizza-item__text--price"},r," \u20b4"),p))}),f=Object(l.b)((function(e){return{cartPizzasNameList:e.shoppingCart.cartPizzasKind,logged:e.loginPage.logged}}),(function(e){return{onChooseType:function(t,a,r){return e(function(e,t,a){return{type:"TYPE_PIZZA_CHOOSE",payload:{id:e,type:t,name:a}}}(t,a,r))},onChooseSize:function(t,a,r){return e(function(e,t,a){return{type:"SIZE_PIZZA_CHOOSE",payload:{id:e,size:t,name:a}}}(t,a,r))},onCartPizza:function(t){e(function(e){return{type:"ANIMATION_PIZZA_TOGGLE",payload:e}}(t)),e(function(e){return{type:"CART_PIZZA_ADD",payload:e}}(t))}}}))((function(e){var t=e.logged,a=e.name,i=e.id,c=e.totalPrice,l=e.img,o=e.settings,m=o.type,u=void 0===m?"thin":m,p=o.size,_=void 0===p?"small":p,f=e.onChooseType,E=e.onChooseSize,d=e.onCartPizza,z=e.cartPizzasNameList,b=e.animation,v=Object(r.useRef)(null),N=function(e,t){var a=e.filter((function(e){return e===t}));return a.length>0?a.length:null}(z,a),C=N>0?n.a.createElement("p",{className:"pizza-item__order-count"},N):null,h=b?"pizza-item__image pizza-item__image--animated":"pizza-item__image";return n.a.createElement(g,{name:a,addToCartButtonState:function(e,a){return t?n.a.createElement("button",{onClick:function(){return d(e)},className:"pizza-item__order-button"},n.a.createElement("img",{src:"./plus.png",className:"pizza-item__plus",alt:"plus"}),n.a.createElement("p",{className:"pizza-item__order-text"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0438"),a):n.a.createElement(s.b,{to:"/cart-login"},n.a.createElement("button",{className:"pizza-item__order-button"},n.a.createElement("img",{src:"./plus.png",className:"pizza-item__plus",alt:"plus"}),n.a.createElement("p",{className:"pizza-item__order-text"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0438"),a))},price:c,img:l,thicknessSettingsRender:function(e){var t="pizza-settings__thickness",r="pizza-settings__thickness";return"classic"===e&&(r+=" pizza-settings__thickness--active"),"thin"===e&&(t+=" pizza-settings__thickness--active"),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:t,onClick:function(){return f(i,"thin",a)}},"\u0442\u043e\u043d\u043a\u0430"),n.a.createElement("div",{className:r,onClick:function(){return f(i,"classic",a)}},"\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430"))}(u),sizeSettingsRender:function(e){var t="pizza-settings__size",r="pizza-settings__size",c="pizza-settings__size";return"small"===e&&(t+=" pizza-settings__size--active"),"medium"===e&&(r+=" pizza-settings__size--active"),"large"===e&&(c+=" pizza-settings__size--active"),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:t,onClick:function(){return E(i,"small",a)}},"26 \u0441\u043c."),n.a.createElement("div",{className:r,onClick:function(){return E(i,"medium",a)}},"30 \u0441\u043c."),n.a.createElement("div",{className:c,onClick:function(){return E(i,"large",a)}},"40 \u0441\u043c."))}(_),onCartPizza:d,id:i,renderCount:C,pizzaItemImage:v,pizzaImageClass:h})})),E=a(29),d=a(30),z=new(function(){function e(){Object(E.a)(this,e),this.pizzas=[{name:"\u0427\u0456\u0437\u0431\u0443\u0440\u0433\u0435\u0440-\u041f\u0456\u0446\u0446\u0430",img:"./chizburger-pizza.png",markup:{thin:0,classic:30,small:0,medium:15,large:45},settings:{size:"small",type:"thin"},price:101,totalPrice:101,id:1,class:"meat",popularity:.3},{name:"\u0421\u0438\u0440\u043d\u0430",img:"./cheeze.png",markup:{thin:0,classic:26,small:0,medium:20,large:38},settings:{size:"small",type:"thin"},price:99,totalPrice:99,id:2,class:"vegetable",popularity:.5},{name:"\u041a\u0440\u0438\u0432\u0435\u0442\u043a\u0438 \u043f\u043e-\u0430\u0437\u0456\u0430\u0442\u0441\u044c\u043a\u0438",img:"./shrimp.png",markup:{thin:0,classic:41,small:0,medium:29,large:65},settings:{size:"small",type:"thin"},price:95,totalPrice:95,id:3,class:"meat",popularity:.99},{name:"\u0421\u0438\u0440\u043d\u0435 \u043a\u0443\u0440\u0447\u0430",img:"./cheeze-chicken.png",markup:{thin:0,classic:30,small:0,medium:15,large:25},settings:{size:"small",type:"thin"},price:95,totalPrice:95,id:4,class:["spicy","meat"],popularity:.6}]}return Object(d.a)(e,[{key:"getPizzas",value:function(){var e=this;return new Promise((function(t){setTimeout((function(){return t(e.pizzas)}),600)}))}}]),e}()),b=Object(l.b)((function(e){var t=e.pizzaList;return{pizzas:t.filterPizzas,filter:t.filter,loader:t.loader,sort:t.sort}}),(function(e){return{pizzasLoaded:function(t){return e({type:"FETCH_PIZZAS_SUCCES",payload:t})},fetchError:function(t){return e(function(e){return{type:"FETCH_PIZZAS_FAILURE",payload:e}}(t))},fetchRequest:function(){return e({type:"FETCH_PIZZAS_REQUEST"})}}}))((function(e){var t=e.pizzas,a=e.sort,i=e.fetchRequest,c=e.pizzasLoaded,l=e.filter,s=e.fetchError,o=e.loader;switch(Object(r.useEffect)((function(){i(),z.getPizzas().then((function(e){return c(e)})).catch((function(e){return s(e)}))}),[l,a,i,c,s]),l){case"all":l="\u0412\u0441\u0456";break;case"meat":l="\u041c'\u044f\u0441\u043d\u0456";break;case"vegetable":l="\u041e\u0432\u043e\u0447\u0435\u0432\u0456";break;case"spicy":l="\u0413\u043e\u0441\u0442\u0440\u0456"}return o?n.a.createElement(_,null):n.a.createElement("main",{className:"pizza-list__container"},n.a.createElement("section",{className:"pizza-list__header"},l," \u043f\u0456\u0446\u0446\u0438"),n.a.createElement("section",{className:"pizza-list"},function(e){return e.map((function(e){return n.a.createElement(f,Object.assign({key:e.id},e))}))}(t)))})),v=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,null),n.a.createElement(p,null),n.a.createElement(b,null))},N=(a(45),a(46),Object(l.b)(null,(function(e){return{onIncrease:function(t){return e(function(e){return{type:"CART_PIZZA_INCREASE",payload:e}}(t))},onDecrease:function(t){return e(function(e){return{type:"CART_PIZZA_DECREASE",payload:e}}(t))},onDelete:function(t){return e(function(e){return{type:"CART_PIZZA_DELETE",payload:e}}(t))}}}))((function(e){var t=e.name,a=e.total,r=e.img,i=e.settings,c=e.count,l=e.id,s=e.onIncrease,o=e.onDecrease,m=e.onDelete,u=i.size,p=i.type;switch(i.type){case"thin":p="\u0422\u043e\u043d\u043a\u0435 \u0442\u0456\u0441\u0442\u043e";break;case"classic":p="\u0422\u043e\u0432\u0441\u0442\u0435 \u0442\u0456\u0441\u0442\u043e"}switch(i.size){case"small":u="26 \u0441\u043c.";break;case"medium":u="30 \u0441\u043c.";break;case"large":u="40 \u0441\u043c."}return n.a.createElement("div",{className:"cart-item"},n.a.createElement("div",{className:"cart-item__info-block"},n.a.createElement("img",{src:r,className:"cart-item__img",alt:"pizza"}),n.a.createElement("div",{className:"cart-item__info"},n.a.createElement("p",{className:"cart-page__text"},t),n.a.createElement("p",{className:"cart-page__text cart-page__text--small_gray"},"".concat(p,", ").concat(u)))),n.a.createElement("div",{className:"cart-item__counter-block"},n.a.createElement("i",{onClick:function(){return o(l)},className:"fas fa-minus-circle cart-item__counter-icon"}),n.a.createElement("p",{className:"cart-page__text cart-item__count"},c),n.a.createElement("i",{onClick:function(){return s(l)},className:"fas fa-plus-circle cart-item__counter-icon"})),n.a.createElement("div",{className:"cart-item__price"},n.a.createElement("p",{className:"cart-page__text"},a," \u20b4")),n.a.createElement("div",{className:"cart-item__close"},n.a.createElement("i",{onClick:function(){return m(l)},className:"far fa-times-circle cart-item__close-icon"})))}))),C=Object(l.b)((function(e){var t=e.shoppingCart;return{cartPizzas:t.cartPizzas,total:t.total,cartCount:t.cartCount}}),(function(e){return{onClearCart:function(){return e({type:"CART_CLEAR"})}}}))((function(e){var t=e.cartPizzas,a=e.total,r=e.cartCount,i=e.onClearCart;return n.a.createElement("section",{className:"cart-page"},n.a.createElement("section",{className:"cart-page__header"},n.a.createElement("div",{className:"cart-page__title"},n.a.createElement("i",{className:"fas fa-shopping-cart cart-page__cart-icon"}),n.a.createElement("p",{className:"cart-page__text cart-page__text--title"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430")),n.a.createElement("div",{onClick:function(){return i()},className:"cart-page__clear"},n.a.createElement("span",{className:"cart-page__clear-underscore"}),n.a.createElement("i",{className:"far fa-trash-alt cart-page__trash-icon"}),n.a.createElement("p",{className:"cart-page__text cart-page__text--small_gray"},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))),n.a.createElement("section",{className:"cart-page__cart-list"},function(e){return e.map((function(e){return n.a.createElement(N,Object.assign({},e,{key:e.id}))}))}(t)),n.a.createElement("section",{className:"cart-page__info-block"},n.a.createElement("div",{className:"cart-page__text-block"},n.a.createElement("span",{className:"cart-page__text cart-page__text--thin"},"\u0412\u0441\u044c\u043e\u0433\u043e \u043f\u0456\u0446: "),n.a.createElement("span",{className:"cart-page__text"},r," \u0448\u0442")),n.a.createElement("div",{className:"cart-page__text-block"},n.a.createElement("span",{className:"cart-page__text cart-page__text--thin"},"\u0421\u0443\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0443: "),n.a.createElement("span",{className:"cart-page__text cart-page__text--orange"},a," \u20b4"))),n.a.createElement("section",{className:"cart-page__buttons-block"},n.a.createElement(s.b,{to:"/"},n.a.createElement("button",{className:"cart-page__nav-button"},n.a.createElement("span",{className:"cart-page__text cart-page__text--small_gray"},"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c \u043d\u0430\u0437\u0430\u0434"))),n.a.createElement("button",{className:"cart-page__nav-button cart-page__nav-button--order"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u0438")))})),h=a(3),y=Object(l.b)((function(e){return{logged:e.loginPage.logged,emptyCart:0===e.shoppingCart.cartPizzas.length}}))((function(e){var t=e.emptyCart,a=e.logged;return a?t?n.a.createElement(h.a,{to:"/cart-empty"}):a||t?n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{simpleHeader:!0}),n.a.createElement(C,null)):n.a.createElement(h.a,{to:"/cart-login"}):n.a.createElement(h.a,{to:"/cart-login"})})),O=(a(47),function(e){var t="\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430 \ud83d\ude15",a="\u0421\u0445\u043e\u0436\u0435, \u0449\u043e \u0432\u0438 \u0449\u0435 \u043d\u0435 \u0432\u0438\u0431\u0440\u0430\u043b\u0438 \u0436\u043e\u0434\u043d\u043e\u0457 \u043f\u0456\u0446\u0438. \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u043f\u0456\u0446\u0443, \u043f\u043e\u0432\u0435\u0440\u043d\u0456\u0441\u0442\u044c\u044f \u043d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443";return e.logout&&(t="\u0412\u0438 \u043d\u0435 \u0432\u0432\u0456\u0439\u0448\u043b\u0438 \u0443 \u0441\u0432\u0456\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \ud83d\ude15",a="\u0421\u0445\u043e\u0436\u0435, \u0449\u043e \u0432\u0438 \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u043b\u0438\u0441\u044c, \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0443\u0432\u0456\u0439\u0442\u0438, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0441\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u0432\u0433\u043e\u0440\u0456"),n.a.createElement("div",{className:"cart-failure"},n.a.createElement("h2",{className:"cart-failure__title"},t),n.a.createElement("p",{className:"cart-failure__sub-title"},a),n.a.createElement("img",{src:"empty-cart.png",className:"cart-failure__img",alt:"empty-cart"}),n.a.createElement(s.b,{to:"/"},n.a.createElement("button",{className:"cart-failure__back"},"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u043d\u0430\u0437\u0430\u0434")))}),P=Object(l.b)((function(e){return{cartIsEmpty:0===e.shoppingCart.cartPizzas.length}}))((function(e){var t=e.logout;e.cartIsEmpty;return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{simpleHeader:!0}),n.a.createElement(O,{logout:t}))})),j=a(13),L=(a(27),a(48),function(e){var t=e.modalMessage,a=e.modalMessageClass,r=e.onModalClose;return n.a.createElement("div",{className:a},n.a.createElement("div",{className:"login-modal"},n.a.createElement("div",{onClick:r,className:"login-modal__close"},n.a.createElement("i",{className:"far fa-times-circle"})),t))}),S=Object(l.b)((function(e){return{warningModal:e.loginPage.warningModal}}),(function(e){return{onModalClose:function(){return e({type:"WARNING_MODAL_REMOVE"})}}}))((function(e){var t=e.warningModal,a=e.onModalClose,r="";if("email"===t.type&&(r="\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043b\u0435 \u0446\u044f \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u0430\u0434\u0440\u0435\u0441\u0430 \u0432\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0430 \u0443 \u043d\u0430\u0448\u0456\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0456"),"name"===t.type&&(r="\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043b\u0435 \u0446\u0435 \u0456\u043c'\u044f \u0432\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0435 \u0443 \u043d\u0430\u0448\u0456\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0456"),"form"===t.type&&(r="\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0432\u0441\u0456 \u043f\u043e\u043b\u044f \u0444\u043e\u0440\u043c\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u0431\u0443\u0434\u044c\u043b\u0430\u0441\u043a\u0430"),"succes"===t.type){var i=t.payload,c=i.name,l=i.email;r=n.a.createElement("span",null,"\u0412\u0456\u0442\u0430\u0454\u043c\u043e! \u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0437 \u0456\u043c\u0435\u043d\u0435\u043c",n.a.createElement("span",{style:{color:"#fe1e1e"}}," ",c," "),"\u0431\u0443\u0432 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0438\u0439. \u041f\u0440\u043e\u0432\u0456\u0440\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u043a\u0440\u0438\u043d\u044c\u043a\u0443",n.a.createElement("span",{style:{color:"#fe1e1e"}}," ",l," "),"\u0434\u043b\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457!")}var s=t.type?"login-modal__container login-modal__container--active":"login-modal__container";return n.a.createElement(L,{onModalClose:a,modalMessage:r,modalMessageClass:s})})),A=function(e){var t=e.onLogin,a=e.logErrClass,i=e.regNameErrClass,c=e.onRegisterName,l=e.regEmailErrClass,s=e.onRegisterEmail,o=e.regPassErrClass,m=e.onRegisterPass,u=e.regConfPassErrClass,p=e.onRegisterConfPass,_=e.onRegisterSubmit,g=e.regName,f=e.regEmail,E=e.regPass,d=e.regConfPass,z=Object(r.useRef)(null),b=Object(r.useRef)(null),v=Object(r.useRef)(null),N=Object(r.useRef)(null),C=Object(r.useRef)(null),h=Object(r.useRef)(null);return n.a.createElement("div",{className:"login__container"},n.a.createElement(S,null),n.a.createElement("div",{className:"box"},n.a.createElement("input",{type:"checkbox",id:"toggle",className:"box__toggle",hidden:!0}),n.a.createElement("img",{src:"https://source.unsplash.com/zv3ckJKftC4/300x400",alt:"by Autumn Studio",className:"box__image"}),n.a.createElement("div",{className:"form form--register",action:""},n.a.createElement("h1",{className:"form__title"},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"),n.a.createElement("div",{className:"form__helper"},n.a.createElement("span",{className:i},"\u0406\u043c'\u044f \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0432\u0456\u0434 3 \u0434\u043e 13 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"),n.a.createElement("input",{type:"text",value:g.value,onChange:function(){return c(z.current.value)},name:"user",id:"new-user",placeholder:"User",className:"form__input",ref:z}),n.a.createElement("label",{className:"form__label",htmlFor:"new-user"},"\u0406\u043c'\u044f")),n.a.createElement("div",{className:"form__helper"},n.a.createElement("span",{className:l},"\u041d\u0435 \u0432\u0456\u0440\u043d\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0430\u0434\u0440\u0435\u0441\u0438"),n.a.createElement("input",{value:f.value,ref:b,onChange:function(){return s(b.current.value)},type:"email",name:"email",id:"email",placeholder:"Email",className:"form__input"}),n.a.createElement("label",{className:"form__label",htmlFor:"email"},"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0430 \u0441\u043a\u0440\u0438\u043d\u044c\u043a\u0430")),n.a.createElement("div",{className:"form__helper"},n.a.createElement("span",{className:o},"\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0432\u0456\u0434 6 \u0434\u043e 20 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432, \u0446\u0438\u0444\u0440\u0438, \u0442\u0430 \u0431\u0443\u043a\u0432\u0438 \u043b\u0430\u0442\u0438\u043d\u043d\u0438\u0446\u0456 \u0440\u0456\u0437\u043d\u0438\u0445 \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0456\u0432"),n.a.createElement("input",{value:E.value,ref:v,onChange:function(){return m(v.current.value)},type:"password",name:"password",id:"new-user-password",placeholder:"Password",className:"form__input"}),n.a.createElement("label",{className:"form__label",htmlFor:"new-user-password"},"\u041f\u0430\u0440\u043e\u043b\u044c")),n.a.createElement("div",{className:"form__helper"},n.a.createElement("span",{className:u},"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0441\u043f\u0456\u0432\u043f\u0430\u0434\u0430\u0454"),n.a.createElement("input",{value:d.value,ref:N,onChange:function(){return p(N.current.value)},type:"password",name:"password",id:"confirm-password",placeholder:"Confirm password",className:"form__input"}),n.a.createElement("label",{className:"form__label",htmlFor:"confirm-password"},"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u043e\u043b\u044e")),n.a.createElement("button",{onClick:function(){return _(g,f,E,d)},className:"form__button"},"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"),n.a.createElement("p",{className:"form__text"},"\u0412\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0456? ",n.a.createElement("label",{htmlFor:"toggle",className:"form__link"},"\u0423\u0432\u0456\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442!")," ")),n.a.createElement("div",{className:"form form--login"},n.a.createElement("h1",{className:"form__title"},"\u0412\u0445\u0456\u0434"),n.a.createElement("div",{className:"form__helper"},n.a.createElement("input",{ref:C,type:"text",name:"user",id:"user",placeholder:"User",className:"form__input"}),n.a.createElement("label",{className:"form__label",htmlFor:"user"},"\u0406\u043c'\u044f")),n.a.createElement("div",{className:"form__helper"},n.a.createElement("span",{className:a},"\u0406\u043c'\u044f \u0430\u0431\u043e \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043di"),n.a.createElement("input",{ref:h,type:"password",name:"password",id:"password",placeholder:"Password",className:"form__input"}),n.a.createElement("label",{className:"form__label",htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c")),n.a.createElement("button",{onClick:function(){return t(C.current.value,h.current.value)},className:"form__button"},"\u0423\u0432\u0456\u0439\u0442\u0438"),n.a.createElement("p",{className:"form__text"},"\u0429\u0435 \u043d\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0456? ",n.a.createElement("label",{htmlFor:"toggle",className:"form__link"},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044e!")," "))))},k=Object(l.b)((function(e){return{loginErr:e.loginPage.loginErr}}),(function(e){return{onLogin:function(t,a){return e(function(e,t){return{type:"LOGIN_REQUEST",payload:{name:e,password:t}}}(t,a))},onRegisterSubmit:function(t,a,r,n){return e(function(e,t,a,r){return{type:"REGISTER_REQUEST",payload:{name:e,email:t,password:a,confirmPassword:r}}}(t,a,r,n))}}}))((function(e){var t=e.onLogin,a=e.onRegisterSubmit,i=e.loginErr,c=Object(r.useState)({value:"",err:!1}),l=Object(j.a)(c,2),s=l[0],o=l[1],m=Object(r.useState)({value:"",err:!1}),u=Object(j.a)(m,2),p=u[0],_=u[1],g=Object(r.useState)({value:"",err:!1}),f=Object(j.a)(g,2),E=f[0],d=f[1],z=Object(r.useState)({value:"",err:!1}),b=Object(j.a)(z,2),v=b[0],N=b[1],C=i?"log__err log__err--active":"log__err",h=s.err?"reg__name-err reg__name-err--active":"reg__name-err",y=p.err?"reg__email-err reg__email-err--active":"reg__email-err",O=E.err?"reg__password-err reg__password-err--active":"reg__password-err",P=v.err?"reg__conf-password-err reg__conf-password-err--active":"reg__conf-password-err";return n.a.createElement(A,{onLogin:t,logErrClass:C,onRegisterName:function(e){e.length>=3&&e.length<14?o({value:e,err:!1}):o({value:e,err:!0})},regNameErrClass:h,regEmailErrClass:y,onRegisterEmail:function(e){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)?_({value:e,err:!1}):_({value:e,err:!0})},regPassErrClass:O,onRegisterPass:function(e){e.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)?d({value:e,err:!1}):d({value:e,err:!0}),e===v.value?N({value:v.value,err:!1}):N({value:v.value,err:!0})},regConfPassErrClass:P,onRegisterConfPass:function(e){e===E.value?N({value:e,err:!1}):N({value:e,err:!0})},onRegisterSubmit:a,regName:s,regEmail:p,regPass:E,regConfPass:v})})),w=Object(l.b)((function(e){return{logged:e.loginPage.logged}}))((function(e){return e.logged?n.a.createElement(h.a,{to:"/"}):n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{simpleHeader:!0}),n.a.createElement(k,null))})),R=function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement(h.b,{path:"/",component:v,exact:!0}),n.a.createElement(h.b,{path:"/cart",component:y,exact:!0}),n.a.createElement(h.b,{path:"/cart-empty",component:P,exact:!0}),n.a.createElement(h.b,{path:"/cart-login",render:function(){return n.a.createElement(P,{logout:!0})},exact:!0}),n.a.createElement(h.b,{path:"/login",component:w,exact:!0}))},T=a(16),I=a(1),x=function(e,t){var a=e.map((function(e){var t=e.id,a=e.settings,r=a.type,n=a.size,i="".concat(t+r+n);return Object(I.a)(Object(I.a)({},e),{},{id:i,initialId:t,animation:!1})}));return"all"===t?a:a.filter((function(e){return e.class.includes(t)}))},Z=function(e,t){return"cost"===t?e.sort((function(e,t){return e.price>t.price?1:-1})):"popularity"===t?e.sort((function(e,t){return e.popularity<t.popularity?1:-1})):"alphabet"===t?e.sort((function(e,t){return e.name>t.name?1:-1})):e},M=function(e,t){switch(t.type){case"FETCH_PIZZAS_REQUEST":return Object(I.a)(Object(I.a)({},e.pizzaList),{},{loader:!0});case"FETCH_PIZZAS_SUCCES":var a=t.payload,r=e.pizzaList,n=r.sort,i=r.filter,c=x(a,i),l=Z(c,n);return Object(I.a)(Object(I.a)({},e.pizzaList),{},{pizzas:a,filterPizzas:l,loader:!1});case"FETCH_PIZZAS_FAILURE":return Object(I.a)(Object(I.a)({},e.pizzaList),{},{error:t.payload});case"TYPE_PIZZA_CHOOSE":var s=function(e,t,a){return e.pizzaList.filterPizzas.map((function(e){if(e.id===t){var r=e.settings.size,n=e.markup,i=e.price,c="".concat(e.initialId+a+r);return Object(I.a)(Object(I.a)({},e),{},{totalPrice:i+n[a]+n[r],settings:{type:a,size:r},id:c,animation:!1})}return e}))}(e,t.payload.id,t.payload.type);return Object(I.a)(Object(I.a)({},e.pizzaList),{},{filterPizzas:s});case"SIZE_PIZZA_CHOOSE":var o=function(e,t,a){return e.pizzaList.filterPizzas.map((function(e){if(e.id===t){var r=e.settings.type,n=e.markup,i=e.price,c="".concat(e.initialId+r+a);return Object(I.a)(Object(I.a)({},e),{},{totalPrice:i+n[r]+n[a],settings:{type:r,size:a},id:c,animation:!1})}return e}))}(e,t.payload.id,t.payload.size);return Object(I.a)(Object(I.a)({},e.pizzaList),{},{filterPizzas:o});case"FILTER_CHANGE":var m=t.payload,u=e.pizzaList.pizzas,p=x(u,m);return Object(I.a)(Object(I.a)({},e.pizzaList),{},{filter:m,filterPizzas:p});case"SORT_CHANGE":var _=t.payload,g=e.pizzaList.filterPizzas.map((function(e){return e})),f=Z(g,_);return Object(I.a)(Object(I.a)({},e.pizzaList),{},{sort:_,filterPizzas:f});case"SORT_TOGGLE":var E=e.pizzaList.sortActive;return Object(I.a)(Object(I.a)({},e.pizzaList),{},{sortActive:!E});case"MOBILE_FILTER_TOGGLE":var d=e.pizzaList.mobileFilterActive;return Object(I.a)(Object(I.a)({},e.pizzaList),{},{sortActive:!1,mobileFilterActive:!d});case"ANIMATION_PIZZA_TOGGLE":var z=e.pizzaList.filterPizzas,b=t.payload,v=z.map((function(e){return b===e.id?Object(I.a)(Object(I.a)({},e),{},{animation:!0}):e}));return Object(I.a)(Object(I.a)({},e.pizzaList),{},{filterPizzas:v});default:return e.pizzaList}},F=a(18),G=function(e,t,a){var r=e.shoppingCart,n=r.cartCount,i=r.total,c=r.cartPizzas,l=n+1,s=a.total/a.count,o=i+s,m=c.map((function(e){return e.id===t?Object(I.a)(Object(I.a)({},e),{},{count:++e.count,total:s+e.total}):e}));return Object(I.a)(Object(I.a)({},e.shoppingCart),{},{cartPizzas:m,total:o,cartCount:l,cartPizzasKind:[].concat(Object(F.a)(e.shoppingCart.cartPizzasKind),[a.name])})},U=function(e,t,a){var r=e.shoppingCart,n=r.cartCount,i=r.total,c=r.cartPizzas,l=r.cartPizzasKind,s=c.filter((function(e){return e.id!==a})),o=l.map((function(e){return e})),m=l.indexOf(t.name);return m>-1&&o.splice(m,t.count),Object(I.a)(Object(I.a)({},e.shoppingCart),{},{cartPizzas:s,total:i-t.total,cartCount:n-t.count,cartPizzasKind:o})},H=function(e,t){switch(t.type){case"CART_PIZZA_ADD":var a=t.payload,r=function(e,t){var a=e.pizzaList.filterPizzas.find((function(e){return e.id===t}));return{name:a.name,total:a.totalPrice,settings:a.settings,img:a.img,count:1,id:a.id}}(e,a);if(function(e,t){var a=t.id,r=t.settings,n=r.type,i=r.size;return e.shoppingCart.cartPizzas.find((function(e){return e.id===a&&e.settings.type===n&&e.settings.size===i}))}(e,r))return G(e,a,r);var n=e.shoppingCart.cartCount+1,i=e.shoppingCart.total+r.total;return Object(I.a)(Object(I.a)({},e.shoppingCart),{},{cartCount:n,total:i,cartPizzas:[].concat(Object(F.a)(e.shoppingCart.cartPizzas),[r]),cartPizzasKind:[].concat(Object(F.a)(e.shoppingCart.cartPizzasKind),[r.name])});case"CART_PIZZA_INCREASE":var c=e.shoppingCart.cartPizzas,l=t.payload,s=c.find((function(e){return e.id===l}));return G(e,l,s);case"CART_PIZZA_DECREASE":var o=e.shoppingCart.cartPizzas,m=t.payload,u=o.find((function(e){return e.id===m}));return u.count<=1?U(e,u,m):function(e,t,a){var r=e.shoppingCart,n=r.cartCount,i=r.total,c=r.cartPizzas,l=r.cartPizzasKind,s=n-1,o=a.total/a.count,m=i-o,u=c.map((function(e){return e.id===t?Object(I.a)(Object(I.a)({},e),{},{count:--e.count,total:e.total-o}):e})),p=l.map((function(e){return e})),_=l.lastIndexOf(a.name);return _>-1&&p.splice(_,1),Object(I.a)(Object(I.a)({},e.shoppingCart),{},{cartPizzas:u,cartCount:s,total:m,cartPizzasKind:p})}(e,m,u);case"CART_PIZZA_DELETE":var p=e.shoppingCart.cartPizzas,_=t.payload,g=p.find((function(e){return e.id===_}));return U(e,g,_);case"CART_CLEAR":return Object(I.a)(Object(I.a)({},e.shoppingCart),{},{cartCount:0,total:0,cartPizzasKind:[],cartPizzas:[]});default:return e.shoppingCart}},D=function(e){return!!localStorage.userList&&JSON.parse(localStorage.userList).find((function(t){var a=t.name;return e.name.toUpperCase()===a.toUpperCase()}))},K=function(e){return!!localStorage.userList&&JSON.parse(localStorage.userList).find((function(t){var a=t.email;return e.email.toUpperCase()===a.toUpperCase()}))},B=function(e,t){switch(t.type){case"LOGIN_REQUEST":var a=t.payload,r=a.name,n=a.password;return localStorage.userList?function(e,t,a){var r=JSON.parse(localStorage.userList).find((function(a){var r=a.name,n=a.password;return r.toUpperCase()===e.toUpperCase()&&n===t}));return r?Object(I.a)(Object(I.a)({},a.loginPage),{},{logged:!0,name:r.name,loginErr:!1}):Object(I.a)(Object(I.a)({},a.loginPage),{},{logged:!1,name:null,loginErr:!0})}(r,n,e):Object(I.a)(Object(I.a)({},e.loginPage),{},{loginErr:!0});case"LOG_OUT":return Object(I.a)(Object(I.a)({},e.loginPage),{},{loginErr:!1,logged:!1,name:null});case"REGISTER_REQUEST":var i=t.payload,c=i.name,l=i.password,s=i.email,o=[],m={name:c.value,email:s.value,password:l.value};for(var u in t.payload){var p=t.payload[u].err,_=t.payload[u].value;!p&&_?o.push(!0):o.push(!1)}return function(e,t,a){if(t){if(D(e))return Object(I.a)(Object(I.a)({},a.loginPage),{},{warningModal:{type:"name"}});if(K(e))return Object(I.a)(Object(I.a)({},a.loginPage),{},{warningModal:{type:"email"}});if(localStorage.userList){var r=JSON.parse(localStorage.userList);r.push(e);var n=JSON.stringify(r);localStorage.setItem("userList",n)}else{var i=JSON.stringify([e]);localStorage.setItem("userList",i)}return Object(I.a)(Object(I.a)({},a.loginPage),{},{warningModal:{type:"succes",payload:e}})}return Object(I.a)(Object(I.a)({},a.loginPage),{},{warningModal:{type:"form"}})}(m,!o.includes(!1),e);case"WARNING_MODAL_REMOVE":return Object(I.a)(Object(I.a)({},e.loginPage),{},{warningModal:{}});default:return e.loginPage}},J={loginPage:{logged:!1,name:null,warningModal:{},loginErr:!1},mobileMenuActive:!1,shoppingCart:{cartPizzas:[],cartCount:0,total:0,cartPizzasKind:[]},pizzaList:{pizzas:[],filterPizzas:[],filter:"all",sort:"popularity",sortActive:!1,mobileFilterActive:!1,loader:!0,error:null}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOBILE_MENU_TOGGLE":return Object(I.a)(Object(I.a)({},e),{},{mobileMenuActive:!e.mobileMenuActive});default:return Object(I.a)(Object(I.a)({},e),{},{pizzaList:M(e,t),shoppingCart:H(e,t),loginPage:B(e,t)})}},q=Object(T.b)(Q);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,{store:q},n.a.createElement(s.a,null,n.a.createElement(R,null)))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1fbc7f50.chunk.js.map