"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=g(n),c=o,u=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var g=2;g<r;g++)l[g]=n[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var a=n(7462),o=(n(7294),n(3905));const r={id:"intro",sidebar_position:10},l="Kermit <sub>the log</sub>",i={unversionedId:"intro",id:"intro",title:"Kermit <sub>the log</sub>",description:"Kermit is a Kotlin Multiplatform logging library.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/touchlab/Kermit/tree/main/website/docs/index.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1676857768,formattedLastUpdatedAt:"Feb 20, 2023",sidebarPosition:10,frontMatter:{id:"intro",sidebar_position:10},sidebar:"tutorialSidebar",next:{title:"LogWriter",permalink:"/docs/LOG_WRITER"}},s={},g=[{value:"Getting Started",id:"getting-started",level:2},{value:"1. Add Dependency",id:"1-add-dependency",level:3},{value:"2. Log",id:"2-log",level:3},{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Logger",id:"logger",level:3},{value:"LogWriter",id:"logwriter",level:3},{value:"Severity",id:"severity",level:3},{value:"Usage",id:"usage",level:2},{value:"A Note About Tags",id:"a-note-about-tags",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Global Logger",id:"global-logger",level:3},{value:"Local Logger",id:"local-logger",level:3},{value:"Message Formatting",id:"message-formatting",level:3},{value:"Non-Kotlin Callers",id:"non-kotlin-callers",level:2},{value:"Crash Reporting",id:"crash-reporting",level:2},{value:"Testing",id:"testing",level:2},{value:"Kermit Chisel",id:"kermit-chisel",level:2}],p={toc:g};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kermit-the-log"},"Kermit ",(0,o.kt)("sub",null,"the log")),(0,o.kt)("p",null,"Kermit is a Kotlin Multiplatform logging library."),(0,o.kt)("p",null,"It's primary purpose is to allow log statements from Kotlin code to be written to composable log outputs. Out of the box, the library defaults to platform-specific loggers such as Logcat and OSLog, but is easy to extend and configure."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/touchlab/KaMPKit"},"KaMP Kit")," to get started developing for Kotlin Multiplatform")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"1-add-dependency"},"1. Add Dependency"),(0,o.kt)("p",null,"The Kermit dependency should be added to your ",(0,o.kt)("inlineCode",{parentName:"p"},"commonMain")," source set in your Kotlin Multiplatform module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'commonMain {\n    dependencies {\n        implementation(kotlin("stdlib-common"))\n        implementation("co.touchlab:kermit:1.2.2") //Add latest version\n    }\n}\n')),(0,o.kt)("h3",{id:"2-log"},"2. Log"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'Logger.i { "Hello World" }\n')),(0,o.kt)("p",null,"By default, Kermit includes a logger for each native platform that is configured for development. On Android it writes to Logcat, on iOS it writes to OSLog, and for JS it writes to console."),(0,o.kt)("p",null,"The rest of the docs explain more detailed options, but at this point you should be able to log from common\ncode."),(0,o.kt)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,o.kt)("p",null,"The basic components you'll need to be aware of are ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Severity"),"."),(0,o.kt)("h3",{id:"logger"},"Logger"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," takes log calls from your code and dispatches them to ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," instances. There are different methods\non ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," corresponding to different log ",(0,o.kt)("inlineCode",{parentName:"p"},"Severity")," levels. In order of least to most severe: v(), d(), i(), w(), e(),\nand a()."),(0,o.kt)("p",null,"You configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger"),", then call log methods on it. That's the basic interaction with Kermit."),(0,o.kt)("h3",{id:"logwriter"},"LogWriter"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," actually sends log messages to different log outputs. You add ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," instances to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger"),"."),(0,o.kt)("p",null,"Kermit includes a ",(0,o.kt)("inlineCode",{parentName:"p"},"CommonWriter")," and various platform-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," instances. Through other modules, Kermit\nalso allows logging crash info to Crashlytics, Bugsnag, and Sentry."),(0,o.kt)("p",null,"For more info on included ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," types, and to create your own, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/LOG_WRITER"},"LOG_WRITER")),(0,o.kt)("h3",{id:"severity"},"Severity"),(0,o.kt)("p",null,"Severity levels follow common logging library patterns and should be generally familiar. You can control what will\nand won't get logged based on severity. So, say you only want to log ",(0,o.kt)("inlineCode",{parentName:"p"},"Warn")," and up, you can tell the logger. We'll\ncover that more in ",(0,o.kt)("a",{parentName:"p",href:"#Configuration"},"Configuration")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The primary logging artifact is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/touchlab/Kermit/blob/kpg/api_reformat2/kermit/src/commonMain/kotlin/co/touchlab/kermit/Logger.kt"},"Logger"),". It defines the severity-level logging methods. It has a Kotlin-aware api relying on default parameters and lambda syntax. To log from non-Kotlin clients, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/NON_KOTLIN"},"NON_KOTLIN"),"."),(0,o.kt)("p",null,"There are 2 sets of severity logging methods. One takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," log message directly, the other takes a function parameter that returns a string. The function is only evaluated if the log will be written. Which you use is personal preference. They both will log to the same places, but the function paramter version may avoid unecessary ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," creation."),(0,o.kt)("p",null,"Each logging method has one of the two message forms (",(0,o.kt)("inlineCode",{parentName:"p"},"String")," or function param), and an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," tag argument."),(0,o.kt)("p",null,"In its most basic form, logging looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'Logger.i { "Hello World" }\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are not familiar with the curly bracket syntax, that is a ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/lambdas.html#passing-trailing-lambdas"},"trailing lambda with special syntax"),".\nAgain, that will not be evaluated if no log writer needs it.")),(0,o.kt)("p",null,"Some other examples with tags and ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable")," params."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ko"},'Logger.w("MyTag") { "Hello World $someData" }\n// etc\nLogger.e(ex) { "Something failed" }\n// or\nLogger.e("Something failed", ex)\n')),(0,o.kt)("h3",{id:"a-note-about-tags"},"A Note About Tags"),(0,o.kt)("p",null,"Tags are much more common on Android, as Logcat has tag arguments, and it is the default logger on Android. It would be difficult to have a Kotlin Multiplatform library without them, but they don't really fit into other platforms as easily."),(0,o.kt)("p",null,"Kermit's default tag is an empty string. You can supply a tag param to each log call, change the base default tag, or create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," instance with it's own tag. For example, create a field in a ViewModel with the tag set to the class name (a common Android pattern):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyViewModel:ViewModel {\n    private val log = Logger.withTag("MyViewModel")\n}\n')),(0,o.kt)("p",null,"Platform-specific loggers can be configured to ignore tags on output, or you can customize their display easily. We'll discuss these options more in ",(0,o.kt)("a",{parentName:"p",href:"#Configuration"},"Configuration"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Kermit basically has two modes. The global ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," instance, or an instance that is created and managed by your architecture (for example, injecting an instance into each component)."),(0,o.kt)("h3",{id:"global-logger"},"Global Logger"),(0,o.kt)("p",null,"The global ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," instance had configuration methods that allow you to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," instances, the minimum severity, and set the default tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'Logger.setLogWriters(platformLogWriter(NoTagLogFormatter))\nLogger.setTag("MyTag")\n')),(0,o.kt)("h3",{id:"local-logger"},"Local Logger"),(0,o.kt)("p",null,"The local and global loggers are basically the same. Which you use is mostly personal preference, with a bit of performance consideration."),(0,o.kt)("p",null,"Our pattern has been to inject loggers into components, with the tag applied at that point, rather than specify the tag in each call. In fact, the earlier Kermit designs mandated this rather than making a tag param available."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'single { \n        BreedCallbackViewModel(\n            get(), \n            getWith("BreedCallbackViewModel") // Convenience function to get a Logger with a tag set\n        ) \n    }\n')),(0,o.kt)("p",null,"The code above is from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/touchlab/KaMPKit/blob/main/shared/src/iosMain/kotlin/co/touchlab/kampkit/KoinIOS.kt#L34"},"KaMP Kit Koin config"),". There were some historical and technical reasons for that design. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/DESIGN"},"DESIGN")," for more details."),(0,o.kt)("p",null,"To create your own logger rather than use the global logger, just create an instance with the config specified."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val baseLogger = Logger(\n    config = loggerConfigInit(platformLogWriter(NoTagLogFormatter), minSeverity = Severity.Info),\n    tag = "MyAppTag"\n)\n\nval anotherTag = baseLogger.withTag("AnotherTag")\n')),(0,o.kt)("p",null,"There is a ",(0,o.kt)("em",{parentName:"p"},"slight")," performance boost with this kind of configuration. Because this is not a mutable config, the internals don't need to be thread safe. Mutable config would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val baseLogger = Logger(\n    config = mutableLoggerConfigInit(platformLogWriter(NoTagLogFormatter), minSeverity = Severity.Info),\n    tag = "MyAppTag"\n)\n\nval anotherTag = baseLogger.withTag("AnotherTag")\n')),(0,o.kt)("p",null,"Notice ",(0,o.kt)("inlineCode",{parentName:"p"},"mutableLoggerConfigInit"),". The only major functional difference is you can change your config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"baseLogger.mutableConfig.minSeverity = Severity.Debug\nbaseLogger.mutableConfig.logWriterList = listOf(SomeCustomWriter())\n")),(0,o.kt)("p",null,"In general, that's not something most apps will need, so it's better to avoid the mutable config. The global logger needs to be mutable because you need to change it after the code starts."),(0,o.kt)("p",null,"If you really like global access, but want static config, you can just create your own global logger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'object MyLogger : Logger(\n    config = loggerConfigInit(\n        platformLogWriter(NoTagLogFormatter),\n        minSeverity = Severity.Info\n    ),\n    tag = "MyAppTag"\n)\n\nfun hello(){\n    MyLogger.i { "Hello" }\n}\n')),(0,o.kt)("h3",{id:"message-formatting"},"Message Formatting"),(0,o.kt)("p",null,"To make message formatting more uniform and flexible, many of the ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," instances can take a ",(0,o.kt)("inlineCode",{parentName:"p"},"LogFormatter")," parameter. This allows you to control how the tags and log messages are formatted."),(0,o.kt)("p",null,"We have defined a few standard ",(0,o.kt)("inlineCode",{parentName:"p"},"LogFormatter")," instances:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DefaultLogFormatter")," - This is the standard format that all compatible ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," instances get by default. Messages are formatted as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Info: (MyTag) A log message"\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NoTagLogFormatter")," - Tags are really an Android convension. Other platforms can feel cluttered with them. You can simply ignore them with this formatter instance. Messages are formatted as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Info: A log message"\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SimpleLogFormatter")," - This formatter skips tags and severity. It just prints the message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"A log message"\n')),(0,o.kt)("p",null,"Not all ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," instances take a formatter argument. Notably, Android's ",(0,o.kt)("inlineCode",{parentName:"p"},"LogcatWriter")," does not format it's own messages. Instead, it routes calls to the appropriate severity method, and passes the tag argument to Logcat."),(0,o.kt)("p",null,"To simplify setting platform ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," instances, you can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"LogFormatter")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"platformLogWriter"),". Just FYI, Android will ignore the ",(0,o.kt)("inlineCode",{parentName:"p"},"LogFormatter")," because it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"Logcat")," log methods directly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"platformLogWriter(NoTagLogFormatter)\n")),(0,o.kt)("h2",{id:"non-kotlin-callers"},"Non-Kotlin Callers"),(0,o.kt)("p",null,"The api design of  ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," favors calling from Kotlin. Specifically, to avoid having a huge number of methods, the api makes use of default parameters. This is great in Kotlin but terrible when calling from other languages. For example, calling a log statement from Swift directly on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," api would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'log.i(tag: log.tag, throwable: nil) {"A log"}\n')),(0,o.kt)("p",null,"All default params need to be provided."),(0,o.kt)("p",null,"The original design of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," api made an attempt at compromise that would work everywhere. However, the redesign has a Kotlin-friendly api surface defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kermit")," module, and another module called ",(0,o.kt)("inlineCode",{parentName:"p"},"kermit-nkt")," that you can export to other languages."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"nkt"),' stands for "Not Kotlin".')),(0,o.kt)("p",null,"We'll focus on calling from swift in these examples. You export the nkt module by adding it as an api dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'commonMain {\n  dependencies {\n    api("co.touchlab:kermit-nkt:1.2.2") //Add latest version\n  }\n}\n')),(0,o.kt)("p",null,"Then export the dependency to the generated framework:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'cocoapods {\n    summary = "Sample for Kermit"\n    homepage = "https://www.touchlab.co"\n    framework {\n        export("co.touchlab:kermit-nkt:1.2.2") //Add latest version\n    }\n}\n')),(0,o.kt)("p",null,"If configuring frameworks directly, it would look more like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'ios {\n  binaries {\n    framework {\n      export("co.touchlab:kermit-nkt:1.2.2") //Add latest version\n    }\n  }\n}\n')),(0,o.kt)("p",null,"To call the global logger from Swift, call ",(0,o.kt)("inlineCode",{parentName:"p"},"LoggerKt"),", select the severity, then select the method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'LoggerKt.i.log(messageString: "Hello")\nLoggerKt.i.log(tag: "MyTag") { "Hello Again" }\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/touchlab/Kermit/tree/main/samples/sample"},"samples/sample")," for a configured example."),(0,o.kt)("h2",{id:"crash-reporting"},"Crash Reporting"),(0,o.kt)("p",null,"Kermit includes crash reporting implementations for Crashlytics and Bugsnag. These will write breadcrumb statements to\nthose crash reporting tools, and can be triggered to report unhandled crash reports when there's an uncaught Kotlin\nexception."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Read our blog post about Kermit and Crashlytics: ",(0,o.kt)("a",{parentName:"p",href:"https://touchlab.co/kermit-and-crashlytics/"},"https://touchlab.co/kermit-and-crashlytics/"))),(0,o.kt)("p",null,"Crashlytics ",(0,o.kt)("a",{parentName:"p",href:"/docs/crashlytics/"},"docs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/touchlab/Kermit/tree/main/samples/sample-crashlytics"},"sample"),"."),(0,o.kt)("p",null,"Bugsnag ",(0,o.kt)("a",{parentName:"p",href:"/docs/bugsnag/"},"docs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/touchlab/Kermit/tree/main/samples/sample-bugsnag"},"sample"),"."),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Kermit includes a test dependency, intended for use when testing application code that interacts with Kermit APIs but\ndoesn't want to write to actual logs. This includes a ",(0,o.kt)("inlineCode",{parentName:"p"},"TestLogWriter")," which holds the string outputs of log statements,\nand has APIs for asserting on what logs are present."),(0,o.kt)("h2",{id:"kermit-chisel"},"Kermit Chisel"),(0,o.kt)("p",null,"For some situations, disabling logging is desirable. For example, when building release versions of apps. You can\ndisable logging by defining minSeverity on the logging config, but you can also run a compiler plugin and strip out\nlogging calls entirely."),(0,o.kt)("p",null,"To run the log strip plugin, add the classpath to your buildscript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'buildscript {\n    dependencies {\n        classpath("co.touchlab:kermit-gradle-plugin:1.2.2")\n    }\n}\n')),(0,o.kt)("p",null,"Then apply the plugin in your gradle file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    id("co.touchlab.kermit")\n    //etc\n}\n')),(0,o.kt)("p",null,"By default, running the plugin does nothing. You should configure the plugin with a severity:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"kermit {\n    stripBelow = StripSeverity.Warn\n}\n")),(0,o.kt)("p",null,"Any log call below the configured severity will be removed. So, if you pass ",(0,o.kt)("inlineCode",{parentName:"p"},"Warn"),", warn, error, and assert calls remain\nbut info and below are removed. There are some special values: ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"All"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," is default (removes nothing). ",(0,o.kt)("inlineCode",{parentName:"p"},"All")," removes\nall logging calls."),(0,o.kt)("p",null,'See the "sample-chisel" example. You can change the ',(0,o.kt)("inlineCode",{parentName:"p"},"stripBelow")," and test various logging levels in the app."),(0,o.kt)("p",null,'In our production applications, we generally send error and warning level throwables to remote crash reporters, info level\nis tracked in "breadcrumbs" for remote crash reporters. Debug and verbose are local-only. Sticking to that pattern, you could\nconfigure your build as follows:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val releaseBuild: String by project\n\nkermit {\n    if(releaseBuild.toBoolean()) {\n        stripBelow = StripSeverity.Info\n    }\n}\n")),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"releaseBuild=false")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle.properties"),", then pass in an override when building a release version."),(0,o.kt)("p",null,"Note: Chisel is new and configuration is likely to change in the near future."))}d.isMDXComponent=!0}}]);