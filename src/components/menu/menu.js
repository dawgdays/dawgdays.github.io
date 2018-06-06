app.controllers.menu = function ($state) {
    var menu = this;

    menu.getCurrentState = function () {
        return $state.current.name;
    };
};
