"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2690],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(h,n(n({ref:t},p),{},{components:a})):r.createElement(h,n({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var c=2;c<i;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));const i={sidebar_position:1},n="Create a Catalog on GitHub",l={unversionedId:"tutorials/catalog-on-github",id:"version-v0.3/tutorials/catalog-on-github",title:"Create a Catalog on GitHub",description:"This tutorial explains how to create a template catalog on GitHub, use the catalog to sync templates, and create services from the templates.",source:"@site/versioned_docs/version-v0.3/tutorials/catalog-on-github.md",sourceDirName:"tutorials",slug:"/tutorials/catalog-on-github",permalink:"/docs/v0.3/tutorials/catalog-on-github",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.3/tutorials/catalog-on-github.md",tags:[],version:"v0.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Tutorials",permalink:"/docs/v0.3/category/tutorials"},next:{title:"Deploy llama-2 on AWS",permalink:"/docs/v0.3/tutorials/llama2-on-aws"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the Catalog",id:"create-the-catalog",level:2},{value:"Create Template Repositories on GitHub",id:"create-template-repositories-on-github",level:3},{value:"Use the Catalog",id:"use-the-catalog",level:3},{value:"Create Services with the templates",id:"create-services-with-the-templates",level:3}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-catalog-on-github"},"Create a Catalog on GitHub"),(0,o.kt)("p",null,"This tutorial explains how to create a template catalog on GitHub, use the catalog to sync templates, and create services from the templates."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this tutorial, you will need:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A GitHub organization account"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/deploy/standalone"},"Walrus installed"))),(0,o.kt)("h2",{id:"create-the-catalog"},"Create the Catalog"),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch"},"GitHub docs")," for creating a GitHub organization."),(0,o.kt)("h3",{id:"create-template-repositories-on-github"},"Create Template Repositories on GitHub"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into GitHub, click ",(0,o.kt)("inlineCode",{parentName:"li"},"New repository")," to create a new repository."),(0,o.kt)("li",{parentName:"ol"},"Give the repository a name like ",(0,o.kt)("inlineCode",{parentName:"li"},"my-template"),"."),(0,o.kt)("li",{parentName:"ol"},"Check the ",(0,o.kt)("inlineCode",{parentName:"li"},"add a README file")," option."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Create repository"),".\n",(0,o.kt)("img",{alt:"create-template",src:a(99049).Z,width:"1918",height:"1824"})),(0,o.kt)("li",{parentName:"ol"},"Follow ",(0,o.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/tutorials/modules"},"Terraform module tutorials")," and ",(0,o.kt)("a",{parentName:"li",href:"/operation/template#variable-style-extension"},"Template extension")," to create a template and commit it to the repository.\n",(0,o.kt)("img",{alt:"template-update",src:a(21797).Z,width:"2938",height:"1670"}),"\nThe created template repository contains a v0.0.1 tagged version with main.tf, variables.tf, outputs.tf and README.md files."),(0,o.kt)("li",{parentName:"ol"},"Create other template repositories like ",(0,o.kt)("inlineCode",{parentName:"li"},"my-rds")," in the same way.\n",(0,o.kt)("img",{alt:"catalog-list",src:a(66328).Z,width:"3360",height:"1758"}))),(0,o.kt)("h3",{id:"use-the-catalog"},"Use the Catalog"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Catalog")," tab under ",(0,o.kt)("inlineCode",{parentName:"li"},"Operations Hub"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Add Catalog")," and fill in the name and source for the catalog, e.g. template-demo.\n",(0,o.kt)("img",{alt:"create-catalog",src:a(32727).Z,width:"3360",height:"1754"})),(0,o.kt)("li",{parentName:"ol"},"The my-template and my-rds templates should be available after the import task is completed.\n",(0,o.kt)("img",{alt:"catalog-list",src:a(89318).Z,width:"3344",height:"1726"}))),(0,o.kt)("h3",{id:"create-services-with-the-templates"},"Create Services with the templates"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Application Management")," and select a project and environment.\uff08If you don't have a project and environment, refer to ",(0,o.kt)("a",{parentName:"li",href:"/application/environment"},"Create an Environment"),"\uff09"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"New Service"),", choose a template from the catalog in previous step, here we choose ",(0,o.kt)("inlineCode",{parentName:"li"},"my-template"),", fill in parameters and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Check the service status until creation is complete.\n",(0,o.kt)("img",{alt:"create-service",src:a(23955).Z,width:"3360",height:"1756"}))))}m.isMDXComponent=!0},89318:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/catalog-template-us-662b7beeaba23c1f4f5fb6ae6ecdbad4.png"},32727:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-catalog-us-2e2203509d6745ee9046b1a30d910dbe.png"},23955:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-service-us-22996a05b1042ee0dec2f3863ebd405f.png"},99049:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-template-c625f31fd6fc3785e720161078e44a83.png"},66328:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/list-us-91c9d6221dabe838b745238eaf728e8d.png"},21797:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/template-update-850821841ad9e857d0240fc41f2d57f4.png"}}]);