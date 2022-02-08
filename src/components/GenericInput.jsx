export default function GenericInput({ 
    inputLabel = 'Descrição do Label', 
    name = 'Nome do input', 
    type = 'tipo do input', 
    id = 'id', 
    inputClass = 'classes do input', 
    onInputChange = null, 
    inputValue = 'Valor padrão do input',
    autoFocus = false,
    divClass = ''
 }) {

    function handleInputValue({currentTarget}) {
        if (onInputChange) {
            const newValue = currentTarget.value
            onInputChange(newValue)
        }
    }

  return(
      <div className={divClass}>
          <label htmlFor={id}>{inputLabel}</label>
          <input type={type} id={id} className={inputClass} name={name} onChange={handleInputValue} value={inputValue} autoFocus={autoFocus} ></input>
      </div>
  );
}
