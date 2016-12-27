goog.provide("tpo.PoleChudes");

goog.require("goog.math");
goog.require("goog.dom");
goog.require("goog.style");

goog.scope(function() {

    /**
     * @constructor
     */
    tpo.PoleChudes = goog.defineClass(null, {
        constructor: function (word, hint) {
            this.createBaraban();
            this.createArrow();
            this.createLeader();

            this._word = word;

            this._bonusPoints = 0;

            this._words = ["вратарь", "фуникулер", "абсент", "воротник"];
            this._questions = ["Так в старину называли сторожа городских ворот", "Железная дорога с канатной тягой, устраиваемая на крутых подьемах", "Анисовая настойка или ликер", "Что мексиканцы изготовляли из волокнистой древесины кактусов"];

            var res = this._getRandomArbitary(0, 3) | 0;
            this._word = this._words[res];
            this._question = this._questions[res];

            this.createWord(this._word);

            /**
             * @type {number}
             * @private
             */
            this._degrees = 0;
            /**
             * @type {number}
             * @private
             */
            this._speed = 3;
            const thisPtr = this;

            this._hint = hint;

            /**
             * @type {number}
             * @private
             */
            this._player1 = 0;
            /**
             * @type {number}
             * @private
             */
            this._player2 = 0;
            /**
             * @type {number}
             * @private
             */
            this._player3 = 0;

            this._quessLettersPlayered = 0;
            this._progress = 0;
            this._touchLetter = false;

            this._movingBaraban = false;

            this._playerPoints = 0;
            this._guessedLetters = this._word.length;

            var audio = new Audio(); // Создаём новый элемент Audio
            audio.src = '../../../src/music/background.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
            audio.repeat = true;

            this._letters = [];

            document.onkeydown = function checkKeycode(event)
            {
                if (event.keyCode == 80 && thisPtr._movingBaraban)
                {
                    document.dispatchEvent(new Event("Rotated"));
                }
            };
            this._displayHint();

        },

        _displayHint:function()
        {
            this._alert = document.createElement("DIV");
            this._alert.className = "alert";
            this._alert.innerHTML = "<strong>Подскзка!</strong>" + " " + this._question;
            goog.style.setPosition(this._alert, new goog.math.Coordinate(document.documentElement.clientWidth / 6, 0));
            goog.style.setSize(this._alert, new goog.math.Size(document.documentElement.clientWidth / 3, document.documentElement.clientHeight / 10));
            document.body.appendChild(this._alert);
        },

        createBaraban: function()
        {
            this._baraban = new Image(300, 300);
            this._baraban.src = '../../../src/images/baraban.png';
            this._baraban.style.position = "absolute";
            goog.style.setPosition(this._baraban, new goog.math.Coordinate(document.documentElement.clientWidth / 5, document.documentElement.clientHeight / 5));
            goog.style.setSize(this._baraban, new goog.math.Size(document.documentElement.clientWidth / 4.5, document.documentElement.clientWidth / 4.5));
            //this._baraban.style.left = ;
           // this._baraban.style.top = document.documentElement.clientHeight / 6;
            this._baraban.style.WebkitTransform = "rotate(" + this._degrees + "deg)";
            document.body.appendChild(this._baraban);
        },
        createArrow: function()
        {
            this._arrow = new Image(50, 50);
            this._arrow.src = '../../../src/images/up.png';
            goog.style.setPosition(this._arrow, new goog.math.Coordinate(document.documentElement.clientWidth / 3.45, document.documentElement.clientHeight / 1.5));
            this._arrow.style.position = "absolute";
            //this._arrow.style.left = '375px';
            //this._arrow.style.top = '450px';
            document.body.appendChild(this._arrow);
        },
        createLeader: function()
        {
            this._leader = new Image(200, 200);
            this._leader.src = '../../../src/images/leader.png';
            this._leader.style.position = "absolute";
            this._leader.style.left = '550px';
            this._leader.style.top = '350px';
            document.body.appendChild(this._leader);
        },

        /**
         * @param {number} min
         * @param {number} max
         * @returns {number}
         * @private
         */
        _getRandomArbitary: function(min, max)
        {
            return Math.random() * (max - min) + min;
        },

        _tapLetter: function(num)
        {
            if (this._touchLetter)
            {
                this.reloadLetters(num);
                this._touchLetter = false;
                document.dispatchEvent(new CustomEvent("Taped", { 'detail': this._word.charAt(num) }));
            }
        },
        /**
         * @param {string} word
         **/
        createWord: function(word)
        {
            this._wordOnMonitor = document.createElement("div");
            goog.style.setPosition(this._wordOnMonitor, new goog.math.Coordinate(600, 300));

            for (var i = 0; i < word.length; i++)
            {
                var letter = document.createElement("div");
                letter.className = "letter";
                letter.innerHTML = "<strong>" + "_" + "</strong>";
                letter.onclick = goog.bind(this._tapLetter, this, i);
                goog.style.setPosition(letter, new goog.math.Coordinate(600 + i*40, 300));

                this._wordOnMonitor.appendChild(letter);
            }
            document.body.appendChild(this._wordOnMonitor);
        },

        reloadLetters: function(num)
        {

            if (this._wordOnMonitor.childNodes[num].innerHTML == "<strong>" + "_" + "</strong>")
            {
                this._quessLettersPlayered += 1;
                this._guessedLetters -= 1;
                this._wordOnMonitor.childNodes[num].innerHTML = "<strong>" + this._word.charAt(num) + "</strong>";
            }

            if (this._movingPlayer == 1)
            {
                this._player1 = this._playerPoints;
            }
            else if (this._movingPlayer == 2)
            {
                this._player2 = this._playerPoints;
            }
            else if (this._movingPlayer == 3)
            {
                this._player3 = '[]';
            }
            document.dispatchEvent(new Event("Score"));

            if (this._quessLettersPlayered == 3)
            {
                this._quessLettersPlayered = 0;
                document.dispatchEvent(new Event("Two boxes"));
            }
            if (this._guessedLetters == 0)
            {
                document.dispatchEvent(new Event("Winner"));
            }


        },

        /**
         * @private
         */
        _rotateBarabanPhysics: function()
        {
            this._degrees += this._speed;
            this._speed -= 1;
            this._baraban.style.WebkitTransform = "rotate(" + this._degrees + "deg)";
            if (this._speed <= 0)
            {
                document.dispatchEvent(new Event("Rotated"));
                this._movingBaraban = false;
            }

        },

        /**
         * @param points
         * @param {boolean} bot
         * @returns {*}
         * @private
         */
        _choosenPoints: function(points, bot)
        {
            var valueBaraban = (this._degrees - (this._degrees / 360 | 0) * 360) / 22.5 | 0;
            switch (valueBaraban) {
                case 0:
                    points += 250;
                    break;
                case 1:
                    points += 350;
                    break;
                case 2:
                    points += 500;
                    break;
                case 3:
                    points *= 2;
                    break;
                case 4:
                    points += 150;
                    break;
                case 5:
                    this._bonusPoints = 10000;
                    break;
                case 6:
                    if (!bot)
                    {
                        for ( var i = 0; i < 10; i++)
                        {
                            alert("АААВТОМОБИЛЬ!");
                        }
                    }
                    else
                    {
                        this._bonusPoints = 1000;
                    }
                    break;
                case 7:
                    points += 300;
                    break;
                case 8:
                    points -= 100;
                    break;
                case 9:
                    points += 100;
                    break;
                case 10:
                    points += 200;
                    break;
                case 11:
                    document.dispatchEvent(new Event("Next Player"));
                    points += 0;
                    break;
                case 12:
                    points += 300;
                    break;
                case 13:
                    if (!bot)
                    {
                        alert("ВЫ БАНКРОТ!");
                    }
                    document.dispatchEvent(new Event("Next Player"));
                    break;
                case 14:
                    points += 50;
                    break;
                case 15:
                    document.dispatchEvent(new Event("Touch letter"));
                    this._touchLetter = true;
                    break;
            }
            return points;
        },

        rotateBaraban: function(player)
        {


            this._movingBaraban = true;
            this._movingPlayer = player;
            const thisPtr = this;
            var eventTrue = false;
            document.addEventListener("Rotated", function (e)
            {
                if (!eventTrue)
                {
                    if (player == 1)
                    {
                        thisPtr._playerPoints = thisPtr._choosenPoints(thisPtr._player1, false);
                        thisPtr._player1 += thisPtr._bonusPoints;

                    }
                    else if (player == 2)
                    {
                        thisPtr._playerPoints = thisPtr._choosenPoints(thisPtr._player2, true) / 2 | 0;
                        thisPtr._player2 += thisPtr._bonusPoints / 2 | 0;
                    }
                    else if (player == 3)
                    {
                        thisPtr._playerPoints = thisPtr._choosenPoints(thisPtr._player3, true);
                        thisPtr._player3 += thisPtr._bonusPoints;
                    }
                    if (thisPtr._bonusPoints != 0)
                    {
                        document.dispatchEvent(new CustomEvent("Bonus", { 'detail': thisPtr._bonusPoints }));
                    }
                    thisPtr._bonusPoints = 0;
                    document.dispatchEvent(new Event("Score"));
                    clearInterval(intervalID);
                    eventTrue = true;
                    document.dispatchEvent(new Event("Enter letter"));
                }
            });

            this._speed = this._getRandomArbitary(10, 200);

            const intervalID = setInterval(function()
            {
                thisPtr._rotateBarabanPhysics();
            }, 1000 / 30);

            /*if (this._progress == 20)
            {
                this._baraban.style.height = "400px";
            }
            this._progress++;
            */
        }
    });
});