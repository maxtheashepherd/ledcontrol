/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/jzz@0.9.6/javascript/JZZ.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t, e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define("JZZ", [], e);
    else {
        if (t || (t = window),
        t.JZZ && t.JZZ.MIDI)
            return;
        t.JZZ = e()
    }
}(this, function() {
    var t, e, n, r, i, o = "undefined" == typeof window ? global : window, s = Date.now || function() {
        return (new Date).getTime()
    }
    , u = s(), a = "undefined" != typeof performance && performance.now ? function() {
        return performance.now()
    }
    : function() {
        return s() - u
    }
    , h = function(t) {
        setTimeout(t, 0)
    };
    function f() {
        this._orig = this,
        this._ready = !1,
        this._queue = [],
        this._log = []
    }
    function c(t, e) {
        this._bad ? e instanceof Function && e.apply(this, [new Error(this._err())]) : t instanceof Function && t.apply(this, [this])
    }
    function p(t, e) {
        this._bad ? t._crash(this._err()) : setTimeout(function() {
            t._resume()
        }, e)
    }
    function l(t) {
        this._bad && t._break(this._err()),
        t._resume()
    }
    function d(t, e, n) {
        t[n] = function() {
            var t = arguments
              , r = e._image();
            return this._push(l, [r]),
            r[n].apply(r, t)
        }
    }
    function _(t) {
        this._bad || (t instanceof Function ? t.apply(this) : console.log(t))
    }
    function m(t) {
        this._bad && (t instanceof Function ? t.apply(this) : console.log(t))
    }
    function g(t) {
        this._bad ? t._crash(this._err()) : (this._break("Closed"),
        t._resume())
    }
    function v(t) {
        if (t.length) {
            var e = t.shift();
            if (t.length) {
                var n = this;
                this._slip(m, [function() {
                    v.apply(n, [t])
                }
                ])
            }
            try {
                this._repair(),
                e.apply(this)
            } catch (t) {
                this._break(t.toString())
            }
        } else
            this._break()
    }
    function y(t, e) {
        for (var n = 0; n < t.length; n++)
            if (t[n] === e)
                return;
        t.push(e)
    }
    function C(t, e) {
        for (var n = 0; n < t.length; n++)
            if (t[n] === e)
                return void t.splice(n, 1)
    }
    function b() {
        f.apply(this)
    }
    function w(t, e, n) {
        if (void 0 === e)
            return w(t, [], []);
        if (t instanceof Object) {
            for (var r = 0; r < e.length; r++)
                if (e[r] === t)
                    return n[r];
            var i;
            for (var o in i = t instanceof Array ? [] : {},
            e.push(t),
            n.push(i),
            t)
                t.hasOwnProperty(o) && (i[o] = w(t[o], e, n));
            return i
        }
        return t
    }
    f.prototype._exec = function() {
        for (; this._ready && this._queue.length; ) {
            var t = this._queue.shift();
            t[0].apply(this, t[1])
        }
    }
    ,
    f.prototype._push = function(t, e) {
        this._queue.push([t, e]),
        f.prototype._exec.apply(this)
    }
    ,
    f.prototype._slip = function(t, e) {
        this._queue.unshift([t, e])
    }
    ,
    f.prototype._pause = function() {
        this._ready = !1
    }
    ,
    f.prototype._resume = function() {
        this._ready = !0,
        f.prototype._exec.apply(this)
    }
    ,
    f.prototype._break = function(t) {
        this._orig._bad = !0,
        this._orig._log.push(t || "Unknown JZZ error")
    }
    ,
    f.prototype._repair = function() {
        this._orig._bad = !1
    }
    ,
    f.prototype._crash = function(t) {
        this._break(t),
        this._resume()
    }
    ,
    f.prototype._err = function() {
        return this._log[this._log.length - 1]
    }
    ,
    f.prototype.log = function() {
        return w(this._log)
    }
    ,
    f.prototype._image = function() {
        var t = function() {};
        t.prototype = this._orig;
        var e = new t;
        return e._ready = !1,
        e._queue = [],
        e
    }
    ,
    f.prototype._thenable = function() {
        var t = this
          , e = function() {};
        e.prototype = t;
        var n = new e;
        return n.then = function(e, n) {
            return t._push(c, [e, n]),
            this
        }
        ,
        n
    }
    ,
    f.prototype.wait = function(t) {
        if (!t)
            return this;
        var e = this._image();
        return this._push(p, [e, t]),
        e._thenable()
    }
    ,
    f.prototype.and = function(t) {
        return this._push(_, [t]),
        this._thenable()
    }
    ,
    f.prototype.or = function(t) {
        return this._push(m, [t]),
        this._thenable()
    }
    ,
    f.prototype._info = {},
    f.prototype.info = function() {
        var t = w(this._orig._info);
        return void 0 === t.engine && (t.engine = "none"),
        void 0 === t.sysex && (t.sysex = !0),
        t
    }
    ,
    f.prototype.name = function() {
        return this.info().name
    }
    ,
    f.prototype.close = function() {
        var t = new f;
        return this._close && this._push(this._close, []),
        this._push(g, [t]),
        t._thenable()
    }
    ,
    b.prototype = new f,
    b.prototype._info = {
        name: "JZZ.js",
        ver: "0.9.6",
        version: "0.9.6",
        inputs: [],
        outputs: []
    };
    var S, M = [], O = [], I = [], A = [];
    function E() {
        var t, n;
        for (S._info.engine = K._type,
        S._info.version = K._version,
        S._info.sysex = K._sysex,
        S._info.inputs = [],
        S._info.outputs = [],
        M = [],
        O = [],
        K._allOuts = {},
        K._allIns = {},
        t = 0; t < K._outs.length; t++)
            (n = K._outs[t]).engine = K,
            K._allOuts[n.name] = n,
            S._info.outputs.push({
                id: n.name,
                name: n.name,
                manufacturer: n.manufacturer,
                version: n.version,
                engine: K._type
            }),
            M.push(n);
        for (t = 0; t < $._outs.length; t++)
            n = $._outs[t],
            S._info.outputs.push({
                id: n.name,
                name: n.name,
                manufacturer: n.manufacturer,
                version: n.version,
                engine: n.type
            }),
            M.push(n);
        for (t = 0; t < K._ins.length; t++)
            (n = K._ins[t]).engine = K,
            K._allIns[n.name] = n,
            S._info.inputs.push({
                id: n.name,
                name: n.name,
                manufacturer: n.manufacturer,
                version: n.version,
                engine: K._type
            }),
            O.push(n);
        for (t = 0; t < $._ins.length; t++)
            n = $._ins[t],
            S._info.inputs.push({
                id: n.name,
                name: n.name,
                manufacturer: n.manufacturer,
                version: n.version,
                engine: n.type
            }),
            O.push(n);
        if (S._watcher && S._watcher._handles.length) {
            var r = function(t, e, n, r) {
                if (!function(t, e, n, r) {
                    var i;
                    if (t.length != n.length || e.length != r.length)
                        return !0;
                    for (i = 0; i < t.length; i++)
                        if (t[i].name != n[i].name)
                            return !0;
                    for (i = 0; i < e.length; i++)
                        if (e[i].name != r[i].name)
                            return !0;
                    return !1
                }(t, e, n, r))
                    return;
                var i, o = [], s = [], u = [], a = [], h = {};
                for (i = 0; i < t.length; i++)
                    h[t[i].name] = !0;
                for (i = 0; i < n.length; i++)
                    h[n[i].name] || o.push(n[i]);
                for (h = {},
                i = 0; i < n.length; i++)
                    h[n[i].name] = !0;
                for (i = 0; i < t.length; i++)
                    h[t[i].name] || u.push(t[i]);
                for (h = {},
                i = 0; i < e.length; i++)
                    h[e[i].name] = !0;
                for (i = 0; i < r.length; i++)
                    h[r[i].name] || s.push(r[i]);
                for (h = {},
                i = 0; i < r.length; i++)
                    h[r[i].name] = !0;
                for (i = 0; i < e.length; i++)
                    h[e[i].name] || a.push(e[i]);
                return {
                    inputs: {
                        added: o,
                        removed: u
                    },
                    outputs: {
                        added: s,
                        removed: a
                    }
                }
            }(A, I, S._info.inputs, S._info.outputs);
            if (r) {
                for (e = 0; e < r.inputs.removed.length; e++)
                    (n = K._inMap[r.inputs.removed[e].name]) && n._closeAll();
                for (e = 0; e < r.outputs.removed.length; e++)
                    (n = K._outMap[r.outputs.removed[e].name]) && n._closeAll();
                W(r)
            }
        }
        A = S._info.inputs,
        I = S._info.outputs
    }
    function x() {
        this._bad || K._refresh(this)
    }
    function P(t, e) {
        var n, r;
        t instanceof Function && (t = t(e)),
        t instanceof Array || (t = [t]);
        var i = []
          , o = []
          , s = e.slice()
          , u = i;
        for (n = 0; n < t.length; n++)
            if (void 0 === t[n])
                u = o;
            else if (t[n]instanceof RegExp)
                for (r = 0; r < s.length; r++)
                    t[n].test(s[r].name) && (u.push(s[r]),
                    s.splice(r, 1),
                    r--);
            else
                for (r = 0; r < s.length; r++)
                    (t[n] + "" == r + "" || t[n] === s[r].name || t[n]instanceof Object && t[n].name === s[r].name) && (u.push(s[r]),
                    s.splice(r, 1),
                    r--);
        return u == i ? i : i.concat(s).concat(o)
    }
    function B(t, e) {
        var n;
        n = e instanceof RegExp ? "Port matching " + e + " not found" : e instanceof Object || void 0 === e ? "Port not found" : 'Port "' + e + '" not found',
        t._crash(n)
    }
    function T(t, e) {
        if (this._bad)
            t._crash(this._err());
        else {
            var n = P(e, M);
            if (!n.length)
                return void B(t, e);
            for (var r = function(t) {
                return function() {
                    t.engine._openOut(this, t.name)
                }
            }, i = 0; i < n.length; i++)
                n[i] = r(n[i]);
            t._slip(v, [n]),
            t._resume()
        }
    }
    function F(t, e) {
        if (this._bad)
            t._crash(this._err());
        else {
            var n = P(e, O);
            if (!n.length)
                return void B(t, e);
            for (var r = function(t) {
                return function() {
                    t.engine._openIn(this, t.name)
                }
            }, i = 0; i < n.length; i++)
                n[i] = r(n[i]);
            t._slip(v, [n]),
            t._resume()
        }
    }
    function q(t, e) {
        this._bad ? t._crash() : (t._slip(V, [e]),
        t._resume())
    }
    function D() {
        f.apply(this),
        this._handles = [],
        this._outs = []
    }
    function L(t) {
        this._bad || this._receive(t)
    }
    function z(t) {
        this._emit(t)
    }
    function j(t) {
        t instanceof Function ? y(this._orig._handles, t) : y(this._orig._outs, t)
    }
    function k(t) {
        void 0 === t ? (this._orig._handles = [],
        this._orig._outs = []) : t instanceof Function ? C(this._orig._handles, t) : C(this._orig._outs, t)
    }
    function N(t, e) {
        this._orig._mpe || (this._orig._mpe = new Gt),
        this._orig._mpe.setup(t, e)
    }
    function R(t) {
        if (t != parseInt(t) || t < 0 || t > 15)
            throw RangeError("Bad channel value (must not be less than 0 or more than 15): " + t)
    }
    function U(t, e) {
        D.apply(this),
        this._port = t._orig,
        this._chan = e,
        d(this, this._port, "ch"),
        d(this, this._port, "mpe"),
        d(this, this._port, "connect"),
        d(this, this._port, "disconnect"),
        d(this, this._port, "close")
    }
    function G(t, e, n) {
        D.apply(this),
        this._port = t._orig,
        this._master = e,
        this._band = n,
        d(this, this._port, "ch"),
        d(this, this._port, "mpe"),
        d(this, this._port, "connect"),
        d(this, this._port, "disconnect"),
        d(this, this._port, "close")
    }
    function Z() {
        f.apply(this),
        this._handles = [],
        d(this, S, "refresh"),
        d(this, S, "openMidiOut"),
        d(this, S, "openMidiIn"),
        d(this, S, "onChange"),
        d(this, S, "close")
    }
    function V(t) {
        t instanceof Function && (this._orig._handles.length || K._watch(),
        y(this._orig._handles, t))
    }
    function J(t) {
        void 0 === t ? this._orig._handles = [] : C(this._orig._handles, t),
        this._orig._handles.length || K._unwatch()
    }
    function W(e) {
        for (t = 0; t < S._watcher._handles.length; t++)
            S._watcher._handles[t].apply(S, [e])
    }
    b.prototype.refresh = function() {
        return this._push(x, []),
        this._thenable()
    }
    ,
    b.prototype.openMidiOut = function(t) {
        var e = new D;
        return this._push(x, []),
        this._push(T, [e, t]),
        e._thenable()
    }
    ,
    b.prototype._openMidiOutNR = function(t) {
        var e = new D;
        return this._push(T, [e, t]),
        e._thenable()
    }
    ,
    b.prototype.openMidiIn = function(t) {
        var e = new D;
        return this._push(x, []),
        this._push(F, [e, t]),
        e._thenable()
    }
    ,
    b.prototype._openMidiInNR = function(t) {
        var e = new D;
        return this._push(F, [e, t]),
        e._thenable()
    }
    ,
    b.prototype.onChange = function(t) {
        this._orig._watcher || (this._orig._watcher = new Z);
        var e = this._orig._watcher._image();
        return this._push(q, [e, t]),
        e._thenable()
    }
    ,
    b.prototype._close = function() {
        K._close()
    }
    ,
    D.prototype = new f,
    D.prototype._filter = function(t) {
        if (this._orig._mpe) {
            var e, n = 0;
            this._handles && this._handles.length && (n = this._handles.length,
            e = this._handles[0]),
            this._outs && this._outs.length && (n = this._outs.length,
            e = this._outs[0]),
            1 != n || e._mpe || (t = this._orig._mpe.filter(t))
        }
        return t
    }
    ,
    D.prototype._receive = function(t) {
        this._emit(this._filter(t))
    }
    ,
    D.prototype.send = function() {
        return this._push(L, [mt.apply(null, arguments)]),
        this._thenable()
    }
    ,
    D.prototype.note = function(t, e, n, r) {
        return this.noteOn(t, e, n),
        r > 0 && this.wait(r).noteOff(t, e),
        this._thenable()
    }
    ,
    D.prototype._emit = function(t) {
        var e;
        for (e = 0; e < this._handles.length; e++)
            this._handles[e].apply(this, [mt(t)._stamp(this)]);
        for (e = 0; e < this._outs.length; e++) {
            var n = mt(t);
            n._stamped(this._outs[e]) || this._outs[e].send(n._stamp(this))
        }
    }
    ,
    D.prototype.emit = function(t) {
        return this._push(z, [t]),
        this._thenable()
    }
    ,
    D.prototype.connect = function(t) {
        return this._push(j, [t]),
        this._thenable()
    }
    ,
    D.prototype.disconnect = function(t) {
        return this._push(k, [t]),
        this._thenable()
    }
    ,
    D.prototype.connected = function() {
        return this._orig._handles.length + this._orig._outs.length
    }
    ,
    D.prototype.ch = function(t) {
        if (void 0 === t)
            return this;
        R(t);
        var e = new U(this,t);
        return this._push(l, [e]),
        e._thenable()
    }
    ,
    D.prototype.mpe = function(t, e) {
        if (void 0 === t && void 0 === e)
            return this;
        Gt.validate(t, e);
        var n = e ? new G(this,t,e) : new U(this,t);
        return this._push(N, [t, e]),
        this._push(l, [n]),
        n._thenable()
    }
    ,
    U.prototype = new D,
    U.prototype.channel = function() {
        return this._chan
    }
    ,
    U.prototype._receive = function(t) {
        this._port._receive(t)
    }
    ,
    U.prototype.note = function(t, e, n) {
        return this.noteOn(t, e),
        n && this.wait(n).noteOff(t),
        this._thenable()
    }
    ,
    G.prototype = new D,
    G.prototype.channel = function() {
        return this._master
    }
    ,
    G.prototype._receive = function(t) {
        this._port._receive(t)
    }
    ,
    G.prototype.note = function(t, e, n) {
        return this.noteOn(t, e),
        n && this.wait(n).noteOff(t),
        this._thenable()
    }
    ,
    Z.prototype = new f,
    Z.prototype.connect = function(t) {
        return this._push(V, [t]),
        this._thenable()
    }
    ,
    Z.prototype.disconnect = function(t) {
        return this._push(J, [t]),
        this._thenable()
    }
    ;
    var H, Q, K = {}, $ = {
        _outs: [],
        _ins: []
    };
    function X() {
        if ("undefined" != typeof module && module.exports)
            return t = require("jazz-midi"),
            K._type = "node",
            K._main = t,
            K._pool = [],
            K._newPlugin = function() {
                return new t.MIDI
            }
            ,
            void st();
        var t;
        this._break()
    }
    function Y() {
        var t = document.createElement("div");
        t.style.visibility = "hidden",
        document.body.appendChild(t);
        var e = document.createElement("object");
        e.style.visibility = "hidden",
        e.style.width = "0px",
        e.style.height = "0px",
        e.classid = "CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90",
        e.type = "audio/x-jazz",
        document.body.appendChild(e),
        e.isJazz ? function(t) {
            K._type = "plugin",
            K._main = t,
            K._pool = [t],
            K._newPlugin = function() {
                var e = document.createElement("object");
                return e.style.visibility = "hidden",
                e.style.width = "0px",
                t.style.height = "0px",
                e.classid = "CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90",
                e.type = "audio/x-jazz",
                document.body.appendChild(e),
                e.isJazz ? e : void 0
            }
            ,
            st()
        }(e) : this._break()
    }
    if ("undefined" != typeof navigator && navigator.requestMIDIAccess) {
        H = navigator,
        Q = navigator.requestMIDIAccess;
        try {
            -1 != Q.toString().indexOf("JZZ(") && (Q = void 0)
        } catch (t) {}
    }
    function tt() {
        if (Q) {
            var t = this;
            return Q.call(H, {}).then(function(e) {
                ut(e),
                t._resume()
            }, function(e) {
                t._crash(e)
            }),
            void this._pause()
        }
        this._break()
    }
    function et() {
        if (Q) {
            var t = this;
            return Q.call(H, {
                sysex: !0
            }).then(function(e) {
                ut(e, !0),
                t._resume()
            }, function(e) {
                t._crash(e)
            }),
            void this._pause()
        }
        this._break()
    }
    function nt() {
        var t, e, n = this;
        this._pause(),
        document.addEventListener("jazz-midi-msg", function r() {
            if (t = !0,
            e || (e = document.getElementById("jazz-midi-msg")),
            e) {
                var i = [];
                try {
                    i = JSON.parse(e.innerText)
                } catch (t) {}
                e.innerText = "",
                document.removeEventListener("jazz-midi-msg", r),
                "version" === i[0] ? (function(t, e) {
                    function n() {
                        for (var t = 0; t < this.clients.length; t++)
                            this._close(this.clients[t])
                    }
                    var r;
                    K._type = "extension",
                    K._version = e,
                    K._sysex = !0,
                    K._pool = [],
                    K._outs = [],
                    K._ins = [],
                    K._inArr = [],
                    K._outArr = [],
                    K._inMap = {},
                    K._outMap = {},
                    K._outsW = [],
                    K._insW = [],
                    K.refreshClients = [],
                    K._msg = t,
                    K._newPlugin = function() {
                        var t = {
                            id: K._pool.length
                        };
                        K._pool.push(t),
                        t.id ? document.dispatchEvent(new CustomEvent("jazz-midi",{
                            detail: ["new"]
                        })) : t.ready = !0
                    }
                    ,
                    K._newPlugin(),
                    K._refresh = function(t) {
                        K.refreshClients.push(t),
                        t._pause(),
                        h(function() {
                            document.dispatchEvent(new CustomEvent("jazz-midi",{
                                detail: ["refresh"]
                            }))
                        })
                    }
                    ,
                    K._openOut = function(t, e) {
                        var r = K._outMap[e];
                        if (!r) {
                            K._pool.length <= K._outArr.length && K._newPlugin();
                            var i = K._pool[K._outArr.length];
                            (r = {
                                name: e,
                                clients: [],
                                info: {
                                    name: e,
                                    manufacturer: K._allOuts[e].manufacturer,
                                    version: K._allOuts[e].version,
                                    type: "MIDI-out",
                                    sysex: K._sysex,
                                    engine: K._type
                                },
                                _start: function() {
                                    document.dispatchEvent(new CustomEvent("jazz-midi",{
                                        detail: ["openout", i.id, e]
                                    }))
                                },
                                _close: function(t) {
                                    K._closeOut(t)
                                },
                                _closeAll: n,
                                _receive: function(t) {
                                    if (t.length) {
                                        var e = t.slice();
                                        e.splice(0, 0, "play", i.id),
                                        document.dispatchEvent(new CustomEvent("jazz-midi",{
                                            detail: e
                                        }))
                                    }
                                }
                            }).plugin = i,
                            i.output = r,
                            K._outArr.push(r),
                            K._outMap[e] = r
                        }
                        t._orig._impl = r,
                        y(r.clients, t._orig),
                        t._info = r.info,
                        t._receive = function(t) {
                            r._receive(t)
                        }
                        ,
                        t._close = function() {
                            r._close(this)
                        }
                        ,
                        r.open || (t._pause(),
                        r.plugin.ready && r._start())
                    }
                    ,
                    K._openIn = function(t, e) {
                        var r = K._inMap[e];
                        if (!r) {
                            K._pool.length <= K._inArr.length && K._newPlugin();
                            var i = K._pool[K._inArr.length];
                            (r = {
                                name: e,
                                clients: [],
                                info: {
                                    name: e,
                                    manufacturer: K._allIns[e].manufacturer,
                                    version: K._allIns[e].version,
                                    type: "MIDI-in",
                                    sysex: K._sysex,
                                    engine: K._type
                                },
                                _start: function() {
                                    document.dispatchEvent(new CustomEvent("jazz-midi",{
                                        detail: ["openin", i.id, e]
                                    }))
                                },
                                _close: function(t) {
                                    K._closeIn(t)
                                },
                                _closeAll: n
                            }).plugin = i,
                            i.input = r,
                            K._inArr.push(r),
                            K._inMap[e] = r
                        }
                        t._orig._impl = r,
                        y(r.clients, t._orig),
                        t._info = r.info,
                        t._close = function() {
                            r._close(this)
                        }
                        ,
                        r.open || (t._pause(),
                        r.plugin.ready && r._start())
                    }
                    ,
                    K._closeOut = function(t) {
                        var e = t._impl;
                        C(e.clients, t._orig),
                        e.clients.length || (e.open = !1,
                        document.dispatchEvent(new CustomEvent("jazz-midi",{
                            detail: ["closeout", e.plugin.id]
                        })))
                    }
                    ,
                    K._closeIn = function(t) {
                        var e = t._impl;
                        C(e.clients, t._orig),
                        e.clients.length || (e.open = !1,
                        document.dispatchEvent(new CustomEvent("jazz-midi",{
                            detail: ["closein", e.plugin.id]
                        })))
                    }
                    ,
                    K._close = function() {
                        K._unwatch()
                    }
                    ,
                    K._watch = function() {
                        K._insW = K._ins,
                        K._outsW = K._outs,
                        r = setInterval(function() {
                            document.dispatchEvent(new CustomEvent("jazz-midi",{
                                detail: ["refresh"]
                            }))
                        }, 250)
                    }
                    ,
                    K._unwatch = function() {
                        clearInterval(r),
                        r = void 0
                    }
                    ,
                    document.addEventListener("jazz-midi-msg", function() {
                        var t, e, n, r = K._msg.innerText.split("\n");
                        for (K._msg.innerText = "",
                        e = 0; e < r.length; e++) {
                            var i = [];
                            try {
                                i = JSON.parse(r[e])
                            } catch (t) {}
                            if (i.length)
                                if ("refresh" === i[0]) {
                                    if (i[1].ins) {
                                        for (n = 0; n < i[1].ins.length; n++)
                                            i[1].ins[n].type = K._type;
                                        K._ins = i[1].ins
                                    }
                                    if (i[1].outs) {
                                        for (n = 0; n < i[1].outs.length; n++)
                                            i[1].outs[n].type = K._type;
                                        K._outs = i[1].outs
                                    }
                                    for (E(),
                                    n = 0; n < K.refreshClients.length; n++)
                                        K.refreshClients[n]._resume();
                                    K.refreshClients = []
                                } else if ("version" === i[0]) {
                                    var o = K._pool[i[1]];
                                    o && (o.ready = !0,
                                    o.input && o.input._start(),
                                    o.output && o.output._start())
                                } else if ("openout" === i[0]) {
                                    if (t = K._pool[i[1]].output)
                                        if (i[2] == t.name) {
                                            if (t.open = !0,
                                            t.clients)
                                                for (n = 0; n < t.clients.length; n++)
                                                    t.clients[n]._resume()
                                        } else if (t.clients)
                                            for (n = 0; n < t.clients.length; n++)
                                                t.clients[n]._crash()
                                } else if ("openin" === i[0]) {
                                    if (t = K._pool[i[1]].input)
                                        if (i[2] == t.name) {
                                            if (t.open = !0,
                                            t.clients)
                                                for (n = 0; n < t.clients.length; n++)
                                                    t.clients[n]._resume()
                                        } else if (t.clients)
                                            for (n = 0; n < t.clients.length; n++)
                                                t.clients[n]._crash()
                                } else if ("midi" === i[0] && (t = K._pool[i[1]].input) && t.clients)
                                    for (n = 0; n < t.clients.length; n++) {
                                        var s = mt(i.slice(3));
                                        t.clients[n]._emit(s)
                                    }
                        }
                    })
                }(e, i[2]),
                n._resume()) : n._crash()
            }
        });
        try {
            document.dispatchEvent(new Event("jazz-midi"))
        } catch (t) {}
        h(function() {
            t || n._crash()
        })
    }
    function rt() {
        this._pause();
        var t = this;
        h(function() {
            t._crash()
        })
    }
    function it(t) {
        for (var e = [], n = function(t) {
            var e = ["node", "extension", "plugin", "webmidi"];
            if (!t || !t.engine)
                return e;
            var n, r, i, o = t.engine instanceof Array ? t.engine : [t.engine], s = {}, u = [], a = [];
            for (i = 0; i < o.length; i++) {
                var h = o[i].toString().toLowerCase();
                s[h] || (s[h] = !0,
                "none" === h && (n = !0),
                "etc" !== h && void 0 !== h || (r = !0),
                r ? a.push(h) : u.push(h),
                C(e, h))
            }
            (r || u.length || a.length) && (n = !1);
            return n ? [] : u.concat(r ? e : a)
        }(t), r = 0; r < n.length; r++)
            "webmidi" == n[r] ? (t && !0 === t.sysex && e.push(et),
            t && !0 === t.sysex && !0 !== t.degrade || e.push(tt)) : "node" == n[r] ? (e.push(X),
            e.push(rt)) : "extension" == n[r] ? e.push(nt) : "plugin" == n[r] && e.push(Y);
        return e.push(ot),
        e
    }
    function ot() {
        K._type = "none",
        K._sysex = !0,
        K._outs = [],
        K._ins = [],
        K._refresh = function() {
            E()
        }
        ,
        K._watch = function() {}
        ,
        K._unwatch = function() {}
        ,
        K._close = function() {}
    }
    function st() {
        var t;
        function e() {
            for (var t = 0; t < this.clients.length; t++)
                this._close(this.clients[t])
        }
        K._inArr = [],
        K._outArr = [],
        K._inMap = {},
        K._outMap = {},
        K._outsW = [],
        K._insW = [],
        K._version = K._main.version,
        K._sysex = !0,
        K._refresh = function() {
            var t, e;
            for (K._outs = [],
            K._ins = [],
            t = 0; (e = K._main.MidiOutInfo(t)).length; t++)
                K._outs.push({
                    type: K._type,
                    name: e[0],
                    manufacturer: e[1],
                    version: e[2]
                });
            for (t = 0; (e = K._main.MidiInInfo(t)).length; t++)
                K._ins.push({
                    type: K._type,
                    name: e[0],
                    manufacturer: e[1],
                    version: e[2]
                });
            E()
        }
        ,
        K._openOut = function(t, n) {
            var r = K._outMap[n];
            if (!r) {
                K._pool.length <= K._outArr.length && K._pool.push(K._newPlugin()),
                r = {
                    name: n,
                    clients: [],
                    info: {
                        name: n,
                        manufacturer: K._allOuts[n].manufacturer,
                        version: K._allOuts[n].version,
                        type: "MIDI-out",
                        sysex: K._sysex,
                        engine: K._type
                    },
                    _close: function(t) {
                        K._closeOut(t)
                    },
                    _closeAll: e,
                    _receive: function(t) {
                        t.length && this.plugin.MidiOutRaw(t.slice())
                    }
                };
                var i = K._pool[K._outArr.length];
                r.plugin = i,
                K._outArr.push(r),
                K._outMap[n] = r
            }
            if (!r.open) {
                var o = r.plugin.MidiOutOpen(n);
                if (o !== n)
                    return o && r.plugin.MidiOutClose(),
                    void t._break();
                r.open = !0
            }
            t._orig._impl = r,
            y(r.clients, t._orig),
            t._info = r.info,
            t._receive = function(t) {
                r._receive(t)
            }
            ,
            t._close = function() {
                r._close(this)
            }
        }
        ,
        K._openIn = function(t, n) {
            var r, i = K._inMap[n];
            if (!i) {
                K._pool.length <= K._inArr.length && K._pool.push(K._newPlugin());
                (i = {
                    name: n,
                    clients: [],
                    info: {
                        name: n,
                        manufacturer: K._allIns[n].manufacturer,
                        version: K._allIns[n].version,
                        type: "MIDI-in",
                        sysex: K._sysex,
                        engine: K._type
                    },
                    _close: function(t) {
                        K._closeIn(t)
                    },
                    _closeAll: e,
                    handle: function(t, e) {
                        for (var n = 0; n < this.clients.length; n++) {
                            var r = mt(e);
                            this.clients[n]._emit(r)
                        }
                    }
                }).onmidi = (r = i,
                function(t, e) {
                    r.handle(t, e)
                }
                );
                var o = K._pool[K._inArr.length];
                i.plugin = o,
                K._inArr.push(i),
                K._inMap[n] = i
            }
            if (!i.open) {
                var s = i.plugin.MidiInOpen(n, i.onmidi);
                if (s !== n)
                    return s && i.plugin.MidiInClose(),
                    void t._break();
                i.open = !0
            }
            t._orig._impl = i,
            y(i.clients, t._orig),
            t._info = i.info,
            t._close = function() {
                i._close(this)
            }
        }
        ,
        K._closeOut = function(t) {
            var e = t._impl;
            C(e.clients, t._orig),
            e.clients.length || (e.open = !1,
            e.plugin.MidiOutClose())
        }
        ,
        K._closeIn = function(t) {
            var e = t._impl;
            C(e.clients, t._orig),
            e.clients.length || (e.open = !1,
            e.plugin.MidiInClose())
        }
        ,
        K._close = function() {
            for (var t = 0; t < K._inArr.length; t++)
                K._inArr[t].open && K._inArr[t].plugin.MidiInClose();
            K._unwatch()
        }
        ,
        K._watch = function() {
            t || (t = setInterval(function() {
                K._refresh()
            }, 250))
        }
        ,
        K._unwatch = function() {
            t && clearInterval(t),
            t = void 0
        }
    }
    function ut(t, e) {
        var n;
        function r() {
            for (var t = 0; t < this.clients.length; t++)
                this._close(this.clients[t])
        }
        K._type = "webmidi",
        K._version = 43,
        K._sysex = !!e,
        K._access = t,
        K._inMap = {},
        K._outMap = {},
        K._outsW = [],
        K._insW = [],
        K._refresh = function() {
            K._outs = [],
            K._ins = [],
            K._access.outputs.forEach(function(t) {
                K._outs.push({
                    type: K._type,
                    name: t.name,
                    manufacturer: t.manufacturer,
                    version: t.version
                })
            }),
            K._access.inputs.forEach(function(t) {
                K._ins.push({
                    type: K._type,
                    name: t.name,
                    manufacturer: t.manufacturer,
                    version: t.version
                })
            }),
            E()
        }
        ,
        K._openOut = function(t, e) {
            var n, i = K._outMap[e];
            i || (i = {
                name: e,
                clients: [],
                info: {
                    name: e,
                    manufacturer: K._allOuts[e].manufacturer,
                    version: K._allOuts[e].version,
                    type: "MIDI-out",
                    sysex: K._sysex,
                    engine: K._type
                },
                _close: function(t) {
                    K._closeOut(t)
                },
                _closeAll: r,
                _receive: function(t) {
                    i.dev && t.length && this.dev.send(t.slice())
                }
            }),
            K._access.outputs.forEach(function(t) {
                t.name === e && (n = t)
            }),
            n ? (i.dev = n,
            K._outMap[e] = i,
            t._orig._impl = i,
            y(i.clients, t._orig),
            t._info = i.info,
            t._receive = function(t) {
                i._receive(t)
            }
            ,
            t._close = function() {
                i._close(this)
            }
            ,
            i.dev.open && (t._pause(),
            i.dev.open().then(function() {
                t._resume()
            }, function() {
                t._crash()
            }))) : t._break()
        }
        ,
        K._openIn = function(t, e) {
            var n, i, o = K._inMap[e];
            if (o || (o = {
                name: e,
                clients: [],
                info: {
                    name: e,
                    manufacturer: K._allIns[e].manufacturer,
                    version: K._allIns[e].version,
                    type: "MIDI-in",
                    sysex: K._sysex,
                    engine: K._type
                },
                _close: function(t) {
                    K._closeIn(t)
                },
                _closeAll: r,
                handle: function(t) {
                    for (var e = 0; e < this.clients.length; e++) {
                        var n = mt([].slice.call(t.data));
                        this.clients[e]._emit(n)
                    }
                }
            }),
            K._access.inputs.forEach(function(t) {
                t.name === e && (n = t)
            }),
            n) {
                o.dev = n;
                o.dev.onmidimessage = (i = o,
                function(t) {
                    i.handle(t)
                }
                ),
                K._inMap[e] = o,
                t._orig._impl = o,
                y(o.clients, t._orig),
                t._info = o.info,
                t._close = function() {
                    o._close(this)
                }
                ,
                o.dev.open && (t._pause(),
                o.dev.open().then(function() {
                    t._resume()
                }, function() {
                    t._crash()
                }))
            } else
                t._break()
        }
        ,
        K._closeOut = function(t) {
            var e = t._impl;
            C(e.clients, t._orig),
            e.clients.length || (e.dev && e.dev.close && e.dev.close(),
            e.dev = void 0)
        }
        ,
        K._closeIn = function(t) {
            var e = t._impl;
            C(e.clients, t._orig),
            e.clients.length || (e.dev && (e.dev.onmidimessage = null,
            e.dev.close && e.dev.close()),
            e.dev = void 0)
        }
        ,
        K._close = function() {
            K._unwatch()
        }
        ,
        K._watch = function() {
            K._access.onstatechange = function() {
                n = !0,
                h(function() {
                    n && (K._refresh(),
                    n = !1)
                })
            }
        }
        ,
        K._unwatch = function() {
            K._access.onstatechange = void 0
        }
    }
    var at = function(t) {
        return S || function(t) {
            Zt(),
            (S = new b)._options = t,
            S._push(v, [it(t)]),
            S.refresh(),
            S._resume()
        }(t),
        S._thenable()
    };
    function ht() {
        var t = this instanceof ht ? this : t = new ht;
        return ht.prototype.reset.apply(t, arguments),
        t
    }
    function ft() {
        29.97 == this.type && !this.second && this.frame < 2 && this.minute % 10 && (this.frame = 2)
    }
    function ct(t) {
        return [[24, 25, 29.97, 30][t[7] >> 1 & 3], (1 & t[7]) << 4 | t[6], t[5] << 4 | t[4], t[3] << 4 | t[2], t[1] << 4 | t[0]]
    }
    function pt(t) {
        var e;
        switch (!t.backwards && t.quarter >= 4 ? t.decrFrame() : t.backwards && t.quarter < 4 && t.incrFrame(),
        t.quarter >> 1) {
        case 0:
            e = t.frame;
            break;
        case 1:
            e = t.second;
            break;
        case 2:
            e = t.minute;
            break;
        default:
            e = t.hour
        }
        return 1 & t.quarter ? e >>= 4 : e &= 15,
        7 == t.quarter && (25 == t.type ? e |= 2 : 29.97 == t.type ? e |= 4 : 30 == t.type && (e |= 6)),
        !t.backwards && t.quarter >= 4 ? t.incrFrame() : t.backwards && t.quarter < 4 && t.decrFrame(),
        e | t.quarter << 4
    }
    function lt(t) {
        return 25 == t.type ? 32 | t.hour : 29.97 == t.type ? 64 | t.hour : 30 == t.type ? 96 | t.hour : t.hour
    }
    function dt(t) {
        return t < 10 ? "0" + t : t
    }
    function _t(t) {
        for (var e = [], n = 0; n < t.length; n++)
            e[n] = dt(t[n]);
        return e.join(":")
    }
    function mt(t) {
        var e, n = this instanceof mt ? this : n = new mt;
        if (t instanceof mt) {
            for (e in n._from = t._from.slice(),
            t)
                t.hasOwnProperty(e) && "_from" != e && (n[e] = t[e]);
            return n
        }
        if (n._from = [],
        void 0 === t)
            return n;
        var r = t instanceof Array ? t : arguments;
        for (e = 0; e < r.length; e++)
            i = r[e],
            1 == e && (n[0] >= 128 && n[0] <= 175 && (i = mt.noteValue(i)),
            n[0] >= 192 && n[0] <= 207 && (i = mt.programValue(i))),
            (i != parseInt(i) || i < 0 || i > 255) && yt(r[e]),
            n.push(i);
        return n
    }
    at.JZZ = at,
    at.info = function() {
        return b.prototype.info()
    }
    ,
    at.Widget = function(t) {
        var e = new D;
        if (t instanceof Object)
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
        return e._resume(),
        e
    }
    ,
    b.prototype.Widget = at.Widget,
    ht.prototype.reset = function(t) {
        if (t instanceof ht)
            return this.setType(t.getType()),
            this.setHour(t.getHour()),
            this.setMinute(t.getMinute()),
            this.setSecond(t.getSecond()),
            this.setFrame(t.getFrame()),
            this.setQuarter(t.getQuarter()),
            this;
        var e = t instanceof Array ? t : arguments;
        return this.setType(e[0]),
        this.setHour(e[1]),
        this.setMinute(e[2]),
        this.setSecond(e[3]),
        this.setFrame(e[4]),
        this.setQuarter(e[5]),
        this
    }
    ,
    ht.prototype.isFullFrame = function() {
        return 0 == this.quarter || 4 == this.quarter
    }
    ,
    ht.prototype.getType = function() {
        return this.type
    }
    ,
    ht.prototype.getHour = function() {
        return this.hour
    }
    ,
    ht.prototype.getMinute = function() {
        return this.minute
    }
    ,
    ht.prototype.getSecond = function() {
        return this.second
    }
    ,
    ht.prototype.getFrame = function() {
        return this.frame
    }
    ,
    ht.prototype.getQuarter = function() {
        return this.quarter
    }
    ,
    ht.prototype.setType = function(t) {
        if (void 0 === t || 24 == t)
            this.type = 24;
        else if (25 == t)
            this.type = 25;
        else if (29.97 == t)
            this.type = 29.97,
            ft.apply(this);
        else {
            if (30 != t)
                throw RangeError("Bad SMPTE frame rate: " + t);
            this.type = 30
        }
        return this.frame >= this.type && (this.frame = this.type - 1),
        this
    }
    ,
    ht.prototype.setHour = function(t) {
        if (void 0 === t && (t = 0),
        t != parseInt(t) || t < 0 || t >= 24)
            throw RangeError("Bad SMPTE hours value: " + t);
        return this.hour = t,
        this
    }
    ,
    ht.prototype.setMinute = function(t) {
        if (void 0 === t && (t = 0),
        t != parseInt(t) || t < 0 || t >= 60)
            throw RangeError("Bad SMPTE minutes value: " + t);
        return this.minute = t,
        ft.apply(this),
        this
    }
    ,
    ht.prototype.setSecond = function(t) {
        if (void 0 === t && (t = 0),
        t != parseInt(t) || t < 0 || t >= 60)
            throw RangeError("Bad SMPTE seconds value: " + t);
        return this.second = t,
        ft.apply(this),
        this
    }
    ,
    ht.prototype.setFrame = function(t) {
        if (void 0 === t && (t = 0),
        t != parseInt(t) || t < 0 || t >= this.type)
            throw RangeError("Bad SMPTE frame number: " + t);
        return this.frame = t,
        ft.apply(this),
        this
    }
    ,
    ht.prototype.setQuarter = function(t) {
        if (void 0 === t && (t = 0),
        t != parseInt(t) || t < 0 || t >= 8)
            throw RangeError("Bad SMPTE quarter frame: " + t);
        return this.quarter = t,
        this
    }
    ,
    ht.prototype.incrFrame = function() {
        return this.frame++,
        this.frame >= this.type && (this.frame = 0,
        this.second++,
        this.second >= 60 && (this.second = 0,
        this.minute++,
        this.minute >= 60 && (this.minute = 0,
        this.hour = this.hour >= 23 ? 0 : this.hour + 1))),
        ft.apply(this),
        this
    }
    ,
    ht.prototype.decrFrame = function() {
        return !this.second && 2 == this.frame && 29.97 == this.type && this.minute % 10 && (this.frame = 0),
        this.frame--,
        this.frame < 0 && (this.frame = 29.97 == this.type ? 29 : this.type - 1,
        this.second--,
        this.second < 0 && (this.second = 59,
        this.minute--,
        this.minute < 0 && (this.minute = 59,
        this.hour = this.hour ? this.hour - 1 : 23))),
        this
    }
    ,
    ht.prototype.incrQF = function() {
        return this.backwards = !1,
        this.quarter = this.quarter + 1 & 7,
        0 != this.quarter && 4 != this.quarter || this.incrFrame(),
        this
    }
    ,
    ht.prototype.decrQF = function() {
        return this.backwards = !0,
        this.quarter = this.quarter + 7 & 7,
        3 != this.quarter && 7 != this.quarter || this.decrFrame(),
        this
    }
    ,
    ht.prototype.read = function(t) {
        if (t instanceof mt || (t = mt.apply(null, arguments)),
        240 == t[0] && 127 == t[1] && 1 == t[3] && 1 == t[4] && 247 == t[9])
            return this.type = [24, 25, 29.97, 30][t[5] >> 5 & 3],
            this.hour = 31 & t[5],
            this.minute = t[6],
            this.second = t[7],
            this.frame = t[8],
            this.quarter = 0,
            this._ = void 0,
            this._b = void 0,
            this._f = void 0,
            !0;
        if (241 == t[0] && void 0 !== t[1]) {
            var e = t[1] >> 4
              , n = 15 & t[1];
            return 0 == e ? 7 == this._ && (7 == this._f && (this.reset(ct(this._a)),
            this.incrFrame()),
            this.incrFrame()) : 3 == e ? 4 == this._ && this.decrFrame() : 4 == e ? 3 == this._ && this.incrFrame() : 7 == e && 0 === this._ && (0 === this._b && (this.reset(ct(this._a)),
            this.decrFrame()),
            this.decrFrame()),
            this._a || (this._a = []),
            this._a[e] = n,
            this._f = this._f === e - 1 || 0 == e ? e : void 0,
            this._b = this._b === e + 1 || 7 == e ? e : void 0,
            this._ = e,
            this.quarter = e,
            !0
        }
        return !1
    }
    ,
    ht.prototype.toString = function() {
        return _t([this.hour, this.minute, this.second, this.frame])
    }
    ,
    at.SMPTE = ht,
    mt.prototype = [],
    mt.prototype.constructor = mt;
    var gt = {};
    mt.noteValue = function(t) {
        return void 0 === t ? void 0 : gt[t.toString().toLowerCase()]
    }
    ,
    mt.programValue = function(t) {
        return t
    }
    ,
    mt.freq = function(t, e) {
        return void 0 === e && (e = 440),
        e * Math.pow(2, (bt(mt.noteValue(t), t) - 69) / 12)
    }
    ;
    var vt = {
        c: 0,
        d: 2,
        e: 4,
        f: 5,
        g: 7,
        a: 9,
        b: 11,
        h: 11
    };
    for (n in vt)
        if (vt.hasOwnProperty(n))
            for (i = 0; i < 12 && !((r = vt[n] + 12 * i) > 127); i++)
                gt[n + i] = r,
                r > 0 && (gt[n + "b" + i] = r - 1,
                gt[n + "bb" + i] = r - 2),
                r < 127 && (gt[n + "#" + i] = r + 1,
                gt[n + "##" + i] = r + 2);
    for (i = 0; i < 128; i++)
        gt[i] = i;
    function yt(t) {
        throw RangeError("Bad MIDI value: " + t)
    }
    function Ct(t) {
        return R(t),
        parseInt(t)
    }
    function bt(t, e) {
        return (t != parseInt(t) || t < 0 || t > 127) && yt(void 0 === e ? t : e),
        parseInt(t)
    }
    function wt(t, e) {
        return (t != parseInt(t) || t < 0 || t > 255) && yt(void 0 === e ? t : e),
        parseInt(t)
    }
    function St(t) {
        return (t != parseInt(t) || t < 0 || t > 16383) && yt(t),
        127 & parseInt(t)
    }
    function Mt(t) {
        return (t != parseInt(t) || t < 0 || t > 16383) && yt(t),
        parseInt(t) >> 7
    }
    var Ot = {
        noteOff: function(t, e, n) {
            return void 0 === n && (n = 64),
            [128 + Ct(t), bt(mt.noteValue(e), e), bt(n)]
        },
        noteOn: function(t, e, n) {
            return void 0 === n && (n = 127),
            [144 + Ct(t), bt(mt.noteValue(e), e), bt(n)]
        },
        aftertouch: function(t, e, n) {
            return [160 + Ct(t), bt(mt.noteValue(e), e), bt(n)]
        },
        control: function(t, e, n) {
            return [176 + Ct(t), bt(e), bt(n)]
        },
        program: function(t, e) {
            return [192 + Ct(t), bt(mt.programValue(e), e)]
        },
        pressure: function(t, e) {
            return [208 + Ct(t), bt(e)]
        },
        pitchBend: function(t, e) {
            return [224 + Ct(t), St(e), Mt(e)]
        },
        bankMSB: function(t, e) {
            return [176 + Ct(t), 0, bt(e)]
        },
        bankLSB: function(t, e) {
            return [176 + Ct(t), 32, bt(e)]
        },
        modMSB: function(t, e) {
            return [176 + Ct(t), 1, bt(e)]
        },
        modLSB: function(t, e) {
            return [176 + Ct(t), 33, bt(e)]
        },
        breathMSB: function(t, e) {
            return [176 + Ct(t), 2, bt(e)]
        },
        breathLSB: function(t, e) {
            return [176 + Ct(t), 34, bt(e)]
        },
        footMSB: function(t, e) {
            return [176 + Ct(t), 4, bt(e)]
        },
        footLSB: function(t, e) {
            return [176 + Ct(t), 36, bt(e)]
        },
        portamentoMSB: function(t, e) {
            return [176 + Ct(t), 5, bt(e)]
        },
        portamentoLSB: function(t, e) {
            return [176 + Ct(t), 37, bt(e)]
        },
        volumeMSB: function(t, e) {
            return [176 + Ct(t), 7, bt(e)]
        },
        volumeLSB: function(t, e) {
            return [176 + Ct(t), 39, bt(e)]
        },
        balanceMSB: function(t, e) {
            return [176 + Ct(t), 8, bt(e)]
        },
        balanceLSB: function(t, e) {
            return [176 + Ct(t), 40, bt(e)]
        },
        panMSB: function(t, e) {
            return [176 + Ct(t), 10, bt(e)]
        },
        panLSB: function(t, e) {
            return [176 + Ct(t), 42, bt(e)]
        },
        expressionMSB: function(t, e) {
            return [176 + Ct(t), 11, bt(e)]
        },
        expressionLSB: function(t, e) {
            return [176 + Ct(t), 43, bt(e)]
        },
        damper: function(t, e) {
            return [176 + Ct(t), 64, e ? 127 : 0]
        },
        portamento: function(t, e) {
            return [176 + Ct(t), 65, e ? 127 : 0]
        },
        sostenuto: function(t, e) {
            return [176 + Ct(t), 66, e ? 127 : 0]
        },
        soft: function(t, e) {
            return [176 + Ct(t), 67, e ? 127 : 0]
        },
        allSoundOff: function(t) {
            return [176 + Ct(t), 120, 0]
        },
        allNotesOff: function(t) {
            return [176 + Ct(t), 123, 0]
        }
    }
      , It = {
        mtc: function(t) {
            return [241, pt(t)]
        },
        songPosition: function(t) {
            return [242, St(t), Mt(t)]
        },
        songSelect: function(t) {
            return [243, bt(t)]
        },
        tune: function() {
            return [246]
        },
        clock: function() {
            return [248]
        },
        start: function() {
            return [250]
        },
        continue: function() {
            return [251]
        },
        stop: function() {
            return [252]
        },
        active: function() {
            return [254]
        },
        sxIdRequest: function() {
            return [240, 126, 127, 6, 1, 247]
        },
        sxFullFrame: function(t) {
            return [240, 127, 127, 1, 1, lt(t), t.getMinute(), t.getSecond(), t.getFrame(), 247]
        },
        reset: function() {
            return [255]
        }
    };
    function At(t, e) {
        var n = new mt;
        return n.ff = wt(t),
        n.dd = void 0 === e ? "" : function(t) {
            t = "" + t;
            for (var e = 0; e < t.length; e++)
                t.charCodeAt(e) > 255 && yt(t[e]);
            return t
        }(e),
        n
    }
    var Et = {
        smf: function(t) {
            if (t instanceof mt)
                return new mt(t);
            var e = t instanceof Array ? t : arguments
              , n = wt(e[0])
              , r = "";
            return 2 == e.length ? r = jt(e[1]) : e.length > 2 && (r = jt(Array.prototype.slice.call(e, 1))),
            At(n, r)
        },
        smfSeqNumber: function(t) {
            if (t == parseInt(t)) {
                if (t < 0 || t > 65535)
                    throw RangeError("Sequence number out of range: " + t);
                t = String.fromCharCode(t >> 8) + String.fromCharCode(255 & t)
            } else if (0 == (t = "" + t).length)
                t = "\0\0";
            else if (1 == t.length)
                t = "\0" + t;
            else if (t.length > 2)
                throw RangeError("Sequence number out of range: " + Ut(t));
            return At(0, t)
        },
        smfText: function(t) {
            return At(1, at.lib.toUTF8(t))
        },
        smfCopyright: function(t) {
            return At(2, at.lib.toUTF8(t))
        },
        smfSeqName: function(t) {
            return At(3, at.lib.toUTF8(t))
        },
        smfInstrName: function(t) {
            return At(4, at.lib.toUTF8(t))
        },
        smfLyric: function(t) {
            return At(5, at.lib.toUTF8(t))
        },
        smfMarker: function(t) {
            return At(6, at.lib.toUTF8(t))
        },
        smfCuePoint: function(t) {
            return At(7, at.lib.toUTF8(t))
        },
        smfProgName: function(t) {
            return At(8, at.lib.toUTF8(t))
        },
        smfDevName: function(t) {
            return At(9, at.lib.toUTF8(t))
        },
        smfChannelPrefix: function(t) {
            if (t == parseInt(t))
                R(t),
                t = String.fromCharCode(t);
            else if (0 == (t = "" + t).length)
                t = "\0";
            else if (t.length > 1 || t.charCodeAt(0) > 15)
                throw RangeError("Channel number out of range: " + Ut(t));
            return At(32, t)
        },
        smfMidiPort: function(t) {
            if (t == parseInt(t)) {
                if (t < 0 || t > 127)
                    throw RangeError("Port number out of range: " + t);
                t = String.fromCharCode(t)
            } else if (0 == (t = "" + t).length)
                t = "\0";
            else if (t.length > 1 || t.charCodeAt(0) > 127)
                throw RangeError("Port number out of range: " + Ut(t));
            return At(33, t)
        },
        smfEndOfTrack: function(t) {
            if ("" != jt(t))
                throw RangeError("Unexpected data: " + Ut(jt(t)));
            return At(47)
        },
        smfTempo: function(t) {
            if (3 == ("" + t).length)
                return At(81, t);
            if (t == parseInt(t) && t > 0 && t <= 16777215)
                return At(81, String.fromCharCode(t >> 16) + String.fromCharCode(t >> 8 & 255) + String.fromCharCode(255 & t));
            throw RangeError("Out of range: " + Ut(jt(t)))
        },
        smfBPM: function(t) {
            return Et.smfTempo(Math.round(6e7 / t))
        },
        smfSMPTE: function(t) {
            if (t instanceof ht)
                return At(84, String.fromCharCode(t.hour) + String.fromCharCode(t.minute) + String.fromCharCode(t.second) + String.fromCharCode(t.frame) + String.fromCharCode(t.quarter % 4 * 25));
            if (5 == ("" + t).length)
                return At(84, t);
            var e = t instanceof Array ? t : Array.prototype.slice.call(arguments);
            return e.splice(0, 0, 30),
            Et.smfSMPTE(new ht(e))
        },
        smfTimeSignature: function(t, e, n, r) {
            var i, o, s, u, a = ("" + t).match(/^\s*(\d+)\s*\/\s*(\d+)\s*$/);
            if (a) {
                if (i = parseInt(a[1]),
                o = parseInt(a[2]),
                i > 0 && i <= 255 && o && !(o & o - 1)) {
                    for (s = o,
                    o = 0,
                    s >>= 1; s; s >>= 1)
                        o++;
                    return s = e == parseInt(e) ? e : 24,
                    u = n == parseInt(n) ? n : 8,
                    At(88, String.fromCharCode(i) + String.fromCharCode(o) + String.fromCharCode(s) + String.fromCharCode(u))
                }
                if (4 == ("" + t).length)
                    return At(88, t)
            } else {
                if (t == parseInt(t) && e == parseInt(e) && e && !(e & e - 1)) {
                    for (i = t,
                    o = 0,
                    s = e,
                    s >>= 1; s; s >>= 1)
                        o++;
                    return s = n == parseInt(n) ? n : 24,
                    u = r == parseInt(r) ? r : 8,
                    At(88, String.fromCharCode(i) + String.fromCharCode(o) + String.fromCharCode(s) + String.fromCharCode(u))
                }
                if (4 == ("" + t).length)
                    return At(88, t)
            }
            throw RangeError("Wrong time signature: " + Ut(jt(t)))
        },
        smfKeySignature: function(t) {
            var e = (t = "" + t).match(/^\s*([A-H][b#]?)\s*(|maj|major|dur|m|min|minor|moll)\s*$/i);
            if (e) {
                var n = {
                    CB: 0,
                    GB: 1,
                    DB: 2,
                    AB: 3,
                    EB: 4,
                    BB: 5,
                    F: 6,
                    C: 7,
                    G: 8,
                    D: 9,
                    A: 10,
                    E: 11,
                    B: 12,
                    H: 12,
                    "F#": 13,
                    "C#": 14,
                    "G#": 15,
                    "D#": 16,
                    "A#": 17
                }[e[1].toUpperCase()]
                  , r = {
                    "": 0,
                    MAJ: 0,
                    MAJOR: 0,
                    DUR: 0,
                    M: 1,
                    MIN: 1,
                    MINOR: 1,
                    MOLL: 1
                }[e[2].toUpperCase()];
                void 0 !== n && void 0 !== r && (r && (n -= 3),
                (n -= 7) >= -7 && n < 0 ? t = String.fromCharCode(256 + n) + String.fromCharCode(r) : n >= 0 && n <= 7 && (t = String.fromCharCode(n) + String.fromCharCode(r)))
            }
            if (2 == t.length && t.charCodeAt(1) <= 1 && (t.charCodeAt(0) <= 7 || t.charCodeAt(0) <= 255 && t.charCodeAt(0) >= 249))
                return At(89, t);
            throw RangeError("Incorrect key signature: " + Ut(t))
        },
        smfSequencer: function(t) {
            return At(127, jt(t))
        }
    };
    function xt(t, e, n) {
        t.prototype[e] = function() {
            return this.send(n.apply(0, arguments)),
            this
        }
    }
    function Pt(t, e, n) {
        t.prototype[e] = function() {
            return this.send(n.apply(0, [this._chan].concat(Array.prototype.slice.call(arguments)))),
            this
        }
    }
    function Bt(t, e) {
        mt[t] = function() {
            return new mt(e.apply(0, arguments))
        }
    }
    function Tt(t, e) {
        mt[t] = function() {
            return e.apply(0, arguments)
        }
    }
    function Ft(t, e) {
        Bt(t, e),
        G.prototype[t] = function() {
            var t, n = Array.prototype.slice.call(arguments);
            n.length < e.length ? n = [this._master].concat(n) : (t = bt(mt.noteValue(n[0], n[0])),
            n[0] = this._master);
            var r = e.apply(0, n);
            return r.mpe = t,
            this.send(r),
            this
        }
    }
    for (n in It)
        It.hasOwnProperty(n) && Bt(n, It[n]);
    for (n in Et)
        Et.hasOwnProperty(n) && Tt(n, Et[n]);
    for (n in Ot)
        Ot.hasOwnProperty(n) && Ft(n, Ot[n]);
    function qt(t, e) {
        for (n in It)
            It.hasOwnProperty(n) && xt(t, n, It[n]);
        for (n in Et)
            Et.hasOwnProperty(n) && xt(t, n, Et[n]);
        for (n in Ot)
            Ot.hasOwnProperty(n) && xt(t, n, Ot[n]);
        if (e)
            for (n in Ot)
                Ot.hasOwnProperty(n) && Pt(e, n, Ot[n])
    }
    qt(D, U),
    G.prototype.noteOn = function(t, e) {
        var n = mt.noteOn(this._master, t, e);
        return n._mpe = n[1],
        this.send(n),
        this
    }
    ,
    G.prototype.noteOff = function(t, e) {
        var n = mt.noteOff(this._master, t, e);
        return n._mpe = n[1],
        this.send(n),
        this
    }
    ,
    G.prototype.aftertouch = function(t, e) {
        var n = mt.aftertouch(this._master, t, e);
        return n._mpe = n[1],
        this.send(n),
        this
    }
    ;
    var Dt, Lt = {
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15
    };
    for (n = 0; n < 16; n++)
        Lt[n] = n;
    function zt(t) {
        for (var e = [], n = 0; n < t.length; n++)
            e[n] = t.charCodeAt(n);
        return e
    }
    function jt(t) {
        return t instanceof Array ? function(t) {
            for (var e = "", n = 0; n < t.length; n++)
                e += String.fromCharCode(t[n]);
            return e
        }(t) : void 0 === t ? "" : "" + t
    }
    function kt(t) {
        return (t < 16 ? "0" : "") + t.toString(16)
    }
    function Nt(t) {
        for (var e = [], n = 0; n < t.length; n++)
            e[n] = kt(t[n]);
        return e.join(" ")
    }
    function Rt(t) {
        return t.length ? ": " + Nt(zt(t)) : ""
    }
    function Ut(t) {
        return t.length ? ": " + function(t) {
            for (var e = "", n = 0; n < t.length; n++)
                "\n" == t[n] ? e += "\\n" : "\r" == t[n] ? e += "\\r" : "\t" == t[n] ? e += "\\t" : t.charCodeAt(n) < 32 ? e += "\\x" + kt(t.charCodeAt(n)) : e += t[n];
            return e
        }(at.lib.fromUTF8(t)) : ""
    }
    function Gt() {
        var t = this instanceof Gt ? this : t = new Gt;
        return t.reset(),
        arguments.length && Gt.prototype.setup.apply(t, arguments),
        t
    }
    function Zt() {
        if (!Dt && "undefined" != typeof window) {
            var t = window.AudioContext || window.webkitAudioContext;
            if (t) {
                (Dt = new t) && !Dt.createGain && (Dt.createGain = Dt.createGainNode);
                var e = function() {
                    if ("running" != Dt.state) {
                        Dt.resume();
                        var t = Dt.createOscillator()
                          , n = Dt.createGain();
                        try {
                            n.gain.value = 0
                        } catch (t) {}
                        n.gain.setTargetAtTime(0, Dt.currentTime, .01),
                        t.connect(n),
                        n.connect(Dt.destination),
                        t.start || (t.start = t.noteOn),
                        t.stop || (t.stop = t.noteOff),
                        t.start(.1),
                        t.stop(.11)
                    } else
                        document.removeEventListener("touchend", e),
                        document.removeEventListener("mousedown", e),
                        document.removeEventListener("keydown", e)
                };
                document.addEventListener("touchend", e),
                document.addEventListener("mousedown", e),
                document.addEventListener("keydown", e),
                e()
            }
        }
    }
    mt.prototype.getChannel = function() {
        if (32 == this.ff && 1 == this.dd.length && this.dd.charCodeAt(0) < 16)
            return this.dd.charCodeAt(0);
        var t = this[0];
        return void 0 === t || t < 128 || t > 239 ? void 0 : 15 & t
    }
    ,
    mt.prototype.setChannel = function(t) {
        if (void 0 === (t = Lt[t]))
            return this;
        if (32 == this.ff)
            this.dd = String.fromCharCode(t);
        else {
            var e = this[0];
            void 0 !== e && e >= 128 && e <= 239 && (this[0] = 240 & e | t)
        }
        return this
    }
    ,
    mt.prototype.getNote = function() {
        var t = this[0];
        if (!(void 0 === t || t < 128 || t > 175))
            return this[1]
    }
    ,
    mt.prototype.setNote = function(t) {
        var e = this[0];
        return void 0 === e || e < 128 || e > 175 ? this : (void 0 !== (t = mt.noteValue(t)) && (this[1] = t),
        this)
    }
    ,
    mt.prototype.getVelocity = function() {
        var t = this[0];
        if (!(void 0 === t || t < 128 || t > 159))
            return this[2]
    }
    ,
    mt.prototype.setVelocity = function(t) {
        var e = this[0];
        return void 0 === e || e < 128 || e > 159 ? this : ((t = parseInt(t)) >= 0 && t < 128 && (this[2] = t),
        this)
    }
    ,
    mt.prototype.getSysExChannel = function() {
        if (240 == this[0])
            return this[2]
    }
    ,
    mt.prototype.setSysExChannel = function(t) {
        return 240 == this[0] && this.length > 2 && (t = parseInt(t)) >= 0 && t < 128 && (this[2] = t),
        this
    }
    ,
    mt.prototype.getData = function() {
        if (void 0 !== this.dd)
            return this.dd.toString()
    }
    ,
    mt.prototype.setData = function(t) {
        return this.dd = jt(t),
        this
    }
    ,
    mt.prototype.getText = function() {
        if (void 0 !== this.dd)
            return at.lib.fromUTF8(this.dd)
    }
    ,
    mt.prototype.setText = function(t) {
        return this.dd = at.lib.toUTF8(t),
        this
    }
    ,
    mt.prototype.getTempo = function() {
        if (81 == this.ff && void 0 !== this.dd)
            return 65536 * this.dd.charCodeAt(0) + 256 * this.dd.charCodeAt(1) + this.dd.charCodeAt(2)
    }
    ,
    mt.prototype.getBPM = function() {
        var t = this.getTempo();
        if (t)
            return 6e7 / t
    }
    ,
    mt.prototype.getTimeSignature = function() {
        if (88 == this.ff && void 0 !== this.dd)
            return [this.dd.charCodeAt(0), 1 << this.dd.charCodeAt(1)]
    }
    ,
    mt.prototype.getKeySignature = function() {
        if (89 == this.ff && void 0 !== this.dd) {
            var t = this.dd.charCodeAt(0)
              , e = this.dd.charCodeAt(1);
            if (128 & t && (t -= 256),
            t >= -7 && t <= 7 && e >= 0 && e <= 1)
                return [t, ["Cb", "Gb", "Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B", "F#", "C#", "G#", "D#", "A#"][e ? t + 10 : t + 7], !!e]
        }
    }
    ,
    mt.prototype.isNoteOn = function() {
        var t = this[0];
        return !(void 0 === t || t < 144 || t > 159) && this[2] > 0
    }
    ,
    mt.prototype.isNoteOff = function() {
        var t = this[0];
        return !(void 0 === t || t < 128 || t > 159) && (t < 144 || 0 == this[2])
    }
    ,
    mt.prototype.isSysEx = function() {
        return 240 == this[0]
    }
    ,
    mt.prototype.isFullSysEx = function() {
        return 240 == this[0] && 247 == this[this.length - 1]
    }
    ,
    mt.prototype.isSMF = function() {
        return this.ff >= 0 && this.ff <= 127
    }
    ,
    mt.prototype.isEOT = function() {
        return 47 == this.ff
    }
    ,
    mt.prototype.isTempo = function() {
        return 81 == this.ff
    }
    ,
    mt.prototype.isTimeSignature = function() {
        return 88 == this.ff
    }
    ,
    mt.prototype.isKeySignature = function() {
        return 89 == this.ff
    }
    ,
    mt.prototype.toString = function() {
        var t, e;
        if (!this.length) {
            if (void 0 !== this.ff) {
                if (t = "ff" + kt(this.ff) + " -- ",
                0 == this.ff)
                    t += "Sequence Number: " + function(t) {
                        for (var e = 0, n = 0; n < t.length; n++)
                            e = (e << 8) + t.charCodeAt(n);
                        return e
                    }(this.dd);
                else if (this.ff > 0 && this.ff < 10)
                    t += ["", "Text", "Copyright", "Sequence Name", "Instrument Name", "Lyric", "Marker", "Cue Point", "Program Name", "Device Name"][this.ff] + Ut(this.dd);
                else if (32 == this.ff)
                    t += "Channel Prefix" + Rt(this.dd);
                else if (33 == this.ff)
                    t += "MIDI Port" + Rt(this.dd);
                else if (47 == this.ff)
                    t += "End of Track" + Rt(this.dd);
                else if (81 == this.ff) {
                    t += "Tempo: " + Math.round(100 * this.getBPM()) / 100 + " bpm"
                } else if (84 == this.ff)
                    t += "SMPTE Offset: " + _t(zt(this.dd));
                else if (88 == this.ff) {
                    var n = 1 << this.dd.charCodeAt(1);
                    t += "Time Signature: " + this.dd.charCodeAt(0) + "/" + n,
                    t += " " + this.dd.charCodeAt(2) + " " + this.dd.charCodeAt(3)
                } else if (89 == this.ff) {
                    t += "Key Signature: ";
                    var r = this.getKeySignature();
                    r ? (t += r[1],
                    r[2] && (t += " min")) : t += "invalid"
                } else
                    127 == this.ff ? t += "Sequencer Specific" + Rt(this.dd) : t += "SMF" + Rt(this.dd);
                return t
            }
            return "empty"
        }
        if (t = Nt(this),
        this[0] < 128)
            return t;
        if (e = {
            241: "MIDI Time Code",
            242: "Song Position",
            243: "Song Select",
            244: "Undefined",
            245: "Undefined",
            246: "Tune request",
            248: "Timing clock",
            249: "Undefined",
            250: "Start",
            251: "Continue",
            252: "Stop",
            253: "Undefined",
            254: "Active Sensing",
            255: "Reset"
        }[this[0]])
            return t + " -- " + e;
        var i = this[0] >> 4;
        return (e = {
            8: "Note Off",
            10: "Aftertouch",
            12: "Program Change",
            13: "Channel Aftertouch",
            14: "Pitch Wheel"
        }[i]) ? t + " -- " + e : 9 == i ? t + " -- " + (this[2] ? "Note On" : "Note Off") : 11 != i ? t : ((e = {
            0: "Bank Select MSB",
            1: "Modulation Wheel MSB",
            2: "Breath Controller MSB",
            4: "Foot Controller MSB",
            5: "Portamento Time MSB",
            6: "Data Entry MSB",
            7: "Channel Volume MSB",
            8: "Balance MSB",
            10: "Pan MSB",
            11: "Expression Controller MSB",
            12: "Effect Control 1 MSB",
            13: "Effect Control 2 MSB",
            16: "General Purpose Controller 1 MSB",
            17: "General Purpose Controller 2 MSB",
            18: "General Purpose Controller 3 MSB",
            19: "General Purpose Controller 4 MSB",
            32: "Bank Select LSB",
            33: "Modulation Wheel LSB",
            34: "Breath Controller LSB",
            36: "Foot Controller LSB",
            37: "Portamento Time LSB",
            38: "Data Entry LSB",
            39: "Channel Volume LSB",
            40: "Balance LSB",
            42: "Pan LSB",
            43: "Expression Controller LSB",
            44: "Effect control 1 LSB",
            45: "Effect control 2 LSB",
            48: "General Purpose Controller 1 LSB",
            49: "General Purpose Controller 2 LSB",
            50: "General Purpose Controller 3 LSB",
            51: "General Purpose Controller 4 LSB",
            64: "Damper Pedal On/Off",
            65: "Portamento On/Off",
            66: "Sostenuto On/Off",
            67: "Soft Pedal On/Off",
            68: "Legato Footswitch",
            69: "Hold 2",
            70: "Sound Controller 1",
            71: "Sound Controller 2",
            72: "Sound Controller 3",
            73: "Sound Controller 4",
            74: "Sound Controller 5",
            75: "Sound Controller 6",
            76: "Sound Controller 7",
            77: "Sound Controller 8",
            78: "Sound Controller 9",
            79: "Sound Controller 10",
            80: "General Purpose Controller 5",
            81: "General Purpose Controller 6",
            82: "General Purpose Controller 7",
            83: "General Purpose Controller 8",
            84: "Portamento Control",
            88: "High Resolution Velocity Prefix",
            91: "Effects 1 Depth",
            92: "Effects 2 Depth",
            93: "Effects 3 Depth",
            94: "Effects 4 Depth",
            95: "Effects 5 Depth",
            96: "Data Increment",
            97: "Data Decrement",
            98: "Non-Registered Parameter Number LSB",
            99: "Non-Registered Parameter Number MSB",
            100: "Registered Parameter Number LSB",
            101: "Registered Parameter Number MSB",
            120: "All Sound Off",
            121: "Reset All Controllers",
            122: "Local Control On/Off",
            123: "All Notes Off",
            124: "Omni Mode Off",
            125: "Omni Mode On",
            126: "Mono Mode On",
            127: "Poly Mode On"
        }[this[1]]) || (e = "Undefined"),
        t + " -- " + e)
    }
    ,
    mt.prototype._stamp = function(t) {
        return this._from.push(t._orig ? t._orig : t),
        this
    }
    ,
    mt.prototype._unstamp = function(t) {
        if (void 0 === t)
            this._from = [];
        else {
            t._orig && (t = t._orig);
            var e = this._from.indexOf(t);
            e > -1 && this._from.splice(e, 1)
        }
        return this
    }
    ,
    mt.prototype._stamped = function(t) {
        t._orig && (t = t._orig);
        for (var e = 0; e < this._from.length; e++)
            if (this._from[e] == t)
                return !0;
        return !1
    }
    ,
    at.MIDI = mt,
    Gt.validate = function(t) {
        var e = t instanceof Array ? t : arguments;
        if (e[0] != parseInt(e[0]) || e[0] < 0 || e[0] > 14)
            throw RangeError("Bad master channel value: " + e[0]);
        if (e[1] != parseInt(e[1]) || e[1] < 0 || e[0] + e[1] > 15)
            throw RangeError("Bad zone size value: " + e[1])
    }
    ,
    Gt.prototype.reset = function() {
        for (var t = 0; t < 16; t++)
            this[t] = {
                band: 0,
                master: t
            }
    }
    ,
    Gt.prototype.setup = function(t, e) {
        var n;
        Gt.validate(t, e);
        var r = t + e;
        if ((this[t].master != t || this[t].band != e) && (e || this[t].band)) {
            for (this[t].band ? r < (n = t + this[t].band) && (r = n) : this[t].master == t - 1 ? (n = t - 1,
            r < (n += this[n].band) && (r = n),
            this[t - 1] = {
                band: 0,
                master: t - 1
            }) : this[t].master != t && (n = this[t].master,
            r < (n += this[n].band) && (r = n),
            this[this[t].master].band = t - this[t].master - 1),
            this[t].master = t,
            this[t].band = e,
            n = t + 1; n <= t + e; n++)
                this[n].band && r < n + this[n].band && (r = n + this[n].band),
                this[n] = {
                    band: 0,
                    master: t
                };
            for (; n <= r; n++)
                this[n] = {
                    band: 0,
                    master: n
                }
        }
    }
    ,
    Gt.prototype.filter = function(t) {
        var e = t.getChannel();
        if (!this[e] || !this[this[e].master].band)
            return t;
        var n, r, i, o = this[e].master, s = this[o].band;
        if (void 0 !== t._mpe) {
            for (i = 256,
            n = o + 1; n <= o + s; n++)
                if (this[n].notes) {
                    for (i > this[n].notes.length && (e = n,
                    i = this[n].notes.length),
                    r = 0; r < this[n].notes.length; r++)
                        if (this[n].notes[r] == t._mpe) {
                            e = n,
                            i = -1;
                            break
                        }
                } else
                    i > 0 && (e = n,
                    i = 0);
            t.setChannel(e),
            t._mpe = void 0
        }
        return e == o ? t : (t.isNoteOn() ? (this[e].notes || (this[e].notes = []),
        y(this[e].notes, t.getNote())) : t.isNoteOff() && this[e].notes && C(this[e].notes, t.getNote()),
        t)
    }
    ,
    at.MPE = Gt,
    at.lib = {},
    at.lib.now = a,
    at.lib.schedule = h,
    at.lib.openMidiOut = function(t, e) {
        var n = new D;
        return e._openOut(n),
        n._info = e._info(t),
        n
    }
    ,
    at.lib.openMidiIn = function(t, e) {
        var n = new D;
        return e._openIn(n),
        n._info = e._info(t),
        n
    }
    ,
    at.lib.registerMidiOut = function(t, e) {
        for (var n = e._info(t), r = 0; r < $._outs.length; r++)
            if ($._outs[r].name == n.name)
                return !1;
        return n.engine = e,
        $._outs.push(n),
        S && (E(),
        S._bad && (S._repair(),
        S._resume())),
        !0
    }
    ,
    at.lib.registerMidiIn = function(t, e) {
        for (var n = e._info(t), r = 0; r < $._ins.length; r++)
            if ($._ins[r].name == n.name)
                return !1;
        return n.engine = e,
        $._ins.push(n),
        S && (E(),
        S._bad && (S._repair(),
        S._resume())),
        !0
    }
    ,
    at.lib.copyMidiHelpers = qt,
    at.lib.getAudioContext = function() {
        return Zt(),
        Dt
    }
    ;
    var Vt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    at.lib.fromBase64 = function(t) {
        var e, n, r, i, o, s, u = "", a = 0;
        for (t = t.replace(/[^A-Za-z0-9+\/=]/g, ""); a < t.length; )
            e = Vt.indexOf(t.charAt(a++)) << 2 | (i = Vt.indexOf(t.charAt(a++))) >> 4,
            n = (15 & i) << 4 | (o = Vt.indexOf(t.charAt(a++))) >> 2,
            r = (3 & o) << 6 | (s = Vt.indexOf(t.charAt(a++))),
            u += String.fromCharCode(e),
            64 != o && (u += String.fromCharCode(n)),
            64 != s && (u += String.fromCharCode(r));
        return u
    }
    ,
    at.lib.toBase64 = function(t) {
        var e, n, r, i, o, s = 0, u = 0, a = "", h = [];
        if (!t)
            return t;
        do {
            e = (o = t.charCodeAt(s++) << 16 | t.charCodeAt(s++) << 8 | t.charCodeAt(s++)) >> 18 & 63,
            n = o >> 12 & 63,
            r = o >> 6 & 63,
            i = 63 & o,
            h[u++] = Vt.charAt(e) + Vt.charAt(n) + Vt.charAt(r) + Vt.charAt(i)
        } while (s < t.length);a = h.join("");
        var f = t.length % 3;
        return f ? a.slice(0, f - 3) + "===".slice(f) : a
    }
    ,
    at.lib.fromUTF8 = function(t) {
        t = void 0 === t ? "" : "" + t;
        var e, n, r, i = "";
        for (e = 0; e < t.length; e++) {
            if ((n = t.charCodeAt(e)) > 255)
                return t;
            if (n < 128)
                i += t[e];
            else if (192 == (224 & n)) {
                if (n = (31 & n) << 6,
                ++e >= t.length)
                    return t;
                if (128 != (192 & (r = t.charCodeAt(e))))
                    return t;
                n += 63 & r,
                i += String.fromCharCode(n)
            } else if (224 == (240 & n)) {
                if (n = (15 & n) << 12,
                ++e >= t.length)
                    return t;
                if (128 != (192 & (r = t.charCodeAt(e))))
                    return t;
                if (n += (63 & r) << 6,
                ++e >= t.length)
                    return t;
                if (128 != (192 & (r = t.charCodeAt(e))))
                    return t;
                n += 63 & r,
                i += String.fromCharCode(n)
            } else if (240 == (248 & n)) {
                if (n = (7 & n) << 18,
                ++e >= t.length)
                    return t;
                if (128 != (192 & (r = t.charCodeAt(e))))
                    return t;
                if (n += (63 & r) << 12,
                ++e >= t.length)
                    return t;
                if (128 != (192 & (r = t.charCodeAt(e))))
                    return t;
                if (n += (63 & r) << 6,
                ++e >= t.length)
                    return t;
                if (128 != (192 & (r = t.charCodeAt(e))))
                    return t;
                if ((n += 63 & r) > 1114111)
                    return t;
                n -= 65536,
                i += String.fromCharCode(55296 + (n >> 10)),
                i += String.fromCharCode(56320 + (1023 & n))
            }
        }
        return i
    }
    ,
    at.lib.toUTF8 = function(t) {
        t = void 0 === t ? "" : "" + t;
        var e, n, r = "";
        for (e = 0; e < t.length; e++)
            (n = t.charCodeAt(e)) < 128 ? r += t[e] : n < 2048 ? (r += String.fromCharCode(192 + (n >> 6)),
            r += String.fromCharCode(128 + (63 & n))) : n < 65536 ? (r += String.fromCharCode(224 + (n >> 12)),
            r += String.fromCharCode(128 + (n >> 6 & 63)),
            r += String.fromCharCode(128 + (63 & n))) : (r += String.fromCharCode(240 + (n >> 18)),
            r += String.fromCharCode(128 + (n >> 12 & 63)),
            r += String.fromCharCode(128 + (n >> 6 & 63)),
            r += String.fromCharCode(128 + (63 & n)));
        return r
    }
    ;
    var Jt = []
      , Wt = {}
      , Ht = {}
      , Qt = o.Promise;
    function Kt(t, e, n) {
        this.name = t,
        this.message = e,
        this.code = n
    }
    function $t(t, e) {
        this.bubbles = !1,
        this.cancelBubble = !1,
        this.cancelable = !1,
        this.currentTarget = e,
        this.defaultPrevented = !1,
        this.eventPhase = 0,
        this.path = [],
        this.port = t,
        this.returnValue = !0,
        this.srcElement = e,
        this.target = e,
        this.timeStamp = a(),
        this.type = "statechange"
    }
    function Xt(t, e) {
        this.bubbles = !1,
        this.cancelBubble = !1,
        this.cancelable = !1,
        this.currentTarget = t,
        this.data = e,
        this.defaultPrevented = !1,
        this.eventPhase = 0,
        this.path = [],
        this.receivedTime = a(),
        this.returnValue = !0,
        this.srcElement = t,
        this.target = t,
        this.timeStamp = this.receivedTime,
        this.type = "midimessage"
    }
    function Yt(t, e) {
        t.onstatechange && t.onstatechange(new $t(t,t)),
        e.onstatechange && e.onstatechange(new $t(t,e))
    }
    function te(t, e) {
        var n = this
          , r = !1
          , i = null
          , o = null;
        this.type = "input",
        this.id = e.id,
        this.name = e.name,
        this.manufacturer = e.man,
        this.version = e.ver,
        Object.defineProperty(this, "state", {
            get: function() {
                return e.connected ? "connected" : "disconnected"
            },
            enumerable: !0
        }),
        Object.defineProperty(this, "connection", {
            get: function() {
                return r ? e.proxy ? "open" : "pending" : "closed"
            },
            enumerable: !0
        }),
        Object.defineProperty(this, "onmidimessage", {
            get: function() {
                return o
            },
            set: function(t) {
                t instanceof Function ? (o = t,
                r || n.open()) : o = null
            },
            enumerable: !0
        }),
        Object.defineProperty(this, "onstatechange", {
            get: function() {
                return i
            },
            set: function(t) {
                i = t instanceof Function ? t : null
            },
            enumerable: !0
        }),
        this.open = function() {
            return new Qt(function(i, o) {
                r ? i(n) : e.open().then(function() {
                    r || (r = !0,
                    Yt(n, t)),
                    i(n)
                }, function() {
                    o(new Kt("InvalidAccessError","Port is not available",15))
                })
            }
            )
        }
        ,
        this.close = function() {
            return new Qt(function(i) {
                r && (r = !1,
                e.close(),
                Yt(n, t)),
                i(n)
            }
            )
        }
        ,
        Object.freeze(this)
    }
    function ee(t) {
        for (var e, n; t.length; ) {
            for (e = 0; e < t.length && !(t[e] == parseInt(t[e]) && t[e] >= 128 && t[e] <= 255 && 247 != t[e]); e++)
                ;
            if (t.splice(0, e),
            !t.length)
                return;
            if (240 == t[0]) {
                for (e = 1; e < t.length && 247 != t[e]; e++)
                    ;
                if (e == t.length)
                    return;
                return t.splice(0, e + 1)
            }
            if ((n = re(t[0]) + 1) > t.length)
                return;
            for (e = 1; e < n && !(t[e] != parseInt(t[e]) || t[e] < 0 || t[e] >= 128); e++)
                ;
            if (e == n)
                return t.splice(0, e);
            t.splice(0, e)
        }
    }
    function ne(e, n, r, i) {
        var o = this;
        this.id = e,
        this.name = n,
        this.man = r,
        this.ver = i,
        this.connected = !0,
        this.ports = [],
        this.pending = [],
        this.proxy = void 0,
        this.queue = [],
        this.onmidi = function(e) {
            var n;
            for (o.queue = o.queue.concat(e.slice()),
            n = ee(o.queue); n; n = ee(o.queue))
                for (t = 0; t < o.ports.length; t++)
                    o.ports[t][0].onmidimessage && (240 != n[0] || o.ports[t][1]) && o.ports[t][0].onmidimessage(new Xt(o,new Uint8Array(n)))
        }
    }
    function re(t) {
        return t >= 128 && t <= 191 || t >= 224 && t <= 239 || 242 == t ? 2 : t >= 192 && t <= 223 || 241 == t || 243 == t ? 1 : 0
    }
    "function" != typeof Qt && ((Qt = function(t) {
        this.executor = t
    }
    ).prototype.then = function(t, e) {
        "function" != typeof t && (t = function() {}
        ),
        "function" != typeof e && (e = function() {}
        ),
        this.executor(t, e)
    }
    ),
    ne.prototype.open = function() {
        var t = this;
        return new Qt(function(e, n) {
            var r;
            t.proxy || !t.connected ? e() : (t.pending.push([e, n]),
            1 == t.pending.length && at().openMidiIn(t.name).or(function() {
                for (r = 0; r < t.pending.length; r++)
                    t.pending[r][1]();
                t.pending = []
            }).and(function() {
                for (t.proxy = this,
                t.proxy.connect(t.onmidi),
                r = 0; r < t.pending; r++)
                    t.pending[r][0]();
                t.pending = []
            }))
        }
        )
    }
    ,
    ne.prototype.close = function() {
        var t;
        if (this.proxy) {
            for (t = 0; t < this.ports.length; t++)
                if ("open" == this.ports[t].connection)
                    return;
            this.proxy.close(),
            this.proxy = void 0
        }
    }
    ,
    ne.prototype.disconnect = function() {
        this.connected = !1,
        this.proxy && (this.proxy.close(),
        this.proxy = void 0)
    }
    ,
    ne.prototype.reconnect = function() {
        var t, e, n = this, r = [];
        for (this.connected = !0,
        t = 0; t < Jt.length; t++)
            "closed" == (e = Jt[t].inputs.get(this.id)).connection ? Yt(e, Jt[t]) : r.push([e, Jt[t]]);
        r.length && at()._openMidiInNR(n.name).or(function() {
            for (t = 0; t < r.length; t++)
                r[t][0].close()
        }).and(function() {
            for (n.proxy = this,
            n.proxy.connect(n.onmidi),
            t = 0; t < r.length; t++)
                Yt(r[t][0], r[t][1])
        })
    }
    ;
    var ie = "Failed to execute 'send' on 'MIDIOutput': ";
    function oe(t, e) {
        var n = this
          , r = !1
          , i = null;
        this.type = "output",
        this.id = e.id,
        this.name = e.name,
        this.manufacturer = e.man,
        this.version = e.ver,
        Object.defineProperty(this, "state", {
            get: function() {
                return e.connected ? "connected" : "disconnected"
            },
            enumerable: !0
        }),
        Object.defineProperty(this, "connection", {
            get: function() {
                return r ? e.proxy ? "open" : "pending" : "closed"
            },
            enumerable: !0
        }),
        Object.defineProperty(this, "onstatechange", {
            get: function() {
                return i
            },
            set: function(t) {
                i = t instanceof Function ? t : null
            },
            enumerable: !0
        }),
        this.open = function() {
            return new Qt(function(i, o) {
                r ? i(n) : e.open().then(function() {
                    r || (r = !0,
                    Yt(n, t)),
                    i(n)
                }, function() {
                    o(new Kt("InvalidAccessError","Port is not available",15))
                })
            }
            )
        }
        ,
        this.close = function() {
            return new Qt(function(i) {
                r && (r = !1,
                n.clear(),
                e.close(),
                Yt(n, t)),
                i(n)
            }
            )
        }
        ,
        this.clear = function() {}
        ,
        this.send = function(i, o) {
            if (function(t, e) {
                var n, r, i, o = [];
                for (n = 0; n < t.length; n++)
                    if (t[n] != parseInt(t[n]) || t[n] < 0 || t[n] > 255)
                        throw TypeError(ie + t[n] + " is not a UInt8 value.");
                for (r = 0,
                n = 0; n < t.length; n++)
                    if (r) {
                        if (t[n] > 127)
                            throw TypeError(ie + "Unexpected status byte at index " + n + " (" + t[n] + ").");
                        i.push(t[n]),
                        r--
                    } else {
                        if (t[n] < 128)
                            throw TypeError(ie + "Running status is not allowed at index " + n + " (" + t[n] + ").");
                        if (247 == t[n])
                            throw TypeError(ie + "Unexpected end of system exclusive message at index " + n + " (" + t[n] + ").");
                        if (i = [t[n]],
                        o.push(i),
                        240 == t[n]) {
                            if (!e)
                                throw new Kt("InvalidAccessError",ie + "System exclusive messag is not allowed at index " + n + " (" + t[n] + ").",15);
                            for (r = -1; n < t.length; n++)
                                if (i.push(t[n]),
                                247 == t[n]) {
                                    r = 0;
                                    break
                                }
                        } else
                            r = re(t[n])
                    }
                if (r)
                    throw TypeError(ie + "Message is incomplete")
            }(i, t.sysexEnabled),
            !e.connected)
                throw new Kt("InvalidStateError","Port is not connected",11);
            if (r) {
                var s = a();
                o > s ? setTimeout(function() {
                    e.proxy.send(i)
                }, o - s) : e.proxy.send(i)
            } else
                this.open().then(function() {
                    n.send(i, o)
                })
        }
        ,
        Object.freeze(this)
    }
    function se(t, e, n, r) {
        this.id = t,
        this.name = e,
        this.man = n,
        this.ver = r,
        this.connected = !0,
        this.ports = [],
        this.pending = [],
        this.proxy = void 0
    }
    function ue(t) {
        this.has = function(e) {
            return t.hasOwnProperty(e) && t[e].connected
        }
        ,
        this.keys = function() {
            try {
                var e = new Map;
                for (var n in t)
                    this.has(n) && e.set(n, this.get(n));
                return e.keys()
            } catch (t) {}
        }
        ,
        this.values = function() {
            try {
                var e = new Map;
                for (var n in t)
                    this.has(n) && e.set(n, this.get(n));
                return e.values()
            } catch (t) {}
        }
        ,
        this.entries = function() {
            try {
                var e = new Map;
                for (var n in t)
                    this.has(n) && e.set(n, this.get(n));
                return e.entries()
            } catch (t) {}
        }
        ,
        this.forEach = function(e, n) {
            for (var r in void 0 === n && (n = this),
            t)
                this.has(r) && e.call(n, this.get(r), r, this)
        }
        ,
        Object.defineProperty(this, "size", {
            get: function() {
                var e = 0;
                for (var n in t)
                    this.has(n) && e++;
                return e
            },
            enumerable: !0
        })
    }
    function ae(t, e) {
        this.get = function(n) {
            if (Ht.hasOwnProperty(n) && Ht[n].connected)
                return e[n] || (e[n] = new te(t,Ht[n]),
                Ht[n].ports.push([e[n], t.sysexEnabled])),
                e[n]
        }
        ,
        Object.freeze(this)
    }
    function he(t, e) {
        this.get = function(n) {
            if (Wt.hasOwnProperty(n) && Wt[n].connected)
                return e[n] || (e[n] = new oe(t,Wt[n]),
                Wt[n].ports.push([e[n], t.sysexEnabled])),
                e[n]
        }
        ,
        Object.freeze(this)
    }
    function fe(t) {
        var e, n, r, i;
        for (e = 0; e < t.inputs.added.length; e++)
            r = t.inputs.added[e],
            Ht.hasOwnProperty(r.id) || (Ht[r.id] = new ne(r.id,r.name,r.manufacturer,r.version)),
            Ht[r.id].reconnect();
        for (e = 0; e < t.outputs.added.length; e++)
            r = t.outputs.added[e],
            Wt.hasOwnProperty(r.id) || (Wt[r.id] = new se(r.id,r.name,r.manufacturer,r.version)),
            Wt[r.id].reconnect();
        for (e = 0; e < t.inputs.removed.length; e++)
            if (r = t.inputs.removed[e],
            Ht.hasOwnProperty(r.id)) {
                for (i = [],
                n = 0; n < Jt.length; n++)
                    i.push([Jt[n].inputs.get(r.id), Jt[n]]);
                for (Ht[r.id].disconnect(),
                n = 0; n < i.length; n++)
                    Yt(i[n][0], i[n][1])
            }
        for (e = 0; e < t.outputs.removed.length; e++)
            if (r = t.outputs.removed[e],
            Wt.hasOwnProperty(r.id)) {
                for (i = [],
                n = 0; n < Jt.length; n++)
                    i.push([Jt[n].outputs.get(r.id), Jt[n]]);
                for (Wt[r.id].disconnect(),
                n = 0; n < i.length; n++)
                    Yt(i[n][0], i[n][1])
            }
    }
    function ce(t) {
        var e, n, r = null;
        this.sysexEnabled = t,
        this.inputs = new ae(this,{}),
        this.outputs = new he(this,{}),
        Object.defineProperty(this, "onstatechange", {
            get: function() {
                return r
            },
            set: function(t) {
                r = t instanceof Function ? t : null
            },
            enumerable: !0
        }),
        Object.freeze(this);
        var i = S._info;
        for (e = 0; e < i.inputs.length; e++)
            n = i.inputs[e],
            Ht.hasOwnProperty(n.id) || (Ht[n.id] = new ne(n.id,n.name,n.manufacturer,n.version));
        for (e = 0; e < i.outputs.length; e++)
            n = i.outputs[e],
            Wt.hasOwnProperty(n.id) || (Wt[n.id] = new se(n.id,n.name,n.manufacturer,n.version));
        Jt.length || at().onChange(fe),
        Jt.push(this)
    }
    return se.prototype.open = function() {
        var t = this;
        return new Qt(function(e, n) {
            var r;
            t.proxy || !t.connected ? e() : (t.pending.push([e, n]),
            1 == t.pending.length && at().openMidiOut(t.name).or(function() {
                for (r = 0; r < t.pending.length; r++)
                    t.pending[r][1]();
                t.pending = []
            }).and(function() {
                for (t.proxy = this,
                r = 0; r < t.pending.length; r++)
                    t.pending[r][0]();
                t.pending = []
            }))
        }
        )
    }
    ,
    se.prototype.close = function() {
        var t;
        if (this.proxy) {
            for (t = 0; t < this.ports.length; t++)
                if ("open" == this.ports[t].connection)
                    return;
            this.proxy.close(),
            this.proxy = void 0
        }
    }
    ,
    se.prototype.disconnect = function() {
        this.connected = !1,
        this.proxy && (this.proxy.close(),
        this.proxy = void 0)
    }
    ,
    se.prototype.reconnect = function() {
        var t, e, n = this, r = [];
        for (this.connected = !0,
        t = 0; t < Jt.length; t++)
            "closed" == (e = Jt[t].outputs.get(this.id)).connection ? Yt(e, Jt[t]) : r.push([e, Jt[t]]);
        r.length && at()._openMidiOutNR(n.name).or(function() {
            for (t = 0; t < r.length; t++)
                r[t][0].close()
        }).and(function() {
            for (n.proxy = this,
            t = 0; t < r.length; t++)
                Yt(r[t][0], r[t][1])
        })
    }
    ,
    ae.prototype = new ue(Ht),
    ae.prototype.constructor = ae,
    he.prototype = new ue(Wt),
    he.prototype.constructor = he,
    at.requestMIDIAccess = function(t) {
        return new Qt(function(e, n) {
            at.JZZ(t).or(function() {}).and(function() {
                var r = !(!t || !t.sysex);
                if (r && !this.info().sysex)
                    n(new Kt("SecurityError","Sysex is not allowed",18));
                else {
                    var i = new ce(r);
                    e(i)
                }
            })
        }
        )
    }
    ,
    "undefined" == typeof navigator || navigator.requestMIDIAccess || (navigator.requestMIDIAccess = at.requestMIDIAccess),
    at.close = function() {
        K._close && K._close()
    }
    ,
    at
});
//# sourceMappingURL=/sm/43985959d14ac62fb11b74127ff69565851bd2c0663f245e71d52f78447090fd.map
