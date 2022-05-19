const EventEmitter = require('events'); // used to create fake clicks
const eventEmitter = new EventEmitter(); // used to initialize the beforementioned

function FrameWork() // creates a the 'framework' function
{
  let state = {}; // declares 'state' object
  let stateCounter = {}; // declares 'stateCounter' object

  function useState(value) // calls 'useState' function
  {
    const callerName = arguments.callee.caller.name; 
    const callerArguments = arguments.callee.caller.arguments;

    if (typeof stateCounter[callerName] === 'undefined') {
      stateCounter[callerName] = 0;
    }

    const stateName = callerName + stateCounter[callerName];
    if (typeof state[stateName] === 'undefined') {
      state[stateName] = { value: value, component: arguments.callee.caller };
    }
    stateCounter[callerName]++;

    const setter = (newValue) => {
      if (typeof newValue !== 'function') {
        state[stateName].value = newValue;
      } else {
        state[stateName].value = newValue(state[stateName].value);
      }

      stateCounter[callerName] = 0;
      state[stateName].component(...callerArguments);
    };

    return [state[stateName].value, setter];
  }

  const FirstComponent = function ({ onClick }) { // creates const 'FirstComponent' which is an onClick function
    const [name, setName] = useState('Antwan'); // sets the const array equal to useState('Antwan')

    eventEmitter.once('fakeClick', () => { // simulates a click
      setName('Bas'); // sets the clicker 
      onClick(); // adds clicker
    });

    console.log(`My name is ${name}`);
  };
  FirstComponent({ onClick: () => console.log('first instance') });
  FirstComponent({ onClick: () => console.log('second instance') });

  const SecondComponent = function () { // creates const 'SecondComponent' which is a function
    const [counter, setCounter] = useState(0);// adds const array as useState(0)
    const [list, setList] = useState(['Dancing']); // adds const array with useState(['Dancing'])

    eventEmitter.once('fakeClick', () => setCounter(10)); // initializes a click 10 times
    eventEmitter.once('fakeClick', () => setCounter((oldCounter) => oldCounter + 1)); // added one more click
    eventEmitter.once('fakeClick', () => setList((oldList) => { 
      oldList.push('Do groceries'); // added to array
      oldList.push('Listen music'); // added to array
      return oldList; //
    }));

    console.log(`I count ${counter}, and my list contains ${list.join(', ')}`);
  };
  SecondComponent();

  eventEmitter.emit('fakeClick');
  console.log(state);
}

FrameWork();
