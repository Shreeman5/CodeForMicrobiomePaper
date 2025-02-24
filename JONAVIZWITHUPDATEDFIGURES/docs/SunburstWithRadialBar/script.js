// Initial function that regulates other functions based on selected tab and samples
// Renders tabs and things inside tabs
// If 0 samples are selected, this renders nothing and throws an alert
function getSelectedOptions() {
    const selectElement = document.getElementById('multiSelect');
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);
    if (selectedOptions.length === 0){
        removeCheckBoxes()
        removeLegendDivs()
        removeT2Slider()
        removeT2Dropdown()
        removeVizDivs()
        alert('Select at least one sample')
    }
    else{
        removeCheckBoxes()
        renderCheckboxes(selectedOptions) 
        removeLegendDivs()
        renderLegendDivs()
        removeT2Slider()
        renderT2Slider(selectedOptions)
        removeT2Dropdown()
        renderT2Dropdown()
        
        removeVizDivs()
        renderVizDivs(selectedOptions.length)
        
        let sunburst = new Sunburst(35, 65, "sk__Bacteria__2", selectedOptions, [], 'new')
        sunburst.getData(selectedOptions)
    }
}

// remove tab 2 slider
function removeT2Slider(){
    const T1slider = document.querySelector('.slider')
    T1slider.innerHTML = ''
}

// renders tab 2 slider and changes visualization based on slider
function renderT2Slider(selectedOptions){
    let sliderSVG = d3.select('.slider').append("svg")
                    .attr("width", 1710)
                    .attr("height", 200)
                    .append("g")
                    .attr("transform", "translate(" + 0 + "," + 0 + ")");

    const x = d3.scaleLinear()
        .domain([0, 100])
        .range([20, 1610])
        .clamp(true);

    sliderSVG.append('text')
        .attr('class', 'slider-value')
        .attr('text-anchor', 'start')
        .attr('transform', `translate(${x(35)}, ${160})`)
        .attr("font-size", "48")
        .text("35");

    sliderSVG.append('text')
        .attr('class', 'slider-value')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${x(65)}, ${160})`)
        .attr("font-size", "48")
        .text("65");

    const slider = sliderSVG.append('g')
        .attr('class', 'slider')
        .attr('transform', `translate(0, ${100})`);

    slider.append('line')
        .attr('class', 'track')
        .attr('id', 'line1')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1]);

    slider.append('line')
        .attr('class', 'track-inset')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1]);

    slider.append('line')
        .attr('class', 'track-overlay')
        .attr('x1', x.range()[0])
        .attr('x2', x.range()[1])
        .call(d3.drag()
            .on('start.interrupt', () => slider.interrupt())
            .on('start drag', function(event) {
                const xPos = x.invert(event.x);
                if (draggingMin) {
                    minValue = Math.min(xPos, maxValue);
                    handleMin.attr('cx', x(minValue));
                } else {
                    maxValue = Math.max(xPos, minValue);
                    handleMax.attr('cx', x(maxValue));
                }
            })
            .on('end', () => {
                updateValues();
            }));


    let minValue = 35;
    let maxValue = 65;
    let draggingMin = true;

    const handleMin = slider.append('circle')
        .attr('class', 'handle')
        .attr('r', 18)
        .attr('id', 'circle1')
        .attr('cx', x(minValue))
        .call(d3.drag()
            .on('start', () => draggingMin = true)
            .on('drag', function(event) {
                minValue = Math.min(x.invert(event.x), maxValue);
                d3.select(this).attr('cx', x(minValue));
            })
            .on('end', () => {
                draggingMin = false;
                updateValues();
            }));

    const handleMax = slider.append('circle')
        .attr('class', 'handle')
        .attr('r', 18)
        .attr('id', 'circle2')
        .attr('cx', x(maxValue))
        .call(d3.drag()
            .on('start', () => draggingMin = false)
            .on('drag', function(event) {
                maxValue = Math.max(x.invert(event.x), minValue);
                d3.select(this).attr('cx', x(maxValue));
            })
            .on('end', () => {
                draggingMin = false;
                updateValues();
            }));

    function updateValues() {
        sliderSVG.selectAll('.slider-value').remove();

        sliderSVG.append('text')
            .attr('class', 'slider-value')
            .attr('text-anchor', 'start')
            .attr('transform', `translate(${x(minValue)}, ${160})`)
            .attr("font-size", "48")
            .text(minValue.toFixed(2));

        sliderSVG.append('text')
            .attr('class', 'slider-value')
            .attr('text-anchor', 'middle')
            .attr('transform', `translate(${x(maxValue)}, ${160})`)
            .attr("font-size", "48")
            .text(maxValue.toFixed(2));

        removeLegendDivs()
        renderLegendDivs()
        removeVizDivs()
        renderVizDivs(selectedOptions.length)
        let arr = [1, 2, 3, 4, 5, 6];
        let toRemove = findCheckedStatus()
        let removalPositions = removeAndMap(arr, toRemove)
        let sunburst = new Sunburst(minValue, maxValue, Tab2Viz.Tab2VizRootName, selectedOptions, removalPositions, 'old')
        sunburst.getData(selectedOptions)
    }
}

function getCurrentSliderValues() {
    const slider = d3.select('.slider');
    
    // Get the x scale from the existing slider
    const x = d3.scaleLinear()
        .domain([0, 100])
        .range([20, 1610])
        .clamp(true);
    
    // Get the positions of the handle circles
    const minCircle = slider.select('#circle1');
    const maxCircle = slider.select('#circle2');
    
    // Calculate the current values using the inverse of the x scale
    const minValue = x.invert(parseFloat(minCircle.attr('cx')));
    const maxValue = x.invert(parseFloat(maxCircle.attr('cx')));
    
    return {
        minValue: parseFloat(minValue.toFixed(2)),
        maxValue: parseFloat(maxValue.toFixed(2))
    };
}

// remove tab 2 dropdown
function removeT2Dropdown(){
    const elements = document.querySelectorAll('.custom-select-T2');
    elements.forEach(element => {
        element.style.visibility = 'hidden';
    });
    document.getElementById('selectInput-T2').value = '';
}

// render tab 2 dropdown
function renderT2Dropdown(){
    const elements = document.querySelectorAll('.custom-select-T2');
    elements.forEach(element => {
        element.style.visibility = 'visible';
    });
    document.getElementById('selectInput-T2').placeholder = 'Search for Actions';
}

// removes Checkboxes on all the tabs
function removeCheckBoxes(){
    const checkboxes = document.getElementById('checkboxes')
    checkboxes.innerHTML = ''
}

// find checkboxes clicked
function findCheckedStatus(){
    let arr = []
    const checkbox = document.querySelector('.checkbox-container #checkbox1');
    const isChecked = checkbox.checked;
    if (isChecked === false){
        arr.push(1)
    }
    const checkbox2 = document.querySelector('.checkbox-container #checkbox2');
    const isChecked2 = checkbox2.checked;
    if (isChecked2 === false){
        arr.push(2)
    }
    const checkbox3 = document.querySelector('.checkbox-container #checkbox3');
    const isChecked3 = checkbox3.checked;
    if (isChecked3 === false){
        arr.push(3)
    }
    const checkbox4 = document.querySelector('.checkbox-container #checkbox4');
    const isChecked4 = checkbox4.checked;
    if (isChecked4 === false){
        arr.push(4)
    }
    const checkbox5 = document.querySelector('.checkbox-container #checkbox5');
    const isChecked5 = checkbox5.checked;
    if (isChecked5 === false){
        arr.push(5)
    }
    const checkbox6 = document.querySelector('.checkbox-container #checkbox6');
    const isChecked6 = checkbox6.checked;
    if (isChecked6 === false){
        arr.push(6)
    }
    return arr
}

// find unchecked checkboxes
function removeAndMap(arr, toRemove) {
    let X = [];
    let mapping = arr.slice();
  
    toRemove.forEach(num => {
      let index = arr.indexOf(num);
      let mappedIndex = mapping.indexOf(num) + 1;
      if (mappedIndex > 1) {
        X.push([mappedIndex - 1, mappedIndex]);
      }
      else {
        X.push([0, 1]);
      }
      arr.splice(index, 1);
      mapping.splice(index, 1);
    });
    return X;
}

// Based on checkboxes clicked, renders visualizations
function checkboxClicked() {
    const selectElement = document.getElementById('multiSelect');
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);

    removeLegendDivs()
    renderLegendDivs()
    removeVizDivs()
    renderVizDivs(selectedOptions.length)
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(arr)
    let toRemove = findCheckedStatus()
    console.log("A:", toRemove)
    let removalPositions = removeAndMap(arr, toRemove)
    let sunburst = new Sunburst(35, 65, "sk__Bacteria__2", selectedOptions, removalPositions , 'old')
    sunburst.getData(selectedOptions)
}


// renders checkboxes
function renderCheckboxes(){
    const data = [
        { label: 'Level 1(Phylum)', value: '1', x: 800, y: 220},
        { label: 'Level 2(Class)', value: '2', x: 800, y: 280},
        { label: 'Level 3(Order)', value: '3', x: 800, y: 340 },
        { label: 'Level 4(Family)', value: '4', x: 800, y: 400},
        { label: 'Level 5(Genus)', value: '5', x: 800, y: 460},
        { label: 'Level 6(Species)', value: '6', x: 800, y: 520}
    ];

    const container = d3.select('#checkboxes');

    container.selectAll('div')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'checkbox-container')
        .style('left', d => `${d.x}px`)
        .style('top', d => `${d.y}px`)
        .each(function(d) {
            d3.select(this)
                .append('input')
                .attr('type', 'checkbox')
                .attr('id', "checkbox"+d.value)
                .attr('value', d.value)
                .attr('checked', true) 
                .on('change', function() {
                    checkboxClicked();
                });

            d3.select(this)
                .append('label')
                .attr('for', d.value)
                .text(d.label);
        });
}

// removes legend div
function removeLegendDivs(){
    var container = document.getElementById('legendDiv');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    var container2 = document.getElementById('legendDiv2');
    while (container2.firstChild) {
        container2.removeChild(container2.firstChild);
    }

    var container3 = document.getElementById('legendDiv3');
    while (container3.firstChild) {
        container3.removeChild(container3.firstChild);
    }

    var container4 = document.getElementById('legendDiv4');
    while (container4.firstChild) {
        container4.removeChild(container4.firstChild);
    }
}

// renders legend div
function renderLegendDivs(){
    let container = document.getElementById('legendDiv');
    let newDiv = document.createElement('div');
    newDiv.classList.add('dynamic-div-x');
    newDiv.style.left = '0px';
    newDiv.style.top = '0px';
    newDiv.style.width = '2990px';
    newDiv.style.height = '410px';
    container.appendChild(newDiv);

    let container2 = document.getElementById('legendDiv2');
    let newDiv2 = document.createElement('div');
    newDiv2.classList.add('dynamic-div-x2');
    newDiv2.style.left = '0px';
    newDiv2.style.top = '0px';
    newDiv2.style.width = '800px';
    newDiv2.style.height = '1100px';
    container2.appendChild(newDiv2);

    let container3 = document.getElementById('legendDiv3');
    let newDiv3 = document.createElement('div');
    newDiv3.classList.add('dynamic-div-x3');
    newDiv3.style.left = '0px';
    newDiv3.style.top = '0px';
    newDiv3.style.width = '800px';
    newDiv3.style.height = '1100px';
    container3.appendChild(newDiv3);

    let container4 = document.getElementById('legendDiv4');
    let newDiv4 = document.createElement('div');
    newDiv4.classList.add('dynamic-div-x4');
    newDiv4.style.left = '0px';
    newDiv4.style.top = '0px';
    newDiv4.style.width = '800px';
    newDiv4.style.height = '1100px';
    container4.appendChild(newDiv4);
}


// removes viz div
function removeVizDivs(){
    var container = document.getElementById('allDivs');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// renders viz div based on selected tab and numberOfDivs
function renderVizDivs(numberOfDivs){
    let container = document.getElementById('allDivs');
    let x = 0
    let y = 0
    if (numberOfDivs >= 1){
        numberOfDivs = 6
    }
    else{
        numberOfDivs = 0
    }

    for (let i = 0; i < numberOfDivs; i++) {
        let newDiv = document.createElement('div');
        
        newDiv.classList.add('dynamic-div-' + i);
        
        let width = 1150;
        let height = 1220;
        if (i === 5){
            width = 3120
            height = 1220
        }
        
        newDiv.style.position = 'absolute';
        newDiv.style.left = x + 'px';
        newDiv.style.top = y + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        
        container.appendChild(newDiv);
        
        if ((i + 1) % 3 === 0) { 
            x = 0;
            y += height;
        } else { 
            x += width;
        }

        if (i === 4){
            x = 0
            y = 2440
        }
    }
}



