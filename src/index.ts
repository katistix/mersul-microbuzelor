const scrapeIt = require("scrape-it");

export type DepartureOutput = {
    departure_time: string;
    arrival_time: string;
    price: string;
    company: string;
};

/**
 * Get the bus departures from a city to another city
 * @param from - the city from which the bus departs
 * @param to - the city to which the bus goes
 * @param date - the date of the departure in the format "YYYY-MM-DD" or "+0" for today or "+1" for tomorrow etc.
 * @returns an array of objects containing the departure time, arrival time, price and the bus company
 * @example ```getDepartures("Beius", "Oradea", "2024-03-08");``` will return an array of objects containing the departure time, arrival time, price and the bus company
 */
export const getDepartures = async (
    from: string,
    to: string,
    date: string
): Promise<DepartureOutput[]> => {
    // Remove the spaces from the city names
    from = from.replace(" ", "");
    to = to.replace(" ", "");

    const url = `https://www.autogari.ro/Transport/${from}-${to}?zi=${date}`;

    const { data, response } = await scrapeIt(url, {
        departures: {
            listItem: ".result-wrap",
            data: {
                departure_time: {
                    selector: ".ora-p",
                    // take only the last 5 characters from the string
                    convert: (x: string) => x.slice(-5),
                },
                arrival_time: {
                    selector: ".ora-s",
                    convert: (x: string) => x.slice(-5),
                },
                price: ".pret",
                company: {
                    selector: ".den-transportator",
                    attr: "title",
                },
            },
        },
    });

    return data.departures as DepartureOutput[];
};
