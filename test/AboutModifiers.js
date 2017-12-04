let Cup = artifacts.require("Cup")

contract('About modifiers', function(accounts) {
  let cup

  beforeEach(async function() {
    cup = await Cup.new()
  })

  // 1. About modifiers
  it("Modifiers can be used to easily change the behaviour of functions", async () => {
    let empty = await cup.isEmpty.call()
    assert.isTrue(empty)
  })

  // 2. About arguments
  it("Modifiers can receive arguments", async () => {
    let opinions = await cup.holdingOpinions.call()
    assert.isFalse(opinions)
  })
})