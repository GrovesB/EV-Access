import pandas as pd

def charger():
    ev_charger_file = "Data/EV Charger.xlsx"
    ev_charger_df = pd.read_excel(ev_charger_file)
    
    ev_charger_df.dropna(inplace=True)
    
    return ev_charger_by_year.to_dict("split")
    