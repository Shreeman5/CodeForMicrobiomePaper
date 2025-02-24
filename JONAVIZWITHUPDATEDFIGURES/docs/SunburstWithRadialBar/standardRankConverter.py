# Removes non-important ranks(including strain) from the original taxonomy.csv 
# file and outputs a new taxonomy.csv file. Keeps ranks like superkingdom,
# phylum, class, order, family, genus and species. Additionally, this script 
# removes superkingdoms like eukaryota, virus and archea but only keeps the 
# superkingdom bacteria. 
import pandas as pd

def modify_string(s):
    items = s.split(";")
    editedString = ''
    for item in items:

        if (item.startswith('sk__Eukaryota__2759')
            or item.startswith('sk__Viruses__10239')
            or item.startswith('sk__Archaea__2157')):
            return ''

        if (item.startswith('sk__') or 
            item.startswith('p__') or 
            item.startswith('c__') or 
            item.startswith('o__') or 
            item.startswith('f__') or 
            item.startswith('g__') or
            item.startswith('s__')):
            editedString += item + ';'

    if editedString.endswith(';'):
        editedString = editedString[:-1]
    else:
        editedString = editedString

    return editedString

#script
def main():
    filename = "taxonomy"
    inputFileName = "CSVs/"+filename+".csv"
    df = pd.read_csv(inputFileName)
    df['lineage'] = df['lineage'].apply(modify_string)
    values_to_keep = ['phylum', 'class', 'order', 'family', 'genus', 'species']
    df_filtered = df[df['rank'].isin(values_to_keep)]
    df_cleaned = df_filtered[df_filtered['lineage'] != '']
    outputFileName = "CSVs/AggregateFiles/"+filename+".csv"
    df_cleaned.to_csv(outputFileName, index=False)

if __name__ == "__main__":
    main()