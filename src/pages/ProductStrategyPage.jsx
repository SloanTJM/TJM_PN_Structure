export default function ProductStrategyPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-8">
      {/* Page Header */}
      <div>
        <h2 className="text-xl font-bold text-navy-800">Product Strategy Decision Tree</h2>
        <p className="text-sm text-navy-500 mt-1">Use this flowchart to determine the right preneed product based on customer health status and payment preference.</p>
      </div>

      {/* Decision Tree Flowchart */}
      <section className="bg-white rounded-xl shadow-sm border border-navy-100 p-6 overflow-x-auto">
        <div className="min-w-[900px] flex flex-col items-center gap-0">
          {/* Start Node */}
          <div className="bg-navy-800 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md">
            New Preneed Customer
          </div>

          {/* Connector */}
          <div className="w-0.5 h-8 bg-navy-300"></div>

          {/* Health Question */}
          <div className="bg-amber-50 border-2 border-amber-400 px-6 py-3 rounded-xl text-sm font-semibold text-amber-800 shadow-sm">
            What is the customer's health status?
          </div>

          {/* Three-way branch */}
          <div className="flex items-start w-full max-w-4xl">
            {/* Left branch — Healthy */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-0.5 h-8 bg-green-400"></div>
              <div className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-300">HEALTHY</div>
              <div className="w-0.5 h-8 bg-green-400"></div>

              <div className="bg-blue-50 border-2 border-blue-400 px-4 py-2.5 rounded-xl text-xs font-semibold text-blue-800 shadow-sm text-center">
                Payment preference?
              </div>

              <div className="flex items-start w-full">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-blue-300"></div>
                  <div className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Pay In Full</div>
                  <div className="w-0.5 h-6 bg-blue-300"></div>
                  <div className="bg-green-600 text-white px-3 py-2 rounded-lg text-xs font-bold shadow text-center leading-tight">
                    Route A<br />
                    <span className="font-normal text-green-100">Single-Pay Annuity</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-blue-300"></div>
                  <div className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Monthly</div>
                  <div className="w-0.5 h-6 bg-blue-300"></div>
                  <div className="bg-green-600 text-white px-3 py-2 rounded-lg text-xs font-bold shadow text-center leading-tight">
                    Route B<br />
                    <span className="font-normal text-green-100">Multi-Pay WL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center branch — Answer Yes to Health Qs */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-0.5 h-8 bg-amber-400"></div>
              <div className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-300 text-center leading-tight">ANSWER YES<br/><span className="font-normal text-[10px]">to health questions</span></div>
              <div className="w-0.5 h-8 bg-amber-400"></div>

              <div className="bg-blue-50 border-2 border-blue-400 px-4 py-2.5 rounded-xl text-xs font-semibold text-blue-800 shadow-sm text-center">
                Payment preference?
              </div>

              <div className="flex items-start w-full">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-blue-300"></div>
                  <div className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Pay In Full</div>
                  <div className="w-0.5 h-6 bg-blue-300"></div>
                  <div className="bg-amber-600 text-white px-3 py-2 rounded-lg text-xs font-bold shadow text-center leading-tight">
                    Route C<br />
                    <span className="font-normal text-amber-100">Single-Pay Annuity</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-blue-300"></div>
                  <div className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Monthly</div>
                  <div className="w-0.5 h-6 bg-blue-300"></div>
                  <div className="bg-amber-600 text-white px-3 py-2 rounded-lg text-xs font-bold shadow text-center leading-tight">
                    Route D<br />
                    <span className="font-normal text-amber-100 text-[10px]">A: Graded Death Benefit</span><br />
                    <span className="font-normal text-amber-100 text-[10px]">B: Trust + Interest</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right branch — Terminal */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-0.5 h-8 bg-red-400"></div>
              <div className="text-xs font-bold text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-300">TERMINAL</div>
              <div className="w-0.5 h-8 bg-red-400"></div>

              <div className="bg-blue-50 border-2 border-blue-400 px-4 py-2.5 rounded-xl text-xs font-semibold text-blue-800 shadow-sm text-center">
                Payment preference?
              </div>

              <div className="flex items-start w-full">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-blue-300"></div>
                  <div className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Pay In Full</div>
                  <div className="w-0.5 h-6 bg-blue-300"></div>
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg text-xs font-bold shadow text-center leading-tight">
                    Route E<br />
                    <span className="font-normal text-red-100">Single-Pay Annuity</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-blue-300"></div>
                  <div className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Monthly</div>
                  <div className="w-0.5 h-6 bg-blue-300"></div>
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg text-xs font-bold shadow text-center leading-tight">
                    Route F<br />
                    <span className="font-normal text-red-100">Trust + Interest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Route A */}
        <RouteCard
          route="A"
          title="Single-Pay Annuity"
          subtitle="Healthy + Pay In Full"
          color="green"
          rows={[
            { condition: 'Customer is healthy', product: 'Single-Pay Annuity', commission: '7.5%', override: 'See schedule' },
            { condition: 'Immediate full funding', product: 'Annuity contract issued', commission: '', override: '' },
            { condition: 'Face value locked at issue', product: 'Death benefit = face value', commission: '', override: '' },
          ]}
        />

        {/* Route B */}
        <RouteCard
          route="B"
          title="Multi-Pay Whole Life"
          subtitle="Healthy + Monthly Payments"
          color="green"
          rows={[
            { condition: 'Customer is healthy', product: 'Multi-Pay Whole Life', commission: '7.5%', override: 'See schedule' },
            { condition: '3, 5, 10, or 20 yr terms', product: 'Rate from TJM rate card', commission: '', override: '' },
            { condition: 'Face value locked at issue', product: 'Death benefit = face value', commission: '', override: '' },
          ]}
        />

        {/* Route C */}
        <RouteCard
          route="C"
          title="Single-Pay Annuity"
          subtitle="Answer Yes + Pay In Full"
          color="amber"
          rows={[
            { condition: 'Answers Yes to health Qs', product: 'Single-Pay Annuity', commission: '7.5%', override: 'See schedule' },
            { condition: 'Immediate full funding', product: 'Annuity contract issued', commission: '', override: '' },
            { condition: 'Payout = account value', product: 'Family covers any shortfall', commission: '', override: '' },
          ]}
        />

        {/* Route D */}
        <div className="bg-white rounded-xl shadow-sm border border-navy-100 overflow-hidden">
          <div className="bg-amber-700 text-white px-5 py-3 flex items-center gap-3">
            <span className="bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow">D</span>
            <div>
              <div className="font-semibold text-sm">Answer Yes + Monthly Payments</div>
              <div className="text-xs opacity-80">Two product options</div>
            </div>
          </div>

          {/* Option A: Graded Death Benefit */}
          <div className="px-5 py-3 bg-purple-50 border-b border-purple-200">
            <h4 className="text-xs font-bold text-purple-700 uppercase tracking-wide mb-1">Option A — Graded Death Benefit</h4>
            <p className="text-xs text-purple-600">Return of premium during graded period if amount paid in exceeds the amount the family will get credit for.</p>
          </div>
          <div className="overflow-x-auto border-b border-navy-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-50 text-navy-600 text-xs uppercase tracking-wider">
                  <th className="px-4 py-2 text-left">Condition</th>
                  <th className="px-4 py-2 text-left">Product Detail</th>
                  <th className="px-4 py-2 text-right">Commission</th>
                  <th className="px-4 py-2 text-right">Override</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { condition: 'Answers Yes to health Qs', product: 'Graded Death Benefit', commission: '7.5%', override: 'See schedule' },
                  { condition: 'Graded: 25/50/75/100% over 4 yrs', product: '3, 5, 10, or 20 yr terms', commission: '', override: '' },
                  { condition: 'Death benefit = graded face value', product: 'Return of premium if paid > benefit', commission: '', override: '' },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-navy-100 ${i % 2 === 0 ? 'bg-white' : 'bg-navy-50'}`}>
                    <td className="px-4 py-2 text-navy-700">{row.condition}</td>
                    <td className="px-4 py-2 text-navy-600">{row.product}</td>
                    <td className="px-4 py-2 text-right font-mono text-navy-800 font-medium">{row.commission}</td>
                    <td className="px-4 py-2 text-right font-mono text-navy-800 font-medium">{row.override}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Option B: Trust + Interest */}
          <div className="px-5 py-3 bg-amber-50 border-b border-amber-200">
            <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Option B — Trust + Interest</h4>
            <p className="text-xs text-amber-800">Commission is ~half of Multi-Pay WL — these policies generally earn about half as much. Incentivizes writing healthy individuals into preneed.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-50 text-navy-600 text-xs uppercase tracking-wider">
                  <th className="px-4 py-2 text-left">Condition</th>
                  <th className="px-4 py-2 text-left">Product Detail</th>
                  <th className="px-4 py-2 text-right">Commission</th>
                  <th className="px-4 py-2 text-right">Override</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { condition: 'Answers Yes to health Qs', product: 'Trust + Interest', commission: '3%', override: 'See schedule' },
                  { condition: 'Commission on amount paid down', product: 'Monthly payments into trust', commission: '', override: '' },
                  { condition: 'Payout = account value', product: 'Family covers any shortfall', commission: '', override: '' },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-navy-100 ${i % 2 === 0 ? 'bg-white' : 'bg-navy-50'}`}>
                    <td className="px-4 py-2 text-navy-700">{row.condition}</td>
                    <td className="px-4 py-2 text-navy-600">{row.product}</td>
                    <td className="px-4 py-2 text-right font-mono text-navy-800 font-medium">{row.commission}</td>
                    <td className="px-4 py-2 text-right font-mono text-navy-800 font-medium">{row.override}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Route E */}
        <RouteCard
          route="E"
          title="Single-Pay Annuity"
          subtitle="Terminal + Pay In Full"
          color="red"
          rows={[
            { condition: 'Customer is terminal', product: 'Single-Pay Annuity', commission: '$100 flat', override: '$50' },
            { condition: 'Immediate full funding', product: 'Annuity contract issued', commission: '', override: '' },
            { condition: 'Payout = account value', product: 'Family covers any shortfall', commission: '', override: '' },
          ]}
        />

        {/* Route F */}
        <RouteCard
          route="F"
          title="Trust + Interest"
          subtitle="Terminal + Monthly Payments"
          color="red"
          rows={[
            { condition: 'Customer is terminal', product: 'Trust + Interest', commission: '$100 flat', override: '$50' },
            { condition: 'Requires 10% down payment', product: 'Monthly payments into trust', commission: '', override: '' },
            { condition: 'Payout = account value', product: 'Family covers any shortfall', commission: '', override: '' },
          ]}
        />
      </div>

      {/* Discussion Guide */}
      <section className="bg-white rounded-xl shadow-sm border border-navy-100 overflow-hidden">
        <div className="bg-navy-800 text-white px-6 py-4">
          <h2 className="text-lg font-semibold">Discussion Guide</h2>
          <p className="text-navy-300 text-xs mt-1">Key questions and talking points for productive preneed conversations</p>
        </div>
        <div className="px-6 py-6 space-y-6">
          <DiscussionItem
            question="Why would we write a single pay customer into an annuity rather than a single pay whole life policy?"
            bullets={[]}
          />
          <DiscussionItem
            question="Should we have a higher override on Multi-Pay as opposed to Trust + Interest?"
            bullets={[]}
          />
          <DiscussionItem
            question="Should we offer graded death benefit policies right now or do the Trust + Interest instead?"
            bullets={['Pros: Make more money per policy on the insurance side']}
          />
          <DiscussionItem
            question="For a healthy insurance company that is increasing reserves year over year and selling healthy policies, what types of tax rates do you normally see being paid each year?"
            bullets={[
              'We have a 2% declared rate.',
              'Investment earn rate of 20%.',
              'Is 5% good for modeling?',
            ]}
          />
          <DiscussionItem
            question="Question for CPA: Return of Premium on Graded Death Benefit Policies"
            bullets={[
              'Designing a graded death benefit whole life policy for preneed customers who fail simplified issue health screening.',
              'Graded period (years 1-2): Death benefit = the greater of (a) graded percentage of face value, or (b) total premiums paid to date. No interest added.',
              'Post-graded period (year 3+): Full face value death benefit. Return of premium floor no longer applies.',
              'Why the ROP floor matters: On higher-age customers with loaded premiums, cumulative premiums can exceed the graded percentage within year 1. Example: 75-year-old, $10,000 face, 5-year pay at $301.30/month. At month 12 they\'ve paid $3,615.60 but graded benefit at 25% is only $2,500.',
              'Impact to TJM Life: During graded period, TJM Life never pays more than premiums collected. Worst case is breakeven. After graded period, standard whole life mortality risk applies.',
              'Q1: Are there any tax implications to structuring the graded death benefit as return of premium vs percentage of face?',
              'Q2: Does the return of premium death benefit affect the §807 reserve calculation differently than a percentage-based graded schedule?',
              'Q3: Any issues with TDI approval for this structure on preneed-funded policies?',
            ]}
          />
          <DiscussionItem
            question="In reviewing FDLIC's policies we are seeing they pay the highest commission on single pay policies, but based on what we have seen the multipay is the most lucrative — why is this the case?"
            bullets={[]}
          />

          {/* Things to Consider */}
          <div className="mt-6 pt-6 border-t border-navy-200">
            <h3 className="text-sm font-semibold text-navy-800 mb-3">Things to Consider</h3>
            <ul className="space-y-2 text-sm text-navy-600 list-disc list-inside">
              <li>Insurance policies are more portable — they can be applied to other funeral homes in other areas. <span className="text-teal-700 font-medium">Sales tip.</span></li>
              <li>Insurance policies have a lower surrender value because it's based on the table of guaranteed values rather than 90% + growth for the trust. More defensible product for the business.</li>
              <li>Insurance money taxed at 20% before it goes into your pocket. Trust taxed at 37%.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Override Schedule */}
      <section className="bg-white rounded-xl shadow-sm border border-navy-100 overflow-hidden">
        <div className="bg-navy-800 text-white px-6 py-4">
          <h2 className="text-lg font-semibold">Override Schedule</h2>
          <p className="text-navy-300 text-xs mt-1">Override percentage is based on total annual volume sold. Terminal overrides are a flat $50 regardless of volume. Terminal policies do not contribute to override schedule volume.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-50 text-navy-600 text-xs uppercase tracking-wider">
                <th className="px-6 py-2.5 text-left">Annual Volume</th>
                <th className="px-6 py-2.5 text-right">Override %</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['$2 Million', '1.0%'],
                ['$3 Million', '1.25%'],
                ['$4 Million', '1.5%'],
                ['$5 Million', '1.75%'],
                ['$6 Million', '2.0%'],
                ['$7 Million', '2.0%'],
                ['$8 Million', '2.25%'],
                ['$9 Million', '2.25%'],
                ['$10 Million+', '2.5%'],
              ].map(([volume, rate], i) => (
                <tr key={volume} className={`border-b border-navy-100 ${i % 2 === 0 ? 'bg-white' : 'bg-navy-50'}`}>
                  <td className="px-6 py-2 text-navy-700 font-medium">{volume}</td>
                  <td className="px-6 py-2 text-right font-mono text-navy-800 font-semibold">{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer note */}
      <footer className="text-center text-xs text-navy-400 pb-8 px-4">
        <p>Commission and override rates are illustrative. Actual rates may vary by state and contract terms.</p>
      </footer>
    </main>
  );
}

function DiscussionItem({ question, bullets }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-navy-800">{question}</h3>
      {bullets.length > 0 ? (
        <ul className="mt-2 space-y-1.5 list-disc list-inside text-sm text-navy-600">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-navy-400 italic">Talking points pending</p>
      )}
    </div>
  );
}

function RouteCard({ route, title, subtitle, color, note, rows }) {
  const colorStyles = {
    green: { headerBg: 'bg-green-700', badge: 'bg-green-500' },
    amber: { headerBg: 'bg-amber-700', badge: 'bg-amber-500' },
    red: { headerBg: 'bg-red-700', badge: 'bg-red-500' },
  };
  const styles = colorStyles[color] || colorStyles.green;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-navy-100 overflow-hidden">
      <div className={`${styles.headerBg} text-white px-5 py-3 flex items-center gap-3`}>
        <span className={`${styles.badge} w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow`}>
          {route}
        </span>
        <div>
          <div className="font-semibold text-sm">{title}</div>
          <div className="text-xs opacity-80">{subtitle}</div>
        </div>
      </div>
      {note && (
        <div className="px-5 py-2 bg-amber-50 border-b border-amber-200 text-xs text-amber-800">
          {note}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy-50 text-navy-600 text-xs uppercase tracking-wider">
              <th className="px-4 py-2 text-left">Condition</th>
              <th className="px-4 py-2 text-left">Product Detail</th>
              <th className="px-4 py-2 text-right">Commission</th>
              <th className="px-4 py-2 text-right">Override</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-b border-navy-100 ${i % 2 === 0 ? 'bg-white' : 'bg-navy-50'}`}>
                <td className="px-4 py-2 text-navy-700">{row.condition}</td>
                <td className="px-4 py-2 text-navy-600">{row.product}</td>
                <td className="px-4 py-2 text-right font-mono text-navy-800 font-medium">{row.commission}</td>
                <td className="px-4 py-2 text-right font-mono text-navy-800 font-medium">{row.override}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
