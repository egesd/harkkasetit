
shadow.cljs.devtools.client.env.module_loaded('main');

try { harkka.app.init(); } catch (e) { console.error("An error occurred when calling (harkka.app/init)"); throw(e); }