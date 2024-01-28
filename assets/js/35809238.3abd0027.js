"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75508],{33878:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>T,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var s=a(87462),l=(a(67294),a(3905)),i=a(26389),n=a(94891),p=(a(75190),a(47507)),m=a(24310),r=a(63303),o=(a(75035),a(85162));const c={id:"765031-fe-684-e-4788",title:"Create pull request for template completions.",description:"Create pull request for template completions.",sidebar_label:"Create pull request for template completions.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Create pull request for template completions.",operationId:"765031fe684e4788",requestBody:{content:{"application/json":{schema:{properties:{branch:{type:"string"},connectorID:{type:"string"},content:{type:"string"},path:{type:"string"},repository:{type:"string"}},required:["connectorID","repository","branch","path","content"],type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{properties:{link:{type:"string"}},required:["link"],type:"object"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["TemplateCompletions"],"x-cli-ignore":!0,extensions:[{key:"x-cli-ignore",value:!0}],method:"post",path:"/v1/template-completions/_/create-pr",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},jsonRequestBodyExample:{branch:"string",connectorID:"string",content:"string",path:"string",repository:"string"},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev"},postman:{name:"Create pull request for template completions.",description:{content:"Create pull request for template completions.",type:"text/plain"},url:{path:["v1","template-completions","_","create-pr"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"openapi/restful-apis",custom_edit_url:null},u=void 0,d={unversionedId:"openapi/765031-fe-684-e-4788",id:"version-v0.4/openapi/765031-fe-684-e-4788",title:"Create pull request for template completions.",description:"Create pull request for template completions.",source:"@site/versioned_docs/version-v0.4/openapi/765031-fe-684-e-4788.api.mdx",sourceDirName:"openapi",slug:"/openapi/765031-fe-684-e-4788",permalink:"/docs/v0.4/openapi/765031-fe-684-e-4788",draft:!1,editUrl:null,tags:[],version:"v0.4",sidebarPosition:765031,frontMatter:{id:"765031-fe-684-e-4788",title:"Create pull request for template completions.",description:"Create pull request for template completions.",sidebar_label:"Create pull request for template completions.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Create pull request for template completions.",operationId:"765031fe684e4788",requestBody:{content:{"application/json":{schema:{properties:{branch:{type:"string"},connectorID:{type:"string"},content:{type:"string"},path:{type:"string"},repository:{type:"string"}},required:["connectorID","repository","branch","path","content"],type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{properties:{link:{type:"string"}},required:["link"],type:"object"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["TemplateCompletions"],"x-cli-ignore":!0,extensions:[{key:"x-cli-ignore",value:!0}],method:"post",path:"/v1/template-completions/_/create-pr",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},jsonRequestBodyExample:{branch:"string",connectorID:"string",content:"string",path:"string",repository:"string"},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev"},postman:{name:"Create pull request for template completions.",description:{content:"Create pull request for template completions.",type:"text/plain"},url:{path:["v1","template-completions","_","create-pr"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"openapi/restful-apis",custom_edit_url:null},sidebar:"openapi",previous:{title:"Correct for template completions.",permalink:"/docs/v0.4/openapi/63-a-8312-be-2-fc-484-b"},next:{title:"Get examples for template completions.",permalink:"/docs/v0.4/openapi/eddd-8-c-82707-bfacc"}},y={},g=[{value:"Create pull request for template completions.",id:"create-pull-request-for-template-completions",level:2}],h={toc:g};function T(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"create-pull-request-for-template-completions"},"Create pull request for template completions."),(0,l.kt)("p",null,"Create pull request for template completions."),(0,l.kt)(n.Z,{mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Request Body"),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"branch",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"connectorID",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"content",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"path",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"repository",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"OK")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"link",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "link": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:400,type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Bad Request",type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 400,\n  "statusText": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Unauthorized")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:401,type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unauthorized",type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 401,\n  "statusText": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Forbidden")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:403,type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Forbidden",type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 403,\n  "statusText": "Forbidden"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Not Found")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:404,type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Not Found",type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 404,\n  "statusText": "Not Found"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"408",value:"408",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request Timeout")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:408,type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Request Timeout",type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 408,\n  "statusText": "Request Timeout"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Conflict")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:409,type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Conflict",type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 409,\n  "statusText": "Conflict"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Unsupported Media Type")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:415,type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unsupported Media Type",type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 415,\n  "statusText": "Unsupported Media Type"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Unprocessable Entity")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:422,type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unprocessable Entity",type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 422,\n  "statusText": "Unprocessable Entity"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"429",value:"429",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Too Many Requests")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:429,type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Too Many Requests",type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 429,\n  "statusText": "Too Many Requests"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:500,type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Internal Server Error",type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 500,\n  "statusText": "Internal Server Error"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Service Unavailable")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:503,type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Service Unavailable",type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "status": 503,\n  "statusText": "Service Unavailable"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);