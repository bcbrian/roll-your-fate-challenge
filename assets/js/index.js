let currentRollTotal = getRecentRollTotal();
let currentRoll = getRecentRoll();
function displayResentRoll() {
  document.getElementById("most-recent-roll").innerHTML =
    getRecentRoll() + " rolled " + getRecentRollTotal();
}
function getRecentRollTotal() {
  return localStorage.getItem("recentRollTotal") || "N/A";
}
function setRecentRollTotal(newRollTotal) {
  localStorage.setItem("recentRollTotal", newRollTotal);
}
function getRecentRoll() {
  return localStorage.getItem("recentRoll") || "N/A";
}
function setRecentRoll(newRoll) {
  localStorage.setItem("recentRoll", newRoll);
}
displayResentRoll();
function rollingDirty() {
  setRecentRoll(currentRoll);
  setRecentRollTotal(currentRollTotal);
  displayResentRoll();
  //  v-- ROLL HERE --v

  /*
    <!-- 5d20 --> DONE
    <!-- 5d20 + 3 --> DONE
    <!-- 5d4 - 3 --> DONE
    <!-- 3d6, 1d8 + 3 -->
  */

  // COOP var

  // get the user input
  const coopersRoll = document
    .getElementById("pirates_galore")
    .value.replace(/\s/g, "");

  const commaSplit = coopersRoll.split(",");
  let coopersTotal = 0;
  for (let i = 0; i < commaSplit.length; i++) {
    const coopsRoll = commaSplit[i];
    // execute user input 5d20+3;
    console.log(coopsRoll.split(""));
    console.log(coopsRoll.split("d"));
    console.log(coopsRoll.split("+"));
    console.log(coopsRoll.split("-"));
    const minusSplit = coopsRoll.split("-");
    const plusSplit = coopsRoll.split("+");
    let dSplit = [];
    let jaysModifier = 0;

    if (minusSplit.length > 1) {
      jaysModifier = -1 * parseInt(minusSplit[1]);
      dSplit = minusSplit[0].split("d");
    } else if (plusSplit.length > 1) {
      jaysModifier = parseInt(plusSplit[1]);
      dSplit = plusSplit[0].split("d");
    } else {
      dSplit = coopsRoll.split("d");
    }

    //                  0,    1,   ......
    //roll the dSplit ["5", "20"];
    /*
      const str = "string"
      const num = 12354234653;
      const bool = true; // false
    */
    const numRoll = parseInt(dSplit[0]);
    const dSides = parseInt(dSplit[1]);

    // roll 5 times for 5d20
    let jaybocc2 = 0;
    for (let i = 1; i <= numRoll; i++) {
      const dRoll = Math.floor(Math.random() * dSides) + 1;
      jaybocc2 = jaybocc2 + dRoll;
    }
    coopersTotal = coopersTotal + jaybocc2 + jaysModifier; // pronounced jay
    currentRoll = coopersRoll;
    currentRollTotal = coopersTotal;
  }
  // display the results
  const jaybocc2ResEl = document.getElementById("jaybocc2Res");
  jaybocc2ResEl.innerHTML = coopersTotal;
}
