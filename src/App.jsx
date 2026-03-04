import { useState } from 'react';
import ProductStrategyPage from './pages/ProductStrategyPage';
import PayInFullPage from './pages/PayInFullPage';
import HealthyPayoutPage from './pages/HealthyPayoutPage';
import UnhealthyPayoutPage from './pages/UnhealthyPayoutPage';

const TABS = [
  { key: 'strategy', label: 'Product Strategy' },
  { key: 'payinfull', label: 'Pay In Full' },
  { key: 'healthy', label: 'Healthy Payout' },
  { key: 'unhealthy', label: 'Unhealthy Payout' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('strategy');

  // Calculator state — persists across tab switches
  const [faceValue, setFaceValue] = useState(10000);
  const [customerAge, setCustomerAge] = useState(65);
  const [paymentTermYears, setPaymentTermYears] = useState(5);
  const [earnRate, setEarnRate] = useState(4.5);
  const [yearsUntilClaim, setYearsUntilClaim] = useState(10);
  const [financeChargeRate, setFinanceChargeRate] = useState(7);
  const [tjmTaxRate, setTjmTaxRate] = useState(5);
  const [trustTaxRate, setTrustTaxRate] = useState(10);
  const [passThroughTaxRate, setPassThroughTaxRate] = useState(37);
  const [dividendExitTaxRate, setDividendExitTaxRate] = useState(20);
  const [overrideMonthlyRate, setOverrideMonthlyRate] = useState('');
  const [guaranteedRate, setGuaranteedRate] = useState(2);
  const [trustEarnRate, setTrustEarnRate] = useState(4.5);

  return (
    <div className="min-h-screen bg-navy-50">
      {/* Header */}
      <header className="bg-navy-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-navy-900 text-lg">TJM</div>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">TJM Life Insurance Company</h1>
              <p className="text-navy-300 text-sm">Preneed Product Comparison Calculator</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <nav className="flex gap-1 -mb-px">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === tab.key
                    ? 'bg-navy-50 text-navy-900'
                    : 'text-navy-300 hover:text-white hover:bg-navy-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Page Content */}
      {activeTab === 'strategy' && <ProductStrategyPage />}
      {activeTab === 'payinfull' && (
        <PayInFullPage
          faceValue={faceValue} setFaceValue={setFaceValue}
          customerAge={customerAge} setCustomerAge={setCustomerAge}
          earnRate={earnRate} setEarnRate={setEarnRate}
          yearsUntilClaim={yearsUntilClaim} setYearsUntilClaim={setYearsUntilClaim}
          tjmTaxRate={tjmTaxRate} setTjmTaxRate={setTjmTaxRate}
          trustTaxRate={trustTaxRate} setTrustTaxRate={setTrustTaxRate}
          passThroughTaxRate={passThroughTaxRate} setPassThroughTaxRate={setPassThroughTaxRate}
          dividendExitTaxRate={dividendExitTaxRate} setDividendExitTaxRate={setDividendExitTaxRate}
          guaranteedRate={guaranteedRate} setGuaranteedRate={setGuaranteedRate}
          trustEarnRate={trustEarnRate} setTrustEarnRate={setTrustEarnRate}
        />
      )}
      {activeTab === 'healthy' && (
        <HealthyPayoutPage
          faceValue={faceValue} setFaceValue={setFaceValue}
          customerAge={customerAge} setCustomerAge={setCustomerAge}
          paymentTermYears={paymentTermYears} setPaymentTermYears={setPaymentTermYears}
          earnRate={earnRate} setEarnRate={setEarnRate}
          yearsUntilClaim={yearsUntilClaim} setYearsUntilClaim={setYearsUntilClaim}
          financeChargeRate={financeChargeRate} setFinanceChargeRate={setFinanceChargeRate}
          tjmTaxRate={tjmTaxRate} setTjmTaxRate={setTjmTaxRate}
          trustTaxRate={trustTaxRate} setTrustTaxRate={setTrustTaxRate}
          passThroughTaxRate={passThroughTaxRate} setPassThroughTaxRate={setPassThroughTaxRate}
          dividendExitTaxRate={dividendExitTaxRate} setDividendExitTaxRate={setDividendExitTaxRate}
          overrideMonthlyRate={overrideMonthlyRate} setOverrideMonthlyRate={setOverrideMonthlyRate}
          guaranteedRate={guaranteedRate} setGuaranteedRate={setGuaranteedRate}
          trustEarnRate={trustEarnRate} setTrustEarnRate={setTrustEarnRate}
        />
      )}
      {activeTab === 'unhealthy' && (
        <UnhealthyPayoutPage
          faceValue={faceValue} setFaceValue={setFaceValue}
          customerAge={customerAge} setCustomerAge={setCustomerAge}
          paymentTermYears={paymentTermYears} setPaymentTermYears={setPaymentTermYears}
          earnRate={earnRate} setEarnRate={setEarnRate}
          yearsUntilClaim={yearsUntilClaim} setYearsUntilClaim={setYearsUntilClaim}
          financeChargeRate={financeChargeRate} setFinanceChargeRate={setFinanceChargeRate}
          tjmTaxRate={tjmTaxRate} setTjmTaxRate={setTjmTaxRate}
          trustTaxRate={trustTaxRate} setTrustTaxRate={setTrustTaxRate}
          passThroughTaxRate={passThroughTaxRate} setPassThroughTaxRate={setPassThroughTaxRate}
          dividendExitTaxRate={dividendExitTaxRate} setDividendExitTaxRate={setDividendExitTaxRate}
          guaranteedRate={guaranteedRate} setGuaranteedRate={setGuaranteedRate}
          trustEarnRate={trustEarnRate} setTrustEarnRate={setTrustEarnRate}
        />
      )}
    </div>
  );
}
