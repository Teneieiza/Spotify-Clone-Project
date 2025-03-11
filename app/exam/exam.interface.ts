export interface ExamData {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
}

export interface CreateExamType {
  data: {
    createExam: ExamData;
  };
}

export interface EditExamType {
  data: {
    editExam: ExamData;
  };
}

export interface DeleteExamType {
  data: {
    deleteExam: ExamData;
  };
}