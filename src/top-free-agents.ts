import { createTeamList } from "./teams";

export function topFreeAgents () {
    createTopFreeAgentLayout();
}

function createTopFreeAgentLayout() {
    let baseContainer = document.getElementById('main-container');
    baseContainer!.innerHTML = '';
    let header = document.createElement('h4');
    header.className = 'w3-center';
    header.innerHTML = 'Top Free Agents'
    baseContainer!.append(header);
    let positions = [
        'Starting Pitcher', 'Relief Pitcher', 'Closing Pitcher',
        'Catcher', 'First Base', 'Second Base', 'Third Base',
        'Shortstop', 'Left Field', 'Center Field', 'Right Field'
    ];
    positions.forEach(position => {
        createPositionGroup(position);
    })
    let cellRow = document.createElement('div');
    cellRow.className = 'w3-cell-row';
    let buttonCell = document.createElement('div');
    buttonCell.className = 'w3-container w3-cell w3-center';
    buttonCell.style.padding = '1%';
    let generateButton = document.createElement('button');
    generateButton.className = 'w3-button w3-red';
    generateButton.innerHTML = 'Generate';
    generateButton.onclick = createPostText;
    baseContainer?.append(cellRow);
    cellRow?.append(buttonCell);
    buttonCell?.append(generateButton);
    let card = document.createElement('div');
    card.className = 'w3-card w3-panel w3-light-gray'
    baseContainer?.append(card);
    let outputHeader = document.createElement('h5');
    outputHeader.className = 'w3-center';
    card.append(outputHeader);
    let textareaDiv = document.createElement('div');
    card.append(textareaDiv);
    let outputText = document.createElement('textarea');
    outputText.style.height = '200px';
    outputText.style.width = '100%';
    outputText.id = 'outputArea';
    textareaDiv.append(outputText);
    let copyBtnDivRow = document.createElement('div');
    copyBtnDivRow.className = 'w3-cell-row';
    card.append(copyBtnDivRow);
    let copyBtnCell = document.createElement('div');
    copyBtnCell.className = 'w3-container w3-cell w3-center';
    copyBtnDivRow.append(copyBtnCell);
    let copyBtn = document.createElement('button');
    copyBtn.innerHTML = 'Copy to Clipboard';
    copyBtn.className = 'w3-button w3-red';
    copyBtn.onclick = copyToClipboard;
    copyBtnCell.append(copyBtn);

}

function createPositionGroup(position:string) {
    let baseContainer = document.getElementById('main-container');
    baseContainer!.style.paddingLeft = '12%';
    baseContainer!.style.paddingRight = '12%';
    let positionHeader = document.createElement('h5');
    positionHeader.className = 'w3-center';
    positionHeader.innerHTML = `${position}`;
    baseContainer?.append(positionHeader);
    for (let i=0; i < 5; i++) {
        createRow();
    }
}

function createRow() {
    let baseContainer = document.getElementById('main-container');
    let containerDiv = document.createElement('div');
    containerDiv.className = 'w3-cell-row';

    // Player input
    let inputDiv = document.createElement('div');
    inputDiv.className = 'w3-cell w3-display-container';
    inputDiv.style.width = '37%';   
    let label = document.createElement('label');
    label.innerHTML = 'Player Name';
    let playerInput = document.createElement('input');
    playerInput.className = 'w3-input';
    baseContainer?.append(containerDiv);
    containerDiv.append(inputDiv);
    inputDiv.append(label);
    inputDiv.append(playerInput);

    // Team input
    let teamCell = document.createElement('div');
    teamCell.className = 'w3-cell w3-display-container';
    teamCell.style.width = '37%';   
    let teamOptions = document.createElement('select');
    teamOptions.className = 'w3-select w3-display-bottommiddle';
    let teams = createTeamList();
    teams.forEach(team => {
        let option = document.createElement('option');
        option.value = team.abbreviation;
        option.textContent = `${team.city} ${team.nickname}`;
        teamOptions.appendChild(option);
    });
    containerDiv.append(teamCell);
    teamCell.append(teamOptions);
}

function createPostText() {
    let outputArea = document.getElementById('outputArea');
    outputArea!.innerHTML = '';
    outputArea!.innerHTML += `[font=Tahoma]\n`
    outputArea!.innerHTML += `[center][img]https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/mlb.png?w=100&h=100&transparent=true[/img]\n\n`;
    outputArea!.innerHTML += `[size=150][b]Top Free Agents[/b][/size]\n\n`;
    let players = Array.from(document.getElementsByTagName('input'));
    let teams = Array.from(document.getElementsByTagName('select'));
    let positions = [
        'Starting Pitcher', 'Relief Pitcher', 'Closing Pitcher',
        'Catcher', 'First Base', 'Second Base', 'Third Base',
        'Shortstop', 'Left Field', 'Center Field', 'Right Field'
    ];
    let j = 0;
    positions.forEach(position => {
        outputArea!.innerHTML += `[b]${position}[/b]\n`;
        for(let i=j; i < 5+(j); i++) {
            let team = Array.from(teams[i].selectedOptions);
            outputArea!.innerHTML += `${players[i].value}, Prev Team - ${team[0].text}\n`;
        }
        outputArea!.innerHTML += '\n';
        j += 5;
    });
    outputArea!.innerHTML += '[/center][/font]';
}

function copyToClipboard() {
    let outputArea: HTMLElement | null = document.getElementById('outputArea');
    (outputArea as HTMLTextAreaElement).select();
    navigator.clipboard.writeText(outputArea!.innerHTML);
}