import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizzes() {

    // Dummy array of quiz objects...
    return [
      { name: 'Quiz 1', numberQuestions: 3 }
      , { name: 'Quiz 2', numberQuestions: 0 }
    ];
  }
}
