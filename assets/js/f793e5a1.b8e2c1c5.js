"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const c={},i="walrus connector list",l={unversionedId:"cli/connector/walrus_connector_list",id:"version-v0.3/cli/connector/walrus_connector_list",title:"walrus connector list",description:"Get connectors.",source:"@site/versioned_docs/version-v0.3/cli/connector/walrus_connector_list.md",sourceDirName:"cli/connector",slug:"/cli/connector/walrus_connector_list",permalink:"/docs/v0.3/cli/connector/walrus_connector_list",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.3/cli/connector/walrus_connector_list.md",tags:[],version:"v0.3",frontMatter:{},sidebar:"cli",previous:{title:"walrus connector get",permalink:"/docs/v0.3/cli/connector/walrus_connector_get"},next:{title:"walrus connector sync-cost-data",permalink:"/docs/v0.3/cli/connector/walrus_connector_sync-cost-data"}},a={},s=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"walrus-connector-list"},"walrus connector list"),(0,o.kt)("p",null,"Get connectors."),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Get connectors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"walrus connector list [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --category string   \n      --extract strings   \n      --page int           (default 1)\n      --per-page int       (default 100)\n      --project string    \n      --query string      \n      --sort strings      \n      --type string       \n      --with-global       \n")),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"walrus_connector"},"walrus connector"),"\t - Manage connectors")))}u.isMDXComponent=!0}}]);