import{_ as n}from"./DlvNcETn.js";import{e as d,r as f,o as b,c as u,a as s,b as o,w as l,d as a}from"./SfyMgnMg.js";const p={class:"fixed inset-x-0 top-0 z-50 text-white"},c={class:"drawer drawer-end"},k={class:"drawer-content flex flex-col"},x={class:"navbar p-6 lg:px-8"},g={class:"flex-1"},m={class:"hidden lg:flex lg:gap-x-20"},_={class:"drawer-side text-base-content"},w={class:"menu menu-lg w-full sm:max-w-sm min-h-full p-6 bg-white sm:ring-1 sm:ring-gray-900/10"},v={class:"mt-6"},C=d({__name:"Header",setup(P){const i=f();function r(){i.value.checked=!1}return(y,e)=>{const t=n;return b(),u("header",p,[s("div",c,[s("input",{ref_key:"sidebarStatus",ref:i,id:"sidebar-status",class:"drawer-toggle",type:"checkbox"},null,512),s("div",k,[s("nav",x,[s("div",g,[o(t,{to:"/",class:"brand-name -m-1.5 p-1.5","aria-label":"A Link for Top-Page"},{default:l(()=>e[0]||(e[0]=[a("Genbu Hase")])),_:1})]),s("div",m,[o(t,{to:"/",class:"font-bold","aria-label":"A Link for Top-Page"},{default:l(()=>e[1]||(e[1]=[a("Home")])),_:1}),o(t,{to:"/profile",class:"font-bold","aria-label":"A Link for Profile-Page"},{default:l(()=>e[2]||(e[2]=[a("Profile")])),_:1}),o(t,{to:"/history",class:"font-bold","aria-label":"A Link for History-Page"},{default:l(()=>e[3]||(e[3]=[a("History")])),_:1}),o(t,{to:"/projects",class:"font-bold","aria-label":"A Link for Projects-Page"},{default:l(()=>e[4]||(e[4]=[a("Projects")])),_:1})]),e[5]||(e[5]=s("div",{class:"flex-none lg:hidden"},[s("label",{class:"btn btn-square btn-ghost",for:"sidebar-status","aria-label":"Open Sidebar"},[s("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])])],-1))])]),s("div",_,[e[11]||(e[11]=s("label",{class:"drawer-overlay",for:"sidebar-status","aria-label":"Close Sidebar"},null,-1)),s("ul",w,[e[10]||(e[10]=s("div",{class:"flex items-center justify-between"},[s("div"),s("label",{class:"btn btn-square btn-ghost",for:"sidebar-status","aria-label":"Close Sidebar"},[s("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])])],-1)),s("div",v,[s("li",null,[o(t,{class:"text-base font-bold",to:"/",onClick:r,"aria-label":"A Link for Top-Page"},{default:l(()=>e[6]||(e[6]=[a("Home")])),_:1})]),s("li",null,[o(t,{class:"text-base font-bold",to:"/profile",onClick:r,"aria-label":"A Link for Profile-Page"},{default:l(()=>e[7]||(e[7]=[a("Profile")])),_:1})]),s("li",null,[o(t,{class:"text-base font-bold",to:"/history",onClick:r,"aria-label":"A Link for History-Page"},{default:l(()=>e[8]||(e[8]=[a("History")])),_:1})]),s("li",null,[o(t,{class:"text-base font-bold",to:"/projects",onClick:r,"aria-label":"A Link for Projects-Page"},{default:l(()=>e[9]||(e[9]=[a("Projects")])),_:1})])])])])])])}}});export{C as _};