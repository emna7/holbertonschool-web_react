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
  workFromHome() {
    return `Working from home`;
  }
  getToWork() {
    return `Getting a coffee break`;
  }
  workDirectorTasks() {
    return `Getting to director tasks`;
  }
}
class Teacher implements TeacherInterface {
	workFromHome() {
		return `Cannot work from home`;
	}

	getCoffeeBreak() {
		return `Cannot have a break`;
	}

	workDirectorTasks() {
		return `Getting to work`;
	}
}

function createEmployee(salary: string | number) {
  if (Number(salary) < 500) return new Teacher();
  else return new Director();
}

function isDirector(employee: DirectorInterface | TeacherInterface): boolean {
  return (employee instanceof Director);  
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
     return employee.workDirectorTasks();
  else
    return employee.workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';
function teachClass = (todayClass: Subjects): string {
  if (todayClass === 'Math') return `Teaching Math`;
  else return `Teaching History`;
}

export {
	Director,
	Teacher,
	createEmployee,
	isDirector,
	executeWork,
	teachClass,
}
