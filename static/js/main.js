
    let slider = createD3RangeSlider(0, 100, "#slider-container");
	slider.onChange(function(newRange){
                d3.select("#range-label").html(newRange.begin + " &mdash; " + newRange.end);
            });

            slider.range(0,10);
