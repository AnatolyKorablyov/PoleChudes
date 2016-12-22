goog.provide("tpo.Game");

goog.require("goog.math");
goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.array");
goog.require("tpo.Participant");
goog.require("tpo.Rules");

goog.require("tpo.PoleChudes");

goog.scope(function() {

    /**
     * @constructor
     */
    tpo.Game = goog.defineClass(null, {
        constructor: function() {

            /**@private {Element}*/
            this._alert = null;

            /**@private {Element}*/
            this._alert2 = null;

            this._word = "Кошка";

            this._hint = "Домашнее животное";

            /**@private {Element}*/
            this._blockForInputName = null;

            /**@private {Element}*/
            this._buttonForInputName = null;

            /**@private {Array}*/
            this._players = [];

            this._movePlayer = 1;
            this._startGame();

            this._rotateNotEnter = false;

        },

        _createHistory:function()
        {
            this._history = goog.dom.createElement("DIV");
            goog.style.setSize(this._history, new goog.math.Size(500, 650));
            goog.style.setPosition(this._history, new goog.math.Coordinate(855, 0));
            this._history.className = "history";
            this._history.innerHTML = "HISTORY:";
            document.body.appendChild(this._history);
        },

        _startGame:function()
        {
            this._button = goog.dom.createElement("INPUT");
            goog.style.setPosition(this._button, new goog.math.Coordinate(500, 270));
            goog.style.setSize(this._button, new goog.math.Size(1052, 400));
            this._button.className = "button";
            this._button.type = "button";
            this._button.style.background = "url(../../../src/images/Start_Button.png) repeat-y #fc0";
            //this._button.onchange = goog.bind(this._create, this);
            document.body.appendChild(this._button);
            this._button.addEventListener("click", goog.bind(this._create, this));

            var newDiv = document.createElement("DIV");
            newDiv.id = 'newDiv';
            goog.style.setPosition(newDiv, new goog.math.Coordinate(0, 0));
            goog.style.setSize(newDiv, new goog.math.Size(30, 30));
            newDiv.style.background = "url(../../../src/images/facebook.jpg) repeat-y #fc0";


            this._icon = goog.dom.createElement(goog.dom.TagName.A);
            this._icon.href = "http://google.com";
            //this._icon.innerText = "url(../../../src/images/facebook.jpg)";
            this._icon.innerHTML = "facebook";
            newDiv.appendChild(this._icon);
            document.body.appendChild(newDiv);

            var newDiv2 = document.createElement("DIV");
            newDiv2.id = 'newDiv2';
            goog.style.setPosition(newDiv2, new goog.math.Coordinate(0, 30));
            goog.style.setSize(newDiv2, new goog.math.Size(45, 45));
            newDiv2.style.background = "url(../../../src/images/twitter.jpg) repeat #fc0";


            this._icon2 = goog.dom.createElement(goog.dom.TagName.A);
            this._icon2.href = "";
            //this._icon.innerText = "url(../../../src/images/facebook.jpg)";
            this._icon2.innerHTML = "twitter";
            newDiv2.appendChild(this._icon2);
            document.body.appendChild(newDiv2);

            var newDiv3 = document.createElement("DIV");
            newDiv3.id = 'newDiv2';
            goog.style.setPosition(newDiv3, new goog.math.Coordinate(0, 30));
            goog.style.setSize(newDiv3, new goog.math.Size(30, 30));
            newDiv3.style.background = "url(../../../src/images/vkontakte.png) repeat #fc0";


            this._icon3 = goog.dom.createElement(goog.dom.TagName.A);
            this._icon3.href = "kghgjhkljglhkjgklhjklghj";
            //this._icon.innerText = "url(../../../src/images/facebook.jpg)";
            this._icon3.innerHTML = "VKONTAKTE";
            newDiv3.appendChild(this._icon3);
            document.body.appendChild(newDiv3);

            //this._icon.param.href = "http://www.loveradio.ru/player/3868.htm";
            //document.body.appendChild(this._icon);

            this._alert3 = document.createElement("DIV");
            this._alert3.className = "alert";
            this._alert3.innerHTML = "<strong>Пожалуйста, введите слово для отгадывания. </strong> Макс. длина слова - 15 символов. Минимальная - 3 символ." +
                " Слово должно состоять только из русских букв.";
            goog.style.setPosition(this._alert3, new goog.math.Coordinate(230, 0));
            goog.style.setSize(this._alert3, new goog.math.Size(500, 60));
            document.body.appendChild(this._alert3);

            this._alert4 = document.createElement("DIV");
            this._alert4.className = "alert";
            this._alert4.innerHTML = "<strong>Пожалуйста, введите подсказку для вашего слова. </strong> Макс. длина подсказки - 300 символов. Минимальная - 30 символ." +
                " Подсказка должна состоять только из русских букв.";
            goog.style.setPosition(this._alert4, new goog.math.Coordinate(770, 0));
            goog.style.setSize(this._alert4, new goog.math.Size(500, 60));
            document.body.appendChild(this._alert4);

            this._blockForWord = goog.dom.createElement("INPUT");
            goog.style.setPosition(this._blockForWord, new goog.math.Coordinate(250, 100));
            goog.style.setSize(this._blockForWord, new goog.math.Size(350, 25));
            this._blockForWord.className = "button";
            this._blockForWord.type = "text";
            this._blockForWord.value = this._word;
            this._blockForWord.onchange = goog.bind(this._funcForTransferWord, this);
            document.body.appendChild(this._blockForWord);

            this._blockForHint = goog.dom.createElement("INPUT");
            goog.style.setPosition(this._blockForHint, new goog.math.Coordinate(870, 100));
            goog.style.setSize(this._blockForHint, new goog.math.Size(250, 25));
            this._blockForHint.className = "button";
            this._blockForHint.type = "text";
            this._blockForHint.value = this._hint;
            this._blockForHint.onchange = goog.bind(this._funcForTransferHint, this);
            document.body.appendChild(this._blockForHint);

            this._createRecordTableButton();

        },
        _create:function()
        {
            document.body.removeChild(this._alert4);
            document.body.removeChild(this._alert3);
            document.body.removeChild(this._recordTable);
            document.body.removeChild(this._blockForWord);
            document.body.removeChild(this._blockForHint);

            document.body.style.background = "rgb(240, 40, 40)";
            this._alert = document.createElement("DIV");
            this._alert.className = "alert";
            this._alert.innerHTML = "<strong>Правила!</strong> Макс. длина имени - 10 символов. Минимальная - 1 символ." +
                " Имя должно состоять только из русских букв и начинаться с большой буквы.";
            goog.style.setPosition(this._alert, new goog.math.Coordinate(230, 0));
            goog.style.setSize(this._alert, new goog.math.Size(500, 60));
            document.body.appendChild(this._alert);

            this._alert2 = document.createElement("DIV");
            this._alert2.className = "alert";
            this._alert2.innerHTML = "Введите имя для <strong>первого</strong> игрока";
            goog.style.setPosition(this._alert2, new goog.math.Coordinate(200, 500));
            goog.style.setSize(this._alert2, new goog.math.Size(300, 25));
            document.body.appendChild(this._alert2);


            this._blockForInputName = goog.dom.createElement("INPUT");
            goog.style.setPosition(this._blockForInputName, new goog.math.Coordinate(200, 570));
            goog.style.setSize(this._blockForInputName, new goog.math.Size(250, 25));
            this._blockForInputName.className = "button";
            this._blockForInputName.type = "text";
            this._blockForInputName.onchange = goog.bind(this._func, this);
            document.body.appendChild(this._blockForInputName);

            this._buttonForInputName = goog.dom.createElement("INPUT");
            goog.style.setPosition(this._buttonForInputName, new goog.math.Coordinate(460, 570));
            goog.style.setSize(this._buttonForInputName, new goog.math.Size(75, 27));
            this._buttonForInputName.className = "button";
            this._buttonForInputName.value = "Add name";
            this._buttonForInputName.type = "button";
            document.body.appendChild(this._buttonForInputName);



            goog.array.insert(this._players, new tpo.Participant(new goog.math.Coordinate(100, 100), 1));
            goog.array.insert(this._players, new tpo.Participant(new goog.math.Coordinate(75, 250), 2));
            goog.array.insert(this._players, new tpo.Participant(new goog.math.Coordinate(100, 400), 3));


            this._numberForName = 0;

            this._rules = new tpo.Rules();

            this._pole = new tpo.PoleChudes(this._word, this._hint);

            this._score1 = document.createElement("DIV");
            this._score1.className = "alert";
            this._score1.innerHTML = 0;
            goog.style.setPosition(this._score1, new goog.math.Coordinate(35, 110));
            goog.style.setSize(this._score1, new goog.math.Size(30, 10));
            document.body.appendChild(this._score1);

            this._score2 = document.createElement("DIV");
            this._score2.className = "alert";
            this._score2.innerHTML = 0;
            goog.style.setPosition(this._score2, new goog.math.Coordinate(10, 260));
            goog.style.setSize(this._score2, new goog.math.Size(30, 10));
            document.body.appendChild(this._score2);

            this._score3 = document.createElement("DIV");
            this._score3.className = "alert";
            this._score3.innerHTML = 0;
            goog.style.setPosition(this._score3, new goog.math.Coordinate(35, 420));
            goog.style.setSize(this._score3, new goog.math.Size(30, 10));
            document.body.appendChild(this._score3);

            const thisPtr = this;

            document.addEventListener("Enter letter", function (e) {

                if (!thisPtr._pole._touchLetter)
                {
                    var result = confirm("Хотите назвать слово целеком?");

                    if (result)
                        thisPtr._enterFullWord();
                    else
                        thisPtr._enterWord();
                }
            });
            document.addEventListener("Score", function (e) {
                thisPtr._reloadScore();
            });

            document.addEventListener("Next Player", function (e) {
                thisPtr._nextPlayer();
            });

            document.addEventListener("Touch letter", function (e) {
                thisPtr._touchLetter();
            });

            document.addEventListener("Taped", function (e) {
                thisPtr._removeTouchLetter();
                thisPtr._checkLetterAndHint(e.detail);
            });

            document.addEventListener("Winner", function (e) {
                thisPtr._winnerPlayer();
            });

            this._createHistory();
        },

        _removeTouchLetter: function()
        {
            document.body.removeChild(this._tapLetterInWord);
        },

        _touchLetter: function()
        {
            this._tapLetterInWord = document.createElement("DIV");
            this._tapLetterInWord.className = "alert";
            this._tapLetterInWord.innerHTML = "<strong>НАЖМИ НА ЛЮБУЮ БУКВУ В СЛОВЕ </strong>";
            goog.style.setPosition(this._tapLetterInWord, new goog.math.Coordinate(230, 0));
            goog.style.setSize(this._tapLetterInWord, new goog.math.Size(500, 60));
            document.body.appendChild(this._tapLetterInWord);
        },

        _winnerPlayer: function()
        {
            var points = 0;
            switch (this._movePlayer) {
                case 1:
                    points = this._pole._player1;
                    break;
                case 2:
                    points = this._pole._player2;
                    break;
                case 3:
                    points = this._pole._player3;
                    break;
            }
            this._winner = document.createElement("DIV");
            this._winner.className = "alert";
            this._winner.innerHTML = "<strong>ВЫИГРАЛ </strong> this._players[this._movePlayer - 1]._name <strong> Набрано очков </strong>" +
                points + "<strong>Вы были занесены в таблицу победителей</strong>";
            goog.style.setPosition(this._winner, new goog.math.Coordinate(230, 0));
            goog.style.setSize(this._winner, new goog.math.Size(500, 60));
            document.body.appendChild(this._winner);

            document.body.removeChild(this._rotatingBar);
        },

        _enterFullWord:function()
        {
            this._alertEnterFullWord = document.createElement("DIV");
            this._alertEnterFullWord.className = "alert";
            this._alertEnterFullWord.innerHTML = "Введите слово целеком";
            goog.style.setPosition(this._alertEnterFullWord, new goog.math.Coordinate(200, 500));
            goog.style.setSize(this._alertEnterFullWord, new goog.math.Size(300, 25));
            document.body.appendChild(this._alertEnterFullWord);


            this._blockForEnterFullWord = goog.dom.createElement("INPUT");
            goog.style.setPosition(this._blockForEnterFullWord, new goog.math.Coordinate(200, 570));
            goog.style.setSize(this._blockForEnterFullWord, new goog.math.Size(250, 25));
            this._blockForEnterFullWord.className = "button";
            this._blockForEnterFullWord.type = "text";
            //this._blockForEnterLetter.onchange = goog.bind(this._func, this);
            document.body.appendChild(this._blockForEnterFullWord);

            this._buttonForEnterFullWord = goog.dom.createElement("INPUT");
            goog.style.setPosition(this._buttonForEnterFullWord, new goog.math.Coordinate(460, 570));
            goog.style.setSize(this._buttonForEnterFullWord, new goog.math.Size(75, 27));
            this._buttonForEnterFullWord.className = "button";
            this._buttonForEnterFullWord.value = "Add letter";
            this._buttonForEnterFullWord.type = "button";
            this._buttonForEnterFullWord.onclick = goog.bind(this._checkFullWord, this, this._blockForEnterFullWord.value);
            document.body.appendChild(this._buttonForEnterFullWord);
        },


        _enterWord: function()
        {
            this._alertEnterWord = document.createElement("DIV");
            this._alertEnterWord.className = "alert";
            this._alertEnterWord.innerHTML = "Введите букву";
            goog.style.setPosition(this._alertEnterWord, new goog.math.Coordinate(200, 500));
            goog.style.setSize(this._alertEnterWord, new goog.math.Size(300, 25));
            document.body.appendChild(this._alertEnterWord);


            this._blockForEnterLetter = goog.dom.createElement("INPUT");
            goog.style.setPosition(this._blockForEnterLetter, new goog.math.Coordinate(200, 570));
            goog.style.setSize(this._blockForEnterLetter, new goog.math.Size(250, 25));
            this._blockForEnterLetter.className = "button";
            this._blockForEnterLetter.type = "text";
            //this._blockForEnterLetter.onchange = goog.bind(this._func, this);
            document.body.appendChild(this._blockForEnterLetter);

            this._buttonForEnterLetter = goog.dom.createElement("INPUT");
            goog.style.setPosition(this._buttonForEnterLetter, new goog.math.Coordinate(460, 570));
            goog.style.setSize(this._buttonForEnterLetter, new goog.math.Size(75, 27));
            this._buttonForEnterLetter.className = "button";
            this._buttonForEnterLetter.value = "Add letter";
            this._buttonForEnterLetter.type = "button";
            this._buttonForEnterLetter.onclick = goog.bind(this._checkLetterAndHint, this, this._blockForEnterLetter.value);
            document.body.appendChild(this._buttonForEnterLetter);
        },

        _nextPlayer: function()
        {
            this._movePlayer += 1;
            if (this._movePlayer > 3)
            {
                this._movePlayer = 1;
            }
        },

        _checkFullWord:function(word)
        {
            if (word == "")
            {
                word = this._blockForEnterFullWord.value;
            }
            this._rotateNotEnter = false;
            var isOk = false;
            console.log("word = " + word);
            console.log("this._pole._word = " + this._pole._word);
            if (word === this._pole._word)
            {
                isOk = true;
                this._history.innerHTML += "Игрок: " + this._players[this._movePlayer - 1]._name + " отгадал cлово целеком и выиграл игру. " +  word;
                for (var i = 0; i < this._pole._word.length; i++)
                {
                    this._pole.reloadLetters(i);
                }
            }

            document.body.removeChild(this._alertEnterFullWord);
            document.body.removeChild(this._blockForEnterFullWord);
            document.body.removeChild(this._buttonForEnterFullWord);
            if (!isOk)
            {
                this._history.innerHTML += "Игрок: " + this._players[this._movePlayer - 1]._name + " не смог отгадать слово целеком. " + word;
                this._nextPlayer();
            }
        },


        _checkLetterAndHint: function(letter)
        {
            if (letter == "")
            {
                letter = this._blockForEnterLetter.value;
            }
            this._rotateNotEnter = false;
            var findLetter = false;
            for (var i = 0; i < this._pole._word.length; i++)
            {
                if (this._pole._word.charAt(i) == letter)
                {
                    this._history.innerHTML += "Игрок: " + this._players[this._movePlayer - 1]._name + " отгадал букву " + letter + ". ";
                    this._pole.reloadLetters(i);
                    findLetter = true;
                }
            }

            document.body.removeChild(this._alertEnterWord);
            document.body.removeChild(this._blockForEnterLetter);
            document.body.removeChild(this._buttonForEnterLetter);

            if (!findLetter)
            {
                this._history.innerHTML += "Игрок: " + this._players[this._movePlayer - 1]._name + " ввел букву, которой нет в слове. ";
               this._nextPlayer();
            }
        },

        _reloadScore: function()
        {
            this._score1.innerHTML = this._pole._player1;
            this._score2.innerHTML = this._pole._player2;
            this._score3.innerHTML = this._pole._player3;
        },

        _func: function()
        {
            this._players[this._numberForName].setName(this._blockForInputName.value);
            this._numberForName++;
            if (this._numberForName == 3)
            {
                document.body.removeChild(this._blockForInputName);
                //document.body.removeChild(this._alert);
                document.body.removeChild(this._alert2);
                document.body.removeChild(this._buttonForInputName);

                this._alert.className = "alert";
                this._alert.innerHTML = "Ходит <strong>первый</strong> игрок";
                goog.style.setPosition(this._alert, new goog.math.Coordinate(230, 0));
                goog.style.setSize(this._alert, new goog.math.Size(150, 25));

                this._rotatingBar = goog.dom.createElement("INPUT");
                goog.style.setPosition(this._rotatingBar, new goog.math.Coordinate(10, 100));
                goog.style.setSize(this._rotatingBar, new goog.math.Size(220, 25));
                this._rotatingBar.className = "button";
                this._rotatingBar.type = "button";
                this._rotatingBar.value = "Крутить";
                this._rotatingBar.onclick = goog.bind(this._funcRotateBaraban, this);
                document.body.appendChild(this._rotatingBar);
            }
            if (this._numberForName == 1)
                this._alert2.innerHTML = "Введите имя для <strong>второго</strong> игрока";
            if (this._numberForName == 2)
                this._alert2.innerHTML = "Введите имя для <strong>третьего</strong> игрока";
            //this._alert2.innerHTML = "Введите имя для <strong>this._numberForName</strong> игрока";
        },

        _removeEnterWord: function()
        {
            document.body.removeChild(this._alertEnterWord);
            document.body.removeChild(this._blockForEnterLetter);
            document.body.removeChild(this._buttonForEnterLetter);
        },

        _funcRotateBaraban: function()
        {
            if (this._rotateNotEnter)
            {
                this._removeEnterWord();
            }
            this._rotateNotEnter = true;
            this._pole.rotateBaraban(this._movePlayer);
        },

        _funcReloadBaraban: function()
        {

        },

        _funcForTransferWord: function()
        {
            this._word = this._blockForWord.value;
        },

        _funcForTransferHint: function()
        {
            this._hint = this._blockForHint.value;
        },

        _createRecordTableButton:function()
        {
            this._recordTable = document.createElement("INPUT");
            this._recordTable.className = "rules";
            this._recordTable.type = "button";
            this._recordTable.value = "Record Table";
            this._recordTable.style.padding = "15px";
            this._recordTable.style.borderRadius = "10px";
            this._recordTable.style.border = "8px solid #fff555";
            goog.style.setPosition(this._recordTable, new goog.math.Coordinate(100, 500));
            goog.style.setSize(this._recordTable, new goog.math.Size(150, 60));
            //this._recordTable.addEventListener("click", goog.bind(this._func, this));
            document.body.appendChild(this._recordTable);
        }
    });
});