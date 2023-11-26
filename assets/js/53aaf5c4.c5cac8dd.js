"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5423],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),v=a,f=p["".concat(m,".").concat(v)]||p[v]||c[v]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},89873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={},i="walrus environment",l={unversionedId:"cli/environment/walrus_environment",id:"cli/environment/walrus_environment",title:"walrus environment",description:"Manage environments",source:"@site/docs/cli/environment/walrus_environment.md",sourceDirName:"cli/environment",slug:"/cli/environment/walrus_environment",permalink:"/docs/cli/environment/walrus_environment",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/cli/environment/walrus_environment.md",tags:[],version:"current",frontMatter:{},sidebar:"cli",previous:{title:"walrus connector update",permalink:"/docs/cli/connector/walrus_connector_update"},next:{title:"walrus environment clone-environment",permalink:"/docs/cli/environment/walrus_environment_clone-environment"}},m={},s=[{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"walrus-environment"},"walrus environment"),(0,a.kt)("p",null,"Manage environments"),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../walrus"},"walrus"),"\t - Command line interface for Walrus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"walrus_environment_clone-environment"},"walrus environment clone-environment"),"\t - Clone environment for an environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"walrus_environment_create"},"walrus environment create"),"\t - Create an environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"walrus_environment_delete"},"walrus environment delete"),"\t - Delete an environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"walrus_environment_get"},"walrus environment get"),"\t - Get an environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"walrus_environment_get-resource-definitions"},"walrus environment get-resource-definitions"),"\t - Get resource definitions for an environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"walrus_environment_list"},"walrus environment list"),"\t - Get environments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"walrus_environment_start"},"walrus environment start"),"\t - Start for an environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"walrus_environment_stop"},"walrus environment stop"),"\t - Stop for an environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"walrus_environment_update"},"walrus environment update"),"\t - Update an environment.")))}c.isMDXComponent=!0}}]);