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
     * @type {string}
     */
    const ALPHABET = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя_";
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

            this._moveBot = false;
            this._movePlayer = 1;
            this._startGame();

            this._rotateNotEnter = false;

        },

        _createHistory:function()
        {
            this._history = goog.dom.createElement("DIV");
            goog.style.setSize(this._history, new goog.math.Size(document.documentElement.clientWidth / 3 , document.documentElement.clientHeight - 10));
            goog.style.setPosition(this._history, new goog.math.Coordinate(document.documentElement.clientWidth - document.documentElement.clientWidth / 3 - 10 , 0));
            this._history.className = "history";
            this._history.innerHTML = "HISTORY:";
            document.body.appendChild(this._history);
        },

        _transition: function(div)
        {
            document.location.href = div.href;
        },

        _funcTwitter:function()
        {
            var url = document.getElementById('newDiv');
            document.location.href = url.href;
        },

        _startGame:function()
        {
            this._button = goog.dom.createElement("INPUT");
            this._button .style.position = "absolute";
            goog.style.setPosition(this._button, new goog.math.Coordinate(document.documentElement.clientWidth / 2 - 174, document.documentElement.clientHeight / 2 - 66));
            goog.style.setSize(this._button, new goog.math.Size(348, 132));
            this._button.className = "enter";
            this._button.type = "button";
            this._button.style.background = "url(../../../src/images/Start_Button.png) repeat-y #fc0";
            //this._button.onchange = goog.bind(this._create, this);
            document.body.appendChild(this._button);
            this._button.addEventListener("click", goog.bind(this._create, this));

            var newDiv = document.createElement("DIV");
            newDiv.id = 'newDiv';
            goog.style.setPosition(newDiv, new goog.math.Coordinate(14, document.documentElement.clientHeight - 30));
            goog.style.setSize(newDiv, new goog.math.Size(16, 16));
            newDiv.style.position = "absolute";
            newDiv.href = "http://google.com/";
            newDiv.addEventListener('click', goog.bind(this._transition, this, newDiv));
            newDiv.style.background = "url(../../../src/images/facebook.jpg) repeat-y #fc0";


            /*this._icon = goog.dom.createElement(goog.dom.TagName.A);
            this._icon.href = "http://google.com";
            //this._icon.innerText = "url(../../../src/images/facebook.jpg)";
            this._icon.innerHTML = "facebook";
            newDiv.appendChild(this._icon);*/
            document.body.appendChild(newDiv);

            var newDiv2 = document.createElement("DIV");
            newDiv2.id = 'newDiv2';
            goog.style.setPosition(newDiv2, new goog.math.Coordinate(34, document.documentElement.clientHeight - 30));
            goog.style.setSize(newDiv2, new goog.math.Size(16, 16));
            newDiv2.style.position = "absolute";
            newDiv2.href = "";
            newDiv2.addEventListener('click', goog.bind(this._transition, this, newDiv2));
            newDiv2.style.background = "url(../../../src/images/twitter.jpg) repeat #fc0";


            /*this._icon2 = goog.dom.createElement(goog.dom.TagName.A);
            this._icon2.href = "";
            //this._icon.innerText = "url(../../../src/images/facebook.jpg)";
            this._icon2.innerHTML = "twitter";
            newDiv2.appendChild(this._icon2);*/
            document.body.appendChild(newDiv2);

            var newDiv3 = document.createElement("DIV");
            newDiv3.id = 'newDiv2';
            goog.style.setPosition(newDiv3, new goog.math.Coordinate(54, document.documentElement.clientHeight - 30));
            goog.style.setSize(newDiv3, new goog.math.Size(16, 16));
            newDiv3.style.position = "absolute";
            newDiv3.href = "eto-prosto-bitaya-link-ne-obraschaite-vnimaniya";
            newDiv3.addEventListener('click', goog.bind(this._transition, this, newDiv3));
            newDiv3.style.background = "url(../../../src/images/vkontakte.png) repeat #fc0";




            /*this._buttonForInputName = goog.dom.createElement("INPUT");
            this._buttonForInputName.style.position = "absolute";
            goog.style.setPosition(this._buttonForInputName, new goog.math.Coordinate(460, 570));
            goog.style.setSize(this._buttonForInputName, new goog.math.Size(75, 27));
            this._buttonForInputName.className = "enter";
            this._buttonForInputName.value = "Add name";
            this._buttonForInputName.type = "button";
            document.body.appendChild(this._buttonForInputName);*/

            this._alert = document.createElement("DIV");
            this._alert.className = "alert";
            this._alert.innerHTML = "<strong>Правила!</strong> Макс. длина имени - 10 символов. Минимальная - 1 символ." +
                " Имя должно состоять только из русских букв и начинаться с большой буквы.";
            goog.style.setPosition(this._alert, new goog.math.Coordinate(document.documentElement.clientWidth / 6, 0));
            goog.style.setSize(this._alert, new goog.math.Size(document.documentElement.clientWidth / 3, document.documentElement.clientHeight / 8));
            document.body.appendChild(this._alert);

            this._blockForInputName = goog.dom.createElement("INPUT");
            this._blockForInputName.style.position = "absolute";
            goog.style.setPosition(this._blockForInputName, new goog.math.Coordinate(document.documentElement.clientWidth / 6, document.documentElement.clientHeight / 8 + 35));
            goog.style.setSize(this._blockForInputName, new goog.math.Size(document.documentElement.clientWidth / 3 + 25, 25));
            this._blockForInputName.className = "enter";
            this._blockForInputName.type = "text";
            this._blockForInputName.onchange = goog.bind(this._func, this);
            document.body.appendChild(this._blockForInputName);

            /*this._icon3 = goog.dom.createElement(goog.dom.TagName.A);
            this._icon3.href = "kghgjhkljglhkjgklhjklghj";
            //this._icon.innerText = "url(../../../src/images/facebook.jpg)";
            this._icon3.innerHTML = "VK";
            newDiv3.appendChild(this._icon3);*/
            document.body.appendChild(newDiv3);

            //this._icon.param.href = "http://www.loveradio.ru/player/3868.htm";
            //document.body.appendChild(this._icon);

           /* this._alert3 = document.createElement("DIV");
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
            this._blockForWord.style.position = "absolute";
            goog.style.setPosition(this._blockForWord, new goog.math.Coordinate(250, 100));
            goog.style.setSize(this._blockForWord, new goog.math.Size(350, 25));
            this._blockForWord.className = "enter";
            this._blockForWord.type = "text";
            this._blockForWord.value = this._word;
            this._blockForWord.onchange = goog.bind(this._funcForTransferWord, this);
            document.body.appendChild(this._blockForWord);

            this._blockForHint = goog.dom.createElement("INPUT");
            this._blockForHint.style.position = "absolute";
            goog.style.setPosition(this._blockForHint, new goog.math.Coordinate(870, 100));
            goog.style.setSize(this._blockForHint, new goog.math.Size(250, 25));
            this._blockForHint.className = "enter";
            this._blockForHint.type = "text";
            this._blockForHint.value = this._hint;
            this._blockForHint.onchange = goog.bind(this._funcForTransferHint, this);
            document.body.appendChild(this._blockForHint);*/

            this._createRecordTableButton();

        },
        _create:function()
        {


            goog.array.insert(this._players, new tpo.Participant(new goog.math.Coordinate(document.documentElement.clientWidth / 10, document.documentElement.clientHeight / 6), 1, this._blockForInputName.value));
            goog.array.insert(this._players, new tpo.Participant(new goog.math.Coordinate(document.documentElement.clientWidth / 15, document.documentElement.clientHeight / 2.5), 2, "player1"));
            goog.array.insert(this._players, new tpo.Participant(new goog.math.Coordinate(document.documentElement.clientWidth / 10, document.documentElement.clientHeight / 1.6), 3, "player2"));
            //this._func(this._blockForInputName.value);
            //document.body.removeChild(this._buttonForInputName);
            document.body.removeChild(this._blockForInputName);
            document.body.removeChild(this._recordTable);
            document.body.removeChild(this._alert);
            //document.body.removeChild(this._blockForHint);
            document.body.removeChild(this._button);
            this._createHistory();


            /*this._alert2 = document.createElement("DIV");
            this._alert2.className = "alert";
            this._alert2.innerHTML = "Введите имя для <strong>первого</strong> игрока";
            goog.style.setPosition(this._alert2, new goog.math.Coordinate(200, 500));
            goog.style.setSize(this._alert2, new goog.math.Size(300, 25));
            document.body.appendChild(this._alert2);*/



            this._rotatingBar = goog.dom.createElement("INPUT");
            this._rotatingBar.style.position = "absolute";
            goog.style.setPosition(this._rotatingBar, new goog.math.Coordinate(600, 200));
            goog.style.setSize(this._rotatingBar, new goog.math.Size(200, 65));
            this._rotatingBar.className = "enter";
            this._rotatingBar.style.color = "rgb(50, 220, 90)"
            this._rotatingBar.type = "button";
            this._rotatingBar.value = "Крутть барабан";
            this._rotatingBar.style.borderRadius = "2em 5em/4em 6em";
            this._rotatingBar.onclick = goog.bind(this._funcRotateBaraban, this);
            document.body.appendChild(this._rotatingBar);





            this._numberForName = 0;

            this._rules = new tpo.Rules();

            this._pole = new tpo.PoleChudes(this._word, this._hint);



            /*this._score2 = document.createElement("DIV");
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
            document.body.appendChild(this._score3);*/

            const thisPtr = this;
            //const thisPtr = this;

            document.addEventListener("Enter letter", function (e)
            {
                if (thisPtr._moveBot)
                {
                    thisPtr._movingBot();
                }
                else if (!thisPtr._pole._touchLetter)
                {
                    var result = confirm("Хотите назвать слово целиком?");

                    if (result)
                        thisPtr._enterFullWord();
                    else
                        thisPtr._enterWord();
                }
            });
            document.addEventListener("Bonus", function (e) {
                thisPtr._bonusPoints(e.detail);
            });

            document.addEventListener("Score", function (e) {
                thisPtr._reloadScore();
            });

            document.addEventListener("Next Player", function (e) {
                thisPtr._nextPlayer();
            });

            document.addEventListener("Move bot", function (e) {
                thisPtr._funcRotateBaraban();
            });

            document.addEventListener("Touch letter", function (e) {
                thisPtr._touchLetter();
            });

            document.addEventListener("Two boxes", function (e) {
                var message = "Три правильно отгаданные буквы, дают вам право на две шкатулки! Какую выберите, ";
                var res = thisPtr._pole._getRandomArbitary(0, 2);
                if (res <= 1)
                {
                    message += "ПЕРВУЮ?";
                }
                else
                {
                    message += "ВТОРУЮ?";
                }
                var result = confirm(message);
                alert("Вы не отгадали!");
            });

            document.addEventListener("Taped", function (e) {
                thisPtr._removeTouchLetter();
                thisPtr._checkLetterAndHint(e.detail);
            });

            document.addEventListener("Winner", function (e) {
                thisPtr._winnerPlayer();
            });


        },

        _bonusPoints: function(points)
        {
            this._history.innerHTML += "Игрок: " + this._players[this._movePlayer - 1]._name + " заработал бонусные очки в размере " + points ;
        },

        /**
         * @param {string} let
         * @returns {boolean}
         * @private
         */
        _checkLetterInArray: function(letas)
        {
            for (var i = 0; i < this._pole._letters.length; i++)
            {
                if (letas == this._pole._letters[i])
                {
                    return false;
                }
            }
            return true;
        },

        _movingBot: function() {
            if (!this._pole._touchLetter) {
                var res = this._pole._getRandomArbitary(0, 33);
                var quessLetter = this._checkLetterInArray(ALPHABET.charAt(res));
                while (!quessLetter)
                {
                    var res = this._pole._getRandomArbitary(0, 33);
                    var quessLetter = this._checkLetterInArray(ALPHABET.charAt(res));
                }
                this._checkLetterAndHint(ALPHABET.charAt(res));
            }
            else
            {
                var res = this._pole._getRandomArbitary(0, (this._pole._word.length - 1));
                this._pole._tapLetter(res | 0);
            }
        },

        _removeTouchLetter: function()
        {
            document.body.removeChild(this._tapLetterInWord);
        },

        _touchLetter: function()
        {
            this._tapLetterInWord = document.createElement("DIV");
            this._tapLetterInWord.style.position = "absolute";
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
            this._blockForEnterFullWord.style.position = "absolute";
            goog.style.setPosition(this._blockForEnterFullWord, new goog.math.Coordinate(200, 570));
            goog.style.setSize(this._blockForEnterFullWord, new goog.math.Size(250, 25));
            this._blockForEnterFullWord.className = "enter";
            this._blockForEnterFullWord.type = "text";
            //this._blockForEnterLetter.onchange = goog.bind(this._func, this);
            document.body.appendChild(this._blockForEnterFullWord);

            this._buttonForEnterFullWord = goog.dom.createElement("INPUT");
            this._buttonForEnterFullWord.className = "enter";
            goog.style.setPosition(this._buttonForEnterFullWord, new goog.math.Coordinate(460, 570));
            goog.style.setSize(this._buttonForEnterFullWord, new goog.math.Size(75, 27));
            //this._buttonForEnterFullWord.className = "button";
            this._buttonForEnterFullWord.value = "Add letter";
            this._buttonForEnterFullWord.type = "button";
            this._buttonForEnterFullWord.onclick = goog.bind(this._checkFullWord, this, this._blockForEnterFullWord.value);
            document.body.appendChild(this._buttonForEnterFullWord);
        },


        _enterWord: function()
        {
            this._alertEnterWord = document.createElement("DIV");
            this._alertEnterWord.style.position = "absolute";
            this._alertEnterWord.className = "alert";
            this._alertEnterWord.innerHTML = "Введите букву";
            goog.style.setPosition(this._alertEnterWord, new goog.math.Coordinate(200, 500));
            goog.style.setSize(this._alertEnterWord, new goog.math.Size(300, 25));
            document.body.appendChild(this._alertEnterWord);


            this._blockForEnterLetter = goog.dom.createElement("INPUT");
            this._blockForEnterLetter.style.position = "absolute";
            goog.style.setPosition(this._blockForEnterLetter, new goog.math.Coordinate(200, 570));
            goog.style.setSize(this._blockForEnterLetter, new goog.math.Size(250, 25));
            this._blockForEnterLetter.className = "button";
            this._blockForEnterLetter.type = "text";
            //this._blockForEnterLetter.onchange = goog.bind(this._func, this);
            document.body.appendChild(this._blockForEnterLetter);

            this._buttonForEnterLetter = goog.dom.createElement("INPUT");
            this._buttonForEnterLetter.style.position = "absolute";
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
            this._pole._quessLettersPlayered = 0;
            this._movePlayer += 1;
            if (this._movePlayer > 3)
            {
                this._movePlayer = 1;
                this._moveBot = false;
            }
            else
            {
                this._moveBot = true;
                document.dispatchEvent(new Event("Move bot"));
            }
            if (this._movePlayer == 1)
                this._alert.innerHTML = "Ходит <strong>первый</strong> игрок";
            if (this._movePlayer == 2)
                this._alert.innerHTML = "Ходит <strong>второй</strong> игрок";
            if (this._movePlayer == 3)
                this._alert.innerHTML = "Ходит <strong>третий</strong> игрок";
        },

        _checkFullWord:function(word)
        {
            if (word == "")
            {
                word = this._blockForEnterFullWord.value;
            }
            this._rotateNotEnter = false;
            var isOk = false;
            if (word === this._pole._word)
            {
                isOk = true;
                this._history.innerHTML += "Игрок: " + this._players[this._movePlayer - 1]._name + " отгадал cлово целеком и выиграл игру. " +  word;
                for (var i = 0; i < this._pole._word.length; i++)
                {
                    this._pole.reloadLetters(i);
                }
            }

            if (!this._moveBot && !this._pole._touchLetter)
            {
                document.body.removeChild(this._alertEnterFullWord);
                document.body.removeChild(this._blockForEnterFullWord);
                document.body.removeChild(this._buttonForEnterFullWord);
            }

            if (!isOk)
            {
                this._history.innerHTML += "Игрок: " + this._players[this._movePlayer - 1]._name + " не смог отгадать слово целеком. " + word;
                this._nextPlayer();
            }
        },


        _checkLetterAndHint: function(letter)
        {
            this._pole._letters.push(letter);
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
            if (!this._pole._touchLetter)
            {
                this._removeEnterWord();
            }

            if (!findLetter) {
                this._history.innerHTML += "Игрок: " + this._players[this._movePlayer - 1]._name + " ввел букву, которой нет в слове. " + '\n';
                this._nextPlayer();
            }
            else if (this._moveBot)
            {
                document.dispatchEvent(new Event("Move bot"));
            }
        },

        _reloadScore: function()
        {
            this._players[0].setScore(this._pole._player1);
            this._players[1].setScore(this._pole._player2);
            this._players[2].setScore(this._pole._player3);
        },

        _func: function()
        {
            this._players[this._numberForName].setName(this._blockForInputName.value);
            //this._numberForName++;
            /*if (this._numberForName == 3)
            {
                document.body.removeChild(this._blockForInputName);
                //document.body.removeChild(this._alert);
                document.body.removeChild(this._alert2);
                document.body.removeChild(this._buttonForInputName);

                this._alert.className = "alert";
                this._alert.innerHTML = "Ходит <strong>первый</strong> игрок";
                goog.style.setPosition(this._alert, new goog.math.Coordinate(230, 0));
                goog.style.setSize(this._alert, new goog.math.Size(150, 25));


            }
            if (this._numberForName == 1)
                this._alert2.innerHTML = "Введите имя для <strong>второго</strong> игрока";
            if (this._numberForName == 2)
                this._alert2.innerHTML = "Введите имя для <strong>третьего</strong> игрока";*/
            //this._alert2.innerHTML = "Введите имя для <strong>this._numberForName</strong> игрока";
        },

        _removeEnterWord: function()
        {
            if (!this._moveBot)
            {
                document.body.removeChild(this._alertEnterWord);
                document.body.removeChild(this._blockForEnterLetter);
                document.body.removeChild(this._buttonForEnterLetter);
            }
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
            this._recordTable.style.borderRadius = "4px";
            this._recordTable.style.border = "8px solid #ff2f00";
            goog.style.setPosition(this._recordTable, new goog.math.Coordinate(document.documentElement.clientWidth / 2 - 174, document.documentElement.clientHeight / 2 + 70));
            goog.style.setSize(this._recordTable, new goog.math.Size(348, 60));
            //this._recordTable.addEventListener("click", goog.bind(this._func, this));
            document.body.appendChild(this._recordTable);
        }
    });
});