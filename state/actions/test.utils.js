const { ISOToDDMMYY } = require("./utils");

test("ISOToDDMMYY should give correct date string formatted as dd/mm/yyyy on given isodateString ", () => {
    expect(ISOToDDMMYY("2020-08-05T07:12:27.434Z")).toBe("05/08/2020");
});
