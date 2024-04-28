import './w3.css'
import { createNavigation } from './navigation'
import { teamUpdate } from './team-update';

createNavigation();
let container = document.createElement('div');
container.className = "w3-container w3-white";
container.id = 'main-container';
document.getElementById('app')?.appendChild(container);
teamUpdate();