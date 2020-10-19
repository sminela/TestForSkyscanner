pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Status test", function () {
    pm.response.to.have.status(200);
});