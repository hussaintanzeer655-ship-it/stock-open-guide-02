const questions=[
  {q:'When does the market open?', a:'US stock market opens at 9:30 AM ET on trading days.'},
  {q:'Are weekends open?', a:'No, markets are typically closed on weekends.'},
  {q:'How long until it opens?', a:'A live countdown is shown above.'},
  {q:'What time zone?', a:'All times refer to America/New_York (EST/EDT).'}
];
function renderFAQ(){ const ul=document.getElementById('faq'); questions.forEach((it,i)=>{ const li=document.createElement('li'); const b=document.createElement('button'); b.textContent=it.q; b.addEventListener('click',()=>{ const d=li.querySelector('.answer'); d.style.display=d.style.display==='block'?'none':'block';}); const answer=document.createElement('div'); answer.className='answer'; answer.textContent=it.a; li.appendChild(b); li.appendChild(answer); ul.appendChild(li); });}
function updateClock(){ const now=new Date(); const ny=new Date(now.toLocaleString('en-US',{timeZone:'America/New_York'})); ny.setHours(9,30,0,0); if(ny<=now){ ny.setDate(ny.getDate()+1); if(ny.getDay()==0||ny.getDay()==6) ny.setDate(ny.getDate()+ (1+(1 - ny.getDay())%7)); ny.setHours(9,30,0,0); }
 const diff=ny-now; const h=Math.floor(diff/3600000); const m=Math.floor((diff%3600000)/60000); const s=Math.floor((diff%60000)/1000); const t=document.getElementById('clock'); t.textContent='Next Open in '+(h>0?h+'h ':'')+m+'m '+s+'s';}
renderFAQ(); updateClock(); setInterval(updateClock,1000);