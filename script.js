// Define your routine schedule
const routine = [
  { time: '04:30 - 05:00', task: 'Exercise and morning routine' },
  { time: '05:00 - 06:00', task: 'Pray and Breakfast' },
  { time: '06:00 - 07:00', task: 'Worship and ready to study' },
  { time: '07:00 - 08:30', task: 'Session 0 (Read Documentation)' },
  { time: '08:30 - 09:00', task: 'Break (relax, stretch, etc.)' },
  { time: '09:00 - 10:00', task: 'Break (lunch and rest)' },
  { time: '10:00 - 11:00', task: 'Session 1(Code Projects)' },
  { time: '11:00 - 12:00', task: 'Break (Pray and rest)' },
  { time: '12:00 - 13:30', task: 'Session 2 (Take some courses)' },
  { time: '13:30 - 14:30', task: 'Language Learning And Lunch' },
  { time: '14:30 - 15:30', task: 'Session 3 (Practice)' },
  { time: '15:30 - 16:30', task: 'Do whatever you want' },
  { time: '16:30 - 17:30', task: 'Session 4 (Review and revise)' },
  { time: '17:30 - 18:00', task: 'Reading Books' },
  { time: '18:00 - 19:30', task: 'Project work' },
  { time: '19:30 - 20:30', task: 'Dinner' },
  { time: '20:30 - 21:00', task: 'Pray' },
  { time: '21:00 - 22:00', task: 'Journal and make To-do list for tomorrow' },
  { time: '22:00', task: 'Sleep' }
];

// Function to update current task and remaining time
function updateSchedule() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  console.log(currentHour+":"+currentMinute);
  let currentTask = 'Sleep';
  let remainingTime = 'Until tomorrow morning';

  for (let i = 0; i < routine.length; i++) {
    const startTime = routine[i].time.split(' ')[0];
    const [startHour, startMinute] = startTime.split(':').map(Number);

    if (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) {
      currentTask = routine[i].task;
    } else {
      const remainingHours = startHour - currentHour;
      const remainingMinutes = startMinute - currentMinute;
      const minutes=remainingHours*60+remainingMinutes;
        remainingTime = `${minutes} minutes remaining`;
      
      break;
    }
  }

  // Update the DOM
  $('#currentTask').text(currentTask);
  $('#remainingTime').text(remainingTime);
}

// Update schedule on page load
$(document).ready(function() {
  updateSchedule();
  setInterval(updateSchedule, 1000); // Update every minute
});