"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39576],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),v=i,f=d["".concat(l,".").concat(v)]||d[v]||u[v]||a;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88412:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const a={},o="walrus service upgrade",s={unversionedId:"cli/service/walrus_service_upgrade",id:"version-v0.3/cli/service/walrus_service_upgrade",title:"walrus service upgrade",description:"Upgrade for a service.",source:"@site/versioned_docs/version-v0.3/cli/service/walrus_service_upgrade.md",sourceDirName:"cli/service",slug:"/cli/service/walrus_service_upgrade",permalink:"/docs/v0.3/cli/service/walrus_service_upgrade",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.3/cli/service/walrus_service_upgrade.md",tags:[],version:"v0.3",frontMatter:{},sidebar:"cli",previous:{title:"walrus service rollback",permalink:"/docs/v0.3/cli/service/walrus_service_rollback"},next:{title:"walrus serviceresource",permalink:"/docs/v0.3/cli/serviceresource/walrus_serviceresource"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"walrus-service-upgrade"},"walrus service upgrade"),(0,i.kt)("p",null,"Upgrade for a service."),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Upgrade for a service of an environment that belongs to a project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"walrus service upgrade <service> [flags]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --attributes json          (default {}...)\n      --description string      \n      --labels stringToString    (default [])\n      --remark-tags strings     \n      --template json            (default {}...)\n")),(0,i.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,i.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"walrus_service"},"walrus service"),"\t - Manage services")))}u.isMDXComponent=!0}}]);