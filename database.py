
import pandas as pd
import numpy as np

df = pd.read_csv('geonames-all-cities-with-a-population-1000.csv', sep=';', header=0 ,low_memory=False)
df_city_country = df[['Name','Country name EN']]

