const prompt = require(`prompt-sync`)();
console.clear();
function jogo() {
  let equipe = [];
  let deposito = [];
  let encontro;
  let randomizarPkm;
  let randomizarPkmGym;
  let contador = 0;
  let dias = 0;
  let escolhas;
  let insignia = 0;
  let pkmMortos = [];
  let retirado = [];
  let escolhaParty = 1;

  let rotas = [
    `Você entrou na floresta de Pallet...`,
    `Você entrou na floresta de Pewter...`,
    `Você entrou na caverna de Cerulean...`,
    `Você entrou no bosque de Celadon...`,
    `Você entrou na floresta de Fuchsia...`,
    `Você entrou nos arredores de Saffrom...`,
    `Você entrou na ilha de Seafoam...`,
  ];

  let cidades = [
    `Você chegou na cidade de Pewter.`,
    `Você chegou na cidade de Cerulean.`,
    `Você chegou na cidade de Vermilion.`,
    `Você chegou na cidade de Fuchsia.`,
    `Você chegou na cidade de Saffron.`,
    `Você chegou na cidade de Seafoam.`,
    `Você chegou na cidade de Viridian.`,
  ];

  while (true) {
    console.clear();

    class pokemon {
      constructor(pkm, hpOriginal, nvl, atk, hp, speed, evolution) {
        this.pkm = pkm;
        this.nvl = nvl;
        this.atk = atk;
        this.hp = hp;
        this.speed = speed;
        this.hpOriginal = hpOriginal;
        this.evolution = evolution;
      }
      mudarhp(novaVida) {
        this.hp = novaVida;
      }
      mudarnvl(novonvl) {
        this.nvl = novonvl;
      }
    }

    let venusaur = new pokemon(`venusaur`, 80, 41, 19, 80, 80, []);
    let ivysaur = new pokemon(`ivysaur`, 60, 16, 15, 60, 60, [
      venusaur,
      ``,
      ``,
    ]);
    let bulbasaur = new pokemon(`bulbasaur`, 45, 1, 12, 45, 45, [ivysaur, ``]);
    let blastoise = new pokemon(`blastoise`, 79, 41, 20, 79, 78, []);
    let wartortle = new pokemon(`wartortle`, 59, 16, 16, 59, 58, [
      blastoise,
      ``,
      ``,
    ]);
    let squirtle = new pokemon(`squirtle`, 44, 1, 13, 44, 43, [wartortle, ``]);
    let charizard = new pokemon(`charizard`, 78, 41, 20, 78, 100, []);
    let charmeleon = new pokemon(`charmeleon`, 58, 16, 16, 58, 80, [
      charizard,
      ``,
      ``,
    ]);
    let charmander = new pokemon(`charmander`, 39, 1, 13, 39, 65, [
      charmeleon,
      ``,
    ]);
    let pidgeot = new pokemon(`pidgeot`, 83, 41, 11, 83, 96, []);
    let pidgeotto = new pokemon(`pidgeotto`, 63, 16, 9, 63, 71, [
      pidgeot,
      ``,
      ``,
    ]);
    let pidgey = new pokemon(`pidgey`, 40, 1, 7, 40, 56, [pidgeotto, ``]);
    let persian = new pokemon(`persian`, 65, 31, 12, 65, 115, []);
    let meowth = new pokemon(`meowth`, 40, 1, 7, 40, 90, [persian]);
    let nidoking = new pokemon(`nidoking`, 81, 41, 13, 81, 85, []);
    let nidorino = new pokemon(`nidorino`, 61, 16, 7, 61, 65, [
      nidoking,
      ``,
      ``,
    ]);
    let nidoranM = new pokemon(`nidoran(M)`, 46, 1, 6, 46, 50, [nidorino, ``]);
    let hitmonlee = new pokemon(`hitmonlee`, 50, 1, 16, 50, 87, []);
    let tauros = new pokemon(`tauros`, 75, 1, 13, 75, 110, []);
    let sandslash = new pokemon(`sandslash`, 78, 31, 14, 78, 68, []);
    let sandshrew = new pokemon(`sandshrew`, 50, 1, 7, 50, 42, [sandslash]);
    let raichu = new pokemon(`raichu`, 60, 31, 12, 60, 105, []);
    let pikachu = new pokemon(`pikachu`, 35, 1, 9, 35, 90, [raichu]);
    let golduck = new pokemon(`golduck`, 80, 31, 11, 80, 85, []);
    let psyduck = new pokemon(`psyduck`, 50, 1, 6, 50, 55, [golduck]);
    let snorlax = new pokemon(`snorlax`, 160, 1, 7, 160, 30, []);
    let scyther = new pokemon(`scyther`, 70, 1, 11, 70, 105, []);
    let rhydon = new pokemon(`rhydon`, 105, 31, 6, 105, 40, []);
    let rhyhorn = new pokemon(`rhyhorn`, 80, 1, 5, 80, 25, [rhydon]);
    let gengar = new pokemon(`gengar`, 60, 41, 15, 60, 110, []);
    let haunter = new pokemon(`haunter`, 45, 16, 10, 45, 95, [gengar, ``, ``]);
    let gastly = new pokemon(`gastly`, 30, 1, 9, 30, 80, [haunter, ``]);
    let arcanine = new pokemon(`arcanine`, 90, 31, 11, 90, 95, []);
    let growlithe = new pokemon(`growlithe`, 55, 1, 6, 55, 60, [arcanine]);
    let machamp = new pokemon(`machamp`, 90, 37, 12, 90, 55, []);
    let machoke = new pokemon(`machoke`, 80, 16, 7, 80, 45, [machamp, ``, ``]);
    let machop = new pokemon(`machop`, 70, 1, 5, 70, 35, [machoke, ``]);
    let alakazam = new pokemon(`alakazam`, 55, 41, 14, 55, 120, []);
    let kadabra = new pokemon(`kadabra`, 40, 16, 11, 40, 105, [
      alakazam,
      ``,
      ``,
    ]);
    let abra = new pokemon(`abra`, 25, 1, 10, 25, 90, [kadabra, ``]);
    let buterfree = new pokemon(`buterfree`, 60, 41, 14, 60, 70, []);
    let metapod = new pokemon(`metapod`, 50, 16, 9, 50, 30, [
      buterfree,
      ``,
      ``,
    ]);
    let caterpie = new pokemon(`caterpie`, 45, 1, 5, 45, 45, [metapod, ``]);
    let vileplume = new pokemon(`vileplume`, 75, 41, 13, 75, 50, []);
    let gloom = new pokemon(`gloom`, 60, 16, 11, 60, 40, [vileplume, ``, ``]);
    let oddish = new pokemon(`oddish`, 45, 1, 5, 45, 30, [gloom, ``]);
    let poliwrath = new pokemon(`poliwrath`, 90, 41, 13, 90, 70, []);
    let poliwhirl = new pokemon(`poliwhirl`, 65, 16, 7, 65, 90, [
      poliwrath,
      ``,
      ``,
    ]);
    let poliwag = new pokemon(`poliwag`, 40, 1, 6, 40, 90, [poliwhirl, ``]);
    let victreebel = new pokemon(`victreebel`, 80, 41, 12, 80, 70, []);
    let weepinbell = new pokemon(`weepinbell`, 65, 16, 9, 65, 55, [
      victreebel,
      ``,
      ``,
    ]);
    let bellsprout = new pokemon(`bellsprout`, 50, 1, 6, 50, 40, [
      weepinbell,
      ``,
    ]);
    let magneton = new pokemon(`magneton`, 50, 31, 16, 50, 70, []);
    let magnemite = new pokemon(`magnemite`, 25, 1, 12, 25, 45, [magneton]);
    let golem = new pokemon(`golem`, 80, 41, 12, 80, 45, []);
    let graveler = new pokemon(`graveler`, 55, 16, 11, 55, 35, [golem, ``, ``]);
    let geodude = new pokemon(`geodude`, 40, 1, 8, 40, 20, [graveler, ``]);
    let onix = new pokemon(`onix`, 35, 1, 19, 32, 70, []);
    let dodrio = new pokemon(`dodrio`, 60, 31, 13, 60, 100, []);
    let doduo = new pokemon(`doduo`, 35, 1, 7, 35, 75, [dodrio]);
    let slowbro = new pokemon(`slowbro`, 95, 31, 9, 95, 30, []);
    let slowpoke = new pokemon(`slowpoke`, 90, 1, 4, 90, 15, [slowbro]);
    let muk = new pokemon(`muk`, 105, 31, 8, 105, 50, []);
    let grimer = new pokemon(`grimer`, 80, 1, 4, 80, 25, [muk]);
    let rapidash = new pokemon(`rapidash`, 65, 1, 13, 65, 105);
    let ponyta = new pokemon(`ponyta`, 50, 1, 5, 50, 90, [rapidash]);
    let hypno = new pokemon(`hypno`, 85, 31, 12, 85, 67, []);
    let drowzee = new pokemon(`drowze`, 60, 1, 6, 60, 42, [hypno]);
    let kingler = new pokemon(`kingler`, 55, 31, 15, 55, 75, []);
    let krabby = new pokemon(`krabby`, 30, 1, 9, 30, 50, [kingler]);
    let lapras = new pokemon(`lapras`, 130, 1, 9, 130, 60, []);
    let starmie = new pokemon(`starmie`, 60, 31, 13, 60, 115);
    let staryu = new pokemon(`staryu`, 30, 1, 10, 30, 85, [starmie]);
    let seaking = new pokemon(`seaking`, 80, 31, 13, 80, 68, []);
    let goldeen = new pokemon(`goldeen`, 45, 1, 6, 45, 63, [seaking]);
    let venomoth = new pokemon(`venomoth`, 70, 31, 13, 70, 90, []);
    let venonat = new pokemon(`venonat`, 60, 1, 6, 60, 45, [venomoth]);
    let dugtrio = new pokemon(`dugtrio`, 35, 31, 21, 35, 120, []);
    let diglett = new pokemon(`diglett`, 10, 1, 21, 10, 95, [dugtrio]);
    let cloyster = new pokemon(`cloyster`, 50, 31, 19, 50, 70, []);
    let shellder = new pokemon(`shellder`, 30, 1, 12, 30, 40, [cloyster]);
    let electabuzz = new pokemon(`electabuzz`, 65, 1, 13, 65, 105, []);
    let electrode = new pokemon(`electrode`, 60, 31, 13, 60, 140, []);
    let voltorb = new pokemon(`voltorb`, 40, 1, 7, 40, 100, [electrode]);
    let dragonite = new pokemon(`dragonite`, 91, 41, 14, 91, 80, []);
    let dragonair = new pokemon(`dragonair`, 61, 16, 10, 61, 70, [
      dragonite,
      ``,
      ``,
    ]);
    let dratini = new pokemon(`dratini`, 41, 1, 9, 41, 50, [dragonair, ``]);
    let gyarados = new pokemon(`gyarados`, 95, 31, 15, 95, 81, []);
    let magikarp = new pokemon(`magikarp`, 20, 1, 8, 20, 80, [gyarados]);
    let seadra = new pokemon(`seadra`, 55, 31, 16, 55, 85, []);
    let horsea = new pokemon(`horsea`, 30, 1, 11, 30, 60, [seadra]);
    let weezing = new pokemon(`weezing`, 65, 31, 15, 65, 60, []);
    let koffing = new pokemon(`koffing`, 40, 1, 8, 40, 35, [weezing]);
    let marowak = new pokemon(`marowak`, 60, 31, 16, 60, 45, []);
    let cubone = new pokemon(`cubone`, 50, 1, 7, 50, 35, [marowak]);
    let tentacruel = new pokemon(`tentacruel`, 80, 31, 11, 80, 100);
    let tentacool = new pokemon(`tentacool`, 40, 1, 6, 40, 70, [tentacruel]);
    let golbat = new pokemon(`golbat`, 75, 31, 14, 75, 90, []);
    let zubat = new pokemon(`zubat`, 40, 1, 8, 40, 55, [golbat]);
    let tangela = new pokemon(`tangela`, 65, 1, 15, 65, 70, []);
    let mrMime = new pokemon(`mr.mime`, 40, 1, 16, 40, 90, []);
    let arbok = new pokemon(`arbok`, 60, 31, 15, 60, 80, []);
    let ekans = new pokemon(`ekans`, 35, 1, 8, 35, 55, [arbok]);
    let fearow = new pokemon(`fearow`, 65, 1, 13, 65, 100, []);
    let spearow = new pokemon(`spearow`, 40, 1, 5, 40, 70, [fearow]);
    let ninetales = new pokemon(`ninetales`, 73, 31, 13, 73, 100, []);
    let vulpix = new pokemon(`vulpix`, 38, 1, 8, 38, 65, [ninetales]);
    let primeape = new pokemon(`primeape`, 65, 31, 15, 65, 95, []);
    let mankey = new pokemon(`mankey`, 40, 1, 7, 40, 70, [primeape]);
    let clefable = new pokemon(`clefable`, 95, 31, 11, 95, 60, []);
    let clefairy = new pokemon(`clefairy`, 70, 1, 5, 70, 35, [clefable]);
    let jolteon = new pokemon(`jolteon`, 65, 31, 15, 65, 130, []);
    let eevee = new pokemon(`eevee`, 55, 1, 7, 55, 55, [jolteon]);
    let raticate = new pokemon(`raticate`, 55, 31, 14, 55, 97, []);
    let rattata = new pokemon(`rattata`, 30, 1, 7, 30, 72, [raticate]);
    let beedrill = new pokemon(`beedrill`, 65, 35, 15, 65, 75, []);
    let kakuna = new pokemon(`kakuna`, 45, 16, 10, 45, 35, [beedrill, ``, ``]);
    let weedle = new pokemon(`weedle`, 40, 1, 5, 40, 50, [kakuna, ``]);
    let wigglytuff = new pokemon(`wigglytuff`, 140, 31, 7, 140, 45, []);
    let jigglypuff = new pokemon(`jigglypuff`, 115, 1, 3, 115, 20, [
      wigglytuff,
    ]);
    let parasect = new pokemon(`parasect`, 60, 31, 14, 60, 30, []);
    let paras = new pokemon(`paras`, 35, 1, 7, 35, 25, [parasect]);
    let aerodactyl = new pokemon(`aerodactyl`, 80, 1, 11, 80, 130, []);
    let farfetchD = new pokemon(`farfetch'd`, 52, 1, 16, 52, 60, []);
    let dewgong = new pokemon(`dewgong`, 90, 31, 10, 90, 70, []);
    let seel = new pokemon(`seel`, 65, 1, 4, 65, 45, [dewgong]);
    let exeggutor = new pokemon(`exeggutor`, 95, 31, 10, 95, 55, []);
    let exeggcute = new pokemon(`exeggcute`, 60, 1, 4, 60, 40, [exeggutor]);
    let hitmonchan = new pokemon(`hitmonchan`, 50, 1, 17, 50, 76, []);
    let lickitung = new pokemon(`lickitung`, 90, 1, 10, 90, 30, []);
    let kangaskhan = new pokemon(`kangaskhan`, 105, 1, 10, 105, 90, []);
    let jynx = new pokemon(`jynx`, 65, 1, 14, 65, 95, []);
    let pinsir = new pokemon(`pinsir`, 65, 1, 15, 65, 85, []);
    let magmar = new pokemon(`magmar`, 65, 1, 15, 65, 95, []);
    let kabutops = new pokemon(`kabutops`, 60, 31, 15, 60, 80, []);
    let kabuto = new pokemon(`kabuto`, 30, 1, 10, 30, 55, [kabutops]);
    let omastar = new pokemon(`omastar`, 70, 31, 15, 70, 55, []);
    let omanyte = new pokemon(`omanyte`, 35, 1, 10, 35, 35, [omastar]);
    let porygon = new pokemon(`porygon`, 65, 1, 16, 65, 40, []);
    let chansey = new pokemon(`chansey`, 250, 1, 5, 250, 50, []);
    let nidoqueen = new pokemon(`nidoqueen`, 90, 41, 12, 90, 76, []);
    let nidorina = new pokemon(`nidorina`, 70, 16, 8, 70, 56, [
      nidoqueen,
      ``,
      ``,
    ]);
    let nidoranF = new pokemon(`nidoran(F)`, 55, 1, 6, 55, 41, [nidorina, ``]);

    console.log(
      `\nHoje é um dia muito aguardado!! Sua jornada Pokemon irá começar assim que escolher seu Pokemon inicial!\n
    (...) = Aperte ENTER`
    );
    prompt("\n...\n");
    console.clear();

    console.log(`Escolha um Pokemon inicial:
1 - Charmander
2 - Bulbasaur
3 - Squirtle`);
    let escolha = prompt();

    while (escolha != `1` && escolha != `2` && escolha != `3`) {
      console.log(`Este pokemon não existe.`);
      escolha = console.log(`Escolha um inicial:
1 - Charmander
2 - Bulbasaur
3 - Squirtle`);
      escolha = prompt();
    }

    if (escolha == `1`) {
      equipe.push(charizard, blastoise, venusaur);
    } else if (escolha == `2`) {
      equipe.push(bulbasaur);
    } else {
      equipe.push(squirtle);
    }

    console.log(
      `\nE, assim, você sai da cidade de Pallet com seu ${equipe[0].pkm}, em busca de conquistar todas as insígnias e se tornar o mestre Pokemon!`
    );
    prompt("\n...\n");
    console.clear();

    let pokSelvagens = [];
    let pokSelvagens1 = [
      caterpie,
      pidgey,
      oddish,
      ekans,
      weedle,
      bellsprout,
      rattata,
      goldeen,
      staryu,
    ];
    let pokSelvagens2 = [
      nidoranM,
      psyduck,
      doduo,
      grimer,
      krabby,
      spearow,
      meowth,
      paras,
      porygon,
    ];
    let pokSelvagens3 = [
      geodude,
      zubat,
      onix,
      diglett,
      koffing,
      venonat,
      voltorb,
      nidoranF,
      clefairy,
    ];
    let pokSelvagens4 = [
      ponyta,
      shellder,
      scyther,
      sandshrew,
      pikachu,
      mankey,
      jigglypuff,
      seel,
      farfetchD,
      tangela,
      aerodactyl,
    ];
    let pokSelvagens5 = [
      tentacool,
      slowpoke,
      abra,
      machop,
      rhyhorn,
      tauros,
      eevee,
      omanyte,
      lickitung,
      dratini,
    ];
    let pokSelvagens6 = [
      magikarp,
      hitmonlee,
      drowzee,
      gastly,
      magnemite,
      vulpix,
      exeggcute,
      kabuto,
      kangaskhan,
      jynx,
      snorlax,
    ];
    let pokSelvagens7 = [
      electabuzz,
      horsea,
      cubone,
      lapras,
      growlithe,
      poliwag,
      pinsir,
      hitmonchan,
      magmar,
      mrMime,
      chansey,
    ];

    pokSelvagens.push(
      pokSelvagens1,
      pokSelvagens2,
      pokSelvagens3,
      pokSelvagens4,
      pokSelvagens5,
      pokSelvagens6,
      pokSelvagens7
    );

    let geodudeBrook = new pokemon(`geodude`, 40, 1, 10, 40, 20);
    let onixBrook = new pokemon(`onix`, 35, 1, 19, 35, 70);
    let starmieMisty = new pokemon(`starmie`, 60, 31, 14, 60, 115);
    let staryuMisty = new pokemon(`staryu`, 30, 1, 10, 30, 85);
    let voltorbLt = new pokemon(`voltorb`, 40, 1, 8, 40, 100);
    let raichuLt = new pokemon(`raichu`, 60, 31, 15, 60, 105);
    let pikachuLt = new pokemon(`pikachu`, 35, 1, 10, 35, 90);
    let weezingKoga = new pokemon(`weezing`, 65, 31, 15, 65, 60);
    let koffingKoga = new pokemon(`koffing`, 40, 1, 10, 40, 35);
    let mukKoga = new pokemon(`muk`, 105, 31, 8, 105, 50);
    let grimerKoga = new pokemon(`grimer`, 80, 1, 6, 80, 25);
    let alakazamSabr = new pokemon(`alakazam`, 55, 41, 15, 55, 120);
    let kadabraSabr = new pokemon(`kadabra`, 40, 16, 12, 40, 105);
    let venomothSabr = new pokemon(`venomoth`, 70, 31, 15, 70, 90);
    let mrMimeSabr = new pokemon(`mr.mime`, 40, 1, 16, 40, 90);
    let arcanineBlai = new pokemon(`arcanine`, 90, 31, 13, 90, 95);
    let growlitheBlai = new pokemon(`growlithe`, 55, 1, 9, 55, 60);
    let rapidashBlai = new pokemon(`rapidash`, 65, 1, 14, 65, 105);
    let ponytaBlai = new pokemon(`ponyta`, 50, 1, 9, 50, 90);
    let dugtrioGio = new pokemon(`dugtrio`, 35, 31, 22, 35, 120);
    let rhydonGio = new pokemon(`rhydon`, 105, 31, 9, 105, 40);
    let rhyhornGio = new pokemon(`rhyhorn`, 80, 1, 7, 80, 25);
    let nidoqueenGio = new pokemon(`nidoqueen`, 90, 41, 13, 90, 76);
    let nidokingGio = new pokemon(`nidoking`, 81, 41, 13, 81, 85);

    let pkmGyms = [];
    let pkmBrook = [geodudeBrook, onixBrook];
    let pkmMisty = [starmieMisty, staryuMisty];
    let pkmLt = [voltorbLt, pikachuLt, raichuLt];
    let pkmKoga = [weezingKoga, koffingKoga, mukKoga, grimerKoga];
    let pkmSabr = [alakazamSabr, kadabraSabr, venomothSabr, mrMimeSabr];
    let pkmBlai = [arcanineBlai, growlitheBlai, rapidashBlai, ponytaBlai];
    let pkmGio = [dugtrioGio, rhydonGio, rhyhornGio, nidokingGio, nidoqueenGio];
    pkmGyms.push(pkmBrook, pkmMisty, pkmLt, pkmKoga, pkmSabr, pkmBlai, pkmGio);

    let ginasios = [
      `Bem vindo ao ginásio de Pewter, eu sou Brook o líder do ginásio...
Para ganhar a insígnia terá que me derrotar!
Brook joga seu Pokemon...`,
      `Bem vindo ao ginásio de Cerulean, eu sou Misty a líder do ginásio...
Para ganhar a insígnia terá que me derrotar!
Misty joga seu Pokemon...`,
      `Bem vindo ao ginásio de Vermilion, eu sou Lt. Surge o líder do ginásio...
Para ganhar a insígnia terá que me derrotar!
Lt. Surge joga seu Pokemon...`,
      `Bem vindo ao ginásio de Celadon, eu sou Erika a líder do ginásio...
Para ganhar a insígnia terá que me derrotar!
Erika joga seu Pokemon...`,
      `Bem vindo ao ginásio de Fuchsia, eu sou Koga o líder do ginásio...
Para ganhar a insígnia terá que me derrotar!
Koga joga seu Pokemon...`,
      `Bem vindo ao ginásio de Saffron, eu sou Sabrina a líder do ginásio...
Para ganhar a insígnia terá que me derrotar!
Sabrina joga seu Pokemon...`,
      `Bem vindo ao ginásio de Seafom, eu sou Blaine o líder do ginásio...
Para ganhar a insígnia terá que me derrotar!
Blaine joga seu Pokemon...`,
      `Bem vindo ao ginásio de Veridian, eu sou Giovanni o líder do ginásio e também o chefe da equipe rocket!...
Se me derrotar terá todas as 8 insígnias e será o novo mestre Pokemon!
Giovanni joga seu Pokemon...`,
    ];

    passardias(dias);

    function passardias(dias) {
      console.log(`DIA ${dias + 1}\n`);
      console.log(rotas[dias]);
      prompt("\n...\n");
      console.clear();
      encontroRandom(dias);
    }

    function encontroRandom(dias) {
      contador++;
      randomPok(pokSelvagens[dias]);

      console.log(`Seu time:`);
      console.log(equipe);
      prompt("\n...\n");
      console.clear();

      if (
        contador == 4 ||
        contador == 8 ||
        contador == 11 ||
        contador == 14 ||
        contador == 17 ||
        contador == 20 ||
        contador == 23
      ) {
        cidade(dias);
      }

      console.log(`Caminhando...
Apareceu um ${encontro.pkm} selvagem!
1 - Lutar
2 - Capturar
3 - Fugir`);
      let açao1 = prompt();

      while (açao1 > 3 || açao1 < 1) {
        console.log(`
Apareceu um ${encontro.pkm} selvagem!
1 - Lutar
2 - Capturar
3 - Fugir`);
        açao1 = prompt();
      }

      if (açao1 == `1`) {
        batalha(dias);
        encontroRandom(dias);
      } else if (açao1 == `2`) {
        capturar(dias);
        batalha(dias);
        encontroRandom(dias);
      } else {
        console.log(`\nVocê fugiu do ${encontro.pkm}...`);
        prompt("\n...\n");
        console.clear();
        encontroRandom(dias);
      }
    }

    function randomPok(pokSelvagem) {
      randomizarPkm = Math.floor(Math.random() * pokSelvagem.length);

      encontro = pokSelvagem[randomizarPkm];

      return encontro;
    }

    function duranteBatalha(dias) {
      console.log(
        `${equipe[escolhaParty - 1].pkm} - Hp:${equipe[escolhaParty - 1].hp}`
      );
      console.log(`${encontro.pkm} - Hp:${encontro.hp}\n`);
      console.log(`Acessar:
    1 - Continuar batalha
    2 - Trocar Pokemon
    3 - Capturar
    4 - Fugir`);
      let açao2 = prompt();

      while (açao2 > 4 || açao2 < 1) {
        console.log(`Acessar:
    1 - Continuar batalha
    2 - Trocar Pokemon
    3 - Capturar
    4 - Fugir`);
        açao2 = prompt();
      }

      if (açao2 == `2`) {
        batalha(dias);
        encontroRandom(dias);
      } else if (açao2 == `3`) {
        capturar(dias);
      } else if (açao2 == "4") {
        console.log(`\nVocê fugiu do ${encontro.pkm}...`);
        prompt("\n...\n");
        console.clear();
        encontroRandom(dias);
      }
    }

    function capturar(dias) {
      console.log(
        `Você joga uma pokebola no ${encontro.pkm} e espera atentamente pelo resultado...`
      );
      prompt("\n...\n");
      console.clear();

      const randomizarChance = Math.floor(Math.random() * 101);

      if (encontro.hp <= 10) {
        if (randomizarChance <= 95) {
          if (equipe.length == 6) {
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!\n`);
            console.log(`Seu time está cheio.`);
            console.log(`${encontro.pkm} foi mandado para o depósito.`);
            deposito.push(encontro);
            prompt("\n...\n");
            console.clear();
          } else {
            equipe.push(encontro);
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!`);
            prompt("\n...\n");
            console.clear();
          }
          pokSelvagens[dias].splice(randomizarPkm, 1);
          encontroRandom(dias);
        } else {
          console.log(`${encontro.pkm} conseguiu se livrar da pokebola...`);
        }
        prompt("\n...\n");
        console.clear();
      } else if (encontro.hp <= 25) {
        if (randomizarChance <= 80) {
          if (equipe.length == 6) {
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!\n`);
            console.log(`Seu time está cheio.`);
            console.log(`${encontro.pkm} foi mandado para o depósito.`);
            deposito.push(encontro);
            prompt("\n...\n");
            console.clear();
          } else {
            equipe.push(encontro);
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!\n`);
            prompt("\n...\n");
            console.clear();
          }
          pokSelvagens[dias].splice(randomizarPkm, 1);
          encontroRandom(dias);
        } else {
          console.log(`${encontro.pkm} conseguiu se livrar da pokebola...`);
        }
        prompt("\n...\n");
        console.clear();
      } else if (encontro.hp <= 40) {
        if (randomizarChance <= 50) {
          if (equipe.length == 6) {
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!\n`);
            console.log(`Seu time está cheio.`);
            console.log(`${encontro.pkm} foi mandado para o depósito.`);
            deposito.push(encontro);
            prompt("\n...\n");
            console.clear();
          } else {
            equipe.push(encontro);
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!\n`);
            prompt("\n...\n");
            console.clear();
          }
          pokSelvagens[dias].splice(randomizarPkm, 1);
          encontroRandom(dias);
        } else {
          console.log(`${encontro.pkm} conseguiu se livrar da pokebola...`);
        }
        prompt("\n...\n");
        console.clear();
      } else if (encontro.hp <= 65) {
        if (randomizarChance <= 40) {
          if (equipe.length == 6) {
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!\n`);
            console.log(`Seu time está cheio.`);
            console.log(`${encontro.pkm} foi mandado para o depósito.`);
            deposito.push(encontro);
            prompt("\n...\n");
            console.clear();
          } else {
            equipe.push(encontro);
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!\n`);
            prompt("\n...\n");
            console.clear();
          }
          pokSelvagens[dias].splice(randomizarPkm, 1);
          encontroRandom(dias);
        } else {
          console.log(`${encontro.pkm} conseguiu se livrar da pokebola...`);
        }
        prompt("\n...\n");
        console.clear();
      } else if (encontro.hp <= 85) {
        if (randomizarChance <= 30) {
          if (equipe.length == 6) {
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!\n`);
            console.log(`Seu time está cheio.`);
            console.log(`${encontro.pkm} foi mandado para o depósito.`);
            deposito.push(encontro);
            prompt("\n...\n");
            console.clear();
          } else {
            equipe.push(encontro);
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!\n`);
            prompt("\n...\n");
            console.clear();
          }
          pokSelvagens[dias].splice(randomizarPkm, 1);
          encontroRandom(dias);
        } else {
          console.log(`${encontro.pkm} conseguiu se livrar da pokebola...\n`);
        }
        prompt("\n...\n");
        console.clear();
      } else if (encontro.hp <= 200) {
        if (randomizarChance <= 20) {
          if (equipe.length == 6) {
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!\n`);
            console.log(`Seu time está cheio.`);
            console.log(`${encontro.pkm} foi mandado para o depósito.`);
            deposito.push(encontro);
            prompt("\n...\n");
            console.clear();
          } else {
            equipe.push(encontro);
            console.log(`Parabéns!! Você capturou ${encontro.pkm}!!\n`);
            prompt("\n...\n");
            console.clear();
          }
          pokSelvagens[dias].splice(randomizarPkm, 1);
          encontroRandom(dias);
        } else {
          console.log(`${encontro.pkm} conseguiu se livrar da pokebola...\n`);
        }
        prompt("\n...\n");
        console.clear();
      }
    }

    function batalha(dias) {
      console.clear();
      console.log(`Escolha seu pokemon:`);

      for (i = 0; i < equipe.length; i++) {
        console.log(`${i + 1} - ${equipe[i].pkm}`);
      }
      escolhaParty = prompt();

      while (
        (equipe.length == 1 && escolhaParty != 1) ||
        (equipe.length == 2 && escolhaParty > 2) ||
        escolhaParty < 1 ||
        (equipe.length == 3 && escolhaParty > 3) ||
        escolhaParty < 1 ||
        (equipe.length == 4 && escolhaParty > 4) ||
        escolhaParty < 1 ||
        (equipe.length == 5 && escolhaParty > 5) ||
        escolhaParty < 1 ||
        (equipe.length == 6 && escolhaParty > 6) ||
        escolhaParty < 1
      ) {
        console.clear();
        console.log(`Escolha seu pokemon:`);

        for (i = 0; i < equipe.length; i++) {
          console.log(`${i + 1} - ${equipe[i].pkm}`);
        }
        escolhaParty = prompt();
      }

      if (equipe[escolhaParty - 1].hp <= 0) {
        console.log(
          `Seu ${
            equipe[escolhaParty - 1].pkm
          } está sem vida, ele não consegue lutar...\n`
        );
        prompt("\n...\n");
        batalha(dias);
      }

      console.log(
        `\n${equipe[escolhaParty - 1].pkm} esta batalhando contra ${
          encontro.pkm
        }...\n`
      );
      console.log(
        `${equipe[escolhaParty - 1].pkm} - Hp:${equipe[escolhaParty - 1].hp}`
      );
      console.log(`${encontro.pkm} - Hp:${encontro.hp}\n`);

      while (equipe[escolhaParty - 1].hp > 0 && encontro.hp > 0) {
        if (encontro.speed > equipe[escolhaParty - 1].speed) {
          equipe[escolhaParty - 1].hp -= encontro.atk;
          equipe[escolhaParty - 1].mudarhp(equipe[escolhaParty - 1].hp);

          console.log(
            `${encontro.pkm} deu ${encontro.atk} de dano no ${
              equipe[escolhaParty - 1].pkm
            }\n`
          );

          if (equipe[escolhaParty - 1].hp <= 0) {
            prompt("\n...\n");
            console.clear();
            console.log(
              `${encontro.pkm} derrotou seu ${equipe[escolhaParty - 1].pkm}!`
            );
            prompt("\n...\n");
            console.clear();

            if (
              (equipe.length == 1 && equipe[0].hp <= 0) ||
              (equipe.length == 2 && equipe[0].hp <= 0 && equipe[1].hp <= 0) ||
              (equipe.length == 3 &&
                equipe[0].hp <= 0 &&
                equipe[1].hp <= 0 &&
                equipe[2].hp <= 0) ||
              (equipe.length == 4 &&
                equipe[0].hp <= 0 &&
                equipe[1].hp <= 0 &&
                equipe[2].hp <= 0 &&
                equipe[3].hp <= 0) ||
              (equipe.length == 5 &&
                equipe[0].hp <= 0 &&
                equipe[1].hp <= 0 &&
                equipe[2].hp <= 0 &&
                equipe[3].hp <= 0 &&
                equipe[4].hp <= 0) ||
              (equipe.length == 6 &&
                equipe[0].hp <= 0 &&
                equipe[1].hp <= 0 &&
                equipe[2].hp <= 0 &&
                equipe[3].hp <= 0 &&
                equipe[4].hp <= 0 &&
                equipe[5].hp <= 0)
            ) {
              if (contador <= 4) {
                contador = 0;
              } else if (contador <= 8) {
                contador = 4;
              } else if (contador <= 11) {
                contador = 8;
              } else if (contador <= 14) {
                contador = 11;
              } else if (contador <= 17) {
                contador = 14;
              } else if (contador <= 20) {
                contador = 17;
              } else if (contador <= 23) {
                contador = 20;
              }
              pokSelvagens[dias].push(
                krabby,
                jigglypuff,
                abra,
                vulpix,
                mankey,
                bellsprout
              );
              for (i = 0; i < pokSelvagens[dias].length; i++) {
                if (
                  pokSelvagens[dias][i].hp != pokSelvagens[dias][i].hpOriginal
                ) {
                  let reduzir =
                    pokSelvagens[dias][i].hp - pokSelvagens[dias][i].hp;

                  let add = (reduzir += pokSelvagens[dias][i].hpOriginal);
                  pokSelvagens[dias][i].mudarhp(add);
                }
              }

              console.log(`Todos seus Pokemons morreram!`);
              console.log("Você voltará para a cidade anterior...");
              prompt("\n...\n");
              console.clear();
              if (dias - 1 < 0) {
                console.log(
                  `Você ainda não chegou em nenhuma cidade. Voltando para o começo...\n`
                );

                for (i = 0; i < equipe.length; i++) {
                  if (equipe[i].hp != equipe[i].hpOriginal) {
                    let reduzir = equipe[i].hp - equipe[i].hp;

                    let add = (reduzir += equipe[i].hpOriginal);

                    equipe[i].mudarhp(add);
                  }
                }
                console.log(`Pokemons totalmente curados!`);
                prompt("\n...\n");
                console.clear();

                passardias(dias);
              } else {
                cidade(dias - 1);
              }
            } else {
              batalha(dias);
            }
          } else {
            encontro.hp -= equipe[escolhaParty - 1].atk;
            encontro.mudarhp(encontro.hp);

            console.log(
              `Seu ${equipe[escolhaParty - 1].pkm} deu ${
                equipe[escolhaParty - 1].atk
              } de dano no ${encontro.pkm}\n`
            );

            console.log(
              `${equipe[escolhaParty - 1].pkm} - Hp:${
                equipe[escolhaParty - 1].hp
              }`
            );
            console.log(`${encontro.pkm} - Hp:${encontro.hp}`);
            prompt("\n...\n");
            console.clear();

            if (encontro.hp <= 0) {
              console.log(
                `Seu ${equipe[escolhaParty - 1].pkm} derrotou ${encontro.pkm}!`
              );
              prompt("\n...\n");
              console.clear();

              pokSelvagens[dias].splice(randomizarPkm, 1);

              console.log(`Seu ${equipe[escolhaParty - 1].pkm} subiu 5 nvls!`);
              equipe[escolhaParty - 1].nvl += 5;
              equipe[escolhaParty - 1].mudarnvl(equipe[escolhaParty - 1].nvl);
              prompt("\n...\n");
              console.clear();
            } else {
              duranteBatalha(dias);
            }
          }
        } else {
          encontro.hp -= equipe[escolhaParty - 1].atk;
          encontro.mudarhp(encontro.hp);

          console.log(
            `Seu ${equipe[escolhaParty - 1].pkm} deu ${
              equipe[escolhaParty - 1].atk
            } de dano no ${encontro.pkm}\n`
          );

          if (encontro.hp <= 0) {
            prompt("\n...\n");
            console.clear();
            console.log(
              `Seu ${equipe[escolhaParty - 1].pkm} derrotou ${encontro.pkm}!`
            );
            prompt("\n...\n");
            console.clear();

            pokSelvagens[dias].splice(randomizarPkm, 1);

            console.log(`Seu ${equipe[escolhaParty - 1].pkm} subiu 5 nvls!`);
            equipe[escolhaParty - 1].nvl += 5;
            equipe[escolhaParty - 1].mudarnvl(equipe[escolhaParty - 1].nvl);

            prompt("\n...\n");
            console.clear();
          } else {
            equipe[escolhaParty - 1].hp -= encontro.atk;
            equipe[escolhaParty - 1].mudarhp(equipe[escolhaParty - 1].hp);

            console.log(
              `${encontro.pkm} deu ${encontro.atk} de dano no ${
                equipe[escolhaParty - 1].pkm
              }\n`
            );
            console.log(
              `${equipe[escolhaParty - 1].pkm} - Hp:${
                equipe[escolhaParty - 1].hp
              }`
            );
            console.log(`${encontro.pkm} - Hp:${encontro.hp}`);
            prompt("\n...\n");
            console.clear();

            if (equipe[escolhaParty - 1].hp <= 0) {
              console.log(
                `${encontro.pkm} derrotou seu ${equipe[escolhaParty - 1].pkm}!`
              );
              prompt("\n...\n");
              console.clear();

              if (
                (equipe.length == 1 && equipe[0].hp <= 0) ||
                (equipe.length == 2 &&
                  equipe[0].hp <= 0 &&
                  equipe[1].hp <= 0) ||
                (equipe.length == 3 &&
                  equipe[0].hp <= 0 &&
                  equipe[1].hp <= 0 &&
                  equipe[2].hp <= 0) ||
                (equipe.length == 4 &&
                  equipe[0].hp <= 0 &&
                  equipe[1].hp <= 0 &&
                  equipe[2].hp <= 0 &&
                  equipe[3].hp <= 0) ||
                (equipe.length == 5 &&
                  equipe[0].hp <= 0 &&
                  equipe[1].hp <= 0 &&
                  equipe[2].hp <= 0 &&
                  equipe[3].hp <= 0 &&
                  equipe[4].hp <= 0) ||
                (equipe.length == 6 &&
                  equipe[0].hp <= 0 &&
                  equipe[1].hp <= 0 &&
                  equipe[2].hp <= 0 &&
                  equipe[3].hp <= 0 &&
                  equipe[4].hp <= 0 &&
                  equipe[5].hp <= 0)
              ) {
                if (contador <= 4) {
                  contador = 0;
                } else if (contador <= 8) {
                  contador = 4;
                } else if (contador <= 11) {
                  contador = 8;
                } else if (contador <= 14) {
                  contador = 11;
                } else if (contador <= 17) {
                  contador = 14;
                } else if (contador <= 20) {
                  contador = 17;
                } else if (contador <= 23) {
                  contador = 20;
                }
                pokSelvagens[dias].push(
                  grimer,
                  drowzee,
                  poliwag,
                  ponyta,
                  magnemite,
                  geodude
                );
                for (i = 0; i < pokSelvagens[dias].length; i++) {
                  if (
                    pokSelvagens[dias][i].hp != pokSelvagens[dias][i].hpOriginal
                  ) {
                    let reduzir =
                      pokSelvagens[dias][i].hp - pokSelvagens[dias][i].hp;

                    let add = (reduzir += pokSelvagens[dias][i].hpOriginal);
                    pokSelvagens[dias][i].mudarhp(add);
                  }
                }

                console.log(`Todos seus Pokemons morreram!`);
                console.log("Você voltará para a cidade anterior...");
                prompt("\n...\n");
                console.clear();
                if (dias - 1 < 0) {
                  console.log(
                    `Você ainda não chegou em nenhuma cidade. Voltando para o começo...\n`
                  );

                  for (i = 0; i < equipe.length; i++) {
                    if (equipe[i].hp != equipe[i].hpOriginal) {
                      let reduzir = equipe[i].hp - equipe[i].hp;

                      let add = (reduzir += equipe[i].hpOriginal);

                      equipe[i].mudarhp(add);
                    }
                  }
                  console.log(`Pokemons totalmente curados!`);
                  prompt("\n...\n");
                  console.clear();

                  passardias(dias);
                } else {
                  cidade(dias - 1);
                }
              } else {
                batalha(dias);
              }
            } else {
              duranteBatalha(dias);
            }
          }
        }
      }
      evoluir();

      if (equipe[escolhaParty - 1].hp < 0) {
        equipe[escolhaParty - 1].hp -= equipe[escolhaParty - 1].hp;
        equipe[escolhaParty - 1].mudarhp(equipe[escolhaParty - 1].hp);
      }
      return escolhaParty;
    }

    function evoluir() {
      for (i = 0; i < equipe.length; i++) {
        if (equipe[i].evolution.length == 2) {
          if (equipe[i].nvl == 16) {
            console.log(`          !!!`);
            console.log(`Seu ${equipe[i].pkm} está evoluindo...`);
            prompt("\n...\n");

            equipe.splice(i, 1, equipe[i].evolution[0]);

            console.log(`Ele evoluiu para ${equipe[i].pkm}!!!`);
            prompt("\n...\n");
            console.clear();
          }
        } else if (equipe[i].evolution.length == 1) {
          if (equipe[i].nvl == 31) {
            console.log(`          !!!`);
            console.log(`Seu ${equipe[i].pkm} está evoluindo...`);
            prompt("\n...\n");

            equipe.splice(i, 1, equipe[i].evolution[0]);

            console.log(`Ele evoluiu para ${equipe[i].pkm}!!!`);
            prompt("\n...\n");
            console.clear();
          }
        } else if (equipe[i].evolution.length == 3) {
          if (equipe[i].nvl == 41) {
            console.log(`          !!!`);
            console.log(`Seu ${equipe[i].pkm} está evoluindo...`);
            prompt("\n...\n");

            equipe.splice(i, 1, equipe[i].evolution[0]);

            console.log(`Ele evoluiu para ${equipe[i].pkm}!!!`);
            prompt("\n...\n");
            console.clear();
          }
        }
      }
    }

    function pokecenter() {
      console.log(`\nBem vindo ao Pokecenter!`);
      console.log(`Seus Pokemons serão curados em um instante...`);
      prompt("\n...\n");

      for (i = 0; i < equipe.length; i++) {
        if (equipe[i].hp != equipe[i].hpOriginal) {
          let reduzir = equipe[i].hp - equipe[i].hp;

          let add = (reduzir += equipe[i].hpOriginal);

          equipe[i].mudarhp(add);
        }
      }

      console.log(`Pokemons totalmente curados!`);
      prompt("\n...\n");
      console.clear();
    }

    function depositoPkm() {
      console.log(`\nVocê acessou o depósito.\n`);
      prompt("\n...\n");
      console.log(`Esses são seus pokemons guardados:`);
      for (i = 0; i < deposito.length; i++) {
        console.log(`${i + 1} - ${deposito[i].pkm}`);
      }
      console.log(`\nDeseja trocar algum Pokemon?`);
      console.log(`1 - Sim`);
      console.log(`2 - Nao`);
      let trocarPkm = prompt();
      if (trocarPkm == `1`) {
        console.log(`Escolha o Pokemon que deseja pegar:`);
        let escolhaPkm1 = prompt();

        while (escolhaPkm1 > deposito.length || escolhaPkm1 < 1) {
          console.log(`Espaço do depósito vazio.`);
          console.log("Escolha um espaço preenchido: ");
          escolhaPkm1 = prompt();
        }

        console.log(`Qual Pokemon do seu time quer tirar?`);
        for (i = 0; i < equipe.length; i++) {
          console.log(`${i + 1} - ${equipe[i].pkm}`);
        }
        let escolhaPkm2 = prompt();

        while (
          (equipe.length == 1 && escolhaPkm2 != 1) ||
          (equipe.length == 2 && escolhaPkm2 > 2) ||
          escolhaPkm2 < 1 ||
          (equipe.length == 3 && escolhaPkm2 > 3) ||
          escolhaPkm2 < 1 ||
          (equipe.length == 4 && escolhaPkm2 > 4) ||
          escolhaPkm2 < 1 ||
          (equipe.length == 5 && escolhaPkm2 > 5) ||
          escolhaPkm2 < 1 ||
          (equipe.length == 6 && escolhaPkm2 > 6) ||
          escolhaPkm2 < 1
        ) {
          console.log(`Pokemon inexistente. Escolha um do seu time:`);
          escolhaPkm2 = prompt();
        }

        retirado = equipe.splice(escolhaPkm2 - 1, 1, deposito[escolhaPkm1 - 1]);
        deposito.splice(escolhaPkm1 - 1, 1);
        console.log(`Seus Pokemons foram trocados.`);
        prompt("\n...\n");
        console.clear();
        if (retirado.length > 0) {
          for (i = 0; i < retirado.length; i++) {
            deposito.push(retirado[i]);
          }
        }
      }
    }

    function ginasio(dias) {
      randomPokGym(pkmGyms[dias]);
      console.log(ginasios[dias]);
      prompt("\n...\n");
      batalhaGym(dias);
    }

    function randomPokGym(pokGym) {
      randomizarPkmGym = Math.floor(Math.random() * pokGym.length);

      encontroGym = pokGym[randomizarPkmGym];

      return encontroGym;
    }

    function duranteBatalhaGym(dias) {
      console.log(
        `${equipe[escolhaParty - 1].pkm} - Hp:${equipe[escolhaParty - 1].hp}`
      );
      console.log(`${encontroGym.pkm} - Hp:${encontroGym.hp}\n`);
      console.log(`Acessar:
    1 - Continuar batalha
    2 - Trocar Pokemon
    `);
      let açao3 = prompt();

      while (açao3 > 2 || açao3 < 1) {
        console.log(`Acessar:
      1 - Continuar batalha
      2 - Trocar Pokemon
      `);
        açao3 = prompt();
      }

      if (açao3 == `2`) {
        batalhaGym(dias);
      }
    }

    function batalhaGym(dias) {
      console.clear();
      console.log(`\nEscolha seu pokemon:`);

      for (i = 0; i < equipe.length; i++) {
        console.log(`${i + 1} - ${equipe[i].pkm}`);
      }

      escolhaParty = prompt();

      while (
        (equipe.length == 1 && escolhaParty != 1) ||
        (equipe.length == 2 && escolhaParty > 2) ||
        escolhaParty < 1 ||
        (equipe.length == 3 && escolhaParty > 3) ||
        escolhaParty < 1 ||
        (equipe.length == 4 && escolhaParty > 4) ||
        escolhaParty < 1 ||
        (equipe.length == 5 && escolhaParty > 5) ||
        escolhaParty < 1 ||
        (equipe.length == 6 && escolhaParty > 6) ||
        escolhaParty < 1
      ) {
        console.log();
        console.log(`Escolha seu pokemon:`);

        for (i = 0; i < equipe.length; i++) {
          console.log(`${i + 1} - ${equipe[i].pkm}`);
        }
        escolhaParty = prompt();
      }

      if (equipe[escolhaParty - 1].hp <= 0) {
        console.log(
          `Seu ${
            equipe[escolhaParty - 1].pkm
          } está sem vida, ele não consegue lutar...\n`
        );
        prompt("\n...\n");
        batalhaGym(dias);
      }

      console.log(
        `\n${equipe[escolhaParty - 1].pkm} esta batalhando contra ${
          encontroGym.pkm
        }...\n`
      );
      console.log(
        `${equipe[escolhaParty - 1].pkm} - Hp:${equipe[escolhaParty - 1].hp}`
      );
      console.log(`${encontroGym.pkm} - Hp:${encontroGym.hp}\n`);

      while (equipe[escolhaParty - 1].hp > 0 && encontroGym.hp > 0) {
        if (encontroGym.speed > equipe[escolhaParty - 1].speed) {
          equipe[escolhaParty - 1].hp -= encontroGym.atk;
          equipe[escolhaParty - 1].mudarhp(equipe[escolhaParty - 1].hp);

          console.log(
            `${encontroGym.pkm} deu ${encontroGym.atk} de dano no ${
              equipe[escolhaParty - 1].pkm
            }\n`
          );

          if (equipe[escolhaParty - 1].hp <= 0) {
            prompt("\n...\n");
            console.clear();
            console.log(
              `${encontroGym.pkm} derrotou seu ${equipe[escolhaParty - 1].pkm}!`
            );
            prompt("\n...\n");
            console.clear();

            if (
              (equipe.length == 1 && equipe[0].hp <= 0) ||
              (equipe.length == 2 && equipe[0].hp <= 0 && equipe[1].hp <= 0) ||
              (equipe.length == 3 &&
                equipe[0].hp <= 0 &&
                equipe[1].hp <= 0 &&
                equipe[2].hp <= 0) ||
              (equipe.length == 4 &&
                equipe[0].hp <= 0 &&
                equipe[1].hp <= 0 &&
                equipe[2].hp <= 0 &&
                equipe[3].hp <= 0) ||
              (equipe.length == 5 &&
                equipe[0].hp <= 0 &&
                equipe[1].hp <= 0 &&
                equipe[2].hp <= 0 &&
                equipe[3].hp <= 0 &&
                equipe[4].hp <= 0) ||
              (equipe.length == 6 &&
                equipe[0].hp <= 0 &&
                equipe[1].hp <= 0 &&
                equipe[2].hp <= 0 &&
                equipe[3].hp <= 0 &&
                equipe[4].hp <= 0 &&
                equipe[5].hp <= 0)
            ) {
              if (contador <= 4) {
                contador = 0;
              } else if (contador <= 8) {
                contador = 4;
              } else if (contador <= 11) {
                contador = 8;
              } else if (contador <= 14) {
                contador = 11;
              } else if (contador <= 17) {
                contador = 14;
              } else if (contador <= 20) {
                contador = 17;
              } else if (contador <= 23) {
                contador = 20;
              }
              if (pkmMortos.length > 0) {
                for (i = 0; i < pkmMortos.length; i++) {
                  pkmGyms[dias].push(pkmMortos[i]);
                }
              }
              for (i = 0; i < pkmGyms[dias].length; i++) {
                if (pkmGyms[dias][i].hp != pkmGyms[dias][i].hpOriginal) {
                  let reduzir = pkmGyms[dias][i].hp - pkmGyms[dias][i].hp;

                  let add = (reduzir += pkmGyms[dias][i].hpOriginal);

                  pkmGyms[dias][i].mudarhp(add);
                }
              }
              pokSelvagens[dias].push(
                doduo,
                seel,
                venonat,
                pidgey,
                gastly,
                eevee
              );
              for (i = 0; i < pokSelvagens[dias].length; i++) {
                if (
                  pokSelvagens[dias][i].hp != pokSelvagens[dias][i].hpOriginal
                ) {
                  let reduzir =
                    pokSelvagens[dias][i].hp - pokSelvagens[dias][i].hp;

                  let add = (reduzir += pokSelvagens[dias][i].hpOriginal);
                  pokSelvagens[dias][i].mudarhp(add);
                }
              }

              console.log(`Todos seus Pokemons morreram!`);
              console.log("Você voltará para a cidade anterior...");
              prompt("\n...\n");
              console.clear();
              if (dias - 1 < 0) {
                for (i = 0; i < equipe.length; i++) {
                  if (equipe[i].hp != equipe[i].hpOriginal) {
                    let reduzir = equipe[i].hp - equipe[i].hp;

                    let add = (reduzir += equipe[i].hpOriginal);

                    equipe[i].mudarhp(add);
                  }
                }
                console.log(`Pokemons totalmente curados!`);
                prompt("\n...\n");
                console.clear();

                passardias(dias);
              } else {
                cidade(dias - 1);
              }
            } else {
              batalhaGym(dias);
            }
          } else {
            encontroGym.hp -= equipe[escolhaParty - 1].atk;
            encontroGym.mudarhp(encontroGym.hp);

            console.log(
              `Seu ${equipe[escolhaParty - 1].pkm} deu ${
                equipe[escolhaParty - 1].atk
              } de dano no ${encontroGym.pkm}\n`
            );

            console.log(
              `${equipe[escolhaParty - 1].pkm} - Hp:${
                equipe[escolhaParty - 1].hp
              }`
            );
            console.log(`${encontroGym.pkm} - Hp:${encontroGym.hp}`);
            prompt("\n...\n");
            console.clear();

            if (encontroGym.hp <= 0) {
              console.log(
                `Seu ${equipe[escolhaParty - 1].pkm} derrotou ${
                  encontroGym.pkm
                }!`
              );
              prompt("\n...\n");
              console.clear();

              pkmMortos = pkmGyms[dias].splice(randomizarPkmGym, 1);

              console.log(`Seu ${equipe[escolhaParty - 1].pkm} subiu 5 nvls!`);
              equipe[escolhaParty - 1].nvl += 5;
              equipe[escolhaParty - 1].mudarnvl(equipe[escolhaParty - 1].nvl);
              prompt("\n...\n");
              evoluir();
              console.clear();

              if (pkmGyms[dias].length == 0) {
                insignia++;
                if (contador == 23) {
                  console.log(
                    `PARABÉNS!! Você derrotou o líder de ginásio e ganhou a última insígnia!`
                  );
                  prompt("\n...\n");
                  console.log(
                    `Depois de derrotar todos os líderes de ginásios, você se tornou o maior mestre pokemon que Kanto já viu!`
                  );
                  prompt("\n...\n");
                  console.clear();
                  console.log("Usando esse pokemons:");
                  for (i = 0; i < equipe.length; i++) {
                    console.log(`${i + 1} - ${equipe[i].pkm}`);
                  }
                  console.log(`Seu nome ficará marcado na história.`);
                  prompt("\n...\n");
                  console.clear();
                  console.log("Quer jogar novamente?");
                  console.log(`1 - Sim   2 - Nao`);
                  let reiniciar = prompt();
                  if (reiniciar == `1`) {
                    jogo();
                  } else {
                    return;
                  }
                } else {
                  console.log(
                    `PARABÉNS!! Você derrotou o líder de ginásio e ganhou uma insígnia!`
                  );
                  prompt("\n...\n");
                  console.clear();
                }
              } else {
                randomPokGym(pkmGyms[dias]);
                batalhaGym(dias);
              }
            } else {
              duranteBatalhaGym(dias);
            }
          }
        } else {
          encontroGym.hp -= equipe[escolhaParty - 1].atk;
          encontroGym.mudarhp(encontroGym.hp);

          console.log(
            `Seu ${equipe[escolhaParty - 1].pkm} deu ${
              equipe[escolhaParty - 1].atk
            } de dano no ${encontroGym.pkm}\n`
          );

          if (encontroGym.hp <= 0) {
            prompt("\n...\n");
            console.clear();
            console.log(
              `Seu ${equipe[escolhaParty - 1].pkm} derrotou ${encontroGym.pkm}!`
            );
            prompt("\n...\n");
            console.clear();

            pkmMortos = pkmGyms[dias].splice(randomizarPkmGym, 1);

            console.log(`Seu ${equipe[escolhaParty - 1].pkm} subiu 5 nvls!`);
            equipe[escolhaParty - 1].nvl += 5;
            equipe[escolhaParty - 1].mudarnvl(equipe[escolhaParty - 1].nvl);
            prompt("\n...\n");
            evoluir();
            console.clear();

            if (pkmGyms[dias].length == 0) {
              insignia++;
              if (contador == 23) {
                console.log(
                  `PARABÉNS!! Você derrotou o líder de ginásio e ganhou a última insígnia!`
                );
                prompt("\n...\n");
                console.log(
                  `Depois de derrotar todos os líderes de ginásios, você se tornou o maior mestre pokemon que Kanto já viu!`
                );
                prompt("\n...\n");
                console.clear();
                console.log("Usando esse pokemons:");
                for (i = 0; i < equipe.length; i++) {
                  console.log(`${i + 1} - ${equipe[i].pkm}`);
                }
                console.log(`Seu nome ficará marcado na história.`);
                prompt("\n...\n");
                console.clear();
                console.log("Quer jogar novamente?");
                console.log(`1 - Sim   2 - Nao`);
                let reiniciar = prompt();
                if (reiniciar == `1`) {
                  jogo();
                } else {
                  return;
                }
              } else {
                console.log(
                  `PARABÉNS!! Você derrotou o líder de ginásio e ganhou uma insígnia!`
                );
                prompt("\n...\n");
                console.clear();
              }
            } else {
              randomPokGym(pkmGyms[dias]);
              batalhaGym(dias);
            }
          } else {
            equipe[escolhaParty - 1].hp -= encontroGym.atk;
            equipe[escolhaParty - 1].mudarhp(equipe[escolhaParty - 1].hp);

            console.log(
              `${encontroGym.pkm} deu ${encontroGym.atk} de dano no ${
                equipe[escolhaParty - 1].pkm
              }\n`
            );
            console.log(
              `${equipe[escolhaParty - 1].pkm} - Hp:${
                equipe[escolhaParty - 1].hp
              }`
            );
            console.log(`${encontroGym.pkm} - Hp:${encontroGym.hp}`);
            prompt("\n...\n");
            console.clear();

            if (equipe[escolhaParty - 1].hp <= 0) {
              console.log(
                `${encontroGym.pkm} derrotou seu ${
                  equipe[escolhaParty - 1].pkm
                }!`
              );
              prompt("\n...\n");
              console.clear();

              if (
                (equipe.length == 1 && equipe[0].hp <= 0) ||
                (equipe.length == 2 &&
                  equipe[0].hp <= 0 &&
                  equipe[1].hp <= 0) ||
                (equipe.length == 3 &&
                  equipe[0].hp <= 0 &&
                  equipe[1].hp <= 0 &&
                  equipe[2].hp <= 0) ||
                (equipe.length == 4 &&
                  equipe[0].hp <= 0 &&
                  equipe[1].hp <= 0 &&
                  equipe[2].hp <= 0 &&
                  equipe[3].hp <= 0) ||
                (equipe.length == 5 &&
                  equipe[0].hp <= 0 &&
                  equipe[1].hp <= 0 &&
                  equipe[2].hp <= 0 &&
                  equipe[3].hp <= 0 &&
                  equipe[4].hp <= 0) ||
                (equipe.length == 6 &&
                  equipe[0].hp <= 0 &&
                  equipe[1].hp <= 0 &&
                  equipe[2].hp <= 0 &&
                  equipe[3].hp <= 0 &&
                  equipe[4].hp <= 0 &&
                  equipe[5].hp <= 0)
              ) {
                if (contador <= 4) {
                  contador = 0;
                } else if (contador <= 8) {
                  contador = 4;
                } else if (contador <= 11) {
                  contador = 8;
                } else if (contador <= 14) {
                  contador = 11;
                } else if (contador <= 17) {
                  contador = 14;
                } else if (contador <= 20) {
                  contador = 17;
                } else if (contador <= 23) {
                  contador = 20;
                }
                if (pkmMortos.length > 0) {
                  for (i = 0; i < pkmMortos.length; i++) {
                    pkmGyms[dias].push(pkmMortos[i]);
                  }
                }
                for (i = 0; i < pkmGyms[dias].length; i++) {
                  if (pkmGyms[dias][i].hp != pkmGyms[dias][i].hpOriginal) {
                    let reduzir = pkmGyms[dias][i].hp - pkmGyms[dias][i].hp;

                    let add = (reduzir += pkmGyms[dias][i].hpOriginal);

                    pkmGyms[dias][i].mudarhp(add);
                  }
                }

                pokSelvagens[dias].push(
                  machop,
                  sandshrew,
                  pikachu,
                  nidoranM,
                  growlithe,
                  farfetchD
                );
                for (i = 0; i < pokSelvagens[dias].length; i++) {
                  if (
                    pokSelvagens[dias][i].hp != pokSelvagens[dias][i].hpOriginal
                  ) {
                    let reduzir =
                      pokSelvagens[dias][i].hp - pokSelvagens[dias][i].hp;

                    let add = (reduzir += pokSelvagens[dias][i].hpOriginal);
                    pokSelvagens[dias][i].mudarhp(add);
                  }
                }

                console.log(`Todos seus Pokemons morreram!`);
                console.log("Você voltará para a cidade anterior...");
                prompt("\n...\n");
                console.clear();
                if (dias - 1 < 0) {
                  for (i = 0; i < equipe.length; i++) {
                    if (equipe[i].hp != equipe[i].hpOriginal) {
                      let reduzir = equipe[i].hp - equipe[i].hp;

                      let add = (reduzir += equipe[i].hpOriginal);

                      equipe[i].mudarhp(add);
                    }
                  }
                  console.log(`Pokemons totalmente curados!`);
                  prompt("\n...\n");
                  console.clear();

                  passardias(dias);
                } else {
                  cidade(dias - 1);
                }
              } else {
                batalhaGym(dias);
              }
            } else {
              duranteBatalhaGym(dias);
            }
          }
        }
      }
      if (equipe[escolhaParty - 1].hp < 0) {
        equipe[escolhaParty - 1].hp -= equipe[escolhaParty - 1].hp;
        equipe[escolhaParty - 1].mudarhp(equipe[escolhaParty - 1].hp);
      }
      return escolhaParty, encontroGym;
    }

    function cidade(dias) {
      console.log(cidades[dias]);
      console.log("\nQuantidade de insígnias que você tem:");
      console.log(insignia);
      console.log();
      console.log(`Onde quer ir?
    1 - Pokecenter
    2 - Depósito PKM
    3 - Ginásio
    4 - Sair da cidade`);
      escolhas = prompt();

      while (escolhas > 4 || escolhas < 1) {
        console.log(`Onde quer ir?
    1 - Pokecenter
    2 - Depósito PKM
    3 - Ginásio
    4 - Sair da cidade`);
        escolhas = prompt();
      }

      if (escolhas == `1`) {
        console.clear();
        pokecenter();
        cidade(dias);
      } else if (escolhas == `2`) {
        if (deposito.length == 0) {
          console.log(`\nDepósito vazio.\n`);
          prompt("\n...\n");
          console.clear();
          cidade(dias);
        } else {
          console.clear();
          depositoPkm();
          cidade(dias);
        }
      } else if (escolhas == `3`) {
        console.clear();
        if (
          (dias == 0 && insignia == 1) ||
          (dias == 1 && insignia == 2) ||
          (dias == 2 && insignia == 3) ||
          (dias == 3 && insignia == 4) ||
          (dias == 4 && insignia == 5) ||
          (dias == 5 && insignia == 6) ||
          (dias == 6 && insignia == 7) ||
          (dias == 7 && insignia == 8)
        ) {
          console.log(`Você já derrotou o líder de ginásio dessa cidade.`);
          prompt("\n...\n");
          cidade(dias);
        } else {
          console.clear();
          ginasio(dias);
          cidade(dias);
        }
      } else if (escolhas == `4`) {
        console.clear();
        if (
          (dias == 0 && insignia < 1) ||
          (dias == 1 && insignia < 2) ||
          (dias == 2 && insignia < 3) ||
          (dias == 3 && insignia < 4) ||
          (dias == 4 && insignia < 5) ||
          (dias == 5 && insignia < 6) ||
          (dias == 6 && insignia < 7) ||
          (dias == 7 && insignia < 8)
        ) {
          console.log(
            `Você precisa derrotar o líder de ginásio dessa cidade para continuar.`
          );
          prompt("\n...\n");
          cidade(dias);
        } else {
          dias++;
          passardias(dias);
        }
      }
    }
  }
}
jogo();
