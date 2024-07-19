import { r as registerInstance, c as createEvent, h } from './index-e08b7d1f.js';

const loginCss = ":host([hide]){display:none}*{margin:0;padding:0;box-sizing:border-box}.container{display:flex;flex-direction:column;height:500px;width:400px;border:1px solid black;margin:auto;margin-top:50px;background-color:whitesmoke}.form{display:flex;flex-direction:column;width:100%;align-items:center}.form h2{font-size:3rem;font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;margin:40px}.card{width:65%;display:flex;flex-direction:column;align-items:center}.box{padding:12px;width:100%;margin:15px;margin-bottom:5px;border:1px solid black;outline:none;border-radius:20px}#submit{padding:12px 30px;width:40%;margin-top:20px;background-color:black;color:white;font-weight:bold;border:none;outline:none;border-radius:20px}#submit:disabled{background-color:rgb(90, 86, 86)}#submit:hover{cursor:pointer}.form a{text-decoration:none;margin-top:20px}.error{color:rgb(217, 58, 58);align-self:flex-start;margin-bottom:15px;font-size:0.9rem}.footer{margin:auto}.msg-s{color:green;font-size:0.9rem;margin-top:15px}.msg-i{color:#dc3545;font-size:0.9rem;margin-top:15px}";
const RfLoginStyle0 = loginCss;

const Login = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rfEmit = createEvent(this, "rfEmit", 7);
        this.hide = undefined;
        this.emailInputBind = undefined;
        this.passwordInputBind = undefined;
        this.isEmailValid = 'blank';
        this.isPasswordValid = false;
        this.isLoginSuccess = '';
    }
    componentWillLoad() {
        this.hide = false;
    }
    swapping() {
        this.hide = true;
        this.rfEmit.emit();
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
            this.isPasswordValid = false;
        }
        else {
            this.isPasswordValid = true;
        }
    }
    onSubmitForm(event) {
        event.preventDefault();
        let email = this.emailInputElement.value;
        let password = this.passwordInputElement.value;
        console.log(email);
        console.log(password);
        if (email == 'stencil@live.com' && password == 'stencil123') {
            this.isLoginSuccess = 'success';
        }
        else {
            this.isLoginSuccess = 'fail';
        }
    }
    render() {
        let emailError = null;
        if (this.isEmailValid == 'blank') {
            emailError = h("span", { key: 'd8e11d4a3b973392fcf80dc9908e1c1c5fba5bb5', class: "error" }, "Email can't be blank");
        }
        if (this.isEmailValid == 'notEmail') {
            emailError = h("span", { key: '847b5e9f03cd54a5d05ce6ff03bc1578029394f4', class: "error" }, "Email not valid");
        }
        let passwordError = null;
        if (!this.isPasswordValid) {
            passwordError = h("span", { key: '33f9b5593778cd3075a52c29d815f52d8d2a2e3d', class: "error" }, "Password can't be blank");
        }
        let message = null;
        if (this.isLoginSuccess == 'success') {
            message = h("div", { key: '926da0dbc6e9f43d0892c8973c3332b81defbca7', class: "msg-s" }, "Login successful");
        }
        if (this.isLoginSuccess == 'fail') {
            message = h("div", { key: 'f988d9a8b7609b213083c3881af68d2b4dd654e5', class: "msg-i" }, "Email or Password incorrect");
        }
        return (h("div", { key: '6453c5faba9bab0d9bd253bf0c9555d20bf350df', class: "container" }, h("form", { key: '63e10d5e5bfcccb28be67bdf3c6f050f4232cb50', class: "form", onSubmit: this.onSubmitForm.bind(this) }, h("h2", { key: '40c92173e37c5246bd7e232b07a37439462b9ea3' }, "Log In"), h("div", { key: 'bee3708ee2254b04a79730fea3f067ad7cc962c4', class: "card" }, h("input", { key: '6b697b7b75c230502ae1af3f431b771e63dac11a', type: "email", name: "email", class: "box", placeholder: "Enter Email", ref: el => (this.emailInputElement = el), value: this.emailInputBind, onInput: this.emailInputChange.bind(this) }), emailError), h("div", { key: '36c4931d2cc961bec70f2593dd7050ee3a0a2ce8', class: "card" }, h("input", { key: '25540bdbd5d2fa6aa173b4de6b6d23b1caeb00fb', type: "password", name: "password", class: "box", placeholder: "Enter password", ref: el => (this.passwordInputElement = el), value: this.passwordInputBind, onInput: this.passwordInputChange.bind(this) }), passwordError), message, h("button", { key: '1a0197b7b857e408bf5d6093512921daf8cf0bb5', type: "submit", id: "submit", disabled: this.isEmailValid == 'blank' || this.isEmailValid == 'notEmail' || !this.isPasswordValid }, "LOG IN"), h("a", { key: '30f31a908604acbf5a60d762b1e4632a49c78957', href: "#" }, "Forget Password")), h("span", { key: '727754576959498a08b1fbd0b3ec6e21c26ecfeb', class: "footer" }, "Don't have an account yet ?", ' ', h("a", { key: 'dc50a13fd25b91881cf1de11adef79bd7d4b39d8', href: "#", onClick: this.swapping.bind(this) }, "create one"))));
    }
};
Login.style = RfLoginStyle0;

const registerCss = ":host([hide]){display:none}*{margin:0;padding:0;box-sizing:border-box}.container{display:flex;flex-direction:column;align-items:center;height:500px;width:400px;border:1px solid black;margin:auto;margin-top:50px;background-color:whitesmoke}.form{display:flex;flex-direction:column;width:100%;align-items:center}.form h2{font-size:3rem;font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;margin:40px}.card{width:85%;display:flex;flex-direction:column;align-items:center;margin:0}.card-name{width:85%;display:flex;flex:2;flex-direction:row;justify-content:space-between}.box{padding:12px;width:100%;margin:0;margin-top:5px;margin-bottom:5px;border:1px solid black;outline:none;border-radius:20px}.f-name{margin-right:3px}.l-name{margin-left:3px}#submit{padding:12px 30px;width:40%;margin-top:20px;background-color:black;color:white;font-weight:bold;border:none;outline:none;border-radius:20px}#submit:disabled{background-color:rgb(90, 86, 86)}#submit:hover{cursor:pointer}.error{color:rgb(217, 58, 58);align-self:flex-start;margin-bottom:15px;font-size:0.9rem}.footer{margin:auto}.msg-s{color:green;font-size:0.9rem;margin-top:15px}";
const RfRegisterStyle0 = registerCss;

const Register = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rfEmitter = createEvent(this, "rfEmitter", 7);
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
};
Register.style = RfRegisterStyle0;

export { Login as rf_login, Register as rf_register };

//# sourceMappingURL=rf-login_2.entry.js.map