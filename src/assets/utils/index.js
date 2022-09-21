export const t = (word, count) => {
    if (count === 1) return count + ' ' + word;
    else return count + ' ' + word + 's';
}
