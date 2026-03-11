<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness Made Simplified | Coach Sushant</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background-color: #000; color: #fff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; overflow-x: hidden; -webkit-tap-highlight-color: transparent; }
        .bg-gradient-hero { background: linear-gradient(to top, #000, rgba(0,0,0,0.5), transparent); }
        .glass { background: rgba(20, 20, 20, 0.8); backdrop-filter: blur(12px); border: 1px solid #333; }
        .tab-content { display: none; }
        .tab-content.active { display: block; animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        input { background: #0a0a0a !important; border: 1px solid #333 !important; color: white !important; padding: 12px 16px !important; border-radius: 12px !important; width: 100%; outline: none; transition: border-color 0.3s; font-size: 16px; }
        input:focus { border-color: #e11d48 !important; }
        .nav-link { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; transition: color 0.3s; }
        .nav-link:hover { color: #e11d48; }
        .btn-hover { transition: transform 0.2s; }
        .btn-hover:active { transform: scale(0.96); }
    </style>
</head>
<body>

    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 glass border-b border-neutral-800 p-4 flex justify-between items-center px-6">
        <div class="flex items-center gap-2 cursor-pointer" onclick="showTab('home')">
            <div class="bg-rose-600 p-1.5 rounded text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>
            </div>
            <span class="font-black italic text-xl tracking-tighter uppercase">FMS</span>
        </div>
        <div class="flex gap-6 items-center">
            <span class="nav-link" onclick="showTab('trainer')">Trainer</span>
            <span class="nav-link text-rose-500" onclick="showTab('pro')">Pro Plans</span>
            <button id="nav-auth-btn" onclick="showTab('login')" class="bg-white text-black px-4 py-1.5 rounded font-bold text-[10px] uppercase btn-hover">Login</button>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16 min-h-screen">

        <!-- HOME TAB -->
        <section id="home" class="tab-content active">
            <div class="relative h-[75vh] flex items-center justify-center text-center px-4">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNoyff9-BHFiEp1CHfRicOK8IG6guQaTYXR10D-dvAaMB3Nkdp4YqJ2YjNaf3dJOxysSg1Pkse-qj2DzRmqfKtev5O7empJPe64qJ50I_ljE63IJGDMNE8bTQFeRAjg1RP1GihU3QpU_8NlgbCAnwqaug7FrNjg6N11__eehlUXpbKCyxWmLNrJkStI1Q/s1536/1000386771.png" class="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" alt="Coach Sushant Hero">
                <div class="absolute inset-0 bg-gradient-hero"></div>
                <div class="relative z-10 max-w-4xl">
                    <h1 class="text-6xl md:text-8xl font-black italic uppercase leading-[0.9] mb-4">Fitness Made <br><span class="text-rose-600">Simplified</span></h1>
                    <p class="text-neutral-400 text-sm md:text-lg mb-8 uppercase font-bold tracking-[0.2em]">Clinical Precision. Athletic Intensity.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onclick="showTab('contact')" class="bg-green-600 px-8 py-4 rounded-full font-black flex items-center gap-2 justify-center hover:scale-105 btn-hover transition-all uppercase text-sm">Get Started</button>
                        <button onclick="document.getElementById('tools').scrollIntoView({behavior:'smooth'})" class="bg-neutral-800 px-8 py-4 rounded-full font-black uppercase text-sm hover:bg-neutral-700 btn-hover transition-all">Free Tools</button>
                    </div>
                </div>
            </div>

            <div id="tools" class="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">
                <!-- BMI -->
                <div class="glass p-8 rounded-[2.5rem]">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="text-rose-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg></div>
                        <h2 class="text-2xl font-black uppercase italic">BMI Calculator</h2>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <input type="number" id="bmi-w" placeholder="Weight (kg)" inputmode="decimal">
                        <input type="number" id="bmi-h" placeholder="Height (cm)" inputmode="decimal">
                    </div>
                    <button onclick="calcBMI()" class="w-full bg-rose-600 py-4 rounded-xl font-black uppercase tracking-widest text-xs btn-hover">Calculate Result</button>
                    <div id="bmi-res" class="hidden mt-6 p-6 bg-black rounded-2xl border border-rose-600/30 text-center">
                        <p id="bmi-val" class="text-5xl font-black text-rose-600">--</p>
                        <p id="bmi-cat" class="text-xs font-black uppercase mt-2 tracking-widest text-neutral-400">Result</p>
                    </div>
                </div>

                <!-- Journal -->
                <div class="glass p-8 rounded-[2.5rem]">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="text-rose-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg></div>
                        <h2 class="text-2xl font-black uppercase italic">Daily Journal</h2>
                    </div>
                    <div class="space-y-4 mb-6">
                        <input type="text" id="ex-n" placeholder="Exercise Name">
                        <input type="text" id="ex-s" placeholder="Sets x Reps">
                        <button onclick="logWork()" class="w-full bg-white text-black py-4 rounded-xl font-black uppercase text-xs tracking-widest btn-hover">Add Entry</button>
                    </div>
                    <div id="log-list" class="space-y-2 max-h-[140px] overflow-y-auto pr-2">
                        <p class="text-neutral-600 text-center italic text-xs py-4">No recent logs.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- TRAINER TAB -->
        <section id="trainer" class="tab-content max-w-5xl mx-auto py-16 px-6">
            <div class="grid md:grid-cols-2 gap-12 items-start">
                <div class="relative">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilYYjI4eLGKmEh6ft2kC6RCNurgqlJa5uRqOPBv-1S-wdOoREb-UqtB7YmtsPK3MNXlYnuDi0UBQr-x1Ty6Ma8-EpsjT-YWDIDHd78WoXW6awuLkdCdhP-odhwUPPRuO9TCVQW8Vg-lidknRo2ciCo-IgVIJBg0fJEDJp75jioh7N_84T2pbaz_rHrRg0/s1280/1000372062.png" class="rounded-[3rem] w-full border border-neutral-800 shadow-2xl" alt="Sushant Trainer">
                    <div class="absolute -bottom-4 -right-4 bg-rose-600 p-4 rounded-2xl shadow-xl">
                        <p class="text-white font-black text-2xl">15+</p>
                        <p class="text-[10px] uppercase font-bold text-white/80 leading-none">Years Exp.</p>
                    </div>
                </div>
                <div>
                    <h1 class="text-6xl font-black italic uppercase mb-6 leading-none">Sushant</h1>
                    <p class="text-neutral-400 text-lg mb-8 italic">"Building elite physiques through clinical science and sustainable systems."</p>
                    
                    <div class="space-y-4 mb-10">
                        <div class="glass p-5 rounded-2xl">
                            <h4 class="text-rose-500 font-black uppercase text-[10px] tracking-[0.2em] mb-2">Qualifications</h4>
                            <p class="text-sm font-bold">BPt, NDDY, MBA (Hospital Admin), ACE CPT/NC</p>
                        </div>
                        <div class="glass p-5 rounded-2xl">
                            <h4 class="text-rose-500 font-black uppercase text-[10px] tracking-[0.2em] mb-2">Background</h4>
                            <p class="text-sm font-bold">Fitness First, Celebrity Fitness, Crossabs</p>
                        </div>
                    </div>
                    <button onclick="showTab('contact')" class="w-full bg-rose-600 py-5 rounded-2xl font-black uppercase text-sm tracking-widest shadow-lg shadow-rose-600/20 btn-hover">Book Consultation</button>
                </div>
            </div>
        </section>

        <!-- PRO PLANS TAB -->
        <section id="pro" class="tab-content max-w-6xl mx-auto py-16 px-6">
            <h2 class="text-center text-5xl font-black italic uppercase mb-16">Custom Coaching</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Plan 1 -->
                <div class="glass p-10 rounded-[3rem] border-neutral-800 flex flex-col items-center text-center">
                    <span class="text-rose-500 font-black text-[10px] uppercase tracking-widest mb-2">4 Week Program</span>
                    <h3 class="text-3xl font-black uppercase mb-2">Custom Workout</h3>
                    <p class="text-2xl font-black text-white/80 mb-10">2,000 INR</p>
                    <button onclick="showTab('contact')" class="w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-xs tracking-widest btn-hover">Enrol Now</button>
                </div>
                <!-- Plan 2 -->
                <div class="glass p-10 rounded-[3rem] border-rose-600/50 flex flex-col items-center text-center relative overflow-hidden">
                    <div class="absolute top-0 right-0 bg-rose-600 px-4 py-1 text-[10px] font-black uppercase">Popular</div>
                    <span class="text-rose-500 font-black text-[10px] uppercase tracking-widest mb-2">4 Week Program</span>
                    <h3 class="text-3xl font-black uppercase mb-2">Custom Diet</h3>
                    <p class="text-2xl font-black text-white/80 mb-10">2,000 INR</p>
                    <button onclick="showTab('contact')" class="w-full bg-rose-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest btn-hover">Enrol Now</button>
                </div>
                <!-- Plan 3 -->
                <div class="glass p-10 rounded-[3rem] border-neutral-800 flex flex-col items-center text-center">
                    <span class="text-rose-500 font-black text-[10px] uppercase tracking-widest mb-2">Personalized</span>
                    <h3 class="text-3xl font-black uppercase mb-2">1-on-1 Training</h3>
                    <p class="text-2xl font-black text-white/80 mb-10">7,000 INR</p>
                    <button onclick="showTab('contact')" class="w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-xs tracking-widest btn-hover">Enrol Now</button>
                </div>
            </div>
        </section>

        <!-- CONTACT TAB -->
        <section id="contact" class="tab-content max-w-3xl mx-auto py-20 px-6 text-center">
            <div class="glass p-10 md:p-16 rounded-[3rem]">
                <h2 class="text-4xl font-black italic uppercase mb-6">Contact Coach</h2>
                <div class="w-16 h-1 bg-rose-600 mx-auto mb-10"></div>
                
                <p class="text-lg md:text-xl font-medium text-neutral-300 leading-relaxed mb-12">
                    "Every fitness journey is unique. All our plans are <span class="text-rose-500 font-bold">100% custom-tailored</span> to your specific goals and lifestyle. Message or consult us to create your personalized blueprint for success."
                </p>

                <div class="grid gap-6">
                    <a href="https://wa.me/919899550279" target="_blank" class="bg-green-600 hover:bg-green-700 p-6 rounded-3xl flex items-center justify-between transition-all group btn-hover">
                        <div class="flex items-center gap-4">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
                            <div class="text-left">
                                <p class="text-[10px] uppercase font-black text-white/70">WhatsApp Coach</p>
                                <p class="font-bold text-lg">+91 98995 50279</p>
                            </div>
                        </div>
                        <span class="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>

                    <a href="mailto:sushhant290186@gmail.com" class="bg-neutral-800 hover:bg-neutral-700 p-6 rounded-3xl flex items-center justify-between transition-all group btn-hover">
                        <div class="flex items-center gap-4">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            <div class="text-left">
                                <p class="text-[10px] uppercase font-black text-white/70">Email Us</p>
                                <p class="font-bold text-lg">sushhant290186@gmail.com</p>
                            </div>
                        </div>
                        <span class="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- LOGIN TAB -->
        <section id="login" class="tab-content flex items-center justify-center py-24 px-6">
            <div class="glass p-12 rounded-[3rem] w-full max-w-md text-center">
                <h2 class="text-3xl font-black italic uppercase mb-2">Member Portal</h2>
                <p class="text-neutral-500 text-sm mb-10 font-medium tracking-wide">Enter your name to access dashboard.</p>
                <input type="text" id="login-input" placeholder="Name">
                <button onclick="doLogin()" class="w-full bg-rose-600 py-4 rounded-2xl font-black uppercase text-xs tracking-widest mt-6 btn-hover">Enter Profile</button>
            </div>
        </section>

        <!-- DASHBOARD TAB -->
        <section id="dashboard" class="tab-content max-w-4xl mx-auto py-20 px-6">
            <div class="flex justify-between items-center mb-12">
                <div>
                    <h1 id="dash-title" class="text-4xl font-black italic uppercase tracking-tighter">Your Journal</h1>
                    <p class="text-neutral-500 text-xs mt-1 uppercase font-bold tracking-widest">Member Dashboard</p>
                </div>
                <button onclick="doLogout()" class="text-neutral-600 text-[10px] font-black uppercase border border-neutral-800 px-6 py-3 rounded-xl hover:text-rose-500 transition-all btn-hover">Sign Out</button>
            </div>
            <div id="full-logs" class="space-y-4">
                <!-- Logs injected here -->
            </div>
        </section>

    </main>

    <footer class="py-16 text-center text-neutral-800 text-[10px] font-black uppercase tracking-[1em]">
        Fitness Made Simplified © 2024
    </footer>

    <!-- Scripts -->
    <script>
        // Initialize State
        let user = JSON.parse(localStorage.getItem('fms_u')) || null;
        let logs = JSON.parse(localStorage.getItem('fms_l')) || [];

        // Tab Engine
        function showTab(id) {
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            const target = document.getElementById(id);
            if (target) {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // BMI Logic
        function calcBMI() {
            const w = parseFloat(document.getElementById('bmi-w').value);
            const h = parseFloat(document.getElementById('bmi-h').value) / 100;
            if (w && h) {
                const bmi = (w / (h * h)).toFixed(1);
                let cat = "Normal";
                if (bmi < 18.5) cat = "Underweight";
                else if (bmi >= 25 && bmi < 30) cat = "Overweight";
                else if (bmi >= 30) cat = "Obese";
                
                document.getElementById('bmi-val').innerText = bmi;
                document.getElementById('bmi-cat').innerText = cat;
                document.getElementById('bmi-res').classList.remove('hidden');
            }
        }

        function render() {
            const btn = document.getElementById('nav-auth-btn');
            if(user) {
                btn.innerText = user.name.substring(0, 10) + (user.name.length > 10 ? '..' : '');
                btn.onclick = () => showTab('dashboard');
                document.getElementById('dash-title').innerText = `${user.name}'s Journal`;
            } else {
                btn.innerText = 'Login';
                btn.onclick = () => showTab('login');
            }

            const list = document.getElementById('log-list');
            const full = document.getElementById('full-logs');

            // Render Small List
            if(logs.length > 0) {
                list.innerHTML = logs.slice(0, 3).map(l => `
                    <div class="bg-black/50 p-3 rounded-xl border border-neutral-800 flex justify-between items-center text-[10px]">
                        <span><b>${l.name}</b> • ${l.sets}</span>
                        <span class="text-neutral-600 font-bold">${l.date}</span>
                    </div>
                `).join('');

                // Render Dashboard
                full.innerHTML = logs.map(l => `
                    <div class="glass p-8 rounded-3xl flex justify-between items-center transition-all hover:border-rose-600/50">
                        <div>
                            <p class="text-[9px] text-rose-500 font-black uppercase mb-1 tracking-widest">${l.date}</p>
                            <h3 class="text-2xl font-black uppercase italic">${l.name}</h3>
                            <p class="text-sm text-neutral-500 font-bold">${l.sets}</p>
                        </div>
                    </div>
                `).join('');
            } else {
                list.innerHTML = `<p class="text-neutral-600 text-center italic text-xs py-4">No recent logs.</p>`;
                full.innerHTML = `<div class="text-center py-20 text-neutral-700 italic font-bold uppercase tracking-widest text-xs">No entries found</div>`;
            }
        }

        function doLogin() {
            const n = document.getElementById('login-input').value.trim();
            if(!n) return;
            user = { name: n };
            localStorage.setItem('fms_u', JSON.stringify(user));
            render();
            showTab('home');
        }

        function doLogout() {
            user = null;
            logs = [];
            localStorage.removeItem('fms_u');
            localStorage.removeItem('fms_l');
            render();
            showTab('home');
        }

        function logWork() {
            if(!user) {
                showTab('login');
                return;
            }
            const n = document.getElementById('ex-n').value.trim();
            const s = document.getElementById('ex-s').value.trim();
            if(n && s) {
                logs.unshift({ name: n, sets: s, date: new Date().toLocaleDateString(), id: Date.now() });
                localStorage.setItem('fms_l', JSON.stringify(logs));
                document.getElementById('ex-n').value = '';
                document.getElementById('ex-s').value = '';
                render();
            }
        }

        // Run on load
        window.addEventListener('DOMContentLoaded', () => {
            render();
        });
    </script>
</body>
</html>

