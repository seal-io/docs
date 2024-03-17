"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1118],{76839:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=i(87462),n=(i(67294),i(3905));const l={sidebar_position:3},r="\u96c6\u6210 CICD \u5de5\u5177",s={unversionedId:"tutorials/integrate-with-cicd",id:"version-v0.5/tutorials/integrate-with-cicd",title:"\u96c6\u6210 CICD \u5de5\u5177",description:"\u672c\u6559\u7a0b\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Walrus CLI \u4e0e\u60a8\u7684 CI/CD \u5de5\u5177\u96c6\u6210\uff0c\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5316\u7684\u90e8\u7f72\u6d41\u7a0b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5/tutorials/integrate-with-cicd.md",sourceDirName:"tutorials",slug:"/tutorials/integrate-with-cicd",permalink:"/docs/zh/v0.5/tutorials/integrate-with-cicd",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.5/tutorials/integrate-with-cicd.md",tags:[],version:"v0.5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"\u5728AWS\u4e0a\u90e8\u7f72llama-2",permalink:"/docs/zh/v0.5/tutorials/llama2-on-aws"},next:{title:"\u5982\u4f55\u521b\u5efa\u6a21\u677f",permalink:"/docs/zh/v0.5/tutorials/how-to-create-template"}},o={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u521b\u5efa API \u5bc6\u94a5",id:"\u521b\u5efa-api-\u5bc6\u94a5",level:2},{value:"Walrus CLI \u548c CI/CD \u5de5\u5177\u96c6\u6210",id:"walrus-cli-\u548c-cicd-\u5de5\u5177\u96c6\u6210",level:3}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u96c6\u6210-cicd-\u5de5\u5177"},"\u96c6\u6210 CICD \u5de5\u5177"),(0,n.kt)("p",null,"\u672c\u6559\u7a0b\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Walrus CLI \u4e0e\u60a8\u7684 CI/CD \u5de5\u5177\u96c6\u6210\uff0c\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5316\u7684\u90e8\u7f72\u6d41\u7a0b\u3002"),(0,n.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("p",null,"\u60f3\u8981\u8ddf\u968f\u672c\u6559\u7a0b\uff0c\u60a8\u5c06\u9700\u8981\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e00\u4e2a Github Repo\uff0c\u53ef\u4ee5 Fork \u6211\u4eec\u7684 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/seal-io/simple-web-service"},"Demo")," \u9879\u76ee\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/deploy/standalone"},"\u5b89\u88c5 Walrus"),"\u3002")),(0,n.kt)("h2",{id:"\u521b\u5efa-api-\u5bc6\u94a5"},"\u521b\u5efa API \u5bc6\u94a5"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a API \u5bc6\u94a5\uff0c\u4ee5\u4fbf\u8ba9 Walrus CLI \u80fd\u591f\u4e0e Walrus \u670d\u52a1\u8fdb\u884c\u901a\u4fe1\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8fdb\u5165",(0,n.kt)("inlineCode",{parentName:"li"},"\u4e2a\u4eba\u4e2d\u5fc3"),"\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"API \u5bc6\u94a5"),"\uff0c\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u6dfb\u52a0\u5bc6\u94a5"),"\uff0c\u914d\u7f6e\u540d\u79f0\u548c\u5bc6\u94a5\u7684\u8fc7\u671f\u65f6\u95f4\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u540e\uff0c\u590d\u5236\u751f\u6210\u7684\u5bc6\u94a5\uff0c\u4ee5\u5907\u540e\u7528\u3002")),(0,n.kt)("h3",{id:"walrus-cli-\u548c-cicd-\u5de5\u5177\u96c6\u6210"},"Walrus CLI \u548c CI/CD \u5de5\u5177\u96c6\u6210"),(0,n.kt)("p",null,"\u6211\u4eec\u4ee5 CLI \u548c GitHub Actions \u96c6\u6210\u4e3a\u4f8b\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8fdb\u5165 GitHub \u4ed3\u5e93\uff0c\u5728\u76ee\u5f55 ",(0,n.kt)("inlineCode",{parentName:"li"},".github/workflows")," \u4e0b\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"li"},"ci.yaml")," \u6587\u4ef6\uff0c\u5e76\u5728\u5176\u4e2d\u5b9a\u4e49\u60a8\u7684 CI/CD \u5de5\u4f5c\u6d41\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u5de5\u4f5c\u6d41\u7a0b\u4e2d\uff0c\u914d\u7f6e GitHub Actions \u7684\u5bc6\u94a5\uff0c\u5305\u62ec ",(0,n.kt)("inlineCode",{parentName:"li"},"CI_REGISTRY_PASSWORD"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"CI_WALRUS_SERVER")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"CI_WALRUS_TOKEN"),"\uff0c\u4ee5\u4fbf\u5b89\u5168\u5730\u5b58\u50a8\u654f\u611f\u4fe1\u606f\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"CI_WALRUS_SERVER")," \u7684\u683c\u5f0f\u4e3a https://domian:port/\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u4ee5\u4e0b\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"ci.yaml")," \u6837\u4f8b\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'name: ci\n\non:\n  push:\n    branches:\n      - "main"\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        arch: \n          - amd64\n    steps:\n      - name: Download CLI\n        run: |\n          # Download walrus cli\n          curl -v -k -o walrus -LO "${{ secrets.CI_WALRUS_SERVER }}/cli?arch=amd64&os=linux"\n          chmod +x ./walrus\n\n      - name: Deploy\n        run: |\n          # Setup CLI config\n          ./walrus config setup --server ${{ secrets.CI_WALRUS_SERVER }} --project web --environment dev --token ${{ secrets.CI_WALRUS_TOKEN }}\n\n          # Build and deploy from source code\n          ./walrus service create --name simple-web-service --template \'{"name":"deploy-source-code", "version":"v0.0.1"}\' --attributes \'{ "git_url": "https://github.com/seal-io/simple-web-service", "git_branch": "main", "git_auth": false, "registry_auth": true, "registry_username": "sealio", "registry_password": "${{ secrets.CI_REGISTRY_PASSWORD }}", "image": "sealio/simple-web-service:${{ github.sha }}", "namespace": "default", "name": "simple-web-service"}\' -d\n')),(0,n.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\u53ef\u5728 Walrus \u4e2d\u67e5\u770b\u5230\u5bf9\u5e94\u7684\u670d\u52a1\uff0c\u66f4\u591a CLI \u76f8\u5173\u64cd\u4f5c\u53ef\u4ee5\u5728 CLI \u6587\u6863\u4e2d\u67e5\u770b\u3002"))}d.isMDXComponent=!0}}]);