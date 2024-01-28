"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41044],{1606:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=i(87462),o=(i(67294),i(3905));const a={sidebar_position:3},r="Integration with CI/CD Tools",l={unversionedId:"tutorials/integrate-with-cicd",id:"version-v0.4/tutorials/integrate-with-cicd",title:"Integration with CI/CD Tools",description:"This tutorial explains how to integrate the Walrus CLI with your CI/CD tools to achieve an automated deployment process.",source:"@site/versioned_docs/version-v0.4/tutorials/integrate-with-cicd.md",sourceDirName:"tutorials",slug:"/tutorials/integrate-with-cicd",permalink:"/docs/v0.4/tutorials/integrate-with-cicd",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.4/tutorials/integrate-with-cicd.md",tags:[],version:"v0.4",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Deploy llama-2 on AWS",permalink:"/docs/v0.4/tutorials/llama2-on-aws"},next:{title:"How to Create a Template",permalink:"/docs/v0.4/tutorials/how-to-create-template"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating an API Key",id:"creating-an-api-key",level:2},{value:"Integration of Walrus CLI and CI/CD Tools",id:"integration-of-walrus-cli-and-cicd-tools",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integration-with-cicd-tools"},"Integration with CI/CD Tools"),(0,o.kt)("p",null,"This tutorial explains how to integrate the Walrus CLI with your CI/CD tools to achieve an automated deployment process."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this tutorial, you will need:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A GitHub Repo where you can fork our Demo project."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/deploy/standalone"},"Installation of Walrus"),".")),(0,o.kt)("h2",{id:"creating-an-api-key"},"Creating an API Key"),(0,o.kt)("p",null,"First, you need to create an API key to allow the Walrus CLI to communicate with the Walrus server."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"User information")," and click on ",(0,o.kt)("inlineCode",{parentName:"li"},"API Keys"),", then click ",(0,o.kt)("inlineCode",{parentName:"li"},"Add new key"),", configure a name, and set an expiration time for the key."),(0,o.kt)("li",{parentName:"ol"},"Once completed, copy the generated key for later use.")),(0,o.kt)("h2",{id:"integration-of-walrus-cli-and-cicd-tools"},"Integration of Walrus CLI and CI/CD Tools"),(0,o.kt)("p",null,"We will use CLI and GitHub Actions integration as an example."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to your GitHub repository and create a ",(0,o.kt)("inlineCode",{parentName:"li"},"ci.yaml")," file under the ",(0,o.kt)("inlineCode",{parentName:"li"},".github/workflows")," directory, defining your CI/CD workflow within."),(0,o.kt)("li",{parentName:"ol"},"In the workflow, configure GitHub Actions secrets, including ",(0,o.kt)("inlineCode",{parentName:"li"},"CI_REGISTRY_PASSWORD"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"CI_WALRUS_SERVER"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"CI_WALRUS_TOKEN"),", to securely store sensitive information. The format for ",(0,o.kt)("inlineCode",{parentName:"li"},"CI_WALRUS_SERVER")," should be https://domain:port/.")),(0,o.kt)("p",null,"Here's an example ",(0,o.kt)("inlineCode",{parentName:"p"},"ci.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: ci\n\non:\n  push:\n    branches:\n      - "main"\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        arch: \n          - amd64\n    steps:\n      - name: Download CLI\n        run: |\n          # Download walrus cli\n          curl -v -k -o walrus -LO "${{ secrets.CI_WALRUS_SERVER }}/cli?arch=amd64&os=linux"\n          chmod +x ./walrus\n\n      - name: Deploy\n        run: |\n          # Setup CLI config\n          ./walrus config setup --server ${{ secrets.CI_WALRUS_SERVER }} --project web --environment dev --token ${{ secrets.CI_WALRUS_TOKEN }}\n\n          # Build and deploy from source code\n          ./walrus service create --name simple-web-service --template \'{"name":"deploy-source-code", "version":"v0.0.1"}\' --attributes \'{ "git_url": "https://github.com/seal-io/simple-web-service", "git_branch": "main", "git_auth": false, "registry_auth": true, "registry_username": "sealio", "registry_password": "${{ secrets.CI_REGISTRY_PASSWORD }}", "image": "sealio/simple-web-service:${{ github.sha }}", "namespace": "default", "name": "simple-web-service"}\' -d\n')),(0,o.kt)("p",null,"After deployment, you can view the corresponding service in Walrus. For more CLI-related operations, please refer to the CLI documentation."))}d.isMDXComponent=!0}}]);