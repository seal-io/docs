"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2651],{62257:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>k,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=l(87462),n=(l(67294),l(3905));const i={},r="\u5feb\u901f\u5165\u95e8",o={unversionedId:"quickstart",id:"quickstart",title:"\u5feb\u901f\u5165\u95e8",description:"\u6ce8\u610f\uff1a",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u6982\u89c8",permalink:"/docs/"},next:{title:"\u90e8\u7f72",permalink:"/docs/category/\u90e8\u7f72"}},k={},p=[{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u8bbf\u95ee",id:"\u8bbf\u95ee",level:2},{value:"\u6dfb\u52a0Kubernetes\u96c6\u7fa4\u4f5c\u4e3a\u5e94\u7528\u7684\u90e8\u7f72\u76ee\u6807",id:"\u6dfb\u52a0kubernetes\u96c6\u7fa4\u4f5c\u4e3a\u5e94\u7528\u7684\u90e8\u7f72\u76ee\u6807",level:2},{value:"\u521b\u5efa\u73af\u5883",id:"\u521b\u5efa\u73af\u5883",level:2},{value:"\u90e8\u7f72\u670d\u52a1",id:"\u90e8\u7f72\u670d\u52a1",level:2}],u={toc:p};function s(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5feb\u901f\u5165\u95e8"},"\u5feb\u901f\u5165\u95e8"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,n.kt)("p",{parentName:"blockquote"},"Seal\u7684\u5f53\u524d\u7248\u672c\u5904\u4e8ealpha\u9636\u6bb5\u3002\u540e\u7eed\u7248\u672c\u53ef\u80fd\u4f1a\u5f15\u5165\u4e0d\u517c\u5bb9\u7684API\u53d8\u66f4\u3002")),(0,n.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u524d\u7f6e\u6761\u4ef6\uff1a"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u4e0d\u5c11\u4e8e4CPU\uff0c8Gi\u5185\u5b58\u7684Linux\u670d\u52a1\u5668\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u81f3\u5c1150GB\u7684\u7a7a\u4f59\u78c1\u76d8\u7a7a\u95f4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5Docker\uff0c\u8be6\u7ec6\u6307\u5f15\u53c2\u8003",(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/"},"Docker\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u5f00\u653e80\u548c443\u7aef\u53e3\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u524d\u5f80",(0,n.kt)("a",{parentName:"li",href:"https://seal.io/trial.html"},"\u5b98\u7f51"),"\u7533\u8bf7\u4ea7\u54c1\u8bd5\u7528\u955c\u50cf\u3002"))),(0,n.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8Seal\u670d\u52a1\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always -p 80:80 -p 443:443 <seal-container-image>\n")),(0,n.kt)("p",null,"\u66f4\u591a\u90e8\u7f72\u8981\u6c42\uff0c\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"/deploy/standalone"},"\u90e8\u7f72"),"\u3002"),(0,n.kt)("h2",{id:"\u8bbf\u95ee"},"\u8bbf\u95ee"),(0,n.kt)("p",null,"\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"https://<server-address>"),"\u8bbf\u95eeSeal\u7684UI\u3002"),(0,n.kt)("p",null,"\u7b2c\u4e00\u6b21\u767b\u9646\u65f6\u6839\u636eUI\u63d0\u793a\uff0c\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u6307\u4ee4\u83b7\u53d6\u521d\u59cb\u7684\u7ba1\u7406\u5458\u5bc6\u7801\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'sudo docker logs <your-container-id> 2>&1 | grep "Bootstrap Admin Password"\n')),(0,n.kt)("p",null,"\u4ee5",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),"\u7528\u6237\u540d\u4ee5\u53ca\u521d\u59cb\u7ba1\u7406\u5458\u5bc6\u7801\u767b\u9646Seal\uff0c\u5e76\u6839\u636eUI\u63d0\u793a\u8bbe\u7f6e\u65b0\u7684\u5bc6\u7801\u4ee5\u53caSeal\u7684\u8bbf\u95ee\u5730\u5740\u3002"),(0,n.kt)("h2",{id:"\u6dfb\u52a0kubernetes\u96c6\u7fa4\u4f5c\u4e3a\u5e94\u7528\u7684\u90e8\u7f72\u76ee\u6807"},"\u6dfb\u52a0Kubernetes\u96c6\u7fa4\u4f5c\u4e3a\u5e94\u7528\u7684\u90e8\u7f72\u76ee\u6807"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u524d\u7f6e\u6761\u4ef6\uff1a"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002"),(0,n.kt)("li",{parentName:"ul"},"Seal server\u4e0eKubernetes apiserver\u76f8\u4e92\u53ef\u8fbe\u3002"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5bfc\u822a\u680f\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"\u5e94\u7528\u7ba1\u7406"),"\u83dc\u5355\uff0c\u9ed8\u8ba4\u8fdb\u5165\u5230",(0,n.kt)("inlineCode",{parentName:"li"},"default"),"\u9879\u76ee\u89c6\u56fe\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u8fde\u63a5\u5668"),"\u6807\u7b7e\u9875\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u65b0\u5efa\u8fde\u63a5\u5668"),"\u6309\u94ae\uff0c\u9009\u62e9",(0,n.kt)("inlineCode",{parentName:"li"},"Kubernetes"),"\u7c7b\u578b\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u586b\u5165\u96c6\u7fa4\u540d\u79f0\u53caKubeConfig\u6587\u4ef6\uff0c\u70b9\u51fb\u4fdd\u5b58\u3002")),(0,n.kt)("h2",{id:"\u521b\u5efa\u73af\u5883"},"\u521b\u5efa\u73af\u5883"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u73af\u5883"),"\u6807\u7b7e\u9875\uff0c\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u65b0\u5efa\u73af\u5883"),"\u6309\u94ae\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8f93\u5165\u73af\u5883\u540d\u79f0\uff0c\u5982",(0,n.kt)("inlineCode",{parentName:"li"},"dev"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u6dfb\u52a0\u8fde\u63a5\u5668"),"\u6309\u94ae\uff0c\u9009\u62e9\u524d\u7f6e\u6b65\u9aa4\u4e2d\u6dfb\u52a0\u7684Kubernetes\u8fde\u63a5\u5668\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u4fdd\u5b58\u3002")),(0,n.kt)("h2",{id:"\u90e8\u7f72\u670d\u52a1"},"\u90e8\u7f72\u670d\u52a1"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728\u73af\u5883\u5217\u8868\u9875\u4e2d\uff0c\u70b9\u51fb\u524d\u7f6e\u6b65\u9aa4\u521b\u5efa\u7684\u73af\u5883\u540d\u79f0\uff0c\u8fdb\u5165\u73af\u5883\u89c6\u56fe\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u65b0\u5efa\u670d\u52a1"),"\u6309\u94ae\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u586b\u5199\u670d\u52a1\u540d\u79f0\uff0c\u5982",(0,n.kt)("inlineCode",{parentName:"li"},"myapp"),"\uff0c\u786e\u8ba4\u6a21\u677f\u9009\u4e2d",(0,n.kt)("inlineCode",{parentName:"li"},"webservice"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u6a21\u677f\u914d\u7f6e\u7684Image Name\u4e2d\u8f93\u5165",(0,n.kt)("inlineCode",{parentName:"li"},"nginx"),"\u955c\u50cf\uff0c\u70b9\u51fb\u786e\u5b9a\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u4fdd\u5b58"),"\u6309\u94ae\u5b8c\u6210\u670d\u52a1\u7684\u521b\u5efa\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u670d\u52a1\u7684\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u8d44\u6e90\uff0c\u65e5\u5fd7\uff0c\u6267\u884c\u7ec8\u7aef\u547d\u4ee4\uff0c\u8bbf\u95ee\u8be5nginx\u670d\u52a1\u7684\u5730\u5740\u7b49\u3002")),(0,n.kt)("p",null,"\u606d\u559c\uff0c\u60a8\u5df2\u5b8c\u6210\u672c\u8282\u5feb\u901f\u5165\u95e8\u3002"))}s.isMDXComponent=!0}}]);