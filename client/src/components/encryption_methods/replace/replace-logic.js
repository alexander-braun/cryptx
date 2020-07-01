const replace = (() => {
  let userInput, toReplaceLetter, replaceLetter;

  const setUserInput = (value) => {
    userInput = value;
  };

  const setToReplaceLetter = (value) => {
    toReplaceLetter = value;
  };

  const setReplaceLetter = (value) => {
    replaceLetter = value;
  };

  const replaceAll = (str1, str2, ignore) => {
    return userInput.replace(
      new RegExp(
        str1.replace(/([/,!\\^${}[\]().*+?|<>\-&])/g, '\\$&'),
        ignore ? 'gi' : 'g'
      ),
      typeof str2 == 'string' ? str2.replace(/\$/g, '$$$$') : str2
    );
  };

  const encrypt = (input, toReplaceLetter, replaceLetter) => {
    setAll(input, toReplaceLetter, replaceLetter);
    return replaceAll(toReplaceLetter, replaceLetter, true);
  };

  const setAll = (input, toReplaceLetter, replaceLetter) => {
    setUserInput(input);
    setToReplaceLetter(toReplaceLetter);
    setReplaceLetter(replaceLetter);
  };

  return {
    encrypt: encrypt,
    setAll: setAll,
  };
})();

export default replace;
