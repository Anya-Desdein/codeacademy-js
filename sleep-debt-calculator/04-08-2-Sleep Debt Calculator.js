const prompts = require('prompts');

const dayOfTheWeekNames = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const validateIdealHourPromptFn = val => {
  if(val === "") return true;
  if(val < 1) return "You don't like to sleep well. Enter at least one hour.";
  else if(val > 20) return "This program doesn't support hibernating species. Please enter value lower than 20.";
  else return true;
};

const validateActualHourPromptFn = val => {
  if(val === "") return true;
  if(val < 0) return "Don't be negative about your sleep.";
  else if(val > 24) return "It's impossible to sleep more than 24 hours in a day.";
  else return true;
};

const getActualSleepHoursCurrentWeek = async () => {
  const replies = await prompts(dayOfTheWeekNames.map(dayName => ({
    type: 'number',
    name: dayName,
    message: `Enter your sleep duration for ${dayName}`,
    validate: validateActualHourPromptFn
  })));
  return Object.values(replies).reduce((prev, curr) => prev + curr);
};

const getidealSleepHoursPerWeek = async () => {
  const { provideValuesSeparately } = await prompts({
    type: 'select',
    name: 'provideValuesSeparately',
    message: 'Would you like to specify your ideal sleep duration for each day of the day separately?',
    choices: [
      { title: 'Average daily sleep hours', value: false },
      { title: 'Enter each day individually', value: true },
    ]
  });

  if(provideValuesSeparately) {
    const replies = await prompts(dayOfTheWeekNames.map(dayName => ({
      type: 'number',
      name: dayName,
      message: `Enter your ideal sleep duration for ${dayName}`,
      initial: 7.5,
      validate: validateIdealHourPromptFn
    })));

    return Object.values(replies).reduce((prev, curr) => prev + curr);
  }else{
    const {value} = await prompts({
      type: 'number',
      name: 'value',
      message: 'Enter your ideal daily sleep duration in hours',
      initial: 7.5,
      validate: validateIdealHourPromptFn
    });
    
    return value * 7;
  }
};

const calculateSleepDebt = async () => {
  console.log("Enter your sleep target:");
  const idealSleepHours = await getidealSleepHoursPerWeek();
  console.log("Enter the number of hours you've slept in the past 7 days:");
  const actualSleepHours = await getActualSleepHoursCurrentWeek();
  if (idealSleepHours === actualSleepHours) {
    console.log(`Spałeś ${actualSleepHours}, jest to idealna wartosc.`)
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`Spałeś ${actualSleepHours}, o  ${actualSleepHours - idealSleepHours} za duzo.`)
  } else {
    console.log(`Spałeś ${actualSleepHours}, o ${idealSleepHours - actualSleepHours} za malo.`)
  }
}

calculateSleepDebt();
