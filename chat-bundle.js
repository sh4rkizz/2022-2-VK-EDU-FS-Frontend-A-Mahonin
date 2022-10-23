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
/******/ 	return __webpack_require__(__webpack_require__.s = "./chat/chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chat/chat.js":
/*!**********************!*\
  !*** ./chat/chat.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./chat/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/header.css */ \"./chat/css/header.css\");\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_header_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_chat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/chat.css */ \"./chat/css/chat.css\");\n/* harmony import */ var _css_chat_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_chat_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/footer.css */ \"./chat/css/footer.css\");\n/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_footer_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar form = document.querySelector('form');\nvar chat = document.querySelector('.chat');\nform.addEventListener('keypress', handleKeyPress.bind());\nform.addEventListener('submit', handleSubmit.bind());\nvar id = new URLSearchParams(window.location.search).get('id');\nvar thisChat = getChatById(id);\nrenderMessages();\ncreateHeader();\nfunction goBack() {\n  window.location.href = \"../index.html\";\n}\nfunction getChatById(chatId) {\n  var chats = JSON.parse(localStorage.getItem('im'));\n  return chats.find(function (chat) {\n    return chat.id === chatId;\n  });\n}\nfunction renderMessages() {\n  // Get and check stored messages\n  var storedMessages = thisChat.messages;\n  if (!storedMessages || !storedMessages.length) return;\n  storedMessages.forEach(function (message) {\n    return createMessage(message);\n  });\n}\nfunction createHeader() {\n  var companionInfo = document.querySelector('.companion-info'),\n    companionMeta = document.createElement('div'),\n    companionAvatar = document.createElement('img'),\n    companionName = document.createElement('span'),\n    companionLastOnline = document.createElement('span');\n  companionAvatar.src = \"../static/temp_avatars/\".concat(thisChat.id, \".png\");\n  companionAvatar.alt = 'profile_pic';\n  companionInfo.className = 'companion-info';\n  companionAvatar.className = 'companion-avatar';\n  companionMeta.className = 'companion-meta';\n  companionName.className = 'companion-name';\n  companionLastOnline.className = 'companion-online';\n  companionName.innerText = thisChat.companion;\n  companionLastOnline.innerText = 'Last seen 10 minutes ago';\n  companionMeta.append(companionName, companionLastOnline);\n  companionInfo.append(companionAvatar, companionMeta);\n}\nfunction createMessage(message) {\n  var messageBlock = document.createElement('div'),\n    messageText = document.createElement('span'),\n    messageMeta = document.createElement('div'),\n    messageDate = document.createElement('div'),\n    messageStatus = document.createElement('div'),\n    messageStatusTick = document.createElement('span');\n  messageText.className = 'message-text';\n  messageDate.className = 'message-date';\n  messageMeta.className = 'message-meta';\n  messageStatus.className = 'message-status';\n  messageDate.className = 'message-date';\n  messageStatusTick.className = 'material-icons message-status';\n  messageBlock.className = message.user === 'companion' ? 'message-block message-companion' : 'message-block message-user';\n  messageText.innerText = message.message;\n  messageDate.innerText = renderDate(message.date);\n  messageStatusTick.innerText = message.status === 'Sent' ? 'done' : 'done_all';\n  messageStatus.append(messageStatusTick);\n  messageMeta.append(messageDate, messageStatus);\n  messageBlock.append(messageText, messageMeta);\n  chat.prepend(messageBlock);\n  window.scrollTo(0, document.body.scrollHeight);\n}\nfunction saveMessageToLocalStorage(message) {\n  var chats = JSON.parse(localStorage.getItem('im'));\n\n  // Set default localStorage if it does not exist\n  if (!chats) localStorage.setItem('im', JSON.stringify([]));\n\n  // Modify certain chat messages\n  chats.map(function (chat) {\n    if (chat.id === thisChat.id) chat.messages.push(message);\n  });\n\n  // Rewrite localStorage 'messages' memory\n  localStorage.setItem('im', JSON.stringify(chats));\n}\nfunction renderDate(mils) {\n  if (!mils) return;\n  var _Date$toLocaleString$ = new Date(mils).toLocaleString().split(', '),\n    _Date$toLocaleString$2 = _slicedToArray(_Date$toLocaleString$, 2),\n    date = _Date$toLocaleString$2[0],\n    time = _Date$toLocaleString$2[1];\n  var _time$split = time.split(':'),\n    _time$split2 = _slicedToArray(_time$split, 2),\n    h = _time$split2[0],\n    m = _time$split2[1];\n  time = \"\".concat(h, \":\").concat(m);\n  if (date === new Date().toLocaleDateString()) return time;\n  return \"\".concat(date, \" \").concat(time);\n}\nfunction mockResponse() {\n  // Build message for companion\n  var responses = ['London is the capital of GB', 'When you have a dream, you\\'ve got to grab it and never let go.', 'Keep your face always toward the sunshine, and shadows will fall behind you.', 'Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts.'];\n  var message = {\n    'user': 'companion',\n    'message': responses[Math.floor(Math.random() * responses.length)],\n    'attachment': null,\n    'date': new Date().getTime(),\n    'status': 'Read'\n  };\n  saveMessageToLocalStorage(message);\n  createMessage(message);\n}\nfunction handleSubmit(event) {\n  event.preventDefault();\n\n  // Get and check input field\n  var input = event.target.querySelector('.footer-input-field');\n  if (!input || !input.value.trim()) return;\n\n  // Get and check attachment field\n  var attachment = event.target.querySelector('.footer-button');\n\n  // Build message\n  var message = {\n    'user': 'self',\n    'message': input.value.trim(),\n    'attachment': attachment,\n    'date': new Date().getTime(),\n    'status': 'Sent'\n  };\n  saveMessageToLocalStorage(message);\n  createMessage(message);\n  setTimeout(function () {\n    mockResponse();\n  }, 2500);\n\n  // Empty the input field\n  input.value = null;\n}\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    form.dispatchEvent(new Event('submit'));\n  }\n}\n\n//# sourceURL=webpack:///./chat/chat.js?");

/***/ }),

/***/ "./chat/css/chat.css":
/*!***************************!*\
  !*** ./chat/css/chat.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat/css/chat.css?");

/***/ }),

/***/ "./chat/css/footer.css":
/*!*****************************!*\
  !*** ./chat/css/footer.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat/css/footer.css?");

/***/ }),

/***/ "./chat/css/header.css":
/*!*****************************!*\
  !*** ./chat/css/header.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat/css/header.css?");

/***/ }),

/***/ "./chat/css/index.css":
/*!****************************!*\
  !*** ./chat/css/index.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat/css/index.css?");

/***/ })

/******/ });