TrelloClone.Views.ListShow = Backbone.View.extend ({

  tagName: 'li',

  template: JST['lists/show'],

  initialize: function () {
    this.listenTo (this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.addClass('list');
    this.$el.html(content);
    return this;
  }
});
