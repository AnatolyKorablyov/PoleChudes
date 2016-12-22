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
            goog.style.setPosition(this._rules, new goog.math.Coordinate(700, 100));
            goog.style.setSize(this._rules, new goog.math.Size(75, 45));
            this._rules.addEventListener("click", goog.bind(this._func, this));
            document.body.appendChild(this._rules);


        },


        _func: function()
        {
            document.body.removeChild(this._rules);
            var newRules = document.createElement("DIV");
            newRules.className = "rules";
            goog.style.setPosition(newRules, new goog.math.Coordinate(700, 100));
            goog.style.setSize(newRules, new goog.math.Size(250, 100));
            newRules.innerHTML = "<strong>                 Правила                 </strong>" +
                "1. Барабан крутиться по очереди " +
                "2. Подсказки запрещены " +
                "3. Участники поочереди пытаются отгадать загаданное слово " +
                "4. Выйгравший участник заносится в таблицу победителей";
            document.body.appendChild(newRules);
        }
    });
});