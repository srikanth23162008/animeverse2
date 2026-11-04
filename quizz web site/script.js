
// ================= ANIME QUIZ DATA =================

const animeData = {

  "Naruto": [
    ["Who is Naruto's father?", ["Minato", "Kakashi", "Jiraiya", "Sasuke"], 0],
    ["What is Naruto's dream?", ["Become Hokage", "Become a doctor", "Become a samurai", "Become a teacher"], 0],
    ["Who is Naruto's rival?", ["Sasuke", "Shikamaru", "Choji", "Kiba"], 0],
    ["Which beast is sealed inside Naruto?", ["Kurama", "Shukaku", "Gyuki", "Matatabi"], 0],
    ["Who is Team 7's teacher?", ["Kakashi", "Iruka", "Jiraiya", "Orochimaru"], 0],
    ["What is Sasuke's clan?", ["Uchiha", "Uzumaki", "Hyuga", "Nara"], 0],
    ["Who trained Naruto in Sage Mode?", ["Jiraiya", "Kakashi", "Iruka", "Guy"], 0],
    ["What is Sakura's main specialty?", ["Medical ninjutsu", "Genjutsu", "Sword fighting", "Puppetry"], 0],
    ["Who is the Fifth Hokage?", ["Tsunade", "Kushina", "Mei", "Konan"], 0],
    ["What is the name of Naruto's mother?", ["Kushina", "Mikoto", "Sakura", "Hinata"], 0]
  ],

  "One Piece": [
    ["Who is the captain of the Straw Hats?", ["Luffy", "Zoro", "Sanji", "Usopp"], 0],
    ["What is Luffy's dream?", ["Become Pirate King", "Become Marine", "Find All Blue", "Become a king"], 0],
    ["Who is the swordsman of the crew?", ["Zoro", "Sanji", "Franky", "Brook"], 0],
    ["Who is the navigator?", ["Nami", "Robin", "Vivi", "Carrot"], 0],
    ["What is the name of Luffy's brother?", ["Ace", "Law", "Shanks", "Sabo"], 0],
    ["Who is the cook?", ["Sanji", "Zoro", "Jinbe", "Usopp"], 0],
    ["What is the crew's ship called after Going Merry?", ["Thousand Sunny", "Red Force", "Polar Tang", "Oro Jackson"], 0],
    ["Who is the archaeologist?", ["Robin", "Nami", "Hancock", "Perona"], 0],
    ["What is Chopper?", ["Reindeer", "Dog", "Cat", "Bear"], 0],
    ["Who gave Luffy his straw hat?", ["Shanks", "Ace", "Garp", "Rayleigh"], 0]
  ],

  "Demon Slayer": [
    ["Who is Tanjiro's sister?", ["Nezuko", "Kanao", "Mitsuri", "Shinobu"], 0],
    ["What breathing style does Tanjiro first use?", ["Water Breathing", "Flame Breathing", "Wind Breathing", "Stone Breathing"], 0],
    ["Who is the Flame Hashira?", ["Rengoku", "Giyu", "Tengen", "Muichiro"], 0],
    ["Who is the Sound Hashira?", ["Tengen", "Sanemi", "Obanai", "Gyomei"], 0],
    ["Who is the Insect Hashira?", ["Shinobu", "Mitsuri", "Kanae", "Kanao"], 0],
    ["What is Zenitsu known for?", ["Thunder Breathing", "Water Breathing", "Beast Breathing", "Mist Breathing"], 0],
    ["Who uses Beast Breathing?", ["Inosuke", "Genya", "Giyu", "Rengoku"], 0],
    ["Who is the main demon villain?", ["Muzan", "Akaza", "Doma", "Kokushibo"], 0],
    ["Who is the main Hashira in the Swordsmith Village arc?", ["Muichiro", "Rengoku", "Tengen", "Giyu"], 0],
    ["What is the name of Tanjiro's father?", ["Tanjuro", "Sakonji", "Shinjuro", "Kagaya"], 0]
  ],

  "Jujutsu Kaisen": [
    ["Who is the main character?", ["Yuji Itadori", "Megumi Fushiguro", "Yuta Okkotsu", "Satoru Gojo"], 0],
    ["Who is known as the strongest sorcerer?", ["Gojo", "Nanami", "Geto", "Todo"], 0],
    ["Who lives inside Yuji?", ["Sukuna", "Mahito", "Jogo", "Hanami"], 0],
    ["What is Megumi's family name?", ["Fushiguro", "Zenin", "Kamo", "Gojo"], 0],
    ["Who uses cursed speech?", ["Toge Inumaki", "Panda", "Maki", "Todo"], 0],
    ["What is Nobara's weapon?", ["Hammer and nails", "Sword", "Bow", "Spear"], 0],
    ["Who is Yuji's grandfather?", ["Wasuke", "Toji", "Yaga", "Kento"], 0],
    ["What is Gojo's eye technique called?", ["Six Eyes", "Sharingan", "Byakugan", "Rinnegan"], 0],
    ["Who is the principal of Tokyo Jujutsu High?", ["Masamichi Yaga", "Gojo", "Nanami", "Geto"], 0],
    ["What type of being is Mahito?", ["Cursed spirit", "Human", "Shikigami", "Sorcerer"], 0]
  ],

  "Attack on Titan": [
    ["Who is the main character?", ["Eren Yeager", "Armin", "Jean", "Levi"], 0],
    ["Who is Eren's childhood friend?", ["Mikasa", "Historia", "Sasha", "Annie"], 0],
    ["Who is known as humanity's strongest soldier?", ["Levi", "Erwin", "Jean", "Connie"], 0],
    ["What is the name of Eren's sister-like friend?", ["Mikasa", "Ymir", "Pieck", "Gabi"], 0],
    ["Who is the commander of the Survey Corps for much of the story?", ["Erwin", "Hange", "Pixis", "Nile"], 0],
    ["What is the name of the first wall?", ["Wall Maria", "Wall Rose", "Wall Sina", "Wall Titan"], 0],
    ["Who is known for loving potatoes?", ["Sasha", "Mikasa", "Annie", "Historia"], 0],
    ["What is Armin's specialty?", ["Strategy", "Sword making", "Cooking", "Medicine"], 0],
    ["Which branch explores outside the walls?", ["Survey Corps", "Military Police", "Garrison", "Cadets"], 0],
    ["Who inherits the Armored Titan?", ["Reiner", "Bertholdt", "Porco", "Falco"], 0]
  ],

  "Hunter x Hunter": [
    ["Who is the main character?", ["Gon", "Killua", "Kurapika", "Leorio"], 0],
    ["Who is Gon's best friend?", ["Killua", "Hisoka", "Chrollo", "Illumi"], 0],
    ["What is Killua's family name?", ["Zoldyck", "Freecss", "Kurta", "Nostrade"], 0],
    ["What does Kurapika seek?", ["Phantom Troupe", "Hunter Exam", "Greed Island", "Dark Continent"], 0],
    ["Who is Gon's father?", ["Ging", "Silva", "Netero", "Kite"], 0],
    ["What is Leorio studying to become?", ["Doctor", "Chef", "Teacher", "Pilot"], 0],
    ["Who is the chairman during the Hunter Exam arc?", ["Netero", "Pariston", "Ging", "Kite"], 0],
    ["What is Killua's family known for?", ["Assassination", "Medicine", "Politics", "Fishing"], 0],
    ["What is the name of the game arc?", ["Greed Island", "Dark Continent", "Yorknew", "Heavens Arena"], 0],
    ["Who is a member of the Phantom Troupe?", ["Chrollo", "Gon", "Leorio", "Kite"], 0]
  ],

  "My Hero Academia": [
    ["Who is the main character?", ["Izuku Midoriya", "Bakugo", "Todoroki", "Iida"], 0],
    ["What is All Might's real name?", ["Toshinori Yagi", "Shota Aizawa", "Tenya Iida", "Hizashi Yamada"], 0],
    ["Who is Deku's childhood rival?", ["Bakugo", "Kirishima", "Kaminari", "Mineta"], 0],
    ["What is Todoroki's quirk?", ["Half-Cold Half-Hot", "Explosion", "Zero Gravity", "Engine"], 0],
    ["Who is Class 1-A's teacher?", ["Aizawa", "All Might", "Present Mic", "Endeavor"], 0],
    ["What is Uraraka's quirk?", ["Zero Gravity", "Creation", "Frog", "Acid"], 0],
    ["Who is the Flame Hero?", ["Endeavor", "Hawks", "Best Jeanist", "Mirko"], 0],
    ["What is Bakugo's quirk?", ["Explosion", "Dark Shadow", "Hardening", "Engine"], 0],
    ["What is the name of the school?", ["U.A. High School", "Ketsubutsu", "Shiketsu", "Aldera"], 0],
    ["Who is known as the Symbol of Peace?", ["All Might", "Endeavor", "Hawks", "Deku"], 0]
  ],

  "Spy x Family": [
    ["What is Loid's code name?", ["Twilight", "Nightfall", "Daybreak", "Thorn Princess"], 0],
    ["What is Anya's ability?", ["Telepathy", "Telekinesis", "Invisibility", "Healing"], 0],
    ["What is Yor's assassin name?", ["Thorn Princess", "Twilight", "Nightfall", "Garden Rose"], 0],
    ["What is the family dog's name?", ["Bond", "Max", "Lucky", "Biscuit"], 0],
    ["What is Loid's profession?", ["Spy", "Doctor", "Teacher", "Chef"], 0],
    ["What is Yor's day job?", ["City hall clerk", "Doctor", "Police officer", "Teacher"], 0],
    ["What school does Anya attend?", ["Eden Academy", "U.A. High", "Tokyo High", "Westalis Academy"], 0],
    ["What is the name of Loid's mission?", ["Operation Strix", "Operation Owl", "Operation Rose", "Operation Eden"], 0],
    ["Who is Anya's classmate and friend?", ["Becky", "Fiona", "Sylvia", "Camilla"], 0],
    ["What food does Anya love?", ["Peanuts", "Carrots", "Apples", "Fish"], 0]
  ],

  "General Anime": [
    ["Which anime features a notebook that can cause death?", ["Death Note", "Naruto", "Bleach", "One Piece"], 0],
    ["Which anime features a character named Goku?", ["Dragon Ball", "One Piece", "Haikyuu", "Blue Lock"], 0],
    ["Which anime features a volleyball team?", ["Haikyuu!!", "Kuroko's Basketball", "Free!", "Blue Lock"], 0],
    ["Which anime features a character named Luffy?", ["One Piece", "Naruto", "Bleach", "Fairy Tail"], 0],
    ["Which anime features alchemy?", ["Fullmetal Alchemist", "Demon Slayer", "Spy x Family", "Dr. Stone"], 0],
    ["Which anime features a doctor named Kenzo Tenma?", ["Monster", "Steins;Gate", "One Piece", "Naruto"], 0],
    ["Which anime features a character named Saitama?", ["One Punch Man", "Mob Psycho 100", "Bleach", "Black Clover"], 0],
    ["Which anime features a blue-haired boy named Senku?", ["Dr. Stone", "Blue Lock", "Fairy Tail", "Naruto"], 0],
    ["Which anime features the Straw Hat Pirates?", ["One Piece", "Black Clover", "Bleach", "Dragon Ball"], 0],
    ["Which anime features Edward Elric?", ["Fullmetal Alchemist", "Naruto", "One Piece", "Death Note"], 0]
  ]

};


// ================= GAME VARIABLES =================

let currentAnime = "";
let currentMode = "normal";
let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 300;
let timerInterval = null;
let answerHistory = [];
let selectedAnswer = null;


// ================= RANDOM SHUFFLE FUNCTION =================

// Fisher-Yates shuffle algorithm

function shuffleArray(array) {

  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

  }

  return shuffled;

}


// ================= RANDOM QUESTIONS AND OPTIONS =================

function prepareQuestions(sourceQuestions) {

  return shuffleArray(sourceQuestions).map(question => {

    // Get the original correct answer before shuffling.

    const correctAnswer = question[1][question[2]];

    // Randomize answer options.

    const shuffledOptions = shuffleArray(question[1]);

    // Find the correct answer's new position.

    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);

    return [
      question[0],
      shuffledOptions,
      newCorrectIndex
    ];

  });

}


// ================= DOM ELEMENTS =================

const categoryList = document.getElementById("category-list");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");


// ================= CREATE CATEGORIES =================

function createCategories() {

  categoryList.innerHTML = "";

  Object.keys(animeData).forEach(anime => {

    const card = document.createElement("div");
    card.className = "category-card";

    const title = document.createElement("h3");
    title.textContent = anime;

    const playButton = document.createElement("button");
    playButton.textContent = "Start Quiz";

    playButton.addEventListener("click", () => startQuiz(anime));

    card.appendChild(title);
    card.appendChild(playButton);

    categoryList.appendChild(card);

  });

}


// ================= START QUIZ =================

function startQuiz(anime, mode = "normal") {

  clearInterval(timerInterval);

  currentMode = mode;

  let selectedQuestions;

  if (mode === "random") {

    const categories = Object.keys(animeData);

    anime = categories[Math.floor(Math.random() * categories.length)];

    selectedQuestions = animeData[anime];

  }

  else if (mode === "daily") {

    const allQuestions = Object.values(animeData).flat();

    const dateKey = new Date().toISOString().slice(0, 10);

    let seed = 0;

    for (const char of dateKey) {
      seed = (seed * 31 + char.charCodeAt(0)) >>> 0;
    }

    function seededRandom() {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    }

    const dailyPool = [...allQuestions];

    for (let i = dailyPool.length - 1; i > 0; i--) {

      const j = Math.floor(seededRandom() * (i + 1));

      [dailyPool[i], dailyPool[j]] = [dailyPool[j], dailyPool[i]];

    }

    selectedQuestions = dailyPool.slice(0, 10);

    currentAnime = "Daily Anime Quiz";

  }

  else {

    selectedQuestions = animeData[anime];

  }

  if (mode !== "daily") {
    currentAnime = anime;
  }

  // Randomize questions and answer options.

  questions = prepareQuestions(selectedQuestions.slice(0, 10));

  currentQuestion = 0;
  score = 0;
  timeLeft = 300;
  answerHistory = [];
  selectedAnswer = null;

  document.getElementById("quiz-title").textContent = currentAnime;

  document.getElementById("timer").textContent = "05:00";

  document.getElementById("categories").classList.add("hidden");

  quizSection.classList.remove("hidden");

  resultSection.classList.add("hidden");

  showQuestion();

  startTimer();

  quizSection.scrollIntoView({ behavior: "smooth" });

}


// ================= SHOW QUESTION =================

function showQuestion() {

  selectedAnswer = null;

  const question = questions[currentQuestion];

  document.getElementById("question-number").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  document.getElementById("question-text").textContent = question[0];

  document.getElementById("progress-bar").style.width =
    `${(currentQuestion / questions.length) * 100}%`;

  document.getElementById("feedback").textContent = "";

  const optionsContainer = document.getElementById("answer-options");

  optionsContainer.innerHTML = "";

  document.getElementById("next-button").disabled = true;

  question[1].forEach((option, index) => {

    const button = document.createElement("button");

    button.className = "option-button";

    button.textContent = option;

    button.addEventListener("click", () => selectAnswer(index));

    optionsContainer.appendChild(button);

  });

}


// ================= SELECT ANSWER =================

function selectAnswer(index) {

  if (selectedAnswer !== null) return;

  selectedAnswer = index;

  const question = questions[currentQuestion];

  const correctIndex = question[2];

  const buttons = document.querySelectorAll(".option-button");

  buttons.forEach((button, i) => {

    button.disabled = true;

    if (i === correctIndex) {
      button.classList.add("correct");
    }

    if (i === index && index !== correctIndex) {
      button.classList.add("wrong");
    }

  });

  const isCorrect = index === correctIndex;

  if (isCorrect) {

    score++;

    document.getElementById("feedback").textContent = "Correct! 🎉";

  }

  else {

    document.getElementById("feedback").textContent =
      `Incorrect! Correct answer: ${question[1][correctIndex]}`;

  }

  answerHistory.push({

    question: question[0],

    selected: question[1][index],

    correct: question[1][correctIndex],

    isCorrect: isCorrect

  });

  document.getElementById("next-button").disabled = false;

}


// ================= NEXT QUESTION =================

function nextQuestion() {

  if (selectedAnswer === null) return;

  currentQuestion++;

  if (currentQuestion < questions.length) {

    showQuestion();

  }

  else {

    finishQuiz();

  }

}


// ================= TIMER =================

function startTimer() {

  timerInterval = setInterval(() => {

    timeLeft--;

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft <= 0) {

      finishQuiz();

    }

  }, 1000);

}


// ================= FINISH QUIZ =================

function finishQuiz() {

  clearInterval(timerInterval);

  quizSection.classList.add("hidden");

  resultSection.classList.remove("hidden");

  document.getElementById("final-score").textContent =
    `Your score: ${score} / ${questions.length}`;

  document.getElementById("result-message").textContent =
    score === questions.length
      ? "Perfect score! You're an anime master! 🏆"
      : score >= 7
      ? "Amazing work! You're a true anime fan! 🌟"
      : score >= 4
      ? "Good effort! Keep watching and learning! 💜"
      : "Keep practising! You'll become an anime expert! 🌸";

  const review = document.getElementById("answer-review");

  review.innerHTML = "";

  answerHistory.forEach((item, index) => {

    const div = document.createElement("div");

    div.className = "review-item";

    const status = item.isCorrect ? "✅ Correct" : "❌ Incorrect";

    div.textContent =
      `${index + 1}. ${item.question} | Your answer: ${item.selected} | Correct answer: ${item.correct} | ${status}`;

    review.appendChild(div);

  });

  saveScore();

  resultSection.scrollIntoView({ behavior: "smooth" });

}


// ================= SAVE SCORE =================

function saveScore() {

  let scores = [];

  try {

    scores = JSON.parse(localStorage.getItem("animeScores") || "[]");

    if (!Array.isArray(scores)) scores = [];

  }

  catch {

    scores = [];

  }

  scores.push({

    anime: currentAnime,

    score: score,

    total: questions.length,

    date: new Date().toLocaleDateString()

  });

  scores.sort((a, b) =>
    (b.score / b.total) - (a.score / a.total)
  );

  localStorage.setItem(
    "animeScores",
    JSON.stringify(scores.slice(0, 10))
  );

  showLeaderboard();

}


// ================= SHOW LEADERBOARD =================

function showLeaderboard() {

  let scores = [];

  try {

    scores = JSON.parse(localStorage.getItem("animeScores") || "[]");

    if (!Array.isArray(scores)) scores = [];

  }

  catch {

    scores = [];

  }

  const lists = [
    document.getElementById("leaderboard-list"),
    document.getElementById("leaderboard-list-result")
  ];

  lists.forEach(list => {

    if (!list) return;

    list.innerHTML = "";

    if (scores.length === 0) {

      list.textContent = "No scores yet. Play a quiz to appear here!";

      return;

    }

    scores.forEach((item, index) => {

      const div = document.createElement("div");

      div.className = "leaderboard-item";

      const name = document.createElement("span");

      name.textContent = `${index + 1}. ${item.anime}`;

      const result = document.createElement("strong");

      result.textContent = `${item.score}/${item.total}`;

      div.appendChild(name);

      div.appendChild(result);

      list.appendChild(div);

    });

  });

}


// ================= DAILY QUIZ =================

function startDailyQuiz() {

  startQuiz("General Anime", "daily");

}


// ================= RANDOM QUIZ =================

function startRandomQuiz() {

  startQuiz("General Anime", "random");

}


// ================= RESTART QUIZ =================

function restartQuiz() {

  startQuiz(
    currentMode === "random" || currentMode === "daily"
      ? "General Anime"
      : currentAnime,
    currentMode
  );

}


// ================= BACK TO HOME =================

function scrollToQuizzes() {

  clearInterval(timerInterval);

  quizSection.classList.add("hidden");

  resultSection.classList.add("hidden");

  document.getElementById("categories").classList.remove("hidden");

  showLeaderboard();

  document.getElementById("categories").scrollIntoView({
    behavior: "smooth"
  });

}


// ================= INITIALIZE QUIZ =================

createCategories();

showLeaderboard();
