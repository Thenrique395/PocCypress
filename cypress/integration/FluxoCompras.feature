#language en

 Feature: Realizar uma compra

#  Scenario: Comprar produtos no site
#     Given que faco autenticacao no site
#     When clico no botao add to cart para adicionar o primeiro produto
#     And clico  no botao add to cart para adicionar o segundo produto
#     And clico no carrinho de compras
#     And clico no botao checkout
#     And preencho o primeiro nome com 'Jose'
#     And preencho o ultimo nome com 'Andrade'
#     And preencho o cep com '54456345'
#     And clico no botao continue
#     And clico no botao finish
#     Then visualizo a mensagem 'Checkout: Complete!'

    Background: Login
    Given que faco autenticacao no site
    When clico no botao add to cart para adicionar o primeiro produto
    And clico  no botao add to cart para adicionar o segundo produto
    And clico no carrinho de compras


    Scenario: Adicionando produto no carrinho
    Then no carrinho vai ter '2' produtos

    Scenario: Realizar a compra
    When clico no botao checkout
    And preencho o primeiro nome com 'Jose'
    And preencho o ultimo nome com 'Andrade'
    And preencho o cep com '54456345'
    And clico no botao continue
    And clico no botao finish
    Then visualizo a mensagem 'Checkout: Complete!'
