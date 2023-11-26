(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90544],{44765:(e,t,n)=>{"use strict";n(67294),n(93162)},92272:(e,t,n)=>{"use strict";n(67294),n(44996),n(50941)},29330:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var o=n(87462),a=(n(67294),n(3905)),s=(n(92272),n(63303)),i=n(85162);n(44765);const r={id:"restful-apis",title:"Restful APIs to access Walrus.",description:"Restful APIs to access Walrus.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!1,custom_edit_url:null},l=void 0,u={unversionedId:"openapi/restful-apis",id:"version-v0.3/openapi/restful-apis",title:"Restful APIs to access Walrus.",description:"Restful APIs to access Walrus.",source:"@site/versioned_docs/version-v0.3/openapi/restful-apis.info.mdx",sourceDirName:"openapi",slug:"/openapi/restful-apis",permalink:"/docs/zh/v0.3/openapi/restful-apis",draft:!1,editUrl:null,tags:[],version:"v0.3",sidebarPosition:0,frontMatter:{id:"restful-apis",title:"Restful APIs to access Walrus.",description:"Restful APIs to access Walrus.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!1,custom_edit_url:null},sidebar:"openapi",previous:{title:"API Docs",permalink:"/docs/zh/v0.3/category/openapi"},next:{title:"Get info.",permalink:"/docs/zh/v0.3/openapi/eb-211-e-798-af-0-d-6-b-4"}},c={},d=[],p={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: dev"),(0,a.kt)("h1",{id:"restful-apis"},"Restful APIs"),(0,a.kt)("p",null,"Restful APIs to access Walrus."),(0,a.kt)("div",{style:{marginBottom:"2rem"}},(0,a.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,a.kt)(s.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,a.kt)(i.Z,{label:"HTTP: Basic Auth",value:"BasicAuth",mdxType:"TabItem"},(0,a.kt)("p",null,"Basic Authentication, in form of base64(<username",">",":<password",">","), the password must be a valid Seal API token."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"http")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"HTTP Authorization Scheme:"),(0,a.kt)("td",null,"basic")))))),(0,a.kt)(i.Z,{label:"HTTP: Bearer Auth",value:"BearerAuth",mdxType:"TabItem"},(0,a.kt)("p",null,"Bearer Authentication, the token must be a valid Seal API token."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"http")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"HTTP Authorization Scheme:"),(0,a.kt)("td",null,"bearer")))))))))}f.isMDXComponent=!0},93162:function(e,t,n){var o,a,s,i=n(25108);a=[],o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(i.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){u(o.response,t,n)},o.onerror=function(){i.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var i=r.URL||r.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?s(l):a(l.href)?o(e,t,n):s(l,l.target="_blank")):(l.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){s(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(a(e))o(e,n,i);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){s(r)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var s="application/octet-stream"===e.type,i=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||s&&i||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},c.readAsDataURL(e)}else{var d=r.URL||r.webkitURL,p=d.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});r.saveAs=u.saveAs=u,e.exports=u},void 0===(s="function"==typeof o?o.apply(t,a):o)||(e.exports=s)}}]);