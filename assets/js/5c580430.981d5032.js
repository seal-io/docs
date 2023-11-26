"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39152],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},v=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=c(t),d=n,b=v["".concat(s,".").concat(d)]||v[d]||u[d]||l;return t?a.createElement(b,i(i({ref:r},p),{},{components:t})):a.createElement(b,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=v;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},61350:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const l={},i="walrus variable create",o={unversionedId:"cli/variable/walrus_variable_create",id:"cli/variable/walrus_variable_create",title:"walrus variable create",description:"Create a variable.",source:"@site/docs/cli/variable/walrus_variable_create.md",sourceDirName:"cli/variable",slug:"/cli/variable/walrus_variable_create",permalink:"/docs/cli/variable/walrus_variable_create",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/cli/variable/walrus_variable_create.md",tags:[],version:"current",frontMatter:{},sidebar:"cli",previous:{title:"walrus variable",permalink:"/docs/cli/variable/walrus_variable"},next:{title:"walrus variable delete",permalink:"/docs/cli/variable/walrus_variable_delete"}},s={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"walrus-variable-create"},"walrus variable create"),(0,n.kt)("p",null,"Create a variable."),(0,n.kt)("h2",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Create a variable."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"walrus variable create [flags]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"      --description string   \n      --environment string   \n      --name string          \n      --project string       \n      --sensitive            \n      --value string         \n")),(0,n.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,n.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"walrus_variable"},"walrus variable"),"\t - Manage variables")))}u.isMDXComponent=!0}}]);