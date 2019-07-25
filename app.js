const COMMA_ENTRIES = [ // First name, City, Birth date
  'Mckayla, Atlanta, 5/29/1986',
  'Elliot, New York City, 4/3/1947',
]
const DOLLAR_ENTRIES = [ // City, Birth date, Last name, First name
  'LA $ 10-4-1974 $ Nolan $ Rhiannon',
  'NYC $ 12-1-1962 $ Bruen $ Rigoberto',
]

// WRITE YOUR FUNCTIONS / CLASSES HERE
function stringReconstruct(comma, dollar) {

  const commaStrArr = comma && comma.map(str => {
    let commaStr = '';
    str.split(',').forEach(item => {
      commaStr = `${commaStr} ${item}`;
    });
    return commaStr.trim();
  });

  const rearranged = dollar && dollar.map(str => {
    const splitArr = str.split('$');
    const temp = splitArr[splitArr.length - 1];
    for (let i = splitArr.length - 1; i > 0; i--) {
      splitArr[i] = splitArr[i - 1];
    }
    splitArr[0] = temp;
    splitArr.pop();
    splitArr[splitArr.length-1] = formatDate(splitArr[splitArr.length-1]);
    return splitArr;
  });

  const dollarStrArr = rearranged.map(arr => {
    let dollarStr = arr.join(' ');
    return dollarStr.trim();
  });

  return [...commaStrArr, ...dollarStrArr];

}

function formatDate(date) {
  return date && date.split('-').join('/');
}

class App {
  static run({ comma = [], dollar = [] }) {
    // INVOKE YOUR MAGICAL CODE HERE
    return stringReconstruct(comma, dollar);
  }
}

const result = App.run({ comma: COMMA_ENTRIES, dollar: DOLLAR_ENTRIES })

console.log(result);
// Expected standard output:
//   Mckayla Atlanta 5/29/1986
//   Rhiannon Los Angeles 10/4/1974
//   Elliot New York City 4/3/1947
//   Rigoberto New York City 12/1/1962

// WRITE YOUR SPECS HERE

export {
  App,
  stringReconstruct,
  COMMA_ENTRIES,
  DOLLAR_ENTRIES
}