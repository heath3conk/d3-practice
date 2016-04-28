var gratitudesData = [
  { gratitude: "family",
    frequency: 8 },
  { gratitude: "friends",
    fraquency: 8 },
  { gratitude: "coffee",
    frequency: 7 },
  { gratitude: "sleep",
    fraquency: 6 },
  { gratitude: "good food",
    frequency: 7 },
  { gratitude: "conversations",
    fraquency: 6 },
  { gratitude: "books",
    frequency: 6 },
  { gratitude: "nice weather",
    fraquency: 5 },
  { gratitude: "comfy chairs",
    frequency: 4 },
  { gratitude: "public transportation",
    fraquency: 2 }  
]

var barData = [20, 50, 75, 102]

var height = 800
var width = 800
var barWidth = 50
var barOffset = 5
var colors = d3.scale.linear()
  .domain([0, gratitudesData.length])
  .range(['#283AB2', '#68B235'])


d3.select('#chart').append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('background', '#c9d7d6')
.selectAll('circle').data(gratitudesData)
  .enter().append('circle')
  .style('fill',function(d,i){
    return colors(i)
  })
  .attr('cx', function(d, i){
    return i + d.frequency*10 + 5
  })
  .attr('cy', function(d, i){
    return i + d.frequency*10 + 5
  })
  .attr('r', function(d) {
    return d.frequency*10
  })