import Component from "@ember/component";
import { inject } from "@ember/service";
import { scheduleOnce } from "@ember/runloop";
import { observer, computed } from "@ember/object";

export default Component.extend({
  service: inject("media-overlay-service"),
  collapsed: false,
  dockLeft: false,
  valueObserver: observer(
    "service.content",
    function (sender, key, value, rev) {
      this.set("collapsed", false);
    }
  ),

  init() {
    this._super(...arguments);
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

  @computed("dockLeft")
  get additionalClasses(){
    if (this.get("dockLeft")) {
      return "dock-left";
    } else {
      return "dock-right";
    }
  },
});
