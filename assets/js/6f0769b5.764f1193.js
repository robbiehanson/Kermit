"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Koin Integration",l={unversionedId:"extensions/KOIN",id:"extensions/KOIN",title:"Koin Integration",description:"Kermit's Koin integation comes in two parts - a logger implementation that writes",source:"@site/docs/extensions/KOIN.md",sourceDirName:"extensions",slug:"/extensions/KOIN",permalink:"/docs/extensions/KOIN",draft:!1,editUrl:"https://github.com/touchlab/Kermit/tree/main/website/docs/extensions/KOIN.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1678474676,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/docs/extensions/"},next:{title:"Technical Details",permalink:"/docs/category/technical-details"}},s={},c=[{value:"Setup",id:"setup",level:2},{value:"Add the dependency",id:"add-the-dependency",level:3},{value:"Register the logger with Koin",id:"register-the-logger-with-koin",level:3},{value:"Dependency Injection Helpers",id:"dependency-injection-helpers",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"koin-integration"},"Koin Integration"),(0,o.kt)("p",null,"Kermit's Koin integation comes in two parts - a logger implementation that writes\nKoin logger output to Kermit, and dependency injection helpers."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"add-the-dependency"},"Add the dependency"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'commonMain {\n    dependencies {\n        implementation("co.touchlab:kermit-koin:2.0.0-RC3")\n    }\n}\n')),(0,o.kt)("h3",{id:"register-the-logger-with-koin"},"Register the logger with Koin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val koinApplication = startKoin {\n    logger(\n        KermitKoinLogger(Logger.withTag("koin"))\n    )\n\n    modules(/* modulesList */)\n}\n')),(0,o.kt)("p",null,"Obviously you will want to have initialized Kermit before registering a logger with Koin, and the\ntag you pass is optional.  That said, it's useful to tag the Koin output to be able to filter and\nsee what is going on.  Once you have registered the logger, all of the normal ",(0,o.kt)("em",{parentName:"p"},"Koin")," logging will\nbe piped through to Kermit.  This is especially helpful when checking your module dependencies from\nunit tests!"),(0,o.kt)("h2",{id:"dependency-injection-helpers"},"Dependency Injection Helpers"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"kermitLoggerModule()")," method returns a Koin module that declares a factory for logger instances.  If\nyou don't want to make use of the Koin factory, there's a ",(0,o.kt)("inlineCode",{parentName:"p"},"getLoggerWithTag()")," extension method you can\ncall directly."),(0,o.kt)("p",null,"We prefer injecting logger instances rather than using the global ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," instance, especially when\nwe know we'll be unit testing a section of code."))}d.isMDXComponent=!0}}]);