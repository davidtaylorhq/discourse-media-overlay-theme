import Service from "@ember/service";

export default Service.extend({
  content: "",
  open: false,

  init() {
    this._super(...arguments);

    if (!window.mediaOverlayService) {
      window.mediaOverlayService = this;
    }
  },

  loadNew(object) {
    var contentToLoad = $(object).siblings(".content").first().html();
    this.set("content", "");
    this.set("content", contentToLoad);
    this.set("open", true);
  },
});
