const twoSum = (nums, target) => {
    let map = [];

    for(let i = 0; i < nums.length; i++) {
        let found = target - nums[i];
        if(map[nums[i]] !== undefined) {
            return [map[nums[i]], i]
        } else {
            map[found] = i;
        }
    }

    return [];
};