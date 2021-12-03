
shadow.cljs.devtools.client.env.module_loaded('main');

try { harkka.app.mountit(); } catch (e) { console.error("An error occurred when calling (harkka.app/mountit)"); throw(e); }