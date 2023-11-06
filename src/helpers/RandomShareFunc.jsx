export const RandomShareFunc = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let endpoint = "";
  let numbersCount = 0;

  while (endpoint.length < 12) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters[randomIndex];

    if (randomChar >= "0" && randomChar <= "9") {
      numbersCount++;
    }

    endpoint += randomChar;
  }

  if (numbersCount < 3) {
    return RandomShareFunc();
  }

  return endpoint;
};

export default RandomShareFunc;
