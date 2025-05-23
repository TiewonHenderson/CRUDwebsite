/**
 * Ivan Huang
 * 5/20/25
 * CSCI 39548
 */

import { db } from "../../firebase.ts";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import type { ToDo } from "./ToDo.ts";

const todosRef = collection(db, "todos");

/**
 * Retrieves all the entries (ToDo) in the firebase database 
 * @returns An array of ToDo objects within the backend db
 */
export const getTodos = async (): Promise<ToDo[]> => {
    // This fetches all docs from firebase (within our db var todosRef)
    const snapshot = await getDocs(todosRef);

    // Formats each ToDo doc to json format and store into the array
    const todos: ToDo[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            text: data.text,
            completed: data.completed,
            createdAt: data.createdAt,
        };
    });
    return todos;
};

/**
 * 
 * @param text The description of the new ToDo made
 * @returns Returns the values of the new ToDo in addition with the ID
 */
export const addTodo = async (text: string) => {
    // New ToDo object to be added into db
    const newTodo = {
        text,
        completed: false,
        createdAt: Timestamp.now(),
    };
    const docRef = await addDoc(todosRef, newTodo);
    return { id: docRef.id, ...newTodo };
};

/**
 * 
 * @param todo The todo instance to set as complete or uncomplete
 */
export const toggleTodo = async (todo: ToDo) => {
    await updateDoc(doc(db, "todos", todo.id), {
        // This allows uncompletely a marked complete ToDo
        completed: !todo.completed,
    });
};

/**
 * 
 * @param id The id of the ToDo to delete from the db
 */
export const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
};