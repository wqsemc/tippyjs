(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d}),t.d(a,"_frontmatter",function(){return N});t(86);var n=t(87),s=t.n(n),c=t(7),o=t.n(c),r=t(0),l=t.n(r),m=t(178),p=t(183),i=t(181),u=t(186),E={},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=p.a,t}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=s()(e,["components"]);return l.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},E,t),components:a},l.a.createElement(m.MDXTag,{name:"p",components:a},"It's recommended that tooltips are applied only to natively focusable elements\nlike ",l.a.createElement("code",{className:"language-text"},"<button>"),". Most screenreader software will not announce the tooltip on an\nelement like ",l.a.createElement("code",{className:"language-text"},"<div>"),"."),l.a.createElement(m.MDXTag,{name:"p",components:a},"Non-interactive tooltips are accessible by default. The default trigger for\ntooltips is ",l.a.createElement("code",{className:"language-text"},'"mouseenter focus"'),". This means both a hover and focus via keyboard\nnavigation will trigger a tooltip."),l.a.createElement(m.MDXTag,{name:"p",components:a},"In addition, the reference element receives an ",l.a.createElement("code",{className:"language-text"},"aria-describedby")," attribute\n(configurable) once the tooltip is fully shown:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"html"},l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",{className:"language-html"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",l.a.createElement("span",{className:"token attr-name"},"aria-describedby"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"tippy-1",l.a.createElement("span",{className:"token punctuation"},'"')),l.a.createElement("span",{className:"token punctuation"},">")),"Text",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"button"),l.a.createElement("span",{className:"token punctuation"},">")),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"div")," ",l.a.createElement("span",{className:"token attr-name"},"id"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"tippy-1",l.a.createElement("span",{className:"token punctuation"},'"'))," ",l.a.createElement("span",{className:"token attr-name"},"role"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"tooltip",l.a.createElement("span",{className:"token punctuation"},'"'))," ",l.a.createElement("span",{className:"token attr-name"},"class"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"tippy-popper",l.a.createElement("span",{className:"token punctuation"},'"')),l.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",l.a.createElement("span",{className:"token comment"},"\x3c!-- inner elements --\x3e"),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"div"),l.a.createElement("span",{className:"token punctuation"},">"))))),l.a.createElement(m.MDXTag,{name:"p",components:a},"This allows screenreader software to announce the tooltip content describing the\nreference element. No work is required by you to achieve this functionality."),l.a.createElement(m.MDXTag,{name:"h3",components:a},"Interactivity"),l.a.createElement(m.MDXTag,{name:"p",components:a},"Although non-interactive tooltips are accessible by default, making interactive\ntooltips accessible requires a bit of work by you."),l.a.createElement(m.MDXTag,{name:"p",components:a},"For UI elements like dropdowns, you should apply these attributes to the\nreference element:"),l.a.createElement(m.MDXTag,{name:"ul",components:a},l.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement("code",{className:"language-text"},'aria-haspopup="true"')),l.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement("code",{className:"language-text"},'aria-expanded="false"'))),l.a.createElement("div",{className:"gatsby-highlight","data-language":"html"},l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",{className:"language-html"},l.a.createElement("span",{className:"token comment"},"\x3c!-- The element should have its own wrapper. --\x3e"),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"div"),l.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",l.a.createElement("span",{className:"token attr-name"},"aria-haspopup"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"true",l.a.createElement("span",{className:"token punctuation"},'"'))," ",l.a.createElement("span",{className:"token attr-name"},"aria-expanded"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"false",l.a.createElement("span",{className:"token punctuation"},'"')),l.a.createElement("span",{className:"token punctuation"},">")),"Text",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"button"),l.a.createElement("span",{className:"token punctuation"},">")),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"div"),l.a.createElement("span",{className:"token punctuation"},">"))))),l.a.createElement(m.MDXTag,{name:"p",components:a},"The following options are recommended:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token function"},"tippy"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'button'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"interactive"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token boolean"},"true"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token comment"},"// `focus` is not suitable for buttons with dropdowns"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"trigger"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'click'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token comment"},"// Don't announce the tooltip's contents when expanded"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"aria"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token nil keyword"},"null"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token comment"},"// Important: the tooltip should be DIRECTLY after the reference element"),"\n","  ",l.a.createElement("span",{className:"token comment"},"// in the DOM source order, which is why it has its own wrapper element"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"appendTo"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'parent'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token comment"},"// Let the user know the popup has been expanded"),"\n","  ",l.a.createElement("span",{className:"token function"},"onMount"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},l.a.createElement("span",{className:"token punctuation"},"{")," reference ",l.a.createElement("span",{className:"token punctuation"},"}")),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","reference",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token func method"},"setAttribute"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'aria-expanded'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token string"},"'true'"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token function"},"onHide"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},l.a.createElement("span",{className:"token punctuation"},"{")," reference ",l.a.createElement("span",{className:"token punctuation"},"}")),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","reference",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token func method"},"setAttribute"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'aria-expanded'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token string"},"'false'"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(i.c,null,l.a.createElement(i.a,null,"Click me then press Tab"),l.a.createElement(u.a,{text:"Press enter to click"})),l.a.createElement(m.MDXTag,{name:"p",components:a},"Using this technique, elements within the tippy can be tabbed to since they are\ndirectly after the reference element."),l.a.createElement(m.MDXTag,{name:"p",components:a},"It's also possible to change the ",l.a.createElement("code",{className:"language-text"},"role")," of the tippy to something other than\n",l.a.createElement("code",{className:"language-text"},'"tooltip"'),":"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token function"},"tippy"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'button'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"role"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'menu'"),l.a.createElement("span",{className:"token punctuation"},","),"\n",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")")))))},a}(l.a.Component);d.isMDXComponent=!0;var N={}},177:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=r(t(0)),c=r(t(57)),o=r(t(1));function r(e){return e&&e.__esModule?e:{default:e}}var l=(0,c.default)({}),m=l.Provider,p=l.Consumer;a.withMDXComponents=function(e){return function(a){var t=a.components,c=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["components"]);return s.default.createElement(p,null,function(a){return s.default.createElement(e,n({components:t||a},c))})}};var i=function(e){var a=e.components,t=e.children;return s.default.createElement(m,{value:a},t)};i.propTypes={components:o.default.object.isRequired,children:o.default.element.isRequired},a.default=i},178:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(179);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return c(n).default}});var s=t(177);function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return c(s).default}})},179:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),c=t(0),o=m(c),r=m(t(180)),l=t(177);function m(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},i=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,c.Component),s(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.parentName,s=e.props,c=void 0===s?{}:s,l=e.children,m=e.components,i=void 0===m?{}:m,u=e.Layout,E=e.layoutProps,d=i[t+"."+a]||i[a]||p[a]||a;return u?((0,r.default)(this,u),o.default.createElement(u,n({components:i},E),o.default.createElement(d,c,l))):o.default.createElement(d,c,l)}}]),a}();a.default=(0,l.withMDXComponents)(i)},180:function(e,a,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,o=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=m&&m(Object);e.exports=function e(a,t,i){if("string"!=typeof t){if(p){var u=m(t);u&&u!==p&&e(a,u,i)}var E=o(t);r&&(E=E.concat(r(t)));for(var d=0;d<E.length;++d){var N=E[d];if(!(n[N]||s[N]||i&&i[N])){var f=l(t,N);try{c(a,N,f)}catch(k){}}}return a}return a}},186:function(e,a,t){"use strict";var n=t(0),s=t.n(n),c=t(182),o=t(184),r=t(181),l=c.c.ul.withConfig({displayName:"Dropdown__List",componentId:"sc-1bayfxq-0"})(["margin:0;padding-left:0;list-style:none;text-align:left;"]),m=c.c.button.attrs({role:"menuitem"}).withConfig({displayName:"Dropdown__Reaction",componentId:"sc-1bayfxq-1"})(["background:none;border:none;font-size:22px;color:inherit;transition:transform 0.1s ease-out;transform:scale(1.0001);cursor:pointer;&:hover,&:focus{transform:scale(1.25);}"]),p=c.c.p.withConfig({displayName:"Dropdown__Text",componentId:"sc-1bayfxq-2"})(["margin:5px 0;color:#777;"]);function i(e){var a=e.text;return s.a.createElement(o.b,{content:s.a.createElement(s.a.Fragment,null,s.a.createElement(p,null,"Pick your reaction"),s.a.createElement("hr",null),s.a.createElement(l,null,s.a.createElement(m,{"aria-label":"React with thumbs up emoji"},s.a.createElement("span",{role:"img","aria-label":"Thumbs up"},"👍")),s.a.createElement(m,{"aria-label":"React with thumbs down emoji"},s.a.createElement("span",{role:"img","aria-label":"Thumbs down"},"👎")),s.a.createElement(m,{"aria-label":"React with heart emoji"},s.a.createElement("span",{role:"img","aria-label":"Heart"},"❤️")),s.a.createElement(m,{"aria-label":"React with crying with laughter emoji"},s.a.createElement("span",{role:"img","aria-label":"Crying with laughter"},"😂")),s.a.createElement(m,{"aria-label":"React with party emoji"},s.a.createElement("span",{role:"img","aria-label":"Party"},"🎉")))),interactive:!0,aria:null,animateFill:!1,placement:"bottom",distance:7,animation:"fade",theme:"light-border dropdown",trigger:"click",arrow:!0,appendTo:function(e){return e.parentNode},onMount:function(e){e.reference.setAttribute("aria-expanded","true")},onHide:function(e){e.reference.setAttribute("aria-expanded","false")}},s.a.createElement(r.a,{"aria-haspopup":"true","aria-expanded":"false"},a))}i.defaultProps={text:"Dropdown"},a.a=i}}]);
//# sourceMappingURL=component---src-pages-accessibility-mdx-e822afef3b14d542df6f.js.map