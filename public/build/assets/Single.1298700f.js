import{u as n,r as u,R as a}from"./app.5d1e54bf.js";function c(){const{hadits:e}=n().props,l=window.location.search,t=new URLSearchParams(l);u.exports.useState(t.get("q"));const i=[{label:"Shahih Bukhari",value:"bukhari"},{label:"Shahih Muslim",value:"muslim"},{label:"Muwatha' Malik",value:"malik"},{label:"Musnad Ahmad",value:"ahmad"},{label:"Sunan Tirmidzi",value:"tirmidzi"},{label:"Sunan Abu Daud",value:"abudaud"},{label:"Sunan Ibnu Majah",value:"ibnumajah"},{label:"Sunan Nasa'i",value:"nasai"},{label:"Sunan Darimi",value:"darimi"}];return a.createElement("section",{className:"section",style:{color:"#445767"}},a.createElement("div",{className:"container block"},a.createElement("h1",{className:"title block"},i.filter(s=>s.value===e.kitab)[0].label),a.createElement("h2",{className:"subtitle block"},"Nomor Hadits: ",e.number),a.createElement("div",{className:"box"},a.createElement("p",{className:"subtitle block is-size-4 has-text-right",style:{fontFamily:"'Scheherazade New', serif",lineHeight:"200%"}},e.arabic),a.createElement("p",{className:"subtitle block is-size-5"},e.terjemah))))}export{c as default};