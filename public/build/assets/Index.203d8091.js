import{u as o,r as d,R as e,d as E}from"./app.3f6df6b9.js";import{W as p}from"./Web.7c02223c.js";function g(){const{results:a}=o().props;console.log(a);const s=[...new Set(a.map(t=>t.no_surat))],c=[...new Set(a.map(t=>({no_surat:t.no_surat,surat:t.surat})))],m=window.location.search,n=new URLSearchParams(m),[r,i]=d.exports.useState(n.get("q")),u=t=>{t.preventDefault(),E.Inertia.visit(`/quran/search?q=${r}`,{},{preserveState:!0})};return e.createElement(p,null,e.createElement("section",{className:"section",style:{color:"#445767"}},e.createElement("div",{className:"container block"},e.createElement("h1",{className:"title"},"Cari Ayat Al-Qur'an"),e.createElement("p",{className:"subtitle"},"Cari dengan kata Bahasa Arab atau Indonesia. ",e.createElement("br",null),"Pencarian Bahasa Arab tanpa harakat, \u0627,\u0623,\u0625 mempengaruhi pencarian.")),e.createElement("form",{onSubmit:u,className:"box column is-6"},e.createElement("div",{className:"field"},e.createElement("div",{className:"control"},e.createElement("input",{className:"input",type:"text",placeholder:"Contoh: \u0643\u062A\u0628 \u0639\u0644\u064A\u0643\u0645, lalu klik ENTER",value:r,onChange:t=>i(t.target.value)}))),e.createElement("button",{type:"submit",className:"button is-primary"},"Cari")),(a==null?void 0:a.length)!==0?e.createElement("div",{className:"box"},e.createElement("div",{className:"block"},'Hasil pencarian untuk "',n.get("q"),'" ',e.createElement("strong",null,"(",a==null?void 0:a.length," hasil)")),e.createElement("table",{className:"table is-striped",style:{width:"100%"}},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{style:{width:"40%"}},"Surat"),e.createElement("th",{style:{width:"60%"}},"Ayat"))),e.createElement("tbody",null,s.map((t,h)=>e.createElement(e.Fragment,null,(a==null?void 0:a.filter(l=>l.no_surat===t).length)!==0&&e.createElement("tr",null,e.createElement("td",null,c.filter(l=>l.no_surat===t)[0].surat),e.createElement("td",null,e.createElement("div",{className:"is-flex is-flex-flex-wrap",style:{display:"flex",flexWrap:"wrap"}},a==null?void 0:a.filter(l=>l.no_surat===t).map((l,b)=>e.createElement("a",{href:`/quran/${t}/${l.ayat}`,className:"ml-2 mr-2",style:{lineHeight:"200%"}},l.ayat)))))))))):n.get("q")!==null?e.createElement("div",null,"Hasil tidak ditemukan."):null))}export{g as default};