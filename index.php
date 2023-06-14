<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carbon Tax Calulator</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/carbon-tax-calculator.css">
</head>
<body>

<div class="container">

<form method="get">
    <div class="column">
        <h2>Settings</h2>
        <div class="settings">
            <div class="field-row">
                <label>Fuel Price</label>
                <div class="field dollars-per-litre">
                    $<input id="fuel-price" type="number" name="fuel-price" step="0.01" value="" /> per litre
                </div>
            </div>
            <div class="field-row">
                <label>Carbon Tax</label>
                <div class="field dollars-per-litre">
                    $<input id="carbon-tax" type="number" name="carbon-tax" step="0.01" value="" /> per litre
                </div>
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column production">
            <h2>Production</h2>
            <div class="values">
                <div class="field-row">
                    <label>Fuel used</label>
                    <div class="field litres">
                        <input id="production-fuel" type="number" name="production-fuel" value="" /> litres
                    </div>
                </div>
                <div class="field-row">
                    <label>Production fuel cost</label>
                    <div class="field dollars">
                        $<input id="production-cost" type="number" step="0.01" value="" readonly />
                    </div>
                </div>
            </div>
            <div class="field-row border-top">
                <label>Number of distributors</label>
                <div class="field customers">
                    <input id="distributors" type="number" name="distributors" value="" />
                </div>
            </div>
            <div class="field-row total">
                <label>Fuel cost per distributor</label>
                <div class="field dollars">
                    $<input id="cost-per-distributor" type="number" step="0.01" value="" readonly />
                </div>
                <br />
                <label>Carbon tax per distributor</label>
                <div class="field dollars">
                    $<input id="production-carbon-tax" type="number" step="0.01" value="1.00" readonly />
                </div>
            </div>
        </div>
        <div class="column distribution">
            <h2>Distribution</h2>
            <div class="values">
                <div class="field-row">
                    <label>Fuel used</label>
                    <div class="field litres">
                        <input id="distribution-fuel" type="number" name="distribution-fuel" value="" /> litres
                    </div>
                </div>
                <div class="field-row">
                    <label>Distribution fuel cost</label>
                    <div class="field dollars">
                        $<input id="distribution-cost" type="number" step="0.01" value="" readonly />
                    </div>
                </div>
                <div class="field-row">
                    <label>Combined fuel cost<br /><span class="small-text">(production + distribution)</span></label>
                    <div class="field dollars">
                        $<input id="distribution-cost-combined" type="number" step="0.01" value="" readonly />
                    </div>
                </div>
            </div>
            <div class="field-row border-top">
                <label>Number of retailers</label>
                <div class="field customers">
                    <input id="retailers" type="number" name="retailers" value="" />
                </div>
            </div>
            <div class="field-row total">
                <label>Fuel cost per retailer</label>
                <div class="field dollars">
                    $<input id="cost-per-retailer" type="number" step="0.01" value="" readonly />
                </div>
                <br />
                <label>Carbon tax per retailer</label>
                <div class="field dollars">
                    $<input id="distribution-carbon-tax" type="number" step="0.01" value="1.00" readonly />
                </div>
            </div>
        </div>
        <div class="column retail">
            <h2>Retailer</h2>
            <div class="values">
                <div class="field-row">
                    <label>Fuel used</label>
                    <div class="field litres">
                        <input id="retailer-fuel" type="number" name="retailer-fuel" value="" /> litres
                    </div>
                </div>
                <div class="field-row">
                    <label>Retail fuel cost</label>
                    <div class="field dollars">
                        $<input id="retailer-cost" type="number" step="0.01" name="retailer-cost" value="" readonly />
                    </div>
                </div>
                <div class="field-row">
                    <label>Combined fuel cost<br /><span class="small-text">(distribution + retail)</span></label>
                    <div class="field dollars">
                        $<input id="retailer-cost-combined" type="number" step="0.01" value="" readonly />
                    </div>
                </div>
            </div>
            <div class="field-row border-top">
                <label>Number of customers</label>
                <div class="field customers">
                    <input id="customers" type="number" name="customers" value="" />
                </div>
            </div>
            <div class="field-row total">
                <label>Total fuel cost per customer</label>
                <div class="field dollars">
                    $<input id="cost-per-customer" type="number" step="0.01" value="" readonly />
                </div>
                <br />
                <label>Carbon tax per customer</label>
                <div class="field dollars">
                    $<input id="customer-carbon-tax" type="number" step="0.01" value="1.00" readonly />
                </div>
            </div>
        </div>
    </div>
    <div class="buttons">
        <a class="button reset" href="./">Reset</a><button type="submit">Calculate</button>
    </div>
</form>

<hr />

<h2>Explanation</h2>

<p>This calculator shows how the cost of fuel (including the carbon tax) is dispersed among many customers, which makes the carbon 
    tax an insignificant burden. I am using rough estimates for fuel usage and distributor/customer numbers. I'm basing the 
    numbers on a weekly delivery of produce, but it can be for any timeframe you want as long as it's consistent for each stage.
</p>

<p>I believe my estimates are exaggerated, and actually make the cost of the carbon tax to the customer appear worse than it 
    actually is in reality.</p>

<h3>Settings</h3>

<p>The <strong>Fuel Price</strong> field is the price of gasoline or diesel at the pump, and includes the carbon tax.</p>

<p>The <strong>Carbon Tax</strong> field is the current amount charged per litre of fuel. It is used to determine the amount of 
carbon tax that is being passed from each stage (production, distribution, retail) onto the end customer.

<h3>Production</h3>

<p>The <strong>Production</strong> stage can be a farm or a factory. The product could be anything from fruits & vegetables, or 
automobiles. The point is that an amount of fuel is used during this process and the cost of that fuel is dispersed downstream to 
many end customers.</p>

<p>The producer might sell all of their produce to a single distributor, in which case their entire fuel cost is passed to them.</p>

<h3>Distribution</h3>

<p>The <strong>distribution</strong> (or wholesale) stage is where the produce of a farm or factory is divided up, sold, and 
transported to retail stores, dealerships, etc.</p>

<p>Distribution adds the cost of fuel for transport trucks, ships, trains, and airplanes to the cost of production, which is 
    ultimately passed to the end customer.</p>

<h3>Retailer</h3>

<p>The <strong>retail</strong> stage is where the produce is sold to individual customers. Retail stores might have their own 
delivery vans that add more fuel costs.</p>

<p>The <strong>Total Fuel Cost Per Customer</strong> includes the carbon tax, but even without it there would still be fuel costs 
being passed onto the customer. The carbon tax is only <span class="customer-carbox-tax-amount"></span> 
(just <span class="customer-carbox-tax-percentage"></span> of the fuel cost).</p>

<p>And keep in mind that this is the amount that a store has to make from each customer in order to pay the fuel costs of the 
    entire delivery, but stores might not try to disperse the fuel costs that way. If they might instead divide the fuel cost by 
    the number of products in the truck or the store, instead of by the number of customers, which would make the dispersed cost 
    even smaller.</p>

<p>For example: if the cost of the fuel being passed to the retailer is $100 and there are 1,000 products in the truck, the fuel 
    cost is only $0.10 per item.</p>

</div>

</body>
<script src="js/carbon-tax-calculator.js"></script>
</html>