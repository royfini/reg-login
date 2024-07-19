import { p as proxyCustomElement, H, c as createEvent } from './p-bfac8e45.js';
import { h } from './p-43f74fac.js';

const loginCss = ":host([hide]){display:none}*{margin:0;padding:0;box-sizing:border-box}.container{display:flex;flex-direction:column;height:500px;width:400px;border:1px solid black;margin:auto;margin-top:50px;background-color:whitesmoke}.form{display:flex;flex-direction:column;width:100%;align-items:center}.form h2{font-size:3rem;font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;margin:40px}.card{width:65%;display:flex;flex-direction:column;align-items:center}.box{padding:12px;width:100%;margin:15px;margin-bottom:5px;border:1px solid black;outline:none;border-radius:20px}#submit{padding:12px 30px;width:40%;margin-top:20px;background-color:black;color:white;font-weight:bold;border:none;outline:none;border-radius:20px}#submit:disabled{background-color:rgb(90, 86, 86)}#submit:hover{cursor:pointer}.form a{text-decoration:none;margin-top:20px}.error{color:rgb(217, 58, 58);align-self:flex-start;margin-bottom:15px;font-size:0.9rem}.footer{margin:auto}.msg-s{color:green;font-size:0.9rem;margin-top:15px}.msg-i{color:#dc3545;font-size:0.9rem;margin-top:15px}";
const RfLoginStyle0 = loginCss;

const Login = /*@__PURE__*/ proxyCustomElement(class Login extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return RfLoginStyle0; }
}, [1, "rf-login", {
        "hide": [1540],
        "emailInputBind": [32],
        "passwordInputBind": [32],
        "isEmailValid": [32],
        "isPasswordValid": [32],
        "isLoginSuccess": [32]
    }, [[16, "rfEmitter", "swap"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-login"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-login":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Login);
            }
            break;
    } });
}
defineCustomElement$1();

const RfLogin = Login;
const defineCustomElement = defineCustomElement$1;

export { RfLogin, defineCustomElement };

//# sourceMappingURL=rf-login.js.map