"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(r),d=n,m=g["".concat(i,".").concat(d)]||g[d]||u[d]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},21416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},l="walrus catalog get",c={unversionedId:"cli/catalog/walrus_catalog_get",id:"version-v0.3/cli/catalog/walrus_catalog_get",title:"walrus catalog get",description:"Get a catalog.",source:"@site/versioned_docs/version-v0.3/cli/catalog/walrus_catalog_get.md",sourceDirName:"cli/catalog",slug:"/cli/catalog/walrus_catalog_get",permalink:"/docs/v0.3/cli/catalog/walrus_catalog_get",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.3/cli/catalog/walrus_catalog_get.md",tags:[],version:"v0.3",frontMatter:{},sidebar:"cli",previous:{title:"walrus catalog get-templates",permalink:"/docs/v0.3/cli/catalog/walrus_catalog_get-templates"},next:{title:"walrus catalog list",permalink:"/docs/v0.3/cli/catalog/walrus_catalog_list"}},i={},s=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"walrus-catalog-get"},"walrus catalog get"),(0,n.kt)("p",null,"Get a catalog."),(0,n.kt)("h2",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Get a catalog."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"walrus catalog get <catalog> [flags]\n")),(0,n.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,n.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"walrus_catalog"},"walrus catalog"),"\t - Manage catalogs")))}u.isMDXComponent=!0}}]);