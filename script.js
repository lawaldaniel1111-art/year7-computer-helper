const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const lessons = [
  {title:"What is a computer?",tag:"FOUNDATIONS",text:"A computer is an electronic device that accepts data, processes it according to instructions, stores it, and produces information.\n\nExample: A computer can take your typed marks, calculate the total, and show the result.",activity:"Name one task you use a computer for."},
  {title:"Characteristics and uses",tag:"FOUNDATIONS",text:"Computers can work quickly, produce consistent results, store lots of information, and repeat tasks. They are used in schools, hospitals, banks, shops, science, and entertainment.\n\nRemember: Computers follow instructions; they do not automatically know whether information is true.",activity:"Give one way a computer helps a school."},
  {title:"Hardware and software",tag:"CORE CONCEPTS",text:"Hardware means the physical parts you can touch, such as a keyboard, monitor, and mouse. Software means the programs and instructions that run on a computer, such as a web browser or word processor.\n\nA computer needs hardware and software to be useful.",activity:"Is a printer hardware or software?"},
  {title:"Input, output, and storage",tag:"CORE CONCEPTS",text:"Input devices send data into a computer (keyboard, mouse, microphone). Output devices present results (monitor, speakers, printer). Storage devices keep files and data (SSD, hard drive, USB drive).\n\nSome devices can perform more than one role.",activity:"Which type of device is a monitor?"},
  {title:"Data and information",tag:"CORE CONCEPTS",text:"Data is raw facts, such as 12, 15, and 18. Information is data that has been processed into a useful form, such as the average score being 15.\n\nProcessing turns data into meaningful information.",activity:"What is the difference between data and information?"},
  {title:"Operating systems",tag:"SOFTWARE",text:"An operating system (OS) manages a computer's hardware and software and provides a way for people to use it. Examples include Windows, macOS, Linux, Android, and iOS.\n\nThe OS helps run apps, manage files, and control devices.",activity:"Name one operating system."},
  {title:"Files and folders",tag:"DIGITAL SKILLS",text:"A file stores information, such as a photo, document, or song. A folder helps organise files. Clear file names make work easier to find.\n\nSave work regularly and ask before deleting files you do not recognise.",activity:"Suggest a clear name for a science homework file."},
  {title:"Computer safety and care",tag:"STAY SAFE",text:"Keep food and drinks away from devices, use clean dry hands, carry laptops carefully, and keep vents clear. Shut down using the normal menu when possible.\n\nNever open a computer power supply or touch damaged cables. Tell a teacher or trusted adult about danger.",activity:"Why should drinks be kept away from computers?"},
  {title:"Internet safety",tag:"STAY SAFE",text:"Keep passwords private, think before clicking links, and do not share your address, school details, or private photos with strangers. Tell a trusted adult if something online makes you uncomfortable.\n\nA message that creates panic or demands urgent action may be a scam.",activity:"What should you do if a stranger asks for your password?"},
  {title:"Basic computer terminology",tag:"VOCABULARY",text:"CPU: Central Processing Unit, which executes instructions. RAM: temporary working memory. Motherboard: the main circuit board. Browser: an app used to visit websites. Network: connected devices that can share data.\n\nRAM is temporary; storage keeps files when the computer is off.",activity:"Which component is often called the computer's main processor?"}
];

const parts = [
  ["CPU","🧠","The Central Processing Unit executes instructions and performs calculations. It is often called the processor.","Think of it as a worker carrying out instructions."],
  ["RAM","▦","Random Access Memory temporarily holds data and programs currently in use. Its contents are usually lost when power is off.","Think of RAM as your desk while working."],
  ["Motherboard","▤","The main circuit board that connects the CPU, RAM, storage, and other components so they can communicate.","Think of it as the roads connecting a town."],
  ["Storage drive","▣","An SSD or hard disk keeps files, apps, and the operating system even when the computer is switched off.","Think of it as a filing cabinet."],
  ["Monitor","▭","An output device that displays text, pictures, video, and other visual information.","It is like the computer's display window."],
  ["Keyboard","⌨","An input device used to enter letters, numbers, symbols, and commands.","Use it to type a document or search."],
  ["Mouse","🖱","An input device used to point, click, select, and move items on the screen.","A touchpad can do a similar job."],
  ["Speakers","🔊","Output devices that play sound from a computer.","Headphones are another audio output device."],
  ["Printer","🖨","An output device that produces a paper copy of digital information.","Ask before printing to save paper."],
  ["Microphone","🎙","An input device that captures sound or your voice.","Used for recording and online calls."],
  ["Scanner","▤","An input device that makes a digital copy of a paper document or photograph.","A phone camera can also capture documents."],
  ["Cooling fan","✳","Moves air to help keep internal components at a safe operating temperature.","Keep vents clear; do not put fingers inside."],
  ["Power supply","⚡","Converts electricity from the wall into the forms a desktop computer needs.","Never open or repair a power supply yourself."]
];

const questions = [
 {q:"Which part displays text and pictures?",a:["Keyboard","Monitor","Microphone","CPU"],correct:1,why:"A monitor is an output device that displays visual information."},
 {q:"Which one is hardware?",a:["A word processor app","A website","A mouse","A password"],correct:2,why:"A mouse is a physical device you can touch, so it is hardware."},
 {q:"What does RAM mainly do?",a:["Prints documents","Temporarily holds data in use","Plays sound","Connects to Wi-Fi"],correct:1,why:"RAM temporarily holds data and programs that the computer is using."},
 {q:"Which is an input device?",a:["Speakers","Monitor","Printer","Keyboard"],correct:3,why:"A keyboard sends typed data and commands into the computer."},
 {q:"What is an operating system?",a:["A type of desk","Software that manages the computer","A cable","A printer part"],correct:1,why:"An operating system manages hardware and software and helps users run apps."},
 {q:"What should you do if you smell burning near a computer?",a:["Open the case","Pour water on it","Stop using it and tell an adult","Keep playing"],correct:2,why:"Stop using it, keep away, and alert a teacher or trusted adult. Do not investigate electrical danger yourself."},
 {q:"Which device keeps files when power is off?",a:["RAM","CPU","SSD","Fan"],correct:2,why:"An SSD is a storage device that retains saved files without power."},
 {q:"What should you do with a stranger asking for your password?",a:["Send it quickly","Post it online","Keep it private and tell a trusted adult","Use your friend's password"],correct:2,why:"Never share your password with strangers. Ask a trusted adult if you are unsure."},
 {q:"Data becomes useful information when it is…",a:["Processed and organised","Deleted","Hidden","Unplugged"],correct:0,why:"Processing and organising data can turn raw facts into meaningful information."},
 {q:"Which device is an output device?",a:["Microphone","Scanner","Keyboard","Speakers"],correct:3,why:"Speakers output sound from a computer."},
 {q:"What is a folder used for?",a:["Cooling the CPU","Organising files","Typing letters","Powering the monitor"],correct:1,why:"Folders help you organise related files."},
 {q:"What should you do before clicking a suspicious link?",a:["Click immediately","Forward to everyone","Pause and ask a trusted adult","Enter your password"],correct:2,why:"Suspicious links may be unsafe. Do not click; ask a trusted adult."}
];

const problems = {
  power:{name:"Computer will not turn on",cause:"The power may be disconnected, the battery may be empty, or the device may need adult help.",steps:["Check whether the wall socket or power strip is switched on, if an adult says it is safe.","Look only at the outside: is the power cable firmly connected and undamaged? Do not touch damaged cables.","If it is a laptop, ask an adult whether it can be charged using its normal charger.","Try the power button once and wait a little.","If there are sparks, burning smells, unusual heat, liquid, or damaged cables, move away and tell an adult immediately."],warn:true},
  slow:{name:"Computer is running slowly",cause:"Many open apps, low free storage, updates, or an older device can cause slowness.",steps:["Wait a minute in case the computer is busy.","Save your work before closing anything.","Close apps or browser tabs you recognise and no longer need.","Restart using the normal Start or power menu, if permitted.","If it stays slow, ask a teacher or trusted adult. Do not download 'cleaner' apps or delete unknown files."],warn:false},
  internet:{name:"Internet is not working",cause:"Wi-Fi may be off, the router may be having trouble, or the service may be unavailable.",steps:["Check whether other websites or approved apps also fail.","Make sure Airplane mode is off and Wi-Fi is on, if you are allowed to change it.","Check whether other devices have internet; do not change router settings yourself.","Ask a teacher or trusted adult to check the router or school network.","Never share Wi-Fi passwords with strangers or install a tool claiming to fix the internet."],warn:false},
  sound:{name:"There is no sound",cause:"The volume may be muted, the wrong audio output may be selected, or headphones may be connected.",steps:["Check the volume icon and make sure it is not muted.","Use a familiar audio or video file approved by your teacher.","If headphones are connected, check the plug gently; do not force it.","Ask permission before changing sound settings.","If the device gets hot, smells unusual, or the cable is damaged, stop and tell an adult."],warn:false},
  keyboard:{name:"Keyboard is not working",cause:"A keyboard may be disconnected, a wireless battery may be empty, or an app may be frozen.",steps:["Check whether the whole computer or only one app has stopped responding.","If it is an external keyboard, look at the cable for visible damage without touching damaged parts.","For a wireless keyboard, ask an adult to check its batteries or connection.","Try clicking a different safe app if the mouse works.","Do not pull hard on cables or try to open the keyboard. Ask for help if it still fails."],warn:false},
  frozen:{name:"Screen or app is frozen",cause:"An app may be busy or unresponsive, or the computer may be low on resources.",steps:["Wait 30–60 seconds; the computer may recover.","Avoid repeatedly clicking the same button.","If possible, save work using the normal app controls once it responds.","Ask a teacher or trusted adult before force-closing an app, especially if work is unsaved.","If the whole device remains frozen, get adult help before restarting it."],warn:false}
};

const state = {
  xp: Number(localStorage.getItem("cyberXp") || 0),
  completed: JSON.parse(localStorage.getItem("cyberLessons") || "[]"),
  best: Number(localStorage.getItem("cyberBest") || 0),
  page: "dashboard",
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizOrder: [],
  selectedProblem: "power",
  simStep: 0,
  typingStart: null,
  typingTimer: null,
  typingDone: false,
  chat: [{who:"cyber",text:"Hey! I'm Cyber, your learning buddy. Ask me about computer studies, computer parts, online safety, or safe troubleshooting. I'm a learning helper, not a replacement for a teacher or trusted adult."}]
};

function saveProgress(){
  localStorage.setItem("cyberXp",String(state.xp));
  localStorage.setItem("cyberLessons",JSON.stringify(state.completed));
  localStorage.setItem("cyberBest",String(state.best));
  updateStats();
}
function updateStats(){
  $("#xpStat").textContent = `${state.xp} XP`;
  $("#lessonStat").textContent = `${state.completed.length} / ${lessons.length}`;
  $("#bestStat").textContent = `${state.best}%`;
}
function toast(message){
  const el=$("#toast"); el.textContent=message; el.classList.add("show");
  clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove("show"),2400);
}
function escapeHTML(value){
  return String(value).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function go(page){
  state.page=page;
  $$(".nav-item[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  $("#pageCrumb").textContent=({dashboard:"Dashboard",lessons:"Computer lessons",parts:"Computer parts",troubleshoot:"Troubleshooting",quiz:"Quiz arena",typing:"Typing zone",assistant:"Cyber assistant"})[page]||"Dashboard";
  $("#sidebar").classList.remove("open");
  renderPage();
  window.scrollTo({top:0,behavior:"smooth"});
}
function pageHeader(kicker,title,desc){
  return `<div class="eyebrow">${kicker}</div><h1 class="page-title">${title}</h1><p class="page-intro">${desc}</p>`;
}
function renderPage(){
  const root=$("#pageContent");
  if(state.page==="dashboard"){
    root.innerHTML = `<section class="welcome-banner"><div class="welcome-copy"><div class="eyebrow">✦ YOUR DIGITAL LEARNING HUB</div><h1>Hey, learner!<br><span>Ready to level up?</span></h1><p>Explore computers, solve problems, and build your tech skills — one mission at a time.</p><button class="primary-button" data-go="lessons">Start learning →</button></div><div class="hero-bot"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="robot"><div class="antenna"></div><div class="robot-ear left"></div><div class="robot-ear right"></div><div class="robot-head"><div class="robot-eyes"><i></i><i></i></div><div class="robot-mouth"></div></div><div class="robot-body"><div class="chest-light">C</div><div class="body-line"></div></div></div><div class="float-chip chip-one">0101</div><div class="float-chip chip-two">AI × Y7</div></div><div class="banner-grid"></div></section>
    <section class="section-block"><div class="section-heading"><div><div class="eyebrow">YOUR WORKSPACE</div><h2>Learning dashboard</h2></div><span class="subtle">Your progress is saved on this device</span></div><div class="stats-grid">${statsHTML()}</div></section>
    <section class="section-block"><div class="section-heading"><div><div class="eyebrow">PICK YOUR NEXT MISSION</div><h2>Explore Cyber</h2></div></div>${featureHTML()}</section><footer>CYBER <span>•</span> Learn smart. Stay curious. Stay safe.</footer>`;
  } else if(state.page==="lessons"){
    root.innerHTML=pageHeader("LEARNING CENTER","Computer lessons","Short, beginner-friendly lessons for Year 7. Open any lesson, then mark it complete when you are ready.")+
    `<div class="lesson-list">${lessons.map((l,i)=>`<button class="lesson-item" data-lesson="${i}"><span class="lesson-number">LESSON ${String(i+1).padStart(2,"0")} · ${l.tag}</span><strong>${state.completed.includes(i)?"✓ ":""}${l.title}</strong><small>${l.text.split("\n")[0]}</small></button>`).join("")}</div><div id="lessonDetail"></div>`;
  } else if(state.page==="parts"){
    root.innerHTML=pageHeader("INTERACTIVE COMPUTER LAB","Meet the computer parts","Select a component to learn its job. These are simple illustrations, not instructions for opening a computer.")+
    `<div class="part-grid">${parts.map((p,i)=>`<button class="part-item" data-part="${i}"><div class="part-illustration">${p[1]}</div><strong>${p[0]}</strong><small>${p[2]}</small></button>`).join("")}</div><div id="partDetail"></div><div class="safety-box">Safety first: never open a computer case or power supply. Internal parts and cables should only be handled by a qualified adult.</div>`;
  } else if(state.page==="troubleshoot"){
    root.innerHTML=pageHeader("SAFE SUPPORT CENTER","Let's solve a computer problem","Choose what is happening. Cyber will show safe checks you can try, plus clear warnings about when to get adult help.")+
    `<div class="problem-grid">${Object.entries(problems).map(([id,p])=>`<button class="problem-item" data-problem="${id}"><strong>${p.name}</strong><small>${p.cause}</small></button>`).join("")}</div><div id="problemDetail">${problemDetail(state.selectedProblem)}</div><section class="panel"><div class="eyebrow">PRACTICE MODE</div><h2>🧪 Troubleshooting simulator</h2><p class="inline-note">This is a pretend computer problem. Nothing on your real device will be changed.</p><div id="simulator">${simulatorHTML()}</div></section>`;
  } else if(state.page==="quiz"){
    root.innerHTML=pageHeader("KNOWLEDGE CHALLENGE","Quiz arena","Answer multiple-choice questions and read the explanation after each answer. Your best percentage is saved on this device.")+
    `<div class="panel" id="quizPanel">${quizHTML()}</div>`;
  } else if(state.page==="typing"){
    state.typingStart=null; state.typingDone=false; clearInterval(state.typingTimer);
    root.innerHTML=pageHeader("SKILL BUILDER","Typing zone","Type the sentence below as accurately as you can. Your result is calculated in this page; your typed text is not uploaded.")+
    `<div class="panel"><div class="eyebrow">BEGINNER PRACTICE</div><div class="typing-target" id="typingTarget">A computer follows instructions to turn data into useful information.</div><textarea class="typing-area" id="typingInput" placeholder="Click here and type the sentence above…" rows="4" aria-label="Type the sentence here"></textarea><div class="stats-grid" style="margin-top:14px"><div class="stat-card"><div><span>Accuracy</span><strong id="accuracy">0%</strong></div></div><div class="stat-card"><div><span>Typing speed</span><strong id="wpm">0 WPM</strong></div></div><div class="stat-card"><div><span>Elapsed</span><strong id="elapsed">0s</strong></div></div></div><div id="typingFeedback" class="feedback">Start typing to begin the timer. Accuracy and speed are estimates for practice.</div><div class="action-row"><button class="secondary-button" id="newTyping">New sentence</button><button class="secondary-button" id="resetTyping">Reset</button></div></div>`;
  } else if(state.page==="assistant"){
    root.innerHTML=pageHeader("CYBER AI-STYLE HELPER","Ask Cyber","This first version uses built-in educational responses and works offline. It is not connected to a live AI model yet.")+
    `<div class="panel"><div class="chat-log" id="chatLog">${state.chat.map(m=>`<div class="chat-bubble ${m.who}">${escapeHTML(m.text)}</div>`).join("")}</div><form class="chat-form" id="chatForm"><input type="text" id="chatInput" placeholder="Ask about RAM, hardware, internet safety…" autocomplete="off" required><button class="primary-button" type="submit">Send ↗</button></form><p class="inline-note" style="margin-top:12px">Tip: don't enter passwords, addresses, or other private information into a chat.</p></div>`;
  }
  bindPageActions();
}
function statsHTML(){return `<article class="stat-card"><div class="stat-icon blue">✦</div><div><span>XP earned</span><strong>${state.xp} XP</strong><small>Keep learning to earn more</small></div></article><article class="stat-card"><div class="stat-icon purple">▤</div><div><span>Lessons explored</span><strong>${state.completed.length} / ${lessons.length}</strong><small>Knowledge unlocked</small></div></article><article class="stat-card"><div class="stat-icon green">◎</div><div><span>Best quiz score</span><strong>${state.best}%</strong><small>Can you beat your record?</small></div></article>`}
function featureHTML(){return `<div class="feature-grid"><button class="feature-card" data-go="lessons"><div class="feature-icon blue">▤</div><h3>Computer lessons</h3><p>Learn key Year 7 topics with short explanations and activities.</p><span class="card-link">Explore lessons ↗</span></button><button class="feature-card" data-go="parts"><div class="feature-icon purple">◈</div><h3>Computer parts</h3><p>Discover what each computer component does.</p><span class="card-link">Open computer lab ↗</span></button><button class="feature-card" data-go="troubleshoot"><div class="feature-icon orange">⚙</div><h3>Fix my computer</h3><p>Practise safe checks for common computer problems.</p><span class="card-link">Solve a problem ↗</span></button><button class="feature-card" data-go="quiz"><div class="feature-icon green">◎</div><h3>Quiz arena</h3><p>Test what you know and earn experience points.</p><span class="card-link">Take a quiz ↗</span></button><button class="feature-card" data-go="typing"><div class="feature-icon cyan">⌨</div><h3>Typing zone</h3><p>Practise accuracy and see your typing speed.</p><span class="card-link">Start typing ↗</span></button><button class="feature-card" data-go="assistant"><div class="feature-icon pink">✧</div><h3>Ask Cyber</h3><p>Get help with topics covered in this learning app.</p><span class="card-link">Chat with Cyber ↗</span></button></div>`}
function bindPageActions(){
  $$("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
  $$("[data-lesson]").forEach(b=>b.addEventListener("click",()=>showLesson(Number(b.dataset.lesson))));
  $$("[data-part]").forEach(b=>b.addEventListener("click",()=>showPart(Number(b.dataset.part))));
  $$("[data-problem]").forEach(b=>b.addEventListener("click",()=>{state.selectedProblem=b.dataset.problem;$("#problemDetail").innerHTML=problemDetail(state.selectedProblem);bindProblemButtons()}));
  bindProblemButtons();
  $$("[data-quiz-answer]").forEach(b=>b.addEventListener("click",()=>answerQuiz(Number(b.dataset.quizAnswer))));
  $("#beginQuiz")?.addEventListener("click",startQuiz);
  $("#nextQuestion")?.addEventListener("click",nextQuestion);
  $("#restartQuiz")?.addEventListener("click",startQuiz);
  $("#typingInput")?.addEventListener("input",typingInput);
  $("#newTyping")?.addEventListener("click",newTyping);
  $("#resetTyping")?.addEventListener("click",resetTyping);
  $("#chatForm")?.addEventListener("submit",sendChat);
}
function showLesson(i){
  const l=lessons[i];const done=state.completed.includes(i);
  $("#lessonDetail").innerHTML=`<section class="panel"><div class="eyebrow">${l.tag}</div><h2 class="detail-title">${l.title}</h2><p class="detail-text">${escapeHTML(l.text)}</p><div class="feedback"><strong>Quick activity:</strong><br>${l.activity}</div>${done?'<div class="feedback">Lesson completed — great work!</div>':`<button class="primary-button" id="completeLesson">Mark lesson complete +10 XP</button>`}</section>`;
  $("#completeLesson")?.addEventListener("click",()=>{if(!state.completed.includes(i)){state.completed.push(i);state.xp+=10;saveProgress();showLesson(i);toast("Lesson completed! +10 XP");}});
  $("#lessonDetail").scrollIntoView({behavior:"smooth",block:"nearest"});
}
function showPart(i){
  const p=parts[i];$("#partDetail").innerHTML=`<section class="panel"><div class="part-illustration">${p[1]}</div><h2 class="detail-title">${p[0]}</h2><p class="detail-text">${p[2]}\n\n${p[3]}</p></section>`;
  $("#partDetail").scrollIntoView({behavior:"smooth",block:"nearest"});
}
function problemDetail(id){
  const p=problems[id];return `<section class="panel"><div class="eyebrow">STEP-BY-STEP FIX</div><h2 class="detail-title">${p.name}</h2><p class="detail-text">${p.cause}</p>${p.warn?'<div class="safety-box">⚠ SAFETY WARNING: If you see sparks, damaged cables, liquid damage, smell burning, or notice unusual heat, stop and move away. Tell a teacher or trusted adult. Never open the case or touch exposed wires.</div>':''}<ol class="detail-text">${p.steps.map(s=>`<li style="margin:9px 0">${escapeHTML(s)}</li>`).join("")}</ol><div class="feedback">If these checks do not help, stop and ask a teacher or trusted adult. Do not attempt electrical repairs.</div></section>`;
}
function bindProblemButtons(){}
function simulatorHTML(){
  const stages=[
    {screen:"SIMULATED COMPUTER: POWER OFF",question:"What is the safest first check?",answers:["Open the computer case","Check the outside power connection for visible damage","Touch the metal pins in the plug"],correct:1,why:"Correct! Looking at the outside connection is a safe first check. Do not touch damaged cables or open the case."},
    {screen:"SIMULATED COMPUTER: POWER LIGHT ON",question:"The monitor is dark. What should you check next?",answers:["Check that the monitor is on and its cable looks undamaged","Hit the monitor","Open the monitor"],correct:0,why:"Good choice. Check external controls and visible connections only. Never open a monitor."},
    {screen:"SIMULATED COMPUTER: READY",question:"The pretend computer is working. What should you do?",answers:["Celebrate and remember safety","Unplug every cable quickly","Open it to look inside"],correct:0,why:"Mission complete! You solved the simulated problem using safe external checks."}
  ];
  const s=stages[state.simStep];
  return `<div class="sim-stage"><div class="sim-screen ${state.simStep===2?"fixed":""}">${s.screen}</div><strong>${s.question}</strong><div class="answer-list">${s.answers.map((a,i)=>`<button class="answer-button" data-sim-answer="${i}">${a}</button>`).join("")}</div><div id="simFeedback"></div><button class="secondary-button" id="simAction">Check answer</button> <button class="secondary-button" id="resetSim">Restart simulation</button></div>`;
}
function simulatorAction(){
  const stages=[
    {correct:1,why:"Correct! Looking at the outside connection is a safe first check. Do not touch damaged cables or open the case."},
    {correct:0,why:"Good choice. Check external controls and visible connections only. Never open a monitor."},
    {correct:0,why:"Mission complete! You solved the simulated problem using safe external checks."}
  ];
  const chosen=$("[data-sim-answer].chosen");
  if(!chosen){toast("Choose an answer first.");return;}
  const s=stages[state.simStep],idx=Number(chosen.dataset.simAnswer);
  $$ ("[data-sim-answer]").forEach(b=>{b.disabled=true;if(Number(b.dataset.simAnswer)===s.correct)b.classList.add("correct");else if(b===chosen)b.classList.add("wrong")});
  $("#simFeedback").innerHTML=`<div class="feedback">${s.why}</div>`;
  if(idx===s.correct){state.xp+=5;saveProgress();toast("+5 XP");}
  const action=$("#simAction");
  action.textContent=state.simStep===2?"Mission complete":"Next step";
  action.onclick=()=>{if(state.simStep<2){state.simStep++;$("#simulator").innerHTML=simulatorHTML();bindSimulator();}else toast("Great work, detective!");};
}
function bindSimulator(){
  $$("[data-sim-answer]").forEach(b=>b.addEventListener("click",()=>{$$("[data-sim-answer]").forEach(x=>x.classList.remove("chosen"));b.classList.add("chosen")}));
  $("#simAction")?.addEventListener("click",simulatorAction);
  $("#resetSim")?.addEventListener("click",()=>{state.simStep=0;$("#simulator").innerHTML=simulatorHTML();bindSimulator()});
}
function quizHTML(){
  if(!state.quizOrder.length)return `<h2 class="detail-title">Ready for a quick challenge?</h2><p class="inline-note">Ten questions will be selected from the Year 7 question bank. Try your best!</p><label for="difficulty">Difficulty</label><select id="difficulty"><option>Beginner</option><option>Easy</option><option>Medium</option><option>Hard</option></select><div class="action-row"><button class="primary-button" id="beginQuiz">Start quiz →</button></div>`;
  if(state.quizIndex>=state.quizOrder.length){
    const percent=Math.round(state.quizScore/state.quizOrder.length*100);
    return `<div class="eyebrow">CHALLENGE COMPLETE</div><h2 class="detail-title">You scored ${state.quizScore} / ${state.quizOrder.length}</h2><p class="page-intro">Final score: ${percent}%. ${percent>=80?"Excellent work! Keep it up.":percent>=50?"Good effort! Review the lessons and try again.":"Keep practising — mistakes help you learn."}</p><div class="feedback">You earned ${state.quizScore*5} XP from correct answers.</div><button class="primary-button" id="restartQuiz">Try another quiz ↻</button>`;
  }
  const q=questions[state.quizOrder[state.quizIndex]];
  return `<div class="eyebrow">QUESTION ${state.quizIndex+1} OF ${state.quizOrder.length}</div><div style="height:5px;background:#20364b;border-radius:5px;margin:12px 0 20px"><div style="height:5px;width:${state.quizIndex/state.quizOrder.length*100}%;background:var(--cyan);border-radius:5px"></div></div><h2 class="detail-title">${q.q}</h2><div class="answer-list">${q.a.map((a,i)=>`<button class="answer-button" data-quiz-answer="${i}">${String.fromCharCode(65+i)}. ${a}</button>`).join("")}</div><div id="quizFeedback"></div><div class="action-row"><button class="primary-button" id="nextQuestion" hidden>Next question →</button></div>`;
}
function startQuiz(){
  const order=[...questions.keys()];
  for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
  state.quizOrder=order.slice(0,10);state.quizIndex=0;state.quizScore=0;state.quizAnswered=false;
  $("#quizPanel").innerHTML=quizHTML();bindPageActions();
  $("#beginQuiz")?.addEventListener("click",startQuiz);
}
function answerQuiz(index){
  if(state.quizAnswered)return;state.quizAnswered=true;
  const q=questions[state.quizOrder[state.quizIndex]];
  const correct=index===q.correct;if(correct){state.quizScore++;state.xp+=5;saveProgress();}
  $$("[data-quiz-answer]").forEach(b=>{b.disabled=true;const n=Number(b.dataset.quizAnswer);if(n===q.correct)b.classList.add("correct");else if(n===index)b.classList.add("wrong")});
  $("#quizFeedback").innerHTML=`<div class="feedback"><strong>${correct?"Correct!":"Not quite."}</strong> ${q.why}</div>`;
  $("#nextQuestion").hidden=false;
}
function nextQuestion(){
  state.quizIndex++;state.quizAnswered=false;
  if(state.quizIndex>=state.quizOrder.length){const percent=Math.round(state.quizScore/state.quizOrder.length*100);state.best=Math.max(state.best,percent);saveProgress();}
  $("#quizPanel").innerHTML=quizHTML();bindPageActions();
}
const typingSentences=[
 "A computer follows instructions to turn data into useful information.",
 "Keep your password private and ask a trusted adult when you feel unsure.",
 "The keyboard is an input device and the monitor is an output device.",
 "Save your work often and give your files clear names."
];
let typingSentence=typingSentences[0];
function typingInput(){
  const value=$("#typingInput").value;
  if(!state.typingStart){state.typingStart=Date.now();state.typingTimer=setInterval(updateTypingStats,500);}
  updateTypingStats();
  if(value===typingSentence){state.typingDone=true;clearInterval(state.typingTimer);$("#typingFeedback").textContent="Sentence complete! Great work. Try another sentence to keep practising.";state.xp+=5;saveProgress();toast("+5 XP for completing the sentence");}
}
function updateTypingStats(){
  const input=$("#typingInput");if(!input)return;
  const value=input.value;const elapsed=state.typingStart?(Date.now()-state.typingStart)/1000:0;
  let correctChars=0;for(let i=0;i<Math.min(value.length,typingSentence.length);i++)if(value[i]===typingSentence[i])correctChars++;
  const accuracy=value.length?Math.round(correctChars/value.length*100):0;
  const wpm=elapsed>0?Math.round((value.trim()?value.trim().split(/\s+/).length:0)/(elapsed/60)):0;
  $("#accuracy").textContent=`${accuracy}%`;$("#wpm").textContent=`${wpm} WPM`;$("#elapsed").textContent=`${Math.floor(elapsed)}s`;
  if(!state.typingDone)$("#typingFeedback").textContent=value.length?`${correctChars} characters match the target so far. Keep going carefully.`:"Start typing to begin the timer. Accuracy and speed are estimates for practice.";
}
function resetTyping(){clearInterval(state.typingTimer);state.typingStart=null;state.typingDone=false;$("#typingInput").value="";$("#accuracy").textContent="0%";$("#wpm").textContent="0 WPM";$("#elapsed").textContent="0s";$("#typingFeedback").textContent="Start typing to begin the timer."}
function newTyping(){typingSentence=typingSentences[Math.floor(Math.random()*typingSentences.length)];$("#typingTarget").textContent=typingSentence;resetTyping()}
function cyberReply(text){
  const t=text.toLowerCase();
  if(/ram/.test(t))return "RAM is temporary working memory. It holds data and programs the computer is using right now. Saved files belong on storage such as an SSD. 🧠";
  if(/cpu|processor/.test(t))return "The CPU (Central Processing Unit) executes instructions and performs calculations. It is often called the processor.";
  if(/motherboard/.test(t))return "The motherboard is the main circuit board. It connects components such as the CPU, RAM, and storage so they can communicate.";
  if(/hardware|software/.test(t))return "Hardware is the physical equipment you can touch, such as a keyboard. Software is a program or set of instructions, such as a word processor.";
  if(/input|output|storage/.test(t))return "Input sends data into a computer (keyboard, microphone). Output presents results (monitor, speakers). Storage keeps files (SSD, USB drive).";
  if(/internet|wifi|wi-fi/.test(t))return "Try safe checks: see whether Wi-Fi is on, check if other approved sites work, and ask a teacher or trusted adult about the network. Don't change router settings yourself.";
  if(/password|stranger|scam|safe online/.test(t))return "Keep passwords private, don't click suspicious links, and never share personal information with strangers. Tell a trusted adult if something online worries you.";
  if(/turn on|power|burning|spark|cable|frozen|slow|sound|keyboard/.test(t))return "Choose Troubleshooting from the sidebar for step-by-step safe checks. If you notice sparks, a burning smell, liquid damage, damaged cables, or unusual heat, stop using the device and get adult help. Never open the case.";
  if(/lesson|learn|computer/.test(t))return "Open Computer lessons for ten Year 7 topics, or Computer parts to explore the CPU, RAM, motherboard, storage, and input/output devices.";
  if(/hello|hi|hey/.test(t))return "Hey there! ⚡ What are we learning today — computer parts, hardware and software, online safety, or troubleshooting?";
  return "Good question! I can help with Year 7 topics like hardware, software, CPU, RAM, input/output devices, files, operating systems, and internet safety. Try asking me about one of those, or open Computer lessons. I'm an offline helper in this first version, so I may not know everything.";
}
function sendChat(e){
  e.preventDefault();const input=$("#chatInput");const text=input.value.trim();if(!text)return;
  state.chat.push({who:"user",text});state.chat.push({who:"cyber",text:cyberReply(text)});if(state.chat.length>24)state.chat=state.chat.slice(-24);
  $("#chatLog").innerHTML=state.chat.map(m=>`<div class="chat-bubble ${m.who}">${escapeHTML(m.text)}</div>`).join("");
  $("#chatLog").scrollTop=$("#chatLog").scrollHeight;input.value="";input.focus();
}
$$(".nav-item[data-page]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.page)));
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
$("#themeToggle").addEventListener("click",()=>{document.body.classList.toggle("light");localStorage.setItem("cyberTheme",document.body.classList.contains("light")?"light":"dark");toast(document.body.classList.contains("light")?"Light theme enabled":"Dark theme enabled")});
if(localStorage.getItem("cyberTheme")==="light")document.body.classList.add("light");
$("#menuButton").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
document.addEventListener("click",e=>{if(e.target.matches("#beginQuiz"))startQuiz();});
updateStats();
go("dashboard");
