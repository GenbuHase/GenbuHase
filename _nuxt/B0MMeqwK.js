import m from"./DiQQqeIH.js";import{e as i,o as r,c,a as e,g as _,t as n,b as s,d}from"./SfyMgnMg.js";const u=["href"],h={class:"sm:max-w-[25%]"},g=["src"],x={class:"card-body max-sm:p-6 gap-1"},f={class:"card-title max-ml:text-lg"},b={class:"max-ml:text-xs text-sm break-all"},w={class:"mt-6 text-sm"},k=i({__name:"Card",props:{title:{},description:{},url:{},image:{}},setup(l){return(t,a)=>(r(),c("a",{class:"card sm:card-side bg-base-100 not-prose",href:t.url,target:"_blank"},[e("figure",h,[t.image?(r(),c("img",{key:0,class:"w-full h-full",src:t.image},null,8,g)):_("",!0)]),e("div",x,[e("span",f,n(t.title),1),e("p",b,n(t.url),1),e("p",w,n(t.description),1)])],8,u))}}),j={class:"flex place-content-center pt-[96px] lg:pt-[72px]"},v={class:"prose max-w-3xl p-12 sm:p-10"},C={class:"flex flex-col gap-8"},V=i({__name:"projects",setup(l){return(t,a)=>{const p=m,o=k;return r(),c("main",j,[e("article",v,[e("h1",null,[s(p,{class:"-ml-2",name:"mdi:application-brackets-outline"}),a[0]||(a[0]=d(" Projects "))]),e("section",C,[s(o,{title:"ながたにさんの占い",description:"新事業「ながたにさんの占い」のホームページを制作しました。",url:"https://imagine.whereabouts.jp/",image:"https://imagine.whereabouts.jp/assets/ogp_image.jpg"}),s(o,{title:"わかめナビ",description:"埼玉大学周辺のバスロケーションサービス「わかめナビ」を制作しています。",url:"https://wakame-navi.vercel.app/",image:"https://wakame-navi.vercel.app/assets/ogp_1200x600.png"}),s(o,{title:"Shuwardle",description:"日本手話の指文字を用いた単語当てゲーム「Shuwardle」を制作しました。",url:"https://genbuhase.github.io/Shuwardle/"})])])])}}});export{V as default};