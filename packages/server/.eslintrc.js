module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "rules": {
        //"semi": ["error", "always"],
        "quotes": ["error", 'single'],
        "linebreak-style": 0
    },
    globals: {
        describe: 1,
        test: 1,
        expect: 1,
    },
};