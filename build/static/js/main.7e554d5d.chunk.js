(this["webpackJsonppizza-delivery"]=this["webpackJsonppizza-delivery"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){e.exports=a(45)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),c=a.n(i),l=(a(32),a(33),a(4)),s=a(8),o=function(e){var t=e.cartButtonRender,a=e.onToggleMenu,n=e.mobileMenuClass,i=e.loginButton;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__burger",onClick:function(){return a()}},"XXX"),r.a.createElement("section",{className:"header__logo-block"},r.a.createElement("img",{src:"./logo.svg",className:"header__logo",alt:"logo"}),r.a.createElement(s.b,{to:"/"},r.a.createElement("section",{className:"header__text-block"},r.a.createElement("h1",{className:"header__title"},"Pizza Delivery"),r.a.createElement("p",{className:"header__subtitle"},"\u041d\u0430\u0439\u0441\u043c\u0430\u0447\u043d\u0456\u0448\u0430 \u043f\u0456\u0446\u0446\u0430 \u0443 \u043d\u0430\u0448\u043e\u043c\u0443 \u0432\u0438\u043c\u0456\u0440\u0456")))),r.a.createElement("section",{className:n},r.a.createElement("section",{className:"header__close",onClick:function(){return a()}}," X "),i,r.a.createElement(s.b,{to:"/cart"},t)))},m=Object(l.b)((function(e){var t=e.shoppingCart,a=t.total,n=t.cartCount,r=e.mobileMenuActive,i=e.loginPage;return{mobileMenuActive:r,total:a,cartCount:n,nickName:i.nickName,logged:i.logged}}),(function(e){return{onToggleMenu:function(){return e({type:"MOBILE_MENU_TOGGLE"})}}}))((function(e){var t=e.simpleHeader,a=e.onToggleMenu,n=e.mobileMenuActive,i=e.total,c=e.cartCount,l=e.nickName,m=e.logged,u=n?"header__buttons-block header__buttons-block--active":"header__buttons-block",p=t?null:r.a.createElement("div",{className:"cart",onClick:function(){return a()}},r.a.createElement("div",{className:"cart__price"},i,"\u20b4"),r.a.createElement("div",{className:"cart__line"}),r.a.createElement("div",{className:"cart__count"},r.a.createElement("i",{className:"fas fa-shopping-cart cart__icon"}),c)),_=m?r.a.createElement("div",{className:"header__welcome"},r.a.createElement("p",null,"\u041b\u0430\u0441\u043a\u0430\u0432\u043e \u043f\u0440\u043e\u0441\u0438\u043c\u043e - "),r.a.createElement("p",{className:" header__welcome header__welcome--nick"},l,"!")):r.a.createElement(s.b,{to:"/login"},r.a.createElement("section",{onClick:function(){return a()},className:"header__login"},"\u0423\u0432\u0456\u0439\u0442\u0438"));return r.a.createElement(o,{onToggleMenu:a,mobileMenuClass:u,cartButtonRender:p,loginButton:_})})),u=(a(22),function(e){var t=e.filterList,a=e.sortList,n=e.currentSort,i=e.onToggleSort,c=e.arrowClass,l=e.sortListClass,s=e.onToggleFilter,o=e.mobileFilterClass;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"filter__mobile-trigger",onClick:s},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u0448\u0443\u043a\u0443"),r.a.createElement("section",{className:o},r.a.createElement("ul",{className:"filter__filter-list"},t),r.a.createElement("section",{className:"filter__sort ",onClick:i},r.a.createElement("img",{src:"./sort-arrow.svg",className:c,alt:"arrow"}),r.a.createElement("p",{className:"filter__sort-text"},"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430:",r.a.createElement("span",{className:"filter__sort-type"}," ",n)),r.a.createElement("ul",{className:l},a))))}),p=Object(l.b)((function(e){var t=e.pizzaList;return{filter:t.filter,sort:t.sort,sortActive:t.sortActive,mobileFilterActive:t.mobileFilterActive}}),(function(e){return{onFilter:function(t){return e({type:"FILTER_CHANGE",payload:t})},onSort:function(t){return e(function(e){return{type:"SORT_CHANGE",payload:e}}(t))},onToggleSort:function(){return e({type:"SORT_TOGGLE"})},onToggleFilter:function(){return e({type:"MOBILE_FILTER_TOGGLE"})}}}))((function(e){var t=e.filter,a=e.sort,n=e.onFilter,i=e.onSort,c=e.sortActive,l=e.onToggleSort,s=e.onToggleFilter,o=e.mobileFilterActive,m=a;switch(m){case"popularity":m="\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0441\u0442\u044e";break;case"cost":m="\u0446\u0456\u043d\u043e\u044e";break;case"alphabet":m="\u0430\u043b\u0444\u0430\u0432\u0456\u0442\u043e\u043c"}var p=[{type:"popularity",label:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0441\u0442\u044e"},{type:"cost",label:"\u0426\u0456\u043d\u043e\u044e"},{type:"alphabet",label:"\u0410\u043b\u0444\u0430\u0432\u0456\u0442\u043e\u043c"}].map((function(e,t){return a===e.type?r.a.createElement("li",{key:t,className:"sort__item sort__item--active",onClick:function(){return i(e.type)}},e.label):r.a.createElement("li",{key:t,className:"sort__item",onClick:function(){return i(e.type)}},e.label)})),_=[{type:"all",label:"\u0412\u0441\u0456"},{type:"meat",label:"\u041c'\u044f\u0441\u043d\u0456"},{type:"vegetable",label:"\u041e\u0432\u043e\u0447\u0435\u0432\u0456"},{type:"spicy",label:"\u0413\u043e\u0441\u0442\u0440\u0456"}].map((function(e,a){return e.type===t?r.a.createElement("li",{key:a,onClick:function(){return n(e.type)},className:"filter-list__item filter-list__item--active"},e.label):r.a.createElement("li",{key:a,onClick:function(){return n(e.type)},className:"filter-list__item"},e.label)})),z=o?"filter-container filter-container--active":"filter-container",g=c?"sort__list sort__list--active":"sort__list",f=c?"sort__arrow-disabled":"sort__arrow-active";return r.a.createElement(u,{filterList:_,sortList:p,currentSort:m,onSort:i,onToggleSort:l,arrowClass:f,sortListClass:g,onToggleFilter:s,mobileFilterClass:z})})),_=(a(39),a(40),function(){return r.a.createElement("div",{className:"lds-hourglass"})}),z=(a(23),function(e){var t=e.name,a=e.price,n=e.img,i=e.thicknessSettingsRender,c=e.sizeSettingsRender,l=e.onCartPizza,s=e.id,o=e.renderCount,m=e.pizzaItemImage,u=e.pizzaImageClass;return r.a.createElement("section",{className:"pizza-item__container"},r.a.createElement("div",{className:"pizza-item__image-block"},r.a.createElement("img",{src:n,className:"pizza-item__image-static",alt:"pizza"}),r.a.createElement("img",{src:n,className:u,ref:m,alt:"pizza for animation"})),r.a.createElement("div",{className:"pizza-item__title"},r.a.createElement("p",{className:"pizza-item__text"},t)),r.a.createElement("div",{className:"pizza-settings__container pizza-item__text pizza-item__text--settings"},i,c),r.a.createElement("div",{className:"pizza-item__order"},r.a.createElement("p",{className:"pizza-item__price pizza-item__text pizza-item__text--price"},a," \u20b4"),r.a.createElement("button",{onClick:function(){return l(s)},className:"pizza-item__order-button"},r.a.createElement("img",{src:"./plus.png",className:"pizza-item__plus",alt:"plus"}),r.a.createElement("p",{className:"pizza-item__order-text"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0438"),o)))}),g=Object(l.b)((function(e){return{cartPizzasNameList:e.shoppingCart.cartPizzasKind}}),(function(e){return{onChooseType:function(t,a,n){return e(function(e,t,a){return{type:"TYPE_PIZZA_CHOOSE",payload:{id:e,type:t,name:a}}}(t,a,n))},onChooseSize:function(t,a,n){return e(function(e,t,a){return{type:"SIZE_PIZZA_CHOOSE",payload:{id:e,size:t,name:a}}}(t,a,n))},onCartPizza:function(t){e(function(e){return{type:"ANIMATION_PIZZA_TOGGLE",payload:e}}(t)),e(function(e){return{type:"CART_PIZZA_ADD",payload:e}}(t))}}}))((function(e){var t=e.name,a=e.id,i=e.totalPrice,c=e.img,l=e.settings,s=l.type,o=void 0===s?"thin":s,m=l.size,u=void 0===m?"small":m,p=e.onChooseType,_=e.onChooseSize,g=e.onCartPizza,f=e.cartPizzasNameList,E=e.animation,d=Object(n.useRef)(null),b=function(e,t){var a=e.filter((function(e){return e===t}));return a.length>0?a.length:null}(f,t),N=b>0?r.a.createElement("p",{className:"pizza-item__order-count"},b):null,h=E?"pizza-item__image pizza-item__image--animated":"pizza-item__image";return r.a.createElement(z,{name:t,price:i,img:c,thicknessSettingsRender:function(e){var n="pizza-settings__thickness",i="pizza-settings__thickness";return"classic"===e&&(i+=" pizza-settings__thickness--active"),"thin"===e&&(n+=" pizza-settings__thickness--active"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n,onClick:function(){return p(a,"thin",t)}},"\u0442\u043e\u043d\u043a\u0430"),r.a.createElement("div",{className:i,onClick:function(){return p(a,"classic",t)}},"\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430"))}(o),sizeSettingsRender:function(e){var n="pizza-settings__size",i="pizza-settings__size",c="pizza-settings__size";return"small"===e&&(n+=" pizza-settings__size--active"),"medium"===e&&(i+=" pizza-settings__size--active"),"large"===e&&(c+=" pizza-settings__size--active"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n,onClick:function(){return _(a,"small",t)}},"26 \u0441\u043c."),r.a.createElement("div",{className:i,onClick:function(){return _(a,"medium",t)}},"30 \u0441\u043c."),r.a.createElement("div",{className:c,onClick:function(){return _(a,"large",t)}},"40 \u0441\u043c."))}(u),onCartPizza:g,id:a,renderCount:N,pizzaItemImage:d,pizzaImageClass:h})})),f=a(25),E=a(26),d=new(function(){function e(){Object(f.a)(this,e),this.pizzas=[{name:"\u0427\u0456\u0437\u0431\u0443\u0440\u0433\u0435\u0440-\u041f\u0456\u0446\u0446\u0430",img:"./chizburger-pizza.png",markup:{thin:0,classic:30,small:0,medium:15,large:45},settings:{size:"small",type:"thin"},price:101,totalPrice:101,id:1,class:"meat",popularity:.3},{name:"\u0421\u0438\u0440\u043d\u0430",img:"./cheeze.png",markup:{thin:0,classic:26,small:0,medium:20,large:38},settings:{size:"small",type:"thin"},price:99,totalPrice:99,id:2,class:"vegetable",popularity:.5},{name:"\u041a\u0440\u0438\u0432\u0435\u0442\u043a\u0438 \u043f\u043e-\u0430\u0437\u0456\u0430\u0442\u0441\u044c\u043a\u0438",img:"./shrimp.png",markup:{thin:0,classic:41,small:0,medium:29,large:65},settings:{size:"small",type:"thin"},price:95,totalPrice:95,id:3,class:"meat",popularity:.99},{name:"\u0421\u0438\u0440\u043d\u0435 \u043a\u0443\u0440\u0447\u0430",img:"./cheeze-chicken.png",markup:{thin:0,classic:30,small:0,medium:15,large:25},settings:{size:"small",type:"thin"},price:95,totalPrice:95,id:4,class:["spicy","meat"],popularity:.6}]}return Object(E.a)(e,[{key:"getPizzas",value:function(){var e=this;return new Promise((function(t){setTimeout((function(){return t(e.pizzas)}),600)}))}}]),e}()),b=Object(l.b)((function(e){var t=e.pizzaList;return{pizzas:t.filterPizzas,filter:t.filter,loader:t.loader,sort:t.sort}}),(function(e){return{pizzasLoaded:function(t){return e({type:"FETCH_PIZZAS_SUCCES",payload:t})},fetchError:function(t){return e(function(e){return{type:"FETCH_PIZZAS_FAILURE",payload:e}}(t))},fetchRequest:function(){return e({type:"FETCH_PIZZAS_REQUEST"})}}}))((function(e){var t=e.pizzas,a=e.sort,i=e.fetchRequest,c=e.pizzasLoaded,l=e.filter,s=e.fetchError,o=e.loader;switch(Object(n.useEffect)((function(){i(),d.getPizzas().then((function(e){return c(e)})).catch((function(e){return s(e)}))}),[l,a,i,c,s]),l){case"all":l="\u0412\u0441\u0456";break;case"meat":l="\u041c'\u044f\u0441\u043d\u0456";break;case"vegetable":l="\u041e\u0432\u043e\u0447\u0435\u0432\u0456";break;case"spicy":l="\u0413\u043e\u0441\u0442\u0440\u0456"}return o?r.a.createElement(_,null):r.a.createElement("main",{className:"pizza-list__container"},r.a.createElement("section",{className:"pizza-list__header"},l," \u043f\u0456\u0446\u0446\u0438"),r.a.createElement("section",{className:"pizza-list"},function(e){return e.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))}(t)))})),N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(p,null),r.a.createElement(b,null))},h=(a(41),a(42),Object(l.b)(null,(function(e){return{onIncrease:function(t){return e(function(e){return{type:"CART_PIZZA_INCREASE",payload:e}}(t))},onDecrease:function(t){return e(function(e){return{type:"CART_PIZZA_DECREASE",payload:e}}(t))},onDelete:function(t){return e(function(e){return{type:"CART_PIZZA_DELETE",payload:e}}(t))}}}))((function(e){var t=e.name,a=e.total,n=e.img,i=e.settings,c=e.count,l=e.id,s=e.onIncrease,o=e.onDecrease,m=e.onDelete,u=i.size,p=i.type;switch(i.type){case"thin":p="\u0422\u043e\u043d\u043a\u0435 \u0442\u0456\u0441\u0442\u043e";break;case"classic":p="\u0422\u043e\u0432\u0441\u0442\u0435 \u0442\u0456\u0441\u0442\u043e"}switch(i.size){case"small":u="26 \u0441\u043c.";break;case"medium":u="30 \u0441\u043c.";break;case"large":u="40 \u0441\u043c."}return r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",{className:"cart-item__info-block"},r.a.createElement("img",{src:n,className:"cart-item__img",alt:"pizza"}),r.a.createElement("div",{className:"cart-item__info"},r.a.createElement("p",{className:"cart-page__text"},t),r.a.createElement("p",{className:"cart-page__text cart-page__text--small_gray"},"".concat(p,", ").concat(u)))),r.a.createElement("div",{className:"cart-item__counter-block"},r.a.createElement("i",{onClick:function(){return o(l)},className:"fas fa-minus-circle cart-item__counter-icon"}),r.a.createElement("p",{className:"cart-page__text cart-item__count"},c),r.a.createElement("i",{onClick:function(){return s(l)},className:"fas fa-plus-circle cart-item__counter-icon"})),r.a.createElement("div",{className:"cart-item__price"},r.a.createElement("p",{className:"cart-page__text"},a," \u20b4")),r.a.createElement("div",{className:"cart-item__close"},r.a.createElement("i",{onClick:function(){return m(l)},className:"far fa-times-circle cart-item__close-icon"})))}))),v=Object(l.b)((function(e){var t=e.shoppingCart;return{cartPizzas:t.cartPizzas,total:t.total,cartCount:t.cartCount}}),(function(e){return{onClearCart:function(){return e({type:"CART_CLEAR"})}}}))((function(e){var t=e.cartPizzas,a=e.total,n=e.cartCount,i=e.onClearCart;return r.a.createElement("section",{className:"cart-page"},r.a.createElement("section",{className:"cart-page__header"},r.a.createElement("div",{className:"cart-page__title"},r.a.createElement("i",{className:"fas fa-shopping-cart cart-page__cart-icon"}),r.a.createElement("p",{className:"cart-page__text cart-page__text--title"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430")),r.a.createElement("div",{onClick:function(){return i()},className:"cart-page__clear"},r.a.createElement("span",{className:"cart-page__clear-underscore"}),r.a.createElement("i",{className:"far fa-trash-alt cart-page__trash-icon"}),r.a.createElement("p",{className:"cart-page__text cart-page__text--small_gray"},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))),r.a.createElement("section",{className:"cart-page__cart-list"},function(e){return e.map((function(e){return r.a.createElement(h,Object.assign({},e,{key:e.id}))}))}(t)),r.a.createElement("section",{className:"cart-page__info-block"},r.a.createElement("div",{className:"cart-page__text-block"},r.a.createElement("span",{className:"cart-page__text cart-page__text--thin"},"\u0412\u0441\u044c\u043e\u0433\u043e \u043f\u0456\u0446: "),r.a.createElement("span",{className:"cart-page__text"},n," \u0448\u0442")),r.a.createElement("div",{className:"cart-page__text-block"},r.a.createElement("span",{className:"cart-page__text cart-page__text--thin"},"\u0421\u0443\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0443: "),r.a.createElement("span",{className:"cart-page__text cart-page__text--orange"},a," \u20b4"))),r.a.createElement("section",{className:"cart-page__buttons-block"},r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{className:"cart-page__nav-button"},r.a.createElement("span",{className:"cart-page__text cart-page__text--small_gray"},"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c \u043d\u0430\u0437\u0430\u0434"))),r.a.createElement("button",{className:"cart-page__nav-button cart-page__nav-button--order"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u0438")))})),C=a(3),y=Object(l.b)((function(e){return{logged:e.loginPage.logged,emptyCart:0===e.shoppingCart.cartPizzas.length}}))((function(e){var t=e.emptyCart;return e.logged?t?r.a.createElement(C.a,{to:"/cart-empty"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{simpleHeader:!0}),r.a.createElement(v,null)):r.a.createElement(C.a,{to:"/cart-login"})})),O=(a(43),function(e){var t="\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430 \ud83d\ude15",a="\u0421\u0445\u043e\u0436\u0435, \u0449\u043e \u0432\u0438 \u0449\u0435 \u043d\u0435 \u0432\u0438\u0431\u0440\u0430\u043b\u0438 \u0436\u043e\u0434\u043d\u043e\u0457 \u043f\u0456\u0446\u0438. \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u043f\u0456\u0446\u0443, \u043f\u043e\u0432\u0435\u0440\u043d\u0456\u0441\u0442\u044c\u044f \u043d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443";return e.logout&&(t="\u0412\u0438 \u043d\u0435 \u0432\u0432\u0456\u0439\u0448\u043b\u0438 \u0443 \u0441\u0432\u0456\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \ud83d\ude15",a="\u0421\u0445\u043e\u0436\u0435, \u0449\u043e \u0432\u0438 \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u043b\u0438\u0441\u044c, \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 \u0443\u0432\u0456\u0439\u0442\u0438, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0441\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u0432\u0433\u043e\u0440\u0456"),r.a.createElement("div",{className:"cart-failure"},r.a.createElement("h2",{className:"cart-failure__title"},t),r.a.createElement("p",{className:"cart-failure__sub-title"},a),r.a.createElement("img",{src:"empty-cart.png",className:"cart-failure__img",alt:"empty-cart"}),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{className:"cart-failure__back"},"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u043d\u0430\u0437\u0430\u0434")))}),P=Object(l.b)((function(e){return{login:e.login,cartIsEmpty:0===e.shoppingCart.cartPizzas.length}}))((function(e){var t=e.logout,a=e.cartIsEmpty;e.login;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{simpleHeader:!0}),r.a.createElement(O,{logout:t})):r.a.createElement(C.a,{to:"/"})})),k=(a(44),Object(l.b)(null,(function(e){return{onLogin:function(t,a){return e(function(e,t){return{type:"LOGIN_REQUEST",payload:{name:e,password:t}}}(t,a))}}}))((function(e){var t=e.onLogin;return r.a.createElement("div",{className:"login__container"},r.a.createElement("div",{className:"box"},r.a.createElement("input",{type:"checkbox",id:"toggle",className:"box__toggle",hidden:!0}),r.a.createElement("img",{src:"https://source.unsplash.com/zv3ckJKftC4/300x400",alt:"by Autumn Studio",className:"box__image"}),r.a.createElement("div",{className:"form form--register",action:""},r.a.createElement("h1",{className:"form__title"},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"),r.a.createElement("div",{className:"form__helper"},r.a.createElement("input",{type:"text",name:"user",id:"new-user",placeholder:"User",className:"form__input"}),r.a.createElement("label",{className:"form__label",htmlFor:"new-user"},"\u0406\u043c'\u044f")),r.a.createElement("div",{className:"form__helper"},r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email",className:"form__input"}),r.a.createElement("label",{className:"form__label",htmlFor:"email"},"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0430 \u0441\u043a\u0440\u0438\u043d\u044c\u043a\u0430")),r.a.createElement("div",{className:"form__helper"},r.a.createElement("input",{type:"password",name:"password",id:"new-user-password",placeholder:"Password",className:"form__input"}),r.a.createElement("label",{className:"form__label",htmlFor:"new-user-password"},"\u041f\u0430\u0440\u043e\u043b\u044c")),r.a.createElement("div",{className:"form__helper"},r.a.createElement("input",{type:"password",name:"password",id:"confirm-password",placeholder:"Confirm password",className:"form__input"}),r.a.createElement("label",{className:"form__label",htmlFor:"confirm-password"},"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u043e\u043b\u044e")),r.a.createElement("button",{className:"form__button"},"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"),r.a.createElement("p",{className:"form__text"},"\u0412\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0456? ",r.a.createElement("label",{htmlFor:"toggle",className:"form__link"},"\u0423\u0432\u0456\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442!")," ")),r.a.createElement("div",{className:"form form--login"},r.a.createElement("h1",{className:"form__title"},"\u0412\u0445\u0456\u0434"),r.a.createElement("div",{className:"form__helper"},r.a.createElement("input",{type:"text",name:"user",id:"user",placeholder:"User",className:"form__input"}),r.a.createElement("label",{className:"form__label",htmlFor:"user"},"\u0406\u043c'\u044f")),r.a.createElement("div",{className:"form__helper"},r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Password",className:"form__input"}),r.a.createElement("label",{className:"form__label",htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c")),r.a.createElement("button",{onClick:function(){return t("lalka","123")},className:"form__button"},"\u0423\u0432\u0456\u0439\u0442\u0438"),r.a.createElement("p",{className:"form__text"},"\u0429\u0435 \u043d\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0456? ",r.a.createElement("label",{htmlFor:"toggle",className:"form__link"},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044e!")," "))))}))),A=Object(l.b)((function(e){return{logged:e.loginPage.logged}}))((function(e){return e.logged?r.a.createElement(C.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{simpleHeader:!0}),r.a.createElement(k,null))})),j=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(C.b,{path:"/",component:N,exact:!0}),r.a.createElement(C.b,{path:"/cart",component:y,exact:!0}),r.a.createElement(C.b,{path:"/cart-empty",component:P,exact:!0}),r.a.createElement(C.b,{path:"/cart-login",render:function(){return r.a.createElement(P,{logout:!0})},exact:!0}),r.a.createElement(C.b,{path:"/login",component:A,exact:!0}))},L=a(14),T=a(1),I=function(e,t){var a=e.map((function(e){var t=e.id,a=e.settings,n=a.type,r=a.size,i="".concat(t+n+r);return Object(T.a)(Object(T.a)({},e),{},{id:i,initialId:t,animation:!1})}));return"all"===t?a:a.filter((function(e){return e.class.includes(t)}))},x=function(e,t){return"cost"===t?e.sort((function(e,t){return e.price>t.price?1:-1})):"popularity"===t?e.sort((function(e,t){return e.popularity<t.popularity?1:-1})):"alphabet"===t?e.sort((function(e,t){return e.name>t.name?1:-1})):e},S=function(e,t){switch(t.type){case"FETCH_PIZZAS_REQUEST":return Object(T.a)(Object(T.a)({},e.pizzaList),{},{loader:!0});case"FETCH_PIZZAS_SUCCES":var a=t.payload,n=e.pizzaList,r=n.sort,i=n.filter,c=I(a,i),l=x(c,r);return Object(T.a)(Object(T.a)({},e.pizzaList),{},{pizzas:a,filterPizzas:l,loader:!1});case"FETCH_PIZZAS_FAILURE":return Object(T.a)(Object(T.a)({},e.pizzaList),{},{error:t.payload});case"TYPE_PIZZA_CHOOSE":var s=function(e,t,a){return e.pizzaList.filterPizzas.map((function(e){if(e.id===t){var n=e.settings.size,r=e.markup,i=e.price,c="".concat(e.initialId+a+n);return Object(T.a)(Object(T.a)({},e),{},{totalPrice:i+r[a]+r[n],settings:{type:a,size:n},id:c,animation:!1})}return e}))}(e,t.payload.id,t.payload.type);return Object(T.a)(Object(T.a)({},e.pizzaList),{},{filterPizzas:s});case"SIZE_PIZZA_CHOOSE":var o=function(e,t,a){return e.pizzaList.filterPizzas.map((function(e){if(e.id===t){var n=e.settings.type,r=e.markup,i=e.price,c="".concat(e.initialId+n+a);return Object(T.a)(Object(T.a)({},e),{},{totalPrice:i+r[n]+r[a],settings:{type:n,size:a},id:c,animation:!1})}return e}))}(e,t.payload.id,t.payload.size);return Object(T.a)(Object(T.a)({},e.pizzaList),{},{filterPizzas:o});case"FILTER_CHANGE":var m=t.payload,u=e.pizzaList.pizzas,p=I(u,m);return Object(T.a)(Object(T.a)({},e.pizzaList),{},{filter:m,filterPizzas:p});case"SORT_CHANGE":var _=t.payload,z=e.pizzaList.filterPizzas.map((function(e){return e})),g=x(z,_);return Object(T.a)(Object(T.a)({},e.pizzaList),{},{sort:_,filterPizzas:g});case"SORT_TOGGLE":var f=e.pizzaList.sortActive;return Object(T.a)(Object(T.a)({},e.pizzaList),{},{sortActive:!f});case"MOBILE_FILTER_TOGGLE":var E=e.pizzaList.mobileFilterActive;return Object(T.a)(Object(T.a)({},e.pizzaList),{},{sortActive:!1,mobileFilterActive:!E});case"ANIMATION_PIZZA_TOGGLE":var d=e.pizzaList.filterPizzas,b=t.payload,N=d.map((function(e){return b===e.id?Object(T.a)(Object(T.a)({},e),{},{animation:!0}):e}));return Object(T.a)(Object(T.a)({},e.pizzaList),{},{filterPizzas:N});default:return e.pizzaList}},w=a(15),Z=function(e,t,a){var n=e.shoppingCart,r=n.cartCount,i=n.total,c=n.cartPizzas,l=r+1,s=a.total/a.count,o=i+s,m=c.map((function(e){return e.id===t?Object(T.a)(Object(T.a)({},e),{},{count:++e.count,total:s+e.total}):e}));return Object(T.a)(Object(T.a)({},e.shoppingCart),{},{cartPizzas:m,total:o,cartCount:l,cartPizzasKind:[].concat(Object(w.a)(e.shoppingCart.cartPizzasKind),[a.name])})},F=function(e,t,a){var n=e.shoppingCart,r=n.cartCount,i=n.total,c=n.cartPizzas,l=n.cartPizzasKind,s=c.filter((function(e){return e.id!==a})),o=l.map((function(e){return e})),m=l.indexOf(t.name);return m>-1&&o.splice(m,t.count),Object(T.a)(Object(T.a)({},e.shoppingCart),{},{cartPizzas:s,total:i-t.total,cartCount:r-t.count,cartPizzasKind:o})},R=function(e,t){switch(t.type){case"CART_PIZZA_ADD":var a=t.payload,n=function(e,t){var a=e.pizzaList.filterPizzas.find((function(e){return e.id===t}));return{name:a.name,total:a.totalPrice,settings:a.settings,img:a.img,count:1,id:a.id}}(e,a);if(function(e,t){var a=t.id,n=t.settings,r=n.type,i=n.size;return e.shoppingCart.cartPizzas.find((function(e){return e.id===a&&e.settings.type===r&&e.settings.size===i}))}(e,n))return Z(e,a,n);var r=e.shoppingCart.cartCount+1,i=e.shoppingCart.total+n.total;return Object(T.a)(Object(T.a)({},e.shoppingCart),{},{cartCount:r,total:i,cartPizzas:[].concat(Object(w.a)(e.shoppingCart.cartPizzas),[n]),cartPizzasKind:[].concat(Object(w.a)(e.shoppingCart.cartPizzasKind),[n.name])});case"CART_PIZZA_INCREASE":var c=e.shoppingCart.cartPizzas,l=t.payload,s=c.find((function(e){return e.id===l}));return Z(e,l,s);case"CART_PIZZA_DECREASE":var o=e.shoppingCart.cartPizzas,m=t.payload,u=o.find((function(e){return e.id===m}));return u.count<=1?F(e,u,m):function(e,t,a){var n=e.shoppingCart,r=n.cartCount,i=n.total,c=n.cartPizzas,l=n.cartPizzasKind,s=r-1,o=a.total/a.count,m=i-o,u=c.map((function(e){return e.id===t?Object(T.a)(Object(T.a)({},e),{},{count:--e.count,total:e.total-o}):e})),p=l.map((function(e){return e})),_=l.lastIndexOf(a.name);return _>-1&&p.splice(_,1),Object(T.a)(Object(T.a)({},e.shoppingCart),{},{cartPizzas:u,cartCount:s,total:m,cartPizzasKind:p})}(e,m,u);case"CART_PIZZA_DELETE":var p=e.shoppingCart.cartPizzas,_=t.payload,z=p.find((function(e){return e.id===_}));return F(e,z,_);case"CART_CLEAR":return Object(T.a)(Object(T.a)({},e.shoppingCart),{},{cartCount:0,total:0,cartPizzasKind:[],cartPizzas:[]});default:return e.shoppingCart}},G=function(e,t){switch(t.type){case"LOGIN_REQUEST":console.log("logged");default:return e.loginPage}},M={loginPage:{logged:!0,nickName:"babak",password:"123321"},mobileMenuActive:!1,shoppingCart:{cartPizzas:[],cartCount:0,total:0,cartPizzasKind:[]},pizzaList:{pizzas:[],filterPizzas:[],filter:"all",sort:"popularity",sortActive:!1,mobileFilterActive:!1,loader:!0,error:null}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOBILE_MENU_TOGGLE":return Object(T.a)(Object(T.a)({},e),{},{mobileMenuActive:!e.mobileMenuActive});default:return Object(T.a)(Object(T.a)({},e),{},{pizzaList:S(e,t),shoppingCart:R(e,t),loginPage:G(e,t)})}},D=Object(L.b)(H);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:D},r.a.createElement(s.a,null,r.a.createElement(j,null)))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.7e554d5d.chunk.js.map