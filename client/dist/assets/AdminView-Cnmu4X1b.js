import{d as u,c as e,a as t,u as o,F as r,g as _,o as n,t as l,p as m,e as h,b as p,m as f,l as b,f as v}from"./index-DSklxGfj.js";const i=a=>(m("data-v-e1de8074"),a=a(),h(),a),A={class:"columns is-centered"},N={class:"column"},g={key:0,class:"table is-fullwidth"},k=i(()=>t("thead",null,[t("tr",null,[t("th",null,"Avatar"),t("th",null,"First Name"),t("th",null,"Last Name"),t("th",null,"Emails"),t("th",null,"Username"),t("th",null,"Admin?"),t("th",null,"Tasks")])],-1)),w={class:"avatar"},S=["src"],x=i(()=>t("td",null,[t("button",{class:"button"},"Edit"),p(),t("button",{class:"button"},"Delete")],-1)),y={key:1},I=u({__name:"AdminView",setup(a){const c=f();let d=b();return(V,B)=>(n(),e("div",A,[t("div",N,[o(d).user&&o(d).user.isAdmin?(n(),e("table",g,[k,t("tbody",null,[(n(!0),e(r,null,_(o(c),s=>(n(),e("tr",null,[t("td",w,[t("img",{src:s.avatar},null,8,S)]),t("td",null,l(s.firstName),1),t("td",null,l(s.lastName),1),t("td",null,l(s.emails),1),t("td",null,l(s.username),1),t("td",null,l(s.isAdmin),1),x]))),256))])])):(n(),e("h1",y,"Login to an Admin account to view the Admin Panel."))])]))}}),F=v(I,[["__scopeId","data-v-e1de8074"]]);export{F as default};
