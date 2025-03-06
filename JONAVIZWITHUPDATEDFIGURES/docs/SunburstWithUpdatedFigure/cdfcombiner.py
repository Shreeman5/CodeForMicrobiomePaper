import pandas as pd

# Load the CSV files
file1_path = "CSVs/AggregateFiles/ERR719231_bacteria_filtered_before-action.csv"
file2_path = "CSVs/AggregateFiles/SRR5936079_bacteria_filtered_Cheese.csv"
file3_path = "CSVs/AggregateFiles/SRR5936079_bacteria_filtered_Cow'S Milk.csv"
file4_path = "CSVs/AggregateFiles/SRR5936079_bacteria_filtered_Plant-Based Diet.csv"
file5_path = "CSVs/AggregateFiles/SRR5936079_bacteria_filtered_Red Wine.csv"
file6_path = "CSVs/AggregateFiles/ERR262943_bacteria_filtered_Gluten-Free Diet.csv"
file7_path = "CSVs/AggregateFiles/ERR262943_bacteria_filtered_Mediterranean Diet.csv"
file8_path = "CSVs/AggregateFiles/ERR262943_bacteria_filtered_Probiotic Containing Bifidobacterium.csv"
file9_path = "CSVs/AggregateFiles/ERR262943_bacteria_filtered_Proinflammatory Diet.csv"



df1 = pd.read_csv(file1_path)
df2 = pd.read_csv(file2_path)
df3 = pd.read_csv(file3_path)
df4 = pd.read_csv(file4_path)
df5 = pd.read_csv(file5_path)
df6 = pd.read_csv(file6_path)
df7 = pd.read_csv(file7_path)
df8 = pd.read_csv(file8_path)
df9 = pd.read_csv(file9_path)


# Ensure the relevant columns exist in both files
if "ncbi_taxon_id" in df1.columns and "CDF" in df1.columns and "ncbi_taxon_id" in df2.columns and "CDF" in df2.columns and "ncbi_taxon_id" in df3.columns and "CDF" in df3.columns and "ncbi_taxon_id" in df4.columns and "CDF" in df4.columns :
    # Merge data based on ncbi_taxon_id, keeping all records from df1
    df1["Cheese"] = df1["ncbi_taxon_id"].map(df2.set_index("ncbi_taxon_id")["CDF"]).fillna("n/a")
    df1["CowMilk"] = df1["ncbi_taxon_id"].map(df3.set_index("ncbi_taxon_id")["CDF"]).fillna("n/a")
    df1["PlantBasedDiet"] = df1["ncbi_taxon_id"].map(df4.set_index("ncbi_taxon_id")["CDF"]).fillna("n/a")
    df1["RedWine"] = df1["ncbi_taxon_id"].map(df5.set_index("ncbi_taxon_id")["CDF"]).fillna("n/a")
    df1["GlutenFreeDiet"] = df1["ncbi_taxon_id"].map(df6.set_index("ncbi_taxon_id")["CDF"]).fillna("n/a")
    df1["MediterraneanDiet"] = df1["ncbi_taxon_id"].map(df7.set_index("ncbi_taxon_id")["CDF"]).fillna("n/a")
    df1["ProbioticContainingBifidobacterium"] = df1["ncbi_taxon_id"].map(df8.set_index("ncbi_taxon_id")["CDF"]).fillna("n/a")
    df1["ProinflammatoryDiet"] = df1["ncbi_taxon_id"].map(df9.set_index("ncbi_taxon_id")["CDF"]).fillna("n/a")
    
    # Save the updated file
    updated_file_path = "ERR719231_aggregate.csv"
    df1.to_csv(updated_file_path, index=False)
    print(f"Updated file saved as: {updated_file_path}")
else:
    print("Error: Required columns are missing in one or both files.")