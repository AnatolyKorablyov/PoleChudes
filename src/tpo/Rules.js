goog.provide("tpo.Rules");

goog.require("goog.math");
goog.require("goog.style");

goog.scope(function() {

    /**
     * @constructor
     */
    tpo.Rules = goog.defineClass(null, {
        constructor: function() {

            /**@private {Element}*/
            this._rules = document.createElement("INPUT");
            this._rules.className = "rules";
            this._rules.type = "button";
            this._rules.value = "Rules";
            this._rules.style.padding = "15px";
            this._rules.style.borderRadius = "10px";
            goog.style.setPosition(this._rules, new goog.math.Coordinate(document.documentElement.clientWidth - document.documentElement.clientWidth / 2.4, 0));
            goog.style.setSize(this._rules, new goog.math.Size(document.documentElement.clientWidth / 14, document.documentElement.clientWidth / 20));
            this._rules.addEventListener("click", goog.bind(this._func, this));
            document.body.appendChild(this._rules);


        },


        _func: function()
        {
            document.body.removeChild(this._rules);
            var newRules = document.createElement("DIV");
            newRules.className = "rules";
            goog.style.setPosition(newRules, new goog.math.Coordinate(document.documentElement.clientWidth - document.documentElement.clientWidth / 2.4, 0));
            goog.style.setSize(newRules, new goog.math.Size(document.documentElement.clientWidth / 7, document.documentElement.clientHeight - document.documentElement.clientHeight / 6));
            newRules.innerHTML = "<strong>                 Правила                 </strong>" +
                "1. Если выпадает сектор <strong>Б</strong> на барабане (банкрот), игрок заканчивает игру " +
                "2. Если выпадает сектор <strong>-100</strong> на барабане, то у игрока снимается 100 очков и ход переходит к следующему игроку " +
                "3. Если выпадает сектор <strong>0</strong> на барабане то ход переходит к следующему игроку " +
                "4. Если выпадает сектор <strong>+</strong> на барабане, то он позволяет открыть игроку любую не открытую букву " +
                "5. Если выпадает сектор <strong>x2</strong> на барабане, то за правильный ответ очки игрока увеличиваются вдвое " +
                "6. Если выпадает сектор <strong>приз</strong> на барабане, то игроку дается бонусом 10000 очков " +
                "7. Если выпадает сектор <strong>?</strong>, то игроку выходит сообщение что он выйграл автомобиль " +
                "8. За каждую угаданную букву игроку дается определенное количество баллов, которые вапали на барабане " +
                "9. За каждые три подряд угаданные буквы игроку дается право на две шкатулки: если он угадает, какая ихз них правильная, то он получит 5000 очков " +
                "10. Если игрок угадывает слово полностью то он автоматически выигрывает игру " +
                "11. После окончания игры результаты заносятся в таблицу победителей"
            document.body.appendChild(newRules);
        }
    });
});