import type { Components, JSX } from "../types/components";

interface RfLogin extends Components.RfLogin, HTMLElement {}
export const RfLogin: {
    prototype: RfLogin;
    new (): RfLogin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
