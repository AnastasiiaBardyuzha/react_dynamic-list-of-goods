(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),s=o(2),r=o.n(s),c=o(3),i=o(4),l=o(6),u=o(5),d=o(7),f=(o(13),function(t){var e=t.goodsList;return a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)})))}),m=function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))},h=function(t){function e(){var t,o;Object(c.a)(this,e);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(o=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={goodsList:[]},o.loadGoods=function(){m().then((function(t){o.setState({goodsList:t})}))},o.firstFiveSorted=function(){m().then((function(t){o.setState({goodsList:t.sort((function(t,e){return t.name.localeCompare(e.name)})).splice(0,5)})}))},o.showedRed=function(){m().then((function(t){o.setState({goodsList:t.filter((function(t){return"red"===t.color}))})}))},o.showedAllGoods=function(){m().then((function(t){o.setState({goodsList:t})}))},o}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.goodsList;return 0===t.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Load your Goods"),a.a.createElement("button",{type:"button",onClick:this.loadGoods},"Load")):a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods"),a.a.createElement("button",{type:"button",onClick:this.showedAllGoods},"Load All goods"),a.a.createElement("button",{type:"button",onClick:this.firstFiveSorted},"Load 5 first goods"),a.a.createElement("button",{type:"button",onClick:this.showedRed},"Load red goods"),a.a.createElement(f,{goodsList:t}))}}]),e}(n.Component);r.a.render(a.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,o){t.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.079ba94c.chunk.js.map