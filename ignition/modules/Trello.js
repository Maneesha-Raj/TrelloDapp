const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("TrelloModule", (m) => {
    const trello = m.contract("Trello");
    return { trello };
});