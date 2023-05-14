import observationFactory from "./observationFactory.mjs"

const createDatastreams = async() => {
    const datastreams = []
    const datastreamObject = {
        "name": "",
        "description": "",
        "observationType": "",
        "unitOfMeasurement": {
            "name": "",
            "symbol": "",
            "definition": ""
        },
    }

    const temperatureSensor = {
        "name": "",
        "description": "",
        "encodingType": "application/pdf",
        "metadata": ""
    }
    const temperatureThing = {
        "name": "",
        "description": "",
        "properties": {
            "": "",
            "": ""
        },
        "Locations": []
    }
    const temperatureSensorLocation = {
        "name": "",
        "description": "",
        "encodingType": "application/vnd.geo+json",
        "location": {
            "type": "Point",
            "coordinates": []
        }
    }
    const temperatureObservedProperty = {
        "name": "",
        "description": "",
        "definition": ""
    }

    for (let i = 0; i < 1; i++) {
        // Sensor
        temperatureSensor.name = "TMP36"
        temperatureSensor.description = "TMP-36 Analog Temperature Sensor"
        temperatureSensor.metadata = "https://www.analog.com/media/en/technical-documentation/data-sheets/TMP35_36_37.pdf"
        
        // Location
        temperatureSensorLocation.name = "Jack Black's Home"
        temperatureSensorLocation.description = "Large Home in Mushroom Kingdom"
        temperatureSensorLocation.location = {
            type: "Point",
            coordinates: [37.202245, 139.77378700]
        }
        
        // Thing
        temperatureThing.name = "Home Temperature"
        temperatureThing.description = "Temperature of Living Room"
        temperatureThing.properties = {
            owner: "Jack Black",
            description: "Living Room area, open plan with kitchen and dining"
        }
        temperatureThing.Locations.push(temperatureSensorLocation)

        // Observed Property
        temperatureObservedProperty.name = "Temperature in Celcius"
        temperatureObservedProperty.description = "Temperature is a physical quantity that expresses quantitatively the perceptions of hotness and coldness. Temperature is measured with a thermometer. Thermometers are calibrated in various temperature scales that historically have relied on various reference points and thermometric substances for definition. The most common scales are the Celsius scale with the unit symbol °C (formerly called centigrade), the Fahrenheit scale (°F), and the Kelvin scale (K), the latter being used predominantly for scientific purposes. The kelvin is one of the seven base units in the International System of Units (SI)."
        temperatureObservedProperty.definition = "https://dbpedia.org/page/Temperature"

        // Datastream
        datastreamObject.name = "Air Temperature DS"
        datastreamObject.description = "Datastream for recording temperature in living room"
        datastreamObject.observationType = "http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement"
        datastreamObject.unitOfMeasurement = {
            name: "Degree Celsius",
            symbol: "degC",
            definition: "http://www.qudt.org/qudt/owl/1.0.0/unit/Instances.html#DegreeCelsius"
        }
        datastreamObject.Sensor = temperatureSensor
        datastreamObject.Thing = temperatureThing
        datastreamObject.ObservedProperty = temperatureObservedProperty
    }
    
    const baseURL = 'http://localhost:8000/api/v1.0'

    const datastreamsResponse = await fetch(`${baseURL}/Datastreams`, {
        method: 'POST',
        body: datastreamObject
    })

    console.log(datastreamsResponse)

    // const observations = observationFactory()
    // data
    return datastreamsResponse
}

createDatastreams()
