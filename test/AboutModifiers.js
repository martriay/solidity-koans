let Cup = artifacts.require("Cup")


contract('About modifiers', accounts => {
  let cup

  beforeEach(async () => {
    cup = await Cup.new()
  })

  it("About modifiers", async () => {
    let empty = await cup.isEmpty.call()
    assert.isTrue(empty)
  })

  it("About arguments", async () => {
    let opinions = await cup.opinions.call()
    assert.isFalse(opinions)
  })
})