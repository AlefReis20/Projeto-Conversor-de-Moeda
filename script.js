const button = document.getElementById('convert-button')
const firstSelect = document.getElementById('first-currency-select')
const secondSelect = document.getElementById('second-currency-select')


const convertValues = async () => {
    const inputCurrency = document.getElementById('input-currency').value
    const currencyValueText1 = document.getElementById('currency-value-text1')
    const currencyValueText2 = document.getElementById('currency-value-text2')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,BRL-USD,BRL-EUR,BTC-USD,BTC-EUR,EUR-USD").then(response => response.json())

    const dolarToReal = data.USDBRL.bid
    const euroToReal = data.EURBRL.bid
    const euroToDolar = data.EURUSD.bid
    const bitcoinToReal = data.BTCBRL.bid
    const bitcoinToDolar = data.BTCUSD.bid
    const bitcoinToEuro = data.BTCEUR.bid

    console.log(inputCurrency)

    if (firstSelect.value === 'real' && secondSelect.value === 'real') {
        alert('Para realizar a conversão, troque o tipo de moeda.')
        currencyValueText2.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency)
    }

    if (firstSelect.value === 'real' && secondSelect.value === 'dolar') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency / dolarToReal)
    }

    if (firstSelect.value === 'real' && secondSelect.value === 'euro') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency / euroToReal)
    }

    if (firstSelect.value === 'real' && secondSelect.value === 'bitcoin') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency / (bitcoinToReal))
    }


    if (firstSelect.value === 'dolar' && secondSelect.value === 'dolar') {
        alert('Para realizar a conversão, troque o tipo de moeda.')
        currencyValueText2.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency)
    }

    if (firstSelect.value === 'dolar' && secondSelect.value === 'real') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency * dolarToReal)
    }

    if (firstSelect.value === 'dolar' && secondSelect.value === 'euro') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency / euroToDolar)
    }

    if (firstSelect.value === 'dolar' && secondSelect.value === 'bitcoin') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency / (bitcoinToDolar))
    }

    if (firstSelect.value === 'euro' && secondSelect.value === 'euro') {
        alert('Para realizar a conversão, troque o tipo de moeda.')
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency)
    }

    if (firstSelect.value === 'euro' && secondSelect.value === 'real') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency * euroToReal)
    }

    if (firstSelect.value === 'euro' && secondSelect.value === 'dolar') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency * euroToDolar)
    }

    if (firstSelect.value === 'euro' && secondSelect.value === 'bitcoin') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency / (bitcoinToEuro))
    }

    if (firstSelect.value === 'bitcoin' && secondSelect.value === 'bitcoin') {
        alert('Para realizar a conversão, troque o tipo de moeda.')
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency)
    }

    if (firstSelect.value === 'bitcoin' && secondSelect.value === 'real') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency * (bitcoinToReal))
    }

    if (firstSelect.value === 'bitcoin' && secondSelect.value === 'dolar') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency * (bitcoinToDolar))
    }

    if (firstSelect.value === 'bitcoin' && secondSelect.value === 'euro') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency * (bitcoinToEuro))
    }
}

changeCurrency1 = () => {
    const currencyName1 = document.getElementById('currency-name1')
    const currencyImg1 = document.getElementById('currency-img1')

    if (firstSelect.value === 'real') {
        currencyName1.innerHTML = 'Real Brasileiro'
        currencyImg1.src = './assets/real.png'
    }

    if (firstSelect.value === 'dolar') {
        currencyName1.innerHTML = 'Dolar Americano'
        currencyImg1.src = './assets/dolar.png'
    }

    if (firstSelect.value === 'euro') {
        currencyName1.innerHTML = 'Euro'
        currencyImg1.src = './assets/euro.png'
    }

    if (firstSelect.value === 'bitcoin') {
        currencyName1.innerHTML = 'Bitcoin'
        currencyImg1.src = './assets/bitcoin.png'
    }
    convertValues()
}

changeCurrency2 = () => {
    const currencyName2 = document.getElementById('currency-name2')
    const currencyImg2 = document.getElementById('currency-img2')

    if (secondSelect.value === 'real') {
        currencyName2.innerHTML = 'Real Brasileiro'
        currencyImg2.src = './assets/real.png'
    }

    if (secondSelect.value === 'dolar') {
        currencyName2.innerHTML = 'Dolar Americano'
        currencyImg2.src = './assets/dolar.png'
    }

    if (secondSelect.value === 'euro') {
        currencyName2.innerHTML = 'Euro'
        currencyImg2.src = './assets/euro.png'
    }

    if (secondSelect.value === 'bitcoin') {
        currencyName2.innerHTML = 'bitcoin'
        currencyImg2.src = './assets/bitcoin.png'
    }
    convertValues()
}

button.addEventListener('click', convertValues)
firstSelect.addEventListener('change', changeCurrency1)
secondSelect.addEventListener('change', changeCurrency2)