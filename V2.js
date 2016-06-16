! function() {
    window.ogario = {
        play: !1,
        spectate: !1,
        gameMode: "",
        playerNick: "",
        clanTag: "《คฬร๓》",
        playerX: 0,
        playerY: 0,
        playerMass: 0,
        playerCellsMass: [],
        playerMinMass: 0,
        playerMaxMass: 0,
        playerBestMass: null,
        ste: null,
        mapSize: 14142,
        mapOffset: 7071,
        mapOffsetX: 0,
        mapOffsetY: 0,
        mapOffsetFixed: !1,
        mapMinX: -7071,
        mapMinY: -7071,
        mapMaxX: 7071,
        mapMaxY: 7071,
        zoomValue: 1,
        zoomResetValue: 0,
        zoomSpeedValue: 0.9,
        viewScale: 1,
        innerW: 0,
        innerH: 0,
        cursorX: 0,
        cursorY: 0,
        menuHeight: 760,
        cellMemOffset: null,
        nameMemOffset: 96,
        leaderboardHTML: "",
        leaderboardIndex: 1,
        foodCache: [],
        biggerCellsCache: [],
        gameCtx: null,
        gloabalAlpha: 1,
        cellsAlpha: 0.9,
        skinsAlpha: 0.7,
        virusColor: "#999999",
        virusAlpha: 0.6,
        foodColor: "#998c36",
        autoZoom: !0,
        autoHideCellsInfo: !0,
        autoHideFood: !1,
        hideOwnName: !1,
        customSkins: !0,
        showCustomSkins: !0,
        transparentCells: !0,
        transparentSkins: !0,
        ownTransparentSkin: !1,
        showFood: !0,
        rainbowFood: !1,
        oppColors: !1,
        splitRange: !1,
        textStroke: !1,
        cursorTracking: !1,
        selectBiggestCell: !0,
        pause: !1,
        displayLeaderboard: null,
        customDraw: null,
        setOppColor: null,
        setVirusColor: null,
        setVirusStrokeColor: null,
        getString: null,
        getCustomSkin: null,
        setMapCoords: function(_0x8a2fx1, _0x8a2fx2, _0x8a2fx3, _0x8a2fx4, _0x8a2fx5, _0x8a2fx6) {
            _0x8a2fx6 - _0x8a2fx5 == 24 && _0x8a2fx3 - _0x8a2fx1 > 14e3 && _0x8a2fx4 - _0x8a2fx2 > 14e3 && (this.mapOffsetX = this.mapOffset - _0x8a2fx3, this.mapOffsetY = this.mapOffset - _0x8a2fx4, this.mapOffsetFixed = !0)
        },
        calculateMass: function() {
            if (0 != this.playerCellsMass.length) {
                this.playerMinMass = this.playerCellsMass[0], this.playerMaxMass = this.playerCellsMass[0];
                for (var _0x8a2fx1 = 1; _0x8a2fx1 < this.playerCellsMass.length; _0x8a2fx1++) {
                    this.playerCellsMass[_0x8a2fx1] < this.playerMinMass ? this.playerMinMass = this.playerCellsMass[_0x8a2fx1] : this.playerCellsMass[_0x8a2fx1] > this.playerMaxMass && (this.playerMaxMass = this.playerCellsMass[_0x8a2fx1])
                };
                (this.playerMass > this.playerBestMass || !this.playerBestMass) && (this.playerBestMass = this.playerMass);
                var _0x8a2fx2 = this.selectBiggestCell ? this.playerMaxMass : this.playerMinMass;
                this.ste = _0x8a2fx2 > 35 ? Math.floor(_0x8a2fx2 * (1e3 > _0x8a2fx2 ? 0.35 : 0.38)) : null
            }
        },
        cacheBiggerCells: function(_0x8a2fx1, _0x8a2fx2, _0x8a2fx3) {
            var _0x8a2fx4 = Math.floor(_0x8a2fx3 * _0x8a2fx3 / 100),
                _0x8a2fx5 = _0x8a2fx4 / this.playerMaxMass;
            2.5 > _0x8a2fx5 || this.biggerCellsCache.push({
                x: _0x8a2fx1,
                y: _0x8a2fx2,
                size: _0x8a2fx3
            })
        },
        setAutoHideCellsInfo: function(_0x8a2fx1) {
            return this.viewScale < 0.5 && 500 > _0x8a2fx1 && _0x8a2fx1 < 24 / this.viewScale ? !0 : !1
        }
    }, CanvasRenderingContext2D.prototype.ogarioCtx = !1, CanvasRenderingContext2D.prototype._drawImage = CanvasRenderingContext2D.prototype.drawImage, CanvasRenderingContext2D.prototype.drawImage = function() {
        var _0x8a2fx1 = arguments[0];
        _0x8a2fx1.src && "http://agar.io/img/background.png" == _0x8a2fx1.src || this._drawImage.apply(this, arguments)
    }, CanvasRenderingContext2D.prototype._fillRect = CanvasRenderingContext2D.prototype.fillRect, CanvasRenderingContext2D.prototype.fillRect = function() {}, CanvasRenderingContext2D.prototype._strokeText = CanvasRenderingContext2D.prototype.strokeText, CanvasRenderingContext2D.prototype.strokeText = function() {
        !window.ogario.textStroke || window.ogario.hideOwnName && arguments[0] === window.ogario.playerNick || this._strokeText.apply(this, arguments)
    }, CanvasRenderingContext2D.prototype._fillText = CanvasRenderingContext2D.prototype.fillText, CanvasRenderingContext2D.prototype.fillText = function() {
        var _0x8a2fx1 = arguments[0];
        if (!window.ogario.hideOwnName || _0x8a2fx1 !== window.ogario.playerNick) {
            return "Leaderboard" === _0x8a2fx1 ? (window.ogario.displayLeaderboard && window.ogario.displayLeaderboard(), window.ogario.leaderboardIndex = 1, void((window.ogario.leaderboardHTML = ""))) : ":teams" !== window.ogario.gameMode && 0 == _0x8a2fx1.indexOf(window.ogario.leaderboardIndex + ".") && window.ogario.leaderboardIndex < 11 ? (window.ogario.leaderboardHTML += "#ffaaaa" == this.fillStyle ? "<span class=\"me main-color\">" + _0x8a2fx1 + "</span>" : 3 == _0x8a2fx1.indexOf(window.ogario.clanTag) || 4 == _0x8a2fx1.indexOf(window.ogario.clanTag) && 10 == window.ogario.leaderboardIndex ? "<span class=\"clan-color\">" + _0x8a2fx1 + "</span>" : "<span>" + _0x8a2fx1 + "</span>", void(window).ogario.leaderboardIndex++) : void(this)._fillText.apply(this, arguments)
        }
    }
}()
