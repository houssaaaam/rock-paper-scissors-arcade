/**
 * ROCK PAPER SCISSORS SPOCK LIZARD - CORE ULTIMATE ENGINE
 * Features: 3 Boss AI Modes, Blitz Timer, Localized Languages (EN/FR/AR), 
 * LocalStorage Matrix Profile, Particle Overlays, and Browser-Safe Audio Layers.
 */

// --- 1. LOCALIZATION SYSTEM DICTIONARIES ---
const translations = {
    en: {
        welcome: "Welcome,",
        selectEnemy: "SELECT ENEMY MODULE:",
        classicSub: "[ CLASSIC SYSTEM ACTIVE ]",
        tacticianSub: "[ TACTICIAN MATRIX ONLINE - HEURISTIC LEARNING ]",
        chaosSub: "[ CHAOS CRITICAL NODE UNLOCKED - ENRAGED ]",
        playerLabel: "PLAYER",
        cpuLabel: "COMPUTER",
        currentStreak: "CURRENT STREAK",
        bestRecord: "BEST RECORD",
        playerChose: "PLAYER CHOSE",
        computerChose: "COMPUTER CHOSE",
        statsTitle: "LIFETIME MATRIX PROFILE",
        played: "Played",
        wins: "Wins",
        losses: "Losses",
        ratio: "Win Rate",
        achieveTitle: "SYSTEM MILESTONES Unlocked",
        achFirst: "First Blood",
        achStreak: "Trifecta",
        achTitan: "Titan Slayer",
        recentLog: "RECENT MATCH LOG:",
        emptyLog: "EMPTY",
        ruleTitle: "System Battle Matrix",
        rock: "Rock", paper: "Paper", scissors: "Scissors", lizard: "Lizard", spock: "Spock",
        startMsg: "Make your move!",
        tieMsg: "Quantum deadlock! It's a tie.",
        winMsg: "Victory achieved! {winMove} overthrows {loseMove}.",
        loseMsg: "Defeat detected! {winMove} dismantles {loseMove}.",
        blitzOn: "⏱️ Blitz: ON",
        blitzOff: "⏱️ Blitz: OFF",
        blitzTimeout: "Time expired! The Boss struck while you hesitated.",
        creditTag: "MATRIX ARCHITECT:"
    },
    fr: {
        welcome: "Bienvenue,",
        selectEnemy: "SÉLECTIONNEZ LE MODULE ENNEMI:",
        classicSub: "[ SYSTEME CLASSIQUE ACTIF ]",
        tacticianSub: "[ MATRICE TACTICIENNE EN LIGNE - APPRENTISSAGE ]",
        chaosSub: "[ NŒUD DE CHAOS CRITIQUE DÉVERROUILLÉ - ENRAGÉ ]",
        playerLabel: "JOUEUR",
        cpuLabel: "ORDINATEUR",
        currentStreak: "SÉRIE ACTUELLE",
        bestRecord: "MEILLEUR RECORD",
        playerChose: "JOUEUR A CHOISI",
        computerChose: "L'ORDINATEUR A CHOISI",
        statsTitle: "PROFIL MATRICIEL À VIE",
        played: "Joués",
        wins: "Victoires",
        losses: "Défaites",
        ratio: "Taux de Victoire",
        achieveTitle: "JALONS DU SYSTÈME DÉBLOQUÉS",
        achFirst: "Premier Sang",
        achStreak: "Trifecta",
        achTitan: "Tueur de Titan",
        recentLog: "JOURNAL DES MATCHS RÉCENTS:",
        emptyLog: "VIDE",
        ruleTitle: "Matrice de Bataille du Système",
        rock: "Pierre", paper: "Papier", scissors: "Ciseaux", lizard: "Lézard", spock: "Spock",
        startMsg: "Faites votre choix!",
        tieMsg: "Impasse quantique! Match nul.",
        winMsg: "Victoire accomplie! {winMove} écrase {loseMove}.",
        loseMsg: "Défaite détectée! {winMove} démantèle {loseMove}.",
        blitzOn: "⏱️ Blitz: ACTIF",
        blitzOff: "⏱️ Blitz: INACTIF",
        blitzTimeout: "Temps écoulé! Le Boss a frappé pendant votre hésitation.",
        creditTag: "ARCHITECTE MATRICIEL:"
    },
    ar: {
        welcome: "مرحباً،",
        selectEnemy: "اختر وحدة العدو:",
        classicSub: "[ النظام الكلاسيكي نشط ]",
        tacticianSub: "[ مصفوفة التكتيكي متصلة - تعلم ذكي ]",
        chaosSub: "[ عقدة الفوضى الحرجة مفتوحة - هائج ]",
        playerLabel: "اللاعب",
        cpuLabel: "الكمبيوتر",
        currentStreak: "السلسلة الحالية",
        bestRecord: "أعلى رقم قياسي",
        playerChose: "اختار اللاعب",
        computerChose: "اختار الكمبيوتر",
        statsTitle: "ملف المصفوفة العام",
        played: "المباريات",
        wins: "الفوز",
        losses: "الهزائم",
        ratio: "نسبة الفوز",
        achieveTitle: "إنجازات النظام المفتوحة",
        achFirst: "الدم الأول",
        achStreak: "الثلاثية النظيفة",
        achTitan: "قاتل العمالقة",
        recentLog: "سجل المباريات الأخيرة:",
        emptyLog: "فارغ",
        ruleTitle: "مصفوفة المعركة للنظام",
        rock: "حجر", paper: "ورقة", scissors: "مقص", lizard: "سحلية", spock: "سبوك",
        startMsg: "ابدأ بالتحرك!",
        tieMsg: "عقدة كمية ميتة! تعادل.",
        winMsg: "تحقق النصر! {winMove} يتفوق على {loseMove}.",
        loseMsg: "تم رصد هزيمة! {winMove} يفكك {loseMove}.",
        blitzOn: "⏱️ بليتز: نشط",
        blitzOff: "⏱️ بليتز: معطل",
        blitzTimeout: "انتهى الوقت! ضرب الزعيم أثناء ترددك.",
        creditTag: "مهندس المصفوفة:"
    }
};

const languageSequence = ['en', 'fr', 'ar'];
let currentLang = 'en';

// --- 2. GAME GAMEPLAY GAME CONFIGURATION MATRIX ---
const gameRules = {
    rock: { beats: ['scissors', 'lizard'], emoji: '🪨' },
    paper: { beats: ['rock', 'spock'], emoji: '📄' },
    scissors: { beats: ['paper', 'lizard'], emoji: '✂️' },
    lizard: { beats: ['spock', 'paper'], emoji: '🦎' },
    spock: { beats: ['scissors', 'rock'], emoji: '🖖' }
};

const avatars = ['🎮', '🚀', '👽', '🤖', '💀', '⚔️', '🧠', '🔥'];

// State Engine
let gameState = {
    playerScore: 0,
    cpuScore: 0,
    currentStreak: 0,
    highStreak: 0,
    matchesPlayed: 0,
    matchesWon: 0,
    matchesLost: 0,
    currentMode: 'classic', // 'classic', 'tactician', 'chaos'
    blitzMode: false,
    audioMuted: false, // Turn off by default to allow auto-unlock mechanics to trigger on-click
    playerHistory: [], // Last 5 results
    unlockedAchievements: [],
    playerHistoryMoves: [] // Pure record of player choice history for Tactician heuristic analyzer
};

// Blitz Mode Engine Timers
let blitzTimerInterval = null;
const BLITZ_DURATION = 3000; // 3 seconds

// --- 3. DOM ELEMENTS ELEMENT CACHE ---
const dom = {
    container: document.getElementById('main-container'),
    audioElement: document.getElementById('interstellar-audio'),
    btnTheme: document.getElementById('theme-toggle-btn'),
    btnBlitz: document.getElementById('blitz-toggle-btn'),
    btnLang: document.getElementById('lang-toggle-btn'),
    btnAudio: document.getElementById('audio-toggle-btn'),
    avatarWrapper: document.getElementById('avatar-btn'),
    profileAvatar: document.getElementById('profile-avatar'),
    profileName: document.getElementById('global-profile-name'),
    profileSubtitle: document.getElementById('profile-rank-subtitle'),
    modeClassic: document.getElementById('mode-classic'),
    modeTactician: document.getElementById('mode-tactician'),
    modeChaos: document.getElementById('mode-chaos'),
    subtitle: document.getElementById('game-subtitle'),
    pScore: document.getElementById('player-score'),
    cScore: document.getElementById('cpu-score'),
    currStreakPill: document.getElementById('current-streak-pill'),
    currStreakVal: document.getElementById('current-streak'),
    highStreakVal: document.getElementById('high-streak'),
    playerPodCard: document.getElementById('player-pod-card'),
    computerPodCard: document.getElementById('computer-pod-card'),
    pEmoji: document.getElementById('player-emoji'),
    cEmoji: document.getElementById('cpu-emoji'),
    pChoiceBadge: document.getElementById('player-choice'),
    cChoiceBadge: document.getElementById('cpu-choice'),
    actionMessage: document.getElementById('action-message'),
    historyTape: document.getElementById('history-tape'),
    btnReset: document.getElementById('reset-btn'),
    btnOpenRules: document.getElementById('open-rules-btn'),
    btnCloseRules: document.getElementById('close-rules-btn'),
    rulesModal: document.getElementById('rules-modal'),
    particleStage: document.getElementById('particle-stage'),
    timerWrapper: document.getElementById('timer-wrapper'),
    timerBar: document.getElementById('timer-bar'),
    statPlayed: document.getElementById('stat-played'),
    statWins: document.getElementById('stat-wins'),
    statLosses: document.getElementById('stat-losses'),
    statRatio: document.getElementById('stat-ratio'),
    achFirst: document.getElementById('ach-first'),
    achStreak: document.getElementById('ach-streak'),
    achTitan: document.getElementById('ach-titan'),
    arcadeCredit: document.getElementById('arcade-credit')
};

const visualThemes = ['theme-classic', 'theme-tactician', 'theme-chaos', 'cosmetic-cyberpunk', 'cosmetic-matrix'];
let currentThemeIdx = 0;

// --- 4. ENGINE CORE AUDIO POLICIES AND LIFECYCLE SETUP ---
function initAudio() {
    dom.audioElement.volume = 0.35;
    
    // Auto-unlock background loop on interaction to bypass security limitations
    const unlockAudio = () => {
        if (!gameState.audioMuted) {
            dom.audioElement.play().then(() => {
                dom.btnAudio.textContent = '🔊';
            }).catch((e) => console.log("Playback engine waiting on user gesture authorization:", e));
        } else {
            dom.btnAudio.textContent = '🔇';
        }
        window.removeEventListener('click', unlockAudio);
    };
    window.addEventListener('click', unlockAudio);
}

function toggleAudioEngine() {
    gameState.audioMuted = !gameState.audioMuted;
    if (gameState.audioMuted) {
        dom.audioElement.pause();
        dom.btnAudio.textContent = '🔇';
    } else {
        dom.audioElement.play().catch(() => {});
        dom.btnAudio.textContent = '🔊';
    }
    saveDataToProfileStore();
}

// Retro Arcade Synthesizer Sound Effects Module
function playSynthSFX(type) {
    if (gameState.audioMuted) return;

    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);

        const now = ctx.currentTime;

        if (type === 'win') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
            osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
            osc.start(now);
            osc.stop(now + 0.4);
        } else if (type === 'lose') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(293.66, now); // D3
            osc.frequency.linearRampToValueAtTime(110.00, now + 0.35); // A2
            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'tie') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(349.23, now); // F3
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
            osc.start(now);
            osc.stop(now + 0.2);
        }
    } catch (err) {
        console.error("Web Audio matrix generation failure:", err);
    }
}

// --- 5. DATA PERSISTENCE LAYER (LOCALSTORAGE) ---
function loadDataFromProfileStore() {
    const saved = localStorage.getItem('RPS_Ultimate_Matrix_Profile');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            gameState.playerScore = data.playerScore || 0;
            gameState.cpuScore = data.cpuScore || 0;
            gameState.currentStreak = data.currentStreak || 0;
            gameState.highStreak = data.highStreak || 0;
            gameState.matchesPlayed = data.matchesPlayed || 0;
            gameState.matchesWon = data.matchesWon || 0;
            gameState.matchesLost = data.matchesLost || 0;
            gameState.unlockedAchievements = data.unlockedAchievements || [];
            gameState.audioMuted = data.audioMuted !== undefined ? data.audioMuted : false;
            
            if (data.savedName) dom.profileName.value = data.savedName;
            if (data.savedAvatar) dom.profileAvatar.textContent = data.savedAvatar;
        } catch (e) {
            console.error("Profile payload stream corrupt, using baseline defaults.", e);
        }
    }
}

function saveDataToProfileStore() {
    const dataToSave = {
        playerScore: gameState.playerScore,
        cpuScore: gameState.cpuScore,
        currentStreak: gameState.currentStreak,
        highStreak: gameState.highStreak,
        matchesPlayed: gameState.matchesPlayed,
        matchesWon: gameState.matchesWon,
        matchesLost: gameState.matchesLost,
        unlockedAchievements: gameState.unlockedAchievements,
        audioMuted: gameState.audioMuted,
        savedName: dom.profileName.value,
        savedAvatar: dom.profileAvatar.textContent
    };
    localStorage.setItem('RPS_Ultimate_Matrix_Profile', JSON.stringify(dataToSave));
}

// --- 6. TRANSLATION ENGINE & UI RENDER CORRECTIONS ---
function renderLocalization() {
    const dict = translations[currentLang];
    
    if (currentLang === 'ar') {
        dom.container.classList.add('rtl-layout');
    } else {
        dom.container.classList.remove('rtl-layout');
    }

    document.getElementById('txt-welcome').textContent = dict.welcome;
    document.getElementById('txt-select-enemy').textContent = dict.selectEnemy;
    dom.btnLang.textContent = `🌐 ${currentLang.toUpperCase()}`;
    
    updateSubtitleState();

    document.getElementById('scoreboard-player-label').textContent = dict.playerLabel;
    document.getElementById('scoreboard-cpu-label').textContent = dict.cpuLabel;
    document.getElementById('txt-current-streak').textContent = dict.currentStreak;
    document.getElementById('txt-best-record').textContent = dict.bestRecord;
    
    document.getElementById('player-choice-label').textContent = dict.playerChose;
    document.getElementById('computer-choice-label').textContent = dict.computerChose;
    document.getElementById('txt-stats-title').textContent = dict.statsTitle;
    
    document.getElementById('lbl-played').textContent = dict.played;
    document.getElementById('lbl-wins').textContent = dict.wins;
    document.getElementById('lbl-losses').textContent = dict.losses;
    document.getElementById('lbl-ratio').textContent = dict.ratio;

    document.getElementById('txt-achieve-title').textContent = dict.achieveTitle;
    document.getElementById('lbl-ach-first').textContent = dict.achFirst;
    document.getElementById('lbl-ach-streak').textContent = dict.achStreak;
    document.getElementById('lbl-ach-titan').textContent = dict.achTitan;

    document.getElementById('txt-recent-log').textContent = dict.recentLog;
    dom.btnOpenRules.textContent = `📜 ${dict.ruleTitle}`;
    document.getElementById('txt-modal-title').textContent = dict.ruleTitle;

    document.getElementById('lbl-rock').textContent = dict.rock;
    document.getElementById('lbl-paper').textContent = dict.paper;
    document.getElementById('lbl-scissors').textContent = dict.scissors;
    document.getElementById('lbl-lizard').textContent = dict.lizard;
    document.getElementById('lbl-spock').textContent = dict.spock;
    
    // Developer Credit Label Localization Updates
    dom.arcadeCredit.querySelector('.credit-tag').textContent = dict.creditTag;

    const beatLabels = document.querySelectorAll('.class-beats');
    beatLabels.forEach(lbl => lbl.textContent = currentLang === 'ar' ? 'يهزم:' : (currentLang === 'fr' ? 'Bat:' : 'Beats:'));

    if (dom.actionMessage.textContent === "Make your move!" || dom.actionMessage.textContent === "Faites votre choix!" || dom.actionMessage.textContent === "ابدأ بالتحرك!") {
        dom.actionMessage.textContent = dict.startMsg;
    }
    
    dom.btnAudio.textContent = gameState.audioMuted ? '🔇' : '🔊';
    dom.btnBlitz.textContent = gameState.blitzMode ? dict.blitzOn : dict.blitzOff;

    rebuildHistoryTapeUI();
}

function updateSubtitleState() {
    const dict = translations[currentLang];
    dom.subtitle.className = "game-subtitle";
    
    if (gameState.currentMode === 'classic') {
        dom.subtitle.textContent = dict.classicSub;
        dom.subtitle.classList.add('mode-classic-sub');
    } else if (gameState.currentMode === 'tactician') {
        dom.subtitle.textContent = dict.tacticianSub;
        dom.subtitle.classList.add('mode-tactician-sub');
    } else if (gameState.currentMode === 'chaos') {
        dom.subtitle.textContent = dict.chaosSub;
        dom.subtitle.classList.add('mode-chaos-sub');
    }
}

// --- 7. CORE AI ARCHITECTURES & ALGORITHMS ---
function executeClassicAILogic() {
    const options = Object.keys(gameRules);
    const randomIdx = Math.floor(Math.random() * options.length);
    return options[randomIdx];
}

function executeTacticianHeuristicLogic() {
    if (gameState.playerHistoryMoves.length < 3) {
        return executeClassicAILogic();
    }

    const frequencies = { rock: 0, paper: 0, scissors: 0, lizard: 0, spock: 0 };
    gameState.playerHistoryMoves.forEach(move => { if (frequencies[move] !== undefined) frequencies[move]++; });

    let mostDeployedMove = 'rock';
    let highestCount = -1;
    for (const [move, val] of Object.entries(frequencies)) {
        if (val > highestCount) {
            highestCount = val;
            mostDeployedMove = move;
        }
    }

    const counterTactics = [];
    for (const [bossMove, rules] of Object.entries(gameRules)) {
        if (rules.beats.includes(mostDeployedMove)) {
            counterTactics.push(bossMove);
        }
    }

    return counterTactics[Math.floor(Math.random() * counterTactics.length)];
}

function executeChaosBossLogic() {
    if (Math.random() < 0.35) {
        dom.computerPodCard.classList.add('boss-enraged');
        dom.cEmoji.classList.add('boss-scale-2x');
        setTimeout(() => {
            dom.computerPodCard.classList.remove('boss-enraged');
            dom.cEmoji.classList.remove('boss-scale-2x');
        }, 800);
    }
    
    return executeClassicAILogic();
}

function getComputerMove() {
    switch (gameState.currentMode) {
        case 'tactician': return executeTacticianHeuristicLogic();
        case 'chaos':     return executeChaosBossLogic();
        case 'classic':
        default:          return executeClassicAILogic();
    }
}

// --- 8. GAME RUNTIME MATRICES & PROCESSING LOGIC ---
function runMatchCycle(playerMove) {
    killBlitzTimer();
    gameState.playerHistoryMoves.push(playerMove);
    
    const computerMove = getComputerMove();
    
    let result = '';
    let localizedStatusText = '';
    const dict = translations[currentLang];

    const getLocalMoveName = (mv) => dict[mv] || mv;

    if (playerMove === computerMove) {
        result = 'tie';
        localizedStatusText = dict.tieMsg;
    } else if (gameRules[playerMove].beats.includes(computerMove)) {
        result = 'win';
        localizedStatusText = dict.winMsg
            .replace('{winMove}', getLocalMoveName(playerMove))
            .replace('{loseMove}', getLocalMoveName(computerMove));
    } else {
        result = 'lose';
        localizedStatusText = dict.loseMsg
            .replace('{winMove}', getLocalMoveName(computerMove))
            .replace('{loseMove}', getLocalMoveName(playerMove));
    }

    gameState.matchesPlayed++;
    if (result === 'win') {
        gameState.playerScore++;
        gameState.matchesWon++;
        gameState.currentStreak++;
        if (gameState.currentStreak > gameState.highStreak) {
            gameState.highStreak = gameState.currentStreak;
        }
        triggerImpactVisualFeedback('player');
    } else if (result === 'lose') {
        gameState.cpuScore++;
        gameState.matchesLost++;
        gameState.currentStreak = 0;
        triggerImpactVisualFeedback('computer');
    } else {
        triggerImpactVisualFeedback('tie');
    }

    playSynthSFX(result);

    gameState.playerHistory.unshift(result);
    if (gameState.playerHistory.length > 5) gameState.playerHistory.pop();

    evaluateAchievementThresholds();
    updateInterfaceDisplays(playerMove, computerMove, localizedStatusText, result);
    saveDataToProfileStore();

    if (gameState.blitzMode) {
        startBlitzTimer();
    }
}

// --- 9. INTERFACE EFFECTS & PARTICLE OVERLAYS ---
function triggerImpactVisualFeedback(winner) {
    dom.container.classList.remove('shake-impact');
    void dom.container.offsetWidth; 
    
    if (winner === 'computer') {
        dom.container.classList.add('shake-impact');
        spawnVisualFXParticles('⚡', 12);
    } else if (winner === 'player') {
        spawnVisualFXParticles('✨', 12);
    } else {
        spawnVisualFXParticles('💨', 5);
    }
}

function spawnVisualFXParticles(glyph, density) {
    if (gameState.currentMode === 'chaos') {
        density = Math.floor(density * 1.5);
    }

    for (let i = 0; i < density; i++) {
        const particle = document.createElement('span');
        particle.className = 'ember-particle';
        particle.textContent = glyph;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `0px`;
        
        const runtimeOffset = (Math.random() * 0.8) + 0.6;
        particle.style.animationDuration = `${runtimeOffset}s`;
        
        dom.particleStage.appendChild(particle);
        
        setTimeout(() => { particle.remove(); }, runtimeOffset * 1000);
    }
}

function spawnAmbientChaosEmbers() {
    if (gameState.currentMode !== 'chaos') return;
    const icons = ['🔥', '⚡', '💥'];
    const randomGlyph = icons[Math.floor(Math.random() * icons.length)];
    
    const particle = document.createElement('span');
    particle.className = 'ember-particle';
    particle.textContent = randomGlyph;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = `0px`;
    
    const duration = (Math.random() * 1.2) + 1.0;
    particle.style.animationDuration = `${duration}s`;
    
    dom.particleStage.appendChild(particle);
    setTimeout(() => { particle.remove(); }, duration * 1000);
}

// --- 10. REAL-TIME VIEW RE-RENDERING ENGINE ---
function updateInterfaceDisplays(pMove, cMove, finalMsg, status) {
    const dict = translations[currentLang];

    dom.pScore.textContent = gameState.playerScore;
    dom.cScore.textContent = gameState.cpuScore;
    dom.currStreakVal.textContent = gameState.currentStreak;
    dom.highStreakVal.textContent = gameState.highStreak;

    const pDeck = dom.pScore.parentElement;
    const cDeck = dom.cScore.parentElement;
    
    pDeck.classList.remove('leader-glow', 'loser-dim');
    cDeck.classList.remove('leader-glow', 'loser-dim');

    if (gameState.playerScore > gameState.cpuScore) {
        pDeck.classList.add('leader-glow');
        cDeck.classList.add('loser-dim');
    } else if (gameState.cpuScore > gameState.playerScore) {
        cDeck.classList.add('leader-glow');
        pDeck.classList.add('loser-dim');
    }

    if (gameState.currentStreak >= 3) {
        dom.currStreakPill.classList.add('streak-supercharged');
    } else {
        dom.currStreakPill.classList.remove('streak-supercharged');
    }

    if (pMove && cMove) {
        dom.pEmoji.textContent = gameRules[pMove].emoji;
        dom.cEmoji.textContent = gameRules[cMove].emoji;
        dom.pChoiceBadge.textContent = dict[pMove] || pMove;
        dom.cChoiceBadge.textContent = dict[cMove] || cMove;
    } else {
        dom.pEmoji.textContent = '❓';
        dom.cEmoji.textContent = '❓';
        dom.pChoiceBadge.textContent = '-';
        dom.cChoiceBadge.textContent = '-';
    }

    dom.actionMessage.textContent = finalMsg;
    dom.actionMessage.style.color = status === 'win' ? '#7ee787' : (status === 'lose' ? '#ff7b72' : '#c9d1d9');

    dom.statPlayed.textContent = gameState.matchesPlayed;
    dom.statWins.textContent = gameState.matchesWon;
    dom.statLosses.textContent = gameState.matchesLost;
    
    const winRateRatio = gameState.matchesPlayed > 0 ? Math.round((gameState.matchesWon / gameState.matchesPlayed) * 100) : 0;
    dom.statRatio.textContent = `${winRateRatio}%`;

    if (gameState.matchesPlayed >= 5) {
        if (winRateRatio >= 65) dom.profileSubtitle.textContent = "Elite Tactician Elite Operational Rank";
        else if (winRateRatio <= 40) dom.profileSubtitle.textContent = "Warning Diagnostic Systems Alert Level 1";
        else dom.profileSubtitle.textContent = "Combatant Matrix In Equilibrium";
    }

    rebuildHistoryTapeUI();
    renderAchievementShelfUI();
}

function rebuildHistoryTapeUI() {
    dom.historyTape.innerHTML = '';
    const dict = translations[currentLang];

    if (gameState.playerHistory.length === 0) {
        const emptyBadge = document.createElement('span');
        emptyBadge.className = 'history-badge badge-empty';
        emptyBadge.textContent = dict.emptyLog;
        dom.historyTape.appendChild(emptyBadge);
        return;
    }

    gameState.playerHistory.forEach((outcome) => {
        const badge = document.createElement('span');
        badge.className = `history-badge badge-${outcome}`;
        
        if (outcome === 'win') badge.textContent = currentLang === 'ar' ? 'فوز' : (currentLang === 'fr' ? 'GAGNÉ' : 'WIN');
        else if (outcome === 'lose') badge.textContent = currentLang === 'ar' ? 'خسارة' : (currentLang === 'fr' ? 'PERDU' : 'LOSS');
        else badge.textContent = currentLang === 'ar' ? 'تعادل' : (currentLang === 'fr' ? 'NUL' : 'TIE');
        
        dom.historyTape.appendChild(badge);
    });
}

function evaluateAchievementThresholds() {
    if (gameState.matchesWon >= 1 && !gameState.unlockedAchievements.includes('ach-first')) {
        gameState.unlockedAchievements.push('ach-first');
    }
    if (gameState.currentStreak >= 3 && !gameState.unlockedAchievements.includes('ach-streak')) {
        gameState.unlockedAchievements.push('ach-streak');
    }
    if (gameState.currentMode === 'chaos' && gameState.currentStreak >= 1 && !gameState.unlockedAchievements.includes('ach-titan')) {
        gameState.unlockedAchievements.push('ach-titan');
    }
}

function renderAchievementShelfUI() {
    if (gameState.unlockedAchievements.includes('ach-first')) {
        dom.achFirst.classList.remove('locked');
        dom.achFirst.classList.add('unlocked');
    } else {
        dom.achFirst.classList.add('locked');
        dom.achFirst.classList.remove('unlocked');
    }

    if (gameState.unlockedAchievements.includes('ach-streak')) {
        dom.achStreak.classList.remove('locked');
        dom.achStreak.classList.add('unlocked');
    } else {
        dom.achStreak.classList.add('locked');
        dom.achStreak.classList.remove('unlocked');
    }

    if (gameState.unlockedAchievements.includes('ach-titan')) {
        dom.achTitan.classList.remove('locked');
        dom.achTitan.classList.add('unlocked');
    } else {
        dom.achTitan.classList.add('locked');
        dom.achTitan.classList.remove('unlocked');
    }
}

// --- 11. TIMED MODE ENGINE (3s BLITZ) ---
function startBlitzTimer() {
    killBlitzTimer();
    dom.timerWrapper.style.display = 'block';
    dom.timerBar.style.width = '100%';

    let startTime = Date.now();
    
    blitzTimerInterval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let percentageLeft = Math.max(0, 100 - (elapsed / BLITZ_DURATION) * 100);
        
        dom.timerBar.style.width = `${percentageLeft}%`;

        if (elapsed >= BLITZ_DURATION) {
            killBlitzTimer();
            executeBlitzTimeoutForceLoss();
        }
    }, 40);
}

function killBlitzTimer() {
    if (blitzTimerInterval) {
        clearInterval(blitzTimerInterval);
        blitzTimerInterval = null;
    }
    dom.timerWrapper.style.display = 'none';
}

function executeBlitzTimeoutForceLoss() {
    const dict = translations[currentLang];
    gameState.cpuScore++;
    gameState.matchesPlayed++;
    gameState.matchesLost++;
    gameState.currentStreak = 0;
    gameState.playerHistory.unshift('lose');
    if (gameState.playerHistory.length > 5) gameState.playerHistory.pop();

    triggerImpactVisualFeedback('computer');
    playSynthSFX('lose');
    updateInterfaceDisplays(null, null, dict.blitzTimeout, 'lose');
    saveDataToProfileStore();
}

// --- 12. RUNTIME EVENT BINDINGS INTERFACES ---
function setupEventListeners() {
    const inputButtons = document.querySelectorAll('.choices-buttons .btn');
    inputButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const chosenMove = btn.getAttribute('data-choice');
            runMatchCycle(chosenMove);
        });
    });

    const modeSelectors = [dom.modeClassic, dom.modeTactician, dom.modeChaos];
    modeSelectors.forEach(selector => {
        selector.addEventListener('click', () => {
            modeSelectors.forEach(b => b.classList.remove('active'));
            selector.classList.add('active');
            
            gameState.currentMode = selector.getAttribute('data-mode');
            
            dom.container.classList.remove('theme-classic', 'theme-tactician', 'theme-chaos');
            dom.container.classList.add(`theme-${gameState.currentMode}`);

            updateSubtitleState();
            saveDataToProfileStore();
        });
    });

    dom.btnTheme.addEventListener('click', () => {
        visualThemes.forEach(theme => {
            document.body.classList.remove(theme);
            dom.container.classList.remove(theme);
        });

        currentThemeIdx = (currentThemeIdx + 1) % visualThemes.length;
        const chosenStyle = visualThemes[currentThemeIdx];

        if (chosenStyle.startsWith('cosmetic-')) {
            document.body.classList.add(chosenStyle);
        } else {
            dom.container.classList.add(chosenStyle);
        }
    });

    dom.btnBlitz.addEventListener('click', () => {
        gameState.blitzMode = !gameState.blitzMode;
        const dict = translations[currentLang];
        dom.btnBlitz.textContent = gameState.blitzMode ? dict.blitzOn : dict.blitzOff;
        
        if (!gameState.blitzMode) {
            killBlitzTimer();
        } else {
            startBlitzTimer();
        }
    });

    dom.btnLang.addEventListener('click', () => {
        let currentIdx = languageSequence.indexOf(currentLang);
        currentLang = languageSequence[(currentIdx + 1) % languageSequence.length];
        renderLocalization();
    });

    dom.btnAudio.addEventListener('click', toggleAudioEngine);

    dom.avatarWrapper.addEventListener('click', () => {
        let currentAvatar = dom.profileAvatar.textContent;
        let nextIdx = (avatars.indexOf(currentAvatar) + 1) % avatars.length;
        dom.profileAvatar.textContent = avatars[nextIdx];
        saveDataToProfileStore();
    });

    dom.profileName.addEventListener('change', saveDataToProfileStore);
    dom.profileName.addEventListener('blur', saveDataToProfileStore);

    dom.btnOpenRules.addEventListener('click', () => dom.rulesModal.classList.add('open'));
    dom.btnCloseRules.addEventListener('click', () => dom.rulesModal.classList.remove('open'));
    
    dom.rulesModal.addEventListener('click', (e) => {
        if (e.target === dom.rulesModal) dom.rulesModal.classList.remove('open');
    });

    dom.btnReset.addEventListener('click', () => {
        localStorage.removeItem('RPS_Ultimate_Matrix_Profile');
        gameState.playerScore = 0;
        gameState.cpuScore = 0;
        gameState.currentStreak = 0;
        gameState.highStreak = 0;
        gameState.matchesPlayed = 0;
        gameState.matchesWon = 0;
        gameState.matchesLost = 0;
        gameState.playerHistory = [];
        gameState.playerHistoryMoves = [];
        gameState.unlockedAchievements = [];
        
        dom.profileName.value = "Player";
        dom.profileAvatar.textContent = "🎮";
        
        killBlitzTimer();
        if (gameState.blitzMode) startBlitzTimer();

        const dict = translations[currentLang];
        updateInterfaceDisplays(null, null, dict.startMsg, 'neutral');
        saveDataToProfileStore();
    });
}

// --- 13. ENGINE CORES SPAWN LOOPS INITIALIZERS ---
window.addEventListener('DOMContentLoaded', () => {
    loadDataFromProfileStore();
    initAudio();
    setupEventListeners();
    renderLocalization();
    updateInterfaceDisplays(null, null, translations[currentLang].startMsg, 'neutral');

    setInterval(spawnAmbientChaosEmbers, 400);
});