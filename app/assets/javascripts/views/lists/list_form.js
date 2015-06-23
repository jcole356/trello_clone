TrelloClone.Views.ListForm = Backbone.View.extend ({
  template: JST['lists/form'],

  tagName: 'form',

  events: {
    "click button": "submit"
  },

  render: function () {
    var content = this.template({
      list: this.model
    });

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
      }
    });
  }

});
