goog.provide("ispring.sample.Participant");

goog.require("goog.math");
goog.require("goog.dom");
goog.require("goog.style");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.sample.Participant = goog.defineClass(null, {
        constructor: function(position, number) {

            /**@private {goog.math.Coordinate}*/
            this._position = position;

            /**@private {number}*/
            this._number = number;

            this._block = goog.dom.createElement(goog.dom.TagName.DIV);

            this._createFrame();
            this._createButton();

            this._isSelected = false;
        },

        _createFrame: function()
        {

            this._block.id = "player" + this._number;
            goog.style.setPosition(this._block, this._position);
            goog.style.setSize(this._block, new goog.math.Size(50, 50));
            this._block.style.backgroundColor = "#a21f54";
            //block.style.border;
            document.body.appendChild(this._block);
        },


        // Баг : нет возможности добавить фото
        _createButton:function()
        {
            var undoButton = goog.dom.createElement(goog.dom.TagName.INPUT);
            undoButton.id = "add_photo";
            undoButton.type = "submit";
            undoButton.value = "Add Photo";
            goog.style.setPosition(undoButton, this._position);
            document.body.appendChild(undoButton);
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
        }
    });
});