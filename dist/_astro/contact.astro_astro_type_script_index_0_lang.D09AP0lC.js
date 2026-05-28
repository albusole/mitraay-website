import{g as e,S as u}from"./ScrollTrigger.a3sj5zmn.js";e.registerPlugin(u);e.set(["#con-h1","#con-sub"],{opacity:0,y:30});e.to("#con-h1",{opacity:1,y:0,duration:.9,delay:.4,ease:"power3.out"});e.to("#con-sub",{opacity:1,y:0,duration:.8,delay:.65,ease:"power3.out"});e.from("#con-info",{scrollTrigger:{trigger:"#con-info",start:"top 80%"},x:-40,opacity:0,duration:1,ease:"power3.out"});e.from("#con-form",{scrollTrigger:{trigger:"#con-form",start:"top 80%"},x:40,opacity:0,duration:1,ease:"power3.out"});const o=document.getElementById("enquiry-form"),l=document.getElementById("form-success");function g(){const t=document.getElementById("f-type")?.value||"",n=document.getElementById("f-group")?.value||"",r=document.getElementById("f-from")?.value||"",s=document.getElementById("f-to")?.value||"",a=[r,s].filter(Boolean).join(" to ")||"",c=document.getElementById("f-msg")?.value||"",d=document.getElementById("f-name")?.value||"",m=document.getElementById("f-phone")?.value||"",i=`Hi, I'm interested in booking Mitraay Agro Resort.

Name: ${d}
Phone: ${m}
Group type: ${t}
Number of people: ${n}
Preferred dates: ${a}
Anything else: ${c}`;window.open(`https://wa.me/919112255539?text=${encodeURIComponent(i)}`,"_blank"),o.classList.add("hidden"),l.classList.remove("hidden")}o.addEventListener("submit",t=>{t.preventDefault(),g()});
