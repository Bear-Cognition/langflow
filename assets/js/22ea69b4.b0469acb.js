"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8440],{9047:(e,n,t)=>{t.d(n,{Z:()=>H});var o=t(7294),i=t(5893);function r(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=o.Children.toArray(e),t=n.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==t)),s=t?.props.children;return{mdxAdmonitionTitle:s,rest:r.length>0?(0,i.jsx)(i.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:t}}var s=t(6905),c=t(5999),a=t(5281);const d={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function l(e){let{type:n,className:t,children:o}=e;return(0,i.jsx)("div",{className:(0,s.Z)(a.k.common.admonition,a.k.common.admonitionType(n),d.admonition,t),children:o})}function h(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:d.admonitionHeading,children:[(0,i.jsx)("span",{className:d.admonitionIcon,children:n}),t]})}function u(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:d.admonitionContent,children:n}):null}function p(e){const{type:n,icon:t,title:o,children:r,className:s}=e;return(0,i.jsxs)(l,{type:n,className:s,children:[(0,i.jsx)(h,{title:o,icon:t}),(0,i.jsx)(u,{children:r})]})}function m(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,i.jsx)(m,{}),title:(0,i.jsx)(c.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,i.jsx)(p,{...f,...e,className:(0,s.Z)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,i.jsx)(x,{}),title:(0,i.jsx)(c.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,i.jsx)(p,{...j,...e,className:(0,s.Z)("alert alert--success",e.className),children:e.children})}function y(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,i.jsx)(y,{}),title:(0,i.jsx)(c.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,i.jsx)(p,{...w,...e,className:(0,s.Z)("alert alert--info",e.className),children:e.children})}function k(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,i.jsx)(k,{}),title:(0,i.jsx)(c.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function N(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const B={icon:(0,i.jsx)(N,{}),title:(0,i.jsx)(c.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const F={icon:(0,i.jsx)(k,{}),title:(0,i.jsx)(c.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Z={...{note:g,tip:v,info:b,warning:function(e){return(0,i.jsx)(p,{...C,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(p,{...B,...e,className:(0,s.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(g,{title:"secondary",...e}),important:e=>(0,i.jsx)(b,{title:"important",...e}),success:e=>(0,i.jsx)(v,{title:"success",...e}),caution:function(e){return(0,i.jsx)(p,{...F,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})}}};var D=t(5108);function H(e){const n=r(e),t=(o=n.type,Z[o]||(D.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),Z.info));var o;return(0,i.jsx)(t,{...n})}},3414:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(7294),i=t(9965),r=t(4996),s=t(5893);const c=e=>{let{alt:n,sources:t,style:c}=e;const[a,d]=(0,o.useState)(!1),l=e=>{"Escape"===e.key&&d(!1)};(0,o.useEffect)((()=>(a?document.addEventListener("keydown",l):document.removeEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)})),[a]);return(0,s.jsx)("div",{className:"zoomable-image "+(a?"fullscreen":""),onClick:()=>{d(!a)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...c},children:(0,s.jsx)(i.Z,{className:"zoomable-image-inner",alt:n,sources:{light:(0,r.Z)(t.light),dark:(0,r.Z)(t.dark)}})})}},660:(e,n,t)=>{t.r(n),t.d(n,{CH:()=>f,assets:()=>m,chCodeConfig:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>h,metadata:()=>p,toc:()=>x});t(7294);var o=t(5893),i=t(1151),r=t(9794),s=(t(9965),t(4996)),c=t(3414),a=t(2004),d=t.n(a),l=t(9047);const h={},u="Features",p={id:"guidelines/features",title:"Features",description:"When you click for New Project, you will see on the top left corner of the",source:"@site/docs/guidelines/features.mdx",sourceDirName:"guidelines",slug:"/guidelines/features",permalink:"/guidelines/features",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Component",permalink:"/guidelines/components"},next:{title:"Collection",permalink:"/guidelines/collection"}},m={},f={annotations:r.ds,Code:r.EK},g={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},x=[{value:"Import and Export",id:"import-and-export",level:3},{value:"Code",id:"code",level:3}];function j(e){const n=Object.assign({h1:"h1",p:"p",hr:"hr",h3:"h3",strong:"strong"},(0,i.ah)(),e.components);return f||y("CH",!1),f.Code||y("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,o.jsx)(n.h1,{id:"features",children:"Features"}),"\n",(0,o.jsx)("div",{style:{marginBottom:"20px"},children:(0,o.jsxs)(n.p,{children:["When you click for New Project, you will see on the top left corner of the\nscreen, some options such as ",(0,o.jsx)("strong",{children:"Import"}),", ",(0,o.jsx)("strong",{children:"Export"}),","," ","\n",(0,o.jsx)("strong",{children:"Code"})," and ",(0,o.jsx)("strong",{children:"Save"}),", as displayed in the image\nbelow:"]})}),"\n"," ","\n",(0,o.jsx)(c.Z,{alt:"Docusaurus themed image",sources:{light:(0,s.Z)("img/features.png"),dark:(0,s.Z)("img/features.png")},style:{width:"100%",maxWidth:"800px",margin:"0 auto"}}),"\n",(0,o.jsx)("div",{style:{marginBottom:"20px"},children:(0,o.jsx)(n.p,{children:"Further down, we will explain each of these options."})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"import-and-export",children:"Import and Export"}),"\n",(0,o.jsx)(n.p,{children:"Flows can be exported and imported as JSON files."}),"\n",(0,o.jsx)(l.Z,{type:"caution",children:(0,o.jsx)(n.p,{children:"Watch out for API keys being stored in local files."})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,o.jsx)(n.p,{children:"The Code button shows snippets to use your flow as a Python object or an API."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Python Code"})}),"\n",(0,o.jsx)(n.p,{children:"Through the Langflow package, you can load a flow from a JSON file and use it as a LangChain object."}),"\n",(0,o.jsx)(f.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" langflow ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" load_flow_from_json",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"flow ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" load_flow_from_json(",props:{style:{color:"#C9D1D9"}}},{content:'"path/to/flow.json"',props:{style:{color:"#A5D6FF"}}},{content:")",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# Now you can use it like any chain",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"flow(",props:{style:{color:"#C9D1D9"}}},{content:'"Hey, have you heard of Langflow?"',props:{style:{color:"#A5D6FF"}}},{content:")",props:{style:{color:"#C9D1D9"}}}]}],lang:"py"},annotations:[]}]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"API"})}),"\n",(0,o.jsx)(n.p,{children:'Once you save a flow, the API endpoint is created with your latest changes. Click the "code" button to use that flow as an API. You can post-adjust component parameters using the global variable TWEAKS.'}),"\n",(0,o.jsx)(n.p,{children:"The example below shows a Python script making a POST request to a local API endpoint, which gets a prediction based on the message input."}),"\n",(0,o.jsx)("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"center"},children:(0,o.jsx)(d(),{playing:!0,controls:!0,url:"/videos/langflow_api.mp4"})})]})}const v=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(j,e)})):j(e)};function y(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);