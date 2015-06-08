TrelloClone.Views.BoardForm = Backbone.View.extend({

  template: JST['boards/form'],

  initialize: function () {
    this.listenTo (this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  }

});
