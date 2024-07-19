import { h } from "@stencil/core/internal";
export class Register {
    constructor() {
        this.hide = undefined;
        this.emailInputBind = undefined;
        this.passwordInputBind = undefined;
        this.firstnameInputBind = undefined;
        this.lastnameInputBind = undefined;
        this.isEmailValid = 'blank';
        this.isPasswordValid = 'blank';
        this.isFisrtnameValid = false;
        this.isLastnameValid = false;
        this.isRegisterSuccess = false;
    }
    componentWillLoad() {
        this.hide = true;
    }
    swapping() {
        this.hide = true;
        this.rfEmitter.emit();
    }
    swap() {
        this.hide = false;
    }
    emailInputChange(event) {
        let value = event.target.value;
        console.log(value);
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let emailValid = emailPattern.test(value);
        if (value == '') {
            this.isEmailValid = 'blank';
        }
        else if (!emailValid) {
            this.isEmailValid = 'notEmail';
        }
        else {
            this.isEmailValid = 'valid';
        }
    }
    passwordInputChange(event) {
        let value = event.target.value;
        console.log(value);
        if (value == '') {
            this.isPasswordValid = 'blank';
        }
        else if (value.length < 8) {
            this.isPasswordValid = 'notPass';
        }
        else {
            this.isPasswordValid = 'valid';
        }
    }
    firstnameInputChange(event) {
        let value = event.target.value;
        console.log(value);
        if (value == '') {
            this.isFisrtnameValid = false;
        }
        else {
            this.isFisrtnameValid = true;
        }
    }
    lastnameInputChange(event) {
        let value = event.target.value;
        console.log(value);
        if (value == '') {
            this.isLastnameValid = false;
        }
        else {
            this.isLastnameValid = true;
        }
    }
    onSubmitForm(event) {
        event.preventDefault();
        this.isRegisterSuccess = true;
    }
    render() {
        let emailError = null;
        if (this.isEmailValid == 'blank') {
            emailError = h("span", { key: '6acc687642734ff2b4b500d7af04ba974ff655cd', class: "error" }, "Email can't be blank");
        }
        if (this.isEmailValid == 'notEmail') {
            emailError = h("span", { key: '6867164bcde658bf25fe5e11377e366ef386a65f', class: "error" }, "Email not valid");
        }
        let passwordError = null;
        if (this.isPasswordValid == 'blank') {
            passwordError = h("span", { key: 'a3ae0eed0e7b05d72d10a0040f918c15b2ef74d6', class: "error" }, "Password can't be blank");
        }
        if (this.isPasswordValid == 'notPass') {
            passwordError = h("span", { key: '0bc62387b8d77198ce28819dd9cab0a9178a11a1', class: "error" }, "Password must be at least 8 char");
        }
        let firstnameError = null;
        if (!this.isFisrtnameValid) {
            firstnameError = h("span", { key: 'eb10d273af09f498c3f7c328a1dbd89e2a327338', class: "error" }, "First name can't be blank");
        }
        let lastnameError = null;
        if (!this.isLastnameValid) {
            lastnameError = h("span", { key: '29f66f8ee7e356fe2717f281f2333cb52d41a4cf', class: "error" }, "Last name can't be blank");
        }
        let message = null;
        if (this.isRegisterSuccess) {
            message = h("div", { key: '8a46989f07ed8e9aa8ddc41110629890f83ec2f7', class: "msg-s" }, "Register successful");
        }
        return (h("div", { key: '21555ab4fc5d26f3e6aa78656ed07d212c0df1eb', class: "container" }, h("form", { key: 'ba4818ac07f3bae12bf577a42f326b4aae2e4ed8', class: "form", onSubmit: this.onSubmitForm.bind(this) }, h("h2", { key: '1573959b92613c8a9036d345996cceb4b973500d' }, "Sign Up"), h("div", { key: '15bcc948309391166988537115e5220a727a115c', class: "card-name" }, h("div", { key: '1e1009c333a67046adb05593c064fad17400f4fd', class: "card" }, h("input", { key: 'de894c74111e1110301d64bcdefe7952f122f253', type: "text", class: "box box-name f-name", placeholder: "First name", ref: el => (this.firstnameInputElement = el), value: this.firstnameInputBind, onInput: this.firstnameInputChange.bind(this) }), firstnameError), h("div", { key: '809c3e8ca05974e243089682bb303642dc469c48', class: "card" }, h("input", { key: '7edf64749a15dc198c7233f3b902805d5e969a44', type: "text", class: "box box-name l-name", placeholder: "Last name", ref: el => (this.lastnameInputElement = el), value: this.lastnameInputBind, onInput: this.lastnameInputChange.bind(this) }), lastnameError)), h("div", { key: '68427dbd262229a71d8659b0ebbcca99ff849dfd', class: "card" }, h("input", { key: '9b7c29b06991ea7d56ebae4f6970781158aeb34b', type: "email", name: "email", class: "box", placeholder: "Enter Email", ref: el => (this.emailInputElement = el), value: this.emailInputBind, onInput: this.emailInputChange.bind(this) }), emailError), h("div", { key: 'f03528ebc2ffc3bb8b01f8e09b28fe0b31e4915a', class: "card" }, h("input", { key: 'b6221862fefb878a3cfd2158f9a2d6863e429a21', type: "password", name: "password", class: "box", placeholder: "Enter password", ref: el => (this.passwordInputElement = el), value: this.passwordInputBind, onInput: this.passwordInputChange.bind(this) }), passwordError), message, h("button", { key: '4090b4a22996f923e22df1fdbfdf7f4d71cdeda4', type: "submit", value: "SIGN UP", id: "submit", disabled: this.isEmailValid == 'blank' ||
                this.isEmailValid == 'notEmail' ||
                this.isPasswordValid == 'blank' ||
                this.isPasswordValid == 'notPass' ||
                !this.isFisrtnameValid ||
                !this.isLastnameValid }, "SIGN UP")), h("span", { key: 'd9c4c3c5502dbeb2912858e736efbc0255e72fd1', class: "footer" }, "Already have an account?", h("a", { key: '85b4d8250c7dea30dd96051c8578bd3eb357224f', href: "#", onClick: this.swapping.bind(this) }, "log in"))));
    }
    static get is() { return "rf-register"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./register.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["register.css"]
        };
    }
    static get properties() {
        return {
            "hide": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "hide",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "emailInputBind": {},
            "passwordInputBind": {},
            "firstnameInputBind": {},
            "lastnameInputBind": {},
            "isEmailValid": {},
            "isPasswordValid": {},
            "isFisrtnameValid": {},
            "isLastnameValid": {},
            "isRegisterSuccess": {}
        };
    }
    static get events() {
        return [{
                "method": "rfEmitter",
                "name": "rfEmitter",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "rfEmit",
                "method": "swap",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=register.js.map
