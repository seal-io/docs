"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36984],{29859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var s=a(87462),n=(a(67294),a(3905)),i=a(26389),l=a(94891),r=a(75190),m=a(47507),p=a(24310),o=a(63303),c=(a(75035),a(85162));const d={id:"c-7-ee-6-c-2927339734",title:"Get repository branches for a connector.",description:"Get repository branches for a connector.",sidebar_label:"Get repository branches for a connector.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Get repository branches for a connector.",operationId:"c7ee6c2927339734",parameters:[{in:"path",name:"connector",required:!0,schema:{type:"string"}},{in:"query",name:"repository",required:!0,schema:{type:"string"}},{in:"query",name:"perPage",schema:{default:10,type:"integer"}},{in:"query",name:"page",schema:{default:1,type:"integer"}},{in:"query",name:"query",schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{items:{type:"object"},type:"array"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["Connectors"],"x-cli-ignore":!0,extensions:[{key:"x-cli-ignore",value:!0}],method:"get",path:"/v1/connectors/{connector}/repository-branches",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev"},postman:{name:"Get repository branches for a connector.",description:{content:"Get repository branches for a connector.",type:"text/plain"},url:{path:["v1","connectors",":connector","repository-branches"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},key:"repository",value:""},{disabled:!1,key:"perPage",value:""},{disabled:!1,key:"page",value:""},{disabled:!1,key:"query",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"connector"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"get api-method",info_path:"openapi/restful-apis",custom_edit_url:null},u=void 0,y={unversionedId:"openapi/c-7-ee-6-c-2927339734",id:"version-v0.3/openapi/c-7-ee-6-c-2927339734",title:"Get repository branches for a connector.",description:"Get repository branches for a connector.",source:"@site/versioned_docs/version-v0.3/openapi/c-7-ee-6-c-2927339734.api.mdx",sourceDirName:"openapi",slug:"/openapi/c-7-ee-6-c-2927339734",permalink:"/docs/zh/v0.3/openapi/c-7-ee-6-c-2927339734",draft:!1,editUrl:null,tags:[],version:"v0.3",frontMatter:{id:"c-7-ee-6-c-2927339734",title:"Get repository branches for a connector.",description:"Get repository branches for a connector.",sidebar_label:"Get repository branches for a connector.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Get repository branches for a connector.",operationId:"c7ee6c2927339734",parameters:[{in:"path",name:"connector",required:!0,schema:{type:"string"}},{in:"query",name:"repository",required:!0,schema:{type:"string"}},{in:"query",name:"perPage",schema:{default:10,type:"integer"}},{in:"query",name:"page",schema:{default:1,type:"integer"}},{in:"query",name:"query",schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{items:{type:"object"},type:"array"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["Connectors"],"x-cli-ignore":!0,extensions:[{key:"x-cli-ignore",value:!0}],method:"get",path:"/v1/connectors/{connector}/repository-branches",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev"},postman:{name:"Get repository branches for a connector.",description:{content:"Get repository branches for a connector.",type:"text/plain"},url:{path:["v1","connectors",":connector","repository-branches"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},key:"repository",value:""},{disabled:!1,key:"perPage",value:""},{disabled:!1,key:"page",value:""},{disabled:!1,key:"query",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"connector"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"get api-method",info_path:"openapi/restful-apis",custom_edit_url:null},sidebar:"openapi",previous:{title:"Get repositories for a connector.",permalink:"/docs/zh/v0.3/openapi/fcb-12-d-5-c-4-af-02-ce-1"},next:{title:"Sync cost data for a connector.",permalink:"/docs/zh/v0.3/openapi/fb-591-d-1432502-a-9-f"}},g={},h=[{value:"Get repository branches for a connector.",id:"get-repository-branches-for-a-connector",level:2}],T={toc:h};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-repository-branches-for-a-connector"},"Get repository branches for a connector."),(0,n.kt)("p",null,"Get repository branches for a connector."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"connector",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"repository",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"perPage",schema:{default:10,type:"integer"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"page",schema:{default:1,type:"integer"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"query",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,n.kt)("p",null,"object")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:"[\n  {}\n]",language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad Request")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:400,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Bad Request",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "message": "string",\n  "status": 400,\n  "statusText": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unauthorized")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:401,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unauthorized",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "message": "string",\n  "status": 401,\n  "statusText": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Forbidden")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:403,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Forbidden",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "message": "string",\n  "status": 403,\n  "statusText": "Forbidden"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Not Found")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:404,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Not Found",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "message": "string",\n  "status": 404,\n  "statusText": "Not Found"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"408",value:"408",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request Timeout")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:408,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Request Timeout",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "message": "string",\n  "status": 408,\n  "statusText": "Request Timeout"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Conflict")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:409,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Conflict",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "message": "string",\n  "status": 409,\n  "statusText": "Conflict"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unsupported Media Type")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:415,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unsupported Media Type",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "message": "string",\n  "status": 415,\n  "statusText": "Unsupported Media Type"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unprocessable Entity")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:422,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unprocessable Entity",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "message": "string",\n  "status": 422,\n  "statusText": "Unprocessable Entity"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"429",value:"429",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Too Many Requests")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:429,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Too Many Requests",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "message": "string",\n  "status": 429,\n  "statusText": "Too Many Requests"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Internal Server Error")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:500,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Internal Server Error",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "message": "string",\n  "status": 500,\n  "statusText": "Internal Server Error"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Service Unavailable")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:503,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Service Unavailable",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "message": "string",\n  "status": 503,\n  "statusText": "Service Unavailable"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);