// noinspection DuplicatedCode,ES6ConvertVarToLetConst

//#region Tasks

const initTasks = {
  test: {
    question: "test",
    answers: ["right", "wrong"],
    tasks: [
        ["choose", 0],
        ["choose", 0],
        ["choose", 0],
        ["choose", 0],
        ["choose", 0],
        ["choose", 0],
    ]
  },  
  java: {
    question: "Это Java 8.x или JavaScript?",
    answers: ["Java", "JavaScript"],
    tasks: [
      ["new Map()", 1],
      ["String.substr()", 1],
      ["class Foo implements Bar { }", 0],
      ["import js.java;", 0],
      ["new Int32Array();", 1],
      ["Math.ulp()", 0],
      ["enum", 0],
      ["interface", 0],
      ["===", 1],
      ["Float.isNaN()", 0],
      ["Arrays.copyOf()", 0],
      ["Date.before()", 0],
      ["Date.now()", 1],
      ["new Number(42)", 1],
      ["await", 1],
      ["function* foo() {}", 1],
      ["typeof", 1],
      ["class Foo { public Foo() {} }", 0],
      ["() -> {}", 0],
      ["int", 0],
      ["var a = new HashSet() {}", 0],
      ["debugger", 1],
      ["Java", 0],
      ["Ява", 0],
      ["for...of", 1],
      ['import date from "java.util";', 1],
      ["JavaScript", 1],
      ["ЯваСкрипт", 1]
    ]
  },
  css: {
    //Если кто-то не верит, пусть читает статью https://ru.hexlet.io/blog/posts/new-and-old-css-units
    question: "Это единица измерения CSS?",
    answers: ["Нет", "Да"],
    tasks: [
      ["lh", 1],
      ["rlh", 1],
      ["vi", 1],
      ["vb", 1],
      ["vw", 1],
      ["vh", 1],
      ["ic", 1],
      ["cap", 1],
      ["turn", 1],
      ["deg", 1],
      ["grad", 1],
      ["rad", 1],
      ["Q", 1],
      ["hz", 1],
      ["khz", 1],
      ["px", 1],
      ["em", 1],
      ["rem", 1],
      ["cm", 1],
      ["ex", 1],
      ["in", 1],
      ["pt", 1],
      ["pc", 1],
      ["vmin", 1],
      ["mr", 0],
      ["km", 0],
      ["m", 0],
      ["mol", 0],
      ["cd", 0],
      ["kg", 0],
      ["J", 0],
      ["kat", 0],
      ["sr", 0],
      ["μ", 0],
      ["yd", 0],
      ["fur", 0],
      ["mi", 0],
      ["li", 0],
      ["rd", 0],
      ["gal", 0],
      ["qt", 0]
    ]
  },
  "c#": {
    question: "Скомпилирует ли это C#?",
    answers: ["Нет", "Да"],
    tasks: [
      ["var a = 100d;", 1],
      ["var a = 10, b = 15;", 0],
      ["var a = new {a = 10, b = 15};", 1],
      ["foreach(var value of array)", 0],
      ["new HashSet<int>().Add(10).ToString();", 1],
      ["var yield = \"no\";", 1],
      ["double x = new object[15];", 0],
      ["yield break;", 1],
      ["var a = new[] {1, 2, 3};", 1],
      ["string 1foo = \"\";", 0],
      ["new List<int>().Add(10).Add(11);", 0],
      ["double a = (int) float.Parse(\"10\");", 1],
      ["var a = [1, 2, 3]", 0],
      ["new StringBuilder().Append(\"not\").Append(\"compiled\");", 1],
      ["var a = 10 and b = 15;", 0],
      ["var a = () => 15;", 0],
      ["Func<byte> a = () => 1000;", 0],
      ["int async = 10, await = 15;", 1],
      ["var a = new [1, 2, 3]", 0],
      ["var a = {a = 10, b = 15};", 0],
    ]
  },
  "pattern": {
    question: "Это паттерн проектирования?",
    answers: ["Нет", "Да"],
    tasks: [
      ["мост", 1],
      ["декоратор", 1],
      ["фасад", 1],
      ["заместитель", 1],
      ["посредник", 1],
      ["хранитель", 1],
      ["наблюдатель", 1],
      ["стратегия", 1],
      ["посетитель", 1],
      ["одиночка", 1],
      ["фабричный метод", 1],
      ["строитель", 1],
      ["туннель", 0],
      ["курьер", 0],
      ["сборщик", 0],
      ["упаковщик", 0],
      ["блоб", 0],
      ["бензиновая фабрика", 0],
      ["дымоход", 0],
      ["перестыковка", 0],
      ["сохранение или смерть", 0],
      ["состояние гонки", 0],
      ["инверсия абстракции", 0],
      ["адаптер", 1],
      ["база данных на сервис", 1],
      ["API-композиция", 1],
      ["API-шлюз", 1],
      ["разделение команд и запросов", 1],
      ["сага", 1],
      ["бэкенды для фронтендов", 1],
      ["внедрение зависимостей", 1],
      ["распределенная трассировка", 1],
      ["проверки здоровья", 1],
      ["внешняя конфигурация", 1],
      ["ленивая загрузка", 1],
      ["модель-представление-контрибуция", 0]
    ]
  },
  "bug": {
    question: "Баг или фича?",
    answers: ["Баг", "Фича"],
    tasks: [
      ["💾", 1],
      ["😭", 0],
      ["😎", 1],
      ["🏀", 1],
      ["🌙🍺", 1],
      ["☀️🍺", 0],
      ["🥗", 1],
      ["🍔", 0],
      ["🍇", 1],
      ["🍋", 0],
      ["🐌", 0],
      ["🕷️", 0],
      ["🙉", 0],
      ["🐈", 1],
      ["🐢", 0],
      ["🐘", 1],
      ["🍀", 1],
      ["🦀", 0],
      ["🍄", 0],
      ["🔥", 0],
      ["🌈", 1],
      ["🚬", 0],
      ["💻🛌", 0],
      ["💵", 1],
      ["🌳💩", 1],
      ["🤧", 0],
      ["🤮", 0],
      ["🤖", 1],
      ["👽", 1],
      ["🐙", 1],
      ["🐙➕🐈", 1],
      ["🦄", 1]        
    ]
  }
};

//#endregion

//#region Models

const App = {
  gameId: null,
  lastGameId: null,
  time: new Date(),
  user: {
    name: "",
    telegram: ""
  },
  info: {
    userSteps: 0,
    errorCount: 0,
    summaryScope: 0,
    retry: 0
  },
  vars: {
    theme: "",
    limitErrors: 5
  },
  constants: {
    maxSteps: null,
    height: 44,
    lapTime: 15
  },
  tasks: null,
  controls: {
    startMenu: document.querySelector(".menu-screen"),
    gameScreen: document.querySelector(".game-screen"),
    startBtn: document.querySelector(".start"),
    endMenu: document.querySelector(".end-game"),
    deck: document.querySelector(".bricks"),
    limit: document.querySelector(".limit"),
    username: document.querySelector(".username"),
    level: document.querySelector(".level"),
    score: document.querySelector("#currentScore"),
    question: document.querySelector(".question"),
    answersLeft: document.querySelector(".answers-left"),
    answersRight: document.querySelector(".answers-right"),
    scoresTable: document.querySelector(".scores-table"),
    counter: document.querySelector(".counter"),
    left: document.querySelector("#left")
  },
  events: {
    loose: function(data) {
      Storage.saveScore(data);      
      HtmlHelper.renderScore("lose");
    },

    win: function(data) {    
      Storage.saveScore(data);
      HtmlHelper.renderScore("win");
    }
  }
};

class Storage {
  static saveScore(data) {
    const scores = Storage.getScores();
    var gameId = App.gameId;
    
    if (App.lastGameId != null)
    {
      gameId = App.lastGameId;      
    }
    scores[gameId] = data;
    
    console.log(scores[gameId])
    try {
      const s = JSON.stringify(scores);
      localStorage.setItem("scores", s);
    } catch (e) {}
  }

  static getScore() {
    const scores = Storage.getScores();
    return scores[App.gameId];
  }

  static getScores() {
    try {
      return JSON.parse(localStorage.getItem("scores")) || {};
    } catch (e) {
      return {};
    }
  } 
}

class HtmlHelper {
  static renderScore(verdict) {
    const endGameScreen = document.querySelector(".end-game");
    const result = document.querySelector(".end-game .result");
    const repeatContainer = document.querySelector(".end-game .repeat-container");
    const score = document.querySelector("#score");

    App.controls.gameScreen.classList.add("hidden");
    endGameScreen.classList.remove("hidden");
    let lose = verdict === "lose";
    if (lose) {
      result.classList.remove("win");
      result.classList.add("lose");
      result.textContent = "Потрачено";
    } else if (verdict === "win") {
      result.classList.remove("lose");
      result.classList.add("win");
      
      if(App.info.errorCount === 0 && Number(App.info.retry) === 0)
      {        
        result.textContent = "Вы восхитительны!!! Бонус очков x2";        
      }else
      {
        result.textContent = "Победа";
      }
    }
    
    repeatContainer.querySelector(".repeat-link#finish-link").innerHTML = lose  ? "Сдаться и дать поиграть другому" : "Дать поиграть другому";
    
    if (Number(App.info.retry) <1 && Number(App.info.errorCount) !== 0)
    {
      repeatContainer.querySelector(".repeat-link#retry-link").innerHTML = lose  ?"Не сдаваться и попробовать еще раз" : "Попробовать еще раз";
    }
    else
    {
      repeatContainer.querySelector(".repeat-link#retry-link").remove();
    }
    
    console.log(App.constants.maxSteps);
    console.log(score.textContent);

    score.textContent = App.controls.score.textContent;     
  }
}

//#endregion

//#region Game

const initStartMenu = function() {
  const form = document.querySelector(".start-menu");
  const themeSelect = form.querySelector("select#theme");

  for (let [value, theme] of Object.entries(initTasks)) {
    const newOption = document.createElement("option");
    newOption.setAttribute("value", value);
    newOption.innerText = theme.question;

    themeSelect.appendChild(newOption);
  }
}

const validateForm = function() {
  const form = document.querySelector(".start-menu");

  for (let field of form.querySelectorAll("[required]")) {
    if (!field.reportValidity()) {
      return false;
    }
  }

  return true;
}

const onStart = function() {
  if (!validateForm()) {
    return;
  }

  start(true);
}

const onRetry = function() {
  App.info.retry++;
  App.lastGameId = App.gameId;
  start(false);
}

const start = function(newGame) {
  if (newGame || !App.initialized) {
    const form = document.querySelector(".start-menu");

    var formData = new FormData(form);

    for (var [key, value] of formData.entries()) {
      if (key === "theme") {
        App.vars.theme = value;
        App.constants.maxSteps = initTasks[App.vars.theme].tasks.length;
        App.originalTasks = JSON.parse(JSON.stringify(initTasks[App.vars.theme].tasks));
        App.controls.question.textContent = initTasks[App.vars.theme].question;
        App.controls.answersLeft.textContent =
            initTasks[App.vars.theme].answers[0];
        App.controls.answersRight.textContent =
            initTasks[App.vars.theme].answers[1];
      } else if (key === "name") {
        App.user[key] = value;
        App.controls.username.textContent = value.toString();
      } else {
        App.user[key] = value;
      }
    }

    App.controls.limit.style.bottom = App.constants.height * App.vars.limitErrors + "px";

    App.initialized = true;
    App.info.retry = 0;
  }

  App.tasks = Array.from(App.originalTasks);

  App.gameId = Date.now();
  App.controls.startMenu.classList.add("hidden");
  App.controls.endMenu.classList.add("hidden");
  App.controls.gameScreen.classList.remove("hidden");
  App.controls.counter.classList.remove("hidden");

  App.info.errorCount = 0;
  App.info.userSteps = 0;
  App.info.summaryScope = 0;
  App.controls.deck.innerHTML = "";
  App.controls.counter.innerHTML = App.vars.limitErrors;
  App.controls.left.innerHTML = App.tasks.length;
  
  countToZero();
};

const countToZero = function() {
  var readyCounter = 5;
  var interval = setInterval(() => {
    readyCounter--;
    App.controls.counter.textContent = readyCounter.toString();
    if (readyCounter < 1) {
      App.controls.counter.classList.add("hidden");
      clearInterval(interval);
      run();
    }
  }, 1000);
}

const run = function() {
  const indexRandomTask = Math.floor(Math.random() * App.tasks.length);
  const task = App.tasks[indexRandomTask];
  if (!task) {
    throw new Error(
        "Не могу взять таск " + indexRandomTask + ";" + App.tasks.length
    );
  }

  App.controls.left.textContent = App.tasks.length;

  const [content, side] = task;
  App.tasks.splice(indexRandomTask, 1);

  const brick = createBrick(content, side);

  const onArrowKeyDown = function(evt) {
    const leftArrow = 37;
    const rightArrow = 39;

    // игнорируем любые нажатия кроме стрелки влево вправо
    if (evt.keyCode !== leftArrow && evt.keyCode !== rightArrow) {
      return false;
    }

    if (evt.keyCode === leftArrow) {
      App.controls.answersLeft.classList.add("answers-pressed");
    }
    if (evt.keyCode === rightArrow) {
      App.controls.answersRight.classList.add("answers-pressed");
    }

    // удаляем события?
    brick.removeEventListener("transitionend", onDropTransitionEnd);
    document.removeEventListener("keydown", onArrowKeyDown);

    // проверяем правильный ли выбор сделал пользователь
    const userSide = evt.keyCode === leftArrow ? 0 : 1;
    if (userSide === side) {
      userGoodChoice(brick, side);
    } else {
      userFailChoice(brick);
    }
  };

  document.addEventListener("keydown", onArrowKeyDown);

  const onDropTransitionEnd = function() {
    brick.classList.remove("animate");
    brick.style.transitionDuration = "";

    document.removeEventListener("keydown", onArrowKeyDown);
    scoresForUserChoice(false);
    App.info.userSteps++;
    App.info.errorCount++;
    nextEvent();
    brick.removeEventListener("transitionend", onDropTransitionEnd);
  };

  brick.addEventListener("transitionend", onDropTransitionEnd);
};

const nextEvent = function() {
  const data = {
    user: App.user,
    theme: App.vars.theme,
    summaryScope: App.info.summaryScope,
    time: App.time
  };

  if (
    App.info.errorCount < App.vars.limitErrors &&
    App.info.userSteps < App.constants.maxSteps
  ) {
    run();
  } else
    data.time = new Date() - App.time;
    if (App.info.errorCount >= App.vars.limitErrors) {
    App.events.loose(data);    
  } else
    if (App.info.userSteps >= App.constants.maxSteps) {
    if(App.info.errorCount === 0 && App.info.retry === 0)
    {
      App.info.summaryScope = App.info.summaryScope *2;
      data.summaryScope = App.info.summaryScope;
      App.controls.score.textContent = App.info.summaryScope;
    }    
    App.events.win(data);
  }
};

const createBrick = function(content, side) {
  const brick = document.createElement("div");
  brick.classList.add("brick");
  if (App.vars.theme === "bug") {
    brick.classList.add("emoji");
  }
  brick.textContent = content;
  brick.dataset.side = side;
  App.controls.deck.appendChild(brick);

  animateBrick(brick);

  return brick;
};

const animateBrick = function(brick) {
  let endPosition =
    App.controls.deck.clientHeight -
    App.constants.height -
    App.constants.height * App.info.errorCount;

  const gameThirdPart = Math.round(App.tasks.length / 3);

  let speed;

  if (App.info.userSteps <= gameThirdPart) {
    speed =
      (document.documentElement.clientHeight - App.constants.height) /
      App.constants.lapTime;
  } else if (
    App.info.userSteps > gameThirdPart &&
    App.info.userSteps <= gameThirdPart * 2
  ) {
    speed =
      (document.documentElement.clientHeight - App.constants.height) /
      (App.constants.lapTime / 2);
  } else {
    speed =
      (document.documentElement.clientHeight - App.constants.height) /
      (App.constants.lapTime / 3);
  }

  let duration = endPosition / speed;

  setTimeout(() => {
    brick.classList.add("animate");
    brick.style.transitionDuration = `${duration}s`;
    brick.style.transform = `translateX(-50%) translateY(${endPosition}px)`;
  });
};

const userGoodChoice = (brick, side) => {
  scoresForUserChoice(true);

  let position = brick.getBoundingClientRect();

  let shiftX =
    side === 0
      ? -(position.left + brick.clientWidth * 1.5)
      : App.controls.deck.clientWidth * 1.5 - position.left;

  brick.style.transitionDuration = "0.5s";
  brick.style.transform = `translateX(${shiftX}px) translateY(${getComputedTranslateY(
    brick
  )}px) rotate(${side === 0 ? "" : "-"}45deg)`;

  const onSuccessTransitionEnd = function() {
    App.controls.answersLeft.classList.remove("answers-pressed");
    App.controls.answersRight.classList.remove("answers-pressed");
    App.info.userSteps++;
    brick.removeEventListener("transitionend", onSuccessTransitionEnd);
    brick.remove();
    nextEvent();
  };

  brick.addEventListener("transitionend", onSuccessTransitionEnd);
};

const userFailChoice = brick => {
  scoresForUserChoice(false);
  
  brick.style.transitionDuration = "";
  brick.style.transform = `translateX(-50%) translateY(${getComputedTranslateY(
    brick
  )}px)`;

  setTimeout(() => {
    const endPosition =
      App.controls.deck.clientHeight -
      App.constants.height -
      App.constants.height * App.info.errorCount;

    brick.style.transitionDuration = "0.3s";
    brick.style.transform = `translateX(-50%) translateY(${endPosition}px)`;
  });

  const onFailTransitionEnd = function() {
    App.controls.answersLeft.classList.remove("answers-pressed");
    App.controls.answersRight.classList.remove("answers-pressed");
    App.info.userSteps++;
    App.info.errorCount++;
    brick.classList.remove("animate");
    brick.style.transitionDuration = "";
    brick.removeEventListener("transitionend", onFailTransitionEnd);
    nextEvent();
  };

  brick.addEventListener("transitionend", onFailTransitionEnd);
};

const scoresForUserChoice = function(isGood) {
  var score;
  if (isGood === false && App.info.userSteps === 0) 
  {
    App.controls.score.textContent = String(-10);         
  } else {
    if (isGood === true) {
      score = 150 - App.info.errorCount * 15;
      
    } else {
      score = -App.info.userSteps * 10 * (1 + +App.info.errorCount)
    }
    App.controls.score.textContent = (
        Number(App.controls.score.textContent) +
        score).toFixed();
  }  
  App.info.summaryScope = Number(App.controls.score.textContent);
  App.controls.left.textContent = App.tasks.length;
}

function getComputedTranslateY(obj) {
  if (!window.getComputedStyle) return;
  var style = getComputedStyle(obj);
  var transform = style.transform;
  var mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) return parseFloat(mat[1].split(", ")[13]);
  mat = transform.match(/^matrix\((.+)\)$/);
  return mat ? parseFloat(mat[1].split(", ")[5]) : 0;
}

//#endregion

//#region Scores

const getScoresTable = () => {
  const allScores = Object.values(Storage.getScores());
  const scoresByTheme = {};

  for (let [theme] of Object.entries(initTasks)) {
    scoresByTheme[theme] = allScores.filter(r => r.theme === theme);
  }

  const scoresTablesContainer = document.querySelector(".scores-table");

  let html = "";

  for (let [theme, scores] of Object.entries(scoresByTheme)) {
    const rows = scores
        .map(({ user, summaryScope }) => {
          const { telegram, name } = user;         

          var score;
          score = Number(summaryScope);

        return {
          name,
          telegram,
          score
        };
      })
      .filter(i => i)
      .sort((a, b) => b.score - a.score)
      .map(({ name, telegram, score }) => {
        return `<tr>
          <td>${name}</td>
          <td>
            <div class="scores-telegram-container">
                <span class="scores-telegram-mask">***</span>
                <span class="scores-telegram">${telegram}</span>
            </div>
          </td>
          <td align="right">${score}</td>
          </tr>`;
        }
      );

    html += `
      <h1>${initTasks[theme].question}</h1>
      <table><thead><tr><th>Имя</th><th>Телеграм</th><th>Рейтинг</th></tr></thead><tbody>
      ${rows}
      </tbody></table>
    `;
  }

  scoresTablesContainer.innerHTML = html;
};

//#endregion
