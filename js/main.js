
$('form').submit(function(e) {
e.preventDefault();
let $g = $('#cost').val();
let $c = $('#currentgold').val();
let $smileygold = $('#smileygold').val();

const d = $g/200;
const w = Math.floor(d/7) * $smileygold;
const result = Math.ceil(($g - w - $c)/200);
//console.log('g=' + $g);
//console.log('d=' + d);
//console.log('w=' + w);
$('#result').text(result)
});