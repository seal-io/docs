"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97524],{26715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={sidebar_position:5},l="Walrus File",o={unversionedId:"application/walrus-file",id:"application/walrus-file",title:"Walrus File",description:"Walrus File is a file used for deploying resources, containing a set of related resources and their dependencies.",source:"@site/docs/application/walrus-file.md",sourceDirName:"application",slug:"/application/walrus-file",permalink:"/docs/application/walrus-file",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/application/walrus-file.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Dependency Graph",permalink:"/docs/application/graph"},next:{title:"Workflows",permalink:"/docs/application/workflow"}},s={},p=[{value:"Writing Walrus File",id:"writing-walrus-file",level:2},{value:"Dependency Definition",id:"dependency-definition",level:3},{value:"Variable Dependencies",id:"variable-dependencies",level:3},{value:"Environment Variable Interpolation",id:"environment-variable-interpolation",level:3},{value:"File Content Interpolation",id:"file-content-interpolation",level:3},{value:"Using Walrus File",id:"using-walrus-file",level:2},{value:"CLI Apply/Delete Walrus File",id:"cli-applydelete-walrus-file",level:3},{value:"Importing Walrus File",id:"importing-walrus-file",level:3},{value:"Exporting Walrus File",id:"exporting-walrus-file",level:3}],u={toc:p};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"walrus-file"},"Walrus File"),(0,a.kt)("p",null,"Walrus File is a file used for deploying resources, containing a set of related resources and their dependencies."),(0,a.kt)("h2",{id:"writing-walrus-file"},"Writing Walrus File"),(0,a.kt)("p",null,"Here is an example of a Walrus file in YAML format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: v1\nresources:\n  - name: wordpress-db\n    type: mysql\n    attributes:\n      engine_version: "8.0"\n      password: ${var.mysql-password}\n      username: rdsuser\n    project:\n      name: default\n    environment:\n      name: local\n  - name: wordpress\n    type: containerservice\n    attributes:\n      containers:\n        - image: wordpress\n          profile: run\n          ports:\n            - internal: 80\n              external: 80\n          envs:\n            - name: WORDPRESS_DB_HOST\n              value: ${res.wordpress-db.address}\n            - name: WORDPRESS_DB_PASSWORD\n              value: ${res.wordpress-db.password}\n            - name: WORDPRESS_DB_USER\n              value: ${res.wordpress-db.username}\n            - name: WORDPRESS_DB_NAME\n              value: ${res.wordpress-db.database}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"version"),(0,a.kt)("p",{parentName:"li"},"Optional; the format version of the Walrus File, currently supporting version v1.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"resources"),(0,a.kt)("p",{parentName:"li"},"Required; contains configurations for multiple resources and their dependencies."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"name"),(0,a.kt)("p",{parentName:"li"},"Required; the name of the resource.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"project"),(0,a.kt)("p",{parentName:"li"},"Optional; the project to deploy the resource to, used in conjunction with environment. When using Walrus CLI, not configuring it will use the flags passed to Walrus CLI or the current context. When using Walrus UI, it will deploy to the current project.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"environment"),(0,a.kt)("p",{parentName:"li"},"Optional; the environment to deploy the resource to, used in conjunction with project. When using Walrus CLI, not configuring it will use the flags passed to Walrus CLI or the current context. When using Walrus UI, it will deploy to the current environment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type"),(0,a.kt)("p",{parentName:"li"},"Optional; the type of resource definition used for deployment; either type or template should be configured.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"template"),(0,a.kt)("p",{parentName:"li"},"Optional; the template used for deployment, specifying the template name and version."),(0,a.kt)("p",{parentName:"li"},"Here is an example of using a global-level template."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n- template:\n    name: kubernetes-containerservice\n    version: v0.2.5\n  attributes: \n    containers:\n      - image: nginx\n        profile: run\n        ports:\n          - internal: 80\n            external: 80\n        files:\n          - path: /usr/share/nginx/html/index.html\n            content: |\n              <html>\n                <h1>Welcome to Walrus!</h1>\n              </html>\n")),(0,a.kt)("p",{parentName:"li"},"Here is an example of using a project-level template."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n- template:\n    name: kubernetes-containerservice\n    version: v0.2.5\n    project:\n      name: default\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"attributes"),(0,a.kt)("p",{parentName:"li"},"Optional; fill in the required configurations for deployment."))))),(0,a.kt)("h3",{id:"dependency-definition"},"Dependency Definition"),(0,a.kt)("p",null,"Dependencies are defined using the format ",(0,a.kt)("inlineCode",{parentName:"p"},"${res.resource-name.resource-output}"),". For example, in the sample, ",(0,a.kt)("inlineCode",{parentName:"p"},"${res.wordpress-db.address}")," defines that ",(0,a.kt)("inlineCode",{parentName:"p"},"wordpress")," depends on the ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," output of ",(0,a.kt)("inlineCode",{parentName:"p"},"wordpress-db"),"."),(0,a.kt)("h3",{id:"variable-dependencies"},"Variable Dependencies"),(0,a.kt)("p",null,"Supports using variables already existing in Walrus. Defined using the format ",(0,a.kt)("inlineCode",{parentName:"p"},"${variable.variable-name}"),". For example, in the sample, ",(0,a.kt)("inlineCode",{parentName:"p"},"${var.password}")," defines the use of the Walrus password variable."),(0,a.kt)("h3",{id:"environment-variable-interpolation"},"Environment Variable Interpolation"),(0,a.kt)("p",null,"When used in conjunction with Walrus CLI, supports interpolation from environment variables. The following example uses the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"PASSWORD")," to assign a value to ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes.password"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: v1\nresources:\n  - name: wordpress-db\n    type: mysql\n    attributes:\n      engine_version: "8.0"\n      password: ${PASSSWORD}\n      username: rdsuser\n')),(0,a.kt)("p",null,"Supports common Linux parameter expansions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default value for variables ",(0,a.kt)("inlineCode",{parentName:"li"},"${parameter:-default}"),": Uses the default value if the variable is undefined or empty."),(0,a.kt)("li",{parentName:"ul"},"Exit if variable is not defined ",(0,a.kt)("inlineCode",{parentName:"li"},"${parameter:?word}"),": Outputs an error message and exits the script if the variable is undefined or empty."),(0,a.kt)("li",{parentName:"ul"},"Conditional expansion ",(0,a.kt)("inlineCode",{parentName:"li"},"${parameter:+word}"),": Returns an empty string if the parameter is undefined or empty; returns word if the parameter is defined and non-empty.")),(0,a.kt)("h3",{id:"file-content-interpolation"},"File Content Interpolation"),(0,a.kt)("p",null,"Supports replacing file content into the Walrus file using ",(0,a.kt)("inlineCode",{parentName:"p"},"${file(file-path)}"),", allowing sensitive data to be retrieved from files or environment variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: v1\nresources:\n  - name: wordpress-db\n    type: mysql\n    attributes:\n      engine_version: "8.0"\n      password: ${PASSSWORD}\n      username: rdsuser\n')),(0,a.kt)("h2",{id:"using-walrus-file"},"Using Walrus File"),(0,a.kt)("h3",{id:"cli-applydelete-walrus-file"},"CLI Apply/Delete Walrus File"),(0,a.kt)("p",null,"The CLI supports resource operations using the ",(0,a.kt)("inlineCode",{parentName:"p"},"walrus apply -f apps.yaml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"walrus delete -f apps.yaml")," commands."),(0,a.kt)("h3",{id:"importing-walrus-file"},"Importing Walrus File"),(0,a.kt)("p",null,"Resources belong to an environment, and you can find the Walrus File operation buttons in the resource list view."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Applications")," in the left navigation bar."),(0,a.kt)("li",{parentName:"ol"},"By default, you will enter the view of the first environment. You can switch to view resources in different projects or environments using the top breadcrumb."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"Resources")," tab, you can view the list of resources in that environment."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Import YAML"),", and enter the Walrus File content directly into the input box or read it from a file."),(0,a.kt)("li",{parentName:"ol"},"Also could choose an application built from the Walrus File Hub, using a pre-written Walrus File.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"walrus-file-import",src:t(88362).Z,width:"2996",height:"1154"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"walrus-file-import",src:t(75814).Z,width:"3010",height:"1566"})),(0,a.kt)("h3",{id:"exporting-walrus-file"},"Exporting Walrus File"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Applications")," in the left navigation bar."),(0,a.kt)("li",{parentName:"ol"},"By default, you will enter the view of the first environment. You can switch to view resources in different projects or environments using the top breadcrumb."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"Resources")," tab, check the resources to be exported as a Walrus File, and select export in the additional operations menu to export the Walrus File to the local machine.")))}d.isMDXComponent=!0},75814:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/walrus-file-import-from-hub-fcdf2729a0a94bc41599d52c415e2ee9.png"},88362:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/walrus-file-import-d8e0864c8076d5e3a917fe291d9857e5.png"}}]);