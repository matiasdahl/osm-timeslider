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
    Return table shown in README.md
    """
    amenity_counts = [lines_in_file(am) for am 
                                        in amenity_list()]

    df = pd.DataFrame({
            'amenity': amenity_list(),
            'count': amenity_counts
    }).sort_values(by = 'count', ascending = False)

    def am_wiki_url(am_name):
        return '<a href="https://' \
        + 'wiki.openstreetmap.org/wiki/Tag:amenity%3D' \
        + am_name + '">' \
        + 'link' + "</a>"

    def tag_info_url(am_name):
        return '<a href="https://' \
        + 'taginfo.openstreetmap.org/tags/amenity=' \
        + am_name + '">' \
        + 'link' + "</a>"

    def link_to_wiki(row):
        return am_wiki_url(row['amenity'])

    def link_to_taginfo(row):
        return tag_info_url(row['amenity'])

    df['taginfo link'] = df.apply(link_to_taginfo, axis = 1)
    df['OSM wiki'] = df.apply(link_to_wiki, axis = 1)

    pd.options.display.max_colwidth = 10000

    return df
