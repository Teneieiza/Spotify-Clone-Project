'use client'
import {
  createExamService,
  deleteExamService,
  editExamService,
  getExamAllService,
  getExamOneService,
} from '@/service/exam/exam.service'
import { useEffect, useState } from 'react'
import { CreateExamType, DeleteExamType, EditExamType } from './exam.interface'

export default function ExamPage() {
  const [examAllData, setExamAllData] = useState(null);
  const [examOneData, setExamOneData] = useState(null);
  const [createExam, setCreateExam] = useState<CreateExamType | null>(null);
  const [editExam, setEditExam] = useState<EditExamType | null>(null);
  const [deleteExam, setDeleteExam] = useState<DeleteExamType | null>(null);

  // Fetch ExamAll & ExamOne
  async function fetchExamData() {
    try {
      const [examAll, examOne] = await Promise.all([
        getExamAllService(),
        getExamOneService(2),
      ]);
  
      setExamAllData(examAll.data.examAll);
      setExamOneData(examOne.data.examOne);
    } catch (error) {
      console.error('Error fetching exam data:', error);
    }
  }

  useEffect(() => {
    fetchExamData();
  }, []);

  // Create Exam
  async function handleCreateExam() {
    try {
      const newExam = await createExamService({
        firstname: 'Tigger',
        lastname: 'morlum',
        age: 2,
      })

      setCreateExam(newExam);
      console.log('Create Exam Complete!', newExam);
      const updatedExamAll = await getExamAllService();
      setExamAllData(updatedExamAll.data.examAll);
    } catch (error) {
      console.error('Error creating exam:', error)
    }

    
  }

  // Edit Exam
  async function handleEditExam() {
    try {
      const editExam = await editExamService(1, {
        firstname: 'Tigger',
        lastname: 'morlum',
        age: 2,
      })

      setEditExam(editExam);
      console.log('Edit Exam Complete!', editExam);
      const updatedExamAll = await getExamAllService();
      setExamAllData(updatedExamAll.data.examAll);
    } catch (error) {
      console.error('Error editing exam:', error)
    }
  }

  // Delete Exam
  async function handleDeleteExam() {
    try {
      const deletedExam = await deleteExamService(3)

      setDeleteExam(deletedExam);
      console.log('Delete Exam Complete!', deletedExam);
      const updatedExamAll = await getExamAllService();
      setExamAllData(updatedExamAll.data.examAll);
    } catch (error) {
      console.error('Error deleting exam:', error)
    }
  }

  return (
    <div className="flex flex-col h-full w-full items-center justify-center gap-6">
      <div className="underline underline-offset-4 text-xl">
        <h1>Example for GraphQL</h1>
      </div>
      <div className="flex h-full w-full items-start justify-center gap-6">
        {/* ExamAll */}
        <div className="rounded-lg bg-slate-200 p-4 text-black">
          <pre>
            <p className="text-blue-700">This is ExamAll:</p>
            <code>{JSON.stringify(examAllData, null, 2)}</code>
          </pre>
        </div>

        {/* ExamOne */}
        <div className="rounded-lg bg-slate-200 p-4 text-black">
          <pre>
            <p className="text-blue-700">This is ExamOne:</p>
            <code>{JSON.stringify(examOneData, null, 2)}</code>
          </pre>
        </div>

        {/* Create Exam */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-slate-200 p-4 text-black">
          <button
            onClick={handleCreateExam}
            className="rounded bg-green-700 px-4 py-2 text-white"
          >
            Create Exam
          </button>
          <pre>
            <p className="text-green-700">This is CreateExam:</p>
            <code>{JSON.stringify(createExam, null, 2)}</code>
          </pre>
        </div>

        {/* Edit Exam */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-slate-200 p-4 text-black">
          <button
            onClick={handleEditExam}
            className="rounded bg-yellow-600 px-4 py-2 text-white"
          >
            Edit Exam
          </button>
          <pre>
            <p className="text-yellow-600">This is EditExam:</p>
            <code>{JSON.stringify(editExam, null, 2)}</code>
          </pre>
        </div>

        {/* Delete Exam */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-slate-200 p-4 text-black">
          <button
            onClick={handleDeleteExam}
            className="rounded bg-red-500 px-4 py-2 text-white"
          >
            Delete Exam
          </button>
          <pre>
            <p className="text-red-500">This is DeleteExam:</p>
            <code>{JSON.stringify(deleteExam, null, 2)}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
