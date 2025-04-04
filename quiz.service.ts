import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions = [
    { 
      question: 'Qual seu filme favorito?', 
      options: ['Ação', 'Comédia', 'Drama'], 
      answer: 'Comédia' 
    },
    { 
      question: 'Qual sua estação do ano preferida?', 
      options: ['Verão', 'Inverno', 'Outono'], 
      answer: 'Verão' 
    }
  ];

  getQuestions() {
    return this.questions;
  }
}
