TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize : function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new TrelloClone.Collections.Boards();
  },

  routes: {
    "" : "boardsIndex",
    "boards/new" : "boardForm",
    "boards/:id" : "boardShow"
  },

  boardsIndex: function () {
    this.collection.fetch();
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    });
    this._swapView(view);
  },

  boardForm: function (id) {
    var board = this.collection.getOrFetch(id);
    var view = new TrelloClone.Views.BoardForm({
      model: board
    });
    this._swapView(view);
  },

  boardShow: function (id) {
    var board = this.collection.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({
      model: board
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
