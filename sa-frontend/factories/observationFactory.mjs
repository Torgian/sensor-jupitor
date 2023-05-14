export default function (datastreamId) {
    const startDateTime = new Date('2014-12-31T11:59:59.00+08:00');
    const data = [];

    for (let i = 0; i < 30; i++) {
        const phenomenonTime = new Date(startDateTime.getTime() + (i * 60 * 1000)).toISOString();
        const resultTime = new Date(startDateTime.getTime() + (i * 60 * 1000)).toISOString();
        const result = Math.floor(Math.random() * 10) + 20; // generates a random number between 20 and 29

        data.push({
            "@iot.id": datastreamId,
            "phenomenonTime": phenomenonTime,
            "resultTime": resultTime,
            "result": result
        });
    }

    return data
}
