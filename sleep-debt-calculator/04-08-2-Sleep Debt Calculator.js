const prompts = require('prompts');

const dayOfTheWeekSleep = {
  monday: 6,
  tuesday: 4,
  wednesday: 4,
  thursday: 13,
  friday: 12,
  saturday: 8,
  sunday: 8,
};
const dayOfTheWeekNames = Object.keys(dayOfTheWeekSleep);

const validateHourPromptFn = val => {
  if(val === "") return true;
  if(val < 1) return "You don't like to sleep well. Enter at least one hour.";
  else if(val > 20) return "This program doesn't support hibernating species. Please enter value lower than 20.";
  else return true;
};

const getActualSleepHoursCurrentWeek = () => {
    let sleepHoursWeek = 0;
    for (let i = 0; i < 7; i++) {
      const day = dayOfTheWeekNames[i];
      sleepHoursWeek += dayOfTheWeekSleep[day];
    }
    return sleepHoursWeek;
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
      validate: validateHourPromptFn
    })));

    return Object.values(replies).reduce((prev, curr) => prev + curr);
  }else{
    const {value} = await prompts({
      type: 'number',
      name: 'value',
      message: 'Enter your ideal daily sleep duration in hours',
      initial: 7.5,
      validate: validateHourPromptFn
    });
    
    return value * 7;
  }
};

const calculateSleepDebt = async () => {
  const actualSleepHours = getActualSleepHoursCurrentWeek();
  const idealSleepHours = await getidealSleepHoursPerWeek();
  if (idealSleepHours === actualSleepHours) {
    console.log(`Spałeś ${actualSleepHours}, jest to idealna wartosc.`)
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`Spałeś ${actualSleepHours}, o  ${actualSleepHours - idealSleepHours} za duzo.`)
  } else {
    console.log(`Spałeś ${actualSleepHours}, o ${idealSleepHours - actualSleepHours} za malo.`)
  }
}

calculateSleepDebt();
