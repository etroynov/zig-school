"use strict";(self.webpackChunkzig_school=self.webpackChunkzig_school||[]).push([[860],{3368:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var t=a(5893),i=a(1151);const s={title:"Variables",sidebar_position:1},r=void 0,l={id:"basics/variables",title:"Variables",description:"Keyword",source:"@site/docs/basics/variables.mdx",sourceDirName:"basics",slug:"/basics/variables",permalink:"/zig-school/docs/basics/variables",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/variables.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Variables",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/zig-school/docs/category/basics"},next:{title:"Data types",permalink:"/zig-school/docs/basics/data-types"}},c={},o=[{value:"Keyword",id:"keyword",level:3},{value:"Name",id:"name",level:3},{value:"Type",id:"type",level:3},{value:"Examples",id:"examples",level:2},{value:"Var",id:"var",level:3},{value:"Const",id:"const",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Syntax"',children:"<keyword> <name> : <type> = <value>\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-zig",metastring:'title="~/example"',children:"var foo: i8 = 0;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keyword",children:"Keyword"}),"\n",(0,t.jsx)(n.p,{children:"We have two ways how we can declare the variable:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"var"})," - declares a mutable variable, which means that the value can be changed at any time;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"const"})," - declares a immutable variable, which means that the value can be set once and cannot be change;"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"Any name would you like"}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsx)(n.p,{children:"Type is a type annotation for identifier, and may be omitted if the data type of value can be inferred."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.h3,{id:"var",children:"Var"}),"\n",(0,t.jsxs)(n.p,{children:["We can replace value of varibale that was defined with ",(0,t.jsx)(n.code,{children:"var"})," keyword:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-zig",metastring:'title="~/example"',children:'const std = @import("std");\n\npub fn main() !void {\n  const stdout = std.io.getStdOut().writer();\n  var i: i16 = 0;\n\n  i += 1;\n  \n  try stdout.print("{d}\\n", .{i});\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="~/example via \u21af v0.11.0 took 4s"',children:"\u279c zig run main.zig\n1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"const",children:"Const"}),"\n",(0,t.jsxs)(n.p,{children:["If we try to reasign the value of variable that was defined with the ",(0,t.jsx)(n.code,{children:"const"})," keyword we will get an error:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-zig",metastring:'title="~/example"',children:'const std = @import("std");\n\npub fn main() !void {\n  const stdout = std.io.getStdOut().writer();\n  const i: i16 = 0;\n\n  i += 1;\n\n  try stdout.print("{d}\\n", .{i});\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="~/example via \u21af v0.11.0 took 6s"',children:"\u279c zig run main.zig\nexample.zig:7:5: error: cannot assign to constant\n  i += 1;\n  ~~^~~~\nreferenced by:\n    callMain: /usr/local/Homebrew/Cellar/zig/0.11.0/lib/zig/std/start.zig:574:32\n    initEventLoopAndCallMain: /usr/local/Homebrew/Cellar/zig/0.11.0/lib/zig/std/start.zig:508:34\n    remaining reference traces hidden; use '-freference-trace' to see all reference traces\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var t=a(7294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);