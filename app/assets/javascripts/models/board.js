TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  // Will need this same function on the list model...
  parse: function (response) {
    if (response.lists) {
      this.lists().set(response.lists, {parse: true});
      delete response.lists;
    }

    return response;
  },

  // Will need this same function on the list model...
  lists: function () {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists([], {
        board: this
      });
    }
    return this._lists;
  }
});
