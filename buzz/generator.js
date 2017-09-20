"use strict";

const _lodash = require('lodash');

const buzz = ['continuous testing',
    'continuous integration',
    'continuous deployment',
    'continuous improvement',
    'devops'
];

const adjectives = ['complete',
    'modern',
    'self-service',
    'integrated',
    'end-to-end'
];

const adverbs = ['remarkably',
    'enormously',
    'substantially',
    'significantly',
    'seriously'
];

const verbs = ['accelerates',
    'improves',
    'enhances',
    'revamps',
    'boosts'
];

var getSample = (collection, size = 1) => {
    return _lodash.sampleSize(collection, size);
};

var capitalizeFirst = (str) => {
    //console.log("Capitalizing first for : " + str);
    str = str && str[0].toUpperCase() + str.slice(1);
    return str;
}

var makeFirstLetterUpperOfEachWord = (collection, done) => {

    let convertedCollection = collection.map(inItems => {
        if (!_lodash.isArray(inItems)) {
            let item = inItems;
            return item
                .split(" ")
                .map(word => { return capitalizeFirst(word) })
                .join(" ");
        }

        return inItems.map(item => {
            return item
                .split(" ")
                .map(word => { return capitalizeFirst(word) })
                .join(" ");
        })
    });

    return done(null, convertedCollection);
};

var generate_buzz = () => {
    let buzz_terms = getSample(buzz, 2);

    let phrase = makeFirstLetterUpperOfEachWord([
        getSample(adjectives),
        buzz_terms[0],
        getSample(adverbs),
        getSample(verbs),
        buzz_terms[1]
    ], function(err, convertedCollection) {
        return _lodash.join(convertedCollection, ' ');
    })

    return phrase;
};

module.exports = { generate_buzz, getSample };

// console.log(generate_buzz());