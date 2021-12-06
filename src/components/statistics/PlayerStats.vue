<template>
  <div class="background">
    <div class="col-md-3 col-sm-12 col-12 mt-3">
      <div class="player-model">
        <img src="../../assets/images/magnus-carlsen.webp" alt="Image not Found" class="player-image">
      </div>
    </div>

    <div class="col-md-8 col-sm-12 col-12 mt-3">
      <div class="player-info">

        <div class="name">{{ player.name }}</div>


        <table id="player-info">
          <tr >
            <td>Rank</td>
            <td style="color: #555454; font-weight: bold;text-shadow: 0 3px 0 rgba(0, 0, 0, 0.58);">{{ player.rank }}</td>
          </tr>
          <tr >
            <td>Elo</td>
            <td style="color: darkred">{{ player.elo }}</td>
          </tr>
          <tr >
            <td>Country</td>
            <td class="country">{{ player.country }}</td>
          </tr>
          <tr v-if="player.worldChampion">
            <td>World Champion</td>
            <td class="country" style="color: deepskyblue">{{ player.worldChampion }}</td>
          </tr>
        </table>
      </div>
    </div>


    <h2 class="match-history-title">Match History</h2>
    <div class="col-md-12 col-sm-12 col-12">
      <div class="match-history">
        <table class="match-history-table">
          <thead>
          <th>Gamemode</th>
          <th>Winner</th>
          </thead>
          <tbody>
          <tr v-for="match in player.matchHistory" v-bind:key="match" class="match-history-row">
            <td class="match-mode">{{ match.mode }}</td>
            <td>
              <a>
                <span class="player-name" >{{ match.winner }}</span>
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "player-stats",
  data: function() {
    return {
      player: {
        name: 'Magnus Carlsen',
        rank: 'Grandmaster',
        elo: 2855,
        country: 'Norway',
        worldChampion: 'Since 2013',
        matchHistory: [
          {
            mode: 'WM',
            winner: 'GM Caruana'
          },
          {
            mode: 'WM',
            winner: 'GM Carlsen'
          },
          {
            mode: 'WM',
            winner: 'GM Carlsen'
          },
        ]
      }
    }
  },
}
</script>

<style scoped lang="less">


.background {
  background-color: black;

  border-radius: 25px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 auto 2em auto;
  width: 85%;
}

.name {
  text-align: left;
  font-size: 30px;
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 5px;
}


.player-model {
  border: solid 1px whitesmoke;
  border-radius: 10px;
  margin: 0 50px 50px 50px;
  text-align: center;
}
.player-image {
  padding-top: .2em;
  padding-bottom: .2em;
  border-radius: 10px;
}

.player-info {
  border: 1px solid whitesmoke;
  border-radius: 10px;
  background-color: #181818;
  margin: 0 50px 50px 50px;
  padding: 12px;
  color: whitesmoke;
  /* box-shadow: 0 0 2px 3px rgba(255, 255, 255, .2);*/
}
.country {
  color: darkgreen;
}

#player-info {
  border-collapse: collapse;
  width: 100%;
  font-size: 21px;
}
#player-info tr {
  border-bottom: 2px solid rgba(255, 255, 255, .1);
}
#player-info tr:last-child {
  border-bottom: none;
}
#player-info td {
  padding: 1em 0 1em 0;
}






/* ------ Matches ------ */
.match-history-title {
  margin: 20px 50px 20px 50px;
  width: 91%;
  color: whitesmoke;
}
.match-history {
  border: 1px solid whitesmoke;
  background-color: #181818;
  border-radius: 10px;
  margin: 0 50px 50px 50px;
  color: whitesmoke;
  width: 91%;
}
.match-history-table-container {
  margin-left: 20px;
  margin-right: 20px;
}
.match-history-table {
  border-collapse: collapse;
  width: 100%;
  font-size: 21px;
  margin-bottom: 10px;
}
.match-history-table th {
  border-bottom: 1px solid whitesmoke;
}
.match-history-table td, .match-history-table th {
  padding: 8px;
  text-align: left;
  vertical-align: middle;
}
.match-history-table tr {
  border-radius: 10px;
}
.match-history-row:hover {
  background-color: black;
}
.match-mode {
  cursor: pointer;
  color: goldenrod;
  font-weight: bold;
  text-shadow: 0 3px 0 rgba(0, 0, 0, 0.58);
}
.player-name {
  cursor: pointer;
  color: whitesmoke;
}
.player-name:hover {
  cursor: pointer;
  text-decoration: underline;
}




@media screen and (max-width: 708px) {
  .background {
    width: 95%;
  }

  .match-history-title {
    margin-left: 10px;
  }
  .match-history {
    width: 100%;
    margin: 0 0 1.5em 0;
    overflow-x: auto;
  }
}


</style>