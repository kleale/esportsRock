<template>

    <div class="rounded border-4 border-slate-700">
    <div class="video_match_block">
      <div class="video_block" id="video">
        <div id="block-team-result">
          <div class="team">
            <div class="team-name-up">Lieutenant</div>
            <div class="heroes">
              <div class="card">
                <div class="hero-title">Beastmaster</div>
                <picture>
                  <source srcset="https://escorenews.com/media/game/hero/582/_256/38.png" type="image/webp" />
                  <img loading="lazy" src="https://escorenews.com/media/game/hero/582/_256/38.png" />
                </picture>
                <div class="player-nick">
                  <p>pomojka</p>
                </div>
              </div>
              <div class="card">
                <div class="hero-title">Elder Titan</div>
                <picture>
                  <source srcset="https://escorenews.com/media/game/hero/582/_256/103.png" type="image/webp" />
                  <img loading="lazy" src="https://escorenews.com/media/game/hero/582/_256/103.png" />
                </picture>
                <div class="player-nick">
                  <p>MiLAN</p>
                </div>
              </div>
              <div class="card">
                <div class="hero-title">Techies</div>
                <picture>
                  <source srcset="https://escorenews.com/media/game/hero/582/_256/105.png" type="image/webp" />
                  <img loading="lazy" src="https://escorenews.com/media/game/hero/582/_256/105.png" />
                </picture>
                <div class="player-nick">
                  <p>Merlin</p>
                </div>
              </div>
              <div class="card">
                <div class="hero-title">Arc Warden</div>
                <picture>
                  <source srcset="https://escorenews.com/media/game/hero/582/_256/113.png" type="image/webp" />
                  <img loading="lazy" src="https://escorenews.com/media/game/hero/582/_256/113.png" />
                </picture>
                <div class="player-nick">
                  <p>Copy</p>
                </div>
              </div>
              <div class="card">
                <div class="hero-title">Lina</div>
                <picture>
                  <source srcset="https://escorenews.com/media/game/hero/582/_256/25.png" type="image/webp" />
                  <img loading="lazy" src="https://escorenews.com/media/game/hero/582/_256/25.png" />
                </picture>
                <div class="player-nick">
                  <p>LoTMA-</p>
                </div>
              </div>
            </div>
          </div>
          <div class="team">
            <div class="heroes">
              <div class="card">
                <div class="hero-title">Phoenix</div>
                <picture>
                  <source srcset="https://escorenews.com/media/game/hero/582/_256/110.png" type="image/webp" />
                  <img loading="lazy" src="https://escorenews.com/media/game/hero/582/_256/110.png" />
                </picture>
                <div class="player-nick">
                  <p>@LeBronDota</p>
                </div>
              </div>
              <div class="card">
                <div class="hero-title">Keeper of the Light</div>
                <picture>
                  <source srcset="https://escorenews.com/media/game/hero/582/_256/90.png" type="image/webp" />
                  <img loading="lazy" src="https://escorenews.com/media/game/hero/582/_256/90.png" />
                </picture>
                <div class="player-nick">
                  <p>W1sh-</p>
                </div>
              </div>
              <div class="card">
                <div class="hero-title">Centaur Warrunner</div>
                <picture>
                  <source srcset="https://escorenews.com/media/game/hero/582/_256/96.png" type="image/webp" />
                  <img loading="lazy" src="https://escorenews.com/media/game/hero/582/_256/96.png" />
                </picture>
                <div class="player-nick">
                  <p>Kebabmaker Mk. II</p>
                </div>
              </div>
              <div class="card">
                <div class="hero-title">Rubick</div>
                <picture>
                  <source srcset="https://escorenews.com/media/game/hero/582/_256/86.png" type="image/webp" />
                  <img loading="lazy" src="https://escorenews.com/media/game/hero/582/_256/86.png" />
                </picture>
                <div class="player-nick">
                  <p>MAMA, SAMPUN&amp;apos;̱</p>
                </div>
              </div>
              <div class="card">
                <div class="hero-title">Phantom Assassin</div>
                <picture>
                  <source srcset="https://escorenews.com/media/game/hero/582/_256/44.png" type="image/webp" />
                  <img loading="lazy" src="https://escorenews.com/media/game/hero/582/_256/44.png" />
                </picture>
                <div class="player-nick">
                  <p>WhaT&amp;apos;S UP</p>
                </div>
              </div>
            </div>
            <div class="team-name-down">MarsBet Team</div>
          
          </div>
        
        </div>
      </div>
    </div>
  </div> 

</template>

<style scoped lang="scss">
.bg-block {
  background: rgb(49, 49, 54);
  background: radial-gradient(ellipse at 10% 10%, rgb(42 42 47) 0%, rgb(27 27 33) 100%);
}

.video_match_block {
  position: relative;
}

.video_block {
  position: relative;
  min-height: 360px;
}

#block-team-result {
  background: url(https://game-tournaments.com/assets/img/_match/match_bg_582_without_card.jpg) no-repeat 50% 50%;
  background-size: cover;
  overflow: hidden;
}
#block-team-result .team-name-up {
  text-align: center;
  color: #be5c35;
  font-size: 24px;
}
#block-team-result .heroes {
  display: flex;
  justify-content: space-between;
  padding: 5px 5px 5px 0;
}
#block-team-result .card {
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 10px #000;
  width: 18%;
  height: 10em;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}
#block-team-result .hero-title {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  height: 4.5em;
  vertical-align: bottom;
  display: flex;
  align-items: flex-end;
}
#block-team-result .card picture {
  width: 100%;
  height: auto;
  max-width: 100%;
}
#block-team-result .card picture img {
  width: 100%;
  height: auto;
  max-width: 100%;
}
#block-team-result .player-nick {
  padding-top: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
#block-team-result .player-nick p {
  text-align: center;
  font-weight: normal;
  font-size: 12px;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
#block-team-result .team-name-down {
  text-align: center;
  color: #a7d848;
  font-size: 24px;
}
#block-team-result .gamevid {
  position: static;
  margin: 10px auto;
}
.gamevid .tse-scrollable {
  height: auto;
}
.gamevid > div {
  background: rgba(62, 68, 76, 0.91) 0 0;
  border-radius: 2px;
  box-shadow: 0 0 10px #000;
  max-height: 172px;
  overflow: hidden;
  width: 500px;
  position: relative;
}
.tse-scrollable {
  width: 328px;
}
.tse-scrollable {
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
}
.gamevid * {
  vertical-align: middle;
}
</style> 