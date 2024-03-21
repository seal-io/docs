"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74512],{54482:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=o(87462),i=(o(67294),o(3905));const a={sidebar_position:6},n="Deploy with OpenTofu",s={unversionedId:"tutorials/deploy-with-opentofu",id:"tutorials/deploy-with-opentofu",title:"Deploy with OpenTofu",description:"This tutorial demonstrates how to deploy a resource using Walrus with OpenTofu.",source:"@site/docs/tutorials/deploy-with-opentofu.md",sourceDirName:"tutorials",slug:"/tutorials/deploy-with-opentofu",permalink:"/docs/tutorials/deploy-with-opentofu",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/tutorials/deploy-with-opentofu.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Integration with CI/CD Tools",permalink:"/docs/tutorials/integrate-with-cicd"},next:{title:"CLI",permalink:"/docs/cli"}},l={},p=[{value:"Why using OpenTofu?",id:"why-using-opentofu",level:2},{value:"Switch OpenTofu",id:"switch-opentofu",level:2},{value:"Deploy Resource",id:"deploy-resource",level:2},{value:"Build Specific OpenTofu Version",id:"build-specific-opentofu-version",level:3},{value:"How to Avoid Version Management Anxiety?",id:"how-to-avoid-version-management-anxiety",level:2},{value:"Try Hermit Crab",id:"try-hermit-crab",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-with-opentofu"},"Deploy with OpenTofu"),(0,i.kt)("p",null,"This tutorial demonstrates how to deploy a resource using Walrus with ",(0,i.kt)("a",{parentName:"p",href:"https://opentofu.org/manifesto/"},"OpenTofu"),"."),(0,i.kt)("h2",{id:"why-using-opentofu"},"Why using OpenTofu?"),(0,i.kt)("p",null,"Since v1.6.0, Hashicorp ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/terraform/pull/33678"},"switched Terraform license from MPL to BUSL"),", OpenTofu forked from MPL-licensed Terraform at August 25, 2023 and maintains in the Linux Foundation to keep open source."),(0,i.kt)("p",null,"In short, OpenTofu is a painless replacement of Terraform."),(0,i.kt)("h2",{id:"switch-opentofu"},"Switch OpenTofu"),(0,i.kt)("p",null,"By default, Walrus uses the latest MPL-licensed Terraform version, that is v1.5.7, to complete the resource deployment. To reduce the Terraform Provider downloading time-cost during each deployment, we adopt a container image modified from the original ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/hashicorp/terraform"},"Hashicorp/Terraform image"),", which contains some commonly used and required Terraform Providers. If you are interested in this, you can browse ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seal-io/terraform-deployer"},"seal-io/terraform-deployer")," for more information."),(0,i.kt)("p",null,"Let's back to how to switch OpenTofu. Assume that you have already walked through our ",(0,i.kt)("a",{parentName:"p",href:"../quickstart"},"Quick Start"),", now you can navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"System Settings")," and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," tab as below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"list-setting",src:o(41163).Z,width:"3446",height:"1914"})),(0,i.kt)("p",null,"You can replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployer Image")," to our ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/sealio/opentofu-deployer/tags"},"OpenTofu Deployer"),", for example, input ",(0,i.kt)("inlineCode",{parentName:"p"},"sealio/opentofu-deployer:v1.6.0-seal.1"),", the first GA OpenTofu release."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"configure-deployer",src:o(23118).Z,width:"3440",height:"1916"})),(0,i.kt)("h2",{id:"deploy-resource"},"Deploy Resource"),(0,i.kt)("p",null,"Now, you can go back to the local Environment under the default Project, and enjoy the OpenTofu."),(0,i.kt)("p",null,"You can select a Resource and execute (re)Deploy as shown."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"redeploy",src:o(53586).Z,width:"3440",height:"1912"})),(0,i.kt)("p",null,"Let's take a look at the deployment logs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"view-logs",src:o(61176).Z,width:"1438",height:"1356"})),(0,i.kt)("h3",{id:"build-specific-opentofu-version"},"Build Specific OpenTofu Version"),(0,i.kt)("p",null,"If you need to use a specific version of OpenTofu, you can build your specific version of OpenTofu Deployer following this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seal-io/opentofu-deployer/blob/main/Dockerfile"},"Dockerfile"),"."),(0,i.kt)("h2",{id:"how-to-avoid-version-management-anxiety"},"How to Avoid Version Management Anxiety?"),(0,i.kt)("p",null,"As we mentioned above, the default OpenTofu Deployer is same as Terraform Deployer, which embeds some commonly used and required Terraform Providers in it. These batteries help Walrus finish the deployment quickly."),(0,i.kt)("p",null,"But everything has two sides, the implied mirroring Providers are version locking. This means that if the local version cannot match a certain version (range maybe) requirement, we will get an error from OpenTofu."),(0,i.kt)("p",null,"For this reason, Walrus provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployer Network Mirror URL")," ",(0,i.kt)("a",{parentName:"p",href:"../settings"},"Setting")," to allow you to configure mirroring Terraform/OpenTofu Providers from a nearby service through networking."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"configure-network-mirror",src:o(89781).Z,width:"3450",height:"1894"})),(0,i.kt)("h3",{id:"try-hermit-crab"},"Try Hermit Crab"),(0,i.kt)("p",null,"Defaultly, Walrus batteries up a Provider Mirroring Service, named ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seal-io/hermitcrab"},"Hermit Crab"),", you can simply copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"https://walrus-mirror-hermitcrab.walrus-system/v1/providers/")," from here and paste it."),(0,i.kt)("p",null,"With Hermit Crab, it will be a little slower to download the new version package, but you will get the same efficiency as implied mirroring later, and there is no need to worry about version changes."),(0,i.kt)("p",null,"Finally, welcome to OpenTofu, a more positive community."))}c.isMDXComponent=!0},23118:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/configure-deployer-c851c5a8c4c02fafea8fef979ab13a15.png"},89781:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/configure-network-mirror-d409bbca2caaef3f5a6996a5190a8bf7.png"},41163:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/list-setting-893726102572ae9fec80638b8a29663b.png"},53586:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/redeploy-15deca0ca35367773271b068c55184f7.png"},61176:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/view-logs-e11a306bca0e54759893d72c297a7c67.png"}}]);