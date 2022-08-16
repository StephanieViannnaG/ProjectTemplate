import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  Legend,
  Symbols,
  Surface
} from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import './global.css';

const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random()
  });
}

export default function MessageOT() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        {/* <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs> */}

        <Area dataKey="value" stroke="#F5C4AF" fill="#F5C4AF" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, 'MMM, d');
            }
            return '';
          }}
        />

        <YAxis
          datakey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />

        <Tooltip content={<CustomTooltip />} />
        <Legend content={renderLegend} align="right" layout="vertical" verticalAlign="top" />
        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), 'eeee, d MMM, yyyy')}</h4>
        <p>${payload[0].value.toFixed(2)} CAD</p>
      </div>
    );
  }
  return null;
}

const renderLegend = (props) => {
  const { payload } = props;
  console.log('payload', payload);
  return (
    <>
      {payload.map((entry) => (
        <>
          Host Type
          <Surface
            width={10}
            height={10}
            viewBox="0 0 10 10"
            style={{ marginLeft: '5px', marginRight: '10px' }}>
            <Symbols cx={5} cy={5} type="circle" size={150} fill={'#000'} />
          </Surface>
          {entry.value}
        </>
      ))}
    </>
  );
};
