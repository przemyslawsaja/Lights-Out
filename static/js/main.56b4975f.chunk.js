(this.webpackJsonplights_out=this.webpackJsonplights_out||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(7),s=n.n(o),i=(n(14),n(1)),c=n(2),l=n(4),u=n(3),h=n(5),p=n(8),f=(n(15),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={isLit:!1},n.flipCellsAroundMe=function(){},n.isLit=function(){},n.handleClick=function(t){n.props.flipCellsAroundMe()},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:t,onClick:this.handleClick})}}]),e}(a.Component)),d=(n(16),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={hasWon:!1,board:n.createBoard()},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"createBoard",value:function(){for(var t=[],e=0;e<this.props.nrows;e++){for(var n=[],a=0;a<this.props.ncols;a++)n.push(Math.random()<this.props.changeLightStartsOn);t.push(n)}return t}},{key:"flipCellsAround",value:function(t){var e=this.props,n=e.ncols,a=e.nrows,r=this.state.board,o=t.split("-").map(Number),s=Object(p.a)(o,2),i=s[0],c=s[1];function l(t,e){e>=0&&e<n&&t>=0&&t<a&&(r[t][e]=!r[t][e])}l(i,c),l(i,c-1),l(i,c+1),l(i-1,c),l(i+1,c);this.setState({board:r,hasWon:!1})}},{key:"render",value:function(){for(var t=this,e=[],n=0;n<this.props.nrows;n++){for(var a=[],o=function(e){var o="".concat(n,"-").concat(e);a.push(r.a.createElement(f,{key:o,isLit:t.state.board[n][e],flipCellsAroundMe:function(){return t.flipCellsAround(o)}}))},s=0;s<this.props.ncols;s++)o(s);e.push(r.a.createElement("tr",null,a))}return r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,e))}}]),e}(a.Component));d.defaultProps={nrows:5,ncols:5,changeLightStartsOn:.2};var b=d,m=(n(17),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.56b4975f.chunk.js.map