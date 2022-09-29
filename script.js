const button = document.getElementById('convert-button')
const firstSelect = document.getElementById('first-currency-select')
const secondSelect = document.getElementById('second-currency-select')

const dolarToReal = 5.39
const euroToReal = 5.19
const realToBitcoin = 0.0000093

const euroToDolar = 1.02
const dolarToBitcoin = 0.000051

const euroToBitcoin = 0.000050

const bitcoinToReal = 104726.95
const bitcoinToDolar = 19404.30
const bitcoinToEuro = 19840.61


const convertValues = () => {
    const inputCurrency = document.getElementById('input-currency').value
    const currencyValueText1 = document.getElementById('currency-value-text1')
    const currencyValueText2 = document.getElementById('currency-value-text2')

    if (firstSelect.value === 'R$ Real Brasileiro' && secondSelect.value === 'R$ Real Brasileiro') {
        alert('Para realizar a conversão, troque o tipo de moeda.')
        currencyValueText2.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency)
    } 

    if (firstSelect.value === 'R$ Real Brasileiro' && secondSelect.value === 'US$ Dolar Americano') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency / dolarToReal)
    } 

    if (firstSelect.value === 'R$ Real Brasileiro'&& secondSelect.value === '€ Euro') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency / euroToReal)
    } 

    if (firstSelect.value === 'R$ Real Brasileiro' && secondSelect.value === 'Bitcoin') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency * realToBitcoin)
    } 


    if(firstSelect.value === 'US$ Dolar Americano' && secondSelect.value === 'US$ Dolar Americano') {
        alert('Para realizar a conversão, troque o tipo de moeda.')
        currencyValueText2.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency)
    } 

    if(firstSelect.value === 'US$ Dolar Americano' && secondSelect.value === 'R$ Real Brasileiro') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency * dolarToReal)
    }

    if(firstSelect.value === 'US$ Dolar Americano' && secondSelect.value === '€ Euro') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency * euroToDolar)
    }

    if(firstSelect.value === 'US$ Dolar Americano' && secondSelect.value === 'Bitcoin') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency * dolarToBitcoin)
    }
   
    if(firstSelect.value === '€ Euro' && secondSelect.value === '€ Euro') {
        alert('Para realizar a conversão, troque o tipo de moeda.')
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency)
    }

    if(firstSelect.value === '€ Euro' && secondSelect.value === 'R$ Real Brasileiro') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency * euroToReal)
    }

    if(firstSelect.value === '€ Euro' && secondSelect.value === 'US$ Dolar Americano') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency / euroToDolar)
    }

    if(firstSelect.value === '€ Euro' && secondSelect.value === 'Bitcoin') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency * euroToBitcoin)
    }

    if(firstSelect.value === 'Bitcoin' && secondSelect.value === 'Bitcoin') {
        alert('Para realizar a conversão, troque o tipo de moeda.')
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency)
    }

    if(firstSelect.value === 'Bitcoin' && secondSelect.value === 'R$ Real Brasileiro') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency * bitcoinToReal)
    }

    if(firstSelect.value === 'Bitcoin' && secondSelect.value === 'US$ Dolar Americano') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency * bitcoinToDolar)
    }

    if(firstSelect.value === 'Bitcoin' && secondSelect.value === '€ Euro') {
        currencyValueText1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency)
        currencyValueText2.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency * bitcoinToEuro)
    }
}

changeCurrency1 = () => {
    const currencyName1 = document.getElementById('currency-name1')
    const currencyImg1 = document.getElementById('currency-img1')

    if (firstSelect.value === 'R$ Real Brasileiro') {
        currencyName1.innerHTML = 'Real Brasileiro'
        currencyImg1.src = './assets/real.png'
    }

    if (firstSelect.value === 'US$ Dolar Americano') {
        currencyName1.innerHTML = 'Dolar Americano'
        currencyImg1.src = './assets/dolar.png'
    }

    if (firstSelect.value === '€ Euro') {
        currencyName1.innerHTML = 'Euro'
        currencyImg1.src = './assets/euro.png'
    }

    if (firstSelect.value === 'Bitcoin') {
        currencyName1.innerHTML = 'Bitcoin'
        currencyImg1.src = './assets/bitcoin.png'
    }
    convertValues()
}

changeCurrency2 = () => {
    const currencyName2 = document.getElementById('currency-name2')
    const currencyImg2 = document.getElementById('currency-img2')

    if (secondSelect.value === 'R$ Real Brasileiro') {
        currencyName2.innerHTML = 'Real Brasileiro'
        currencyImg2.src = './assets/real.png'
    }

    if (secondSelect.value === 'US$ Dolar Americano') {
        currencyName2.innerHTML = 'Dolar Americano'
        currencyImg2.src = './assets/dolar.png'
    }

    if (secondSelect.value === '€ Euro') {
        currencyName2.innerHTML = 'Euro'
        currencyImg2.src = './assets/euro.png'
    }

    if (secondSelect.value === 'Bitcoin') {
        currencyName2.innerHTML = 'Bitcoin'
        currencyImg2.src = './assets/bitcoin.png'
    }
    convertValues()
}

button.addEventListener('click', convertValues)
firstSelect.addEventListener('change', changeCurrency1)
secondSelect.addEventListener('change', changeCurrency2)