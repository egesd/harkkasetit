["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/crypt/crypt.js"],"~:js","goog.provide(\"goog.crypt\");\ngoog.require(\"goog.asserts\");\ngoog.crypt.stringToByteArray = function(str) {\n  var output = [], p = 0;\n  for (var i = 0; i < str.length; i++) {\n    var c = str.charCodeAt(i);\n    if (c > 255) {\n      output[p++] = c & 255;\n      c >>= 8;\n    }\n    output[p++] = c;\n  }\n  return output;\n};\ngoog.crypt.byteArrayToString = function(bytes) {\n  var CHUNK_SIZE = 8192;\n  if (bytes.length <= CHUNK_SIZE) {\n    return String.fromCharCode.apply(null, bytes);\n  }\n  var str = \"\";\n  for (var i = 0; i < bytes.length; i += CHUNK_SIZE) {\n    var chunk = Array.prototype.slice.call(bytes, i, i + CHUNK_SIZE);\n    str += String.fromCharCode.apply(null, chunk);\n  }\n  return str;\n};\ngoog.crypt.byteArrayToHex = function(array, opt_separator) {\n  return Array.prototype.map.call(array, function(numByte) {\n    var hexByte = numByte.toString(16);\n    return hexByte.length > 1 ? hexByte : \"0\" + hexByte;\n  }).join(opt_separator || \"\");\n};\ngoog.crypt.hexToByteArray = function(hexString) {\n  goog.asserts.assert(hexString.length % 2 == 0, \"Key string length must be multiple of 2\");\n  var arr = [];\n  for (var i = 0; i < hexString.length; i += 2) {\n    arr.push(parseInt(hexString.substring(i, i + 2), 16));\n  }\n  return arr;\n};\ngoog.crypt.stringToUtf8ByteArray = function(str) {\n  var out = [], p = 0;\n  for (var i = 0; i < str.length; i++) {\n    var c = str.charCodeAt(i);\n    if (c < 128) {\n      out[p++] = c;\n    } else {\n      if (c < 2048) {\n        out[p++] = c >> 6 | 192;\n        out[p++] = c & 63 | 128;\n      } else {\n        if ((c & 64512) == 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) == 56320) {\n          c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);\n          out[p++] = c >> 18 | 240;\n          out[p++] = c >> 12 & 63 | 128;\n          out[p++] = c >> 6 & 63 | 128;\n          out[p++] = c & 63 | 128;\n        } else {\n          out[p++] = c >> 12 | 224;\n          out[p++] = c >> 6 & 63 | 128;\n          out[p++] = c & 63 | 128;\n        }\n      }\n    }\n  }\n  return out;\n};\ngoog.crypt.utf8ByteArrayToString = function(bytes) {\n  var out = [], pos = 0, c = 0;\n  while (pos < bytes.length) {\n    var c1 = bytes[pos++];\n    if (c1 < 128) {\n      out[c++] = String.fromCharCode(c1);\n    } else {\n      if (c1 > 191 && c1 < 224) {\n        var c2 = bytes[pos++];\n        out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);\n      } else {\n        if (c1 > 239 && c1 < 365) {\n          var c2 = bytes[pos++];\n          var c3 = bytes[pos++];\n          var c4 = bytes[pos++];\n          var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;\n          out[c++] = String.fromCharCode(55296 + (u >> 10));\n          out[c++] = String.fromCharCode(56320 + (u & 1023));\n        } else {\n          var c2 = bytes[pos++];\n          var c3 = bytes[pos++];\n          out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);\n        }\n      }\n    }\n  }\n  return out.join(\"\");\n};\ngoog.crypt.xorByteArray = function(bytes1, bytes2) {\n  goog.asserts.assert(bytes1.length == bytes2.length, \"XOR array lengths must match\");\n  var result = [];\n  for (var i = 0; i < bytes1.length; i++) {\n    result.push(bytes1[i] ^ bytes2[i]);\n  }\n  return result;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Namespace with crypto related helper functions.\n */\n\ngoog.provide('goog.crypt');\n\ngoog.require('goog.asserts');\n\n\n/**\n * Turns a string into an array of bytes; a \"byte\" being a JS number in the\n * range 0-255. Multi-byte characters are written as little-endian.\n * @param {string} str String value to arrify.\n * @return {!Array<number>} Array of numbers corresponding to the\n *     UCS character codes of each character in str.\n */\ngoog.crypt.stringToByteArray = function(str) {\n  'use strict';\n  var output = [], p = 0;\n  for (var i = 0; i < str.length; i++) {\n    var c = str.charCodeAt(i);\n    // NOTE: c <= 0xffff since JavaScript strings are UTF-16.\n    if (c > 0xff) {\n      output[p++] = c & 0xff;\n      c >>= 8;\n    }\n    output[p++] = c;\n  }\n  return output;\n};\n\n\n/**\n * Turns an array of numbers into the string given by the concatenation of the\n * characters to which the numbers correspond.\n * @param {!Uint8Array|!Array<number>} bytes Array of numbers representing\n *     characters.\n * @return {string} Stringification of the array.\n */\ngoog.crypt.byteArrayToString = function(bytes) {\n  'use strict';\n  var CHUNK_SIZE = 8192;\n\n  // Special-case the simple case for speed's sake.\n  if (bytes.length <= CHUNK_SIZE) {\n    return String.fromCharCode.apply(null, bytes);\n  }\n\n  // The remaining logic splits conversion by chunks since\n  // Function#apply() has a maximum parameter count.\n  // See discussion: http://goo.gl/LrWmZ9\n\n  var str = '';\n  for (var i = 0; i < bytes.length; i += CHUNK_SIZE) {\n    var chunk = Array.prototype.slice.call(bytes, i, i + CHUNK_SIZE);\n    str += String.fromCharCode.apply(null, chunk);\n  }\n  return str;\n};\n\n\n/**\n * Turns an array of numbers into the hex string given by the concatenation of\n * the hex values to which the numbers correspond.\n * @param {Uint8Array|Array<number>} array Array of numbers representing\n *     characters.\n * @param {string=} opt_separator Optional separator between values\n * @return {string} Hex string.\n */\ngoog.crypt.byteArrayToHex = function(array, opt_separator) {\n  'use strict';\n  return Array.prototype.map\n      .call(\n          array,\n          function(numByte) {\n            'use strict';\n            var hexByte = numByte.toString(16);\n            return hexByte.length > 1 ? hexByte : '0' + hexByte;\n          })\n      .join(opt_separator || '');\n};\n\n\n/**\n * Converts a hex string into an integer array.\n * @param {string} hexString Hex string of 16-bit integers (two characters\n *     per integer).\n * @return {!Array<number>} Array of {0,255} integers for the given string.\n */\ngoog.crypt.hexToByteArray = function(hexString) {\n  'use strict';\n  goog.asserts.assert(\n      hexString.length % 2 == 0, 'Key string length must be multiple of 2');\n  var arr = [];\n  for (var i = 0; i < hexString.length; i += 2) {\n    arr.push(parseInt(hexString.substring(i, i + 2), 16));\n  }\n  return arr;\n};\n\n\n/**\n * Converts a JS string to a UTF-8 \"byte\" array.\n * @param {string} str 16-bit unicode string.\n * @return {!Array<number>} UTF-8 byte array.\n */\ngoog.crypt.stringToUtf8ByteArray = function(str) {\n  'use strict';\n  // TODO(user): Use native implementations if/when available\n  var out = [], p = 0;\n  for (var i = 0; i < str.length; i++) {\n    var c = str.charCodeAt(i);\n    if (c < 128) {\n      out[p++] = c;\n    } else if (c < 2048) {\n      out[p++] = (c >> 6) | 192;\n      out[p++] = (c & 63) | 128;\n    } else if (\n        ((c & 0xFC00) == 0xD800) && (i + 1) < str.length &&\n        ((str.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {\n      // Surrogate Pair\n      c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);\n      out[p++] = (c >> 18) | 240;\n      out[p++] = ((c >> 12) & 63) | 128;\n      out[p++] = ((c >> 6) & 63) | 128;\n      out[p++] = (c & 63) | 128;\n    } else {\n      out[p++] = (c >> 12) | 224;\n      out[p++] = ((c >> 6) & 63) | 128;\n      out[p++] = (c & 63) | 128;\n    }\n  }\n  return out;\n};\n\n\n/**\n * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.\n * @param {Uint8Array|Array<number>} bytes UTF-8 byte array.\n * @return {string} 16-bit Unicode string.\n */\ngoog.crypt.utf8ByteArrayToString = function(bytes) {\n  'use strict';\n  // TODO(user): Use native implementations if/when available\n  var out = [], pos = 0, c = 0;\n  while (pos < bytes.length) {\n    var c1 = bytes[pos++];\n    if (c1 < 128) {\n      out[c++] = String.fromCharCode(c1);\n    } else if (c1 > 191 && c1 < 224) {\n      var c2 = bytes[pos++];\n      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);\n    } else if (c1 > 239 && c1 < 365) {\n      // Surrogate Pair\n      var c2 = bytes[pos++];\n      var c3 = bytes[pos++];\n      var c4 = bytes[pos++];\n      var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) -\n          0x10000;\n      out[c++] = String.fromCharCode(0xD800 + (u >> 10));\n      out[c++] = String.fromCharCode(0xDC00 + (u & 1023));\n    } else {\n      var c2 = bytes[pos++];\n      var c3 = bytes[pos++];\n      out[c++] =\n          String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);\n    }\n  }\n  return out.join('');\n};\n\n\n/**\n * XOR two byte arrays.\n * @param {!Uint8Array|!Int8Array|!Array<number>} bytes1 Byte array 1.\n * @param {!Uint8Array|!Int8Array|!Array<number>} bytes2 Byte array 2.\n * @return {!Array<number>} Resulting XOR of the two byte arrays.\n */\ngoog.crypt.xorByteArray = function(bytes1, bytes2) {\n  'use strict';\n  goog.asserts.assert(\n      bytes1.length == bytes2.length, 'XOR array lengths must match');\n\n  var result = [];\n  for (var i = 0; i < bytes1.length; i++) {\n    result.push(bytes1[i] ^ bytes2[i]);\n  }\n  return result;\n};\n","~:compiled-at",1639049743917,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.crypt.crypt.js\",\n\"lineCount\":104,\n\"mappings\":\"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\",\n\"sources\":[\"goog/crypt/crypt.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Namespace with crypto related helper functions.\\n */\\n\\ngoog.provide('goog.crypt');\\n\\ngoog.require('goog.asserts');\\n\\n\\n/**\\n * Turns a string into an array of bytes; a \\\"byte\\\" being a JS number in the\\n * range 0-255. Multi-byte characters are written as little-endian.\\n * @param {string} str String value to arrify.\\n * @return {!Array<number>} Array of numbers corresponding to the\\n *     UCS character codes of each character in str.\\n */\\ngoog.crypt.stringToByteArray = function(str) {\\n  'use strict';\\n  var output = [], p = 0;\\n  for (var i = 0; i < str.length; i++) {\\n    var c = str.charCodeAt(i);\\n    // NOTE: c <= 0xffff since JavaScript strings are UTF-16.\\n    if (c > 0xff) {\\n      output[p++] = c & 0xff;\\n      c >>= 8;\\n    }\\n    output[p++] = c;\\n  }\\n  return output;\\n};\\n\\n\\n/**\\n * Turns an array of numbers into the string given by the concatenation of the\\n * characters to which the numbers correspond.\\n * @param {!Uint8Array|!Array<number>} bytes Array of numbers representing\\n *     characters.\\n * @return {string} Stringification of the array.\\n */\\ngoog.crypt.byteArrayToString = function(bytes) {\\n  'use strict';\\n  var CHUNK_SIZE = 8192;\\n\\n  // Special-case the simple case for speed's sake.\\n  if (bytes.length <= CHUNK_SIZE) {\\n    return String.fromCharCode.apply(null, bytes);\\n  }\\n\\n  // The remaining logic splits conversion by chunks since\\n  // Function#apply() has a maximum parameter count.\\n  // See discussion: http://goo.gl/LrWmZ9\\n\\n  var str = '';\\n  for (var i = 0; i < bytes.length; i += CHUNK_SIZE) {\\n    var chunk = Array.prototype.slice.call(bytes, i, i + CHUNK_SIZE);\\n    str += String.fromCharCode.apply(null, chunk);\\n  }\\n  return str;\\n};\\n\\n\\n/**\\n * Turns an array of numbers into the hex string given by the concatenation of\\n * the hex values to which the numbers correspond.\\n * @param {Uint8Array|Array<number>} array Array of numbers representing\\n *     characters.\\n * @param {string=} opt_separator Optional separator between values\\n * @return {string} Hex string.\\n */\\ngoog.crypt.byteArrayToHex = function(array, opt_separator) {\\n  'use strict';\\n  return Array.prototype.map\\n      .call(\\n          array,\\n          function(numByte) {\\n            'use strict';\\n            var hexByte = numByte.toString(16);\\n            return hexByte.length > 1 ? hexByte : '0' + hexByte;\\n          })\\n      .join(opt_separator || '');\\n};\\n\\n\\n/**\\n * Converts a hex string into an integer array.\\n * @param {string} hexString Hex string of 16-bit integers (two characters\\n *     per integer).\\n * @return {!Array<number>} Array of {0,255} integers for the given string.\\n */\\ngoog.crypt.hexToByteArray = function(hexString) {\\n  'use strict';\\n  goog.asserts.assert(\\n      hexString.length % 2 == 0, 'Key string length must be multiple of 2');\\n  var arr = [];\\n  for (var i = 0; i < hexString.length; i += 2) {\\n    arr.push(parseInt(hexString.substring(i, i + 2), 16));\\n  }\\n  return arr;\\n};\\n\\n\\n/**\\n * Converts a JS string to a UTF-8 \\\"byte\\\" array.\\n * @param {string} str 16-bit unicode string.\\n * @return {!Array<number>} UTF-8 byte array.\\n */\\ngoog.crypt.stringToUtf8ByteArray = function(str) {\\n  'use strict';\\n  // TODO(user): Use native implementations if/when available\\n  var out = [], p = 0;\\n  for (var i = 0; i < str.length; i++) {\\n    var c = str.charCodeAt(i);\\n    if (c < 128) {\\n      out[p++] = c;\\n    } else if (c < 2048) {\\n      out[p++] = (c >> 6) | 192;\\n      out[p++] = (c & 63) | 128;\\n    } else if (\\n        ((c & 0xFC00) == 0xD800) && (i + 1) < str.length &&\\n        ((str.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {\\n      // Surrogate Pair\\n      c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);\\n      out[p++] = (c >> 18) | 240;\\n      out[p++] = ((c >> 12) & 63) | 128;\\n      out[p++] = ((c >> 6) & 63) | 128;\\n      out[p++] = (c & 63) | 128;\\n    } else {\\n      out[p++] = (c >> 12) | 224;\\n      out[p++] = ((c >> 6) & 63) | 128;\\n      out[p++] = (c & 63) | 128;\\n    }\\n  }\\n  return out;\\n};\\n\\n\\n/**\\n * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.\\n * @param {Uint8Array|Array<number>} bytes UTF-8 byte array.\\n * @return {string} 16-bit Unicode string.\\n */\\ngoog.crypt.utf8ByteArrayToString = function(bytes) {\\n  'use strict';\\n  // TODO(user): Use native implementations if/when available\\n  var out = [], pos = 0, c = 0;\\n  while (pos < bytes.length) {\\n    var c1 = bytes[pos++];\\n    if (c1 < 128) {\\n      out[c++] = String.fromCharCode(c1);\\n    } else if (c1 > 191 && c1 < 224) {\\n      var c2 = bytes[pos++];\\n      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);\\n    } else if (c1 > 239 && c1 < 365) {\\n      // Surrogate Pair\\n      var c2 = bytes[pos++];\\n      var c3 = bytes[pos++];\\n      var c4 = bytes[pos++];\\n      var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) -\\n          0x10000;\\n      out[c++] = String.fromCharCode(0xD800 + (u >> 10));\\n      out[c++] = String.fromCharCode(0xDC00 + (u & 1023));\\n    } else {\\n      var c2 = bytes[pos++];\\n      var c3 = bytes[pos++];\\n      out[c++] =\\n          String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);\\n    }\\n  }\\n  return out.join('');\\n};\\n\\n\\n/**\\n * XOR two byte arrays.\\n * @param {!Uint8Array|!Int8Array|!Array<number>} bytes1 Byte array 1.\\n * @param {!Uint8Array|!Int8Array|!Array<number>} bytes2 Byte array 2.\\n * @return {!Array<number>} Resulting XOR of the two byte arrays.\\n */\\ngoog.crypt.xorByteArray = function(bytes1, bytes2) {\\n  'use strict';\\n  goog.asserts.assert(\\n      bytes1.length == bytes2.length, 'XOR array lengths must match');\\n\\n  var result = [];\\n  for (var i = 0; i < bytes1.length; i++) {\\n    result.push(bytes1[i] ^ bytes2[i]);\\n  }\\n  return result;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"crypt\",\"stringToByteArray\",\"goog.crypt.stringToByteArray\",\"str\",\"output\",\"p\",\"i\",\"length\",\"c\",\"charCodeAt\",\"byteArrayToString\",\"goog.crypt.byteArrayToString\",\"bytes\",\"CHUNK_SIZE\",\"String\",\"fromCharCode\",\"apply\",\"chunk\",\"Array\",\"prototype\",\"slice\",\"call\",\"byteArrayToHex\",\"goog.crypt.byteArrayToHex\",\"array\",\"opt_separator\",\"map\",\"numByte\",\"hexByte\",\"toString\",\"join\",\"hexToByteArray\",\"goog.crypt.hexToByteArray\",\"hexString\",\"asserts\",\"assert\",\"arr\",\"push\",\"parseInt\",\"substring\",\"stringToUtf8ByteArray\",\"goog.crypt.stringToUtf8ByteArray\",\"out\",\"utf8ByteArrayToString\",\"goog.crypt.utf8ByteArrayToString\",\"pos\",\"c1\",\"c2\",\"c3\",\"c4\",\"u\",\"xorByteArray\",\"goog.crypt.xorByteArray\",\"bytes1\",\"bytes2\",\"result\"]\n}\n"]