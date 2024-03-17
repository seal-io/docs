"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11415],{57557:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>b,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=t(87462),l=(t(67294),t(3905));const n={sidebar_position:2},r="Variables",o={unversionedId:"operation/variable",id:"version-v0.5/operation/variable",title:"Variables",description:"There are several levels of variables in Walrus:",source:"@site/versioned_docs/version-v0.5/operation/variable.md",sourceDirName:"operation",slug:"/operation/variable",permalink:"/docs/v0.5/operation/variable",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.5/operation/variable.md",tags:[],version:"v0.5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Template Management",permalink:"/docs/v0.5/operation/template/management"},next:{title:"Connectors",permalink:"/docs/v0.5/operation/connector"}},s={},p=[{value:"View Variable List",id:"view-variable-list",level:2},{value:"Global Variables",id:"global-variables",level:3},{value:"Project Variables",id:"project-variables",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Create, Update Variables",id:"create-update-variables",level:2},{value:"Use Variables",id:"use-variables",level:2},{value:"Delete Variables",id:"delete-variables",level:2}],d={toc:p};function b(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"variables"},"Variables"),(0,l.kt)("p",null,"There are several levels of variables in Walrus:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Environment Variables"),": Applied to a specific environment."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Project Variables"),": Applied to a specific project."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Global Variables"),": Can be applied to all projects.")),(0,l.kt)("p",null,"When variables with the same name exist at different levels, the value of the variable is used according to the following ",(0,l.kt)("strong",{parentName:"p"},"priority"),": ",(0,l.kt)("strong",{parentName:"p"},"Environment > Project > Global"),"."),(0,l.kt)("h2",{id:"view-variable-list"},"View Variable List"),(0,l.kt)("h3",{id:"global-variables"},"Global Variables"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Operations")," menu in the left navigation bar."),(0,l.kt)("li",{parentName:"ol"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Global Variables")," tab to manage global variables.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"var-global-list",src:t(38720).Z,width:"3102",height:"1692"})),(0,l.kt)("h3",{id:"project-variables"},"Project Variables"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Applications")," in the left navigation bar."),(0,l.kt)("li",{parentName:"ol"},"Select the project using the project dropdown button at the top breadcrumb."),(0,l.kt)("li",{parentName:"ol"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Variables")," tab to manage the variables under this project.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"var-project-list",src:t(74197).Z,width:"3100",height:"1682"})),(0,l.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Applications")," in the left navigation bar."),(0,l.kt)("li",{parentName:"ol"},"Select the project using the project dropdown button at the top breadcrumb."),(0,l.kt)("li",{parentName:"ol"},"Under the ",(0,l.kt)("inlineCode",{parentName:"li"},"Environments")," tab, click on the name of an environment to enter the environment view."),(0,l.kt)("li",{parentName:"ol"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Variables")," tab to manage the variables under this environment.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"var-environment-list",src:t(21418).Z,width:"3106",height:"1680"})),(0,l.kt)("h2",{id:"create-update-variables"},"Create, Update Variables"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Enter the variable list page."),(0,l.kt)("li",{parentName:"ol"},"Click on the \u3010New Variable\u3011button to create a variable."),(0,l.kt)("li",{parentName:"ol"},"Select ",(0,l.kt)("inlineCode",{parentName:"li"},"Sensitive"),". If this option is enabled, the value of the variable cannot be seen after it is saved.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"var-create",src:t(23149).Z,width:"3096",height:"1672"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Edit")," operation button in the variable list to update the variable.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"var-edit",src:t(25794).Z,width:"3102",height:"1674"})),(0,l.kt)("h2",{id:"use-variables"},"Use Variables"),(0,l.kt)("p",null,"When creating or editing a resource, input ",(0,l.kt)("inlineCode",{parentName:"p"},"${var.variable_name}")," in the input box in the template configuration to use the corresponding variable."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"var-reference",src:t(57374).Z,width:"1684",height:"952"})),(0,l.kt)("h2",{id:"delete-variables"},"Delete Variables"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Enter the variable list page."),(0,l.kt)("li",{parentName:"ol"},"Select the variable to be deleted and click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Delete")," button. Confirm to delete.")))}b.isMDXComponent=!0},23149:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/op-var-create-en-0e1bb098d2ede382fe2ce148760fa6b6.png"},25794:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/op-var-edit-en-4a02342c714b68474b38960c3c057942.png"},21418:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/op-var-env-list-en-5ffed065c3080fdca88fc07377205e7a.png"},38720:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/op-var-global-list-en-85a34a9eafaeed46714c8cf5392b8ce9.png"},74197:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/op-var-proj-list-en-91d1caee4a8dc16b84782706ff4dbd71.png"},57374:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/op-var-ref-en-27993afc19c1dd8c4dab2675d4bc0109.png"}}]);