const letters =  [
       "𞤢", "𞤣", "𞤤", "𞤥", "𞤦", "𞤧", "𞤨", "𞤩",
       "𞤪", "𞤫", "𞤬", "𞤭", "𞤮", "𞤯", "𞤰", "𞤱",
       "𞤲", "𞤳", "𞤴", "𞤵", "𞤶", "𞤷", "𞤸", "𞤹",
       "𞤺", "𞤻", "𞤼", "𞤽",
       "𞤢𞥄", "𞤫𞥅", "𞤮𞥅", "𞤭𞥅", "𞤵𞥅",
       "𞤣𞥆", "𞤤𞥆", "𞤥𞥆", "𞤦𞥆", "𞤧𞥆", "𞤨𞥆", "𞤩𞥆", "𞤪𞥆",
       "𞤬𞥆", "𞤶𞥆", "𞤸𞥆", "𞤹𞥆", "𞤷𞥆", "𞤺𞥆", "𞤽𞥆", "𞤼𞥆",
       "𞤻𞥆", "𞤯𞥆", "𞤰𞥆", "𞤱𞥆", "𞤲𞥆", "𞤳𞥆", "𞤴𞥆"
      ];
    
    let allWords = ['𞤢𞤤𞤢𞥄𞤣𞤵', '𞤣𞤮𞥅𞤻𞤮', '𞤤𞤫𞤱𞤤𞤢', '𞤥𞤢𞤱𞤦𞤢', '𞤦𞤢𞥄𞤤𞤭𞤤', '𞤧𞤫𞤪𞤵', '𞤨𞤵𞥅𞤼𞤮', '𞤩𞤮𞤳𞥆𞤭', '𞤬𞤵𞥅𞤻𞤫𞥅𞤪𞤫', '𞤱𞤢𞥄𞤲𞤣𞤵', '𞤳𞤫𞤳𞤵𞤢𞤤', '𞤴𞤢𞤸𞤪𞤫', '𞤶𞤢𞤱𞤪𞤫', '𞤻𞤵𞥅𞤲𞤺𞤭𞤤', '𞤲𞤣𞤢𞤺𞤢𞤱𞤢𞤤', '𞤲𞤦𞤫𞥅𞤱𞤢', '𞤤𞤫𞤴𞤣𞤭', '𞤧𞤵𞤳𞤢𞥄𞤩𞤫', '𞤥𞤢𞤶𞥆𞤫𞤪𞤫', '𞤢𞤣𞤤𞤢𞤥', '𞤢𞤤𞤳𞤵𞤤𞤫', '𞤣𞤢𞤲𞤣𞤢𞤴𞤯𞤫', '𞤤𞤫𞤻𞤮𞤤'];
    
    let animalWords  = ["𞤢𞤤𞤢𞥄𞤣𞤵", "𞤣𞤮𞥅𞤻𞤮", "𞤤𞤫𞤱𞤤𞤢", "𞤥𞤢𞤱𞤦𞤢", "𞤦𞤢𞥄𞤤𞤭𞤤", "𞤧𞤫𞤪𞤵", "𞤨𞤵𞥅𞤼𞤮", "𞤩𞤮𞤳𞥆𞤭", "𞤬𞤵𞥅𞤻𞤫𞥅𞤪𞤫", "𞤱𞤱𞤢𞥄𞤲𞤣𞤵", "𞤳𞤫𞤳𞤵𞤢𞤤"
                 ,"𞤴𞤢𞤸𞤪𞤫", "𞤶𞤢𞤱𞤪𞤫", "𞤻𞤵𞥅𞤲𞤺𞤭𞤤", "𞤲𞤣𞤢𞤺𞤢𞤱𞤢𞤤", "𞤲𞤦𞤫𞥅𞤱𞤢"];
    
    // Function to get a random sample of 8 words from allWords
    function getRandomWordsToFind() {
      const shuffledWords = allWords.slice().sort(() => Math.random() - 0.5); // Shuffle a copy
      return shuffledWords.slice(0, 8); // Take the first 8 words
    }
    
    // Get the random words to find for this game
    let wordsToFind = getRandomWordsToFind();
    
    //const wordsToFind = ["𞤤𞤫𞤴𞤣𞤭", "𞤧𞤵𞤳𞤢𞥄𞤩𞤫", "𞤥𞤢𞤶𞥆𞤫𞤪𞤫", "𞤢𞤣𞤤𞤢𞤥", "𞤢𞤤𞤳𞤵𞤤𞤫", "𞤣𞤢𞤲𞤣𞤢𞤴𞤯𞤫", "𞤤𞤫𞤻𞤮𞤤"];
    const rows = 14; // Increased for more space
    const cols = 15; // Increased for more space
    const grid = [];
    
    // --- Constants for Directions ---
    const DIRECTION_EAST = "E";
    const DIRECTION_SOUTH = "S";
    const DIRECTION_SOUTHEAST = "SE";
    const DIRECTION_NORTH = "N";
    const DIRECTION_NORTHEAST = "NE";
    const DIRECTION_NORTHWEST = "NW";
    const DIRECTION_WEST = "W";
    const DIRECTION_SOUTHWEST = "SW";
    
    // Function to split a word into Adlam characters
    function splitIntoCharacters(str) {
      // ... (your splitIntoCharacters function) ...
      const characters = [];
      const consonants = [ "𞤣", "𞤤", "𞤥", "𞤦", "𞤧", "𞤨","𞤩",
                             "𞤪", "𞤬", "𞤯", "𞤰","𞤱",
                            "𞤲", "𞤳", "𞤴", "𞤶", "𞤷", "𞤸","𞤹",
                            "𞤺", "𞤻", "𞤼", "𞤽"]
      for (let i = 0; i < str.length; i++) {
        let codePoint = str.codePointAt(i);
        characters.push(String.fromCodePoint(codePoint));
        if (codePoint >= 0x10000) {
          // Skip the next character if it's part of a surrogate pair
          i++;
        }
      }
      //return characters;
      for (let j=0; j < characters.length; j++){
        if (characters[j] === '𞤢' && characters[j+1] === '𞥄') {
          characters[j] = characters[j] + characters[j+1] ; //'𞤢𞥄'
          characters.splice(j+1,1)
        }
        
        if (characters[j] === '𞤫' && characters[j+1] === '𞥅') {
          characters[j] = characters[j] + characters[j+1] ; // 𞤫𞥅
          characters.splice(j+1,1)
        } 
        
        if (characters[j] === '𞤭' && characters[j+1] === '𞥅') {
          characters[j] = characters[j] + characters[j+1] ; // 𞤭𞥅
          characters.splice(j+1,1)
        } 
        
        if (characters[j] === '𞤮' && characters[j+1] === '𞥅') {
          characters[j] = characters[j] + characters[j+1] ; //'𞤮𞥅'
          characters.splice(j+1,1)
        } 
        
        if (characters[j] === '𞤵' && characters[j+1] === '𞥅') {
          characters[j] = characters[j] + characters[j+1] ; //'𞤵𞥅'
          characters.splice(j+1,1)
        } 
        
        if (consonants.includes(characters[j])  && characters[j+1] === '𞥆') {
          characters[j] = characters[j] + characters[j+1] ; //'𞤵𞥅'
          characters.splice(j+1,1)
        } 
    
      }
      return characters
    
    }
    
    /// Function to place a word on the grid
    function placeWord(word, grid) {
      const characters = splitIntoCharacters(word);
      const directions = [DIRECTION_EAST, DIRECTION_SOUTH, DIRECTION_SOUTHEAST, DIRECTION_NORTH, DIRECTION_NORTHEAST, DIRECTION_NORTHWEST, DIRECTION_WEST, DIRECTION_SOUTHWEST];
    
      while (true) {
        const direction = directions[Math.floor(Math.random() * directions.length)];
        let x0 = Math.floor(Math.random() * cols);
        let y0 = Math.floor(Math.random() * rows);
    
        // Adjust starting position based on direction and word length
        if (direction.includes(DIRECTION_EAST))  x0 = Math.min(x0, cols - characters.length);
        if (direction.includes(DIRECTION_SOUTH)) y0 = Math.min(y0, rows - characters.length);
    
        if (canPlaceWord(characters, x0, y0, direction, grid)) {
          for (let i = 0; i < characters.length; i++) {
            const newX = x0 + (direction.includes(DIRECTION_EAST) ? i : (direction.includes(DIRECTION_WEST) ? -i : 0));
            const newY = y0 + (direction.includes(DIRECTION_SOUTH) ? i : (direction.includes(DIRECTION_NORTH) ? -i : 0));
            grid[newY][newX] = characters[i];
          }
          return true; // Word placed successfully
        }
      }
    }
    
    // Function to check if a word can be placed
    function canPlaceWord(characters, x, y, direction, grid) {
      for (let i = 0; i < characters.length; i++) {
        const newX = x + (direction.includes(DIRECTION_EAST) ? i : (direction.includes(DIRECTION_WEST) ? -i : 0));
        const newY = y + (direction.includes(DIRECTION_SOUTH) ? i : (direction.includes(DIRECTION_NORTH) ? -i : 0));
    
        if (newX < 0 || newX >= cols || newY < 0 || newY >= rows) {
          return false; // Out of bounds
        }
    
        const cellValue = grid[newY][newX];
        if (cellValue !== "?" && cellValue !== characters[i]) {
          return false; // Cell is already occupied with a different letter
        }
      }
      return true; // Can place word
    }
    
    
    
    // Create the grid and fill it with words
    for (let i = 0; i < rows; i++) {
      grid[i] = [];
      for (let j = 0; j < cols; j++) {
        grid[i][j] = "?";
      }
    }
    
    for (const word of wordsToFind) {
      placeWord(word, grid);12
    }
    
    // Fill remaining cells with random letters
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === "?") {
          grid[i][j] = letters[Math.floor(Math.random() * letters.length)]; //""
        }
      }
    }
    
    // ... (rest of your code for mouse events, table creation, and checkWord) ...
    
    const table = document.getElementById("word-search-grid");
    let isDragging = false;
    let selectedCells = [];
    let lastSelectedCell = null;
    let enforcedDirection = null; // Variable to track enforced direction
    
    const wordList = document.querySelector("#word-list ul");
    const congratsMessage = document.getElementById("congrats-message");
    //const closePopupButton = document.getElementById("close-popup");
    const restartButton = document.getElementById("restart-button"); // Get restart button
    let foundWords = 0; 
    
    
    // --- Event Listeners ---
    table.addEventListener("mousedown", handleMouseDown);
    table.addEventListener("mousemove", handleMouseMove);
    table.addEventListener("mouseup", handleMouseUp);
    
    // --- Event Handlers ---
    function handleMouseDown(event) {
      const cell = event.target;
      if (cell.tagName === "TD") {
        isDragging = true;
    
        // Check if the starting cell is the first letter of a diagonal word
        const cellText = cell.textContent;
        const cellRow = cell.parentNode.rowIndex;
        const cellCol = cell.cellIndex;
        for (const word of wordsToFind) {
          const splitWord = splitIntoCharacters(word);
          if (splitWord[0] === cellText && isDiagonalWord(word, cellRow, cellCol)) {
            enforcedDirection = getWordDirection(word, cellRow, cellCol); // Enforce the specific diagonal direction of the word
            //break; // No need to check other words if one is found
          }
        }
        selectCell(cell, true);
      }
    }
    
    function handleMouseMove(event) {
      if (!isDragging) return;
      const cell = event.target;
      if (cell.tagName === "TD" && isValidNextCell(cell, enforcedDirection)) {
        selectCell(cell, true);
      }
    }
    
    function handleMouseUp() {
      isDragging = false;
      checkWord();
      selectedCells = [];
      lastSelectedCell = null;
      enforcedDirection = null; // Reset enforced direction
    }
    
    // --- Helper Functions ---
    function isCellSelected(cell) {
      return selectedCells.includes(cell);
    }
    
    // Check if a word is diagonal starting at a specific position
    function isDiagonalWord(word, startRow, startCol) {
      const directions = [DIRECTION_SOUTHEAST, DIRECTION_NORTHEAST, DIRECTION_SOUTHWEST, DIRECTION_NORTHWEST];
      for (const direction of directions) {
        if (canPlaceWord(splitIntoCharacters(word), startCol, startRow, direction, grid)) {
          return true;
        }
      }
      return false;
    }
    
    // Get the direction of a word starting at a specific position
    function getWordDirection(word, startRow, startCol) {
      const directions = [DIRECTION_SOUTHEAST, DIRECTION_NORTHEAST, DIRECTION_SOUTHWEST, DIRECTION_NORTHWEST];
      for (const direction of directions) {
        if (canPlaceWord(splitIntoCharacters(word), startCol, startRow, direction, grid)) {
          return direction;
        }
      }
      return null; // Word not found or not diagonal
    }
    
    function isValidNextCell(cell, enforcedDirection = null) {
      if (!lastSelectedCell) return true; // First cell is always valid
    
      const currentRow = cell.parentNode.rowIndex;
      const currentCol = cell.cellIndex;
      const lastRow = lastSelectedCell.parentNode.rowIndex;
      const lastCol = lastSelectedCell.cellIndex;
    
      if (enforcedDirection) {
        // Check if the next cell matches the enforced *diagonal* direction
        const dx = currentCol - lastCol;
        const dy = currentRow - lastRow;
        return Math.abs(dx) === Math.abs(dy); // diagonal movement only when enforced
      } else {
        // No enforced direction, allow any linear movement
        return (
          (Math.abs(currentRow - lastRow) <= 1 && Math.abs(currentCol - lastCol) <= 1) && // Adjacent
          !(currentRow === lastRow && currentCol === lastCol) // Not the same cell
        );bv
      }
    }
    
    
    
    // ... (selectCell function remains the same)
    // ... (checkWord function remains the same)
    // ... (code to generate table and fill with letters) ...
    
    
    function selectCell(cell, shouldHighlight = false) {
      if (!isCellSelected(cell)) { // Prevent duplicate entries
        if (shouldHighlight) {
          cell.classList.add("selected");
        }
        selectedCells.push(cell);
        lastSelectedCell = cell;
      }
    }
    
    function checkWord() {
      const selectedWord = selectedCells.map(cell => cell.textContent).join("");
    
      for (let i = 0; i < wordsToFind.length; i++) {
        if (splitIntoCharacters(wordsToFind[i]).join('') === selectedWord) {
          // Found a matching word
          selectedCells.forEach(cell => {
            cell.classList.add("found");
            cell.classList.remove("selected");
          });
    
          // Scratch out the word in the list
          wordList.children[i].classList.add("found");
    
          foundWords++;
    
          // Check if all words have been found
          if (foundWords === wordsToFind.length) {
            congratsMessage.style.display = "block";
          }
    
          return; // Stop checking once a match is found
        }
      }
    
      // If no match found, clear only the temporary highlight
      selectedCells.forEach(cell => cell.classList.remove("selected"));
    }
    
    restartButton.addEventListener("click", () => {
      congratsMessage.style.display = "none"; // Hide the popup
      resetGame(); // Call the resetGame function
    });
    
    // Reset game function
    function resetGame() {
      // 1. Reset grid and variables
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          grid[i][j] = "?";
          table.rows[i].cells[j].textContent = "?";
          table.rows[i].cells[j].classList.remove("selected", "found", "highlight-line", "horizontal", "vertical", "diagonal");
        }
      }
      foundWords = 0;
      enforcedDirection = null;
      selectedCells = [];
      lastSelectedCell = null;
    
      // 2. Regenerate words to find
      wordsToFind = getRandomWordsToFind();
    
      // 3. Repopulate the word list (moved here)
      wordList.innerHTML = "";
      wordsToFind.forEach(word => {
        const li = document.createElement("li");
        li.textContent = word;
        wordList.appendChild(li);
      });
    
      // 4. Place new words in the grid AND update cells
      for (const word of wordsToFind) {
        placeWord(word, grid);
    
        // Update table cells after placing each word
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            table.rows[i].cells[j].textContent = grid[i][j];
          }
        }
      }
    
      // 5. Fill remaining cells with random letters AND update cells
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (grid[i][j] === "?") {
            grid[i][j] = letters[Math.floor(Math.random() * letters.length)];
          }
          // Update cell content
          table.rows[i].cells[j].textContent = grid[i][j]; 
        }
      }
    }
    
    
    
    
    
    // Populate the word list
    wordsToFind.forEach(word => {
      const li = document.createElement("li");
      li.textContent = word;
      wordList.appendChild(li);
    });
    
    // ... (code to generate table and fill with letters) ... 
    
    
    for (let i = 0; i < rows; i++) {
      const row = table.insertRow();
      for (let j = 0; j < cols; j++) {
        const cell = row.insertCell();
        cell.textContent = grid[i][j];
      }
    }
    
    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }
    
    