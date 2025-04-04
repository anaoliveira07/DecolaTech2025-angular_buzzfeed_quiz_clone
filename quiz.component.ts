import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  answers: string[] = [];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
  }

  nextQuestion(answer: string) {
    this.answers.push(answer);
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex === this.questions.length) {
      this.router.navigate(['/result'], { state: { answers: this.answers } });
    }
  }
}
