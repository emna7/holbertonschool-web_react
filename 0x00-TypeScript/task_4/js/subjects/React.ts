/// <reference path="Subject.ts" />
export namespace Subjects {
    export interface Teacher {
      experienceTeachingReact?: number;
    }
    export class React {
      getRequirements = () => 'Here is the list of requirements for React';
      getAvailableTeacher = () => {
        if (this.teacher.experienceTeachingReact === 0) return 'No available teacher'
        else return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
