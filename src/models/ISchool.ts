export interface StudentInterface {
  name: string;
  age: number;
  address?: string;
}

export interface TeacherInterface {
  name: string;
  subject: string;
  gender?: "male" | "female";
}

export interface SchoolInterface {
  student: StudentInterface;
  teacher: TeacherInterface;
}
