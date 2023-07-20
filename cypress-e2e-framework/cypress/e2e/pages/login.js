class LoginLocators{
    constructor(){
        this.ingresarBtn   = '[href="javascript:setServicioLogon(2)"]';
        this.domainsSelect = '[id="txtDominios"]';
        this.userInput     = '[id="txtUsuario"]';
        this.loginButton   = '[id="btnEnviar"]'
        this.passwordInput = '[id="pwdClave"]'
    }
}

export default class Login{
    constructor(){
        this.locators = new LoginLocators();
    }

    getDomainsSelect = () => cy.get(this.locators.domainsSelect);

    getPasswordInput = () => cy.get(this.locators.passwordInput);
    
    getIngresarBtn   = () => cy.get(this.locators.ingresarBtn);
    
    getLoginButton   = () => cy.get(this.locators.loginButton);
    
    getUserInput     = () => cy.get(this.locators.userInput);


}