import { EventEmitter } from '../../stencil-public-runtime';
export declare class Register {
    hide: boolean;
    rfEmitter: EventEmitter<boolean>;
    componentWillLoad(): void;
    swapping(): void;
    swap(): void;
    emailInputElement: HTMLInputElement;
    passwordInputElement: HTMLInputElement;
    firstnameInputElement: HTMLInputElement;
    lastnameInputElement: HTMLInputElement;
    emailInputBind: string;
    passwordInputBind: string;
    firstnameInputBind: string;
    lastnameInputBind: string;
    isEmailValid: string;
    isPasswordValid: string;
    isFisrtnameValid: boolean;
    isLastnameValid: boolean;
    isRegisterSuccess: boolean;
    emailInputChange(event: Event): void;
    passwordInputChange(event: Event): void;
    firstnameInputChange(event: Event): void;
    lastnameInputChange(event: Event): void;
    onSubmitForm(event: Event): void;
    render(): any;
}
