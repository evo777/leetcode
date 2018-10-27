const isMatch = (s, p) => {
    const re = new RegExp('^' + p + '$')
    return re.test(s)
};