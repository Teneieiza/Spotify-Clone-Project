import { gql } from "@apollo/client";
import client from "../graphql";
import { ExamInput } from "./exam.type";

//GraphQL Method CRUD
//***GraphQL can use Only POST Method***/

//Method GET
//Get All data
export async function getExamAllService() {
    const { data } = await client.query({
      query: gql`
        query {
          examAll {
            id
            firstname
            lastname
            age
          }
        }
      `,
    });

    return {
      data: {
        examAll: data.examAll,
      }
    }
}

//Method GET
//Get data by ID
export async function getExamOneService(id: number) {
  const { data } = await client.query({
    query: gql`
      query {
        examOne(id: ${id}) {
          id
          firstname
          lastname
          age
        }
      }
    `,
  });

  return {
    data: {
      examOne: data.examOne,
    }
  }
}

//Method POST
//Create data by variables
export async function createExamService(createExamInput: ExamInput) {
  const { data } = await client.mutate({
    mutation: gql`
      mutation CreateExam($input: ExamInput!) {
        createExam(createExamInput: $input) {
          id
          firstname
          lastname
          age
        }
      }
    `,
    variables: {
      input: createExamInput,
    }
  });

  return {
    data: {
      createExam: data.createExam,
    }
  }
}


//Method PUT
//Edit data by ID and variables
export async function editExamService(id:number, editExamInput: ExamInput) {
  const { data } = await client.mutate({
    mutation: gql`
      mutation EditExam($input: ExamInput!) {
        editExam(id: ${id}, editexam: $input) {
          id
          firstname
          lastname
          age
        }
      }
    `,
    variables: {
      input: editExamInput,
    }
  });

  return {
    data: {
      editExam: data.editExam,
    }
  }
}

//Method Delete
//Delete data by ID
export async function deleteExamService(id:number) {
  const { data } = await client.mutate({
    mutation: gql`
      mutation {
        deleteExam(id: ${id}) {
          id
          firstname
          lastname
          age
        }
      }
    `,
  });

  return {
    data: {
      deleteExam: data.deleteExam,
    }
  }
}