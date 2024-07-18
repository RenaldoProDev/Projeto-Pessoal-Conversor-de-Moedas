const convertButton = document.querySelector(".convert-button")
const currencySelectConvert = document.querySelector(".currency-select-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")// Outros Valores


    const dolarToday = 5.43
    const euroToday = 5.92
    const bitcoinToday = 325.355
    const libraToday = 6.89
    const realToday = 1.0
    const ieneToday = 0.034
    const dolarCanadenseToday = 3.97

    // Conversão do Real Brasileiro Para Outras Moedas
 
    if (currencySelectConvert.value == "real") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectConvert.value == "real") {

        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / (realToday * dolarToday))
        }

        if (currencySelectConverted.value == "euro") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / (realToday * euroToday))

        }

        if (currencySelectConverted.value == "bitcoin") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / (realToday * bitcoinToday))
        }

        if (currencySelectConverted.value == "libra") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / (realToday * libraToday))
        }

        if (currencySelectConverted.value == "iene") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY"
            }).format(inputCurrencyValue / (realToday * ieneToday))
        }

        if (currencySelectConverted.value == "dolar-canadense") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD"
            }).format(inputCurrencyValue / (realToday * dolarCanadenseToday))
        }
    }
    // Conversão do Dólar para outras moedas

    if (currencySelectConvert.value == "dolar") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectConvert.value == "dolar") {

        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * (dolarToday / realToday))
        }

        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * (dolarToday / euroToday))
        }

        if (currencySelectConverted.value == "bitcoin") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * (dolarToday / bitcoinToday))
        }

        if (currencySelectConverted.value == "libra") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * (dolarToday / libraToday))
        }

        if (currencySelectConverted.value == "iene") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY"
            }).format(inputCurrencyValue * (dolarToday / ieneToday))
        }

        if (currencySelectConverted.value == "dolar-canadense") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD"
            }).format(inputCurrencyValue * (dolarToday / dolarCanadenseToday))
        }
    }

    // Conversão do Euro para as outras moedas

    if (currencySelectConvert.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectConvert.value == "euro") {

        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * (euroToday / realToday))
        }

        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * (euroToday / dolarToday))
        }


        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * (euroToday / libraToday))
        }

        if (currencySelectConverted.value == "bitcoin") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * (euroToday / bitcoinToday))
        }

        if (currencySelectConverted.value == "iene") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY"
            }).format(inputCurrencyValue * (euroToday / ieneToday))
        }

        if (currencySelectConverted.value == "dolar-canadense") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD"
            }).format(inputCurrencyValue * (euroToday / dolarCanadenseToday))
        }
    }

    // Conversão da Libra para outras moedas

    if (currencySelectConvert.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectConvert.value == "libra") {

        if (currencySelectConverted.value == "real") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * (libraToday / realToday))
        }


        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * (libraToday / dolarToday))
        }

        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * (libraToday / euroToday))
        }

        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * (libraToday / bitcoinToday))
        }

        if (currencySelectConverted.value == "iene") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY"
            }).format(inputCurrencyValue * (libraToday / ieneToday))
        }

        if (currencySelectConverted.value == "dolar-canadense") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD"
            }).format(inputCurrencyValue * (libraToday / dolarCanadenseToday))
        }
    }

    // Conversão do Bitcoin para outras moedas

    if (currencySelectConvert.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currencySelectConvert.value == "bitcoin") {

        if (currencySelectConverted.value == "real") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * (bitcoinToday / realToday))
        }

        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * (bitcoinToday / dolarToday))
        }

        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * (bitcoinToday / euroToday))
        }

        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * (bitcoinToday / libraToday))
        }

        if (currencySelectConverted.value == "iene") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY"
            }).format(inputCurrencyValue * (bitcoinToday / ieneToday))
        }

        if (currencySelectConverted.value == "dolar-canadense") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD"
            }).format(inputCurrencyValue * (bitcoinToday / dolarCanadenseToday))
        }

    }

    // Conversão do Iene para outras moedas

    if (currencySelectConvert.value == "iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
    }

    if (currencySelectConvert.value == "iene") {

        if (currencySelectConverted.value == "real") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * (ieneToday / realToday))
        }

        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * (ieneToday / dolarToday))
        }

        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * (ieneToday / euroToday))
        }

        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * (ieneToday / libraToday))
        }

        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * (ieneToday / bitcoinToday))
        }

        if (currencySelectConverted.value == "dolar-canadense") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD"
            }).format(inputCurrencyValue * (ieneToday / dolarCanadenseToday))
        }
    }

    // Conversão do Dolar Canadense para outras moedas

    if (currencySelectConvert.value == "dolar-canadense") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectConvert.value == "dolar-canadense") {

        if (currencySelectConverted.value == "real") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * (dolarCanadenseToday / realToday))
        }

        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * (dolarCanadenseToday / dolarToday))
        }

        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * (dolarCanadenseToday / euroToday))
        }

        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * (dolarCanadenseToday / libraToday))
        }

        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * (dolarCanadenseToday / bitcoinToday))
        }

        if (currencySelectConverted.value == "iene") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY"
            }).format(inputCurrencyValue * (dolarCanadenseToday / ieneToday))
        }
    }


}

function changeCurrency() {
    const currencyNameOne = document.querySelector("#currency-name-one")
    const currencyImageOne = document.querySelector(".imagem-circle-brasil")
    const currencyNameTwo = document.querySelector("#currency-name-two")
    const currencyImageTwo = document.querySelector(".imagem-circle-eua")

    // Primeiro Select

    if (currencySelectConvert.value == "real") {

        currencyNameOne.innerHTML = "Real"
        currencyImageOne.src = "https://i.pinimg.com/originals/b1/1f/70/b11f7039b513556886b426b7da96a32c.gif"
    }

    if (currencySelectConvert.value == "dolar") {

        currencyNameOne.innerHTML = "Dólar"
        currencyImageOne.src = "https://i.pinimg.com/originals/5c/4d/cf/5c4dcfb3ddbb65de0a8f879ac512b3fd.gif"
    }

    if (currencySelectConvert.value == "euro") {

        currencyNameOne.innerHTML = "Euro"
        currencyImageOne.src = "https://media1.tenor.com/m/0-7b-QM5unEAAAAC/european-union-flag-gif.gif"
    }

    if (currencySelectConvert.value == "libra") {

        currencyNameOne.innerHTML = "Libra"
        currencyImageOne.src = "https://pa1.aminoapps.com/6728/fa686918841b040d31e2d63ac4272d4493d3a207_00.gif"
    }

    if (currencySelectConvert.value == "bitcoin") {

        currencyNameOne.innerHTML = "Bitcoin"
        currencyImageOne.src = "https://i.gifer.com/g3KV.gif"
    }

    if (currencySelectConvert.value == "iene") {
        currencyNameOne.innerHTML = "Iene"
        currencyImageOne.src = "https://media.tenor.com/s_AGPd5hTL4AAAAM/japan.gif"
    }

    if (currencySelectConvert.value == "dolar-canadense") {
        currencyNameOne.innerHTML = "Dólar Canadense"
        currencyImageOne.src = "https://cdn.pixabay.com/animation/2022/08/07/20/19/20-19-38-788_512.gif"
    }

    // Segundo Select

    if (currencySelectConverted.value == "real") {

        currencyNameTwo.innerHTML = "Real"
        currencyImageTwo.src = "https://i.pinimg.com/originals/b1/1f/70/b11f7039b513556886b426b7da96a32c.gif"
    }

    if (currencySelectConverted.value == "dolar") {

        currencyNameTwo.innerHTML = "Dólar"
        currencyImageTwo.src = "https://i.pinimg.com/originals/5c/4d/cf/5c4dcfb3ddbb65de0a8f879ac512b3fd.gif"
    }

    if (currencySelectConverted.value == "euro") {

        currencyNameTwo.innerHTML = "Euro"
        currencyImageTwo.src = "https://media1.tenor.com/m/0-7b-QM5unEAAAAC/european-union-flag-gif.gif"
    }

    if (currencySelectConverted.value == "bitcoin") {

        currencyNameTwo.innerHTML = "Bitcoin"
        currencyImageTwo.src = "https://i.gifer.com/g3KV.gif"
    }

    if (currencySelectConverted.value == "libra") {

        currencyNameTwo.innerHTML = "Libra"
        currencyImageTwo.src = "https://pa1.aminoapps.com/6728/fa686918841b040d31e2d63ac4272d4493d3a207_00.gif"
    }

    if (currencySelectConverted.value == "iene") {
        currencyNameTwo.innerHTML = "Iene"
        currencyImageTwo.src = "https://media.tenor.com/s_AGPd5hTL4AAAAM/japan.gif"
    }

    if (currencySelectConverted.value == "dolar-canadense") {
        currencyNameTwo.innerHTML = "Dólar Canadense"
        currencyImageTwo.src = "https://cdn.pixabay.com/animation/2022/08/07/20/19/20-19-38-788_512.gif"
    }

    // Esconder opções apropriadas dos selects
    const optionsConverted = currencySelectConverted.options;

    if (currencySelectConvert.value == "real") {
        for (let i = 0; i < optionsConverted.length; i++) {
            if (optionsConverted[i].value == "real") {
                optionsConverted[i].style.display = "none";
            } else {
                optionsConverted[i].style.display = "";
            }
        }
    }

    if (currencySelectConvert.value == "dolar") {
        for (let i = 0; i < optionsConverted.length; i++) {
            if (optionsConverted[i].value == "dolar") {
                optionsConverted[i].style.display = "none";
            } else {
                optionsConverted[i].style.display = "";
            }
        }
    }

    if (currencySelectConvert.value == "euro") {
        for (let i = 0; i < optionsConverted.length; i++) {
            if (optionsConverted[i].value == "euro") {
                optionsConverted[i].style.display = "none";
            } else {
                optionsConverted[i].style.display = "";
            }
        }
    }

    if (currencySelectConvert.value == "libra") {
        for (let i = 0; i < optionsConverted.length; i++) {
            if (optionsConverted[i].value == "libra") {
                optionsConverted[i].style.display = "none";
            } else {
                optionsConverted[i].style.display = "";
            }
        }
    }

    if (currencySelectConvert.value == "bitcoin") {
        for (let i = 0; i < optionsConverted.length; i++) {
            if (optionsConverted[i].value == "bitcoin") {
                optionsConverted[i].style.display = "none";
            } else {
                optionsConverted[i].style.display = "";
            }
        }
    }

    if (currencySelectConvert.value == "iene") {
        for (let i = 0; i < optionsConverted.length; i++) {
            if (optionsConverted[i].value == "iene") {
                optionsConverted[i].style.display = "none";
            } else {
                optionsConverted[i].style.display = "";
            }
        }
    }

    if (currencySelectConvert.value == "dolar-canadense") {
        for (let i = 0; i < optionsConverted.length; i++) {
            if (optionsConverted[i].value == "dolar-canadense") {
                optionsConverted[i].style.display = "none";
            } else {
                optionsConverted[i].style.display = "";
            }
        }
    }

    // Garantir que uma opção visível esteja selecionada e atualizar a bandeira e nome da moeda
    if (currencySelectConverted.selectedOptions[0].style.display == "none") {
        for (let i = 0; i < optionsConverted.length; i++) {
            if (optionsConverted[i].style.display != "none") {
                currencySelectConverted.value = optionsConverted[i].value;

                // Atualizar as bandeiras e os nomes das moedas
                if (optionsConverted[i].value == "real") {
                    currencyNameTwo.innerHTML = "Real"
                    currencyImageTwo.src = "https://i.pinimg.com/originals/b1/1f/70/b11f7039b513556886b426b7da96a32c.gif"
                } else if (optionsConverted[i].value == "dolar") {
                    currencyNameTwo.innerHTML = "Dólar"
                    currencyImageTwo.src = "https://i.pinimg.com/originals/5c/4d/cf/5c4dcfb3ddbb65de0a8f879ac512b3fd.gif"
                } else if (optionsConverted[i].value == "euro") {
                    currencyNameTwo.innerHTML = "Euro"
                    currencyImageTwo.src = "https://media1.tenor.com/m/0-7b-QM5unEAAAAC/european-union-flag-gif.gif"
                } else if (optionsConverted[i].value == "bitcoin") {
                    currencyNameTwo.innerHTML = "Bitcoin"
                    currencyImageTwo.src = "https://i.gifer.com/g3KV.gif"
                } else if (optionsConverted[i].value == "libra") {
                    currencyNameTwo.innerHTML = "Libra"
                    currencyImageTwo.src = "https://pa1.aminoapps.com/6728/fa686918841b040d31e2d63ac4272d4493d3a207_00.gif"
                } else if (optionsConverted[i].value == "iene") {
                    currencyNameTwo.innerHTML = "Iene"
                    currencyImageTwo.src = "https://media.tenor.com/s_AGPd5hTL4AAAAM/japan.gif"
                } else if (optionsConverted[i].value == "dolar-canadense") {
                    currencyNameTwo.innerHTML = "Dólar Canadense"
                    currencyImageTwo.src = "https://cdn.pixabay.com/animation/2022/08/07/20/19/20-19-38-788_512.gif"
                }

                break;
            }
        }
    }



    convertValues()

}
currencySelectConvert.addEventListener("change", changeCurrency)
currencySelectConverted.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)