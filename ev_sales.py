import pandas as pd

def sales():
    
    # Extracting Sales csv file into dataframe
    sales_file = "Data/IEA-EV-dataEV salesCarsHistorical.csv"
    sales_df = pd.read_csv(sales_file)
    sales_df.head()
    
    # Clean Sales dataset by dropping PHEV Powertrain
    sales_df=sales_df.loc[(sales_df['powertrain'] == 'BEV')].reset_index()
    sales_df.head()
    
    return sales_df.to_dict('split')