/// <reference path="Subject.ts" />
export namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
  export class Cpp extends Subject {
    getRequirements = () => 'Here is the list of requirements for Cpp';
    getAvailableTeacher = () => {
      if (this.teacher.experienceTeachingC === 0) return 'No available teacher'
      else return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
