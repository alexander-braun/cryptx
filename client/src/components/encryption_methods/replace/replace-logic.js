const replace = (() => {
  const replaceAll = (str1, str2, ignore, userInput) => {
    return userInput.replace(
      new RegExp(
        str1.replace(/([/,!\\^${}[\]().*+?|<>\-&])/g, '\\$&'),
        ignore ? 'gi' : 'g'
      ),
      typeof str2 == 'string' ? str2.replace(/\$/g, '$$$$') : str2
    );
  };

  const encrypt = (input, toReplaceLetter, replaceLetter) => {
    return replaceAll(toReplaceLetter, replaceLetter, true, input);
  };

  return {
    encrypt: encrypt,
  };
})();

export default replace;
