"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5771],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),a=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=a(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),v=a(t),d=s,m=v["".concat(l,".").concat(d)]||v[d]||p[d]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function d(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=v;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:s,i[1]=c;for(var a=2;a<o;a++)i[a]=t[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5558:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=t(87462),s=(t(67294),t(3905));const o={},i="walrus serviceresource list",c={unversionedId:"cli/serviceresource/walrus_serviceresource_list",id:"version-v0.3/cli/serviceresource/walrus_serviceresource_list",title:"walrus serviceresource list",description:"Get service resources.",source:"@site/versioned_docs/version-v0.3/cli/serviceresource/walrus_serviceresource_list.md",sourceDirName:"cli/serviceresource",slug:"/cli/serviceresource/walrus_serviceresource_list",permalink:"/docs/v0.3/cli/serviceresource/walrus_serviceresource_list",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.3/cli/serviceresource/walrus_serviceresource_list.md",tags:[],version:"v0.3",frontMatter:{},sidebar:"cli",previous:{title:"walrus serviceresource get-keys",permalink:"/docs/v0.3/cli/serviceresource/walrus_serviceresource_get-keys"},next:{title:"walrus serviceresource log",permalink:"/docs/v0.3/cli/serviceresource/walrus_serviceresource_log"}},l={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],u={toc:a};function p(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"walrus-serviceresource-list"},"walrus serviceresource list"),(0,s.kt)("p",null,"Get service resources."),(0,s.kt)("h2",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"Get service resources that belongs to an environment of a project."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"walrus serviceresource list <service> [flags]\n")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"      --extract strings   \n      --page int           (default 1)\n      --per-page int       (default 100)\n      --query string      \n      --sort strings      \n      --without-keys      \n")),(0,s.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,s.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"walrus_serviceresource"},"walrus serviceresource"),"\t - Manage service resources")))}p.isMDXComponent=!0}}]);