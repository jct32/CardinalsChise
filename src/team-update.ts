export function teamUpdate() {
    createTeamUpdateLayout()
}

let hitterArray = Array();
let pitcherArray = Array();

function createTeamUpdateLayout() {
    let baseContainer = document.getElementById('main-container');
    baseContainer!.innerHTML = '';
    baseContainer!.style.paddingLeft = '12%';
    baseContainer!.style.paddingRight = '12%';
    let header = document.createElement('h4');
    header.className = 'w3-center';
    header.innerHTML = 'Cardinals Team Update'
    baseContainer!.append(header);
    let dateInput = document.createElement('input');
    dateInput.className = "w3-input";
    dateInput.type = "date";
    baseContainer!.append(dateInput);
    let hittingHeader = document.createElement('h5');
    hittingHeader.className = 'w3-center';
    hittingHeader.innerHTML = 'Hitting Stats'
    baseContainer!.append(hittingHeader);
    for(let i = 0; i < 15; i++) {
        createHitterRow();
    }
    let pitchingHeader = document.createElement('h5');
    pitchingHeader.className = 'w3-center';
    pitchingHeader.innerHTML = 'Pitching Stats'
    baseContainer!.append(pitchingHeader);
    for(let i = 0; i < 12; i++) {
        createPitcherRow();
    }
    let generateBtnDiv = document.createElement('div');
    generateBtnDiv.className = "w3-center"
    generateBtnDiv.style.padding = "2%"
    let generateBtn = document.createElement('button');
    generateBtn.className = "w3-button w3-red w3-center";
    generateBtn.innerHTML = "Generate Post";
    generateBtnDiv.append(generateBtn);
    baseContainer!.append(generateBtnDiv);
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

function createHitterRow() {
    let baseContainer = document.getElementById('main-container');
    let containerDiv = document.createElement('div');
    containerDiv.className = 'w3-cell-row';
    baseContainer?.append(containerDiv);

    // Player Input
    let inputDiv = document.createElement('div');
    inputDiv.style.width = "50%";
    inputDiv.className = 'w3-cell w3-display-container';
    let playerInput = document.createElement('input');
    playerInput.className = 'w3-input';
    playerInput.placeholder = "Player Name"
    containerDiv.append(inputDiv);
    inputDiv.append(playerInput);

    // Average Input
    let avgDiv = document.createElement('div');
    avgDiv.style.width = "10%";
    avgDiv.className = 'w3-cell w3-display-container';
    let avgInput = document.createElement('input');
    avgInput.placeholder = "AVG";
    avgInput.className = 'w3-input';
    containerDiv.append(avgDiv);
    avgDiv.append(avgInput);

    // OPS Input
    let opsDiv = document.createElement('div');
    opsDiv.style.width = "10%";
    opsDiv.className = 'w3-cell w3-display-container';
    let opsInput = document.createElement('input');
    opsInput.className = 'w3-input';
    opsInput.placeholder = "OPS";
    containerDiv.append(opsDiv);
    opsDiv.append(opsInput);

    // SLG Input
    let slgDiv = document.createElement('div');
    slgDiv.style.width = "10%";
    slgDiv.className = 'w3-cell w3-display-container';
    let slgInput = document.createElement('input');
    slgInput.placeholder = "SLG";
    slgInput.className = 'w3-input';
    containerDiv.append(slgDiv);
    slgDiv.append(slgInput);

    // HR Input
    let HRDiv = document.createElement('div');
    HRDiv.style.width = "10%";
    HRDiv.className = 'w3-cell w3-display-container';
    let HRInput = document.createElement('input');
    HRInput.placeholder = "HR";
    HRInput.className = 'w3-input';
    containerDiv.append(HRDiv);
    HRDiv.append(HRInput);

    // RBI Input
    let RBIDiv = document.createElement('div');
    RBIDiv.style.width = "10%";
    RBIDiv.className = 'w3-cell w3-display-container';
    let RBIInput = document.createElement('input');
    RBIInput.placeholder = "RBI";
    RBIInput.className = 'w3-input';
    containerDiv.append(RBIDiv);
    RBIDiv.append(RBIInput);

    let hitterElements = {
        "name": playerInput,
        "avg": avgInput,
        "ops": opsInput,
        "slg": slgInput,
        "hr": HRInput,
        "rbi": RBIInput
    };

    hitterArray.push(hitterElements);

}

function createPitcherRow() {
    let baseContainer = document.getElementById('main-container');
    let containerDiv = document.createElement('div');
    containerDiv.className = 'w3-cell-row';
    baseContainer?.append(containerDiv);

        // Player Input
        let playerDiv = document.createElement('div');
        playerDiv.style.width = "50%";
        playerDiv.className = 'w3-cell w3-display-container';
        let playerInput = document.createElement('input');
        playerInput.className = 'w3-input';
        playerInput.placeholder = "Player Name"
        containerDiv.append(playerDiv);
        playerDiv.append(playerInput);
    
        // W Input
        let winDiv = document.createElement('div');
        winDiv.style.width = "10%";
        winDiv.className = 'w3-cell w3-display-container';
        let winInput = document.createElement('input');
        winInput.placeholder = "W";
        winInput.className = 'w3-input';
        containerDiv.append(winDiv);
        winDiv.append(winInput);
    
        // L Input
        let lossDiv = document.createElement('div');
        lossDiv.style.width = "10%";
        lossDiv.className = 'w3-cell w3-display-container';
        let lossInput = document.createElement('input');
        lossInput.className = 'w3-input';
        lossInput.placeholder = "L";
        containerDiv.append(lossDiv);
        lossDiv.append(lossInput);
    
        // ERA Input
        let ERADiv = document.createElement('div');
        ERADiv.style.width = "10%";
        ERADiv.className = 'w3-cell w3-display-container';
        let ERAInput = document.createElement('input');
        ERAInput.placeholder = "ERA";
        ERAInput.className = 'w3-input';
        containerDiv.append(ERADiv);
        ERADiv.append(ERAInput);
    
        // SV Input
        let SVDiv = document.createElement('div');
        SVDiv.style.width = "10%";
        SVDiv.className = 'w3-cell w3-display-container';
        let SVInput = document.createElement('input');
        SVInput.placeholder = "SV";
        SVInput.className = 'w3-input';
        containerDiv.append(SVDiv);
        SVDiv.append(SVInput);

        // K Input
        let KDiv = document.createElement('div');
        KDiv.style.width = "10%";
        KDiv.className = 'w3-cell w3-display-container';
        let KInput = document.createElement('input');
        KInput.placeholder = "K";
        KInput.className = 'w3-input';
        containerDiv.append(KDiv);
        KDiv.append(KInput);

        let pitcherElements = {
            "name": playerInput,
            "w": winInput,
            "l": lossInput,
            "era": ERAInput,
            "sv": SVInput,
            "k": KInput
        };

        pitcherArray.push(pitcherElements);

}

function copyToClipboard() {
    let outputArea = <HTMLTextAreaElement> document.getElementById('outputArea');
    outputArea.select();
    navigator.clipboard.writeText(outputArea.value);
}