const fetchData = require("./fetchData.js");

test("promise", () => {
  return fetchData().then((data) => {
    expect(data).toBe("done");
  });
});
