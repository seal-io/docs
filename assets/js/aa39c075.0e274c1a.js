"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71710],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),f=n,v=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return t?a.createElement(v,i(i({ref:r},u),{},{components:t})):a.createElement(v,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41913:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const l={sidebar_position:1},i="walrus",o={unversionedId:"cli/walrus",id:"version-v0.3/cli/walrus",title:"walrus",description:"walrus is the command line interface for Walrus",source:"@site/versioned_docs/version-v0.3/cli/walrus.md",sourceDirName:"cli",slug:"/cli/walrus",permalink:"/docs/v0.3/cli/walrus",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.3/cli/walrus.md",tags:[],version:"v0.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"cli",previous:{title:"CLI Docs",permalink:"/docs/v0.3/category/cli"},next:{title:"walrus catalog",permalink:"/docs/v0.3/cli/catalog/walrus_catalog"}},s={},c=[{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"SEE ALSO",id:"see-also",level:2}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"walrus"},"walrus"),(0,n.kt)("p",null,"walrus is the command line interface for Walrus"),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\n  # Setup Walrus CLI configuration\n  $ walrus config setup\n\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,n.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"catalog/walrus_catalog"},"walrus catalog"),"\t - Manage catalogs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"config/walrus_config"},"walrus config"),"\t - Manage CLI configuration"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"connector/walrus_connector"},"walrus connector"),"\t - Manage connectors"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"environment/walrus_environment"},"walrus environment"),"\t - Manage environments"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"perspective/walrus_perspective"},"walrus perspective"),"\t - Manage perspectives"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"project/walrus_project"},"walrus project"),"\t - Manage projects"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"projectsubject/walrus_projectsubject"},"walrus projectsubject"),"\t - Manage project subjects"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"role/walrus_role"},"walrus role"),"\t - Manage roles"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"service/walrus_service"},"walrus service"),"\t - Manage services"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"serviceresource/walrus_serviceresource"},"walrus serviceresource"),"\t - Manage service resources"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"servicerevision/walrus_servicerevision"},"walrus servicerevision"),"\t - Manage service revisions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"setting/walrus_setting"},"walrus setting"),"\t - Manage settings"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"template/walrus_template"},"walrus template"),"\t - Manage templates"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"variable/walrus_variable"},"walrus variable"),"\t - Manage variables")))}p.isMDXComponent=!0}}]);