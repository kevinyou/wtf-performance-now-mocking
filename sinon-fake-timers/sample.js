var perf_hooks = require('perf_hooks');
var FakeTimers = require("@sinonjs/fake-timers");

console.log(perf_hooks.performance === performance);
console.log(perf_hooks.performance.now());
console.log(performance.now());

var clock = FakeTimers.install({
    now: Date.now(),
    shouldClearNativeTimers: true,
});
console.log(perf_hooks.performance === performance);
console.log(perf_hooks.performance.now());
console.log(performance.now());

clock.tick(500);

console.log(perf_hooks.performance.now());
console.log(performance.now());

clock.tick(500);

console.log(perf_hooks.performance.now());
console.log(performance.now());
