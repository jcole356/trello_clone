TrelloClone.Views.BoardForm = Backbone.View.extend({

  template: JST['boards/form'],

  tagName: 'form',

  events: {
    "click button": "submit"
  },

  initialize: function () {
    this.listenTo (this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    var that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate( "boards/" + that.model.id, { trigger: true });
      }
    });
  }

});
