var p = {
        comm1: "Need backup!",
        comm2: "Need a teammate!",
        comm3: "Pop him!",
        comm4: "We need to run!",
        comm5: "Tricksplit!",
        comm6: "Lets bait! ",
        comm7: "Split into me!",
        comm8: "Feed me!",
        comm9: "Tank the virus!",
        comm0: "Fuck!",
        comm10: "Tricksplit!",
        comm11: "Left!",
        comm12: "Up!",
        comm13: "Right!",
        comm14: "Bottom!"
    },
    m = {
        mainColor: "rgb(10, 88, 255)",
        bgColor: "#000000",
        foodColor: "rgb(10, 88, 255)",
        gridColor: "#111111",
        commandsTextColor: "#ffffff",
        darkTheme: !0,
        ogarplusIOColor: "rgb(10, 88, 255)"
    };
var losProfilesEstanCargados = 0,
    profileActual = {
        selected_profile: 0
    },
    player_profile = [{
        nick: "",
        clanTag: "",
        skinURL: "http://i.imgur.com/FV0iY16.png",
        color: m.mainColor
    }, {
        nick: "Profile 2",
        clanTag: "Team2",
        skinURL: "http://i.imgur.com/gdB7nj9.png",
        color: m.mainColor
    }, {
        nick: "Profile 3",
        clanTag: "Team3",
        skinURL: "http://i.imgur.com/FV0iY16.png",
        color: m.mainColor
    }, {
        nick: "Profile 4",
        clanTag: "Team4",
        skinURL: "http://i.imgur.com/gdB7nj9.png",
        color: m.mainColor
    }, {
        nick: "Profile 5",
        clanTag: "Team5",
        skinURL: "http://i.imgur.com/FV0iY16.png",
        color: m.mainColor
    }, {
        nick: "Profile 6",
        clanTag: "Team6",
        skinURL: "http://i.imgur.com/gdB7nj9.png",
        color: m.mainColor
    }, {
        nick: "Profile 7",
        clanTag: "Team7",
        skinURL: "http://i.imgur.com/FV0iY16.png",
        color: m.mainColor
    }, {
        nick: "Profile 8",
        clanTag: "Team8",
        skinURL: "http://i.imgur.com/FV0iY16.png",
        color: m.mainColor
    }, {
        nick: "Profile 9",
        clanTag: "Team9",
        skinURL: "http://i.imgur.com/gdB7nj9.png",
        color: m.mainColor
    }, {
        nick: "Profile 10",
        clanTag: "Team10",
        skinURL: "http://i.imgur.com/FV0iY16.png",
        color: m.mainColor
    }];
! function(_0x7c81x6, _0x7c81x7) {
    function _0x7c81x8(_0x7c81x6, _0x7c81x7, _0x7c81x8, _0x7c81x9, _0x7c81xa, _0x7c81xb, _0x7c81xc, _0x7c81xd) {
        this.id = _0x7c81x6, this.x = _0x7c81x7, this.y = _0x7c81x8, this.lastX = _0x7c81x7, this.lastY = _0x7c81x8, this.mass = _0x7c81x9, this.clanTag = _0x7c81xa, this.setNick(_0x7c81xb), this.skinURL = _0x7c81xc, 7 == _0x7c81xd.length && (this.color = _0x7c81xd), this.alive = !0, this.updateTime = Date.now()
    }

    function _0x7c81x9() {}

    function _0x7c81xa() {
        if (null !== document.getElementById("canvas")) {
            var _0x7c81x7 = document.getElementById("canvas");
            return _0x7c81x7.addEventListener("mousemove", function(_0x7c81x7) {
                if (_0x7c81x6.play && _0x7c81x6.cursorTracking) {
                    var _0x7c81x8 = 1 * _0x7c81x7.clientX,
                        _0x7c81x9 = 1 * _0x7c81x7.clientY;
                    _0x7c81x6.cursorX = (_0x7c81x8 - _0x7c81x6.innerW / 2) / _0x7c81x6.viewScale + _0x7c81x6.playerX, _0x7c81x6.cursorY = (_0x7c81x9 - _0x7c81x6.innerH / 2) / _0x7c81x6.viewScale + _0x7c81x6.playerY
                }
            }, !1), void((_0x7c81x6.gameCtx = _0x7c81x7.getContext("2d")))
        };
        setTimeout(_0x7c81xa, 50)
    }

    function _0x7c81xb() {
        return window.MC ? (window.MC._showNickDialog = window.MC.showNickDialog, window.MC.showNickDialog = function() {
            window.MC._showNickDialog.apply(this, arguments), window.onkeydown = function() {}
        }, window.MC._showStatsDialog = window.MC.showStatsDialog, window.MC.showStatsDialog = function() {
            window.MC._showStatsDialog.apply(this, arguments), window.onkeydown = function() {}
        }, window.MC._onPlayerSpawn = window.MC.onPlayerSpawn, window.MC.onPlayerSpawn = function() {
            window.MC._onPlayerSpawn.apply(this, arguments), _0x7c81x6.play = !0, _0x7c81x1a.sendPlayerSpawn()
        }, window.MC._onPlayerDeath = window.MC.onPlayerDeath, void((window.MC.onPlayerDeath = function() {
            window.MC._onPlayerDeath.apply(this, arguments), _0x7c81x6.play = !1, _0x7c81x1a.sendPlayerDeath(), _0x7c81x1a.updateDeathLocations(_0x7c81x6.playerX, _0x7c81x6.playerY), window.onkeydown = function() {}
        }))) : void(setTimeout)(_0x7c81xb, 50)
    }

    function _0x7c81xc() {
        var _0x7c81x8 = 1 * window.innerWidth,
            _0x7c81x9 = 1 * window.innerHeight,
            _0x7c81xa = _0x7c81x7("#helloContainer"),
            _0x7c81xb = _0x7c81xa.innerHeight();
        0 != _0x7c81xb ? _0x7c81x6.menuHeight = _0x7c81xb : _0x7c81xb = _0x7c81x6.menuHeight || 760;
        var _0x7c81xc = Math.min(1, _0x7c81x9 / _0x7c81xb),
            _0x7c81xd = _0x7c81xb * _0x7c81xc,
            _0x7c81xe = Math.round(_0x7c81x9 / 2 - 0.5 * _0x7c81xd),
            _0x7c81xf = "translate(-50%, 0%) scale(" + _0x7c81xc + ")";
        _0x7c81xa.css("transform", _0x7c81xf), _0x7c81xa.css("-ms-transform", _0x7c81xf), _0x7c81xa.css("-webkit-transform", _0x7c81xf), _0x7c81xa.css("top", "" + (_0x7c81xe - 100) + "px"), _0x7c81x6.innerW = _0x7c81x8, _0x7c81x6.innerH = _0x7c81x9
    }

    function _0x7c81xd() {
        return window.jQuery("#helloContainer").innerHeight() > 0 ? void(_0x7c81xc)() : void(setTimeout)(_0x7c81xd, 50)
    }

    function _0x7c81xe() {
        return _0x7c81x6.play ? _0x7c81x10[_0x7c81xf].exit : void(0)
    }! function() {
        window.core && (window.core = null, delete window.core), _0x7c81x7.ajax("http://agar.io/agario.core.js", {
            success: function(_0x7c81x6) {
                var _0x7c81x7 = _0x7c81x6;
                _0x7c81x7 = _0x7c81x7.replace(/if\((\+\w\[\w>>3\])<1\.0\){/i, "if($1<window.ogario.zoomResetValue){"), _0x7c81x7 = _0x7c81x7.replace(/(\d\.\d;return}function\s*)([\w$]+\(.,.\)){/i, "$1$2{return;"), _0x7c81x7 = _0x7c81x7.replace(/do\s*if\((\w)\){((\w)=!\((\+\w\[\w>>2\])<=20\.0\);)([\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;[\w$]+\(\d+,\w\[\w>>2]\|0,(\+\(\+\w\[\w>>2\]\)),(\+\(\+\w\[\w>>2\]\)),\+\(\+\w\[\w>>2\])\+5\.0(\),0\.0,6\.283185307179586,0\)\|0;[\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;\w=\w\[\w>>2\]\|0;)if\(\w\){([\w$]+\(\d+,\w\|0,\w&255\|0,\w&255\|0,\w&255\|0\)\|0;)([\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;)/i, "var gameCtx=null,ogario=null,nick=null,skin=null,cellSize=null,isFood=false,isVirus=false,isMyCell=false;do if($1=1,$1){cellSize=$4;$2 if(!$3){isFood=true;if(!window.ogario.showFood){break;}if(window.ogario.autoHideFood&&window.ogario.playerMass>1000){window.ogario.showFood=false;}if(!window.ogario.rainbowFood){window.ogario.foodCache.push({x:$6,y:$7,size:cellSize});break;}}$5$8 if($3){gameCtx=window.ogario.gameCtx;if(gameCtx){var ogario=window.ogario;ogario.globalApha=gameCtx.globalAlpha;if(gameCtx.lineJoin=='miter'){isVirus=true;if(ogario.setVirusColor&&ogario.setVirusStrokeColor){gameCtx.fillStyle=ogario.setVirusColor(cellSize);gameCtx.strokeStyle=ogario.setVirusStrokeColor(cellSize);}else{gameCtx.fillStyle=gameCtx.strokeStyle=ogario.virusColor;}gameCtx.stroke();gameCtx.globalAlpha*=ogario.virusAlpha;}else{if(ogario.cellMemOffset!==null&&ogario.getString){if((a[ogario.cellMemOffset+ogario.nameMemOffset+4>>0]&1)==0|0){nick=ogario.getString(ogario.cellMemOffset+ogario.nameMemOffset+5);}else{nick=ogario.getString(c[ogario.cellMemOffset+ogario.nameMemOffset+12>>2]|0);}}if(nick&&nick.length>0){if(ogario.playerNick&&nick===ogario.playerNick){isMyCell=true;}if(ogario.showCustomSkins&&ogario.customSkins&&ogario.getCustomSkin){skin=ogario.getCustomSkin(nick);}}if(ogario.play){if(ogario.oppColors&&ogario.setOppColor){gameCtx.fillStyle=ogario.setOppColor(cellSize,isMyCell);}else{$9}if(ogario.splitRange&&ogario.cacheBiggerCells){ogario.cacheBiggerCells($6,$7,cellSize);}}else{$9}if(ogario.transparentCells){gameCtx.globalAlpha*=ogario.cellsAlpha;}}$10gameCtx.globalAlpha=ogario.globalApha;if((ogario.transparentSkins||ogario.oppColors)&&!(isMyCell&&!ogario.ownTransparentSkin)){gameCtx.globalAlpha*=ogario.skinsAlpha;}if(skin){gameCtx.save();gameCtx.clip();gameCtx.drawImage(skin,$6-cellSize,$7-cellSize,2*cellSize,2*cellSize);gameCtx.restore();}}else{$9$10}break;"), _0x7c81x7 = _0x7c81x7.replace(/(if\(\(\w\[\w\+\d+>>0\]\|0\)==0\?\(\(\(\(\w\[\w\+\d+>>2\]\|0\)\+\(\w\[\d+\]\|0\)\|0\)>>>0\)%10\|0\|0\)!=0:0\){\w=\w\[\w>>2\]\|0;[\w$]+\(\d+,\w\|0\)\|0;\w=\w;return})([\w$]+\(\w,\w\);)/i, "if(gameCtx&&ogario){gameCtx.globalAlpha=ogario.globalApha;}$1 var hideCellInfo=false;if(cellSize&&cellSize>=40){if(!isVirus&&!isMyCell&&ogario.autoHideCellsInfo&&ogario.setAutoHideCellsInfo){hideCellInfo=ogario.setAutoHideCellsInfo(cellSize);}if(!hideCellInfo){$2}}else{$2}"), _0x7c81x7 = _0x7c81x7.replace(/(\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);)/i, "$1 if(window.ogario.setMapCoords){window.ogario.setMapCoords($3,$5,$7,$9,$2,$8);}"), _0x7c81x7 = _0x7c81x7.replace(/(do{\w=\+\w\[\(\w\[\w>>2\]\|0\)\+\d+>>2];\w=\w\+\s*)(\+\(~~\+\w\(\+\(\w\*\w\/100\.0\)\)\|0\))(;\w=\w\+4\|0}while\(\(\w\|0\)!=\(\w\|0\)\);(\w)=(\w);)/i, "window.ogario.playerCellsMass=[]; $1$2; window.ogario.playerCellsMass.push($2); $3 window.ogario.playerMass=$5; if(window.ogario.calculateMass){window.ogario.calculateMass();}"), _0x7c81x7 = _0x7c81x7.replace(/([\w$]+\(\d+,\w\[\w>>2\]\|0,(\+\w),(\+\w)\)\|0;[\w$]+\(\d+,\w\[\w>>2\]\|0,\+-(\+\w\[\w\+\d+>>3\]),\+-(\+\w\[\w\+\d+>>3\])\)\|0;)/i, "$1 window.ogario.viewScale=$2; window.ogario.playerX=$4; window.ogario.playerY=$5; if(window.ogario.customDraw){window.ogario.customDraw();}"), _0x7c81x7 = _0x7c81x7.replace(/(if\(\w<=)(20\.0)(\){\w=\w;return})(if\(!\w\){if\(\(\w\[\d+\]\|0\)!=\(\w\[\d+\]\|0\)\){\w=\w;return}if\(\(\w\[\w\+\d+>>0\]\|0\)!=0\?\(\w\[\w>>0\]\|0\)==0:0\){\w=\w;return}})/i, "$140.0$3"), _0x7c81x7 = _0x7c81x7.replace(/(\w=~~\(\+\(\w\[\w\+\d+>>2\]\|0\)\/\w)\);([\w$]+\(\w\)\|0;)(\w=~~\(\+\(\w\[\w\+\d+>>2\]\|0\)\/\w)\);(if\(!\w\){\w=\w;return})/i, "$1/0.6);$2$3/0.6);$4"), _0x7c81x7 = _0x7c81x7.replace(/(\w)(=\+\w\[\w>>3\]\*\+\w\()(.\d)(,\+\w\);)/i, "$1$2 (window.ogario.zoomSpeedValue||0.9) $4 window.ogario.zoomValue=$1;"), _0x7c81x7 = _0x7c81x7.replace(/(\w=\w\[\w>>2\]\|0;)((\w\[\w>>3\])=(\w);)(\w\[\w>>0\]=a\[\w>>0\];)/i, "$1 if(!window.ogario.autoZoom){$3=window.ogario.zoomValue;}else{$2}$5"), _0x7c81x7 = _0x7c81x7.replace(/(function\s*([\w$]+)\(\w\){return\s*[\w$]+\(\w,\w\)})/i, "$1 window.ogario.getString=$2;"), _0x7c81x7 = _0x7c81x7.replace(/(if\(\(\w\[\d+\]\|0\)!=0\?\(\w\[\d+\]\|\w\[(\w)\+\d+>>0\]\)<<24>>24==0:0\))((\w)=\w\[(\w)\+\d+>>2\]\|0;)else/i, "window.ogario.cellMemOffset=$2; $1 if(window.ogario.customSkins){$4=0;}else{$3}else"), _0x7c81x7 = _0x7c81x7.replace(/(\w=\w\+(\d+)\|0;\w=~~\(\+\w\[\w\+\d+>>2\]\*\.3\);)/i, "$1 window.ogario.nameMemOffset=$2;"), _0x7c81x7 = _0x7c81x7.replace(/(while\(0\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)(\w\[\w\+\d+>>0\]=1;\w=\w;return})/i, "$1$3$4$5$6"), _0x7c81x7 = _0x7c81x7.replace(/[\w$]+\(\w,\d+,15\);else/i, "{}");
                var _0x7c81x8 = document.createElement("script");
                _0x7c81x8.textContent = _0x7c81x7, _0x7c81x8.async = !0, document.body.appendChild(_0x7c81x8)
            },
            dataType: "text",
            method: "GET",
            cache: !1,
            crossDomain: !0
        })
    }();
    var _0x7c81xf = "en",
        _0x7c81x10 = {
            pl: {
                start: "Start",
                settings: "Ustawienia",
                autoZoom: "Auto Zoom",
                autoHideCellsInfo: "Autoukrywanie nazw i masy",
                autoHideFood: "Autoukrywanie pokarmu",
                hideOwnName: "Ukryj własną nazwę",
                customSkins: "Własne skiny",
                rainbowFood: "Kolorowy pokarm",
                transparentCells: "Przezroczyste kulki",
                transparentSkins: "Przezroczyste skiny",
                ownTransparentSkin: "Własny przezroczysty skin",
                showBgSectors: "Sektory w tle",
                showMapBorders: "Granice mapy",
                showMiniMap: "Pokaż minimapę",
                oppColors: "Kolory przeciwników",
                splitRange: "Zasięg podziału",
                showFPS: "Pokaż statystyki gry",
                textStroke: "Obwódki tekstu",
                disableShift: "Wyłącz Shift",
                disableAlt: "Wyłącz Alt",
                hideChat: "Ukryj czat",
                mouseControl: "Split/feed myszką",
                mouseInvert: "Odwróć klawisze myszki",
                cursorTracking: "Śledzenie kursora",
                keys: "Klawisze",
                qKey: "Podwójny podział",
                wKey: "Szybki feed",
                eKey: "Pauza kulki",
                aKey: "Przełącz skiny",
                sKey: "Pokaż/ukryj skiny",
                dKey: "Przełącz kulkę",
                fKey: "Pokaż/ukryj pokarm",
                hKey: "Ukryj czat",
                zKey: "Reset zoomu",
                xKey: "Przełącz miejsce śmierci",
                cKey: "Historia czatu / Czyść czat",
                bKey: "Pokaż/ukryj sektory w tle",
                nKey: "Pokaż/ukryj nazwy",
                mKey: "Pokaż/ukryj masę",
                shiftKey: "Szybki podział n16",
                spaceKey: "Podział",
                space: "Spacja",
                enterKey: "Napisz wiadomość",
                tildeKey: "Szybki resp (party)",
                commands: "Komendy",
                saveComm: "Zapisz komendy",
                theme: "Wygląd",
                themeType: "Motyw",
                darkTheme: "Ciemny motyw",
                lightTheme: "Jasny motyw",
                mainColor: "Kolor główny",
                bgColor: "Kolor tła",
                foodColor: "Kolor pokarmu",
                gridColor: "Kolor sektorów",
                commandsTextColor: "Kolor tekstu komend",
                saveSett: "Zapisz ustawienia",
                hideChatMsg: "Ukryto czat!",
                activePartys: "Aktywne party",
                pause: "PAUZA!",
                visit: "Odwiedź ",
                exit: "Agarplus.io: Czy na pewno chcesz opuścic grę?"
            },
            en: {
                start: "Start",
                settings: "Settings",
                autoZoom: "Auto Zoom",
                autoHideCellsInfo: "Auto Hide Mass",
                autoHideFood: "Auto hide food",
                hideOwnName: "Hide my name",
                customSkins: "Custom skins",
                rainbowFood: "Rainbow color",
                transparentCells: "Transparent blobs",
                transparentSkins: "Transparent skins",
                ownTransparentSkin: "Transp skin own",
                showBgSectors: "Grid Locations",
                showMapBorders: "Show map borders",
                showMiniMap: "Minimap",
                oppColors: "Enemy colors",
                splitRange: "Split Indicators",
                showFPS: "FPS/Score",
                textStroke: "Text Shadows",
                disableShift: "Disable Shift",
                disableAlt: "Disable Alt",
                hideChat: "Hide chat",
                mouseControl: "Mouse feed",
                mouseInvert: "Invert mouse buttons",
                cursorTracking: "Cursor tracking",
                keys: "Keys",
                qKey: "Double split",
                wKey: "Macro W",
                eKey: "Cell pause",
                aKey: "Toggle custom/vanilla skins",
                sKey: "Show/hide skins",
                dKey: "Toggle own biggest/smallest cell",
                fKey: "Show/hide food",
                hKey: "Show/hide chat",
                zKey: "Reset zoom",
                xKey: "Toggle death location",
                cKey: "Chat history / Clear chat",
                bKey: "Show/hide background sectors",
                nKey: "Show/hide names",
                mKey: "Show/hide mass",
                shiftKey: "Split n16",
                spaceKey: "Split",
                space: "Space",
                enterKey: "Chatbox send message",
                tildeKey: "Quick resp (party)",
                commands: "Commands",
                saveComm: "Save commands",
                theme: "Theming",
                themeType: "Theme type",
                darkTheme: "Dark theme",
                lightTheme: "Light theme",
                mainColor: "Main color",
                bgColor: "Background color",
                foodColor: "Food color",
                gridColor: "Grid color",
                commandsTextColor: "Commands text color",
                saveSett: "Save settings",
                hideChatMsg: "Hide chat!",
                activePartys: "Active partys",
                pause: "PAUSE!",
                visit: "Visit ",
                exit: "Your are leaving Agar.io."
            }
        };
    if ("pl" == _0x7c81xf) {
        var p = {
            comm1: "Feeduj!",
            comm2: "Dziel się!",
            comm3: "Pomocy na %currentSector%!",
            comm4: "Wróg na %currentSector%!",
            comm5: "Zabij pomocnika!",
            comm6: "Strzel z wirusa!",
            comm7: "Zjedz wirusa!",
            comm8: "Zjebałem, wybacz.",
            comm9: "Ja pierdolę...",
            comm0: "Kurwa mać!",
            comm10: "Trick!",
            comm11: "Lewo!",
            comm12: "Góra!",
            comm13: "Prawo!",
            comm14: "Dół!"
        }
    } else {
        var p = {
            comm1: "Need backup!",
            comm2: "Need a teammate!",
            comm3: "Pop him!",
            comm4: "We need to run!",
            comm5: "Tricksplit!",
            comm6: "Lets bait! ",
            comm7: "Split into me!",
            comm8: "Feed me!",
            comm9: "Tank the virus!",
            comm0: "Fuck!",
            comm10: "Tricksplit!",
            comm11: "Left!",
            comm12: "Up!",
            comm13: "Right!",
            comm14: "Bottom!"
        }
    };
    var _0x7c81x11 = null,
        _0x7c81x12 = {
            nick: "Theo",
            clanTag: "",
            skinURL: "",
            color: m.mainColor
        },
        _0x7c81x13 = {
            hideOwnName: !0,
            showMiniMap: !0,
            mouseControl: !1,
            rainbowFood: !1,
            transparentCells: !1,
            showBgSectors: !0,
            showFPS: !0,
            ownTransparentSkin: !1,
            autoHideCellsInfo: !0,
            oppColors: !1,
            autoHideCellsInfo: !0,
            showMapBorders: !0,
            textStroke: !1,
            disableShift: !1,
            autoZoom: !1,
            disableAlt: !0,
            splitRange: !1,
            showFPS: !0,
            customSkins: !0,
            showFPS: !0,
            hideChat: !1,
            showFPS: !0,
            transparentSkins: !1,
            autoHideFood: !1,
            mouseInvert: !1
        };
    _0x7c81x8.prototype = {
        id: 0,
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
        mass: 0,
        clanTag: "",
        nick: "",
        nickImg: null,
        skinURL: "",
        color: m.mainColor,
        alive: !1,
        updateTime: null,
        pi2: 2 * Math.PI,
        setNick: function(_0x7c81x6) {
            _0x7c81x6 && _0x7c81x6 != this.nick && (this.nick = _0x7c81x6)
        },
        drawPosition: function(_0x7c81x6, _0x7c81x7, _0x7c81x8) {
            if (this.alive) {
                this.lastX = (29 * this.lastX + this.x) / 30, this.lastY = (29 * this.lastY + this.y) / 30;
                var _0x7c81x9 = (this.lastX + _0x7c81x7) * _0x7c81x8,
                    _0x7c81xa = (this.lastY + _0x7c81x7) * _0x7c81x8;
                this.nick.length > 0 && (_0x7c81x6.fillStyle = "#FFAAAA", _0x7c81x6.font = "bold 10px UbuntuThin", _0x7c81x6.fillText(this.nick, _0x7c81x9 - _0x7c81x6.measureText(this.nick).width / 2, _0x7c81xa - 10)), _0x7c81x6.beginPath(), _0x7c81x6.arc(_0x7c81x9, _0x7c81xa, 4.5, 0, this.pi2, !1), _0x7c81x6.closePath(), _0x7c81x6.fillStyle = "#62A5F3", _0x7c81x6.fill()
            }
        }
    }, _0x7c81x9.prototype = {
        name: "Ogarplus",
        version: "v1.1.1",
        currentSector: "",
        miniMap: null,
        miniMapCtx: null,
        miniMapSectors: null,
        pi2: 2 * Math.PI,
        sectors: 5,
        mapBordersWidth: 20,
        socket: null,
        teamPlayers: [],
        partys: [],
        chatHistory: [],
        customSkinsCache: {},
        deathLocations: [],
        lastDeath: 0,
        gameMode: "",
        partyToken: "",
        playerIP: "",
        playerMass: 0,
        updateTick: 0,
        rFps: 0,
        renderedFrames: 0,
        fpsLastRequest: null,
        fpsHUD: null,
        leaderboardInfo: null,
        leaderboardPositionsHUD: null,
        activePartys: null,
        top5p: null,
        lastMessageSend: Date.now(),
        selectBiggestCell: !0,
        setSkins: !0,
        setNames: !0,
        setShowMass: !0,
        getPlayerX: function() {
            return _0x7c81x6.playerX + _0x7c81x6.mapOffsetX
        },
        getPlayerY: function() {
            return _0x7c81x6.playerY + _0x7c81x6.mapOffsetY
        },
        parseSettings: function(_0x7c81x6, _0x7c81x7) {
            return "save" === _0x7c81x7 ? "string" == typeof _0x7c81x6 ? _0x7c81x6 : JSON.stringify(_0x7c81x6) : "string" != typeof _0x7c81x6 ? JSON.stringify(_0x7c81x6) : "true" == _0x7c81x6 || "false" == _0x7c81x6 ? JSON.parse(_0x7c81x6) : _0x7c81x6
        },
        recuperarBandera: function() {
            return window.localStorage.getItem("estanCargados")
        },
        crearBandera: function() {
            window.localStorage.setItem("estanCargados", 1)
        },
        loadSettings: function(_0x7c81x6) {
            for (var _0x7c81x7 in _0x7c81x6) {
                _0x7c81x6.hasOwnProperty(_0x7c81x7) && null != window.localStorage.getItem(_0x7c81x7) && (_0x7c81x6[_0x7c81x7] = this.parseSettings(window.localStorage.getItem(_0x7c81x7), "load"))
            }
        },
        recuperarProfiles: function(player_profile) {
            for (var _0x7c81xa = 0; _0x7c81xa < player_profile.length; _0x7c81xa++) {
                for (var _0x7c81x7 in player_profile[_0x7c81xa]) {
                    player_profile[_0x7c81xa].hasOwnProperty(_0x7c81x7) && null != window.localStorage.getItem(_0x7c81x7 + "_" + _0x7c81xa) && (player_profile[_0x7c81xa][_0x7c81x7] = this.parseSettings(window.localStorage.getItem(_0x7c81x7 + "_" + _0x7c81xa), "load"))
                }
            }
        },
        almacenarProfiles: function(player_profile) {
            console.log("Guardando profiles!!");
            for (var _0x7c81xa = 0; _0x7c81xa < player_profile.length; _0x7c81xa++) {
                for (var _0x7c81x7 in player_profile[_0x7c81xa]) {
                    player_profile[_0x7c81xa].hasOwnProperty(_0x7c81x7) && window.localStorage.setItem(_0x7c81x7 + "_" + _0x7c81xa, this.parseSettings(player_profile[_0x7c81xa][_0x7c81x7], "save"))
                }
            }
        },
        saveSettings: function(_0x7c81x6) {
            for (var _0x7c81x7 in _0x7c81x6) {
                _0x7c81x6.hasOwnProperty(_0x7c81x7) && window.localStorage.setItem(_0x7c81x7, this.parseSettings(_0x7c81x6[_0x7c81x7], "save"))
            }
        },
        setKeys: function() {
            var _0x7c81x8 = {},
                _0x7c81x9 = {},
                _0x7c81xa = {
                    feed: null,
                    split: null
                },
                _0x7c81xb = null,
                _0x7c81xc = !1;
            window.addKeyListeners = function() {
                window.onkeydown = function(_0x7c81x6) {
                    if (!_0x7c81x8[_0x7c81x6.keyCode] && !window.jQuery("#overlays").is(":visible") && !window.jQuery("#message").is(":focus")) {
                        switch (_0x7c81x8[_0x7c81x6.keyCode] = !0, _0x7c81x6.keyCode) {
                            case 32:
                                window.core && window.core.split && window.core.split();
                                break;
                            case 87:
                                window.core && window.core.eject && window.core.eject();
                                break;
                            case 81:
                                window.core && window.core.specialOn && window.core.specialOn();
                                break;
                            case 27:
                                _0x7c81x6.preventDefault(), window.MC.showNickDialog(300), window.jQuery("#oferwallContainer").is(":visible") && window.closeOfferwall(), window.jQuery("#videoContainer").is(":visible") && window.closeVideoContainer()
                        }
                    }
                }, window.onkeyup = function(_0x7c81x6) {
                    _0x7c81x8[_0x7c81x6.keyCode] = !1, 81 == _0x7c81x6.keyCode && window.specialOff && window.core.specialOff()
                }
            }, window.addEventListener("keydown", function(_0x7c81x8) {
                var _0x7c81xb = _0x7c81x8.keyCode;
                if (13 == _0x7c81xb && this.focusOnChat(), !_0x7c81x9[_0x7c81xb] && !_0x7c81x7("#overlays").is(":visible") && !_0x7c81x7("#message").is(":focus")) {
                    switch (48 > _0x7c81xb || _0x7c81xb > 57 || this.sendCommand(_0x7c81xb - 48), 37 > _0x7c81xb || _0x7c81xb > 40 || this.sendCommand(_0x7c81xb - 26), _0x7c81x9[_0x7c81xb] = !0, _0x7c81xb) {
                        case 16:
                            if (_0x7c81xa.split || _0x7c81x13.disableShift) {
                                break
                            };
                            var _0x7c81xc = 0;
                            window.core.split(), _0x7c81xa.split = setInterval(function() {
                                window.core.split(), 3 == ++_0x7c81xc && (clearInterval(_0x7c81xa.split), _0x7c81xa.split = null)
                            }, 40);
                            break;
                        case 18:
                            if (_0x7c81x13.disableAlt) {
                                break
                            };
                            this.sendCommand(10), _0x7c81x8.preventDefault();
                            break;
                        case 65:
                            _0x7c81x6.customSkins = !_0x7c81x6.customSkins;
                            break;
                        case 66:
                            _0x7c81x13.showBgSectors = !_0x7c81x13.showBgSectors;
                            break;
                        case 67:
                            this.displayChatHistory(!0);
                            break;
                        case 69:
                            if (_0x7c81xa.feed) {
                                break
                            };
                            _0x7c81xa.feed = setInterval(function() {
                                window.core.eject()
                            }, 80);
                            break;
                        case 70:
                            _0x7c81x6.showFood = !_0x7c81x6.showFood;
                            break;
                        case 71:
                            window.core.split(), setTimeout(function() {
                                window.core.split()
                            }, 40);
                            break;
                        case 72:
                            this.hideChat();
                            break;
                        case 77:
                            this.setShowMass = !this.setShowMass, window.core.setShowMass(this.setShowMass);
                            break;
                        case 78:
                            this.setNames = !this.setNames, window.core.setNames(this.setNames);
                            break;
                        case 81:
                            window.core.split(), setTimeout(function() {
                                window.core.split()
                            }, 40);
                            break;
                        case 83:
                            this.setSkins = !this.setSkins, window.core.setSkins(this.setSkins), _0x7c81x6.showCustomSkins = this.setSkins;
                            break;
                        case 68:
                            ;
                        case 84:
                            if (_0x7c81xa.split) {
                                break
                            };
                            var _0x7c81xc = 0;
                            window.core.split(), _0x7c81xa.split = setInterval(function() {
                                window.core.split(), 3 == ++_0x7c81xc && (clearInterval(_0x7c81xa.split), _0x7c81xa.split = null)
                            }, 40);
                            break;
                        case 87:
                            if (_0x7c81xa.feed) {
                                break
                            };
                            _0x7c81xa.feed = setInterval(function() {
                                window.core.eject()
                            }, 120);
                            break;
                        case 88:
                            this.switchDeathLocation();
                            break;
                        case 90:
                            _0x7c81x6.zoomResetValue = 1, _0x7c81x6.zoomValue = 1;
                            break;
                        case 192:
                            window.quickPartyJoin()
                    }
                }
            }.bind(this), !0), window.addEventListener("keyup", function(_0x7c81x7) {
                switch (_0x7c81x7.keyCode) {
                    case 67:
                        this.displayChatHistory(!1);
                        break;
                    case 69:
                        null !== _0x7c81xa.feed && (clearInterval(_0x7c81xa.feed), _0x7c81xa.feed = null);
                        break;
                    case 87:
                        null !== _0x7c81xa.feed && (clearInterval(_0x7c81xa.feed), _0x7c81xa.feed = null);
                        break;
                    case 90:
                        _0x7c81x6.zoomResetValue = 0
                };
                _0x7c81x9[_0x7c81x7.keyCode] = !1
            }.bind(this), !0), window.onmousedown = function(_0x7c81x6) {
                _0x7c81x7("#overlays").is(":visible") || (2 == _0x7c81x6.which && _0x7c81x13.disableAlt ? (this.sendCommand(10), _0x7c81x6.preventDefault()) : _0x7c81x13.mouseControl && ((1 == _0x7c81x6.which && !_0x7c81x13.mouseInvert || 3 == _0x7c81x6.which && _0x7c81x13.mouseInvert) && window.core.split(), (3 == _0x7c81x6.which && !_0x7c81x13.mouseInvert || 1 == _0x7c81x6.which && _0x7c81x13.mouseInvert) && !_0x7c81xc && null === _0x7c81xb && (_0x7c81xb = setInterval(function() {
                    window.core.eject()
                }, 80), _0x7c81xc = !0)))
            }.bind(this), window.onmouseup = function(_0x7c81x6) {
                _0x7c81x13.mouseControl && (3 == _0x7c81x6.which && !_0x7c81x13.mouseInvert || 1 == _0x7c81x6.which && _0x7c81x13.mouseInvert) && (null !== _0x7c81xb && (clearInterval(_0x7c81xb), _0x7c81xb = null), _0x7c81xc = !1)
            }
        },
        setMenu: function() {
            var _0x7c81x8 = this;
            document.title = "agarplus.io - AWSM", _0x7c81x7("#mainPanel").prepend("<ul class=\"menu-tabs\">" + "<li class=\"active\"><a href=\"#mainPanel\" onclick=\"mostrarPrincipal();\" class=\"active brilloBlanco\">Home</a></li>" + "<li><a class=\"brilloBlanco\" style=\"\" href=\"#og-settings\" onclick=\"ocultarPrincipal();\">" + _0x7c81x10[_0x7c81xf].settings + "</a></li>" + "<li><a class=\"brilloBlanco\" href=\"#theme\" onclick=\"ocultarPrincipal();\">" + _0x7c81x10[_0x7c81xf].theme + "</a></li>" + "<li><a id=\"hotkeys_a\" class=\"brilloBlanco\" href=\"#hotkeys\">Hotkeys</a></li>" + "<li><a class=\"brilloBlanco\" href=\"#misc\" onclick=\"ocultarPrincipal();\">?</a></li>" + "</ul>" + "<div class=\"tab-content\">" + "<div id=\"og-settings\" class=\"menu-panel\"></div>" + "<div id=\"keys\" class=\"menu-panel\"></div>" + "<div id=\"commands\" class=\"menu-panel\"></div>" + "<div id=\"theme\" class=\"menu-panel\"></div>" + "<div id=\"misc\" class=\"menu-panel\"></div>" + "</div>");
            _0x7c81x7("#mainPanel, #stats").appendTo(_0x7c81x7("#main-menu")), _0x7c81x7("#helloContainer div[role=form] .form-group:first").empty().append(""), _0x7c81x7("#nick").before("<input id=\"clantag\" class=\"form-control\" placeholder=\"Team\" />"), _0x7c81x7("#nick").after("<div class=\"input-group skin\"><input id=\"skin\" class=\"form-control\" placeholder=\"Skin URL\" onclick=\"seleccionarTexto(this);\">" + "<button id=\"ocultaSkin\" class=\"btn\" onclick=\"ocultarURLSkin();\"><img id=\"ojito\" src=\"http://www.isoagentprogram.com/images/eye-icon-white.png\" width=\"100%\" height=\"90%\"></button>" + "</div>");
            _0x7c81x7("#locationKnown, #locationUnknown").insertAfter(_0x7c81x7(".skin")), _0x7c81x7(".btn-spectate, .btn-logout").appendTo("#agario-main-buttons"), _0x7c81x7("button[data-itr='login_and_play']").removeAttr("type");
            _0x7c81x7("button[data-itr='login_and_play']").removeAttr("class");
            _0x7c81x7("button[data-itr='login_and_play']").remove();
            _0x7c81x7("#agario-main-buttons").append("<button type=\"submit\" class=\"btn btn-warning btn-login-play btn-needs-server\" onclick=\"facebookLogin(); return false;\" data-itr=\"login\" data-original-title=\"\" title=\"\">Login and play</button>"), _0x7c81x7("#agario-main-buttons").append("<br clear=\"both\"/>"), _0x7c81x7("#helloContainer div[role=form]").after("<div id=\"ogario-party\"><input id=\"joinPartyToken\" onclick=\"seleccionarTexto(this);\" class=\"partyToken form-control\" placeholder=\"Party token\"  /><button class=\"btn btn-info btn-copy-token copy-party-token\">Copy</button></div>"), _0x7c81x7("#create-party-btn, #join-party-btn").appendTo(_0x7c81x7("#ogario-party")), _0x7c81x7("#join-party-btn").addClass("btn-success"), _0x7c81x7("#settingsChoice").appendTo(_0x7c81x7("#og-settings")), _0x7c81x7("#og-settings").append("<div class=\"zoomSpeed\">" + "Zoom speed: " + "<span id=\"txt_zoom_speed\"></span>" + "<input oninput=\"$('#txt_zoom_speed').text(this.value);\" style=\"width: 100%;\" type=\"range\" id=\"opt_zoom_speed\" name=\"opt_zoom_speed\" min=\"0.88\" max=\"0.99\" step=\"0.01\" value=\"0.9\">" + "</div>");
            _0x7c81x7(".right-container").append("<div class=\"agario-panel agario-side-panel leaderboard-panel\">" + "<div id=\"game_info\">" + "<p id=\"profile_info\">Profile #</p>" + "<p id=\"ip_info\"></p>" + "<p id=\"player_count\"></p>" + "<p id=\"region_info\"></p>" + "<p id=\"gamemode_info\"></p>" + "<span id=\"leaderboard-info\"></span>" + "</div>" + "<button class=\"btn btn-sm btn-primary btn-copy-leaderboard\" onclick=\"copyLeaderboard();\">Copy</button>" + "</div>" + "<div id=\"muestraTop5\" class=\"agario-panel agario-side-panel party-panel\"><h5 class=\"main-color\">Top 5</h5><ol id=\"top5\"></ol></div>"), _0x7c81x7(".agario-profile-panel").after("<div class=\"agario-panel agario-side-panel agario-profile-panel2 level\" style=\"float: right;\"><div id=\"profile-main\"><div id=\"profile-pic\" class=\"form-group clearfix\">" + "<div class=\"nav2 arrow-left\" id=\"botonAtras\"></div>" + "<div id=\"preview-img-area\"><img id=\"preview-img\" onError=\"errorSkin();\" src=\"http://i.imgur.com/gdB7nj9.png\" style=\"display: inline;\"></div>" + "<div class=\"nav2 arrow-right\" id=\"botonAdelante\"></div>" + "</div></div><input id=\"joinPartyToken\" type=\"text\" placeholder=\"Party token\" class=\"partyToken\" onclick=\"seleccionarTexto(this);\" form-control\">" + "<button id=\"join-party-btn\" class=\"btn btn-primary joinParty btn-success\" data-itr=\"join_party\"></button>" + "<button id=\"create-party-btn\" data-itr=\"create_party\" class=\"btn btn-success createParty btn-primary\" style=\"margin-bottom: 5px\" >CREATE PARTY TOKEN</button>" + "</div>");
            _0x7c81x7("#mainPanel").append("<div id=\"version\"  class=\"main-color\">" + this.version + " | " + _0x7c81x10[_0x7c81xf].visit + "<a href=\"http://ogario.ovh\" target=\"_blank\">ogario.ovh</a></div>"), _0x7c81x7(".agario-party-1 div:first, .agario-party-0, .agario-party-1 .clearfix, .agario-party-3, .agario-party-4, .agario-party-5 div:first, .agario-party-5 .clearfix").remove(), _0x7c81x7("#mainPanel hr, .btn-settings, .text-muted, .tosBox, .agario-promo, #agario-web-incentive, span[data-itr='option_dark_theme'], #options #darkTheme").remove(), _0x7c81x7("body").append("<div id=\"adsBottom\" style=\"z-index: 200; display: none;\"><div id=\"adsBottomInner\"><div id=\"g728x90\"></div><div id=\"a728x90\"></div></div></div>"), _0x7c81x7("#adbg, #a320x250, #g320x250, #adsBottom").css("display", "none"), _0x7c81x7("#join-party-btn").css({
                width: "49%",
                margin: "10px 0 0 10px",
                "\x66\x6C\x6F\x61\x74": "left"
            }), _0x7c81x7("#create-party-btn").css({
                width: "100%",
                "\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70": "5px"
            }), _0x7c81x7("#join-party-btn").css({
                "\x6D\x61\x72\x67\x69\x6E\x2D\x6C\x65\x66\x74": "2%"
            }), _0x7c81x7(".ogario-yt-panel").css({
                margin: "10px 2px",
                "\x66\x6C\x6F\x61\x74": "right"
            }), _0x7c81x7("#adsBottom").css({
                "\x7A\x2D\x69\x6E\x64\x65\x78": "1",
                opacity: "0"
            }), _0x7c81x7("#og-settings").append("<div id=\"og-options\"></div>");
            for (var _0x7c81x9 in _0x7c81x13) {
                _0x7c81x13.hasOwnProperty(_0x7c81x9) && _0x7c81x7("#og-options").append("<label class=\"label_settings\" id=\"label_settings_" + _0x7c81x9 + "\"><input type=\"checkbox\" onchange=\"setSettings('" + _0x7c81x9 + "', $(this).is(':checked'));\" id=\"" + _0x7c81x9 + "\">" + _0x7c81x10[_0x7c81xf][_0x7c81x9] + "</label>")
            };
            _0x7c81x7("#tags-container").appendTo(_0x7c81x7("#og-settings")), _0x7c81x7("#og-settings input:checkbox").each(function() {
                var _0x7c81x6 = _0x7c81x7(this).attr("id");
                _0x7c81x13.hasOwnProperty(_0x7c81x6) && _0x7c81x7(this).prop("checked", _0x7c81x13[_0x7c81x6])
            }), _0x7c81x7("#keys").append("<span class=\"key\"><span class=\"bold main-color\">[Q / G]</span> - " + _0x7c81x10[_0x7c81xf].qKey + "</span> <span class=\"key\"><span class=\"bold main-color\">E</span> - " + _0x7c81x10[_0x7c81xf].wKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[A]</span> - " + _0x7c81x10[_0x7c81xf].aKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[S]</span> - " + _0x7c81x10[_0x7c81xf].sKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[D]</span> - " + _0x7c81x10[_0x7c81xf].dKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[F]</span> - " + _0x7c81x10[_0x7c81xf].fKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[H]</span> - " + _0x7c81x10[_0x7c81xf].hKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[Z]</span> - " + _0x7c81x10[_0x7c81xf].zKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[X]</span> - " + _0x7c81x10[_0x7c81xf].xKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[C]</span> - " + _0x7c81x10[_0x7c81xf].cKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[B]</span> - " + _0x7c81x10[_0x7c81xf].bKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[N]</span> - " + _0x7c81x10[_0x7c81xf].nKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[M]</span> - " + _0x7c81x10[_0x7c81xf].mKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[" + _0x7c81x10[_0x7c81xf].space + "]</span> - " + _0x7c81x10[_0x7c81xf].spaceKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[Shift / T]</span> - " + _0x7c81x10[_0x7c81xf].shiftKey + "</span> <span class=\"key\"><span class=\"bold main-color\">[Enter]</span> - " + _0x7c81x10[_0x7c81xf].enterKey + "</span>  <span class=\"key\"><span class=\"bold main-color\">[~]</span> - " + _0x7c81x10[_0x7c81xf].tildeKey + "</span>");
            var _0x7c81xa = 0;
            for (var _0x7c81xb in p) {
                p.hasOwnProperty(_0x7c81xb) && (++_0x7c81xa, 11 > _0x7c81xa ? label = 10 == _0x7c81xa ? 0 : _0x7c81xa : (11 == _0x7c81xa && (label = "Alt / Mouse Wheel"), 12 == _0x7c81xa && (label = "Left Arrow"), 13 == _0x7c81xa && (label = "Up Arrow"), 14 == _0x7c81xa && (label = "Right Arrow"), 15 == _0x7c81xa && (label = "Down Arrow")), _0x7c81x7("#commands").append("<div class=\"input-group input-group-sm\"><span class=\"input-group-addon\" id=\"" + _0x7c81xb + "\">" + label + "</span><input type=\"text\" class=\"form-control\" placeholder=\"Command #" + label + "\" value=\"" + p[_0x7c81xb] + "\"></div>"))
            };
            _0x7c81x7("#commands").append("<button id=\"btnSaveCommands\" class=\"btn btn-block btn-sm btn-success btn-save\" onclick=\"saveHotkeys();\">" + _0x7c81x10[_0x7c81xf].saveComm + "</button>"), _0x7c81x7("#theme").append("<div class=\"form-group\">" + "<label>Background Color</label>" + "<div class=\"minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-left\">" + "<input readonly type=\"text\" id=\"bgColor\" class=\"colores minicolors form-control minicolors-input\" size=\"7\" value=\"" + m.bgColor + "\">" + "</div>" + "<label>Border Color</label>" + "<div class=\"minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-left\">" + "<input readonly type=\"text\" id=\"mainColor\" class=\"colores minicolors form-control minicolors-input\" size=\"7\" value=\"" + m.mainColor + "\">" + "</div>" + "<label>Pellet Color</label>" + "<div class=\"minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-left\">" + "<input readonly type=\"text\" id=\"foodColor\" class=\"colores minicolors form-control minicolors-input\" size=\"7\" value=\"" + m.foodColor + "\">" + "</div>" + "<label>Grid Color</label>" + "<div class=\"minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-left\">" + "<input readonly type=\"text\" id=\"gridColor\" class=\"colores minicolors form-control minicolors-input\" size=\"7\" value=\"" + m.gridColor + "\">" + "</div>" + "<label>Commands color</label>" + "<div class=\"minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-left\">" + "<input readonly type=\"text\" id=\"commandsTextColor\" class=\"colores minicolors form-control minicolors-input\" size=\"7\" value=\"" + m.commandsTextColor + "\">" + "</div>" + "</div>" + "<div class=\"color-box\">" + "<span class=\"title\">" + "Color jugador" + "</span>" + "<div class=\"input-group jugador-color-picker\">" + "<input type=\"text\" value=\"" + player_profile[profileActual.selected_profile].color + "\" id=\"color\" class=\"form-control\" />" + "<span class=\"input-group-addon\">" + "<i></i>" + "</span>" + "</div>" + "</div>" + "<div class=\"color-box\">" + "<span class=\"title\">" + _0x7c81x10[_0x7c81xf].mainColor + "</span>" + "<div class=\"input-group main-color-picker\">" + "<input type=\"text\" value=\"" + m.mainColor + "\" id=\"mainColor\" class=\"form-control\" />" + "<span class=\"input-group-addon\">" + "<i></i>" + "</span>" + "</div>" + "</div>" + "<div class=\"color-box\">" + "<span class=\"title\">" + _0x7c81x10[_0x7c81xf].bgColor + "</span>" + "<div class=\"input-group background-color-picker\">" + "<input type=\"text\" value=\"" + m.bgColor + "\" id=\"bgColor\" class=\"form-control\" />" + "<span class=\"input-group-addon\">" + "<i></i>" + "</span>" + "</div>" + "</div>" + "<div class=\"color-box\">" + "<span class=\"title\">" + _0x7c81x10[_0x7c81xf].foodColor + "</span>" + "<div class=\"input-group food-color-picker\">" + "<input type=\"text\" value=\"" + m.foodColor + "\" id=\"foodColor\" class=\"form-control\" />" + "<span class=\"input-group-addon\">" + "<i></i>" + "</span>" + "</div>" + "</div>" + "<div class=\"color-box\">" + "<span class=\"title\">" + _0x7c81x10[_0x7c81xf].gridColor + "</span>" + "<div class=\"input-group grid-color-picker\">" + "<input type=\"text\" value=\"" + m.gridColor + "\" id=\"gridColor\" class=\"form-control\" />" + "<span class=\"input-group-addon\">" + "<i></i>" + "</span>" + "</div>" + "</div>" + "<div class=\"color-box\">" + "<span class=\"title\">" + _0x7c81x10[_0x7c81xf].commandsTextColor + "</span>" + "<div class=\"input-group text-color-picker\">" + "<input type=\"text\" value=\"" + m.commandsTextColor + "\" id=\"commandsTextColor\" class=\"form-control\" />" + "<span class=\"input-group-addon\">" + "<i></i>" + "</span>" + "</div>" + "</div>"), _0x7c81x7("#theme .main-color-picker").colorpicker({
                format: "hex"
            }).on("changeColor.colorpicker", function(_0x7c81x6) {
                m.mainColor = _0x7c81x6.color.toHex(), _0x7c81x8.setMainColor()
            }), _0x7c81x7("#theme .background-color-picker").colorpicker({
                format: "hex"
            }).on("changeColor.colorpicker", function(_0x7c81x6) {
                m.bgColor = _0x7c81x6.color.toHex(), _0x7c81x7("body").css("background-color", m.bgColor)
            }), _0x7c81x7("#theme .food-color-picker").colorpicker({
                format: "hex"
            }).on("changeColor.colorpicker", function(_0x7c81x7) {
                m.foodColor = _0x7c81x7.color.toHex();
                _0x7c81x6.foodColor = m.foodColor
            }), _0x7c81x7("#theme .grid-color-picker").colorpicker({
                format: "hex"
            }).on("changeColor.colorpicker", function(_0x7c81x6) {
                m.gridColor = _0x7c81x6.color.toHex()
            }), _0x7c81x7("#theme .text-color-picker").colorpicker({
                format: "hex"
            }).on("changeColor.colorpicker", function(_0x7c81x6) {
                m.commandsTextColor = _0x7c81x6.color.toHex(), _0x7c81x8.setMainColor()
            }), $("#bgColor").each(function() {
                $(this).minicolors({
                    control: $(this).attr("data-control") || "hue",
                    defaultValue: $(this).attr("data-defaultValue") || "",
                    format: $(this).attr("data-format") || "hex",
                    keywords: $(this).attr("data-keywords") || "",
                    inline: $(this).attr("data-inline") === "true",
                    letterCase: $(this).attr("data-letterCase") || "lowercase",
                    opacity: $(this).attr("data-opacity"),
                    position: $(this).attr("data-position") || "bottom left",
                    swatches: $(this).attr("data-swatches") ? $(this).attr("data-swatches").split("|") : [],
                    change: function(_0x7c81x14, _0x7c81x15) {
                        if (!_0x7c81x14) {
                            return
                        };
                        if (_0x7c81x15) {
                            _0x7c81x14 += ", " + _0x7c81x15
                        };
                        if (typeof console === "object") {
                            console.log(_0x7c81x14)
                        }
                    },
                    theme: "default",
                    change: function(_0x7c81x6) {
                        m.bgColor = _0x7c81x6;
                        _0x7c81x7("body").css("background-color", m.bgColor)
                    }
                })
            });
            $("#mainColor").each(function() {
                $(this).minicolors({
                    control: $(this).attr("data-control") || "hue",
                    defaultValue: $(this).attr("data-defaultValue") || "",
                    format: $(this).attr("data-format") || "hex",
                    keywords: $(this).attr("data-keywords") || "",
                    inline: $(this).attr("data-inline") === "true",
                    letterCase: $(this).attr("data-letterCase") || "lowercase",
                    opacity: $(this).attr("data-opacity"),
                    position: $(this).attr("data-position") || "bottom left",
                    swatches: $(this).attr("data-swatches") ? $(this).attr("data-swatches").split("|") : [],
                    change: function(_0x7c81x14, _0x7c81x15) {
                        if (!_0x7c81x14) {
                            return
                        };
                        if (_0x7c81x15) {
                            _0x7c81x14 += ", " + _0x7c81x15
                        };
                        if (typeof console === "object") {
                            console.log(_0x7c81x14)
                        }
                    },
                    theme: "default",
                    change: function(_0x7c81x6) {
                        m.mainColor = _0x7c81x6;
                        _0x7c81x8.setMainColor()
                    }
                })
            });
            $("#foodColor").each(function() {
                $(this).minicolors({
                    control: $(this).attr("data-control") || "hue",
                    defaultValue: $(this).attr("data-defaultValue") || "",
                    format: $(this).attr("data-format") || "hex",
                    keywords: $(this).attr("data-keywords") || "",
                    inline: $(this).attr("data-inline") === "true",
                    letterCase: $(this).attr("data-letterCase") || "lowercase",
                    opacity: $(this).attr("data-opacity"),
                    position: $(this).attr("data-position") || "bottom left",
                    swatches: $(this).attr("data-swatches") ? $(this).attr("data-swatches").split("|") : [],
                    change: function(_0x7c81x14, _0x7c81x15) {
                        if (!_0x7c81x14) {
                            return
                        };
                        if (_0x7c81x15) {
                            _0x7c81x14 += ", " + _0x7c81x15
                        };
                        if (typeof console === "object") {
                            console.log(_0x7c81x14)
                        }
                    },
                    theme: "default",
                    change: function(_0x7c81x7) {
                        m.foodColor = _0x7c81x7;
                        m.ogarplusIOColor = m.foodColor;
                        $("#ogarplus-io").css("color", m.ogarplusIOColor)
                    }
                })
            });
            $("#gridColor").each(function() {
                $(this).minicolors({
                    control: $(this).attr("data-control") || "hue",
                    defaultValue: $(this).attr("data-defaultValue") || "",
                    format: $(this).attr("data-format") || "hex",
                    keywords: $(this).attr("data-keywords") || "",
                    inline: $(this).attr("data-inline") === "true",
                    letterCase: $(this).attr("data-letterCase") || "lowercase",
                    opacity: $(this).attr("data-opacity"),
                    position: $(this).attr("data-position") || "bottom left",
                    swatches: $(this).attr("data-swatches") ? $(this).attr("data-swatches").split("|") : [],
                    change: function(_0x7c81x14, _0x7c81x15) {
                        if (!_0x7c81x14) {
                            return
                        };
                        if (_0x7c81x15) {
                            _0x7c81x14 += ", " + _0x7c81x15
                        };
                        if (typeof console === "object") {
                            console.log(_0x7c81x14)
                        }
                    },
                    theme: "default",
                    change: function(_0x7c81x6) {
                        m.gridColor = _0x7c81x6
                    }
                })
            });
            $("#commandsTextColor").each(function() {
                $(this).minicolors({
                    control: $(this).attr("data-control") || "hue",
                    defaultValue: $(this).attr("data-defaultValue") || "",
                    format: $(this).attr("data-format") || "hex",
                    keywords: $(this).attr("data-keywords") || "",
                    inline: $(this).attr("data-inline") === "true",
                    letterCase: $(this).attr("data-letterCase") || "lowercase",
                    opacity: $(this).attr("data-opacity"),
                    position: $(this).attr("data-position") || "bottom left",
                    swatches: $(this).attr("data-swatches") ? $(this).attr("data-swatches").split("|") : [],
                    change: function(_0x7c81x14, _0x7c81x15) {
                        if (!_0x7c81x14) {
                            return
                        };
                        if (_0x7c81x15) {
                            _0x7c81x14 += ", " + _0x7c81x15
                        };
                        if (typeof console === "object") {
                            console.log(_0x7c81x14)
                        }
                    },
                    theme: "default",
                    change: function(_0x7c81x6) {
                        m.commandsTextColor = _0x7c81x6;
                        _0x7c81x8.setMainColor()
                    }
                })
            });
            _0x7c81x7("#theme").append("<button id=\"btnSaveSettings\" class=\"btn btn-block btn-sm btn-success btn-save\" onclick=\"saveThemeSettings();\">" + _0x7c81x10[_0x7c81xf].saveSett + "</button>"), m.darkTheme ? _0x7c81x7("#darkTheme").closest("label").addClass("active") : _0x7c81x7("#lightTheme").closest("label").addClass("active"), _0x7c81x7("#theme-type").change(function() {
                var _0x7c81x6 = _0x7c81x7(this).find("input:checked").attr("id");
                _0x7c81x8.changeTheme(_0x7c81x6)
            }), _0x7c81x7("body").append("<div id=\"overlays-hud\"><div id=\"fps-hud\"></div> <div id=\"pause-hud\" class=\"hud\">" + _0x7c81x10[_0x7c81xf].pause + "</div> <div id=\"leaderboard-hud\" class=\"hud-b\"><div id=\"ogarplus-io\" class=\"main-color\">Agar+ AWSM</div><div id=\"leaderboard-positions\"></div></div> <div id=\"minimap-hud\" class=\"hud-b\"><canvas id=\"minimap-sectors\"></canvas><canvas id=\"minimap\"></canvas></div></div>" + "<div id=\"hotkeys_setting\" class=\"modal fade\" role=\"dialog\" data-keyboard=\"false\" data-backdrop=\"static\">" + "<div class=\"modal-dialog\">" + "<div class=\"modal-content\" style=\"background: #222;\">" + "<div class=\"modal-header\">" + "<button type=\"button\" onclick=\"clicEnHome();\" class=\"close\" data-dismiss=\"modal\">׼/button>" + "<h4 class=\"modal-title\">Hotkey Setup</h4>" + "</div>" + "<div id=\"hotkey_modal_body\" class=\"modal-body\">" + "<p>Step 1: Click on the function item</p>" + "<p>Step 2: Press wanted hotkey to modify</p>" + "<p>Press [DEL] key to remove selected hotkey</p>" + "<p>Allowed hotkey combinations: [CTRL] + [ALT] + 0-9, a-z, [TAB], [ENTER]</p>" + "<br>" + "<div id=\"hotkey_setting\">" + "<div id=\"hotkey_table\" class=\"table\">" + "<div class=\"row header\">" + "<div class=\"cell\" style=\"width:170px;\">Hotkey</div>" + "<div class=\"cell\" style=\"width:222px;\">Function</div>" + "<div class=\"cell\">Message</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">Q / G</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].qKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">W / E</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].wKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">A</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].aKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">S</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].sKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">F</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].fKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">H</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].hKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">Z</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].zKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">X</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].xKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">C</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].cKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">N</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].nKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">M</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].mKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">" + _0x7c81x10[_0x7c81xf].space + "</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].spaceKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">Shift / D / T</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].shiftKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">ENTER</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].enterKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"\" class=\"cell hotkey\">~</div>" + "<div class=\"cell\">" + _0x7c81x10[_0x7c81xf].tildeKey + "</div>" + "<div class=\"cell\"> / </div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg1\" class=\"cell hotkey\">TECLA 1</div>" + "<div class=\"cell\">Chatbox send message 1</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg1\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm1 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg2\" class=\"cell hotkey\">TECLA 2</div>" + "<div class=\"cell\">Chatbox send message 2</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg2\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm2 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg3\" class=\"cell hotkey\">TECLA 3</div>" + "<div class=\"cell\">Chatbox send message 3</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg3\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm3 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg4\" class=\"cell hotkey\">TECLA 4</div>" + "<div class=\"cell\">Chatbox send message 4</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg4\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm4 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg5\" class=\"cell hotkey\">TECLA 5</div>" + "<div class=\"cell\">Chatbox send message 5</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg5\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm5 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg6\" class=\"cell hotkey\">TECLA 6</div>" + "<div class=\"cell\">Chatbox send message 6</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg6\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm6 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg7\" class=\"cell hotkey\">TECLA 7</div>" + "<div class=\"cell\">Chatbox send message 7</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg7\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm7 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg8\" class=\"cell hotkey\">TECLA 8</div>" + "<div class=\"cell\">Chatbox send message 8</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg8\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm8 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg9\" class=\"cell hotkey\">TECLA 9</div>" + "<div class=\"cell\">Chatbox send message 9</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg9\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm9 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg0\" class=\"cell hotkey\">TECLA 0</div>" + "<div class=\"cell\">Chatbox send message 0</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg0\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm0 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg10\" class=\"cell hotkey\">Alt / Mouse Wheel</div>" + "<div class=\"cell\">Chatbox send message 10</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg10\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm10 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg11\" class=\"cell hotkey\">Left Arrow</div>" + "<div class=\"cell\">Chatbox send message 11</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg11\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm11 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg12\" class=\"cell hotkey\">Up Arrow</div>" + "<div class=\"cell\">Chatbox send message 12</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg12\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm12 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg13\" class=\"cell hotkey\">Right Arrow</div>" + "<div class=\"cell\">Chatbox send message 13</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg13\" class=\"inputhtk\" maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm13 + "\">" + "</div>" + "</div>" + "<div class=\"row roww\">" + "<div data-hotkeyid=\"hk_send_msg14\" class=\"cell hotkey\">Down Arrow</div>" + "<div class=\"cell\">Chatbox send message 14</div>" + "<div class=\"cell\">" + "<input id=\"input_hk_send_msg14\" class=\"inputhtk\"  maxlength=\"200\" style=\"width:100%;color:black;\" type=\"text\" value=\"" + p.comm14 + "\">" + "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + "<div class=\"modal-footer\" style=\"background: #222;\">" + "<button onclick=\"resetToDefault();\" type=\"button\" class=\"btn btn-blue\" style=\"float:left;\">Reset to Default</button>" + "<button type=\"button\" onclick=\"clicEnHome();\" class=\"btn btn-red\" data-dismiss=\"modal\">Cancel</button>" + "<button id=\"btn_save_hotkey\" onclick=\"saveHotkeys(); clicEnHome();\" type=\"button\" class=\"btn btn-green\" data-dismiss=\"modal\">Save</button>" + "</div>" + "</div>" + "</div>" + "</div>" + "<div id=\"autor\">AWSM Clan</div>"), _0x7c81x7("body").append("<ul id=\"messages\"></ul>"), _0x7c81x7("body").append("<input id=\"message\" class=\"form-control\" type=\"text\" placeholder=\"" + _0x7c81x10[_0x7c81xf].enterKey + "...\" maxlength=\"100\" />"), _0x7c81x7("#theme .jugador-color-picker").colorpicker({
                format: "hex",
                input: "#color"
            }), toastr.options = {
                "\x63\x6C\x6F\x73\x65\x42\x75\x74\x74\x6F\x6E": true,
                "\x64\x65\x62\x75\x67": false,
                "\x6E\x65\x77\x65\x73\x74\x4F\x6E\x54\x6F\x70": false,
                "\x70\x72\x6F\x67\x72\x65\x73\x73\x42\x61\x72": true,
                positionClass: "toast-bottom-left",
                "\x70\x72\x65\x76\x65\x6E\x74\x44\x75\x70\x6C\x69\x63\x61\x74\x65\x73": false,
                "\x6F\x6E\x63\x6C\x69\x63\x6B": null,
                "\x73\x68\x6F\x77\x44\x75\x72\x61\x74\x69\x6F\x6E": "10000",
                "\x68\x69\x64\x65\x44\x75\x72\x61\x74\x69\x6F\x6E": "1000",
                "\x65\x78\x74\x65\x6E\x64\x65\x64\x54\x69\x6D\x65\x4F\x75\x74": "1000",
                "\x73\x68\x6F\x77\x45\x61\x73\x69\x6E\x67": "swing",
                "\x68\x69\x64\x65\x45\x61\x73\x69\x6E\x67": "linear",
                "\x73\x68\x6F\x77\x4D\x65\x74\x68\x6F\x64": "fadeIn",
                "\x68\x69\x64\x65\x4D\x65\x74\x68\x6F\x64": "fadeOut",
                "\x74\x69\x6D\x65\x4F\x75\x74": "15000"
            }, _0x7c81x7(document).ready(function() {
                _0x7c81x7(".menu-tabs a").click(function(_0x7c81x6) {
                    _0x7c81x6.preventDefault();
                    var _0x7c81x8 = _0x7c81x7(this);
                    _0x7c81x8.addClass("active"), _0x7c81x8.parent().addClass("active"), _0x7c81x8.parent().siblings().removeClass("active"), _0x7c81x8.parent().siblings().find("a").removeClass("active");
                    var _0x7c81x9 = _0x7c81x8.attr("href");
                    _0x7c81x7(".menu-panel").not(_0x7c81x9).css("display", "none"), _0x7c81x7(_0x7c81x9).fadeIn()
                }), _0x7c81x7(window).trigger("resize")
            }), _0x7c81x7("#gamemode").on("change", function() {
                $("#gamemode_info").html("MODE: " + $("#gamemode option:selected").html()), _0x7c81x8.gameMode = _0x7c81x6.gameMode = this.value, ":party" !== this.value && _0x7c81x8.isSocketOpen() && (_0x7c81x8.socket.close(), _0x7c81x7(".partyToken").val(""))
            }), _0x7c81x7("#region").on("change", function() {
                var _0x7c81x16 = $("#region option:selected").html();
                var _0x7c81x16 = _0x7c81x16.substr(0, _0x7c81x16.indexOf("("));
                $("#region_info").html("REGION: " + _0x7c81x16)
            }), _0x7c81x7("#cancel-party-btn").on("click", function() {
                _0x7c81x8.gameMode = _0x7c81x6.gameMode = "", _0x7c81x8.socket.close(), _0x7c81x7(".partyToken").val("")
            }), _0x7c81x7("#canvas").bind("contextmenu", function() {
                return !1
            }), this.fpsHUD = document.getElementById("fps-hud"), this.activePartys = document.getElementById("activepartys"), this.top5p = document.getElementById("top5"), this.leaderboardInfo = document.getElementById("leaderboard-info"), this.leaderboardPositionsHUD = document.getElementById("leaderboard-positions"), _0x7c81x7("#nick").val(player_profile[profileActual.selected_profile].nick), _0x7c81x7("#clantag").val(player_profile[profileActual.selected_profile].clanTag), _0x7c81x7("#skin").val(player_profile[profileActual.selected_profile].skinURL), _0x7c81x7("#color").val(player_profile[profileActual.selected_profile].color)
        },
        setProfileActual: function(_0x7c81xa, _0x7c81x17) {
            _0x7c81x7("#clantag").val(_0x7c81x17[_0x7c81xa].clanTag);
            _0x7c81x7("#nick").val(_0x7c81x17[_0x7c81xa].nick);
            _0x7c81x7("#skin").val(_0x7c81x17[_0x7c81xa].skinURL);
            _0x7c81x7("#mainColor").val(_0x7c81x17[_0x7c81xa].color)
        },
        profileAnterior: function() {
            profileActual.selected_profile--;
            if (profileActual.selected_profile < 0) {
                profileActual.selected_profile = player_profile.length - 1
            };
            var _0x7c81xa = profileActual.selected_profile;
            this.setProfileActual(_0x7c81xa, player_profile);
            $("#profile_info").text("Profile: " + (_0x7c81xa + 1))
        },
        profileSiguiente: function() {
            profileActual.selected_profile++;
            if (profileActual.selected_profile > 9) {
                profileActual.selected_profile = 0
            };
            var _0x7c81xa = profileActual.selected_profile;
            this.setProfileActual(_0x7c81xa, player_profile);
            $("#profile_info").text("Profile: " + (_0x7c81xa + 1))
        },
        setMainColor: function() {
            _0x7c81x7("#main-menu").css("border-color", m.mainColor), _0x7c81x11 || (_0x7c81x11 = _0x7c81x7("<style type='text/css'>").appendTo("head")), _0x7c81x11.html(".main-color, .menu-tabs .active, center, #cancel-party-btn { color: " + m.mainColor + "; } #main-menu { border-color: " + m.mainColor + "} .toast-warning { background-color: " + m.mainColor + "; } .toast-warning .toast-message { color: " + m.commandsTextColor + "; }")
        },
        changeTheme: function(_0x7c81x6) {
            "darktheme" == _0x7c81x6 ? (m.darkTheme = !0, m.bgColor = "#000000", m.gridColor = "#111111", _0x7c81x7("#theme .background-color-picker").colorpicker("setValue", "#000000"), _0x7c81x7("#theme .grid-color-picker").colorpicker("setValue", "#111111"), _0x7c81x7("#minimap-sectors").css("opacity", "0.2")) : (m.darkTheme = !1, m.bgColor = "#F2FBFF", m.gridColor = "#D9E1E5", _0x7c81x7("#theme .background-color-picker").colorpicker("setValue", "#F2FBFF"), _0x7c81x7("#theme .grid-color-picker").colorpicker("setValue", "#D9E1E5"), _0x7c81x7("#minimap-sectors").css("opacity", "0.4"))
        },
        setTheme: function() {
            this.setMainColor(), _0x7c81x7("body").css("background-color", m.bgColor), m.darkTheme ? _0x7c81x7("#minimap-sectors").css("opacity", "0.2") : _0x7c81x7("#minimap-sectors").css("opacity", "0.4")
        },
        setMiniMap: function() {
            _0x7c81x13.showMiniMap ? _0x7c81x7("#minimap-hud").show() : _0x7c81x7("#minimap-hud").hide()
        },
        setButtons: function() {
            var _0x7c81x7 = document.getElementsByClassName("btn-play")[0],
                _0x7c81x8 = document.getElementsByClassName("btn-play-guest")[0],
                _0x7c81x9 = document.getElementsByClassName("btn-spectate")[0],
                _0x7c81xa = document.getElementById("create-party-btn"),
                _0x7c81xb = document.getElementById("join-party-btn"),
                _0x7c81xc = document.getElementById("statsContinue"),
                _0x7c81x18 = document.getElementById("botonAtras"),
                _0x7c81x19 = document.getElementById("botonAdelante");
            _0x7c81x18.addEventListener("click", function() {
                this.profileAnterior()
            }.bind(this), false), _0x7c81x19.addEventListener("click", function() {
                this.profileSiguiente()
            }.bind(this), false), _0x7c81x7.addEventListener("click", function() {
                this.handleConnect(), this.play()
            }.bind(this), !1), _0x7c81x8.addEventListener("click", function() {
                this.handleConnect(), this.play()
            }.bind(this), !1), _0x7c81x9.addEventListener("click", function() {
                this.handleConnect(), this.sendPlayerDeath(), _0x7c81x6.play = !1, _0x7c81x6.spectate = !0, _0x7c81x6.autoHideFood && (_0x7c81x6.showFood = !1)
            }.bind(this), !1), _0x7c81xa.addEventListener("click", function() {
                this.handleConnect();
                this.sendPlayerDeath();
                $("#gamemode_info").html("MODE: Party")
            }.bind(this), !1), _0x7c81xb.addEventListener("click", function() {
                this.handleConnect(), this.sendPlayerDeath()
            }.bind(this), !1), _0x7c81xc.addEventListener("click", function() {
                setTimeout(function() {
                    window.onkeydown = function() {}
                }, 100)
            }, !1)
        },
        play: function() {
            this.sendPlayerSpawn(), _0x7c81x6.play = !0, _0x7c81x6.spectate = !1, _0x7c81x6.autoHideFood && (_0x7c81x6.showFood = !0), _0x7c81x6.playerBestMass = 0, window.ga && window.ga("create", "UA-67142685-2", "auto", "ogarioTracker"), window.ga && window.ga("ogarioTracker.send", "pageview"), window.ga && window.ga("ogarioTracker.send", "event", "Nick", player_profile[profileActual.selected_profile].clanTag + player_profile[profileActual.selected_profile].nick)
        },
        setPlayerInfo: function() {
            var _0x7c81x8 = _0x7c81x7("#nick").val(),
                _0x7c81x9 = _0x7c81x7("#clantag").val(),
                _0x7c81xa = _0x7c81x7("#skin").val(),
                _0x7c81xb = _0x7c81x7("#color").val();
            player_profile[profileActual.selected_profile].nick = _0x7c81x8 || "", player_profile[profileActual.selected_profile].clanTag = _0x7c81x9.trim() || "", player_profile[profileActual.selected_profile].skinURL = _0x7c81xa.trim() || "", 7 == _0x7c81xb.length && (player_profile[profileActual.selected_profile].color = _0x7c81xb), _0x7c81x6.playerNick = player_profile[profileActual.selected_profile].nick, player_profile[profileActual.selected_profile].clanTag.length > 0 && (_0x7c81x6.clanTag = player_profile[profileActual.selected_profile].clanTag), this.saveSettings(profileActual);
            this.almacenarProfiles(player_profile)
        },
        cacheSkin: function(_0x7c81x6, _0x7c81x7, _0x7c81x8) {
            _0x7c81x8 && (_0x7c81x6[_0x7c81x7] = new Image, _0x7c81x6[_0x7c81x7].crossOrigin = "Anonymous", _0x7c81x6[_0x7c81x7].src = _0x7c81x8)
        },
        getCachedSkin: function(_0x7c81x6, _0x7c81x7) {
            return _0x7c81x6[_0x7c81x7].width && _0x7c81x6[_0x7c81x7].complete ? _0x7c81x6[_0x7c81x7] : null
        },
        cacheCustomSkin: function(_0x7c81x6, _0x7c81x7, _0x7c81x8) {
            if (_0x7c81x7.length > 0) {
                if (_0x7c81x6.hasOwnProperty(_0x7c81x7) && _0x7c81x6[_0x7c81x7].src == _0x7c81x8) {
                    return
                };
                this.cacheSkin(_0x7c81x6, _0x7c81x7, _0x7c81x8)
            }
        },
        getCustomSkin: function(_0x7c81x6) {
            return _0x7c81x6 && 0 != _0x7c81x6.length ? this.customSkinsCache.hasOwnProperty(_0x7c81x6) ? this.getCachedSkin(this.customSkinsCache, _0x7c81x6) : void(0) : null
        },
        setParty: function() {
            this.gameMode = _0x7c81x7("#gamemode").val();
            if (this.gameMode === ":party") {
                var _0x7c81x6 = _0x7c81x7(".partyToken").val();
                _0x7c81x6 && _0x7c81x6.length > 5 && (_0x7c81x6 = _0x7c81x6.split("#"), this.partyToken = _0x7c81x6[1])
            }
        },
        calculateCurrentSector: function() {
            if (!_0x7c81x6.mapOffsetFixed) {
                return void((this.currentSector = ""))
            };
            var _0x7c81x7 = _0x7c81x6.mapOffsetX + _0x7c81x6.mapOffset,
                _0x7c81x8 = _0x7c81x6.mapOffsetY + _0x7c81x6.mapOffset,
                _0x7c81x9 = String.fromCharCode(65 + Math.floor((_0x7c81x6.playerY + _0x7c81x8) / (_0x7c81x6.mapSize / this.sectors))),
                _0x7c81xa = "" + (Math.floor((_0x7c81x6.playerX + _0x7c81x7) / (_0x7c81x6.mapSize / this.sectors)) + 1);
            this.currentSector = _0x7c81x9 + _0x7c81xa
        },
        switchDeathLocation: function() {
            this.lastDeath--, this.lastDeath < 0 && (this.lastDeath = this.deathLocations.length - 1)
        },
        updateDeathLocations: function(_0x7c81x7, _0x7c81x8) {
            _0x7c81x6.mapOffsetFixed && (this.deathLocations.push({
                x: _0x7c81x7 + _0x7c81x6.mapOffsetX,
                y: _0x7c81x8 + _0x7c81x6.mapOffsetY
            }), 6 == this.deathLocations.length && this.deathLocations.splice(0, 1), this.lastDeath = this.deathLocations.length - 1)
        },
        drawMapBorders: function(_0x7c81x7, _0x7c81x8, _0x7c81x9, _0x7c81xa, _0x7c81xb, _0x7c81xc, _0x7c81xd) {
            _0x7c81x6.mapOffsetFixed && _0x7c81x13.showMapBorders && (_0x7c81x7.save(), _0x7c81x7.strokeStyle = _0x7c81xc, _0x7c81x7.lineWidth = _0x7c81xd, _0x7c81x7.beginPath(), _0x7c81x7.moveTo(_0x7c81x8, _0x7c81x9), _0x7c81x7.lineTo(_0x7c81xa, _0x7c81x9), _0x7c81x7.lineTo(_0x7c81xa, _0x7c81xb), _0x7c81x7.lineTo(_0x7c81x8, _0x7c81xb), _0x7c81x7.closePath(), _0x7c81x7.stroke(), _0x7c81x7.restore())
        },
        drawMiniMap: function() {
            if (_0x7c81x6.mapOffsetFixed) {
                this.miniMap ? this.miniMapCtx.clearRect(0, 0, 200, 220) : (this.miniMap = document.getElementById("minimap"), this.miniMapCtx = this.miniMap.getContext("2d"), this.miniMapCtx.ogarioCtx = !0, this.miniMap.width = 200, this.miniMap.height = 220);
                var _0x7c81x7 = 182 / _0x7c81x6.mapSize,
                    _0x7c81x8 = _0x7c81x6.mapOffsetX + _0x7c81x6.mapOffset,
                    _0x7c81x9 = _0x7c81x6.mapOffsetY + _0x7c81x6.mapOffset;
                if (this.miniMapCtx.globalAlpha = 1, this.miniMapCtx.font = "16px Ubuntu", this.miniMapCtx.fillStyle = m.mainColor, this.miniMapCtx.fillText(this.currentSector, 10, 20), this.miniMapSectors || this.drawMiniMapSectors(this.sectors, this.sectors, 182, 182), this.miniMapCtx.save(), this.miniMapCtx.translate(9.5, 29.5), this.miniMapCtx.fillStyle = "yellow", this.miniMapCtx.beginPath(), this.miniMapCtx.arc((_0x7c81x6.playerX + _0x7c81x8) * _0x7c81x7, (_0x7c81x6.playerY + _0x7c81x9) * _0x7c81x7, 6, 0, this.pi2, !1), this.miniMapCtx.closePath(), this.miniMapCtx.fill(), ":party" === this.gameMode && this.teamPlayers.length > 0) {
                    for (var _0x7c81xa = 0; _0x7c81xa < this.teamPlayers.length; _0x7c81xa++) {
                        this.teamPlayers[_0x7c81xa].drawPosition(this.miniMapCtx, _0x7c81x6.mapOffset, _0x7c81x7)
                    }
                };
                if (this.deathLocations.length > 0) {
                    var _0x7c81xb = Math.round((this.deathLocations[this.lastDeath].x + _0x7c81x6.mapOffset) * _0x7c81x7),
                        _0x7c81xc = Math.round((this.deathLocations[this.lastDeath].y + _0x7c81x6.mapOffset) * _0x7c81x7);
                    this.miniMapCtx.lineWidth = 1, this.miniMapCtx.strokeStyle = this.deathLocations.length - 1 == this.lastDeath ? m.mainColor : "#FFFFFF", this.miniMapCtx.beginPath(), this.miniMapCtx.moveTo(_0x7c81xb - 4.5, _0x7c81xc), this.miniMapCtx.lineTo(_0x7c81xb + 4.5, _0x7c81xc), this.miniMapCtx.moveTo(_0x7c81xb, _0x7c81xc - 4.5), this.miniMapCtx.lineTo(_0x7c81xb, _0x7c81xc + 4.5), this.miniMapCtx.stroke()
                };
                this.miniMapCtx.restore()
            }
        },
        drawMiniMapSectors: function(_0x7c81x6, _0x7c81x7, _0x7c81x8, _0x7c81x9) {
            this.miniMapSectors = document.getElementById("minimap-sectors");
            var _0x7c81xa = this.miniMapSectors.getContext("2d");
            _0x7c81xa.ogarioCtx = !0, this.miniMapSectors.width = _0x7c81x8, this.miniMapSectors.height = _0x7c81x9, _0x7c81xa.fillStyle = "#FFFFFF", this.drawSectors(_0x7c81xa, _0x7c81x6, _0x7c81x7, 0.5, 0.5, _0x7c81x8 - 0.5, _0x7c81x9 - 0.5, "#FFFFFF", 1, !1)
        },
        drawSectors: function(_0x7c81x7, _0x7c81x8, _0x7c81x9, _0x7c81xa, _0x7c81xb, _0x7c81xc, _0x7c81xd, _0x7c81xe, _0x7c81xf, _0x7c81x10) {
            if (!_0x7c81x10 || _0x7c81x6.mapOffsetFixed && _0x7c81x13.showBgSectors) {
                var p = Math.floor((_0x7c81xc - _0x7c81xa) / _0x7c81x8),
                    _0x7c81x11 = Math.floor((_0x7c81xd - _0x7c81xb) / _0x7c81x9),
                    m = 0.5 * _0x7c81x11;
                _0x7c81x7.save(), _0x7c81x7.strokeStyle = _0x7c81xe, _0x7c81x7.fillStyle = _0x7c81xe, _0x7c81x7.lineWidth = _0x7c81xf, _0x7c81x7.beginPath();
                for (var _0x7c81x12 = 0; _0x7c81x8 + 1 > _0x7c81x12; _0x7c81x12++) {
                    _0x7c81x7.moveTo(_0x7c81x12 == _0x7c81x8 ? _0x7c81xc : _0x7c81xa + p * _0x7c81x12, _0x7c81xb), _0x7c81x7.lineTo(_0x7c81x12 == _0x7c81x8 ? _0x7c81xc : _0x7c81xa + p * _0x7c81x12, _0x7c81xd)
                };
                for (var _0x7c81x12 = 0; _0x7c81x9 + 1 > _0x7c81x12; _0x7c81x12++) {
                    _0x7c81x7.moveTo(_0x7c81xa, _0x7c81x12 == _0x7c81x9 ? _0x7c81xd : _0x7c81xb + _0x7c81x11 * _0x7c81x12), _0x7c81x7.lineTo(_0x7c81xc, _0x7c81x12 == _0x7c81x9 ? _0x7c81xd : _0x7c81xb + _0x7c81x11 * _0x7c81x12)
                };
                _0x7c81x7.closePath(), _0x7c81x7.stroke(), _0x7c81x7.font = m + "px Ubuntu";
                for (var _0x7c81x12 = 0; _0x7c81x9 > _0x7c81x12; _0x7c81x12++) {
                    for (var _0x7c81x1a = 0; _0x7c81x8 > _0x7c81x1a; _0x7c81x1a++) {
                        var _0x7c81x1b = String.fromCharCode(65 + _0x7c81x12) + (_0x7c81x1a + 1);
                        _0x7c81x7.fillText(_0x7c81x1b, _0x7c81xa + p / 2 + _0x7c81x1a * p - _0x7c81x7.measureText(_0x7c81x1b).width / 2, _0x7c81xb + _0x7c81x11 / 2 + _0x7c81x12 * _0x7c81x11 + 0.18 * _0x7c81x11)
                    }
                };
                _0x7c81x7.restore()
            }
        },
        setVirusColor: function(_0x7c81x6) {
            var _0x7c81x7 = Math.floor(_0x7c81x6 * _0x7c81x6 / 100);
            return _0x7c81x7 > 183 ? "#C80000" : m.darkTheme ? "#999999" : "#666666"
        },
        setVirusStrokeColor: function(_0x7c81x7) {
            if (_0x7c81x6.play && 0 != _0x7c81x6.playerMaxMass) {
                var _0x7c81x8 = Math.floor(_0x7c81x7 * _0x7c81x7 / 100),
                    _0x7c81x9 = _0x7c81x8 / (this.selectBiggestCell ? _0x7c81x6.playerMaxMass : _0x7c81x6.playerMinMass);
                return _0x7c81x9 > 0.76 ? "#FFDC00" : "#C80000"
            };
            return m.darkTheme ? "#999999" : "#666666"
        },
        setOppColor: function(_0x7c81x7, _0x7c81x8) {
            if (_0x7c81x8) {
                return player_profile[profileActual.selected_profile].color
            };
            var _0x7c81x9 = Math.floor(_0x7c81x7 * _0x7c81x7 / 100),
                _0x7c81xa = this.selectBiggestCell ? _0x7c81x6.playerMaxMass : _0x7c81x6.playerMinMass,
                _0x7c81xb = _0x7c81x9 / _0x7c81xa;
            if (_0x7c81xb && _0x7c81xb > 0) {
                var _0x7c81xc = 1e3 > _0x7c81xa ? 0.35 : 0.38;
                return _0x7c81xb > 11 ? "#FF008C" : 2.5 > _0x7c81xb ? 1.25 > _0x7c81xb ? 1.25 > _0x7c81xb && _0x7c81xb > 0.75 ? "#FFDC00" : _0x7c81xb > _0x7c81xc ? "#00C8FF" : "#64FF00" : "#FF0A00" : "#BE00FF"
            }
        },
        displayLeaderboard: function(_0x7c81x6) {
            this.leaderboardInfo && (this.leaderboardPositionsHUD.innerHTML = _0x7c81x6, this.leaderboardInfo.innerHTML = _0x7c81x6)
        },
        countFPS: function() {
            if (!this.fpsLastRequest) {
                return void((this.fpsLastRequest = Date.now()))
            };
            var _0x7c81x6 = Date.now(),
                _0x7c81x7 = _0x7c81x6 - this.fpsLastRequest;
            1e3 > _0x7c81x7 || (this.rFps = this.renderedFrames, this.renderedFrames = 0, this.fpsLastRequest = _0x7c81x6), this.renderedFrames += 1
        },
        displayFPS: function() {
            if (!_0x7c81x13.showFPS) {
                _0x7c81x7("#fps-hud").hide()
            };
            var _0x7c81x8 = "";
            _0x7c81x6.playerBestMass && (_0x7c81x8 += "Score: " + _0x7c81x6.playerBestMass + "    "), _0x7c81x6.play && (_0x7c81x6.playerMass && (_0x7c81x8 += "Mass: " + _0x7c81x6.playerMass + "    ["), _0x7c81x6.playerCellsMass && (_0x7c81x8 += _0x7c81x6.playerCellsMass.length + "/16]    ")), _0x7c81x8 += "FPS: " + this.rFps, this.fpsHUD.textContent = _0x7c81x8, setTimeout(function() {
                this.displayFPS()
            }.bind(this), 100)
        },
        connect: function() {
            if (this.setParty(), this.socket) {
                this.socket.onopen = null, this.socket.onmessage = null;
                try {
                    this.socket.close()
                } catch (_0x7c81x6) {};
                this.socket = null
            };
            this.teamPlayers = [], this.partys = [], ":party" !== this.gameMode || this.partyToken.length > 5 || (console.log("Ogarioplus: Connecting to server"), this.socket = new WebSocket("ws://91.134.143.136:3000"), this.socket.ogarioWS = !0, this.socket.binaryType = "arraybuffer", this.socket.onopen = function() {
                console.log("Ogarioplus: Socket open. By Theo... :)"), this.sendBuffer(this.strToBuff(80, this.partyToken)), this.sendBuffer(this.strToBuff(81, this.playerIP)), this.sendBuffer(this.strToBuff(0, player_profile[profileActual.selected_profile].nick)), this.sendBuffer(this.strToBuff(1, player_profile[profileActual.selected_profile].clanTag))
            }.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = function() {
                console.log("Ogarioplus: Socket close")
            }, this.socket.onerror = function() {
                console.log("Ogarioplus: Socket error")
            })
        },
        handleConnect: function() {
            this.setPlayerInfo(), this.isSocketOpen() || setTimeout(function() {
                this.connect()
            }.bind(this), 1e3), this.updatePlayerInfo()
        },
        isSocketOpen: function() {
            return null != this.socket && this.socket.readyState == this.socket.OPEN
        },
        createView: function(_0x7c81x6) {
            return new DataView(new ArrayBuffer(_0x7c81x6))
        },
        strToBuff: function(_0x7c81x6, _0x7c81x7) {
            var _0x7c81x8 = this.createView(1 + 2 * _0x7c81x7.length);
            _0x7c81x8.setUint8(0, _0x7c81x6);
            for (var _0x7c81x9 = 0; _0x7c81x9 < _0x7c81x7.length; _0x7c81x9++) {
                _0x7c81x8.setUint16(1 + 2 * _0x7c81x9, _0x7c81x7.charCodeAt(_0x7c81x9), !0)
            };
            return _0x7c81x8
        },
        sendBuffer: function(_0x7c81x6) {
            this.socket.send(_0x7c81x6.buffer)
        },
        handleMessage: function(_0x7c81x6) {
            this.readMessage(new DataView(_0x7c81x6.data))
        },
        readMessage: function(_0x7c81x6) {
            var _0x7c81x7 = _0x7c81x6.getUint8(0);
            switch (_0x7c81x7) {
                case 16:
                    this.updateTeamPlayers(_0x7c81x6), this.displayTop5();
                    break;
                case 96:
                    this.updatePartys(_0x7c81x6), this.displayPartys();
                    break;
                case 100:
                    _0x7c81x13.hideChat || this.readChatMessage(_0x7c81x6)
            }
        },
        checkPlayerID: function(_0x7c81x6) {
            for (var _0x7c81x7 = 0; _0x7c81x7 < this.teamPlayers.length; _0x7c81x7++) {
                if (this.teamPlayers[_0x7c81x7].id == _0x7c81x6) {
                    return _0x7c81x7
                }
            };
            return null
        },
        updateTeamPlayers: function(_0x7c81x6) {
            function _0x7c81x7() {
                for (var _0x7c81x7 = "";;) {
                    var _0x7c81x8 = _0x7c81x6.getUint16(_0x7c81xb, !0);
                    if (0 == _0x7c81x8) {
                        break
                    };
                    _0x7c81x7 += String.fromCharCode(_0x7c81x8), _0x7c81xb += 2
                };
                return _0x7c81xb += 2, _0x7c81x7
            }
            for (var _0x7c81x9 = Date.now(), _0x7c81xa = _0x7c81x6.getUint8(1), _0x7c81xb = 2, _0x7c81xc = 0; _0x7c81xa > _0x7c81xc; _0x7c81xc++) {
                var _0x7c81xd = _0x7c81x6.getUint32(_0x7c81xb, !0),
                    _0x7c81xe = _0x7c81x6.getInt32(_0x7c81xb + 4, !0),
                    _0x7c81xf = _0x7c81x6.getInt32(_0x7c81xb + 8, !0),
                    _0x7c81x10 = _0x7c81x6.getUint32(_0x7c81xb + 12, !0);
                _0x7c81xb += 16;
                var p = _0x7c81x7(),
                    _0x7c81x11 = _0x7c81x7(),
                    m = _0x7c81x7(),
                    _0x7c81x12 = _0x7c81x7(),
                    _0x7c81x13 = this.checkPlayerID(_0x7c81xd);
                if (null != _0x7c81x13) {
                    this.teamPlayers[_0x7c81x13].x = _0x7c81xe, this.teamPlayers[_0x7c81x13].y = _0x7c81xf, this.teamPlayers[_0x7c81x13].mass = _0x7c81x10, this.teamPlayers[_0x7c81x13].clanTag = p, this.teamPlayers[_0x7c81x13].setNick(_0x7c81x11), this.teamPlayers[_0x7c81x13].skinURL = m, this.teamPlayers[_0x7c81x13].color = _0x7c81x12, this.teamPlayers[_0x7c81x13].alive = !0, this.teamPlayers[_0x7c81x13].updateTime = _0x7c81x9
                } else {
                    var _0x7c81x1a = new _0x7c81x8(_0x7c81xd, _0x7c81xe, _0x7c81xf, _0x7c81x10, p, _0x7c81x11, m, _0x7c81x12);
                    this.teamPlayers.push(_0x7c81x1a)
                };
                this.cacheCustomSkin(this.customSkinsCache, _0x7c81x11, m)
            };
            if (this.updateTick++, 5 == this.updateTick) {
                for (var _0x7c81xc = 0; _0x7c81xc < this.teamPlayers.length; _0x7c81xc++) {
                    _0x7c81x9 - this.teamPlayers[_0x7c81xc].updateTime > 1e3 && (this.teamPlayers[_0x7c81xc].alive = !1)
                };
                this.updateTick = 0
            };
            this.teamPlayers.sort(function(_0x7c81x6, _0x7c81x7) {
                return _0x7c81x7.mass - _0x7c81x6.mass
            }), this.top5 = [];
            for (var _0x7c81xc = 0; _0x7c81xc < this.teamPlayers.length && (!this.teamPlayers[_0x7c81xc].alive || (this.top5.push({
                    nick: this.teamPlayers[_0x7c81xc].nick,
                    mass: this.teamPlayers[_0x7c81xc].mass
                }), 5 != this.top5.length)); _0x7c81xc++) {;
            }
        },
        updatePartys: function(_0x7c81x6) {
            this.partys = [];
            for (var _0x7c81x7 = _0x7c81x6.getUint8(1), _0x7c81x8 = 2, _0x7c81x9 = 0; _0x7c81x7 > _0x7c81x9; _0x7c81x9++) {
                for (var _0x7c81xa = "";;) {
                    var _0x7c81xb = _0x7c81x6.getUint16(_0x7c81x8, !0);
                    if (0 == _0x7c81xb) {
                        break
                    };
                    _0x7c81xa += String.fromCharCode(_0x7c81xb), _0x7c81x8 += 2
                };
                _0x7c81x8 += 2, this.partys.push(_0x7c81xa)
            }
        },
        displayPartys: function() {
            for (var _0x7c81x6 = "", _0x7c81x7 = 0; _0x7c81x7 < this.partys.length; _0x7c81x7++) {
                _0x7c81x6 += "<li><a href=\"http://agar.io/#" + this.partys[_0x7c81x7] + "\" onclick=\"$('#joinPartyToken').val('" + this.partys[_0x7c81x7] + "'); $('#join-party-btn').click();\">http://agar.io/#" + this.partys[_0x7c81x7] + "</a></li>"
            };
            this.activePartys.innerHTML = _0x7c81x6
        },
        displayTop5: function() {
            for (var _0x7c81x6 = "", _0x7c81x7 = 0; _0x7c81x7 < this.top5.length && (_0x7c81x6 += "<li>" + this.top5[_0x7c81x7].nick + " [" + this.top5[_0x7c81x7].mass + "]</li>", 4 != _0x7c81x7); _0x7c81x7++) {;
            };
            this.top5p.innerHTML = _0x7c81x6
        },
        readChatMessage: function(_0x7c81x6) {
            for (var _0x7c81x7 = _0x7c81x6.getUint8(1), _0x7c81x8 = "", _0x7c81x9 = 2; _0x7c81x9 < _0x7c81x6.byteLength; _0x7c81x9 += 2) {
                var _0x7c81xa = _0x7c81x6.getUint16(_0x7c81x9, !0);
                if (0 == _0x7c81xa) {
                    break
                };
                _0x7c81x8 += String.fromCharCode(_0x7c81xa)
            };
            if (_0x7c81x8.length > 0) {
                var _0x7c81xb = _0x7c81x8.split(": ", 1);
                _0x7c81x8 = _0x7c81x8.replace(_0x7c81xb + ": ", ""), 101 == _0x7c81x7 ? (toastr.success("<span class=\"message-nick main-color\">" + _0x7c81xb + ": </span>" + "<br /><span class='toast_chatmsg'>" + _0x7c81x8 + "</span>"), this.chatHistory.push({
                    nick: _0x7c81xb,
                    message: _0x7c81x8
                }), this.chatHistory.length > 15 && this.chatHistory.splice(0, 1)) : toastr.warning(_0x7c81xb + ": " + _0x7c81x8)
            }
        },
        displayChatHistory: function(_0x7c81x6) {
            if (_0x7c81x6) {
                _0x7c81x7("#messages").empty(), toastr.clear();
                for (var _0x7c81x8 = 0; _0x7c81x8 < this.chatHistory.length; _0x7c81x8++) {
                    _0x7c81x7("#messages").append("<li><span class=\"message-nick main-color\">" + this.chatHistory[_0x7c81x8].nick + ": </span>" + "<br /><span class='toast_chatmsg'>" + this.chatHistory[_0x7c81x8].message + "</span></li>")
                }
            } else {
                _0x7c81x7("#messages").empty()
            }
        },
        sendChatMessage: function(_0x7c81x6, _0x7c81x7) {
            if (Date.now() - this.lastMessageSend >= 500 && 0 != _0x7c81x7.length && 0 != player_profile[profileActual.selected_profile].nick.length && this.isSocketOpen()) {
                var _0x7c81x7 = player_profile[profileActual.selected_profile].nick + ": " + _0x7c81x7,
                    _0x7c81x8 = this.createView(2 + 2 * _0x7c81x7.length);
                _0x7c81x8.setUint8(0, 100), _0x7c81x8.setUint8(1, _0x7c81x6);
                for (var _0x7c81x9 = 0; _0x7c81x9 < _0x7c81x7.length; _0x7c81x9++) {
                    _0x7c81x8.setUint16(2 + 2 * _0x7c81x9, _0x7c81x7.charCodeAt(_0x7c81x9), !0)
                };
                this.sendBuffer(_0x7c81x8), this.lastMessageSend = Date.now()
            }
        },
        prepareCommand: function(_0x7c81x6) {
            var _0x7c81x7 = _0x7c81x6.replace("%currentSector%", this.currentSector);
            return _0x7c81x7
        },
        sendCommand: function(_0x7c81x6) {
            var _0x7c81x7 = this.prepareCommand(p["comm" + _0x7c81x6]);
            this.sendChatMessage(102, _0x7c81x7)
        },
        focusOnChat: function() {
            if (":party" === this.gameMode) {
                var _0x7c81x8 = _0x7c81x7("#message");
                if (_0x7c81x8.is(":visible")) {
                    var _0x7c81x9 = _0x7c81x8.val();
                    _0x7c81x9.length > 0 ? (this.sendChatMessage(101, _0x7c81x9), _0x7c81x6.play && (_0x7c81x8.blur(), _0x7c81x8.hide())) : (_0x7c81x8.blur(), _0x7c81x8.hide()), _0x7c81x8.val("")
                } else {
                    _0x7c81x8.show(), _0x7c81x8.focus(), _0x7c81x8.val("")
                }
            }
        },
        hideChat: function() {
            ":party" === this.gameMode && (_0x7c81x13.hideChat = !_0x7c81x13.hideChat, _0x7c81x13.hideChat && (toastr.error("[H] " + _0x7c81x10[_0x7c81xf].hideChatMsg), _0x7c81x7("#message").hide()))
        },
        pause: function() {
            _0x7c81x6.pause = !_0x7c81x6.pause, _0x7c81x6.pause ? _0x7c81x7("#pause-hud").show() : _0x7c81x7("#pause-hud").hide()
        },
        updatePlayer: function() {
            if (this.isSocketOpen()) {
                if (_0x7c81x6.play) {
                    var _0x7c81x7 = this.createView(13);
                    _0x7c81x7.setUint8(0, 16), _0x7c81x7.setInt32(1, this.getPlayerX(), !0), _0x7c81x7.setInt32(5, this.getPlayerY(), !0), void(0) !== _0x7c81x6.playerMass ? _0x7c81x7.setUint32(9, _0x7c81x6.playerMass, !0) : _0x7c81x7.setUint32(9, this.playerMass, !0), this.sendBuffer(_0x7c81x7), this.sendPlayerSpawn()
                } else {
                    this.sendPlayerDeath()
                }
            }
        },
        sendPlayerSpawn: function() {
            this.isSocketOpen() && (view = this.createView(2), view.setUint8(0, 64), view.setUint8(1, 1), this.sendBuffer(view))
        },
        sendPlayerDeath: function() {
            this.isSocketOpen() && (view = this.createView(2), view.setUint8(0, 64), view.setUint8(1, 0), this.sendBuffer(view))
        },
        updatePlayerInfo: function() {
            this.cacheCustomSkin(this.customSkinsCache, player_profile[profileActual.selected_profile].nick, player_profile[profileActual.selected_profile].skinURL), this.isSocketOpen() && (this.sendBuffer(this.strToBuff(0, player_profile[profileActual.selected_profile].nick)), this.sendBuffer(this.strToBuff(1, player_profile[profileActual.selected_profile].clanTag)), this.sendBuffer(this.strToBuff(2, player_profile[profileActual.selected_profile].skinURL)), this.sendBuffer(this.strToBuff(3, player_profile[profileActual.selected_profile].color)), setTimeout(function() {
                this.setParty(), this.sendBuffer(this.strToBuff(80, this.partyToken))
            }.bind(this), 1e3))
        },
        getPlayerIP: function() {
            var _0x7c81x6 = this;
            _0x7c81x7.ajax("http://ogario.ovh/pingback.php", {
                success: function(_0x7c81x7) {
                    _0x7c81x6.playerIP = _0x7c81x7
                },
                dataType: "text",
                method: "GET",
                cache: !1,
                crossDomain: !0
            })
        },
        init: function() {
            this.loadSettings(p);
            this.loadSettings(m);
            var _0x7c81x1c = this.recuperarBandera();
            if (_0x7c81x1c == null) {
                this.crearBandera();
                this.almacenarProfiles(player_profile);
                this.saveSettings(profileActual)
            } else {};
            this.recuperarProfiles(player_profile);
            this.loadSettings(profileActual);
            var _0x7c81xa = profileActual.selected_profile;
            this.loadSettings(_0x7c81x13);
            this.setTheme(), this.setMenu(), this.setKeys(), this.setButtons(), this.setMiniMap(), this.displayFPS(), setInterval(function() {
                this.drawMiniMap()
            }.bind(this), 33), setInterval(function() {
                this.updatePlayer()
            }.bind(this), 900)
        }
    };
    var _0x7c81x1a = new _0x7c81x9;
    _0x7c81x1a.init();
    _0x7c81xa();
    _0x7c81xb();
    window.addEventListener("resize", function() {
        setTimeout(function() {
            _0x7c81xc()
        }, 50)
    }, !1);
    _0x7c81xd();
    window.onbeforeunload = _0x7c81xe;
    window.saveHotkeys = function() {
        var _0x7c81x1d = 0;
        _0x7c81x7("#commands .input-group-addon").each(function() {
            _0x7c81x1d++;
            var _0x7c81x1e;
            var _0x7c81x1f;
            _0x7c81x1e = _0x7c81x7(this);
            _0x7c81x1f = _0x7c81x1e.attr("id");
            if (p.hasOwnProperty(_0x7c81x1f)) {
                var _0x7c81x20 = _0x7c81x1e.parent().find("input:text").val();
                p[_0x7c81x1f] = _0x7c81x20;
                window.localStorage.setItem(_0x7c81x1f, p[_0x7c81x1f])
            }
        });
        _0x7c81x1a.loadSettings(p);
        clicEnHome()
    }, window.saveThemeSettings = function() {
        _0x7c81x1a.saveSettings(m);
        clicEnHome()
    }, window.setSettings = function(_0x7c81x8, _0x7c81x9) {
        if (_0x7c81x13.hasOwnProperty(_0x7c81x8) && null != _0x7c81x9) {
            switch (_0x7c81x13[_0x7c81x8] = _0x7c81x9, _0x7c81x6.hasOwnProperty(_0x7c81x8) && (_0x7c81x6[_0x7c81x8] = _0x7c81x9), _0x7c81x8) {
                case "showMiniMap":
                    _0x7c81x1a.setMiniMap();
                    break;
                case "showFPS":
                    _0x7c81x1a.displayFPS(), _0x7c81x7("#fps-hud").show()
            };
            _0x7c81x1a.saveSettings(_0x7c81x13)
        }
    }, window.copyLeaderboard = function() {
        var _0x7c81x6 = _0x7c81x7("<input>");
        _0x7c81x7("body").append(_0x7c81x6), _0x7c81x6.val(_0x7c81x7("#leaderboard-info").text()).select();
        try {
            document.execCommand("copy")
        } catch (_0x7c81x8) {};
        _0x7c81x6.remove()
    }, window.quickPartyJoin = function() {
        ":party" === _0x7c81x1a.gameMode && (_0x7c81x6.play = !1, _0x7c81x7("#join-party-btn").click(), setTimeout(function() {
            _0x7c81x7(".btn-play").click()
        }, 250))
    };
    for (var _0x7c81x1b in _0x7c81x13) {
        _0x7c81x13.hasOwnProperty(_0x7c81x1b) && _0x7c81x6.hasOwnProperty(_0x7c81x1b) && (_0x7c81x6[_0x7c81x1b] = _0x7c81x13[_0x7c81x1b])
    };
    _0x7c81x6.cellsAlpha = 0.9, _0x7c81x6.skinsAlpha = 0.7, _0x7c81x6.virusColor = m.darkTheme ? "#999999" : "#666666", _0x7c81x6.virusAlpha = 0.6, _0x7c81x6.foodColor = m.foodColor, _0x7c81x6.displayLeaderboard = function() {
        _0x7c81x1a.displayLeaderboard(_0x7c81x6.leaderboardHTML)
    }, _0x7c81x6.customDraw = function() {
        _0x7c81x1a.countFPS();
        var _0x7c81x7 = _0x7c81x6.gameCtx;
        if (_0x7c81x7) {
            var _0x7c81x8 = _0x7c81x6.mapMinX - _0x7c81x6.mapOffsetX,
                _0x7c81x9 = _0x7c81x6.mapMinY - _0x7c81x6.mapOffsetY,
                _0x7c81xa = _0x7c81x6.mapMaxX - _0x7c81x6.mapOffsetX,
                _0x7c81xb = _0x7c81x6.mapMaxY - _0x7c81x6.mapOffsetY;
            if (_0x7c81x1a.drawSectors(_0x7c81x7, 5, 5, _0x7c81x8, _0x7c81x9, _0x7c81xa, _0x7c81xb, m.gridColor, 20, !0), _0x7c81x1a.drawMapBorders(_0x7c81x7, _0x7c81x8, _0x7c81x9, _0x7c81xa, _0x7c81xb, m.mainColor, 20), _0x7c81x6.foodCache && _0x7c81x6.foodCache.length > 0) {
                _0x7c81x7.beginPath();
                for (var _0x7c81xc = 0; _0x7c81xc < _0x7c81x6.foodCache.length; _0x7c81xc++) {
                    var _0x7c81xd = _0x7c81x6.foodCache[_0x7c81xc].x,
                        _0x7c81xe = _0x7c81x6.foodCache[_0x7c81xc].y;
                    _0x7c81x7.moveTo(_0x7c81xd, _0x7c81xe), _0x7c81x7.arc(_0x7c81xd, _0x7c81xe, _0x7c81x6.foodCache[_0x7c81xc].size + 5, _0x7c81x1a.pi2, !1)
                };
                _0x7c81x7.fillStyle = m.foodColor, _0x7c81x7.globalAlpha = 1, _0x7c81x7.fill(), _0x7c81x6.foodCache = []
            };
            if (_0x7c81x6.biggerCellsCache && _0x7c81x6.biggerCellsCache.length > 0) {
                _0x7c81x7.lineWidth = 4, _0x7c81x7.strokeStyle = m.mainColor, _0x7c81x7.globalAlpha = 0.4;
                for (var _0x7c81xc = 0; _0x7c81xc < _0x7c81x6.biggerCellsCache.length; _0x7c81xc++) {
                    var _0x7c81xd = _0x7c81x6.biggerCellsCache[_0x7c81xc].x,
                        _0x7c81xe = _0x7c81x6.biggerCellsCache[_0x7c81xc].y;
                    _0x7c81x7.beginPath(), _0x7c81x7.arc(_0x7c81xd, _0x7c81xe, _0x7c81x6.biggerCellsCache[_0x7c81xc].size + 760, _0x7c81x1a.pi2, !1), _0x7c81x7.closePath(), _0x7c81x7.stroke()
                };
                _0x7c81x7.globalAlpha = 1, _0x7c81x6.biggerCellsCache = []
            };
            _0x7c81x13.cursorTracking && _0x7c81x6.play && (_0x7c81x7.globalAlpha = m.darkTheme ? 0.7 : 0.35, _0x7c81x7.lineWidth = 2, _0x7c81x7.strokeStyle = m.darkTheme ? "#FFFFFF" : "#000000", _0x7c81x7.beginPath(), _0x7c81x7.moveTo(_0x7c81x6.playerX, _0x7c81x6.playerY), _0x7c81x7.lineTo(_0x7c81x6.cursorX, _0x7c81x6.cursorY), _0x7c81x7.stroke(), _0x7c81x7.globalAlpha = 1)
        }
    }, _0x7c81x6.getCustomSkin = function(_0x7c81x6) {
        return _0x7c81x1a.getCustomSkin(_0x7c81x6)
    }, _0x7c81x6.setVirusColor = function(_0x7c81x6) {
        return _0x7c81x1a.setVirusColor(_0x7c81x6)
    }, _0x7c81x6.setVirusStrokeColor = function(_0x7c81x6) {
        return _0x7c81x1a.setVirusStrokeColor(_0x7c81x6)
    }, _0x7c81x6.setOppColor = function(_0x7c81x6, _0x7c81x7) {
        return _0x7c81x1a.setOppColor(_0x7c81x6, _0x7c81x7)
    }
}(window.ogario, window.jQuery);
$(document).ready(function() {
    $("#blocker").removeAttr("style");
    $("#blocker").removeAttr("class");
    $("#blocker").empty();
    $(".agario-panel-freecoins").appendTo("#misc");
    $(".agario-shop-panel").appendTo("#misc");
    $(".agario-panel-freecoins").css("width", "100%");
    $(".agario-shop-panel").css("width", "100%");
    $("#misc").append("<button id='gplusLogin' class='btn btn-primary btn-login btn-gplus'><span class='gplus-icon'></span><span class='btn-text' data-itr='menu_login_google'>Sign in with Google</span></button>");
    $("mainPanel").removeClass("menu-panel");
    $("#ogario-party").hide();
    $("#version").hide();
    $("button[onclick='toggleSocialLogin(); return false']").removeAttr("onclick").click(function() {
        facebookLogin();
        return false
    });
    $("#create-party-btn").html("CREATE PARTY TOKEN");
    $(".form-group").css("margin-bottom", "0px");
    $("#gamemode_info").html("MODE: " + $("#gamemode option:selected").html());
    $("#muestraTop5").hide();
    $(".agario-party-1").hide();
    $(".agario-party-2").hide();
    $(".agario-party-5").hide();
    $(".agario-party-6").hide();
    setSkin();
    $("span[data-itr='option_no_names']").text("Hide Names");
    $("#txt_zoom_speed").text($("#opt_zoom_speed").val());
    $("#label_settings_showMiniMap").after("<label><input type='checkbox' id='noNames'><span data-itr='option_no_names'>Hide Names</span></label>");
    $("#label_settings_mouseControl").after("<label><input type='checkbox' id='noColors'><span data-itr='option_no_colors'>Hide blob colors</span></label>");
    $("#label_settings_rainbowFood").after("<label><input type='checkbox' id='showMass'><span data-itr='option_show_mass'>Show mass</span></label>");
    $("#label_settings_mouseInvert").after("<label id='label_settings_option_no_skins'><input type='checkbox' id='noSkins'><span data-itr='option_no_skins'>No skins</span></label>");
    $("#label_settings_option_no_skins").after("<label><input type='checkbox' id='skipStats'><span data-itr='option_skip_stats'>Skip stats</span></label>");
    $(".color-box").css("display", "none");
    $("#profile_info").text("Profile: " + (parseInt(profileActual.selected_profile) + 1))
});

function ocultarPrincipal() {
    $("div[role=form]").hide();
    $("#ogario-party").hide();
    $("#instructions").hide();
    $("#version").hide()
}

function mostrarPrincipal() {
    $("div[role=form]").fadeIn("slow", "swing")
}

function muestraSkin() {
    $("#preview-img").fadeOut(250, "swing");
    setTimeout("setSkin()", 250);
    $("#preview-img").fadeIn(250, "swing")
}

function setSkin() {
    document.getElementById("preview-img").setAttribute("src", document.getElementById("skin").value)
}
var imagenDefecto = "http://i.imgur.com/gdB7nj9.png";
$.event.special.inputchange = {
    setup: function() {
        var _0x7c81x26 = this,
            _0x7c81x27;
        $.data(this, "timer", window.setInterval(function() {
            _0x7c81x27 = _0x7c81x26.value;
            if ($.data(_0x7c81x26, "cache") != _0x7c81x27) {
                $.data(_0x7c81x26, "cache", _0x7c81x27);
                $(_0x7c81x26).trigger("inputchange")
            }
        }, 20))
    },
    teardown: function() {
        window.clearInterval($.data(this, "timer"))
    },
    add: function() {
        $.data(this, "cache", this.value)
    }
};
$("#skin").on("inputchange", function() {
    muestraSkin()
});
$("#input_hk_send_msg1").on("inputchange", function() {
    $("input[placeholder='Command #1']").val($("#input_hk_send_msg1").val())
});
$("#input_hk_send_msg2").on("inputchange", function() {
    $("input[placeholder='Command #2']").val($("#input_hk_send_msg2").val())
});
$("#input_hk_send_msg3").on("inputchange", function() {
    $("input[placeholder='Command #3']").val($("#input_hk_send_msg3").val())
});
$("#input_hk_send_msg4").on("inputchange", function() {
    $("input[placeholder='Command #4']").val($("#input_hk_send_msg4").val())
});
$("#input_hk_send_msg5").on("inputchange", function() {
    $("input[placeholder='Command #5']").val($("#input_hk_send_msg5").val())
});
$("#input_hk_send_msg6").on("inputchange", function() {
    $("input[placeholder='Command #6']").val($("#input_hk_send_msg6").val())
});
$("#input_hk_send_msg7").on("inputchange", function() {
    $("input[placeholder='Command #7']").val($("#input_hk_send_msg7").val())
});
$("#input_hk_send_msg8").on("inputchange", function() {
    $("input[placeholder='Command #8']").val($("#input_hk_send_msg8").val())
});
$("#input_hk_send_msg9").on("inputchange", function() {
    $("input[placeholder='Command #9']").val($("#input_hk_send_msg9").val())
});
$("#input_hk_send_msg0").on("inputchange", function() {
    $("input[placeholder='Command #0']").val($("#input_hk_send_msg0").val())
});
$("#input_hk_send_msg10").on("inputchange", function() {
    $("input[placeholder='Command #Alt / Mouse Wheel']").val($("#input_hk_send_msg10").val())
});
$("#input_hk_send_msg11").on("inputchange", function() {
    $("input[placeholder='Command #Left Arrow']").val($("#input_hk_send_msg11").val())
});
$("#input_hk_send_msg12").on("inputchange", function() {
    $("input[placeholder='Command #Up Arrow']").val($("#input_hk_send_msg12").val())
});
$("#input_hk_send_msg13").on("inputchange", function() {
    $("input[placeholder='Command #Right Arrow']").val($("#input_hk_send_msg13").val())
});
$("#input_hk_send_msg14").on("inputchange", function() {
    $("input[placeholder='Command #Down Arrow'").val($("#input_hk_send_msg14").val())
});
$("#hotkeys_a").click(function() {
    clicEnHome()
});
$("a[href='#hotkeys']").click(function() {
    $("#hotkeys_setting").modal();
    clicEnHome()
});
$(".roww").click(function() {
    if ($(this).attr("class") === "row header") {
        return
    };
    $(".roww").each(function() {
        if ($(this).attr("class") != "row header") {
            $(this).removeClass();
            $(this).attr("class", "row roww")
        }
    });
    $(this).attr("class", "row roww table-row-selected")
});

function resetToDefault() {
    $("#input_hk_send_msg1").val(p.comm1);
    $("input[placeholder='Command #1']").val($("#input_hk_send_msg1").val());
    $("#input_hk_send_msg2").val(p.comm2);
    $("input[placeholder='Command #2']").val($("#input_hk_send_msg2").val());
    $("#input_hk_send_msg3").val(p.comm3);
    $("input[placeholder='Command #3']").val($("#input_hk_send_msg3").val());
    $("#input_hk_send_msg4").val(p.comm4);
    $("input[placeholder='Command #4']").val($("#input_hk_send_msg4").val());
    $("#input_hk_send_msg5").val(p.comm5);
    $("input[placeholder='Command #5']").val($("#input_hk_send_msg5").val());
    $("#input_hk_send_msg6").val(p.comm6);
    $("input[placeholder='Command #6']").val($("#input_hk_send_msg6").val());
    $("#input_hk_send_msg7").val(p.comm7);
    $("input[placeholder='Command #7']").val($("#input_hk_send_msg7").val());
    $("#input_hk_send_msg8").val(p.comm8);
    $("input[placeholder='Command #8']").val($("#input_hk_send_msg8").val());
    $("#input_hk_send_msg9").val(p.comm9);
    $("input[placeholder='Command #9']").val($("#input_hk_send_msg9").val());
    $("#input_hk_send_msg0").val(p.comm0);
    $("input[placeholder='Command #0']").val($("#input_hk_send_msg0").val());
    $("#input_hk_send_msg10").val(p.comm10);
    $("input[placeholder='Command #Alt / Mouse Wheel']").val($("#input_hk_send_msg10").val());
    $("#input_hk_send_msg11").val(p.comm11);
    $("input[placeholder='Command #Left Arrow']").val($("#input_hk_send_msg11").val());
    $("#input_hk_send_msg12").val(p.comm12);
    $("input[placeholder='Command #Up Arrow']").val($("#input_hk_send_msg12").val());
    $("#input_hk_send_msg13").val(p.comm13);
    $("input[placeholder='Command #Right Arrow']").val($("#input_hk_send_msg13").val());
    $("#input_hk_send_msg14").val(p.comm14);
    $("input[placeholder='Command #Down Arrow']").val($("#input_hk_send_msg14").val())
}

function errorSkin() {
    document.getElementById("preview-img").setAttribute("src", imagenDefecto);
    $("#skin").val("")
}

function ocultarURLSkin() {
    document.getElementById("skin").style.textIndent = "-999999px";
    document.getElementById("ocultaSkin").id = "muestraSkin";
    document.getElementById("muestraSkin").onclick = mostrarURLSkin
}

function mostrarURLSkin() {
    document.getElementById("skin").style.textIndent = "0px";
    document.getElementById("muestraSkin").id = "ocultaSkin";
    document.getElementById("ocultaSkin").onclick = ocultarURLSkin
}

function seleccionarTexto(_0x7c81x2d) {
    _0x7c81x2d.select()
}

function clicEnHome() {
    $("a[href='#mainPanel']").click()
}
$("#opt_zoom_speed").on("input", function() {
    var _0x7c81x2f = $("#txt_zoom_speed").text();
    window.ogario.zoomSpeedValue = _0x7c81x2f
})
