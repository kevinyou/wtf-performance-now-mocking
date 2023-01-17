const perf_hooks = require('perf_hooks');

describe('tests', () => {
    afterEach(() => {
        jest.useRealTimers();
    })

    it('should stub performance object', () => {
        expect(performance).toEqual(perf_hooks.performance)

        jest.useFakeTimers();

        expect(performance).toEqual(perf_hooks.performance)
    })

    it('should return 0 for .now()', () => {
        const realDirectly = performance.now()
        const realHooked = perf_hooks.performance.now();
        jest.useFakeTimers();

        const fakeDirectly = performance.now()
        const fakeHooked = perf_hooks.performance.now();

        console.log({
            realDirectly,
            realHooked,
            fakeDirectly,
            fakeHooked
        })
        expect(fakeDirectly).toBe(0);
        expect(fakeHooked).toBe(0);
    })
})

