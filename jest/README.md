# Installation and Running
```
nvm use
npm install
npm run test
```

# Example output
```
  console.log
    {
      realDirectly: 663.4801510004327,
      realHooked: 663.4823510004207,
      fakeDirectly: 0,
      fakeHooked: 663.7759509999305
    }

      at Object.log (__tests__/main.test.js:24:17)

 FAIL  __tests__/main.test.js
  tests
    ✕ should stub performance object (6 ms)
    ✕ should return 0 for .now() (14 ms)

  ● tests › should stub performance object

    expect(received).toEqual(expected) // deep equality

    - Expected  - 21
    + Received  +  1

    - Object {
    -   "eventLoopUtilization": Object {
    -     "active": 290.78646500010586,
    -     "idle": 46.346499,
    -     "utilization": 0.8625275367614736,
    -   },
    -   "nodeTiming": Object {
    -     "bootstrapComplete": 24.782546000555158,
    -     "duration": 657.9805629998446,
    -     "entryType": "node",
    -     "environment": 14.470868000760674,
    -     "idleTime": 46.346499,
    -     "loopExit": -1,
    -     "loopStart": 320.7865000003949,
    -     "name": "node",
    -     "nodeStart": 1.492496999911964,
    -     "startTime": 0,
    -     "v8Start": 3.5197919998317957,
    -   },
    -   "timeOrigin": 1673923290678.78,
    - }
    + undefined

      11 |         jest.useFakeTimers();
      12 |
    > 13 |         expect(performance).toEqual(perf_hooks.performance)
         |                             ^
      14 |     })
      15 |
      16 |     it('should return 0 for .now()', () => {

      at Object.toEqual (__tests__/main.test.js:13:29)

  ● tests › should return 0 for .now()

    expect(received).toBe(expected) // Object.is equality

    Expected: 0
    Received: 663.7759509999305

      29 |         })
      30 |         expect(fakeDirectly).toBe(0);
    > 31 |         expect(fakeHooked).toBe(0);
         |                            ^
      32 |     })
      33 | })
      34 |

      at Object.toBe (__tests__/main.test.js:31:28)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 total
Snapshots:   0 total
Time:        0.287 s
Ran all test suites.
```
