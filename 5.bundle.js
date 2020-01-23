(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{342:function(e,n,t){var a=t(343);"string"==typeof a&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};t(100)(a,o);a.locals&&(e.exports=a.locals)},343:function(e,n,t){(e.exports=t(99)(!1)).push([e.i,".wrapper-code-demo{height:100%;width:100%;border:2px solid #3366ff;overflow:scroll}.demo-heading{padding:5px 10px;background-color:#3366ff;color:white;font-weight:bold}\n",""])},344:function(e,n,t){"use strict";function a(e){!function(e){var n=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",n),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var t=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(t).join(""):""},a=function(n){for(var o=[],r=0;r<n.length;r++){var l=n[r],c=!1;if("string"!=typeof l&&("tag"===l.type&&l.content[0]&&"tag"===l.content[0].type?"</"===l.content[0].content[0].content?o.length>0&&o[o.length-1].tagName===t(l.content[0].content[1])&&o.pop():"/>"===l.content[l.content.length-1].content||o.push({tagName:t(l.content[0].content[1]),openedBraces:0}):o.length>0&&"punctuation"===l.type&&"{"===l.content?o[o.length-1].openedBraces++:o.length>0&&o[o.length-1].openedBraces>0&&"punctuation"===l.type&&"}"===l.content?o[o.length-1].openedBraces--:c=!0),(c||"string"==typeof l)&&o.length>0&&0===o[o.length-1].openedBraces){var s=t(l);r<n.length-1&&("string"==typeof n[r+1]||"plain-text"===n[r+1].type)&&(s+=t(n[r+1]),n.splice(r+1,1)),r>0&&("string"==typeof n[r-1]||"plain-text"===n[r-1].type)&&(s=t(n[r-1])+s,n.splice(r-1,1),r--),n[r]=new e.Token("plain-text",s,null,s)}l.content&&"string"!=typeof l.content&&a(l.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||a(e.tokens)}))}(e)}e.exports=a,a.displayName="jsx",a.aliases=[]},345:function(e,n,t){"use strict";n.a={hooksExampleCode:'import React, { useState, useCallback, useMemo } from "react";\nimport "./style.scss";\n\nconst addFruitsFunctionCount = new Set();\nconst addVegetableFunctionCount = new Set();\n\nconst applePrice = 4; // each unit costs 4$ of money .\nconst beansPrice = 2; // each unit costs 2$ of money .\n\nexport default function HooksExample() {\n    const [appleCounter, setAppleCounter] = useState(0);\n    const [beansCounter, setBeansCounter] = useState(0);\n\n    const totalProfit = useMemo(() => {\n        return appleCounter * applePrice + beansCounter * beansPrice;\n    }, [beansCounter]);\n\n    const addVegetable = useCallback(() => {\n        setBeansCounter(beansCounter + 1);\n    }, [beansCounter]);\n\n    // calculate profit made by the shopkeeper\n\n    const addFruits = () => {\n        setAppleCounter(appleCounter + 1);\n    };\n\n    // In each render new instance of addFruits will be created .\n    addFruitsFunctionCount.add(addFruits);\n\n    addVegetableFunctionCount.add(addVegetable);\n    return (\n        <div className="wrapper-hooks-example">\n            <h3> Hooks Example</h3>\n            <div className="wrapper-fruits">\n                <button onClick={addVegetable} type="button">\n                    Add vegetables\n                </button>\n            </div>\n            <div className="wrapper-vegetables">\n                <button onClick={addFruits} type="button">\n                    Add fruits\n                </button>\n            </div>\n            <div>\n                New functions created :\n                <ul>\n                    <li>fruits :{addFruitsFunctionCount.size - 1}</li>\n                    <li>vegetable : {addVegetableFunctionCount.size - 1}</li>\n                </ul>\n            </div>\n\n            <div> Total Profit = {totalProfit}</div>\n\n        </div>\n    );\n}',dynamicImport:'import React, { useState, useCallback } from "react";\nimport "./style.scss";\n// Dynamic import example .\n\nexport default function DynamicImport() {\n    const a = 10;\n    const b = 20;\n    const [sum, setSum] = useState(0);\n\n    const addData = useCallback(() => {\n        // Dynamic import syntax .\n        import("lodash").then(_ => {\n            setSum(_.add(a, b));\n        });\n    }, []);\n\n    return (\n        <div className="wrapper-dynamic-import">\n            <h2> Dynamic Import Example</h2>\n            <button onClick={addData} type="button">\n                Add\n            </button>\n            <div>\n                sum is\n                {sum}\n            </div>\n        </div>\n    );\n}',lazyLoadExampleCode:'import React, { Suspense } from "react";\n// import { Alert } from "reactstrap";\nimport Loader from "../../../components/Loader";\nimport "./style.scss";\n\n\nexport default function LazyLoadingExample() {\n    const Alert = React.lazy(() => import("reactstrap/lib/Alert"));\n    return (\n        <div className="wrapper-lazy-load">\n            <h2> Lazy loading Example</h2>\n            <Suspense fallback={<Loader />}>\n                <Alert color="success">This is Example of Lazy Loading</Alert>\n            </Suspense>\n\n        </div>\n    );\n}\n'}},348:function(e,n,t){"use strict";var a=t(1),o=t.n(a),r={'code[class*="language-"]':{color:"black",background:"none",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"#f5f2f0",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{background:"#f5f2f0",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"slategray"},prolog:{color:"slategray"},doctype:{color:"slategray"},cdata:{color:"slategray"},punctuation:{color:"#999"},".namespace":{Opacity:".7"},property:{color:"#905"},tag:{color:"#905"},boolean:{color:"#905"},number:{color:"#905"},constant:{color:"#905"},symbol:{color:"#905"},deleted:{color:"#905"},selector:{color:"#690"},"attr-name":{color:"#690"},string:{color:"#690"},char:{color:"#690"},builtin:{color:"#690"},inserted:{color:"#690"},operator:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},entity:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)",cursor:"help"},url:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".language-css .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".style .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},atrule:{color:"#07a"},"attr-value":{color:"#07a"},keyword:{color:"#07a"},function:{color:"#DD4A68"},"class-name":{color:"#DD4A68"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},variable:{color:"#e90"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}},l=(t(342),t(344)),c=t.n(l).a,s=t(101);function i(e,n,t,a,o,r,l){try{var c=e[r](l),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(a,o)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(a,o){var r=e.apply(n,t);function l(e){i(r,a,o,l,c,"next",e)}function c(e){i(r,a,o,l,c,"throw",e)}l(void 0)}))}}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],a=!0,o=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(t.push(l.value),!n||t.length!==n);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){var n=e.moduleProvider,t=e.language,r=e.style,l=e.children,i=d(Object(a.useState)(null),2),p=i[0],g=i[1];function m(){return(m=u(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:(a=e.sent).default.registerLanguage&&a.default.registerLanguage("jsx",c),g(a.default({children:l,style:r,language:t})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err :",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(a.useMemo)((function(){p||function(){m.apply(this,arguments)}()}),[]),p||o.a.createElement(s.a,null)}n.a=function(e){var n=e.codeString;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"demo-heading"}," Demo : "),o.a.createElement("div",{className:"wrapper-code-demo"},o.a.createElement(p,{moduleProvider:function(){return t.e(2).then(t.bind(null,429))},style:r,language:"jsx"},n)))}},370:function(e,n,t){var a=t(371);"string"==typeof a&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};t(100)(a,o);a.locals&&(e.exports=a.locals)},371:function(e,n,t){(e.exports=t(99)(!1)).push([e.i,".wrapper-hooks-example{width:100%;height:100vh;display:flex;padding:20px;flex-direction:column}\n",""])},427:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(1),o=t.n(a),r=(t(370),t(348)),l=t(345);function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],a=!0,o=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(t.push(l.value),!n||t.length!==n);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=new Set,i=new Set;function u(){var e=c(Object(a.useState)(0),2),n=e[0],t=e[1],u=c(Object(a.useState)(0),2),d=u[0],p=u[1],g=Object(a.useMemo)((function(){return 4*n+2*d}),[d]),m=Object(a.useCallback)((function(){p(d+1)}),[d]),f=function(){t(n+1)};return s.add(f),i.add(m),o.a.createElement("div",{className:"wrapper-hooks-example"},o.a.createElement("h3",null," Hooks Example"),o.a.createElement("div",{className:"wrapper-fruits"},o.a.createElement("button",{onClick:m,type:"button"},"Add vegetables")),o.a.createElement("div",{className:"wrapper-vegetables"},o.a.createElement("button",{onClick:f,type:"button"},"Add fruits")),o.a.createElement("div",null,"New functions created :",o.a.createElement("ul",null,o.a.createElement("li",null,"fruits :",s.size-1),o.a.createElement("li",null,"vegetable : ",i.size-1))),o.a.createElement("div",null," Total Profit = ",g),o.a.createElement(r.a,{codeString:l.a.lazyLoadExampleCode}))}}}]);