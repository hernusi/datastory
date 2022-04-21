      /* Scrollytelling code goes under here */
      d3.selectAll("#a-1, #a-2, #a-3").classed('hidden', true)

      d3.select("#step-one").on('stepin', function(e) {
        /* console.log("got to step one")*/
        d3.selectAll("#a-1, #a-2, #a-3").classed('hidden', false)
      })

      d3.select("#step-two").on('stepin', function(e) {
        d3.selectAll("#a-1, #a-2, #a-3").classed('hidden', true)
         /*console.log("got to step two")*/
        d3.selectAll("[data-name='champs'] path").style('stroke', 'red')
        d3.selectAll("[data-name='champs'] path").style('stroke-width', '2')
      })

      d3.select("#step-one").on('stepout', function(e) {
        if(e.detail.direction == 'up') {
          d3.selectAll("#a-1, #a-2, #a-3").classed('hidden', true)
          d3.selectAll("[data-name='champs'] path").style('stroke', 'none')
          d3.selectAll("[data-name='champs'] path").style('stroke-width', '0')
        }
      })

      
      d3.select("#step-two").on('stepout', function(e) {
        if(e.detail.direction == 'up') {
          d3.selectAll("#a-1, #a-2, #a-3").classed('hidden', true)
          d3.selectAll("[data-name='champs'] path").style('stroke', 'none')
          d3.selectAll("[data-name='champs'] path").style('stroke-width', '0')
        }
      })

      d3.select("#step-three").on('stepin', function(e) {
        d3.selectAll("#a-1, #a-2, #a-3").classed('hidden', true)
         /*console.log("got to step two")*/
        d3.selectAll("[data-name='champs'] path").style('stroke', 'none')
        d3.selectAll("[data-name='champs'] path").style('stroke-width', '0')
      })


      d3.select("#step-zero").on('stepout', function(e) {
        d3.selectAll("#a-1, #a-2, #a-3").classed('hidden', true)
        d3.selectAll("[data-name='champs'] path").style('stroke', 'none')
        d3.selectAll("[data-name='champs'] path").style('stroke-width', '0')
      })