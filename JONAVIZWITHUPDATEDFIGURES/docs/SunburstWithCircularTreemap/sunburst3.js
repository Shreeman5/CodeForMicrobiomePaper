// Depending on selected tab, retreive data and call appropriate class

class Sunburst{

    constructor(sliderMin, sliderMax, indicatorValue, rootName, selectedOptions, selectedRemovals, tab4Boolean){
        this.sliderMin = sliderMin
        this.sliderMax = sliderMax
        this.indicatorValue = indicatorValue
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.selectedRemovals = selectedRemovals
        this.tab4Boolean = tab4Boolean
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

        if (this.indicatorValue === 'tab1'){
            let tab1Viz = new Tab1Viz(this.sliderMin, this.sliderMax, this.rootName, this.selectedOptions, structureData, classNames, this.selectedRemovals)
            Tab1Viz.Tab1VizData = structureData
            tab1Viz.renderLegend()
            tab1Viz.render()
        }
        else if (this.indicatorValue === 'tab2'){
            let tab2Viz = new Tab2Viz(this.rootName, this.selectedOptions, structureData, classNames, this.selectedRemovals)
            Tab2Viz.Tab2VizData = structureData
            tab2Viz.renderLegend()
            tab2Viz.fillDropDown()
        }
        else if (this.indicatorValue === 'tab3'){
            let tab3Viz = new Tab3Viz(this.sliderMin, this.sliderMax, this.rootName, this.selectedOptions, structureData, classNames, this.selectedRemovals)
            Tab3Viz.Tab3VizData = structureData
            tab3Viz.renderLegend()
            tab3Viz.fillDropDown()
        }
        else if (this.indicatorValue === 'tab4'){
            let tab4Viz = new Tab4Viz(this.sliderMin, this.sliderMax, this.rootName, this.selectedOptions, structureData, classNames, this.selectedRemovals, this.tab4Boolean)
            Tab4Viz.Tab4VizData = structureData
            tab4Viz.renderLegend()
            tab4Viz.fillDropDown()
        }
        else if (this.indicatorValue === 'tab5'){
            let tab5Viz = new Tab5Viz(this.sliderMin, this.sliderMax, this.rootName, this.selectedOptions, structureData, classNames, this.selectedRemovals)
            Tab5Viz.Tab5VizData = structureData
            tab5Viz.renderLegend()
            tab5Viz.render()
        }
        else if (this.indicatorValue === 'tab6'){
            let tab6Viz = new Tab6Viz(this.sliderMin, this.sliderMax, this.rootName, this.selectedOptions, structureData, classNames, this.selectedRemovals)
            Tab6Viz.Tab6VizData = structureData
            tab6Viz.renderLegend()
            tab6Viz.render()
        }
        else if (this.indicatorValue === 'tab7'){
            let tab7Viz = new Tab7Viz(this.rootName, this.selectedOptions, structureData, classNames, this.selectedRemovals)
            Tab7Viz.Tab7VizData = structureData
            tab7Viz.renderLegend()
            tab7Viz.fillDropDown()
        }
    }

    // retreive data based on tab
    async getData(selectedSamples, tabValue){
        try {
            const structureData = await getAllData(selectedSamples,tabValue);
            this.rendering(structureData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

// async function to get data
async function getAllData(selectedSamples,tabValue) {
    try {
        let responseArray = []
        let response = await fetch("taxonomy.json");
        let jsonData = await response.json();
        responseArray.push(jsonData)
        let csvData = await d3.csv('CSVs/Diseases.csv')
        responseArray.push(csvData)

        if (tabValue === 'tab1' || tabValue === 'tab2' || tabValue === 'tab3' || tabValue === 'tab4' || tabValue === 'tab6' || tabValue === 'tab7'){

            if (tabValue === 'tab3' || tabValue === 'tab4'){
                let csvData2 = await d3.csv('CSVs/Actions.csv')
                responseArray.push(csvData2)
            }

            for (let i = 0; i < selectedSamples.length; i++){
                let csvData3 = await d3.csv("CSVs/AggregateFiles/"+selectedSamples[i]+"_aggregate.csv")
                responseArray.push(csvData3)
            }
        }
        else{
            if (tabValue === 'tab5'){
                let csvData4 = await d3.csv("CSVs/AggregateFiles/bowel_cancer_aggregate.csv")
                responseArray.push(csvData4)
                let csvData5 = await d3.csv("CSVs/AggregateFiles/cirrhosis_aggregate.csv")
                responseArray.push(csvData5)
                let csvData6 = await d3.csv("CSVs/AggregateFiles/crohns_aggregate.csv")
                responseArray.push(csvData6)
                let csvData7 = await d3.csv("CSVs/AggregateFiles/diarrhea_aggregate.csv")
                responseArray.push(csvData7)
                let csvData8 = await d3.csv("CSVs/AggregateFiles/healthy_aggregate.csv")
                responseArray.push(csvData8)
                let csvData9 = await d3.csv("CSVs/AggregateFiles/parkinsons_aggregate.csv")
                responseArray.push(csvData9)
            }
        }
        return responseArray;

    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}










