/// <reference path="Subject.ts" />
export namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
    }
    export class Java {
      getRequirements = () => 'Here is the list of requirements for Java';
      getAvailableTeacher = () => {
        if (this.teacher.experienceTeachingJava === 0) return 'No available teacher'
        else return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
