function pizzaCount(production_cost,sale_price,name)
{
    var net_profit;
    var taxes;
    production_cost = document.getElementById('custo').value;
    sale_price = document.getElementById('venda').value;
    name = document.getElementById('nome_pizza').value;
    if(production_cost.search(',') > 0)
    {
        production_cost = production_cost.replace(",", ".");
    }
    if(sale_price.search(',') > 0)
    {
        sale_price = sale_price.replace(",", ".");
    } 
    taxes = 0.089*sale_price;
    net_profit = sale_price - production_cost - taxes;
    net_profit = net_profit.toFixed(2);
    taxes = taxes.toFixed(2);
    document.getElementById('resultado').innerText = "Para a pizza "+name+" o lucro líquido é de "+"R$"+(net_profit.replace(".", ","))+" e o imposto é de R$"+(taxes.replace(".", ","));
}