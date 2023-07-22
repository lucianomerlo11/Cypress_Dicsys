import Login from '../../pages/login.js';

/// <reference types="cypress" />

describe('Login example', () => {
    beforeEach(() => {
      cy.visit('https://www.frc.utn.edu.ar/')
    })
  
    // Los "it" son los escenarios 
    it.only('Login valid', () => {
        const login = new Login();

        // Click en "Ingresar a Mi Autogestion"
        login.getIngresarBtn().click();

        // Se ingreso legajo
        login.getUserInput().type("76535");

        // Se selecciona carrera
        login.getDomainsSelect().select('sistemas');

        // Se ingresa contraseña
        //! Sera invalido ya que no es mi contraseña
        login.getPasswordInput().type("**********");

        // Clicl en boton iniciar sesion
        login.getLoginButton().click();
    })

    it('Login invalid', () => {
      const login = new Login()

      // Click en "Ingresar a Mi Autogestion"
      login.getIngresarBtn().click();

      // Se ingreso legajo
      login.getUserInput().type("76985");

      // Se selecciona carrera
      login.getDomainsSelect().select('sistemas');

      // Se ingresa contraseña
      login.getPasswordInput().type("1234");

      // Clicl en boton iniciar sesion
      login.getLoginButton().click();
    })
  })
  