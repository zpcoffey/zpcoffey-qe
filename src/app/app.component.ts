import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

interface QuizDisplay {
  name: string;
  numberOfQuestions: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private qSvc: QuizService) {
    // Use the quiz service here, but... If it fails, the creation
    // of the component fails : - (
  }

  quizzes: QuizDisplay[] = [];
  selectedQuiz: QuizDisplay = undefined;

  selectQuiz(q: QuizDisplay) {
    this.selectedQuiz = q;
  }

  addNewQuiz() {

    // Create the new quiz.
    const newQuiz: QuizDisplay = {
      name: "Untitled Quiz"
      , numberOfQuestions: 0
    };

    // Create a new quiz list with the new quiz...
    //
    // a.k.a. "Add the new quiz to the list"
    this.quizzes = [
      ...this.quizzes
      , newQuiz
    ];

    // Select the newly added quiz.
    this.selectedQuiz = newQuiz; 
  }

  serviceDown = false;

  ngOnInit() {

    this.qSvc.getQuizzes().subscribe(
      (data) => {
        console.log(data);

        this.quizzes = (<any[]> data).map(x => ({ 
          name: x.name
          , numberOfQuestions: x.numberQuestions
        }));
      }
      , (error) => {
        console.log(error);
        this.serviceDown = true;
      }
    );

  };

  title = 'quiz-editor';
  myWidth = 250;

  makeImageLarger() {
    this.myWidth *= 1.3;
  }

  // Read-only/getter property..
  get titleColor() {
    return this.myWidth > 400 ? "red" : "blue";
  }
}
