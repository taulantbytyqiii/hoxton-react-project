export function Checkbox({ name, title, type, setFullTime }: any) {
  return (
    <div className="checkbox-unit">
      <input
        type={type}
        className="checkbox"
        id={name}
        name={name}
        onChange={(e) => {
          setFullTime(e.target.checked);
        }}
      />
      <label htmlFor={name}>{title}</label>
    </div>
  );
}
