// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Variables
var isOpen = false;
var firstName = 'Dan';
var myAge = 40;
var list = [0, 1, 2];
var me = ["Dan", 32, true];
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["ProjectManager"] = 2] = "ProjectManager";
})(Job || (Job = {}));
;
var job = Job.WebDev;
var phone = 'iPhone';
var tablet = 3;
/*  Functions */
// ? for optional params
// the string before the arrow correlates to the return value
// const sayWord = (word?: string): string => {
//   console.log(word || "Hello");
//   return word || "Hello";
// }
// sayWord("Dan");
// Default Params
// Rest params work as expected
var sayWord = function sayWord(word) {
    if (word === void 0) {
        word = "Hello";
    }
    var restParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restParams[_i - 1] = arguments[_i];
    }
    console.log(word);
    console.log(restParams);
    return word;
};
sayWord("Dan", "The", "rest", "of", "the", "params");
/* Implicit Types */
var newName = 'Dan';
newName = 'Que'; // this works as the type string is inferred 
// newName = 10; // this does not work
// Gets type from initial declaration not most recent variable change
var newNameTwo = newName;
// newNameTwo = 10; // Error: Value is not a string
/* Union Types with | */
var makeMargin = function makeMargin(x) {
    return "margin: " + x + "px";
};
makeMargin(10);
makeMargin('10');
/* Null Types */
var dog;
dog = "Lucie";
/* Interface */
// Moved to Interfaces.ts for module example
// interface Person {
//   name: string;
//   age?: number; // optional param
// }
var sayName = function sayName(_a) {
    var name = _a.name,
        age = _a.age;
    console.log(name);
    return name;
};
sayName({ name: 'Ruel' });
sayName({ name: 'Que', age: 38 });
/* Enums */
// Numeric Enum
var Type;
(function (Type) {
    Type[Type["Video"] = 0] = "Video";
    Type[Type["BlogPost"] = 1] = "BlogPost";
    Type[Type["Quiz"] = 2] = "Quiz"; // 2
})(Type || (Type = {}));
var createContent = function createContent(contentType) {};
createContent(Type.Quiz);
console.log(Type.Quiz);
// String Enum
var Type2;
(function (Type2) {
    Type2["Video"] = "VIDEO";
    Type2["BlogPost"] = "BLOG_POST";
    Type2["Quiz"] = "QUIZ";
})(Type2 || (Type2 = {}));
var createContent2 = function createContent2(contentType) {};
createContent2(Type2.Quiz);
console.log(Type2.Quiz);
/* Classes */
var Team = /** @class */function () {
    // public teamName: string; // this is the same thing as above
    // private teamName: string; // this is scoped only to the team class
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log('goal!');
        return 'goal!!!!';
    };
    return Team;
}();
var redWings = new Team('Red Wings');
redWings.score();
redWings.teamName;
},{}],3:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '59561' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[3,4], null)
//# sourceMappingURL=/level-up-tuts-typescript-lvl1.6449a52a.map