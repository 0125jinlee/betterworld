export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

export const displayImage = (arr, base) => {
  let num = Math.floor(Math.random() * 20);
  if (arr[num] === undefined) {
    arr[num] = 1;
    return num;
  } else if (arr[num] <= base) {
    arr[num]++;
    return num;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        arr[i] = 1;
        return i;
      } else if (arr[i] <= base) {
        arr[i]++;
        return i;
      }
    }
    let minIndex;
    for (let k = 0; k < arr.length; k++) {
      if (!minIndex) {
        minIndex = k;
      } else if (arr[minIndex] > arr[k]) {
        minIndex = k;
      }
    }
    arr[minIndex]++;
    base++;
    return minIndex;
  }
};

export const toTitleCase = str => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const cleanObj = postData => {
  for (let prop in postData) {
    if (postData[prop] === null || postData[prop] === undefined) {
      delete postData[prop];
    }
  }
  return postData;
};
