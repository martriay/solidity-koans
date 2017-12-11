let Cup = artifacts.require("Cup")

// A Cup of Tea
//
// Nan-in, a Japanese master during the Meiji era (1868-1912), received a university professor who came to inquire about Zen.
// Nan-in served tea. He poured his visitor's cup full, and then kept on pouring.
// The professor watched the overflow until he no longer could restrain himself. "It is overfull. No more will go in!"
// "Like this cup," Nan-in said, "you are full of your own opinions and speculations. How can I show you Zen unless you first empty your cup?"

contract('About modifiers', accounts => {
  let cup

  beforeEach(async () => {
    cup = await Cup.new()
  })

  // 1. About modifiers
  it("Modifiers can be used to easily change the behaviour of functions", async () => {
    let empty = await cup.isEmpty.call()
    assert.isTrue(empty)
  })

  // 2. About arguments
  it("Modifiers can receive arguments", async () => {
    let opinions = await cup.opinions.call()
    assert.isFalse(opinions)
  })
})