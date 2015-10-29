import pandas as pd
import glob
from IPython.display import HTML

def amenity_list():
    """
    Return list of amenity files in the './data' 
    directory. Returns something like:
    
      ['atm', 'bar', 'bus_station', ...]
      
    """
    def fname(fullname):
        return fullname.split('/')[-1].split('.')[0]

    assert(fname('./data/atm.tsv') == 'atm')
    
    fullnames = glob.glob("./data/*.tsv")
    return [fname(x) for x in fullnames]

def lines_in_file(am_name):
    """
    Count number of lines in file './data/<am_name>.tsv
    """
    f = open('./data/' + am_name + '.tsv', 'r')
    content = f.readlines()
    f.close()
    return len(content)

def am_table():
    """
    Return table with columns:
    
       ----------------------------------------
       | amenity   | first entry  |  count    |
       | (string)  | (string)     |  int      |
       ----------------------------------------
       
    """
    amenities = amenity_list()
    
    amenity_counts = [lines_in_file(am) for am 
                                        in amenities]

    df = pd.DataFrame({
            'amenity': amenities,
            'count': amenity_counts
    }).sort_values(by = 'count', ascending = False)

    return df
