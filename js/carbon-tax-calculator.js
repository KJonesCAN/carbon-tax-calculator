const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

/* Default values */

const defaultFuelPrice = 1.60;
const defaultCarbonTax = 0.14;
const defaultProductionFuel = 15000;
const defaultDistributors = 1;
const defaultDistributionFuel = 1000;
const defaultRetailers = 25;
const defaultRetailerFuel = 500;
const defaultCustomers = 500;
let carbonTaxRate;

/* Carbon tax fields */

const fuelPrice = document.getElementById('fuel-price');
const carbonTax = document.getElementById('carbon-tax');

/* Production fields */

const productionFuel = document.getElementById('production-fuel');
const productionFuelCost = document.getElementById('production-cost');
const distributors = document.getElementById('distributors');
const costPerDistributor = document.getElementById('cost-per-distributor');
const carbonTaxPerDistributor = document.getElementById('production-carbon-tax');

/* Distribution fields */

const distributionFuel = document.getElementById('distribution-fuel');
const distributionFuelCost = document.getElementById('distribution-cost');
const distributionCostCombined = document.getElementById('distribution-cost-combined');
const retailers = document.getElementById('retailers');
const costPerRetailer = document.getElementById('cost-per-retailer');
const carbonTaxPerRetailer = document.getElementById('distribution-carbon-tax');

/* Retailer fields */

const retailerFuel = document.getElementById('retailer-fuel');
const retailerFuelCost = document.getElementById('retailer-cost');
const retailerCostCombined = document.getElementById('retailer-cost-combined');
const customers = document.getElementById('customers');
const costPerCustomer = document.getElementById('cost-per-customer');
const carbonTaxPerCustomer = document.getElementById('customer-carbon-tax');

/* Summary values */

const ctCost = document.getElementById('customer-carbox-tax-amount');
const ctPercentage = document.getElementById('customer-carbox-tax-percentage');

function ctc_calc() {
    carbonTaxRate = carbonTax.value / fuelPrice.value;
    console.log(carbonTaxRate);

    productionFuelCost.value = parseFloat(productionFuel.value * fuelPrice.value).toFixed(2);
    costPerDistributor.value = parseFloat(productionFuelCost.value / distributors.value).toFixed(2);
    carbonTaxPerDistributor.value = parseFloat(costPerDistributor.value * carbonTaxRate).toFixed(2);
    distributionFuelCost.value = parseFloat(distributionFuel.value * fuelPrice.value).toFixed(2);
    distributionCostCombined.value = parseFloat(parseFloat(distributionFuelCost.value) + parseFloat(costPerDistributor.value)).toFixed(2);
    costPerRetailer.value = parseFloat(distributionCostCombined.value / retailers.value).toFixed(2);
    carbonTaxPerRetailer.value = parseFloat(costPerRetailer.value * carbonTaxRate).toFixed(2);
    retailerFuelCost.value = parseFloat(retailerFuel.value * fuelPrice.value).toFixed(2);
    retailerCostCombined.value = parseFloat(parseFloat(retailerFuelCost.value) + parseFloat(costPerRetailer.value)).toFixed(2);
    costPerCustomer.value = parseFloat(retailerCostCombined.value / customers.value).toFixed(2);
    carbonTaxPerCustomer.value = parseFloat(costPerCustomer.value * carbonTaxRate).toFixed(2);

    ctCost.innerHTML += '<strong>$' + carbonTaxPerCustomer.value + '</strong>';
    ctPercentage.innerHTML += '<strong>' + parseFloat(carbonTaxRate * 100).toFixed(2) + '%</strong>';
}

function ctc_init() {
    if (urlParams.get('fuel-price')) {
        fuelPrice.value = parseFloat(urlParams.get('fuel-price')).toFixed(2);
    } else {
        fuelPrice.value = parseFloat(defaultFuelPrice).toFixed(2);
    }

    if (urlParams.get('carbon-tax')) {
        carbonTax.value = parseFloat(urlParams.get('carbon-tax')).toFixed(2);
    } else {
        carbonTax.value = parseFloat(defaultCarbonTax).toFixed(2);
    }

    if (urlParams.get('production-fuel')) {
        productionFuel.value = urlParams.get('production-fuel');
    } else {
        productionFuel.value = defaultProductionFuel;
    }
    
    if (urlParams.get('distributors')) {
        distributors.value = urlParams.get('distributors');
    } else {
        distributors.value = defaultDistributors;
    }

    if (urlParams.get('distribution-fuel')) {
        distributionFuel.value = urlParams.get('distribution-fuel');
    } else {
        distributionFuel.value = defaultDistributionFuel;
    }
    
    if (urlParams.get('retailers')) {
        retailers.value = urlParams.get('retailers');
    } else {
        retailers.value = defaultRetailers;
    }

    if (urlParams.get('retailer-fuel')) {
        retailerFuel.value = urlParams.get('retailer-fuel');
    } else {
        retailerFuel.value = defaultRetailerFuel;
    }
    
    if (urlParams.get('customers')) {
        customers.value = urlParams.get('customers');
    } else {
        customers.value = defaultCustomers;
    }

    ctc_calc();
}

ctc_init();