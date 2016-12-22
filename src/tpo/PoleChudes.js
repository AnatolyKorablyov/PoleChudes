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

            this._progress = 0;
            this._touchLetter = false;

            this._movingBaraban = false;

            this._playerPoints = 0;
            this._guessedLetters = this._word.length;

            var audio = new Audio(); // Создаём новый элемент Audio
            audio.src = '../../../src/music/background.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
            audio.repeat = true;


            document.onkeydown = function checkKeycode(event)
            {
                if (event.keyCode == 80 && thisPtr._movingBaraban)
                {
                    document.dispatchEvent(new Event("Rotated"));
                }
            };
        },
        createBaraban: function()
        {
            this._baraban = new Image(300, 300);
            this._baraban.src = '../../../src/images/baraban.png';
            this._baraban.style.position = "absolute";
            this._baraban.style.left = '250px';
            this._baraban.style.top = '150px';
            this._baraban.style.WebkitTransform = "rotate(" + this._degrees + "deg)";
            document.body.appendChild(this._baraban);
        },
        createArrow: function()
        {
            this._arrow = new Image(50, 50);
            this._arrow.src = '../../../src/images/up.png';
            this._arrow.style.position = "absolute";
            this._arrow.style.left = '375px';
            this._arrow.style.top = '450px';
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

            for (i = 0; i < word.length; i++)
            {
                letter = document.createElement("div");
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
            this._leader.style.WebkitTransform = "rotate(" + this._degrees + "deg)";
            this._baraban.style.WebkitTransform = "rotate(" + this._degrees + "deg)";
            if (this._speed <= 0)
            {
                document.dispatchEvent(new Event("Rotated"));
                this._movingBaraban = false;
            }

        },

        _choosenPoints: function(points)
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
                    points += 10000;
                    break;
                case 6:
                    for ( i = 0; i < 10; i++)
                    {
                        alert("АААВТОМОБИЛЬ!");
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
                    alert("ВЫ БАНКРОТ!");
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
                thisPtr._leader.style.WebkitTransform = "rotate(" + 0 + "deg)";
                if (!eventTrue)
                {
                    if (player == 1)
                    {
                        thisPtr._playerPoints = thisPtr._choosenPoints(thisPtr._player1);
                    }
                    else if (player == 2)
                    {
                        thisPtr._playerPoints = thisPtr._choosenPoints(thisPtr._player2) / 2 | 0;
                    }
                    else if (player == 3)
                    {
                        thisPtr._playerPoints = thisPtr._choosenPoints(thisPtr._player3);
                    }
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

            if (this._progress == 20)
            {
                this._baraban.style.height = "400px";
            }
            this._progress++;
        }
    });
});