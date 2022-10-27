/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./im/im.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./im/css/header.css":
/*!***************************!*\
  !*** ./im/css/header.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./im/css/header.css?");

/***/ }),

/***/ "./im/css/im.css":
/*!***********************!*\
  !*** ./im/css/im.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./im/css/im.css?");

/***/ }),

/***/ "./im/css/index.css":
/*!**************************!*\
  !*** ./im/css/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./im/css/index.css?");

/***/ }),

/***/ "./im/css/new_chat.css":
/*!*****************************!*\
  !*** ./im/css/new_chat.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./im/css/new_chat.css?");

/***/ }),

/***/ "./im/im.js":
/*!******************!*\
  !*** ./im/im.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./im/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/header.css */ \"./im/css/header.css\");\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_header_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_im_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/im.css */ \"./im/css/im.css\");\n/* harmony import */ var _css_im_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_im_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_new_chat_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/new_chat.css */ \"./im/css/new_chat.css\");\n/* harmony import */ var _css_new_chat_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_new_chat_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar im = document.querySelector('.im');\nvar username = 'sharkizz';\nif (!localStorage.username) mockLocalStorage();\nrenderChatList();\nfunction openChat(id) {\n  window.location.href = \"./chat.html?id=\".concat(id);\n}\nfunction renderChatList() {\n  var chatList = JSON.parse(localStorage.getItem('im'));\n  if (!chatList) return;\n  im.innerHTML = '';\n  chatList = sortChats(chatList);\n  chatList.forEach(function (chat) {\n    return renderChat(chat);\n  });\n}\nfunction renderChat(chat) {\n  var companion = chat.companion;\n  var lastMessage = chat.messages[chat.messages.length - 1];\n  if (!companion || !lastMessage) return;\n  var chatId = chat.id;\n  var lastText = lastMessage.message;\n  var time = getDate(lastMessage.date);\n  var status = lastMessage.status;\n  var isTagged = isTaggedInChat(chat.messages);\n  var messageCounter = status === 'Sent' && lastMessage.user === 'companion' ? \"\".concat(Math.round(Math.random() * 15)) : '0';\n  im.append(buildChat(companion, lastText, messageCounter, time, isTagged, status, chatId));\n}\nfunction buildChat(companion, lastMessage, messageCounter, time, isTagged, status, chatId) {\n  var chat = document.createElement('div'),\n    avatar = document.createElement('img');\n  var info = document.createElement('div'),\n    comp = document.createElement('span'),\n    lastMess = document.createElement('span');\n  var meta = document.createElement('div'),\n    messTime = document.createElement('span'),\n    messStatus = document.createElement('span');\n  chat.addEventListener('click', function () {\n    openChat(chatId);\n  });\n  avatar.src = 'https://via.placeholder.com/128';\n  avatar.alt = 'avatar';\n  chat.className = 'chat';\n  avatar.className = 'chat-image';\n  info.className = 'chat-info';\n  meta.className = 'chat-meta';\n  comp.className = 'chat-companion-name';\n  lastMess.className = 'chat-last-message';\n  messTime.className = 'chat-time';\n  if (messageCounter !== '0') {\n    // Last message was from companion and still unread\n    messStatus.className = 'chat-message-count-block';\n    var count = document.createElement('span');\n    count.className = 'chat-message-count';\n    count.innerText = messageCounter;\n    if (isTagged) {\n      messStatus.className += ' tagged';\n      count.className += ' tagged';\n      count.innerText = '@ '.concat(messageCounter);\n    }\n    messStatus.append(count);\n  } else {\n    // Last message was from user\n    messStatus.className = 'material-icons chat-status';\n    messStatus.innerText = status === 'Sent' ? 'done' : 'done_all';\n  }\n  comp.innerText = companion;\n  lastMess.innerText = lastMessage;\n  messTime.innerText = time;\n  info.append(comp, lastMess);\n  meta.append(messTime, messStatus);\n  chat.append(avatar, info, meta);\n  return chat;\n}\nfunction getDate(mils) {\n  if (!mils) return;\n  var _Date$toLocaleString$ = new Date(mils).toLocaleString().split(', '),\n    _Date$toLocaleString$2 = _slicedToArray(_Date$toLocaleString$, 2),\n    date = _Date$toLocaleString$2[0],\n    time = _Date$toLocaleString$2[1];\n  var _time$split = time.split(':'),\n    _time$split2 = _slicedToArray(_time$split, 2),\n    h = _time$split2[0],\n    m = _time$split2[1];\n  var _date$split = date.split('.'),\n    _date$split2 = _slicedToArray(_date$split, 2),\n    day = _date$split2[0],\n    month = _date$split2[1];\n  if (date === new Date().toLocaleDateString()) return \"\".concat(h, \":\").concat(m);\n  return \"\".concat(day, \".\").concat(month, \" \").concat(h, \":\").concat(m);\n}\nfunction isTaggedInChat(chat) {\n  return chat.some(function (messages) {\n    return messages.message.includes(\"@\".concat(username));\n  });\n}\nfunction sortChats(chatList) {\n  if (!chatList) return;\n  chatList.sort(function (a, b) {\n    return a.messages[a.messages.length - 1].date < b.messages[b.messages.length - 1].date ? 1 : -1;\n  });\n  return chatList;\n}\n\n// This method is used to fill the localStorage as it should be\nfunction mockLocalStorage() {\n  localStorage.clear();\n  if (localStorage.length) return;\n  localStorage.setItem('username', username);\n  var chats = [{\n    \"id\": \"01\",\n    \"companion\": \"Jennifer\",\n    \"messages\": [{\n      \"user\": \"self\",\n      \"message\": \"Where's the money, Lebowski?\",\n      \"attachment\": null,\n      \"date\": 1616517234741,\n      \"status\": \"Read\"\n    }]\n  }, {\n    \"id\": \"02\",\n    \"companion\": \"F.R.I.E.N.D.S\",\n    \"messages\": [{\n      \"user\": \"self\",\n      \"message\": \"If he doesn't like you, this is all a moo-point\",\n      \"attachment\": null,\n      \"date\": 1666517241712,\n      \"status\": \"Read\"\n    }]\n  }, {\n    \"id\": \"03\",\n    \"companion\": \"Suits\",\n    \"messages\": [{\n      \"user\": \"companion\",\n      \"message\": \"I don't play the odds, I play the man\",\n      \"attachment\": null,\n      \"date\": 1666517201712,\n      \"status\": \"Sent\"\n    }]\n  }, {\n    \"id\": \"04\",\n    \"companion\": \"Dr. House\",\n    \"messages\": [{\n      \"user\": \"companion\",\n      \"message\": \"@sharkizz is overrated.\",\n      \"attachment\": null,\n      \"date\": 1666513201712,\n      \"status\": \"Sent\"\n    }]\n  }, {\n    \"id\": \"05\",\n    \"companion\": \"Lucifer Morningstar\",\n    \"messages\": [{\n      \"user\": \"self\",\n      \"message\": \"People Don't Arrive Broken\",\n      \"attachment\": null,\n      \"date\": 1666517200000,\n      \"status\": \"Read\"\n    }]\n  }, {\n    \"id\": \"06\",\n    \"companion\": \"The Good Doctor\",\n    \"messages\": [{\n      \"user\": \"self\",\n      \"message\": \"If You Want To Get Anything In Life, Shaun, There's One Thing You Got To Do: Never Be Afraid.\",\n      \"attachment\": null,\n      \"date\": 1666507201712,\n      \"status\": \"Read\"\n    }]\n  }, {\n    \"id\": \"07\",\n    \"companion\": \"The Big Bang Theory\",\n    \"messages\": [{\n      \"user\": \"self\",\n      \"message\": \"You think that's bad?\",\n      \"attachment\": null,\n      \"date\": 1666517201712,\n      \"status\": \"Read\"\n    }]\n  }, {\n    \"id\": \"08\",\n    \"companion\": \"Wayne\",\n    \"messages\": [{\n      \"user\": \"companion\",\n      \"message\": \"Love me or hate me, i swear it won't make or break me.\",\n      \"attachment\": null,\n      \"date\": 1666517201712,\n      \"status\": \"Sent\"\n    }]\n  }, {\n    \"id\": \"09\",\n    \"companion\": \"Frank Gallagher\",\n    \"messages\": [{\n      \"user\": \"self\",\n      \"message\": \"Doing things you don't want to do is how you make a relationship work.\",\n      \"attachment\": null,\n      \"date\": 1666517287816,\n      \"status\": \"Sent\"\n    }]\n  }, {\n    \"id\": \"10\",\n    \"companion\": \"Shameless\",\n    \"messages\": [{\n      \"user\": \"companion\",\n      \"message\": \"“Why was the broom late for the meeting? It overswept.”\",\n      \"attachment\": null,\n      \"date\": 1666517287816,\n      \"status\": \"Sent\"\n    }]\n  }];\n  localStorage.setItem('im', JSON.stringify(chats));\n}\n\n//# sourceURL=webpack:///./im/im.js?");

/***/ })

/******/ });