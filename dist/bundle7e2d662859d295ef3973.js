/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Reset default browser styles */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

/* Set background color and text color for the body */
body {
  background-color: #f2f2f2;
  color: #333;
  font-family: Arial, sans-serif;
}

/* Add some spacing to the header */
header {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;
  box-shadow: 0 0 10px rgba(1, 22, 95, 0.1);
  position: sticky;
  top: 0;
}

/* Style the h1 in the header */
header h1 {
  font-size: 24px;
}

/* Style the navigation menu */
nav {
  margin-top: 10px;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}

/* Style the genre buttons */
.genre-btn {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.genre-btn:hover {
  background-color: #ccc;
}

/* Style the main movie container */
.movie-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 30px;
  justify-content: center;
  margin-top: 4rem;
}

/* Style the movie cards */
.movie-card {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 6px;
  /* padding: 1rem 0; */
  place-items: center;
}

.movie-card:not(.modal-open) {
  pointer-events: auto;
}

.movie-card img {
  /* width: 94%; */
  /* height: 55%; */
  width: 98%;
  height: 80%;
  object-fit: cover;
  border-radius: 6px;
}

.movie-card h3 {
  font-size: 1.2rem;
  margin-top: 1rem;
  text-transform: capitalize;
}

.movie-card .interactions {
  display: flex;
  justify-content: space-between;
  gap: 7px;
  margin-top: 0.5rem;
}

.likes-container {
  display: flex;
  align-items: center;
}

.likes-container span {
  margin-left: 5px;
}

/* Style the footer */
footer {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid rgb(5, 136, 9);
  padding: 11px;
  background-color: white;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.7);
  padding-left: 16px;
  padding-right: 16px;
  z-index: 2;
  display: flex;
  align-items: center;
  visibility: hidden;
}

.popup_content {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 24px;
}

.titleContent {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.titleContent h2 {
  font-family: "Crete Round", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 138%;
  color: #172b4d;
  margin: 0;
}

.all_info h3 {
  margin-bottom: 24px;
}

.desktopView {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.bottom_section {
  display: flex;
  justify-content: flex-start;
  margin-top: 5%;
  flex-direction: column;
  align-items: center;
}

.contact_form {
  display: flex;
  flex-direction: column;
}

.contact_form input {
  border: 0;
  border-bottom: 1px solid #dbc8d7;
  height: 48px;
  padding-left: 16px;
  margin-top: 0;
  margin-bottom: 23px;
  color: black;
}

input::placeholder {
  font-family: "inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  color: #979493;
}

.contact_form textarea {
  border: 0;
  background-color: #fbf8f7;
  padding: 12px;
  margin-bottom: 5%;
}

textarea::placeholder {
  font-family: "inter", sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  color: #3c3a39;
}

.contact_form button {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  background: #ff6b00;
  color: #fff;
  border: 1px #ff6b00;
  padding: 12px;
  width: 131px;
  height: 48px;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,iCAAA;AACA;;;;;;;;;;EAUE,SAAA;EACA,UAAA;AACF;;AAEA,qDAAA;AACA;EACE,yBAAA;EACA,WAAA;EACA,8BAAA;AACF;;AAEA,mCAAA;AACA;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,yCAAA;EACA,gBAAA;EACA,MAAA;AACF;;AAEA,+BAAA;AACA;EACE,eAAA;AACF;;AAEA,8BAAA;AACA;EACE,gBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,qBAAA;EACA,kBAAA;EACA,eAAA;AACF;;AAEA,4BAAA;AACA;EACE,iBAAA;EACA,sBAAA;EACA,kBAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA,mCAAA;AACA;EACE,gBAAA;EACA,aAAA;EACA,2DAAA;EACA,SAAA;AACF;;AAEA;EACE,aAAA;EACA,+CAAA;EACA,SAAA;EACA,uBAAA;EACA,gBAAA;AACF;;AAEA,0BAAA;AACA;EACE,sBAAA;EACA,kBAAA;EACA,wCAAA;EACA,YAAA;EAEA,qBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,oBAAA;AAAF;;AAGA;EACE,gBAAA;EAEA,iBAAA;EACA,UAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;AADF;;AAIA;EACE,iBAAA;EACA,gBAAA;EACA,0BAAA;AADF;;AAIA;EACE,aAAA;EACA,8BAAA;EACA,QAAA;EACA,kBAAA;AADF;;AAIA;EACE,aAAA;EACA,mBAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA,qBAAA;AACA;EACE,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;EACA,aAAA;EACA,uBAAA;AADF;;AAIA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,cAAA;EACA,8BAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,aAAA;AADF;;AAIA;EACE,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,UAAA;AADF;;AAIA;EACE,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,SAAA;AADF;;AAIA;EACE,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,qCAAA;AADF;;AAIA;EACE,aAAA;EACA,2BAAA;EACA,cAAA;EACA,sBAAA;EACA,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;AADF;;AAIA;EACE,SAAA;EACA,gCAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;AADF;;AAIA;EACE,gCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AADF;;AAIA;EACE,SAAA;EACA,yBAAA;EACA,aAAA;EACA,iBAAA;AADF;;AAIA;EACE,gCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AADF;;AAIA;EACE,gCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,WAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;AADF","sourcesContent":["/* Reset default browser styles */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nul,\r\nli {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* Set background color and text color for the body */\r\nbody {\r\n  background-color: #f2f2f2;\r\n  color: #333;\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\n/* Add some spacing to the header */\r\nheader {\r\n  background: #fff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 2rem 2rem;\r\n  box-shadow: 0 0 10px rgba(1, 22, 95, 0.1);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n/* Style the h1 in the header */\r\nheader h1 {\r\n  font-size: 24px;\r\n}\r\n\r\n/* Style the navigation menu */\r\nnav {\r\n  margin-top: 10px;\r\n}\r\n\r\nnav ul {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li {\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Style the genre buttons */\r\n.genre-btn {\r\n  padding: 5px 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n}\r\n\r\n.genre-btn:hover {\r\n  background-color: #ccc;\r\n}\r\n\r\n/* Style the main movie container */\r\n.movie-container {\r\n  margin-top: 20px;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  gap: 20px;\r\n}\r\n\r\n.movie-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, 300px);\r\n  gap: 30px;\r\n  justify-content: center;\r\n  margin-top: 4rem;\r\n}\r\n\r\n/* Style the movie cards */\r\n.movie-card {\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  padding: 6px;\r\n\r\n  /* padding: 1rem 0; */\r\n  place-items: center;\r\n}\r\n\r\n.movie-card:not(.modal-open) {\r\n  pointer-events: auto;\r\n}\r\n\r\n.movie-card img {\r\n  /* width: 94%; */\r\n\r\n  /* height: 55%; */\r\n  width: 98%;\r\n  height: 80%;\r\n  object-fit: cover;\r\n  border-radius: 6px;\r\n}\r\n\r\n.movie-card h3 {\r\n  font-size: 1.2rem;\r\n  margin-top: 1rem;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.movie-card .interactions {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 7px;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.likes-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.likes-container span {\r\n  margin-left: 5px;\r\n}\r\n\r\n/* Style the footer */\r\nfooter {\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-top: 2px solid rgb(5, 136, 9);\r\n  padding: 11px;\r\n  background-color: white;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  overflow: auto;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  z-index: 2;\r\n  display: flex;\r\n  align-items: center;\r\n  visibility: hidden;\r\n}\r\n\r\n.popup_content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #fff;\r\n  padding: 24px;\r\n}\r\n\r\n.titleContent {\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0;\r\n}\r\n\r\n.titleContent h2 {\r\n  font-family: 'Crete Round', serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 32px;\r\n  line-height: 138%;\r\n  color: #172b4d;\r\n  margin: 0;\r\n}\r\n\r\n.all_info h3 {\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.desktopView {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.bottom_section {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  margin-top: 5%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.contact_form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.contact_form input {\r\n  border: 0;\r\n  border-bottom: 1px solid #dbc8d7;\r\n  height: 48px;\r\n  padding-left: 16px;\r\n  margin-top: 0;\r\n  margin-bottom: 23px;\r\n  color: black;\r\n}\r\n\r\ninput::placeholder {\r\n  font-family: \"inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 160%;\r\n  color: #979493;\r\n}\r\n\r\n.contact_form textarea {\r\n  border: 0;\r\n  background-color: #fbf8f7;\r\n  padding: 12px;\r\n  margin-bottom: 5%;\r\n}\r\n\r\ntextarea::placeholder {\r\n  font-family: \"inter\", sans-serif;\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 160%;\r\n  color: #3c3a39;\r\n}\r\n\r\n.contact_form button {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  background: #ff6b00;\r\n  color: #fff;\r\n  border: 1px #ff6b00;\r\n  padding: 12px;\r\n  width: 131px;\r\n  height: 48px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   retrieveDat: () => (/* binding */ retrieveDat)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/modules/display.js");
/* harmony import */ var _commentPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentPopup.js */ "./src/modules/commentPopup.js");



const baseAPI = 'https://api.tvmaze.com/shows';
const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appID = 'fvEG8bcfusuKIAC9Au4g';

const showMovies = async () => {
  try {
    const [dataResponse, likesResponse] = await Promise.all([
      fetch(baseAPI),
      fetch(`${involvementAPI}/${appID}/likes`),
    ]);

    const retrievedData = await dataResponse.json();
    const likesData = await likesResponse.json();

    const moviesWithLikes = retrievedData.map((movie) => {
      const like = likesData.find((like) => like.item_id === movie.id);
      return { ...movie, likes: like ? like.likes : 0 };
    });

    (0,_display_js__WEBPACK_IMPORTED_MODULE_0__["default"])(moviesWithLikes);
    (0,_commentPopup_js__WEBPACK_IMPORTED_MODULE_1__.comments)(moviesWithLikes);
    return retrievedData;
  } catch (error) {
    return error;
  }
};

const retrieveDat = showMovies;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMovies);


/***/ }),

/***/ "./src/modules/commentPopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comments: () => (/* binding */ comments),
/* harmony export */   showPopup: () => (/* binding */ showPopup)
/* harmony export */ });
/* harmony import */ var _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/close.svg */ "./src/assets/images/close.svg");


const baseAPI = 'https://api.tvmaze.com/shows';

const showPopup = () => {
  const pop = `<div class="popup">
    <div class="popup_content">
      <div class="titleContent">
        <div class="heading">
          <h2 id="headingSection"></h2>
        </div>
        <img id="closeButton" class="closeFunction" src="" alt="">
      </div>
      <div class="desktopView">
        <div id="popup_info">
          <img id="popup-img" src="" alt="Portfolio">
        </div>
        <div class ="all_info">
          <h3>Summary</h3>
          <p id="projectDesc"></p>
          <div class="bottom_section">
            <h3>Add A Comment</h3>
            <form action="" method="post" id="form" class="contact_form">
              <input name="FullName" type="text" placeholder="Full name" required maxlength="30" />
              <textarea name="Message" rows="4" cols="50" placeholder="Your Insights...." maxlength="500" required></textarea>
              <div class="centered_button" id="form-btn-container">
                <button id="form_btn" type="submit">Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  return pop;
};
const closed = () => {
  const popWin = document.querySelector('.popup');
  popWin.style.visibility = 'hidden';
  return null;
};
const comments = async (e) => {
  const worksImg = document.getElementById('closeButton');
  worksImg.src = _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_0__;
  if (e && e.target && e.target.classList.contains('comments')) {
    const buttonId = parseInt(e.target.id, 10);
    const titleSelect = document.getElementById('headingSection');
    const imageSelect = document.getElementById('popup-img');
    const paragraphSelect = document.getElementById('projectDesc');
    const popWin = document.querySelector('.popup');
    const response = await fetch(baseAPI);
    const retrievedData = await response.json();
    retrievedData.forEach((show) => {
      if (show.id === buttonId) {
        titleSelect.innerHTML = show.name;
        paragraphSelect.innerHTML = show.summary;
        imageSelect.src = show.image.medium;
        popWin.style.visibility = 'visible';
      }
    });
    worksImg.addEventListener('click', closed);
  }
};


/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const taskContainer = document.querySelector(".movie-container");
const involvementAPI =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps";
const appID = "fvEG8bcfusuKIAC9Au4g";

const createTask = (info) => {
  const actionTask = info;
  actionTask.forEach((score) => {
    const mainDivision = document.createElement("div");
    mainDivision.classList.add("movie-card");
    const image = document.createElement("img");
    const heading = document.createElement("h3");
    const secondaryDivision = document.createElement("div");
    const commentButton = document.createElement("button");
    const reserveButton = document.createElement("button");
    const likeButton = document.createElement("button");
    const heartIcon = document.createElement("i");
    const likeCountContainer = document.createElement("div");
    const likeCount = document.createElement("span");
    const dislikeButton = document.createElement("button");
    const dislikeIcon = document.createElement("i");

    commentButton.classList.add("comments");
    commentButton.setAttribute("id", `${score.id}`);
    commentButton.innerHTML = "Comments";

    reserveButton.classList.add("reservations");
    reserveButton.setAttribute("id", `${score.id}`);
    reserveButton.innerHTML = "Reservations";

    secondaryDivision.classList.add("interactions");
    heading.classList.add("movie-title");

    image.src = `${score.image.medium}`;
    image.alt = `${score.name}`;
    heading.innerHTML = `${score.name}`;

    mainDivision.appendChild(image);
    mainDivision.appendChild(heading);
    mainDivision.appendChild(secondaryDivision);
    secondaryDivision.appendChild(commentButton);
    secondaryDivision.appendChild(reserveButton);

    likeButton.classList.add("like-button");
    heartIcon.classList.add("fas", "fa-heart");
    likeButton.appendChild(heartIcon);
    secondaryDivision.appendChild(likeButton);

    likeCountContainer.classList.add("like-count-container");
    likeCountContainer.innerHTML = "Likes: ";
    likeCount.classList.add("like-count");
    likeCount.textContent = score.likes.toString();
    likeCountContainer.appendChild(likeCount);
    secondaryDivision.appendChild(likeCountContainer);

    dislikeButton.classList.add("dislike-button");
    dislikeIcon.classList.add("fas", "fa-thumbs-down");
    dislikeButton.appendChild(dislikeIcon);
    likeCountContainer.appendChild(dislikeButton);

    likeButton.addEventListener("click", async () => {
      try {
        const response = await fetch(`${involvementAPI}/${appID}/likes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item_id: score.id }),
        });
        if (response.ok) {
          score.likes += 1; // Increment likes value
          likeCount.textContent = score.likes.toString();
          return null;
        }
        const message = "Failed to like the item.";
        return message;
      } catch (error) {
        return error;
      }
    });

    dislikeButton.addEventListener("click", () => {
      if (score.likes > 0) {
        score.likes -= 1; // Decrease likes value by one
        likeCount.textContent = score.likes.toString();
      }
    });

    // @ts-ignore
    taskContainer.appendChild(mainDivision);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


/***/ }),

/***/ "./src/modules/reservationPopup.js":
/*!*****************************************!*\
  !*** ./src/modules/reservationPopup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reservationPopup: () => (/* binding */ reservationPopup),
/* harmony export */   reservations: () => (/* binding */ reservations)
/* harmony export */ });
/* harmony import */ var _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/close.svg */ "./src/assets/images/close.svg");


const baseAPI = "https://api.tvmaze.com/shows";

const reservationPopup = () => {
  const pop = `<div class="popup">
    <div class="popup_content">
      <div class="titleContent">
        <div class="heading">
          <h2 id="headingSection"></h2>
        </div>
        <img id="closeButton" class="closeFunction" src="" alt="">
      </div>
      <div class="desktopView">
        <div id="popup_info">
          <img id="popup-img" src="" alt="Portfolio">
        </div>
        <div class ="all_info">
          <h3>Summary</h3>
          <p id="projectDesc"></p>
          <div class="bottom_section">
            <h3>Reserve Now!</h3>
            <form action="" method="post" id="form" class="contact_form">
              <input name="FullName" type="text" placeholder="Full name" required maxlength="30" />
              <textarea name="Message" rows="4" cols="50" placeholder="Your Insights...." maxlength="500" required></textarea>
              <div class="centered_button" id="form-btn-container">
                <button id="form_btn" type="submit">Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  return pop;
};
const closed = () => {
  const popWin = document.querySelector(".popup");
  popWin.style.visibility = "hidden";
  return null;
};
const reservations = async (e) => {
  const worksImg = document.getElementById("closeButton");
  worksImg.src = _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_0__;
  if (e && e.target && e.target.classList.contains("reservations")) {
    const buttonId = parseInt(e.target.id, 10);
    const titleSelect = document.getElementById("headingSection");
    const imageSelect = document.getElementById("popup-img");
    const paragraphSelect = document.getElementById("projectDesc");
    const popWin = document.querySelector(".popup");
    const response = await fetch(baseAPI);
    const retrievedData = await response.json();
    retrievedData.forEach((show) => {
      if (show.id === buttonId) {
        titleSelect.innerHTML = show.name;
        paragraphSelect.innerHTML = show.summary;
        imageSelect.src = show.image.medium;
        popWin.style.visibility = "visible";
      }
    });
    worksImg.addEventListener("click", closed);
  }
};


/***/ }),

/***/ "./src/assets/images/close.svg":
/*!*************************************!*\
  !*** ./src/assets/images/close.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "close.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api.js */ "./src/modules/api.js");
/* harmony import */ var _modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/commentPopup.js */ "./src/modules/commentPopup.js");
/* harmony import */ var _modules_reservationPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reservationPopup.js */ "./src/modules/reservationPopup.js");





window.addEventListener("load", () => {
  (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  document.addEventListener("click", _modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_2__.comments);
  document.getElementById("popWindow").innerHTML = (0,_modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_2__.showPopup)();

  document.addEventListener("click", _modules_reservationPopup_js__WEBPACK_IMPORTED_MODULE_3__.reservations);
  document.getElementById("reservationWindow").innerHTML = (0,_modules_reservationPopup_js__WEBPACK_IMPORTED_MODULE_3__.reservationPopup)();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle7e2d662859d295ef3973.js.map