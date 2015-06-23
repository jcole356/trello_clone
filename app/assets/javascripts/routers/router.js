TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize : function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = new TrelloClone.Collections.Boards();
    this.lists = new TrelloClone.Collections.Lists();
  },

  routes: {
    "" : "boardsIndex",
    "boards/new" : "boardNew",
    "boards/:id" : "boardShow",
  },

  boardsIndex: function () {
    this.boards.fetch();
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.boards
    });
    this._swapView(view);
  },

  boardNew: function (id) {
    var board = new TrelloClone.Models.Board();

    var view = new TrelloClone.Views.BoardForm({
      model: board,
      collection: this.boards
    });

    this._swapView(view);
  },

  boardShow: function (id) {
    this.lists.fetch();
    var board = this.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({
      model: board,
      collection: this.lists
    });

    this._swapView(view);
  },

  listNew: function () {
    var list = new TrelloClone.Models.List();

    var view = new TrelloClone.Views.ListForm({
      model: list,
      collection: this.lists
    });

    this._swapView(view);
  },

  // _swapView is the function.  _currentView is the ivar
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
