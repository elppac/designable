let __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (let p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        )
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
import { EventDriver } from '@designable/shared'
import { MouseMoveEvent } from '../events'
let MouseMoveDriver = /** @class */ (function (_super) {
  __extends(MouseMoveDriver, _super)
  function MouseMoveDriver() {
    let _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.request = null
    _this.onMouseMove = function (e) {
      _this.request = requestAnimationFrame(function () {
        cancelAnimationFrame(_this.request)
        _this.dispatch(
          new MouseMoveEvent({
            clientX: e.clientX,
            clientY: e.clientY,
            pageX: e.pageX,
            pageY: e.pageY,
            target: e.target,
            view: e.view,
          })
        )
      })
    }
    return _this
  }
  MouseMoveDriver.prototype.attach = function () {
    this.addEventListener('mousemove', this.onMouseMove, {
      mode: 'onlyOne',
    })
  }
  MouseMoveDriver.prototype.detach = function () {
    this.removeEventListener('mouseover', this.onMouseMove, {
      mode: 'onlyOne',
    })
  }
  return MouseMoveDriver
})(EventDriver)
export { MouseMoveDriver }