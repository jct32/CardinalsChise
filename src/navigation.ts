import { topFreeAgents } from "./top-free-agents";

export function createNavigation() {
    document.querySelector<HTMLBodyElement>('#app')!.innerHTML = `
    <div class="w3-bar w3-red w3-card-4">
        
    <div class="w3-dropdown-hover w3-red">
    <button class="w3-button">Season</button>
    <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="#" class="w3-bar-item w3-button" onclick="placeHolder()">Placeholder</a>
    </div>
    </div>
    <div class="w3-dropdown-hover w3-red">
    <button class="w3-button">Post Season</button>
    <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="#" class="w3-bar-item w3-button">Placeholder</a>
    </div>
    </div>
    <div class="w3-dropdown-hover w3-red">
    <button class="w3-button">Off Season</button>
    <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="#" class="w3-bar-item w3-button">Retirements</a>
        <a href="#" class="w3-bar-item w3-button">Top Free Agents</a>
        <a href="#" class="w3-bar-item w3-button">Free Agent Signings</a>
        <a href="#" class="w3-bar-item w3-button">Top Players</a>
    </div>
    </div>
    <div class="w3-dropdown-hover w3-red">
    <button class="w3-button">Misc</button>
    <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="#" class="w3-bar-item w3-button">Placeholder</a>
    </div>
    </div>
    </div>
`
    let links = document.getElementsByTagName('a');
    Array.from(links).forEach(element => {
        switch (element.innerHTML) {
            case 'Top Free Agents':
                element.onclick = topFreeAgents;
                break;
            default:
                element.onclick = placeHolder;
                break;

        }
    });
}

export function placeHolder() {
    let baseContainer = document.getElementById('main-container');
    baseContainer!.innerHTML = '';
    let header = document.createElement('h4');
    header.className = 'w3-center';
    header.innerHTML = 'Placeholder';
    baseContainer!.append(header);
}