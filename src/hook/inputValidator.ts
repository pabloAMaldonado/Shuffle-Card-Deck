
const inputValidator = ({ value, numberValue }: {
    value: number | string,
    numberValue: number,
}) => {
    let setErrorMsg = '';
    let setUserNumber: string | number = value;

    if (value === '') {
        setErrorMsg = 'Input cannot be empty';
        setUserNumber = '';
      }
  
      if (isNaN(numberValue)) {
        setErrorMsg = 'Input must be a number';
        setUserNumber = value;
      }
  
      if (typeof numberValue === 'number') {
      
       if (numberValue < 1 || numberValue > 10000) {
        setErrorMsg = 'Input must be a number between 1 and 10000';
        setUserNumber = value;
      } else {
        setErrorMsg = '';
        setUserNumber = numberValue;
      }
    }

    return { setErrorMsg, setUserNumber }
}

export default inputValidator