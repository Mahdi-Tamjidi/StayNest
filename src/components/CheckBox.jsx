const CheckBox = ({ label, selected = false, onChange }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

export default CheckBox;
