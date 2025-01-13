function splitStringUsingRegex(text) {
  const characters = [];
  const regex = /[\s\S]/g; // single character

  let match;

  while ((match = regex.exec(text)) !== null) {
    characters.push(match[0]);
  }

  return characters;
}

export default splitStringUsingRegex;
