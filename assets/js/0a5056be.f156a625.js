"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73648],{54429:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:1},i="Template",o={unversionedId:"operation/template/index",id:"operation/template/index",title:"Template",description:"A template is a pre-defined resource framework or architecture which includes a set of related components, inputs and outputs.",source:"@site/docs/operation/template/index.md",sourceDirName:"operation/template",slug:"/operation/template/",permalink:"/docs/operation/template/",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/operation/template/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Catalog",permalink:"/docs/operation/catalog/"},next:{title:"Template Management",permalink:"/docs/operation/template/management"}},p={},s=[{value:"Type",id:"type",level:2},{value:"Import from a catalog",id:"import-from-a-catalog",level:3},{value:"Create Independent Templates",id:"create-independent-templates",level:3},{value:"Template Structure",id:"template-structure",level:2},{value:"Customizing Template UI Schema",id:"customizing-template-ui-schema",level:2},{value:"Configuration Method",id:"configuration-method",level:3},{value:"schema.yaml",id:"schemayaml",level:4},{value:"Walrus UI Configuration",id:"walrus-ui-configuration",level:4},{value:"Configuration Items",id:"configuration-items",level:3},{value:"OpenAPI Schema Basic Configuration",id:"openapi-schema-basic-configuration",level:3},{value:"x-walrus-ui Extension Configuration",id:"x-walrus-ui-extension-configuration",level:3},{value:"Walrus Extension Widget",id:"walrus-extension-widget",level:3},{value:"Runtime Context",id:"runtime-context",level:2},{value:"Output",id:"output",level:2},{value:"Endpoints",id:"endpoints",level:3}],u={toc:s};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"template"},"Template"),(0,r.kt)("p",null,"A template is a pre-defined resource framework or architecture which includes a set of related components, inputs and outputs."),(0,r.kt)("h2",{id:"type"},"Type"),(0,r.kt)("p",null,"Walrus currently supports Terraform module as the template type which is stored in git source code repositories."),(0,r.kt)("p",null,"Users can add templates in Walrus using the following ways:"),(0,r.kt)("h3",{id:"import-from-a-catalog"},"Import from a catalog"),(0,r.kt)("p",null,"A catalog is a registry storing a collection of templates. After adding a catalog, all templates included in the catalog will be automatically imported."),(0,r.kt)("h3",{id:"create-independent-templates"},"Create Independent Templates"),(0,r.kt)("p",null,"Add an independent template with a git repository address through the Walrus UI."),(0,r.kt)("h2",{id:"template-structure"},"Template Structure"),(0,r.kt)("p",null,"Walrus supports a template structure compatible with Terraform modules, including the following files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"<path-to-template>\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 main.tf\n\u251c\u2500\u2500 outputs.tf\n\u251c\u2500\u2500 variables.tf\n\u251c\u2500\u2500 schema.yaml\n\u251c\u2500\u2500 icon.svg\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"main.tf")),(0,r.kt)("p",null,"The main file for Terraform configuration, containing resource definitions and configurations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"variables.tf")),(0,r.kt)("p",null,"Configuration file for Terraform variables. In this file, you define information such as variable names, types, default values, and more."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"outputs.tf")),(0,r.kt)("p",null,"Configuration file for Terraform outputs. Outputs allow you to export specific values from Terraform execution for use by other Terraform configurations, scripts, or manual operations. In this file, you define output names and their associated values."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"schema.yaml")),(0,r.kt)("p",null,"Configuration file for defining the template UI style. The content of schema.yaml is in the openAPI format of UI Schema, which includes custom configurations such as variable types, styles, validations, default values, etc., from variables.tf."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"icon.svg")),(0,r.kt)("p",null,'The template will use the image file named "icon" in the root path of the default branch of the source repository as the template\'s icon. The supported image file formats are: .png, .jpg, .jpeg, .svg. If no icon file is found, the default icon will be used.'),(0,r.kt)("h2",{id:"customizing-template-ui-schema"},"Customizing Template UI Schema"),(0,r.kt)("p",null,"Walrus extends input definitions based on Terraform variables through UI Schema, aiding in generating more user-friendly forms in the UI."),(0,r.kt)("h3",{id:"configuration-method"},"Configuration Method"),(0,r.kt)("h4",{id:"schemayaml"},"schema.yaml"),(0,r.kt)("p",null,"UI schema can be configured by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.yaml")," in the template repository. If the repository includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.yaml")," file, Walrus will use the UI schema defined in that file."),(0,r.kt)("p",null,"Below is an example of the schema file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.3\ninfo:\n  title: OpenAPI schema for template webservice\ncomponents:\n  schemas:\n    variables:\n      required:\n        - image\n      type: object\n      properties:\n        image:\n          title: Image Name\n          type: string\n          description: Docker image name\n          x-walrus-ui:\n            group: Basic\n        ports:\n          title: Ports\n          type: array\n          description: Service ports to expose\n          default:\n            - 80\n          items:\n            type: number\n          x-walrus-ui:\n            group: Basic\n")),(0,r.kt)("p",null,"Walrus provides a tool to generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.yaml")," file based on the Terraform module."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"../cli"},"Walrus CLI"),"."),(0,r.kt)("li",{parentName:"ol"},"Run the following command to generate the ",(0,r.kt)("inlineCode",{parentName:"li"},"schema.yaml")," file: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"walrus schema generate --dir=${dir for module}\n")),(0,r.kt)("h4",{id:"walrus-ui-configuration"},"Walrus UI Configuration"),(0,r.kt)("p",null,"When the repository does not include a ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.yaml")," file, Walrus will automatically configure UI schema based on the terraform variables. The generated schema can be viewed in the template's UI Schema."),(0,r.kt)("h3",{id:"configuration-items"},"Configuration Items"),(0,r.kt)("p",null,"UI Schema is based on the OpenAPI 3.0 file structure, written in YAML format. It includes both the basic structure of the OpenAPI Schema and the extensions part, combining to define UI schema in Walrus."),(0,r.kt)("h3",{id:"openapi-schema-basic-configuration"},"OpenAPI Schema Basic Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Display name of the variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Variable type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"Variable description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value of the variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},"Supports configuring a password, using a password input box for string variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional range of variable values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"Restricts the variable value from being modified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"writeOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"Restricts the variable as write-only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minimum"),(0,r.kt)("td",{parentName:"tr",align:null},"Restricts the minimum value for number/integer-type variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maximum"),(0,r.kt)("td",{parentName:"tr",align:null},"Restricts the maximum value for number/integer-type variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minLength"),(0,r.kt)("td",{parentName:"tr",align:null},"Restricts the minimum length for string-type variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxLength"),(0,r.kt)("td",{parentName:"tr",align:null},"Restricts the maximum length for string-type variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the required sub-variables for Object-type variables, with an array containing the names of sub-variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties"),(0,r.kt)("td",{parentName:"tr",align:null},"Used for configuring sub-variables for object-type variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"items"),(0,r.kt)("td",{parentName:"tr",align:null},"Used for configuring elements for array-type variables")))),(0,r.kt)("h3",{id:"x-walrus-ui-extension-configuration"},"x-walrus-ui Extension Configuration"),(0,r.kt)("p",null,"OpenAPI supports additional properties with the ",(0,r.kt)("inlineCode",{parentName:"p"},"x-")," prefix, and Walrus supports additional configurations through the ",(0,r.kt)("inlineCode",{parentName:"p"},"x-walrus-ui")," extension."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"Variable grouping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to hide the variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"immutable"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the variable supports modification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showIf"),(0,r.kt)("td",{parentName:"tr",align:null},"Variable display condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"widget"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the use of Walrus controls")))),(0,r.kt)("h3",{id:"walrus-extension-widget"},"Walrus Extension Widget"),(0,r.kt)("p",null,"Walrus supports the following UI widgets through the extension, and the UI will display according to the configured UI widgets."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"YamlEditor"),(0,r.kt)("td",{parentName:"tr",align:null},"YAML editor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextArea"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi-line input box")))),(0,r.kt)("h2",{id:"runtime-context"},"Runtime Context"),(0,r.kt)("p",null,"Runtime context are information related to projects, environments, and resources. It can be obtained using the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," variable in templates. You need to declare the context variable in the template, and Walrus will automatically inject the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," variable during deployment. The declaration is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'variable "context" {\n  description = <<-EOF\nReceive contextual information. When Walrus deploys, Walrus will inject specific contextual information into this field.\n\nExamples:\ncontext:\n  project:\n    name: string\n    id: string\n  environment:\n    name: string\n    id: string\n  resource:\n    name: string\n    id: string\nEOF\n  type        = map(any)\n  default     = {}\n}\n')),(0,r.kt)("p",null,"The runtime context contains the following information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Context"),(0,r.kt)("th",{parentName:"tr",align:null},"Sub  Context"),(0,r.kt)("th",{parentName:"tr",align:null},"Property\tType"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project"),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Project name to which the resource belongs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project"),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Project ID to which the resource belongs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"environment"),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment name to which the resource belongs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"environment"),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment ID to which the resource belongs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"environment"),(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Namespace managed by Walrus, available in Kubernetes environments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource ID")))),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("p",null,"Walrus captures the outputs defined in the templates. After a deployment is completed, the outputs will be displayed on the resource's output page. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"resource-outputs",src:a(93313).Z,width:"3450",height:"1912"})),(0,r.kt)("h3",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"Walrus supports capturing user-defined access URLs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"resource-endpoints",src:a(4375).Z,width:"3446",height:"1914"})),(0,r.kt)("p",null,"Name the output as ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoints")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"walrus_endpoints"),"(as shown in the configuration below), Walrus will treat these outputs as ",(0,r.kt)("strong",{parentName:"p"},"Endpoints")," for the resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'output "endpoints" {\n  value = {\n    grafana_console    = "http://localhost:3000"\n    prometheus_console = "http://localhost:9090"\n  }\n}\n')),(0,r.kt)("p",null,"Type of the output value of ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoints")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"walrus_endpoints")," must be a string ",(0,r.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/language/expressions/types#map"},"map"),". For example, the JSON form is ",(0,r.kt)("inlineCode",{parentName:"p"},'{"grafana_console":"http://localhost:3000","prometheus_console":"http://localhost:9090"}'),". Since Terraform doesn't support declaring the type of output, if you need an explicit type conversion, please try the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/language/functions/tomap"},"tomap")," function."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"When the endpoint's hostname, usually in the form of an IP address, is the same as Walrus's local IP address, Walrus will replace the hostname with the ",(0,r.kt)("a",{parentName:"li",href:"../setting#server"},"Walrus server address"),"."),(0,r.kt)("li",{parentName:"ul"},"Adopting the above mutation, you will be able to access the resource exposed from the embedded Kubernetes cluster."))))}m.isMDXComponent=!0},4375:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/resource-endpoints-abdb0fe6cd6d0f3ed6471f4ae8e377bb.png"},93313:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/resource-outputs-863bc3f9d2473e890692a14428b5de5a.png"}}]);