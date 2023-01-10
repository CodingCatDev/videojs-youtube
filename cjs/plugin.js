"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _video = _interopRequireDefault(require("video.js"));

var _package = require("../package.json");

var Plugin = _video.default.getPlugin('plugin'); // Default options for the plugin.


var defaults = {};
/**
 * An advanced Video.js plugin. For more information on the API
 *
 * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
 */

var Youtube = /*#__PURE__*/function (_Plugin) {
  (0, _inheritsLoose2.default)(Youtube, _Plugin);

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
    _this.options = _video.default.mergeOptions(defaults, options);

    _this.player.ready(function () {
      _this.player.addClass('vjs-youtube');
    });

    return _this;
  }

  return Youtube;
}(Plugin); // Define default values for the plugin's `state` object here.


Youtube.defaultState = {}; // Include the version number.

Youtube.VERSION = _package.version; // Register the plugin with video.js.

_video.default.registerPlugin('youtube', Youtube);

var _default = Youtube;
exports.default = _default;
module.exports = exports.default;