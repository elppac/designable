!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(
        (((e =
          'undefined' != typeof globalThis
            ? globalThis
            : e || self).Designable = e.Designable || {}),
        (e.Designable.Core = {}))
      )
})(this, function (e) {
  'use strict'
  var t = function (e, n) {
    return (
      (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }),
      t(e, n)
    )
  }
  function n(e, n) {
    if ('function' != typeof n && null !== n)
      throw new TypeError(
        'Class extends value ' + String(n) + ' is not a constructor or null'
      )
    function r() {
      this.constructor = e
    }
    t(e, n),
      (e.prototype =
        null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
  }
  var r = function () {
    return (
      (r =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          return e
        }),
      r.apply(this, arguments)
    )
  }
  function i(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0
    if (n) return n.call(e)
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return (
            e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          )
        },
      }
    throw new TypeError(
      t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    )
  }
  function o(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!n) return e
    var r,
      i,
      o = n.call(e),
      s = []
    try {
      for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
        s.push(r.value)
    } catch (e) {
      i = { error: e }
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o)
      } finally {
        if (i) throw i.error
      }
    }
    return s
  }
  function s(e, t, n) {
    if (n || 2 === arguments.length)
      for (var r, i = 0, o = t.length; i < o; i++)
        (!r && i in t) ||
          (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]))
    return e.concat(r || Array.prototype.slice.call(t))
  }
  'function' == typeof SuppressedError && SuppressedError
  var a,
    c = (function () {
      function e(e) {
        ;(this.data = e || {
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          target: null,
          view: Designable.Shared.globalThisPolyfill,
        }),
          this.transformCoordinates()
      }
      return (
        (e.prototype.transformCoordinates = function () {
          var e,
            t = (
              (null === (e = this.data) || void 0 === e ? void 0 : e.view) || {}
            ).frameElement
          if (t && this.data.view !== Designable.Shared.globalThisPolyfill) {
            var n = t.getBoundingClientRect(),
              r = n.width / t.offsetWidth
            ;(this.data.topClientX = this.data.clientX * r + n.x),
              (this.data.topClientY = this.data.clientY * r + n.y),
              (this.data.topPageX =
                this.data.pageX + n.x - this.data.view.scrollX),
              (this.data.topPageY =
                this.data.pageY + n.y - this.data.view.scrollY)
            var i = document.elementFromPoint(
              this.data.topPageX,
              this.data.topClientY
            )
            i !== t && (this.data.target = i)
          } else
            (this.data.topClientX = this.data.clientX),
              (this.data.topClientY = this.data.clientY),
              (this.data.topPageX = this.data.pageX),
              (this.data.topPageY = this.data.pageY)
        }),
        e
      )
    })(),
    l = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'drag:move'), t
      }
      return n(t, e), t
    })(c),
    u = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'drag:start'), t
      }
      return n(t, e), t
    })(c),
    d = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'drag:stop'), t
      }
      return n(t, e), t
    })(c),
    h = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'mouse:click'), t
      }
      return n(t, e), t
    })(c),
    p = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'mouse:dblclick'), t
      }
      return n(t, e), t
    })(c),
    f = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'mouse:move'), t
      }
      return n(t, e), t
    })(c),
    v = (function () {
      function e(e) {
        ;(this.data = Designable.Shared.getKeyCodeFromEvent(e)),
          (this.originEvent = e)
      }
      return (
        Object.defineProperty(e.prototype, 'eventType', {
          get: function () {
            return this.originEvent.type
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'ctrlKey', {
          get: function () {
            return this.originEvent.ctrlKey
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'shiftKey', {
          get: function () {
            return this.originEvent.shiftKey
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'metaKey', {
          get: function () {
            return this.originEvent.metaKey
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'altkey', {
          get: function () {
            return this.originEvent.altKey
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.preventDefault = function () {
          this.originEvent.preventDefault
            ? this.originEvent.preventDefault()
            : (this.originEvent.returnValue = !1)
        }),
        (e.prototype.stopPropagation = function () {
          var e
          ;(
            null === (e = this.originEvent) || void 0 === e
              ? void 0
              : e.stopPropagation
          )
            ? this.originEvent.stopPropagation()
            : (this.originEvent.cancelBubble = !0)
        }),
        e
      )
    })(),
    g = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'key:down'), t
      }
      return n(t, e), t
    })(v),
    y = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'key:up'), t
      }
      return n(t, e), t
    })(v),
    b = function (e) {
      this.data = e
    },
    m = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'drag:node'), t
      }
      return n(t, e), t
    })(b),
    w = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'drop:node'), t
      }
      return n(t, e), t
    })(b),
    S = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'hover:node'), t
      }
      return n(t, e), t
    })(b),
    R = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'insert:after'), t
      }
      return n(t, e), t
    })(b),
    E = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'insert:before'), t
      }
      return n(t, e), t
    })(b),
    D = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'insert:children'), t
      }
      return n(t, e), t
    })(b),
    C = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'prepend:node'), t
      }
      return n(t, e), t
    })(b),
    N = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'remove:node'), t
      }
      return n(t, e), t
    })(b),
    P = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'select:node'), t
      }
      return n(t, e), t
    })(b),
    k = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'unselect:node'), t
      }
      return n(t, e), t
    })(b),
    T = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'update:children'), t
      }
      return n(t, e), t
    })(b),
    O = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'update:node:props'), t
      }
      return n(t, e), t
    })(b),
    x = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'wrap:node'), t
      }
      return n(t, e), t
    })(b),
    A = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'clone:node'), t
      }
      return n(t, e), t
    })(b),
    I = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'append:node'), t
      }
      return n(t, e), t
    })(b),
    F = function (e) {
      ;(this.type = 'from:node'), (this.data = e)
    },
    B = function (e) {
      this.data = e || {
        scrollX: Designable.Shared.globalThisPolyfill.scrollX,
        scrollY: Designable.Shared.globalThisPolyfill.scrollY,
        width: Designable.Shared.globalThisPolyfill.innerWidth,
        height: Designable.Shared.globalThisPolyfill.innerHeight,
        innerWidth: Designable.Shared.globalThisPolyfill.innerWidth,
        innerHeight: Designable.Shared.globalThisPolyfill.innerHeight,
        view: Designable.Shared.globalThisPolyfill,
        target: Designable.Shared.globalThisPolyfill,
      }
    },
    L = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'viewport:resize'), t
      }
      return n(t, e), t
    })(B),
    M = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'viewport:scroll'), t
      }
      return n(t, e), t
    })(B),
    W = function (e) {
      this.data = e
    },
    z = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'add:workspace'), t
      }
      return n(t, e), t
    })(W),
    j = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'remove:workspace'), t
      }
      return n(t, e), t
    })(W),
    X = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'switch:workspace'), t
      }
      return n(t, e), t
    })(W),
    Y = function (e) {
      this.data = e
    },
    V = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'history:undo'), t
      }
      return n(t, e), t
    })(Y),
    q = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'history:redo'), t
      }
      return n(t, e), t
    })(Y),
    H = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'history:goto'), t
      }
      return n(t, e), t
    })(Y),
    U = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = 'history:push'), t
      }
      return n(t, e), t
    })(Y),
    K = { dragging: !1, onMouseDownAt: 0, startEvent: null, moveEvent: null },
    _ = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t.mouseDownTimer = null),
          (t.onMouseDown = function (e) {
            var n, r
            if (0 === e.button && !e.ctrlKey && !e.metaKey)
              return (
                !(
                  !e.target.isContentEditable &&
                  'true' !== e.target.contentEditable
                ) ||
                void (
                  (null ===
                    (r =
                      null === (n = e.target) || void 0 === n
                        ? void 0
                        : n.closest) || void 0 === r
                    ? void 0
                    : r.call(n, '.monaco-editor')) ||
                  ((K.startEvent = e),
                  (K.dragging = !1),
                  (K.onMouseDownAt = Date.now()),
                  t.batchAddEventListener('mouseup', t.onMouseUp),
                  t.batchAddEventListener('dragend', t.onMouseUp),
                  t.batchAddEventListener('dragstart', t.onStartDrag),
                  t.batchAddEventListener('mousemove', t.onDistanceChange))
                )
              )
          }),
          (t.onMouseUp = function (e) {
            K.dragging &&
              t.dispatch(
                new d({
                  clientX: e.clientX,
                  clientY: e.clientY,
                  pageX: e.pageX,
                  pageY: e.pageY,
                  target: e.target,
                  view: e.view,
                })
              ),
              t.batchRemoveEventListener(
                'contextmenu',
                t.onContextMenuWhileDragging,
                !0
              ),
              t.batchRemoveEventListener('mouseup', t.onMouseUp),
              t.batchRemoveEventListener('mousedown', t.onMouseDown),
              t.batchRemoveEventListener('dragover', t.onMouseMove),
              t.batchRemoveEventListener('mousemove', t.onMouseMove),
              t.batchRemoveEventListener('mousemove', t.onDistanceChange),
              (K.dragging = !1)
          }),
          (t.onMouseMove = function (e) {
            var n, r
            ;(e.clientX ===
              (null === (n = K.moveEvent) || void 0 === n
                ? void 0
                : n.clientX) &&
              e.clientY ===
                (null === (r = K.moveEvent) || void 0 === r
                  ? void 0
                  : r.clientY)) ||
              (t.dispatch(
                new l({
                  clientX: e.clientX,
                  clientY: e.clientY,
                  pageX: e.pageX,
                  pageY: e.pageY,
                  target: e.target,
                  view: e.view,
                })
              ),
              (K.moveEvent = e))
          }),
          (t.onContextMenuWhileDragging = function (e) {
            e.preventDefault()
          }),
          (t.onStartDrag = function (e) {
            K.dragging ||
              ((K.startEvent = K.startEvent || e),
              t.batchAddEventListener('dragover', t.onMouseMove),
              t.batchAddEventListener('mousemove', t.onMouseMove),
              t.batchAddEventListener(
                'contextmenu',
                t.onContextMenuWhileDragging,
                !0
              ),
              t.dispatch(
                new u({
                  clientX: K.startEvent.clientX,
                  clientY: K.startEvent.clientY,
                  pageX: K.startEvent.pageX,
                  pageY: K.startEvent.pageY,
                  target: K.startEvent.target,
                  view: K.startEvent.view,
                })
              ),
              (K.dragging = !0))
          }),
          (t.onDistanceChange = function (e) {
            var n = Math.sqrt(
              Math.pow(e.pageX - K.startEvent.pageX, 2) +
                Math.pow(e.pageY - K.startEvent.pageY, 2)
            )
            Date.now() - K.onMouseDownAt > 10 &&
              e !== K.startEvent &&
              n > 4 &&
              (t.batchRemoveEventListener('mousemove', t.onDistanceChange),
              t.onStartDrag(e))
          }),
          t
        )
      }
      return (
        n(t, e),
        (t.prototype.attach = function () {
          this.batchAddEventListener('mousedown', this.onMouseDown, !0)
        }),
        (t.prototype.detach = function () {
          ;(K.dragging = !1),
            (K.moveEvent = null),
            (K.onMouseDownAt = null),
            (K.startEvent = null),
            this.batchRemoveEventListener('mousedown', this.onMouseDown, !0),
            this.batchRemoveEventListener('dragstart', this.onStartDrag),
            this.batchRemoveEventListener('dragend', this.onMouseUp),
            this.batchRemoveEventListener('dragover', this.onMouseMove),
            this.batchRemoveEventListener('mouseup', this.onMouseUp),
            this.batchRemoveEventListener('mousemove', this.onMouseMove),
            this.batchRemoveEventListener('mousemove', this.onDistanceChange),
            this.batchRemoveEventListener(
              'contextmenu',
              this.onContextMenuWhileDragging,
              !0
            )
        }),
        t
      )
    })(Designable.Shared.EventDriver),
    G = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t.onMouseClick = function (e) {
            var n = e.target
            ;(null == n
              ? void 0
              : n.closest(
                  '*['.concat(t.engine.props.clickStopPropagationAttrName, ']')
                )) ||
              t.dispatch(
                new h({
                  clientX: e.clientX,
                  clientY: e.clientY,
                  pageX: e.pageX,
                  pageY: e.pageY,
                  target: e.target,
                  view: e.view,
                })
              )
          }),
          (t.onMouseDoubleClick = function (e) {
            var n = e.target
            ;(null == n
              ? void 0
              : n.closest(
                  '*['.concat(t.engine.props.clickStopPropagationAttrName, ']')
                )) ||
              t.dispatch(
                new p({
                  clientX: e.clientX,
                  clientY: e.clientY,
                  pageX: e.pageX,
                  pageY: e.pageY,
                  target: e.target,
                  view: e.view,
                })
              )
          }),
          t
        )
      }
      return (
        n(t, e),
        (t.prototype.attach = function () {
          this.addEventListener('click', this.onMouseClick, {
            mode: 'onlyChild',
          }),
            this.addEventListener('dblclick', this.onMouseDoubleClick, {
              mode: 'onlyChild',
            })
        }),
        (t.prototype.detach = function () {
          this.removeEventListener('click', this.onMouseClick, {
            mode: 'onlyChild',
          }),
            this.removeEventListener('dblclick', this.onMouseDoubleClick, {
              mode: 'onlyChild',
            })
        }),
        t
      )
    })(Designable.Shared.EventDriver),
    $ = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t.request = null),
          (t.onMouseMove = function (e) {
            t.request = requestAnimationFrame(function () {
              cancelAnimationFrame(t.request),
                t.dispatch(
                  new f({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    target: e.target,
                    view: e.view,
                  })
                )
            })
          }),
          t
        )
      }
      return (
        n(t, e),
        (t.prototype.attach = function () {
          this.addEventListener('mousemove', this.onMouseMove, {
            mode: 'onlyOne',
          })
        }),
        (t.prototype.detach = function () {
          this.removeEventListener('mouseover', this.onMouseMove, {
            mode: 'onlyOne',
          })
        }),
        t
      )
    })(Designable.Shared.EventDriver),
    Z = [],
    J = 'ResizeObserver loop completed with undelivered notifications.'
  !(function (e) {
    ;(e.BORDER_BOX = 'border-box'),
      (e.CONTENT_BOX = 'content-box'),
      (e.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box')
  })(a || (a = {}))
  var Q,
    ee = function (e) {
      return Object.freeze(e)
    },
    te = function (e, t) {
      ;(this.inlineSize = e), (this.blockSize = t), ee(this)
    },
    ne = (function () {
      function e(e, t, n, r) {
        return (
          (this.x = e),
          (this.y = t),
          (this.width = n),
          (this.height = r),
          (this.top = this.y),
          (this.left = this.x),
          (this.bottom = this.top + this.height),
          (this.right = this.left + this.width),
          ee(this)
        )
      }
      return (
        (e.prototype.toJSON = function () {
          var e = this
          return {
            x: e.x,
            y: e.y,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            width: e.width,
            height: e.height,
          }
        }),
        (e.fromRect = function (t) {
          return new e(t.x, t.y, t.width, t.height)
        }),
        e
      )
    })(),
    re = function (e) {
      return e instanceof SVGElement && 'getBBox' in e
    },
    ie = function (e) {
      if (re(e)) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height
        return !n && !r
      }
      var i = e,
        o = i.offsetWidth,
        s = i.offsetHeight
      return !(o || s || e.getClientRects().length)
    },
    oe = function (e) {
      var t, n
      if (e instanceof Element) return !0
      var r =
        null ===
          (n = null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) ||
        void 0 === n
          ? void 0
          : n.defaultView
      return !!(r && e instanceof r.Element)
    },
    se = 'undefined' != typeof window ? window : {},
    ae = new WeakMap(),
    ce = /auto|scroll/,
    le = /^tb|vertical/,
    ue = /msie|trident/i.test(se.navigator && se.navigator.userAgent),
    de = function (e) {
      return parseFloat(e || '0')
    },
    he = function (e, t, n) {
      return (
        void 0 === e && (e = 0),
        void 0 === t && (t = 0),
        void 0 === n && (n = !1),
        new te((n ? t : e) || 0, (n ? e : t) || 0)
      )
    },
    pe = ee({
      devicePixelContentBoxSize: he(),
      borderBoxSize: he(),
      contentBoxSize: he(),
      contentRect: new ne(0, 0, 0, 0),
    }),
    fe = function (e, t) {
      if ((void 0 === t && (t = !1), ae.has(e) && !t)) return ae.get(e)
      if (ie(e)) return ae.set(e, pe), pe
      var n = getComputedStyle(e),
        r = re(e) && e.ownerSVGElement && e.getBBox(),
        i = !ue && 'border-box' === n.boxSizing,
        o = le.test(n.writingMode || ''),
        s = !r && ce.test(n.overflowY || ''),
        a = !r && ce.test(n.overflowX || ''),
        c = r ? 0 : de(n.paddingTop),
        l = r ? 0 : de(n.paddingRight),
        u = r ? 0 : de(n.paddingBottom),
        d = r ? 0 : de(n.paddingLeft),
        h = r ? 0 : de(n.borderTopWidth),
        p = r ? 0 : de(n.borderRightWidth),
        f = r ? 0 : de(n.borderBottomWidth),
        v = d + l,
        g = c + u,
        y = (r ? 0 : de(n.borderLeftWidth)) + p,
        b = h + f,
        m = a ? e.offsetHeight - b - e.clientHeight : 0,
        w = s ? e.offsetWidth - y - e.clientWidth : 0,
        S = i ? v + y : 0,
        R = i ? g + b : 0,
        E = r ? r.width : de(n.width) - S - w,
        D = r ? r.height : de(n.height) - R - m,
        C = E + v + w + y,
        N = D + g + m + b,
        P = ee({
          devicePixelContentBoxSize: he(
            Math.round(E * devicePixelRatio),
            Math.round(D * devicePixelRatio),
            o
          ),
          borderBoxSize: he(C, N, o),
          contentBoxSize: he(E, D, o),
          contentRect: new ne(d, c, E, D),
        })
      return ae.set(e, P), P
    },
    ve = function (e, t, n) {
      var r = fe(e, n),
        i = r.borderBoxSize,
        o = r.contentBoxSize,
        s = r.devicePixelContentBoxSize
      switch (t) {
        case a.DEVICE_PIXEL_CONTENT_BOX:
          return s
        case a.BORDER_BOX:
          return i
        default:
          return o
      }
    },
    ge = function (e) {
      var t = fe(e)
      ;(this.target = e),
        (this.contentRect = t.contentRect),
        (this.borderBoxSize = ee([t.borderBoxSize])),
        (this.contentBoxSize = ee([t.contentBoxSize])),
        (this.devicePixelContentBoxSize = ee([t.devicePixelContentBoxSize]))
    },
    ye = function (e) {
      if (ie(e)) return 1 / 0
      for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode)
      return t
    },
    be = function () {
      var e = 1 / 0,
        t = []
      Z.forEach(function (n) {
        if (0 !== n.activeTargets.length) {
          var r = []
          n.activeTargets.forEach(function (t) {
            var n = new ge(t.target),
              i = ye(t.target)
            r.push(n),
              (t.lastReportedSize = ve(t.target, t.observedBox)),
              i < e && (e = i)
          }),
            t.push(function () {
              n.callback.call(n.observer, r, n.observer)
            }),
            n.activeTargets.splice(0, n.activeTargets.length)
        }
      })
      for (var n = 0, r = t; n < r.length; n++) {
        ;(0, r[n])()
      }
      return e
    },
    me = function (e) {
      Z.forEach(function (t) {
        t.activeTargets.splice(0, t.activeTargets.length),
          t.skippedTargets.splice(0, t.skippedTargets.length),
          t.observationTargets.forEach(function (n) {
            n.isActive() &&
              (ye(n.target) > e
                ? t.activeTargets.push(n)
                : t.skippedTargets.push(n))
          })
      })
    },
    we = function () {
      var e,
        t = 0
      for (
        me(t);
        Z.some(function (e) {
          return e.activeTargets.length > 0
        });

      )
        (t = be()), me(t)
      return (
        Z.some(function (e) {
          return e.skippedTargets.length > 0
        }) &&
          ('function' == typeof ErrorEvent
            ? (e = new ErrorEvent('error', { message: J }))
            : ((e = document.createEvent('Event')).initEvent('error', !1, !1),
              (e.message = J)),
          window.dispatchEvent(e)),
        t > 0
      )
    },
    Se = [],
    Re = function (e) {
      if (!Q) {
        var t = 0,
          n = document.createTextNode('')
        new MutationObserver(function () {
          return Se.splice(0).forEach(function (e) {
            return e()
          })
        }).observe(n, { characterData: !0 }),
          (Q = function () {
            n.textContent = '' + (t ? t-- : t++)
          })
      }
      Se.push(e), Q()
    },
    Ee = 0,
    De = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    Ce = [
      'resize',
      'load',
      'transitionend',
      'animationend',
      'animationstart',
      'animationiteration',
      'keyup',
      'keydown',
      'mouseup',
      'mousedown',
      'mouseover',
      'mouseout',
      'blur',
      'focus',
    ],
    Ne = function (e) {
      return void 0 === e && (e = 0), Date.now() + e
    },
    Pe = !1,
    ke = new ((function () {
      function e() {
        var e = this
        ;(this.stopped = !0),
          (this.listener = function () {
            return e.schedule()
          })
      }
      return (
        (e.prototype.run = function (e) {
          var t = this
          if ((void 0 === e && (e = 250), !Pe)) {
            Pe = !0
            var n,
              r = Ne(e)
            ;(n = function () {
              var n = !1
              try {
                n = we()
              } finally {
                if (((Pe = !1), (e = r - Ne()), !Ee)) return
                n ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
              }
            }),
              Re(function () {
                requestAnimationFrame(n)
              })
          }
        }),
        (e.prototype.schedule = function () {
          this.stop(), this.run()
        }),
        (e.prototype.observe = function () {
          var e = this,
            t = function () {
              return e.observer && e.observer.observe(document.body, De)
            }
          document.body ? t() : se.addEventListener('DOMContentLoaded', t)
        }),
        (e.prototype.start = function () {
          var e = this
          this.stopped &&
            ((this.stopped = !1),
            (this.observer = new MutationObserver(this.listener)),
            this.observe(),
            Ce.forEach(function (t) {
              return se.addEventListener(t, e.listener, !0)
            }))
        }),
        (e.prototype.stop = function () {
          var e = this
          this.stopped ||
            (this.observer && this.observer.disconnect(),
            Ce.forEach(function (t) {
              return se.removeEventListener(t, e.listener, !0)
            }),
            (this.stopped = !0))
        }),
        e
      )
    })())(),
    Te = function (e) {
      !Ee && e > 0 && ke.start(), !(Ee += e) && ke.stop()
    },
    Oe = (function () {
      function e(e, t) {
        ;(this.target = e),
          (this.observedBox = t || a.CONTENT_BOX),
          (this.lastReportedSize = { inlineSize: 0, blockSize: 0 })
      }
      return (
        (e.prototype.isActive = function () {
          var e,
            t = ve(this.target, this.observedBox, !0)
          return (
            (e = this.target),
            re(e) ||
              (function (e) {
                switch (e.tagName) {
                  case 'INPUT':
                    if ('image' !== e.type) break
                  case 'VIDEO':
                  case 'AUDIO':
                  case 'EMBED':
                  case 'OBJECT':
                  case 'CANVAS':
                  case 'IFRAME':
                  case 'IMG':
                    return !0
                }
                return !1
              })(e) ||
              'inline' !== getComputedStyle(e).display ||
              (this.lastReportedSize = t),
            this.lastReportedSize.inlineSize !== t.inlineSize ||
              this.lastReportedSize.blockSize !== t.blockSize
          )
        }),
        e
      )
    })(),
    xe = function (e, t) {
      ;(this.activeTargets = []),
        (this.skippedTargets = []),
        (this.observationTargets = []),
        (this.observer = e),
        (this.callback = t)
    },
    Ae = new WeakMap(),
    Ie = function (e, t) {
      for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n
      return -1
    },
    Fe = (function () {
      function e() {}
      return (
        (e.connect = function (e, t) {
          var n = new xe(e, t)
          Ae.set(e, n)
        }),
        (e.observe = function (e, t, n) {
          var r = Ae.get(e),
            i = 0 === r.observationTargets.length
          Ie(r.observationTargets, t) < 0 &&
            (i && Z.push(r),
            r.observationTargets.push(new Oe(t, n && n.box)),
            Te(1),
            ke.schedule())
        }),
        (e.unobserve = function (e, t) {
          var n = Ae.get(e),
            r = Ie(n.observationTargets, t),
            i = 1 === n.observationTargets.length
          r >= 0 &&
            (i && Z.splice(Z.indexOf(n), 1),
            n.observationTargets.splice(r, 1),
            Te(-1))
        }),
        (e.disconnect = function (e) {
          var t = this,
            n = Ae.get(e)
          n.observationTargets.slice().forEach(function (n) {
            return t.unobserve(e, n.target)
          }),
            n.activeTargets.splice(0, n.activeTargets.length)
        }),
        e
      )
    })(),
    Be = (function () {
      function e(e) {
        if (0 === arguments.length)
          throw new TypeError(
            "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
          )
        if ('function' != typeof e)
          throw new TypeError(
            "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
          )
        Fe.connect(this, e)
      }
      return (
        (e.prototype.observe = function (e, t) {
          if (0 === arguments.length)
            throw new TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
            )
          if (!oe(e))
            throw new TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
            )
          Fe.observe(this, e, t)
        }),
        (e.prototype.unobserve = function (e) {
          if (0 === arguments.length)
            throw new TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
            )
          if (!oe(e))
            throw new TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
            )
          Fe.unobserve(this, e)
        }),
        (e.prototype.disconnect = function () {
          Fe.disconnect(this)
        }),
        (e.toString = function () {
          return 'function ResizeObserver () { [polyfill code] }'
        }),
        e
      )
    })(),
    Le = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t.request = null),
          (t.resizeObserver = null),
          (t.onResize = function (e) {
            e.preventDefault && e.preventDefault(),
              (t.request = requestAnimationFrame(function () {
                cancelAnimationFrame(t.request),
                  t.dispatch(
                    new L({
                      scrollX: t.contentWindow.scrollX,
                      scrollY: t.contentWindow.scrollY,
                      width: t.contentWindow.innerWidth,
                      height: t.contentWindow.innerHeight,
                      innerHeight: t.contentWindow.innerHeight,
                      innerWidth: t.contentWindow.innerWidth,
                      view: t.contentWindow,
                      target: e.target || t.container,
                    })
                  )
              }))
          }),
          t
        )
      }
      return (
        n(t, e),
        (t.prototype.attach = function () {
          this.contentWindow &&
          this.contentWindow !== Designable.Shared.globalThisPolyfill
            ? this.addEventListener('resize', this.onResize)
            : this.container &&
              this.container !== document &&
              ((this.resizeObserver = new Be(this.onResize)),
              this.resizeObserver.observe(this.container))
        }),
        (t.prototype.detach = function () {
          this.contentWindow &&
          this.contentWindow !== Designable.Shared.globalThisPolyfill
            ? this.removeEventListener('resize', this.onResize)
            : this.resizeObserver &&
              this.container &&
              this.container !== document &&
              (this.resizeObserver.unobserve(this.container),
              this.resizeObserver.disconnect())
        }),
        t
      )
    })(Designable.Shared.EventDriver),
    Me = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t.request = null),
          (t.onScroll = function (e) {
            e.preventDefault(),
              (t.request =
                Designable.Shared.globalThisPolyfill.requestAnimationFrame(
                  function () {
                    t.dispatch(
                      new M({
                        scrollX: t.contentWindow.scrollX,
                        scrollY: t.contentWindow.scrollY,
                        width: t.contentWindow.document.body.clientWidth,
                        height: t.contentWindow.document.body.clientHeight,
                        innerHeight: t.contentWindow.innerHeight,
                        innerWidth: t.contentWindow.innerWidth,
                        view: t.contentWindow,
                        target: e.target,
                      })
                    ),
                      cancelAnimationFrame(t.request)
                  }
                ))
          }),
          t
        )
      }
      return (
        n(t, e),
        (t.prototype.attach = function () {
          this.addEventListener('scroll', this.onScroll)
        }),
        (t.prototype.detach = function () {
          this.removeEventListener('scroll', this.onScroll)
        }),
        t
      )
    })(Designable.Shared.EventDriver)
  function We(e) {
    var t = e.target,
      n = t.tagName,
      r = !0
    return (
      (t.isContentEditable ||
        (('INPUT' === n ||
          'TEXTAREA' === n ||
          'SELECT' === n ||
          customElements.get(n.toLocaleLowerCase())) &&
          !t.readOnly)) &&
        (r = !1),
      r
    )
  }
  var ze,
    je,
    Xe,
    Ye = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t.onKeyDown = function (e) {
            We(e) && t.dispatch(new g(e))
          }),
          (t.onKeyUp = function (e) {
            t.dispatch(new y(e))
          }),
          t
        )
      }
      return (
        n(t, e),
        (t.prototype.attach = function () {
          this.addEventListener('keydown', this.onKeyDown, {
            mode: 'onlyParent',
          }),
            this.addEventListener('keyup', this.onKeyUp, { mode: 'onlyParent' })
        }),
        (t.prototype.detach = function () {
          this.removeEventListener('keydown', this.onKeyDown, {
            mode: 'onlyParent',
          }),
            this.removeEventListener('keyup', this.onKeyUp, {
              mode: 'onlyParent',
            })
        }),
        t
      )
    })(Designable.Shared.EventDriver),
    Ve = function (e) {
      return String(e).replace(/\s+/g, '_').toLocaleLowerCase()
    },
    qe = function (e, t) {
      if (Designable.Shared.isPlainObj(e) && Designable.Shared.isPlainObj(t))
        return (
          Designable.Shared.each(t, function (t, n) {
            var r = Ve(n),
              i = qe(e[n] || e[r], t)
            e[r] = i
          }),
          e
        )
      if (Designable.Shared.isPlainObj(t)) {
        var n = Array.isArray(t) ? [] : {}
        return (
          Designable.Shared.each(t, function (e, t) {
            var r = qe(void 0, e)
            n[Ve(t)] = r
          }),
          n
        )
      }
      return t
    },
    He = function (e) {
      var t = $e.value,
        n = Ve(e)
      return Ge.value[n]
        ? n
        : (Designable.Shared.each(Ge.value, function (e, r) {
            if (r.indexOf(n) > -1 || String(n).indexOf(r) > -1)
              return (t = r), !1
          }),
          t)
    },
    Ue = function (e, t) {
      var n = function (t) {
        return e.includes(t)
      }
      Designable.Shared.each(t, function (r) {
        if (r && _t(r)) {
          var i = r.Behavior
          Designable.Shared.each(i, function (r) {
            if (!n(r)) {
              var i = r.name
              Designable.Shared.each(r.extends, function (r) {
                var o = (function (e) {
                  for (var n in t)
                    for (var r = t[n].Behavior, i = 0; i < r.length; i++)
                      if (r[i].name === e) return r[i]
                })(r)
                if (!o)
                  throw new Error(
                    'No '.concat(r, ' behavior that ').concat(i, ' depends on')
                  )
                n(o) || e.unshift(o)
              }),
                e.push(r)
            }
          })
        }
      })
    },
    Ke = Formily.Reactive.observable.ref([]),
    _e = Formily.Reactive.observable.ref({}),
    Ge = Formily.Reactive.observable.ref({}),
    $e = Formily.Reactive.observable.ref(
      (function () {
        var e
        return (
          (Designable.Shared.globalThisPolyfill.navigator &&
            (Designable.Shared.globalThisPolyfill.navigator.browserlanguage ||
              (null === (e = Designable.Shared.globalThisPolyfill.navigator) ||
              void 0 === e
                ? void 0
                : e.language))) ||
          'en'
        )
      })()
    ),
    Ze = {
      setDesignerLanguage: function (e) {
        $e.value = e
      },
      setDesignerBehaviors: function (e) {
        Ke.value = e.reduce(function (e, t) {
          return _t(t) ? e.concat(t.Behavior) : Gt(t) ? e.concat(t) : e
        }, [])
      },
      getDesignerBehaviors: function (e) {
        return Ke.value.filter(function (t) {
          return t.selector(e)
        })
      },
      getDesignerIcon: function (e) {
        return _e[e]
      },
      getDesignerLanguage: function () {
        return He($e.value)
      },
      getDesignerMessage: function (e, t) {
        var n = He($e.value),
          r = t ? t[n] : Ge.value[n]
        if (r) return Formily.Path.Path.getIn(r, Ve(e))
        for (var i in Ge.value) {
          var o = Formily.Path.Path.getIn(Ge.value[i], Ve(e))
          if (o) return o
        }
      },
      registerDesignerIcons: function (e) {
        Object.assign(_e, e)
      },
      registerDesignerLocales: function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        e.forEach(function (e) {
          qe(Ge.value, e)
        })
      },
      registerDesignerBehaviors: function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        var n = []
        e.forEach(function (e) {
          Ue(n, e)
        }),
          n.length && (Ke.value = n)
      },
    },
    Je = Ze,
    Qe = new Map(),
    et = new Map(),
    tt = function (e) {
      e.parent &&
        (e.parent.children = e.parent.children.filter(function (t) {
          return t !== e
        }))
    },
    nt = function (e, t) {
      var n = function (e) {
          ;(e.depth = e.parent ? e.parent.depth + 1 : 0), e.children.forEach(n)
        },
        r = function (e) {
          ;(e.parent = t), (e.root = t.root), n(e)
        },
        i = function (e) {
          r(e), nt(e.children, e)
        }
      return e.map(function (e) {
        var o
        return (
          e === t ||
            (t.isSourceNode
              ? i(e)
              : e.isSourceNode
              ? ((e = e.clone(t)), n(e))
              : !e.isRoot && e.isInOperation
              ? (null === (o = e.operation) ||
                  void 0 === o ||
                  o.selection.remove(e),
                tt(e),
                r(e))
              : i(e),
            Qe.has(e.id) ||
              (Qe.set(e.id, e), et.set(e.componentName, e.designerProps))),
          e
        )
      })
    },
    rt = function (e, t) {
      return nt([e], t)[0]
    },
    it = (function () {
      function e(t, n) {
        if (
          ((this.depth = 0),
          (this.hidden = !1),
          (this.componentName = 'NO_NAME_COMPONENT'),
          (this.sourceName = ''),
          (this.props = {}),
          (this.children = []),
          t instanceof e)
        )
          return t
        ;(this.id = t.id || Designable.Shared.uid()),
          n
            ? ((this.parent = n),
              (this.depth = n.depth + 1),
              (this.root = n.root),
              Qe.set(this.id, this))
            : ((this.root = this),
              (this.rootOperation = t.operation),
              (this.isSelfSourceNode = t.isSourceNode || !1),
              Qe.set(this.id, this)),
          t && this.from(t),
          this.makeObservable()
      }
      return (
        (e.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            componentName: Formily.Reactive.observable.ref,
            props: Formily.Reactive.observable,
            hidden: Formily.Reactive.observable.ref,
            children: Formily.Reactive.observable.shallow,
            designerProps: Formily.Reactive.observable.computed,
            designerLocales: Formily.Reactive.observable.computed,
            wrap: Formily.Reactive.action,
            prepend: Formily.Reactive.action,
            append: Formily.Reactive.action,
            insertAfter: Formily.Reactive.action,
            insertBefore: Formily.Reactive.action,
            remove: Formily.Reactive.action,
            setProps: Formily.Reactive.action,
            setChildren: Formily.Reactive.action,
            setComponentName: Formily.Reactive.action,
          })
        }),
        Object.defineProperty(e.prototype, 'designerProps', {
          get: function () {
            var e = this
            return Je.getDesignerBehaviors(this).reduce(function (t, n) {
              return n.designerProps
                ? (Object.assign(
                    t,
                    ((r = e),
                    (i = n.designerProps),
                    Designable.Shared.isFn(i) ? i(r) : i)
                  ),
                  t)
                : t
              var r, i
            }, {})
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'designerLocales', {
          get: function () {
            return Je.getDesignerBehaviors(this).reduce(function (e, t) {
              return t.designerLocales ? (qe(e, t.designerLocales), e) : e
            }, {})
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'previous', {
          get: function () {
            if (this.parent !== this && this.parent)
              return this.parent.children[this.index - 1]
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'next', {
          get: function () {
            if (this.parent !== this && this.parent)
              return this.parent.children[this.index + 1]
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'siblings', {
          get: function () {
            var e = this
            return this.parent
              ? this.parent.children.filter(function (t) {
                  return t !== e
                })
              : []
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'index', {
          get: function () {
            return this.parent !== this && this.parent
              ? this.parent.children.indexOf(this)
              : 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'descendants', {
          get: function () {
            return this.children.reduce(function (e, t) {
              return e.concat(t).concat(t.descendants)
            }, [])
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'isRoot', {
          get: function () {
            return this === this.root
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'isInOperation', {
          get: function () {
            return !!this.operation
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'lastChild', {
          get: function () {
            return this.children[this.children.length - 1]
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'firstChild', {
          get: function () {
            return this.children[0]
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'isSourceNode', {
          get: function () {
            return this.root.isSelfSourceNode
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'operation', {
          get: function () {
            var e
            return null === (e = this.root) || void 0 === e
              ? void 0
              : e.rootOperation
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'viewport', {
          get: function () {
            var e, t
            return null ===
              (t =
                null === (e = this.operation) || void 0 === e
                  ? void 0
                  : e.workspace) || void 0 === t
              ? void 0
              : t.viewport
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'outline', {
          get: function () {
            var e, t
            return null ===
              (t =
                null === (e = this.operation) || void 0 === e
                  ? void 0
                  : e.workspace) || void 0 === t
              ? void 0
              : t.outline
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'moveLayout', {
          get: function () {
            var e
            return null === (e = this.viewport) || void 0 === e
              ? void 0
              : e.getValidNodeLayout(this)
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getElement = function (e) {
          var t
          return (
            void 0 === e && (e = 'viewport'),
            null === (t = this[e]) || void 0 === t
              ? void 0
              : t.findElementById(this.id)
          )
        }),
        (e.prototype.getValidElement = function (e) {
          var t
          return (
            void 0 === e && (e = 'viewport'),
            null === (t = this[e]) || void 0 === t
              ? void 0
              : t.getValidNodeElement(this)
          )
        }),
        (e.prototype.getElementRect = function (e) {
          var t
          return (
            void 0 === e && (e = 'viewport'),
            null === (t = this[e]) || void 0 === t
              ? void 0
              : t.getElementRect(this.getElement(e))
          )
        }),
        (e.prototype.getValidElementRect = function (e) {
          var t
          return (
            void 0 === e && (e = 'viewport'),
            null === (t = this[e]) || void 0 === t
              ? void 0
              : t.getValidNodeRect(this)
          )
        }),
        (e.prototype.getElementOffsetRect = function (e) {
          var t
          return (
            void 0 === e && (e = 'viewport'),
            null === (t = this[e]) || void 0 === t
              ? void 0
              : t.getElementOffsetRect(this.getElement(e))
          )
        }),
        (e.prototype.getValidElementOffsetRect = function (e) {
          var t
          return (
            void 0 === e && (e = 'viewport'),
            null === (t = this[e]) || void 0 === t
              ? void 0
              : t.getValidNodeOffsetRect(this)
          )
        }),
        (e.prototype.getPrevious = function (e) {
          return void 0 === e && (e = 1), this.parent.children[this.index - e]
        }),
        (e.prototype.getAfter = function (e) {
          return void 0 === e && (e = 1), this.parent.children[this.index + e]
        }),
        (e.prototype.getSibling = function (e) {
          return void 0 === e && (e = 0), this.parent.children[e]
        }),
        (e.prototype.getParents = function (e) {
          var t = e || this
          return (null == t ? void 0 : t.parent)
            ? [t.parent].concat(this.getParents(t.parent))
            : []
        }),
        (e.prototype.getParentByDepth = function (e) {
          void 0 === e && (e = 0)
          var t = this.parent
          return (null == t ? void 0 : t.depth) === e
            ? t
            : null == t
            ? void 0
            : t.getParentByDepth(e)
        }),
        (e.prototype.getMessage = function (e) {
          return Je.getDesignerMessage(e, this.designerLocales)
        }),
        (e.prototype.isMyAncestor = function (e) {
          return e !== this && this.parent !== e && e.contains(this)
        }),
        (e.prototype.isMyParent = function (e) {
          return this.parent === e
        }),
        (e.prototype.isMyParents = function (e) {
          return e !== this && (this.isMyParent(e) || this.isMyAncestor(e))
        }),
        (e.prototype.isMyChild = function (e) {
          return e.isMyParent(this)
        }),
        (e.prototype.isMyChildren = function (e) {
          return e.isMyParents(this)
        }),
        (e.prototype.takeSnapshot = function (e) {
          var t
          null === (t = this.operation) || void 0 === t || t.snapshot(e)
        }),
        (e.prototype.triggerMutation = function (e, t, n) {
          if (this.operation) {
            var r = this.operation.dispatch(e, t) || n
            return this.takeSnapshot(null == e ? void 0 : e.type), r
          }
          if (Designable.Shared.isFn(t)) return t()
        }),
        (e.prototype.find = function (e) {
          if (e(this)) return this
          var t = void 0
          return (
            this.eachChildren(function (n) {
              if (e(n)) return (t = n), !1
            }),
            t
          )
        }),
        (e.prototype.findAll = function (e) {
          var t = []
          return (
            e(this) && t.push(this),
            this.eachChildren(function (n) {
              e(n) && t.push(n)
            }),
            t
          )
        }),
        (e.prototype.distanceTo = function (e) {
          return this.root !== e.root || this.parent !== e.parent
            ? 1 / 0
            : Math.abs(this.index - e.index)
        }),
        (e.prototype.crossSiblings = function (e) {
          if (this.parent !== e.parent) return []
          for (
            var t = Math.min(this.index, e.index),
              n = Math.max(this.index, e.index),
              r = [],
              i = t + 1;
            i < n;
            i++
          )
            r.push(this.parent.children[i])
          return r
        }),
        (e.prototype.allowSibling = function (e) {
          var t, n, r
          return (
            !1 !==
              (null ===
                (n =
                  null === (t = this.designerProps) || void 0 === t
                    ? void 0
                    : t.allowSiblings) || void 0 === n
                ? void 0
                : n.call(t, this, e)) &&
            (null === (r = this.parent) || void 0 === r
              ? void 0
              : r.allowAppend(e))
          )
        }),
        (e.prototype.allowDrop = function (e) {
          return (
            !Designable.Shared.isFn(this.designerProps.allowDrop) ||
            this.designerProps.allowDrop(e)
          )
        }),
        (e.prototype.allowAppend = function (e) {
          var t,
            n,
            r,
            i = this
          return (
            !!(null === (t = this.designerProps) || void 0 === t
              ? void 0
              : t.droppable) &&
            !1 !==
              (null ===
                (r =
                  null === (n = this.designerProps) || void 0 === n
                    ? void 0
                    : n.allowAppend) || void 0 === r
                ? void 0
                : r.call(n, this, e)) &&
            !e.some(function (e) {
              return !e.allowDrop(i)
            }) &&
            (this.root, !0)
          )
        }),
        (e.prototype.allowClone = function () {
          var e
          return (
            this !== this.root &&
            (null === (e = this.designerProps.cloneable) || void 0 === e || e)
          )
        }),
        (e.prototype.allowDrag = function () {
          var e
          return (
            !(this === this.root && !this.isSourceNode) &&
            (null === (e = this.designerProps.draggable) || void 0 === e || e)
          )
        }),
        (e.prototype.allowResize = function () {
          if (this === this.root && !this.isSourceNode) return !1
          var e = this.designerProps.resizable
          return (
            !!e && (e.width && e.height ? ['x', 'y'] : e.width ? ['x'] : ['y'])
          )
        }),
        (e.prototype.allowRotate = function () {}),
        (e.prototype.allowRound = function () {}),
        (e.prototype.allowScale = function () {}),
        (e.prototype.allowTranslate = function () {
          if (this === this.root && !this.isSourceNode) return !1
          var e = this.designerProps.translatable
          return !(!(null == e ? void 0 : e.x) || !(null == e ? void 0 : e.y))
        }),
        (e.prototype.allowDelete = function () {
          var e
          return (
            this !== this.root &&
            (null === (e = this.designerProps.deletable) || void 0 === e || e)
          )
        }),
        (e.prototype.findById = function (e) {
          var t
          if (e)
            return this.id === e
              ? this
              : (null === (t = this.children) || void 0 === t
                  ? void 0
                  : t.length) > 0
              ? Qe.get(e)
              : void 0
        }),
        (e.prototype.contains = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n]
          return t.every(function (t) {
            return (
              t === e ||
              (null == t ? void 0 : t.parent) === e ||
              (null == t ? void 0 : t.getParentByDepth(e.depth)) === e
            )
          })
        }),
        (e.prototype.eachTree = function (e) {
          var t
          Designable.Shared.isFn(e) &&
            (e(this.root),
            null === (t = this.root) || void 0 === t || t.eachChildren(e))
        }),
        (e.prototype.eachChildren = function (e) {
          if (Designable.Shared.isFn(e))
            for (var t = 0; t < this.children.length; t++) {
              var n = this.children[t]
              if (!1 === e(n)) return
              n.eachChildren(e)
            }
        }),
        (e.prototype.resetNodesParent = function (e, t) {
          var n = this
          return nt(
            e.filter(function (e) {
              return e !== n
            }),
            t
          )
        }),
        (e.prototype.setProps = function (e) {
          var t = this
          return this.triggerMutation(
            new O({ target: this, source: null }),
            function () {
              Object.assign(t.props, e)
            }
          )
        }),
        (e.prototype.setComponentName = function (e) {
          this.componentName = e
        }),
        (e.prototype.prepend = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n]
          if (
            t.some(function (t) {
              return t.contains(e)
            })
          )
            return []
          var r = t.map(function (e) {
              return e.parent
            }),
            i = this.resetNodesParent(t, this)
          return i.length
            ? this.triggerMutation(
                new C({ originSourceParents: r, target: this, source: i }),
                function () {
                  return (e.children = i.concat(e.children)), i
                },
                []
              )
            : []
        }),
        (e.prototype.append = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n]
          if (
            t.some(function (t) {
              return t.contains(e)
            })
          )
            return []
          var r = t.map(function (e) {
              return e.parent
            }),
            i = this.resetNodesParent(t, this)
          return i.length
            ? this.triggerMutation(
                new I({ originSourceParents: r, target: this, source: i }),
                function () {
                  return (e.children = e.children.concat(i)), i
                },
                []
              )
            : []
        }),
        (e.prototype.wrap = function (e) {
          var t = this
          if (e !== this) {
            var n = this.parent
            return this.triggerMutation(
              new x({ target: this, source: e }),
              function () {
                return rt(t, e), rt(e, n), e
              }
            )
          }
        }),
        (e.prototype.insertAfter = function () {
          for (var e, t = this, n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r]
          var i = this.parent
          if (
            n.some(function (e) {
              return e.contains(t)
            })
          )
            return []
          if (
            null === (e = null == i ? void 0 : i.children) || void 0 === e
              ? void 0
              : e.length
          ) {
            var o = n.map(function (e) {
                return e.parent
              }),
              s = this.resetNodesParent(n, i)
            return s.length
              ? this.triggerMutation(
                  new R({ originSourceParents: o, target: this, source: s }),
                  function () {
                    return (
                      (i.children = i.children.reduce(function (e, n) {
                        return n === t ? e.concat([n]).concat(s) : e.concat([n])
                      }, [])),
                      s
                    )
                  },
                  []
                )
              : []
          }
          return []
        }),
        (e.prototype.insertBefore = function () {
          for (var e, t = this, n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r]
          var i = this.parent
          if (
            n.some(function (e) {
              return e.contains(t)
            })
          )
            return []
          if (
            null === (e = null == i ? void 0 : i.children) || void 0 === e
              ? void 0
              : e.length
          ) {
            var o = n.map(function (e) {
                return e.parent
              }),
              s = this.resetNodesParent(n, i)
            return s.length
              ? this.triggerMutation(
                  new E({ originSourceParents: o, target: this, source: s }),
                  function () {
                    return (
                      (i.children = i.children.reduce(function (e, n) {
                        return n === t ? e.concat(s).concat([n]) : e.concat([n])
                      }, [])),
                      s
                    )
                  },
                  []
                )
              : []
          }
          return []
        }),
        (e.prototype.insertChildren = function (e) {
          for (var t, n = this, r = [], i = 1; i < arguments.length; i++)
            r[i - 1] = arguments[i]
          if (
            r.some(function (e) {
              return e.contains(n)
            })
          )
            return []
          if (
            null === (t = this.children) || void 0 === t ? void 0 : t.length
          ) {
            var o = r.map(function (e) {
                return e.parent
              }),
              s = this.resetNodesParent(r, this)
            return s.length
              ? this.triggerMutation(
                  new D({ originSourceParents: o, target: this, source: s }),
                  function () {
                    return (
                      (n.children = n.children.reduce(function (t, n, r) {
                        return r === e ? t.concat(s).concat([n]) : t.concat([n])
                      }, [])),
                      s
                    )
                  },
                  []
                )
              : []
          }
          return []
        }),
        (e.prototype.setChildren = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n]
          var r = t.map(function (e) {
              return e.parent
            }),
            i = this.resetNodesParent(t, this)
          return this.triggerMutation(
            new T({ originSourceParents: r, target: this, source: i }),
            function () {
              return (e.children = i), i
            },
            []
          )
        }),
        (e.prototype.setNodeChildren = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return this.setChildren.apply(this, s([], o(e), !1))
        }),
        (e.prototype.remove = function () {
          var e = this
          return this.triggerMutation(
            new N({ target: this, source: null }),
            function () {
              tt(e), Qe.delete(e.id)
            }
          )
        }),
        (e.prototype.clone = function (t) {
          var n = new e(
            {
              id: Designable.Shared.uid(),
              componentName: this.componentName,
              sourceName: this.sourceName,
              props: Formily.Reactive.toJS(this.props),
              children: [],
            },
            t || this.parent
          )
          return (
            (n.children = nt(
              this.children.map(function (e) {
                return e.clone(n)
              }),
              n
            )),
            this.triggerMutation(
              new A({ target: this, source: n }),
              function () {
                return n
              }
            )
          )
        }),
        (e.prototype.from = function (t) {
          var n = this
          if (t)
            return this.triggerMutation(
              new F({ target: this, source: t }),
              function () {
                var r, i, o
                t.id &&
                  t.id !== n.id &&
                  (Qe.delete(n.id), Qe.set(t.id, n), (n.id = t.id)),
                  t.componentName && (n.componentName = t.componentName),
                  (n.props = null !== (r = t.props) && void 0 !== r ? r : {}),
                  t.hidden && (n.hidden = t.hidden),
                  t.children &&
                    (n.children =
                      (null ===
                        (o =
                          null === (i = t.children) || void 0 === i
                            ? void 0
                            : i.map) || void 0 === o
                        ? void 0
                        : o.call(i, function (t) {
                            return new e(t, n)
                          })) || [])
              }
            )
        }),
        (e.prototype.serialize = function () {
          return {
            id: this.id,
            componentName: this.componentName,
            sourceName: this.sourceName,
            props: Formily.Reactive.toJS(this.props),
            hidden: this.hidden,
            children: this.children.map(function (e) {
              return e.serialize()
            }),
          }
        }),
        (e.create = function (t, n) {
          return new e(t, n)
        }),
        (e.findById = function (e) {
          return Qe.get(e)
        }),
        (e.remove = function (e) {
          var t, n
          void 0 === e && (e = [])
          for (var r = e.length - 1; r >= 0; r--) {
            var i = e[r]
            if (i.allowDelete()) {
              var o = i.previous,
                s = i.next
              i.remove(),
                null === (t = i.operation) ||
                  void 0 === t ||
                  t.selection.select(o || s || i.parent),
                null === (n = i.operation) || void 0 === n || n.hover.clear()
            }
          }
        }),
        (e.sort = function (e) {
          return (
            void 0 === e && (e = []),
            e.sort(function (e, t) {
              return e.depth !== t.depth ? 0 : e.index - t.index >= 0 ? 1 : -1
            })
          )
        }),
        (e.clone = function (t) {
          void 0 === t && (t = [])
          var n = {},
            r = {},
            i = e.sort(t).filter(function (e) {
              return !t.some(function (t) {
                return e.isMyParents(t)
              })
            })
          Designable.Shared.each(i, function (e) {
            var t, i, o, s, a, c, l
            e !== e.root &&
              e.allowClone() &&
              (null == e ? void 0 : e.operation) &&
              ((n[
                null === (t = null == e ? void 0 : e.parent) || void 0 === t
                  ? void 0
                  : t.id
              ] =
                n[
                  null === (i = null == e ? void 0 : e.parent) || void 0 === i
                    ? void 0
                    : i.id
                ] || []),
              n[
                null === (o = null == e ? void 0 : e.parent) || void 0 === o
                  ? void 0
                  : o.id
              ].push(e),
              r[
                null === (s = null == e ? void 0 : e.parent) || void 0 === s
                  ? void 0
                  : s.id
              ]
                ? e.index >
                    r[
                      null === (a = null == e ? void 0 : e.parent) ||
                      void 0 === a
                        ? void 0
                        : a.id
                    ].index &&
                  (r[
                    null === (c = null == e ? void 0 : e.parent) || void 0 === c
                      ? void 0
                      : c.id
                  ] = e)
                : (r[
                    null === (l = null == e ? void 0 : e.parent) || void 0 === l
                      ? void 0
                      : l.id
                  ] = e))
          })
          var a = new Map()
          Designable.Shared.each(n, function (e, t) {
            var n = r[t]
            Designable.Shared.each(e, function (e) {
              var t,
                r,
                i = e.clone()
              if (i)
                if (
                  (null === (t = e.operation) || void 0 === t
                    ? void 0
                    : t.selection.has(e)) &&
                  n.parent.allowAppend([i])
                )
                  n.insertAfter(i), (n = n.next)
                else if (1 === e.operation.selection.length) {
                  var o =
                      null === (r = e.operation) || void 0 === r
                        ? void 0
                        : r.tree.findById(e.operation.selection.first),
                    s = a.get(o)
                  s || ((s = []), a.set(o, s)),
                    o && o.allowAppend([i]) && s.push(i)
                }
            })
          }),
            a.forEach(function (e, t) {
              e.length && t.append.apply(t, s([], o(e), !1))
            })
        }),
        (e.filterResizable = function (e) {
          return (
            void 0 === e && (e = []),
            e.filter(function (e) {
              return e.allowResize()
            })
          )
        }),
        (e.filterRotatable = function (e) {
          return (
            void 0 === e && (e = []),
            e.filter(function (e) {
              return e.allowRotate()
            })
          )
        }),
        (e.filterScalable = function (e) {
          return (
            void 0 === e && (e = []),
            e.filter(function (e) {
              return e.allowScale()
            })
          )
        }),
        (e.filterRoundable = function (e) {
          return (
            void 0 === e && (e = []),
            e.filter(function (e) {
              return e.allowRound()
            })
          )
        }),
        (e.filterTranslatable = function (e) {
          return (
            void 0 === e && (e = []),
            e.filter(function (e) {
              return e.allowTranslate()
            })
          )
        }),
        (e.filterDraggable = function (e) {
          return (
            void 0 === e && (e = []),
            e.reduce(function (e, t) {
              var n
              if (!t.allowDrag()) return e
              if (
                Designable.Shared.isFn(
                  null === (n = null == t ? void 0 : t.designerProps) ||
                    void 0 === n
                    ? void 0
                    : n.getDragNodes
                )
              ) {
                var r = t.designerProps.getDragNodes(t)
                return r ? e.concat(r) : e
              }
              return '$$ResourceNode$$' === t.componentName
                ? e.concat(t.children)
                : e.concat([t])
            }, [])
          )
        }),
        (e.filterDroppable = function (e, t) {
          return (
            void 0 === e && (e = []),
            e.reduce(function (e, n) {
              var r
              if (!n.allowDrop(t)) return e
              if (
                Designable.Shared.isFn(
                  null === (r = n.designerProps) || void 0 === r
                    ? void 0
                    : r.getDropNodes
                )
              ) {
                var i = n.isSourceNode ? n.clone(n.parent) : n,
                  o = n.designerProps.getDropNodes(i, t)
                return o ? e.concat(o) : e
              }
              return '$$ResourceNode$$' === n.componentName
                ? e.concat(n.children)
                : e.concat([n])
            }, [])
          )
        }),
        e
      )
    })(),
    ot = (function () {
      function e(e) {
        var t, n
        ;(this.scrollX = 0),
          (this.scrollY = 0),
          (this.width = 0),
          (this.height = 0),
          (this.mounted = !1),
          (this.nodeElementsStore = {}),
          (this.workspace = e.workspace),
          (this.engine = e.engine),
          (this.moveSensitive =
            null !== (t = e.moveSensitive) && void 0 !== t && t),
          (this.moveInsertionType =
            null !== (n = e.moveInsertionType) && void 0 !== n ? n : 'all'),
          (this.viewportElement = e.viewportElement),
          (this.contentWindow = e.contentWindow),
          (this.nodeIdAttrName = e.nodeIdAttrName),
          this.digestViewport(),
          this.makeObservable(),
          this.attachEvents()
      }
      return (
        Object.defineProperty(e.prototype, 'isScrollLeft', {
          get: function () {
            return 0 === this.scrollX
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'isScrollTop', {
          get: function () {
            return 0 === this.scrollY
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'isScrollRight', {
          get: function () {
            var e, t, n
            return this.isIframe
              ? this.width + this.contentWindow.scrollX >=
                  (null ===
                    (n =
                      null ===
                        (t =
                          null === (e = this.contentWindow) || void 0 === e
                            ? void 0
                            : e.document) || void 0 === t
                        ? void 0
                        : t.body) || void 0 === n
                    ? void 0
                    : n.scrollWidth)
              : this.viewportElement
              ? this.viewportElement.offsetWidth + this.scrollX >=
                this.viewportElement.scrollWidth
              : void 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'isScrollBottom', {
          get: function () {
            var e, t
            return this.isIframe
              ? !!(null ===
                  (t =
                    null === (e = this.contentWindow) || void 0 === e
                      ? void 0
                      : e.document) || void 0 === t
                  ? void 0
                  : t.body) &&
                  this.height + this.contentWindow.scrollY >=
                    this.contentWindow.document.body.scrollHeight
              : this.viewportElement
              ? !!this.viewportElement &&
                this.viewportElement.offsetHeight +
                  this.viewportElement.scrollTop >=
                  this.viewportElement.scrollHeight
              : void 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'viewportRoot', {
          get: function () {
            var e, t
            return this.isIframe
              ? null ===
                  (t =
                    null === (e = this.contentWindow) || void 0 === e
                      ? void 0
                      : e.document) || void 0 === t
                ? void 0
                : t.body
              : this.viewportElement
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'isMaster', {
          get: function () {
            return this.contentWindow === Designable.Shared.globalThisPolyfill
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'isIframe', {
          get: function () {
            var e
            return (
              !!(null === (e = this.contentWindow) || void 0 === e
                ? void 0
                : e.frameElement) && !this.isMaster
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'scrollContainer', {
          get: function () {
            return this.isIframe ? this.contentWindow : this.viewportElement
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'rect', {
          get: function () {
            var e = this.viewportElement
            if (e) return e.getBoundingClientRect()
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'innerRect', {
          get: function () {
            var e = this.rect
            return new Designable.Shared.Rect(
              0,
              0,
              null == e ? void 0 : e.width,
              null == e ? void 0 : e.height
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'offsetX', {
          get: function () {
            var e = this.rect
            return e ? e.x : 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'offsetY', {
          get: function () {
            var e = this.rect
            return e ? e.y : 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'scale', {
          get: function () {
            if (!this.viewportElement) return 1
            var e = this.viewportElement.getBoundingClientRect(),
              t = this.viewportElement.offsetWidth
            return e.width && t ? Math.round(e.width / t) : 1
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'dragScrollXDelta', {
          get: function () {
            return this.scrollX - this.dragStartSnapshot.scrollX
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'dragScrollYDelta', {
          get: function () {
            return this.scrollY - this.dragStartSnapshot.scrollY
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.cacheElements = function () {
          var e,
            t = this
          ;(this.nodeElementsStore = {}),
            null === (e = this.viewportRoot) ||
              void 0 === e ||
              e
                .querySelectorAll('*['.concat(this.nodeIdAttrName, ']'))
                .forEach(function (e) {
                  var n = e.getAttribute(t.nodeIdAttrName)
                  ;(t.nodeElementsStore[n] = t.nodeElementsStore[n] || []),
                    t.nodeElementsStore[n].push(e)
                })
        }),
        (e.prototype.clearCache = function () {
          this.nodeElementsStore = {}
        }),
        (e.prototype.getCurrentData = function () {
          var e,
            t,
            n,
            r,
            i,
            o,
            s,
            a,
            c = {}
          return (
            this.isIframe
              ? ((c.scrollX =
                  (null === (e = this.contentWindow) || void 0 === e
                    ? void 0
                    : e.scrollX) || 0),
                (c.scrollY =
                  (null === (t = this.contentWindow) || void 0 === t
                    ? void 0
                    : t.scrollY) || 0),
                (c.width =
                  (null === (n = this.contentWindow) || void 0 === n
                    ? void 0
                    : n.innerWidth) || 0),
                (c.height =
                  (null === (r = this.contentWindow) || void 0 === r
                    ? void 0
                    : r.innerHeight) || 0))
              : this.viewportElement &&
                ((c.scrollX =
                  (null === (i = this.viewportElement) || void 0 === i
                    ? void 0
                    : i.scrollLeft) || 0),
                (c.scrollY =
                  (null === (o = this.viewportElement) || void 0 === o
                    ? void 0
                    : o.scrollTop) || 0),
                (c.width =
                  (null === (s = this.viewportElement) || void 0 === s
                    ? void 0
                    : s.clientWidth) || 0),
                (c.height =
                  (null === (a = this.viewportElement) || void 0 === a
                    ? void 0
                    : a.clientHeight) || 0)),
            c
          )
        }),
        (e.prototype.takeDragStartSnapshot = function () {
          this.dragStartSnapshot = this.getCurrentData()
        }),
        (e.prototype.digestViewport = function () {
          Object.assign(this, this.getCurrentData())
        }),
        (e.prototype.elementFromPoint = function (e) {
          var t
          if (
            null === (t = this.contentWindow) || void 0 === t
              ? void 0
              : t.document
          )
            return this.contentWindow.document.elementFromPoint(e.x, e.y)
        }),
        (e.prototype.matchViewport = function (e) {
          var t
          return this.isIframe
            ? e === this.viewportElement ||
                e === this.contentWindow ||
                e ===
                  (null === (t = this.contentWindow) || void 0 === t
                    ? void 0
                    : t.document)
            : e === this.viewportElement
        }),
        (e.prototype.attachEvents = function () {
          var e = this,
            t = this.engine
          Designable.Shared.cancelIdle(this.attachRequest),
            (this.attachRequest = Designable.Shared.requestIdle(function () {
              t &&
                (e.isIframe
                  ? e.workspace.attachEvents(e.contentWindow, e.contentWindow)
                  : Designable.Shared.isHTMLElement(e.viewportElement) &&
                    e.workspace.attachEvents(
                      e.viewportElement,
                      e.contentWindow
                    ))
            }))
        }),
        (e.prototype.detachEvents = function () {
          this.isIframe
            ? (this.workspace.detachEvents(this.contentWindow),
              this.workspace.detachEvents(this.viewportElement))
            : this.viewportElement &&
              this.workspace.detachEvents(this.viewportElement)
        }),
        (e.prototype.onMount = function (e, t) {
          ;(this.mounted = !0),
            (this.viewportElement = e),
            (this.contentWindow = t),
            this.attachEvents(),
            this.digestViewport()
        }),
        (e.prototype.onUnmount = function () {
          ;(this.mounted = !1), this.detachEvents()
        }),
        (e.prototype.isPointInViewport = function (e, t) {
          return (
            !!this.rect &&
            !!this.containsElement(document.elementFromPoint(e.x, e.y)) &&
            Designable.Shared.isPointInRect(e, this.rect, t)
          )
        }),
        (e.prototype.isRectInViewport = function (e) {
          return (
            !!this.rect &&
            !!this.containsElement(document.elementFromPoint(e.x, e.y)) &&
            Designable.Shared.isRectInRect(e, this.rect)
          )
        }),
        (e.prototype.isPointInViewportArea = function (e, t) {
          return !!this.rect && Designable.Shared.isPointInRect(e, this.rect, t)
        }),
        (e.prototype.isOffsetPointInViewport = function (e, t) {
          return (
            !!this.innerRect &&
            !!this.containsElement(document.elementFromPoint(e.x, e.y)) &&
            Designable.Shared.isPointInRect(e, this.innerRect, t)
          )
        }),
        (e.prototype.isOffsetRectInViewport = function (e) {
          return (
            !!this.innerRect &&
            !!this.containsElement(document.elementFromPoint(e.x, e.y)) &&
            Designable.Shared.isRectInRect(e, this.innerRect)
          )
        }),
        (e.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            scrollX: Formily.Reactive.observable.ref,
            scrollY: Formily.Reactive.observable.ref,
            width: Formily.Reactive.observable.ref,
            height: Formily.Reactive.observable.ref,
            digestViewport: Formily.Reactive.action,
            viewportElement: Formily.Reactive.observable.ref,
            contentWindow: Formily.Reactive.observable.ref,
          })
        }),
        (e.prototype.findElementById = function (e) {
          var t
          if (e)
            return this.nodeElementsStore[e]
              ? this.nodeElementsStore[e][0]
              : null === (t = this.viewportRoot) || void 0 === t
              ? void 0
              : t.querySelector(
                  '*['.concat(this.nodeIdAttrName, "='").concat(e, "']")
                )
        }),
        (e.prototype.findElementsById = function (e) {
          var t, n
          return e
            ? this.nodeElementsStore[e]
              ? this.nodeElementsStore[e]
              : Array.from(
                  null !==
                    (n =
                      null === (t = this.viewportRoot) || void 0 === t
                        ? void 0
                        : t.querySelectorAll(
                            '*['
                              .concat(this.nodeIdAttrName, "='")
                              .concat(e, "']")
                          )) && void 0 !== n
                    ? n
                    : []
                )
            : []
        }),
        (e.prototype.containsElement = function (e) {
          var t = this.viewportElement
          return t === e || (null == t ? void 0 : t.contains(e))
        }),
        (e.prototype.getOffsetPoint = function (e) {
          var t = this.getCurrentData()
          return {
            x: e.x - this.offsetX + t.scrollX,
            y: e.y - this.offsetY + t.scrollY,
          }
        }),
        (e.prototype.getElementRect = function (e) {
          var t = e.getBoundingClientRect(),
            n = e.offsetWidth ? e.offsetWidth : t.width,
            r = e.offsetHeight ? e.offsetHeight : t.height
          return new Designable.Shared.Rect(
            t.x,
            t.y,
            1 !== this.scale ? n : t.width,
            1 !== this.scale ? r : t.height
          )
        }),
        (e.prototype.getElementRectById = function (e) {
          var t = this,
            n = this.findElementsById(e),
            r = Designable.Shared.calcBoundingRect(
              n.map(function (e) {
                return t.getElementRect(e)
              })
            )
          if (r)
            return this.isIframe
              ? new Designable.Shared.Rect(
                  r.x + this.offsetX,
                  r.y + this.offsetY,
                  r.width,
                  r.height
                )
              : new Designable.Shared.Rect(r.x, r.y, r.width, r.height)
        }),
        (e.prototype.getElementOffsetRect = function (e) {
          var t = e.getBoundingClientRect()
          if (t)
            return this.isIframe
              ? new Designable.Shared.Rect(
                  t.x + this.contentWindow.scrollX,
                  t.y + this.contentWindow.scrollY,
                  t.width,
                  t.height
                )
              : new Designable.Shared.Rect(
                  (t.x - this.offsetX + this.viewportElement.scrollLeft) /
                    this.scale,
                  (t.y - this.offsetY + this.viewportElement.scrollTop) /
                    this.scale,
                  t.width,
                  t.height
                )
        }),
        (e.prototype.getElementOffsetRectById = function (e) {
          var t = this,
            n = this.findElementsById(e)
          if (n.length) {
            var r = Designable.Shared.calcBoundingRect(
              n.map(function (e) {
                return t.getElementRect(e)
              })
            )
            return r
              ? this.isIframe
                ? new Designable.Shared.Rect(
                    r.x + this.contentWindow.scrollX,
                    r.y + this.contentWindow.scrollY,
                    r.width,
                    r.height
                  )
                : new Designable.Shared.Rect(
                    (r.x - this.offsetX + this.viewportElement.scrollLeft) /
                      this.scale,
                    (r.y - this.offsetY + this.viewportElement.scrollTop) /
                      this.scale,
                    r.width,
                    r.height
                  )
              : void 0
          }
        }),
        (e.prototype.getValidNodeElement = function (e) {
          var t = this,
            n = function (e) {
              if (e) {
                var r = t.findElementById(e.id)
                return r || n(e.parent)
              }
            }
          return n(e)
        }),
        (e.prototype.getChildrenRect = function (e) {
          var t,
            n = this
          if (
            null === (t = null == e ? void 0 : e.children) || void 0 === t
              ? void 0
              : t.length
          )
            return Designable.Shared.calcBoundingRect(
              e.children.reduce(function (e, t) {
                var r = n.getValidNodeRect(t)
                return r ? e.concat(r) : e
              }, [])
            )
        }),
        (e.prototype.getChildrenOffsetRect = function (e) {
          var t,
            n = this
          if (
            null === (t = null == e ? void 0 : e.children) || void 0 === t
              ? void 0
              : t.length
          )
            return Designable.Shared.calcBoundingRect(
              e.children.reduce(function (e, t) {
                var r = n.getValidNodeOffsetRect(t)
                return r ? e.concat(r) : e
              }, [])
            )
        }),
        (e.prototype.getValidNodeRect = function (e) {
          if (e) {
            var t = this.getElementRectById(e.id)
            return e && e === e.root && e.isInOperation
              ? t
                ? Designable.Shared.calcBoundingRect([this.rect, t])
                : this.rect
              : t || this.getChildrenRect(e)
          }
        }),
        (e.prototype.getValidNodeOffsetRect = function (e) {
          if (e) {
            var t = this.getElementOffsetRectById(e.id)
            return e && e === e.root && e.isInOperation
              ? t
                ? Designable.Shared.calcBoundingRect([this.innerRect, t])
                : this.innerRect
              : t || this.getChildrenOffsetRect(e)
          }
        }),
        (e.prototype.getValidNodeLayout = function (e) {
          var t, n
          return e
            ? (
                null ===
                  (n =
                    null === (t = e.parent) || void 0 === t
                      ? void 0
                      : t.designerProps) || void 0 === n
                  ? void 0
                  : n.inlineChildrenLayout
              )
              ? 'horizontal'
              : Designable.Shared.calcElementLayout(this.findElementById(e.id))
            : 'vertical'
        }),
        e
      )
    })(),
    st = (function () {
      function e(e) {
        ;(this.selected = []),
          (this.indexes = {}),
          e.selected && (this.selected = e.selected),
          e.operation && (this.operation = e.operation),
          this.makeObservable()
      }
      return (
        (e.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            selected: Formily.Reactive.observable,
            select: Formily.Reactive.action,
            batchSelect: Formily.Reactive.action,
            add: Formily.Reactive.action,
            remove: Formily.Reactive.action,
            clear: Formily.Reactive.action,
            crossAddTo: Formily.Reactive.action,
          })
        }),
        (e.prototype.trigger = function (e) {
          return (
            void 0 === e && (e = P),
            this.operation.dispatch(
              new e({ target: this.operation.tree, source: this.selectedNodes })
            )
          )
        }),
        (e.prototype.select = function (e) {
          var t
          if (Designable.Shared.isStr(e)) {
            if (1 === this.selected.length && this.selected.includes(e))
              return void this.trigger(P)
            ;(this.selected = [e]),
              (this.indexes = (((t = {})[e] = !0), t)),
              this.trigger(P)
          } else this.select(null == e ? void 0 : e.id)
        }),
        (e.prototype.safeSelect = function (e) {
          e && this.select(e)
        }),
        (e.prototype.mapIds = function (e) {
          return Designable.Shared.isArr(e)
            ? e.map(function (e) {
                return Designable.Shared.isStr(e)
                  ? e
                  : null == e
                  ? void 0
                  : e.id
              })
            : []
        }),
        (e.prototype.batchSelect = function (e) {
          ;(this.selected = this.mapIds(e)),
            (this.indexes = this.selected.reduce(function (e, t) {
              return (e[t] = !0), e
            }, {})),
            this.trigger(P)
        }),
        (e.prototype.batchSafeSelect = function (e) {
          ;(null == e ? void 0 : e.length) && this.batchSelect(e)
        }),
        Object.defineProperty(e.prototype, 'selectedNodes', {
          get: function () {
            var e = this
            return this.selected.map(function (t) {
              return e.operation.tree.findById(t)
            })
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'first', {
          get: function () {
            if (this.selected && this.selected.length) return this.selected[0]
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'last', {
          get: function () {
            if (this.selected && this.selected.length)
              return this.selected[this.selected.length - 1]
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'length', {
          get: function () {
            return this.selected.length
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.add = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n]
          this.mapIds(t).forEach(function (t) {
            Designable.Shared.isStr(t)
              ? e.selected.includes(t) ||
                (e.selected.push(t), (e.indexes[t] = !0))
              : e.add(null == t ? void 0 : t.id)
          }),
            this.trigger()
        }),
        (e.prototype.crossAddTo = function (e) {
          var t = this
          if (e.parent) {
            var n = this.selectedNodes
            if (this.has(e)) this.remove(e)
            else {
              var r = n.reduce(function (t, n) {
                return n.distanceTo(e) < t.distanceTo(e) ? n : t
              }, n[0])
              if (r)
                e.crossSiblings(r).forEach(function (e) {
                  t.has(e.id) || (t.selected.push(e.id), (t.indexes[e.id] = !0))
                })
              this.has(e.id) ||
                (this.selected.push(e.id), (this.indexes[e.id] = !0))
            }
          }
        }),
        (e.prototype.remove = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n]
          this.mapIds(t).forEach(function (t) {
            Designable.Shared.isStr(t)
              ? ((e.selected = e.selected.filter(function (e) {
                  return e !== t
                })),
                delete e.indexes[t])
              : e.remove(null == t ? void 0 : t.id)
          }),
            this.trigger(k)
        }),
        (e.prototype.has = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n]
          return this.mapIds(t).some(function (t) {
            return Designable.Shared.isStr(t)
              ? e.indexes[t]
              : !!(null == t ? void 0 : t.id) &&
                  e.has(null == t ? void 0 : t.id)
          })
        }),
        (e.prototype.clear = function () {
          ;(this.selected = []), (this.indexes = {}), this.trigger(k)
        }),
        e
      )
    })(),
    at = (function () {
      function e(e) {
        ;(this.node = null),
          (this.operation = null == e ? void 0 : e.operation),
          this.makeObservable()
      }
      return (
        (e.prototype.setHover = function (e) {
          ;(this.node = e || null), this.trigger()
        }),
        (e.prototype.clear = function () {
          this.node = null
        }),
        (e.prototype.trigger = function () {
          if (this.operation)
            return this.operation.dispatch(
              new S({ target: this.operation.tree, source: this.node })
            )
        }),
        (e.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            node: Formily.Reactive.observable.ref,
            setHover: Formily.Reactive.action,
            clear: Formily.Reactive.action,
          })
        }),
        e
      )
    })(),
    ct = (function () {
      function e(e, t) {
        ;(this.helper = e),
          (this.type = t.type || 'normal'),
          (this._id = t.id),
          (this.refer = t.refer),
          (this.start = r({}, t.start)),
          (this.end = r({}, t.end)),
          (this.distance = t.distance)
      }
      return (
        Object.defineProperty(e.prototype, 'id', {
          get: function () {
            var e
            return null !== (e = this._id) && void 0 !== e
              ? e
              : ''
                  .concat(this.start.x, '-')
                  .concat(this.start.y, '-')
                  .concat(this.end.x, '-')
                  .concat(this.end.y)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'direction', {
          get: function () {
            var e, t
            return (null === (e = this.start) || void 0 === e
              ? void 0
              : e.x) ===
              (null === (t = this.end) || void 0 === t ? void 0 : t.x)
              ? 'v'
              : 'h'
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'closest', {
          get: function () {
            return this.distance < ft.threshold
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'rect', {
          get: function () {
            return Designable.Shared.calcRectOfAxisLineSegment(this)
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.translate = function (e, t) {
          if (e && (null == e ? void 0 : e.parent)) {
            var n = e.parent,
              r = e.getValidElementOffsetRect(),
              i = n.getValidElementOffsetRect(),
              o = Designable.Shared.calcOffsetOfSnapLineSegmentToEdge(this, r)
            'h' === this.direction
              ? (t.y = this.start.y - i.y - o.y)
              : (t.x = this.start.x - i.x - o.x)
          }
        }),
        (e.prototype.resize = function (e, t) {
          if (e && (null == e ? void 0 : e.parent)) {
            var n = e.parent,
              r = e.getValidElementOffsetRect(),
              i = n.getValidElementOffsetRect(),
              o = Designable.Shared.calcOffsetOfSnapLineSegmentToEdge(this, r),
              s = this.helper.cursorDragNodesRect,
              a = this.snapEdge(t)
            if ('h' === this.direction) {
              var c = this.start.y - i.y - o.y
              switch (this.helper.direction) {
                case 'left-top':
                case 'center-top':
                case 'right-top':
                  if ('ht' !== a) return
                  ;(t.y = c), (t.height = s.bottom - c)
                  break
                case 'left-bottom':
                case 'center-bottom':
                case 'right-bottom':
                  if ('hb' !== a) return
                  t.height = this.start.y - s.top
              }
            } else {
              var l = this.start.x - i.x - o.x
              switch (this.helper.direction) {
                case 'left-top':
                case 'left-bottom':
                case 'left-center':
                  if ('vl' !== a) return
                  ;(t.x = l), (t.width = s.right - l)
                  break
                case 'right-center':
                case 'right-top':
                case 'right-bottom':
                  if ('vr' !== a) return
                  t.width = this.start.x - s.left
              }
            }
          }
        }),
        (e.prototype.snapEdge = function (e) {
          var t = ft.threshold
          if ('h' === this.direction) {
            if (Math.abs(this.start.y - e.top) < t) return 'ht'
            if (Math.abs(this.start.y - (e.top + e.height / 2)) < t) return 'hc'
            if (Math.abs(this.start.y - e.bottom) < t) return 'hb'
          } else {
            if (Math.abs(this.start.x - e.left) < t) return 'vl'
            if (Math.abs(this.start.x - (e.left + e.width / 2)) < t) return 'vc'
            if (Math.abs(this.start.x - e.right) < t) return 'vr'
          }
        }),
        e
      )
    })(),
    lt = (function () {
      function e(e, t) {
        ;(this.helper = e),
          (this.distance = t.distance),
          (this.refer = t.refer),
          (this.rect = t.rect),
          (this.type = t.type)
      }
      return (
        Object.defineProperty(e.prototype, 'referRect', {
          get: function () {
            if (this.refer) return this.helper.getNodeRect(this.refer)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'id', {
          get: function () {
            var e
            return null !== (e = this._id) && void 0 !== e
              ? e
              : ''
                  .concat(this.rect.x, '-')
                  .concat(this.rect.y, '-')
                  .concat(this.rect.width, '-')
                  .concat(this.rect.height)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'next', {
          get: function () {
            return this.helper.calcAroundSpaceBlocks(this.referRect)[this.type]
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'extendsLine', {
          get: function () {
            if (this.needExtendsLine) {
              var e = this.helper.dragNodesRect
              return Designable.Shared.calcExtendsLineSegmentOfRect(
                e,
                this.referRect
              )
            }
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'needExtendsLine', {
          get: function () {
            var e = this.crossDragNodesRect,
              t = this.crossReferRect
            if ('top' === this.type || 'bottom' === this.type) {
              var n = t.right - e.left,
                r = e.right - t.left
              return n < e.width / 2 || r < e.width / 2
            }
            var i = e.bottom - t.top,
              o = t.bottom - e.top
            return i < e.height / 2 || o < e.height / 2
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'crossReferRect', {
          get: function () {
            var e = this.referRect
            return 'top' === this.type || 'bottom' === this.type
              ? new Designable.Shared.Rect(
                  e.x,
                  this.rect.y,
                  e.width,
                  this.rect.height
                )
              : new Designable.Shared.Rect(
                  this.rect.x,
                  e.y,
                  this.rect.width,
                  e.height
                )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'crossDragNodesRect', {
          get: function () {
            var e = this.helper.dragNodesRect
            return 'top' === this.type || 'bottom' === this.type
              ? new Designable.Shared.Rect(
                  e.x,
                  this.rect.y,
                  e.width,
                  this.rect.height
                )
              : new Designable.Shared.Rect(
                  this.rect.x,
                  e.y,
                  this.rect.width,
                  e.height
                )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'isometrics', {
          get: function () {
            for (var e = [], t = this; (t = t.next); )
              if (Math.abs(t.distance - this.distance) < ft.threshold) {
                if (
                  e.some(function (e) {
                    return e.distance !== t.distance
                  })
                )
                  continue
                e.push(t)
              }
            return e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'snapLine', {
          get: function () {
            if (this.isometrics.length) {
              var e,
                t = this.next.rect,
                n = this.referRect
              e =
                'top' === this.type
                  ? new Designable.Shared.LineSegment(
                      { x: t.left, y: n.bottom + t.height },
                      { x: t.right, y: n.bottom + t.height }
                    )
                  : 'bottom' === this.type
                  ? new Designable.Shared.LineSegment(
                      { x: t.left, y: n.top - t.height },
                      { x: t.right, y: n.top - t.height }
                    )
                  : 'left' === this.type
                  ? new Designable.Shared.LineSegment(
                      { x: n.right + t.width, y: t.top },
                      { x: n.right + t.width, y: t.bottom }
                    )
                  : new Designable.Shared.LineSegment(
                      { x: n.left - t.width, y: t.top },
                      { x: n.left - t.width, y: t.bottom }
                    )
              var i = Designable.Shared.calcDistanceOfSnapLineToEdges(
                e,
                this.helper.dragNodesEdgeLines
              )
              return new ct(
                this.helper,
                r(r({}, e), { distance: i, type: 'space-block' })
              )
            }
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      )
    })()
  ;(e.CursorStatus = void 0),
    ((ze = e.CursorStatus || (e.CursorStatus = {})).Normal = 'NORMAL'),
    (ze.DragStart = 'DRAG_START'),
    (ze.Dragging = 'DRAGGING'),
    (ze.DragStop = 'DRAG_STOP'),
    (e.CursorDragType = void 0),
    ((je = e.CursorDragType || (e.CursorDragType = {})).Move = 'MOVE'),
    (je.Resize = 'RESIZE'),
    (je.Rotate = 'ROTATE'),
    (je.Scale = 'SCALE'),
    (je.Translate = 'TRANSLATE'),
    (je.Round = 'ROUND'),
    (e.CursorType = void 0),
    ((Xe = e.CursorType || (e.CursorType = {})).Normal = 'NORMAL'),
    (Xe.Selection = 'SELECTION'),
    (Xe.Sketch = 'SKETCH')
  var ut,
    dt = {
      pageX: 0,
      pageY: 0,
      clientX: 0,
      clientY: 0,
      topPageX: 0,
      topPageY: 0,
      topClientX: 0,
      topClientY: 0,
    },
    ht = function (e, t) {
      return Object.keys(e || {}).reduce(function (n, r) {
        return (
          Designable.Shared.isValidNumber(null == e ? void 0 : e[r]) &&
          Designable.Shared.isValidNumber(null == t ? void 0 : t[r])
            ? (n[r] = e[r] - t[r])
            : (n[r] = e[r]),
          n
        )
      }, {})
    },
    pt = (function () {
      function t(t) {
        ;(this.type = e.CursorType.Normal),
          (this.dragType = e.CursorDragType.Move),
          (this.status = e.CursorStatus.Normal),
          (this.position = dt),
          (this.dragAtomDelta = dt),
          (this.dragStartToCurrentDelta = dt),
          (this.dragStartToEndDelta = dt),
          (this.view = Designable.Shared.globalThisPolyfill),
          (this.engine = t),
          this.makeObservable()
      }
      return (
        (t.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            type: Formily.Reactive.observable.ref,
            dragType: Formily.Reactive.observable.ref,
            status: Formily.Reactive.observable.ref,
            position: Formily.Reactive.observable.ref,
            dragStartPosition: Formily.Reactive.observable.ref,
            dragEndPosition: Formily.Reactive.observable.ref,
            dragAtomDelta: Formily.Reactive.observable.ref,
            dragStartToCurrentDelta: Formily.Reactive.observable.ref,
            dragStartToEndDelta: Formily.Reactive.observable.ref,
            view: Formily.Reactive.observable.ref,
            setStyle: Formily.Reactive.action,
            setPosition: Formily.Reactive.action,
            setStatus: Formily.Reactive.action,
            setType: Formily.Reactive.action,
          })
        }),
        Object.defineProperty(t.prototype, 'speed', {
          get: function () {
            return Math.sqrt(
              Math.pow(this.dragAtomDelta.clientX, 2) +
                Math.pow(this.dragAtomDelta.clientY, 2)
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setStatus = function (e) {
          this.status = e
        }),
        (t.prototype.setType = function (e) {
          this.type = e
        }),
        (t.prototype.setDragType = function (e) {
          this.dragType = e
        }),
        (t.prototype.setStyle = function (e) {
          this.engine.workbench.eachWorkspace(function (t) {
            !(function (e, t) {
              var n,
                r,
                i,
                o,
                s =
                  null ===
                    (r =
                      null ===
                        (n =
                          null === document || void 0 === document
                            ? void 0
                            : document.getElementsByTagName) || void 0 === n
                        ? void 0
                        : n.call(document, 'html')) || void 0 === r
                    ? void 0
                    : r[0],
                a =
                  null ===
                    (o =
                      null === (i = null == e ? void 0 : e.document) ||
                      void 0 === i
                        ? void 0
                        : i.getElementsByTagName('html')) || void 0 === o
                    ? void 0
                    : o[0]
              a && a.style.cursor !== t && (a.style.cursor = t),
                s && s.style.cursor !== t && (s.style.cursor = t)
            })(t.viewport.contentWindow, e)
          })
        }),
        (t.prototype.setPosition = function (t) {
          ;(this.dragAtomDelta = ht(this.position, t)),
            (this.position = r({}, t)),
            this.status === e.CursorStatus.Dragging &&
              (this.dragStartToCurrentDelta = ht(
                this.position,
                this.dragStartPosition
              ))
        }),
        (t.prototype.setDragStartPosition = function (e) {
          e
            ? (this.dragStartPosition = r({}, e))
            : ((this.dragStartPosition = null),
              (this.dragStartToCurrentDelta = dt))
        }),
        (t.prototype.setDragEndPosition = function (e) {
          this.dragStartPosition &&
            (e
              ? ((this.dragEndPosition = r({}, e)),
                (this.dragStartToEndDelta = ht(
                  this.dragStartPosition,
                  this.dragEndPosition
                )))
              : ((this.dragEndPosition = null),
                (this.dragStartToEndDelta = dt)))
        }),
        t
      )
    })(),
    ft = (function () {
      function t(e) {
        ;(this.dragNodes = []),
          (this.rulerSnapLines = []),
          (this.aroundSnapLines = []),
          (this.aroundSpaceBlocks = null),
          (this.viewportRectsStore = {}),
          (this.dragStartTranslateStore = {}),
          (this.dragStartSizeStore = {}),
          (this.dragStartNodesRect = null),
          (this.snapping = !1),
          (this.dragging = !1),
          (this.snapped = !1),
          (this.operation = e.operation),
          this.makeObservable()
      }
      return (
        Object.defineProperty(t.prototype, 'tree', {
          get: function () {
            return this.operation.tree
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'cursor', {
          get: function () {
            return this.operation.engine.cursor
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'viewport', {
          get: function () {
            return this.operation.workspace.viewport
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'deltaX', {
          get: function () {
            return this.cursor.dragStartToCurrentDelta.clientX
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'deltaY', {
          get: function () {
            return this.cursor.dragStartToCurrentDelta.clientY
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'cursorPosition', {
          get: function () {
            var e = this.cursor.position
            return this.operation.workspace.viewport.getOffsetPoint(
              new Designable.Shared.Point(e.clientX, e.clientY)
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'cursorDragNodesRect', {
          get: function () {
            if ('translate' === this.type)
              return new Designable.Shared.Rect(
                this.cursorPosition.x - this.dragStartCursorOffset.x,
                this.cursorPosition.y - this.dragStartCursorOffset.y,
                this.dragNodesRect.width,
                this.dragNodesRect.height
              )
            if ('resize' === this.type) {
              var e = this.dragStartNodesRect,
                t = this.cursor.dragStartToCurrentDelta.clientX,
                n = this.cursor.dragStartToCurrentDelta.clientY
              switch (this.direction) {
                case 'left-top':
                  return new Designable.Shared.Rect(
                    this.cursorPosition.x - this.dragStartCursorOffset.x,
                    this.cursorPosition.y - this.dragStartCursorOffset.y,
                    e.width - t,
                    e.height - n
                  )
                case 'left-center':
                  return new Designable.Shared.Rect(
                    this.cursorPosition.x - this.dragStartCursorOffset.x,
                    e.y,
                    e.width - t,
                    e.height
                  )
                case 'left-bottom':
                  return new Designable.Shared.Rect(
                    this.cursorPosition.x - this.dragStartCursorOffset.x,
                    e.y,
                    e.width - t,
                    e.height - n
                  )
                case 'center-top':
                  return new Designable.Shared.Rect(
                    e.x,
                    this.cursorPosition.y - this.dragStartCursorOffset.y,
                    e.width,
                    e.height - n
                  )
                case 'center-bottom':
                  return new Designable.Shared.Rect(
                    e.x,
                    e.y,
                    e.width,
                    e.height + n
                  )
                case 'right-top':
                  return new Designable.Shared.Rect(
                    e.x,
                    this.cursorPosition.y - this.dragStartCursorOffset.y,
                    e.width + t,
                    e.height - n
                  )
                case 'right-center':
                  return new Designable.Shared.Rect(
                    e.x,
                    e.y,
                    e.width + t,
                    e.height
                  )
                case 'right-bottom':
                  return new Designable.Shared.Rect(
                    e.x,
                    e.y,
                    e.width + t,
                    e.height - n
                  )
              }
            }
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'cursorDragNodesEdgeLines', {
          get: function () {
            return Designable.Shared.calcEdgeLinesOfRect(
              this.cursorDragNodesRect
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'dragNodesRect', {
          get: function () {
            return this.draggingNodesRect
              ? this.draggingNodesRect
              : Designable.Shared.calcBoundingRect(
                  this.dragNodes.map(function (e) {
                    return e.getValidElementOffsetRect()
                  })
                )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'dragNodesEdgeLines', {
          get: function () {
            return Designable.Shared.calcEdgeLinesOfRect(this.dragNodesRect)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'cursorOffset', {
          get: function () {
            return new Designable.Shared.Point(
              this.cursorPosition.x - this.dragNodesRect.x,
              this.cursorPosition.y - this.dragNodesRect.y
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'dragStartCursor', {
          get: function () {
            var e = this.operation.engine.cursor.dragStartPosition
            return this.operation.workspace.viewport.getOffsetPoint(
              new Designable.Shared.Point(e.clientX, e.clientY)
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'dragStartCursorOffset', {
          get: function () {
            return new Designable.Shared.Point(
              this.dragStartCursor.x - this.dragStartNodesRect.x,
              this.dragStartCursor.y - this.dragStartNodesRect.y
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'closestSnapLines', {
          get: function () {
            if (!this.dragging) return []
            var e = [],
              n = this.cursorDragNodesEdgeLines
            return (
              this.thresholdSnapLines.forEach(function (r) {
                var i = Designable.Shared.calcDistanceOfSnapLineToEdges(r, n)
                if (i < t.threshold) {
                  var o = e.findIndex(function (e) {
                    return (
                      e.distance > i &&
                      e.distance > 0 &&
                      e.direction === r.direction
                    )
                  })
                  o > -1 && e.splice(o, 1), e.push(r)
                }
              }),
              e
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'closestSpaceBlocks', {
          get: function () {
            if (!this.dragging) return []
            var e = this.cursorDragNodesEdgeLines
            return this.thresholdSpaceBlocks.filter(function (n) {
              var r = n.snapLine
              return (
                !!r &&
                Designable.Shared.calcDistanceOfSnapLineToEdges(r, e) <
                  t.threshold
              )
            })
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'thresholdSnapLines', {
          get: function () {
            if (!this.dragging) return []
            var e = []
            for (var t in (this.aroundSnapLines.forEach(function (t) {
              e.push(t)
            }),
            this.rulerSnapLines.forEach(function (t) {
              t.closest && e.push(t)
            }),
            this.aroundSpaceBlocks)) {
              var n = this.aroundSpaceBlocks[t].snapLine
              n && e.push(n)
            }
            return e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'thresholdSpaceBlocks', {
          get: function () {
            var e = []
            if (!this.dragging) return []
            for (var t in this.aroundSpaceBlocks) {
              var n = this.aroundSpaceBlocks[t]
              if (!n.snapLine) return []
              if (0 !== n.snapLine.distance) return []
              n.isometrics.length &&
                (e.push(n), e.push.apply(e, s([], o(n.isometrics), !1)))
            }
            return e
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'measurerSpaceBlocks', {
          get: function () {
            var e = []
            if (!this.dragging || !this.snapped) return []
            for (var t in this.aroundSpaceBlocks)
              this.aroundSpaceBlocks[t] && e.push(this.aroundSpaceBlocks[t])
            return e
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.calcBaseTranslate = function (e) {
          var t,
            n =
              null !== (t = this.dragStartTranslateStore[e.id]) && void 0 !== t
                ? t
                : { x: 0, y: 0 }
          return { x: n.x + this.deltaX, y: n.y + this.deltaY }
        }),
        (t.prototype.calcBaseResize = function (e) {
          var t,
            n,
            r = this.deltaX,
            i = this.deltaY,
            o =
              null !== (t = this.dragStartTranslateStore[e.id]) && void 0 !== t
                ? t
                : { x: 0, y: 0 },
            s =
              null !== (n = this.dragStartSizeStore[e.id]) && void 0 !== n
                ? n
                : { width: 0, height: 0 }
          switch (this.direction) {
            case 'left-top':
              return new Designable.Shared.Rect(
                o.x + r,
                o.y + i,
                s.width - r,
                s.height - i
              )
            case 'left-center':
              return new Designable.Shared.Rect(
                o.x + r,
                o.y,
                s.width - r,
                s.height
              )
            case 'left-bottom':
              return new Designable.Shared.Rect(
                o.x + r,
                o.y,
                s.width - r,
                s.height + i
              )
            case 'center-bottom':
              return new Designable.Shared.Rect(o.x, o.y, s.width, s.height + i)
            case 'center-top':
              return new Designable.Shared.Rect(
                o.x,
                o.y + i,
                s.width,
                s.height - i
              )
            case 'right-top':
              return new Designable.Shared.Rect(
                o.x,
                o.y + i,
                s.width + r,
                s.height - i
              )
            case 'right-bottom':
              return new Designable.Shared.Rect(
                o.x,
                o.y,
                s.width + r,
                s.height + i
              )
            case 'right-center':
              return new Designable.Shared.Rect(o.x, o.y, s.width + r, s.height)
          }
        }),
        (t.prototype.calcDragStartStore = function (e) {
          var t = this
          void 0 === e && (e = []),
            (this.dragStartNodesRect = this.dragNodesRect),
            e.forEach(function (e) {
              var n = e.getElement(),
                r = e.getElementOffsetRect()
              ;(t.dragStartTranslateStore[e.id] =
                Designable.Shared.calcElementTranslate(n)),
                (t.dragStartSizeStore[e.id] = {
                  width: r.width,
                  height: r.height,
                })
            })
        }),
        (t.prototype.calcRulerSnapLines = function (e) {
          var t = Designable.Shared.calcEdgeLinesOfRect(e)
          return this.rulerSnapLines.map(function (e) {
            return (
              (e.distance = Designable.Shared.calcDistanceOfSnapLineToEdges(
                e,
                t
              )),
              e
            )
          })
        }),
        (t.prototype.calcAroundSnapLines = function (e) {
          var n = this,
            i = [],
            s = Designable.Shared.calcEdgeLinesOfRect(e)
          return (
            this.eachViewportNodes(function (a, c) {
              if (!n.dragNodes.includes(a)) {
                var l = Designable.Shared.calcEdgeLinesOfRect(c),
                  u = function (a) {
                    var c = o(Designable.Shared.calcClosestEdges(a, s), 2),
                      l = c[0],
                      u = c[1],
                      d = Designable.Shared.calcCombineSnapLineSegment(a, u)
                    if (l < t.threshold) {
                      if (n.snapping && 0 !== l) return
                      var h = new ct(n, r(r({}, d), { distance: l })),
                        p = h.snapEdge(e)
                      ;('translate' === n.type || ('hc' !== p && 'vc' !== p)) &&
                        i.push(h)
                    }
                  }
                l.h.forEach(u), l.v.forEach(u)
              }
            }),
            i
          )
        }),
        (t.prototype.calcAroundSpaceBlocks = function (e) {
          var t = this,
            n = {}
          return (
            this.eachViewportNodes(function (i, o) {
              if (!Designable.Shared.isEqualRect(e, o)) {
                var s = Designable.Shared.calcSpaceBlockOfRect(e, o)
                if (s) {
                  var a = new lt(t, r({ refer: i }, s))
                  n[s.type]
                    ? a.distance < n[s.type].distance && (n[s.type] = a)
                    : (n[s.type] = a)
                }
              }
            }),
            n
          )
        }),
        (t.prototype.calcViewportNodes = function () {
          var e = this
          this.tree.eachTree(function (t) {
            var n = t.getValidElementRect(),
              r = t.getValidElementOffsetRect()
            e.dragNodes.includes(t) ||
              (e.viewport.isRectInViewport(n) &&
                (e.viewportRectsStore[t.id] = r))
          })
        }),
        (t.prototype.getNodeRect = function (e) {
          return this.viewportRectsStore[e.id]
        }),
        (t.prototype.eachViewportNodes = function (e) {
          for (var t in this.viewportRectsStore)
            e(this.tree.findById(t), this.viewportRectsStore[t])
        }),
        (t.prototype.translate = function (e, t) {
          var n, r
          if (this.dragging) {
            var o = this.calcBaseTranslate(e)
            ;(this.snapped = !1), (this.snapping = !1)
            try {
              for (
                var s = i(this.closestSnapLines), a = s.next();
                !a.done;
                a = s.next()
              ) {
                a.value.translate(e, o),
                  (this.snapping = !0),
                  (this.snapped = !0)
              }
            } catch (e) {
              n = { error: e }
            } finally {
              try {
                a && !a.done && (r = s.return) && r.call(s)
              } finally {
                if (n) throw n.error
              }
            }
            t(o), this.snapping && (this.dragMove(), (this.snapping = !1))
          }
        }),
        (t.prototype.resize = function (e, t) {
          var n, r
          if (this.dragging) {
            var o = this.calcBaseResize(e)
            ;(this.snapping = !1), (this.snapping = !1)
            try {
              for (
                var s = i(this.closestSnapLines), a = s.next();
                !a.done;
                a = s.next()
              ) {
                a.value.resize(e, o), (this.snapping = !0), (this.snapped = !0)
              }
            } catch (e) {
              n = { error: e }
            } finally {
              try {
                a && !a.done && (r = s.return) && r.call(s)
              } finally {
                if (n) throw n.error
              }
            }
            t(o), this.snapping && (this.dragMove(), (this.snapping = !1))
          }
        }),
        (t.prototype.findRulerSnapLine = function (e) {
          return this.rulerSnapLines.find(function (t) {
            return t.id === e
          })
        }),
        (t.prototype.addRulerSnapLine = function (e) {
          Designable.Shared.isLineSegment(e) &&
            (this.findRulerSnapLine(e.id) ||
              this.rulerSnapLines.push(
                new ct(this, r(r({}, e), { type: 'ruler' }))
              ))
        }),
        (t.prototype.removeRulerSnapLine = function (e) {
          var t = this.rulerSnapLines.findIndex(function (t) {
            return t.id === e
          })
          t > -1 && this.rulerSnapLines.splice(t, 1)
        }),
        (t.prototype.dragStart = function (t) {
          var n = null == t ? void 0 : t.dragNodes,
            r = null == t ? void 0 : t.type,
            i = null == t ? void 0 : t.direction
          if ('resize' === r)
            (o = it.filterResizable(n)).length &&
              ((this.dragging = !0),
              (this.type = r),
              (this.direction = i),
              (this.dragNodes = o),
              this.calcDragStartStore(o),
              this.cursor.setDragType(e.CursorDragType.Resize))
          else if ('translate' === r) {
            ;(o = it.filterTranslatable(n)).length &&
              ((this.dragging = !0),
              (this.type = r),
              (this.direction = i),
              (this.dragNodes = o),
              this.calcDragStartStore(o),
              this.cursor.setDragType(e.CursorDragType.Translate))
          } else if ('rotate' === r) {
            ;(o = it.filterRotatable(n)).length &&
              ((this.dragging = !0),
              (this.type = r),
              (this.dragNodes = o),
              this.calcDragStartStore(o),
              this.cursor.setDragType(e.CursorDragType.Rotate))
          } else if ('scale' === r) {
            ;(o = it.filterScalable(n)).length &&
              ((this.dragging = !0),
              (this.type = r),
              (this.dragNodes = o),
              this.calcDragStartStore(o),
              this.cursor.setDragType(e.CursorDragType.Scale))
          } else if ('round' === r) {
            var o
            ;(o = it.filterRoundable(n)).length &&
              ((this.dragging = !0),
              (this.type = r),
              (this.dragNodes = o),
              this.calcDragStartStore(o),
              this.cursor.setDragType(e.CursorDragType.Round))
          }
          this.dragging && this.calcViewportNodes()
        }),
        (t.prototype.dragMove = function () {
          this.dragging &&
            ((this.draggingNodesRect = null),
            (this.draggingNodesRect = this.dragNodesRect),
            (this.rulerSnapLines = this.calcRulerSnapLines(this.dragNodesRect)),
            (this.aroundSnapLines = this.calcAroundSnapLines(
              this.dragNodesRect
            )),
            (this.aroundSpaceBlocks = this.calcAroundSpaceBlocks(
              this.dragNodesRect
            )))
        }),
        (t.prototype.dragEnd = function () {
          ;(this.dragging = !1),
            (this.viewportRectsStore = {}),
            (this.dragStartTranslateStore = {}),
            (this.aroundSnapLines = []),
            (this.draggingNodesRect = null),
            (this.aroundSpaceBlocks = null),
            (this.dragStartNodesRect = null),
            (this.dragNodes = []),
            this.cursor.setDragType(e.CursorDragType.Move)
        }),
        (t.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            snapped: Formily.Reactive.observable.ref,
            dragging: Formily.Reactive.observable.ref,
            snapping: Formily.Reactive.observable.ref,
            dragNodes: Formily.Reactive.observable.ref,
            aroundSnapLines: Formily.Reactive.observable.ref,
            aroundSpaceBlocks: Formily.Reactive.observable.ref,
            rulerSnapLines: Formily.Reactive.observable.shallow,
            closestSnapLines: Formily.Reactive.observable.computed,
            thresholdSnapLines: Formily.Reactive.observable.computed,
            thresholdSpaceBlocks: Formily.Reactive.observable.computed,
            measurerSpaceBlocks: Formily.Reactive.observable.computed,
            cursor: Formily.Reactive.observable.computed,
            cursorPosition: Formily.Reactive.observable.computed,
            cursorOffset: Formily.Reactive.observable.computed,
            dragStartCursor: Formily.Reactive.observable.computed,
            translate: Formily.Reactive.action,
            dragStart: Formily.Reactive.action,
            dragMove: Formily.Reactive.action,
            dragEnd: Formily.Reactive.action,
          })
        }),
        (t.threshold = 6),
        t
      )
    })()
  ;(e.ClosestPosition = void 0),
    ((ut = e.ClosestPosition || (e.ClosestPosition = {})).Before = 'BEFORE'),
    (ut.ForbidBefore = 'FORBID_BEFORE'),
    (ut.After = 'After'),
    (ut.ForbidAfter = 'FORBID_AFTER'),
    (ut.Upper = 'UPPER'),
    (ut.ForbidUpper = 'FORBID_UPPER'),
    (ut.Under = 'UNDER'),
    (ut.ForbidUnder = 'FORBID_UNDER'),
    (ut.Inner = 'INNER'),
    (ut.ForbidInner = 'FORBID_INNER'),
    (ut.InnerAfter = 'INNER_AFTER'),
    (ut.ForbidInnerAfter = 'FORBID_INNER_AFTER'),
    (ut.InnerBefore = 'INNER_BEFORE'),
    (ut.ForbidInnerBefore = 'FORBID_INNER_BEFORE'),
    (ut.Forbid = 'FORBID')
  var vt = (function () {
      function t(e) {
        ;(this.dragNodes = []),
          (this.touchNode = null),
          (this.closestNode = null),
          (this.activeViewport = null),
          (this.viewportClosestRect = null),
          (this.outlineClosestRect = null),
          (this.viewportClosestOffsetRect = null),
          (this.outlineClosestOffsetRect = null),
          (this.viewportClosestDirection = null),
          (this.outlineClosestDirection = null),
          (this.dragging = !1),
          (this.operation = e.operation),
          (this.rootNode = this.operation.tree),
          this.makeObservable()
      }
      return (
        Object.defineProperty(t.prototype, 'cursor', {
          get: function () {
            return this.operation.engine.cursor
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'viewport', {
          get: function () {
            return this.operation.workspace.viewport
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'outline', {
          get: function () {
            return this.operation.workspace.outline
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'hasDragNodes', {
          get: function () {
            return this.dragNodes.length > 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'closestDirection', {
          get: function () {
            return this.activeViewport === this.outline
              ? this.outlineClosestDirection
              : this.viewportClosestDirection
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getClosestLayout = function (e) {
          return e.getValidNodeLayout(this.closestNode)
        }),
        (t.prototype.calcClosestPosition = function (t, n) {
          var r = this,
            i = this.closestNode
          if (!i || !n.isPointInViewport(t)) return e.ClosestPosition.Forbid
          var a = n.getValidNodeRect(i),
            c = 'horizontal' === this.getClosestLayout(n)
          if (a) {
            var l,
              u = Designable.Shared.isNearAfter(
                t,
                a,
                'block' !== n.moveInsertionType && c
              ),
              d = function (e) {
                var t
                if (e)
                  return (
                    null === (t = e.parent) || void 0 === t
                      ? void 0
                      : t.allowSibling(r.dragNodes)
                  )
                    ? e.parent
                    : d(e.parent)
              }
            return Designable.Shared.isPointInRect(t, a, n.moveSensitive)
              ? i.allowAppend(this.dragNodes)
                ? i.contains.apply(i, s([], o(this.dragNodes), !1))
                  ? u
                    ? e.ClosestPosition.InnerAfter
                    : e.ClosestPosition.InnerBefore
                  : e.ClosestPosition.Inner
                : i.allowSibling(this.dragNodes)
                ? c
                  ? u
                    ? e.ClosestPosition.After
                    : e.ClosestPosition.Before
                  : u
                  ? e.ClosestPosition.Under
                  : e.ClosestPosition.Upper
                : ((l = d(i)) && (this.closestNode = l),
                  c
                    ? l
                      ? u
                        ? e.ClosestPosition.After
                        : e.ClosestPosition.Before
                      : u
                      ? e.ClosestPosition.ForbidAfter
                      : e.ClosestPosition.ForbidBefore
                    : l
                    ? u
                      ? e.ClosestPosition.Under
                      : e.ClosestPosition.Upper
                    : u
                    ? e.ClosestPosition.ForbidUnder
                    : e.ClosestPosition.ForbidUpper)
              : i === i.root
              ? u
                ? e.ClosestPosition.InnerAfter
                : e.ClosestPosition.InnerBefore
              : i.allowSibling(this.dragNodes)
              ? c
                ? u
                  ? e.ClosestPosition.After
                  : e.ClosestPosition.Before
                : u
                ? e.ClosestPosition.Under
                : e.ClosestPosition.Upper
              : ((l = d(i)) && (this.closestNode = l),
                c
                  ? l
                    ? u
                      ? e.ClosestPosition.After
                      : e.ClosestPosition.Before
                    : u
                    ? e.ClosestPosition.ForbidAfter
                    : e.ClosestPosition.ForbidBefore
                  : l
                  ? u
                    ? e.ClosestPosition.Under
                    : e.ClosestPosition.Upper
                  : u
                  ? e.ClosestPosition.ForbidUnder
                  : e.ClosestPosition.ForbidUpper)
          }
        }),
        (t.prototype.calcClosestNode = function (e, t) {
          var n, r
          if (this.touchNode) {
            var i = t.getValidNodeRect(this.touchNode)
            if (!i) return
            if (
              null ===
                (r =
                  null === (n = this.touchNode) || void 0 === n
                    ? void 0
                    : n.children) || void 0 === r
                ? void 0
                : r.length
            ) {
              var o = Designable.Shared.calcDistancePointToEdge(e, i),
                s = this.touchNode
              return (
                this.touchNode.eachChildren(function (n) {
                  var r = t.getElementRectById(n.id)
                  if (r) {
                    var i = Designable.Shared.isPointInRect(
                      e,
                      r,
                      t.moveSensitive
                    )
                      ? 0
                      : Designable.Shared.calcDistanceOfPointToRect(e, r)
                    i <= o && ((o = i), (s = n))
                  }
                }),
                s
              )
            }
            return this.touchNode
          }
          return this.operation.tree
        }),
        (t.prototype.calcClosestRect = function (t, n) {
          var r = this.closestNode
          if (r && n) {
            var i = t.getValidNodeRect(r)
            return n === e.ClosestPosition.InnerAfter ||
              n === e.ClosestPosition.InnerBefore
              ? t.getChildrenRect(r)
              : i
          }
        }),
        (t.prototype.calcClosestOffsetRect = function (t, n) {
          var r = this.closestNode
          if (r && n) {
            var i = t.getValidNodeOffsetRect(r)
            return n === e.ClosestPosition.InnerAfter ||
              n === e.ClosestPosition.InnerBefore
              ? t.getChildrenOffsetRect(r)
              : i
          }
        }),
        (t.prototype.dragStart = function (t) {
          var n = it.filterDraggable(null == t ? void 0 : t.dragNodes)
          n.length &&
            ((this.dragNodes = n),
            this.trigger(
              new m({ target: this.operation.tree, source: this.dragNodes })
            ),
            this.viewport.cacheElements(),
            this.cursor.setDragType(e.CursorDragType.Move),
            (this.dragging = !0))
        }),
        (t.prototype.dragMove = function (e) {
          var t = e.point,
            n = e.touchNode
          this.dragging &&
            (this.outline.isPointInViewport(t, !1)
              ? ((this.activeViewport = this.outline),
                (this.touchNode = n),
                (this.closestNode = this.calcClosestNode(t, this.outline)))
              : this.viewport.isPointInViewport(t, !1) &&
                ((this.activeViewport = this.viewport),
                (this.touchNode = n),
                (this.closestNode = this.calcClosestNode(t, this.viewport))),
            this.activeViewport &&
              (this.activeViewport === this.outline
                ? ((this.outlineClosestDirection = this.calcClosestPosition(
                    t,
                    this.outline
                  )),
                  (this.viewportClosestDirection =
                    this.outlineClosestDirection))
                : ((this.viewportClosestDirection = this.calcClosestPosition(
                    t,
                    this.viewport
                  )),
                  (this.outlineClosestDirection =
                    this.viewportClosestDirection)),
              this.outline.mounted &&
                ((this.outlineClosestRect = this.calcClosestRect(
                  this.outline,
                  this.outlineClosestDirection
                )),
                (this.outlineClosestOffsetRect = this.calcClosestOffsetRect(
                  this.outline,
                  this.outlineClosestDirection
                ))),
              this.viewport.mounted &&
                ((this.viewportClosestRect = this.calcClosestRect(
                  this.viewport,
                  this.viewportClosestDirection
                )),
                (this.viewportClosestOffsetRect = this.calcClosestOffsetRect(
                  this.viewport,
                  this.viewportClosestDirection
                )))))
        }),
        (t.prototype.dragDrop = function (e) {
          this.trigger(
            new w({
              target: this.operation.tree,
              source: null == e ? void 0 : e.dropNode,
            })
          )
        }),
        (t.prototype.dragEnd = function () {
          ;(this.dragging = !1),
            (this.dragNodes = []),
            (this.touchNode = null),
            (this.closestNode = null),
            (this.activeViewport = null),
            (this.outlineClosestDirection = null),
            (this.outlineClosestOffsetRect = null),
            (this.outlineClosestRect = null),
            (this.viewportClosestDirection = null),
            (this.viewportClosestOffsetRect = null),
            (this.viewportClosestRect = null),
            this.viewport.clearCache()
        }),
        (t.prototype.trigger = function (e) {
          if (this.operation) return this.operation.dispatch(e)
        }),
        (t.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            dragging: Formily.Reactive.observable.ref,
            dragNodes: Formily.Reactive.observable.ref,
            touchNode: Formily.Reactive.observable.ref,
            closestNode: Formily.Reactive.observable.ref,
            outlineClosestDirection: Formily.Reactive.observable.ref,
            outlineClosestOffsetRect: Formily.Reactive.observable.ref,
            outlineClosestRect: Formily.Reactive.observable.ref,
            viewportClosestDirection: Formily.Reactive.observable.ref,
            viewportClosestOffsetRect: Formily.Reactive.observable.ref,
            viewportClosestRect: Formily.Reactive.observable.ref,
            dragStart: Formily.Reactive.action,
            dragMove: Formily.Reactive.action,
            dragEnd: Formily.Reactive.action,
          })
        }),
        t
      )
    })(),
    gt = (function () {
      function e(e) {
        ;(this.requests = { snapshot: null }),
          (this.engine = e.engine),
          (this.workspace = e),
          (this.tree = new it(
            r(
              r(
                { componentName: this.engine.props.rootComponentName },
                this.engine.props.defaultComponentTree
              ),
              { operation: this }
            )
          )),
          (this.hover = new at({ operation: this })),
          (this.selection = new st({ operation: this })),
          (this.moveHelper = new vt({ operation: this })),
          (this.transformHelper = new ft({ operation: this })),
          this.selection.select(this.tree)
      }
      return (
        (e.prototype.dispatch = function (e, t) {
          if (!1 !== this.workspace.dispatch(e))
            return Designable.Shared.isFn(t) ? t() : void 0
        }),
        (e.prototype.snapshot = function (e) {
          var t = this
          Designable.Shared.cancelIdle(this.requests.snapshot),
            this.workspace &&
              this.workspace.history &&
              !this.workspace.history.locking &&
              (this.requests.snapshot = Designable.Shared.requestIdle(
                function () {
                  t.workspace.history.push(e)
                }
              ))
        }),
        (e.prototype.from = function (e) {
          e &&
            (e.tree && this.tree.from(e.tree),
            e.selected && (this.selection.selected = e.selected))
        }),
        (e.prototype.serialize = function () {
          return { tree: this.tree.serialize(), selected: [this.tree.id] }
        }),
        e
      )
    })(),
    yt = (function () {
      function e(e, t) {
        ;(this.current = 0),
          (this.history = []),
          (this.updateTimer = null),
          (this.maxSize = 100),
          (this.locking = !1),
          (this.context = e),
          (this.props = t),
          this.push(),
          this.makeObservable()
      }
      return (
        (e.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            current: Formily.Reactive.observable.ref,
            history: Formily.Reactive.observable.shallow,
            push: Formily.Reactive.action,
            undo: Formily.Reactive.action,
            redo: Formily.Reactive.action,
            goTo: Formily.Reactive.action,
            clear: Formily.Reactive.action,
          })
        }),
        (e.prototype.list = function () {
          return this.history
        }),
        (e.prototype.push = function (e) {
          var t
          if (!this.locking) {
            this.current < this.history.length - 1 &&
              (this.history = this.history.slice(0, this.current + 1))
            var n = {
              data: this.context.serialize(),
              timestamp: Date.now(),
              type: e,
            }
            ;(this.current = this.history.length), this.history.push(n)
            var r = this.history.length - this.maxSize
            r > 0 &&
              (this.history.splice(0, r),
              (this.current = this.history.length - 1)),
              (null === (t = this.props) || void 0 === t ? void 0 : t.onPush) &&
                this.props.onPush(n)
          }
        }),
        Object.defineProperty(e.prototype, 'allowUndo', {
          get: function () {
            return this.history.length > 0 && this.current - 1 >= 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'allowRedo', {
          get: function () {
            return this.history.length > this.current + 1
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.redo = function () {
          var e
          if (this.allowRedo) {
            var t = this.history[this.current + 1]
            ;(this.locking = !0),
              this.context.from(t.data),
              (this.locking = !1),
              this.current++,
              (null === (e = this.props) || void 0 === e ? void 0 : e.onRedo) &&
                this.props.onRedo(t)
          }
        }),
        (e.prototype.undo = function () {
          var e
          if (this.allowUndo) {
            var t = this.history[this.current - 1]
            ;(this.locking = !0),
              this.context.from(t.data),
              (this.locking = !1),
              this.current--,
              (null === (e = this.props) || void 0 === e ? void 0 : e.onUndo) &&
                this.props.onUndo(t)
          }
        }),
        (e.prototype.goTo = function (e) {
          var t,
            n = this.history[e]
          n &&
            ((this.locking = !0),
            this.context.from(n.data),
            (this.locking = !1),
            (this.current = e),
            (null === (t = this.props) || void 0 === t ? void 0 : t.onGoto) &&
              this.props.onGoto(n))
        }),
        (e.prototype.clear = function () {
          ;(this.history = []), (this.current = 0)
        }),
        e
      )
    })(),
    bt = (function () {
      function e(e, t) {
        var n = this
        ;(this.engine = e),
          (this.props = t),
          (this.id = t.id || Designable.Shared.uid()),
          (this.title = t.title),
          (this.description = t.description),
          (this.viewport = new ot({
            engine: this.engine,
            workspace: this,
            viewportElement: t.viewportElement,
            contentWindow: t.contentWindow,
            nodeIdAttrName: this.engine.props.nodeIdAttrName,
            moveSensitive: !0,
            moveInsertionType: 'all',
          })),
          (this.outline = new ot({
            engine: this.engine,
            workspace: this,
            viewportElement: t.viewportElement,
            contentWindow: t.contentWindow,
            nodeIdAttrName: this.engine.props.outlineNodeIdAttrName,
            moveSensitive: !1,
            moveInsertionType: 'block',
          })),
          (this.operation = new gt(this)),
          (this.history = new yt(this, {
            onPush: function (e) {
              n.operation.dispatch(new U(e))
            },
            onRedo: function (e) {
              n.operation.hover.clear(), n.operation.dispatch(new q(e))
            },
            onUndo: function (e) {
              n.operation.hover.clear(), n.operation.dispatch(new V(e))
            },
            onGoto: function (e) {
              n.operation.hover.clear(), n.operation.dispatch(new H(e))
            },
          }))
      }
      return (
        (e.prototype.getEventContext = function () {
          return {
            workbench: this.engine.workbench,
            workspace: this,
            engine: this.engine,
            viewport: this.viewport,
          }
        }),
        (e.prototype.attachEvents = function (e, t) {
          this.engine.attachEvents(e, t, this.getEventContext())
        }),
        (e.prototype.detachEvents = function (e) {
          this.engine.detachEvents(e)
        }),
        (e.prototype.dispatch = function (e) {
          return this.engine.dispatch(e, this.getEventContext())
        }),
        (e.prototype.serialize = function () {
          return {
            id: this.id,
            title: this.title,
            description: this.description,
            operation: this.operation.serialize(),
          }
        }),
        (e.prototype.from = function (e) {
          e &&
            (e.operation && this.operation.from(e.operation),
            e.id && (this.id = e.id),
            e.title && (this.title = e.title),
            e.description && (this.description = e.description))
        }),
        e
      )
    })(),
    mt = (function () {
      function e(e) {
        ;(this.type = 'DESIGNABLE'),
          (this.engine = e),
          (this.workspaces = []),
          (this.currentWorkspace = null),
          (this.activeWorkspace = null),
          this.makeObservable()
      }
      return (
        (e.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            currentWorkspace: Formily.Reactive.observable.ref,
            workspaces: Formily.Reactive.observable.shallow,
            activeWorkspace: Formily.Reactive.observable.ref,
            type: Formily.Reactive.observable.ref,
            switchWorkspace: Formily.Reactive.action,
            addWorkspace: Formily.Reactive.action,
            removeWorkspace: Formily.Reactive.action,
            setActiveWorkspace: Formily.Reactive.action,
            setWorkbenchType: Formily.Reactive.action,
          })
        }),
        (e.prototype.getEventContext = function () {
          return {
            engine: this.engine,
            workbench: this.engine.workbench,
            workspace: null,
            viewport: null,
          }
        }),
        (e.prototype.switchWorkspace = function (e) {
          var t = this.findWorkspaceById(e)
          return (
            t && ((this.currentWorkspace = t), this.engine.dispatch(new X(t))),
            this.currentWorkspace
          )
        }),
        (e.prototype.setActiveWorkspace = function (e) {
          return (this.activeWorkspace = e), e
        }),
        (e.prototype.setWorkbenchType = function (e) {
          this.type = e
        }),
        (e.prototype.addWorkspace = function (e) {
          var t = this.findWorkspaceById(e.id)
          return (
            t ||
            ((this.currentWorkspace = new bt(this.engine, e)),
            this.workspaces.push(this.currentWorkspace),
            this.engine.dispatch(new z(this.currentWorkspace)),
            this.currentWorkspace)
          )
        }),
        (e.prototype.removeWorkspace = function (e) {
          var t = this.findWorkspaceIndexById(e)
          if (t > -1 && t < this.workspaces.length) {
            var n = this.workspaces[t]
            n.viewport.detachEvents(),
              this.workspaces.splice(t, 1),
              n === this.currentWorkspace &&
                (this.workspaces.length && this.workspaces[t]
                  ? (this.currentWorkspace = this.workspaces[t])
                  : (this.currentWorkspace =
                      this.workspaces[this.workspaces.length - 1])),
              this.engine.dispatch(new j(n))
          }
        }),
        (e.prototype.ensureWorkspace = function (e) {
          void 0 === e && (e = {})
          var t = this.findWorkspaceById(e.id)
          return t || (this.addWorkspace(e), this.currentWorkspace)
        }),
        (e.prototype.findWorkspaceById = function (e) {
          return this.workspaces.find(function (t) {
            return t.id === e
          })
        }),
        (e.prototype.findWorkspaceIndexById = function (e) {
          return this.workspaces.findIndex(function (t) {
            return t.id === e
          })
        }),
        (e.prototype.mapWorkspace = function (e) {
          return this.workspaces.map(e)
        }),
        (e.prototype.eachWorkspace = function (e) {
          this.workspaces.forEach(e)
        }),
        e
      )
    })()
  const wt = Designable.Shared.KeyCode
  var St,
    Rt,
    Et = (function () {
      function e(e) {
        ;(this.codes = this.parseCodes(e.codes)),
          (this.handler = e.handler),
          (this.matcher = e.matcher)
      }
      return (
        (e.prototype.parseCodes = function (e) {
          var t = []
          return (
            e.forEach(function (e) {
              Array.isArray(e) ? t.push(e) : t.push([e])
            }),
            t
          )
        }),
        (e.prototype.preventCodes = function (t) {
          var n
          if (this.codes.length) {
            for (var r = 0; r < t.length; r++)
              for (
                var i = null !== (n = this.codes[r]) && void 0 !== n ? n : [],
                  o = 0;
                o < i.length;
                o++
              )
                if (!e.matchCode(t[o], i[o])) return !1
            return !0
          }
          return !1
        }),
        (e.prototype.matched = function (e, t) {
          return Designable.Shared.isFn(this.handler) && e && this.handler(t), e
        }),
        (e.prototype.match = function (t, n) {
          var r = this
          return this.codes.some(function (i) {
            var o = e.sortCodes(i),
              s = e.sortCodes(t)
            if (Designable.Shared.isFn(r.matcher))
              return r.matched(r.matcher(s), n)
            if (s.length !== o.length) return r.matched(!1, n)
            for (var a = 0; a < o.length; a++)
              if (!e.matchCode(s[a], o[a])) return r.matched(!1, n)
            return r.matched(!0, n)
          })
        }),
        (e.matchCode = function (e, t) {
          var n, r
          return (
            (null === (n = null == e ? void 0 : e.toLocaleLowerCase) ||
            void 0 === n
              ? void 0
              : n.call(e)) ===
            (null === (r = null == t ? void 0 : t.toLocaleLowerCase) ||
            void 0 === r
              ? void 0
              : r.call(t))
          )
        }),
        (e.sortCodes = function (e) {
          return e
            .map(function (e) {
              return e.toLocaleLowerCase()
            })
            .sort()
        }),
        e
      )
    })(),
    Dt = [
      ['metaKey', Designable.Shared.KeyCode.Meta],
      ['shiftKey', Designable.Shared.KeyCode.Shift],
      ['ctrlKey', Designable.Shared.KeyCode.Control],
      ['altKey', Designable.Shared.KeyCode.Alt],
    ],
    Ct = (function () {
      function e(e) {
        var t
        ;(this.shortcuts = []),
          (this.sequence = []),
          (this.keyDown = null),
          (this.modifiers = {}),
          (this.requestTimer = null),
          (this.engine = e),
          (this.shortcuts =
            (null === (t = e.props) || void 0 === t ? void 0 : t.shortcuts) ||
            []),
          this.makeObservable()
      }
      return (
        (e.prototype.matchCodes = function (e) {
          for (var t = 0; t < this.shortcuts.length; t++) {
            if (this.shortcuts[t].match(this.sequence, e)) return !0
          }
          return !1
        }),
        (e.prototype.preventCodes = function () {
          var e = this
          return this.shortcuts.some(function (t) {
            return t.preventCodes(e.sequence)
          })
        }),
        (e.prototype.includes = function (e) {
          return this.sequence.some(function (t) {
            return Et.matchCode(t, e)
          })
        }),
        (e.prototype.excludes = function (e) {
          this.sequence = this.sequence.filter(function (t) {
            return !Et.matchCode(e, t)
          })
        }),
        (e.prototype.addKeyCode = function (e) {
          this.includes(e) || this.sequence.push(e)
        }),
        (e.prototype.removeKeyCode = function (e) {
          this.includes(e) && this.excludes(e)
        }),
        (e.prototype.isModifier = function (e) {
          return Dt.some(function (t) {
            return Et.matchCode(t[1], e)
          })
        }),
        (e.prototype.handleModifiers = function (e) {
          var t = this
          Dt.forEach(function (n) {
            var r = o(n, 2),
              i = r[0],
              s = r[1]
            e[i] && (t.includes(s) || (t.sequence = [s].concat(t.sequence)))
          })
        }),
        (e.prototype.handleKeyboard = function (e, t) {
          'keydown' === e.eventType
            ? ((this.keyDown = e.data),
              this.addKeyCode(this.keyDown),
              this.handleModifiers(e),
              this.matchCodes(t) && (this.sequence = []),
              this.requestClean(4e3),
              this.preventCodes() && (e.preventDefault(), e.stopPropagation()))
            : (this.isModifier(e.data) && (this.sequence = []),
              (this.keyDown = null))
        }),
        (e.prototype.isKeyDown = function (e) {
          return this.keyDown === e
        }),
        (e.prototype.requestClean = function (e) {
          var t = this
          void 0 === e && (e = 320),
            clearTimeout(this.requestTimer),
            (this.requestTimer = setTimeout(function () {
              ;(t.keyDown = null),
                (t.sequence = []),
                clearTimeout(t.requestTimer)
            }, e))
        }),
        (e.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            sequence: Formily.Reactive.observable.shallow,
            keyDown: Formily.Reactive.observable.ref,
            handleKeyboard: Formily.Reactive.action,
          })
        }),
        e
      )
    })()
  ;(e.ScreenType = void 0),
    ((St = e.ScreenType || (e.ScreenType = {})).PC = 'PC'),
    (St.Responsive = 'Responsive'),
    (St.Mobile = 'Mobile'),
    (St.Sketch = 'Sketch'),
    (e.ScreenStatus = void 0),
    ((Rt = e.ScreenStatus || (e.ScreenStatus = {})).Normal = 'Normal'),
    (Rt.Resizing = 'Resizing'),
    (Rt.Zooming = 'Zooming')
  var Nt = (function () {
      function t(t) {
        ;(this.scale = 1),
          (this.width = '100%'),
          (this.height = '100%'),
          (this.background = ''),
          (this.flip = !1),
          (this.status = e.ScreenStatus.Normal),
          (this.engine = t),
          (this.type = t.props.defaultScreenType),
          this.makeObservable()
      }
      return (
        (t.prototype.makeObservable = function () {
          Formily.Reactive.define(this, {
            type: Formily.Reactive.observable.ref,
            scale: Formily.Reactive.observable.ref,
            width: Formily.Reactive.observable.ref,
            height: Formily.Reactive.observable.ref,
            status: Formily.Reactive.observable.ref,
            flip: Formily.Reactive.observable.ref,
            background: Formily.Reactive.observable.ref,
            setType: Formily.Reactive.action,
            setScale: Formily.Reactive.action,
            setSize: Formily.Reactive.action,
            resetSize: Formily.Reactive.action,
            setBackground: Formily.Reactive.action,
            setFlip: Formily.Reactive.action,
          })
        }),
        (t.prototype.setStatus = function (e) {
          this.status = e
        }),
        (t.prototype.setType = function (e) {
          this.type = e
        }),
        (t.prototype.setScale = function (e) {
          this.scale = e
        }),
        (t.prototype.setSize = function (e, t) {
          e && (this.width = e), t && (this.height = t)
        }),
        (t.prototype.resetSize = function () {
          ;(this.width = '100%'), (this.height = '100%')
        }),
        (t.prototype.setBackground = function (e) {
          this.background = e
        }),
        (t.prototype.setFlip = function (e) {
          this.flip = e
        }),
        t
      )
    })(),
    Pt = (function (t) {
      function i(e) {
        var n = t.call(this, e) || this
        return (
          (n.props = r(r({}, i.defaultProps), e)),
          n.init(),
          (n.id = Designable.Shared.uid()),
          n
        )
      }
      return (
        n(i, t),
        (i.prototype.init = function () {
          ;(this.workbench = new mt(this)),
            (this.screen = new Nt(this)),
            (this.cursor = new pt(this)),
            (this.keyboard = new Ct(this))
        }),
        (i.prototype.setCurrentTree = function (e) {
          this.workbench.currentWorkspace &&
            this.workbench.currentWorkspace.operation.tree.from(e)
        }),
        (i.prototype.getCurrentTree = function () {
          var e, t, n
          return null ===
            (n =
              null ===
                (t =
                  null === (e = this.workbench) || void 0 === e
                    ? void 0
                    : e.currentWorkspace) || void 0 === t
                ? void 0
                : t.operation) || void 0 === n
            ? void 0
            : n.tree
        }),
        (i.prototype.getAllSelectedNodes = function () {
          for (var e = [], t = 0; t < this.workbench.workspaces.length; t++) {
            var n = this.workbench.workspaces[t]
            e = e.concat(n.operation.selection.selectedNodes)
          }
          return e
        }),
        (i.prototype.findNodeById = function (e) {
          return it.findById(e)
        }),
        (i.prototype.findMovingNodes = function () {
          var e = []
          return (
            this.workbench.eachWorkspace(function (t) {
              var n
              null === (n = t.operation.moveHelper.dragNodes) ||
                void 0 === n ||
                n.forEach(function (t) {
                  e.includes(t) || e.push(t)
                })
            }),
            e
          )
        }),
        (i.prototype.createNode = function (e, t) {
          return new it(e, t)
        }),
        (i.prototype.mount = function () {
          this.attachEvents(Designable.Shared.globalThisPolyfill)
        }),
        (i.prototype.unmount = function () {
          this.detachEvents()
        }),
        (i.defaultProps = {
          shortcuts: [],
          effects: [],
          drivers: [],
          rootComponentName: 'Root',
          sourceIdAttrName: 'data-designer-source-id',
          nodeIdAttrName: 'data-designer-node-id',
          contentEditableAttrName: 'data-content-editable',
          contentEditableNodeIdAttrName: 'data-content-editable-node-id',
          clickStopPropagationAttrName: 'data-click-stop-propagation',
          nodeSelectionIdAttrName: 'data-designer-node-helpers-id',
          nodeDragHandlerAttrName: 'data-designer-node-drag-handler',
          screenResizeHandlerAttrName: 'data-designer-screen-resize-handler',
          nodeResizeHandlerAttrName: 'data-designer-node-resize-handler',
          outlineNodeIdAttrName: 'data-designer-outline-node-id',
          nodeTranslateAttrName: 'data-designer-node-translate-handler',
          defaultScreenType: e.ScreenType.PC,
        }),
        i
      )
    })(Designable.Shared.Event)
  function kt(e) {
    var t = Designable.Shared.globalThisPolyfill.getSelection()
    if (!t.containsNode(e)) {
      var n = (function (e) {
        for (var t = [], n = 0; n < e.rangeCount; n++) {
          var r = e.getRangeAt(n)
          t[n] = {
            collapsed: r.collapsed,
            startOffset: r.startOffset,
            endOffset: r.endOffset,
          }
        }
        return t
      })(t)
      return function (t) {
        void 0 === t && (t = 0)
        var r = Designable.Shared.globalThisPolyfill.getSelection(),
          i = e.childNodes[0]
        i &&
          (r.removeAllRanges(),
          n.forEach(function (e) {
            var n = document.createRange()
            n.collapse(e.collapsed),
              n.setStart(i, e.startOffset + t),
              n.setEnd(i, e.endOffset + t),
              r.addRange(n)
          }))
      }
    }
  }
  var Tt,
    Ot = new Et({ codes: [[wt.Meta], [wt.Control]] }),
    xt = new Et({ codes: [wt.Shift] }),
    At = new Et({
      codes: [
        [wt.Meta, wt.X],
        [wt.Control, wt.X],
      ],
    }),
    It = new Et({
      codes: [
        [wt.Meta, wt.A],
        [wt.Control, wt.A],
      ],
      handler: function (e) {
        var t = null == e ? void 0 : e.workspace.operation
        if (t) {
          var n = t.tree
          t.selection.batchSelect(n.descendants)
        }
      },
    }),
    Ft = new Et({
      codes: [[wt.Backspace], [wt.Delete]],
      handler: function (e) {
        var t = null == e ? void 0 : e.workspace.operation
        t && it.remove(t.selection.selectedNodes)
      },
    }),
    Bt = { nodes: [] },
    Lt = new Et({
      codes: [
        [wt.Meta, wt.C],
        [wt.Control, wt.C],
      ],
      handler: function (e) {
        var t = null == e ? void 0 : e.workspace.operation
        t && (Bt.nodes = t.selection.selectedNodes)
      },
    }),
    Mt = new Et({
      codes: [
        [wt.Meta, wt.V],
        [wt.Control, wt.V],
      ],
      handler: function (e) {
        ;(null == e ? void 0 : e.workspace.operation) && it.clone(Bt.nodes)
      },
    }),
    Wt = new Et({
      codes: [
        [wt.Meta, wt.Z],
        [wt.Control, wt.Z],
      ],
      handler: function (e) {
        var t = null == e ? void 0 : e.workspace
        t && t.history.undo(), t.operation.hover.clear()
      },
    }),
    zt = new Et({
      codes: [
        [wt.Meta, wt.Shift, wt.Z],
        [wt.Control, wt.Shift, wt.Z],
      ],
      handler: function (e) {
        var t = null == e ? void 0 : e.workspace
        t && t.history.redo(), t.operation.hover.clear()
      },
    }),
    jt = new Et({
      codes: [wt.Shift, wt.S],
      handler: function (t) {
        var n = null == t ? void 0 : t.engine
        n && n.cursor.setType(e.CursorType.Selection)
      },
    }),
    Xt = function (e) {
      return e && e.lastChild ? Xt(e.lastChild) : e
    },
    Yt = function (e) {
      var t
      return e.parent
        ? (null === (t = e.parent) || void 0 === t ? void 0 : t.next)
          ? e.parent.next
          : Yt(e.parent)
        : e
    },
    Vt = new Et({
      codes: [
        [wt.Up],
        [wt.PageUp],
        [wt.ArrowUp],
        [wt.Left],
        [wt.LeftWindowKey],
        [wt.ArrowLeft],
      ],
      handler: function (e) {
        var t = null == e ? void 0 : e.workspace.operation
        if (t) {
          var n = t.tree,
            r = t.selection,
            i = n.findById(r.last)
          if (i) {
            var o = i.previous
            if (o) (s = Xt(o)) ? r.select(s) : r.select(o)
            else if (i.parent) r.select(i.parent)
            else {
              var s
              ;(s = Xt(i.lastChild)) && r.select(s)
            }
          }
        }
      },
    }),
    qt = new Et({
      codes: [
        [wt.Down],
        [wt.PageDown],
        [wt.ArrowDown],
        [wt.Right],
        [wt.RightWindowKey],
        [wt.ArrowRight],
      ],
      handler: function (e) {
        var t = null == e ? void 0 : e.workspace.operation
        if (t) {
          var n = t.tree,
            r = t.selection,
            i = n.findById(r.last)
          if (i) {
            var o = i.firstChild ? i.firstChild : i.next
            o ? r.select(o) : r.select(Yt(i))
          }
        }
      },
    }),
    Ht = [
      function (t) {
        t.subscribeTo(d, function (n) {
          t.cursor.dragType === e.CursorDragType.Move &&
            (t.workbench.eachWorkspace(function (e) {
              var r = e.viewport,
                i = new Designable.Shared.Point(
                  n.data.topClientX,
                  n.data.topClientY
                ),
                s = r.getOffsetPoint(
                  new Designable.Shared.Point(
                    t.cursor.dragStartPosition.topClientX,
                    t.cursor.dragStartPosition.topClientY
                  )
                ),
                a = r.getOffsetPoint(
                  new Designable.Shared.Point(
                    t.cursor.position.topClientX,
                    t.cursor.position.topClientY
                  )
                )
              if (r.isPointInViewport(i, !1)) {
                var c = e.operation.tree,
                  l = Designable.Shared.calcRectByStartEndPoint(
                    s,
                    a,
                    r.dragScrollXDelta,
                    r.dragScrollYDelta
                  ),
                  u = []
                c.eachChildren(function (e) {
                  var t = r.getValidNodeOffsetRect(e)
                  t &&
                    Designable.Shared.isCrossRectInRect(l, t) &&
                    u.push([e, t])
                })
                var d = u.reduce(function (e, t) {
                  var n = o(t, 2),
                    r = n[0],
                    i = n[1]
                  return Designable.Shared.isRectInRect(i, l) &&
                    u.some(function (e) {
                      return o(e, 1)[0].isMyParents(r)
                    })
                    ? e
                    : e.concat(r)
                }, [])
                e.operation.selection.batchSafeSelect(d)
              }
            }),
            t.cursor.type === e.CursorType.Selection &&
              t.cursor.setType(e.CursorType.Normal))
        })
      },
      function (t) {
        t.subscribeTo(f, function (n) {
          t.cursor.setStatus(
            t.cursor.status === e.CursorStatus.Dragging ||
              t.cursor.status === e.CursorStatus.DragStart
              ? t.cursor.status
              : e.CursorStatus.Normal
          ),
            t.cursor.status !== e.CursorStatus.Dragging &&
              t.cursor.setPosition(n.data)
        }),
          t.subscribeTo(u, function (n) {
            t.cursor.setStatus(e.CursorStatus.DragStart),
              t.cursor.setDragStartPosition(n.data)
          }),
          t.subscribeTo(l, function (n) {
            t.cursor.setStatus(e.CursorStatus.Dragging),
              t.cursor.setPosition(n.data)
          }),
          t.subscribeTo(d, function (n) {
            t.cursor.setStatus(e.CursorStatus.DragStop),
              t.cursor.setDragEndPosition(n.data),
              t.cursor.setDragStartPosition(null),
              Designable.Shared.requestIdle(function () {
                t.cursor.setStatus(e.CursorStatus.Normal)
              })
          }),
          t.subscribeTo(f, function (n) {
            var r,
              i,
              o =
                null === (r = null == n ? void 0 : n.context) || void 0 === r
                  ? void 0
                  : r.workspace
            if (o) {
              var s = o.operation
              if (t.cursor.status === e.CursorStatus.Normal) {
                var a = n.data.target,
                  c =
                    null === (i = null == a ? void 0 : a.closest) ||
                    void 0 === i
                      ? void 0
                      : i.call(
                          a,
                          '\n      *['
                            .concat(t.props.nodeIdAttrName, '],\n      *[')
                            .concat(t.props.outlineNodeIdAttrName, ']\n    ')
                        )
                if (null == c ? void 0 : c.getAttribute) {
                  var l = c.getAttribute(t.props.nodeIdAttrName),
                    u = c.getAttribute(t.props.outlineNodeIdAttrName),
                    d = s.tree.findById(l || u)
                  d ? s.hover.setHover(d) : s.hover.clear()
                }
              } else s.hover.clear()
            }
          })
      },
      function (e) {
        e.subscribeTo(L, function (e) {
          var t,
            n =
              null === (t = null == e ? void 0 : e.context) || void 0 === t
                ? void 0
                : t.workspace
          if (n) {
            var r = n.viewport,
              i = n.outline
            r.matchViewport(e.data.target) && r.digestViewport(),
              i.matchViewport(e.data.target) && i.digestViewport()
          }
        }),
          e.subscribeTo(M, function (e) {
            var t,
              n =
                null === (t = null == e ? void 0 : e.context) || void 0 === t
                  ? void 0
                  : t.workspace
            if (n) {
              var r = n.viewport,
                i = n.outline
              r.matchViewport(e.data.target) && r.digestViewport(),
                i.matchViewport(e.data.target) && i.digestViewport()
            }
          })
      },
      function (t) {
        t.subscribeTo(u, function (n) {
          if (t.cursor.type === e.CursorType.Normal) {
            var r = n.data.target,
              i =
                null == r
                  ? void 0
                  : r.closest(
                      '\n       *['
                        .concat(t.props.nodeIdAttrName, '],\n       *[')
                        .concat(t.props.sourceIdAttrName, '],\n       *[')
                        .concat(t.props.outlineNodeIdAttrName, ']\n      ')
                    ),
              o =
                null == r
                  ? void 0
                  : r.closest(
                      '*['.concat(t.props.nodeDragHandlerAttrName, ']')
                    ),
              s =
                null == o
                  ? void 0
                  : o.closest('*['.concat(t.props.nodeSelectionIdAttrName, ']'))
            if ((null == i ? void 0 : i.getAttribute) || o) {
              var a =
                  null == i ? void 0 : i.getAttribute(t.props.sourceIdAttrName),
                c =
                  null == i
                    ? void 0
                    : i.getAttribute(t.props.outlineNodeIdAttrName),
                l =
                  null == s
                    ? void 0
                    : s.getAttribute(t.props.nodeSelectionIdAttrName),
                u = null == i ? void 0 : i.getAttribute(t.props.nodeIdAttrName)
              t.workbench.eachWorkspace(function (e) {
                var n = e.operation.moveHelper
                if (u || c || l) {
                  var r = t.findNodeById(c || u || l)
                  if (r) {
                    if (!r.allowDrag()) return
                    if (r === r.root) return
                    var i = t.getAllSelectedNodes().filter(function (e) {
                      return e.allowDrag()
                    })
                    i.some(function (e) {
                      return e === r
                    })
                      ? n.dragStart({ dragNodes: it.sort(i) })
                      : n.dragStart({ dragNodes: [r] })
                  }
                } else if (a) {
                  var o = t.findNodeById(a)
                  o && n.dragStart({ dragNodes: [o] })
                }
              }),
                t.cursor.setStyle('move')
            }
          }
        }),
          t.subscribeTo(l, function (n) {
            if (
              t.cursor.type === e.CursorType.Normal &&
              t.cursor.dragType === e.CursorDragType.Move
            ) {
              var r = n.data.target,
                i =
                  null == r
                    ? void 0
                    : r.closest(
                        '\n      *['
                          .concat(t.props.nodeIdAttrName, '],\n      *[')
                          .concat(t.props.outlineNodeIdAttrName, ']\n    ')
                      ),
                o = new Designable.Shared.Point(
                  n.data.topClientX,
                  n.data.topClientY
                ),
                s = null == i ? void 0 : i.getAttribute(t.props.nodeIdAttrName),
                a =
                  null == i
                    ? void 0
                    : i.getAttribute(t.props.outlineNodeIdAttrName)
              t.workbench.eachWorkspace(function (e) {
                var t = e.operation,
                  n = t.moveHelper,
                  r = n.dragNodes,
                  i = t.tree
                if (r.length) {
                  var c = i.findById(a || s)
                  n.dragMove({ point: o, touchNode: c })
                }
              })
            }
          }),
          t.subscribeTo(M, function (n) {
            var r, i
            if (
              t.cursor.type === e.CursorType.Normal &&
              t.cursor.dragType === e.CursorDragType.Move
            ) {
              var o = new Designable.Shared.Point(
                  t.cursor.position.topClientX,
                  t.cursor.position.topClientY
                ),
                s =
                  null !==
                    (i =
                      null === (r = null == n ? void 0 : n.context) ||
                      void 0 === r
                        ? void 0
                        : r.workspace) && void 0 !== i
                    ? i
                    : t.workbench.activeWorkspace
              if (s) {
                var a = s.operation,
                  c = a.moveHelper
                if (c.dragNodes.length) {
                  var l = a.tree,
                    u = s.viewport,
                    d = s.outline,
                    h = u.elementFromPoint(o),
                    p = d.elementFromPoint(o),
                    f =
                      null == h
                        ? void 0
                        : h.closest(
                            '\n      *['
                              .concat(t.props.nodeIdAttrName, '],\n      *[')
                              .concat(t.props.outlineNodeIdAttrName, ']\n    ')
                          ),
                    v =
                      null == p
                        ? void 0
                        : p.closest(
                            '\n    *['
                              .concat(t.props.nodeIdAttrName, '],\n    *[')
                              .concat(t.props.outlineNodeIdAttrName, ']\n  ')
                          ),
                    g =
                      null == f
                        ? void 0
                        : f.getAttribute(t.props.nodeIdAttrName),
                    y =
                      null == v
                        ? void 0
                        : v.getAttribute(t.props.outlineNodeIdAttrName),
                    b = l.findById(y || g)
                  c.dragMove({ point: o, touchNode: b })
                }
              }
            }
          }),
          t.subscribeTo(d, function () {
            t.cursor.type === e.CursorType.Normal &&
              t.cursor.dragType === e.CursorDragType.Move &&
              (t.workbench.eachWorkspace(function (t) {
                var n = t.operation,
                  r = n.moveHelper,
                  i = r.dragNodes,
                  a = r.closestNode,
                  c = r.closestDirection,
                  l = n.selection
                i.length &&
                  (i.length &&
                    a &&
                    c &&
                    (c === e.ClosestPosition.After ||
                    c === e.ClosestPosition.Under
                      ? a.allowSibling(i) &&
                        l.batchSafeSelect(
                          a.insertAfter.apply(
                            a,
                            s([], o(it.filterDroppable(i, a.parent)), !1)
                          )
                        )
                      : c === e.ClosestPosition.Before ||
                        c === e.ClosestPosition.Upper
                      ? a.allowSibling(i) &&
                        l.batchSafeSelect(
                          a.insertBefore.apply(
                            a,
                            s([], o(it.filterDroppable(i, a.parent)), !1)
                          )
                        )
                      : c === e.ClosestPosition.Inner ||
                        c === e.ClosestPosition.InnerAfter
                      ? a.allowAppend(i) &&
                        (l.batchSafeSelect(
                          a.append.apply(
                            a,
                            s([], o(it.filterDroppable(i, a)), !1)
                          )
                        ),
                        r.dragDrop({ dropNode: a }))
                      : c === e.ClosestPosition.InnerBefore &&
                        a.allowAppend(i) &&
                        (l.batchSafeSelect(
                          a.prepend.apply(
                            a,
                            s([], o(it.filterDroppable(i, a)), !1)
                          )
                        ),
                        r.dragDrop({ dropNode: a }))),
                  r.dragEnd())
              }),
              t.cursor.setStyle(''))
          })
      },
      function (t) {
        t.subscribeTo(h, function (n) {
          var r, i, o, s
          if (t.cursor.status === e.CursorStatus.Normal) {
            var a = n.data.target,
              c =
                null === (r = null == a ? void 0 : a.closest) || void 0 === r
                  ? void 0
                  : r.call(
                      a,
                      '\n      *['
                        .concat(t.props.nodeIdAttrName, '],\n      *[')
                        .concat(t.props.outlineNodeIdAttrName, ']\n    ')
                    ),
              l =
                null === (i = null == a ? void 0 : a.closest) || void 0 === i
                  ? void 0
                  : i.call(
                      a,
                      '*['.concat(t.props.nodeSelectionIdAttrName, ']')
                    ),
              u =
                null !==
                  (s =
                    null === (o = n.context) || void 0 === o
                      ? void 0
                      : o.workspace) && void 0 !== s
                  ? s
                  : t.workbench.activeWorkspace
            if (u)
              if (null == c ? void 0 : c.getAttribute) {
                var d = c.getAttribute(t.props.nodeIdAttrName),
                  h = c.getAttribute(t.props.outlineNodeIdAttrName),
                  p = u.operation,
                  f = p.selection,
                  v = p.tree,
                  g = v.findById(d || h)
                g
                  ? (t.keyboard.requestClean(),
                    t.keyboard.isKeyDown(Designable.Shared.KeyCode.Meta) ||
                    t.keyboard.isKeyDown(Designable.Shared.KeyCode.Control)
                      ? f.has(g)
                        ? f.selected.length > 1 && f.remove(g)
                        : f.add(g)
                      : t.keyboard.isKeyDown(Designable.Shared.KeyCode.Shift)
                      ? f.has(g)
                        ? f.selected.length > 1 && f.remove(g)
                        : f.crossAddTo(g)
                      : f.select(g))
                  : f.select(v)
              } else {
                var y = new Designable.Shared.Point(
                    n.data.topClientX,
                    n.data.topClientY
                  ),
                  b = u.operation,
                  m = u.viewport,
                  w = u.outline,
                  S = m.isPointInViewport(y, !1),
                  R = w.isPointInViewport(y, !1)
                if (l) return
                if (S || R) {
                  var E = b.selection,
                    D = b.tree
                  E.select(D)
                }
              }
          }
        })
      },
      function (e) {
        e.subscribeTo(g, function (t) {
          var n = e.keyboard
          if (n) {
            var r = e.workbench.activeWorkspace || e.workbench.currentWorkspace
            n.handleKeyboard(t, r.getEventContext())
          }
        }),
          e.subscribeTo(y, function (t) {
            var n = e.keyboard
            if (n) {
              var r =
                e.workbench.activeWorkspace || e.workbench.currentWorkspace
              n.handleKeyboard(t, r.getEventContext())
            }
          })
      },
      function (t) {
        var n = null,
          r = null,
          i = null,
          o = null,
          s = function (s, a) {
            t.cursor.status === e.CursorStatus.Dragging &&
              ((n = Designable.Shared.calcAutoScrollBasicInfo(s, 'x', a.rect)),
              (r = Designable.Shared.calcAutoScrollBasicInfo(s, 'y', a.rect)),
              n
                ? (i && i(),
                  (i = Designable.Shared.scrollAnimate(
                    a.scrollContainer,
                    'x',
                    n.direction,
                    n.speed
                  )))
                : i && i(),
              r
                ? (o && o(),
                  (o = Designable.Shared.scrollAnimate(
                    a.scrollContainer,
                    'y',
                    r.direction,
                    r.speed
                  )))
                : o && o())
          }
        t.subscribeTo(u, function () {
          t.workbench.eachWorkspace(function (e) {
            e.viewport.takeDragStartSnapshot()
          })
        }),
          t.subscribeTo(l, function (e) {
            t.workbench.eachWorkspace(function (t) {
              var n = t.viewport,
                r = t.outline,
                i = new Designable.Shared.Point(
                  e.data.topClientX,
                  e.data.topClientY
                )
              r.isPointInViewport(i)
                ? s(i, r)
                : n.isPointInViewport(i) && s(i, n)
            })
          }),
          t.subscribeTo(d, function () {
            ;(n = null), (r = null), i && i(), o && o()
          })
      },
      function (e) {
        e.subscribeWith(
          [
            'append:node',
            'insert:after',
            'insert:before',
            'insert:children',
            'drag:node',
            'drop:node',
            'prepend:node',
            'remove:node',
            'select:node',
            'update:children',
            'wrap:node',
            'update:node:props',
          ],
          function (t) {
            var n
            ;(null === (n = t.context) || void 0 === n
              ? void 0
              : n.workbench) &&
              e.workbench.setActiveWorkspace(t.context.workspace)
          }
        ),
          e.subscribeTo(P, function (t) {
            e.workbench.eachWorkspace(function (e) {
              e !== t.context.workspace && e.operation.selection.clear()
            })
          })
      },
      function (e) {
        var t = {
          activeElements: new Map(),
          queue: [],
          requestTimer: null,
          isComposition: !1,
        }
        function n(e) {
          'Enter' === e.key && (e.stopPropagation(), e.preventDefault())
        }
        function r(n) {
          var r = this,
            i = t.activeElements.get(this)
          if ((n.stopPropagation(), n.preventDefault(), i)) {
            var o = n.target,
              s = function () {
                if (((t.queue.length = 0), !t.isComposition)) {
                  var n = kt(o)
                  Formily.Path.Path.setIn(
                    i.props,
                    r.getAttribute(e.props.contentEditableAttrName),
                    null == o ? void 0 : o.textContent
                  ),
                    Designable.Shared.requestIdle(function () {
                      i.takeSnapshot('update:node:props'), n()
                    })
                }
              }
            t.queue.push(s),
              clearTimeout(t.requestTimer),
              (t.requestTimer = setTimeout(s, 600))
          }
        }
        function i() {
          clearTimeout(t.requestTimer),
            (t.requestTimer = setTimeout(t.queue[t.queue.length - 1], 600))
        }
        function o(e) {
          'compositionend' === e.type
            ? ((t.isComposition = !1), r(e))
            : (clearTimeout(t.requestTimer), (t.isComposition = !0))
        }
        function s(n) {
          n.preventDefault()
          var r = t.activeElements.get(this),
            i = n.clipboardData.getData('text'),
            o = Designable.Shared.globalThisPolyfill.getSelection(),
            s = n.target,
            a = o.getRangeAt(0),
            c = kt(s)
          a.deleteContents(),
            a.insertNode(document.createTextNode(i)),
            Formily.Path.Path.setIn(
              r.props,
              this.getAttribute(e.props.contentEditableAttrName),
              s.textContent
            ),
            c(i.length)
        }
        e.subscribeTo(h, function (n) {
          var a,
            c = n.data.target,
            l =
              null === (a = null == c ? void 0 : c.closest) || void 0 === a
                ? void 0
                : a.call(c, '*['.concat(e.props.contentEditableAttrName, ']'))
          ;(l && 'true' === l.getAttribute('contenteditable')) ||
            t.activeElements.forEach(function (e, n) {
              t.activeElements.delete(n),
                n.removeAttribute('contenteditable'),
                n.removeAttribute('spellcheck'),
                n.removeEventListener('input', r),
                n.removeEventListener('compositionstart', o),
                n.removeEventListener('compositionupdate', o),
                n.removeEventListener('compositionend', o),
                n.removeEventListener('past', s),
                document.removeEventListener('selectionchange', i)
            })
        }),
          e.subscribeTo(p, function (a) {
            var c,
              l = a.data.target,
              u =
                null === (c = null == l ? void 0 : l.closest) || void 0 === c
                  ? void 0
                  : c.call(
                      l,
                      '*['.concat(e.props.contentEditableAttrName, ']')
                    ),
              d = e.workbench.activeWorkspace.operation.tree
            if (u) {
              var h = u.getAttribute('contenteditable')
              if ('false' === h || !h) {
                var p = (function (t) {
                  if (t) {
                    var n = t.getAttribute(
                      e.props.contentEditableNodeIdAttrName
                    )
                    if (n) return n
                    var r = t.closest('*['.concat(e.props.nodeIdAttrName, ']'))
                    return r ? r.getAttribute(e.props.nodeIdAttrName) : void 0
                  }
                })(u)
                if (p) {
                  var f = d.findById(p)
                  f &&
                    (t.activeElements.set(u, f),
                    u.setAttribute('spellcheck', 'false'),
                    u.setAttribute('contenteditable', 'true'),
                    u.focus(),
                    u.addEventListener('input', r),
                    u.addEventListener('compositionstart', o),
                    u.addEventListener('compositionupdate', o),
                    u.addEventListener('compositionend', o),
                    u.addEventListener('keydown', n),
                    u.addEventListener('paste', s),
                    document.addEventListener('selectionchange', i),
                    (function (e) {
                      var t = document.createRange()
                      t.selectNodeContents(e), t.collapse(!1)
                      var n =
                        Designable.Shared.globalThisPolyfill.getSelection()
                      n.removeAllRanges(), n.addRange(t)
                    })(u))
                }
              }
            }
          })
      },
      function (t) {
        t.subscribeTo(u, function (e) {
          var n,
            r,
            i = e.data.target,
            o =
              null !==
                (r =
                  null === (n = e.context) || void 0 === n
                    ? void 0
                    : n.workspace) && void 0 !== r
                ? r
                : t.workbench.activeWorkspace,
            s =
              null == i
                ? void 0
                : i.closest('*['.concat(t.props.nodeTranslateAttrName, ']'))
          if (o) {
            var a = o.operation.transformHelper
            if (s)
              if (s.getAttribute(t.props.nodeTranslateAttrName)) {
                var c = s.closest(
                  '*['.concat(t.props.nodeSelectionIdAttrName, ']')
                )
                if (c) {
                  var l = c.getAttribute(t.props.nodeSelectionIdAttrName)
                  if (l) {
                    var u = t.findNodeById(l)
                    u && a.dragStart({ dragNodes: [u], type: 'translate' })
                  }
                }
              }
          }
        }),
          t.subscribeTo(l, function (n) {
            var r, i
            if (t.cursor.dragType === e.CursorDragType.Translate) {
              var o =
                  null !==
                    (i =
                      null === (r = n.context) || void 0 === r
                        ? void 0
                        : r.workspace) && void 0 !== i
                    ? i
                    : t.workbench.activeWorkspace,
                s = null == o ? void 0 : o.operation.transformHelper,
                a = s.dragNodes
              a.length &&
                (s.dragMove(),
                a.forEach(function (e) {
                  var t = e.getElement()
                  s.translate(e, function (e) {
                    ;(t.style.position = 'absolute'),
                      (t.style.left = '0px'),
                      (t.style.top = '0px'),
                      (t.style.transform = 'translate3d('
                        .concat(e.x, 'px,')
                        .concat(e.y, 'px,0)'))
                  })
                }))
            }
          }),
          t.subscribeTo(d, function (n) {
            var r, i
            if (t.cursor.dragType === e.CursorDragType.Translate) {
              var o =
                  null !==
                    (i =
                      null === (r = n.context) || void 0 === r
                        ? void 0
                        : r.workspace) && void 0 !== i
                    ? i
                    : t.workbench.activeWorkspace,
                s = null == o ? void 0 : o.operation.transformHelper
              s && s.dragEnd()
            }
          })
      },
      function (t) {
        t.subscribeTo(u, function (e) {
          var n,
            r,
            i = e.data.target,
            o =
              null !==
                (r =
                  null === (n = e.context) || void 0 === n
                    ? void 0
                    : n.workspace) && void 0 !== r
                ? r
                : t.workbench.activeWorkspace
          if (o) {
            var s = (function (e) {
                var n =
                  null == e
                    ? void 0
                    : e.closest(
                        '*['.concat(t.props.nodeResizeHandlerAttrName, ']')
                      )
                if (n) {
                  var r = n.getAttribute(t.props.nodeResizeHandlerAttrName)
                  if (r) {
                    var i = n.closest(
                      '*['.concat(t.props.nodeSelectionIdAttrName, ']')
                    )
                    if (i) {
                      var o = i.getAttribute(t.props.nodeSelectionIdAttrName)
                      if (o) {
                        var s = t.findNodeById(o)
                        if (s) return { direction: r, node: s, element: i }
                      }
                    }
                  }
                }
              })(i),
              a = o.operation.transformHelper
            if (s) {
              var c = s.element.closest(
                '*['.concat(t.props.nodeSelectionIdAttrName, ']')
              )
              if (c) {
                var l = c.getAttribute(t.props.nodeSelectionIdAttrName)
                if (l) {
                  var u = t.findNodeById(l)
                  u &&
                    a.dragStart({
                      dragNodes: [u],
                      type: 'resize',
                      direction: s.direction,
                    })
                }
              }
            }
          }
        }),
          t.subscribeTo(l, function (n) {
            var r, i
            if (t.cursor.dragType === e.CursorDragType.Resize) {
              var o =
                  null !==
                    (i =
                      null === (r = n.context) || void 0 === r
                        ? void 0
                        : r.workspace) && void 0 !== i
                    ? i
                    : t.workbench.activeWorkspace,
                s = null == o ? void 0 : o.operation.transformHelper,
                a = s.dragNodes
              a.length &&
                (s.dragMove(),
                a.forEach(function (e) {
                  var t = e.getElement()
                  s.resize(e, function (e) {
                    ;(t.style.width = e.width + 'px'),
                      (t.style.height = e.height + 'px'),
                      (t.style.position = 'absolute'),
                      (t.style.left = '0px'),
                      (t.style.top = '0px'),
                      (t.style.transform = 'translate3d('
                        .concat(e.x, 'px,')
                        .concat(e.y, 'px,0)'))
                  })
                }))
            }
          }),
          t.subscribeTo(d, function (n) {
            var r, i
            if (t.cursor.dragType === e.CursorDragType.Resize) {
              var o =
                  null !==
                    (i =
                      null === (r = n.context) || void 0 === r
                        ? void 0
                        : r.workspace) && void 0 !== i
                    ? i
                    : t.workbench.activeWorkspace,
                s = null == o ? void 0 : o.operation.transformHelper
              s && s.dragEnd()
            }
          })
      },
    ],
    Ut = [$, _, G, Le, Me, Ye],
    Kt = [At, Ot, It, xt, Ft, Lt, Mt, Vt, qt, Wt, zt, jt],
    _t = function (e) {
      return (null == e ? void 0 : e.Behavior) && Gt(e.Behavior)
    },
    Gt = function (e) {
      return Array.isArray(e) && e.every($t)
    },
    $t = function (e) {
      return (
        (null == e ? void 0 : e.name) ||
        (null == e ? void 0 : e.selector) ||
        (null == e ? void 0 : e.extends) ||
        (null == e ? void 0 : e.designerProps) ||
        (null == e ? void 0 : e.designerLocales)
      )
    },
    Zt = function (e) {
      return (null == e ? void 0 : e.Resource) && Jt(e.Resource)
    },
    Jt = function (e) {
      return Array.isArray(e) && e.every(Qt)
    },
    Qt = function (e) {
      return (
        (null == e ? void 0 : e.node) &&
        !!e.node.isSourceNode &&
        e.node instanceof it
      )
    },
    en = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      var n = {}
      return (
        e.forEach(function (e) {
          qe(n, e)
        }),
        n
      )
    },
    tn = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      return e.reduce(function (e, t) {
        if (Designable.Shared.isArr(t))
          return e.concat(tn.apply(void 0, s([], o(t), !1)))
        var n = (t || {}).selector
        return n
          ? ('string' == typeof n &&
              (t.selector = function (e) {
                return e.componentName === n
              }),
            e.concat(t))
          : e
      }, [])
    },
    nn = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      return e.reduce(function (e, t) {
        return e.concat(
          r(r({}, t), {
            node: new it({
              componentName: '$$ResourceNode$$',
              isSourceNode: !0,
              children: t.elements || [],
            }),
          })
        )
      }, [])
    },
    rn = function (e) {
      void 0 === e && (e = {})
      var t = e.drivers || [],
        n = e.effects || [],
        i = e.shortcuts || []
      return Formily.Reactive.untracked(function () {
        return new Pt(
          r(r({}, e), {
            effects: s(s([], o(n), !1), o(Ht), !1),
            drivers: s(s([], o(t), !1), o(Ut), !1),
            shortcuts: s(s([], o(i), !1), o(Kt), !1),
          })
        )
      })
    },
    on = Object.freeze({
      __proto__: null,
      isBehaviorHost: _t,
      isBehaviorList: Gt,
      isBehavior: $t,
      isResourceHost: Zt,
      isResourceList: Jt,
      isResource: Qt,
      createLocales: en,
      createBehavior: tn,
      createResource: nn,
      createDesigner: rn,
      GlobalRegistry: Je,
      Engine: Pt,
      get ScreenType() {
        return e.ScreenType
      },
      get ScreenStatus() {
        return e.ScreenStatus
      },
      Screen: Nt,
      get CursorStatus() {
        return e.CursorStatus
      },
      get CursorDragType() {
        return e.CursorDragType
      },
      get CursorType() {
        return e.CursorType
      },
      Cursor: pt,
      Operation: gt,
      Viewport: ot,
      TreeNode: it,
      Workbench: mt,
      Workspace: bt,
      Selection: st,
      get ClosestPosition() {
        return e.ClosestPosition
      },
      MoveHelper: vt,
      Keyboard: Ct,
      KeyCode: wt,
      Shortcut: Et,
      History: yt,
      DragMoveEvent: l,
      DragStartEvent: u,
      DragStopEvent: d,
      MouseClickEvent: h,
      MouseDoubleClickEvent: p,
      MouseMoveEvent: f,
      KeyDownEvent: g,
      KeyUpEvent: y,
      DragNodeEvent: m,
      DropNodeEvent: w,
      HoverNodeEvent: S,
      InsertAfterEvent: R,
      InsertBeforeEvent: E,
      InsertChildrenEvent: D,
      PrependNodeEvent: C,
      RemoveNodeEvent: N,
      SelectNodeEvent: P,
      UnSelectNodeEvent: k,
      UpdateChildrenEvent: T,
      UpdateNodePropsEvent: O,
      WrapNodeEvent: x,
      CloneNodeEvent: A,
      AppendNodeEvent: I,
      FromNodeEvent: F,
      ViewportResizeEvent: L,
      ViewportScrollEvent: M,
      AddWorkspaceEvent: z,
      RemoveWorkspaceEvent: j,
      SwitchWorkspaceEvent: X,
      HistoryUndoEvent: V,
      HistoryRedoEvent: q,
      HistoryGotoEvent: H,
      HistoryPushEvent: U,
    })
  ;(
    null ===
      (Tt =
        null === Designable.Shared.globalThisPolyfill ||
        void 0 === Designable.Shared.globalThisPolyfill
          ? void 0
          : Designable.Shared.globalThisPolyfill.Designable) || void 0 === Tt
      ? void 0
      : Tt.Core
  )
    ? module.exports &&
      (module.exports = r(
        { __esModule: !0 },
        Designable.Shared.globalThisPolyfill.Designable.Core
      ))
    : ((Designable.Shared.globalThisPolyfill.Designable =
        Designable.Shared.globalThisPolyfill.Designable || {}),
      (Designable.Shared.globalThisPolyfill.Designable.Core = on)),
    (e.AddWorkspaceEvent = z),
    (e.AppendNodeEvent = I),
    (e.CloneNodeEvent = A),
    (e.Cursor = pt),
    (e.DragMoveEvent = l),
    (e.DragNodeEvent = m),
    (e.DragStartEvent = u),
    (e.DragStopEvent = d),
    (e.DropNodeEvent = w),
    (e.Engine = Pt),
    (e.FromNodeEvent = F),
    (e.GlobalRegistry = Je),
    (e.History = yt),
    (e.HistoryGotoEvent = H),
    (e.HistoryPushEvent = U),
    (e.HistoryRedoEvent = q),
    (e.HistoryUndoEvent = V),
    (e.HoverNodeEvent = S),
    (e.InsertAfterEvent = R),
    (e.InsertBeforeEvent = E),
    (e.InsertChildrenEvent = D),
    (e.KeyCode = wt),
    (e.KeyDownEvent = g),
    (e.KeyUpEvent = y),
    (e.Keyboard = Ct),
    (e.MouseClickEvent = h),
    (e.MouseDoubleClickEvent = p),
    (e.MouseMoveEvent = f),
    (e.MoveHelper = vt),
    (e.Operation = gt),
    (e.PrependNodeEvent = C),
    (e.RemoveNodeEvent = N),
    (e.RemoveWorkspaceEvent = j),
    (e.Screen = Nt),
    (e.SelectNodeEvent = P),
    (e.Selection = st),
    (e.Shortcut = Et),
    (e.SwitchWorkspaceEvent = X),
    (e.TreeNode = it),
    (e.UnSelectNodeEvent = k),
    (e.UpdateChildrenEvent = T),
    (e.UpdateNodePropsEvent = O),
    (e.Viewport = ot),
    (e.ViewportResizeEvent = L),
    (e.ViewportScrollEvent = M),
    (e.Workbench = mt),
    (e.Workspace = bt),
    (e.WrapNodeEvent = x),
    (e.createBehavior = tn),
    (e.createDesigner = rn),
    (e.createLocales = en),
    (e.createResource = nn),
    (e.isBehavior = $t),
    (e.isBehaviorHost = _t),
    (e.isBehaviorList = Gt),
    (e.isResource = Qt),
    (e.isResourceHost = Zt),
    (e.isResourceList = Jt),
    Object.defineProperty(e, '__esModule', { value: !0 })
})