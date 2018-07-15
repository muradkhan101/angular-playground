// Response
let a = {
    Employee: {
        EmployeeId: 123,
        FullName: 'Rami Malek',
        Job: {
            Key: 3,
            Value: 'Worker Bee'
        },
        ProfileImage: {
            Key: 456,
            Value: 'sdfkjh234-sdfasdf.png'
        }
    },
    Route: {
        Client: 'Microsoft',
        Location: 'Lincoln Square',
        Name: 'Bldg 50 Day CSR'
    },
    TimeCards: [
        {
            TimeCardId: 100,
            Status: 'Finalized', // or 1 / 2
            FinalizeDate: '2018-07-11T16:57:29.827Z', // null if Status == 'Open'
            Comment: 'Good job clocking in kiddo',
            ClockIn: '2018-07-11T16:57:29.827Z',
            ClockOut: '2018-07-11T16:57:29.827Z',
            Segments: [
                {
                    SegmentId: 200,
                    "Coordinates": {
                        "Longitude": -121.4722869,
                        "Latitude": 38.4297852
                    },
                    "Action": {
                        "Key": 1,
                        "Value": "ClockIn"
                    },
                    "TimeUtc": "2018-07-11T13:58:00",
                    "StreetAddress": "3011 Laguna Blvd, Elk Grove, CA 95758, USA"
                },
                {
                    SegmentId: 300,
                    "Coordinates": {
                        "Longitude": -121.4722869,
                        "Latitude": 38.4297852
                    },
                    "Action": {
                        "Key": 3,
                        "Value": "ShiftStart"
                    },
                    "TimeUtc": "2018-07-11T13:58:00",
                    "StreetAddress": "3011 Laguna Blvd, Elk Grove, CA 95758, USA"
                }
            ]
        }
    ]
}
