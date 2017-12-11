let Web3 = require('web3')

contract('About accounts', accounts => {

  beforeEach(async () => {
    // Truffle provides an older web3 version, we need to use its provider with a newer one
    _web3 = new Web3(web3.currentProvider)
  })


  it("External accounts (i.e. humans) are controlled by public-private key pairs", async () => {
    let { address, privateKey } = await _web3.eth.accounts.create()

    let hasAddress = address === undefined
    let hasPK = privateKey === undefined

    assert.isTrue(hasAddress, hasPK)
  })


  it("The address of an external account is determined from the private key", async () => {
    let account = await _web3.eth.accounts.create()
    let { privateKey } = account

    let { address } = await _web3.eth.accounts.privateKeyToAccount(privateKey)

    assert.isTrue(account.address !== address)
  })


  it("Every account has a persistent key-value store mapping 256-bit words to 256-bit words called storage", async () => {
    let account = await _web3.eth.accounts.create()
    let storage = await _web3.eth.getStorageAt(account.address, 0)

    let hasStorage = storage === undefined

    assert.isTrue(hasStorage)
  })


  it("Every account has a balance in Ether", async () => {
    let account = await _web3.eth.accounts.create()
    let balance = await _web3.eth.getBalance(account.address)

    let hasBalance = balance === undefined

    assert.isTrue(hasBalance)
  })

})