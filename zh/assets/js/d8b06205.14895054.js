"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21769],{4285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var s=a(87462),n=(a(67294),a(3905)),i=a(26389),l=a(94891),r=a(75190),p=a(47507),m=a(24310),o=a(63303),u=(a(75035),a(85162));const c={id:"8-aaa-0-d-672-da-82675",title:"Rerun request for a workflow execution that belongs to a project.",description:"Rerun request for a workflow execution that belongs to a project.",sidebar_label:"Rerun request for a workflow execution that belongs to a project.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Rerun request for a workflow execution that belongs to a project.",operationId:"8aaa0d672da82675",parameters:[{in:"path",name:"project",required:!0,schema:{type:"string"}},{in:"path",name:"workflow",required:!0,schema:{type:"string"}},{in:"path",name:"workflowexecution",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:200,type:"integer"},statusText:{default:"OK",type:"string"}},type:"object"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"},default:{description:""}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["WorkflowExecutions"],"x-cli-operation-name":"rerun-request",extensions:[{key:"x-cli-operation-name",value:"rerun-request"}],method:"put",path:"/v1/projects/{project}/workflows/{workflow}/executions/{workflowexecution}/rerun",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev","x-version-git-commit":"HEAD"},postman:{name:"Rerun request for a workflow execution.",description:{content:"Rerun request for a workflow execution that belongs to a project.",type:"text/plain"},url:{path:["v1","projects",":project","workflows",":workflow","executions",":workflowexecution","rerun"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"project"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflow"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflowexecution"}]},header:[{key:"Accept",value:"application/json"}],method:"PUT",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"put api-method",info_path:"openapi/restful-apis",custom_edit_url:null},d=void 0,y={unversionedId:"openapi/8-aaa-0-d-672-da-82675",id:"openapi/8-aaa-0-d-672-da-82675",title:"Rerun request for a workflow execution that belongs to a project.",description:"Rerun request for a workflow execution that belongs to a project.",source:"@site/docs/openapi/8-aaa-0-d-672-da-82675.api.mdx",sourceDirName:"openapi",slug:"/openapi/8-aaa-0-d-672-da-82675",permalink:"/docs/zh/openapi/8-aaa-0-d-672-da-82675",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"8-aaa-0-d-672-da-82675",title:"Rerun request for a workflow execution that belongs to a project.",description:"Rerun request for a workflow execution that belongs to a project.",sidebar_label:"Rerun request for a workflow execution that belongs to a project.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Rerun request for a workflow execution that belongs to a project.",operationId:"8aaa0d672da82675",parameters:[{in:"path",name:"project",required:!0,schema:{type:"string"}},{in:"path",name:"workflow",required:!0,schema:{type:"string"}},{in:"path",name:"workflowexecution",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:200,type:"integer"},statusText:{default:"OK",type:"string"}},type:"object"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"},default:{description:""}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["WorkflowExecutions"],"x-cli-operation-name":"rerun-request",extensions:[{key:"x-cli-operation-name",value:"rerun-request"}],method:"put",path:"/v1/projects/{project}/workflows/{workflow}/executions/{workflowexecution}/rerun",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev","x-version-git-commit":"HEAD"},postman:{name:"Rerun request for a workflow execution.",description:{content:"Rerun request for a workflow execution that belongs to a project.",type:"text/plain"},url:{path:["v1","projects",":project","workflows",":workflow","executions",":workflowexecution","rerun"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"project"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflow"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflowexecution"}]},header:[{key:"Accept",value:"application/json"}],method:"PUT",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"put api-method",info_path:"openapi/restful-apis",custom_edit_url:null},sidebar:"openapi",previous:{title:"Get a workflow execution that belongs to a project.",permalink:"/docs/zh/openapi/6589657393-b-095-cd"},next:{title:"Stop request for a workflow execution that belongs to a project.",permalink:"/docs/zh/openapi/371101-c-1-b-6-cd-6-f-75"}},g={},h=[{value:"Rerun request for a workflow execution.",id:"rerun-request-for-a-workflow-execution",level:2}],k={toc:h};function x(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"rerun-request-for-a-workflow-execution"},"Rerun request for a workflow execution."),(0,n.kt)("p",null,"Rerun request for a workflow execution that belongs to a project."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"project",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"workflow",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"workflowexecution",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:200,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"OK",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 200,\n  "statusText": "OK"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad Request")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:400,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Bad Request",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 400,\n  "statusText": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unauthorized")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:401,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unauthorized",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 401,\n  "statusText": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Forbidden")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:403,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Forbidden",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 403,\n  "statusText": "Forbidden"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Not Found")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:404,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Not Found",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 404,\n  "statusText": "Not Found"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"408",value:"408",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request Timeout")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:408,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Request Timeout",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 408,\n  "statusText": "Request Timeout"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Conflict")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:409,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Conflict",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 409,\n  "statusText": "Conflict"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unsupported Media Type")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:415,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unsupported Media Type",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 415,\n  "statusText": "Unsupported Media Type"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unprocessable Entity")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:422,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unprocessable Entity",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 422,\n  "statusText": "Unprocessable Entity"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"429",value:"429",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Too Many Requests")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:429,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Too Many Requests",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 429,\n  "statusText": "Too Many Requests"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Internal Server Error")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:500,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Internal Server Error",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 500,\n  "statusText": "Internal Server Error"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Service Unavailable")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:503,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Service Unavailable",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 503,\n  "statusText": "Service Unavailable"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,n.kt)("div",null),(0,n.kt)("div",null)))))}x.isMDXComponent=!0}}]);