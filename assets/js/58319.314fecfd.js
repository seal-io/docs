"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58319],{85162:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(67294),a=r(86010);const n="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(n,s),hidden:r},t)}},65130:(e,t,r)=>{r.d(t,{b:()=>s,k:()=>l});var o=r(67294),a=r(902);const n=o.createContext(null);function s(e){let{children:t,content:r}=e;const a=function(e){return(0,o.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return o.createElement(n.Provider,{value:a},t)}function l(){const e=(0,o.useContext)(n);if(null===e)throw new a.i6("DocProvider");return e}},14353:(e,t,r)=>{r.d(t,{D:()=>l,f:()=>c});var o=r(67294),a=r(902);const n=Symbol("EmptyContext"),s=o.createContext(n);function l(e){let{children:t}=e;const[r,a]=(0,o.useState)(null),n=(0,o.useMemo)((()=>({expandedItem:r,setExpandedItem:a})),[r]);return o.createElement(s.Provider,{value:n},t)}function c(){const e=(0,o.useContext)(s);if(e===n)throw new a.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,r)=>{r.d(t,{a:()=>s});var o=r(67294),a=r(12466),n=r(85936);function s(e){let{threshold:t}=e;const[r,s]=(0,o.useState)(!1),l=(0,o.useRef)(!1),{startScroll:c,cancelScroll:i}=(0,a.Ct)();return(0,a.RF)(((e,r)=>{let{scrollY:o}=e;const a=null==r?void 0:r.scrollY;a&&(l.current?l.current=!1:o>=a?(i(),s(!1)):o<t?s(!1):o+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,n.S)((e=>{e.location.hash&&(l.current=!0,s(!1))})),{shown:r,scrollToTop:()=>c(0)}}},7789:(e,t,r)=>{r.r(t),r.d(t,{AnnouncementBarProvider:()=>A.pl,BlogPostProvider:()=>F,Collapsible:()=>c.z,ColorModeProvider:()=>m.S,DEFAULT_SEARCH_TAG:()=>n.HX,DocProvider:()=>x.b,DocSidebarItemsExpandedStateProvider:()=>k.D,DocsPreferredVersionContextProvider:()=>T.L5,DocsSidebarProvider:()=>N.b,DocsVersionProvider:()=>D.q,HtmlClassNameProvider:()=>d.FG,NavbarProvider:()=>W.V,NavbarSecondaryMenuFiller:()=>h.Zo,PageMetadata:()=>d.d,PluginHtmlClassNameProvider:()=>d.VC,ReactContextError:()=>u.i6,ScrollControllerProvider:()=>G.OC,SkipToContentFallbackId:()=>y.u,SkipToContentLink:()=>y.l,TabGroupChoiceProvider:()=>M.z,ThemeClassNames:()=>i.k,composeProviders:()=>u.Qc,containsLineNumbers:()=>_.nt,createStorageSlot:()=>a.W,docVersionSearchTag:()=>n.os,duplicates:()=>P.l,filterDocCardListItems:()=>s.MN,findFirstCategoryLink:()=>s.Wl,findSidebarCategory:()=>s.em,getPrismCssVariables:()=>_.QC,isActiveSidebarItem:()=>s._F,isDocsPluginEnabled:()=>s.cE,isMultiColumnFooterLinks:()=>g.a,isRegexpStringMatch:()=>C.F,isSamePath:()=>U.Mg,keyboardFocusedClassName:()=>Y.h,listStorageKeys:()=>a._,listTagsByLetters:()=>v,parseCodeBlockTitle:()=>_.bc,parseLanguage:()=>_.Vo,parseLines:()=>_.nZ,processAdmonitionProps:()=>w,splitNavbarItems:()=>W.A,translateTagsPageTitle:()=>f,uniq:()=>P.j,useAlternatePageUtils:()=>B.l,useAnnouncementBar:()=>A.nT,useBackToTopButton:()=>re.a,useBlogPost:()=>I,useCodeWordWrap:()=>te.F,useCollapsible:()=>c.u,useColorMode:()=>m.I,useContextualSearchFilters:()=>n._q,useCurrentSidebarCategory:()=>s.jA,useDoc:()=>x.k,useDocById:()=>s.xz,useDocRouteMetadata:()=>s.hI,useDocSidebarItemsExpandedState:()=>k.f,useDocsPreferredVersion:()=>T.J,useDocsPreferredVersionByPluginId:()=>T.Oh,useDocsSidebar:()=>N.V,useDocsVersion:()=>D.E,useDocsVersionCandidates:()=>s.lO,useEvent:()=>u.zX,useFilteredAndTreeifiedTOC:()=>z.b,useHideableNavbar:()=>q.c,useHistoryPopHandler:()=>$.R,useHomePageRoute:()=>U.Ns,useIsomorphicLayoutEffect:()=>u.LI,useKeyboardNavigation:()=>Y.t,useLayoutDoc:()=>s.vY,useLayoutDocsSidebar:()=>s.oz,useLocalPathname:()=>H.b,useLocationChange:()=>Z.S,useLockBodyScroll:()=>Q.N,useNavbarMobileSidebar:()=>R.e,useNavbarSecondaryMenu:()=>V.Y,usePluralForm:()=>l.c,usePrevious:()=>u.D9,usePrismTheme:()=>S.p,useScrollController:()=>G.sG,useScrollPosition:()=>G.RF,useScrollPositionBlocker:()=>G.o5,useSearchPage:()=>ee,useSidebarBreadcrumbs:()=>s.s1,useSmoothScrollTo:()=>G.Ct,useTOCHighlight:()=>j.S,useTabGroupChoice:()=>M.U,useThemeConfig:()=>o.L,useTitleFormatter:()=>O.p,useTreeifiedTOC:()=>z.a,useWindowSize:()=>p.i});var o=r(86668),a=r(50012),n=r(43320),s=r(53438),l=r(88824),c=r(86043),i=r(35281),u=r(902),d=r(10833),m=r(92949),h=r(13102),p=r(87524),b=r(95999);const f=()=>(0,b.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function v(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);t[r]??=[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[o]=t;return r.localeCompare(o)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}var g=r(42489),C=r(98022),P=r(67392),S=r(66412),T=r(60373),E=r(67294);function w(e){const{mdxAdmonitionTitle:t,rest:r}=function(e){const t=E.Children.toArray(e),r=t.find((e=>{var t;return E.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=E.createElement(E.Fragment,null,t.filter((e=>e!==r)));return{mdxAdmonitionTitle:null==r?void 0:r.props.children,rest:o}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:r}}var y=r(55225),k=r(14353),D=r(74477),N=r(1116),x=r(65130);const L=E.createContext(null);function F(e){let{children:t,content:r,isBlogPostPage:o=!1}=e;const a=function(e){let{content:t,isBlogPostPage:r}=e;return(0,E.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:r})),[t,r])}({content:r,isBlogPostPage:o});return E.createElement(L.Provider,{value:a},t)}function I(){const e=(0,E.useContext)(L);if(null===e)throw new u.i6("BlogPostProvider");return e}var A=r(59689),M=r(7094),R=r(93163),V=r(76857),B=r(94711),_=r(37016),O=r(82128),Z=r(85936),H=r(51753),$=r(91980),z=r(39665),G=r(12466),U=r(48596),W=r(58978),j=r(96841),q=r(99445),Y=r(19727),Q=r(69800),X=r(76775),K=r(52263);const J="q";function ee(){const e=(0,X.k6)(),{siteConfig:{baseUrl:t}}=(0,K.Z)(),[r,o]=(0,E.useState)("");(0,E.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get(J)??"";o(e)}),[]);return{searchQuery:r,setSearchQuery:(0,E.useCallback)((t=>{const r=new URLSearchParams(window.location.search);t?r.set(J,t):r.delete(J),e.replace({search:r.toString()}),o(t)}),[e]),generateSearchPageLink:(0,E.useCallback)((e=>`${t}search?q=${encodeURIComponent(e)}`),[t])}}var te=r(85448),re=r(2730)},88824:(e,t,r)=>{r.d(t,{c:()=>u});var o=r(67294),a=r(52263),n=r(25108);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return n.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const o=e.split("|");if(1===o.length)return o[0];o.length>r.pluralForms.length&&n.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const a=r.select(t),s=r.pluralForms.indexOf(a);return o[Math.min(s,o.length-1)]}(r,t,e)}}},63303:(e,t,r)=>{r.d(t,{Z:()=>S});var o=r(87462),a=r(67294),n=r(67392),s=r(72389),l=r(86010);const c="tabItem_es3Q",i="schemaTabActive_dWHR",u="schemaTabsTopSection_sc6Y",d="schemaTabsListContainer_wmy4",m="schemaTabLabel_clV0",h="schemaTabsContainer_HVyG",p="tabArrow_zmvw",b="tabArrowLeft_RzDG",f="tabArrowRight_X4Xu",v="marginVertical_VWja",{useScrollPositionBlocker:g,useTabGroupChoice:C}=r(7789);function P(e){var t,r;const{lazy:s,block:P,defaultValue:S,values:T,groupId:E,className:w}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=T??y.map((e=>{let{props:{value:t,label:r,attributes:o}}=e;return{value:t,label:r,attributes:o}})),D=(0,n.l)(k,((e,t)=>e.value===t.value));if(D.length>0)throw new Error(`Docusaurus error: Duplicate values "${D.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===S?S:S??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=y[0])?void 0:r.props.value);if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:L}=C(),[F,I]=(0,a.useState)(N),A=[],{blockElementScrollPositionUntilNextRender:M}=g();if(null!=E){const e=x[E];null!=e&&e!==F&&k.some((t=>t.value===e))&&I(e)}const R=e=>{const t=e.currentTarget,r=A.indexOf(t),o=k[r].value;o!==F&&(M(t),I(o),null!=E&&L(E,o))},V=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=A.indexOf(e.currentTarget)+1;r=A[t]||A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;r=A[t]||A[A.length-1];break}}null==(t=r)||t.focus()},B=(0,a.useRef)(null),[_,O]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.offsetWidth<t.target.scrollWidth?O(!0):O(!1)}));return e.observe(B.current),()=>{e.disconnect()}}),[]);return a.createElement("div",{className:"tabs__container"},a.createElement("div",{className:u},a.createElement("div",{className:h},_&&a.createElement("button",{className:(0,l.Z)(p,b),onClick:()=>{B.current.scrollLeft-=90}}),a.createElement("div",{ref:B,role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)(d,"tabs",{"tabs--block":P},w)},k.map((e=>{let{value:t,label:r,attributes:n}=e;return a.createElement("div",(0,o.Z)({role:"tab",tabIndex:F===t?0:-1,"aria-selected":F===t,key:t,ref:e=>A.push(e),onKeyDown:V,onFocus:R,onClick:R},n,{className:(0,l.Z)("tabs__item",c,null==n?void 0:n.className,{[i]:F===t})}),a.createElement("span",{className:m},r??t))}))),_&&a.createElement("button",{className:(0,l.Z)(p,f),onClick:()=>{B.current.scrollLeft+=90}}))),a.createElement("hr",null),s?(0,a.cloneElement)(y.filter((e=>e.props.value===F))[0]??y.filter((e=>e.props.value===N))[0],{className:v}):a.createElement("div",{className:v},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==F})))))}function S(e){const t=(0,s.Z)();return a.createElement(P,(0,o.Z)({key:String(t)},e))}}}]);