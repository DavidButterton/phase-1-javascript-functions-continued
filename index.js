function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
};

const mondayWork = function(parameter = "go to the office") {
    return `This Monday, I will ${parameter}.`;
}

function wrapAdjective(flair = "*") {
    return function (param = "special") {
        return `You are ${flair}${param}${flair}!`
        }
    }

function outer(greeting, msg = "It's a fine day to learn") {
    return function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
  }
  
  outer("Hello")("student", "JavaScript");
  //=> "Hello, student! It's a fine day to learn JavaScript"
