const dayOfTheWeekSleep = {
  monday: 6,
  tuesday: 4,
  wednesday: 4,
  thursday: 13,
  friday: 12,
  saturday: 8,
  sunday: 8,
};
const validChoicesArray = Object.keys(dayOfTheWeekSleep);

const getSleepHours = (day) => {
  day = day.toLowerCase();
  if (day in dayOfTheWeekSleep) {
    return dayOfTheWeekSleep[day];
  }
  console.log(`Wrong user input.`);
};

const getActualSleepHoursCurrentWeek = () => {
  let sleepHoursWeek = 0;
  for (let i = 0; i < 7; i++) {
    const day = validChoicesArray[i];
    sleepHoursWeek += getSleepHours(day);
  }
  return sleepHoursWeek;
};

const getidealSleepHoursPerWeek = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHoursCurrentWeek();
  const idealSleepHours = getidealSleepHoursPerWeek();

  if (idealSleepHours === actualSleepHours) {
    console.log(`Spałeś ${actualSleepHours}, jest to idealna wartosc.`)
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`Spałeś ${actualSleepHours}, o  ${actualSleepHours - idealSleepHours} za duzo.`)
  } else {
    console.log(`Spałeś ${actualSleepHours}, o ${idealSleepHours - actualSleepHours} za malo.`)
  }
}

calculateSleepDebt();



