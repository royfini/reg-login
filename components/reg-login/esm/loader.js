import { b as bootstrapLazy } from './index-e08b7d1f.js';
export { s as setNonce } from './index-e08b7d1f.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["rf-login_2",[[1,"rf-login",{"hide":[1540],"emailInputBind":[32],"passwordInputBind":[32],"isEmailValid":[32],"isPasswordValid":[32],"isLoginSuccess":[32]},[[16,"rfEmitter","swap"]]],[1,"rf-register",{"hide":[1540],"emailInputBind":[32],"passwordInputBind":[32],"firstnameInputBind":[32],"lastnameInputBind":[32],"isEmailValid":[32],"isPasswordValid":[32],"isFisrtnameValid":[32],"isLastnameValid":[32],"isRegisterSuccess":[32]},[[16,"rfEmit","swap"]]]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map