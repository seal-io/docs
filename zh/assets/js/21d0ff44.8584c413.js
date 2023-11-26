"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92314],{3905:(e,r,i)=>{i.d(r,{Zo:()=>v,kt:()=>f});var t=i(67294);function n(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function s(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?s(Object(i),!0).forEach((function(r){n(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function a(e,r){if(null==e)return{};var i,t,n=function(e,r){if(null==e)return{};var i,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],r.indexOf(i)>=0||(n[i]=e[i]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=t.createContext({}),c=function(e){var r=t.useContext(l),i=r;return e&&(i="function"==typeof e?e(r):o(o({},r),e)),i},v=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var i=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,v=a(e,["components","mdxType","originalType","parentName"]),p=c(i),f=n,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||s;return i?t.createElement(m,o(o({ref:r},v),{},{components:i})):t.createElement(m,o({ref:r},v))}));function f(e,r){var i=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=p;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var c=2;c<s;c++)o[c]=i[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},34041:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(87462),n=(i(67294),i(3905));const s={},o="walrus servicerevision",a={unversionedId:"cli/servicerevision/walrus_servicerevision",id:"version-v0.3/cli/servicerevision/walrus_servicerevision",title:"walrus servicerevision",description:"Manage service revisions",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.3/cli/servicerevision/walrus_servicerevision.md",sourceDirName:"cli/servicerevision",slug:"/cli/servicerevision/walrus_servicerevision",permalink:"/docs/zh/v0.3/cli/servicerevision/walrus_servicerevision",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.3/cli/servicerevision/walrus_servicerevision.md",tags:[],version:"v0.3",frontMatter:{},sidebar:"cli",previous:{title:"walrus serviceresource log",permalink:"/docs/zh/v0.3/cli/serviceresource/walrus_serviceresource_log"},next:{title:"walrus servicerevision get-diff-latest",permalink:"/docs/zh/v0.3/cli/servicerevision/walrus_servicerevision_get-diff-latest"}},l={},c=[{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],v={toc:c};function u(e){let{components:r,...i}=e;return(0,n.kt)("wrapper",(0,t.Z)({},v,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"walrus-servicerevision"},"walrus servicerevision"),(0,n.kt)("p",null,"Manage service revisions"),(0,n.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,n.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../walrus"},"walrus"),"\t - walrus is the command line interface for Walrus"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"walrus_servicerevision_get"},"walrus servicerevision get"),"\t - Get a service revision."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"walrus_servicerevision_get-diff-latest"},"walrus servicerevision get-diff-latest"),"\t - Get diff latest for a service revision."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"walrus_servicerevision_get-diff-previous"},"walrus servicerevision get-diff-previous"),"\t - Get diff previous for a service revision."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"walrus_servicerevision_list"},"walrus servicerevision list"),"\t - Get service revisions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"walrus_servicerevision_log"},"walrus servicerevision log"),"\t - Log for a service revision.")))}u.isMDXComponent=!0}}]);