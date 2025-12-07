// test/setup/jest.setup.js
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ data: "fake response" }),
  })
);
