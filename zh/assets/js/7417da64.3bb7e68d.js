"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43518],{13970:(l,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>o});var t=a(87462),i=(a(67294),a(3905));const n={},r="\u547d\u4ee4\u884c\u754c\u9762\uff08CLI\uff09",s={unversionedId:"cli",id:"version-v0.5/cli",title:"\u547d\u4ee4\u884c\u754c\u9762\uff08CLI\uff09",description:"Walrus CLI \u662f\u4e0e Walrus \u670d\u52a1\u5668\u4ea4\u4e92\u7684\u547d\u4ee4\u884c\u754c\u9762\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/zh/v0.5/cli",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/versioned_docs/version-v0.5/cli.md",tags:[],version:"v0.5",frontMatter:{},sidebar:"docs",previous:{title:"\u4f7f\u7528 OpenTofu \u8fdb\u884c\u90e8\u7f72",permalink:"/docs/zh/v0.5/tutorials/deploy-with-opentofu"},next:{title:"\u6539\u8fdb\u8ba1\u5212",permalink:"/docs/zh/v0.5/improvement-plan"}},u={},o=[{value:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5",id:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5",level:2},{value:"\u4ece GitHub \u5b89\u88c5 Walrus CLI",id:"\u4ece-github-\u5b89\u88c5-walrus-cli",level:3},{value:"\u901a\u8fc7 Walrus UI \u5b89\u88c5 Walrus CLI",id:"\u901a\u8fc7-walrus-ui-\u5b89\u88c5-walrus-cli",level:3},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5",level:2},{value:"\u4f7f\u7528 Walrus CLI",id:"\u4f7f\u7528-walrus-cli",level:2},{value:"\u83b7\u53d6 API \u5bc6\u94a5",id:"\u83b7\u53d6-api-\u5bc6\u94a5",level:3},{value:"\u914d\u7f6e CLI",id:"\u914d\u7f6e-cli",level:3}],p={toc:o};function d(l){let{components:e,...a}=l;return(0,i.kt)("wrapper",(0,t.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u547d\u4ee4\u884c\u754c\u9762cli"},"\u547d\u4ee4\u884c\u754c\u9762\uff08CLI\uff09"),(0,i.kt)("p",null,"Walrus CLI \u662f\u4e0e Walrus \u670d\u52a1\u5668\u4ea4\u4e92\u7684\u547d\u4ee4\u884c\u754c\u9762\u3002"),(0,i.kt)("h2",{id:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5"},"\u4e0b\u8f7d\u4e0e\u5b89\u88c5"),(0,i.kt)("p",null,"Walrus \u652f\u6301\u4ece GitHub Releases \u9875\u9762\u6216\u76f4\u63a5\u4ece Walrus UI \u4e0b\u8f7d Walrus CLI\u3002"),(0,i.kt)("h3",{id:"\u4ece-github-\u5b89\u88c5-walrus-cli"},"\u4ece GitHub \u5b89\u88c5 Walrus CLI"),(0,i.kt)("p",null,"\u524d\u5f80 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seal-io/walrus/releases"},"Walrus Releases \u9875\u9762")," \u5e76\u4e0b\u8f7d\u9002\u7528\u4e8e\u60a8\u64cd\u4f5c\u7cfb\u7edf\u7684 CLI \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u4e0b\u8f7d\u5e76\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Walrus CLI\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ARCH=$(uname -m | sed 's/x86_64/amd64/')\nOS=$(uname -s | tr '[:upper:]' '[:lower:]')\n\ncurl -fLO \"https://github.com/seal-io/walrus/releases/latest/download/walrus-cli-${OS}-${ARCH}\"\nchmod +x \"./walrus-cli-${OS}-${ARCH}\"\nsudo mv \"./walrus-cli-${OS}-${ARCH}\" /usr/local/bin/walrus\n")),(0,i.kt)("h3",{id:"\u901a\u8fc7-walrus-ui-\u5b89\u88c5-walrus-cli"},"\u901a\u8fc7 Walrus UI \u5b89\u88c5 Walrus CLI"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece Walrus UI \u4e0b\u8f7d Walrus CLI\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230 Walrus\uff0c\u70b9\u51fb\u5bfc\u822a\u680f\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u4e0b\u8f7d")," \u83dc\u5355\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u9002\u7528\u4e8e\u4f60\u64cd\u4f5c\u7cfb\u7edf\u7684 CLI\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f CLI \u53ef\u6267\u884c\uff0c\u5e76\u5c06\u5176\u79fb\u52a8\u5230\u7cfb\u7edf\u8def\u5f84\u3002")),(0,i.kt)("h2",{id:"\u9a8c\u8bc1\u5b89\u88c5"},"\u9a8c\u8bc1\u5b89\u88c5"),(0,i.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"walrus version")," \u6765\u68c0\u67e5\u5f53\u524d\u7248\u672c\u5e76\u786e\u4fdd\u5b89\u88c5\u6210\u529f\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528-walrus-cli"},"\u4f7f\u7528 Walrus CLI"),(0,i.kt)("h3",{id:"\u83b7\u53d6-api-\u5bc6\u94a5"},"\u83b7\u53d6 API \u5bc6\u94a5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230 Walrus\uff0c\u70b9\u51fb\u5bfc\u822a\u680f\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u8d26\u53f7")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"\u7528\u6237\u4fe1\u606f"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8fdb\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"API\u5bc6\u94a5")," \u6807\u7b7e\u9875\uff0c\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"li"},"\u6dfb\u52a0\u5bc6\u94a5")," \u6309\u94ae\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e3a\u5bc6\u94a5\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"\u540d\u79f0")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"\u8fc7\u671f\u65f6\u95f4"),"\uff0c\u7136\u540e\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"li"},"\u4fdd\u5b58"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u590d\u5236\u751f\u6210\u7684\u4ee4\u724c\u5e76\u59a5\u5584\u4fdd\u5b58\u4ee5\u5907\u540e\u7528\u3002")),(0,i.kt)("h3",{id:"\u914d\u7f6e-cli"},"\u914d\u7f6e CLI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"walrus login"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8f93\u5165\u670d\u52a1\u5668\u5730\u5740\u3001\u4ee4\u724c\u3001\u9879\u76ee\u548c\u73af\u5883\u3002\u4ee4\u724c\u662f\u5728\u524d\u4e00\u6b65\u751f\u6210\u7684 API \u5bc6\u94a5\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"walrus project list")," \u9a8c\u8bc1\u5bf9\u670d\u52a1\u5668\u7684\u8bbf\u95ee\u5e76\u83b7\u53d6\u9879\u76ee\u5217\u8868\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u4f7f\u7528 CLI \u65f6\uff0c\u968f\u65f6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"walrus --help")," \u67e5\u770b\u5e2e\u52a9\u4fe1\u606f\u3002")),(0,i.kt)("p",null,"\u8981\u4e86\u89e3\u6709\u5173 CLI \u547d\u4ee4\u7684\u66f4\u8be6\u7ec6\u89e3\u91ca\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"category/cli"},"CLI \u6587\u6863"),"\u3002"))}d.isMDXComponent=!0}}]);