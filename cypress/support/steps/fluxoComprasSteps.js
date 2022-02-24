import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import fluxoCompraPage from "../pages/fluxoComprasPage";
const fluxoCompraStep = new fluxoCompraPage();

Given("que faco autenticacao no site", () => {
    cy.login({ username: 'standard_user', password: 'secret_sauce' })
});

When("clico no botao add to cart para adicionar o primeiro produto", () => {
    fluxoCompraStep.adicionarPrimeiroProduto()
});

When("clico  no botao add to cart para adicionar o segundo produto", () => {
    fluxoCompraStep.adicionarSegundoProduto()
});

When("clico no carrinho de compras", () => {
    fluxoCompraStep.clicarCarrinhoCompras()
});

When("clico no botao checkout", () => {
    fluxoCompraStep.clicarCheckout()
});

When("preencho o primeiro nome com {string}", (primeiroNome) => {
    fluxoCompraStep.preencherCampoPrimeiroNome(primeiroNome)
});

When("preencho o ultimo nome com {string}", (segundoNome) => {
    fluxoCompraStep.preencherCampoSegundoNome(segundoNome)
});

When("preencho o cep com {string}", (cep) => {
    fluxoCompraStep.preencherCampoCep(cep)

});

When("clico no botao continue", () => {
    fluxoCompraStep.clicarBotaoContinue()
});

When("clico no botao finish", () => {
    fluxoCompraStep.clicarBotaoFinish()
});

Then("visualizo a mensagem {string}", (mensagem) => {
    fluxoCompraStep.mensagemFinalizandoCompras(mensagem)
});


Then("no carrinho vai ter {string} produtos", (qtdProdutos) => {
	fluxoCompraStep.quantidadeProdutoCarrinho(qtdProdutos)
});

