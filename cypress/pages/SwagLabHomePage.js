class SwagLabHomePage {

    xpathOfElement ={
        standard_user : '//div[@class="login_credentials"]/text()[1]',
        locked_out_user: '//div[@class="login_credentials"]/text()[2]',
        problem_user: '//div[@class="login_credentials"]/text()[3]',
        performance_glitch_user: '//div[@class="login_credentials"]/text()[4]',
        error_user: '//div[@class="login_credentials"]/text()[5]',
        visual_user: '//div[@class="login_credentials"]/text()[6]',
        passwordForAllUser: '//div[@class="login_password"]/text()',

        txtUsername: '//input[@id="user-name"]',
        txtPassword: '//input[@id="password"]',
        loginButon: '//input[@value="Login"]'
    }

    elements = {
        standard_user: () => cy.xpath(this.xpathOfElement.standard_user),
        locked_out_user: () => cy.xpath(this.xpathOfElement.locked_out_user),
        problem_user: () => cy.xpath(this.xpathOfElement.problem_user),
        performance_glitch_user: () => cy.xpath(this.xpathOfElement.performance_glitch_user),
        error_user: () => cy.xpath(this.xpathOfElement.error_user),
        visual_user: () => cy.xpath(this.xpathOfElement.visual_user),
        passwordForAllUser: () => cy.xpath(this.xpathOfElement.passwordForAllUser),

        txtUsername: () => cy.xpath(this.xpathOfElement.txtUsername),
        txtPassword: () => cy.xpath(this.xpathOfElement.txtPassword),
        loginButon: () => cy.xpath(this.xpathOfElement.loginButon)
    }


    clickLoginButton() {
        this.elements.loginButon().click();
    }

    inputUsername(username){
        this.elements.txtUsername().type(username)
    }

    inputUsername(password){
        this.elements.txtPassword().type(password)
    }
}


module.exports = new SwagLabHomePage();

import 'cypress-xpath'