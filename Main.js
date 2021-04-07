const input = {
  friends: [
    {
      A: "B"
    },
    {
      A: "D"
    },
    {
      C: "B"
    },
    {
      C: "F"
    },
    {
      E: "F"
    }
  ]
};


var final_json = {};

input.friends.forEach((value, index) => {
  let key = Object.keys(value)[0];
  let val = Object.values(value)[0];


    //logic to calculate the follow
  //if the key is present in the object push the value
  if (final_json[key]) {
    final_json[key].follow.push(val);
  } else {
    //if the key is not present in the object,so first create the object then push the value
    final_json[key] = { follow: [], followedBy: [] };
    final_json[key].follow.push(val);
  }


  //logic to calculate the followed by
  //if the key is present in the object push the value
  if (final_json[val]) {
    final_json[val].followedBy.push(key);
  } else {
    //if the key is not present in the object,so first create the object then push the value
    final_json[val] = { follow: [], followedBy: [] };
    final_json[val].followedBy.push(key);
  }
});
// final value is stored in "final_json"
console.log(final_json);
