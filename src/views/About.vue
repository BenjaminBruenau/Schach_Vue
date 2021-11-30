<template>
  <div class="about">
    <!-- Header - set the background image for the header in the line below-->
    <header class="py-5 bg-image-full schach_about_bg1">
      <div class="text-center my-5">
        <img class="img-fluid rounded-circle mb-4" src="../assets/images/roundIcon.png" alt="..."/>
        <h1 class="text-white fs-3 fw-bolder">Chess</h1>
      </div>
    </header>
    <!-- Content section-->
    <section class="py-5">
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h2>Lore</h2>
            <p class="lead">
              Chess is a board game played between two players. It is sometimes called Western chess, or international chess to distinguish it from related games such as xiangqi. The current form of the game emerged in Southern Europe during the second half of the 15th century after evolving from the medieval game of Shatranj (Arabic) or chatrang (Persian), which in turn evolved from the ancient Indian game, Chaturanga. Today, chess is one of the world's most popular games, played by millions of people worldwide.
            <p class="mb-0">
              Chess is an abstract strategy game and involves no hidden information. It is played on a square chessboard with 64 squares arranged in an eight-by-eight grid. At the start, each player (one controlling the white pieces, the other controlling the black pieces) controls sixteen pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. The object of the game is to checkmate the opponent's king, whereby the king is under immediate attack (in "check") and there is no way for it to escape. There are also several ways a game can end in a draw.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Image element - set the background image for the header in the line below-->
    <div class="py-5 bg-image-full schach_about_bg2">
      <!-- Put anything you want here! The spacer below with inline CSS is just for demo purposes!-->
      <div style="height: 20rem"></div>
    </div>
    <!-- Content section-->
    <section class="py-5">
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h2>Pieces</h2>
            <table>
              <tr>
                <th>Name</th>
                <th>Icon</th>
                <th>Moves</th>
              </tr>
              <tr>
                <td>King</td>
                <td>♚</td>
                <td>one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.</td>
              </tr>
              <tr>
                <td>Queen</td>
                <td>♛</td>
                <td>diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.</td>
              </tr>
              <tr>
                <td>Bishop</td>
                <td>♝</td>
                <td>diagonally any number of squares. They are unable to jump over pieces.</td>
              </tr>
              <tr>
                <td>Knight</td>
                <td>♞</td>
                <td>in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.</td>
              </tr>
              <tr>
                <td>Rook</td>
                <td>♜</td>
                <td>horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.</td>
              </tr>
              <tr>
                <td>Pawn</td>
                <td>♟</td>
                <td>vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction.
                  Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.schach_about_bg1 {
  background-image: url('../assets/images/about-bg-image2.webp')
}
.schach_about_bg2 {
  background-image: url('../assets/images/about-bg-image1.webp');
}
</style>