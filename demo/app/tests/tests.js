var Snapkit = require("nativescript-snapkit").Snapkit;
var snapkit = new Snapkit();

describe("greet function", function() {
    it("exists", function() {
        expect(snapkit.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(snapkit.greet()).toEqual("Hello, NS");
    });
});