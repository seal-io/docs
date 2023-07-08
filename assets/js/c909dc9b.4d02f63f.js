"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4245],{69684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>b,frontMatter:()=>y,metadata:()=>T,toc:()=>k});var s=a(87462),m=(a(67294),a(3905)),l=a(26389),i=(a(75035),a(55878)),n=a(23715),p=a(94891),r=a(75190),o=a(47507),d=a(24310),u=a(63303),c=a(85162);const y={id:"template-update",title:"Update a template",description:"Update a template",sidebar_label:"Update a template",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Template.Update",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{description:{type:"string"},icon:{type:"string"},labels:{additionalProperties:{type:"string"},type:"object","x-cli-schema-type":"map[string]string"},source:{type:"string"}},type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{required:[""],type:"object"}}}},204:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"204",type:"integer"},statusText:{default:'"No Content"',type:"string"}},required:["status","statusText"]}}},description:"No Content"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"400",type:"integer"},statusText:{default:'"Bad Request"',type:"string"}},required:["status","statusText"]}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"401",type:"integer"},statusText:{default:'"Unauthorized"',type:"string"}},required:["status","statusText"]}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"403",type:"integer"},statusText:{default:'"Forbidden"',type:"string"}},required:["status","statusText"]}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"404",type:"integer"},statusText:{default:'"Not Found"',type:"string"}},required:["status","statusText"]}}},description:"Not Found"},405:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"405",type:"integer"},statusText:{default:'"Method Not Allowed"',type:"string"}},required:["status","statusText"]}}},description:"Method Not Allowed"},406:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"406",type:"integer"},statusText:{default:'"Not Acceptable"',type:"string"}},required:["status","statusText"]}}},description:"Not Acceptable"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"408",type:"integer"},statusText:{default:'"Request Timeout"',type:"string"}},required:["status","statusText"]}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"409",type:"integer"},statusText:{default:'"Conflict"',type:"string"}},required:["status","statusText"]}}},description:"Conflict"},410:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"410",type:"integer"},statusText:{default:'"Gone"',type:"string"}},required:["status","statusText"]}}},description:"Gone"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"422",type:"integer"},statusText:{default:'"Unprocessable Entity"',type:"string"}},required:["status","statusText"]}}},description:"Unprocessable Entity"},428:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"428",type:"integer"},statusText:{default:'"Precondition Required"',type:"string"}},required:["status","statusText"]}}},description:"Precondition Required"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"429",type:"integer"},statusText:{default:'"Too Many Requests"',type:"string"}},required:["status","statusText"]}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"500",type:"integer"},statusText:{default:'"Internal Server Error"',type:"string"}},required:["status","statusText"]}}},description:"Internal Server Error"},502:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"502",type:"integer"},statusText:{default:'"Bad Gateway"',type:"string"}},required:["status","statusText"]}}},description:"Bad Gateway"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"503",type:"integer"},statusText:{default:'"Service Unavailable"',type:"string"}},required:["status","statusText"]}}},description:"Service Unavailable"}},security:[{bearerAuth:[]},{cookieAuth:[]}],tags:["Templates"],description:"Update a template",method:"put",path:"/templates/{id}",servers:[{url:"/v1"}],securitySchemes:{bearerAuth:{bearerFormat:"JWT",in:"header",scheme:"bearer",type:"http"},cookieAuth:{in:"cookie",name:"seal_session",type:"apiKey"}},jsonRequestBodyExample:{description:"string",icon:"string",labels:{},source:"string"},info:{description:"API to manage resources of Seal",title:"Seal APIs",version:null},postman:{name:"Update a template",description:{type:"text/plain"},url:{path:["templates",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"put api-method",info_path:"openapi/seal-apis",custom_edit_url:null},g=void 0,T={unversionedId:"openapi/template-update",id:"openapi/template-update",title:"Update a template",description:"Update a template",source:"@site/docs/openapi/template-update.api.mdx",sourceDirName:"openapi",slug:"/openapi/template-update",permalink:"/docs/openapi/template-update",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"template-update",title:"Update a template",description:"Update a template",sidebar_label:"Update a template",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Template.Update",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{description:{type:"string"},icon:{type:"string"},labels:{additionalProperties:{type:"string"},type:"object","x-cli-schema-type":"map[string]string"},source:{type:"string"}},type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{required:[""],type:"object"}}}},204:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"204",type:"integer"},statusText:{default:'"No Content"',type:"string"}},required:["status","statusText"]}}},description:"No Content"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"400",type:"integer"},statusText:{default:'"Bad Request"',type:"string"}},required:["status","statusText"]}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"401",type:"integer"},statusText:{default:'"Unauthorized"',type:"string"}},required:["status","statusText"]}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"403",type:"integer"},statusText:{default:'"Forbidden"',type:"string"}},required:["status","statusText"]}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"404",type:"integer"},statusText:{default:'"Not Found"',type:"string"}},required:["status","statusText"]}}},description:"Not Found"},405:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"405",type:"integer"},statusText:{default:'"Method Not Allowed"',type:"string"}},required:["status","statusText"]}}},description:"Method Not Allowed"},406:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"406",type:"integer"},statusText:{default:'"Not Acceptable"',type:"string"}},required:["status","statusText"]}}},description:"Not Acceptable"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"408",type:"integer"},statusText:{default:'"Request Timeout"',type:"string"}},required:["status","statusText"]}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"409",type:"integer"},statusText:{default:'"Conflict"',type:"string"}},required:["status","statusText"]}}},description:"Conflict"},410:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"410",type:"integer"},statusText:{default:'"Gone"',type:"string"}},required:["status","statusText"]}}},description:"Gone"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"422",type:"integer"},statusText:{default:'"Unprocessable Entity"',type:"string"}},required:["status","statusText"]}}},description:"Unprocessable Entity"},428:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"428",type:"integer"},statusText:{default:'"Precondition Required"',type:"string"}},required:["status","statusText"]}}},description:"Precondition Required"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"429",type:"integer"},statusText:{default:'"Too Many Requests"',type:"string"}},required:["status","statusText"]}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"500",type:"integer"},statusText:{default:'"Internal Server Error"',type:"string"}},required:["status","statusText"]}}},description:"Internal Server Error"},502:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"502",type:"integer"},statusText:{default:'"Bad Gateway"',type:"string"}},required:["status","statusText"]}}},description:"Bad Gateway"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:"503",type:"integer"},statusText:{default:'"Service Unavailable"',type:"string"}},required:["status","statusText"]}}},description:"Service Unavailable"}},security:[{bearerAuth:[]},{cookieAuth:[]}],tags:["Templates"],description:"Update a template",method:"put",path:"/templates/{id}",servers:[{url:"/v1"}],securitySchemes:{bearerAuth:{bearerFormat:"JWT",in:"header",scheme:"bearer",type:"http"},cookieAuth:{in:"cookie",name:"seal_session",type:"apiKey"}},jsonRequestBodyExample:{description:"string",icon:"string",labels:{},source:"string"},info:{description:"API to manage resources of Seal",title:"Seal APIs",version:null},postman:{name:"Update a template",description:{type:"text/plain"},url:{path:["templates",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"put api-method",info_path:"openapi/seal-apis",custom_edit_url:null},sidebar:"openapi",previous:{title:"Get template by ID",permalink:"/docs/openapi/template-get"},next:{title:"Refresh",permalink:"/docs/openapi/template-route-refresh"}},h={},k=[{value:"Request",id:"request",level:2}],x={toc:k};function b(e){let{components:t,...a}=e;return(0,m.kt)("wrapper",(0,s.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"Update a template"),(0,m.kt)(i.Z,{method:"put",path:"/templates/{id}",mdxType:"MethodEndpoint"}),(0,m.kt)(n.Z,{infoPath:"openapi/seal-apis",mdxType:"SecuritySchemes"}),(0,m.kt)("p",null,"Update a template"),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,m.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,m.kt)("strong",{className:"openapi-schema__required"},"required")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"labels"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!1,name:"source",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(l.Z,{mdxType:"ApiTabs"},(0,m.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",null,(0,m.kt)("strong",null,"object")))))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"No Content")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"204",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"No Content"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "204",\n  "statusText": "\\"No Content\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Bad Request")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"400",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Bad Request"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "400",\n  "statusText": "\\"Bad Request\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unauthorized")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"401",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Unauthorized"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "401",\n  "statusText": "\\"Unauthorized\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Forbidden")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"403",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Forbidden"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "403",\n  "statusText": "\\"Forbidden\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Not Found")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"404",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Not Found"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "404",\n  "statusText": "\\"Not Found\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Method Not Allowed")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"405",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Method Not Allowed"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "405",\n  "statusText": "\\"Method Not Allowed\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"406",value:"406",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Not Acceptable")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"406",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Not Acceptable"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "406",\n  "statusText": "\\"Not Acceptable\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"408",value:"408",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Request Timeout")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"408",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Request Timeout"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "408",\n  "statusText": "\\"Request Timeout\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Conflict")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"409",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Conflict"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "409",\n  "statusText": "\\"Conflict\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"410",value:"410",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Gone")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"410",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Gone"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "410",\n  "statusText": "\\"Gone\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unprocessable Entity")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"422",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Unprocessable Entity"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "422",\n  "statusText": "\\"Unprocessable Entity\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"428",value:"428",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Precondition Required")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"428",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Precondition Required"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "428",\n  "statusText": "\\"Precondition Required\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"429",value:"429",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Too Many Requests")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"429",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Too Many Requests"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "429",\n  "statusText": "\\"Too Many Requests\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Internal Server Error")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"500",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Internal Server Error"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "500",\n  "statusText": "\\"Internal Server Error\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"502",value:"502",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Bad Gateway")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"502",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Bad Gateway"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "502",\n  "statusText": "\\"Bad Gateway\\""\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(c.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Service Unavailable")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{default:"503",type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{default:'"Service Unavailable"',type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "status": "503",\n  "statusText": "\\"Service Unavailable\\""\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);