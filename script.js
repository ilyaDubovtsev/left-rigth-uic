const initTasks = {
  es5: {
    question: "Эта возможность была в ES5?",
    answers: ["Нет", "Да"],
    tasks: [
      ["JSON.parse()", 1],
      ["JSON.stringify()", 1],
      ["for...of", 0],
      ["for...in", 1],
      ["Date.now()", 1],
      ["Symbol()", 0],
      ["Object.keys()", 1],
      ["Object.freeze()", 1],
      ["Object.create()", 1],
      ["Object.isFrozen()", 1],
      ["'use strict'", 1],
      ["Array.filter()", 1],
      ["Array.forEach()", 1],
      ["Array.reduceRight()", 1],
      ["class Foo {}", 0],
      ["class Foo { static bar() {} }", 0],
      ["class Foo { get bar(); set bar(v) }", 0],
      ["class Foo extends Bar {}", 0],
      ["Function.prototype.bind", 1],
      ["String.prototype.trim", 1],
      ['import Module from "es6"', 0],
      ["export foo() {}", 0],
      ["function* foo() {}", 0],
      ["new Set()", 0],
      ["new Map()", 0],
      ["[ 1, 2, 3, ]", 1],
      ["{ a: 1, b: 2, }", 1],
      ["`a ${template} literals`", 0],
      ["const [ foo, bar ] = []", 0],
      ["obj = { a: 1, b: 2 }", 1],
      ["obj = { a, b }", 0],
      ['obj = { ["some" + key()]: 1 }', 1],
      ["obj = { foo() {}, bar() {} }", 0],
      ['"Hello" + "world"', 1],
      ["{ a: 1, ...obj }", 0],
      ["function(a = 1, b = 2) {}", 0],
      ["() => {}", 0],
      ["function(a = 1, b = 2) {}", 0],
      ["let", 0],
      ["const", 0],
      ["String.indexOf", 1],
      ["console.log()", 1],
      ["Object.getOwnPropertyNames", 1],
      ["Array.forEach()", 1],
      ["Object.assign()", 0]
    ]
  },
  lodash: {
    question: "Это метод нативного Array?",
    answers: ["Нет", "Да"],
    tasks: [
      ["from()", 1],
      ["isArray()", 1],
      ["of()", 1],
      ["chunk()", 0],
      ["compact()", 0],
      ["difference()", 0],
      ["differenceBy()", 0],
      ["differenceWith()", 0],
      ["drop()", 0],
      ["concat()", 1],
      ["copyWithin()", 1],
      ["entries()", 1],
      ["every()", 1],
      ["fill()", 1],
      ["filter()", 1],
      ["find()", 1],
      ["pull()", 0],
      ["remove()", 0],
      ["tail()", 0],
      ["take()", 0],
      ["union()", 0],
      ["findIndex()", 1],
      ["forEach()", 1],
      ["includes()", 1],
      ["indexOf()", 1],
      ["join()", 1],
      ["keys()", 1],
      ["intersection()", 0],
      ["last()", 0],
      ["nth()", 0],
      ["uniq()", 0],
      ["unzip()", 0],
      ["without()", 0],
      ["zip()", 0],
      ["lastIndexOf()", 1],
      ["map()", 1],
      ["pop()", 1],
      ["push()", 1],
      ["reduce()", 1],
      ["reduceRight()", 1],
      ["reverse()", 1],
      ["shift()", 1],
      ["slice()", 1],
      ["some()", 1],
      ["sort()", 1],
      ["splice()", 1],
      ["toLocaleString()", 1],
      ["toSource()", 1],
      ["toString()", 1],
      ["findLastIndex()", 0],
      ["fromPairs()", 0],
      ["head()", 0],
      ["initial()", 0],
      ["unshift()", 1],
      ["values()", 1]
    ]
  },
  falsy: {
    question: "falsy ли это выражение?",
    answers: ["Нет", "falsy"],
    tasks: [
      ["false", 1],
      ["null", 1],
      ["undefined", 1],
      ["0", 1],
      ["NaN", 1],
      ["''", 1],
      ['""', 1],
      ["document.all", 1],
      ["true", 0],
      ["{}", 0],
      ["[]", 0],
      ["42", 0],
      ["'foo'", 0],
      ["3.14", 0],
      ["-3.14", 0],
      ["Infinity", 0],
      ["-Infinity", 0]
    ]
  },
  jquery: {
    question: "Это медот jQuery 3.x?",
    answers: ["Нет", "Есть"],
    tasks: [
      [".add()", 1],
      [".after()", 1],
      [".live()", 0],
      [".load()", 0],
      [".size()", 0],
      [".blur()", 1],
      [".change()", 1],
      [".children()", 1],
      [".click()", 1],
      [".contents()", 1],
      [".clone()", 1],
      [".appendChild()", 0],
      [".className()", 0],
      [".css()", 1],
      [".data()", 1],
      [".delay()", 1],
      [".dequeue()", 1],
      [".outerHTML()", 0],
      [".scrollTop()", 0],
      [".each()", 1],
      [".end()", 1],
      [".append()", 1],
      [".error()", 0],
      [".classList()", 0],
      [".getAttribute()", 0],
      [".attr()", 1],
      [".before()", 1],
      [".bind()", 0],
      [".delegate()", 0],
      [".die()", 0],
      [".fadeTo()", 1],
      [".filter()", 1],
      [".toggle()", 0],
      [".unbind()", 0],
      [".find()", 1],
      [".first()", 1],
      [".innerHTML()", 0],
      [".unload()", 0],
      [".scrollLeft()", 0],
      [".focus()", 1],
      [".get()", 1],
      [".has()", 1],
      [".html()", 1],
      [".matches()", 0],
      [".querySelector()", 0],
      [".keypress()", 1]
    ]
  },
  java: {
    question: "Это...",
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
    answers: ["Да", "Нет"],
    tasks: [
      ["var a = 100d;", 0],
      ["var a = 10, b = 15;", 1],
      ["var a = new {a = 10, b = 15};", 0],
      ["foreach(var value of array)", 1],
      ["new HashSet<int>().Add(10).ToString();", 0],
      ["var yield = \"no\";", 0],
      ["double x = new object[15];", 1],
      ["yield break;", 0],
      ["var a = new[] {1, 2, 3};", 0],
      ["string 1foo = \"\";", 1],
      ["new List<int>().Add(10).Add(11);", 1],
      ["double a = (int) float.Parse(\"10\");", 0],
      ["var a = [1, 2, 3]", 1],
      ["new StringBuilder().Append(\"not\").Append(\"compiled\");", 0],
      ["var a = 10, b = 15;", 1],
      ["var a = () => 15;", 1],
      ["Func<byte> a = () => 1000;", 1],
      ["int async = 10, await = 15;", 0],
      ["var a = new [1, 2, 3]", 1],
      ["var a = {a = 10, b = 15};", 1],
    ]
  },
  "c#History": {
    question: "C# 6.0 или C# 7.0?",
    answers: ["C# 6.0", "C# 7.0"],
    tasks: [
      ["SomeMethod(out var variable);", 1],
      ["case int digit:", 1],
      ["nameof(foo);", 0],
      ["public const int Four = 0b0100;", 1],
      ["catch(Exception e) when (e.Message = \"\")", 0],
      ["var foo = (a: 10, b: 30);", 1],
      ["foo?.Bar();", 0],
      ["var (a, b) = foo;", 1],
      ["var bar = Method() ?? throw new Exception(\"...\");", 1],
      ["return ref variable;", 1],
      ["$\"{foo} {bar}\"", 0],
      ["if(foo is int bar)", 1],
      ["public int Foo => 10;", 0],
      ["var a = 1_000_000", 1],
      ["using static System.Math;", 0],
    ]
  }
};

const App = {
  gameId: null,
  user: {
    name: "",
    email: ""
  },
  info: {
    userSteps: 0,
    errorCount: 0
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
    init: function() {
      App.info.errorCount = 0;
      App.info.userSteps = 0;
      App.tasks = null;
      App.controls.deck.innerHTML = "";
    },

    loose: function(data) {
      Storage.saveScore(data);
      HtmlHelper.renderScore("lose");
      App.events.init();
    },

    win: function(data) {
      Storage.saveScore(data);
      HtmlHelper.renderScore("win");
      App.events.init();
    }
  }
};

class Storage {
  static saveScore(data) {
    const scores = Storage.getScores();
    scores[App.gameId] = data;
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
  static hideScores() {
    const scores = document.querySelector(".scores-info");
    if (scores) {
      scores.remove();
    }
  }

  static renderScore(verdict) {
    const endGameScreen = document.querySelector(".end-game");
    const result = document.querySelector(".end-game .result");
    const score = document.querySelector("#score");

    App.controls.gameScreen.classList.add("hidden");
    endGameScreen.classList.remove("hidden");
    if (verdict === "lose") {
      result.classList.remove("win");
      result.classList.add("lose");
      result.textContent = "Потрачено";
    } else if (verdict === "win") {
      result.classList.remove("lose");
      result.classList.add("win");
      result.textContent = "Победа";
    }
    score.textContent = App.controls.score.textContent;
  }
}

const retry = function() {
  App.constants.maxSteps = initTasks[App.vars.theme].tasks.length;
  App.tasks = JSON.parse(JSON.stringify(initTasks[App.vars.theme].tasks));
  HtmlHelper.hideScores();
  App.gameId = Date.now();
  App.controls.startMenu.classList.add("hidden");
  App.controls.endMenu.classList.add("hidden");
  App.controls.gameScreen.classList.remove("hidden");
  App.controls.counter.classList.remove("hidden");

  var readyCounter = 5;
  var interval = setInterval(() => {
    readyCounter--;
    App.controls.counter.textContent = readyCounter;
    if (readyCounter < 1) {
      App.controls.counter.classList.add("hidden");
      clearInterval(interval);
      run();
    }
  }, 1000);
};

const nextEvent = function() {
  if (
    App.info.errorCount < App.vars.limitErrors &&
    App.info.userSteps < App.constants.maxSteps
  ) {
    run();
  } else if (App.info.errorCount >= App.vars.limitErrors) {
    App.events.loose({
      user: App.user,
      errorCount: App.info.errorCount,
      userSteps: App.info.userSteps
    });
  } else if (App.info.userSteps >= App.constants.maxSteps) {
    App.events.win({
      user: App.user,
      errorCount: App.info.errorCount,
      userSteps: App.info.userSteps
    });
  }
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
  App.controls.score.textContent = (
    Number(App.controls.score.textContent) +
    (420 - App.info.errorCount * 42)
  ).toFixed();

  App.controls.left.textContent = App.tasks.length;

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

function getComputedTranslateY(obj) {
  if (!window.getComputedStyle) return;
  var style = getComputedStyle(obj),
    transform = style.transform || style.webkitTransform || style.mozTransform;
  var mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) return parseFloat(mat[1].split(", ")[13]);
  mat = transform.match(/^matrix\((.+)\)$/);
  return mat ? parseFloat(mat[1].split(", ")[5]) : 0;
}

const userFailChoice = brick => {
  App.controls.score.textContent = (
    App.controls.score.textContent -
    App.info.userSteps * 42 * (1 + +App.info.errorCount)
  ).toFixed();

  App.controls.left.textContent = App.tasks.length;

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

    // проверяем правильный ли выбор сдел пользователь
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
    App.info.userSteps++;
    App.info.errorCount++;
    nextEvent();
    brick.removeEventListener("transitionend", onDropTransitionEnd);
  };

  brick.addEventListener("transitionend", onDropTransitionEnd);
};

const start = function() {
  const form = document.querySelector(".start-menu");
  var formData = new FormData(form);

  for (var [key, value] of formData.entries()) {
    if (key === "level") {
      App.vars.limitErrors = +value;
      if (+value === 0) {
        App.controls.limit.style.bottom = "-100px";
      } else {
        App.controls.limit.style.bottom = App.constants.height * +value + "px";
      }
      // switch (+value) {
      //   case 5:
      //     App.controls.level.textContent = "Пишу тесты";
      //     break;
      //   case 3:
      //     App.controls.level.textContent = "Типизирую";
      //     break;
      //   case 1:
      //     App.controls.level.textContent = "Пользуюсь SVN";
      //     break;
      //   case 0:
      //     App.controls.level.textContent = "Форс-пуш в мастер";
      //     break;
      // }
    }
    if (key === "theme") {
      App.vars.theme = value;
      App.constants.maxSteps = initTasks[App.vars.theme].tasks.length;
      App.tasks = JSON.parse(JSON.stringify(initTasks[App.vars.theme].tasks));
      App.controls.question.textContent = initTasks[App.vars.theme].question;
      App.controls.answersLeft.textContent =
        initTasks[App.vars.theme].answers[0];
      App.controls.answersRight.textContent =
        initTasks[App.vars.theme].answers[1];
    } else if (key === "name") {
      App.user[key] = value;
      App.controls.username.textContent = value;
    } else {
      App.user[key] = value;
    }
  }

  HtmlHelper.hideScores();
  App.gameId = Date.now();
  App.controls.startMenu.classList.add("hidden");
  App.controls.gameScreen.classList.remove("hidden");
  App.controls.counter.classList.remove("hidden");

  var readyCounter = 5;
  var interval = setInterval(() => {
    readyCounter--;
    App.controls.counter.textContent = readyCounter;
    if (readyCounter < 1) {
      App.controls.counter.classList.add("hidden");
      clearInterval(interval);
      run();
    }
  }, 1000);
};

const hideEmail = (email = "noname@email") => {
  return email.split("@")[0] + "@***";
};

const getScoresTable = () => {
  const results = Storage.getScores();
  const rows = Object.values(results)
    .map(({ errorCount, user, userSteps }) => {
      const { email, level, name } = user;
      if (+level === 0) {
        return null;
      }

      let rightAnswers = userSteps - errorCount;
      let score;
      const isWin = errorCount < +level;

      if (+level === 5) {
        if (isWin) {
          score = errorCount === 0 ? rightAnswers + 10 : rightAnswers + 5;
        } else {
          score = rightAnswers - 10;
        }
      }

      if (+level === 3) {
        if (isWin) {
          score = errorCount === 0 ? rightAnswers + 12 : rightAnswers + 7;
        } else {
          score = rightAnswers - 13;
        }
      }

      if (+level === 1) {
        if (isWin) {
          score = errorCount === 0 ? rightAnswers + 14 : rightAnswers + 9;
        } else {
          score = rightAnswers - 15;
        }
      }

      return {
        name,
        email,
        score
      };
    })
    .filter(i => i)
    .sort((a, b) => b.score - a.score)
    .map(({ name, email, score }) => {
      return `<tr>
          <td>${name}</td>
          <td>${hideEmail(email)}</td>
          <td align="right">${score * 42}</td>
        </tr>`;
    });
  document.querySelector(".scores-table").innerHTML =
    "<table><thead><tr><th>Имя</th><th>Эл. почта</th><th>Рейтинг</th></tr></thead><tbody>" +
    rows +
    "</tbody></table>";
};
