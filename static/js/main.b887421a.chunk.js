(this["webpackJsonpdairy-app"]=this["webpackJsonpdairy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),m=n.n(a),c=n(2),i=n.n(c),o=(n(14),n(15),function(e){return m.a.createElement("header",null,m.a.createElement("h1",null,"dairy app"),m.a.createElement("p",null,"Comment with no sense"))}),s=n(6),l=n(3),r=n(4),u=n(7),d=n(5),h=n(8),v=(n(16),function(e){return m.a.createElement("div",{className:"item"},m.a.createElement("div",{className:"item__left"},m.a.createElement("span",{onClick:e.changeActive},e.title),m.a.createElement("div",{className:"amount"},m.a.createElement("span",null,e.amount))),m.a.createElement("button",{onClick:e.deleteItem},"Delete"))}),p=(n(17),function(e){return m.a.createElement("div",{className:"items"},m.a.createElement("h3",null,"Items"),m.a.createElement("div",{className:"items-add"},m.a.createElement("input",{type:"text",placeholder:"Type name here...",onChange:e.onChangeInputText,value:e.text}),m.a.createElement("button",{onClick:e.addItem},"Add new")),m.a.createElement("div",{className:"items-list"},e.items.map((function(t,n){return void 0!==t.comments?m.a.createElement("div",{className:"item-container",key:n},n===e.active&&m.a.createElement("div",{className:"line"}),m.a.createElement(v,{key:n,changeActive:e.changeActive.bind(void 0,n),title:t.text,amount:t.comments.length,deleteItem:e.deleteItem.bind(void 0,n)})):m.a.createElement(m.a.Fragment,null)}))))}),f=function(e){return m.a.createElement("div",{className:"comment"},m.a.createElement("div",{className:"avatar"}),m.a.createElement("p",null,e.text))},E=(n(18),function(e){return m.a.createElement("div",{className:"comments"},e.id?m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",null,"Comments #",e.id),m.a.createElement("div",{className:"comments-list"},e.comments&&e.comments.map((function(e,t){return m.a.createElement(f,{key:t,text:e})}))),m.a.createElement("div",{className:"comment-add"},m.a.createElement("div",{className:"avatar-choose"}),m.a.createElement("textarea",{name:"comment",rows:"3",onKeyDown:e.addComment,onChange:e.onChangeCommentText,value:e.text,ref:e.commentRef}))):m.a.createElement("h2",null,"No comments"))}),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentCleanup=function(){n.setState({inputText:"",commentText:""}),localStorage.setItem("currentState",JSON.stringify(n.state))},n.addItem=function(){n.state.inputText.trim().length&&n.setState({items:[].concat(Object(s.a)(n.state.items),[{text:n.state.inputText,comments:[]}]),inputText:""})},n.deleteItem=function(e){var t=n.state.items.length-1===n.state.active?n.state.active-1:n.state.active;n.setState({items:n.state.items.filter((function(t,n){return n!==e})),active:t})},n.addComment=function(e){n.state.commentText.trim().length&&(10!==e.keyCode&&13!==e.keyCode||!e.ctrlKey||n.setState({items:n.state.items.map((function(e,t){return t===n.state.active&&e.comments.push(n.state.commentText),e})),commentText:""}))},n.onChangeInputText=function(e){n.setState({inputText:e.target.value})},n.onChangeCommentText=function(e){n.setState({commentText:e.target.value})},n.changeActive=function(e){n.setState({active:e}),n.commentRef.current.focus()},n.state={items:[],inputText:"",active:-1,commentText:""},n.commentRef=m.a.createRef(),n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){0===this.state.items.length&&(this.setState(JSON.parse(localStorage.getItem("currentState"))),window.addEventListener("beforeunload",this.componentCleanup))}},{key:"componentWillUnmount",value:function(){this.componentCleanup(),window.removeEventListener("beforeunload",this.componentCleanup)}},{key:"render",value:function(){var e=void 0!==this.state.items[this.state.active]?this.state.items[this.state.active].comments:[];return m.a.createElement(m.a.Fragment,null,m.a.createElement(p,{items:this.state.items,addItem:this.addItem,deleteItem:this.deleteItem,onChangeInputText:this.onChangeInputText,active:this.state.active,text:this.state.inputText,changeActive:this.changeActive}),m.a.createElement(E,{id:this.state.active+1,comments:e,addComment:this.addComment,onChangeCommentText:this.onChangeCommentText,text:this.state.commentText,commentRef:this.commentRef}))}}]),t}(a.Component),x=(n(19),function(){return m.a.createElement("div",{className:"App"},m.a.createElement(o,null),m.a.createElement(g,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(m.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.b887421a.chunk.js.map