const baseCurrency = 'USD';
const rateLookup = {
    'EUR': 0.87815,
    'GBP': 0.78569,
    'CAD': 1.31715,
    'INR': 69.3492,
    'MXN': 19.2316,
    'AUD': 1.43534,
    'CNY': 6.88191,
    'MYR': 4.13785,
    'COP': 3203.18,
};

const exchangeRate = (source, destination) => {
    let rate = 1;
    if(source != baseCurrency)
        rate /= rateLookup[source];

    if(destination != baseCurrency)
        rate *= rateLookup[destination];

    return rate;
}

export default exchangeRate;