goog.provide("tpo.Participant");

goog.require("goog.math");
goog.require("goog.dom");
goog.require("goog.style");

goog.scope(function() {

    /**
     * @constructor
     */
    tpo.Participant = goog.defineClass(null, {
        constructor: function(position, number) {




            /**@private {goog.math.Coordinate}*/
            this._position = position;

            /**@private {number}*/
            this._number = number;

            //Баг! Имя не отображается на на странице
            this._name = null;
            this._block = goog.dom.createElement(goog.dom.TagName.DIV);

            this._createFrame();
            this._createButton();

            this._isSelected = false;



            this._alert2 = document.createElement("DIV");
            this._alert2.className = "hate";
            this._alert2.innerHTML = "<strong>MTV</strong>";
            goog.style.setPosition(this._alert2, new goog.math.Coordinate(this._position.x + 5, this._position.y - 25));
            document.body.appendChild(this._alert2);

            /*this._alert = document.createElement("DIV");
            this._alert.className = "hate";
            this._alert.innerHTML = "<strong>MTV</strong>";
            goog.style.setPosition(this._alert, new goog.math.Coordinate(this._position.x + 5, this._position.y - 25));
            document.body.appendChild(this._alert);*/
        },

        _createFrame: function()
        {

            this._block.id = "player" + this._number;
            goog.style.setPosition(this._block, this._position);
            goog.style.setSize(this._block, new goog.math.Size(76, 76));
            this._block.style.backgroundColor = "#a21f54";
            this._block.style.position = "absolute";
            //block.style.border;
            document.body.appendChild(this._block);
        },


        // Баг : нет возможности добавить фото
        _createButton:function()
        {
            var undoButton = goog.dom.createElement(goog.dom.TagName.INPUT);
            undoButton.className = "add_photo";
            undoButton.type = "submit";
            undoButton.value = "Add Photo";
            goog.style.setPosition(undoButton, new goog.math.Coordinate(this._position.x, this._position.y + 76));
            document.body.appendChild(undoButton);
            undoButton.style.position = "absolute";
            //undoButton.addEventListener("click", goog.bind(this._undo, this));
        },

        selected:function()
        {
            this._isSelected = true;

            //Баг: активный игрок должен быть подсвечен
        },

        unSelected: function()
        {
            this._isSelected = false;
            this._block.style.backgroundColor = "#a21f54";
        },

        /**
         * @public
         * @param name
         */
        setName:function(name)
        {
            this._name = name;
            this._alert2.innerHTML += this._name;
        }
    });
});