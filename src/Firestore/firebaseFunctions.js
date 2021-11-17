import { updateDoc, deleteDoc, doc } from '@firebase/firestore';
import db from '../Firestore/firebase';

export const updateStatusFirestore = async (id, status) => {
  const taskDoc = doc(db, 'tasks', id);
  const newFields = { status: !status };
  await updateDoc(taskDoc, newFields);
};

export const deleteTaskFirestore = async (id) => {
  const taskDoc = doc(db, 'tasks', id);
  await deleteDoc(taskDoc);
};
