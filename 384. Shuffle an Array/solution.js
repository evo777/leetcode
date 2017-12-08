const Solution = (nums) => {
    this.nums = nums;
};

Solution.prototype.reset = function() {
    return this.nums;
};

Solution.prototype.shuffle = function() {
    const shuffle = (a) => {
    const length = a.length;
    const shuffled = Array(length);

    for (let i = 0, rand; i < length; i++) {
      rand = ~~(Math.random() * (i + 1));
      if (rand !== i)
        shuffled[i] = shuffled[rand];
      shuffled[rand] = a[i];
    }

    return shuffled;
  }

  return shuffle(this.nums);
};