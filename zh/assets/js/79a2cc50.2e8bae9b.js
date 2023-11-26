"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39291],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>p});var o=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function w(e,r){if(null==e)return{};var t,o,l=function(e,r){if(null==e)return{};var t,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=o.createContext({}),u=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},s=function(e){var r=u(e.components);return o.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=w(e,["components","mdxType","originalType","parentName"]),c=u(t),p=l,k=c["".concat(i,".").concat(p)]||c[p]||f[p]||a;return t?o.createElement(k,n(n({ref:r},s),{},{components:t})):o.createElement(k,n({ref:r},s))}));function p(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,n=new Array(a);n[0]=c;var w={};for(var i in r)hasOwnProperty.call(r,i)&&(w[i]=r[i]);w.originalType=e,w.mdxType="string"==typeof e?e:l,n[1]=w;for(var u=2;u<a;u++)n[u]=t[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},61095:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>n,default:()=>f,frontMatter:()=>a,metadata:()=>w,toc:()=>u});var o=t(87462),l=(t(67294),t(3905));const a={},n="walrus workflow",w={unversionedId:"cli/workflow/walrus_workflow",id:"cli/workflow/walrus_workflow",title:"walrus workflow",description:"Manage workflows",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/workflow/walrus_workflow.md",sourceDirName:"cli/workflow",slug:"/cli/workflow/walrus_workflow",permalink:"/docs/zh/cli/workflow/walrus_workflow",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/cli/workflow/walrus_workflow.md",tags:[],version:"current",frontMatter:{},sidebar:"cli",previous:{title:"walrus",permalink:"/docs/zh/cli/walrus/"},next:{title:"walrus workflow create",permalink:"/docs/zh/cli/workflow/walrus_workflow_create"}},i={},u=[{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],s={toc:u};function f(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"walrus-workflow"},"walrus workflow"),(0,l.kt)("p",null,"Manage workflows"),(0,l.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  -d, --debug           Enable debug log\n  -h, --help            Help for this command\n  -o, --output string   Output format [table, json, yaml] (default "table")\n  -v, --version         Version for CLI\n')),(0,l.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../walrus"},"walrus"),"\t - Command line interface for Walrus"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"walrus_workflow_create"},"walrus workflow create"),"\t - Create a workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"walrus_workflow_delete"},"walrus workflow delete"),"\t - Delete a workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"walrus_workflow_get"},"walrus workflow get"),"\t - Get a workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"walrus_workflow_get-latest-execution-request"},"walrus workflow get-latest-execution-request"),"\t - Get latest execution request for a workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"walrus_workflow_list"},"walrus workflow list"),"\t - Get workflows."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"walrus_workflow_run"},"walrus workflow run"),"\t - Run for a workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"walrus_workflow_update"},"walrus workflow update"),"\t - Update a workflow.")))}f.isMDXComponent=!0}}]);