#!/usr/bin/env node

const mersulMicrobuzelor = require("./index");
const Table = require("le-table");

const args = process.argv.slice(2);
if (args.length < 3) {
    console.log("Usage: mersul-microbuzelor <from> <to> <date>");
    process.exit(1);
}

const main = async () => {
    const departures = await mersulMicrobuzelor.getDepartures(
        args[0],
        args[1],
        args[2]
    );

    const resTable = new Table();

    // Add the header
    resTable.addRow(["Departure time", "Arrival time", "Price", "Company"]);

    departures.forEach((dep) => {
        resTable.addRow([
            dep.departure_time,
            dep.arrival_time,
            dep.price,
            dep.company,
        ]);
    });

    console.log(resTable.stringify());
};

main();
