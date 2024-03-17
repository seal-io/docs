"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49138],{71301:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var t=a(87462),n=(a(67294),a(3905));const i={sidebar_position:1},o="\u5728AWS\u4e0a\u90e8\u7f72llama-2",m={unversionedId:"tutorials/llama2-on-aws",id:"tutorials/llama2-on-aws",title:"\u5728AWS\u4e0a\u90e8\u7f72llama-2",description:"\u672c\u6559\u7a0b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Walrus\u5728AWS\u4e0a\u4f7f\u7528CPU\u90e8\u7f72llama-2\uff0c\u5e76\u901a\u8fc7\u53cb\u597d\u7684web UI\u6765\u4f7f\u7528\u5b83\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorials/llama2-on-aws.md",sourceDirName:"tutorials",slug:"/tutorials/llama2-on-aws",permalink:"/docs/zh/tutorials/llama2-on-aws",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/tutorials/llama2-on-aws.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"\u5728 Github \u4e0a\u521b\u5efa\u6a21\u677f\u5e93",permalink:"/docs/zh/tutorials/catalog-on-github"},next:{title:"\u96c6\u6210 CICD \u5de5\u5177",permalink:"/docs/zh/tutorials/integrate-with-cicd"}},r={},d=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u7b80\u5355\u7684\u65b9\u5f0f",id:"\u7b80\u5355\u7684\u65b9\u5f0f",level:2},{value:"\u6dfb\u52a0llama-2\u6a21\u677f",id:"\u6dfb\u52a0llama-2\u6a21\u677f",level:3},{value:"\u914d\u7f6eAWS\u51ed\u8bc1",id:"\u914d\u7f6eaws\u51ed\u8bc1",level:3},{value:"\u914d\u7f6e\u73af\u5883",id:"\u914d\u7f6e\u73af\u5883",level:3},{value:"\u521b\u5efallama-2\u670d\u52a1",id:"\u521b\u5efallama-2\u670d\u52a1",level:3},{value:"\u8bbf\u95eellama-2 web UI",id:"\u8bbf\u95eellama-2-web-ui",level:3},{value:"\u6df1\u5165\u4e86\u89e3\uff1a\u4ece\u96f6\u5f00\u59cb\u6784\u5efallama-2\u955c\u50cf",id:"\u6df1\u5165\u4e86\u89e3\u4ece\u96f6\u5f00\u59cb\u6784\u5efallama-2\u955c\u50cf",level:2}],s={toc:d};function p(e){let{components:l,...i}=e;return(0,n.kt)("wrapper",(0,t.Z)({},s,i,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5728aws\u4e0a\u90e8\u7f72llama-2"},"\u5728AWS\u4e0a\u90e8\u7f72llama-2"),(0,n.kt)("p",null,"\u672c\u6559\u7a0b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Walrus\u5728AWS\u4e0a\u4f7f\u7528CPU\u90e8\u7f72llama-2\uff0c\u5e76\u901a\u8fc7\u53cb\u597d\u7684web UI\u6765\u4f7f\u7528\u5b83\u3002"),(0,n.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("p",null,"\u60f3\u8981\u8ddf\u968f\u672c\u6559\u7a0b\uff0c\u60a8\u5c06\u9700\u8981\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"AWS\u8d26\u53f7\u4ee5\u53ca\u5173\u8054\u7684",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html"},"\u51ed\u8bc1"),"\uff0c\u5e76\u4e14\u6709\u8db3\u591f\u7684\u6743\u9650\u6765\u521b\u5efaEC2\u5b9e\u4f8b\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/deploy/standalone"},"\u5b89\u88c5Walrus"),"\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\n\u867d\u7136\u4f7f\u7528CPU\u6bd4GPU\u4fbf\u5b9c\uff0c\u4f46\u4ecd\u4f1a\u7ed9\u60a8\u5e26\u6765\u5bf9\u5e94EC2\u5b9e\u4f8b\u7684\u5f00\u9500\u3002")),(0,n.kt)("h2",{id:"\u7b80\u5355\u7684\u65b9\u5f0f"},"\u7b80\u5355\u7684\u65b9\u5f0f"),(0,n.kt)("p",null,"\u901a\u8fc7Walrus\uff0c\u60a8\u53ea\u9700\u8981\u4e00\u5206\u949f\u5de6\u53f3\u5c31\u53ef\u4ee5\u5728AWS\u4e0a\u8fd0\u884c\u4e00\u4e2a\u53ef\u7528\u7684llama-2\u5b9e\u4f8b\uff0c\u5e76\u6709\u4e00\u4e2a\u53cb\u597d\u7684web UI\u6765\u4f7f\u7528\u5b83\u3002\u53ea\u9700\u8981\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,n.kt)("h3",{id:"\u6dfb\u52a0llama-2\u6a21\u677f"},"\u6dfb\u52a0llama-2\u6a21\u677f"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u767b\u5165Walrus\uff0c\u70b9\u51fb\u5de6\u4fa7\u5bfc\u822a\u4e2d\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"\u8fd0\u7ef4\u4e2d\u5fc3"),"\uff0c\u5728",(0,n.kt)("inlineCode",{parentName:"li"},"\u6a21\u677f"),"\u6807\u7b7e\u9875\u4e2d\uff0c\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u65b0\u5efa\u6a21\u677f"),"\u6309\u94ae\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u586b\u5165\u6a21\u677f\u540d\u79f0\uff0c\u4f8b\u5982",(0,n.kt)("inlineCode",{parentName:"li"},"llama-2"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u6765\u6e90\u4e2d\u586b\u5199",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/walrus-tutorials/llama2-on-aws"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"llama2-add-template",src:a(65855).Z,width:"3820",height:"1968"})),(0,n.kt)("h3",{id:"\u914d\u7f6eaws\u51ed\u8bc1"},"\u914d\u7f6eAWS\u51ed\u8bc1"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u4e2d\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u8fd0\u7ef4\u4e2d\u5fc3"),"\uff0c\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u8fde\u63a5\u5668"),"\u6807\u7b7e\u9875\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u65b0\u5efa\u8fde\u63a5\u5668"),"\u6309\u94ae\uff0c\u9009\u62e9",(0,n.kt)("inlineCode",{parentName:"li"},"\u4e91\u5382\u5546"),"\u7c7b\u578b\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u586b\u5165\u8fde\u63a5\u5668\u540d\u79f0\uff0c\u4f8b\u5982",(0,n.kt)("inlineCode",{parentName:"li"},"aws"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("inlineCode",{parentName:"li"},"\u9002\u7528\u73af\u5883\u7c7b\u578b"),"\u9009\u9879\u4e2d\u9009\u62e9",(0,n.kt)("inlineCode",{parentName:"li"},"\u5f00\u53d1"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("inlineCode",{parentName:"li"},"\u7c7b\u578b"),"\u9009\u9879\u4e2d\u9009\u62e9",(0,n.kt)("inlineCode",{parentName:"li"},"AWS"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("inlineCode",{parentName:"li"},"\u533a\u57df"),"\u9009\u9879\u4e2d\u9009\u62e9",(0,n.kt)("inlineCode",{parentName:"li"},"\u4e1c\u4eac(ap-northeast-1)"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\n\u8fd9\u91cc\u4f7f\u7528\u6307\u5b9a\u7684\u533a\u57df\uff0c\u662f\u56e0\u4e3a\u540e\u7eed\u4f7f\u7528\u4e86\u8be5\u533a\u57df\u4e0b\u6307\u5b9a\u7684AMI\u3002\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u5176\u5b83\u533a\u57df\uff0c\u53ef\u4ee5\u5c06\u8be5AMI\u5bfc\u51fa\u5230\u60a8\u7684\u533a\u57df\u3002\u6216\u53c2\u8003\u540e\u7eed\u7ae0\u8282\u4e86\u89e3\u5982\u4f55\u4ece\u96f6\u6784\u5efallama-2\u955c\u50cf\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"llama2-add-connector",src:a(35924).Z,width:"3816",height:"1958"})),(0,n.kt)("h3",{id:"\u914d\u7f6e\u73af\u5883"},"\u914d\u7f6e\u73af\u5883"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u4e2d\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u5e94\u7528\u7ba1\u7406"),"\uff0c\u70b9\u51fb\u9762\u5305\u5c51\u4e2d\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"default"),"\u9879\u76ee\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("inlineCode",{parentName:"li"},"\u73af\u5883"),"\u6807\u7b7e\u9875\u4e2d\uff0c\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u65b0\u5efa\u73af\u5883"),"\u6309\u94ae\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u586b\u5165\u73af\u5883\u540d\u79f0\uff0c\u4f8b\u5982",(0,n.kt)("inlineCode",{parentName:"li"},"dev"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("inlineCode",{parentName:"li"},"\u73af\u5883\u7c7b\u578b"),"\u9009\u9879\u4e2d\u9009\u62e9",(0,n.kt)("inlineCode",{parentName:"li"},"\u5f00\u53d1"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u6dfb\u52a0\u8fde\u63a5\u5668"),"\u6309\u94ae\uff0c\u9009\u62e9\u4e0a\u4e00\u6b65\u521b\u5efa\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"aws"),"\u8fde\u63a5\u5668\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"llama2-add-environment",src:a(31811).Z,width:"3814",height:"1962"})),(0,n.kt)("h3",{id:"\u521b\u5efallama-2\u670d\u52a1"},"\u521b\u5efallama-2\u670d\u52a1"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("inlineCode",{parentName:"li"},"\u73af\u5883"),"\u6807\u7b7e\u9875\u4e2d\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"dev"),"\u73af\u5883\u7684\u540d\u79f0\uff0c\u8fdb\u5165\u73af\u5883\u89c6\u56fe\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u65b0\u5efa\u8d44\u6e90"),"\u6309\u94ae\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u586b\u5165\u670d\u52a1\u540d\u79f0\uff0c\u4f8b\u5982",(0,n.kt)("inlineCode",{parentName:"li"},"my-llama-2"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u542f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"\u4f7f\u7528\u6a21\u677f"),"\u9009\u9879\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("inlineCode",{parentName:"li"},"\u6a21\u677f"),"\u9009\u9879\u4e2d\u9009\u62e9",(0,n.kt)("inlineCode",{parentName:"li"},"llama-2"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\n\u9ed8\u8ba4\u7684\u914d\u7f6e\u5047\u5b9a\u60a8\u7684AWS\u8d26\u53f7\u5728\u5bf9\u5e94\u533a\u57df\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7684VPC\u3002\u5982\u679c\u60a8\u6ca1\u6709\u9ed8\u8ba4\u7684VPC\uff0c\u8bf7\u5230AWS\u7684VPC\u63a7\u5236\u53f0\u521b\u5efa\u4e00\u4e2a\u65b0\u7684VPC\uff0c\u5e76\u5173\u8054\u4e00\u4e2a\u5b50\u7f51\u548c\u5b89\u5168\u7ec4\u5230\u8be5VPC\u3002\n\u5b89\u5168\u7ec4\u9700\u8981\u5f00\u653e7860 TCP\u7aef\u53e3\uff08\u7528\u4e8e\u8bbf\u95eellama-2 web UI\uff09\u3002\u60a8\u53ef\u4ee5\u5728\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u60a8\u7684VPC\u540d\u5b57\u548c\u5b89\u5168\u7ec4\u540d\u5b57\u3002")),(0,n.kt)("h3",{id:"\u8bbf\u95eellama-2-web-ui"},"\u8bbf\u95eellama-2 web UI"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728llama-2\u8d44\u6e90\u7684\u8be6\u60c5\u9875\u4e2d\u770b\u5230\u5b83\u7684\u90e8\u7f72\u548c\u8fd0\u884c\u72b6\u6001\u3002\u7b49\u5f85llama-2\u8d44\u6e90\u5b8c\u6210\u90e8\u7f72\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7Walrus UI\u70b9\u51fb\u5b83\u7684\u8bbf\u95ee\u94fe\u63a5\u6765\u8bbf\u95ee\u5b83\u7684web UI\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"llama2-resource-detail",src:a(14545).Z,width:"3812",height:"1968"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"llama2-webui",src:a(83045).Z,width:"3538",height:"1840"})),(0,n.kt)("h2",{id:"\u6df1\u5165\u4e86\u89e3\u4ece\u96f6\u5f00\u59cb\u6784\u5efallama-2\u955c\u50cf"},"\u6df1\u5165\u4e86\u89e3\uff1a\u4ece\u96f6\u5f00\u59cb\u6784\u5efallama-2\u955c\u50cf"),(0,n.kt)("p",null,"\u4e0a\u8ff0\u6307\u5f15\u4e2d\u4f7f\u7528\u4e86\u6253\u5305\u597d\u7684llama-2\u955c\u50cf\u3002\u597d\u5904\u663e\u800c\u6613\u89c1\uff0c\u5728\u521b\u5efa\u4e00\u4e2a\u65b0\u7684llama-2\u5b9e\u4f8b\u7684\u65f6\u5019\u60a8\u4e0d\u518d\u9700\u8981\u82b1\u8d39\u65f6\u95f4\u4e0b\u8f7d\u5927\u8bed\u8a00\u6a21\u578b\uff08\u901a\u5e38\u6709\u7740\u53ef\u89c2\u7684\u6587\u4ef6\u5927\u5c0f\uff09\u4ee5\u53ca\u6784\u5efa\u63a8\u7406\u670d\u52a1\u3002\n\u672c\u8282\u5c06\u4ecb\u7ecd\u4e0a\u8ff0\u8fd9\u6837\u7684llama-2\u955c\u50cf\u662f\u5982\u4f55\u6784\u5efa\u7684\u3002"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728",(0,n.kt)("a",{parentName:"p",href:"https://github.com/walrus-tutorials/llama2-on-aws/blob/build/main.tf"},"\u8fd9\u91cc"),"\u67e5\u770b\u5b8c\u6574\u7684\u6784\u5efa\u8fc7\u7a0b\u3002"),(0,n.kt)("p",null,"\u5176\u4e2d\u7684\u5173\u952e\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# get text-generation-webui\ngit clone https://github.com/oobabooga/text-generation-webui && cd text-generation-webui\n# configure text-generation-webui\nln -s docker/{Dockerfile,docker-compose.yml,.dockerignore} .\ncp docker/.env.example .env\nsed -i '/^CLI_ARGS=/s/.*/CLI_ARGS=--model llama-2-7b-chat.ggmlv3.q4_K_M.bin --wbits 4 --listen --auto-devices/' .env\nsed -i '/^\\s*deploy:/,$d' docker/docker-compose.yml\n# get quantized llama-2\ncurl -L https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGML/resolve/main/llama-2-7b-chat.ggmlv3.q4_K_M.bin --output ./models/llama-2-7b-chat.ggmlv3.q4_K_M.bin\n# build and run\ndocker compose up --build\n")),(0,n.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u8be5\u8fc7\u7a0b\u4e0b\u8f7d\u4e86\u91cf\u5316\u7684llama-2-7b-chat\u6a21\u578b\uff0c\u7136\u540e\u6784\u5efa\u5e76\u4f7f\u7528text-generation-webui\u6765\u542f\u52a8llama-2\u670d\u52a1\u3002"))}p.isMDXComponent=!0},35924:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a.p+"assets/images/llama2-add-connector-cn-fb5d820160dccb694cb606f67f1b613c.png"},31811:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a.p+"assets/images/llama2-add-environment-cn-c231b648ff4d6a96982ce9080b2001d7.png"},65855:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a.p+"assets/images/llama2-add-template-cn-58bb36e1369e23f4d682774c7ab81abb.png"},14545:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a.p+"assets/images/llama2-resource-detail-cn-f7a12e808debf7687022511b74b1150b.png"},83045:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a.p+"assets/images/llama2-web-ui-1d82a84f88f74bd6e3add858afa5e0b8.png"}}]);