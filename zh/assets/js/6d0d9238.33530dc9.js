"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43852],{86264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var s=a(87462),i=(a(67294),a(3905)),m=a(26389),l=a(94891),n=(a(75190),a(47507)),r=a(24310),p=a(63303),o=(a(75035),a(85162));const c={id:"5180-c-689-f-5887720",title:"Get summary costs for costs.",description:"Get summary costs for costs.",sidebar_label:"Get summary costs for costs.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Get summary costs for costs.",operationId:"5180c689f5887720",requestBody:{content:{"application/json":{schema:{properties:{endTime:{format:"date-time",type:"string"},startTime:{format:"date-time",type:"string"}},type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{properties:{averageDailyCost:{format:"double",type:"number"},clusterCount:{type:"integer"},collectedTimeRange:{properties:{firstTime:{format:"date-time",type:"string"},lastTime:{format:"date-time",type:"string"}},type:"object"},currency:{type:"integer"},projectCount:{type:"integer"},totalCost:{format:"double",type:"number"}},type:"object"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"},default:{description:""}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["Costs"],"x-cli-ignore":!0,extensions:[{key:"x-cli-ignore",value:!0}],method:"post",path:"/v1/costs/_/summary-costs",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},jsonRequestBodyExample:{endTime:"2024-03-13T02:09:57.519Z",startTime:"2024-03-13T02:09:57.519Z"},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev","x-version-git-commit":"HEAD"},postman:{name:"Get summary costs for costs.",description:{content:"Get summary costs for costs.",type:"text/plain"},url:{path:["v1","costs","_","summary-costs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"openapi/restful-apis",custom_edit_url:null},u=void 0,d={unversionedId:"openapi/5180-c-689-f-5887720",id:"version-v0.5/openapi/5180-c-689-f-5887720",title:"Get summary costs for costs.",description:"Get summary costs for costs.",source:"@site/versioned_docs/version-v0.5/openapi/5180-c-689-f-5887720.api.mdx",sourceDirName:"openapi",slug:"/openapi/5180-c-689-f-5887720",permalink:"/docs/zh/v0.5/openapi/5180-c-689-f-5887720",draft:!1,editUrl:null,tags:[],version:"v0.5",sidebarPosition:5180,frontMatter:{id:"5180-c-689-f-5887720",title:"Get summary costs for costs.",description:"Get summary costs for costs.",sidebar_label:"Get summary costs for costs.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Get summary costs for costs.",operationId:"5180c689f5887720",requestBody:{content:{"application/json":{schema:{properties:{endTime:{format:"date-time",type:"string"},startTime:{format:"date-time",type:"string"}},type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{properties:{averageDailyCost:{format:"double",type:"number"},clusterCount:{type:"integer"},collectedTimeRange:{properties:{firstTime:{format:"date-time",type:"string"},lastTime:{format:"date-time",type:"string"}},type:"object"},currency:{type:"integer"},projectCount:{type:"integer"},totalCost:{format:"double",type:"number"}},type:"object"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"},default:{description:""}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["Costs"],"x-cli-ignore":!0,extensions:[{key:"x-cli-ignore",value:!0}],method:"post",path:"/v1/costs/_/summary-costs",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},jsonRequestBodyExample:{endTime:"2024-03-13T02:09:57.519Z",startTime:"2024-03-13T02:09:57.519Z"},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev","x-version-git-commit":"HEAD"},postman:{name:"Get summary costs for costs.",description:{content:"Get summary costs for costs.",type:"text/plain"},url:{path:["v1","costs","_","summary-costs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"openapi/restful-apis",custom_edit_url:null},sidebar:"openapi",previous:{title:"Get summary cluster costs for costs.",permalink:"/docs/zh/v0.5/openapi/bdf-194-bc-7-e-765803"},next:{title:"Get summary project costs for costs.",permalink:"/docs/zh/v0.5/openapi/e-622410597614-c-28"}},y={},g=[{value:"Get summary costs for costs.",id:"get-summary-costs-for-costs",level:2}],T={toc:g};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-summary-costs-for-costs"},"Get summary costs for costs."),(0,i.kt)("p",null,"Get summary costs for costs."),(0,i.kt)(l.Z,{mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"endTime",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"startTime",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(m.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"averageDailyCost",required:!1,schemaName:"double",qualifierMessage:void 0,schema:{format:"double",type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"clusterCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"collectedTimeRange"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"firstTime",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"lastTime",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(r.Z,{collapsible:!1,name:"currency",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"projectCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"totalCost",required:!1,schemaName:"double",qualifierMessage:void 0,schema:{format:"double",type:"number"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "averageDailyCost": 0,\n  "clusterCount": 0,\n  "collectedTimeRange": {\n    "firstTime": "2024-03-13T02:09:57.559Z",\n    "lastTime": "2024-03-13T02:09:57.559Z"\n  },\n  "currency": 0,\n  "projectCount": 0,\n  "totalCost": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:400,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Bad Request",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 400,\n  "statusText": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:401,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unauthorized",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 401,\n  "statusText": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Forbidden")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:403,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Forbidden",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 403,\n  "statusText": "Forbidden"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Not Found")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:404,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Not Found",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 404,\n  "statusText": "Not Found"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"408",value:"408",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request Timeout")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:408,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Request Timeout",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 408,\n  "statusText": "Request Timeout"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Conflict")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:409,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Conflict",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 409,\n  "statusText": "Conflict"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unsupported Media Type")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:415,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unsupported Media Type",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 415,\n  "statusText": "Unsupported Media Type"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unprocessable Entity")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:422,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unprocessable Entity",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 422,\n  "statusText": "Unprocessable Entity"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"429",value:"429",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Too Many Requests")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:429,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Too Many Requests",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 429,\n  "statusText": "Too Many Requests"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:500,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Internal Server Error",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 500,\n  "statusText": "Internal Server Error"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Service Unavailable")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:503,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Service Unavailable",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 503,\n  "statusText": "Service Unavailable"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null)))))}h.isMDXComponent=!0}}]);