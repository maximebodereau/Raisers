/**
 * Created by maximebodereau on 15/02/15.
 */

G.F.loadMain = function () { this.AI = G.F.mainAI; };
G.F.mainAI = function () {};
G.F.shipAI = function () {};
G.F.bulletAI = function () {};
G.F.explosionAI = function (cmd) {};

G.makeBlock('main', G.F.loadMain).loadBlock('main');