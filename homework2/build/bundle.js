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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n// import './index.css'\n\nvar form = document.querySelector('form');\nvar chat = document.querySelector('.chat');\nvar header = document.querySelector('.header');\nvar userName = 'sharkizz';\nvar companionName = 'Jennifer Wolski';\nrenderMessagesAfterReload();\ncreateHeader();\nform.addEventListener('key-press', handleKeyPress.bind());\nform.addEventListener('submit', handleSubmit.bind());\nfunction renderMessagesAfterReload() {\n  // Get and check stored messages\n  var storedMessages = JSON.parse(localStorage.getItem('messages'));\n  if (!storedMessages || !storedMessages.length) return;\n  storedMessages.forEach(function (message) {\n    return createMessage(message);\n  });\n}\nfunction createHeader() {\n  var companion = document.createElement('div');\n  var compPicture = document.createElement('img');\n  var compName = document.createElement('div');\n  var compInfo = document.createElement('div');\n  var compLastOnline = document.createElement('span');\n  var goBackButton = document.createElement('button');\n  var searchButton = document.createElement('button');\n  var moreButton = document.createElement('button');\n  var styleGoBackButton = document.createElement('span');\n  var styleSearchButton = document.createElement('span');\n  var styleMoreButton = document.createElement('span');\n  companion.className = 'companion';\n  compInfo.className = 'companion-info';\n  compPicture.className = 'companion-picture';\n  compName.className = 'companion-name';\n  compLastOnline.className = 'companion-online';\n  goBackButton.className = 'header-button go-back';\n  searchButton.className = 'header-button search';\n  moreButton.className = 'header-button more';\n  styleGoBackButton.className = 'material-icons go-back';\n  styleSearchButton.className = 'material-icons search';\n  styleMoreButton.className = 'material-icons more';\n  compPicture.src = 'static/jenifer_profile_picture.jpg';\n  compPicture.alt = 'profile_pic';\n  compName.innerText = companionName;\n  compLastOnline.innerText = \"Last seen \".concat(Math.floor(Math.random() * 10) + 1, \" minutes ago\");\n  styleGoBackButton.innerText = 'arrow_back';\n  styleSearchButton.innerText = 'search';\n  styleMoreButton.innerText = 'more_vert';\n  goBackButton.append(styleGoBackButton);\n  searchButton.append(styleSearchButton);\n  moreButton.append(styleMoreButton);\n  compInfo.append(compName);\n  compInfo.append(compLastOnline);\n  companion.append(compPicture);\n  companion.append(compInfo);\n  header.append(goBackButton);\n  header.append(companion);\n  header.append(searchButton);\n  header.append(moreButton);\n}\nfunction createMessage(message) {\n  var messageBlock = document.createElement('div');\n  var messageText = document.createElement('span');\n  var messageMeta = document.createElement('div');\n  var messageDate = document.createElement('div');\n  var messageState = document.createElement('div');\n  messageText.className = 'message-text';\n  messageDate.className = 'message-date';\n  messageBlock.className = message.username === companionName ? 'message companion' : 'message user';\n  messageMeta.className = 'message-meta';\n  messageState.className = 'message-state';\n  messageDate.className = 'message-date';\n  messageText.innerText = message.message;\n  messageDate.innerText = dateDivisor(message.date);\n  messageBlock.append(messageText);\n  messageMeta.append(messageDate);\n  messageMeta.append(messageState);\n  messageBlock.append(messageMeta);\n  chat.prepend(messageBlock);\n  window.scrollTo(0, document.body.scrollHeight);\n}\nfunction saveMessageToLocalStorage(message) {\n  var messages = localStorage.getItem('messages');\n\n  // Set default localStorage if it does not exist\n  if (!messages) localStorage.setItem('messages', JSON.stringify([]));\n\n  // Add message to the list\n  messages = JSON.parse(localStorage.getItem('messages'));\n  messages.push(message);\n\n  // Rewrite localStorage 'messages' memory\n  localStorage.setItem('messages', JSON.stringify(messages));\n}\nfunction dateDivisor(localeDate) {\n  if (!localeDate) return;\n  var _localeDate$split = localeDate.split(', '),\n    _localeDate$split2 = _slicedToArray(_localeDate$split, 2),\n    date = _localeDate$split2[0],\n    time = _localeDate$split2[1];\n  var _time$split = time.split(':'),\n    _time$split2 = _slicedToArray(_time$split, 2),\n    h = _time$split2[0],\n    m = _time$split2[1];\n  time = \"\".concat(h, \":\").concat(m);\n  if (date === new Date().toLocaleDateString()) return time;\n  return \"\".concat(date, \" \").concat(time);\n}\nfunction mockResponse() {\n  // Build message for companion\n  var responses = ['London is the capital of GB', 'When you have a dream, you\\'ve got to grab it and never let go.', 'Keep your face always toward the sunshine, and shadows will fall behind you.', 'Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts.'];\n  var message = {\n    'username': companionName,\n    'message': responses[Math.floor(Math.random() * responses.length)],\n    'attachment': null,\n    'date': new Date().toLocaleString(),\n    'status': 'Read'\n  };\n  saveMessageToLocalStorage(message);\n  createMessage(message);\n}\nfunction handleSubmit(event) {\n  event.preventDefault();\n\n  // Get and check input field\n  var input = event.target.querySelector('.form-input');\n  if (!input || !input.value.trim()) return;\n\n  // Get and check attachment field\n  var attachment = event.target.querySelector('.attachment-button');\n\n  // Build message\n  var message = {\n    'username': userName,\n    'message': input.value.trim(),\n    'attachment': attachment,\n    'date': new Date().toLocaleString(),\n    'status': 'Sent'\n  };\n  saveMessageToLocalStorage(message);\n  createMessage(message);\n  setTimeout(function () {\n    mockResponse();\n  }, 3000);\n\n  // Empty the input field\n  input.value = null;\n}\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) form.dispatchEvent(new Event('submit'));\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });