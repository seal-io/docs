"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<c;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const c={},a="walrus connector sync-cost-data",s={unversionedId:"cli/connector/walrus_connector_sync-cost-data",id:"version-v0.3/cli/connector/walrus_connector_sync-cost-data",title:"walrus connector sync-cost-data",description:"Sync cost data for a connector.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.3/cli/connector/walrus_connector_sync-cost-data.md",sourceDirName:"cli/connector",slug:"/cli/connector/walrus_connector_sync-cost-data",permalink:"/docs/zh/v0.3/cli/connector/walrus_connector_sync-cost-data",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.3/cli/connector/walrus_connector_sync-cost-data.md",tags:[],version:"v0.3",frontMatter:{},sidebar:"cli",previous:{title:"walrus connector list",permalink:"/docs/zh/v0.3/cli/connector/walrus_connector_list"},next:{title:"walrus connector update",permalink:"/docs/zh/v0.3/cli/connector/walrus_connector_update"}},l={},i=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"walrus-connector-sync-cost-data"},"walrus connector sync-cost-data"),(0,o.kt)("p",null,"Sync cost data for a connector."),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Sync cost data for a connector."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"walrus connector sync-cost-data <connector> [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --project string   \n")),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"walrus_connector"},"walrus connector"),"\t - Manage connectors")))}u.isMDXComponent=!0}}]);