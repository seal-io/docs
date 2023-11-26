"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/"},o="Overview",c={unversionedId:"overview",id:"overview",title:"Overview",description:"Walrus is an application management platform that supports application configuration management, infrastructure orchestration, environment management and cost management (FinOps). It is designed for platform engineering teams.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/overview.md",tags:[],version:"current",frontMatter:{slug:"/"},sidebar:"docs",next:{title:"Quick Start",permalink:"/docs/quickstart"}},l={},s=[{value:"Separation of Concerns",id:"separation-of-concerns",level:3},{value:"Platform and Runtime Independence",id:"platform-and-runtime-independence",level:3},{value:"Flexible Application and Configuration Management",id:"flexible-application-and-configuration-management",level:3},{value:"Rich Open Source Ecosystem and Extensibility",id:"rich-open-source-ecosystem-and-extensibility",level:3},{value:"Architecture",id:"architecture",level:2}],p={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Walrus is an application management platform that supports application configuration management, infrastructure orchestration, environment management and cost management (FinOps). It is designed for platform engineering teams."),(0,a.kt)("p",null,"The Walrus application management platform has the following characteristics:"),(0,a.kt)("h3",{id:"separation-of-concerns"},"Separation of Concerns"),(0,a.kt)("p",null,"Platform and operations engineers bundle infrastructure capabilities into service templates, manage environments and integrations with external systems, while application developers deploy and manage application without having to worry about the complexities of infrastructure and environment setup."),(0,a.kt)("h3",{id:"platform-and-runtime-independence"},"Platform and Runtime Independence"),(0,a.kt)("p",null,"It provides a wide range of application runtimes, including both cloud-native and traditional application deployment models. It offers a consistent application deployment and management experience on any underlying infrastructure, from Kubernetes clusters, public or private clouds, or legacy data centers."),(0,a.kt)("h3",{id:"flexible-application-and-configuration-management"},"Flexible Application and Configuration Management"),(0,a.kt)("p",null,"Walrus service templates define applications at a high level. Configuration parameters can be dynamically reset based on the capabilities of the deployment environment."),(0,a.kt)("h3",{id:"rich-open-source-ecosystem-and-extensibility"},"Rich Open Source Ecosystem and Extensibility"),(0,a.kt)("p",null,"It can integrate with a variety of tools such as Terraform, Helm, and Kustomize. By reusing the rich capabilities from the open-source ecosystems of Terraform and Kubernetes, it is highly extensible to meet the diverse needs of enterprises."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"The architecture of Walrus is shown as below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"architecture",src:n(80177).Z,width:"1011",height:"481"})))}u.isMDXComponent=!0},80177:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-7f3c3c117acc2cede787aac29834a173.png"}}]);