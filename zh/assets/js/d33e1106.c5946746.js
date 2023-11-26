"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49983],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var a=r.createContext({}),c=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(a.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,s=t.originalType,a=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(a,".").concat(g)]||d[g]||p[g]||s;return n?r.createElement(m,l(l({ref:e},u),{},{components:n})):r.createElement(m,l({ref:e},u))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var a in e)hasOwnProperty.call(e,a)&&(o[a]=e[a]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34881:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const s={},l="walrus setting list",o={unversionedId:"cli/setting/walrus_setting_list",id:"cli/setting/walrus_setting_list",title:"walrus setting list",description:"Get settings.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/setting/walrus_setting_list.md",sourceDirName:"cli/setting",slug:"/cli/setting/walrus_setting_list",permalink:"/docs/zh/cli/setting/walrus_setting_list",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/cli/setting/walrus_setting_list.md",tags:[],version:"current",frontMatter:{},sidebar:"cli",previous:{title:"walrus setting get",permalink:"/docs/zh/cli/setting/walrus_setting_get"},next:{title:"walrus setting update",permalink:"/docs/zh/cli/setting/walrus_setting_update"}},a={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"walrus-setting-list"},"walrus setting list"),(0,i.kt)("p",null,"Get settings."),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Get settings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"walrus setting list [flags]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --extract strings   \n      --id strings        \n      --name strings      \n      --page int           (default 1)\n      --per-page int       (default 100)\n      --query string      \n      --sort strings      \n")),(0,i.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,i.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"walrus_setting"},"walrus setting"),"\t - Manage settings")))}p.isMDXComponent=!0}}]);