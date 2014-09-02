/*global eth, env */

'use strict';

console.log = env.note;
$(document).ready(function () {
    console.log('start');
    $('#coinbase').html(eth.coinbase);
    $('#is_listening').html(eth.listening ? 'true' : 'false');
    $('#is_mining').html(eth.mining ? 'true' : 'false');
    console.log('coinbase ' + eth.coinbase);

    console.log(eth.toDecimal(eth.balanceAt(eth.secretToAddress(eth.key))));

    $('#balance').html(eth.toDecimal(eth.balanceAt(eth.coinbase)));

    eth.watch({altered: eth.secretToAddress(eth.key)}).changed(function() {
        $('#balance').html(eth.toDecimal(eth.balanceAt(eth.secretToAddress(eth.key))));
      });

    setInterval(function () {
        $('#is_listening').html(eth.listening ? 'true' : 'false');
        $('#is_mining').html(eth.mining ? 'true' : 'false');
      }, 1000);
    $('.footer').html(navigator.userAgent);
    console.log('stop');
  });
