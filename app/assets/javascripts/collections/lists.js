TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,

  url: "/api/lists",

  // Not 100% sure this is working.  May wany to review this from the
  // practice assessment again.
  comparator: function (list) {
    return list.get('ord');
  }

  // Assume I will eventually need getOrFetch here too.  Should I be
  // repeating all of this in the collections.  I think it's necessary.


});
