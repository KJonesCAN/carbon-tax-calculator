const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

/* Base Settings */

let fuelPrice = 1.60;
let carbonTax = 0.14;

if (urlParams.get('fuel-price')) {
    fuelPrice = urlParams.get('fuel-price');
}

if (urlParams.get('carbon-tax')) {
    carbonTax = urlParams.get('carbon-tax');
}

let carbonTaxRate = carbonTax / fuelPrice;

document.getElementById('fuel-price').value = parseFloat(fuelPrice).toFixed(2);
document.getElementById('carbon-tax').value = parseFloat(carbonTax).toFixed(2);

/* Production Values */

let productionFuel = 15000;
let productionCost;
let distributors = 1;
let costPerDistributor;
let productionCarbonTax;

if (urlParams.get('production-fuel')) {
    productionFuel = urlParams.get('production-fuel');
}

if (urlParams.get('distributors')) {
    distributors = urlParams.get('distributors');
}

productionCost = productionFuel * fuelPrice;
costPerDistributor = productionCost / distributors;
productionCarbonTax = costPerDistributor * carbonTaxRate;

document.getElementById('production-fuel').value = productionFuel;
document.getElementById('production-cost').value = parseFloat(productionCost).toFixed(2);
document.getElementById('distributors').value = distributors;
document.getElementById('cost-per-distributor').value = parseFloat(costPerDistributor).toFixed(2);
document.getElementById('production-carbon-tax').value = parseFloat(productionCarbonTax).toFixed(2);

/* Distribution Values */

let distributionFuel = 1000;
let distributionCost;
let distributionCostCombined;
let retailers = 25;
let costPerRetailer;
let distributionCarbonTax;

if (urlParams.get('distribution-fuel')) {
    distributionFuel = urlParams.get('distribution-fuel');
}

if (urlParams.get('retailers')) {
    retailers = urlParams.get('retailers');
}

distributionCost = distributionFuel * fuelPrice;
distributionCostCombined = distributionCost + costPerDistributor;
costPerRetailer = distributionCostCombined / retailers;
distributionCarbonTax = costPerRetailer * carbonTaxRate;

document.getElementById('distribution-fuel').value = distributionFuel;
document.getElementById('distribution-cost').value = parseFloat(distributionCost).toFixed(2);
document.getElementById('distribution-cost-combined').value = parseFloat(distributionCostCombined).toFixed(2);
document.getElementById('retailers').value = retailers;
document.getElementById('cost-per-retailer').value = parseFloat(costPerRetailer).toFixed(2);
document.getElementById('distribution-carbon-tax').value = parseFloat(distributionCarbonTax).toFixed(2);

/* Retailer Values */

let retailerFuel = 500;
let retailerCost;
let retailerCostCombined;
let customers = 500;
let costPerCustomer;
let customerCarbonTax;

if (urlParams.get('retailer-fuel')) {
    retailerFuel = urlParams.get('retailer-fuel');
}

if (urlParams.get('customers')) {
    customers = urlParams.get('customers');
}

retailerCost = retailerFuel * fuelPrice;
retailerCostCombined = retailerCost + costPerRetailer;
costPerCustomer = retailerCostCombined / customers;
customerCarbonTax = costPerCustomer * carbonTaxRate;

console.log(customerCarbonTax);

document.getElementById('retailer-fuel').value = retailerFuel;
document.getElementById('retailer-cost').value = parseFloat(retailerCost).toFixed(2);
document.getElementById('retailer-cost-combined').value = parseFloat(retailerCostCombined).toFixed(2);
document.getElementById('customers').value = customers;
document.getElementById('cost-per-customer').value = parseFloat(costPerCustomer).toFixed(2);
document.getElementById('customer-carbon-tax').value = parseFloat(customerCarbonTax).toFixed(2);

let ctCost = document.getElementById('customer-carbox-tax-amount');
let ctPercentage = document.getElementById('customer-carbox-tax-percentage');

ctCost.innerHTML += '<strong>$' + parseFloat(customerCarbonTax).toFixed(2) + '</strong>';
ctPercentage.innerHTML += '<strong>' + parseFloat(carbonTaxRate * 100).toFixed(2) + '%</strong>';
