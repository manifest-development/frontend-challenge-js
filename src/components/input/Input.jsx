import * as Styled from "./styles";

function Input({
  type,
  label,
  onChange,
  value,
  inputLabelCaption,
  id,
  ...inputProps
}) {
  if (type === "select") {
    return (
      <Styled.InputWrapper>
        <label htmlFor={id}>
          {label} {inputLabelCaption && <span>{inputLabelCaption}</span>}
        </label>
        <Styled.InputDiv>
          <select onChange={onChange} value={value} id={id}>
            {!value && <option>Select your education level</option>}
            {inputProps.options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </Styled.InputDiv>
      </Styled.InputWrapper>
    );
  }
  return (
    <Styled.InputWrapper>
      <label htmlFor={id}>
        {label} {inputLabelCaption && <span>{inputLabelCaption}</span>}
      </label>
      <Styled.InputDiv>
        <input
          type={type}
          id={id}
          onChange={onChange}
          value={value}
          {...inputProps}
        />
      </Styled.InputDiv>
    </Styled.InputWrapper>
  );
}

export default Input;
