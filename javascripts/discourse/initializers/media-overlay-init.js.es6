import { withPluginApi } from "discourse/lib/plugin-api";
import { iconHTML } from "discourse-common/lib/icon-library";

export default {
  name: "media-overlay-init",

  initialize() {
    withPluginApi("0.8", (api) => {
      function addOverlays($elem) {
        $("iframe, video, .lazyYT", $elem)
          .wrap("<div class='media-overlay-eligable'></div>")
          .before(
            "<button class='btn no-text control'>" +
              iconHTML("discourse-expand") +
              "</button>"
          )
          .wrap("<div class='content'></div>");

        $("button.control", $elem).click(function () {
          window.mediaOverlayService.loadNew(this);
        });
      }

      api.decorateCooked(addOverlays, { id: "media-overlay" });
    });
  },
};
