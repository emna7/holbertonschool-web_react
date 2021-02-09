interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getToWork = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

const createEmployee = (salary: string | number) => {
  if (Number(salary) < 500) return new Teacher
  else return new Director;
}

const isDirector = (employee: Director | Teacher): boolean => {
  return employee.workFromHome() === 'Working from home';  
}

const executeWork = (employee: Director | Teacher): string => {
  if (isDirector(employee)) return employee.workDirectorTasks()
  else return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';
const teachClass = (todayClass: Subjects): string => {
  if (todayClass === 'Math') return 'Teaching Math';
  else return 'Teaching History';
}
