(function(){
 var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

 /* menu */
 var b=document.querySelector('.menu'),m=document.getElementById('menu');
 b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
 m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});
 document.getElementById('yr').textContent=new Date().getFullYear();

 /* contact form */
 document.getElementById('f').addEventListener('submit',function(e){
  e.preventDefault();
  var n=document.getElementById('name').value,em=document.getElementById('email').value,t=document.getElementById('msg').value;
  location.href='mailto:hbantu@gmail.com?subject='+encodeURIComponent('Message from '+n)+'&body='+encodeURIComponent(t+'\n\nReply to: '+em);
 });

 /* typed words in hero */
 var el=document.getElementById('typed'),words=['mathematics','computer science','problem solving','software design'],wi=0,ci=0,del=false;
 function type(){
  var w=words[wi];ci+=del?-1:1;el.textContent=w.slice(0,ci);
  var d=del?40:90;
  if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;wi=(wi+1)%words.length;d=300}
  setTimeout(type,d);
 }
 if(!reduce)type();

 /* scroll reveal and counters */
 var since=document.querySelector('[data-since]');
 if(since)since.dataset.count=new Date().getFullYear()-Number(since.dataset.since);
 function count(n){
  var end=Number(n.dataset.count),t0=null;
  if(reduce){n.textContent=end;return}
  (function step(t){t0=t0||t;var p=Math.min((t-t0)/1200,1);n.textContent=Math.round(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)})(performance.now());
 }
 var items=document.querySelectorAll('.row,.prose,.photo,.counters,.lab,figure,.contact-grid>*');
 items.forEach(function(n,i){n.classList.add('reveal');n.style.setProperty('--d',(i%3)*0.08+'s')});
 var io=new IntersectionObserver(function(es){es.forEach(function(e){
  if(!e.isIntersecting)return;
  e.target.classList.add('in');
  e.target.querySelectorAll&&e.target.querySelectorAll('[data-count]').forEach(count);
  io.unobserve(e.target);
 })},{threshold:.15});
 items.forEach(function(n){io.observe(n)});

 /* interactive function plotter */
 var cv=document.getElementById('plot'),cx=cv.getContext('2d'),W=cv.width,H=cv.height;
 var A=document.getElementById('a'),B=document.getElementById('b'),C=document.getElementById('c'),eq=document.getElementById('eq'),play=document.getElementById('play');
 function col(v){return getComputedStyle(document.documentElement).getPropertyValue(v).trim()}
 function draw(){
  var a=+A.value,k=+B.value,c=+C.value,x0=W/2,y0=H/2,sx=W/(4*Math.PI),sy=H/8;
  cx.clearRect(0,0,W,H);
  cx.lineWidth=1;cx.strokeStyle=col('--line');
  for(var i=-6;i<=6;i++){var gx=x0+i*Math.PI/2*sx;cx.beginPath();cx.moveTo(gx,0);cx.lineTo(gx,H);cx.stroke()}
  for(var j=-4;j<=4;j++){cx.beginPath();cx.moveTo(0,y0-j*sy);cx.lineTo(W,y0-j*sy);cx.stroke()}
  cx.strokeStyle=col('--muted');cx.lineWidth=2;
  cx.beginPath();cx.moveTo(0,y0);cx.lineTo(W,y0);cx.moveTo(x0,0);cx.lineTo(x0,H);cx.stroke();
  cx.strokeStyle=col('--blue');cx.lineWidth=4;cx.lineJoin='round';cx.beginPath();
  for(var px=0;px<=W;px+=2){var x=(px-x0)/sx,y=y0-a*Math.sin(k*x+c)*sy;px?cx.lineTo(px,y):cx.moveTo(px,y)}
  cx.stroke();
  eq.textContent='y = '+a.toFixed(1)+' sin('+k.toFixed(1)+'x'+(c>0.01?' + '+c.toFixed(2):'')+')';
 }
 [A,B,C].forEach(function(s){s.addEventListener('input',draw)});
 matchMedia('(prefers-color-scheme:dark)').addEventListener('change',draw);
 var raf=null;
 function spin(){C.value=(+C.value+0.04)%6.28;draw();raf=requestAnimationFrame(spin)}
 play.addEventListener('click',function(){
  var on=play.getAttribute('aria-pressed')!=='true';
  play.setAttribute('aria-pressed',on);play.textContent=on?'Pause':'Animate';
  if(on)spin();else cancelAnimationFrame(raf);
 });
 if(reduce)play.hidden=true;
 draw();

 /* gallery lightbox */
 var lb=document.getElementById('lb'),li=lb.querySelector('img'),lp=lb.querySelector('p');
 document.querySelectorAll('figure').forEach(function(f){
  function open(){var im=f.querySelector('img');if(!im)return;li.src=im.src;li.alt=im.alt;lp.textContent=im.alt;lb.showModal()}
  f.addEventListener('click',open);
  f.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
 });
 lb.addEventListener('click',function(){lb.close()});
})();
