interface IUtils {
  displayItem: string[];
  setDisplayItem: React.Dispatch<React.SetStateAction<string[]>>;
}

const checkIsTwoOperatorInLine = ({displayItem, setDisplayItem}: IUtils) => {
  for (let i = 0; i < displayItem.length - 1; i++) {
    if (
      ['+', '/', 'x', '-', '%'].includes(displayItem[i]) &&
      ['+', '/', 'x', '-', '%'].includes(displayItem[i + 1])
    ) {
      displayItem.pop();
      setDisplayItem([...displayItem]);
      return;
    }
  }
};

const calculateExpression = ({displayItem, setDisplayItem}: IUtils) => {
  if (['+', 'x', '-', '/', '%'].includes(displayItem[displayItem.length - 1])) {
    displayItem.pop();
  }

  let expression = displayItem.join('').replaceAll('x', '*');

  if (['+', '*', '-', '/', '%'].includes(expression[0])) {
    expression = '0' + expression;
  }

  // eslint-disable-next-line no-new-func
  const result = Function(`return ${expression}`)();

  setDisplayItem(['=', result]);
};

const handleClickEvent = ({
  displayItem,
  setDisplayItem,
  value,
}: IUtils & {value: string}) => {
  checkIsTwoOperatorInLine({displayItem, setDisplayItem});

  if (displayItem[0] === '=') {
    displayItem.shift();
    setDisplayItem([...displayItem]);
  }

  if (value === 'C') {
    setDisplayItem(['0']);
    return;
  }

  if (value === '<-') {
    displayItem.pop();
    setDisplayItem([...displayItem]);
    if (displayItem.length === 0) {
      setDisplayItem(['0']);
    }
    return;
  }

  if (displayItem[0] === '0') {
    displayItem.pop();
  }

  if (value === '=') {
    calculateExpression({displayItem, setDisplayItem});
    return;
  }
  setDisplayItem([...displayItem, value]);
};

export {calculateExpression, checkIsTwoOperatorInLine, handleClickEvent};
