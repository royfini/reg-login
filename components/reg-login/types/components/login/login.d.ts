import { EventEmitter } from '../../stencil-public-runtime';
export declare class Login {
    hide: boolean;
    rfEmit: EventEmitter<boolean>;
    componentWillLoad(): void;
    swapping(): void;
    swap(): void;
    emailInputElement: HTMLInputElement;
    passwordInputElement: HTMLInputElement;
    emailInputBind: string;
    passwordInputBind: string;
    isEmailValid: string;
    isPasswordValid: boolean;
    isLoginSuccess: string;
    emailInputChange(event: Event): void;
    passwordInputChange(event: Event): void;
    onSubmitForm(event: Event): void;
    render(): any;
}
