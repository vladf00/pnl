import React, { useState } from 'react';

function PnlCalculator() {
    const [capex, setCapex] = useState('');
    const [opex, setOpex] = useState('');
    const [contractPeriod, setContractPeriod] = useState('');
    const [monthlyRevenue, setMonthlyRevenue] = useState('');
    const [result, setResult] = useState(null);

    const calculatePnL = () => {
        const totalRevenue = monthlyRevenue * contractPeriod;
        const totalCosts = capex + (opex * contractPeriod);
        const pnl = totalRevenue - totalCosts;
        const profitMargin = totalRevenue > 0 ? (pnl / totalRevenue) * 100 : 0;

        setResult({
            pnl: pnl.toFixed(2),
            profitMargin: profitMargin.toFixed(2),
        });
    };

    return (
        <div>
            <h1>Profit & Loss Calculator</h1>
            <div>
                <label>CAPEX:</label>
                <input
                    type="number"
                    value={capex}
                    onChange={(e) => setCapex(Number(e.target.value))}
                />
            </div>
            <div>
                <label>OPEX:</label>
                <input
                    type="number"
                    value={opex}
                    onChange={(e) => setOpex(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Contract Period (months):</label>
                <input
                    type="number"
                    value={contractPeriod}
                    onChange={(e) => setContractPeriod(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Monthly Revenue:</label>
                <input
                    type="number"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                />
            </div>
            <button onClick={calculatePnL}>Calculate</button>
            {result && (
                <div>
                    <h2>Results</h2>
                    <p>Profit: ${result.pnl}</p>
                    <p>Profit Margin: {result.profitMargin}%</p>
                </div>
            )}
        </div>
    );
}

export default PnlCalculator;
