"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21923],{31912:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:4},r="Resource Definitions",l={unversionedId:"operation/resource-definition",id:"operation/resource-definition",title:"Resource Definitions",description:"A resource definition specifies a new type of resource, detailing its name, type, matching rules, and schema for deployment",source:"@site/docs/operation/resource-definition.md",sourceDirName:"operation",slug:"/operation/resource-definition",permalink:"/docs/operation/resource-definition",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/operation/resource-definition.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Connectors",permalink:"/docs/operation/connector"},next:{title:"Users",permalink:"/docs/category/users"}},s={},d=[{value:"Viewing the Resource Definition List",id:"viewing-the-resource-definition-list",level:2},{value:"Viewing Resource Definition Details",id:"viewing-resource-definition-details",level:2},{value:"Creating a Resource Definition",id:"creating-a-resource-definition",level:2},{value:"Deleting a Resource Definition",id:"deleting-a-resource-definition",level:2},{value:"Resource Definition Matching Rules",id:"resource-definition-matching-rules",level:2},{value:"Selectors",id:"selectors",level:3},{value:"Rule Precedence",id:"rule-precedence",level:3},{value:"Template Configuration",id:"template-configuration",level:3},{value:"Resource Definition Schema",id:"resource-definition-schema",level:2},{value:"Customizing the UI Schema of a Resource Definition",id:"customizing-the-ui-schema-of-a-resource-definition",level:3}],c={toc:d};function u(e){let{components:i,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resource-definitions"},"Resource Definitions"),(0,a.kt)("p",null,"A resource definition specifies a new type of resource, detailing its name, type, matching rules, and schema for deployment\nand usage under certain conditions. This enables Walrus to understand and manage the lifecycle of this resource type effectively."),(0,a.kt)("h2",{id:"viewing-the-resource-definition-list"},"Viewing the Resource Definition List"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Operations")," in the left-hand sidebar."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Resource Definitions")," tab to view the list of resource definitions.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"definition-list",src:t(35100).Z,width:"3016",height:"1646"})),(0,a.kt)("h2",{id:"viewing-resource-definition-details"},"Viewing Resource Definition Details"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Operations")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Resource Definitions")," in the left-hand sidebar to access the list of resource definitions."),(0,a.kt)("li",{parentName:"ol"},"Locate the resource definition you wish to view and click on its name to open its detailed page."),(0,a.kt)("li",{parentName:"ol"},"On the resource definition details page, you can view detailed information about the resource definition, including its matching rules, inputs and outputs, UI schema, and the list of resources created using this resource definition."),(0,a.kt)("li",{parentName:"ol"},"In the list of created resources, you can manage resources by starting, stopping, deploying, deleting, etc. The list supports filtering by project name and matching rules.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"definition-detail",src:t(94237).Z,width:"3006",height:"1642"})),(0,a.kt)("h2",{id:"creating-a-resource-definition"},"Creating a Resource Definition"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"New Resource Definition")," in the list of resource definitions."),(0,a.kt)("li",{parentName:"ol"},"Complete the form. ",(0,a.kt)("inlineCode",{parentName:"li"},"Name")," serves as the identifier of the resource definition and must be unique within the system. ",(0,a.kt)("inlineCode",{parentName:"li"},"Type")," represents the type of resource, and multiple resource definitions can exist under the same ",(0,a.kt)("inlineCode",{parentName:"li"},"Type"),". ",(0,a.kt)("inlineCode",{parentName:"li"},"Matching Rules")," specifies how resources of this type align with templates under certain conditions. For more information, see ",(0,a.kt)("a",{parentName:"li",href:"#resource-definition-matching-rules"},"Resource Definition Matching Rules"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Save")," to finalize the creation.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"definition-create",src:t(61481).Z,width:"3008",height:"1638"})),(0,a.kt)("h2",{id:"deleting-a-resource-definition"},"Deleting a Resource Definition"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Operations")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Resource Definitions")," in the left-hand sidebar to view the list of resource definitions."),(0,a.kt)("li",{parentName:"ol"},"Identify the resource definition you intend to delete."),(0,a.kt)("li",{parentName:"ol"},"Before selecting the resource definition for deletion, ensure no existing resources depend on it. Then, click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Delete")," button."),(0,a.kt)("li",{parentName:"ol"},"Confirm the deletion by clicking the ",(0,a.kt)("inlineCode",{parentName:"li"},"Confirm")," button.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"definition-delete",src:t(30647).Z,width:"2990",height:"1642"})),(0,a.kt)("h2",{id:"resource-definition-matching-rules"},"Resource Definition Matching Rules"),(0,a.kt)("p",null,"The matching rules for resource definitions dictate the template and configuration used when deploying that type of\nresource."),(0,a.kt)("h3",{id:"selectors"},"Selectors"),(0,a.kt)("p",null,"A single matching rule can include multiple selectors. These selectors are based on equality, and their combination functions through a logical AND operation. A resource aligns with a matching rule if it meets all of the rule's selectors, leading to the application of the associated template and configuration during deployment."),(0,a.kt)("p",null,"For instance, a matching rule with selectors ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Name=foo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Environment Name=dev")," matches a resource in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," project's ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," environment, whereas it doesn't match a resource in the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," environment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"definition-selector",src:t(84044).Z,width:"2992",height:"1630"})),(0,a.kt)("h3",{id:"rule-precedence"},"Rule Precedence"),(0,a.kt)("p",null,"Matching rules are not required to be exclusive. That is, multiple rules can match a single resource.\nIn such scenarios, the rule with the highest priority is used. Priority is determined by the score of the selectors matched in the rule, with a higher score leading to a higher precedence. Selector scores are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Condition Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Environment Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Project Label"),(0,a.kt)("th",{parentName:"tr",align:null},"Project Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Environment Label"),(0,a.kt)("th",{parentName:"tr",align:null},"Environment Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Resource Label"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Score"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"16"),(0,a.kt)("td",{parentName:"tr",align:null},"32")))),(0,a.kt)("h3",{id:"template-configuration"},"Template Configuration"),(0,a.kt)("p",null,"Template configurations within each matching rule are applied during the deployment of\na resource following that rule. If a configuration is outlined in the resource definition schema and set by users in resource\nattributes,"),(0,a.kt)("h2",{id:"resource-definition-schema"},"Resource Definition Schema"),(0,a.kt)("p",null,"The schema (input variables and outputs) of a resource definition is generated automatically from the combined\nschema of all templates included in its matching rules."),(0,a.kt)("p",null,"For example, consider a resource definition that uses Templates A and B in its matching rules."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Template A includes inputs ",(0,a.kt)("inlineCode",{parentName:"li"},"image")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"size"),", and outputs ",(0,a.kt)("inlineCode",{parentName:"li"},"endpoint")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"status"),"."),(0,a.kt)("li",{parentName:"ul"},"Template B includes inputs ",(0,a.kt)("inlineCode",{parentName:"li"},"image")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"region"),", and outputs ",(0,a.kt)("inlineCode",{parentName:"li"},"endpoint")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"create_time"),".")),(0,a.kt)("p",null,"Consequently, the resource definition's schema will include the input ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," and the output ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoint"),"."),(0,a.kt)("h3",{id:"customizing-the-ui-schema-of-a-resource-definition"},"Customizing the UI Schema of a Resource Definition"),(0,a.kt)("p",null,"You can customize the UI schema of a resource definition. This is especially useful when you want to simplify or modify the configurations\navailable to users for resources of that type."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Access ",(0,a.kt)("inlineCode",{parentName:"li"},"Operations")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Resource Definitions")," in the left-hand sidebar to view the list of resource definitions."),(0,a.kt)("li",{parentName:"ol"},"Locate the desired resource definition and click on its name to view its details."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"UI Schema")," tab."),(0,a.kt)("li",{parentName:"ol"},"Click on the ellipsis (",(0,a.kt)("inlineCode",{parentName:"li"},"..."),") button in the top-right corner and select ",(0,a.kt)("inlineCode",{parentName:"li"},"Edit"),"."),(0,a.kt)("li",{parentName:"ol"},"Modify the schema in the UI editor as needed. You can toggle between editing and preview modes by clicking ",(0,a.kt)("inlineCode",{parentName:"li"},"Preview")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Schema"),"."),(0,a.kt)("li",{parentName:"ol"},"Save your changes by clicking ",(0,a.kt)("inlineCode",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"definition-ui-schema",src:t(75182).Z,width:"2978",height:"1634"})))}u.isMDXComponent=!0},61481:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/op-definition-create-en-470f4098d30e41af1b187f373e6c5a7a.png"},30647:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/op-definition-del-en-2f93dd209f8dc8d0a943aa94a995f69d.png"},94237:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/op-definition-detail-en-5feb00c081d790892391a3f7f8558e2f.png"},35100:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/op-definition-list-en-c731c9052cc67ae9d07dadde8d2d6ad6.png"},84044:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/op-definition-selector-en-feba8437c7b6d65517a66baa126bd8f6.png"},75182:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/op-definition-ui-schema-en-6f219f6fb31dd8f275a92ec83dbc9a3a.png"}}]);