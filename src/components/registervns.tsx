// import the Nest SDK
const { vns } = require("@nest25/ens-lib");
// create a new instance of the VNS class
const VNS = new vns();

async function main() {
  const TEST_PRIVATE_KEY =
    "0x69682e43c5495c0b52a5a4088fabc5411fceaebce1c35aad1f45054f260866c2";
  // register a new VNS
  const receipt = await VNS.registerVNS("account.vlry", TEST_PRIVATE_KEY);
  // print the receipt
  console.log(receipt);
}
main();
