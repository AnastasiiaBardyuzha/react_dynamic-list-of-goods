(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(3),s=n.n(r),c=n(4),i=n(5),u=n(8),l=n(6),d=n(9),f=(n(15),function(t){var e=t.goodsList;return a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)})))}),m=n(1),h=n.n(m),p=n(7),g=function(){var t=Object(p.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){return g("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json")},y=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).state={goodsList:[]},n.firstFiveSorted=function(){b().then((function(t){n.setState({goodsList:t.sort((function(t,e){return t.name.localeCompare(e.name)})).splice(0,5)})}))},n.showedRed=function(){b().then((function(t){n.setState({goodsList:t.filter((function(t){return"red"===t.color}))})}))},n.showedAllGoods=function(){b().then((function(t){n.setState({goodsList:t})}))},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.goodsList;return 0===t.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Load your Goods"),a.a.createElement("button",{type:"button",onClick:this.showedAllGoods},"Load")):a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods"),a.a.createElement("button",{type:"button",onClick:this.showedAllGoods},"Load All goods"),a.a.createElement("button",{type:"button",onClick:this.firstFiveSorted},"Load 5 first goods"),a.a.createElement("button",{type:"button",onClick:this.showedRed},"Load red goods"),a.a.createElement(f,{goodsList:t}))}}]),e}(o.Component);s.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4877f04f.chunk.js.map