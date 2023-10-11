"use strict";(self.webpackChunkzig_school=self.webpackChunkzig_school||[]).push([[128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,g=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"\ud83d\udca1 Introduction",sidebar_position:1,slug:"/intro"},i="What is Zig?",l={unversionedId:"introduction",id:"introduction",title:"\ud83d\udca1 Introduction",description:"Zig is a general-purpose programming language and toolchain for maintaining robust, optimal and reusable software.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/intro",permalink:"/zig-school/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ud83d\udca1 Introduction",sidebar_position:1,slug:"/intro"},sidebar:"tutorialSidebar",next:{title:"\ud83d\udce6 Installation",permalink:"/zig-school/docs/category/-installation"}},u={},c=[{value:"\u26a1 A Simple Language",id:"-a-simple-language",level:2},{value:"\u26a1 Comptime",id:"-comptime",level:2},{value:"\u26a1 Maintain it with Zig",id:"-maintain-it-with-zig",level:2}],p={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-zig"},"What is Zig?"),(0,a.kt)("p",null,"Zig is a general-purpose programming language and toolchain for maintaining robust, optimal and reusable software."),(0,a.kt)("h2",{id:"-a-simple-language"},"\u26a1 A Simple Language"),(0,a.kt)("p",null,"Focus on debugging your application rather than debugging your programming language knowledge."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No hidden control flow."),(0,a.kt)("li",{parentName:"ul"},"No hidden memory allocations."),(0,a.kt)("li",{parentName:"ul"},"No preprocessor, no macros.")),(0,a.kt)("h2",{id:"-comptime"},"\u26a1 Comptime"),(0,a.kt)("p",null,"A fresh approach to metaprogramming based on compile-time code execution and lazy evaluation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Call any function at compile-time."),(0,a.kt)("li",{parentName:"ul"},"Manipulate types as values without runtime overhead."),(0,a.kt)("li",{parentName:"ul"},"Comptime emulates the target architecture.")),(0,a.kt)("h2",{id:"-maintain-it-with-zig"},"\u26a1 Maintain it with Zig"),(0,a.kt)("p",null,"Incrementally improve your C/C++/Zig codebase."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use Zig as a zero-dependency, drop-in C/C++ compiler that supports cross-compilation out-of-the-box."),(0,a.kt)("li",{parentName:"ul"},"Leverage zig build to create a consistent development environment across all platforms."),(0,a.kt)("li",{parentName:"ul"},"Add a Zig compilation unit to C/C++ projects; cross-language LTO is enabled by default.")))}m.isMDXComponent=!0}}]);