    // Create the application helper and add its render target to the page
    
    let app = new PIXI.Application({ width: 800, height: 600 , resolution: window.devicePixelRatio || 1,});
    document.body.appendChild(app.view)


    const background = new PIXI.Sprite.from('Art/Background.png');

    const Parede = new PIXI.Sprite.from('Art/nada.png')
    Parede.interactive = true

    app.stage.addChild(background)

    const xImg = 230

    const yImg = 220

    const PicksPlayer1 = new PIXI.Container();
    PicksPlayer1.width = 154
    PicksPlayer1.height = 328
    PicksPlayer1.x = xImg - 220
    PicksPlayer1.y = yImg

    const P1P1 = new PIXI.Container();

    const P1P2 = new PIXI.Container();

    const P1P3 = new PIXI.Container();

    const PicksPlayer2 =  new PIXI.Container();
    PicksPlayer2.width = 154
    PicksPlayer2.height = 328
    PicksPlayer2.x = xImg + 405
    PicksPlayer2.y = yImg

    const P2P1 = new PIXI.Container();

    const P2P2 = new PIXI.Container();

    const P2P3 = new PIXI.Container();

    const container = new PIXI.Container();

    const BansPlayer1 = new PIXI.Container();
    BansPlayer1.x = xImg - 60
    BansPlayer1.y = yImg + 280

    const BansPlayer2 = new PIXI.Container();
    BansPlayer2.x = xImg + 288
    BansPlayer2.y = yImg + 280

    const quadro = new PIXI.Container();

    let Round = 0;
    let BanD = 0;
    let pick = 0;

    app.stage.addChild(container)
    
    app.stage.addChild(PicksPlayer1);
    PicksPlayer1.visible = true
    app.stage.addChild(PicksPlayer2);
    PicksPlayer2.visible = true
    app.stage.addChild(BansPlayer1);
    BansPlayer1.visible = true
    app.stage.addChild(BansPlayer2);
    BansPlayer2.visible = true

    //Filter:


    // Picks:
    const Mage = PIXI.Sprite.from('PICKS/MAGO.png');
    const Warlock = PIXI.Sprite.from('PICKS/BRUXO.png');
    const Hunter = PIXI.Sprite.from('PICKS/CAÇADOR.png');
    const DH = PIXI.Sprite.from('PICKS/DEMONHUNTER.png');
    const Druid = PIXI.Sprite.from('PICKS/DRUIDA.png');
    const Warrior = PIXI.Sprite.from('PICKS/GUERREIRO.png');
    const Rogue = PIXI.Sprite.from('PICKS/Ladino.png');
    const Priest = PIXI.Sprite.from('PICKS/PADRRE.png');
    const Paladin = PIXI.Sprite.from('PICKS/PALA.png');
    const Shaman = PIXI.Sprite.from('PICKS/SHAMAN.png');
    // Imagens para Animação
    const MageP = PIXI.Sprite.from('PICKS/MAGO.png');
    const WarlockP = PIXI.Sprite.from('PICKS/BRUXO.png');
    const HunterP = PIXI.Sprite.from('PICKS/CAÇADOR.png');
    const DHP = PIXI.Sprite.from('PICKS/DEMONHUNTER.png');
    const DruidP = PIXI.Sprite.from('PICKS/DRUIDA.png');
    const WarriorP = PIXI.Sprite.from('PICKS/GUERREIRO.png');
    const RogueP = PIXI.Sprite.from('PICKS/Ladino.png');
    const PriestP = PIXI.Sprite.from('PICKS/PADRRE.png');
    const PaladinP = PIXI.Sprite.from('PICKS/PALA.png');
    const ShamanP = PIXI.Sprite.from('PICKS/SHAMAN.png');
    //Imagens de PICK/Art
    const MageArt = PIXI.Sprite.from('Art/Mago.png');
    const WarlockArt = PIXI.Sprite.from('Art/Bruxo.png');
    const HunterArt = PIXI.Sprite.from('Art/Hunter.png');
    const DHArt = PIXI.Sprite.from('Art/Demonhunter.png');
    const DruidArt = PIXI.Sprite.from('Art/Druida.png');
    const WarriorArt = PIXI.Sprite.from('Art/Guerreiro.png');
    const RogueArt = PIXI.Sprite.from('Art/Ladino.png');
    const PriestArt = PIXI.Sprite.from('Art/Padre.png');
    const PaladinArt = PIXI.Sprite.from('Art/Paladino.png');
    const ShamanArt = PIXI.Sprite.from('Art/Shamam.png');
    // Imagens de Ban
    const BanMage = PIXI.Sprite.from('Bans/Mage Ban.png')
    const BanLock = PIXI.Sprite.from('Bans/Bruxo Ban.png')
    const BanHunter = PIXI.Sprite.from('Bans/Caçador ban.png')
    const BanDH = PIXI.Sprite.from('Bans/Demonhunter ban.png')
    const BanDruid = PIXI.Sprite.from('Bans/Druida ban.png')
    const BanWarrior = PIXI.Sprite.from('Bans/Guerreiro ban.png')
    const BanRogue = PIXI.Sprite.from('Bans/Rogue ban.png')
    const BanPriest = PIXI.Sprite.from('Bans/Padre ban.png')
    const BanPaladin = PIXI.Sprite.from('Bans/Pala ban.png')
    const BanShaman = PIXI.Sprite.from('Bans/Shamam ban.png')
    // Imagens para animação de Ban
    const MageP1 = PIXI.Sprite.from('Eliminado/Metades/Mago PB1.png')
    const MageP2 = PIXI.Sprite.from('Eliminado/Metades/Mago PB2.png')
    const BruxoP1 = PIXI.Sprite.from('Eliminado/BRUXOP1.png')
    const BruxoP2 = PIXI.Sprite.from('Eliminado/BRUXOP2.png')
    const HunterP1 = PIXI.Sprite.from('Eliminado/Metades/Hunter PB1.png')
    const HunterP2 = PIXI.Sprite.from('Eliminado/Metades/Hunter PB2.png')
    const DHP1 = PIXI.Sprite.from('Eliminado/Metades/DemonhunterPB1.png')
    const DHP2 = PIXI.Sprite.from('Eliminado/Metades/DemonhunterPB2.png')
    const DruidP1 = PIXI.Sprite.from('Eliminado/Metades/Druida PB1.png')
    const DruidP2 = PIXI.Sprite.from('Eliminado/Metades/Druida PB2.png')
    const WarriorP1 = PIXI.Sprite.from('Eliminado/Metades/Guerreiro PB1.png')
    const WarriorP2 = PIXI.Sprite.from('Eliminado/Metades/Guerreiro PB2.png')
    const RogueP1 = PIXI.Sprite.from('Eliminado/Metades/Ladino PB1.png')
    const RogueP2 = PIXI.Sprite.from('Eliminado/Metades/Ladino PB2.png')
    const PriestP1 = PIXI.Sprite.from('Eliminado/Metades/Padre PB1.png')
    const PriestP2 = PIXI.Sprite.from('Eliminado/Metades/padre PB2.png')
    const PaladinP1 = PIXI.Sprite.from('Eliminado/Metades/Paladino PB1.png')
    const PaladinP2 = PIXI.Sprite.from('Eliminado/Metades/Paladino PB2.png')
    const ShamanP1 = PIXI.Sprite.from('Eliminado/Metades/Shamam PB1.png')
    const ShamanP2 = PIXI.Sprite.from('Eliminado/Metades/Shamam PB2.png')


    //Picks do Player 1
    const PP1 = PIXI.Sprite.from('Art/PicksP1.png')
    PicksPlayer1.addChild(P1P1)
    P1P1.width = 154
    P1P1.height = 100
    P1P1.x = -5


    PicksPlayer1.addChild(P1P2)
    PicksPlayer1.addChild(P1P3)

    PicksPlayer1.addChild(PP1)

    //Picks do Player 2
    const PP2 = PIXI.Sprite.from('Art/PicksP2.png')

    PicksPlayer2.addChild(P2P1)
    P2P1.width = 154
    P2P1.height = 100
    PicksPlayer2.addChild(P2P2)
    PicksPlayer2.addChild(P2P3)
    
    
    PicksPlayer2.addChild(PP2)

    //Bans Player 1
    const BP1 = PIXI.Sprite.from('Art/Bans1.png')

    const B1P1 = PIXI.Sprite.from('Bans/Ban.png')
    B1P1.width = 30
    B1P1.height = 40
    B1P1.y = 50
    B1P1.x = xImg - 220

    const B1P2 = PIXI.Sprite.from('Bans/Ban2.png')
    B1P2.width = 30
    B1P2.height = 40
    B1P2.y = 50
    B1P2.x = xImg - 165


    BansPlayer1.addChild(BP1)
    //BansPlayer1.addChild(B1P2)
    //BansPlayer1.addChild(B1P1)
    


    //Bans Player 2
    const BP2 = PIXI.Sprite.from('Art/Bans2.png')

    const B2P1 = PIXI.Sprite.from('Bans/Ban3.png')
    B2P1.width = 30
    B2P1.height = 40
    B2P1.y = 50
    B2P1.x = xImg - 215

    const B2P2 = PIXI.Sprite.from('Bans/Ban4.png')
    B2P2.width = 30
    B2P2.height = 40
    B2P2.y = 50
    B2P2.x = xImg - 160

    BansPlayer2.addChild(BP2)
    //BansPlayer2.addChild(B2P2)
    //BansPlayer2.addChild(B2P1)


    let BansP1 = []

    let BansP2 = []

    let PicksP1 = []

    let PicksP2 = []

    container.addChild(Mage);
    Mage.art = MageArt
    Mage.classe = 'Mago'
    Mage.width = 100
    Mage.height = 50
    Mage.x = xImg
    Mage.y = yImg
    Mage.relativo = MageP
    Mage.interactive = true
    Mage.buttonMode = true
    Mage.ban = BanMage
    Mage.cima = MageP2
    Mage.baixo = MageP1
    Mage.on('pointerdown', (event) => Draft(Mage))
    Mage.on('pointerover', (event) => onPointerOver(Mage))
    Mage.on('pointerout', (event) => onPointerOut(Mage))

    container.addChild(Druid);
    Druid.art = DruidArt
    Druid.classe = 'Druida'
    Druid.width = 100
    Druid.height = 50
    Druid.x = xImg + 130
    Druid.y = yImg
    Druid.relativo = DruidP
    Druid.interactive = true
    Druid.buttonMode = true
    Druid.ban = BanDruid
    Druid.cima = DruidP2
    Druid.baixo = DruidP1
    Druid.on('pointerdown', (event) => Draft(Druid))
    Druid.on('pointerover', (event) => onPointerOver(Druid))
    Druid.on('pointerout', (event) => onPointerOut(Druid))

    container.addChild(Priest);
    Priest.art = PriestArt
    Priest.classe = 'Padre'
    Priest.width = 100
    Priest.height = 50
    Priest.x = xImg + 260
    Priest.y = yImg
    Priest.relativo = PriestP
    Priest.interactive = true
    Priest.buttonMode = true
    Priest.ban = BanPriest
    Priest.cima = PriestP2
    Priest.baixo = PriestP1
    Priest.on('pointerdown', (event) => Draft(Priest))
    Priest.on('pointerover', (event) => onPointerOver(Priest))
    Priest.on('pointerout', (event) => onPointerOut(Priest))

    container.addChild(Rogue);
    Rogue.art = RogueArt
    Rogue.classe = 'Ladino'
    Rogue.width = 100
    Rogue.height = 50
    Rogue.x = xImg + 260
    Rogue.y = yImg + 80
    Rogue.relativo = RogueP
    Rogue.interactive = true
    Rogue.buttonMode = true
    Rogue.ban = BanRogue
    Rogue.cima = RogueP2
    Rogue.baixo = RogueP1
    Rogue.on('pointerdown', (event) => Draft(Rogue))
    Rogue.on('pointerover', (event) => onPointerOver(Rogue))
    Rogue.on('pointerout', (event) => onPointerOut(Rogue))

    container.addChild(Hunter);
    Hunter.art = HunterArt
    Hunter.classe = 'Hunter'
    Hunter.width = 100
    Hunter.height = 50
    Hunter.x = xImg + 130
    Hunter.y = yImg + 80
    Hunter.relativo = HunterP
    Hunter.interactive = true
    Hunter.buttonMode = true
    Hunter.ban = BanHunter
    Hunter.cima = HunterP2
    Hunter.baixo = HunterP1
    Hunter.on('pointerdown', (event) => Draft(Hunter))
    Hunter.on('pointerover', (event) => onPointerOver(Hunter))
    Hunter.on('pointerout', (event) => onPointerOut(Hunter))

    container.addChild(Paladin);
    Paladin.art = PaladinArt
    Paladin.classe = 'paladino'
    Paladin.width = 100
    Paladin.height = 50
    Paladin.x = xImg
    Paladin.y = yImg + 80
    Paladin.relativo = PaladinP
    Paladin.interactive = true
    Paladin.buttonMode = true
    Paladin.ban = BanPaladin
    Paladin.cima = PaladinP2
    Paladin.baixo = PaladinP1
    Paladin.on('pointerdown', (event) => Draft(Paladin))
    Paladin.on('pointerover', (event) => onPointerOver(Paladin))
    Paladin.on('pointerout', (event) => onPointerOut(Paladin))

    container.addChild(Warlock);
    Warlock.art = WarlockArt
    Warlock.classe = 'bruxo'
    Warlock.width = 100
    Warlock.height = 50
    Warlock.x = xImg
    Warlock.y = yImg + 160
    Warlock.relativo = WarlockP
    Warlock.interactive = true
    Warlock.buttonMode = true
    Warlock.ban = BanLock
    Warlock.cima = BruxoP2
    Warlock.baixo = BruxoP1
    Warlock.on('pointerdown', (event) => Draft(Warlock))
    Warlock.on('pointerover', (event) => onPointerOver(Warlock))
    Warlock.on('pointerout', (event) => onPointerOut(Warlock)) 

    container.addChild(Warrior);
    Warrior.art = WarriorArt
    Warrior.classe = 'Guerreiro'
    Warrior.width = 100
    Warrior.height = 50
    Warrior.x = xImg + 130
    Warrior.y = yImg + 160
    Warrior.relativo = WarriorP
    Warrior.interactive = true
    Warrior.buttonMode = true
    Warrior.ban = BanWarrior
    Warrior.cima = WarriorP2
    Warrior.baixo = WarriorP1
    Warrior.on('pointerdown', (event) => Draft(Warrior))
    Warrior.on('pointerover', (event) => onPointerOver(Warrior))
    Warrior.on('pointerout', (event) => onPointerOut(Warrior))

    container.addChild(Shaman);
    Shaman.art = ShamanArt
    Shaman.classe = 'Shaman'
    Shaman.width = 100
    Shaman.height = 50
    Shaman.x = xImg + 260
    Shaman.y = yImg + 160
    Shaman.relativo = ShamanP
    Shaman.interactive = true
    Shaman.buttonMode = true
    Shaman.cima = ShamanP2
    Shaman.baixo = ShamanP1
    Shaman.ban = BanShaman
    Shaman.on('pointerdown', (event) => Draft(Shaman))
    Shaman.on('pointerover', (event) => onPointerOver(Shaman))
    Shaman.on('pointerout', (event) => onPointerOut(Shaman))

    container.addChild(DH);
    DH.art = DHArt
    DH.classe = 'DH'
    DH.width = 110
    DH.height = 50
    DH.x = xImg + 125
    DH.y = yImg + 240
    DH.relativo = DHP
    DH.interactive = true
    DH.buttonMode = true
    DH.ban = BanDH
    DH.cima = DHP2
    DH.baixo = DHP1
    DH.on('pointerdown', (event) => Draft(DH))
    DH.on('pointerover', (event) => onPointerOver(DH))
    DH.on('pointerout', (event) => onPointerOut(DH))

    // Setando as imagens para a animação de Ban
   /* container.addChild(BruxoP1)
    BruxoP1.visible = false
    BruxoP1.width = 180
    BruxoP1.height = 100
    BruxoP1.x = xImg + 90
    BruxoP1.y = yImg + 129
    container.addChild(BruxoP2)
    BruxoP2.visible = false
    BruxoP2.x = xImg + 90
    BruxoP2.y = yImg + 29
    BruxoP2.width = 180
    BruxoP2.height = 100 */

    function onPointerOver(object) {
        object.tint = 0x666666;
    }

    function onPointerOut(object) {
        object.tint = 0xFFFFFF;
    }

    function Draft(object) {
        gsap.to(object, {duration: 1, pixi:{blur:20}});
        object.interactive = false
        object.buttonMode = false
        if (Round === 0) {
            animateBan(object.baixo,object.cima,object.ban)
            Round += 1
        } else if (Round === 1) {
            animateBan(object.baixo,object.cima,object.ban)
            Round += 1
        } else if (Round === 2) {
            PickShow(object.relativo,object.art,object.classe)
            Round += 1
        } else if (Round === 3) {
            PickShow(object.relativo,object.art,object.classe)
            Round += 1
        }else if (Round === 4){
            PickShow(object.relativo,object.art,object.classe)
            Round += 1
        }else if (Round === 5){
            animateBan(object.baixo,object.cima,object.ban)
            Round += 1
        }else if (Round === 6){
            animateBan(object.baixo,object.cima,object.ban)
            Round += 1
        }else if (Round === 7) {
            PickShow(object.relativo,object.art,object.classe)
            Round += 1
        }else if (Round === 8) {
            PickShow(object.relativo,object.art,object.classe)
            Round += 1
        }else if (Round === 9){
            PickShow(object.relativo,object.art,object.classe)
            Round += 1
    }}

    function PickShow(img,art,classe){
    switch(pick){

    case 0:
    P1P1.addChild(img)
    img.alpha = 0
    img.width = 150
    img.height = 110
    img.y = 9
    img.x = 8
    pick += 1
    gsap.to(img,{alpha: 1, duration: 5, delay: 1.5})
    animatePick(classe,art)
    break;

    case 2:
    P1P2.addChild(img)
    img.alpha = 0
    img.width = 150
    img.height = 105
    img.y = 120
    pick += 1 
    gsap.to(img,{alpha: 1, duration: 5})
    animatePick(classe,art)
    break;

    case 5:
    P1P3.addChild(img)
    img.alpha = 0
    img.width = 150
    img.height = 100
    img.y = 220
    pick += 1 
    gsap.to(img,{alpha: 1, duration: 5})
    animatePick(classe,art)
    break;

    case 1:
    P2P1.addChild(img)
    img.alpha = 0
    img.width = 145
    img.height = 110
    img.y = 9
    img.x = 8
    pick += 1
    gsap.to(img,{alpha: 1, duration: 5})
    animatePick(classe,art)
    break;
    
    case 3:
    P2P2.addChild(img)
    img.alpha = 0
    img.width = 150
    img.height = 105
    img.y = 120
    pick += 1  
    gsap.to(img,{alpha: 1, duration: 5})
    animatePick(classe,art)
    break;
    
    case 4:
    P2P3.addChild(img)
    img.alpha = 0
    img.width = 150
    img.height = 100
    img.y = 220
    pick += 1  
    gsap.to(img,{alpha: 1, duration: 5})
    animatePick(classe,art)
    break;
    }
}

    function animateBan(baixo,cima,ban){
        container.addChild(baixo)
        //baixo.width = 180
        //baixo.height = 100
        baixo.x = xImg + 65
        baixo.y = yImg + 148
        container.addChild(cima)
        cima.x = xImg + 65
        cima.y = yImg 
        //cima.width = 180
        //cima.height = 100
        cima.visible = true
        baixo.visible = true
    Ban(cima,baixo)
    banIconAnimate(ban)
    }
    
    function Ban(baixo,cima){
        gsap.to(cima,{
            pixi: {tint: 'red'}, duration: 3,delay:1
        });
        gsap.to(baixo,{
            pixi: {tint: 'red'}, duration: 3,delay:1
        });
        gsap.to(baixo.scale, {
            x: 1.2, y: 1.2, duration: 8, repeat: -1,delay:1.5
        });
        gsap.to(cima.scale, {
            x: 1.2, y: 1.2, duration: 8, repeat: -1,delay:1.5
        });
        gsap.to(cima,{rotation: 1, duration: 2,delay:1.5})
        gsap.to(baixo,{rotation:-1, duration: 2,delay:1.5})
        gsap.to(cima,{alpha: 0.0, duration: 2,delay:1.8})
        gsap.to(baixo,{alpha: 0.0, duration: 2,delay:1.8})
    }

    function banIconAnimate(ban){
    switch(BanD) {
        case 0:
        container.addChild(ban)
        ban.alpha = 0
        ban.x = xImg + 135
        ban.y = yImg + 65
        gsap.to(ban.scale,{
            x: 0.5, y: 0.5, duration: 2, delay: 3,
        })
        gsap.to(ban,{x: 180, y: 545, duration: 2, delay: 3})
        gsap.to(ban,{alpha: 1.0, duration:1, delay: 2,})
        BanD += 1
        break;

        case 3:
        container.addChild(ban)
        ban.alpha = 0
        ban.x = xImg + 135
        ban.y = yImg + 65
        gsap.to(ban.scale,{
            x: 0.5, y: 0.5, duration: 2, delay: 3,
        })
        gsap.to(ban,{x: 230, y: 545, duration: 3, delay: 3,})
        gsap.to(ban,{alpha: 1.0, duration:1, delay: 2,})
        BanD += 1
        break;

        case 1:
        container.addChild(ban)
        ban.alpha = 0
        ban.x = xImg + 135
        ban.y = yImg + 65
        gsap.to(ban.scale,{
            x: 0.5, y: 0.5, duration: 2, delay: 3,
        })
        gsap.to(ban,{x: 530, y: 545, duration: 3, delay: 3,})
        gsap.to(ban,{alpha: 1.0, duration:1, delay: 2,})
        BanD += 1 
        break;

        case 2:
        container.addChild(ban)
        ban.alpha = 0
        ban.x = xImg + 135
        ban.y = yImg + 65
        gsap.to(ban.scale,{
            x: 0.5, y: 0.5, duration: 2, delay: 3,
        })
        gsap.to(ban,{x: 580, y: 545, duration: 3, delay: 3,})
        gsap.to(ban,{alpha: 1.0, duration:1, delay: 2,})
        BanD += 1 
        break;
    }
    }

    function animatePick(classe,art){
    switch(classe){
        case 'Mago':
        container.addChild(art)
        art.x = xImg + 65
        art.y = yImg 
        gsap.to(art.scale,{x: 1.03, y: 1.03,duration:0.4,delay:0.4, repeat:1, yoyo: true})
        gsap.to(art,{
            pixi: {tint: 'aqua'}, duration: 0.4,delay:0.4, repeat: 1, yoyo: true
        })
        gsap.to(art,{
            alpha: 0, duration: 1.5, delay: 1.5
        })
        break

        case 'Druida':
        container.addChild(art)
        art.x = xImg + 65
        art.y = yImg 
        gsap.to(art.scale,{x: 1.03, y: 1.03,duration:0.4,delay:0.4, repeat:1, yoyo: true})
        gsap.to(art,{
            pixi: {tint: 'orange'}, duration: 0.4,delay:0.4, repeat: 1, yoyo: true
        })
        gsap.to(art,{
            alpha: 0, duration: 1.5, delay: 1.5
        })
        break

        case 'paladino':
        container.addChild(art)
        art.x = xImg + 65
        art.y = yImg 
        gsap.to(art.scale,{x: 1.03, y: 1.03,duration:0.4,delay:0.4, repeat:1, yoyo: true})
        gsap.to(art,{
            pixi: {tint: 'pink'}, duration: 0.4,delay:0.4, repeat: 1, yoyo: true
        })
        gsap.to(art,{
            alpha: 0, duration: 1.5, delay: 1.5
        })
        break

        case 'bruxo':
        container.addChild(art)
        art.x = xImg + 65
        art.y = yImg 
        gsap.to(art.scale,{x: 1.03, y: 1.03,duration:0.4,delay:0.4, repeat:1, yoyo: true})
        gsap.to(art,{
            pixi: {tint: 'purple'}, duration: 0.4,delay:0.4, repeat: 1, yoyo: true
        })
        gsap.to(art,{
            alpha: 0, duration: 1.5, delay: 1.5
        })
        break

        case 'Hunter':
        container.addChild(art)
        art.x = xImg + 65
        art.y = yImg 
        gsap.to(art.scale,{x: 1.03, y: 1.03,duration:0.4,delay:0.4, repeat:1, yoyo: true})
        gsap.to(art,{
            pixi: {tint: 'green'}, duration: 0.4,delay:0.4, repeat: 1, yoyo: true
        })
        gsap.to(art,{
            alpha: 0, duration: 1.5, delay: 1.5
        })
        break

        case 'Ladino':
        container.addChild(art)
        art.x = xImg + 65
        art.y = yImg 
        gsap.to(art.scale,{x: 1.03, y: 1.03,duration:0.4,delay:0.4, repeat:1, yoyo: true})
        gsap.to(art,{
            pixi: {tint: 'yellow'}, duration: 0.4,delay:0.4, repeat: 1, yoyo: true
        })
        gsap.to(art,{
            alpha: 0, duration: 1.5, delay: 1.5
        })
        break

        case 'Padre':
        container.addChild(art)
        art.x = xImg + 65
        art.y = yImg 
        gsap.to(art.scale,{x: 1.03, y: 1.03,duration:0.4,delay:0.4, repeat:1, yoyo: true})
        const filter = new PIXI.filters.ColorMatrixFilter();
        art.filters = [filter];
        gsap.to(filter, {
            brightness: 3, duration: 1, yoyo: true, repeat: 1,
        });
        gsap.to(art, {
            alpha: 0, duration: 1.5, delay: 1.5
        })
        break

        case 'Shaman':
        container.addChild(art)
        art.x = xImg + 65
        art.y = yImg 
        gsap.to(art.scale,{x: 1.03, y: 1.03,duration:0.4,delay:0.4, repeat:1, yoyo: true})
        gsap.to(art,{
            pixi: {tint: 'blue'}, duration: 0.4,delay:0.4, repeat: 1, yoyo: true
        })
        gsap.to(art,{
            alpha: 0, duration: 1.5, delay: 1.5
        })
        break

        case 'Guerreiro':
        container.addChild(art)
        art.x = xImg + 65
        art.y = yImg 
        gsap.to(art.scale,{x: 1.03, y: 1.03,duration:0.4,delay:0.4, repeat:1, yoyo: true})
        gsap.to(art,{
            pixi: {tint: 'red'}, duration: 0.4,delay:0.4, repeat: 1, yoyo: true
        })
        gsap.to(art,{
            alpha: 0, duration: 1.5, delay: 1.5
        })
        break

        case 'DH':
        container.addChild(art)
        art.x = xImg + 65
        art.y = yImg 
        gsap.to(art.scale,{x: 1.03, y: 1.03,duration:0.4,delay:0.4, repeat:1, yoyo: true})
        gsap.to(art,{
            pixi: {tint: 'green'}, duration: 0.4,delay:0.4, repeat: 1, yoyo: true
        })
        gsap.to(art,{
            alpha: 0, duration: 1.5, delay: 1.5
        })
        break
    }
    }
