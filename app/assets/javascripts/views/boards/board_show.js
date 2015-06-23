TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST['boards/show'],

  initialize: function () {
    this.listenTo (this.model, "sync", this.render);
    this.listenTo (this.collection, "add", this.addList);
    this.collection.each(this.addList.bind(this));
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addList: function (list) {
    var listShow = new TrelloClone.Views.ListShow({
      model: list
    });

    this.addSubview(".lists", listShow);
  }


});
