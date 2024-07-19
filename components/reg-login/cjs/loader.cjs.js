'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a28a82ac.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-login_2.cjs",[[1,"rf-login",{"hide":[1540],"emailInputBind":[32],"passwordInputBind":[32],"isEmailValid":[32],"isPasswordValid":[32],"isLoginSuccess":[32]},[[16,"rfEmitter","swap"]]],[1,"rf-register",{"hide":[1540],"emailInputBind":[32],"passwordInputBind":[32],"firstnameInputBind":[32],"lastnameInputBind":[32],"isEmailValid":[32],"isPasswordValid":[32],"isFisrtnameValid":[32],"isLastnameValid":[32],"isRegisterSuccess":[32]},[[16,"rfEmit","swap"]]]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map