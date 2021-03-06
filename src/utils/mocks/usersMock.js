const usersMock = [{
    id: 1,
    typeId: 31,
    identification: '220a8086-85b2-47ce-8e47-2b76b23011ee',
    firstName: 'Dyan',
    middleName: 'Jordan',
    lastName: 'Sidney',
    secondLastName: 'Orgen',
    birthday: '9/13/2019',
    email: 'jorgen0@alexa.com',
    password: '$2b$10$jPYXq19tAmeCX/TGC/0kfeTiUKUXkM6CIjI4RguKDmpdl9MSKvfbW',
    role: 'admin',
},
{
    id: 2,
    typeId: 32,
    identification: '6715a591-a296-4632-823d-7d3e1f630cde',
    firstName: 'Dody',
    middleName: 'Mikkel',
    lastName: 'Milsap',
    secondLastName: 'Ramelet',
    birthday: '5/26/2019',
    email: 'mramelet1@chicagotribune.com',
    password: '$2b$10$4DNw.EsEb0nD7S6sSCYzzOGMr0kNjg9RoJEIhqz2G0b7OyAwbaTti',
    role: 'admin',
},
{
    id: 3,
    typeId: 31,
    identification: '7f0b07d6-ee8c-4041-84be-513e0f9f1baa',
    firstName: 'Barrie',
    middleName: 'Ludvig',
    lastName: 'Ridsdole',
    secondLastName: 'Sterrie',
    birthday: '11/1/2019',
    email: 'lsterrie2@godaddy.com',
    password: '$2b$10$lgPTOVEqad1zVo2909yF5OsvdKHQ06DAq/cwxBm4o.aAqbMkAdiZu',
    role: 'user',
},
{
    id: 4,
    typeId: 31,
    identification: '4e4c8f90-8f08-4e02-9eb3-3a644d7dd8e9',
    firstName: 'Alexandre',
    middleName: 'Lesya',
    lastName: 'Davitashvili',
    secondLastName: 'Perrygo',
    birthday: '1/13/2020',
    email: 'lperrygo3@si.edu',
    password: '$2b$10$CdsWxBsOOyNmePQfmX8O7e3d/JugOOkFZY2.9JKdL2D9hSgoLwRza',
    role: 'user',
},
{
    id: 7,
    typeId: 31,
    identification: 'ead2d306-6290-459e-87b2-cb3a8e1c97e2',
    firstName: 'Wanda',
    middleName: 'Pooh',
    lastName: 'Swyer',
    secondLastName: 'Nurcombe',
    birthday: '10/5/2019',
    email: 'pnurcombe6@apache.org',
    password: '$2b$10$pe2lDXsYOlCiacop96xNqOxoVdz4U1yStqoGKVUF3/qqFBNE5iAVa',
    role: 'user',
},
{
    id: 6,
    typeId: 31,
    identification: 'ccb06e39-f198-4cf4-a789-99ee5e9143a6',
    firstName: 'Sidoney',
    middleName: 'Caron',
    lastName: 'McIlrath',
    secondLastName: 'Garaghan',
    birthday: '11/6/2019',
    email: 'cgaraghan5@army.mil',
    password: '$2b$10$UbYvWc/UsZnMYO/hHshOLuY54m/mPV7ehQ1jx.LUWwNjiMr09sbqa',
    role: 'user',
},
{
    id: 5,
    typeId: 31,
    identification: '8ba92bb2-5c9e-4b16-bd02-ede72d05e674',
    firstName: 'Lazarus',
    middleName: 'Therine',
    lastName: 'Kineton',
    secondLastName: 'Connealy',
    birthday: '3/6/2019',
    email: 'tconnealy4@dot.gov',
    password: '$2b$10$2SGsVbDU7JTxcvWJtGLx0OwceOgn3Qa/h4TQonxmBah7Zw4AumEp2',
    role: 'admin',
},
{
    id: 8,
    typeId: 31,
    identification: '464247e0-feed-4a57-897b-3456a7e16720',
    firstName: 'Victoria',
    middleName: 'Janaya',
    lastName: 'Poppleton',
    secondLastName: 'Seabridge',
    birthday: '11/21/2019',
    email: 'jseabridge7@google.nl',
    password: '$2b$10$MoCaW.H2jEnFygW2Hy1KYOD74AXsBWJP9.xQxXh4VclWJDuCxfEmK',
    role: 'user',
},
{
    id: 11,
    typeId: 31,
    identification: '3eb8b957-9241-4015-a090-2b79815fabfe',
    firstName: 'Tish',
    middleName: 'Joceline',
    lastName: 'Gilkison',
    secondLastName: 'Trainor',
    birthday: '3/6/2019',
    email: 'jtrainora@discuz.net',
    password: '$2b$10$pSm1Vncf2st7WShAZ.14AO7OmyvMa.ypNs4INmmeaA9.jzw6ZbMLG',
    role: 'admin',
},
{
    id: 9,
    typeId: 31,
    identification: 'db38b488-af07-4aa0-915f-1009d89a55b1',
    firstName: 'Ware',
    middleName: 'Batsheva',
    lastName: 'Rockliffe',
    secondLastName: 'Dy',
    birthday: '4/15/2019',
    email: 'bdy8@unc.edu',
    password: '$2b$10$pVQHhyFmzb3isv0jVkiOCeqRPOKw8U/FQyRofWYBpZfPCgPNFnKt6',
    role: 'admin',
},
{
    id: 10,
    typeId: 32,
    identification: '6457ed87-05d7-41d6-b062-304b510b231e',
    firstName: 'Gretna',
    middleName: 'Lorrin',
    lastName: 'Mandeville',
    secondLastName: 'Pesic',
    birthday: '8/30/2019',
    email: 'lpesic9@abc.net.au',
    password: '$2b$10$0ll6nHVgUHrAusPHtf/pDu3et7.UuL8.EDWKGxSIiTyvxxY/KzA6G',
    role: 'admin',
},
{
    id: 12,
    typeId: 32,
    identification: 'c7ffa31b-0466-41b2-a339-6b360f2cd9d7',
    firstName: 'Brnaba',
    middleName: 'Lindsey',
    lastName: 'Taynton',
    secondLastName: 'Barnewall',
    birthday: '9/25/2019',
    email: 'lbarnewallb@forbes.com',
    password: '$2b$10$YFuUl9El/61vzFnAo5WCDOemhbz0wkrzdeiTkeKcq4RRJiCtECQK6',
    role: 'admin',
},
{
    id: 15,
    typeId: 31,
    identification: '3fc4e484-6fff-4403-ae70-df96a6177316',
    firstName: 'Barnaby',
    middleName: 'Petronella',
    lastName: 'Farrent',
    secondLastName: 'Vipan',
    birthday: '8/8/2019',
    email: 'pvipane@cbsnews.com',
    password: '$2b$10$Pobv5xx/TO6VjZnMPn4MhewIzSiHOZ/4H9u2QGzwwhjDZ79qtV2Eq',
    role: 'user',
},
{
    id: 14,
    typeId: 31,
    identification: 'c480cdbd-1e9f-4f67-b0dd-7c3d946d7ab1',
    firstName: 'Bald',
    middleName: 'Harrie',
    lastName: 'Sibthorpe',
    secondLastName: 'Yellowley',
    birthday: '12/12/2019',
    email: 'hyellowleyd@umich.edu',
    password: '$2b$10$ek3qB5B1OGgVnJakN3cbAOKEo0a.q.ey3sqOnZmwIa.1WYbeEdAPe',
    role: 'user',
},
{
    id: 13,
    typeId: 32,
    identification: '84cb56a2-9611-4008-96f1-387377631967',
    firstName: 'Linn',
    middleName: 'Teodoro',
    lastName: 'Beszant',
    secondLastName: 'Filip',
    birthday: '11/11/2019',
    email: 'tfilipc@dot.gov',
    password: '$2b$10$OD8F7ibz0uM57/NZnyTVm.ohrxYAwIPZZV07jUMh9y3eB4q4vgxpS',
    role: 'admin',
},
{
    id: 16,
    typeId: 31,
    identification: 'b7f7bd78-d10c-488e-9665-c84c11938ea6',
    firstName: 'Phaidra',
    middleName: 'Grover',
    lastName: 'Maxwell',
    secondLastName: 'Mateev',
    birthday: '6/24/2019',
    email: 'gmateevf@dailymotion.com',
    password: '$2b$10$r8h2NmDO3em/v9Qx6MbS2.ot7eDgp7cgvA2NjuFUMrcJHmdNG74Ia',
    role: 'admin',
},
{
    id: 17,
    typeId: 31,
    identification: '72f143ef-8358-4528-b77b-1bea7691a4a4',
    firstName: 'Billye',
    middleName: 'Lukas',
    lastName: 'Vanin',
    secondLastName: 'Ingerman',
    birthday: '7/11/2019',
    email: 'lingermang@lulu.com',
    password: '$2b$10$cXoS5CnIaFOC7RTWlC31XeKXccd34nGmY65UO15OWIVNEEAYifvC6',
    role: 'admin',
},
{
    id: 19,
    typeId: 31,
    identification: 'b0087275-aa87-4e5e-8763-76a6465114f6',
    firstName: 'Dorian',
    middleName: 'Wilfred',
    lastName: 'Chalmers',
    secondLastName: 'Arzu',
    birthday: '11/10/2019',
    email: 'warzui@blogspot.com',
    password: '$2b$10$oUkF3GLeKGcOt4PnvS5TYOPYJ2wMbTe14BuuoMOyhInQ2.FNnssAW',
    role: 'admin',
},
{
    id: 18,
    typeId: 31,
    identification: 'cf387fe7-7e75-4b88-af23-9f9da2e35bd6',
    firstName: 'Devonne',
    middleName: 'Harrison',
    lastName: 'Radleigh',
    secondLastName: 'Jeanin',
    birthday: '5/30/2019',
    email: 'hjeaninh@about.me',
    password: '$2b$10$9nDu8fQPfYEBDsxmlfNGg.Xo9D9Ts7lSUUcWb6Bz0Wzj5wQbqllmq',
    role: 'user',
},
{
    id: 20,
    typeId: 31,
    identification: '66e6d621-3702-4d0e-bb99-85b469317814',
    firstName: 'Grayce',
    middleName: 'Brit',
    lastName: 'Flynn',
    secondLastName: 'Tern',
    birthday: '6/20/2019',
    email: 'bternj@a8.net',
    password: '$2b$10$VeZy9v.lYH/vmWVq8Nka2u02T1kZAS4K/E3.AghdwZ09DDAUnzh9G',
    role: 'admin',
}];

module.exports = { usersMock };
