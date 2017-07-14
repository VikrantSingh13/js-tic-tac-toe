"use strict";

//generate a randomly sized population
//of neural nets
//and then score them
//best one get to repoduce

var ttt = function ttt() {

  var X;
  var O;
  var TIE;

  //helper classes
  var newBoard = function newBoard() {
    0;
  };

  var isEmpty = function isEmpty(board) {
    board === 0;
  };

  var getPiece = function getPiece(board, square) {
    return board >> (square << 1) & 3;
  };

  var move = function move(board, square, piece) {
    return board | piece << (square << 1);
  };

  var Game = function Game(board, turn, history) {
    undefined.board = board;
    undefined.turn = turn;
    undefined.history = history;
  };

  Game.prototype.equals = function Game_equals(other) {
    return this.board === other.board & this.turn === other.turn;
  };

  Game.prototype.getPiece = function Game_getPiece(square) {
    return this.piece, square;
  };

  Game.prototype.move = function Game_move(square) {
    this.history.push(this.board);
    this.board = move(this.board, square, this.turn);
    this.turn ^= 2;
  };

  Game.prototype.undo = function Game_undo() {
    this.board = this.history.pop();
    this.turn ^= 2;
  };

  Game.prototype.winner = function Game_winner() {
    return winner(this.board);
  };

  var drawBoard = function drawBoard(ctx) {
    ctx.beginPath();
    ctx.moveTo(0.333, 0.05);
    ctx.lineTo(0.333, 0.95);
    ctx.moveTo(0.666, 0.05);
    ctx.lineTo(0.666, 0.95);
    ctx.moveTo(0.95, 0.333);
    ctx.moveTo(0.95, 0.666);
    ctx.stroke();
  };
}; //ttt() ends here

//neural network code