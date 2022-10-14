import pandas as pd
    
def stations():
    
    # Extracting charging stations csv file into dataframe
    charging_stations = "Data/Electric and Alternative Fuel Charging Stations.csv"
    Charging_stations_df = pd.read_csv(charging_stations, low_memory=False)
    Charging_stations_df.head()
    
    # Clean Sales dataset by dropping PHEV Powertrain
    Cleaned_Charging_stations_df=Cleaned_Charging_stations_df= Charging_stations_df = Charging_stations_df.fillna(0)
    
    Cleaned_Charging_stations_df=Cleaned_Charging_stations_df.drop(columns=['Intersection Directions','Plus4','Station Phone','Status Code','Expected Date','Access Days Time','Cards Accepted','BD Blends','NG Fill Type Code','NG PSI','EV Level1 EVSE Num','EV Level2 EVSE Num','EV DC Fast Count','EV Other Info','EV Network','EV Network Web','ID','Owner Type Code','Federal Agency ID','Federal Agency Name','Hydrogen Status Link','NG Vehicle Class','LPG Primary','E85 Blender Pump','EV Connector Types','Intersection Directions (French)','Access Days Time (French)','BD Blends (French)','Groups With Access Code (French)','Hydrogen Is Retail','Access Detail Code','Federal Agency Code','CNG Dispenser Num','CNG On-Site Renewable Source','CNG Total Compression Capacity','CNG Storage Capacity','LNG On-Site Renewable Source','E85 Other Ethanol Blends','EV Pricing (French)','LPG Nozzle Types','Hydrogen Pressures','Hydrogen Standards','CNG Fill Type Code','CNG PSI','CNG Vehicle Class','LNG Vehicle Class'])

    Cleaned_Charging_stations_df=Cleaned_Charging_stations_df.loc[(Cleaned_Charging_stations_df['Fuel Type Code'] == 'ELEC') & (Cleaned_Charging_stations_df['Country'] == 'US')].reset_index()
    Cleaned_Charging_stations_df.head()
    
    return Cleaned_Charging_stations_df.to_dict('split')