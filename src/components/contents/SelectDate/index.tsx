import './SelectDate.scss'

type SelectProps = {
  value: 'asc' | 'desc';
  onChange: (value: 'asc' | 'desc') => void;
  className?: string;
};

const SelectDate: React.FC<SelectProps> = ({ className, value, onChange }) => (
  <select className={`select-date ${className}`} value={value} onChange={(e) => onChange(e.target.value as 'asc' | 'desc')}>
    <option value="asc">Date Ascending</option>
    <option value="desc">Date Descending</option>
  </select>
);

export default SelectDate;