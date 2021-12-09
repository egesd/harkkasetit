["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/net/xmlhttpfactory.js"],"~:js","goog.provide(\"goog.net.XmlHttpFactory\");\ngoog.require(\"goog.net.XhrLike\");\ngoog.net.XmlHttpFactory = function() {\n};\ngoog.net.XmlHttpFactory.prototype.cachedOptions_ = null;\ngoog.net.XmlHttpFactory.prototype.createInstance = goog.abstractMethod;\ngoog.net.XmlHttpFactory.prototype.getOptions = function() {\n  return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions());\n};\ngoog.net.XmlHttpFactory.prototype.internalGetOptions = goog.abstractMethod;\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Interface for a factory for creating XMLHttpRequest objects\n * and metadata about them.\n */\n\ngoog.provide('goog.net.XmlHttpFactory');\n\n/** @suppress {extraRequire} Typedef. */\ngoog.require('goog.net.XhrLike');\n\n\n\n/**\n * Abstract base class for an XmlHttpRequest factory.\n * @constructor\n */\ngoog.net.XmlHttpFactory = function() {};\n\n\n/**\n * Cache of options - we only actually call internalGetOptions once.\n * @type {?Object}\n * @private\n */\ngoog.net.XmlHttpFactory.prototype.cachedOptions_ = null;\n\n\n/**\n * @return {!goog.net.XhrLike.OrNative} A new XhrLike instance.\n */\ngoog.net.XmlHttpFactory.prototype.createInstance = goog.abstractMethod;\n\n\n/**\n * @return {Object} Options describing how xhr objects obtained from this\n *     factory should be used.\n */\ngoog.net.XmlHttpFactory.prototype.getOptions = function() {\n  'use strict';\n  return this.cachedOptions_ ||\n      (this.cachedOptions_ = this.internalGetOptions());\n};\n\n\n/**\n * Override this method in subclasses to preserve the caching offered by\n * getOptions().\n * @return {Object} Options describing how xhr objects obtained from this\n *     factory should be used.\n * @protected\n */\ngoog.net.XmlHttpFactory.prototype.internalGetOptions = goog.abstractMethod;\n","~:compiled-at",1639049743893,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.net.xmlhttpfactory.js\",\n\"lineCount\":11,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,yBAAb,CAAA;AAGAD,IAAKE,CAAAA,OAAL,CAAa,kBAAb,CAAA;AAQAF,IAAKG,CAAAA,GAAIC,CAAAA,cAAT,GAA0BC,QAAQ,EAAG;CAArC;AAQAL,IAAKG,CAAAA,GAAIC,CAAAA,cAAeE,CAAAA,SAAUC,CAAAA,cAAlC,GAAmD,IAAnD;AAMAP,IAAKG,CAAAA,GAAIC,CAAAA,cAAeE,CAAAA,SAAUE,CAAAA,cAAlC,GAAmDR,IAAKS,CAAAA,cAAxD;AAOAT,IAAKG,CAAAA,GAAIC,CAAAA,cAAeE,CAAAA,SAAUI,CAAAA,UAAlC,GAA+CC,QAAQ,EAAG;AAExD,SAAO,IAAKJ,CAAAA,cAAZ,KACK,IAAKA,CAAAA,cADV,GAC2B,IAAKK,CAAAA,kBAAL,EAD3B;AAFwD,CAA1D;AAcAZ,IAAKG,CAAAA,GAAIC,CAAAA,cAAeE,CAAAA,SAAUM,CAAAA,kBAAlC,GAAuDZ,IAAKS,CAAAA,cAA5D;;\",\n\"sources\":[\"goog/net/xmlhttpfactory.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Interface for a factory for creating XMLHttpRequest objects\\n * and metadata about them.\\n */\\n\\ngoog.provide('goog.net.XmlHttpFactory');\\n\\n/** @suppress {extraRequire} Typedef. */\\ngoog.require('goog.net.XhrLike');\\n\\n\\n\\n/**\\n * Abstract base class for an XmlHttpRequest factory.\\n * @constructor\\n */\\ngoog.net.XmlHttpFactory = function() {};\\n\\n\\n/**\\n * Cache of options - we only actually call internalGetOptions once.\\n * @type {?Object}\\n * @private\\n */\\ngoog.net.XmlHttpFactory.prototype.cachedOptions_ = null;\\n\\n\\n/**\\n * @return {!goog.net.XhrLike.OrNative} A new XhrLike instance.\\n */\\ngoog.net.XmlHttpFactory.prototype.createInstance = goog.abstractMethod;\\n\\n\\n/**\\n * @return {Object} Options describing how xhr objects obtained from this\\n *     factory should be used.\\n */\\ngoog.net.XmlHttpFactory.prototype.getOptions = function() {\\n  'use strict';\\n  return this.cachedOptions_ ||\\n      (this.cachedOptions_ = this.internalGetOptions());\\n};\\n\\n\\n/**\\n * Override this method in subclasses to preserve the caching offered by\\n * getOptions().\\n * @return {Object} Options describing how xhr objects obtained from this\\n *     factory should be used.\\n * @protected\\n */\\ngoog.net.XmlHttpFactory.prototype.internalGetOptions = goog.abstractMethod;\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"net\",\"XmlHttpFactory\",\"goog.net.XmlHttpFactory\",\"prototype\",\"cachedOptions_\",\"createInstance\",\"abstractMethod\",\"getOptions\",\"goog.net.XmlHttpFactory.prototype.getOptions\",\"internalGetOptions\"]\n}\n"]