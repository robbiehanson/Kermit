"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Custom Logger API",l={unversionedId:"details/CUSTOM_API",id:"details/CUSTOM_API",title:"Custom Logger API",description:"The main module most users will include is kermit. However, much of the configuration and other underlying functionality has been moved to kermit-core. The main kermit module is a relatively thin API layer that sits on top of kermit-core.",source:"@site/docs/details/CUSTOM_API.md",sourceDirName:"details",slug:"/details/CUSTOM_API",permalink:"/docs/details/CUSTOM_API",draft:!1,editUrl:"https://github.com/touchlab/Kermit/tree/main/website/docs/details/CUSTOM_API.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1695235757,formattedLastUpdatedAt:"Sep 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LogWriter",permalink:"/docs/details/LOG_WRITER"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-logger-api"},"Custom Logger API"),(0,o.kt)("p",null,"The main module most users will include is ",(0,o.kt)("inlineCode",{parentName:"p"},"kermit"),". However, much of the configuration and other underlying functionality has been moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"kermit-core"),". The main ",(0,o.kt)("inlineCode",{parentName:"p"},"kermit")," module is a relatively thin API layer that sits on top of ",(0,o.kt)("inlineCode",{parentName:"p"},"kermit-core"),"."),(0,o.kt)("p",null,"Over the past few years, we've had feedback about the API design choices made in Kermit. Some of that feedback makes sense and has been incorporated. Other feedback is really just personal preference, and would conflict with the existing design."),(0,o.kt)("p",null,"Rather than trying to make everybody happy, we've structured Kermit's modules so you can create your own API interface on top of the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"kermit-core")," module. That will allow you to use compatible extensions like Crashlytics and Bugsnag, but interface with the underlying Kermit system with whatever API you prefer."),(0,o.kt)("p",null,"For example, if you wanted a very simple logger with only two methods, you would make ",(0,o.kt)("inlineCode",{parentName:"p"},"kermit-core")," a dependency rather than ",(0,o.kt)("inlineCode",{parentName:"p"},"kermit"),", and write your own implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'object MyLogger : BaseLogger(loggerConfigInit(platformLogWriter())) {\n    fun info(message: String){\n        log(Severity.Info, "MyLogger", null, message)\n    }\n    \n    fun error(message: String, throwable: Throwable){\n        log(Severity.Error, "MyLogger", throwable, message)\n    }\n}\n')),(0,o.kt)("p",null,"For a more complex example, see the implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"co.touchlab.kermit.Logger")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"kermit"),"."))}p.isMDXComponent=!0}}]);