import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import videojs from 'video.js';
import { version as VERSION } from '../package.json';
var Plugin = videojs.getPlugin('plugin'); // Default options for the plugin.

var defaults = {};
/**
 * An advanced Video.js plugin. For more information on the API
 *
 * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
 */

var Youtube = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(Youtube, _Plugin);

  /**
   * Create a Youtube plugin instance.
   *
   * @param  {Player} player
   *         A Video.js Player instance.
   *
   * @param  {Object} [options]
   *         An optional options object.
   *
   *         While not a core part of the Video.js plugin architecture, a
   *         second argument of options is a convenient way to accept inputs
   *         from your plugin's caller.
   */
  function Youtube(player, options) {
    var _this;

    // the parent class will add player under this.player
    _this = _Plugin.call(this, player) || this;
    _this.options = videojs.mergeOptions(defaults, options);

    _this.player.ready(function () {
      _this.player.addClass('vjs-youtube');
    });

    return _this;
  }

  return Youtube;
}(Plugin); // Define default values for the plugin's `state` object here.


Youtube.defaultState = {}; // Include the version number.

Youtube.VERSION = VERSION; // Register the plugin with video.js.

videojs.registerPlugin('youtube', Youtube);
export default Youtube;