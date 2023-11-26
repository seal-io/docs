"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48375],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),v=r,m=d["".concat(s,".").concat(v)]||d[v]||b[v]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:2},l="Variables",o={unversionedId:"operation/variable",id:"operation/variable",title:"Variables",description:"There are several levels of variables in Walrus:",source:"@site/docs/operation/variable.md",sourceDirName:"operation",slug:"/operation/variable",permalink:"/docs/operation/variable",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/operation/variable.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Template Management",permalink:"/docs/operation/template/management"},next:{title:"Connectors",permalink:"/docs/operation/connector"}},s={},p=[{value:"View Variable List",id:"view-variable-list",level:2},{value:"Global Variables",id:"global-variables",level:3},{value:"Project Variables",id:"project-variables",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Create, Update Variables",id:"create-update-variables",level:2},{value:"Use Variables",id:"use-variables",level:2},{value:"Delete Variables",id:"delete-variables",level:2}],c={toc:p};function b(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"variables"},"Variables"),(0,r.kt)("p",null,"There are several levels of variables in Walrus:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Environment Variables: Applied to a specific environment"),(0,r.kt)("li",{parentName:"ul"},"Project Variables: Applied to a specific project"),(0,r.kt)("li",{parentName:"ul"},"Global Variables: Can be applied to all projects")),(0,r.kt)("p",null,"When variables with the same name exist at different levels, the value of the variable is used according to the following ",(0,r.kt)("strong",{parentName:"p"},"priority"),": ",(0,r.kt)("strong",{parentName:"p"},"Environment > Project > Global"),"."),(0,r.kt)("h2",{id:"view-variable-list"},"View Variable List"),(0,r.kt)("h3",{id:"global-variables"},"Global Variables"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Operation Hub")," menu in the left navigation bar."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Global Variables")," tab to manage global variables.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"var-global-list",src:a(13909).Z,width:"3012",height:"1456"})),(0,r.kt)("h3",{id:"project-variables"},"Project Variables"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Application Management")," in the left navigation bar."),(0,r.kt)("li",{parentName:"ol"},"Select the project using the project dropdown button at the top breadcrumb."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Variables")," tab to manage the variables under this project.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"var-project-list",src:a(78556).Z,width:"2876",height:"760"})),(0,r.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Application Management")," in the left navigation bar."),(0,r.kt)("li",{parentName:"ol"},"Select the project using the project dropdown button at the top breadcrumb."),(0,r.kt)("li",{parentName:"ol"},"Under the ",(0,r.kt)("inlineCode",{parentName:"li"},"Environment")," tab, click on the name of an environment to enter the environment view."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Variables")," tab to manage the variables under this environment.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"var-environment-list",src:a(5693).Z,width:"2880",height:"856"})),(0,r.kt)("h2",{id:"create-update-variables"},"Create, Update Variables"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter the variable list page."),(0,r.kt)("li",{parentName:"ol"},"Click on the \u3010New Variable\u3011button to create a variable."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Sensitive"),". If this option is enabled, the value of the variable cannot be seen after it is saved.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"var-create",src:a(53010).Z,width:"2880",height:"1464"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Edit")," operation button in the variable list to update the variable.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"var-edit",src:a(42149).Z,width:"2876",height:"1476"})),(0,r.kt)("h2",{id:"use-variables"},"Use Variables"),(0,r.kt)("p",null,"When creating or editing a service, input ",(0,r.kt)("inlineCode",{parentName:"p"},"${var.variable name}")," in the input box in the template configuration to use the corresponding variable."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"var-reference",src:a(66224).Z,width:"2878",height:"540"})),(0,r.kt)("h2",{id:"delete-variables"},"Delete Variables"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter the variable list page."),(0,r.kt)("li",{parentName:"ol"},"Select the variable to be deleted and click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Delete")," button. Confirm to delete.")))}b.isMDXComponent=!0},53010:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/op-var-create-en-63ec0a6619603b84b28b327ae4843b21.png"},42149:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/op-var-edit-en-dc23fa4e15c02008c149a5c162894498.png"},5693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/op-var-env-list-en-60faf60c4f855f732bf3e0b75b4f41be.png"},13909:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/op-var-global-list-en-a785c2939de9edc672a2e9dc6e6e59ed.png"},78556:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/op-var-proj-list-en-b2244398a1d736b28d6704a172eab155.png"},66224:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/op-var-ref-en-050062f557f0399d64cf6988b9eaec46.png"}}]);