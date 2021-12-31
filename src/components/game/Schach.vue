<template>
<div>
  <div class="game_container">

    <div class="game_field_container">

      <table id="game_field">

        <tr>
          <td>&nbsp;</td>
          <td class="chess_cell header_cell" v-for="char in chessHeader" :key="char">
            {{ char }}
          </td>
        </tr>

        <tr v-for="rowIndex in 8" :key="rowIndex" class="chess_row">

          <td class="chess_cell number_cell">{{ rowIndex }}</td>
          <td v-for="columnIndex in 8" :set="id = convertIndizesToString(rowIndex,columnIndex)"  :key="columnIndex" class="chess_cell chess_piece" value="">
            <!--
            <template v-if="columnIndex === 0">

            </template>
            <template v-if="columnIndex !== 0">

            </template>
            <img src="../../assets/images/pieces2/knight-white.png" alt="">
            <Piece :ref="convertIndizesToString(rowIndex,columnIndex)" class="piece_component" :id="convertIndizesToString(rowIndex,columnIndex)" value=""></Piece>
            -->
            <Piece :id="id" class="piece_component" :color="getPropertById(id, 'color')" :type="getPropertById(id, 'type')" svg-color="" :value="getPropertById(id, 'figure')"></Piece>
          </td>
        </tr>
      </table>
    </div>



    <div class="action_container">
      <div class="king_piece">
        <b id="kingPiece" class="white">♔</b>
      </div>
      <div class="game_status">
        <b>Status: </b>
        <i id="gameStatus" ></i>
      </div>
      <br>
      <div class="move_container">
        <div class="buttons">
          <button v-on:click="newGame" class="action-button new-game-button">New Game</button>
        </div>

        <div class="buttons">
          <div class="text-white mb-1"><strong>Debug: </strong></div>
          <button v-on:click="triggerConvertPopup" class="action-button new-game-button mb-1">Convert Pawn</button>
          <button v-on:click="triggerGameOverPopup" class="action-button new-game-button mb-1">Game Over</button>
        </div>

      </div>
    </div>


    <Modal v-bind:ref-name="'gameOverPopup'" v-bind:show="this.showGameOverModal" element-i-d="game-over-popup" background-class="bg-dark">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header text-center bg-black">
            <h5 class="modal-title text-white" id="test-title"><b>Game Over: </b></h5>
          </div>
          <div class="modal-body">
            <p class="text-center">
              <img src="../../assets/images/animated_bishop.webp" alt="" width="200" height="303" class="d-inline-block align-text-top">
            </p>
            <h4 class="text-center"><strong>Would you like to start a new Game?</strong></h4>
          </div>
          <div class="modal-footer bg-black">
            <button v-on:click="newGame" class="action-button new-game-button" data-dismiss="modal">New Game</button>
          </div>
        </div>
      </div>
    </Modal>

    <Modal v-bind:ref-name="'convertPawnPopup'" v-bind:show="showConvertPawnModal" element-i-d="convert-pawn-popup" background-class="">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header text-center">
            <h5 class="modal-title"><strong>Convert Pawn To:</strong></h5>
          </div>
          <div class="modal-body row">
            <div id="queen" class="col-sm convert_piece">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                <g style="fill:#ffffff;stroke:#000000;stroke-width:1.5;stroke-linejoin:round">
                  <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"/>
                  <path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"/>
                  <path d="M 11.5,30 C 15,29 30,29 33.5,30" style="fill:none"/>
                  <path d="M 12,33.5 C 18,32.5 27,32.5 33,33.5" style="fill:none"/>
                  <circle cx="6" cy="12" r="2" />
                  <circle cx="14" cy="9" r="2" />
                  <circle cx="22.5" cy="8" r="2" />
                  <circle cx="31" cy="9" r="2" />
                  <circle cx="39" cy="12" r="2" />
                </g>
              </svg>
            </div>
            <div id="rook" class="col-sm convert_piece">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                <g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                  <path
                      d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
                      style="stroke-linecap:butt;" />
                  <path
                      d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
                      style="stroke-linecap:butt;" />
                  <path
                      d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
                      style="stroke-linecap:butt;" />
                  <path
                      d="M 34,14 L 31,17 L 14,17 L 11,14" />
                  <path
                      d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
                      style="stroke-linecap:butt; stroke-linejoin:miter;" />
                  <path
                      d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
                  <path
                      d="M 11,14 L 34,14"
                      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
                </g>
              </svg>
            </div>
            <div id="bishop" class="col-sm convert_piece">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                  <g style="fill:#ffffff; stroke:#000000; stroke-linecap:butt;">
                    <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"/>
                    <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/>
                    <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/>
                  </g>
                  <path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/>
                </g>
              </svg>
            </div>
            <div id="knight" class="col-sm convert_piece">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                  <path
                      d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
                      style="fill:#ffffff; stroke:#000000;" />
                  <path
                      d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
                      style="fill:#ffffff; stroke:#000000;" />
                  <path
                      d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
                      style="fill:#000000; stroke:#000000;" />
                  <path
                      d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
                      transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
                      style="fill:#000000; stroke:#000000;" />
                </g>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </Modal>

  </div>

  <div id="invalid-move-alert" class="alert alert-danger alert-dismissible fade show mt-3" role="alert" style="opacity: 0">
    <strong>Invalid Move!</strong>
  </div>
</div>
</template>

<script>
import {webSocketMixin} from "@/mixins/webSocketMixin";
import $ from 'jquery'
import Modal from "@/components/shared/Modal";
import Piece from "@/components/game/pieces/Piece";


export default {
  name: "Schach",
  components: {Piece, Modal},
  mixins: [webSocketMixin],
  data: function() {
    return {
      chessHeader: ["A", "B", "C", "D", "E", "F", "G", "H"],
      whites: ['♔', '♕', '♗', '♘', '♖', '♙'],
      blacks: ['♚', '♛', '♝', '♞', '♜', '♟'],
      pawnForward: ['♔', '♕', '♗', '♘', '♖', '♙', '♚', '♛', '♝', '♞', '♜', '♟'],
      turn: "white",
      selected: false,
      moveFrom: '',
      showGameOverModal: false,
      showConvertPawnModal: false,
      piecesArray: undefined,
      loaded: false,
    }
  },
  created: function () {
    this.connectToWebSocket();

    this.setOnMessage(this.reactToWebSocketMessage);

    //ToDo: Better solution for this, more in harmony with Vue
    document.addEventListener('click', this.move);
  },
  methods: {
    convertIndizesToString: function (idx1, idx2) {
      return idx1.toString() + idx2.toString()
    },
    reactToWebSocketMessage: function (message) {
      const {event, eventData } = JSON.parse(message.data);
      console.log("Received Message: ", event)

      switch (event) {
        case "GameFieldChanged":
          this.loaded = false;
          console.log(eventData)
          this.piecesArray = eventData;
          this.loadGame(eventData);
          this.loaded = true;
          break;
        case "StatusChanged":
          this.setStatus(eventData);
          break;
        default:
          console.error("Unknown Event Type For Message");
          break;
      }
    },
    loadGame: function (gameField) {
      $(".chess_piece").each(function(index, cell) {
        if (!cell.id) {
          return false;
        }
        const match = gameField.filter(piece => piece.coordinate === cell.id);
        if (match.length) {
          const piece = match[0];


          cell.setAttribute("value", piece.figure);

          /*
          const div = document.createElement('div');
          cell.appendChild(div);
          createApp(Piece, {color: piece.color, type: piece.type}).mount(div)
          cell.innerHTML =
          `<Piece class="piece_component" color="${piece.color}" type="${piece.type}" svg-color="" id="${cell.id}" value="${piece.figure}"></Piece>`
           */
        } else {
          cell.textContent = " ";
          cell.setAttribute("value", " ");
        }
      })
    },
    getPropertById: function (id, type) {
      if (!this.piecesArray) {
        return " ";
      }
      const match = this.piecesArray.filter(piece => piece.coordinate === id)[0];

      return match ? match[type] : " ";
    },
    setStatus: function (status) {
      /// RUNNING = 0, CHECKED = 1, CHECKMATE = 2, MOVE_ILLEGAL = 3, PAWN_REACHED_END = 4
      if (status.statusID > 0) {
          this.reactToSpecialGameStatus(status);
        } else {
          this.closeInvalidMoveAlert();
        }
        const statusElement = document.getElementById("gameStatus");
        const piece = document.getElementById("kingPiece");
        if (status.player === "BLACK") {
          statusElement.textContent = "PLAYER BLACK`S Turn";
          piece.textContent = "♚";
          piece.classList.remove("white");
          piece.classList.add("black");
          this.turn = "black";
        } else {
          statusElement.textContent = "PLAYER WHITE`S Turn";
          piece.textContent = "♔";
          piece.classList.remove("black");
          piece.classList.add("white");
          this.turn = "white";
        }
    },
    reactToSpecialGameStatus: function (status) {
      // ToDo: Save Games (Local Storage)
      console.log('Special Status: ', status.statusID)

      if (status.statusID === 3) {
        $('#invalid-move-alert').text("Invalid Move").css("opacity", "100");
        return;
      }
      if (status.statusID === 1) {
        $('#invalid-move-alert').text("Player " + status.player + " is Checked").css("opacity", "100");
        return;
      }
      if (status.statusID === 2) {
        this.closeInvalidMoveAlert();
        this.showGameOverModal = true;
        $('#game-over-popup-title').text('Game Over: Player' + status.player + " Won!")
        return;
      }
      if (status.statusID === 4) {
        this.closeInvalidMoveAlert();
        this.showConvertPawnModal = true;
        $('.convert_piece').click(event => {
          this.sendWebSocketRequest("convert-pawn/" + event.currentTarget.id);
          this.showConvertPawnModal = false;
        })
      }
    },
    closeInvalidMoveAlert: function () {
      $('#invalid-move-alert').css("opacity", "0");
    },
    newGame: function () {
      this.sendWebSocketRequest("new-game");
      this.showGameOverModal = false;
    },
    move: function (event) {
      const id = event.target.id;
      if (!this.isPiece(id)) {
        return;
      }
      //unselect
      if (id === this.moveFrom) {
        this.selected = false
        this.moveFrom = '';
        this.removeAllSuggestions();
        return;
      }
      if (!this.selected) {
        this.moveFrom = id
        this.selected = true
        console.log('Suggesting Moves...')
        this.suggestMoves(event.target, id);
      } else {

        if ('URLSearchParams' in window) {
          let searchParams = new URLSearchParams(window.location.search);
          searchParams.set("moveFrom", this.moveFrom);
          searchParams.set("moveTo", id);

          this.sendWebSocketRequest("move/" + JSON.stringify({ moveFrom: this.moveFrom, moveTo: id }));
          this.selected = false;
          this.moveFrom = '';
          this.removeAllSuggestions()
        }

      }
    },
    isPiece: function (id) {
      return id && id.length === 2;
    },
    suggestMoves: function (target, targetID) {
      const targetValue = target.getAttribute('value');
      const color = this.getColor(targetValue)
      console.log('Piece: ', targetValue)

      switch (targetValue) {
        case '♚':
          this.suggestKingMoves(targetID, color);
          break;
        case '♔':
          this.suggestKingMoves(targetID, color);
          break;
        case '♛':
          this.suggestQueenMoves(targetID, color);
          break;
        case '♕':
          this.suggestQueenMoves(targetID, color);
          break;
        case '♝':
          this.suggestBishopMoves(targetID, color);
          break;
        case '♗':
          this.suggestBishopMoves(targetID, color);
          break;
        case '♞':
          this.suggestKnightMoves(targetID, color);
          break;
        case '♘':
          this.suggestKnightMoves(targetID, color);
          break;
        case '♜':
          this.suggestRookMoves(targetID, color);
          break;
        case '♖':
          this.suggestRookMoves(targetID, color);
          break;
        case '♟':
          this.suggestBlackPawnMoves(targetID, color);
          break;
        case '♙':
          this.suggestWhitePawnMoves(targetID, color);
          break;
        default: return;
      }
    },
    suggestKingMoves: function (id, color) {
      // +10 === next row; +1 === next cell
      const idNumber = parseInt(id);
      // King can move one cell in each direction
      const aboveCell = idNumber + 10;
      const belowCell = idNumber - 10;
      const cellArray = [
        aboveCell, belowCell, aboveCell - 1, aboveCell + 1, belowCell - 1,
        belowCell + 1, idNumber - 1, idNumber + 1
      ]
      for (let index in cellArray) {
        const idString = cellArray[index].toString();
        this.setSuggestionColorByID(idString, color);
      }

    },
    suggestQueenMoves: function (id, color) {
      const idNumber = parseInt(id);
      // Queen can move infinite cells in each direction
      this.populateHorizontalCellSuggestions(idNumber, color);
      this.populateVerticalCellSuggestions(idNumber, color);
      this.populateDiagonalCellSuggestions(idNumber, color);
    },
    suggestBishopMoves: function (id, color) {
      const idNumber = parseInt(id);
      // Bishop can move vertical cells in each direction
      this.populateDiagonalCellSuggestions(idNumber, color);
    },
    suggestKnightMoves: function(id, color) {
      const idNumber = parseInt(id);
      // Knight can jump one cell and then take the next right/left cell
      const aboveCell = idNumber + 20;
      const belowCell = idNumber - 20;
      const rightCell = idNumber + 2;
      const leftCell = idNumber - 2;
      const cellArray = [
        aboveCell - 1, aboveCell + 1, belowCell - 1,
        belowCell + 1, rightCell - 10, rightCell + 10,
        leftCell - 10, leftCell + 10
      ]
      for (let index in cellArray) {
        const idString = cellArray[index].toString();
        this.setSuggestionColorByID(idString, color);
      }

    },
    suggestRookMoves: function (id, color) {
      const idNumber = parseInt(id);
      // Bishop can move straight cells in each direction
      this.populateHorizontalCellSuggestions(idNumber, color);
      this. populateVerticalCellSuggestions(idNumber, color);
    },
    suggestWhitePawnMoves: function (id, color) {
      const idNumber = parseInt(id);
      const aboveLeft = document.getElementById((idNumber - 11).toString());
      const aboveRight = document.getElementById((idNumber - 9).toString());

      if (aboveLeft && !this.isCellEmpty(aboveLeft)) {
        this.setSuggestionColorByCell(aboveLeft, color);
      }
      if (aboveRight && !this.isCellEmpty(aboveRight)) {
        this.setSuggestionColorByCell(aboveRight, color);
      }

      this.setSuggestionColorByID(idNumber - 10, this.pawnForward);
      if (!this.isCellEmpty(document.getElementById((idNumber - 10).toString()))) {
        return;
      }
      // Pawn can move two Fields on First Turn
      if (id.startsWith("7")) {
        this.setSuggestionColorByID(idNumber - 20, color);
      }
    },

    suggestBlackPawnMoves: function (id, color) {
      const idNumber = parseInt(id);
      const aboveLeft = document.getElementById((idNumber + 9).toString());
      const aboveRight = document.getElementById((idNumber + 11).toString());

      if (aboveLeft && !this.isCellEmpty(aboveLeft)) {
        this.setSuggestionColorByCell(aboveLeft, color);
      }
      if (aboveRight && !this.isCellEmpty(aboveRight)) {
        this.setSuggestionColorByCell(aboveRight, color);
      }

      this.setSuggestionColorByID(idNumber + 10, this.pawnForward);
      if (!this.isCellEmpty(document.getElementById((idNumber + 10).toString()))) {
        return;
      }
      // Pawn can move two Fields on First Turn
      if (id.startsWith("2")) {
        this.setSuggestionColorByID(idNumber + 20, color);
      }
    },
    populateHorizontalCellSuggestions: function (startingPoint, color) {
      let cellHozLeft = document.getElementById((startingPoint - 1).toString());
      let cellHozRight = document.getElementById((startingPoint + 1).toString());
      let i = 1;
      let j = 1;
      while (cellHozLeft) {
        this.setSuggestionColorByCell(cellHozLeft, color);
        if (!this.isCellEmpty(cellHozLeft)) {
          break;
        }
        i++;
        cellHozLeft = document.getElementById((startingPoint - i).toString());
      }
      while (cellHozRight) {
        this.setSuggestionColorByCell(cellHozRight, color);
        if (!this.isCellEmpty(cellHozRight)) {
          break;
        }
        j++;
        cellHozRight = document.getElementById((startingPoint + j).toString());
      }
    },
    populateVerticalCellSuggestions: function (startingPoint, color) {
      let cellVertUp = document.getElementById((startingPoint - 10).toString());
      let cellVertDown = document.getElementById((startingPoint + 10).toString());
      let i = 10;
      let j = 10;
      while (cellVertUp) {
        this.setSuggestionColorByCell(cellVertUp, color);
        if (!this.isCellEmpty(cellVertUp)) {
          break;
        }
        i = i + 10;
        cellVertUp = document.getElementById((startingPoint - i).toString());
      }
      while (cellVertDown) {
        this.setSuggestionColorByCell(cellVertDown, color);
        if (!this.isCellEmpty(cellVertDown)) {
          break;
        }
        j = j + 10;
        cellVertDown = document.getElementById((startingPoint + j).toString());
      }
    },

    populateDiagonalCellSuggestions: function (startingPoint, color) {
      let cellDiagUpR = document.getElementById((startingPoint - 9).toString());
      let cellDiagUpL = document.getElementById((startingPoint - 11).toString());
      let cellDiagDownR = document.getElementById((startingPoint + 11).toString());
      let cellDiagDownL = document.getElementById((startingPoint + 9).toString());
      let i = 9;
      let j = 11;
      let k = 11;
      let l = 9;
      // Diagonal UP
      while (cellDiagUpR) {
        this.setSuggestionColorByCell(cellDiagUpR, color);
        if (!this.isCellEmpty(cellDiagUpR)) {
          break;
        }
        i = i + 9;
        cellDiagUpR = document.getElementById((startingPoint - i).toString());
      }
      while (cellDiagUpL) {
        this.setSuggestionColorByCell(cellDiagUpL, color);
        if (!this.isCellEmpty(cellDiagUpL)) {
          break;
        }
        j = j + 11;
        cellDiagUpL = document.getElementById((startingPoint - j).toString());
      }

      // Diagonal DOWN
      while (cellDiagDownR) {
        this.setSuggestionColorByCell(cellDiagDownR, color);
        if (!this.isCellEmpty(cellDiagDownR)) {
          break;
        }
        k = k + 11;
        cellDiagDownR = document.getElementById((startingPoint + k).toString());
      }
      while (cellDiagDownL) {
        this.setSuggestionColorByCell(cellDiagDownL, color);
        if (!this.isCellEmpty(cellDiagDownL)) {
          break;
        }
        l = l + 9;
        cellDiagDownL = document.getElementById((startingPoint + l).toString());
      }
    },
    isCellEmpty: function (cell) {
      const cellValue = cell.getAttribute('value');
      return cellValue === " ";
    },
    getColor: function (cell) {
      if(this.whites.includes(cell)){
        return this.whites;
      } else {
        return this.blacks;
      }
    },
    setSuggestionColorByID: function (id, color) {
      const cell = document.getElementById(id);
      if (!cell) {
        return;
      }
      const cellValue = cell.getAttribute('value');

      if (cellValue === " "|| !color.includes(cellValue)) {
        cell.classList.add('suggestion-green');
      } else {
        cell.classList.add('suggestion-red');
      }
    },
    setSuggestionColorByCell: function (cell, color) {
      const cellValue = cell.getAttribute('value');

      if (cellValue === " " || !color.includes(cellValue)) {
        cell.classList.add('suggestion-green');
      } else {
        cell.classList.add('suggestion-red');
      }
    },
    removeAllSuggestions: function() {
      $(".piece_component").removeClass("suggestion-green").removeClass("suggestion-red")
    },



    /// DEBUG
    triggerConvertPopup: function () {
      this.showConvertPawnModal = true;
      $('.convert_piece').click(event => {
        this.sendWebSocketRequest("convert-pawn/" + event.currentTarget.id);
        this.showConvertPawnModal = false;
      })
    },
    triggerGameOverPopup: function () {
      this.showGameOverModal = true;
      $('#game-over-popup-title').text('Game Over: Player White Won!')
    },
  }
}
</script>

<style scoped lang="less">

.game_container {
  background-color: #181818;
  border-radius: 1em;
  margin: 0 auto 0 auto;
  width: 70%;
  font-size: 1.2vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
}

.game_field_container {
  display: inline-block;
  margin-right: 2em;
}
.action_container {
  text-align: center;
}
.move_container {
  display: flex;
  flex-direction: column;
}
.game_status {
  color: whitesmoke;
  border: 1px solid whitesmoke;
  border-radius: 1em;
  padding: .5em;
  min-width: 10em;
}
.game_status_invalid {
  border-color: red;
}

.king_piece {
  font-size: 2em;
}
.black {
  color: black;
}
.white {
  color: whitesmoke;
}

input, label {
  display: block;
}
label {
  font-size: 1em;
}
.action-button {
  background-color: black;
  color: whitesmoke;
  border: 1px solid whitesmoke;
  padding: .5em;
  font-size: .75em;
  border-radius: 10px;
  cursor: pointer;
  margin-right: .5em;
  &:hover {
    color: black;
    background-color: whitesmoke;
  }
}
.action-button[disabled] {
  cursor: not-allowed;
  opacity: .65;
  &:hover {
    color: whitesmoke;
    background-color: black;
  }
}



.moveFrom_input, .moveTo_input {
  text-align: left;
  color: whitesmoke;
}
.moveFrom_input {
  margin-bottom: .5em;
}
#moveTo, #moveFrom {
  border-radius: 5px;
  height: 1.5em;
}
.buttons {
  margin-top: 1.5em;
}


#game_field {
  border-collapse: collapse;
}

.chess_cell {
  font-size: 3em;
  text-align: center;
  padding: 0;
  width: 1.4em;
  height: 1.4em;
}

.header_cell {
  color: whitesmoke;
  font-size: 1.5em;
}

.chess_piece {
  cursor: pointer;
  &:hover {
  }
}



.chess_row:nth-child(odd) {

  .chess_cell:nth-child(odd) {
    background-color: whitesmoke;
  }
  .chess_cell:nth-child(even) {
    background-color: gray;
  }
  .chess_cell:first-child {
    background-color: transparent;
    color: whitesmoke;
    font-size: 1.5em;
  }
}

.chess_row:nth-child(even) {
  .chess_cell:nth-child(odd) {
    background-color: gray;
  }
  .chess_cell:nth-child(even) {
    background-color: whitesmoke;
  }
  .chess_cell:first-child {
    background-color: transparent;
    color: whitesmoke;
    font-size: 1.5em;
  }
}


.suggestion-green {
  background-color: rgba(117, 217, 117, 0.69) !important;
  border-width: 0.01em;
}
.suggestion-red {
  background-color: rgba(224, 101, 101, 0.93) !important;
  border-width: 0.01em;
}

.new-game-button {
  font-size: 1em;
}

.convert_piece {
  cursor: pointer;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
}

.piece_component {
  width: 100%;
  height: 100%;
}

</style>