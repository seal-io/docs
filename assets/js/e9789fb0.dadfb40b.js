"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56618],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=l,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={},o="walrus template list",i={unversionedId:"cli/template/walrus_template_list",id:"cli/template/walrus_template_list",title:"walrus template list",description:"Get templates.",source:"@site/docs/cli/template/walrus_template_list.md",sourceDirName:"cli/template",slug:"/cli/template/walrus_template_list",permalink:"/docs/cli/template/walrus_template_list",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/cli/template/walrus_template_list.md",tags:[],version:"current",frontMatter:{},sidebar:"cli",previous:{title:"walrus template get",permalink:"/docs/cli/template/walrus_template_get"},next:{title:"walrus template refresh",permalink:"/docs/cli/template/walrus_template_refresh"}},s={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"walrus-template-list"},"walrus template list"),(0,l.kt)("p",null,"Get templates."),(0,l.kt)("h2",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Get templates."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"walrus template list [flags]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"      --catalog-id strings   \n      --extract strings      \n      --is-service           \n      --non-catalog          \n      --page int              (default 1)\n      --per-page int          (default 100)\n      --project string       \n      --query string         \n      --sort strings         \n      --with-global          \n")),(0,l.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,l.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"walrus_template"},"walrus template"),"\t - Manage templates")))}u.isMDXComponent=!0}}]);