<template>
<div v-if="graveyard" class="graveyard">
 <div v-for="(value, name) in counts" :key="name" :set="piece = transformAsciiToName(name)">
   <div class="graveyard_piece">
     <Piece :color="piece.color" :type="piece.name" svg-color=""></Piece>
   </div>
   <div class="graveyard_count" data-test="graveyard_count">{{value}}</div>

 </div>
</div>
</template>

<script>
import Piece from "@/components/game/pieces/Piece";
export default {
  name: "Graveyard",
  components: {Piece},
  data() {
    return {
      counts: {}
    }
  },
  props: {
    graveyard: Array,
  },
  watch: {
    graveyard() {
      console.log("GRAVEYARD: ", this.graveyard)
      this.populateCountsArray();
    }
  },
  methods: {
    populateCountsArray() {
      this.counts = {};
      this.graveyard.forEach(piece => {
        this.counts[piece] = (this.counts[piece] || 0) + 1;
      });
    },
    transformAsciiToName(targetValue) {
      switch (targetValue) {
        case '♚':
          return { name: "King", color: "Black" };
        case '♔':
          return { name: "King", color: "White" };
        case '♛':
          return { name: "Queen", color: "Black" };
        case '♕':
          return { name: "Queen", color: "White" };
        case '♝':
          return { name: "Bishop", color: "Black" };
        case '♗':
          return { name: "Bishop", color: "White" };
        case '♞':
          return { name: "Knight", color: "Black" };
        case '♘':
          return { name: "Knight", color: "White" };
        case '♜':
          return { name: "Rook", color: "Black" };
        case '♖':
          return { name: "Rook", color: "White" };
        case '♟':
          return { name: "Pawn", color: "Black" };
        case '♙':
          return { name: "Pawn", color: "White" };
        default: return;
      }
    }
  }
}
</script>

<style scoped>
.graveyard {
  display: flex;
  flex-direction: row;

}
.graveyard_piece {
  width: 3em;
  height: 3em;
}
.graveyard_count {
  color: #bdbdbd;
}
</style>