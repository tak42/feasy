(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8941)}])},8941:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return d}});var n=t(5893),s=t(4189),c=t.n(s);let r=()=>{window.parent.postMessage({action:"hide",content:[]},"*")},i=()=>(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:r,className:c().hideBtn,children:"Iframe 非表示"})});var o=t(7294);let l=["https://form.cao.go.jp"],u=()=>{let[e,a]=(0,o.useState)(""),[t,s]=(0,o.useState)(""),[r,i]=(0,o.useState)(""),u=(0,o.useMemo)(()=>({[l[0]]:[{id:"q1",value:e},{id:"q2",value:t},{id:"q5",value:r}]}),[e,t,r]),p=(0,o.useCallback)(e=>u[e],[u]),_=(0,o.useCallback)(e=>{let a={action:"share",content:p(e)};window.parent.postMessage(a,"*")},[p]);return(0,o.useEffect)(()=>{window.addEventListener("message",e=>{if(!l.some(a=>a===e.data))return alert("このオリジンは許可されていません。");_(e.data)})},[_]),(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsx)("p",{className:c().spaceY}),(0,n.jsx)("input",{title:"氏名",className:c().basicInput,placeholder:"富士 太郎",value:e,onChange:e=>a(e.target.value)}),(0,n.jsx)("p",{className:c().spaceY}),(0,n.jsx)("input",{title:"メールアドレス",className:c().basicInput,placeholder:"mail@co.jp",value:t,onChange:e=>s(e.target.value)}),(0,n.jsx)("p",{className:c().spaceY}),(0,n.jsx)("input",{title:"年齢",className:c().basicInput,placeholder:"20",value:r,type:"number",onChange:e=>i(e.target.value)}),(0,n.jsx)("p",{className:c().spaceY}),(0,n.jsx)("div",{style:{textAlign:"right"},children:(0,n.jsx)("button",{onClick:()=>{window.parent.postMessage({action:"check",content:[]},"*")},className:c().shareBtn,children:"データ共有"})})]})};var p=t(2729),_=t.n(p),d=()=>(0,n.jsxs)("div",{className:_().container,children:[(0,n.jsxs)("main",{className:_().main,children:[(0,n.jsx)(i,{}),(0,n.jsx)(u,{})]}),(0,n.jsx)("footer",{className:_().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:_().logo,children:(0,n.jsx)("img",{src:"vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})},2729:function(e){e.exports={container:"index_container___q52_",main:"index_main__OmNu0",footer:"index_footer__v7pGE",logo:"index_logo__Z0ACT"}},4189:function(e){e.exports={hideBtn:"form_hideBtn__ixXT_",shareBtn:"form_shareBtn__v5U5r",basicInput:"form_basicInput__rTPFH",spaceY:"form_spaceY__oWwFw",container:"form_container__tkJQe"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);