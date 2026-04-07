#language: pt
Funcionalidade: Compra de Passagem
    Cenario: Compra com Sucesso
        Dado que estou no site Blazedemo
        Quando seleciono a origem como "São Paolo"
        E seleciono o Destino como "London"
        E clico no botao "Find Flights"
        Entao verifico o texto "Flights from São Paolo to London:"
        E se a url contem "reserve"
        Quando seleciono o voo "9696" da companhia "Aer Lingus"
        Entao verifico se a url contem "purchase"
        Quando preencho o nome como "Charlie Brown"
        E seleciono a bandeira do cartão como "amex"
        E marco a opcao "Remember me"
        E clico no botao "Purchase Flight"
        Entao verifico se a url contem "confirmation"
        E se exibe a mensagem de agradecimento "Thank you for your purchase today!"
        E se contem a informacao "Amount" como "555 USD"
        