"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84871],{55403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),l=a(94891),n=(a(75190),a(47507)),p=a(24310),m=a(63303),o=(a(75035),a(85162));const c={id:"5-ecf-8-ed-8-ff-05-f-50-e",title:"Get cost reports for costs.",description:"Get cost reports for costs.",sidebar_label:"Get cost reports for costs.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Get cost reports for costs.",operationId:"5ecf8ed8ff05f50e",requestBody:{content:{"application/json":{schema:{properties:{endTime:{format:"date-time",type:"string"},filters:{items:{items:{properties:{fieldName:{type:"string"},includeAll:{type:"boolean"},operator:{type:"string"},values:{items:{type:"string"},type:"array"}},type:"object"},type:"array"},type:"array"},groupBy:{type:"string"},paging:{properties:{page:{type:"integer"},perPage:{type:"integer"}},type:"object"},query:{type:"string"},sharedOptions:{properties:{idle:{properties:{sharingStrategy:{type:"string"}},type:"object"},item:{items:{properties:{filters:{items:{items:{properties:{fieldName:{type:"string"},includeAll:{type:"boolean"},operator:{type:"string"},values:{items:{type:"string"},type:"array"}},type:"object",title:"Cost.FilterRule.json"},type:"array"},type:"array"},sharingStrategy:{type:"string"}},type:"object"},type:"array"},management:{properties:{sharingStrategy:{type:"string"}},type:"object"}},type:"object"},startTime:{format:"date-time",type:"string"},step:{type:"string"}},required:["query"],type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{properties:{items:{type:"object"},pagination:{properties:{nextPage:{type:"integer"},page:{type:"integer"},partial:{type:"boolean"},perPage:{type:"integer"},total:{type:"integer"},totalPage:{type:"integer"}},required:["page","perPage","total","totalPage","partial"],type:"object"},type:{type:"string"}},required:["items"],type:"object"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"},default:{description:""}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["Costs"],"x-cli-ignore":!0,extensions:[{key:"x-cli-ignore",value:!0}],method:"post",path:"/v1/costs/_/cost-reports",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},jsonRequestBodyExample:{endTime:"2024-03-13T02:09:57.518Z",filters:[[{fieldName:"string",includeAll:!0,operator:"string",values:["string"]}]],groupBy:"string",paging:{page:0,perPage:0},query:"string",sharedOptions:{idle:{sharingStrategy:"string"},item:[{filters:[[{fieldName:"string",includeAll:!0,operator:"string",values:["string"]}]],sharingStrategy:"string"}],management:{sharingStrategy:"string"}},startTime:"2024-03-13T02:09:57.519Z",step:"string"},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev","x-version-git-commit":"HEAD"},postman:{name:"Get cost reports for costs.",description:{content:"Get cost reports for costs.",type:"text/plain"},url:{path:["v1","costs","_","cost-reports"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"openapi/restful-apis",custom_edit_url:null},d=void 0,y={unversionedId:"openapi/5-ecf-8-ed-8-ff-05-f-50-e",id:"version-v0.5/openapi/5-ecf-8-ed-8-ff-05-f-50-e",title:"Get cost reports for costs.",description:"Get cost reports for costs.",source:"@site/versioned_docs/version-v0.5/openapi/5-ecf-8-ed-8-ff-05-f-50-e.api.mdx",sourceDirName:"openapi",slug:"/openapi/5-ecf-8-ed-8-ff-05-f-50-e",permalink:"/docs/zh/v0.5/openapi/5-ecf-8-ed-8-ff-05-f-50-e",draft:!1,editUrl:null,tags:[],version:"v0.5",sidebarPosition:5,frontMatter:{id:"5-ecf-8-ed-8-ff-05-f-50-e",title:"Get cost reports for costs.",description:"Get cost reports for costs.",sidebar_label:"Get cost reports for costs.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Get cost reports for costs.",operationId:"5ecf8ed8ff05f50e",requestBody:{content:{"application/json":{schema:{properties:{endTime:{format:"date-time",type:"string"},filters:{items:{items:{properties:{fieldName:{type:"string"},includeAll:{type:"boolean"},operator:{type:"string"},values:{items:{type:"string"},type:"array"}},type:"object"},type:"array"},type:"array"},groupBy:{type:"string"},paging:{properties:{page:{type:"integer"},perPage:{type:"integer"}},type:"object"},query:{type:"string"},sharedOptions:{properties:{idle:{properties:{sharingStrategy:{type:"string"}},type:"object"},item:{items:{properties:{filters:{items:{items:{properties:{fieldName:{type:"string"},includeAll:{type:"boolean"},operator:{type:"string"},values:{items:{type:"string"},type:"array"}},type:"object",title:"Cost.FilterRule.json"},type:"array"},type:"array"},sharingStrategy:{type:"string"}},type:"object"},type:"array"},management:{properties:{sharingStrategy:{type:"string"}},type:"object"}},type:"object"},startTime:{format:"date-time",type:"string"},step:{type:"string"}},required:["query"],type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{properties:{items:{type:"object"},pagination:{properties:{nextPage:{type:"integer"},page:{type:"integer"},partial:{type:"boolean"},perPage:{type:"integer"},total:{type:"integer"},totalPage:{type:"integer"}},required:["page","perPage","total","totalPage","partial"],type:"object"},type:{type:"string"}},required:["items"],type:"object"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"},default:{description:""}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["Costs"],"x-cli-ignore":!0,extensions:[{key:"x-cli-ignore",value:!0}],method:"post",path:"/v1/costs/_/cost-reports",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},jsonRequestBodyExample:{endTime:"2024-03-13T02:09:57.518Z",filters:[[{fieldName:"string",includeAll:!0,operator:"string",values:["string"]}]],groupBy:"string",paging:{page:0,perPage:0},query:"string",sharedOptions:{idle:{sharingStrategy:"string"},item:[{filters:[[{fieldName:"string",includeAll:!0,operator:"string",values:["string"]}]],sharingStrategy:"string"}],management:{sharingStrategy:"string"}},startTime:"2024-03-13T02:09:57.519Z",step:"string"},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev","x-version-git-commit":"HEAD"},postman:{name:"Get cost reports for costs.",description:{content:"Get cost reports for costs.",type:"text/plain"},url:{path:["v1","costs","_","cost-reports"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"openapi/restful-apis",custom_edit_url:null},sidebar:"openapi",previous:{title:"Sync cost data for a connector of a project.",permalink:"/docs/zh/v0.5/openapi/e-5-a-2-d-2303-aac-7662"},next:{title:"Get summary cluster costs for costs.",permalink:"/docs/zh/v0.5/openapi/bdf-194-bc-7-e-765803"}},u={},g=[{value:"Get cost reports for costs.",id:"get-cost-reports-for-costs",level:2}],h={toc:g};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-cost-reports-for-costs"},"Get cost reports for costs."),(0,i.kt)("p",null,"Get cost reports for costs."),(0,i.kt)(l.Z,{mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"endTime",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"filters",required:!1,schemaName:"array[]",qualifierMessage:void 0,schema:{items:{items:{properties:{fieldName:{type:"string"},includeAll:{type:"boolean"},operator:{type:"string"},values:{items:{type:"string"},type:"array"}},type:"object"},type:"array"},type:"array"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"groupBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"paging"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"page",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"perPage",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"query",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"sharedOptions"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"idle"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"sharingStrategy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"item"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"filters",required:!1,schemaName:"array[]",qualifierMessage:void 0,schema:{items:{items:{properties:{fieldName:{type:"string"},includeAll:{type:"boolean"},operator:{type:"string"},values:{items:{type:"string"},type:"array"}},type:"object",title:"Cost.FilterRule.json"},type:"array"},type:"array"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"sharingStrategy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"management"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"sharingStrategy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(p.Z,{collapsible:!1,name:"startTime",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"step",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"items",required:!0,schemaName:"object",qualifierMessage:void 0,schema:{type:"object"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"pagination"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"nextPage",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"page",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"partial",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"perPage",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"total",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"totalPage",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "items": {},\n  "pagination": {\n    "nextPage": 0,\n    "page": 0,\n    "partial": true,\n    "perPage": 0,\n    "total": 0,\n    "totalPage": 0\n  },\n  "type": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:400,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Bad Request",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 400,\n  "statusText": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:401,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unauthorized",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 401,\n  "statusText": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Forbidden")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:403,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Forbidden",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 403,\n  "statusText": "Forbidden"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Not Found")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:404,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Not Found",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 404,\n  "statusText": "Not Found"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"408",value:"408",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request Timeout")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:408,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Request Timeout",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 408,\n  "statusText": "Request Timeout"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Conflict")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:409,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Conflict",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 409,\n  "statusText": "Conflict"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unsupported Media Type")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:415,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unsupported Media Type",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 415,\n  "statusText": "Unsupported Media Type"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unprocessable Entity")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:422,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unprocessable Entity",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 422,\n  "statusText": "Unprocessable Entity"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"429",value:"429",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Too Many Requests")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:429,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Too Many Requests",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 429,\n  "statusText": "Too Many Requests"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:500,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Internal Server Error",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 500,\n  "statusText": "Internal Server Error"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Service Unavailable")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:503,type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Service Unavailable",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 503,\n  "statusText": "Service Unavailable"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null)))))}f.isMDXComponent=!0}}]);