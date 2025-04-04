import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  answers: string[] = [];
  result: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.answers = history.state.answers;
    this.calculateResult();
  }

  calculateResult() {
    // Exemplo simples de cálculo de resultado
    const score = this.answers.filter(a => a === 'Comédia').length;
    if (score > 2) {
      this.result = 'Você é um mestre da comédia!';
    } else {
      this.result = 'Você é um fã de ação!';
    }
  }
}
