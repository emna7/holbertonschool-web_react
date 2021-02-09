export interface MajorCredits {
    credits: number;
}
export interface MinorCredits {
  credits: number;
}
export const sumMajorCredits = (subject1: number, subject2: number): MajorCredits => {
  return {credits: subject1 + subject2};
}; 
export const sumMinorCredits = (subject1: number, subject2: number): MinorCredits => {
  return {credits: subject1 + subject2};
}; 
