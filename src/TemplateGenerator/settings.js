const GenerationSettings = {
    Diplomma: {
        key: 'winner',
        templates: {
            alias: ['en', 'ua'],
            mapping: {
                en: 'en.jpg',
                ua: 'ua.jpg'
            }
        },
        dataset: ['name', 'place', 'nomination'],
        mapping: {
            name: {
                en: 'nameEN',
                ua: 'nameUA'
            },
            place: {
                en: 'placeEN',
                ua: 'placeUA',
            },
            nomination: {
                en: 'nominationEN',
                ua: 'nominationUA'
            }
        },
        offset: {
            name: [0, -55],
            place: {
                ua: [140, 115],
                en: [-155, 115]
            },
            nomination: [250, 600]
        },
        font: {
            name: 'italic 120px Segoe UI',
            place: '70px Segoe UI',
            nomination: ['60px Segoe UI', 'rtl']
            
        }
    },
    Mentor: {
        key: 'mentor',
        templates: {
            alias: ['en', 'ua'],
            mapping: {
                en: 'en.jpg',
                ua: 'ua.jpg'
            }
        },
        dataset: ['name',],
        mapping: {
            name: {
                en: 'nameEN',
                ua: 'nameUA'
            }
        },
        offset: {
            name: [0, -55]
        },
        font: {
            name: 'italic 120px Segoe UI'
        }
    },
    Participation: {
        key: 'participation',
        templates: {
            alias: ['en', 'ua'],
            mapping: {
                en: 'en.jpg',
                ua: 'ua.jpg'
            }
        },
        dataset: ['name',],
        mapping: {
            name: {
                en: 'nameEN',
                ua: 'nameUA'
            }
        },
        offset: {
            name: [0, 120]
        },
        font: {
            name: 'italic 120px Segoe UI'
        },
        edit: {
            name: {
                splitToRows: {
                    count: 2
                }
            }
        }
    }

}

export default GenerationSettings;