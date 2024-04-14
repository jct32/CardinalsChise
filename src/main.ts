import './w3.css'
import { createNavigation } from './navigation'
import { placeHolder } from './navigation';
import { topFreeAgents } from './top-free-agents';

createNavigation();
let container = document.createElement('div');
container.className = "w3-container w3-white";
container.id = 'main-container';
document.getElementById('app')?.appendChild(container);
topFreeAgents();