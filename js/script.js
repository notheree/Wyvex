/* ── CURSOR ─────────────────────────────────── */
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
let gearRotation = 0;

document.addEventListener('mousemove',e=>{
  mx=e.clientX;
  my=e.clientY;
  cur.style.left=mx+'px';
  cur.style.top=my+'px';
});

function animRing(){
  rx+=(mx-rx)*0.18;
  ry+=(my-ry)*0.18;
  ring.style.left=rx+'px';
  ring.style.top=ry+'px';
  
  // Rotate the gear
  gearRotation += 3;
  ring.style.transform = `translate(-50%,-50%) rotate(${gearRotation}deg)`;
  
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a,button,.service-row,.how-step,.testi-item,.work-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{
    ring.classList.add('cursor-grow');
    cur.classList.add('cursor-dot-big');
  });
  el.addEventListener('mouseleave',()=>{
    ring.classList.remove('cursor-grow');
    cur.classList.remove('cursor-dot-big');
  });
});

/* ── THEME TOGGLE ───────────────────────────── */
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const htmlElement = document.documentElement;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeLabel(savedTheme);

function updateThemeLabel(theme){
  themeLabel.textContent = theme === 'light' ? 'Dark' : 'Light';
  themeToggle.innerHTML = theme === 'light' ? '<span class="theme-toggle-icon">🌙</span><span id="theme-label">Dark</span>' : '<span class="theme-toggle-icon">☀️</span><span id="theme-label">Light</span>';
}

themeToggle.addEventListener('click',()=>{
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeLabel(newTheme);
});

/* ── NAV STUCK ──────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('stuck',window.scrollY>30);
  // Parallax on hero background
  const hero = document.getElementById('hero');
  if(hero){
    hero.style.backgroundPositionY = `calc(50% + ${window.scrollY*0.35}px)`;
  }
});

/* ── BURGER ─────────────────────────────────── */
document.getElementById('burger').addEventListener('click',()=>{
  document.getElementById('nav-links').classList.toggle('open');
});

/* ── REVEAL ─────────────────────────────────── */
const revEls = document.querySelectorAll('.reveal,.reveal-left');
new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}});
},{threshold:0.1}).observe;
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in')}});
},{threshold:0.08});
revEls.forEach(el=>observer.observe(el));

/* ── HOW IT WORKS STEPS ─────────────────────── */
let activeStep=0;
const hSteps = document.querySelectorAll('.how-step');
const vPanels = document.querySelectorAll('.how-visual-panel');
let stepTimer;

function goStep(n){
  hSteps.forEach((s,i)=>{
    s.classList.toggle('active',i===n);
    // reset bar
    const bar = s.querySelector('.how-progress-bar');
    if(bar){bar.style.transition='none';bar.style.width='0%';void bar.offsetWidth;bar.style.transition='width 4s linear';}
  });
  vPanels.forEach((p,i)=>p.classList.toggle('active',i===n));
  if(n===2) startLaunchChat();
  activeStep=n;
}
hSteps.forEach((s,i)=>s.addEventListener('click',()=>{clearInterval(stepTimer);goStep(i);stepTimer=setInterval(nextStep,4200)}));

function nextStep(){goStep((activeStep+1)%hSteps.length)}
// Start auto-advance
setTimeout(()=>{goStep(0);stepTimer=setInterval(nextStep,4200)},800);

/* ── LAUNCH CHAT ANIMATION ──────────────────── */
function startLaunchChat(){
  const c = document.getElementById('launch-chat');
  c.innerHTML='';
  const msgs=[
    {text:'Hi! I\'m your WYVEX assistant. How can I help?',right:false,delay:400},
    {text:'Do you offer weekend appointments?',right:true,delay:1200},
    {text:'Yes! We have Saturday slots from 9am to 2pm. Want me to book one for you?',right:false,delay:2200},
    {text:'Yes please — this Saturday at 10am',right:true,delay:3200},
    {text:'Done! You\'re booked for Saturday 10am. You\'ll get a confirmation by email shortly. 🎉',right:false,delay:4200},
  ];
  msgs.forEach(m=>{
    setTimeout(()=>{
      const b = document.createElement('div');
      b.className='mc-bubble'+(m.right?' right':'');
      b.textContent=m.text;
      b.style.opacity='0';b.style.transform='translateY(6px)';
      b.style.transition='opacity 0.35s ease,transform 0.35s ease';
      c.appendChild(b);
      void b.offsetWidth;
      b.style.opacity='1';b.style.transform='translateY(0)';
      c.scrollTop=c.scrollHeight;
    },m.delay);
  });
}

/* ── DEMO CHAT ──────────────────────────────── */
const demoResponses={
  'what are your prices?':'Our chatbots start from £297/month — no setup fee. We\'ll give you an exact quote on a free call. 😊',
  'book me in for tuesday':'Sure! Let me check Tuesday\'s availability… We have 10am, 1pm, and 3pm free. Which works for you?',
  'tell me more about your services':'We specialise in AI chatbots, workflow automation, and custom websites for small businesses. Want me to book you a free 30-min call with our team?',
};
function demoTap(btn,msg){
  const chat = document.getElementById('demo-chat');
  // remove typing bubble
  const typing = chat.querySelector('.mc-bubble:last-child');
  // add user msg
  const u=document.createElement('div');
  u.className='mc-bubble right';u.textContent=msg;
  chat.appendChild(u);
  // add typing
  const t=document.createElement('div');
  t.className='mc-bubble';
  t.innerHTML='<div class="mc-typing"><span></span><span></span><span></span></div>';
  chat.appendChild(t);
  setTimeout(()=>{
    t.remove();
    const r=document.createElement('div');
    r.className='mc-bubble';
    r.textContent=demoResponses[msg.toLowerCase()]||'Great question! We\'d love to help with that. Book a free call and we\'ll walk you through everything.';
    chat.appendChild(r);
  },1200);
}
// Animate the typing bubble in demo chat on load
setTimeout(()=>{
  const chat=document.getElementById('demo-chat');
  const t=chat.querySelector('.mc-bubble:last-child');
  if(t){setTimeout(()=>{
    t.remove();
    const r=document.createElement('div');
    r.className='mc-bubble';
    r.textContent='Yes! We have 7am, 9am, and 11am slots available this week. Want me to book one?';
    chat.appendChild(r);
  },2000)}
},1000);

