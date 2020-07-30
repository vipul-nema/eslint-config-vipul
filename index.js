module.exports = {
  "extends": ["airbnb",  "prettier", "prettier/react"],
  "env": {
    "jest": true,
    "browser": true,
    "es6": true,
    "jquery": true
  },
  "parser": "babel-eslint",
  "plugins": ["jest", "prettier"],
  "rules": {
    "no-prototype-builtins":"off",
    "prettier/prettier": [
      "warn",
      
    ],
  }
};