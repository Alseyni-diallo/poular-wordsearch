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
  
  
  let allWords  = ["𞤢𞤤𞤢𞥄𞤣𞤵", "𞤣𞤮𞥅𞤻𞤮", "𞤤𞤫𞤱𞤤𞤢", "𞤥𞤢𞤱𞤦𞤢", "𞤦𞤢𞥄𞤤𞤭𞤤", "𞤧𞤫𞤪𞤵", "𞤨𞤵𞥅𞤼𞤮", "𞤩𞤮𞤳𞥆𞤭", "𞤬𞤵𞥅𞤻𞤫𞥅𞤪𞤫", "𞤱𞤢𞥄𞤲𞤣𞤵", "𞤳𞤫𞤳𞤵𞤢𞤤"
               ,"𞤴𞤢𞤸𞤪𞤫", "𞤶𞤢𞤱𞤪𞤫", "𞤻𞤵𞥅𞤲𞤺𞤭𞤤", "𞤲𞤣𞤢𞤺𞤢𞤱𞤢𞤤", "𞤲𞤦𞤫𞥅𞤱𞤢"];
  
  let animalWords = [ '𞤣𞤮𞥅𞤻𞤮', '𞤤𞤫𞤱𞤤𞤢', '𞤥𞤢𞤱𞤦𞤢', '𞤦𞤢𞥄𞤤𞤭𞤤', '𞤫𞤣𞤢', '𞤲𞤮𞥅𞤱𞤪𞤢', '𞤱𞤢𞥄𞤲𞤣𞤵', '𞤳𞤫𞤳𞤵𞤢𞤤', '𞤴𞤢𞤸𞤪𞤫', '𞤶𞤢𞤱𞤪𞤫', '𞤻𞤵𞥅𞤲𞤺𞤭𞤤', '𞤷𞤭𞤪𞤺𞤵', '𞤲𞤦𞤫𞥅𞤱𞤢', '𞤲𞤺𞤢𞤴𞤵𞥅𞤪𞤭', '𞤻𞤢𞥄𞤪𞤭𞥅𞤪𞤵'];

  const wordLists = {
    animals: animalWords, 
    adlam: ['𞤥𞤵𞤤𞤵𞤺𞤮𞤤', '𞤤𞤫𞤴𞤣𞤭', '𞤧𞤵𞤳𞤢𞥄𞤩𞤫', '𞤥𞤢𞤶𞥆𞤫𞤪𞤫', '𞤢𞤣𞤤𞤢𞤥', '𞤢𞤤𞤳𞤵𞤤𞤫', '𞤣𞤢𞤲𞤣𞤢𞤴𞤯𞤫', '𞤤𞤫𞤻𞤮𞤤', '𞤱𞤭𞤲𞤣𞤫𞤲', '𞤶𞤢𞤲𞤺𞤫𞤲', '𞤲𞤢𞥄𞤥𞤵', '𞤸𞤢𞥄𞤤𞤢', '𞤨𞤵𞤤𞤢𞤪'], // Example country words
    foods: [],       
    // ... (add more word lists for other topics)
    months: ["𞤧𞤭𞥅𞤤𞤮", "𞤷𞤮𞤤𞤼𞤮", "𞤲𞤦𞤮𞥅𞤴𞤮", "𞤧𞤫𞥅𞤯𞤼𞤮", "𞤣𞤵𞥅𞤶𞤮", "𞤳𞤮𞤪𞤧𞤮", "𞤥𞤮𞤪𞤧𞤮", "𞤶𞤵𞤳𞤮", "𞤧𞤭𞤤𞤼𞤮", "𞤴𞤢𞤪𞤳𞤮", "𞤶𞤮𞤤𞤮", "𞤲𞤦𞤮𞤱𞤼𞤮"],
    days: ["𞤸𞤮𞤪𞤦𞤭𞤪𞥆𞤫", "𞤪𞤫𞤬𞤦𞤭𞤪𞥆𞤫", "𞤢𞥄𞤩𞤵𞤲𞤣𞤫", "𞤥𞤢𞤱𞤦𞤢𞥄𞤪𞤫", "𞤲𞤶𞤫𞤧𞤤𞤢𞥄𞤪𞤫", "𞤲𞤢𞥄𞤧𞤢𞥄𞤲𞤣𞤫", "𞤥𞤢𞤱𞤲𞤣𞤫"]
  };
  
  
  //const wordsToFind = ["𞤤𞤫𞤴𞤣𞤭", "𞤧𞤵𞤳𞤢𞥄𞤩𞤫", "𞤥𞤢𞤶𞥆𞤫𞤪𞤫", "𞤢𞤣𞤤𞤢𞤥", "𞤢𞤤𞤳𞤵𞤤𞤫", "𞤣𞤢𞤲𞤣𞤢𞤴𞤯𞤫", "𞤤𞤫𞤻𞤮𞤤"];
  const rows = 14; // Increased for more space
  const cols = 15; // Increased for more space
  const grid = [];
  let wordsToFind = [];
  
  //const table = document.getElementById("word-search-grid");
  const startPage = document.getElementById("start-page");
  const gameContainer = document.getElementById("game-container");
  //const wordList = document.querySelector("#word-list ul");
  const congratsMessage = document.getElementById("congrats-message");
  const restartButton = document.getElementById("restart-button");
  const newWordsButton = document.getElementById("new-words-button");
  const goHomeButton = document.getElementById("go-home-button");
  const customTopicButton = document.getElementById("custom-topic-button");
  let table;
  let wordList;
  
  
  let isDragging = false;
  let selectedCells = [];
  let lastSelectedCell = null;
  let enforcedDirection = null; // Variable to track enforced direction
  let foundWords = 0; 
  
  
  // --- Constants for Directions ---
  const DIRECTION_EAST = "E";
  const DIRECTION_SOUTH = "S";
  const DIRECTION_SOUTHEAST = "SE";
  const DIRECTION_NORTH = "N";
  const DIRECTION_NORTHEAST = "NE";
  const DIRECTION_NORTHWEST = "NW";
  const DIRECTION_WEST = "W";
  const DIRECTION_SOUTHWEST = "SW";
  
  // --- Event Listeners ---
  startPage.addEventListener("click", handleTopicButtonClick);
  newWordsButton.addEventListener("click", handleNewWordsButtonClick);
  goHomeButton.addEventListener("click", handleGoHomeButtonClick);
  
  
  // --- Event Handlers ---
  function handleTopicButtonClick(event) {
    if (event.target.classList.contains("topic-button")) {
          const selectedTopic = event.target.dataset.topic;
  
          if (selectedTopic === "custom") { // Handle custom topic
              const customWords = getCustomWords();
              if (customWords.length > 0) {
                  wordsToFind = customWords;
                  startGame();
              } else {
                  alert("Please enter at least one word.");
              }
          } else { // Handle pre-defined topics
              wordsToFind = getRandomWordsToFind(selectedTopic);
              startGame();
          }
      }
  }
  
  function handleNewWordsButtonClick() {
    const activeTopicButton = document.querySelector('.topic-button.active');
    if (activeTopicButton && activeTopicButton.dataset.topic !== "custom") {
      wordsToFind = getRandomWordsToFind(activeTopicButton.dataset.topic);
      foundWords = 0; // Reset foundWords counter
      resetGame(); // Reset game with new words
    }
  }
  
  function handleGoHomeButtonClick() {
    startPage.style.display = "block";
    gameContainer.style.display = "none";
    document.querySelectorAll('#custom-topic-section input[type="text"]').forEach(input => {
      input.value = '';
    });
    document.querySelector('.topic-button.active').classList.remove("active");
  }
  
  
  
  
  
  // Get Custom Words from the Input Table
  function getCustomWords() {
      const wordInputs = document.querySelectorAll("#custom-topic-section input[type='text']");
      const customWords = [];
  
      wordInputs.forEach(input => {
          const word = input.value.trim();
          if (word !== "") {
              customWords.push(word);
          }
      });
  
      return customWords;
  }
  
  // --- Functions ---
  
  // Function to split a word into Adlam characters
  function splitIntoCharacters(str) {
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
  
  // Function to get a random sample of 8 words from allWords
  function getRandomWordsToFind(topic) { // Take topic as argument
    const shuffledWords = wordLists[topic].slice().sort(() => Math.random() - 0.5);
    const uniqueWords = [];
    while (uniqueWords.length < 8 && shuffledWords.length > 0) {
      const word = shuffledWords.pop();
      if (!uniqueWords.includes(word)) {
        uniqueWords.push(word);
      }
    }
    return uniqueWords;
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
        const foundWordClass = `found-word-${i + 1}`; // Start from 1, not 0
        selectedCells.forEach(cell => {
          cell.classList.add(foundWordClass);
          cell.classList.remove("selected");
        });
  
        // Scratch out the word in the list
        wordList.children[i].classList.add("found");
  
        foundWords++;
  
        if (foundWords === wordsToFind.length) {
          alert("𞤓𞤧𞤳𞤭𞤲 𞤥𞤢𞥄𞤣𞤢. 𞤢 𞤴𞤭𞥅𞤼𞤴𞤭𞥅 𞤳𞤮𞤲𞤺𞤵𞤣𞤭 𞤯𞤭𞤲 𞤬𞤮𞤱"); 
          //resetGame(); // Automatically restart after winning
        }
  
        return; // Stop checking once a match is found
      }
    }
  
    // If no match found, clear only the temporary highlight
    selectedCells.forEach(cell => cell.classList.remove("selected"));
  }
  
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
  
    // 1. Check if the game was a custom game
    const activeTopicButton = document.querySelector('.topic-button.active');
    if (activeTopicButton && activeTopicButton.dataset.topic === "custom") {
      // Return to the start page for custom games
      startPage.style.display = "block";
      gameContainer.style.display = "none";
  
      // Clear custom word inputs and reset active button class
      document.querySelectorAll('#custom-topic-section input[type="text"]').forEach(input => {
        input.value = '';
      });
      activeTopicButton.classList.remove("active");
    } else {
      // For non-custom games, regenerate words and restart the game
      wordsToFind = getRandomWordsToFind(activeTopicButton.dataset.topic);
      startGame(); // this will recreate the grid and table
    }
  }
  
  
  function createGridAndTable() {
    // Create the grid and fill it with words
    for (let i = 0; i < rows; i++) {
      grid[i] = [];
      for (let j = 0; j < cols; j++) {
        grid[i][j] = "?";
      }
    }
  
    for (const word of wordsToFind) {
      placeWord(word, grid);
    }
  
    // Fill remaining cells with random letters
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === "?") {
          grid[i][j] = letters[Math.floor(Math.random() * letters.length)];//""
        }
      }
    }
  
    // Create/update table 
    table = document.getElementById("word-search-grid"); // Assign table element
    table.innerHTML = "";
    for (let i = 0; i < rows; i++) {
      const row = table.insertRow();
      for (let j = 0; j < cols; j++) {
        const cell = row.insertCell();
        cell.textContent = grid[i][j];
      }
    }
  }
  
  
  function populateWordList() {
    wordList.innerHTML = ""; // Clear existing word list
    wordsToFind.forEach(word => {
      const li = document.createElement("li");
      li.textContent = word;
      wordList.appendChild(li);
    });
  }
  
  
  // --- Start Game Function ---
  function startGame() {
    //foundWords=0;
    startPage.style.display = "none";
    gameContainer.style.display = "block";
    wordList = document.querySelector("#word-list ul"); 
    createGridAndTable();
   
  
    // Create/update table (corrected)
    table = document.getElementById("word-search-grid"); // Assign table element
    table.innerHTML = "";
    for (let i = 0; i < rows; i++) {
      const row = table.insertRow();
      for (let j = 0; j < cols; j++) {
        const cell = row.insertCell();
        cell.textContent = grid[i][j];
      }
    }
    populateWordList();
    
    // Add "active" class to the selected topic button (including custom)
    const topicButtons = document.querySelectorAll(".topic-button");
    topicButtons.forEach(button => button.classList.remove("active"));
    if (event && event.target) { // check if the event and target exist before adding class. This happens when we call startGame inside resetGame
      event.target.classList.add("active");
    }
  
    // --- Event Listeners for Game (mousedown, mousemove, mouseup) ---
    table.addEventListener("mousedown", handleMouseDown);
    table.addEventListener("mousemove", handleMouseMove);
    table.addEventListener("mouseup", handleMouseUp);
  }
  
  
  
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
          //break; 
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
  
  
  
  // Initialize the game on page load
  //wordsToFind = getRandomWordsToFind("animals"); // Start with animals
  //startGame();
  
  
  
  
  
  
  
  
  
  
