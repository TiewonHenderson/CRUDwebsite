/**
 * Ivan Huang
 * 5/20/25
 * CSCI 39548
 */

import { Timestamp } from "firebase/firestore";

/**
 * ToDo will have 2 major components:
 * 1) Description of what to do
 * 2) Whether it's complete or not (false representing in progress)
 */
export type ToDo = {
  // For some reason document IDs are in string numbers for firestore?
  id: string;
  text: string;
  completed: boolean;
  createdAt: Timestamp;
};