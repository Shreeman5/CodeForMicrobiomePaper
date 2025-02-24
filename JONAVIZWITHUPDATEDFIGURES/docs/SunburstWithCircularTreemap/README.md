# SunburstWithCircularTreemap

Most of the code was generated in chatGPT but the author Shreeman Gautam fine tuned the code. Citation: OpenAI. (2024). ChatGPT (GPT-4) [Large language model]. Available from https://chat.openai.com/.

Step 1: Do 'python3 standardRankConverter.py'. This cleans the 'taxonomy.csv' file(CSVs/) such that non-important ranks(including strain) are removed. The new 'taxonomy.csv' file is at CSVs/AggregateFiles/.

Step 2: Do 'python3 csv_to_json.py'. This converts the taxonomy.csv file(CSVs/AggregateFiles/) to taxonomy.json.

Step 3: Convert toporganisms.xlsx to Actions.csv and Diseases.csv using ChatGPT or any online tool you like. Use this prompt in ChatGPT: 'convert this xlsx file to two csv files'. ChatGPT will ask you to upload toporganisms.xlsx and after you upload it, it will convert the xlsx file to Actions.csv and Diseases.csv. Store these files at CSVs/.

Step 4: Open this folder in Visual Studio Code. Right click on 'sunburst.html' --> 'Open With Live Server' to render the visualizations in your local machine.  If that option does not exist for you, check whether the "Live Server" extension is installed in VS Code. You can check by going to the Extensions view('Ctrl+Shift+X' for Windows and Linux, 'Cmd+Shift+X' for macOS) and searching for "Live Server" by Ritwick Dey. If it's not installed, click the "Install" button. Optionally, restart Visual Studio code.

Step 5: Select one or multiple options under 'Choose your samples'. Press 'Submit' to start the visualization for the selected samples. Wait for the first tab to render. After the first tab renders, you can play around with the various functionalities(sliders, checkboxes, dropdowns) on all the 7 tabs. Please note that rendering may take time(primarily dependent on how many samples were selected) so please be patient. 

Here is some information on the tabs:

Tab 1: Shows all organisms for all the selected samples. [Sunburst]

Tab 2: Shows all the indicator organisms for selected disease for selected samples. [Sunburst]

Tab 3: Shows qualitative changes in organism abundance for all given samples given an action. Note that twice the number of samples are rendered here, one before and the other after. So, if 2 samples are selected, 4 sunbursts are shown. [Sunburst]

Tab 4: Show quantitative changes in organism abundance for all given samples given action(s). Note that twice the number of samples are rendered here, one before and the other after. So, if 2 samples are selected, 4 sunbursts are shown. [Sunburst]

Tab 5: Shows an aggregate view of all the organisms that a diseased or healthy sample may contain. As of right now, 6 aggregate samples are shown. [Sunburst]

Tab 6: Shows all organisms for all the selected samples. [Circular Treemap]

Tab 7: Shows all the indicator organisms for selected disease for selected samples. [Circular Treemap]








