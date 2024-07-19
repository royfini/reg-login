import type { Components, JSX } from "../types/components";

interface RfRegister extends Components.RfRegister, HTMLElement {}
export const RfRegister: {
    prototype: RfRegister;
    new (): RfRegister;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
