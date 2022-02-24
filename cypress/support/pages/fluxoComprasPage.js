import fluxoComprasElements from "../elements/fluxoComprasElements";
const actionFluxoCompras = new fluxoComprasElements()

class fluxoComprasPage {

    adicionarPrimeiroProduto() {
        cy.get(actionFluxoCompras.btnAdicionarProduto).click()
    }

    adicionarSegundoProduto() {
        cy.get(actionFluxoCompras.btnAdicionarProdutoCamisa).click()

    }

    clicarCarrinhoCompras() {
        cy.get(actionFluxoCompras.btnCarrinhoCompras).click()

    }

    clicarCheckout() {
        cy.get(actionFluxoCompras.btnCheckout).click()

    }

    preencherCampoPrimeiroNome(primeiroNome) {
        cy.get(actionFluxoCompras.inputFirstName).type(primeiroNome)

    }

    preencherCampoSegundoNome(segundoNome) {
        debugger
        cy.get(actionFluxoCompras.inputLastName).type(segundoNome)

    }
    preencherCampoCep(cep) {
        cy.get(actionFluxoCompras.inputCep).type(cep)
    }

    clicarBotaoContinue() {
        cy.get(actionFluxoCompras.btnContinue).click()

    }


    clicarBotaoFinish() {
        cy.get(actionFluxoCompras.btnFinish).click()

    }

    mensagemFinalizandoCompras(mensagem) {
        cy.get(actionFluxoCompras.mensagemCheckoutComplete).contains(mensagem)
    }

    quantidadeProdutoCarrinho(qtdProduto){
        cy.get(actionFluxoCompras.quantidadeProdutoCarrinho).contains(qtdProduto)
    }


}


export default fluxoComprasPage