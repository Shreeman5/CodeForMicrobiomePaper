// Depending on selected tab, retreive data and call appropriate class
class Sunburst{


    constructor(sliderMin, sliderMax, rootName, selectedOptions, selectedRemovals, tab2Boolean){
        this.sliderMin = sliderMin
        this.sliderMax = sliderMax
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.selectedRemovals = selectedRemovals
        this.tab2Boolean = tab2Boolean
    }

    // call appropriate class based on selected tab
    rendering(structureData){
        var container = document.getElementById('allDivs');
        var divs = container.getElementsByTagName('div');
        var classNames = [];
        for (var i = 0; i < divs.length; i++) {
            var classes = '.'+divs[i].className.split(/\s+/);
            classNames = classNames.concat(classes);
        }
        let tab2Viz = new Tab2Viz(this.sliderMin, this.sliderMax, this.rootName, this.selectedOptions, structureData, classNames, this.selectedRemovals, this.tab2Boolean)
        Tab2Viz.Tab2VizData = structureData
        tab2Viz.renderLegend()
        tab2Viz.fillDropDown()
    }

    // retreive data based on tab
    async getData(selectedSamples, tabValue){
        try {
            const structureData = await getAllData(selectedSamples);
            this.rendering(structureData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

// async function to get data
async function getAllData(selectedSamples) {
    try {
        let responseArray = []
        let response = await fetch("taxonomy.json");
        let jsonData = await response.json();
        responseArray.push(jsonData)
        let csvData = await d3.csv('CSVs/Diseases.csv')
        responseArray.push(csvData)
        let csvData4 = await d3.csv('CSVs/Actions.csv')
        responseArray.push(csvData4)
        for (let i = 0; i < selectedSamples.length; i++){
            let csvData3 = await d3.csv("CSVs/AggregateFiles/"+selectedSamples[i]+"_aggregate.csv")
            responseArray.push(csvData3)
        }
        return responseArray;

    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}










