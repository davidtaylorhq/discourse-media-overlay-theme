import Component from "@ember/component";
import { inject } from "@ember/service";
import { scheduleOnce } from "@ember/runloop";

export default Component.extend({
  service: inject("media-overlay-service"),
  collapsed: false,
  dockLeft: false,
  valueObserver: Ember.observer(
    "service.content",
    function (sender, key, value, rev) {
      this.set("collapsed", false);
    }
  ),

  init() {
    this._super(...arguments);
  },

  didRender: function () {
    scheduleOnce("afterRender", this, function () {
      this.$(".lazyYT").lazyYT();
    });
  },

  actions: {
    toggle: function () {
      this.toggleProperty("collapsed");
    },
    close: function () {
      this.get("service").set("open", false);
    },
    switchSides: function () {
      this.toggleProperty("dockLeft");
    },
  },

  additionalClasses: function () {
    if (this.get("dockLeft")) {
      return "dock-left";
    } else {
      return "dock-right";
    }
  }.property("dockLeft"),
});
