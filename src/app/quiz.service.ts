import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizzes() {

    // Dummy array of quiz objects...
    return [
      { name: 'Quiz 1', numberOfQuestions: 3 }
      , { name: 'Quiz 2', numberOfQuestions: 0 }
    ];
  }
}
