import { Component } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css'],
})
export class LayoutPageComponent  {
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faBehance = faBehance;
  isDarkModeActive = false;

  onChange(value: boolean) {
    console.log(value);
    this.isDarkModeActive = value;
  }

  public sidebarItems = [
    { label: 'Inicio', icon: 'home', url: './home' },
    { label: 'Perfil', icon: 'person', url: './profile' },
    { label: 'Skills', icon: 'engineering', url: './skills' },
    { label: 'Educación', icon: 'school', url: './education' },
    { label: 'Experiencia', icon: 'work', url: './experience' },
    { label: 'Contacto', icon: 'mail', url: './contact' },

  ]



}
