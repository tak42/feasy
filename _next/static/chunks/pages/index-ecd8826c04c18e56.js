(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(554)}])},554:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return p}});var n=t(5893),s=t(7470),r=t.n(s);let i=(e,a)=>{window.parent.postMessage({action:e,content:a},"*")},c=()=>(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:()=>i("hide",[]),className:r().hideBtn,children:"Iframe 非表示"})});var l=t(7294);let o=["https://form.cao.go.jp"],u=()=>{let[e,a]=(0,l.useState)(""),[t,s]=(0,l.useState)(""),[c,u]=(0,l.useState)(""),d=(0,l.useMemo)(()=>({[o[0]]:[{id:"q1",value:e},{id:"q2",value:t},{id:"q5",value:c}]}),[e,t,c]);return(0,l.useEffect)(()=>{let e=e=>{if(!o.includes(e.data))return alert("このオリジンは許可されていません。");i("share",d[e.data])};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[d]),(0,n.jsxs)("div",{className:r().container,children:[(0,n.jsx)("p",{className:r().spaceY}),(0,n.jsx)("input",{title:"氏名",className:r().basicInput,placeholder:"富士 太郎",value:e,onChange:e=>a(e.target.value)}),(0,n.jsx)("p",{className:r().spaceY}),(0,n.jsx)("input",{title:"メールアドレス",className:r().basicInput,placeholder:"mail@co.jp",value:t,onChange:e=>s(e.target.value)}),(0,n.jsx)("p",{className:r().spaceY}),(0,n.jsx)("input",{title:"年齢",className:r().basicInput,placeholder:"20",value:c,type:"number",onChange:e=>u(e.target.value)}),(0,n.jsx)("p",{className:r().spaceY}),(0,n.jsx)("div",{style:{textAlign:"right"},children:(0,n.jsx)("button",{onClick:()=>{i("check",[])},className:r().shareBtn,children:"データ共有"})})]})};var d=t(2729),_=t.n(d),p=()=>(0,n.jsxs)("div",{className:_().container,children:[(0,n.jsxs)("main",{className:_().main,children:[(0,n.jsx)(c,{}),(0,n.jsx)(u,{})]}),(0,n.jsx)("footer",{className:_().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:_().logo,children:(0,n.jsx)("img",{src:"vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})},7470:function(e){e.exports={hideBtn:"form_hideBtn__WadwL",shareBtn:"form_shareBtn__sdj3V",basicInput:"form_basicInput__CcEVX",spaceY:"form_spaceY__GuAl8",container:"form_container__IrbkU"}},2729:function(e){e.exports={container:"index_container___q52_",main:"index_main__OmNu0",footer:"index_footer__v7pGE",logo:"index_logo__Z0ACT"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);