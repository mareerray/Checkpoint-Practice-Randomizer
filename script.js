const groups = {
  "Group 1": [
    { name: "MultiplicationTable", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/multiplication-table/README.md" },
    { name: "AgeFinder", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/age-finder/README.md" },
    { name: "MonthlyPeriod", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/monthly-period/README.md" },
    { name: "DayOfWeek", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/day-of-week/README.md" },
    { name: "TodoList", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/todo-list/README.md" },
    { name: "TimeTracker", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/time-tracker/README.md" }
  ],
  "Group 2": [
    { name: "FactorialMaster", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/factorial-master/README.md" },
    { name: "BreakdownURL", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/breakdown-url/README.md" },
    { name: "HTMLValidator", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/html-validator/README.md" },
    { name: "Flexisort", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/flexisort/README.md" },
    { name: "NextPrime", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/next-prime/README.md" },
    { name: "AlmostPalindrome", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/almost-palindrom/README.md" },
    { name: "ConfigProtector", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/config-protector/README.md" },
  ],
  "Group 3": [
    { name: "SingletonBlueprint", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/singleton-blueprint/README.md" },
    { name: "BuilderBlueprint", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/builder-blueprint/README.md" },
    { name: "SingleLinkedList", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/single-linked-list/README.md" },
    { name: "CircularLinkedList", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/circular-linked-list/README.md" },
    { name: "FactoryBlueprint", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/factory-blueprint/README.md" },
    { name: "DoubleLinkedList", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/double-linked-list/README.md" },
  ],
  "Group 4": [
    { name: "FirstUnique", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/first-unique/README.md" },
    { name: "LongestCommonPrefix", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/longest-common-prefix/README.md" },
    { name: "IsAnagram", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/is-anagram/README.md" },
    { name: "TopFrequents", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/top-frequents/README.md" },
    { name: "DistinctSubstringLength", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/distinct-substring-length/README.md" },
    { name: "HarmoniousFusion", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/harmonious-fusion/README.md" },
  ], 
  "Group 5": [
    { name: "ArmstrongNumber", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/armstrong-number/README.md" },
    { name: "MaximalSquare", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/maximal-square/README.md" },
    { name: "SpiralMatrix", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/spiral-matrix/README.md" },
    { name: "PerfectNumber", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/perfect-number/README.md" },
    { name: "ValidSudoku", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/valid-sudoku/README.md" },
    { name: "SteadySequence", href: "https://github.com/01-edu/public/blob/master/subjects/java/checkpoints/steady-sequence/README.md" },
  ],
};

function getRandomTask(tasks) {
  if (!tasks.length) return null;
  return tasks[Math.floor(Math.random() * tasks.length)];
}

document.getElementById('generateTest').addEventListener('click', () => {
  let output = '';
  for (const [group, tasks] of Object.entries(groups)) {
    const task = getRandomTask(tasks);
    if (task) {
      output += `${group}: <a href="${task.href}" target="_blank">${task.name}</a>\n`;
    } else {
      output += `${group}: No tasks\n`;
    }
  }
  document.getElementById('output').innerHTML = output.replace(/\n/g, '<br>');
  confetti();
});
