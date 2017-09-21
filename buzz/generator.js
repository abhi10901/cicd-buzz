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

var getSample = (collection, size) => {
    if (size === undefined || size === 0)
        size = 1;
    return _lodash.sampleSize(collection, size);
};

var capitalizeFirst = (str) => {
    str = str && str[0].toUpperCase() + str.slice(1);
    return str;
}

var capitalizeFirstOfEachWord = (statement) => {

    return statement
        .split(" ")
        .map(word => { return capitalizeFirst(word) })
        .join(" ");
};

var generate_buzz = () => {
    let buzz_terms = getSample(buzz, 2);

    let phrase = _lodash.join([
        getSample(adjectives),
        buzz_terms[0],
        getSample(adverbs),
        getSample(verbs),
        buzz_terms[1]
    ], " ");

    return capitalizeFirstOfEachWord(phrase);
};

module.exports = { generate_buzz, getSample, capitalizeFirst, capitalizeFirstOfEachWord };