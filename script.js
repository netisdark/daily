// Define your routine schedule
const routine = [
  { time: '04:30 - 05:00', task: 'Exercise and morning routine' },
  { time: '05:00 - 06:00', task: 'Breakfast and prepare for study' },
  { time: '06:00 - 07:30', task: 'Tutorials and reading on backend development basics' },
  { time: '07:30 - 08:30', task: 'Coding practice and small projects' },
  { time: '08:30 - 09:00', task: 'Break (relax, stretch, etc.)' },
  { time: '09:00 - 10:00', task: 'Database fundamentals' },
  { time: '10:00 - 11:00', task: 'Break (lunch and rest)' },
  { time: '11:00 - 12:00', task: 'Server-side frameworks (choose one and focus)' },
  { time: '12:00 - 13:30', task: 'Break (relax or physical activity)' },
  { time: '13:30 - 14:30', task: 'Authentication and security principles' },
  { time: '14:30 - 15:30', task: 'Break (relax or short walk)' },
  { time: '15:30 - 16:30', task: 'Building APIs' },
  { time: '16:30 - 17:30', task: 'DevOps basics (dockerization, CI/CD)' },
  { time: '17:30 - 18:00', task: 'Dinner' },
  { time: '18:00 - 19:30', task: 'Advanced topics (GraphQL, WebSockets, microservices)' },
  { time: '19:30 - 20:30', task: 'Project work (build and deploy a full backend project)' },
  { time: '20:30 - 21:00', task: 'Review and revise the day\'s learning' },
  { time: '21:00 - 22:00', task: 'Relaxation (listen to music, unwind)' },
  { time: '22:00 - 22:30', task: 'Prepare for bed' },
  { time: '22:30', task: 'Sleep' }
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

      if (remainingHours > 0) {
        remainingTime = `${remainingHours} hours and ${remainingMinutes} minutes remaining`;
      } else {
        remainingTime = `${remainingMinutes} minutes remaining`;
      }
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
  setInterval(updateSchedule, 60000); // Update every minute
});



