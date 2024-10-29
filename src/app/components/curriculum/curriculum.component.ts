import { Component, OnInit } from '@angular/core';
import { Persona, PersonaService } from '../../services/persona.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent implements OnInit {
  persona: Persona | undefined;

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = parseInt(idParam, 10);
      this.personaService.obtenerPersonaPorId(id).subscribe(
        (data) => {
          this.persona = data;
        },
        (error) => {
          console.error('Error al obtener la persona:', error);
        }
      );
    }
  }
}