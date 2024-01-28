"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84220],{29029:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>k});var l=a(87462),s=(a(67294),a(3905));const n={},r="\u5feb\u901f\u5165\u95e8",i={unversionedId:"quickstart",id:"quickstart",title:"\u5feb\u901f\u5165\u95e8",description:"\u6ce8\u610f\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/zh/quickstart",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u6982\u89c8",permalink:"/docs/zh/"},next:{title:"\u6982\u5ff5",permalink:"/docs/zh/concepts"}},o={},k=[{value:"\u5b89\u88c5 Walrus",id:"\u5b89\u88c5-walrus",level:2},{value:"\u8bbf\u95ee UI",id:"\u8bbf\u95ee-ui",level:2},{value:"\u90e8\u7f72\u5e94\u7528",id:"\u90e8\u7f72\u5e94\u7528",level:2}],p={toc:k};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u5feb\u901f\u5165\u95e8"},"\u5feb\u901f\u5165\u95e8"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,s.kt)("p",{parentName:"blockquote"},"Walrus \u7684\u5f53\u524d\u7248\u672c\u5904\u4e8e alpha \u9636\u6bb5\u3002\u540e\u7eed\u7248\u672c\u53ef\u80fd\u4f1a\u5f15\u5165\u4e0d\u517c\u5bb9\u7684 API \u53d8\u66f4\u3002")),(0,s.kt)("h2",{id:"\u5b89\u88c5-walrus"},"\u5b89\u88c5 Walrus"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u524d\u7f6e\u6761\u4ef6\uff1a"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u4e0d\u5c11\u4e8e 4CPU\uff0c8Gi \u5185\u5b58\u7684 Linux \u670d\u52a1\u5668\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u81f3\u5c11 50GB \u7684\u7a7a\u4f59\u78c1\u76d8\u7a7a\u95f4\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5b89\u88c5 Docker\uff0c\u8be6\u7ec6\u6307\u5f15\u53c2\u8003",(0,s.kt)("a",{parentName:"li",href:"https://docs.docker.com/"},"Docker \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u5f00\u653e 80 \u548c 443 \u7aef\u53e3\u3002"))),(0,s.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 Walrus \u670d\u52a1\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always \\\n  -p 80:80 -p 443:443 -p 30000-30100:30000-30100 \\\n  --name walrus \\\n  -e SERVER_BUILTIN_CATALOG_PROVIDER=gitee \\\n  sealio/walrus:v0.5.0\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"\u7aef\u53e3\u8303\u56f4",(0,s.kt)("inlineCode",{parentName:"li"},"30000-30100"),"\u7528\u4e8e\u66b4\u9732\u672c\u5730 K3s \u73af\u5883\u4e2d\u90e8\u7f72\u7684\u5e94\u7528\u670d\u52a1\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u52a0\u901f\u56fd\u5185\u7528\u6237\u7684\u6a21\u677f\u6e90\u7684\u8bbf\u95ee\uff0c\u6211\u4eec\u901a\u8fc7\u73af\u5883\u53d8\u91cf",(0,s.kt)("inlineCode",{parentName:"li"},"SERVER_BUILTIN_CATALOG_PROVIDER"),"\u6307\u5b9a\u6a21\u677f\u6e90\u5730\u5740\u4e3a Gitee\u3002\u5982\u679c\u60a8\u7684\u670d\u52a1\u5668\u5728\u56fd\u5916\uff0c\u53ef\u4ee5\u5ffd\u7565\u6b64\u73af\u5883\u53d8\u91cf\u3002"))),(0,s.kt)("p",null,"\u66f4\u591a\u90e8\u7f72\u8981\u6c42\uff0c\u8bf7\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"/deploy/standalone"},"\u90e8\u7f72"),"\u3002"),(0,s.kt)("h2",{id:"\u8bbf\u95ee-ui"},"\u8bbf\u95ee UI"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u901a\u8fc7",(0,s.kt)("inlineCode",{parentName:"p"},"https://<server-address>"),"\u8bbf\u95ee Walrus \u7684 UI\u3002")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u4ee5",(0,s.kt)("inlineCode",{parentName:"p"},"admin"),"\u7528\u6237\u540d\u4ee5\u53ca\u521d\u59cb\u7ba1\u7406\u5458\u5bc6\u7801\u767b\u9646 Walrus\uff0c\u5e76\u6839\u636e UI \u63d0\u793a\u8bbe\u7f6e\u65b0\u7684\u5bc6\u7801\u4ee5\u53ca Walrus \u7684\u8bbf\u95ee\u5730\u5740\u3002"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u7b2c\u4e00\u6b21\u767b\u9646\u65f6\u6839\u636e UI \u63d0\u793a\uff0c\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u6307\u4ee4\u83b7\u53d6\u521d\u59cb\u7684\u7ba1\u7406\u5458\u5bc6\u7801\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'sudo docker logs walrus 2>&1 | grep "Bootstrap Admin Password"\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"qs-first-login",src:a(85494).Z,width:"3016",height:"1632"})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"\u767b\u9646\u540e\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u65b0\u5bc6\u7801\uff0c\u4ee5\u53ca\u914d\u7f6e Walrus \u7684\u8bbf\u95ee\u5730\u5740\u3002")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"qs-set-pwd",src:a(88307).Z,width:"3006",height:"1540"})),(0,s.kt)("h2",{id:"\u90e8\u7f72\u5e94\u7528"},"\u90e8\u7f72\u5e94\u7528"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5bfc\u822a\u680f\u4e2d\u7684",(0,s.kt)("inlineCode",{parentName:"li"},"\u5e94\u7528\u7ba1\u7406"),"\u83dc\u5355\uff0c\u8fdb\u5165",(0,s.kt)("inlineCode",{parentName:"li"},"default"),"\u9879\u76ee\u7684",(0,s.kt)("inlineCode",{parentName:"li"},"local"),"\u73af\u5883\u89c6\u56fe\u3002")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"Walrus \u9ed8\u8ba4\u4e3a\u60a8\u521b\u5efa\u4e86",(0,s.kt)("inlineCode",{parentName:"li"},"default"),"\u9879\u76ee\u4e0b\u7684",(0,s.kt)("inlineCode",{parentName:"li"},"local"),"\u73af\u5883\uff0c\u7528\u4e8e\u5feb\u901f\u4f53\u9a8c\u5e94\u7528\u90e8\u7f72\u6d41\u7a0b\u3002\u5b83\u8fde\u63a5\u7684\u662f\u4e00\u4e2a\u5185\u7f6e\u7684 K3S \u96c6\u7fa4\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u542f\u52a8\u65f6\u4fee\u6539 Walrus \u7684\u914d\u7f6e\u6765\u53d6\u6d88\u73af\u5883\u7684\u521b\u5efa\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u7684 K3S \u96c6\u7fa4\u8fde\u63a5\u5668\u4ec5\u7528\u4e8e\u6d4b\u8bd5\uff0c\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u3002\u5982\u679c\u60a8\u9700\u8981\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u90e8\u7f72\u5e94\u7528\uff0c\u8bf7\u53c2\u8003",(0,s.kt)("a",{parentName:"li",href:"deploy/replication"},"\u9ad8\u53ef\u7528\u90e8\u7f72\u6307\u5f15"),"\u6216\u8005\u624b\u52a8\u914d\u7f6e Kubernetes \u96c6\u7fa4\u8fde\u63a5\u5668\u3002"))),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,s.kt)("inlineCode",{parentName:"li"},"\u5bfc\u5165 YAML"),"\u6309\u94ae\u5bfc\u5165 Walrus \u5185\u7f6e\u7684 Walrus file\u3002")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"qs-create-res",src:a(77018).Z,width:"2976",height:"1618"})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"\u4ece\u53f3\u4fa7\u7684 ",(0,s.kt)("strong",{parentName:"li"},"Walrus File Hub")," \u4e2d\u9009\u62e9",(0,s.kt)("inlineCode",{parentName:"li"},"nginx"),"\u793a\u4f8b\u3002")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"qs-create-res-nginx",src:a(59843).Z,width:"2562",height:"1620"})),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,s.kt)("inlineCode",{parentName:"li"},"\u5bfc\u5165"),"\u6309\u94ae\u5b8c\u6210\u8d44\u6e90\u7684\u521b\u5efa\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u8d44\u6e90\u7684\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u7ec4\u4ef6\uff0c\u65e5\u5fd7\uff0c\u6267\u884c\u7ec8\u7aef\u547d\u4ee4\uff0c\u8bbf\u95ee\u8be5 nginx \u670d\u52a1\u7684\u5730\u5740\u7b49\u3002")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u7aef\u70b9\u3002")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"qs-res-access",src:a(4471).Z,width:"2996",height:"1604"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u67e5\u770b\u90e8\u7f72\u65e5\u5fd7\u3002")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"qs-logs",src:a(61935).Z,width:"2998",height:"1622"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u67e5\u770b\u7ec4\u4ef6\u65e5\u5fd7\u3002")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"qs-res-logs",src:a(11663).Z,width:"2996",height:"1602"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u7ec8\u7aef\u3002")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"qs-res-exec",src:a(73073).Z,width:"3012",height:"1634"})),(0,s.kt)("p",null,"\u606d\u559c\uff0c\u60a8\u5df2\u5b8c\u6210\u672c\u8282\u5feb\u901f\u5165\u95e8\u3002"))}u.isMDXComponent=!0},59843:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/qs-create-res-nginx-c81791ef63ddff21fef6ddd949e711f5.png"},77018:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/qs-create-res-c512348ba9afd06e4b65841a9479ab0c.png"},85494:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/qs-first-login-5b5f7d91321f3a00f6b5384daf078b2a.png"},61935:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/qs-logs-0052ef567ad51069f81b22c3d93a65e3.png"},4471:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/qs-res-access-0d4039e677e68cfc8ef70c4d06c1a47f.png"},73073:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/qs-res-exec-fce9ee2956a21bcf02ecc1627ca74deb.png"},11663:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/qs-res-logs-409b7973a6106c1a959d1b5696051ccc.png"},88307:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/qs-set-pwd-2505b42ae697b3ee33cad1988cdf956d.png"}}]);