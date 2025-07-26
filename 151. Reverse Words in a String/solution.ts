function reverseWords(s: string): string {
  if (s.trim().length === 0) {
    return "";
  }

  const result: string[] = [];
  const wordsArr: string[] = s.split(" ");

  for (let i = wordsArr.length - 1; i >= 0; i--) {
    if (wordsArr[i] !== "") {
      result.push(wordsArr[i]);
    }
  }

  return result.join(" ");
}
