"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47674],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=c(t),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},86962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:4},i="Dependency Graph",p={unversionedId:"application/graph",id:"application/graph",title:"Dependency Graph",description:"You can view the topology of deployed services and resources through the dependency graph. Walrus provides dependency graphs at two levels: environment and service/resource.",source:"@site/docs/application/graph.md",sourceDirName:"application",slug:"/application/graph",permalink:"/docs/application/graph",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/application/graph.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Services and Resources",permalink:"/docs/application/service-and-resource"},next:{title:"Workflows",permalink:"/docs/application/workflow"}},l={},c=[{value:"Environment Dependency Graph",id:"environment-dependency-graph",level:2},{value:"Service/Resource Dependency Graph",id:"serviceresource-dependency-graph",level:2},{value:"Dependency Graph Node Relations",id:"dependency-graph-node-relations",level:2},{value:"Graph Toolbar",id:"graph-toolbar",level:2},{value:"View Component Logs",id:"view-component-logs",level:2},{value:"Access Component Terminal",id:"access-component-terminal",level:2}],s={toc:c};function d(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dependency-graph"},"Dependency Graph"),(0,a.kt)("p",null,"You can view the topology of deployed services and resources through the dependency graph. Walrus provides dependency graphs at two levels: environment and service/resource."),(0,a.kt)("h2",{id:"environment-dependency-graph"},"Environment Dependency Graph"),(0,a.kt)("p",null,"The environment dependency graph includes all services and resources in the environment, as well as their relationships and deployment status."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Application Management")," in the left navigation bar to enter the project and environment."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Dependency Graph")," tab to view the environment dependency graph.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Note: In the dependency graph, sub-nodes that are "implemented" and "inherited" are hidden by default. They can be expanded by clicking on the "Show Sub-resources" icon in the toolbar.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"environment-graph",src:t(96999).Z,width:"2872",height:"1644"})),(0,a.kt)("h2",{id:"serviceresource-dependency-graph"},"Service/Resource Dependency Graph"),(0,a.kt)("p",null,"The service/resource dependency graph displays all components under the service or resource, as well as their relationships and deployment status."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Application Management")," in the left navigation bar, enter the project and environment, and go to the service or resource detail page."),(0,a.kt)("li",{parentName:"ol"},"Under the ",(0,a.kt)("inlineCode",{parentName:"li"},"Components")," tab of component information, click the icon on the right to switch to the graph view.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"service-graph",src:t(45118).Z,width:"3310",height:"1232"})),(0,a.kt)("h2",{id:"dependency-graph-node-relations"},"Dependency Graph Node Relations"),(0,a.kt)("p",null,"The relationships between nodes in the dependency graph can be divided into three categories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Composition: A component relationship, represented by a solid line and a diamond arrow"),(0,a.kt)("li",{parentName:"ul"},"Dependency: Denotes dependency, represented by a dashed line and a V-shaped arrow"),(0,a.kt)("li",{parentName:"ul"},"Realization: Realization or inheritance, represented by a dotted line and a triangular arrow")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"graph-legend",src:t(2308).Z,width:"776",height:"66"})),(0,a.kt)("h2",{id:"graph-toolbar"},"Graph Toolbar"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"View to scale"),(0,a.kt)("li",{parentName:"ul"},"Refresh view"),(0,a.kt)("li",{parentName:"ul"},"Full screen view"),(0,a.kt)("li",{parentName:"ul"},"Toggle display or hide sub-nodes")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"graph-toolbar",src:t(68172).Z,width:"3190",height:"626"})),(0,a.kt)("h2",{id:"view-component-logs"},"View Component Logs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the dependency graph, select a node that can perform log operations, click the icon in the upper left corner of the node square, and then click ",(0,a.kt)("inlineCode",{parentName:"li"},"Log"),"."),(0,a.kt)("li",{parentName:"ol"},"You can adjust the size of the log window as needed by stretching it up and down.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"graph-log",src:t(22056).Z,width:"2880",height:"1476"})),(0,a.kt)("h2",{id:"access-component-terminal"},"Access Component Terminal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the dependency graph, select a node that can perform terminal operations, click the icon in the upper left corner of the node square, and then click ",(0,a.kt)("inlineCode",{parentName:"li"},"Terminal"),"."),(0,a.kt)("li",{parentName:"ol"},"You can adjust the size of the terminal window as needed by stretching it up and down.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"graph-exec",src:t(20266).Z,width:"2876",height:"1380"})))}d.isMDXComponent=!0},96999:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/app-graph-env-en-e6572f00a5ef88b2b985e8c238827f71.png"},20266:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/app-graph-exec-en-d3e60e26c8083021003fd8d6d157bee6.png"},2308:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/app-graph-legend-en-af9cea4b93534fc55af827e1368ea1af.png"},22056:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/app-graph-log-en-549b3789cbf7f47ab76003325c1f88ba.png"},45118:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/app-graph-svc-en-0c054224aa5a7276e15d547842b70cbb.png"},68172:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/app-graph-toolbar-en-14909546986225559a8b328a5d5e4476.png"}}]);