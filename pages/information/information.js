(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/information/information"], {
    "10be": function (e, t, n) {},
    "1f1a": function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("da81"),
        c = n.n(o);
      for (var i in o) "default" !== i && function (e) {
        n.d(t, e, (function () {
          return o[e]
        }))
      }(i);
      t["default"] = c.a
    },
    7666: function (e, t, n) {
      "use strict";
      var o = n("10be"),
        c = n.n(o);
      c.a
    },
    bca3: function (e, t, n) {
      "use strict";
      (function (e) {
        n("114d");
        o(n("66fd"));
        var t = o(n("cd53"));

        function o(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(t.default)
      }).call(this, n("543d")["createPage"])
    },
    c147: function (e, t, n) {
      "use strict";
      var o;
      n.d(t, "b", (function () {
        return c
      })), n.d(t, "c", (function () {
        return i
      })), n.d(t, "a", (function () {
        return o
      }));
      var c = function () {
          var e = this,
            t = e.$createElement;
          e._self._c
        },
        i = []
    },
    cd53: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("c147"),
        c = n("1f1a");
      for (var i in c) "default" !== i && function (e) {
        n.d(t, e, (function () {
          return c[e]
        }))
      }(i);
      n("7666");
      var s, a = n("f0c5"),
        r = Object(a["a"])(c["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], s);
      t["default"] = r.exports
    },
    da81: function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: !0
      }), exports.default = void 0;
      var _work = __webpack_require__("5299"),
        _default = {
          name: "home",
          props: {
            cur: String
          },
          watch: {
            cur: {
              immediate: !0,
              handler: function () {
                console.log("watch", this.cur), this.initMenu()
              }
            }
          },
          data: function () {
            return {
              swiperList: [{
                id: 1,
                type: "image",
                url: "/static/banner/banner1.png",
                link: ""
              }, {
                id: 2,
                type: "image",
                url: "/static/banner/banner2.jpg",
                link: ""
              }, {
                id: 3,
                type: "image",
                url: "/static/banner/banner3.jpg",
                link: ""
              }, {
                id: 4,
                type: "image",
                url: "/static/banner/banner4.jpg",
                link: ""
              }],
              middleApps: [{
                icon: "line2_icon1.png",
                title: "疾病百科",
                text: "普通肺炎"
              }, {
                icon: "line2_icon2.png",
                title: "医养结合",
                text: "社区养老"
              }, {
                icon: "line2_icon3.png",
                title: "消防安全",
                text: "安全常识"
              }, {
                icon: "line2_icon4.png",
                title: "养生常识",
                text: "健康养生"
              }],
              usList: _work.us.data,
              osList: _work.os.data,
              websock: "",
              heartCheck: null,
              lockReconnect: !1,
              msgCount: 0,
              dot: {
                mailHome: !1
              }
            }
          },
          methods: {
            initMenu: function () {
              console.log("-----------home------------"), this.initWebSocket(), this.loadCount(0)
            },
            goPage: function (e) {
              if (!e) return !1;
              "annotationList" === e && (this.msgCount = 0), this.dot[e] = !1, this.$router.push({
                name: e
              })
            },
            initWebSocket: function () {
              var e = this.$store.getters.userid,
                t = this.$config.apiUrl.replace("https://", "wss://").replace("http://", "ws://") + "/websocket/" + e;
              console.log("websocket url>>" + t), this.websock = new WebSocket(t), this.websock.onopen = this.websocketOnopen, this.websock.onerror = this.websocketOnerror, this.websock.onmessage = this.websocketOnmessage, this.websock.onclose = this.websocketOnclose
            },
            websocketOnopen: function () {
              console.log("WebSocket连接成功")
            },
            websocketOnerror: function () {
              console.log("WebSocket连接发生错误"), this.reconnect()
            },
            websocketOnmessage: function websocketOnmessage(e) {
              console.log("-----接收消息-------", e.data);
              var data = eval("(" + e.data + ")");
              "topic" == data.cmd ? this.loadCount("1") : "user" == data.cmd ? this.loadCount("2") : "email" == data.cmd && this.loadEmailCount()
            },
            websocketOnclose: function (e) {
              console.log("connection closed (" + e.code + ")"), this.reconnect()
            },
            websocketSend: function (e) {
              try {
                this.websock.send(e)
              } catch (t) {
                console.log("send failed (" + t.code + ")")
              }
            },
            reconnect: function () {
              var e = this;
              e.lockReconnect || (e.lockReconnect = !0, setTimeout((function () {
                console.info("尝试重连..."), e.initWebSocket(), e.lockReconnect = !1
              }), 5e3))
            },
            loadCount: function (e) {},
            loadEmailCount: function () {
              this.dot.mailHome = !0
            },
            getTtemDotInfo: function (e) {
              return "annotationList" === e.page && this.msgCount > 0 ? this.msgCount : ""
            }
          }
        };
      exports.default = _default
    }
  },
  [
    ["bca3", "common/runtime", "common/vendor"]
  ]
]);