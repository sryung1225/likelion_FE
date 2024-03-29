import { useRecoilState } from 'recoil';
import { dollerState, exchangeRateState, wonState } from './@store/exchangeState';

export default function ExchangePage() {

  const [exchangeRate, setExchangeRate] = useRecoilState(exchangeRateState);
  const [won, setWon] = useRecoilState(wonState);
  const [doller, setDoller] = useRecoilState(dollerState);

  return (
    <div>
      <h2>환율 변환 (with Atoms &amp; Selectors)</h2>
      <div>
        <label>
          환율(exchange rate)
          <input
            type="text"
            value={exchangeRate}
            onChange={(e) => setExchangeRate(Number(e.target.value))}
          // onChange={(e) => setExchangeRate(+e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          원(won)
          <input
            type="text"
            value={won}
            onChange={(e) => setWon(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          달러(doller)
          <input
            type="text"
            value={doller}
            onChange={(e) => setDoller(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  )
}